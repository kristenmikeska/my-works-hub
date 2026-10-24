"""Skill-effect sheets (FEMC-ART-TODO 5F): fx.js's sheet player, in a real practice battle in headless Chrome (isolated
profile, localhost; no player saves). Needs no shipped art: it makes its own 3 x 2 test sheet in the page (a canvas data
URL registered in FEMC_FX_ART) and removes it again.

Checks:
  - a sheet plays when present: all six frames in order, the damage lands on frame 3 (play() returns 140 ms at 1x),
    and a real Attack through the battle menu plays the sheet (mark fx-art-<kind>);
  - the fallback: no entry, a 404 sheet, or a sheet still loading all play the code effect, unchanged;
  - the buff sheet takes its stat colour;
  - Reduce flashes: peak frames at 0.45, crit drawn at 0.75 size;
  - reduced motion: no sheet, the single soft flash;
  - no browser errors; screenshots of a sheet mid-play at 1000x486, 375x812 and 1440x900.
Run: python3 tests/femc_fx_art.py [--shots DIR]
"""
import argparse, base64, json, pathlib, tempfile, time
from femc_browser import Page

ap = argparse.ArgumentParser()
ap.add_argument('--shots', default='')
args = ap.parse_args()
OUT = pathlib.Path(args.shots) if args.shots else pathlib.Path(tempfile.mkdtemp(prefix='femc-fx-art-'))
OUT.mkdir(parents=True, exist_ok=True)


def ok(cond, what):
    if not cond: raise AssertionError(what)


# A 3 x 2 test sheet drawn in the page: six growing rings on transparent (what tools/femc-fx.py writes).
MAKE = r'''(names => {
  const c = document.createElement('canvas'); c.width = 384; c.height = 256; const g = c.getContext('2d');
  [8, 22, 54, 60, 40, 18].forEach((r, i) => { const x = (i % 3) * 128 + 64, y = Math.floor(i / 3) * 128 + 64;
    const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, '#fff'); gr.addColorStop(.6, 'rgba(120,200,255,.9)'); gr.addColorStop(1, 'rgba(120,200,255,0)');
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); });
  const src = c.toDataURL('image/png');
  window.FEMC_FX_ART = window.FEMC_FX_ART || {};
  names.forEach(n => { FEMC_FX_ART[n] = { cell: 128, frames: 6, peak: 2, blend: 'lighter', src, tint: n === 'buff' || undefined }; });
  FemcFX.preloadArt(); return true;
})'''
AT = "({ x: innerWidth / 2, y: innerHeight * 0.4, w: 220, h: 260 })"


def last(p):
    return p.eval('FemcFX.sheetLog.length ? FemcFX.sheetLog[FemcFX.sheetLog.length - 1] : null')


def logn(p):
    return p.eval('FemcFX.sheetLog.length')


def play(p, kind, o='{}', wait=0.7):
    t = p.eval(f'FemcFX.play({json.dumps(kind)}, {AT}, {o})')
    time.sleep(wait)
    return t


