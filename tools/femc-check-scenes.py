"""Validate FEMC game data files without a browser (jsc). Usage:
  python3 tools/femc-check-scenes.py [--links id,id] [--all]
Loads every script femc-game.html loads (in order, plus any new data files present), then checks the new living-world-2
content (job scenes more, clubs, run-ins, variants, Persona extras) and the named links: syntax, faces that exist,
speakers with a portrait or a cast name, places with a background rule, choice options with text, ids unique."""
import json, os, re, subprocess, sys, tempfile, pathlib
ROOT = pathlib.Path('/Users/katarinagrande/Desktop/Narrative Universe Sites/my-works-hub')
JSC = '/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc'
html = (ROOT / 'femc-game.html').read_text()
srcs = [s.split('?')[0] for s in re.findall(r'<script src="([^"]+)"', html)]
srcs = [s for s in srcs if s.startswith('assets/femc/game/data') or s.startswith('assets/femc/game/links') or s.startswith('assets/femc/portraits/index')]
extra = sorted(str(x.relative_to(ROOT)) for x in (ROOT / 'assets/femc/game/data').glob('job-scenes-more*.js')) + ['assets/femc/game/data/clubs.js', 'assets/femc/game/data/living-runins.js',
         'assets/femc/game/data/living-variants.js', 'assets/femc/game/data/living-persona.js', 'assets/femc/game/links/mymelody.js']
for e in extra:
    if (ROOT / e).exists() and e not in srcs:
        srcs.insert(len(srcs) - 1 if e.startswith('assets/femc/game/links') else len(srcs), e)
# The epilogue's worlds (data/epi/<world>/, loaded on demand by epilogue.js, so not in the page): calendar first, then the rest.
EPI = sorted(str(x.relative_to(ROOT)) for x in (ROOT / 'assets/femc/game/data/epi').glob('*/*.js'))
EPI.sort(key=lambda f: (f.split('/')[-2], 0 if f.endswith('calendar.js') else 1, f))
srcs += [e for e in EPI if e not in srcs]
prelude = 'var window = this; var document = { currentScript: { src: "x" } }; var matchMedia = function(){ return { matches: false }; };\n'
out = prelude
for s in srcs:
    out += f'\n;try {{ load({json.dumps(str(ROOT / s))}); }} catch (e) {{ print("LOADERR {s}: " + e); }}\n'
out += r'''
print("JSON:" + JSON.stringify({
  portraits: window.FEMC_PORTRAITS, places: window.FEMC_GAME_PLACES, jobs: window.FEMC_GAME_JOBS,
  jobScenes: window.FEMC_GAME_JOB_SCENES, more: window.FEMC_GAME_JOB_SCENES_MORE || {}, clubs: window.FEMC_GAME_CLUBS || {},
  runins: window.FEMC_GAME_RUNINS || [], variants: window.FEMC_GAME_VARIANTS || {}, extras: window.FEMC_GAME_LINK_EXTRAS || {},
  links: (window.FEMC_GAME_LINKS || []).filter(function(l){ return l.status !== 'stub'; }),
  events: (window.FEMC_GAME_EVENTS || []).map(function(e){ return { id: e.id, cast: e.cast }; }),
  crush: window.FEMC_GAME_CRUSH || { tracks: {}, moments: [], world: {} },
  ambient: ((window.FEMC_GAME_TEXTS || {}).ambient || []).map(function(t){ return { id: t.id, crush: t.crush || null }; }),
  epi: window.FEMC_EPI_WORLDS || {}, stats: Object.keys((window.FEMC_GAME_STATS || {}).stats || {})
}));
'''
tmp = tempfile.NamedTemporaryFile('w', suffix='.js', delete=False); tmp.write(out); tmp.close()
r = subprocess.run([JSC, tmp.name], capture_output=True, text=True)
errs = [l for l in r.stdout.splitlines() if l.startswith('LOADERR')] + ([r.stderr] if r.stderr.strip() else [])
js = [l for l in r.stdout.splitlines() if l.startswith('JSON:')]
if not js:
    print('\n'.join(errs) or r.stdout[-2000:]); sys.exit(1)
