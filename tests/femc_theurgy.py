"""Theurgy cut-ins and the Evoker sheet, played through real battle menus in an isolated browser (story fights run in
femc-game.html's Dark Hour frame). Never touches the player's saves.

Checks:
  - Solar's Theurgy in each Haenim form shows that form's cut-in, name and strike sheet (Rise and Shine, Golden Hour,
    Spring Tide, Landslide, Unveiled), with the mechanics unchanged;
  - Haechan's layered version (bg / Persona / character) with his strike sheet, and the layers alone;
  - the searchers' cut-in + strike-sheet versions; a still-only cut-in; the stylized fallback for someone without art;
  - every S.E.E.S. member's cut-in + strike sheet (Akihiko .. Shinjiro): the art loads and the whole cut-in plays;
  - Solar's Evoker sheet: in the summon cut-in and on the battlefield figure for repeat / Off summons;
  - settings: Always, 1st per battle, Off, Rush (short versions), reduced motion (a fade), battle speed scaling;
  - all art loads, no browser errors; screenshots mid-animation at 1000x486, 375x812 and 1440x900.
Run: python3 tests/femc_theurgy.py [--shots DIR]
"""
import argparse, base64, json, pathlib, tempfile, time
from femc_browser import Page

ap = argparse.ArgumentParser()
ap.add_argument('--shots', default='')
args = ap.parse_args()
OUT = pathlib.Path(args.shots) if args.shots else pathlib.Path(tempfile.mkdtemp(prefix='femc-theurgy-'))
OUT.mkdir(parents=True, exist_ok=True)

FORMS = {'haenim': ('RISE AND SHINE', 'solar-haenim.webp', 'solar-strike-b'),
         'haenim-sunna': ('GOLDEN HOUR', 'solar-sunna.webp', 'solar-strike-b'),
         'haenim-mazu': ('SPRING TIDE', 'solar-mazu.webp', 'solar-strike-b'),
         'haenim-nike': ('LANDSLIDE', 'solar-nike.webp', 'solar-strike-a'),
         'haenim-unveiled': ('UNVEILED', 'solar-unveiled.webp', 'solar-strike-b')}
results = {}

# In the battle frame: record every cut-in as it appears (class, art, name, whether its images decoded) and when it ends.
WATCH = r'''(() => {
  window.thLog = []; window.evkLog = [];
  const look = el => ({ cls: el.className, mid: el.dataset.mid || '', form: el.dataset.form || '',
    name: (el.querySelector('.th-name') || {}).textContent || '',
    imgs: [...el.querySelectorAll('img')].map(i => i.getAttribute('src')), t0: performance.now(), done: null });
  new MutationObserver(ms => ms.forEach(m => {
    m.addedNodes.forEach(n => { if (n.classList && n.classList.contains('bt-theurgy')) { const r = look(n); n._log = r; thLog.push(r); }
      if (n.classList && n.classList.contains('bt-evoke')) evkLog.push({ body: [...n.querySelectorAll('.bt-evk-body img')].map(i => i.getAttribute('src')), classes: [] , el: null }); });
    m.removedNodes.forEach(n => { if (n._log) { n._log.done = performance.now(); n._log.final = n.className; n._log.loaded = [...n.querySelectorAll('img')].every(i => i.complete && i.naturalWidth > 0); } });
  })).observe(document.querySelector('.bt-cut'), { childList: true });
  // The field figure's Evoker overlay: which frames showed.
  window.fieldFrames = [];
  new MutationObserver(() => { const ov = document.querySelector('.bt-fighter img.evk'); if (ov && ov.dataset.f != null && fieldFrames[fieldFrames.length - 1] !== ov.getAttribute('src')) fieldFrames.push(ov.getAttribute('src')); })
    .observe(document.querySelector('.bt-fighter'), { subtree: true, childList: true, attributes: true, attributeFilter: ['src'] });
  return true;
})()'''


