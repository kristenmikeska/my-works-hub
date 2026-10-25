"""The capsule series, rarities and tokens (gacha.js) and the Wardrobe / Boutique cosmetics (cosmetics.js), 2026-10-25.
Headless Chrome, isolated profile, localhost; no player saves.

Run: python3 tests/femc_cosmetics.py [--only odds,rotation,tokens,banner,equip,pending,ui,x10,shots] [--screenshots DIR]

Covers: five rarities over many turns (Secret included) and pity kept per series; which machines stand in the Corner by
date (each season, and a turn on a series that isn't on falls back to the Cast machine); only people Solar has met;
repeats → Capsule Tokens, the token shop (UI buy), series completion paying its reward once; the Boutique banner (cost,
odds, pity 10/40, featured rate-up and the Ultra guarantee, repeats refund plumes); equipping code-only looks (menu colours,
wallpaper, title theme kept for the title screen, battle theme and Evoker tint handed to the battle frame); an outfit
whose art is missing staying out of the pool and unequippable, then appearing by itself once its files exist (the test
copies Solar's own pose frames into a temporary skin folder, runs tools/femc-wardrobe.py scan, and removes both after),
worn in a real fight and in scene portraits behind the toggle; New Game+ keeping it all; Wardrobe, Boutique reveal and a
Secret capsule reveal at desktop and phone size; ×10 rolls on every machine (cost, pity counted per turn, the results grid with
one best-rarity reveal, Skip, the disabled reason) with grids at desktop and phone size; zero console errors."""
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
SKIN = pathlib.Path(REPO, 'assets/femc/game/art/skins/sk-date')


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
        ok(r == {'x': 'SEC', 'p': {'sr': 0, 'ur': 0}, 'colors': 5, 'sfx': 5}, f'secret: {r}')
        clean(p, 'odds')
        results['odds'] = 'five tiers, per-series pity, Secret resets'

    # ── Rotation by date and eligibility ──
    if want('rotation'):
        setup(p, day='4/10', met=['akihiko', 'yukari'])
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;const at=md=>GA.activeSeries(G.dayOf(md)).map(s=>s.id).join(',');
          return ['4/10','6/20','7/10','8/30','9/20','10/5','11/3','12/20','1/10','2/14','3/5'].map(at);})()""")
        ok(r == ['cast,couples', 'cast,couples', 'cast,summer', 'cast,summer', 'cast,couples', 'cast,halloween', 'cast,couples', 'cast,winter', 'cast,winter', 'cast,valentine', 'cast,valentine'], f'rotation: {r}')
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
          pending:C.ITEMS.filter(x=>x.art).map(x=>x.id),rewards:C.ITEMS.filter(x=>x.pool===false).map(x=>x.id)};})()""")
        ok(not set(r['pending']) & set(r['pool']) and not set(r['rewards']) & set(r['pool']) and len(r['pool']) >= 20, f'pool: {r}')
        ok(r['banner'] == 'sunrise' and set(r['feat']) == {'ui-sunrise', 'bui-gold', 'evk-gold', 'wp-keyart'}, f'featured: {r}')
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
        clean(p, 'banner')
        results['banner'] = 'pool rules, featured rotation, pity 10/40, rate-up, guarantee'

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
        setup(p, day='4/20')
        r = p.eval(r"""(()=>{const C=FemcCosmetics;C.grantItem('sk-date');return {ready:C.ready(C.byId('sk-date')),inPool:C.pool().some(x=>x.id==='sk-date'),
          eq:C.equip('sk-date'),feat:C.featured().map(x=>x.id),pose:C.battle().pose,face:FemcGame.portrait('solar','happy')};})()""")
        ok(not r['ready'] and not r['inPool'] and r['eq'] is False and 'sk-date' not in r['feat'] and r['pose'] == {} and '/portraits/solar/' in r['face'], f'pending: {r}')
        # Many pulls never give it.
        r = p.eval(QUIET + r"""(()=>{const C=FemcCosmetics,GA=FemcGacha;GA.gs().plumes=1e5;C.rng=Math.random;const got=new Set();try{for(let i=0;i<800;i++)got.add(C.pull().item.id);}finally{""" + LOUD + r"""}
          return [...got].filter(id=>C.byId(id).art);})()""")
        ok(r == [], f'pending art never drawn: {r}')
        menu(p, 'wardrobe')
        click(p, '[data-wd="sk-date"]')
        r = p.eval("({badge:!!document.querySelector('.g-wd-stage .g-wd-pending'),row:document.querySelector('[data-wd=\"sk-date\"]').innerText,equip:!!document.querySelector('[data-wd-equip]')})")
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
            ok('"sk-date"' in pathlib.Path(REPO, 'assets/femc/game/art/ready.js').read_text(), 'scan lists it')
            p.goto(URL)
            p.eval("FemcGame.S.phase='play'")
            r = p.eval(r"""(()=>{const C=FemcCosmetics;return {ready:C.ready(C.byId('sk-date')),inPool:C.pool().some(x=>x.id==='sk-date'),feat:C.featured().map(x=>x.id),eq:C.equip('sk-date'),
              pose:C.battle().pose,face:FemcGame.portrait('solar','happy'),sad:FemcGame.portrait('solar','sad')};})()""")
            ok(r['ready'] and r['inPool'] and 'sk-date' in r['feat'] and r['eq'] and r['pose'].get('solar', '').endswith('skins/sk-date/'), f'art arrived: {r}')
            ok(r['face'].endswith('skins/sk-date/portraits/solar/happy.webp') and r['sad'].endswith('skins/sk-date/portraits/solar/happy.webp'), f'scene portraits: {r}')
            ok(p.eval("(()=>{FemcCosmetics.setPortraits(false);const f=FemcGame.portrait('solar','happy');FemcCosmetics.setPortraits(true);return f})()").endswith('/portraits/solar/happy.webp') and
               '/skins/' not in p.eval("(()=>{FemcCosmetics.setPortraits(false);const f=FemcGame.portrait('solar','happy');FemcCosmetics.setPortraits(true);return f})()"), 'the portrait toggle')
            menu(p, 'wardrobe')
            click(p, '[data-wd="sk-date"]')
            ok(p.eval("document.querySelector('.g-wd-pv-solar').src.includes('skins/sk-date/solar-pose-0.webp') && !document.querySelector('.g-wd-stage .g-wd-pending')"), 'the preview wears it')
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
            ok(src and 'skins/sk-date/solar-pose-' in src, f'battlefield figure: {src}')
            p.top()
            p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
            p.console()
        finally:
            shutil.rmtree(SKIN, ignore_errors=True)
            scan()
        ok('sk-date' not in pathlib.Path(REPO, 'assets/femc/game/art/ready.js').read_text(), 'ready.js restored')
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
            p.eval("FemcGacha.rng=()=>0.001")
            open_capsule(p)
            click(p, '.g-cap-ser[data-series=halloween]')
            click(p, '.g-cap-ov [data-pull=yen]')
            p.wait("document.querySelector('.g-cap-machine').classList.contains('pop')", 10)
            shot(p, f'capsule-secret-pop-{tag}')
            p.wait("!!document.querySelector('.g-cap-ov .g-ga-prize.r-SEC')", 10)
            ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), tag + ': capsule, no sideways scroll')
            shot(p, f'capsule-secret-{tag}')
            p.eval("FemcGacha.rng=Math.random;document.querySelector('.g-cap-ov [data-close]').click()")
        view(p, 1280, 850)
        motion(p, True)
        clean(p, 'shots')
        results['shots'] = str(SHOTS)

    clean(p, 'end')
    print(json.dumps(results, indent=1))
    print('femc_cosmetics: all checks passed')
finally:
    p.close()
    if SKIN.exists():
        shutil.rmtree(SKIN, ignore_errors=True); scan()