D = json.loads(js[0][5:])
P = D['portraits']; links = {l['id']: l for l in D['links']}
cast = {'solar': 'Solar'}
for l in D['links']:
    cast[l['id']] = l.get('short'); cast.update(l.get('cast') or {})
for j in list(D['jobScenes'].values()) + list(D['more'].values()) + list(D['clubs'].values()):
    cast.update(j.get('cast') or {})
for e in D['events']:
    cast.update(e.get('cast') or {})
for r_ in D['runins']:
    cast.update(r_.get('cast') or {})
for m in D['crush'].get('moments', []):
    cast.update(m.get('cast') or {})
BASE_CAST = ['mitsuru-radio', 'porter', 'clerk', 'ikutsuki', 'teacher', 'fuuka', 'koromaru', 'ken', 'aigis', 'elizabeth', 'wren', 'kurosawa']
for c in BASE_CAST: cast.setdefault(c, c)
bg = D['places']['bg']
def bg_ok(place):
    return any((place and at[0] == '*' and at[1:] in place) or (place or '').startswith(at) for at, *_ in bg)
problems = []
def walk(lines, key, opts=None):
    if not isinstance(lines, list): problems.append(f'{key}: scene is not a list'); return
    for l in lines:
        if not isinstance(l, dict): problems.append(f'{key}: line is not an object: {l!r}'); continue
        if 's' in l:
            sp = l['s']
            if sp != 'solar' and sp not in P and sp not in cast: problems.append(f'{key}: speaker {sp} has no portrait and no cast name')
            f = l.get('f')
            if f and sp in P:
                b = re.sub(r'-\d+$', '', f)
                CLOSE = {'blushing': ['flustered', 'happy'], 'flustered': ['blushing', 'happy'], 'serious': ['sad', 'neutral'], 'happy': ['neutral']}
                if f not in P[sp] and b not in P[sp] and not any(x in P[sp] for x in CLOSE.get(b, [])):
                    problems.append(f'{key}: {sp}/{f} is not a portrait ({",".join(P[sp])})')
            if 't' not in l: problems.append(f'{key}: spoken line without t')
        if 'place' in l and l['place'] and not bg_ok(l['place']): problems.append(f'{key}: no background rule for place "{l["place"]}"')
        for k in ('then', 'else'):
            if k in l: walk(l[k], key)
        if 'choose' in l:
            for o in l['choose']:
                if not o.get('t'): problems.append(f'{key}: option without text')
                if opts == 'nonotes' and o.get('notes'): problems.append(f'{key}: job/club option carries notes')
                walk(o.get('then', []), key)
        if 'phone' in l:
            for m in l['phone']:
                if 'from' not in m or 't' not in m: problems.append(f'{key}: phone message needs from and t')
ids = set()
def uid(i, key):
    if not i: problems.append(f'{key}: missing id'); return
    if i in ids: problems.append(f'duplicate id {i}')
    ids.add(i)
jobids = {j['id'] for j in D['jobs']}
for jid, pack in list(D['more'].items()) + list(D['clubs'].items()):
    if pack is D['clubs'].get(jid) and jid not in [c['id'] for c in D['places'].get('clubs', [])]: problems.append(f'club pack {jid} has no places.js clubs entry')
    if pack is D['more'].get(jid) and jid not in jobids: problems.append(f'job pack {jid} has no jobs.js entry')
    for s in pack.get('shifts', []): uid(s.get('id'), jid); walk(s.get('scene'), f'{jid}/{s.get("id")}', 'nonotes')
    for s in pack.get('beats', []): uid(s.get('id'), jid); walk(s.get('scene'), f'{jid}/{s.get("id")}', 'nonotes')
    for s in pack.get('quiet', []): uid(s.get('id'), jid); walk(s.get('scene'), f'{jid}/{s.get("id")}', 'nonotes')
    if 'join' in pack: walk(pack['join'], f'{jid}/join', 'nonotes')
    op = pack.get('openers') or {}
    if pack.get('quiet') and sorted(map(int, op.keys())) != list(range(1, 13)): problems.append(f'{jid}: openers need every month (April to March; February and March since the year runs to March), got {sorted(op)}')
