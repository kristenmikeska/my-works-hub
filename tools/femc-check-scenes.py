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
  ambient: ((window.FEMC_GAME_TEXTS || {}).ambient || []).map(function(t){ return { id: t.id, crush: t.crush || null }; })
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
                  'crushWorld': sum(len(v) for v in CR.get('world', {}).values())}))
