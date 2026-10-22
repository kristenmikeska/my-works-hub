"""The Memories album and the Theater (menu.js ALBUM and THEATER; scene.js replay mode). Headless Chrome, an isolated
profile and a local server on a random port; never the player's own saves.

  python3 tests/femc_gallery.py [--only album,viewer,theater,endings,carry,views] [--screenshots DIR]

album     a built save from before the album (no S.album): the CGs of the story events and link rank it has seen are
          unlocked by the backfill, everything else is a blank locked tile (no art loaded, no names); the memory cards it
          found; a live scene's CG is recorded in S.album.cg and saved.
viewer    a tile opens the full-screen viewer: the right picture, a caption from what was seen, the count; next / previous
          by the arrow keys (real key presses), the buttons, a mouse drag and a touch swipe; a tap hides the caption; a
          controller's D-pad and B (pad.js's synthetic keys); Esc closes and focus goes back to the tile.
theater   the Theater lists only what was seen (by month; bonds by person); replays of a story event (choices clicked,
          its fight skipped), a link rank and a scene left early with Esc, from the field menu and from the title screen's
          Extras, all leave every 'kg-femc-revamp*' key byte-identical and the in-memory save unchanged.
endings   no ending (nor its name or its CG) shows anywhere until one has been seen; an earlier playthrough's ending
          (the clears list) appears alone, replays with its own route and its CG; this playthrough's ending appears too.
carry     New Game+ keeps the album and the Theater (albumCarry).
views     the album, the viewer, the Theater, a replay and the title's Extras at 1000x486, 375x812 and 1440x900:
          screenshots, no sideways scrolling.
Every section ends with no browser errors."""
import argparse, base64, json, pathlib, tempfile, time
from femc_browser import Page

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='')
args = ap.parse_args()
ONLY = [x for x in args.only.split(',') if x]
OUT = pathlib.Path(args.screenshots) if args.screenshots else pathlib.Path(tempfile.mkdtemp(prefix='femc-gallery-'))
OUT.mkdir(parents=True, exist_ok=True)
URL = 'femc-game.html?speed=10&seed=5'
checks = []


def want(k): return not ONLY or k in ONLY


def ok(cond, msg):
    if not cond: raise AssertionError(msg)
    checks.append(msg)