for r_ in D['runins']:
    uid(r_.get('id'), 'runin'); walk(r_.get('scene'), 'runin/' + str(r_.get('id')))
    if r_.get('who') not in links and r_.get('who') not in P: problems.append(f'runin {r_.get("id")}: who {r_.get("who")} unknown')
for lid, x in D['extras'].items():
    for md, h in (x.get('holidays') or {}).items(): walk(h.get('scene'), f'holiday/{lid}/{md}')
    for e in (x.get('lateNights') or []): walk(e.get('scene'), f'night/{e.get("id")}')
# Crushes (2026-10-23, data/crush*.js): moments, the world's lines and the texts' gates.
CR = D['crush']; TRACKS = set(CR.get('tracks', {})); PH = {'none', 'out', 'noticed', 'crush', 'puppy', 'almost', 'dating', 'faded'}
def gate_ok(g, key):
    for tid, ph in (g or {}).items():
        if tid not in TRACKS: problems.append(f'{key}: crush gate names unknown track {tid}')
        for x in ([ph] if isinstance(ph, str) else ph if isinstance(ph, list) else []):
            if x not in PH: problems.append(f'{key}: unknown phase {x}')
def crush_lines(lines, key):
    for l in lines or []:
        if not isinstance(l, dict): continue
        if 'ifCrush' in l: gate_ok(l['ifCrush'], key)
        if 'ifCrushed' in l: gate_ok(l['ifCrushed'], key)
        for k in ('then', 'else'): crush_lines(l.get(k), key)
        for o in l.get('choose', []) or []:
            for tid in (o.get('crush') or {}):
                if tid not in TRACKS: problems.append(f'{key}: choice crush names unknown track {tid}')
            crush_lines(o.get('then'), key)
for m in CR.get('moments', []):
    k = 'crush/' + str(m.get('id')); uid(m.get('id'), 'crush')
    if m.get('who') not in links: problems.append(f'{k}: who {m.get("who")} is not a link')
    if not m.get('optIn') and not m.get('crush'): problems.append(f'{k}: needs optIn or a crush gate')
    if m.get('optIn') and m['optIn'] not in TRACKS: problems.append(f'{k}: optIn names unknown track')
    if m.get('slot') not in ('early', 'morning', 'lunch', 'afternoon', 'after', 'evening', 'late'): problems.append(f'{k}: bad slot {m.get("slot")}')
    if not m.get('place') or not bg_ok(m['place']): problems.append(f'{k}: no background rule for place "{m.get("place")}"')
    gate_ok(m.get('crush'), k); walk(m.get('scene'), k); crush_lines(m.get('scene'), k)
for path, lst in CR.get('world', {}).items():
    for i, x in enumerate(lst):
        if not (isinstance(x, str) or x.get('t')): problems.append(f'world/{path}#{i}: no text')
        if isinstance(x, dict): gate_ok(x.get('crush'), f'world/{path}#{i}')
for t in D['ambient']:
    if t.get('crush'): gate_ok(t['crush'], 'text/' + t['id'])
# The epilogue's worlds (epilogue batch 1, 2026-10-27): each calendar's shape and dates, the money, routes, places with art,
# activities, variants, and every event's scene (its places checked against the world's own background rules).
import datetime
def epi_day(cal, md):
    m, d = map(int, md.split('/')); sm, sd = map(int, cal['start'].split('/')); y = cal['year']
    return (datetime.date(y if m >= sm else y + 1, m, d) - datetime.date(y, sm, sd)).days
