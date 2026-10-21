"""The five social stats (Knowledge, Courage, Proficiency, Charm, Kindness), played in an isolated headless Chrome
(femc-game.html, localhost, a throwaway profile; never the player's saves).

Checks: every stat raised by several real activities through the UI (Go Out reviews and confirms, the dorm's evening menu,
Solar's desk, a hired job's shift, a class question answered, books read at night, the cinema's weekly bill) plus the
passive sources (exams, Tartarus nights, full moons); a rank-up firing the sun level-up; the Status screen showing all five
(radar, cards, suns); the one-time migration of an old three-stat save (mid-December with jobs and Koromaru history: the
autosave, a slot, a backup code), never losing a rank; every `needs` gate in the game (links, choices, jobs, activities)
still passable, and passed by a migrated save that passed it before; the bond perks that waited on the five stats (Learning
Mode, Walkies, Kitchen Duty and its leftovers in a real Tartarus night, Editing Bay, Fishing Trip, Sewing Machine, Garden
Patch, Morning Stretch, Pilates Partner, Seven Croissants, Staff Shift); keyboard, pad, mouse and touch on the new menus; a
normal-playthrough simulation (some stats max by January, not all); screenshots at 1000x486, 375x812 and 1440x900; no
browser errors.

    python3 tests/femc_stats.py [--screenshots /absolute/dir]
"""
import base64, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-stats-'))
OUT.mkdir(parents=True, exist_ok=True)
SIZES = [('laptop', 1000, 486), ('phone', 375, 812), ('desktop', 1440, 900)]
STATS = ['knowledge', 'courage', 'proficiency', 'charm', 'kindness']
checks = []
raised = {k: [] for k in STATS}


def ok(cond, what):
    assert cond, what
    checks.append(what)


p = Page()


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
    p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': mobile, 'maxTouchPoints': 5} if mobile else {'enabled': False})


def shot(name):
    p.eval("document.querySelectorAll('.femc-dh').forEach(x=>x.remove());true")
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,400)))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def fits():
    return p.eval("document.documentElement.scrollWidth<=innerWidth && [...document.querySelectorAll('#g-main,.g-overlay:not(.out) .g-panel,.g-fm-body')].every(e=>e.scrollWidth<=e.clientWidth+1)")


def key(k, code=None):
    vk = {'Enter': 13, 'ArrowRight': 39, 'ArrowDown': 40, 'ArrowUp': 38, 'Escape': 27, ' ': 32}.get(k, 0)
    base = {'key': k, 'code': code or k, 'windowsVirtualKeyCode': vk}
    p.ws.call('Input.dispatchKeyEvent', {'type': 'keyDown', **base, **({'text': '\r'} if k == 'Enter' else {})})
    p.ws.call('Input.dispatchKeyEvent', {'type': 'keyUp', **base})


def pad(k):
    p.eval("(()=>{const e=new KeyboardEvent('keydown',{key:%s,bubbles:true,cancelable:true});e.fromPad=true;(document.activeElement||document.body).dispatchEvent(e)})();true" % json.dumps(k))


def center(sel):
    return p.eval(f"(()=>{{const e=document.querySelector({json.dumps(sel)});e.scrollIntoView({{block:'center'}});const r=e.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2]}})()")


def mouse(sel):
    x, y = center(sel)
    for t in ('mouseMoved', 'mousePressed', 'mouseReleased'):
        p.ws.call('Input.dispatchMouseEvent', {'type': t, 'x': x, 'y': y, 'button': 'left', 'clickCount': 1})