def view(p, w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def motion(p, reduce):
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce' if reduce else 'no-preference'}]})


def shot(p, name):
    p.eval("new Promise(r=>setTimeout(r,450))")
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def key(p, k, code=None):
    """A real key press (CDP), on whatever has focus."""
    vk = {'ArrowLeft': 37, 'ArrowRight': 39, 'ArrowUp': 38, 'ArrowDown': 40, 'Enter': 13, 'Escape': 27, ' ': 32, ']': 221, '[': 219}.get(k, 0)
    base = {'key': k, 'code': code or ({'Enter': 'Enter', 'Escape': 'Escape', ' ': 'Space', ']': 'BracketRight', '[': 'BracketLeft'}.get(k, k)), 'windowsVirtualKeyCode': vk, 'nativeVirtualKeyCode': vk}
    text = {'Enter': '\r', ' ': ' ', ']': ']', '[': '['}.get(k)
    p.ws.call('Input.dispatchKeyEvent', {'type': 'keyDown' if text else 'rawKeyDown', **base, **({'text': text, 'unmodifiedText': text} if text else {})})
    p.ws.call('Input.dispatchKeyEvent', {'type': 'keyUp', **base})
    p.eval("new Promise(r=>setTimeout(r,60))")


def pad(p, k):
    p.eval("(()=>{const ev=new KeyboardEvent('keydown',{key:%s,bubbles:true,cancelable:true});ev.fromPad=true;(document.activeElement&&document.activeElement!==document.body?document.activeElement:document).dispatchEvent(ev)})()" % json.dumps(k))
    p.eval("new Promise(r=>setTimeout(r,60))")


def clean(p, where):
    errs = [e for e in p.console() if 'favicon' not in json.dumps(e)]
    ok(not errs, f'{where}: no browser errors {errs if errs else ""}')


# A save from before the album: three story events with a CG on their main path, one link rank with one, four memory
# cards, and an event with a choice and a fight to replay. Returns what the test needs to know.
BUILD = r"""(()=>{
  const G=FemcGame, D=FEMC_BATTLE_DATA, M=FemcMenu;
  G.newGame(); const S=G.S; S.started=true; S.phase='play';
  const top = sc => (sc||[]).filter(l=>l&&typeof l.cg==='string').map(l=>l.cg);
  const deep = (sc,out=[]) => { (sc||[]).forEach(l=>{ if(!l||typeof l!=='object')return; if(typeof l.cg==='string')out.push(l.cg); [l.then,l.else,...(l.choose||[]).map(o=>o.then)].filter(Array.isArray).forEach(k=>deep(k,out)); }); return out; };
  const evs = G.D.events.filter(e=>e.id!=='end-ending' && !e.unlock);
  const withCg = evs.filter(e=>top(e.scene).some(id=>!/^ending-/.test(id)));
  const seenEv = withCg.slice(0,3);
  const lastCg = withCg[withCg.length-1];
  const hasChoice = sc => (sc||[]).some(l=>l&&l.choose);
  const hasFight = sc => (sc||[]).some(l=>l&&(l.battle||[l.then,l.else].some(k=>Array.isArray(k)&&hasFight(k))));
  const early = G.dayOf(seenEv[seenEv.length-1].date);
  const fightEv = evs.find(e=>hasChoice(e.scene)&&hasFight(e.scene)&&G.dayOf(e.date)<=early) || evs.find(e=>hasFight(e.scene)&&G.dayOf(e.date)<=early);
  const plainEv = evs.find(e=>!top(e.scene).length && !deep(e.scene).length && G.dayOf(e.date)<=early && e!==fightEv);
  S.events = [...new Set([...seenEv, fightEv, plainEv].filter(Boolean).map(e=>e.id))];
  S.day = early + 1; S.slot='after'; S.flags.armband=true;
  // A link rank with a CG on its main path.
  let rk=null;
  for (const l of Object.values(G.LINKS)) { (l.ranks||[]).forEach((x,r)=>{ if(!rk && x && top(x.scene).length) rk={id:l.id,r,cg:top(x.scene)[0],title:x.title||''}; }); if(rk) break; }
  S.met.push(rk.id); const p=G.progress(rk.id); p.rank=rk.r+1; p.seen=Array.from({length:rk.r+1},(_,k)=>k); p.rankDay={}; for(let k=1;k<=rk.r+1;k++) p.rankDay[k]=Math.max(1,early-20+k);
  // A second link with ranks but no CG (a Theater row by person).
  S.fragments = D.memories.slice(0,2).map(m=>m.id).concat(D.memories.filter(m=>m.world==='Hoax').slice(0,2).map(m=>m.id));
  delete S.album; S.dailyLife={seen:[],lastDay:999}; S.lateNights={seen:[],lastDay:999}; S.runIns={seen:[],lastDay:999,later:[]};
  G.save();
  try { localStorage.removeItem('kg-femc-revamp-clears'); } catch(e){}
  const allCg = M.albumData().cgs.map(c=>c.id);
  // CGs only an unseen event shows (on its main path), to stay locked.
  const seenDeep = new Set([...S.events.flatMap(id=>deep(G.D.events.find(e=>e.id===id).scene)), ...deep(window.FEMC_GAME_PROLOGUE.scene)]);
  for (const l of Object.values(G.LINKS)) (l.ranks||[]).forEach(x=>deep(x&&x.scene).forEach(c=>seenDeep.add(c)));
  const lockedOnly = [...new Set(evs.filter(e=>!S.events.includes(e.id)).flatMap(e=>top(e.scene)))].filter(c=>!seenDeep.has(c));
  return { seen:seenEv.map(e=>({id:e.id,title:e.title,cgs:top(e.scene)})), lockedOnly, fight:fightEv&&fightEv.id, plain:plainEv&&plainEv.id,
    rank:rk, frags:S.fragments, allCg, unseenTitles: evs.filter(e=>!S.events.includes(e.id)).map(e=>e.title) };
})()"""

SNAP = "JSON.stringify(Object.keys(localStorage).filter(k=>k.startsWith('kg-femc-revamp')).sort().map(k=>[k,localStorage.getItem(k)]))"
MEM = "JSON.stringify(FemcGame.S)"

# One step of a scene: choices, cards, the scene itself. Returns 'gone' once no scene is left.
STEP = r"""(()=>{
  const g=document.querySelector('.gs:not(.out)'); if(!g) return 'gone';
  const c=g.querySelector('.gs-choices button:not(:disabled)'); if(c){ c.click(); return 'choice'; }
  const t=document.querySelector('.gs-title, .gs-summon.ready, .g-actcard'); if(t){ t.click(); return 'card'; }
  g.click(); return 'line';
})()"""


def play_out(p, limit=3000):
    seen = {'choice': 0, 'line': 0, 'card': 0, 'cgs': set(), 'fight': 0}
    for _ in range(limit):
        st = p.eval(STEP)
        if st == 'gone': return seen
        seen[st] = seen.get(st, 0) + 1
        info = p.eval("(()=>{const g=document.querySelector('.gs:not(.out)');if(!g)return null;const i=g.querySelector('.gs-cg');return {cg:i&&!i.hidden?i.getAttribute('src'):null,t:g.querySelector('.gs-text').textContent,replay:g.classList.contains('gs-replay'),tag:!!g.querySelector('.gs-replay-tag'),dh:!!document.querySelector('.g-dh')}})()")
        if info:
            if info['cg']: seen['cgs'].add(info['cg'].split('/')[-1].split('.')[0])
            if info['t'].startswith('— '): seen['fight'] += 1
            if not (info['replay'] and info['tag']): raise AssertionError('a replay step outside the read-only player')
            if info['dh']: raise AssertionError('a replay opened the Dark Hour')
        time.sleep(0.01)
    raise AssertionError('the replay did not finish')


def build(p):
    p.goto(URL)
    motion(p, True)
    b = p.eval(BUILD)
    p.goto(URL)  # reload: the save as the game loads it
    p.eval("(()=>{const S=FemcGame.S;S.phase='play';FemcGameUI.run()})()")
    p.wait("!!document.querySelector('.g-hud:not([hidden])') || !!document.querySelector('.gs')", 20)
    # Let any due scene or card settle away: the tests open the menu over the field.
    p.eval("document.querySelectorAll('.gs,.g-datecard,.g-actcard').forEach(x=>x.remove());document.documentElement.classList.remove('g-in-scene')")
    return b


def open_menu(p, tab):
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcMenu.close();")
    p.eval("new Promise(r=>setTimeout(r,260))")
    p.eval("FemcMenu.open(%s)" % json.dumps(tab))
    p.wait("!!document.querySelector('.g-fm-ov:not(.out) .g-fm-body')")
    p.eval("new Promise(r=>setTimeout(r,120))")  # the menu focuses its tab after 40 ms


p = Page()
try:
    view(p, 1280, 860)
    B = None

    # ── The album: backfill, locked tiles, recording ──
    if want('album') or want('viewer') or want('views'):
        B = build(p)
        data = p.eval("FemcMenu.albumData()")
        on = {c['id'] for c in data['cgs'] if c['on']}
        expect = {cg for e in B['seen'] for cg in e['cgs']} | {B['rank']['cg']}
        ok(expect <= on, f'backfill unlocks the CGs of the events and the rank already seen: {sorted(expect - on)} missing')
        ok(B['lockedOnly'] and not (set(B['lockedOnly']) & on), f'CGs only unseen events show stay locked ({len(B["lockedOnly"])})')
        ok(not any(c['on'] for c in data['cgs'] if c['group'] == 'endings'), 'no ending CG is unlocked before an ending')
        ok(len(on) < len(data['cgs']), f'locked CGs remain ({len(on)} of {len(data["cgs"])})')
        ok({f['id'] for f in data['frags'] if f['on']} == set(B['frags']), 'the memory cards found are the unlocked ones')
        groups = {c['group'] for c in data['cgs']}
        ok({'story', 'romance', 'searchers', 'endings'} <= groups, f'CGs grouped story / romance / searchers / endings: {groups}')
        ok(len(data['cgs']) >= 30, f'every CG the scenes can show is in the album ({len(data["cgs"])})')
        missing = p.eval("Promise.all(FemcMenu.albumData().cgs.map(c=>fetch(c.img,{method:'HEAD'}).then(r=>r.ok?null:c.id))).then(a=>a.filter(Boolean))")
        ok(not missing, f'every album CG has its file in assets/femc/cg: {missing}')
        if want('album'):
            open_menu(p, 'album')
            dom = p.eval("""(()=>{const b=document.querySelector('.g-fm-body');return {on:b.querySelectorAll('.g-al-tile:not(.lock)').length,lock:b.querySelectorAll('.g-al-tile.lock').length,
              lockImg:b.querySelectorAll('.g-al-tile.lock img').length,lockFocus:[...b.querySelectorAll('.g-al-tile.lock')].some(x=>x.tabIndex>=0),html:b.innerHTML,
              heads:[...b.querySelectorAll('.g-al-sec h3')].map(h=>h.textContent)}})()""")
            total_on = len(on) + len(B['frags'])
            ok(dom['on'] == total_on, f'the album shows {total_on} unlocked tiles ({dom["on"]})')
            ok(dom['lock'] == len(data['cgs']) + len(data['frags']) - total_on, 'every other slot is a locked tile')
            ok(dom['lockImg'] == 0 and not dom['lockFocus'], 'locked tiles load no art and take no focus')
            locked_ids = [c['id'] for c in data['cgs'] if not c['on']] + [f['id'] for f in data['frags'] if not f['on']]
            ok(not [i for i in locked_ids if i in dom['html']], 'no locked CG or card is named in the page')
            ok(not [t for t in B['unseenTitles'] if len(t) > 5 and f'>{t}<' in dom['html']], 'no unseen scene title is in the album')
            ok(any(h.startswith('Memory cards · Hoax') for h in dom['heads']) and any(h.startswith('Endings') for h in dom['heads']), f'sections by group and by world: {dom["heads"]}')
            # A live scene records its CG (and saves), a replay doesn't.
            new = next(c['id'] for c in data['cgs'] if not c['on'] and c['group'] == 'story')
            p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcScene.play({scene:[{cg:%s},{n:'A test line.'}],place:'Iwatodai Dorm · Lounge',time:'Evening'})" % json.dumps(new))
            play_live = 0
            while p.eval("!!document.querySelector('.gs:not(.out)')") and play_live < 50:
                p.eval("document.querySelector('.gs:not(.out)').click()"); play_live += 1; time.sleep(0.02)
            ok(new in p.eval("FemcGame.S.album.cg") and new in p.eval("JSON.parse(localStorage.getItem('kg-femc-revamp')).album.cg"), 'a live scene\'s CG is recorded in S.album and saved')
            ok(p.eval("FemcMenu.albumData().cgs.find(c=>c.id===%s).on" % json.dumps(new)), 'and it shows unlocked')
            clean(p, 'album')

    # ── The viewer ──
    if want('viewer'):
        open_menu(p, 'album')
        motion(p, False)
        lst = p.eval("FemcMenu.albumList()")
        n = len(lst)
        p.eval("document.querySelector('.g-fm-body [data-al=\"0\"]').focus()")
        key(p, 'Enter')
        p.wait("!!document.querySelector('.g-av-ov:not(.out) .g-av-img.in')")
        cur = lambda: p.eval("(()=>{const v=document.querySelector('.g-av-ov:not(.out)');if(!v)return null;return {src:v.querySelector('.g-av-img').getAttribute('src'),k:v.querySelector('.g-av-cap .g-kicker').textContent,t:v.querySelector('.g-av-cap b').textContent,x:v.querySelector('.g-av-cap span').textContent,n:v.querySelector('.g-av-count').textContent,bare:v.querySelector('.g-av').classList.contains('bare'),focus:v.contains(document.activeElement)}})()")
        c0 = cur()
        ok(c0['src'].endswith(lst[0]['img'].split('/')[-1]) and c0['n'] == f'1 / {n}', f'Enter on a tile opens it full screen: {c0["n"]}')
        ok(c0['t'] == (lst[0]['title'] or '') and c0['k'] == lst[0]['kicker'], f'its caption is what was seen: {c0["k"]} · {c0["t"]}')
        ok(any(c0['t'] == e['title'] for e in B['seen']) or c0['t'] == 'Prologue', 'a story CG is captioned with the scene it was seen in')
        ok(p.eval("getComputedStyle(document.querySelector('.g-av-img')).animationName").startswith('g-av-zoom'), 'the picture zooms in softly')
        key(p, 'ArrowRight'); ok(cur()['n'] == f'2 / {n}', 'Right arrow: next')
        key(p, 'ArrowLeft'); ok(cur()['n'] == f'1 / {n}', 'Left arrow: previous')
        key(p, 'ArrowLeft'); ok(cur()['n'] == f'{n} / {n}', 'previous from the first wraps to the last')
        p.eval("document.querySelector('.g-av-nav.next').click()"); ok(cur()['n'] == f'1 / {n}', 'the next button (mouse)')
        p.eval("document.querySelector('.g-av-nav.prev').click()"); ok(cur()['n'] == f'{n} / {n}', 'the previous button')
        mem = cur()
        ok(mem['x'] and 'memory fragment' in mem['k'], f'a memory card shows its own text: {mem["k"]}')
        # Mouse drag and touch swipe on the picture; a tap hides the caption.
        box = p.eval("(()=>{const r=document.querySelector('.g-av-stage').getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]})()")
        x, y = box
        for t, xx in (('mousePressed', x), ('mouseMoved', x - 60), ('mouseMoved', x - 140), ('mouseReleased', x - 140)):
            p.ws.call('Input.dispatchMouseEvent', {'type': t, 'x': xx, 'y': y, 'button': 'left', 'buttons': 1 if t != 'mouseReleased' else 0, 'clickCount': 1})
        ok(cur()['n'] == f'1 / {n}', 'a mouse drag to the left: next')
        p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': True, 'maxTouchPoints': 5})
        for t, xx in (('touchStart', x - 100), ('touchMove', x), ('touchMove', x + 80), ('touchEnd', x + 80)):
            p.ws.call('Input.dispatchTouchEvent', {'type': t, 'touchPoints': [] if t == 'touchEnd' else [{'x': xx, 'y': y}]})
        p.eval("new Promise(r=>setTimeout(r,80))")
        ok(cur()['n'] == f'{n} / {n}', 'a touch swipe to the right: previous')
        p.ws.call('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': x, 'y': y}]})
        p.ws.call('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
        p.eval("new Promise(r=>setTimeout(r,80))")
        ok(cur()['bare'], 'a tap on the picture hides the caption')
        p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': False})
        key(p, 'ArrowUp'); ok(not cur()['bare'], 'Up brings the caption back')
        # A controller: pad.js sends keys from the focused element.
        pad(p, 'ArrowRight'); ok(cur()['n'] == f'1 / {n}', 'the D-pad browses')
        pad(p, 'Escape')
        p.wait("!document.querySelector('.g-av-ov:not(.out)')")
        ok(p.eval("document.activeElement?.dataset?.al") == '0', 'B (Escape) closes the viewer; focus returns to the tile')
        ok(p.eval("!!document.querySelector('.g-fm-ov:not(.out)')"), 'the menu is still open underneath')
        # Escape from the keyboard, and the viewer over the menu doesn't close the menu.
        p.eval("document.querySelector('.g-fm-body [data-al=\"1\"]').click()")
        p.wait("!!document.querySelector('.g-av-ov:not(.out)')")
        key(p, 'Escape')
        p.wait("!document.querySelector('.g-av-ov:not(.out)')")
        ok(p.eval("!!document.querySelector('.g-fm-ov:not(.out)')"), 'Esc closes only the viewer')
        # Keyboard into the album from the menu tabs.
        p.eval("FemcMenu.close()"); p.eval("new Promise(r=>setTimeout(r,260))")
        p.eval("FemcMenu.open('journal')"); p.wait("!!document.querySelector('[data-tab=journal].on')")
        p.eval("document.querySelector('[data-tab=journal]').focus()")
        key(p, ']')
        ok(p.eval("document.querySelector('[data-tab=album]').classList.contains('on')"), '] steps from the Journal to the Album tab')
        motion(p, True)
        clean(p, 'viewer')

    # ── The Theater ──
    if want('theater') or want('endings') or want('carry') or want('views'):
        B = build(p)
    if want('theater'):
        open_menu(p, 'theater')
        items = p.eval("FemcMenu.theaterItems().map(x=>({sec:x.sec,title:x.title,group:x.group,kind:x.src.kind,key:x.src.key}))")
        story = [x for x in items if x['sec'] == 'story']
        ok({x['key'] for x in story if x['kind'] == 'event'} == set(p.eval("FemcGame.S.events")), 'the Theater lists exactly the story events seen')
        ok(any(x['kind'] == 'prologue' for x in story), 'and the prologue')
        ok([x for x in items if x['sec'] == 'bonds'] and all(x['group'].startswith(p.eval("FemcGame.LINKS[%s].short" % json.dumps(B['rank']['id']))) for x in items if x['sec'] == 'bonds'), 'bonds: the seen ranks, by person')
        ok(len([x for x in items if x['sec'] == 'bonds']) == B['rank']['r'] + 1, 'one row per rank seen')
        ok(not [x for x in items if x['sec'] == 'endings'], 'no endings before one is seen')
        html = p.eval("document.querySelector('.g-fm-body').innerHTML")
        ok(not [t for t in B['unseenTitles'] if len(t) > 5 and f'<b>{t}</b>' in html], 'no unseen scene is listed')
        heads = p.eval("[...document.querySelectorAll('.g-th-sec h3')].map(h=>h.textContent)")
        ok(heads and all(h in ('April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'Memories') for h in heads), f'story rows grouped by month: {heads}')
        # 1) A story event with a choice and a fight, from the menu, clicked through to the end.
        before, mem0 = p.eval(SNAP), p.eval(MEM)
        k = p.eval("FemcMenu.theaterItems().findIndex(x=>x.src.key===%s)" % json.dumps(B['fight']))
        ok(k >= 0, 'the event with a fight is listed')
        p.eval("document.querySelector('[data-th=\"%d\"]')?.scrollIntoView();document.querySelector('[data-ths=story]')?.click()" % k)
        p.eval("document.querySelector('[data-th=\"%d\"]').click()" % k)
        p.wait("!!document.querySelector('.gs.gs-replay:not(.out)')")
        ok(not p.eval("document.body.contains(document.querySelector('.g-fm-ov'))") , 'the menu steps aside during a replay')
        seen = play_out(p)
        ok(seen['line'] > 3, f'the replay played the scene ({seen["line"]} lines, {seen["choice"]} choices)')
        ok(seen['fight'] >= 1, 'its fight is a one-line card, not a battle')
        p.wait("!!document.querySelector('.g-fm-ov:not(.out)') && document.activeElement?.dataset?.th===%s" % json.dumps(str(k)), 10)
        ok(True, 'the menu comes back with focus on the row')
        ok(p.eval(SNAP) == before, 'replaying a story event with choices leaves the save byte-identical')
        ok(p.eval(MEM) == mem0, 'and the save in memory unchanged (no flags, stats, ranks, money or progress)')
        # 2) A link rank (a CG scene) through the keyboard: Enter on the row, Space through, the choices by keys.
        p.eval("document.querySelector('[data-ths=bonds]').click()")
        p.wait("!!document.querySelector('.g-th-row')")
        p.eval("document.querySelector('.g-th-row:last-of-type').focus()")
        key(p, 'Enter')
        p.wait("!!document.querySelector('.gs.gs-replay:not(.out)')")
        cg_seen = set()
        for _ in range(2000):
            if not p.eval("!!document.querySelector('.gs:not(.out)')"): break
            src = p.eval("(()=>{const i=document.querySelector('.gs:not(.out) .gs-cg');return i&&!i.hidden?i.getAttribute('src'):null})()")
            if src: cg_seen.add(src.split('/')[-1].split('.')[0])
            if p.eval("!!document.querySelector('.gs:not(.out) .gs-choices button')"):
                key(p, 'ArrowDown'); key(p, 'Enter')
            elif p.eval("!!document.querySelector('.gs-title, .gs-summon.ready, .g-actcard')"):
                p.eval("document.querySelector('.gs-title, .gs-summon.ready, .g-actcard').click()")
            else:
                key(p, ' ')
        ok(not p.eval("!!document.querySelector('.gs:not(.out)')"), 'a link rank replays to the end by keyboard')
        ok(B['rank']['cg'] in cg_seen, f'its CG shows in the replay ({B["rank"]["cg"]})')
        ok(p.eval(SNAP) == before and p.eval(MEM) == mem0, 'a rank replay leaves the save byte-identical')
        # 3) Leaving early: Esc (and a controller's B) ends a replay.
        p.wait("!!document.querySelector('.g-fm-ov:not(.out) .g-th-row')", 10)
        p.eval("document.querySelector('[data-ths=story]').click()")
        p.eval("document.querySelector('.g-th-row').click()")
        p.wait("!!document.querySelector('.gs.gs-replay:not(.out)')")
        for _ in range(4): p.eval(STEP)
        key(p, 'Escape')
        p.wait("!document.querySelector('.gs:not(.out)') && !!document.querySelector('.g-fm-ov:not(.out)')", 10)
        ok(True, 'Esc leaves a replay and the menu comes back')
        p.eval("document.querySelector('.g-th-row').click()")
        p.wait("!!document.querySelector('.gs.gs-replay:not(.out)')")
        for _ in range(3): p.eval(STEP)
        pad(p, 'Escape')
        p.wait("!document.querySelector('.gs:not(.out)') && !!document.querySelector('.g-fm-ov:not(.out)')", 10)
        p.eval("document.querySelector('.g-fm-ov:not(.out)')")
        p.eval("[...document.querySelectorAll('.g-th-row')].find(x=>x.textContent.includes('Prologue'))?.click()")
        p.wait("!!document.querySelector('.gs.gs-replay:not(.out)')")
        p.eval("document.querySelector('.gs:not(.out) [data-t=leave]').click()")
        p.wait("!document.querySelector('.gs:not(.out)')", 10)
        ok(p.eval(SNAP) == before and p.eval(MEM) == mem0, 'leaving replays early (Esc, B, Leave) changes nothing either')
        # 4) From the title screen's Extras: the whole prologue replayed, then back to the title.
        p.eval("FemcMenu.close()"); p.eval("new Promise(r=>setTimeout(r,260))")
        p.eval("FemcGame.S.phase='title';FemcGame.save()")
        p.goto(URL)
        motion(p, True)
        p.wait("!!document.querySelector('.g-title')")
        before, mem0 = p.eval(SNAP), p.eval(MEM)
        p.eval("document.querySelector('.g-title').click()")
        p.wait("!document.querySelector('.g-title.is-splash')")
        ok(p.eval("[...document.querySelectorAll('.g-title-menu button')].map(b=>b.dataset.t)") == ['continue', 'new', 'load', 'extras', 'settings'], 'the title menu has Extras')
        p.eval("document.querySelector('.g-title-menu [data-t=extras]').click()")
        p.wait("!!document.querySelector('.g-xt-ov:not(.out) .g-al')")
        ok(p.eval("document.querySelectorAll('.g-xt-ov .g-al-tile:not(.lock)').length") > 0, 'Extras opens on the album')
        p.eval("document.querySelector('.g-xt-ov [data-xt=album]').focus()")
        key(p, 'ArrowRight')
        p.wait("!!document.querySelector('.g-xt-ov .g-th-row')")
        ok(True, 'Right on the Extras tabs goes to the Theater')
        p.eval("[...document.querySelectorAll('.g-xt-ov .g-th-row')].find(x=>x.textContent.includes('Prologue')).click()")
        p.wait("!!document.querySelector('.gs.gs-replay:not(.out)')")
        ok(not p.eval("document.body.contains(document.querySelector('.g-xt-ov'))"), 'the Extras panel steps aside')
        seen = play_out(p, 6000)
        ok(seen['line'] > 20, f'the prologue replays from the title ({seen["line"]} lines)')
        p.wait("!!document.querySelector('.g-xt-ov:not(.out)')", 10)
        ok(p.eval(SNAP) == before and p.eval(MEM) == mem0, 'a replay from the title leaves the save byte-identical')
        p.eval("document.querySelector('.g-xt-ov [data-close]').click()")
        p.wait("!document.querySelector('.g-xt-ov:not(.out)')")
        ok(p.eval("document.activeElement?.dataset?.t") == 'extras' and p.eval(SNAP) == before, 'closing Extras saves nothing; focus is back on Extras')
        clean(p, 'theater')

    # ── Endings stay hidden until seen ──
    if want('endings'):
        B = build(p)
        NAMES = ['the last stop', 'I am thou', 'where it begins', 'low tide', 'the unfated life', 'here']
        open_menu(p, 'theater')
        txt = p.eval("document.querySelector('.g-fm-body').textContent")
        ok(not p.eval("FemcMenu.theaterItems().filter(x=>x.sec==='endings').length") and 'ENDING' not in txt, 'no ending in the Theater before one is seen')
        ok(not p.eval("document.querySelector('[data-ths=endings]')"), 'no Endings filter either')
        p.eval("document.querySelector('[data-tab=album]').click()")
        al = p.eval("document.querySelector('.g-fm-body').innerHTML")
        ok(not [n for n in NAMES if f'ENDING · {n}' in al] and 'ending-' not in al, 'the album names no ending and loads no ending art')
        # An earlier playthrough's ending (the clears list).
        p.eval("localStorage.setItem('kg-femc-revamp-clears', JSON.stringify([{run:'rOld',ending:'low tide',xmas:'jungwon',at:1,ngp:0}]))")
        p.eval("FemcMenu.close()"); p.eval("new Promise(r=>setTimeout(r,260))")
        open_menu(p, 'theater')
        ends = p.eval("FemcMenu.theaterItems().filter(x=>x.sec==='endings').map(x=>x.title)")
        ok(ends == ['ENDING · low tide'], f'one earlier ending, and only that one: {ends}')
        txt = p.eval("document.querySelector('.g-fm-body').textContent")
        ok(not [n for n in NAMES if n != 'low tide' and f'ENDING · {n}' in txt], 'no other ending is named')
        data = p.eval("FemcMenu.albumData().cgs.filter(c=>c.group==='endings').map(c=>[c.id,c.on,c.title])")
        ok([d[0] for d in data if d[1]] == ['ending-strangers-home'] and any(d[2] == 'ENDING · low tide' for d in data if d[1]), f'its CG unlocks, captioned with its name: {data}')
        before, mem0 = p.eval(SNAP), p.eval(MEM)
        p.eval("document.querySelector('[data-ths=endings]').click()")
        p.eval("document.querySelector('.g-th-row').click()")
        p.wait("!!document.querySelector('.gs.gs-replay:not(.out)')")
        seen = play_out(p, 4000)
        ok('ending-strangers-home' in seen['cgs'] and not [c for c in seen['cgs'] if c.startswith('ending-') and c != 'ending-strangers-home'], f'it replays its own route: {sorted(seen["cgs"])}')
        p.wait("!!document.querySelector('.g-fm-ov:not(.out)')", 10)
        ok(p.eval(SNAP) == before and p.eval(MEM) == mem0, 'an ending replay leaves the save byte-identical (no CG recorded, no flags)')
        # This playthrough's own ending.
        p.eval("FemcMenu.close()"); p.eval("new Promise(r=>setTimeout(r,260))")
        p.eval("(()=>{const S=FemcGame.S;S.events.push('end-ending');S.flags['route-R']=true;FemcGame.saveQuiet()})()")
        open_menu(p, 'theater')
        ends = p.eval("FemcMenu.theaterItems().filter(x=>x.sec==='endings').map(x=>[x.title,x.sub])")
        ok(ends[0] == ['ENDING · where it begins', 'This playthrough'] and len(ends) == 2, f'this playthrough\'s ending first, then the earlier one: {ends}')
        ok(p.eval("FemcMenu.albumData().cgs.find(c=>c.id==='ending-runners-home').on"), 'its CG unlocks by the backfill')
        clean(p, 'endings')

    # ── New Game+ keeps the album and the Theater ──
    if want('carry'):
        B = build(p)
        before = p.eval("FemcMenu.albumData().cgs.filter(c=>c.on).map(c=>c.id)")
        th = p.eval("FemcMenu.theaterItems().map(x=>x.src.key)")
        p.eval("(()=>{const keep=FemcMenu.albumCarry();FemcGame.newGamePlus();FemcGame.S.album=keep;FemcGame.saveQuiet()})()")
        ok(p.eval("FemcGame.S.events.length") == 0 and p.eval("FemcGame.S.fragments.length") == 0, 'New Game+ starts the year over')
        ok(sorted(p.eval("FemcMenu.albumData().cgs.filter(c=>c.on).map(c=>c.id)")) == sorted(before), 'the album keeps every CG')
        ok(len([f for f in p.eval("FemcMenu.albumData().frags") if f['on']]) == len(B['frags']), 'and every memory card')
        ok(sorted(p.eval("FemcMenu.theaterItems().map(x=>x.src.key)")) == sorted(th), 'the Theater keeps every scene')
        ok(p.eval("JSON.parse(localStorage.getItem('kg-femc-revamp')).album.v") == 1, 'saved with the new playthrough')
        clean(p, 'carry')

    # ── Views ──
    if want('views'):
        B = build(p)
        motion(p, False)
        for w, h in ((1000, 486), (375, 812), (1440, 900)):
            view(p, w, h)
            open_menu(p, 'album')
            p.eval("document.querySelectorAll('.g-al-tile img').forEach(i=>i.loading='eager')")
            p.eval("Promise.all([...document.querySelectorAll('.g-al-tile img')].map(i=>i.complete?1:new Promise(r=>{i.onload=i.onerror=r})))")
            ok(p.eval("document.documentElement.scrollWidth<=innerWidth && (()=>{const b=document.querySelector('.g-fm-body');return b.scrollWidth<=b.clientWidth+1})()"), f'{w}x{h}: the album fits across')
            shot(p, f'album-{w}x{h}')
            p.eval("document.querySelector('[data-al=\"0\"]').click()")
            p.wait("!!document.querySelector('.g-av-ov:not(.out) .g-av-img')")
            p.eval("new Promise(r=>{const i=document.querySelector('.g-av-img');i.complete?r():i.onload=r})")
            p.eval("new Promise(r=>setTimeout(r,1600))")  # after the zoom
            fit = p.eval("""(()=>{const i=document.querySelector('.g-av-img').getBoundingClientRect(),c=document.querySelector('.g-av-close').getBoundingClientRect(),n=document.querySelector('.g-av-nav.next').getBoundingClientRect();
              return {img:i.width>40&&i.left>=-1&&i.right<=innerWidth+1&&i.bottom<=innerHeight+1,btn:c.right<=innerWidth&&n.right<=innerWidth&&n.bottom<=innerHeight,wide:document.documentElement.scrollWidth<=innerWidth}})()""")
            if not all(fit.values()): print(p.eval("JSON.stringify([document.querySelector('.g-av-img').getBoundingClientRect(),innerWidth,innerHeight,document.querySelector('.g-av-img').src])"))
            ok(all(fit.values()), f'{w}x{h}: the viewer fits ({fit})')
            shot(p, f'viewer-{w}x{h}')
            p.eval("document.querySelector('.g-av-nav.next').click()")
            p.eval("new Promise(r=>setTimeout(r,1500))")
            shot(p, f'viewer-card-{w}x{h}')
            key(p, 'Escape'); p.wait("!document.querySelector('.g-av-ov:not(.out)')")
            p.eval("document.querySelector('[data-tab=theater]').click()")
            ok(p.eval("document.documentElement.scrollWidth<=innerWidth && (()=>{const b=document.querySelector('.g-fm-body');return b.scrollWidth<=b.clientWidth+1})()"), f'{w}x{h}: the Theater fits across')
            shot(p, f'theater-{w}x{h}')
            p.eval("document.querySelector('.g-th-row').click()")
            p.wait("!!document.querySelector('.gs.gs-replay:not(.out)')")
            for _ in range(5): p.eval(STEP); time.sleep(0.05)
            p.eval("new Promise(r=>setTimeout(r,900))")
            ok(p.eval("(()=>{const t=document.querySelector('.gs-replay-tag').getBoundingClientRect(),l=document.querySelector('.gs-tools').getBoundingClientRect();return t.right<=innerWidth&&(t.top>=l.bottom-1||t.right<=l.left)})()"), f'{w}x{h}: the replay tag sits clear of the tools')
            shot(p, f'replay-{w}x{h}')
            p.eval("document.querySelector('.gs:not(.out) [data-t=leave]').click()")
            p.wait("!document.querySelector('.gs:not(.out)')", 10)
        view(p, 1280, 860)
        clean(p, 'views')

    print(f'femc_gallery: {len(checks)} checks passed. Screenshots: {OUT}')
finally:
    p.close()