EPI_COUNT = {}
for wid, w in D.get('epi', {}).items():
    k = f'epi/{wid}'; cal = w.get('calendar') or {}
    for key in ('year', 'start', 'end', 'slots', 'daySlots'):
        if key not in cal: problems.append(f'{k}: calendar has no {key}')
    if not all(key in w for key in ('money', 'routes', 'places', 'events')): problems.append(f'{k}: world.js needs money, routes, places and events'); continue
    try: last = epi_day(cal, cal['end'])
    except Exception as e: problems.append(f'{k}: bad start/end ({e})'); continue
    if last <= 0: problems.append(f'{k}: end is not after start')
    ids_ = {x['id'] for x in cal.get('slots', [])}
    for typ, lst in cal.get('daySlots', {}).items():
        if not lst or lst[0] != 'early' or any(x not in ids_ for x in lst): problems.append(f'{k}: daySlots.{typ} must start with early and use the calendar slots ({lst})')
    inr = lambda md: 0 <= epi_day(cal, md) <= last
    for md in list(cal.get('holidays', {})) + list(cal.get('events', {})) + cal.get('fullMoons', []) + [d for e in cal.get('exams', []) for d in e['days']] + list(cal.get('weather', {})):
        if not inr(md): problems.append(f'{k}: date {md} is outside the act')
    mo = w['money']
    if not mo.get('sign') or not isinstance(mo.get('start'), (int, float)): problems.append(f'{k}: money needs a sign and a start')
    if not w['routes'] or any(not r.get('id') for r in w['routes']): problems.append(f'{k}: routes need ids')
    if w.get('lockAfter') and not inr(w['lockAfter']): problems.append(f'{k}: lockAfter outside the act')
    wbg = w['places'].get('bg') or []
    wbg_ok = lambda place: any((place and at[0] == '*' and at[1:] in place) or (place or '').startswith(at) for at, *_ in wbg)
    for spot in ('home',) + (('school',) if 'school' in w['places'] else ()):
        if not wbg_ok((w['places'].get(spot) or {}).get('place')): problems.append(f'{k}: places.{spot} has no background rule')
    for a in w['places'].get('activities', []):
        if not a.get('id') or not a.get('name') or not isinstance(a.get('cost', 0), (int, float)): problems.append(f'{k}: activity {a.get("id")} needs id, name and a numeric cost')
        if not wbg_ok(a.get('place')): problems.append(f'{k}: activity {a.get("id")} place "{a.get("place")}" has no background rule')
        for st in (a.get('stats') or {}):
            if st not in D['stats']: problems.append(f'{k}: activity {a.get("id")} raises unknown stat {st}')
    mv = (w.get('variants') or {}).get('morning') or {}
    if not mv.get('school') and not mv.get('off'): problems.append(f'{k}: variants.morning needs school or off lines')
    saved_bg = bg; bg = wbg
    saved_cast = dict(cast); cast.update(w.get('cast') or {})
    for e in w['events'] + w.get('routines', []): cast.update(e.get('cast') or {})
    for e in w['events']:
        uid(e.get('id'), k)
        if not e.get('date') or not inr(e['date']): problems.append(f'{k}: event {e.get("id")} date {e.get("date")} outside the act')
        if e.get('place') and not wbg_ok(e['place']): problems.append(f'{k}: event {e.get("id")} place "{e["place"]}" has no background rule')
        if e.get('slot') not in ('early', 'after', 'evening', 'late'): problems.append(f'{k}: event {e.get("id")} slot {e.get("slot")}')
        walk(e.get('scene'), f'{k}/{e.get("id")}')
    # Batch 3: routines (daily-life format), home bonds' hangouts and the texts.
    for r_ in w.get('routines', []):
        uid(r_.get('id'), k)
        for md in [r_.get('after'), r_.get('until')]:
            if not md or not inr(md): problems.append(f'{k}: routine {r_.get("id")} needs after/until in the act ({md})')
        if r_.get('slot') not in ('early', 'after', 'evening', 'late'): problems.append(f'{k}: routine {r_.get("id")} slot {r_.get("slot")}')
        if not wbg_ok(r_.get('place')): problems.append(f'{k}: routine {r_.get("id")} place "{r_.get("place")}" has no background rule')
        walk(r_.get('scene'), f'{k}/{r_.get("id")}')
    evset = {e.get('id') for e in w['events']}; rids = {r['id'] for r in w['routes']}
    for bid, b in (w.get('bonds') or {}).items():
        if b.get('id') != bid or b.get('role') not in ('friend', 'rival'): problems.append(f'{k}: bond {bid} needs id = key and role friend / rival')
        if bid not in cast and bid not in P: problems.append(f'{k}: bond {bid} has no name')
        for h in b.get('hangouts', []):
            hk = f'{k}/{h.get("id")}'; uid(h.get('id'), k)
            for md in [h.get('after'), h.get('until')]:
                if md and not inr(md): problems.append(f'{hk}: date {md} outside the act')
            if any(x not in ('after', 'evening') for x in h.get('slots', ['after', 'evening'])): problems.append(f'{hk}: hangouts are After Class / Evening only')
            if not wbg_ok(h.get('place')): problems.append(f'{hk}: place "{h.get("place")}" has no background rule')
            for x in h.get('events', []):
                if x not in evset: problems.append(f'{hk}: waits on unknown event {x}')
            for x in [h.get('route'), h.get('noRoute')]:
                for y in ([x] if isinstance(x, str) else x or []):
                    if y not in rids: problems.append(f'{hk}: unknown route {y}')
            walk(h.get('scene'), hk)
    T = w.get('texts') or {}
    for t in T.get('texts', []) + T.get('ambient', []):
        uid(t.get('id'), k)
        if t.get('thread') not in (T.get('threads') or {}): problems.append(f'{k}: text {t.get("id")} thread {t.get("thread")} has no name')
        for md in [t.get('date'), t.get('from'), t.get('to')]:
            if md and not inr(md): problems.append(f'{k}: text {t.get("id")} date {md} outside the act')
        for m in t.get('msgs', []) + [x for o in t.get('reply', []) for x in o.get('then', [])]:
            if m.get('from') not in ('solar',) and m.get('from') not in cast and m.get('from') not in P: problems.append(f'{k}: text {t.get("id")} from {m.get("from")} has no name')
    def when_lines(lines):
        for l in lines or []:
            if isinstance(l, dict):
                for kk in ('then', 'else'): when_lines(l.get(kk))
                for o in l.get('choose') or []:
                    wv = o.get('when')
                    if wv is not None and (not isinstance(wv, dict) or not wv): problems.append(f'{k}: an option\'s when must be a condition object')
                    if isinstance(wv, dict) and wv.get('ifRouteOpen') and wv['ifRouteOpen'] not in rids: problems.append(f'{k}: when ifRouteOpen names unknown route {wv["ifRouteOpen"]}')
                    when_lines(o.get('then'))
    for e in w['events']: when_lines(e.get('scene'))
    cast = saved_cast
    bg = saved_bg
    # The glitch file (epilogue batch 2, glitch.js): kinds, stages, dates in the act, scene hooks, ambient pools.
    KINDS = {'tint', 'weather', 'clock', 'date', 'phone', 'map', 'face', 'sound', 'tear', 'name', 'hands'}
    gc, gl = w.get('glitch') or {}, w.get('glitches')
    if gl is None or not gc: problems.append(f'{k}: glitches.js needs glitch and glitches')
    gl = gl or []
    for md, n in (gc.get('floors') or {}).items():
        if not inr(md) or n not in range(5): problems.append(f'{k}: glitch floor {md}: {n} (a date in the act, stage 0-4)')
    for n, pool in (gc.get('ambient') or {}).items():
        if int(n) not in range(1, 5): problems.append(f'{k}: ambient pool for stage {n} (1-4)')
        for x in pool:
            if x.get('kind') not in KINDS: problems.append(f'{k}: ambient kind {x.get("kind")}')
    evids = {e.get('id') for e in w['events']} | {r.get('id') for r in w.get('routines', [])} | {h.get('id') for b in (w.get('bonds') or {}).values() for h in b.get('hangouts', [])}
    gids = set()
    for g in gl:
        uid(g.get('id'), f'{k}/glitches')
        gids.add(g.get('id'))
        if g.get('kind') not in KINDS: problems.append(f'{k}: glitch {g.get("id")} kind {g.get("kind")}')
        if g.get('stage', 0) not in range(5): problems.append(f'{k}: glitch {g.get("id")} stage {g.get("stage")}')
        for md in [g.get('day'), g.get('from'), g.get('to')] + list(g.get('days') or []):
            if md and not inr(md): problems.append(f'{k}: glitch {g.get("id")} date {md} outside the act')
        if g.get('scene') and g['scene'] not in evids: problems.append(f'{k}: glitch {g.get("id")} names unknown scene {g["scene"]}')
        if g.get('kind') == 'weather' and g.get('mode', 'rise') not in ('rise', 'hold'): problems.append(f'{k}: glitch {g.get("id")} weather mode')
    def glines(lines):
        for l in lines or []:
            if isinstance(l, dict):
                v = l.get('glitch')
                if isinstance(v, str) and v not in KINDS and v not in gids: problems.append(f'{k}: scene line glitch "{v}" is neither a kind nor a glitch id')
                for kk in ('then', 'else'): glines(l.get(kk))
                for o in l.get('choose') or []: glines(o.get('then'))
    for e in w['events'] + w.get('routines', []) + [h for b in (w.get('bonds') or {}).values() for h in b.get('hangouts', [])]: glines(e.get('scene'))
    for g in gl:
        if g.get('inline') and (g.get('scene') or any(g.get(x) for x in ('day', 'days', 'from', 'to', 'slot'))): problems.append(f'{k}: inline glitch {g.get("id")} carries screen gates')
    EPI_COUNT[wid] = {'days': last + 1, 'events': len(w['events']), 'routines': len(w.get('routines', [])), 'bonds': len(w.get('bonds') or {}),
                      'hangouts': sum(len(b.get('hangouts', [])) for b in (w.get('bonds') or {}).values()),
                      'texts': len((w.get('texts') or {}).get('texts', [])) + len((w.get('texts') or {}).get('ambient', [])),
                      'activities': len(w['places'].get('activities', [])), 'glitches': len(gl), 'stub': bool(w.get('stub'))}
