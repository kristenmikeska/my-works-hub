"""The capsule series, rarities and tokens (gacha.js) and the Wardrobe / Boutique cosmetics (cosmetics.js), 2026-10-25.
Headless Chrome, isolated profile, localhost; no player saves.

Run: python3 tests/femc_cosmetics.py [--only odds,rotation,solchan,hidden,tokens,banner,equip,pending,ui,x10,shots,viewer,party,newpending] [--screenshots DIR]

Covers: five rarities over many turns (Secret included) and pity kept per series; which machines stand in the Corner by
date (each season, and a turn on a series that isn't on falls back to the Cast machine); only people Solar has met;
repeats → Capsule Tokens, the token shop (UI buy), series completion paying its reward once; the Boutique banner (cost,
odds, pity 10/40, featured rate-up and the Ultra guarantee, repeats refund plumes); equipping code-only looks (menu colours,
wallpaper, title theme kept for the title screen, battle theme and Evoker tint handed to the battle frame); an outfit
whose art is missing staying out of the pool and unequippable, then appearing by itself once its files exist (the test
copies Solar's own pose frames into a temporary skin folder, runs tools/femc-wardrobe.py scan, and removes both after),
worn in a real fight and in scene portraits behind the toggle; New Game+ keeping it all; Wardrobe, Boutique reveal and a
Secret capsule reveal at desktop and phone size; several banners at once November–March (per-banner featured looks, the
switcher, pity shared across banners, a banner with nothing featured hidden); ×10 rolls on every machine (cost, pity counted per turn, the results grid with
one best-rarity reveal, Skip, the disabled reason) with grids at desktop and phone size; zero console errors.
2026-10-26: the Solchan machine only once Haechan is met, Dorm Life's months, capsule goods (met-only, Collection), and the
hidden charms: 200,000 simulated turns near HIDDEN.rate, never touching or guaranteed by pity, none before Haechan, the
sun-and-moon reveal and ??? in Collection.
2026-10-27: the viewer (Collection keychains, charms, goods and a case's ⤢, and the Wardrobe's owned looks: opens, ← → and
a swipe step and wrap, Esc closes only the viewer, locked tiles never open it, first-got days, phone size with no sideways
scroll, screenshots); the party's looks (a temporary sk-akihiko-champ folder of Akihiko's own frames and a temporary
wpn-jungwon-council weapon, both removed after: worn by Akihiko in a real battle, his Wardrobe preview, Jungwon's Equipment
weapon art; Minji's outfit hidden until she's met); every new outfit and weapon skin staying out of the pool and every
month's featured list until its art exists, and each having a prompt in FEMC-ART-TODO.md."""
import argparse, base64, json, pathlib, shutil, subprocess, sys, time
from femc_browser import Page, REPO

URL = 'femc-game.html?speed=10&seed=7'
ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/femc-cosmetics-shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
results = {}
# Every look has Kat's art since batch 57. The pending, party and newpending sections set some of it aside (set_aside),
# play those looks as art-pending (with temporary frames where art arrives), then put the real folders back (also at
# exit, on a failure).
SKINS_DIR = pathlib.Path(REPO, 'assets/femc/game/art/skins')
SKIN = SKINS_DIR / 'sk-phantom'
PSKIN = SKINS_DIR / 'sk-akihiko-champ'
PWPN = SKINS_DIR / 'wpn-jungwon-council'
# Stand-ins for "a new look still waiting for art" (newpending): their real art steps aside for that section.
NEW_SKINS = ['sk-minji-crew', 'sk-jihoon-pilates', 'sk-aigis-uniform', 'sk-alphaphi', 'sk-harbourcoat', 'sk-idol', 'sk-haechan-sweater', 'sk-esports', 'sk-hanbok', 'sk-vp', 'sk-velvet', 'sk-roadwork',
             'sk-y2k', 'sk-oops', 'sk-snake', 'sk-sugarrush', 'sk-prowl', 'sk-strawberry', 'sk-summersession', 'sk-limelight',
             'sk-haechan-headphones', 'sk-haechan-arrivals', 'sk-haechan-windowseat', 'sk-haechan-bad', 'sk-haechan-garage', 'sk-haechan-limelight',
             'sk-haechan-unravelled', 'sk-jungwon-sheer']
NEW_WPNS = ['wpn-runners', 'wpn-strangers', 'wpn-hoax', 'wpn-akihiko-champ', 'wpn-jungwon-council']
KEPT = {}


def set_aside(d):
    import tempfile
    if d.exists() and d not in KEPT:
        k = pathlib.Path(tempfile.mkdtemp(prefix='femc-cos-keep-')) / d.name
        shutil.move(str(d), str(k)); KEPT[d] = k; scan()


def put_back(d):
    k = KEPT.pop(d, None)
    if k and k.exists():
        shutil.rmtree(d, ignore_errors=True); shutil.move(str(k), str(d)); scan()