def fight(p, party, *, speed=8, cutins='always', setup='', day='12/12'):
    """A fresh story fight with this party; returns once the battle is live. setup: JS run in the frame before the watch."""
    p.top()
    p.goto(f'femc-game.html?seed=1' + (f'&speed={speed}' if speed else ''))
    p.eval('FemcGame.newGame();FemcGame.S.joined=' + json.dumps(party) + ';FemcGame.S.day=FemcGame.dayOf("' + day + '");'
           'FemcGame.makeHandoff("scripted",{script:"theurgy-check",notes:"",segment:1,forced:true,party:' + json.dumps(party) + '})')
    p.battle()
    for _ in range(200):
        state = p.eval("document.querySelector('[data-prep=begin]') ? (document.querySelector('[data-prep=begin]').click(), 'prep') : (window.FemcBattle && FemcBattle.B && document.querySelector('.bt-fighter') ? 'live' : '')")
        if state == 'live': break
        time.sleep(0.1)
    p.eval('''(() => { window.__hoStay = true; const s = FemcBattle.save; s.cutins = ''' + json.dumps(cutins) + '''; s.awakened = true;
      FemcBattle.B.party().forEach(u => { u.maxHp = u.hp = 99999; u.maxSp = u.sp = 999; u.th = 100; });
      FemcBattle.B.foes().forEach(f => { f.maxHp = f.hp = 9e6; }); ''' + setup + ''' })()''')
    p.eval(WATCH)


def act(p, mid, choice, *, before='', timeout=60):
    """Wait for mid's command menu and pick choice ('theurgy', 'guard' or ['skill', id]). Other members guard."""
    t0 = time.time()
    while time.time() - t0 < timeout:
        r = p.eval('''(() => { const c = FemcBattle.ctl, b = FemcBattle.B; if (c && c.kind === 'allout') { c.pickValue('0'); return ''; }
          if (!c || c.kind !== 'menu' || !c.items) return '';
          const u = b.U(b.S.cur.id); if (!u || u.side !== 'party') return '';
          if (c.items.some(i => i.v === 'guard') && u.mid !== ''' + json.dumps(mid) + ''') { u.th = Math.min(u.th, 99); c.pickValue('guard'); return 'other'; }
          if (!c.items.some(i => i.v === 'guard') && !c.items.some(i => i.v === 'attack')) return '';
          return 'mine'; })()''')
        if r == 'mine':
            p.eval('(() => { const b = FemcBattle.B, u = b.U(b.S.cur.id); ' + before + ' })()')
            if choice == 'theurgy':
                ok = p.eval("(() => { const c = FemcBattle.ctl; if (!c.items.some(i => i.v === 'theurgy')) return false; c.pickValue('theurgy'); return true; })()")
                if not ok:  # the menu was built before the gauge filled: guard once, it's full next turn
                    p.eval("(() => { const b = FemcBattle.B, u = b.U(b.S.cur.id); u.th = 100; FemcBattle.ctl.pickValue('guard'); })()")
                    continue
            elif choice == 'guard':
                p.eval("FemcBattle.ctl.pickValue('guard')")
            else:
                p.eval("FemcBattle.ctl.pickValue('skill')")
                # choice[1]: an element; her first usable skill of it (the list changes with level and the tree).
                p.wait("FemcBattle.ctl && FemcBattle.ctl.items && FemcBattle.ctl.items.some(i => (FEMC_BATTLE_DATA.skills[i.v] || {}).el === " + json.dumps(choice[1]) + " && !i.off)")
                p.eval("FemcBattle.ctl.pickValue(FemcBattle.ctl.items.find(i => (FEMC_BATTLE_DATA.skills[i.v] || {}).el === " + json.dumps(choice[1]) + " && !i.off).v)")
                time.sleep(0.15)
                p.eval("(() => { const f = FemcBattle.B.foes().find(f => !f.dead); FemcBattle.ctl.pickValue(f.id); })()")
            return True
        time.sleep(0.04)
    raise TimeoutError(f'no menu for {mid}')


def wait_cut(p, n, timeout=40):
    p.wait(f'thLog.length >= {n} && thLog[{n - 1}].done != null', timeout)
    return p.eval(f'thLog[{n - 1}]')


