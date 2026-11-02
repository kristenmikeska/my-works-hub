"""Seasonal S.E.E.S. faces (FEMC-ART-TODO 16, art batch 129; core.js seasonFace, scene.js faceScene).

  python3 tests/femc_seasons.py [--screenshots /absolute/dir]

art        every seasonal folder has the six faces, every face of a folder shares one canvas (no jump between expressions),
           scale.js and place.js have an entry for each.
windows    summer 6/1-9/30 (Yakushima included) in any scene; winter 12/1-2/28 outdoors only (the backdrop by places.js
           weatherFx); the plain face on 5/31, 10/1, 11/30, 3/1, indoors in winter, in the Dark Hour; nothing outside a scene;
           a scene naming event outfits, a worn Wardrobe outfit (toggle on) and an epilogue world keep theirs; a replay
           uses its own day; scale() follows the face shown.
shots      a summer and a winter scene at 1440x900 and 390x844 (Solar with Yukari, Junpei, Fuuka, Ken), each face in turn.
Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-seasons-'))
OUT.mkdir(parents=True, exist_ok=True)
REPO = pathlib.Path(__file__).resolve().parents[1]
WHO = ['solar', 'yukari', 'junpei', 'akihiko', 'mitsuru', 'fuuka', 'ken']
FACES = ['neutral', 'happy', 'sad', 'serious', 'surprised', 'flustered']
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


# Art on disk: six faces, one canvas a folder.
from PIL import Image
for w in WHO:
    for s in ('summer', 'winter'):
        d = REPO / 'assets/femc/portraits' / f'{w}-{s}'
        sizes = {Image.open(d / f'{f}.webp').size for f in FACES}
        ok(len(sizes) == 1, f'{w}-{s}: six faces on one canvas {sizes}')

HELP = r"""
window.SZ = (() => {
  const G = FemcGame, SC = FemcScene;
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off');
  G.newGame(); G.S.phase = 'play'; G.S.started = true; G.S.flags = { armband: true };
  const at = md => { G.S.day = G.dayOf(md); G.S.slot = 'after'; };
  // Plays a short scene and returns the portrait folder each speaker showed (and Solar's), plus scale() mid-scene.
  function look(md, bg, who = 'yukari', opts = {}) {
    at(md);
    const out = {};
    const pl = SC.play({ scene: [{ place: 'Test', bg }, { s: who, f: 'happy', t: 'Hi.' }, { s: 'solar', f: 'neutral', t: 'Hey.' }, { n: 'End.' }], onDone: () => {}, ...opts });
    const el = pl.el; let k = 0;
    while (el.isConnected && !el.classList.contains('out') && k++ < 50) {
      const a = el.querySelector('.gs-portrait'), b = el.querySelector('.gs-solar');
      if (a && !a.hidden && a.getAttribute('src')) { out.who = /portraits\/([^/]+)\//.exec(a.src)?.[1] || a.src; out.scale = G.scale(who); }
      if (b && !b.hidden && b.getAttribute('src')) out.solar = b.src.includes('/skins/') ? b.src : /portraits\/([^/]+)\//.exec(b.src)?.[1] || b.src;
      el.click();
    }
    el.remove(); document.documentElement.classList.remove('g-in-scene');
    return out;
  }
  return { look, at };
})(); true
"""

p = Page()
try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    p.goto('femc-game.html?debug=1')
    p.eval(HELP)
    idx = p.eval('FEMC_PORTRAITS')
    sc = p.eval('FEMC_PORTRAIT_SCALE'); pl = p.eval('FEMC_PORTRAIT_PLACE')
    for w in WHO:
        for s in ('summer', 'winter'):
            ok(sorted(idx.get(f'{w}-{s}', [])) == sorted(FACES), f'{w}-{s} listed with all six faces')
            ok(f'{w}-{s}' in sc and f'{w}-{s}' in pl, f'{w}-{s} has a size and a placement')

    L = lambda md, bg, who='yukari', opts='{}': p.eval(f'SZ.look({json.dumps(md)}, {json.dumps(bg)}, {json.dumps(who)}, {opts})')
    CLASS, OUTSIDE, DARK = 'gekkoukan-classroom-day', 'iwatodaidorm-front-winter', 'darkhour-gekkoukan-gate'
    for md in ('6/1', '7/15', '9/30'):
        r = L(md, CLASS); ok(r['who'] == 'yukari-summer' and r['solar'] == 'solar-summer', f'{md}: summer faces indoors ({r})')
    r = L('7/22', 'yakushima-beach'); ok(r['who'] == 'yukari-summer', f'Yakushima: summer ({r})')
    for md in ('5/31', '10/1', '11/30', '3/1'):
        r = L(md, OUTSIDE); ok(r['who'] == 'yukari' and r['solar'] == 'solar', f'{md}: the plain faces ({r})')
    for md in ('12/1', '1/10', '2/28'):
        r = L(md, OUTSIDE); ok(r['who'] == 'yukari-winter' and r['solar'] == 'solar-winter', f'{md}: winter faces outdoors ({r})')
        r = L(md, CLASS); ok(r['who'] == 'yukari' and r['solar'] == 'solar', f'{md}: plain faces indoors ({r})')
    r = L('1/10', DARK); ok(r['who'] == 'yukari', f'the Dark Hour keeps the plain face ({r})')
    for w in WHO[1:]:
        r = L('8/3', CLASS, w); ok(r['who'] == f'{w}-summer', f'{w}: summer')
        r = L('1/20', OUTSIDE, w); ok(r['who'] == f'{w}-winter' and abs(r['scale'] - sc[f'{w}-winter']) < 1e-9, f"{w}: winter, scale() follows ({r})")
    ok(p.eval("SZ.at('7/15'); FemcGame.portrait('yukari','happy').includes('/yukari/')"), 'outside a scene: the plain face')
    r = L('7/15', CLASS, 'yukari', "{ faces: 'stay-hanami' }"); ok(r['who'] == 'yukari', f'a scene naming event outfits keeps its own ({r})')
    r = L('7/15', CLASS, 'yukari', "{ replay: true, date: { md: '1/12', day: 'Mon' } }"); ok(r['who'] == 'yukari', f'a replay follows its own day, not today ({r})')
    r = L('12/15', OUTSIDE, 'yukari', "{ replay: true, date: { md: '1/12', day: 'Mon' } }"); ok(r['who'] == 'yukari-winter', f'a winter replay outdoors ({r})')
    worn = p.eval("""(() => { const C = FemcCosmetics, s = FemcGame.S; C.cs(); C.grantItem('sk-arcana-sun'); C.equip('sk-arcana-sun'); s.gacha.cos.portraits = true;
      const r = SZ.look('7/15', 'gekkoukan-classroom-day'); s.gacha.cos.portraits = false; const r2 = SZ.look('7/15', 'gekkoukan-classroom-day'); return [r, r2]; })()""")
    ok('sk-arcana-sun' in worn[0]['solar'] and worn[0]['who'] == 'yukari-summer', f"a worn outfit wins for Solar, the others keep the season ({worn[0]})")
    ok(worn[1]['solar'] == 'solar-summer', f'the toggle off: Solar back in the season ({worn[1]})')
    p.eval("FemcCosmetics.unequip && FemcCosmetics.unequip('skin:solar'); FemcGame.S.gacha.cos.on = {}; true")
    # An epilogue world never takes the season (worldFace / inWorld): checked through the engine's own guard.
    ok(p.eval("(() => { SZ.at('7/15'); FemcGame.faceScene({ bg: 'gekkoukan-classroom-day' }); const a = FemcGame.seasonFace('yukari'); FemcGame.faceScene(null); return a; })()") == 'yukari-summer', 'seasonFace maps in the year')
    errs = p.console(); print('console:', errs)
    ok(not errs, 'no browser errors')

    # Screenshots: a summer and a winter scene, each face in turn.
    def size(w, h, mobile=False):
        p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
    for tag, w, h in (('desktop', 1440, 900), ('phone', 390, 844)):
        size(w, h, tag == 'phone')
        for season, md, bg in (('summer', '7/15', CLASS), ('winter', '1/12', OUTSIDE), ('base', '10/20', OUTSIDE)):
            for who in ('yukari', 'junpei', 'fuuka', 'ken'):
                for f in (('neutral', 'surprised') if tag == 'desktop' else ('neutral',)):
                    p.eval(f"""(() => {{ document.querySelectorAll('.gs').forEach(x => x.remove()); SZ.at('{md}');
                      window.__pl = FemcScene.play({{ scene: [{{ place: 'Test', bg: '{bg}' }}, {{ s: 'solar', f: '{f}', t: 'Mm.' }}, {{ s: '{who}', f: '{f}', t: 'A line.' }}, {{ n: 'x' }}], onDone: () => {{}} }});
                      const el = __pl.el; el.click(); el.click(); return true; }})()""")
                    p.eval("new Promise(r => setTimeout(r, 900))")
                    (OUT / f'{season}-{who}-{f}-{tag}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
    print(f'{len(checks)} checks passed; screenshots in {OUT}')
finally:
    p.close() if hasattr(p, 'close') else None