import atexit
atexit.register(lambda: [put_back(d) for d in list(KEPT)])


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'8/3'); S.slot='after';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=cfg.yen||50000; S.condition='good';
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]}; S.lateNights={seen:[],lastDay:999};
  (cfg.met||['akihiko','yukari','junpei','shinjiro','mitsuru','fuuka','aigis','koromaru','ken','haechan','jungwon','kuromi','elizabeth']).forEach(id=>{ if(!S.met.includes(id)) S.met.push(id); });
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh()); b.lvl=30; b.party=['akihiko','yukari','junpei']; b.awakened=true;
  S.battleSave=FemcBattleSave.normalize(b); S.tartarus.bosses=['magician','priestess','empress']; G.save();
  return true;
})()"""


def setup(p, **cfg):
    p.goto(URL)
    p.eval(SETUP % {'cfg': json.dumps(cfg)})


def click(p, sel, timeout=20):
    p.wait('!!document.querySelector(%s)' % json.dumps(sel), timeout)
    p.eval('document.querySelector(%s).click()' % json.dumps(sel))


def shot(p, name):
    p.eval("new Promise(r=>setTimeout(r,400))")
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def view(p, w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def motion(p, reduce):
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce' if reduce else 'no-preference'}]})


def clean(p, where):
    errs = p.console(); ok(not errs, f'{where}: {errs}')


SEED = "window.__seed=s=>{let a=s>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};"
QUIET = "window.__s=FemcGame.save;FemcGame.save=()=>{};"
LOUD = "FemcGame.save=window.__s;"


def open_capsule(p):
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut('after','mall')")
    click(p, '[data-act=capsule]')
    click(p, '.g-activity-preview:not(.out) [data-confirm]')
    p.wait("!!document.querySelector('.g-cap-ov:not(.out) [data-pull=yen]')")


def menu(p, tab):
    p.eval(f"document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcMenu.close&&FemcMenu.close();")
    p.eval("new Promise(r=>setTimeout(r,250))")
    p.eval(f"FemcMenu.open('{tab}')")
    p.wait("!!document.querySelector('.g-fm-ov:not(.out) .g-fm-body')")


def scan():
    subprocess.run([sys.executable, str(pathlib.Path(REPO, 'tools/femc-wardrobe.py')), 'scan'], check=True, capture_output=True)


p = Page()
try:
    view(p, 1280, 850)
    motion(p, True)

    # ── Rarities, odds and per-series pity ──
    if want('odds'):
        setup(p, day='7/10')
        r = p.eval(SEED + QUIET + r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e8;G.S.gacha=GA.fresh();GA.rng=__seed(42);const n={C:0,R:0,SR:0,UR:0,SEC:0};
          try{for(let i=0;i<6000;i++)n[GA.pull('yen',i%2?'summer':'cast').r]++;}finally{""" + LOUD + r"""}return n;})()""")
        ok(3300 <= r['C'] <= 3750 and 1650 <= r['R'] <= 1950 and 560 <= r['SR'] <= 820 and 70 <= r['UR'] <= 160 and 12 <= r['SEC'] <= 60, f'five rarities with pity: {r}')
        results['odds (6000 turns)'] = r
        # Pity per series: always-Common rolls, alternating machines → each machine lifts its own 10th turn.
        r = p.eval(QUIET + r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e8;G.S.gacha=GA.fresh();GA.rng=()=>0.99;const a=[],b=[];
          try{for(let i=0;i<60;i++){a.push(GA.pull('yen','cast').r);if(i<15)b.push(GA.pull('yen','summer').r);}}finally{""" + LOUD + r"""}
          return {a,b,cap:GA.gs().pity.cap,sum:GA.gs().pity.series.summer};})()""")
        ok([i + 1 for i, x in enumerate(r['a']) if x == 'SR'] == [10, 20, 30, 40, 50] and r['a'][59] == 'UR', f'cast pity: {r["a"]}')
        ok([i + 1 for i, x in enumerate(r['b']) if x == 'SR'] == [10] and r['sum'] == {'sr': 5, 'ur': 15} and r['cap']['ur'] == 0, f'summer pity is its own: {r}')
        # A Secret resets both counters; rarity colours and sounds differ.
        r = p.eval(r"""(()=>{const GA=FemcGacha;GA.gs().pity.cap={sr:5,ur:30};GA.rng=()=>0.001;const x=GA.rarity('cap','cast');GA.rng=Math.random;
          const R=GA.RARITY;return {x,p:GA.gs().pity.cap,colors:new Set(Object.values(R).map(r=>r.color)).size,sfx:new Set(Object.values(R).map(r=>r.sfx)).size};})()""")
        ok(r == {'x': 'SEC', 'p': {'sr': 0, 'ur': 0}, 'colors': 6, 'sfx': 6}, f'secret (and Hidden has its own colour and sound): {r}')
        clean(p, 'odds')
        results['odds'] = 'five tiers, per-series pity, Secret resets'

    # ── Rotation by date and eligibility ──
    if want('rotation'):
        setup(p, day='4/10', met=['akihiko', 'yukari'])
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;const at=md=>GA.activeSeries(G.dayOf(md)).map(s=>s.id).join(',');
          return ['4/10','6/20','7/10','8/30','9/20','10/5','11/3','12/20','1/10','2/14','3/5'].map(at);})()""")
        ok(r == ['cast,couples', 'cast,couples,dorm', 'cast,summer', 'cast,summer', 'cast,couples,dorm', 'cast,halloween', 'cast,couples,dorm', 'cast,winter', 'cast,winter,dorm', 'cast,valentine', 'cast,valentine,dorm'], f'rotation: {r}')
        # Off-season turns fall back to the Cast machine; only people she's met (Solar, Akihiko, Yukari) appear.
        r = p.eval(QUIET + r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e8;G.S.gacha=GA.fresh();GA.rng=Math.random;const from=new Set(),who=new Set();
          try{for(let i=0;i<400;i++){const x=GA.pull('yen',i%3?'couples':'halloween');from.add(x.from);if(x.kind==='skey')GA.itemById(x.id)[0].who.forEach(w=>who.add(w));}}finally{""" + LOUD + r"""}
          return {from:[...from].sort(),who:[...who].sort()};})()""")
        ok(r['from'] == ['cast', 'couples'] and set(r['who']) <= {'solar', 'akihiko', 'yukari'} and 'akihiko' in r['who'], f'fallback and met-only: {r}')
        # The machine shows both machines on a Halloween day, and the cast keychains wear their costumes in October.
        p.eval("FemcGame.S.day=FemcGame.dayOf('10/5')")
        open_capsule(p)
        r = p.eval("[...document.querySelectorAll('.g-cap-ser')].map(b=>b.dataset.series)")
        ok(r == ['cast', 'halloween'], f'two machines in October: {r}')
        click(p, '.g-cap-ser[data-series=halloween]')
        ok(p.eval("document.querySelector('.g-cap-label').textContent.includes('HALLOWEEN') && document.querySelector('.g-ga-pity').textContent.includes('this machine')"), 'the Halloween machine')
        ok(p.eval("FemcGacha.halloween() && FemcGacha.keychain('akihiko').includes('akihiko-halloween.webp')"), 'October date rule kept')
        ok(p.eval("FemcGacha.skeychain(FemcGacha.itemById('hw-akihiko')[0]).includes('keys/akihiko-halloween.webp')"), 'Halloween singles use the costume charms')
        p.eval("document.querySelector('.g-cap-ov [data-close]').click()")
        clean(p, 'rotation')
        results['rotation'] = 'eleven dates, fallback, met-only, October machine'

    # ── Solchan and Dorm Life machines, capsule goods ──
    if want('solchan'):
        setup(p, day='10/5', met=['akihiko', 'yukari', 'jihoon'])
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;const at=md=>GA.activeSeries(G.dayOf(md)).map(s=>s.id).join(',');
          const before=['9/20','10/5','12/20','2/14'].map(at);G.S.met.push('haechan');const after=['4/10','8/30','9/20','10/5','12/20','2/14','3/5'].map(at);
          const sc=GA.SERIES.find(s=>s.id==='solchan'),rs={};sc.items.forEach(x=>rs[x.r]=(rs[x.r]||0)+1);
          const hc=GA.itemById('dl-hateclub')[0],hateBefore=GA.itemEligible(hc);if(!G.S.met.includes('niki'))G.S.met.push('niki');
          return {before,after,n:sc.items.length,rs,hateBefore,hate:GA.itemEligible(hc),noMinji:!GA.itemEligible(GA.itemById('su-solar-minji')[0])};})()""")
        ok(r['before'] == ['cast,couples,dorm', 'cast,halloween', 'cast,winter', 'cast,valentine'], f'no Solchan machine before Haechan: {r}')
        ok(r['after'] == ['cast,couples', 'cast,summer', 'cast,couples,solchan,dorm', 'cast,halloween,solchan', 'cast,winter,solchan', 'cast,valentine,solchan', 'cast,valentine,solchan,dorm'], f'Solchan Sep–Mar: {r}')
        ok(r["n"] == 14 and r['rs'].get('UR') == 1 and r['rs'].get('SEC') == 1 and r['rs'].get('SR', 0) >= 3 and r['hate'] and not r['hateBefore'] and r['noMinji'], f'Solchan items, side characters, met-only (Niki is a link since the trio, so The Hate Club waits for him): {r}')
        # Goods: met-only, new first, repeats pay tokens; Collection lists them, drawn by kind.
        r = p.eval(QUIET + r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e8;G.S.gacha=GA.fresh();GA.rng=Math.random;const got=[],from=new Set(),sw=new Set();
          try{for(let i=0;i<1500;i++){const x=GA.pull('yen',i%2?'solchan':'cast');from.add(x.from);if(x.kind==='good')got.push(x);if(x.kind==='skey'&&x.from==='solchan')sw.add(x.id);}}finally{""" + LOUD + r"""}
          const elig=GA.GOODS.filter(GA.itemEligible).map(x=>x.id);
          return {n:got.length,unmet:got.filter(x=>!elig.includes(x.id)).length,dups:got.filter(x=>x.dup).length,kinds:[...new Set(got.map(x=>GA.GOODS.find(g=>g.id===x.id).kind))].sort(),from:[...from].sort(),sw:sw.size};})()""")
        ok(r['n'] > 40 and r['unmet'] == 0 and r['dups'] > 0 and r['kinds'] == ['photo', 'plush', 'stand', 'sticker'] and r['from'] == ['cast', 'solchan'] and r['sw'] >= 8, f'goods and the Solchan machine: {r}')
        menu(p, 'collection')
        r = p.eval("(()=>{const s=document.querySelector('.g-col-goods');return {li:s.querySelectorAll('li').length,own:s.querySelectorAll('li.own .g-good').length,kinds:new Set([...s.querySelectorAll('.g-good')].map(x=>x.dataset.k)).size}})()")
        ok(r['li'] == p.eval('FemcGacha.GOODS.length') and r['own'] > 0 and r['kinds'] == 4, f'Collection goods: {r}')
        p.eval("FemcMenu.close()")
        clean(p, 'solchan')
        results['solchan'] = 'Solchan gated on Haechan (Sep–Mar), Dorm Life months, goods met-only with tokens and Collection'

    # ── Hidden charms: a large simulated run, outside pity ──
    if want('hidden'):
        setup(p, day='11/5')
        r = p.eval(SEED + QUIET + r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e12;G.S.gacha=GA.fresh();GA.rng=__seed(2026);let hid=0,turns=0,gap=0,maxGap=0;const ids={};
          const sids=GA.activeSeries().map(s=>s.id);
          try{for(let k=0;k<2000;k++){const list=GA.pullN('yen',sids[k%sids.length],100);for(const x of list){turns++;gap++;if(x.r==='HID'){hid++;ids[x.id]=1;maxGap=Math.max(maxGap,gap);gap=0;}}}}finally{""" + LOUD + r"""}
          return {turns,hid,rate:hid/turns,kinds:Object.keys(ids).length,sids};})()""")
        ok(r['turns'] == 200000 and 220 <= r['hid'] <= 380 and r['kinds'] == 4 and 'solchan' in r['sids'], f'hidden rate over 200,000 turns: {r}')
        results['hidden (200,000 turns)'] = {k: r[k] for k in ('hid', 'rate')}
        # Outside pity: a hidden turn leaves both counters alone, and pity never hands one out.
        r = p.eval(QUIET + r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e8;G.S.gacha=GA.fresh();const out={};
          try{GA.gs().pity.cap={sr:5,ur:30};GA.rng=()=>0.001;const a=GA.pullN('yen','cast',10);out.allHid=a.every(x=>x.r==='HID');out.pity=JSON.parse(JSON.stringify(GA.gs().pity.cap));
          out.newFirst=new Set(a.slice(0,4).map(x=>x.id)).size;out.dupTokens=a[4].dup&&a[4].stars===15;
          GA.rng=()=>0.99;G.S.gacha=GA.fresh();const b=[];for(let i=0;i<300;i++)b.push(GA.pull('yen','cast').r);out.pityHid=b.filter(x=>x==='HID').length;out.pityUR=b.filter(x=>x==='UR').length;
          G.S.met=G.S.met.filter(x=>x!=='haechan');GA.rng=()=>0.001;G.S.gacha=GA.fresh();const c=GA.pullN('yen','cast',20);out.noHaechan=c.filter(x=>x.r==='HID').length;out.sec=c[0].r;
          G.S.met.push('haechan');}finally{""" + LOUD + r"""}GA.rng=Math.random;return out;})()""")
        ok(r['allHid'] and r['pity'] == {'sr': 5, 'ur': 30} and r['newFirst'] == 4 and r['dupTokens'], f'hidden outside pity, new first, repeats 15 tokens: {r}')
        ok(r['pityHid'] == 0 and r['pityUR'] == 5 and r['noHaechan'] == 0 and r['sec'] == 'SEC', f'pity never gives one; none before Haechan: {r}')
        # The reveal and the Collection mark.
        p.eval("FemcGacha.gs().skeys={};FemcGacha.gs().done=[];FemcGame.save()")
        menu(p, 'collection')
        r = p.eval("(()=>{const s=document.querySelector('.g-col-hidden');return s&&{h:s.querySelector('h3').textContent,q:[...s.querySelectorAll('li small')].map(x=>x.textContent)}})()")
        ok(r and '☀☾' in r['h'] and r['q'] == ['???'] * 4, f'Collection: ??? until found: {r}')
        p.eval("FemcMenu.close()")
        motion(p, False)
        p.eval("FemcGacha.rng=()=>0.001")
        open_capsule(p)
        click(p, '.g-cap-ov [data-pull=yen]')
        p.wait("document.querySelector('.g-cap-machine').classList.contains('pop')", 10)
        ok(p.eval("document.querySelector('.g-cap-machine').dataset.r") == 'HID' and p.eval("getComputedStyle(document.querySelector('.g-cap-machine'),'::before').content") != 'none', 'the sun-and-moon reveal')
        shot(p, 'capsule-hidden-pop')
        p.wait("!!document.querySelector('.g-cap-ov .g-ga-prize.r-HID')", 10)
        shot(p, 'capsule-hidden')
        p.eval("FemcGacha.rng=Math.random;document.querySelector('.g-cap-ov [data-close]').click()")
        motion(p, True)
        menu(p, 'collection')
        ok(p.eval("[...document.querySelectorAll('.g-col-hidden li small')].filter(x=>x.textContent!=='???').length") == 1, 'the found one is named')
        p.eval("document.querySelector('.g-col-hidden').scrollIntoView()"); shot(p, 'collection-hidden')
        p.eval("FemcMenu.close()")
        clean(p, 'hidden')
        results['hidden'] = 'rate near 0.15%, outside pity, none before Haechan, reveal, ??? in Collection'

    # ── Repeats → tokens, the token shop, series rewards ──
    if want('tokens'):
        setup(p, day='10/12')
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.gacha=GA.fresh();const g=GA.gs();
          g.skeys['hw-solar']=1;const before=g.stars;const x=GA.buy('skey','hw-solar');
          GA.gs().stars=0;GA.gs().skeys['hw-akihiko']=1;
          const list=GA.shopList().map(i=>i.id);
          return {noBuyOwned:x===null,list:list.length,hasCast:list.includes('akihiko'),hasHw:list.includes('hw-yukari'),noOwned:!list.includes('hw-akihiko'),noUnmet:!list.includes('hanni')&&!list.includes('cp-hanni-hyein'),noOff:!list.some(i=>i.startsWith('su-'))};})()""")
        ok(r['noBuyOwned'] and r['hasCast'] and r['hasHw'] and r['noOwned'] and r['noUnmet'] and r['noOff'], f'token shop list: {r}')
        # A repeat pays tokens by rarity.
        r = p.eval(QUIET + r"""(()=>{const GA=FemcGacha,G=FemcGame;G.S.gacha=GA.fresh();const it=GA.SERIES.find(s=>s.id==='halloween').items;
          it.filter(x=>x.id!=='hw-junpei').forEach(x=>GA.gs().skeys[x.id]=1);
          G.S.yen=1e8;GA.rng=()=>0.5;const p0=GA.gs().pity.series;GA.gs().pity.series.halloween={sr:9,ur:0};
          let dup=null;try{for(let i=0;i<40&&!dup;i++){const x=GA.pull('yen','halloween');if(x.kind==='skey'&&x.dup)dup=x;}}finally{""" + LOUD + r"""}
          return dup?{r:dup.r,stars:dup.stars,total:GA.gs().stars,price:GA.CAP.stars[dup.r]}:null;})()""")
        ok(r and r['stars'] == r['price'] and r['total'] >= r['stars'], f'repeat → tokens: {r}')
        # Buying the last one through the UI completes the series once: tickets +3 and the Pumpkin colours.
        p.eval("(()=>{const GA=FemcGacha;GA.gs().stars=40;delete GA.gs().skeys['hw-junpei'];GA.gs().done=[];delete FemcGame.S.inventory.capsule_ticket;FemcGame.save();})()")
        open_capsule(p)
        click(p, '.g-cap-ov [data-shop]')
        click(p, '.g-cap-ov [data-buy="skey:hw-junpei"]')
        p.wait("!!document.querySelector('.g-cap-ov .g-ga-prize')")
        r = p.eval("({done:FemcGacha.gs().done,t:FemcGame.S.inventory.capsule_ticket,own:FemcCosmetics.owns('ui-pumpkin'),stars:FemcGacha.gs().stars,txt:document.querySelector('.g-ga-prize').innerText})")
        ok(r['done'] == ['halloween'] and r['t'] == 3 and r['own'] and r['stars'] == 35 and 'Halloween Series complete' in r['txt'], f'series reward: {r}')
        ok(p.eval("FemcGacha.completeSeries(FemcGacha.SERIES.find(s=>s.id==='halloween'))") is None and p.eval('FemcGame.S.inventory.capsule_ticket') == 3, 'reward only once')
        p.eval("document.querySelector('.g-cap-ov [data-close]').click()")
        clean(p, 'tokens')
        results['tokens'] = 'shop list rules, repeat tokens, UI buy completes a series once'

    # ── The Boutique banner ──
    if want('banner'):
        setup(p, day='2/10')
        r = p.eval(r"""(()=>{const C=FemcCosmetics;return {pool:C.pool().map(x=>x.id),feat:C.featured().map(x=>x.id),banner:C.banner().id,
          pending:C.ITEMS.filter(x=>!C.ready(x)).map(x=>x.id),rewards:C.ITEMS.filter(x=>x.pool===false).map(x=>x.id)};})()""")
        ok(not set(r['pending']) & set(r['pool']) and not set(r['rewards']) & set(r['pool']) and len(r['pool']) >= 20, f'pool: {r}')
        # Every look in it has art since batch 57.
        ok(r['banner'] == 'sunrise' and set(r['feat']) == {'ui-sunrise', 'bui-gold', 'evk-gold', 'wp-keyart', 'sk-akihiko-champ', 'wpn-akihiko-champ', 'sk-jungwon-council', 'wpn-jungwon-council', 'sk-hanbok'}, f'featured: {r}')
        # Cost and pity: always-Rare rolls → Super Rare on every 10th, Ultra on the 40th.
        r = p.eval(QUIET + r"""(()=>{const C=FemcCosmetics,GA=FemcGacha;GA.gs().plumes=200;C.cs().pity={sr:0,ur:0};C.rng=()=>0.99;const out=[];
          try{for(let i=0;i<40;i++)out.push(C.pull().r);}finally{""" + LOUD + r"""}return {out,plumes:GA.gs().plumes,own:C.cs().own.length};})()""")
        ok([i + 1 for i, x in enumerate(r['out']) if x == 'SR'] == [10, 20, 30] and r['out'][39] == 'UR', f'banner pity: {r["out"]}')
        ok(r['plumes'] >= 120 and r['plumes'] < 200, f'2 plumes a pull, repeats refund: {r}')
        # Featured rate-up and the Ultra guarantee.
        r = p.eval(QUIET + SEED + r"""(()=>{const C=FemcCosmetics,GA=FemcGacha;GA.gs().plumes=1e6;C.cs().pity={sr:0,ur:0};C.cs().guar=false;C.rng=__seed(9);let ur=0,feat=0,brokeGuar=0,prevLost=false;
          try{for(let i=0;i<3000;i++){const x=C.pull();if(x.r==='UR'){ur++;if(x.feat)feat++;if(prevLost&&!x.feat)brokeGuar++;prevLost=!x.feat;}}}finally{""" + LOUD + r"""}
          return {ur,feat,brokeGuar};})()""")
        ok(r['ur'] > 60 and r['feat'] / r['ur'] > 0.6 and r['brokeGuar'] == 0, f'featured Ultras and the guarantee: {r}')
        p.eval("FemcCosmetics.rng=Math.random")
        ok(p.eval("(()=>{FemcGacha.gs().plumes=1;return FemcCosmetics.pull()===null})()"), 'no plumes, no pull')
        # Several banners at once (November–March), each with its own featured looks; one banner earlier in the year.
        ALL = ['akihiko', 'yukari', 'junpei', 'shinjiro', 'mitsuru', 'fuuka', 'aigis', 'koromaru', 'ken', 'haechan', 'jungwon', 'jihoon']
        p.eval("FemcGame.S.met.push(...%s.filter(x=>!FemcGame.S.met.includes(x)));FemcGame.S.met=FemcGame.S.met.filter(x=>x!=='minji')" % json.dumps(ALL))
        r = p.eval(r"""(()=>{const G=FemcGame,C=FemcCosmetics,at=md=>C.banners(G.dayOf(md)).map(b=>b.id);
          return {jul:at('7/10'),oct:at('10/10'),nov:at('11/10'),dec:at('12/10'),jan:at('1/10'),feb:at('2/10'),mar:at('3/10'),
            feat:Object.fromEntries(C.BANNERS.map(b=>[b.id,C.featured(G.dayOf(b.months[0]+'/10'),b.id).map(x=>x.id)])),end:C.bannerEnd(C.BANNERS.find(b=>b.id==='lights')).getMonth()};})()""")
        ok(r['jul'] == ['summer'] and r['oct'] == ['masquerade'], f'one banner earlier in the year: {r}')
        ok(r['nov'] == ['lights', 'runners', 'sees'] and r['dec'] == ['lights', 'sees', 'haechan'] and r['jan'] == ['lights', 'haechan', 'hoax']
           and r['feb'] == ['sunrise', 'hoax', 'valentine'], f'2–3 banners November–February, main first: {r}')
        ok(r['mar'] == ['solar', 'akihiko'], f'The Searchers hidden while Minji is unmet (empty featured list): {r}')
        ok(set(r['feat']['haechan']) == {'sk-haechan-runners', 'wpn-runners', 'wpn-strangers', 'evk-midnight', 'wp-rooftop', 'sk-haechan-sweater',
                                           'sk-haechan-headphones', 'sk-haechan-arrivals', 'sk-haechan-garage', 'sk-haechan-limelight'}
           and set(r['feat']['solar']) == {'sk-idol', 'sk-alphaphi', 'sk-hanbok', 'sk-velvet', 'sk-y2k', 'sk-oops', 'sk-snake', 'sk-sugarrush', 'sk-limelight'}
           and set(r['feat']['sees']) >= {'sk-yukari-pink', 'sk-mitsuru-rider', 'tt-darkhour'} and 'sk-date' in r['feat']['valentine'] and 'sk-emo' in r['feat']['valentine'] and 'sk-emo' in r['feat']['masquerade']
           and not set(r['feat']['haechan']) & set(r['feat']['lights']) - {'wpn-strangers', 'sk-haechan-arrivals'} and r['end'] == 0, f'featured per banner, ends January: {r}')
        ok(p.eval("FemcGame.S.met.push('minji'),FemcCosmetics.banners(FemcGame.dayOf('3/10')).map(b=>b.id).join()") == 'solar,akihiko,searchers', 'The Searchers once Minji is met')
        # Switching: the pick is saved, rates up only that banner's looks, ignores banners not running, falls back when one ends.
        r = p.eval(QUIET + SEED + r"""(()=>{const G=FemcGame,C=FemcCosmetics,GA=FemcGacha;G.S.day=G.dayOf('12/10');GA.gs().plumes=1e5;C.cs().guar=false;
          const a=C.pickBanner('haechan'),bad=C.pickBanner('runners'),sel=C.cs().bsel,cur=C.banner().id,f=C.featured().map(x=>x.id);C.rng=__seed(3);const got=[];
          try{for(let i=0;i<300;i++)got.push(C.pull());}finally{""" + LOUD + r"""}const fe=got.filter(x=>x.feat);
          G.S.day=G.dayOf('2/10');const after=C.banner().id;G.S.day=G.dayOf('12/10');
          return {a:a&&a.id,bad,sel,cur,f,feats:fe.length,offBan:fe.filter(x=>!f.includes(x.item.id)).length,ban:[...new Set(got.map(x=>x.ban))],after};})()""")
        ok(r['a'] == 'haechan' and r['bad'] is None and r['sel'] == 'haechan' and r['cur'] == 'haechan' and r['ban'] == ['haechan'], f'switching banners: {r}')
        ok(r['feats'] > 30 and r['offBan'] == 0 and r['after'] == 'sunrise', f'featured pulls come from the picked banner; an ended pick falls back: {r}')
        # Shared pity: 5 always-Rare pulls on one banner, 5 on another → the 10th is a Super Rare.
        r = p.eval(QUIET + r"""(()=>{const C=FemcCosmetics;C.cs().pity={sr:0,ur:0};C.rng=()=>0.99;const out=[];
          try{C.pickBanner('sees');for(let i=0;i<5;i++)out.push(C.pull().r);C.pickBanner('haechan');for(let i=0;i<5;i++)out.push(C.pull().r);}finally{""" + LOUD + r"""}
          return {out,p:C.cs().pity};})()""")
        ok(r['out'] == ['R'] * 9 + ['SR'] and r['p']['sr'] == 0 and r['p']['ur'] == 10, f'pity shared across banners: {r}')
        p.eval("FemcCosmetics.rng=Math.random")
        # The switcher in the Boutique: tabs, end dates, the shared-pity line, a click switches.
        menu(p, 'wardrobe')
        click(p, '[data-wd-view=banner]')
        r = p.eval("({tab:document.querySelector('[data-wd-view=banner]').innerText,tabs:[...document.querySelectorAll('[data-wd-ban]')].map(b=>[b.dataset.wdBan,b.innerText,b.classList.contains('on')]),head:document.querySelector('.g-wd-bhead').innerText,pity:document.querySelector('.g-ga-pity').innerText})")
        ok([t[0] for t in r['tabs']] == ['lights', 'sees', 'haechan'] and [t[2] for t in r['tabs']] == [False, False, True] and 'until January 31' in r['tabs'][0][1]
           and 'ends January 31' in r['head'] and 'Pity is shared' in r['pity'] and '3 banners' in r['tab'].lower(), f'banner switcher: {r}')
        click(p, '[data-wd-ban="sees"]')
        p.wait("document.querySelector('.g-wd-banner')?.dataset.ban==='sees'")
        r = p.eval("({sel:FemcCosmetics.cs().bsel,on:document.querySelector('[data-wd-ban].on').dataset.wdBan,feat:document.querySelector('.g-wd-feat').innerText,x10:!!document.querySelector('[data-wd-pull10]')})")
        ok(r['sel'] == 'sees' and r['on'] == 'sees' and 'Featherman Pink' in r['feat'] and r['x10'], f'switching through the UI: {r}')
        view(p, 390, 844); shot(p, 'banner-switcher-phone')
        ok(p.eval("document.documentElement.scrollWidth<=window.innerWidth"), 'no sideways scroll at phone size')
        view(p, 1280, 800); shot(p, 'banner-switcher')
        clean(p, 'banner')
        results['banner'] = 'pool rules, featured rotation, pity 10/40, rate-up, guarantee; several banners Nov–Mar, switcher, shared pity, empty banners hidden'

    # ── Equipping code-only looks ──
    if want('equip'):
        setup(p)
        r = p.eval(r"""(()=>{const C=FemcCosmetics,root=document.documentElement;['ui-moonlight','wp-velvet','tt-darkhour','bui-velvet','evk-jade'].forEach(C.grantItem);
          const noOwn=C.equip('ui-sakura');
          ['ui-moonlight','wp-velvet','tt-darkhour','bui-velvet','evk-jade'].forEach(C.equip);
          const pink=getComputedStyle(root).getPropertyValue('--pink').trim(),wall=root.dataset.wall,title=localStorage.getItem('kg-femc-title-theme'),b=C.battle();
          return {noOwn,pink,wall,title,ui:root.dataset.uitheme,css:b.css,pose:b.pose};})()""")
        ok(r['noOwn'] is False and r['pink'] == '#6ab0ff' and r['ui'] == 'ui-moonlight' and r['wall'] == 'wp-velvet' and r['title'] == 'tt-darkhour', f'applied: {r}')
        ok('--pink:#2b5fd0' in r['css'] and 'hue-rotate(95deg)' in r['css'] and r['pose'] == {}, f'battle looks: {r}')
        # The title screen wears it before any save loads; a reload keeps the menu colours from the save.
        p.goto(URL)
        ok(p.eval("document.documentElement.dataset.titletheme") == 'tt-darkhour', 'title theme before a save loads')
        p.eval("new Promise(r=>setTimeout(r,300))")
        ok(p.eval("getComputedStyle(document.querySelector('.g-title')||document.body).backgroundColor") in ('rgb(63, 191, 106)',) or not p.eval("!!document.querySelector('.g-title')"), 'title colours')
        p.eval("FemcGame.load&&FemcGame.load();FemcCosmetics.apply()")
        ok(p.eval("document.documentElement.dataset.uitheme") == 'ui-moonlight', 'menu colours after a reload')
        # Unequip goes back to default; the title key clears.
        r = p.eval("(()=>{const C=FemcCosmetics;['uitheme','wallpaper','title','battleui','evoker'].forEach(C.unequip);return [document.documentElement.dataset.uitheme||null,document.documentElement.dataset.wall||null,localStorage.getItem('kg-femc-title-theme'),C.battle().css]})()")
        ok(r == [None, None, None, ''], f'unequip: {r}')
        # The battle frame really gets them.
        p.eval("(()=>{const C=FemcCosmetics;C.equip('bui-velvet');C.equip('evk-jade');const G=FemcGame;G.S.joined=['akihiko','yukari','junpei'];G.S.day=G.dayOf('9/15');G.makeHandoff('scripted',{script:'looks-check',notes:'interrupt turn 6',segment:1,forced:true,party:['solar','akihiko','yukari','junpei']});})()")
        p.battle()
        p.wait("!!document.getElementById('bt-looks')")
        r = p.eval("({css:document.getElementById('bt-looks').textContent,pink:getComputedStyle(document.documentElement).getPropertyValue('--pink').trim()})")
        ok(r['pink'] == '#2b5fd0' and 'hue-rotate(95deg)' in r['css'], f'battle frame: {r}')
        p.top()
        p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        p.console()  # the scripted fight was abandoned mid-frame; its own noise isn't this test's
        clean(p, 'equip')
        results['equip'] = 'menu colours, wallpaper, title (before a save loads), battle theme and Evoker tint in a real battle frame'

    # ── Art-pending outfits ──
    if want('pending'):
        set_aside(SKIN)  # no Solar outfit is still pending: her Phantom Thief frames step aside for this section
        setup(p, day='9/20')
        r = p.eval(r"""(()=>{const C=FemcCosmetics;C.grantItem('sk-phantom');return {ready:C.ready(C.byId('sk-phantom')),inPool:C.pool().some(x=>x.id==='sk-phantom'),
          eq:C.equip('sk-phantom'),feat:C.featured().map(x=>x.id),pose:C.battle().pose,face:FemcGame.portrait('solar','happy')};})()""")
        ok(not r['ready'] and not r['inPool'] and r['eq'] is False and 'sk-phantom' not in r['feat'] and r['pose'] == {} and '/portraits/solar/' in r['face'], f'pending: {r}')
        # Many pulls never give it.
        r = p.eval(QUIET + r"""(()=>{const C=FemcCosmetics,GA=FemcGacha;GA.gs().plumes=1e5;C.rng=Math.random;const got=new Set();try{for(let i=0;i<800;i++)got.add(C.pull().item.id);}finally{""" + LOUD + r"""}
          return [...got].filter(id=>!C.ready(C.byId(id)));})()""")
        ok(r == [], f'pending art never drawn: {r}')
        menu(p, 'wardrobe')
        click(p, '[data-wd="sk-phantom"]')
        r = p.eval("({badge:!!document.querySelector('.g-wd-stage .g-wd-pending'),row:document.querySelector('[data-wd=\"sk-phantom\"]').innerText,equip:!!document.querySelector('[data-wd-equip]')})")
        ok(r['badge'] and 'Art coming' in r['row'] and not r['equip'], f'wardrobe shows Art coming: {r}')
        shot(p, 'wardrobe-pending')
        p.eval("FemcMenu.close()")
        # Its art arrives: copy Solar's own frames into the skin folder (plus one portrait), scan, reload.
        try:
            SKIN.mkdir(parents=True, exist_ok=True)
            for i in range(6): shutil.copy(pathlib.Path(REPO, f'assets/femc/battle/art/poses/solar-pose-{i}.webp'), SKIN / f'solar-pose-{i}.webp')
            (SKIN / 'portraits/solar').mkdir(parents=True, exist_ok=True)
            shutil.copy(pathlib.Path(REPO, 'assets/femc/portraits/solar/happy.webp'), SKIN / 'portraits/solar/happy.webp')
            scan()
            ok('"sk-phantom"' in pathlib.Path(REPO, 'assets/femc/game/art/ready.js').read_text(), 'scan lists it')
            p.goto(URL)
            p.eval("FemcGame.S.phase='play'")
            r = p.eval(r"""(()=>{const C=FemcCosmetics;return {ready:C.ready(C.byId('sk-phantom')),inPool:C.pool().some(x=>x.id==='sk-phantom'),feat:C.featured().map(x=>x.id),eq:C.equip('sk-phantom'),
              pose:C.battle().pose,face:FemcGame.portrait('solar','happy'),sad:FemcGame.portrait('solar','sad')};})()""")
            ok(r['ready'] and r['inPool'] and 'sk-phantom' in r['feat'] and r['eq'] and r['pose'].get('solar', '').endswith('skins/sk-phantom/'), f'art arrived: {r}')
            ok(r['face'].split('?')[0].endswith('skins/sk-phantom/portraits/solar/happy.webp') and r['sad'].split('?')[0].endswith('skins/sk-phantom/portraits/solar/happy.webp'), f'scene portraits: {r}')
            ok(p.eval("(()=>{FemcCosmetics.setPortraits(false);const f=FemcGame.portrait('solar','happy');FemcCosmetics.setPortraits(true);return f})()").split('?')[0].endswith('/portraits/solar/happy.webp') and
               '/skins/' not in p.eval("(()=>{FemcCosmetics.setPortraits(false);const f=FemcGame.portrait('solar','happy');FemcCosmetics.setPortraits(true);return f})()"), 'the portrait toggle')
            menu(p, 'wardrobe')
            click(p, '[data-wd="sk-phantom"]')
            ok(p.eval("document.querySelector('.g-wd-pv-solar').src.includes('skins/sk-phantom/solar-pose-0.webp') && !document.querySelector('.g-wd-stage .g-wd-pending')"), 'the preview wears it')
            p.eval("FemcMenu.close()")
            # Worn in a real fight: Solar's battlefield figure comes from the outfit's folder.
            p.eval("(()=>{const G=FemcGame;G.S.joined=['akihiko','yukari','junpei'];G.S.day=G.dayOf('9/15');G.makeHandoff('scripted',{script:'looks-check',notes:'interrupt turn 6',segment:1,forced:true,party:['solar','akihiko','yukari','junpei']});})()")
            p.battle()
            p.wait('!!window.FemcBattle?.B && !!document.querySelector(".bt-fighter")')
            p.eval("FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999})")
            src = None
            for _ in range(300):
                st = p.eval("(()=>{const b=FemcBattle.B,f=document.querySelector('.bt-fighter'),im=f&&f.querySelector('img:not(.evk)');if(!b.S.cur)return null;const u=b.U(b.S.cur.id);return u&&u.mid==='solar'&&im&&!f.hidden?im.src:null})()")
                if st: src = st; break
                time.sleep(0.05)
            ok(src and 'skins/sk-phantom/solar-pose-' in src, f'battlefield figure: {src}')
            p.top()
            p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
            p.console()
        finally:
            shutil.rmtree(SKIN, ignore_errors=True)
            put_back(SKIN)
            scan()
        ok(('"sk-phantom"' in pathlib.Path(REPO, 'assets/femc/game/art/ready.js').read_text()) == SKIN.exists(), 'ready.js restored')
        results['pending'] = 'out of pool, unequippable, Art coming; appears by itself once its files exist (pool, featured, battle, portraits, toggle)'

    # ── The Wardrobe and the Boutique through the UI, plus New Game+ ──
    if want('ui') or want('shots'):
        setup(p, day='10/12')
        p.eval("(()=>{const C=FemcCosmetics;['wp-shrine','ui-sakura','evk-rose','tt-snow'].forEach(C.grantItem);FemcGacha.gs().plumes=30;FemcGame.save();})()")
        menu(p, 'wardrobe')
        click(p, '[data-wd="wp-shrine"]')
        click(p, '[data-wd-equip="wp-shrine"]')
        ok(p.eval("document.documentElement.dataset.wall==='wp-shrine' && getComputedStyle(document.querySelector('.g-fm-ov .g-panel')).backgroundImage.includes('naganaki-shrine-festival')"), 'wallpaper on the menu')
        click(p, '[data-wd="ui-sakura"]')
        click(p, '[data-wd-equip="ui-sakura"]')
        click(p, '[data-wd="evk-rose"]')
        click(p, '[data-wd-equip="evk-rose"]')
        ok(p.eval("FemcCosmetics.cs().on.uitheme==='ui-sakura' && FemcCosmetics.cs().on.evoker==='evk-rose'"), 'equipped through the UI')
        click(p, '[data-wd-off="uitheme"]')
        ok(p.eval("!FemcCosmetics.cs().on.uitheme && !document.documentElement.dataset.uitheme"), 'Default takes it off')
        p.eval("document.querySelector('[data-wd-portraits]').click()")
        ok(p.eval("FemcCosmetics.cs().portraits") is False, 'portrait toggle through the UI')
        p.eval("document.querySelector('[data-wd-portraits]').click()")
        click(p, '[data-wd-view=banner]')
        motion(p, False)
        pl = p.eval("FemcGacha.gs().plumes")
        click(p, '[data-wd-pull]')
        p.wait("!!document.querySelector('.g-wd-card.anim')")
        ok(p.eval("FemcGacha.gs().plumes") in (pl - 2, pl - 1, pl) and p.eval("FemcCosmetics.cs().pulls") == 1, 'a pull through the UI')
        motion(p, True)
        # New Game+ keeps the wardrobe and series keychains.
        r = p.eval("(()=>{const G=FemcGame;FemcGacha.gs().skeys['hw-solar']=1;FemcGacha.gs().done=['halloween'];const own=FemcCosmetics.cs().own.length;G.newGamePlus();const g=G.S.gacha;return [g.skeys['hw-solar'],g.done,g.cos.own.length===own,g.cos.on.wallpaper,g.plumes]})()")
        ok(r == [1, ['halloween'], True, 'wp-shrine', 0], f'NG+: {r}')
        p.eval("FemcMenu.close&&FemcMenu.close()")
        clean(p, 'ui')
        results['ui'] = 'equip / Default / toggle / pull through the menu; NG+ keeps looks and series'

    # ── ×10 rolls: cost, pity per turn, the grid, Skip, the disabled reason ──
    if want('x10'):
        setup(p, day='10/12')
        p.eval("FemcGame.progress('elizabeth').rank=1;FemcGame.save()")
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.gacha=GA.fresh();G.S.yen=60000;GA.rng=()=>0.99;const y0=G.S.yen,runs=[];
          for(let k=0;k<6;k++)runs.push(GA.pull10('yen','halloween').map(x=>x.r));
          const out={yen:y0-G.S.yen,pulls:GA.gs().pulls,runs,pity:JSON.parse(JSON.stringify(GA.gs().pity.series.halloween))};
          G.S.inventory.capsule_ticket=12;const t=GA.pull10('ticket','cast');out.tickets=G.S.inventory.capsule_ticket;out.tn=t.length;out.cast=JSON.parse(JSON.stringify(GA.gs().pity.cap));
          G.S.yen=4999;out.broke=GA.pull10('yen','cast')===null;out.why=GA.capWhy('yen',10);GA.rng=Math.random;return out;})()""")
        flat = [x for run in r['runs'] for x in run]
        ok(r['yen'] == 30000 and r['pulls'] == 60 and [i + 1 for i, x in enumerate(flat) if x == 'SR'] == [10, 20, 30, 40, 50] and flat[59] == 'UR', f'capsule ×10 cost and pity per turn: {r}')
        ok(r['pity'] == {'sr': 0, 'ur': 0} and r['cast'] == {'sr': 0, 'ur': 10} and all(any(x != 'C' for x in run) for run in r['runs']), f'pity per series in a ×10: {r}')
        ok(r['tickets'] == 2 and r['tn'] == 10 and r['broke'] and 'Needs' in r['why'], f'ticket ×10 and the reason: {r}')
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e6;GA.gs().pity.vel={sr:0,ur:0};GA.rng=()=>0.99;const y0=G.S.yen,d0=GA.gs().draws;const x=GA.draw10('yen').map(p=>p.r);
          const o={x,yen:y0-G.S.yen,draws:GA.gs().draws-d0};GA.gs().plumes=29;o.why=GA.velWhy('plumes',10);o.none=GA.draw10('plumes')===null;GA.rng=Math.random;return o;})()""")
        ok(r['yen'] == 30000 and r['draws'] == 10 and [i + 1 for i, x in enumerate(r['x']) if x == 'SR'] == [5, 10] and r['none'] and 'Needs 30' in r['why'], f'Velvet ×10: {r}')
        r = p.eval(r"""(()=>{const C=FemcCosmetics,GA=FemcGacha;GA.gs().plumes=45;C.cs().pity={sr:0,ur:0};C.rng=()=>0.99;const x=C.pull10().map(p=>p.r);
          const o={x,left:GA.gs().plumes,p:JSON.parse(JSON.stringify(C.cs().pity))};GA.gs().plumes=19;o.why=C.pullWhy(10);o.none=C.pull10()===null;C.rng=Math.random;return o;})()""")
        ok(r['x'][9] == 'SR' and r['x'].count('SR') == 1 and r['p'] == {'sr': 0, 'ur': 10} and 25 <= r['left'] <= 40 and r['none'] and 'Needs 20' in r['why'], f'Boutique ×10: {r}')
        # Through the UI: the capsule machine (one reveal for the best, then ten tiles), with and without Skip.
        p.eval("FemcGame.S.yen=50000;FemcGacha.gs().pity.series.halloween={sr:0,ur:0};FemcGame.save()")
        motion(p, False)
        open_capsule(p)
        click(p, '.g-cap-ser[data-series=halloween]')
        y0 = p.eval('FemcGame.S.yen')
        click(p, '.g-cap-ov [data-pull10=yen]')
        p.wait("document.querySelector('.g-cap-machine').classList.contains('turn')", 5)
        p.wait("document.querySelectorAll('.g-cap-ov .g-ga-cell').length===10", 10)
        r = p.eval("({best:document.querySelector('.g-ga-grid').dataset.best,machine:document.querySelector('.g-cap-machine').dataset.r,bestCells:document.querySelectorAll('.g-ga-cell.best').length,yen:FemcGame.S.yen,fast:document.querySelector('.g-ga-grid').classList.contains('fast')})")
        ok(r['best'] == r['machine'] and r['bestCells'] >= 1 and r['yen'] == y0 - 5000 and not r['fast'], f'capsule ×10 UI: {r}')
        for w, h, tag in [(1280, 800, 'desktop'), (375, 812, 'phone')]:
            view(p, w, h)
            p.eval("document.querySelector('.g-cap-ov .g-ga-grid')?.scrollIntoView({block:'center'})")
            ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), tag + ': ×10 grid, no sideways scroll')
            shot(p, f'capsule-x10-{tag}')
        view(p, 1280, 850)
        click(p, '.g-cap-ov [data-pull10=yen]')
        click(p, '.g-cap-ov [data-skip]')
        t0 = time.time()
        p.wait("!!document.querySelector('.g-cap-ov .g-ga-grid.fast')", 3)
        ok(time.time() - t0 < 1.5, 'Skip jumps to the grid')
        p.eval("FemcGame.S.yen=4000")
        p.eval("document.querySelector('.g-cap-ser[data-series=cast]').click()")
        r = p.eval("(()=>{const b=document.querySelector('.g-cap-ov [data-pull10=yen]');return {dis:b.disabled,txt:b.innerText,title:b.title}})()")
        ok(r['dis'] and 'Needs' in r['txt'] and 'Needs' in r['title'], f'disabled with a reason: {r}')
        p.eval("document.querySelector('.g-cap-ov [data-close]').click()")
        # The Velvet Room.
        p.eval("FemcGame.S.yen=100000;FemcGame.save()")
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut('after','mall')")
        click(p, '[data-act=velvet]')
        click(p, '.g-activity-preview:not(.out) [data-confirm]')
        click(p, '.g-vel-ov [data-draw10=yen]')
        p.wait("document.querySelectorAll('.g-vel-ov .g-ga-cell').length===10", 10)
        ok(p.eval("document.querySelector('.g-vel-card.up')!==null && FemcGame.S.yen===70000"), 'Velvet ×10 UI: one card turned, ¥30,000')
        p.eval("document.querySelector('.g-vel-ov [data-close]').click()")
        # The Boutique: best card plus ten tiles; Skip; the reason when plumes are short.
        p.eval("FemcGacha.gs().plumes=40;FemcGame.save()")
        menu(p, 'wardrobe')
        click(p, '[data-wd-view=banner]')
        click(p, '[data-wd-pull10]')
        p.wait("document.querySelectorAll('.g-wd-reveal .g-ga-cell').length===10 && !!document.querySelector('.g-wd-reveal .g-wd-card.anim')", 5)
        for w, h, tag in [(1280, 800, 'desktop'), (375, 812, 'phone')]:
            view(p, w, h)
            p.eval("new Promise(r=>setTimeout(r,1600))")
            p.eval("document.querySelector('.g-wd-reveal').scrollIntoView({block:'start'})")
            ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), tag + ': Boutique ×10, no sideways scroll')
            shot(p, f'boutique-x10-{tag}')
        view(p, 1280, 850)
        click(p, '[data-wd-pull10]')
        click(p, '[data-wd-skip]')
        ok(p.eval("document.querySelector('.g-wd-reveal').classList.contains('skip') && !document.querySelector('[data-wd-skip]')"), 'Boutique Skip')
        p.eval("FemcGacha.gs().plumes=3;FemcMenu.close()")
        menu(p, 'wardrobe')
        click(p, '[data-wd-view=banner]')
        ok(p.eval("(()=>{const b=document.querySelector('[data-wd-pull10]');return b.disabled&&b.innerText.includes('Needs 20')})()"), 'Boutique ×10 disabled with a reason')
        p.eval("FemcMenu.close()")
        motion(p, True)
        clean(p, 'x10')
        results['x10'] = 'capsule (yen, tickets, per-series pity), Velvet and Boutique ×10: cost, pity, grid, best reveal, Skip, reasons'


    # ── The viewer: Collection and the Wardrobe ──
    if want('viewer'):
        setup(p, day='10/12')
        p.eval(r"""(()=>{const G=FemcGame,g=FemcGacha.gs(),d=G.S.day;g.keys.solar=1;g.keys.akihiko=3;g.skeys['hw-solar']=1;g.skeys['cp-solar-akihiko']=1;g.goods['gd-pl-koro']=1;
          g.cases=['sakura','gold'];g.caseOn='gold';g.got['key:solar']=d-30;g.got['skey:hw-solar']=d;['evk-gold','wp-velvet','ui-moonlight','tt-darkhour'].forEach(FemcCosmetics.grantItem);G.save();})()""")
        menu(p, 'collection')
        r = p.eval("""({own:document.querySelectorAll('.g-keys li.own[data-view], .g-goods li.own[data-view]').length,locked:document.querySelectorAll('li:not(.own)[data-view]').length,
          lockedText:[...document.querySelectorAll('.g-skeys li:not(.own) small')].some(s=>s.textContent==='???'),cases:document.querySelectorAll('[data-view^="case:"]').length})""")
        ok(r['own'] == 5 and r['locked'] == 0 and r['cases'] == 2, f'only owned tiles open the viewer: {r}')
        click(p, '[data-view="key:solar"]')
        p.wait("!!document.querySelector('.g-view-ov:not(.out) .g-view')")
        V = "(()=>{const v=document.querySelector('.g-view-ov:not(.out) .g-view');return v?{i:+v.dataset.viewI,name:v.querySelector('h3').textContent,info:v.querySelector('.g-view-info').innerText,n:v.querySelector('.g-view-nav > span')?.textContent,img:!!v.querySelector('.g-view-art img, .g-view-art .g-key, .g-view-art .g-good, .g-view-art .g-case-art')}:null})()"
        r = p.eval(V)
        ok(r and r['i'] == 0 and r['name'] == 'Solar keychain' and 'Rare' in r['info'] and 'S.E.E.S.' in r['info'] and 'September 12' in r['info'] and r['n'] == '1 / 7' and r['img'], f'viewer opens on the tile: {r}')
        KEY = "document.dispatchEvent(new KeyboardEvent('keydown',{key:'%s',bubbles:true,cancelable:true}))"
        p.eval(KEY % 'ArrowRight')
        r = p.eval(V); ok(r['i'] == 1 and r['name'] == 'Akihiko keychain' and '×3' in r['info'], f'→ steps: {r}')
        p.eval(KEY % 'ArrowLeft'); p.eval(KEY % 'ArrowLeft')
        r = p.eval(V); ok(r['i'] == 6 and r['name'] == 'Golden Sun Case' and 'on her phone' in r['info'], f'← wraps to the last: {r}')
        p.eval("document.querySelector('.g-view [data-view-go=\"-1\"]').click()")
        r = p.eval(V); ok(r['i'] == 5 and r['name'] == 'Sakura Phone Case', f'the ‹ button: {r}')
        p.eval(KEY % 'Escape')
        p.eval("new Promise(r=>setTimeout(r,300))")
        ok(p.eval("!document.querySelector('.g-view-ov:not(.out)') && !!document.querySelector('.g-fm-ov:not(.out)')"), 'Esc closes the viewer, not the menu')
        # The case's ⤢ views it without putting it on; tapping the case itself still does.
        click(p, '[data-view="case:sakura"]')
        r = p.eval(V); ok(r['name'] == 'Sakura Phone Case' and p.eval("FemcGacha.gs().caseOn") == 'gold', f'case view: {r}')
        p.eval(KEY % 'Escape'); p.eval("new Promise(r=>setTimeout(r,300))")
        click(p, '[data-view="skey:hw-solar"]')
        r = p.eval(V); ok(r['name'] == 'Solar' and 'Halloween' in r['info'] and 'October 12' in r['info'], f'series charm: {r}')
        for w, h, tag in [(1280, 800, 'desktop'), (375, 812, 'phone')]:
            view(p, w, h)
            p.eval("new Promise(r=>setTimeout(r,300))")
            ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1') and p.eval("document.querySelector('.g-view-ov .g-panel').getBoundingClientRect().right <= innerWidth + 1"), tag + ': viewer fits, no sideways scroll')
            shot(p, f'viewer-{tag}')
        # A swipe (phone size): left steps on, right steps back.
        SW = "(()=>{const pn=document.querySelector('.g-view-ov:not(.out) .g-panel'),ev=(t,x)=>pn.dispatchEvent(new PointerEvent(t,{clientX:x,clientY:300,bubbles:true,pointerType:'touch'}));ev('pointerdown',%d);ev('pointerup',%d);})()"
        i0 = p.eval(V)['i']
        p.eval(SW % (300, 80)); ok(p.eval(V)['i'] == (i0 + 1) % 7, 'swipe left steps on')
        p.eval(SW % (80, 300)); ok(p.eval(V)['i'] == i0, 'swipe right steps back')
        p.eval(SW % (200, 190)); ok(p.eval(V)['i'] == i0, 'a tap is not a swipe')
        p.eval(KEY % 'Escape'); p.eval("new Promise(r=>setTimeout(r,300))")
        # The Wardrobe: owned, usable looks have ⤢ and View; nothing locked or art-pending does.
        menu(p, 'wardrobe')
        click(p, '[data-wd-view=wardrobe]')
        r = p.eval("({zoom:[...document.querySelectorAll('.g-wd-items [data-wd-zoom]')].map(b=>b.dataset.wdZoom).sort(),locked:!!document.querySelector('[data-wd-zoom=\"ui-sakura\"],[data-wd-zoom=\"sk-phantom\"]')})")
        ok(r['zoom'] == sorted(['evk-gold', 'wp-velvet', 'ui-moonlight', 'tt-darkhour']) and not r['locked'], f'Wardrobe view buttons: {r}')
        click(p, '[data-wd="wp-velvet"]')
        click(p, '.g-wd-acts [data-wd-zoom="wp-velvet"]')
        r = p.eval(V); ok(r['name'] == 'Velvet Room' and 'From the Boutique' in r['info'] and r['n'] == '3 / 4', f'Wardrobe viewer: {r}')
        p.eval(KEY % 'ArrowRight'); r = p.eval(V); ok(r['name'] == 'Moonlight Colours', f'Wardrobe → : {r}')
        ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), 'phone: Wardrobe viewer, no sideways scroll')
        shot(p, 'viewer-wardrobe-phone')
        view(p, 1280, 800)
        p.eval(KEY % 'ArrowLeft'); p.eval("new Promise(r=>setTimeout(r,300))")
        shot(p, 'viewer-wardrobe-desktop')
        p.eval(KEY % 'Escape'); p.eval("new Promise(r=>setTimeout(r,300))")
        ok(p.eval("!!document.querySelector('.g-fm-ov:not(.out)')"), 'menu still open')
        p.eval("FemcMenu.close()")
        view(p, 1280, 850)
        clean(p, 'viewer')
        results['viewer'] = 'Collection and Wardrobe: open, ← → / buttons / swipe with wrap, Esc closes only it, locked never opens, got days, phone fit'

    # ── New outfits and weapon skins: out of the pool until their art exists ──
    if want('newpending'):
        for i in NEW_SKINS + NEW_WPNS: set_aside(SKINS_DIR / i)
        setup(p, day='4/20', met=['akihiko', 'yukari', 'junpei', 'shinjiro', 'mitsuru', 'fuuka', 'aigis', 'koromaru', 'ken', 'haechan', 'jungwon', 'jihoon', 'minji'])
        ids = NEW_SKINS + NEW_WPNS
        r = p.eval(r"""((ids)=>{const C=FemcCosmetics,G=FemcGame,out={missing:ids.filter(id=>!C.byId(id)),ready:[],pool:[],feat:[],eq:[],noWho:[]};
          ids.forEach(id=>{const x=C.byId(id);if(!x)return;if(C.ready(x))out.ready.push(id);if(!x.who)out.noWho.push(id);C.grantItem(id);if(C.equip(id))out.eq.push(id);});
          const pool=C.pool().map(x=>x.id);out.pool=ids.filter(id=>pool.includes(id));
          for(let m=0;m<12;m++){const d=G.dayOf(`${m+1}/15`);C.featured(d).forEach(x=>{if(ids.includes(x.id))out.feat.push(x.id)});}
          out.inBanners=ids.filter(id=>C.BANNERS.some(b=>b.featured.includes(id)));out.pose=C.battle().pose;out.wpn=['solar','haechan','akihiko','jungwon'].map(C.weaponArt);
          return out;})(%s)""" % json.dumps(ids))
        ok(not r['missing'] and not r['ready'] and not r['pool'] and not r['feat'] and not r['eq'] and not r['noWho'] and r['pose'] == {} and r['wpn'] == [None] * 4, f'new looks pending: {r}')
        ok(len(r['inBanners']) == len(ids), f'every new look waits in a banner: {set(ids) - set(r["inBanners"])}')
        r = p.eval(QUIET + r"""((ids)=>{const C=FemcCosmetics,GA=FemcGacha;GA.gs().plumes=1e5;C.rng=Math.random;const got=new Set();try{for(let i=0;i<600;i++)got.add(C.pull().item.id);}finally{""" + LOUD + r"""}
          return ids.filter(id=>got.has(id));})(%s)""" % json.dumps(ids))
        ok(r == [], f'never pulled: {r}')
        menu(p, 'wardrobe')
        click(p, '[data-wd="sk-minji-crew"]')
        r = p.eval("({badge:!!document.querySelector('.g-wd-stage .g-wd-pending'),row:document.querySelector('[data-wd=\"sk-minji-crew\"]').innerText,equip:!!document.querySelector('[data-wd-equip]'),zoom:[...document.querySelectorAll('[data-wd-zoom]')].some(b=>/^(sk|wpn)-/.test(b.dataset.wdZoom)&&!FemcCosmetics.ready(FemcCosmetics.byId(b.dataset.wdZoom))),who:document.querySelector('.g-wd-pv-solar').dataset.who,heads:[...document.querySelectorAll('.g-wd-kind h3 small')].map(x=>x.textContent)})")
        ok(r['badge'] and 'Art coming' in r['row'] and not r['equip'] and not r['zoom'] and r['who'] == 'minji' and 'Minji' in r['heads'] and 'Akihiko' in r['heads'], f'Wardrobe: Art coming, by member: {r}')
        p.eval("FemcMenu.close()")
        # (Their prompts left FEMC-ART-TODO.md when Kat's art came in, batch 57, so no list check here.)
        clean(p, 'newpending')
        for i in NEW_SKINS + NEW_WPNS: put_back(SKINS_DIR / i)
        results['newpending'] = f'{len(NEW_SKINS)} outfits and {len(NEW_WPNS)} weapon skins: not in pool, any month\'s featured, or pulls; unequippable; Art coming; prompts and wiring listed'

    # ── A party member wearing an outfit (temporary art) in a real battle ──
    if want('party'):
        set_aside(PSKIN); set_aside(PWPN)  # Kat's Champion's Robe and Council Rapier step aside; temporary art stands in
        setup(p, day='9/20', met=['akihiko', 'yukari', 'junpei', 'jungwon'])
        ok(p.eval("(()=>{const C=FemcCosmetics;return !C.ready(C.byId('sk-akihiko-champ'))&&!C.metOk(C.byId('sk-minji-crew'))&&C.metOk(C.byId('sk-akihiko-champ'))})()"), 'pending, and Minji unmet')
        menu(p, 'wardrobe')
        ok(p.eval("!document.querySelector('[data-wd=\"sk-minji-crew\"]') && !!document.querySelector('[data-wd=\"sk-akihiko-champ\"]')"), 'unmet members\' looks stay out of the Wardrobe')
        p.eval("FemcMenu.close()")
        try:
            PSKIN.mkdir(parents=True, exist_ok=True)
            for i in range(6): shutil.copy(pathlib.Path(REPO, f'assets/femc/battle/art/poses/akihiko-pose-{i}.webp'), PSKIN / f'akihiko-pose-{i}.webp')
            PWPN.mkdir(parents=True, exist_ok=True)
            shutil.copy(pathlib.Path(REPO, 'assets/femc/battle/art/poses/akihiko-pose-0.webp'), PWPN / 'weapon.webp')
            scan()
            rj = pathlib.Path(REPO, 'assets/femc/game/art/ready.js').read_text()
            ok('"sk-akihiko-champ": {"poses": ["akihiko"]' in rj and '"wpn-jungwon-council"' in rj, 'scan lists both')
            p.goto(URL)
            p.eval("FemcGame.S.phase='play'")
            r = p.eval(r"""(()=>{const C=FemcCosmetics;C.grantItem('sk-akihiko-champ');C.grantItem('wpn-jungwon-council');return {pool:C.pool().some(x=>x.id==='sk-akihiko-champ'),
              eq:C.equip('sk-akihiko-champ'),eqw:C.equip('wpn-jungwon-council'),slot:C.cs().on['skin:akihiko'],pose:C.battle().pose,wpn:C.weaponArt('jungwon'),solarW:C.weaponArt('solar')};})()""")
            ok(r['pool'] and r['eq'] and r['eqw'] and r['slot'] == 'sk-akihiko-champ' and list(r['pose']) == ['akihiko'] and r['pose']['akihiko'].endswith('skins/sk-akihiko-champ/')
               and r['wpn'] == 'assets/femc/game/art/skins/wpn-jungwon-council/weapon.webp' and r['solarW'] is None, f'party looks equipped: {r}')
            menu(p, 'wardrobe')
            click(p, '[data-wd="sk-akihiko-champ"]')
            ok(p.eval("document.querySelector('.g-wd-pv-solar').src.includes('skins/sk-akihiko-champ/akihiko-pose-0.webp')"), 'Wardrobe preview wears it on Akihiko')
            click(p, '.g-wd-acts [data-wd-zoom="sk-akihiko-champ"]')
            ok(p.eval("document.querySelector('.g-view-ov:not(.out) .g-view-img').src.includes('skins/sk-akihiko-champ/akihiko-pose-0.webp')"), 'viewer shows the outfit')
            p.eval("FemcMenu.close()")
            p.eval("(()=>{const G=FemcGame;G.S.joined=['akihiko','yukari','junpei'];G.S.day=G.dayOf('9/15');G.makeHandoff('scripted',{script:'looks-check',notes:'interrupt turn 6',segment:1,forced:true,party:['solar','akihiko','yukari','junpei']});})()")
            p.battle()
            p.wait('!!window.FemcBattle?.B && !!document.querySelector(".bt-fighter")')
            p.eval("FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999})")
            src = None
            for _ in range(400):
                src = p.eval("(()=>{const b=FemcBattle.B,c=FemcBattle.ctl,f=document.querySelector('.bt-fighter'),im=f&&f.querySelector('img:not(.evk)');if(!b.S.cur)return null;const u=b.U(b.S.cur.id);if(!u)return null;"
                             "if(u.mid==='akihiko'&&im&&!f.hidden&&im.complete)return im.src;if(u.side==='party'&&c?.kind==='menu'&&c.items?.some(i=>i.v==='guard'))c.pickValue('guard');return null})()")
                if src: break
                time.sleep(0.05)
            ok(src and 'skins/sk-akihiko-champ/akihiko-pose-' in src, f'Akihiko wears it on the battlefield: {src}')
            ok(p.eval("![...document.images].some(i=>/skins\\/sk-akihiko-champ\\/(solar|yukari|junpei)-/.test(i.src))"), 'only Akihiko changes')
            p.top(); shot(p, 'battle-party-skin')
            p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
            p.console()
        finally:
            shutil.rmtree(PSKIN, ignore_errors=True); shutil.rmtree(PWPN, ignore_errors=True)
            put_back(PSKIN); put_back(PWPN)
            scan()
        rj = pathlib.Path(REPO, 'assets/femc/game/art/ready.js').read_text()
        ok(('"sk-akihiko-champ"' in rj) == PSKIN.exists() and ('"wpn-jungwon-council"' in rj) == PWPN.exists(), 'ready.js restored')
        results['party'] = 'Akihiko in a temporary outfit in a real battle (only him), his preview and viewer; Jungwon\'s weapon skin art; unmet members hidden'

    # ── Screens ──
    if want('shots'):
        setup(p, day='10/12')
        p.eval("(()=>{const C=FemcCosmetics;['wp-velvet','ui-moonlight','evk-gold','tt-darkhour','bui-gold'].forEach(C.grantItem);C.equip('wp-velvet');FemcGacha.gs().plumes=40;FemcGacha.gs().skeys['hw-solar']=1;FemcGacha.gs().skeys['cp-solar-akihiko']=1;FemcGame.save();})()")
        for w, h, tag in [(1280, 800, 'desktop'), (375, 812, 'phone')]:
            view(p, w, h)
            motion(p, True)
            menu(p, 'wardrobe')
            click(p, '[data-wd-view=wardrobe]')
            click(p, '[data-wd="evk-gold"]')
            ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), tag + ': wardrobe, no sideways scroll')
            shot(p, f'wardrobe-{tag}')
            click(p, '[data-wd-view=banner]')
            motion(p, False)
            p.eval("FemcCosmetics.rng=()=>0.01")
            click(p, '[data-wd-pull]')
            p.eval("new Promise(r=>setTimeout(r,1800))")
            ok(p.eval("!!document.querySelector('.g-wd-card.r-UR')"), 'an Ultra reveal')
            shot(p, f'boutique-reveal-{tag}')
            p.eval("FemcCosmetics.rng=Math.random")
            menu(p, 'collection')
            p.eval("document.querySelector('.g-col-series')?.scrollIntoView()")
            shot(p, f'collection-series-{tag}')
            p.eval("FemcMenu.close()")
            # A Secret capsule from the Halloween machine, mid-reveal and revealed.
            p.eval("FemcGacha.rng=()=>0.001;FemcGacha.HIDDEN.rate=0")
            open_capsule(p)
            click(p, '.g-cap-ser[data-series=halloween]')
            click(p, '.g-cap-ov [data-pull=yen]')
            p.wait("document.querySelector('.g-cap-machine').classList.contains('pop')", 10)
            shot(p, f'capsule-secret-pop-{tag}')
            p.wait("!!document.querySelector('.g-cap-ov .g-ga-prize.r-SEC')", 10)
            ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), tag + ': capsule, no sideways scroll')
            shot(p, f'capsule-secret-{tag}')
            p.eval("FemcGacha.rng=Math.random;FemcGacha.HIDDEN.rate=0.0015;document.querySelector('.g-cap-ov [data-close]').click()")
        # Kat's outfits (batch 47): Kiriko Cosplay in the Wardrobe and worn on the battlefield.
        view(p, 1280, 800)
        p.eval("(()=>{const C=FemcCosmetics;['sk-kiriko','sk-emo'].forEach(C.grantItem);C.equip('sk-kiriko');FemcGame.save();})()")
        menu(p, 'wardrobe')
        click(p, '[data-wd-view=wardrobe]')
        click(p, '[data-wd="sk-kiriko"]')
        ok(p.eval("document.querySelector('.g-wd-pv-solar').src.includes('skins/sk-kiriko/solar-pose-0.webp')"), 'the preview wears Kiriko Cosplay')
        shot(p, 'wardrobe-kiriko')
        p.eval("FemcMenu.close()")
        p.eval("(()=>{const G=FemcGame;G.S.joined=['akihiko','yukari','junpei'];G.S.day=G.dayOf('9/15');G.makeHandoff('scripted',{script:'looks-check',notes:'interrupt turn 6',segment:1,forced:true,party:['solar','akihiko','yukari','junpei']});})()")
        p.battle()
        p.wait('!!window.FemcBattle?.B && !!document.querySelector(".bt-fighter")')
        p.eval("FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999})")
        src = None
        for _ in range(300):
            src = p.eval("(()=>{const b=FemcBattle.B,f=document.querySelector('.bt-fighter'),im=f&&f.querySelector('img:not(.evk)');if(!b.S.cur)return null;const u=b.U(b.S.cur.id);return u&&u.mid==='solar'&&im&&!f.hidden&&im.complete?im.src:null})()")
            if src: break
            time.sleep(0.05)
        ok(src and 'skins/sk-kiriko/solar-pose-' in src, f'Kiriko Cosplay on the battlefield: {src}')
        p.top(); shot(p, 'battle-kiriko')
        p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        p.console()
        view(p, 1280, 850)
        motion(p, True)
        clean(p, 'shots')
        results['shots'] = str(SHOTS)

    clean(p, 'end')
    print(json.dumps(results, indent=1))
    print('femc_cosmetics: all checks passed')
finally:
    p.close()
    # Test-made art is removed in its own section; Kat's set-aside folders come back through put_back / atexit.