want = sys.argv[sys.argv.index('--links') + 1].split(',') if '--links' in sys.argv else []
for lid in want:
    l = links.get(lid)
    if not l: problems.append(f'link {lid} missing'); continue
    for i, r_ in enumerate(l.get('ranks', [])): walk(r_.get('scene', []), f'{lid}/rank{i+1}')
    for i, h in enumerate(l.get('hangouts', [])): walk(h if isinstance(h, list) else h.get('scene', []), f'{lid}/hangout{i}')
    for i, h in enumerate(l.get('afterMax', [])): walk(h.get('scene', []), f'{lid}/after{i}')
    for md, h in (l.get('holidays') or {}).items(): walk(h.get('scene', []), f'{lid}/holiday {md}')
    if l.get('christmas'): walk(l['christmas'].get('scene', []), f'{lid}/christmas')
    if l.get('secret'): walk(l['secret'].get('scene', []), f'{lid}/secret')
    for i, h in enumerate(l.get('stretchHangouts', [])): walk(h if isinstance(h, list) else h.get('scene', []), f'{lid}/stretch{i}')
    for e in (l.get('lateNights') or []): walk(e.get('scene', []), f'{lid}/night {e.get("id")}')
    top = max(10, int(l.get('maxRank') or 10))  # the rank-15 links (2026-10-21) have maxRank: 15
    if len(l.get('ranks', [])) != top: problems.append(f'{lid}: {len(l.get("ranks", []))} ranks (maxRank {top})')
print('\n'.join(errs))
print('\n'.join(problems) if problems else 'OK: no problems')
print(json.dumps({'jobPacks': {k: {kk: len(v) for kk, v in p.items() if isinstance(v, list)} for k, p in D['more'].items()},
                  'clubs': {k: {kk: len(v) for kk, v in p.items() if isinstance(v, list)} for k, p in D['clubs'].items()},
                  'runins': len(D['runins']), 'crushMoments': {w: sum(1 for m in CR.get('moments', []) if m.get('who') == w) for w in sorted(TRACKS)},
                  'crushWorld': sum(len(v) for v in CR.get('world', {}).values()), 'epilogue': EPI_COUNT}))