def tap(sel):
    x, y = center(sel)
    phone = p.eval("innerWidth<600")
    p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': True, 'maxTouchPoints': 5})
    p.ws.call('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': x, 'y': y}]})
    p.ws.call('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
    time.sleep(0.15)
    if not phone: p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': False})


def stats():
    return p.eval("({...FemcGame.S.stats})")


def delta(a, b):
    return {k: b.get(k, 0) - a.get(k, 0) for k in STATS if b.get(k, 0) != a.get(k, 0)}


def finish(limit=40):
    """Play whatever scene is up to its end (first choice each time), then dismiss level-up cards."""
    t0 = time.time()
    while time.time() - t0 < limit:
        st = p.eval("""(()=>{const sc=document.querySelector('.gs:not(.out)');
          if(sc){const c=sc.querySelector('.gs-choices button:not(:disabled)');if(c){c.click();return 'choice'}
            const t=sc.querySelector('.gs-title, .gs-card');if(t&&t.offsetParent){t.click()}
            sc.querySelector('[data-t=skip]')?.click();return 'scene'}
          const a=document.querySelector('.g-actcard, .gs-rank:not(.out)');if(a){a.click();return 'card'}
          const su=document.querySelector('.g-statup');if(su){su.click();return 'statup'}
          return 'done'})()""")
        if st == 'done':
            time.sleep(0.35)
            if p.eval("!document.querySelector('.gs:not(.out),.g-statup,.g-actcard,.gs-rank:not(.out)')"): return True
        time.sleep(0.12)
    raise TimeoutError('scene did not end')


SETUP = r"""window.T={
  at(day,slot,o={}){const G=FemcGame,S=G.S;S.day=G.dayOf(day);S.slot=slot;S.spent={};S.condition='good';S.yen=Math.max(S.yen,90000);
    Object.assign(S,o.S||{});G.save();return G.dayInfo().day},
  fresh(day,slot,o={}){const G=FemcGame;G.newGame();const S=G.S;S.phase='play';S.started=true;
    G.setSetting('text','instant');G.setSetting('music',0);G.setSetting('dateCard',false);G.setSetting('auto','off');
    S.events=G.D.events.map(e=>e.id);S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999};S.unlocked.tartarus=true;S.flags.armband=true;
    S.phone={threads:{},unread:{},done:G.D.texts.texts.map(t=>t.id),pending:{},invite:null,lastInvite:9999};
    ['arrived-hanni','arrived-hyein','arrived-jihoon','arrived-crew','arrived-cherry','joined-junpei'].forEach(f=>S.flags[f]=true);
    // Story-forced link ranks would play on their own when the slot moves on; count them as played. (Elizabeth's Sunday
    // Best then adds +1 to Sunday gains, so exact-gain checks below stay off Sundays.)
    for(const l of Object.values(G.LINKS))if(l.forced?.length)G.progress(l.id).rank=Math.max(...l.forced);
    Object.entries(o.ranks||{}).forEach(([id,r])=>{if(!S.met.includes(id))S.met.push(id);G.progress(id).rank=r});
    Object.assign(S.stats,o.stats||{});
    return this.at(day,slot)},
  // A day of the week (0 Sun ... 6 Sat) on or after md that's the given kind (school / off), with no exam and no trip.
  day(md,dow,kind){const G=FemcGame;for(let d=G.dayOf(md);d<G.dayOf(md)+120;d++){const i=G.dayInfo(d);if(i.dow===dow&&(!kind||i.type===kind)&&i.weather!=='rain'&&!['exam','trip'].includes(i.type))return i.md}return null}
};true"""

try:
    p.goto('femc-game.html')
    p.eval(SETUP)
    size(1440, 900)

    # ── 1. The five, as data: names, colors, five ranks each, rising thresholds, the order on the radar ──
    d = p.eval("FemcGame.D.stats")
    ok(list(d['stats'].keys()) == STATS, f"five stats in Kat's order: {list(d['stats'].keys())}")
    ok(all(len(s['ranks']) == 5 and len(s['at']) == 5 and s['at'][0] == 0 and all(a < b for a, b in zip(s['at'], s['at'][1:])) for s in d['stats'].values()), 'five ranks each, rising thresholds')
    ok(len({r for s in d['stats'].values() for r in s['ranks']}) == 25, 'all 25 rank names are distinct')
    P5 = {'Oblivious', 'Learned', 'Scholarly', 'Encyclopedic', 'Erudite', 'Milquetoast', 'Bold', 'Staunch', 'Dauntless', 'Lionhearted', 'Bumbling', 'Decent', 'Skilled', 'Masterful', 'Transcendent',
          'Existent', 'Head-Turning', 'Suave', 'Charismatic', 'Debonair', 'Inoffensive', 'Considerate', 'Empathetic', 'Selfless', 'Angelic'}
    ok(not P5 & {r for s in d['stats'].values() for r in s['ranks']}, 'no rank name copied from P5')
    ok(p.eval("FemcGame.statId('academics')==='knowledge' && (FemcGame.S.stats.knowledge=30, FemcGame.statRank('academics')===FemcGame.statRank('knowledge')) && !FemcGame.lacking({academics:2}) && (FemcGame.S.stats.knowledge=0, true)"), 'an old id (academics) still reads as Knowledge')
    ok(p.eval("FemcGame.S.sv===2 && Object.keys(FemcGame.S.stats).join()==='knowledge,courage,proficiency,charm,kindness'"), 'a new game starts with the five at 0')

    # ── 2. Every stat, raised by real activities through the UI ──
    p.eval("T.fresh('5/1','after');true")

    def go_act(area, aid, day, slot, via='click', expect=None, before_ui=None):
        p.eval(f"T.at('{day}','{slot}');document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut('{slot}','{area}');true")
        if before_ui: p.eval(before_ui)
        p.wait(f"!!document.querySelector('[data-act={aid}]')", 5)
        a = stats()
        prev = p.eval(f"FemcGame.activityInfo(FemcGame.actById('{aid}')).benefit")
        if via == 'mouse': mouse(f'[data-act={aid}]')
        elif via == 'touch': tap(f'[data-act={aid}]')
        elif via == 'key': p.eval(f"document.querySelector('[data-act={aid}]').focus();true"); key('Enter')
        else: p.eval(f"document.querySelector('[data-act={aid}]').click();true")
        p.wait("!!document.querySelector('.g-activity-preview:not(.out) [data-confirm]:not([disabled])')", 5)
        if via == 'key':
            p.wait("document.activeElement?.matches('.g-activity-preview:not(.out) [data-confirm]')", 3)
            key('Enter')
        else: p.eval("document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click();true")
        finish()
        dl = delta(a, stats())
        if expect: ok(dl == expect, f'{aid}: {dl} (preview: {prev})')
        for k in dl: raised[k].append(aid)
        return dl, prev

    school_mon, school_wed, school_tue = p.eval("[T.day('5/11',1,'school'),T.day('5/11',3,'school'),T.day('5/11',2,'school')]")
    sat, fri = p.eval("[T.day('5/16',6),T.day('5/15',5,'school')]")
    go_act('gekkoukan', 'library', school_mon, 'after', 'mouse', {'knowledge': 3})
    go_act('gekkoukan', 'tutoring', school_mon, 'after', 'key', {'kindness': 2, 'knowledge': 1})
    go_act('gekkoukan', 'schoolgarden', school_wed, 'after', expect={'kindness': 1, 'proficiency': 1})
    go_act('mall', 'cafestudy', school_wed, 'after', expect={'knowledge': 2})
    go_act('strip', 'hagakure', school_wed, 'evening', expect=None)
    go_act('strip', 'megabowl', school_wed, 'evening', expect={'courage': 3})
    go_act('strip', 'wildduck', school_wed, 'after', expect={'courage': 2})
    go_act('strip', 'electricbath', school_wed, 'evening', expect={'courage': 2})
    go_act('strip', 'bathhouse', school_wed, 'evening', expect={'charm': 2})
    go_act('mall', 'lateshow', fri, 'evening', expect={'courage': 3})
    go_act('mall', 'chagall', school_wed, 'after', expect={'charm': 2})
    go_act('mall', 'boutique', school_wed, 'evening', 'touch', {'charm': 3})
    go_act('mall', 'karaoke', school_wed, 'evening', expect={'charm': 2, 'courage': 1})
    go_act('mall', 'arcade', school_wed, 'after', expect={'proficiency': 1, 'courage': 1})
    go_act('mall', 'crane', school_wed, 'after', expect={'proficiency': 2})
    go_act('shrine', 'shrinesweep', school_wed, 'after', expect={'kindness': 2})
    go_act('port', 'beachclean', sat, 'after', expect={'kindness': 2})
    go_act('hospital', 'wardvisit', school_tue, 'after', expect={'kindness': 2, 'charm': 1})
    go_act('station', 'vending', school_wed, 'after', expect={'courage': 1})
    # The cinema's bill changes every week; the preview says what's on and the gain matches it.
    bill = p.eval("""(()=>{const G=FemcGame,a=G.actById('cinema'),out={};for(let d=G.dayOf('5/2');d<G.dayOf('8/30');d++){const i=G.dayInfo(d);if(i.dow!==6||['exam','trip'].includes(i.type))continue;const s=G.showing(a,d);if(!out[s.title])out[s.title]={md:i.md,stats:s.stats}}return out})()""")
    ok(len(bill) == 5, f'five films on rotation: {list(bill)}')
    for title, b in bill.items():
        dl, prev = go_act('mall', 'cinema', b['md'], 'after')
        ok(dl == b['stats'] and prev.startswith(f'Now showing: {title}'), f'cinema "{title}": {dl}, preview {prev!r}')
    # Alley: gated on Courage rank 2; locked below it, open at it.
    p.eval("T.at('%s','evening');FemcGame.S.stats.courage=14;FemcGame.save();FemcGameUI.goOut('evening','portisland');true" % school_wed)
    ok(p.eval("document.querySelector('[data-act=alley]').getAttribute('aria-disabled')==='true' && /Courage: Steady/.test(document.querySelector('[data-act=alley]').textContent)"), 'the back alley says it needs Courage: Steady')
    p.eval("FemcGame.S.stats.courage=15;FemcGame.save();true")
    go_act('portisland', 'alley', school_wed, 'evening', expect={'courage': 3})
    shot('goout-mall-desktop')
    p.eval("T.at('%s','after');FemcGameUI.goOut('after','mall');true" % school_wed)
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'area-mall-{name}')
        ok(fits(), f'the mall with its new places fits at {w}x{h}')
    size(1440, 900)

    # The dorm at night: Study, the kitchen, the roof garden, Koromaru, the desk (keyboard, pad, mouse, touch).
    def night(n, day, expect=None, via='click', desk=None):
        p.eval(f"T.at('{day}','evening');document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.evening();true")
        p.wait(f"!!document.querySelector('[data-n=\"{n}\"]')", 5)
        a = stats()
        sel = f'[data-n="{n}"]'
        if via == 'mouse': mouse(sel)
        elif via == 'touch': tap(sel)
        elif via == 'key': p.eval(f"document.querySelector('{sel}').focus();true"); key('Enter')
        elif via == 'pad': p.eval(f"document.querySelector('{sel}').focus();true"); pad('Enter')
        else: p.eval(f"document.querySelector('{sel}').click();true")
        if desk:
            p.wait(f"!!document.querySelector('.g-desk-ov:not(.out) [data-desk={desk}]')", 5)
            if via in ('key', 'pad'):
                # Arrow keys / the D-pad move through the projects; Enter / A picks one.
                for _ in range(12):
                    if p.eval(f"document.activeElement?.dataset.desk==='{desk}'"): break
                    (key('ArrowDown') if via == 'key' else pad('ArrowDown'))
                ok(p.eval(f"document.activeElement?.dataset.desk==='{desk}'"), f'{via}: focus reaches the desk project {desk}')
                (key('Enter') if via == 'key' else pad('Enter'))
            elif via == 'touch': tap(f'.g-desk-ov:not(.out) [data-desk={desk}]')
            else: p.eval(f"document.querySelector('.g-desk-ov:not(.out) [data-desk={desk}]').click();true")
        finish()
        dl = delta(a, stats())
        if expect is not None: ok(dl == expect, f'{n}{"/" + desk if desk else ""}: {dl}')
        for k in dl: raised[k].append(desk or n)
        return dl

    autumn = p.eval("T.day('9/1',3,'school')")
    night('study', autumn, {'knowledge': 2}, 'key')
    night('dorm:cook', autumn, {'proficiency': 1, 'kindness': 1}, 'mouse')
    night('dorm:roofgarden', autumn, {'kindness': 2}, 'pad')
    night('dorm:walkkoro', autumn, {'kindness': 2}, 'touch')
    night('desk', autumn, {'proficiency': 2}, 'key', 'sew')
    night('desk', autumn, {'proficiency': 2, 'knowledge': 1}, 'pad', 'fix')
    night('desk', autumn, {'proficiency': 1, 'courage': 1}, 'touch', 'retro')
    night('desk', autumn, {'proficiency': 1, 'charm': 1}, 'mouse', 'keys')
    ok(p.eval("T.at('5/1','evening');FemcGameUI.evening();!document.querySelector('[data-n=\"dorm:walkkoro\"]')"), 'Koromaru walks start once he lives at the dorm')
    p.eval("T.at('%s','evening');FemcGameUI.evening();true" % autumn)
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'evening-{name}')
        ok(fits(), f'the evening menu fits at {w}x{h}')
    p.eval("document.querySelector('[data-n=desk]').click();true")
    p.wait("!!document.querySelector('.g-desk-ov:not(.out)')", 3)
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'desk-{name}')
        ok(fits() and p.eval("[...document.querySelectorAll('.g-desk-ov [data-desk]')].every(b=>{const r=b.getBoundingClientRect();return r.width>100&&r.right<=innerWidth+1})"), f'the desk fits at {w}x{h}')
    key('Escape')
    p.wait("!document.querySelector('.g-desk-ov:not(.out)')", 3)
    size(1440, 900)

    # Books read at night (a chapter a night; the stats land when the last one is read).
    p.eval("FemcGame.S.books.owned.push('handmade','letters');FemcGame.save();true")
    total = {}
    for _ in range(5):
        dl = night('read', autumn)
        for k, v in dl.items(): total[k] = total.get(k, 0) + v
    ok(total == {'proficiency': 6, 'kindness': 4}, f'two new books read over five nights: {total}')
    raised['proficiency'].append('book: Handmade'); raised['kindness'].append('book: Letters to a Young Nurse')

    # A job: hire at the flower stall, work a shift (its scene plays; the choice's stat lands too).
    flower_day = p.eval("T.day('6/1',2,'school')")
    p.eval(f"T.at('{flower_day}','after');FemcGameUI.goOut('after','mall');true")
    p.eval("document.querySelector('[data-job=flowers]').click();true")
    p.wait("!!document.querySelector('.g-overlay:not(.out) [data-y]')", 3)
    p.eval("document.querySelector('.g-overlay:not(.out) [data-y]').click();true")
    p.wait("!!document.querySelector('[data-job=flowers]')", 3)
    a = stats()
    p.eval("document.querySelector('[data-job=flowers]').click();true")
    p.wait("!!document.querySelector('.g-activity-preview:not(.out) [data-confirm]')", 3)
    ok(p.eval("document.querySelector('.g-activity-preview:not(.out)').textContent.includes('Kindness +1, Proficiency +1')"), 'the shift preview names its stats')
    p.eval("document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click();true")
    finish()
    dl = delta(a, stats())
    ok(dl.get('kindness', 0) >= 1 and dl.get('proficiency', 0) >= 1 and p.eval("FemcGame.S.jobs.flowers.shifts===1"), f'a flower stall shift: {dl}')
    for k in dl: raised[k].append('job: flowers')
    # Every job's stats are the five (and each pays a mix).
    jobs = p.eval("FemcGame.D.jobs.map(j=>({id:j.id,stats:j.stats,needs:j.needs||null}))")
    ok(all(set(j['stats']) <= set(STATS) for j in jobs) and len(jobs) == 7, f'seven jobs, all on the five stats: {jobs}')
    raised['proficiency'] += [j['id'] for j in jobs if 'proficiency' in j['stats']]

    # Class: a teacher's question answered right through the UI (Knowledge +1, Charm +1).
    qday = p.eval("""(()=>{const G=FemcGame;for(let d=G.dayOf('5/12');d<G.dayOf('7/15');d++){const i=G.dayInfo(d);if(i.type!=='school')continue;
      const seed=Math.abs(Math.sin((d+1)*3.7));if(seed<0.42&&seed*1.7%1>0)return i.md}return null})()""")
    p.eval(f"T.at('{qday}','morning');FemcGame.S.classSeen=[];FemcGame.save();FemcGameUI.run();true")
    p.wait("!!document.querySelector('.g-quiz [data-a]')", 5)
    a = stats()
    right = p.eval("(()=>{const G=FemcGame,q=G.classQuestion();return q.correct})()")
    p.eval(f"document.querySelector('.g-quiz [data-a=\"{right}\"]').click();true")
    dl = delta(a, stats())
    ok(dl == {'knowledge': 1, 'charm': 1}, f'a class question answered right: {dl}')
    raised['knowledge'].append('class question'); raised['charm'].append('class question')
    shot('class-desktop')

    # Exams: the ranking board's top ten earns Knowledge and Charm; Knowledge carries the score.
    ex = p.eval("""(()=>{const G=FemcGame,id=Object.keys(G.D.q.exams)[0];G.S.exams={};const qs=G.D.q.exams[id].questions;
      G.S.stats.knowledge=200;G.S.exams[id]={answers:Object.fromEntries(qs.map(q=>[q.id,true])),posted:false};const a={...G.S.stats};const r=G.postExam(id);
      return {place:r.place,gain:Object.fromEntries(Object.keys(a).map(k=>[k,G.S.stats[k]-a[k]]).filter(([,v])=>v))}})()""")
    ok(ex['place'] <= 3 and ex['gain'] == {'knowledge': 5, 'charm': 4}, f'top-three exam: {ex}')
    raised['knowledge'].append('exam'); raised['charm'].append('exam')

    # The Dark Hour: a Tartarus night is +1 Courage, a full moon won +3.
    tt = p.eval("""(()=>{const G=FemcGame;const a=G.S.stats.courage;const h=G.makeHandoff('tartarus',{party:['solar','yukari']});G.finishHandoff(G.simulate(h,'win'));G.applyResult(h,h.result);G.clearHandoff();
      const b=G.S.stats.courage;const o=G.makeHandoff('operation',{op:'priestess',forced:true,party:['solar','yukari']});G.finishHandoff(G.simulate(o,'win'));G.applyResult(o,o.result);G.clearHandoff();
      return [b-a,G.S.stats.courage-b]})()""")
    ok(tt == [1, 3], f'Tartarus night +1 Courage, full moon +3: {tt}')
    raised['courage'] += ['Tartarus night', 'full moon']

    # Link choices that fit a stat (kept text unchanged): a few now carry one, through the scene player.
    lc = p.eval("""(()=>{const out={};for(const l of Object.values(FemcGame.LINKS)){const walk=a=>(a||[]).forEach(x=>{(x.choose||x.route||[]).forEach(o=>{if(o.stat)Object.keys(o.stat).forEach(k=>{(out[k]||=[]).push(l.id)});walk(o.then)});walk(x.then);walk(x.else)});
      [...(l.ranks||[]).map(r=>r.scene),...(l.hangouts||[]),...(l.afterMax||[]).map(r=>r.scene)].forEach(walk)}return out})()""")
    ok(len(lc.get('kindness', [])) >= 8 and lc.get('courage') and lc.get('proficiency') and lc.get('knowledge'), f'link choices that raise a stat: { {k: len(v) for k, v in lc.items()} }')
    for k, v in lc.items(): raised[k].append(f'link choices ({len(set(v))} links)')
    p.goto('femc-game.html'); p.eval(SETUP)

    ok(all(len(set(v)) >= 4 for v in raised.values()), f'every stat has several ways up: { {k: sorted(set(v)) for k, v in raised.items()} }')

    # ── 3. A rank-up fires the sun level-up (waits for the scene, five suns) ──
    p.eval("T.fresh('%s','after',{stats:{knowledge:18}});true" % school_mon)
    p.eval("FemcGameUI.goOut('after','gekkoukan');document.querySelector('[data-act=library]').click();document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click();true")
    time.sleep(0.4)
    ok(p.eval("!document.querySelector('.g-statup') && !!document.querySelector('.gs:not(.out)')"), 'the level-up waits while the scene plays: ' + json.dumps(p.eval("({st:FemcGame.S.stats,ov:[...document.querySelectorAll('.g-overlay,.gs,.g-statup,.gs-rank')].map(x=>x.className),main:document.querySelector('#g-main').className})")))
    p.eval("document.querySelector('.gs:not(.out) [data-t=skip]').click();true")
    p.wait("!!document.querySelector('.g-statup')", 8)
    su = p.eval("({name:document.querySelector('.g-su-name').textContent,to:document.querySelector('.g-su-rank b').textContent,from:document.querySelector('.g-su-rank s').textContent,pips:document.querySelectorAll('.g-su-pips .g-sun').length,on:document.querySelectorAll('.g-su-pips .g-sun.on').length,sun:!!document.querySelector('.g-su-sunbox .g-sun .g-sun-rays')})")
    ok(su == {'name': 'Knowledge', 'to': 'Bookish', 'from': 'Clueless', 'pips': 5, 'on': 2, 'sun': True}, f'Knowledge rank 2 level-up with the sun: {su}')
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'levelup-{name}')
    size(1440, 900)
    key('Enter')
    p.wait("!document.querySelector('.g-statup')", 3)
    # Each stat's top rank, through addStat: one card each, in order.
    for k in STATS:
        p.eval(f"FemcGame.S.stats.{k}=FemcGame.D.stats.stats.{k}.at[4]-1;FemcGame.addStat('{k}',1,true);true")
        p.wait("!!document.querySelector('.g-statup')", 3)
        top = p.eval("({name:document.querySelector('.g-su-name').textContent,to:document.querySelector('.g-su-rank b').textContent,on:document.querySelectorAll('.g-su-pips .g-sun.on').length})")
        ok(top['on'] == 5 and top['to'] == p.eval(f"FemcGame.D.stats.stats.{k}.ranks[4]"), f'{k} MAX: {top}')
        p.eval("document.querySelector('.g-statup').click();true")
        p.wait("!document.querySelector('.g-statup')", 3)

    # ── 4. Menu → Status: all five on the radar and the cards ──
    p.eval("FemcGame.S.stats={knowledge:70,courage:20,proficiency:100,charm:150,kindness:3};FemcGame.save();FemcMenu.open('status');true")
    p.wait("!!document.querySelector('.g-ss')", 3)
    ss = p.eval("({cards:[...document.querySelectorAll('.g-ss-stat')].map(c=>[c.dataset.stat,c.querySelector('.g-ss-name').textContent,c.querySelector('.g-ss-rank').textContent,c.querySelectorAll('.g-ss-suns .g-sun').length,c.querySelectorAll('.g-ss-suns .g-sun.on').length]),corners:document.querySelector('.g-ss-radar .val').getAttribute('points').trim().split(/\\s+/).length,labels:[...document.querySelectorAll('.g-ss-radar text')].map(t=>t.textContent)})")
    ok([c[0] for c in ss['cards']] == STATS and ss['corners'] == 5 and ss['labels'] == ['Knowledge', 'Courage', 'Proficiency', 'Charm', 'Kindness'], f'Status: five cards and a pentagon: {ss}')
    ok([c[2] for c in ss['cards']] == ['Well-Read', 'Steady', 'Deft', 'Main Character', 'Polite'] and [c[4] for c in ss['cards']] == [3, 2, 4, 5, 1] and all(c[3] == 5 for c in ss['cards']), f'Status: rank names and suns: {ss["cards"]}')
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'status-{name}')
        ok(fits() and p.eval("(()=>{const r=document.querySelector('.g-ss-radar').getBoundingClientRect();return [...document.querySelectorAll('.g-ss-radar text')].every(t=>{const b=t.getBoundingClientRect();return b.left>=0&&b.right<=innerWidth+1})})()"), f'Status fits at {w}x{h}, radar labels on screen')
    size(1440, 900)
    p.eval("FemcMenu.close();true")

    # ── 5. Save migration: an old three-stat save from mid-December (jobs, Koromaru, links) ──
    OLD = r"""(()=>{const G=FemcGame;G.newGame();const s=JSON.parse(JSON.stringify(G.S));delete s.sv;delete s.statsFrom;delete s.leftovers;delete s.done;
      s.stats={academics:180,charm:100,courage:30};s.day=G.dayOf('12/18');s.slot='evening';s.phase='play';s.started=true;s.events=G.D.events.map(e=>e.id);
      s.jobs={bookworms:{hired:true,shifts:14,beats:[0]},konbini:{hired:true,shifts:9,beats:[]},tutor:{hired:true,shifts:6,beats:[]},yeobos:{hired:true,shifts:4,beats:[]}};
      s.links={koromaru:{rank:6,xp:0,seen:[],rankDay:{}},akihiko:{rank:10,xp:0,seen:[],rankDay:{}},yukari:{rank:7,xp:0,seen:[],rankDay:{}},junkyu:{rank:2,xp:0,seen:[],rankDay:{}},sunoo:{rank:5,xp:0,seen:[],rankDay:{}},cherry:{rank:4,xp:0,seen:[],rankDay:{}}};
      s.met=Object.keys(s.links);s.yen=12345;return s})()"""
    old = p.eval(OLD)
    p.eval("localStorage.setItem('kg-femc-revamp',%s);localStorage.setItem('kg-femc-revamp-slot2',JSON.stringify({at:Date.now(),label:'old',state:%s}));true" % (json.dumps(json.dumps(old)), json.dumps(old)))
    p.goto('femc-game.html'); p.eval(SETUP)
    m = p.eval("({stats:FemcGame.S.stats,sv:FemcGame.S.sv,from:FemcGame.S.statsFrom,saved:JSON.parse(localStorage.getItem('kg-femc-revamp')).sv,yen:FemcGame.S.yen,day:FemcGame.S.day,ranks:Object.fromEntries(Object.keys(FemcGame.S.stats).map(k=>[k,FemcGame.statRankName(k)]))})")
    ok(m['sv'] == 2 and m['saved'] == 2 and m['from'] == {'academics': 180, 'charm': 100, 'courage': 30}, f'the autosave migrates once and keeps the old values: {m}')
    ok(set(m['stats']) == set(STATS) and m['yen'] == 12345, 'five stats; nothing else in the save changed')
    ok(m['ranks']['knowledge'] == 'Brilliant' and m['ranks']['charm'] == 'Main Character' and m['ranks']['courage'] == 'Gutsy', f'Academics 180 (rank 5 of 6) → Brilliant; Charm MAX → MAX; Courage 30 (Determined) → Gutsy: {m}')
    seed = p.eval("(()=>{const G=FemcGame,d=G.dayOf('12/18'),w=Math.floor(d/21);return {prof:3+14+9+0+w, kind:3+6+4+2*6+Math.floor((10+7+6+2+5+4)/6)+w, w}})()")
    ok(m['stats']['proficiency'] == seed['prof'] and m['stats']['kindness'] == seed['kind'], f"Proficiency and Kindness seeded from jobs, Koromaru and links: {m['stats']} vs {seed}")
    ok(p.eval("FemcGame.statRank('proficiency')>=2 && FemcGame.statRank('kindness')>=2 && FemcGame.statRank('proficiency')<4 && FemcGame.statRank('kindness')<4"), 'the catch-up is fair: not stuck at the bottom, not handed out')
    # Never a lost rank: every old point value maps to a new rank at least as high (on the 1-5 scale), MAX stays MAX.
    mono = p.eval("""(()=>{const G=FemcGame,L=G.D.stats.legacy,bad=[];for(const k of ['academics','charm','courage']){let last=-1;for(let v=0;v<=L[k].at[5]+20;v++){const s={stats:{academics:0,charm:0,courage:0,[k]:v},day:0,jobs:{},links:{}};G.migrateStats(s);
      const nk=L[k].to,nr=G.statRank(nk,s.stats[nk]);let or=1;L[k].at.forEach((x,i)=>{if(v>=x)or=i+1});
      if(s.stats[nk]<last)bad.push([k,v,'down']);last=s.stats[nk];if(nr<Math.floor(L.rankMap[or-1]))bad.push([k,v,or,nr]);if(or===6&&nr!==5)bad.push([k,v,'max'])}}return bad})()""")
    ok(mono == [], f'migration is monotone, never drops a rank, MAX stays MAX: {mono[:5]}')
    # A slot and a backup code made before the change migrate the same way when loaded.
    sl = p.eval("(()=>{const G=FemcGame;G.loadSlot(2);return {sv:G.S.sv,stats:G.S.stats}})()")
    ok(sl['sv'] == 2 and sl['stats'] == m['stats'], f'an old slot migrates on load: {sl}')
    code = p.eval("btoa(unescape(encodeURIComponent(JSON.stringify({game:'kg-femc-revamp',v:1,mv:2,at:Date.now(),state:%s}))))" % json.dumps(old))
    ok(p.eval(f"FemcGame.importCode({json.dumps(code)}) && FemcGame.S.sv===2 && FemcGame.S.stats.charm===150"), 'an old backup code migrates on import')
    again = p.eval("JSON.stringify({s:FemcGame.S.stats,f:FemcGame.S.statsFrom})")
    p.goto('femc-game.html'); p.eval(SETUP)
    ok(p.eval("JSON.stringify({s:FemcGame.S.stats,f:FemcGame.S.statsFrom})") == again, 'a migrated save is not migrated again on reload')
    p.eval("FemcGameUI.run();true"); time.sleep(0.5)
    p.eval("FemcMenu.open('status');true"); p.wait("!!document.querySelector('.g-ss')", 3)
    ok(p.eval("document.querySelectorAll('.g-ss-stat').length===5"), 'the migrated save opens the Status screen with five stats')
    shot('migrated-status-desktop')
    p.eval("FemcMenu.close();true")

    # ── 6. Every gate in the game: valid, passable, and passed by a migrated save that passed it before ──
    gates = p.eval("""(()=>{const G=FemcGame,out=[];const walk=(a,where)=>(a||[]).forEach(x=>{(x.choose||x.route||[]).forEach(o=>{if(o.needs)out.push({where,t:o.t,needs:o.needs});walk(o.then,where)});if(x.ifStat)out.push({where,t:'ifStat',needs:x.ifStat});walk(x.then,where);walk(x.else,where)});
      for(const l of Object.values(G.LINKS)){if(l.needs)out.push({where:l.id,t:'to begin',needs:l.needs});[...(l.ranks||[]).map(r=>r.scene),...(l.hangouts||[]),...(l.afterMax||[]).map(r=>r.scene)].forEach(s=>walk(s,l.id))}
      G.D.events.forEach(e=>walk(e.scene,e.id));G.activities().forEach(a=>{if(a.needs)out.push({where:'activity '+a.id,needs:a.needs})});G.D.jobs.forEach(j=>{if(j.needs)out.push({where:'job '+j.id,needs:j.needs})});
      (G.D.places.dorm.acts||[]).forEach(a=>{if(a.needs)out.push({where:'dorm '+a.id,needs:a.needs})});
      return out.map(g=>({...g,checks:Object.entries(g.needs).map(([k,r])=>{const d=G.D.stats.stats[k];if(!d)return {k,r,bad:'unknown stat'};
        const keep={...G.S.stats};G.S.stats[k]=d.at[r-1];const pass=!G.lacking({[k]:r});G.S.stats[k]=d.at[r-1]-1;const below=!!G.lacking({[k]:r});G.S.stats=keep;return {k,r,pass,below,ranks:d.ranks.length}})}))})()""")
    ok(len(gates) >= 8, f'{len(gates)} gates found (link starts, choices, activities, jobs, ifStat lines)')
    bad = [g for g in gates for c in g['checks'] if c.get('bad') or not c['pass'] or not c['below'] or c['r'] > c['ranks']]
    ok(not bad, f'every gate names one of the five, opens exactly at its rank: {bad}')
    ok(not p.eval("JSON.stringify(%s).includes('academics')" % json.dumps(gates)), 'no gate still says academics')
    # The old gates (rank 2 or 3 of Academics / Courage) map to the same rank number; a migrated save that met one still does.
    old_gates = {('courage', 2), ('courage', 3), ('knowledge', 2), ('knowledge', 3)}
    passed = p.eval("""(()=>{const G=FemcGame,L=G.D.stats.legacy,out=[];for(const [k,ok] of [['academics','knowledge'],['courage','courage']])for(const r of [2,3]){
      const s={stats:{academics:0,charm:0,courage:0,[k]:L[k].at[r-1]},day:0,jobs:{},links:{}};G.migrateStats(s);out.push([ok,r,G.statRank(ok,s.stats[ok])>=r])}return out})()""")
    ok(all(x[2] for x in passed), f'a save exactly at an old gate passes the new one: {passed}')
    # The gates that moved to fit the character (text unchanged): Junkyu's rhythm game is Proficiency, Sunoo's speech Kindness.
    moved = {(g['where'], c['k'], c['r']) for g in gates for c in g['checks']}
    ok(('junkyu', 'proficiency', 2) in moved and ('sunoo', 'kindness', 2) in moved and ('cherry', 'knowledge', 3) in moved and ('mitsuru', 'knowledge', 2) in moved, f'moved gates: {sorted(moved)}')
    kat = p.eval("(()=>{const G=FemcGame;return {p:G.statRank('proficiency'),k:G.statRank('kindness')}})()")
    ok(kat['p'] >= 2 and kat['k'] >= 2, f'the migrated mid-December save passes the moved gates (Proficiency 2, Kindness 2): {kat}')
    # The locked option shows its requirement in a real scene, and opens at the rank (Sunoo's, rank 5 scene).
    sc = p.eval("""(async()=>{const G=FemcGame,l=G.LINKS.sunoo;const i=l.ranks.findIndex(r=>JSON.stringify(r.scene).includes('sunoo-speech'));const res={};
      for(const v of [14,15]){G.S.stats.kindness=v;let done=false;const pl=FemcScene.play({scene:l.ranks[i].scene,link:'sunoo',place:"Iwatodai Strip · Yeobo's Cafe",onDone(){done=true}});let n=0;
        while(!done&&n++<1500){const b=[...pl.el.querySelectorAll('.gs-choices button')].find(b=>b.textContent.includes('the whole school'));if(b&&!res[v])res[v]={off:b.disabled,txt:b.textContent.trim()};
          const t=pl.el.querySelector('.gs-title');if(t&&t.offsetParent)t.click();
          const c=pl.el.querySelector('.gs-choices button:not(:disabled)');if(c){c.click()}else pl.el.querySelector('[data-t=skip]')?.click();await new Promise(r=>setTimeout(r,20))}}
      return res})()""")
    ok(sc.get('14', {}).get('off') is True and sc.get('15', {}).get('off') is False, f"Sunoo's speech option: locked at 14 Kindness, open at 15: {sc}")

    # ── 7. The perks that waited on the five stats now work ──
    p.goto('femc-game.html'); p.eval(SETUP)
    ids = ['aigis-2', 'koromaru-2', 'shinjiro-2', 'judy-6', 'noctis-2', 'hyein-7', 'haru-2', 'kasumi-2', 'jihoon-4', 'sunoo-2', 'sunoo-8']
    st = p.eval("(()=>{const B=FemcBuild;return %s.map(id=>{const x=B.perkById(id);return [id,!!x&&!x.stub,B.perkState(x,{bonds:{[x.link]:10}})]})})()" % json.dumps(ids))
    ok(all(s[1] and s[2] != 'stub' for s in st), f'none of them is "coming later" any more: {st}')
    ok(p.eval("FemcBuild.PERKS.filter(p=>p.stub).map(p=>p.id).sort().join()") == 'elizabeth-2,jaehyun-4,rio-2', 'the stubs left are clubs, party switching and Velvet Room draws')
    ranks = {'aigis': 2, 'koromaru': 2, 'shinjiro': 2, 'judy': 6, 'noctis': 2, 'hyein': 7, 'haru': 2, 'kasumi': 2, 'jihoon': 4, 'sunoo': 8}
    p.eval("T.fresh('%s','after',{ranks:%s});true" % (school_wed, json.dumps(ranks)))
    # Learning Mode: a hangout (not a rank scene) is +1 Kindness.
    lm = p.eval("(()=>{const G=FemcGame,l=G.LINKS.yukari;G.progress('yukari').rank=3;const a=G.S.stats.kindness;G.finishLink(l,'hangout',3,1);const h=G.S.stats.kindness-a;const b=G.S.stats.kindness;G.progress('yukari').rank=3;G.finishLink(l,'rank',3,3);const out=[h,G.S.stats.kindness-b];G.progress('yukari').rank=0;G.save();return out})()")
    ok(lm == [1, 0], f'Learning Mode: hangouts +1 Kindness, rank scenes not: {lm}')
    # Weekly bonds without free time: Walkies (Thu), Morning Stretch (Tue), Pilates Partner (Sat).
    wk = p.eval("""(()=>{const G=FemcGame,out={};for(const [dow,name] of [[4,'walkies'],[2,'stretch'],[6,'pilates']]){const md=T.day('9/7',dow);G.S.day=G.dayOf(md)-1;G.S.slot='late';G.S.perks.week={};const a={...G.S.stats};G.sleep();
      out[name]=Object.fromEntries(Object.keys(a).map(k=>[k,G.S.stats[k]-a[k]]).filter(([,v])=>v))}return out})()""")
    ok(wk == {'walkies': {'kindness': 2}, 'stretch': {'proficiency': 2}, 'pilates': {'proficiency': 2, 'courage': 1}}, f'Walkies, Morning Stretch, Pilates Partner: {wk}')
    # Editing Bay: Study at the dorm is +1 Proficiency too.
    dl = night('study', autumn, None, 'click')
    ok(dl == {'knowledge': 2, 'proficiency': 1}, f'Editing Bay at the dorm: {dl}')
    # Garden Patch: both gardens give +1 Kindness and +1 Proficiency more (with Editing Bay on the dorm roof).
    dl = night('dorm:roofgarden', autumn, None)
    ok(dl == {'kindness': 3, 'proficiency': 2}, f'Garden Patch on the dorm roof (+ Editing Bay): {dl}')
    dl, _ = go_act('gekkoukan', 'schoolgarden', school_wed, 'after')
    ok(dl == {'kindness': 2, 'proficiency': 2}, f"Garden Patch in Haru's rooftop garden: {dl}")
    # Fishing Trip: the pier becomes fishing.
    pier_day = p.eval("T.day('9/7',3,'school')")
    dl, prev = go_act('port', 'pier', pier_day, 'after')
    ok(dl == {'charm': 1, 'courage': 1, 'proficiency': 2} and 'Proficiency +2' in prev, f'Fishing Trip: {dl} ({prev})')
    ok('Noctis' in p.eval(f"T.at('{pier_day}','after');FemcGame.doActivity(FemcGame.actById('pier')).text"), 'Fishing Trip: the pier narration is fishing with Noctis')
    # Seven Croissants: Chagall is free and +1 Kindness.
    y = p.eval("FemcGame.S.yen")
    dl, prev = go_act('mall', 'chagall', school_wed, 'after')
    ok(dl == {'charm': 2, 'kindness': 1} and p.eval("FemcGame.S.yen") == p.eval("Math.max(%d,90000)" % y), f'Seven Croissants: {dl}, free')
    # Sewing Machine: a gold desk project with Hyein.
    dl = night('desk', autumn, None, 'click', 'sew-hyein')
    ok(dl == {'proficiency': 4, 'charm': 1}, f'Sewing Machine (+ Editing Bay): {dl}')
    # Staff Shift: Yeobo's shifts +1 Kindness.
    sh = p.eval("""(()=>{const G=FemcGame,j=G.D.jobs.find(j=>j.id==='yeobos');G.jobState('yeobos').hired=true;const a={...G.S.stats};G.finishShift(j,{scene:[]});return Object.fromEntries(Object.keys(a).map(k=>[k,G.S.stats[k]-a[k]]).filter(([,v])=>v))})()""")
    ok(sh == {'charm': 1, 'kindness': 2}, f"Staff Shift at Yeobo's: {sh}")
    # Kitchen Duty: cook with Shinjiro (until he leaves), +3 Proficiency, and the leftovers come along on the next Tartarus night.
    p.eval(f"T.at('{autumn}','evening');FemcGameUI.evening();true")
    ok(p.eval("document.querySelector('[data-n=\"dorm:cook-shinjiro\"]').classList.contains('perk')"), 'Cook with Shinjiro is on the evening menu (gold)')
    shot('evening-perks-desktop')
    dl = night('dorm:cook-shinjiro', autumn, None)
    ok(dl == {'proficiency': 4} and p.eval("FemcGame.S.leftovers===1"), f'Kitchen Duty (+ Editing Bay): {dl}, leftovers packed')
    kits = p.eval("(()=>{const h=FemcGame.makeHandoff('tartarus',{party:['solar','yukari']});FemcGame.save();return {kits:h.request.kits,left:FemcGame.S.leftovers}})()")
    ok(kits == {'kits': {'night_leftovers': 1}, 'left': 0}, f'the Tartarus request carries the leftovers once: {kits}')
    p.battle()
    p.wait("!!FemcBattle.save && !!FemcBattle.hs && FemcBattle.handoff?.kind==='tartarus'", 60)
    ok(p.eval("FemcBattle.save.items.night_leftovers===1 && FEMC_BATTLE_DATA.items.night_leftovers.night===true && FEMC_BATTLE_DATA.items.night_leftovers.hp===0.2"), "Shinjiro's Leftovers are in the bag tonight (heal the party 20%, night only)")
    p.top()
    p.goto('femc-game.html'); p.eval(SETUP)
    p.eval("T.fresh('10/5','evening',{ranks:{shinjiro:2}});FemcGameUI.evening();true")
    ok(p.eval("!document.querySelector('[data-n=\"dorm:cook-shinjiro\"]')"), 'Kitchen Duty ends when Shinjiro leaves')
    # The Bonds tab lists them as earned (no "Coming later").
    p.eval("T.fresh('%s','after',{ranks:%s});FemcMenu.open('bonds');true" % (school_wed, json.dumps(ranks)))
    time.sleep(0.4)
    txt = p.eval("document.querySelector('.g-fm-body')?.textContent||''")
    ok(all(n in txt for n in ['Learning Mode', 'Walkies', 'Kitchen Duty', 'Editing Bay', 'Fishing Trip', 'Sewing Machine', 'Garden Patch', 'Morning Stretch', 'Pilates Partner']), 'the Bonds tab lists the new perks')
    shot('bonds-desktop')
    p.eval("FemcMenu.close();true")

    # ── 8. A normal playthrough (half the free time on links, some Tartarus): some stats max, not all ──
    def playthrough(link_share, seed):
        return p.eval("""(()=>{const G=FemcGame;T.fresh('4/20','early');const S=G.S;let x=%d;const rnd=()=>(x=(x*1103515245+12345)%%2147483648)/2147483648;
          const pick=a=>a[Math.floor(rnd()*a.length)];G.hire(G.D.jobs[0]);G.hire(G.D.jobs[1]);
          const toast=()=>G.takeToasts();let qs=0,tt=0;
          for(let d=G.dayOf('4/20');d<=G.dayOf('1/31');d++){S.day=d;S.spent={};S.condition='good';S.yen=99999;const i=G.dayInfo(d);if(i.type==='trip')continue;
            if(i.type==='school'){for(const sl of ['morning','afternoon']){S.slot=sl;const q=rnd()<0.36?G.classQuestion():null;if(q){qs++;G.answerClass(q,rnd()<0.7?q.correct:(q.correct+1)%%4)}else if(rnd()<0.19)G.addStat('knowledge',1)}}
            if(i.exam&&i.exam.index===i.exam.count-1){const id=i.exam.id;S.exams[id]={answers:Object.fromEntries((G.D.q.exams[id]?.questions||[]).map(q=>[q.id,rnd()<0.7])),posted:false};G.postExam(id)}
            for(const sl of ['after','evening']){S.slot=sl;S.spent={};const r=rnd();if(r<%f)continue;
              if(sl==='evening'&&r<%f+0.18&&d>G.dayOf('4/25')){tt++;G.addStat('courage',1,true);continue}
              if(sl==='after'&&r>0.93&&G.jobOk(G.D.jobs[0]).ok){G.finishShift(G.D.jobs[0],{scene:[]});continue}
              const outs=G.activities().filter(a=>!a.shop&&!a.cures&&!a.fortune&&G.activityOk(a,sl).ok);
              if(sl==='evening'&&rnd()<0.5){const dm=G.dormActs().filter(a=>G.dormOk(a).ok);if(rnd()<0.35||!dm.length)G.doStudy();else G.doDorm(pick(dm));continue}
              if(outs.length)G.doActivity(pick(outs))}
            toast()}
          G.D.cal.ops.forEach(()=>G.addStat('courage',3,true));toast();
          return {stats:{...S.stats},maxed:Object.keys(S.stats).filter(k=>G.statRank(k)===5),total:Object.values(S.stats).reduce((a,b)=>a+b,0),qs,tt}})()""" % (seed, link_share, link_share))
    normal = playthrough(0.5, 7)
    ok(1 <= len(normal['maxed']) <= 3, f"a normal playthrough maxes some stats, not all: {normal}")
    heavy = playthrough(0.7, 11)
    ok(len(heavy['maxed']) <= 2, f'a link-heavy playthrough maxes fewer: {heavy}')
    p.goto('femc-game.html')

    errors = p.console()
    ok(not errors, f'no browser errors: {errors}')
    print(json.dumps({'checks': len(checks), 'ways_up': {k: sorted(set(v)) for k, v in raised.items()}, 'gates': len(gates), 'migrated': m['stats'],
                      'normal_playthrough': normal, 'link_heavy_playthrough': heavy, 'screenshots': str(OUT)}, indent=1))
finally:
    p.close()