p = Page()
results = {}
try:
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 800, 'deviceScaleFactor': 1, 'mobile': False})
    p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=1&seed=4'})
    p.wait("!!window.FemcBattle && FemcBattle.screen()==='hub'", 60)
    p.eval("window.__btGroup=['maya'];document.querySelector('[data-go=run]').click()")
    for _ in range(300):
        if p.eval("!!(FemcBattle.ctl && FemcBattle.ctl.items && FemcBattle.ctl.items.some(i => i.v === 'attack') && FemcBattle.ctl.pickValue && document.querySelector('.bt-fxc'))"): break
        # To the first Shadow on the node map (tips dismissed), until a party member's command menu is up.
        p.eval("(() => { const F = FemcBattle, c = F.ctl, d = document, tip = d.querySelector('.bt-tip [data-ok]'); if (tip) return tip.click();"
               " if (c && c.kind === 'map') { const o = c.opts || []; const n = o.find(x => x.type === 'shadow' && !x.cleared) || o.find(x => !x.visited) || o[0]; if (n) c.go(n.id); } })()")
        time.sleep(0.1)
    ok(p.eval("FemcFX.reduced()") is False, 'motion on')
    # Nothing shipped is relied on: clear whatever index.js listed.
    p.eval("window.FEMC_FX_ART = {}; true")

    # 1. Fallback first: no entry, a 404, a sheet still loading -> the code effect, nothing from the sheet player.
    n0 = logn(p)
    t_code = play(p, 'pierce')
    ok(p.eval("FemcFX.artFor('pierce')") is None and logn(p) == n0, 'no entry: code effect')
    p.eval("FEMC_FX_ART.slash = { cell: 256, frames: 6, peak: 2, blend: 'lighter', src: 'assets/femc/battle/art/fx/no-such-sheet.webp' }; FemcFX.preloadArt(); true")
    time.sleep(0.8)
    t_slash = play(p, 'slash')
    ok(p.eval("FemcFX.artFor('slash')") is None and logn(p) == n0, '404 sheet: code effect')
    ok(p.eval("FemcFX.play('weak', " + AT + ")") == 0 and logn(p) == n0, 'sheet-only kind without art: nothing')
    p.ws.events.clear()  # the deliberate 404 above
    results['fallback'] = {'pierce lands (code)': t_code, 'slash lands (code)': t_slash}

    # 2. A sheet plays when present: six frames, the impact on frame 3.
    p.eval(MAKE + "(['pierce', 'slash', 'strike', 'crit', 'buff'])")
    p.wait("FemcFX.hasArt('pierce') && FemcFX.hasArt('crit') && FemcFX.hasArt('buff')", 10)
    ok(p.eval("FemcFX.artFor('pierce')") == 'pierce', 'artFor')
    t = play(p, 'pierce', '{}', 0.8)
    lg = last(p)
    ok(t == 140, f'lands on frame 3 at 140 ms, got {t}')
    ok(lg['name'] == 'pierce' and lg['frames'] == [0, 1, 2, 3, 4, 5], f'six frames in order {lg}')
    ok(lg['peakAlpha'] == 1, lg)
    ok(p.eval("FemcFX.artFor('fear')") is None, 'fear without fear/dark sheets: code')
    # Buff: tinted per stat; debuff direction has no sheet here -> code.
    play(p, 'buff', "{ stat: 'atk', dir: 1 }")
    ok(last(p)['tint'] == '#ff6b6b', last(p))
    n1 = logn(p); play(p, 'buff', "{ stat: 'atk', dir: -1 }"); ok(logn(p) == n1, 'debuff falls back to code')
    full_side = (play(p, 'crit', '{}', 0.6), last(p)['side'])[1]
    # A real Attack through the battle menu plays its element's sheet.
    before = p.eval("Object.assign({}, FemcBattle.marks)")
    p.eval("FemcBattle.ctl.pickValue('attack')")
    time.sleep(0.2)
    p.eval("(() => { const f = FemcBattle.B.foes().find(f => !f.dead); FemcBattle.ctl.pickValue(f.id); })()")
    p.wait("(() => { const m = FemcBattle.marks; return ['pierce','slash','strike'].some(k => (m['fx-art-' + k] || 0) > (" + json.dumps(before) + "['fx-art-' + k] || 0)); })()", 20)
    results['sheet'] = {'lands': t, 'frames': lg['frames'], 'real attack': 'fx-art mark'}

    # Screenshots mid-sheet (the battle paused on the peak frame).
    for w, h, name, mobile in [(1000, 486, 'fx-1000x486', False), (375, 812, 'fx-375x812', True), (1440, 900, 'fx-1440x900', False)]:
        p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
        time.sleep(0.4)
        p.eval("FemcFX.resize(); true")
        p.eval(f"FemcFX.play('pierce', {AT}, {{}}); true")
        time.sleep(0.17)
        p.eval("FemcFX.pause(); true")
        shot = p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']
        (OUT / f'{name}.png').write_bytes(base64.b64decode(shot))
        p.eval("FemcFX.resume(); true")
        time.sleep(0.6)
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 800, 'deviceScaleFactor': 1, 'mobile': False})
    time.sleep(0.3); p.eval("FemcFX.resize(); true")

    # 3. Reduce flashes: peak frames at 0.45, crit at 0.75 size.
    p.eval("FemcFX.setCalm(true); true")
    play(p, 'pierce')
    ok(abs(last(p)['peakAlpha'] - 0.45) < 1e-6, last(p))
    play(p, 'crit', '{}', 0.6)
    ok(abs(last(p)['side'] - full_side * 0.75) <= 1, (last(p)['side'], full_side))
    p.eval("FemcFX.setCalm(false); true")
    results['calm'] = {'peak alpha': 0.45, 'crit side': [full_side, last(p)['side']]}

    # 4. Reduced motion: no sheet, the existing soft flash.
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    p.wait("FemcFX.reduced()", 5)
    n2 = logn(p)
    t_rm = play(p, 'pierce')
    ok(t_rm == 0 and logn(p) == n2 and p.eval("FemcFX.artFor('pierce')") is None and not p.eval("FemcFX.hasArt('crit')"), 'reduced motion: no sheet')
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'no-preference'}]})
    results['reduced motion'] = 'soft flash only'

    errs = p.console(); ok(not errs, errs)
    print(json.dumps({'ok': True, 'results': results, 'screenshots': str(OUT)}, indent=1))
except Exception:
    print('Browser errors:', p.console(), flush=True)
    raise
finally:
    p.close()
