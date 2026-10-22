"""The chibi All-Out brawl (batch 28), played for real in headless Chrome (femc-game.html, isolated profile, localhost;
no player saves). Four Tartarus fights (9/1 for Shinjiro and Ken, 12/10 for the searchers) cover all twelve chibi sheets plus Ken (no chibi art and no pose sheet: the
darkened portrait silhouette). In each real All-Out the dust cloud is frozen and checked: every chibi member shows two
figures from art/chibi at the current ART_V, all decoded, cycling through their frames; Ken keeps the silhouette.
The last fight runs with reduced motion: frames hold still and the jitter is off. Screenshots of the cloud at 1440x900,
375x812 and 1000x486 (one per fight), plus zero console errors.
Run: python3 tests/femc_chibi.py [--screenshots DIR]"""
import argparse, base64, json, pathlib, re, time
from femc_browser import Page

ROOT = pathlib.Path(__file__).resolve().parents[1]
ap = argparse.ArgumentParser()
ap.add_argument('--screenshots', default='/private/tmp/femc-chibi-shots')
args = ap.parse_args()
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
SRC = (ROOT / 'assets/femc/battle/battle.js').read_text()
ART_V = re.search(r'const ART_V = (\d+);', SRC).group(1)
CHIBI = {k: int(v) for k, v in re.findall(r'(\w+): (\d)', re.search(r'const CHIBI = \{([^}]*)\}', SRC).group(1))}
assert len(CHIBI) == 12, CHIBI
for mid, n in CHIBI.items():
    for i in range(n + 1): assert (ROOT / f'assets/femc/battle/art/chibi/{mid}-{i}.webp').exists(), (mid, i)

SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf('%s'); S.slot='evening';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=80000; S.condition='good';
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
  b.lvl=40; b.pts=0; b.party=['akihiko','yukari','junpei']; b.awakened=true;
  D.party.forEach(m=>{ if(m.id!=='solar') b.mem[m.id]={lvl:40,exp:0}; });
  FemcBattleEngine.evolutionsDue(b,id=>FemcBattleEngine.lvlOf(b,id)).forEach(e=>{b.evo[e.mid]=true});
  S.battleSave=FemcBattleSave.normalize(b); S.tartarus.lastParty=['solar'].concat(b.party); G.save();
  FemcGameUI.evening(); return true;
})()"""

STEP = r"""(()=>{const F=FemcBattle,c=F.ctl,d=document,B=F.B;
  const tip=d.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return 'tip'}
  if(c?.kind==='map'){const o=c.opts||[];const n=o.find(x=>x.type==='shadow'&&!x.cleared&&!x.used)||o.find(x=>!x.visited)||o[0];if(n)c.go(n.id);return 'map'}
  if(c?.kind==='allout'){c.pickValue('1');return 'allout'}
  if(c?.kind==='menu'&&B&&B.S.cur&&B.S.cur.mid==='solar'&&!window.__primed){B.foes().forEach(f=>{f.down=true});B.S.forceOneMore=true;window.__primed=true}
  if(c?.kind==='menu'&&B&&B.S.cur&&B.S.cur.mid!=='solar'){const v=c.items.map(i=>i.v);c.pickValue(v.includes('guard')?'guard':v[0]);return 'guard'}
  if(c?.kind==='menu'){const v=c.items.map(i=>i.v);c.pickValue(v.includes('attack')?'attack':v[0]);return 'attack'}
  if(c?.kind==='buttons'){const b=d.querySelector('.bt-btn.pink:not(:disabled)')||d.querySelector('.bt-btn:not(:disabled)');b&&b.click();return 'btn'}
  return null})()"""

STATE = r"""(()=>[...document.querySelectorAll('.bt-dust .sil')].map(i=>({mid:i.dataset.mid||null,chibi:i.classList.contains('chibi'),
  pose:i.classList.contains('pose'),src:i.getAttribute('src'),w:i.naturalWidth,done:i.complete,anim:getComputedStyle(i).animationName})))()"""


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


def view(p, w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def shot(p, name):
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def allout(p, party, size, day, reduced=False):
    view(p, *size)
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce' if reduced else 'no-preference'}]})
    p.goto('femc-game.html?speed=1&seed=7')
    p.eval(SETUP % day)
    p.eval("FemcGame.makeHandoff('tartarus',{party:%s});FemcGame.save()" % json.dumps(['solar'] + party))
    p.battle(); p.eval("window.__hoStay=true")
    t1 = time.time()
    while not p.eval("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'"):
        if time.time() - t1 > 60: raise TimeoutError(p.eval("JSON.stringify({s:FemcBattle.screen(),c:FemcBattle.ctl&&FemcBattle.ctl.kind,t:document.body.innerText.slice(0,300)})"))
        p.eval("(()=>{const t=document.querySelector('.bt-tip [data-ok]');t&&t.click()})()"); time.sleep(0.1)
    p.eval("window.__btFreezeAt='allout-dust';document.querySelector('[data-go=run],[data-go=cont]').click()")
    t0 = time.time()
    while not p.eval("FemcBattle.frozen"):
        if time.time() - t0 > 150: raise TimeoutError('no All-Out for %s' % party)
        p.eval("FemcBattle.B&&FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=999999})")
        p.eval(STEP); time.sleep(0.05)
    p.wait("[...document.querySelectorAll('.bt-dust .sil')].every(i=>i.complete&&i.naturalWidth>0)", 20)
    a = p.eval(STATE)
    p.eval("new Promise(r=>setTimeout(r,700))")
    b = p.eval(STATE)
    shot(p, 'allout-%dx%d%s' % (size[0], size[1], '-reduced' if reduced else ''))
    out = {}
    for mid in ['solar'] + party:
        mine = [x for x in a if x['mid'] == mid] if mid in CHIBI else [x for x in a if not x['pose']]
        later = [x for x in b if x['mid'] == mid]
        if mid in CHIBI:
            ok(len(mine) == 2 and all(x['chibi'] and x['pose'] for x in mine), (mid, 'two chibi figures', mine))
            ok(all(re.search(r'art/chibi/%s-(\d)\.webp\?v=%s$' % (mid, ART_V), x['src']) and int(re.search(r'-(\d)\.webp', x['src']).group(1)) < CHIBI[mid] for x in mine), (mid, 'action frames at ART_V', mine))
            ok(all(x['w'] > 0 for x in mine), (mid, 'decoded'))
            moved = [x['src'] for x in mine] != [x['src'] for x in later]
            ok(moved != reduced, (mid, 'frames cycle' if not reduced else 'frames hold in reduced motion'))
            ok(all(('bt-jit' in x['anim']) != reduced for x in mine), (mid, 'jitter', [x['anim'] for x in mine]))
        else:
            ok(len(mine) == 1 and 'portraits' in mine[0]['src'] and mine[0]['w'] > 0, (mid, 'silhouette fallback', mine))
        out[mid] = sorted({re.sub(r'\?.*', '', x['src']).split('/')[-1] for x in a + b if x['mid'] == mid or (mid not in CHIBI and not x['pose'])})
    ok(p.eval("document.documentElement.scrollWidth <= innerWidth + 1"), 'sideways scroll')
    p.eval("window.__btFreezeAt=null;FemcBattle.unfreeze()")
    p.wait("!document.querySelector('.bt-allout')", 30)
    p.eval("window.__hoStay=false;FemcBattle.hoFinish('retreat')"); p.top(); p.wait("!document.querySelector('.g-dh')", 30)
    return out


p = Page()
try:
    res = {}
    res['1440x900'] = allout(p, ['akihiko', 'haechan', 'minji'], (1440, 900), '12/10')
    res['375x812'] = allout(p, ['jungwon', 'jihoon', 'yukari'], (375, 812), '12/10')
    res['1000x486'] = allout(p, ['junpei', 'aigis', 'shinjiro'], (1000, 486), '9/1')
    res['reduced'] = allout(p, ['koromaru', 'mitsuru', 'ken'], (1280, 850), '9/1', reduced=True)
    errs = p.console(); ok(not errs, errs)
    print(json.dumps(res, indent=1))
    print('femc_chibi: all passed; screenshots in', SHOTS)
finally:
    p.close()