def marks(p):
    return p.eval('Object.assign({}, FemcBattle.marks)')


def check(cond, what):
    if not cond: raise AssertionError(what)


p = Page()
try:
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 800, 'deviceScaleFactor': 1, 'mobile': False})

    # 1. Solar, every Haenim form: the form's cut-in, name and strike sheet; damage dealt like before.
    fight(p, ['solar'])
    seen = {}
    for i, (form, (name, img, sheet)) in enumerate(FORMS.items()):
        hp0 = p.eval('FemcBattle.B.foes().reduce((a, f) => a + f.hp, 0)')
        act(p, 'solar', 'theurgy', before=f"u.personaId = {json.dumps(form)}; u.th = 100;")
        r = wait_cut(p, i + 1)
        check(name in r['name'], (form, r['name']))
        check(any(img in s for s in r['imgs']), (form, r['imgs']))
        check(all(any(f'{sheet}-{k}.webp' in s for s in r['imgs']) for k in range(3)), (form, 'sheet', r['imgs']))
        check('has-sheet' in r['cls'] and 'st-full' in r['cls'] and 'kind-cut' in r['cls'] and r['loaded'], (form, r))
        check(r['form'] == (form if form != 'haenim' else ''), (form, r['form']))
        check(p.eval('FemcBattle.B.foes().reduce((a, f) => a + f.hp, 0)') < hp0, (form, 'no damage'))
        seen[form] = name
        p.eval("FemcBattle.B.party()[0].th = 100")
    m = marks(p)
    for k in ('theurgy-prelude', 'theurgy-windup', 'theurgy-strike', 'theurgy-follow', 'theurgy-final', 'theurgy-impact', 'theurgy-done'):
        check(m.get(k, 0) >= 5, (k, m.get(k)))
    # The menu names the form's Theurgy too.
    act(p, 'solar', 'guard', before="u.personaId = 'haenim-mazu'; u.th = 100;")
    p.wait("FemcBattle.ctl && FemcBattle.ctl.kind === 'menu' && FemcBattle.ctl.items && FemcBattle.ctl.items.some(i => i.v === 'theurgy')")
    check('Spring Tide' in p.eval("FemcBattle.ctl.items.find(i => i.v === 'theurgy').right"), 'menu name')
    errs = p.console(); check(not errs, errs)
    results['solarForms'] = seen

    # 2. Haechan: layers + strike sheet, then the layers alone; Jungwon, Jihoon, Minji: cut-in + sheet;
    #    Jungwon's still alone (no sheet); Akihiko with his art taken away: the stylized fallback.
    fight(p, ['solar', 'haechan', 'jungwon', 'akihiko'])
    r = (act(p, 'haechan', 'theurgy'), wait_cut(p, 1))[1]
    check('kind-layers' in r['cls'] and 'has-sheet' in r['cls'] and r['loaded'], r)
    for piece in ('haechan-bg.webp', 'haechan-persona.webp', 'haechan-char.webp', 'haechan-strike-0.webp', 'haechan-strike-2.webp'):
        check(any(piece in s for s in r['imgs']), (piece, r['imgs']))
    check('EVERY UNIVERSE' in r['name'], r['name'])
    p.eval("FEMC_BATTLE_DATA.party.find(m => m.id === 'haechan').theurgy.sheet = null; FemcBattle.B.party().forEach(u => u.th = 100)")
    r = (act(p, 'haechan', 'theurgy'), wait_cut(p, 2))[1]
    check('kind-layers' in r['cls'] and 'has-sheet' not in r['cls'] and r['loaded'], r)
    r = (act(p, 'jungwon', 'theurgy'), wait_cut(p, 3))[1]
    check('kind-cut' in r['cls'] and 'has-sheet' in r['cls'] and any('jungwon.webp' in s for s in r['imgs']) and any('jungwon-strike-1' in s for s in r['imgs']), r)
    p.eval("FEMC_BATTLE_DATA.party.find(m => m.id === 'jungwon').theurgy.sheet = null; FemcBattle.B.party().forEach(u => u.th = 100)")
    r = (act(p, 'jungwon', 'theurgy'), wait_cut(p, 4))[1]
    check('kind-cut' in r['cls'] and 'has-sheet' not in r['cls'] and r['loaded'], r)
    p.eval("(() => { const t = FEMC_BATTLE_DATA.party.find(m => m.id === 'akihiko').theurgy; delete t.img; delete t.focus; delete t.sheet; })()")
    r = (act(p, 'akihiko', 'theurgy'), wait_cut(p, 5))[1]
    check('kind-styl' in r['cls'] and r['loaded'] and 'LIGHTNING CADENZA' in r['name'], r)
    m = marks(p)
    check(m.get('theurgy-kind-layers') == 2 and m.get('theurgy-kind-styl') == 1 and m.get('theurgy-impact') == 5, m)
    errs = p.console(); check(not errs, errs)
    fight(p, ['solar', 'jihoon', 'minji'])
    for i, mid in enumerate(['jihoon', 'minji']):
        r = (act(p, mid, 'theurgy'), wait_cut(p, i + 1))[1]
        check('has-sheet' in r['cls'] and any(f'{mid}.webp' in s for s in r['imgs']) and any(f'{mid}-strike-2' in s for s in r['imgs']) and r['loaded'], r)
    errs = p.console(); check(not errs, errs)
    results['searchers'] = 'Haechan layers+sheet and layers alone; Jungwon sheet and still alone; Jihoon, Minji sheets; Akihiko stylized'

    # 2b. S.E.E.S.: each member's own cut-in and strike sheet, through the real Theurgy command, every phase played.
    SEES = {'akihiko': 'LIGHTNING CADENZA', 'yukari': 'CADENZA', 'junpei': 'BRAVE BLADE', 'mitsuru': 'BUFUDYNE EXECUTION',
            'aigis': 'ORGIA MODE', 'ken': 'JUDGMENT', 'koromaru': 'HELLFIRE HOWL', 'shinjiro': 'CHARGE'}
    played = {}
    for group, day in ((['akihiko', 'yukari', 'junpei'], '12/12'), (['mitsuru', 'aigis', 'ken'], '12/12'), (['koromaru', 'shinjiro'], '9/20')):
        fight(p, ['solar'] + group, day=day)
        for i, mid in enumerate(group):
            r = (act(p, mid, 'theurgy', before='u.th = 100;'), wait_cut(p, i + 1))[1]
            check(r['mid'] == mid and SEES[mid] in r['name'].upper(), (mid, r['mid'], r['name']))
            check('kind-cut' in r['cls'] and 'has-sheet' in r['cls'] and 'st-full' in r['cls'] and r['loaded'], (mid, r))
            check(any(f'/{mid}.webp' in s for s in r['imgs']), (mid, 'cut-in', r['imgs']))
            check(all(any(f'{mid}-strike-{k}.webp' in s for s in r['imgs']) for k in range(3)), (mid, 'sheet', r['imgs']))
            played[mid] = round(r['done'] - r['t0'])
        m = marks(p)
        for k in ('theurgy-windup', 'theurgy-strike', 'theurgy-follow', 'theurgy-final', 'theurgy-impact', 'theurgy-done'):
            check(m.get(k, 0) >= len(group), (group, k, m.get(k)))
        errs = p.console(); check(not errs, errs)
    # Every new file decodes at a sensible size (the cut-in at 16:9, the three frames on one shared canvas).
    sizes = p.eval('''Promise.all(''' + json.dumps([f'{m}.webp' for m in SEES] + [f'{m}-strike-{k}.webp' for m in SEES for k in range(3)]) + '''.map(f =>
      new Promise(res => { const i = new Image(); i.onload = () => res([f, i.naturalWidth, i.naturalHeight]); i.onerror = () => res([f, 0, 0]);
        i.src = 'assets/femc/battle/art/theurgy/' + f; })))''')
    for f, w, h in sizes:
        check(w > 0 and h > 0, (f, 'no load'))
        if '-strike-' not in f: check((w, h) == (1600, 900), (f, w, h))
    for mid in SEES:
        check(len({(w, h) for f, w, h in sizes if f.startswith(mid + '-strike-')}) == 1, (mid, 'frame sizes'))
    results['sees'] = played

    # 3. Settings: 1st per battle (full, then short), Off (short), Always (full twice), Rush (short).
    fight(p, ['solar'], cutins='first')
    for n in (1, 2):
        act(p, 'solar', 'theurgy', before='u.th = 100;'); r = wait_cut(p, n)
        check(('st-full' if n == 1 else 'st-short') in r['cls'], (n, r['cls']))
    fight(p, ['solar'], cutins='off')
    act(p, 'solar', 'theurgy'); check('st-short' in wait_cut(p, 1)['cls'], 'off')
    fight(p, ['solar'], cutins='always')
    for n in (1, 2):
        act(p, 'solar', 'theurgy', before='u.th = 100;'); check('st-full' in wait_cut(p, n)['cls'], ('always', n))
    # Rush (Tartarus: Rush is for ordinary Shadows): its brain fires Theurgy the moment it's ready; the cut-in is the short one.
    p.top(); p.goto('femc-game.html?seed=1&speed=8')
    p.eval("FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf('12/12');FemcGame.S.joined=['solar','akihiko'];"
           "FemcGame.S.tartarus.lastParty=['solar','akihiko'];FemcGame.makeHandoff('tartarus',{party:['solar','akihiko']});FemcGame.save()")
    p.battle(); p.eval("window.__hoStay=true")
    for i in range(300):  # past any evolution cinematic and tips, to the Tartarus hub
        if p.eval("(()=>{if(FemcBattle.screen()==='hub'&&FemcBattle.ctl?.kind==='buttons')return true;const b=document.querySelector('.bt-evx-skip,.bt-tip [data-ok]');b&&b.click();return false})()"): break
        time.sleep(0.1)
    p.eval("window.__btGroup=['pesce','pesce'];FemcBattle.save.cutins='always';document.querySelector('[data-go=run],[data-go=cont]').click()")
    for i in range(400):
        st = p.eval("""(()=>{const F=FemcBattle,c=F.ctl;if(F.B&&F.screen()==='battle')return 'battle';const tip=document.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return null}
          if(c?.kind==='map'){const o=c.opts||[];const n=o.find(x=>x.type==='shadow')||o[0];if(n)c.go(n.id);return null}
          if(c?.kind==='buttons'){const b=document.querySelector('.bt-btn.pink:not(:disabled)');b&&b.click();return null}return null})()""")
        if st == 'battle': break
        time.sleep(0.05)
    p.wait("!!FemcBattle.B && !!document.querySelector('.bt-cut')", 60)
    p.eval("(()=>{const B=FemcBattle.B;B.foes().forEach(f=>{f.maxHp=f.hp=9e6});B.party().forEach(u=>{u.maxHp=u.hp=99999;u.th=100});return true})()")
    p.eval(WATCH)
    p.wait("FemcBattle.ctl?.kind==='menu'", 60)
    p.eval("FemcBattle.toggleRush()")
    r = wait_cut(p, 1)
    check('st-short' in r['cls'] and p.eval('FemcBattle.rushOn'), r['cls'])
    p.eval("FemcBattle.toggleRush(); FemcBattle.hoFinish('retreat')")
    errs = p.console(); check(not errs, errs)

    # Battle speed: the full cut-in at speed 3 takes about a third as long as at speed 1.
    times = {}
    for spd in (1, 3):
        fight(p, ['solar'], speed=0, setup=f'FemcBattle.save.speed = {spd};')
        act(p, 'solar', 'theurgy'); r = wait_cut(p, 1)
        times[spd] = r['done'] - r['t0']
    check(times[1] > 2.2 * times[3] and times[1] > 2500, times)
    results['speedMs'] = {k: round(v) for k, v in times.items()}

    # Reduced motion: a short fade, no strike sheet, no particles.
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    fight(p, ['solar', 'haechan'])
    act(p, 'haechan', 'theurgy'); r = wait_cut(p, 1)
    check('st-fade' in r['cls'] and 'has-sheet' not in r['cls'] and not any('strike' in s for s in r['imgs']), r)
    check(r['done'] - r['t0'] < 2500, r['done'] - r['t0'])
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'no-preference'}]})
    errs = p.console(); check(not errs, errs)
    results['settings'] = ['first: full then short', 'off: short', 'always: full twice', 'rush: short', 'reduced motion: fade', 'speed scales']

    # 4. The Evoker (2026-10-21): with Solar on the battlefield her sheet plays on her figure, raised, the shot while the
    #    cut-in breaks beside her (it starts at her right edge, so it has no full-body shot of its own), then lowered;
    #    repeat summons with the 1st-per-battle setting play it there too, with small glass beside her.
    fight(p, ['solar'], cutins='first', setup="FemcBattle.B.party()[0].th = 0;")
    act(p, 'solar', ['skill', 'fire'])
    p.wait("(FemcBattle.marks['field-evoke-done'] || 0) >= 1 && evkLog.length >= 1", 30)
    body = p.eval('evkLog[0].body'); ff = p.eval('fieldFrames')
    check(body == [] and (p.eval("FemcBattle.marks['evoke-side'] || 0") >= 1), body)
    check([any(f'solar-evoke-{k}' in s for s in ff) for k in range(3)] == [True] * 3, ff)
    p.eval('fieldFrames.length = 0')
    act(p, 'solar', ['skill', 'fire'])
    p.wait("(FemcBattle.marks['field-evoke-done'] || 0) >= 2", 30)
    ff = p.eval('fieldFrames')
    check([any(f'solar-evoke-{k}' in s for s in ff) for k in range(3)] == [True] * 3, ff)
    check(p.eval("!document.querySelector('.bt-fighter img.evk') && getComputedStyle(document.querySelector('.bt-fighter img')).opacity === '1'"), 'stance restored')
    # Her stance is the idle frame of her pose sheet (battle.js FIGHTER_POSES); the spell frame plays after the shot.
    p.wait("document.querySelector('.bt-fighter img').src.includes('/poses/solar-pose-0.webp')", 10)
    errs = p.console(); check(not errs, errs)
    results['evoker'] = {'cutInBody': body, 'fieldFrames': ff}

    # 5. Screenshots mid-animation: the strike (Haechan's sheet over his bg, Persona rising) and the closing impact,
    #    at three window sizes. The battle freezes on the mark; CSS animations are paused where they are.
    shots = []
    for (w, h, mobile) in [(1000, 486, False), (375, 812, True), (1440, 900, False)]:
        for at in ('theurgy-strike', 'theurgy-impact'):
            p.top()
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
            fight(p, ['solar', 'haechan'], speed=0)
            p.eval(f"window.__btFreezeAt = {json.dumps(at)}")
            act(p, 'haechan', 'theurgy')
            p.wait('FemcBattle.frozen', 30)
            time.sleep(0.25)
            p.eval("document.getAnimations().forEach(a => a.pause())")
            fit = p.eval('''(() => { const t = document.querySelector('.bt-theurgy'), n = t.querySelector('.th-name').getBoundingClientRect();
              return { w: innerWidth, h: innerHeight, cover: t.getBoundingClientRect().width >= innerWidth - 1, nameIn: n.left >= 0 && n.right <= innerWidth + 2 && n.bottom <= innerHeight,
                       scroll: document.documentElement.scrollWidth <= innerWidth }; })()''')
            check(fit['cover'] and fit['scroll'] and (at == 'theurgy-strike' or fit['nameIn']), (w, h, at, fit))
            p.top()
            name = f'{w}x{h}-{at.split("-")[1]}.png'
            (OUT / name).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
            shots.append(name)
    errs = p.console(); check(not errs, errs)
    results['screenshots'] = str(OUT)
    results['browserErrors'] = []
    print(json.dumps(results, indent=1))
finally:
    p.close()
