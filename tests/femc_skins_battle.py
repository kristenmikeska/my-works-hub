"""Skins in battle, part 8 (FEMC-SKINS-BATTLE-DESIGN H-L, 2026-11-01): the One More eye strip, the battle-start entrance
card, a couple set's Showtime, the theme frame on the HUD card and the theme burst in the All-Out cloud.
Headless Chrome, isolated profile, its own localhost server; no player saves.

Run: python3 tests/femc_skins_battle.py [--only data,tools,fallback,art,settings,sheet2,looks,evoker,tryon,lookfx,winhd] [--screenshots DIR]

  data      cosmetics.js THEMES (every listed look exists; part 4's picks), battle() hands theme / name / couple per worn
            look and no art paths while no files exist.
  tools     tools/femc-wardrobe.py onemore / entrance / showtime / frame cut test images to the right files and sizes (the
            frame's green keyed out) and scan lists them in ready.js; all test files removed after (ready.js restored).
  fallback  a real Tartarus night wearing Date Day (hearts) with no part-8 art: the entrance card (drawn), the hearts frame
            on Solar's card only, the One More eye strip on a fire weakness, the hearts burst in the All-Out cloud; a couple
            set (Sun Hoodie + Moon Hoodie) playing a bond as the drawn Showtime; screenshots of each mid-play at 1440x900
            and 390x844.
  art       the same with test art files in each art path: Kat's pictures replace every drawn version.
  settings  Outfit effects Off (no frame or burst), Entrance cards Off, a second fight of the night,
            Persona cut-ins Off (the old band), reduced motion (strip and card fade), practice (none of it).
  sheet2    D, the second pose sheet (Nov 1 2026): in a real Tartarus fight Solar's own look plays pose2-0 on a support
            cast (with the hand charge at its open hand), pose2-1 guarding, pose2-2 on a dodge, pose2-3 knocked down,
            pose2-4 at 30% HP or less, pose2-5 on a baton pass and the All-Out run-in; each on sheet 1's exact box (no
            jump in size or place), screenshots at 1440x900 and 390x844. Akihiko (no sheet 2) keeps sheet 1 exactly
            (no pose2 frame, hidden when down); the Summer Yukata uses its own sheet 2; Date Day (sheet 1 only) never
            borrows Solar's own sheet 2. A themed look's skill hit plays Kat's theme-hearts sheet small on top.
  looks     Nov 1 2026: Alpha Phi's alternate sheet 2 (pose2b) on a fight's coin flip (window.__btAlt2) and V1 otherwise, both
            loading; E, a look's own Theurgy cut-in (a still: no prelude or sequence) and, without one, the fighter's own.
  evoker    M (Nov 1 2026), the summon cut-in's Evoker close-up: a look with its own `evoker` art (a test file cut with
            femc-wardrobe.py evoker) shows it, never the default-uniform shot or summon clip; a look without one shows
            its pose-1 frame large (Solar's Yukata, Akihiko's swimsuit), never the default shot; no look: as before.
            Screenshots at 1440x900 and 390x844.
  winhd     Nov 3 2026, HD single-figure poses: the win screen's hero is the worn look's HD peace sign (After Hours), her own
            HD peace sign in her own look; a set without peace uses the fist pump; a look without a set keeps pose 5.
            Screenshots at 1440x900 and 390x844.
  lookfx    N (Nov 1 2026), a look's own effect sheet: a test sheet (3 x 2, light on black) cut by tools/femc-fx.py skin
            sk-date → skins/sk-date/fx.webp, scan lists its hash in ready.js; battle() / tryOnSpec hand it; in a real Tartarus
            fight it plays at the entrance card, as the skill sparkle in place of theme-hearts (and theme-hearts again with
            it removed), as the All-Out burst and behind the win screen's victory pose; Try it on's burst uses it; Outfit
            effects Off / Performance drop the layer. Screenshots at 1440x900 (and 390x844).
  tryon     S3, the Wardrobe's "Try it on" (game/tryon.js): the button on an owned and an unowned outfit and the Boutique's
            ▶, every beat in order, Enter / click skip to the victory pose, Esc closes only it (focus back), the hand
            charge only for a clean look, Outfit effects Off, reduced motion, every ready look's frames loading, a party
            member's look; no sideways scroll at 1440x900, 1280x720 and 390x844; screenshots mid-showcase.
"""
import argparse, base64, json, pathlib, shutil, subprocess, sys, time
from femc_browser import Page, REPO

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/claude-501/-Users-katarinagrande/e8f9a9d2-09eb-475d-859c-9dc4016b9da5/scratchpad/skins-battle-shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
results = {}
ART = pathlib.Path(REPO, 'assets/femc/game/art')
READY = ART / 'ready.js'
READY0 = READY.read_text()
MADE = []  # test files to remove at the end
SAVED = {}  # Kat's real files a test overwrites: put back by cleanup()


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


def scan():
    subprocess.run([sys.executable, str(pathlib.Path(REPO, 'tools/femc-wardrobe.py')), 'scan'], check=True, capture_output=True)


def cleanup():
    for f in MADE:
        f = pathlib.Path(f)
        if f.is_file(): f.unlink()
        for d in (f.parent,):
            if d.exists() and d != ART and not any(d.iterdir()) and d.parent in (ART, ART / 'skins'): d.rmdir()
    MADE.clear()
    for f, b in SAVED.items(): f.write_bytes(b)
    SAVED.clear()
    scan()
    if READY.read_text() != READY0: READY.write_text(READY0)


import atexit
atexit.register(cleanup)

URL = 'femc-game.html?speed=10&seed=7'
SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'8/3'); S.slot='evening';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=50000; S.condition='good';
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]}; S.lateNights={seen:[],lastDay:999};
  ['akihiko','yukari','junpei','shinjiro','mitsuru','fuuka','aigis','koromaru','ken','haechan','jungwon','kuromi','elizabeth'].forEach(id=>{ if(!S.met.includes(id)) S.met.push(id); });
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh()); b.lvl=30; b.party=['akihiko','yukari','junpei']; b.awakened=true;
  S.battleSave=FemcBattleSave.normalize(b); S.tartarus.bosses=['magician','priestess','empress'];
  const E=FemcBattleEngine; E.evolutionsDue(S.battleSave,id=>E.lvlOf(S.battleSave,id)).forEach(e=>{S.battleSave.evo[e.mid]=true});
  const C=FemcCosmetics; (cfg.wear||[]).forEach(id=>{C.grantItem(id);C.equip(id)}); G.save();
  return true;
})()"""


def shot(p, name):
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
    return str(SHOTS / (name + '.png'))


def view(p, w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def motion(p, reduce):
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce' if reduce else 'no-preference'}]})


def clean(p, where):
    errs = [e for e in p.console() if 'favicon' not in str(e)]
    ok(not errs, f'{where}: {errs}')


BSTEP = r"""(()=>{const F=FemcBattle,c=F.ctl,d=document;
  const tip=d.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return 'tip'}
  if(F.screen()==='results'&&window.__stopResults)return 'results';
  if(F.screen()==='shuffle'){if(c&&c.kind==='shuffle'){c.pickValue(0);return 'sh'}const k=d.querySelector('[data-sh-ok]');if(k)k.click();return 'shuffle'}
  if(d.querySelector('.bt-room.stairs [data-v=no], .bt-room.barrier [data-v=no]')){d.querySelector('.bt-room [data-v=no]').click();return 'no'}
  if(c?.kind==='map'){const o=c.opts||[];const n=o.find(x=>x.type==='shadow'&&!x.cleared&&!x.used)||o.find(x=>!x.visited)||o[0];if(n)c.go(n.id);return 'map'}
  if(c?.kind==='allout'){if(window.__holdAllout)return 'hold';c.pickValue('1');return 'allout'}
  if(c?.kind==='menu'){const B=F.B,u=B&&B.S.cur;if(window.__holdSolar&&u&&u.mid==='solar')return 'solar';const v=c.items.map(i=>i.v);c.pickValue(v.includes('attack')?'attack':v.includes('guard')?'guard':v[0]);return 'pick'}
  if(c?.kind==='buttons'){const b=d.querySelector('.bt-btn.pink:not(:disabled)')||d.querySelector('.bt-btn:not(:disabled)');b&&b.click();return 'btn'}
  return null})()"""
HAECHAN_MENU = "FemcBattle.screen()==='battle'&&FemcBattle.ctl?.kind==='menu'&&FemcBattle.ctl.items.some(i=>i.v==='skill')&&FemcBattle.B.S.cur.mid==='haechan'"
SOLAR_MENU = "FemcBattle.screen()==='battle'&&FemcBattle.ctl?.kind==='menu'&&FemcBattle.ctl.items.some(i=>i.v==='skill')&&FemcBattle.B.S.cur.mid==='solar'"
# A fire spell for Solar (Maya is weak to fire): a weakness → One More → All Down.
CAST = r"""(()=>{const F=FemcBattle,D=FEMC_BATTLE_DATA,u=F.B.U(F.B.S.cur.id);D.skills.t_fire=D.skills.t_fire||{name:'Test Fire',el:'fire',type:'dmg',target:'one',power:1,cost:{sp:1},desc:''};
  if(!u.skills.includes('t_fire'))u.skills.unshift('t_fire');u.sp=Math.max(u.sp,99);F.ctl.pickValue('skill');return true})()"""
# Pause every running CSS animation inside sel at share t of its duration (a still of the middle of the effect).
HOLD = r"""((sel,t)=>{const r=document.querySelector(sel);if(!r)return 0;const a=r.getAnimations({subtree:true});a.forEach(x=>{const d=x.effect.getComputedTiming();const dur=d.duration||0;const del=(x.effect.getTiming().delay||0);x.pause();x.currentTime=del+dur*t});return a.length})(%s,%s)"""


def hold(p, sel, t):
    return p.eval(HOLD % (json.dumps(sel), t))


def fits(p):
    return p.eval('document.documentElement.scrollWidth <= innerWidth + 1')


p = Page()
try:
    view(p, 1440, 900)
    motion(p, False)

    def setup(**cfg):
        p.goto(URL)
        p.eval(SETUP % {'cfg': json.dumps(cfg)})
        # Nov 2: Kat's signature effect sheets (N) are in for 41 looks; the theme-sheet checks run without them (lookfx sets its own).
        p.eval("Object.values(FEMC_ART_READY.skins).forEach(s=>{delete s.fx});true")

    def bdrive(until, limit=90):
        t0 = time.time()
        while time.time() - t0 < limit:
            if p.eval(until): return True
            p.eval(BSTEP); time.sleep(0.04)
        raise TimeoutError(until + ' :: ' + str(p.eval("JSON.stringify({s:FemcBattle.screen(),c:FemcBattle.ctl&&FemcBattle.ctl.kind})")))

    def night(party, pre=''):
        """Into the Tartarus night's hub (past any evolution cinematics); `pre` runs in the frame before the first fight."""
        p.top()
        p.eval("FemcGame.makeHandoff('tartarus',{party:%s});FemcGame.save()" % json.dumps(party))
        p.battle(); p.eval("window.__hoStay=true")
        for _ in range(300):
            if p.eval("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'"): break
            p.eval("(()=>{if(FemcBattle.screen()!=='evolution')return;const b=[...document.querySelectorAll('button')].find(x=>/skip|continue/i.test(x.textContent));b&&b.click()})()"); time.sleep(0.1)
        ok(p.eval("FemcBattle.screen()==='hub'"), 'the night\'s hub: ' + str(p.eval("FemcBattle.screen()+' '+(FemcBattle.ctl&&FemcBattle.ctl.kind)+' '+document.body.innerText.slice(0,300)")))
        p.eval("FemcBattle.save.cutins='first';window.__btGroup=['maya','maya'];window.__holdSolar=true;" + pre)

    def scripted(party):
        """A scripted story fight (any date's party, e.g. Haechan in December), live in the frame."""
        p.eval('FemcGame.makeHandoff("scripted",{script:"bond-check",notes:"",segment:1,forced:true,party:' + json.dumps(party) + '})')
        p.battle()
        for _ in range(300):
            st = p.eval("document.querySelector('[data-prep=begin]') ? (document.querySelector('[data-prep=begin]').click(), 'prep') : (window.FemcBattle && FemcBattle.B && document.querySelector('.bt-barks') ? 'live' : '')")
            if st == 'live': break
            time.sleep(0.1)
        p.eval("window.__hoStay=true;FemcBattle.save.cutins='always';FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999});FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=9e6});true")
        time.sleep(1.5)

    def enter():
        p.eval("document.querySelector('[data-go=run],[data-go=cont]').click()")

    def cast_fire():
        p.eval(CAST)
        p.wait("FemcBattle.ctl&&FemcBattle.ctl.items&&FemcBattle.ctl.items.some(i=>i.v==='t_fire')", 10)
        p.eval("FemcBattle.ctl.pickValue('t_fire')"); time.sleep(0.15)
        p.eval("(()=>{const c=FemcBattle.ctl,fs=FemcBattle.B.foes().filter(f=>!f.dead),f=fs.find(f=>!f.down)||fs[0];if(c&&c.pickValue)c.pickValue(f.id)})()")

    def frozen_at(m, timeout=30):
        bdrive(f"(FemcBattle.marks[{json.dumps(m)}]||0)>0", timeout)

    def go_on():
        p.eval("window.__btFreezeAt=null;FemcBattle.unfreeze();document.getAnimations().forEach(a=>{try{a.play()}catch(e){}});true")

    # ── Data: themes and what battle() hands the frame ──
    if want('data'):
        setup(wear=['sk-date'])
        r = p.eval(r"""(()=>{const C=FemcCosmetics,T=C.THEMES,skins=C.ITEMS.filter(x=>x.kind==='skin');
          const listed=Object.values(T).flat(),missing=listed.filter(id=>!C.byId(id)||C.byId(id).kind!=='skin'),dup=listed.filter((id,i)=>listed.indexOf(id)!==i);
          const b=C.battle();
          return {themes:Object.keys(T),missing,dup,date:C.byId('sk-date').theme,sun:C.byId('sk-cp-sunmoon').theme,moon:C.byId('sk-haechan-cp-sunmoon').theme,
            plain:['sk-vp','sk-haechan-arrivals','sk-jungwon-council','sk-aigis-uniform'].map(id=>C.byId(id).theme||null),themed:skins.filter(x=>x.theme).length,
            theme:b.theme,name:b.name,couple:b.couple,onemore:b.onemore,onemore2:b.onemore2,entrance:b.entrance,theurgy:b.theurgy,finish:b.finish,pose2b:b.pose2b,showtime:b.showtime,frames:b.frames}})()""")
        ok(len(r['themes']) == 13 and not r['missing'] and not r['dup'], f'13 themes, every look real, none twice: {r["missing"]} {r["dup"]}')
        ok(r['date'] == 'hearts' and r['sun'] == 'sunmoon' and r['moon'] == 'sunmoon' and r['plain'] == [None] * 4, f'part 4 picks: {r}')
        ok(r['theme'] == {'solar': 'hearts'} and r['name'] == {'solar': 'Date Day'} and r['couple'] == {} and sorted(r['showtime']) == ['cp-afterhours', 'cp-drive', 'cp-moviedate', 'cp-sunmoon'] and not r['pose2b'], f'battle(): {r}')
        # Kat's Nov 1 art for Date Day: both One More pictures, the entrance card, the Theurgy cut-in and the finish card; 12 frames.
        for k, f in (('onemore', 'solar-onemore.webp'), ('onemore2', 'solar-onemore-v2.webp'), ('entrance', 'solar-entrance.webp'), ('theurgy', 'solar-theurgy.webp'), ('finish', 'solar-finish.webp')):
            own = ['aigis', 'akihiko', 'haechan', 'jihoon', 'jungwon', 'junpei', 'minji', 'mitsuru', 'shinjiro', 'yukari'] if k in ('onemore', 'entrance') else []  # own strips and cards (Haechan Nov 1, batch 128; the other fighters but Koromaru Nov 3, batch 131) ride along for their own looks
            ok(sorted(r[k]) == sorted(['solar'] + own) and f'skins/sk-date/{f}' in r[k]['solar'] and all(f'game/art/{k}/{w}.webp' in r[k][w] for w in own), f'battle() {k}: {r[k]}')
        ok(len(r['frames']) == 12 and 'foxfire' not in r['frames'], f'frames: {r["frames"]}')
        alt = p.eval("(()=>{FemcCosmetics.grantItem('sk-alphaphi');FemcCosmetics.equip('sk-alphaphi');const b=FemcCosmetics.battle();FemcCosmetics.equip('sk-date');return b.pose2b})()")
        ok(alt == {'solar': True}, f'Alpha Phi: an alternate sheet 2: {alt}')
        clean(p, 'data')
        results['data'] = f"13 themes over {r['themed']} looks; battle() theme/name and every Nov 1 art path"

    # ── The tool commands and scan ──
    if want('tools'):
        from PIL import Image, ImageDraw
        tmp = pathlib.Path(SHOTS, '_src'); tmp.mkdir(exist_ok=True)
        wide = Image.new('RGB', (1536, 300), (255, 79, 158)); ImageDraw.Draw(wide).rectangle([600, 100, 900, 200], fill=(20, 7, 15)); wide.save(tmp / 'om.png')
        Image.new('RGB', (1536, 1024), (20, 7, 15)).save(tmp / 'card.png')
        fr = Image.new('RGB', (1500, 600), (0, 255, 0)); d = ImageDraw.Draw(fr); d.rectangle([20, 20, 1480, 580], outline=(255, 79, 158), width=10)
        d.ellipse([10, 10, 90, 90], fill=(255, 140, 192)); fr.save(tmp / 'frame.png')
        W = [sys.executable, str(pathlib.Path(REPO, 'tools/femc-wardrobe.py'))]
        # A look with none of Kat's art (Haechan's Sigma Chi Runner; Black Suit got its art on Nov 2), Koromaru's own look (the others got their strips Nov 3), the Ringside Showtime and the missing foxfire theme, so nothing real is touched.
        # The strip source has white letterbox bands top and bottom: they are cut off before the 5:1 crop.
        band = Image.new('RGB', (1536, 520), (255, 255, 255)); band.paste(wide, (0, 110)); band.save(tmp / 'omband.png')
        outs = {'onemore': ART / 'skins/sk-haechan-runners/haechan-onemore.webp', 'onemore2': ART / 'skins/sk-haechan-runners/haechan-onemore-v2.webp', 'own': ART / 'onemore/koromaru.webp',
                'entrance': ART / 'skins/sk-haechan-runners/haechan-entrance.webp', 'theurgy': ART / 'skins/sk-haechan-runners/haechan-theurgy.webp', 'finish': ART / 'skins/sk-haechan-runners/haechan-finish.webp',
                'showtime': ART / 'couples/cp-ringside-showtime.webp', 'frame': ART / 'frames/foxfire.webp'}
        for f in outs.values(): ok(not f.exists(), f'{f} should not exist before the test'); MADE.append(f)
        subprocess.run(W + ['onemore', str(tmp / 'om.png'), 'sk-haechan-runners'], check=True, capture_output=True)
        subprocess.run(W + ['onemore2', str(tmp / 'omband.png'), 'sk-haechan-runners'], check=True, capture_output=True)
        subprocess.run(W + ['onemore', str(tmp / 'om.png'), 'own', 'koromaru'], check=True, capture_output=True)
        subprocess.run(W + ['entrance', str(tmp / 'card.png'), 'sk-haechan-runners'], check=True, capture_output=True)
        subprocess.run(W + ['theurgy', str(tmp / 'card.png'), 'sk-haechan-runners'], check=True, capture_output=True)
        subprocess.run(W + ['finish', str(tmp / 'card.png'), 'sk-haechan-runners'], check=True, capture_output=True)
        subprocess.run(W + ['showtime', str(tmp / 'card.png'), 'ringside'], check=True, capture_output=True)
        subprocess.run(W + ['frame', str(tmp / 'frame.png'), 'foxfire'], check=True, capture_output=True)
        sizes = {k: Image.open(f).size for k, f in outs.items()}
        ok(sizes == {'onemore': (1800, 360), 'onemore2': (1800, 360), 'own': (1800, 360), 'entrance': (1600, 900), 'theurgy': (1600, 900), 'finish': (1600, 900), 'showtime': (1600, 900), 'frame': (1000, 400)}, f'sizes: {sizes}')
        o2 = Image.open(outs['onemore2']).convert('RGB')
        ok(o2.getpixel((900, 2)) != (255, 255, 255) and o2.getpixel((900, 357)) != (255, 255, 255), 'the letterbox bands are cut off before the crop')
        fa = Image.open(outs['frame']).convert('RGBA')
        ok(fa.getpixel((500, 200))[3] == 0 and fa.getpixel((16, 200))[3] > 200 and fa.getpixel((5, 200))[3] == 0, 'the frame\'s green keyed out, its border kept')
        rj = READY.read_text()
        data = json.loads(rj.split('window.FEMC_ART_READY = ')[1].rstrip().rstrip(';'))
        ph = data['skins']['sk-haechan-runners']
        ok(all(ph.get(k) == ['haechan'] for k in ('onemore', 'onemore2', 'entrance', 'theurgy', 'finish')) and data['own']['onemore'] == ['aigis', 'akihiko', 'haechan', 'jihoon', 'jungwon', 'junpei', 'koromaru', 'minji', 'mitsuru', 'shinjiro', 'solar', 'yukari'] and data['own']['onemore2'] == ['solar']
           and data['couples'] == ['cp-afterhours', 'cp-drive', 'cp-moviedate', 'cp-ringside', 'cp-sunmoon'] and 'foxfire' in data['frames'], f'scan lists them: {ph}, {data["own"]}, {data["couples"]}, {data["frames"]}')
        cleanup()
        ok(READY.read_text() == READY0 and not any(f.exists() for f in outs.values()), 'test files gone, ready.js restored')
        shutil.rmtree(tmp, ignore_errors=True)
        results['tools'] = sizes

    # ── A real night with no part-8 art: every built-in version, screenshots mid-play ──
    def fight_pieces(tag, art=False):
        """One Tartarus fight wearing Date Day: entrance card, frame, One More strip, All-Out burst; then a couple bond."""
        got = {}
        setup(wear=['sk-date'])
        if art:  # Kat's real Date Day art (Nov 1); only the couple Showtime is a test file, listed in the page's ready.js (as scan would)
            p.eval("(()=>{const A=FEMC_ART_READY;A.couples=['cp-sunmoon'];return true})()")
        else:  # the built-in versions: hide Kat's art from the page's ready.js
            p.eval("(()=>{const A=FEMC_ART_READY,s=A.skins['sk-date'];['onemore','onemore2','entrance','theurgy','finish'].forEach(k=>delete s[k]);A.frames=[];return true})()")
        p.eval("FemcGame.S.battleSave.settings&&(FemcGame.S.battleSave.settings.entrance=true);FemcGame.save()")
        night(['solar', 'akihiko', 'yukari', 'junpei'], "window.__btFreezeAt='entrance';" + ("" if art else "delete FEMC_FX_ART['theme-hearts'];"))
        enter()
        frozen_at('entrance', 60)
        time.sleep(0.25)
        kind = 'art' if art else 'code'
        e = p.eval("(()=>{const e=document.querySelector('.bt-entrance');const im=e&&e.querySelector('img');return e&&{cls:e.className,src:im&&im.getAttribute('src'),name:(e.querySelector('.en-name')||{}).textContent||null,loaded:!!(im&&im.complete&&im.naturalWidth)}})()")
        ok(e and kind in e['cls'] and e['loaded'] and (('skins/sk-date/solar-entrance.webp' in e['src']) if art else ('skins/sk-date/solar-pose-0.webp' in e['src'] and 'SOLAR' in e['name'] and 'Date Day' in e['name'])), f'entrance card ({kind}): {e}')
        for w, h in [(1440, 900), (390, 844)]:
            view(p, w, h); time.sleep(0.3); hold(p, '.bt-entrance', 0.95)
            ok(fits(p), f'entrance {w}: no sideways scroll'); got[f'entrance-{w}'] = shot(p, f'{tag}-entrance-{w}x{h}')
        view(p, 1440, 900); go_on()
        bdrive(SOLAR_MENU, 120)
        fr = p.eval("[...document.querySelectorAll('.bt-card')].map(c=>{const f=c.querySelector('.bt-tframe');return f&&{id:c.dataset.id,cls:f.className,theme:f.dataset.theme,n:f.querySelectorAll('svg.tm').length,bg:f.style.backgroundImage}}).filter(Boolean)")
        solar_id = p.eval("FemcBattle.B.party().find(u=>u.mid==='solar').id")
        ok(len(fr) == 1 and fr[0]['id'] == solar_id and fr[0]['theme'] == 'hearts' and (('frames/hearts.webp' in fr[0]['bg']) if art else fr[0]['n'] == 12), f'hearts frame on Solar\'s card only ({kind}): {fr}')
        for w, h in [(1440, 900), (390, 844)]:
            view(p, w, h); time.sleep(0.5)
            ok(fits(p), f'HUD {w}: no sideways scroll'); got[f'frame-{w}'] = shot(p, f'{tag}-frame-{w}x{h}')
        view(p, 1440, 900); time.sleep(0.3)
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})")
        # One More: the fire weakness.
        p.eval("window.__btFreezeAt='onemore-strip';window.__holdAllout=true")
        cast_fire()
        frozen_at('onemore-strip', 30)
        time.sleep(0.15)
        om = p.eval("(()=>{const s=document.querySelector('.bt-onemore.has-om .bt-om');const im=s&&s.querySelector('img');return s&&{cls:s.className,src:im&&im.getAttribute('src'),band:!!document.querySelector('.bt-onemore .bt-band')}})()")
        ok(om and kind in om['cls'] and not om['band'] and ((('skins/sk-date/solar-onemore.webp') in om['src']) if art else 'skins/sk-date/portraits/solar/' in om['src']), f'One More strip ({kind}): {om}')
        if art:  # the two-stage strip: v1, then the flash / wipe to v2 with the eye glints
            two = p.eval("(()=>{const s=document.querySelector('.bt-om');return {two:s.classList.contains('two'),v2:(s.querySelector('.bt-om-v2 img')||{}).getAttribute?.('src')||'',g:s.querySelectorAll('.bt-om-glint').length,fl:!!s.querySelector('.bt-om-flash')}})()")
            ok(two['two'] and 'skins/sk-date/solar-onemore-v2.webp' in two['v2'] and two['g'] == 2 and two['fl'], f'two-stage strip: {two}')
        for w, h in [(1440, 900), (390, 844)]:
            for t in ((0.25, 0.5) if art else (0.45,)):
                view(p, w, h); time.sleep(0.3); hold(p, '.bt-onemore', t)
                if art:  # the eyes stay inside the strip: the art frame covers it (no bare edge), never narrower than it
                    fit = p.eval("(()=>{const s=document.querySelector('.bt-om').getBoundingClientRect(),i=document.querySelector('.bt-om-art').getBoundingClientRect();return {sw:s.width,sh:s.height,iw:i.width,ih:i.height}})()")
                    ok(fit['iw'] >= fit['sw'] * 0.99 and fit['sh'] >= 70, f'strip art covers the strip {w}: {fit}')
                ok(fits(p), f'strip {w}: no sideways scroll'); got[f'onemore-{w}-{t}'] = shot(p, f'{tag}-onemore-{int(t * 100)}-{w}x{h}')
        view(p, 1440, 900); go_on()
        # Her One More: the second Maya's weakness → All Down → the All-Out.
        bdrive(SOLAR_MENU, 30)
        cast_fire()
        try: bdrive("FemcBattle.ctl?.kind==='allout'", 30)
        except TimeoutError: print('DEBUG', p.eval("JSON.stringify({m:Object.keys(FemcBattle.marks).filter(k=>/use|onemore|allout|weak|down/.test(k)).map(k=>k+':'+FemcBattle.marks[k]),f:FemcBattle.B.foes().map(f=>[f.hp,f.down,f.dead]),cur:FemcBattle.B.S.cur.mid,log:FemcBattle.blog.slice(-8)})")); raise
        p.eval("window.__btFreezeAt='allout-dust';window.__holdAllout=false;FemcBattle.B.foes().forEach(f=>{f.hp=Math.min(f.hp,50)});FemcBattle.ctl.pickValue('1')")
        frozen_at('allout-dust', 30)
        time.sleep(0.2 if not art else 0.5)
        tb = p.eval("[...document.querySelectorAll('.bt-tburst')].map(t=>({cls:t.className,theme:t.dataset.theme,n:t.querySelectorAll('svg.tm').length,bg:t.style.backgroundImage}))")
        ok(len(tb) == 2 and all(t['theme'] == 'hearts' and kind in t['cls'] for t in tb) and (all('theme-hearts.webp' in t['bg'] for t in tb) if art else all(t['n'] == 7 for t in tb)), f'All-Out hearts burst ({kind}): {tb}')
        for w, h in [(1440, 900), (390, 844)]:
            view(p, w, h); time.sleep(0.3)
            p.eval("(()=>{const r=document.querySelector('.bt-battle'),f=r.querySelector('.bt-field').getBoundingClientRect(),R=r.getBoundingClientRect(),d=r.querySelector('.bt-dust');d.style.left=(f.left-R.left+f.width/2)+'px';d.style.top=(f.top-R.top+f.height*0.62)+'px';return true})()")
            if not art: hold(p, '.bt-allout', 0.5)
            ok(fits(p), f'allout {w}: no sideways scroll'); got[f'allout-{w}'] = shot(p, f'{tag}-allout-{w}x{h}')
        view(p, 1440, 900)
        # G: the finish card of the look (Kat's Date Day card) or, without it, Solar's own.
        go_on(); p.eval("window.__btFreezeAt='allout-finish'")
        frozen_at('allout-finish', 30); time.sleep(0.35)
        fc = p.eval("(()=>{const i=document.querySelector('.bt-finish img');return i&&{src:i.getAttribute('src'),ok:i.complete&&i.naturalWidth>0}})()")
        ok(fc and fc['ok'] and (('skins/sk-date/solar-finish.webp' in fc['src']) if art else ('battle/art/finish/solar.webp' in fc['src'])), f'finish card ({kind}): {fc}')
        for w, h in [(1440, 900), (390, 844)]:
            view(p, w, h); time.sleep(0.3); hold(p, '.bt-finish', 0.8); got[f'finish-{w}'] = shot(p, f'{tag}-finish-{w}x{h}')
        view(p, 1440, 900); go_on()
        p.eval("window.__holdSolar=false;window.__stopResults=true")
        bdrive("FemcBattle.screen()==='results'", 60)
        clean(p, f'{tag} fight')
        # Couple Showtime: Sun Hoodie + Moon Hoodie, a bond of Solar and Haechan through the real presentation.
        p.top()
        setup(wear=['sk-cp-sunmoon', 'sk-haechan-cp-sunmoon'], day='12/12')
        if art: p.eval("(()=>{FEMC_ART_READY.couples=['cp-sunmoon'];return true})()")
        else: p.eval("(()=>{FEMC_ART_READY.couples=[];return true})()")  # Kat's Sun & Moon Showtime is in (Nov 3): hide it for the drawn version
        scripted(['solar', 'haechan', 'akihiko', 'yukari'])
        p.eval("window.__btFreezeAt='bond-final'")
        p.eval(r"""(()=>{const F=FemcBattle,B=F.B,L=B.party().find(u=>u.mid==='solar'),P=B.party().find(u=>u.mid==='haechan');
          F.playEvents([{t:'bond',src:L.id,solar:L.id,partner:P.id,mid:'haechan',id:'t-bond',name:'Twin Orbit',love:true,look:['almighty','sun'],line:['Ready?','Always.']}]);return true})()""")
        frozen_at('bond-final', 30)
        time.sleep(0.4)
        cp = p.eval("(()=>{const w=document.querySelector('.bt-bond');return w&&{cls:w.className,f:[...w.querySelectorAll('.cp-f')].map(i=>i.getAttribute('src')),img:(w.querySelector('.th-img')||{}).getAttribute?.('src')||null,n:w.querySelectorAll('.cp-spark svg.tm').length,name:w.querySelector('.th-name small').textContent}})()")
        ok(cp and 'Couple Showtime' in cp['name'], f'couple bond: {cp}')
        if art: ok('kind-cut' in cp['cls'] and 'couples/cp-sunmoon-showtime.webp' in (cp['img'] or '') and not cp['f'], f'couple Showtime art: {cp}')
        else: ok('kind-couple' in cp['cls'] and len(cp['f']) == 2 and 'skins/sk-cp-sunmoon/solar-pose-5' in cp['f'][0] and 'skins/sk-haechan-cp-sunmoon/haechan-pose-5' in cp['f'][1] and cp['n'] == 12, f'couple Showtime drawn: {cp}')
        for w, h in [(1440, 900), (390, 844)]:
            view(p, w, h); time.sleep(0.3); hold(p, '.bt-bond', 0.55)
            ok(fits(p), f'couple {w}: no sideways scroll'); got[f'couple-{w}'] = shot(p, f'{tag}-couple-{w}x{h}')
        view(p, 1440, 900); go_on()
        p.wait("(FemcBattle.marks['bond-done']||0)>0", 30)
        clean(p, f'{tag} couple')
        p.top(); p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        return got

    if want('fallback'):
        results['fallback'] = fight_pieces('fallback')

    if want('art'):
        from PIL import Image, ImageDraw
        test_art = {}  # Date Day's strip, card, finish and the hearts frame are Kat's (Nov 1); the Sun & Moon Showtime too (Nov 3)
        # theme-hearts is Kat's own sheet since Nov 1 (art/fx/theme-hearts.webp): the burst plays it, nothing faked.
        for f, (w, h) in test_art.items():
            ok(not f.exists(), f'{f} exists already: not overwriting it'); f.parent.mkdir(parents=True, exist_ok=True); MADE.append(f)
            im = Image.new('RGBA', (w, h), (255, 79, 158, 255) if 'frames' not in str(f) and 'theme-' not in str(f) else (0, 0, 0, 0))
            dr = ImageDraw.Draw(im); dr.text((20, 20), 'TEST ART', fill=(255, 255, 255, 255))
            if 'frames' in str(f) or 'theme-' in str(f): dr.rectangle([4, 4, w - 5, h - 5], outline=(255, 140, 192, 255), width=6)
            im.save(f, 'WEBP')
        try:
            results['art'] = fight_pieces('art', art=True)
        finally:
            cleanup()

    # ── Settings and the cases it stays out of ──
    if want('settings'):
        setup(wear=['sk-date', 'sk-cp-sunmoon', 'sk-haechan-cp-sunmoon'])
        p.eval("(()=>{const C=FemcCosmetics;C.equip('sk-date');FemcGame.save();return true})()")
        # Outfit effects Off: no frame, no burst; the entrance card still plays (its own setting).
        night(['solar', 'akihiko', 'yukari', 'junpei'], "FemcBattle.save.settings.skinFx=false;window.__holdAllout=false;")
        enter(); bdrive(SOLAR_MENU, 120)
        ok(p.eval("!document.querySelector('.bt-tframe') && (FemcBattle.marks['entrance']||0)===1"), 'Outfit effects Off: no frame; the entrance card plays')
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})")
        cast_fire()
        p.wait("(FemcBattle.marks['onemore']||0)>0", 30)
        ok(p.eval("(FemcBattle.marks['onemore-strip']||0)===1"), 'the eye strip is not an outfit effect: it still plays')
        p.wait("FemcBattle.ctl?.kind==='allout'||FemcBattle.ctl?.kind==='menu'", 30)
        p.eval("FemcBattle.B.foes().forEach(f=>{f.hp=Math.min(f.hp,50)});window.__holdSolar=false;window.__stopResults=true")
        bdrive("FemcBattle.screen()==='results'", 60)
        ok(not p.eval("FemcBattle.marks['allout-theme']"), 'Outfit effects Off: no All-Out burst')
        # A second fight of the same night: no entrance card (a chain).
        p.eval("FemcBattle.save.settings.skinFx=true;window.__stopResults=false;window.__holdSolar=true")
        bdrive("(FemcBattle.marks['battle-start']||0)>=2", 120)
        ok(p.eval("(FemcBattle.marks['entrance']||0)===1 && (FemcBattle.marks['entrance-skip']||0)>=1"), 'the second fight of a night skips the card')
        # Entrance cards Off, Persona cut-ins Off (the old band), and Rush.
        clean(p, 'settings skinFx'); setup(wear=['sk-date'])
        night(['solar', 'akihiko', 'yukari', 'junpei'], "FemcBattle.save.settings.entrance=false;FemcBattle.save.cutins='off';")
        enter(); bdrive(SOLAR_MENU, 120)
        ok(p.eval("!FemcBattle.marks['entrance'] && FemcBattle.marks['entrance-skip']===1"), 'Entrance cards Off')
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})")
        cast_fire(); p.wait("(FemcBattle.marks['onemore']||0)>0", 30)
        ok(p.eval("!FemcBattle.marks['onemore-strip']"), 'Persona cut-ins Off: the old band, no eye strip')
        # Reduced motion: the card and the strip fade (no slide), still shown.
        motion(p, True)
        p.goto(URL); p.eval(SETUP % {'cfg': json.dumps({'wear': ['sk-date']})})
        night(['solar', 'akihiko', 'yukari', 'junpei'], "window.__btFreezeAt='entrance';")
        enter(); frozen_at('entrance', 60)
        an = p.eval("(()=>{const e=document.querySelector('.bt-entrance');return e&&{reduced:e.classList.contains('reduced'),pose:getComputedStyle(e.querySelector('.en-pose,.en-art')).animationName}})()")
        ok(an and an['pose'] == 'none', f'reduced motion: no slide on the card: {an}')
        go_on(); bdrive(SOLAR_MENU, 120)
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999});window.__btFreezeAt='onemore-strip'")
        cast_fire(); frozen_at('onemore-strip', 30); time.sleep(0.1)
        ok(p.eval("getComputedStyle(document.querySelector('.bt-om')).animationName") == 'bt-om-fade', 'reduced motion: the strip fades')
        go_on(); motion(p, False)
        p.top(); p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        clean(p, 'settings')
        # Practice: no Wardrobe, none of it.
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?speed=10&seed=3'})
        p.wait("document.readyState==='complete' && !!window.FemcBattle", 30)
        ok(p.eval("FemcBattle.looks===null"), 'practice: no looks')
        results['settings'] = 'skinFx Off, chain, Entrance Off, cut-ins Off, reduced motion, practice'

    if want('tryon'):
        TO = "FemcTryOn.state()"
        def wmenu():
            p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcMenu.close&&FemcMenu.close();")
            p.eval("new Promise(r=>setTimeout(r,250))")
            p.eval("FemcMenu.open('wardrobe')")
            p.wait("!!document.querySelector('.g-fm-ov:not(.out) .g-fm-body')")
        def pick(id):
            p.eval("document.querySelector('[data-wd-view=wardrobe]')?.click()")
            p.wait("!!document.querySelector('[data-wd=\"%s\"]')" % id)
            p.eval("document.querySelector('[data-wd=\"%s\"]').click()" % id)
            p.wait("!!document.querySelector('.g-wd-acts [data-wd-try=\"%s\"]')" % id)
        def key(k):
            p.eval("document.activeElement.dispatchEvent(new KeyboardEvent('keydown',{key:%s,bubbles:true,cancelable:true}))" % json.dumps(k))
        def at_beat(b, t=12):
            p.wait("FemcTryOn.state()?.beat===%s" % json.dumps(b), t)
        def gone():
            p.wait("!document.querySelector('.g-to-ov')", 5)
            return p.eval("({menu:!!document.querySelector('.g-fm-ov:not(.out)'),focus:document.activeElement?.dataset?.wdTry||null,state:FemcTryOn.state()})")
        view(p, 1440, 900); motion(p, False)
        setup(wear=['sk-date'])
        p.eval("FemcGame.setSettings({skinFx:true,perf:false,calm:false})")
        # Kat's recuts put sk-date in cosmetics.js CLEAN: take it out in the page so the first plays are an uncleaned look.
        p.eval("(()=>{const C=FemcCosmetics.CLEAN,i=C.indexOf('sk-date');if(i>=0)C.splice(i,1);return true})()")
        wmenu(); pick('sk-date')
        # Plays every beat in order, ends on the victory pose with Replay / Done.
        p.eval("document.querySelector('.g-wd-acts [data-wd-try=\"sk-date\"]').click()")
        at_beat('entrance'); ok(p.eval("document.querySelector('.g-to-ov').getAttribute('role')==='dialog'"), 'a dialog')
        p.wait("FemcTryOn.state()?.done===true", 12)
        r = p.eval(TO)
        ok(r['seen'] == ['entrance', 'idle', 'attack', 'skill', 'onemore', 'win'], f'every beat in order: {r}')
        ok(set(['entrance-art', 'onemore-art', 'onemore-two', 'burst-art', 'sparkle']) <= set(r['fx']) and 'charge' not in r['fx'], f'Kat\'s card and two-stage strip, her hearts sheet as the burst, sparkle, no charge (not clean): {r}')
        bu = p.eval("(()=>{const b=document.querySelector('.g-to-burst');return b&&{cls:b.className,bg:b.style.backgroundImage}})()")
        ok(bu and 'art' in bu['cls'] and 'fx/theme-hearts.webp' in bu['bg'], f'try-on burst plays theme-hearts: {bu}')
        ok(p.eval("document.querySelector('.g-to-fig.on').src.includes('skins/sk-date/solar-pose-5.webp') && document.activeElement.dataset.toAct==='done' && !!document.querySelector('[data-to-act=replay]')"), 'ends on the victory pose, Done focused, Replay')
        # Replay, then Enter skips; a click skips too; Esc closes only the showcase and gives focus back.
        key('ArrowLeft'); ok(p.eval("document.activeElement.dataset.toAct") == 'replay', 'arrows move between the buttons')
        key('Enter'); at_beat('entrance')
        key('Enter'); r = p.eval(TO)
        ok(r['beat'] == 'win' and r['done'] and r['seen'][-1] == 'win' and len(r['seen']) == 2, f'Enter skips to the victory pose: {r}')
        p.eval("FemcTryOn.replay()"); at_beat('idle')
        p.eval("document.querySelector('[data-to-stage]').click()"); ok(p.eval(TO)['done'], 'a click skips')
        key('Escape'); r = gone()
        ok(r['menu'] and r['focus'] == 'sk-date' and r['state'] is None, f'Esc closes only it, focus back on the button: {r}')
        ok(p.eval("FemcTryOn.skip()===null||FemcTryOn.skip()===undefined"), 'nothing left playing')
        # Mid-showcase stills, desktop: the skill beat (burst) and the One More strip.
        p.eval("FemcCosmetics.byId('sk-date').clean=true")
        p.eval("document.querySelector('.g-wd-acts [data-wd-try=\"sk-date\"]').click()")
        p.wait("(FemcTryOn.state()?.fx||[]).some(x=>/^burst/.test(x))", 12); p.eval("FemcTryOn.freeze()")
        r = p.eval(TO); ok('charge' in r['fx'], f'a clean look: the hand charge: {r}')
        c = p.eval("(()=>{const c=document.querySelector('.g-to-charge'),s=document.querySelector('[data-to-stage]').getBoundingClientRect();return {x:parseFloat(c.style.left),y:parseFloat(c.style.top),w:s.width,h:s.height}})()")
        ok(0 < c['x'] < c['w'] and 0 < c['y'] < c['h'], f'the charge sits on the stage: {c}')
        hold(p, '.g-to', 0.5); ok(fits(p), '1440: no sideways scroll'); shots = [shot(p, 'tryon-skill-1440')]
        p.eval("FemcTryOn.close()"); gone()
        p.eval("FemcCosmetics.byId('sk-date').clean=false")
        p.eval("document.querySelector('.g-wd-acts [data-wd-try=\"sk-date\"]').click()")
        at_beat('onemore'); p.eval("FemcTryOn.freeze()"); hold(p, '.g-to-om', 0.25); shots.append(shot(p, 'tryon-onemore-v1-1440'))
        hold(p, '.g-to-om', 0.55); shots.append(shot(p, 'tryon-onemore-v2-1440'))
        ok(p.eval("!!document.querySelector('.g-to-om.two .om-v2 img[src*=\"solar-onemore-v2\"]')"), 'Try it on: the two-stage strip')
        p.eval("FemcTryOn.close()"); gone()
        # Outfit effects Off: no charge, burst or sparkle (the pose and the strip still play).
        p.eval("FemcGame.setSettings({skinFx:false});FemcCosmetics.byId('sk-date').clean=true;FemcTryOn.play('sk-date')")
        p.wait("FemcTryOn.state()?.done===true", 12)
        r = p.eval("({fx:FemcTryOn.state().fx,els:document.querySelectorAll('.g-to-charge,.g-to-burst,.g-to-sparkle,.g-to-en svg').length})")
        ok(r['els'] == 0 and not ({'charge', 'burst', 'burst-art', 'sparkle'} & set(r['fx'])), f'Outfit effects Off: {r}')
        p.eval("FemcTryOn.close();FemcGame.setSettings({skinFx:true});FemcCosmetics.byId('sk-date').clean=false"); gone()
        # Performance mode and Reduce flashes: fewer motifs, calm class.
        p.eval("FemcGame.setSettings({perf:true,calm:true});FemcTryOn.play('sk-date')")
        r = p.eval("({perf:document.querySelector('.g-to').classList.contains('perf'),calm:document.querySelector('.g-to').classList.contains('calm'),n:document.querySelectorAll('.g-to-burst svg').length,art:!!document.querySelector('.g-to-burst.art')})")
        ok(r['perf'] and r['calm'] and (r['n'] == 5 or (r['art'] and r['n'] == 0)), f'Performance / Reduce flashes: {r}')
        p.eval("FemcTryOn.close();FemcGame.setSettings({perf:false,calm:false})"); gone()
        # Reduced motion: still frames with crossfades.
        motion(p, True); p.eval("FemcTryOn.play('sk-date')"); at_beat('attack')
        r = p.eval("({fig:getComputedStyle(document.querySelector('.g-to-figw')).animationName,tr:getComputedStyle(document.querySelector('.g-to-fig')).transitionDuration,red:document.querySelector('.g-to').classList.contains('reduced')})")
        ok(r['red'] and r['fig'] == 'none' and r['tr'] == '0.3s', f'reduced motion: {r}')
        p.wait("FemcTryOn.state()?.done===true", 12); p.eval("FemcTryOn.close()"); gone(); motion(p, False)
        # Every ready look: its showcase opens and its victory frame loads.
        ids = p.eval("FemcCosmetics.ITEMS.filter(x=>x.kind==='skin'&&FemcCosmetics.ready(x)).map(x=>x.id)")
        bad = []
        for i in ids:
            p.eval("FemcTryOn.play(%s);FemcTryOn.skip()" % json.dumps(i))
            try: p.wait("(()=>{const s=FemcTryOn.state();if(!s||!s.done)return false;const im=document.querySelector('.g-to-fig.on');return im.complete&&im.naturalWidth>0})()", 8)
            except Exception: bad.append(i)
            p.eval("FemcTryOn.close(true)")
        ok(not bad and len(ids) > 40, f'every ready look plays ({len(ids)}): failed {bad}')
        # A party member's look, not owned: the button is there (the Boutique's preview), plays, phone and 1280 fit.
        hid = p.eval("(FemcCosmetics.ITEMS.find(x=>x.kind==='skin'&&x.who==='haechan'&&FemcCosmetics.ready(x)&&!FemcCosmetics.owns(x.id))||{}).id")
        ok(hid, 'a ready Haechan look not owned')
        view(p, 390, 844); wmenu(); pick(hid)
        p.eval("document.querySelector('.g-wd-acts [data-wd-try=\"%s\"]').click()" % hid)
        p.wait("(FemcTryOn.state()?.fx||[]).some(x=>/^burst/.test(x))", 12); p.eval("FemcTryOn.freeze()")
        ok(p.eval("document.querySelector('.g-to-fig.on').src.includes('%s/haechan-pose-3.webp')" % hid), "a party member's skill frame")
        hold(p, '.g-to', 0.5); ok(fits(p), '390: no sideways scroll'); shots.append(shot(p, 'tryon-skill-390'))
        p.eval("FemcTryOn.close()"); gone()
        p.eval("FemcTryOn.play(%s)" % json.dumps(hid)); at_beat('entrance'); time.sleep(0.35); p.eval("FemcTryOn.freeze()"); hold(p, '.g-to', 0.6); shots.append(shot(p, 'tryon-entrance-390'))
        p.eval("FemcTryOn.close()"); gone()
        view(p, 1280, 720); p.eval("FemcTryOn.play(%s)" % json.dumps(hid)); at_beat('win', 12)
        sz = p.eval("(()=>{const r=document.querySelector('.g-to').getBoundingClientRect();return {b:r.bottom,r:r.right,h:innerHeight,w:innerWidth}})()")
        ok(fits(p) and sz['b'] <= sz['h'] and sz['r'] <= sz['w'], f'1280x720 fits: {sz}'); shots.append(shot(p, 'tryon-win-1280'))
        p.eval("FemcTryOn.close()"); gone()
        # The Boutique's ▶ on a featured outfit.
        view(p, 1440, 900); p.eval("document.querySelector('[data-wd-view=banner]').click()")
        p.wait("!!document.querySelector('.g-wd-banner')")
        f = p.eval("(document.querySelector('.g-wd-feat [data-wd-try]')||{}).dataset?.wdTry||null")
        ok(f, 'a featured outfit has ▶')
        p.eval("document.querySelector('.g-wd-feat [data-wd-try]').click()"); at_beat('entrance')
        key('Escape'); r = gone(); ok(r['focus'] == f, f'Boutique: focus back on ▶: {r}')
        clean(p, 'tryon')
        results['tryon'] = {'looks': len(ids), 'shots': shots}


    # ── D: the second pose sheet in a real fight ──
    if want('sheet2'):
        POSELOG = r"""(()=>{const b=document.querySelector('.bt-fighter');window.__poseLog=[];new MutationObserver(()=>{const i=b.querySelector('img.posed');window.__poseLog.push([b.dataset.id,b.dataset.pose,i&&i.getAttribute('src')])}).observe(b,{attributes:true,subtree:true,attributeFilter:['data-pose','src','hidden']});return true})()"""
        BOX = r"""(()=>{const b=document.querySelector('.bt-fighter'),i=b.querySelector('img.posed'),r=i&&i.getBoundingClientRect();return {hidden:b.hidden,id:b.dataset.id,pose:b.dataset.pose,src:i&&i.getAttribute('src'),nw:i&&i.naturalWidth,nh:i&&i.naturalHeight,r:r&&[Math.round(r.left),Math.round(r.top),Math.round(r.width),Math.round(r.height)]}})()"""
        shots2, boxes = [], {}
        def unit(mid): return p.eval("FemcBattle.B.party().find(u=>u.mid===%s).id" % json.dumps(mid))
        def freeze_ev(markname, evs, pre=''):
            p.eval("window.__btFreezeAt=%s;%s;FemcBattle.playEvents(%s);true" % (json.dumps(markname), pre, evs))
            frozen_at(markname, 20); time.sleep(0.25)
        def snap(tag):
            out = {}
            for w, h in [(1440, 900), (390, 844)]:
                view(p, w, h); time.sleep(0.35)
                out[w] = p.eval(BOX); ok(fits(p), f'{tag} {w}: no sideways scroll')
                shots2.append(shot(p, f'sheet2-{tag}-{w}x{h}'))
            view(p, 1440, 900); time.sleep(0.2)
            return out
        setup()
        night(['solar', 'akihiko', 'yukari', 'koromaru'], "window.__holdAllout=true;FemcBattle.save.cutins='off';")
        enter(); bdrive(SOLAR_MENU, 120)
        info = p.eval("FemcBattle.poses2('solar')"); aki = p.eval("FemcBattle.poses2('koromaru')")
        ok(info['has'] and len(info['frames']) == 12 and all('poses/solar-pose2-%d.webp' % i in info['frames'][6 + i] for i in range(6))
           and info['states']['support'] == [6] and info['states']['dash'] == [11], f'Solar: sheet 2 as frames 6-11: {info}')
        ok(not aki['has'] and len(aki['frames']) == 6 and 'support' not in aki['states'], f'Koromaru: sheet 1 only: {aki}')
        p.eval("FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999;u.sp=999});FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999});" + POSELOG)
        sid, aid = unit('solar'), unit('akihiko'); foe = p.eval("FemcBattle.B.foes()[0].id")
        boxes['idle'] = snap('idle')
        ok(boxes['idle'][1440]['pose'] == '0' and 'solar-pose-0' in boxes['idle'][1440]['src'], f'idle: {boxes["idle"][1440]}')
        # support: a Dia from Solar (a Persona skill), the charge at pose2-0's open hand
        ev = json.dumps([{'t': 'use', 'src': sid, 'skill': 'dia', 'name': 'Dia', 'el': 'heal', 'summon': True, 'tgts': [sid]}])
        freeze_ev('fighter-support', ev)
        boxes['support'] = snap('support')
        p.eval("FemcBattle.unfreeze()"); p.wait("(FemcBattle.marks['fighter-charge']||0)>0", 10)
        h2 = p.eval("FemcBattle.poses2('solar').hand2")
        ok(h2 == [0.136, 0.23], f'support hand point: {h2}')
        go_on(); time.sleep(0.6)
        # guard (held), then a dodge
        p.eval("FemcBattle.B.U(%s).guard=true" % json.dumps(sid))
        freeze_ev('fighter-guard', json.dumps([{'t': 'guard', 'src': sid}])); go_on(); time.sleep(0.4)
        boxes['guard'] = snap('guard')
        p.eval("FemcBattle.B.U(%s).guard=false" % json.dumps(sid))
        freeze_ev('fighter-dodge', json.dumps([{'t': 'miss', 'src': foe, 'tgt': sid}]))
        boxes['dodge'] = snap('dodge'); go_on(); time.sleep(0.6)
        # badly hurt: 30% HP rests on pose2-4
        p.eval("(()=>{const u=FemcBattle.B.U(%s);u.hp=Math.floor(u.maxHp*0.3);return true})()" % json.dumps(sid))
        p.eval("FemcBattle.playEvents(%s)" % json.dumps([{'t': 'miss', 'src': foe, 'tgt': sid}])); time.sleep(1.2)
        boxes['wounded'] = snap('wounded')
        p.eval("(()=>{const u=FemcBattle.B.U(%s);u.hp=u.maxHp;return true})()" % json.dumps(sid))
        # knocked down: a weakness hit Downs her; she stays on the field in pose2-3
        p.eval("(()=>{const u=FemcBattle.B.U(%s);u.down=true;return true})()" % json.dumps(sid))
        p.eval("FemcBattle.playEvents(%s)" % json.dumps([{'t': 'hit', 'src': foe, 'tgt': sid, 'el': 'strike', 'aff': 'weak', 'amount': 1, 'hp': 99998, 'maxHp': 99999, 'downed': True}]))
        p.wait("(FemcBattle.marks['fighter-down']||0)>0", 10); time.sleep(1.2)
        boxes['down'] = snap('down')
        p.eval("FemcBattle.B.U(%s).down=false" % json.dumps(sid))
        # dash: a baton pass from Akihiko to Solar
        freeze_ev('fighter-dash', json.dumps([{'t': 'shift', 'src': aid, 'tgt': sid, 'boost': 1.5}]))
        boxes['dash'] = snap('dash'); go_on(); time.sleep(0.8)
        want_pose = {'support': ('6', 'pose2-0'), 'guard': ('7', 'pose2-1'), 'dodge': ('8', 'pose2-2'), 'down': ('9', 'pose2-3'), 'wounded': ('10', 'pose2-4'), 'dash': ('11', 'pose2-5')}
        for k, (n, f) in want_pose.items():
            for w in (1440, 390):
                b, i0 = boxes[k][w], boxes['idle'][w]
                ok(not b['hidden'] and b['id'] == sid and b['pose'] == n and f'solar-{f}.webp' in b['src'], f'{k} {w}: {b}')
                ok((b['nw'], b['nh']) == (i0['nw'], i0['nh']) and all(abs(x - y) <= 1 for x, y in zip(b['r'], i0['r'])), f'{k} {w}: same box as sheet 1 (no jump): {b} vs {i0}')
        # The All-Out run-in, for real: Solar's fire on two weak Mayas, then go.
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999;f.down=false})")
        bdrive(SOLAR_MENU, 30); cast_fire(); bdrive(SOLAR_MENU, 30); cast_fire()
        bdrive("FemcBattle.ctl?.kind==='allout'", 30)
        p.eval("window.__btFreezeAt='fighter-dash#2';window.__holdAllout=false;FemcBattle.B.foes().forEach(f=>{f.hp=Math.min(f.hp,50)});FemcBattle.ctl.pickValue('1')")
        bdrive("(FemcBattle.marks['fighter-dash']||0)>=2", 30); time.sleep(0.25)
        b = p.eval(BOX); ok(b['pose'] == '11' and 'solar-pose2-5' in b['src'], f'All-Out run-in: {b}')
        shots2.append(shot(p, 'sheet2-allout-dash-1440x900'))
        go_on(); p.eval("window.__holdSolar=false;window.__stopResults=true")
        bdrive("FemcBattle.screen()==='results'", 60)
        log = p.eval("window.__poseLog")
        ok(not any(e[2] and 'pose2' in e[2] and 'koromaru' in e[2] for e in log), 'a fighter with no sheet 2 (Koromaru) never shows a pose2 frame')
        clean(p, 'sheet2 solar')
        # Fallback: Akihiko leads in his Off-Day Hoodie (sheet 1 only; every fighter but Koromaru, who has no menu, got an own sheet 2 by Nov 3); guard / dodge / down keep sheet 1 exactly (no pose2, hidden when Down).
        p.top(); setup(wear=['sk-akihiko-hoodie'])
        night(['akihiko', 'solar', 'yukari', 'junpei'], "window.__holdSolar=false;FemcBattle.save.cutins='off';")
        enter(); bdrive("FemcBattle.screen()==='battle'&&FemcBattle.ctl?.kind==='menu'&&FemcBattle.B.S.cur.mid==='akihiko'", 120)
        p.eval("FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999});FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999});" + POSELOG)
        aid = unit('akihiko'); foe = p.eval("FemcBattle.B.foes()[0].id")
        p.eval("FemcBattle.B.U(%s).guard=true;FemcBattle.playEvents(%s)" % (json.dumps(aid), json.dumps([{'t': 'guard', 'src': aid}, {'t': 'miss', 'src': foe, 'tgt': aid}]))); time.sleep(1.5)
        g = p.eval(BOX); ok(g['pose'] == '0' and 'sk-akihiko-hoodie/akihiko-pose-0' in g['src'], f'Akihiko (Off-Day Hoodie) guarding / dodging: sheet 1 idle as before: {g}')
        p.eval("(()=>{const u=FemcBattle.B.U(%s);u.guard=false;u.hp=Math.floor(u.maxHp*0.2);u.down=true;return true})()" % json.dumps(aid))
        p.eval("FemcBattle.playEvents(%s)" % json.dumps([{'t': 'hit', 'src': foe, 'tgt': aid, 'el': 'strike', 'aff': 'weak', 'amount': 1, 'hp': 19999, 'maxHp': 99999, 'downed': True}])); time.sleep(1.5)
        ok(not p.eval("FemcBattle.marks['fighter-down']") and not any('pose2' in (e[2] or '') for e in p.eval("window.__poseLog")), 'Akihiko (Off-Day Hoodie): no sheet-2 state, no pose2 frame (never his own sheet 2)')
        ok(p.eval("FemcBattle.poses2('akihiko').frames.length") == 6, 'Akihiko (Off-Day Hoodie): six frames')
        clean(p, 'sheet2 fallback')
        # Looks: the Summer Yukata has its own sheet 2; Date Day (sheet 1 only) never borrows Solar's own.
        p.top(); setup(wear=['sk-yukata'])
        r = p.eval("(()=>{const b=FemcCosmetics.battle();return {pose2:b.pose2,look:b.look}})()")
        ok(r['pose2'] == {'solar': True} and r['look'].get('solar') == 'sk-yukata', f'cosmetics battle(): Yukata sheet 2: {r}')
        night(['solar', 'akihiko', 'yukari', 'junpei'], "FemcBattle.save.cutins='off';")
        enter(); bdrive(SOLAR_MENU, 120)
        y = p.eval("FemcBattle.poses2('solar')")
        ok(y['has'] and all('skins/sk-yukata/solar-pose2-%d.webp' % i in y['frames'][6 + i] for i in range(6)) and y['hand2'] == [0.55, 0.46], f'Yukata frames: {y}')
        p.eval("FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999;u.sp=999});FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})")
        sid = unit('solar'); foe = p.eval("FemcBattle.B.foes()[0].id")
        y0 = p.eval(BOX)
        freeze_ev('fighter-dodge', json.dumps([{'t': 'miss', 'src': foe, 'tgt': sid}]))
        yb = p.eval(BOX); ok(yb['pose'] == '8' and 'sk-yukata/solar-pose2-2' in yb['src'] and all(abs(a - b) <= 1 for a, b in zip(yb['r'], y0['r'])), f'Yukata dodge on sheet 1\'s box: {yb} vs {y0}')
        for w, h in [(1440, 900), (390, 844)]:
            view(p, w, h); time.sleep(0.35); shots2.append(shot(p, f'sheet2-yukata-dodge-{w}x{h}'))
        view(p, 1440, 900); go_on(); time.sleep(0.5)
        clean(p, 'sheet2 yukata')
        p.top(); setup(wear=['sk-haechan-runners'], day='12/12')  # Nov 2: Black Suit got its sheet 2; Sigma Chi Runner is sheet 1 only
        scripted(['solar', 'haechan', 'akihiko', 'yukari'])  # Haechan fights from December; a scripted fight takes him
        p.eval("FemcBattle.save.cutins='off'"); bdrive(HAECHAN_MENU, 120)
        d = p.eval("FemcBattle.poses2('haechan')")
        ok(not d['has'] and len(d['frames']) == 6 and not any('pose2' in f for f in d['frames']), f'Sigma Chi Runner (sheet 1 only): {d}')
        # F: Sigma Chi Runner is music notes; Haechan's skill hit plays Kat's theme-notes sheet small on top
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})"); cast_fire()
        p.wait("(FemcBattle.marks['fx-theme-notes']||0)>0 && (FemcBattle.marks['fx-art-theme-notes']||0)>0", 20)
        clean(p, 'sheet2 suit')
        p.top(); p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        results['sheet2'] = {'states': list(want_pose), 'shots': shots2}

    # ── E (a look's own Theurgy cut-in) and Alpha Phi's two sheet 2s (Nov 1 2026) ──
    if want('looks'):
        TH = r"""(()=>{const F=FemcBattle,B=F.B,u=B.party().find(x=>x.mid==='solar'),T=B.theurgyDef(u);
          F.playEvents([{t:'theurgy',src:u.id,mid:'solar',name:T.name,look:T.look||T.el,img:T.img||null,video:T.video||null,focus:T.focus||null,layers:T.layers||null,sheet:T.sheet||null,sequence:T.sequence||null,form:T.form||null}]);return true})()"""
        lshots = []
        for alt in (True, False):
            setup(wear=['sk-alphaphi'])
            night(['solar', 'akihiko', 'yukari', 'junpei'], f"window.__btAlt2={'true' if alt else 'false'};FemcBattle.save.cutins='always';")
            enter(); bdrive(SOLAR_MENU, 120)
            fr = p.eval("FemcBattle.poses2('solar').frames")
            want2 = 'pose2b' if alt else 'pose2'
            ok(len(fr) == 12 and all(f'skins/sk-alphaphi/solar-{want2}-{i}.webp' in fr[6 + i] for i in range(6)), f'Alpha Phi sheet 2 ({want2}): {fr[6:]}')
            h2 = p.eval("FemcBattle.poses2('solar').hand2")
            ok(h2 == ([0.3, 0.23] if alt else [0.63, 0.26]), f'Alpha Phi support hand ({want2}): {h2}')
            ok(p.eval("Promise.all(FemcBattle.poses2('solar').frames.slice(6).map(s=>new Promise(r=>{const i=new Image();i.onload=()=>r(i.naturalWidth>0);i.onerror=()=>r(false);i.src=s}))).then(a=>a.every(Boolean))"), f'{want2} frames load')
            if alt:
                p.eval("FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999});FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})")
                sid = p.eval("FemcBattle.B.party().find(u=>u.mid==='solar').id"); foe = p.eval("FemcBattle.B.foes()[0].id")
                p.eval("window.__btFreezeAt='fighter-dodge';FemcBattle.playEvents(%s);true" % json.dumps([{'t': 'miss', 'src': foe, 'tgt': sid}]))
                frozen_at('fighter-dodge', 20); time.sleep(0.3)
                for w, h in [(1440, 900), (390, 844)]:
                    view(p, w, h); time.sleep(0.35); lshots.append(shot(p, f'looks-alphaphi-v2-dodge-{w}x{h}'))
                view(p, 1440, 900); go_on(); time.sleep(0.6)
                # E: Alpha Phi's own Theurgy cut-in, a still with the fighter's crop and timing; the name and line unchanged.
                p.eval("window.__btFreezeAt='theurgy-final'"); p.eval(TH)
                frozen_at('theurgy-final', 30); time.sleep(0.45)
                t = p.eval("(()=>{const w=document.querySelector('.bt-theurgy'),i=w&&w.querySelector('.th-img');return w&&{cls:w.className,src:i&&i.getAttribute('src'),ok:!!(i&&i.complete&&i.naturalWidth),name:w.querySelector('.th-name').textContent,prelude:!!w.querySelector('.th-prelude'),seq:!!w.querySelector('.th-seq')}})()")
                ok(t and 'kind-cut' in t['cls'] and 'skins/sk-alphaphi/solar-theurgy.webp' in (t['src'] or '') and t['ok'] and not t['prelude'] and not t['seq'] and p.eval("(FemcBattle.marks['theurgy-look']||0)===1"), f'look Theurgy cut-in: {t}')
                for w, h in [(1440, 900), (390, 844)]:
                    view(p, w, h); time.sleep(0.35); lshots.append(shot(p, f'looks-theurgy-{w}x{h}'))
                view(p, 1440, 900); go_on(); p.wait("!document.querySelector('.bt-theurgy')", 20)
            clean(p, f'looks alt={alt}')
            p.top(); p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        # Without a look's Theurgy art (Haechan's Sigma Chi Runner; Black Suit has its own since Nov 2): the fighter's own cut-in, no look mark.
        setup(wear=['sk-haechan-runners'], day='12/12')
        scripted(['solar', 'haechan', 'akihiko', 'yukari'])
        p.eval("FemcBattle.save.cutins='off'"); bdrive(SOLAR_MENU, 120)
        p.eval(TH.replace("'solar'", "'haechan'")); p.wait("(FemcBattle.marks['theurgy-final']||FemcBattle.marks['theurgy-short']||0)>0", 30)
        ok(not p.eval("FemcBattle.marks['theurgy-look']"), 'no look art: the fighter\'s own Theurgy')
        p.wait("!document.querySelector('.bt-theurgy')", 20)
        clean(p, 'looks fallback')
        p.top(); p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        results['looks'] = lshots

    # ── M: the summon cut-in's Evoker close-up wears the outfit (Nov 1 2026) ──
    if want('evoker'):
        from PIL import Image, ImageDraw
        tmp = pathlib.Path(SHOTS, '_src'); tmp.mkdir(exist_ok=True)
        im = Image.new('RGB', (1920, 1080), (20, 7, 15)); d = ImageDraw.Draw(im)
        for i in range(0, 2400, 60): d.line([(i, 0), (i - 400, 1080)], fill=(255, 79, 158), width=8)
        d.ellipse([860, 200, 1260, 600], fill=(255, 140, 192)); d.rectangle([700, 330, 900, 380], fill=(230, 230, 240))
        im.save(tmp / 'evk.png')
        out = ART / 'skins/sk-date/solar-evoker.webp'
        ok(not out.exists(), 'Date Day has no Evoker close-up before the test'); MADE.append(out)
        subprocess.run([sys.executable, str(pathlib.Path(REPO, 'tools/femc-wardrobe.py')), 'evoker', str(tmp / 'evk.png'), 'sk-date'], check=True, capture_output=True)
        ok(Image.open(out).size == (1600, 900) and Image.open(out).mode == 'RGB', 'evoker: 1600 x 900, background kept')
        rd = json.loads(READY.read_text().split('window.FEMC_ART_READY = ')[1].rstrip().rstrip(';'))
        ok(rd['skins']['sk-date'].get('evoker') == ['solar'], f"scan lists it: {rd['skins']['sk-date']}")
        EVK = r"""(()=>{const w=document.querySelector('.bt-evoke');if(!w)return null;const s=w.querySelector('.bt-evk-shot'),i=s&&s.querySelector('img'),b=w.querySelector('.bt-evk-band');
          const r=i&&i.getBoundingClientRect(),sr=s&&s.getBoundingClientRect(),h=w.innerHTML;
          return {cls:s&&s.className,src:i&&i.getAttribute('src'),ok:!!(i&&i.complete&&i.naturalWidth),band:!!b,video:!!w.querySelector('video'),dflt:/summon\/[a-z]+-evoker\.webp/.test(h),
            r:r&&[r.left,r.top,r.width,r.height].map(Math.round),sr:sr&&[sr.left,sr.top,sr.width,sr.height].map(Math.round),look:FemcBattle.marks['evoke-look']||0,pose:FemcBattle.marks['evoke-look-pose']||0,clip:FemcBattle.marks['evoke-clip']||0,shotM:FemcBattle.marks['evoke-shot']||0}})()"""
        eshots = []

        def summon(mid, tag):
            """The summon cut-in frozen at its close-up, once at 1440x900 and once at 390x844 (fresh each time, as a phone plays it)."""
            uid = p.eval("FemcBattle.B.party().find(u=>u.mid===%s).id" % json.dumps(mid))
            ev = json.dumps([{'t': 'use', 'src': uid, 'skill': 'dia', 'name': 'Dia', 'el': 'heal', 'summon': True, 'tgts': [uid]}])
            r = None
            for w, h in [(1440, 900), (390, 844)]:
                view(p, w, h); time.sleep(0.5)
                p.eval("window.__btFreezeAt='evoke#'+((FemcBattle.marks.evoke||0)+1);FemcBattle.playEvents(%s);true" % ev)
                p.wait("document.querySelector('.bt-evoke')&&FemcBattle.marks.evoke>0", 30); time.sleep(0.45)
                hold(p, '.bt-evoke', 1)
                x = p.eval(EVK)
                if tag: eshots.append(shot(p, f'evoker-{tag}-{w}x{h}'))
                if r is None: r = x
                else: r['phone'] = x
                go_on(); p.wait("!document.querySelector('.bt-evoke')", 20); time.sleep(0.4)
            view(p, 1440, 900)
            return r

        def fight(wear):
            setup(wear=wear)
            night(['solar', 'akihiko', 'yukari', 'junpei'], "FemcBattle.save.cutins='always';")
            enter(); bdrive(SOLAR_MENU, 120)
            p.eval("FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999;u.sp=999});FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})")
        # 1. Date Day with its own (test) close-up: the shot is the look's; no clip, no default shot.
        fight(['sk-date'])
        r = summon('solar', 'art')
        ok(r and 'look' in r['cls'] and 'skins/sk-date/solar-evoker.webp' in r['src'] and r['ok'] and not r['video'] and not r['dflt'] and r['look'] >= 1 and not r['clip'], f'look art close-up: {r}')
        clean(p, 'evoker art')
        # 2. The Summer Yukata (no close-up yet): its pose-1 frame, big, head and shoulders; never the default shot or clip.
        p.top(); fight(['sk-yukata', 'sk-akihiko-swim'])
        r = summon('solar', 'fallback')
        ok(r and 'lookpose' in r['cls'] and 'skins/sk-yukata/solar-pose-1.webp' in r['src'] and r['ok'] and not r['video'] and not r['dflt'] and r['pose'] >= 1 and not r['look'] and not r['clip'] and r['phone']['ok'] and 'lookpose' in r['phone']['cls'], f'fallback close-up: {r}')
        ok(r['r'][3] > r['sr'][3] * 1.6 and r['phone']['r'][3] > r['phone']['sr'][3] * 0.85, f'the pose frame is shown large (cropped to the upper body): {r["r"]} in {r["sr"]}; phone {r["phone"]}')
        a = summon('akihiko', 'fallback-akihiko')
        ok(a and 'lookpose' in a['cls'] and 'skins/sk-akihiko-swim/akihiko-pose-1.webp' in a['src'] and a['ok'] and not a['shotM'] and not a['dflt'], f'Akihiko in a look: his look\'s pose, not his default close-up: {a}')
        clean(p, 'evoker fallback')
        # 3. No look: Solar's default close-up exactly as before.
        p.top(); fight([])
        r = summon('solar', '')
        ok(r and r['cls'] == 'bt-evk-shot' and 'summon/solar-evoker.webp' in r['src'] and not r['look'] and not r['pose'], f'no look: the default close-up: {r}')
        clean(p, 'evoker none')
        p.top(); p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        cleanup(); shutil.rmtree(tmp, ignore_errors=True)
        ok(READY.read_text() == READY0 and not out.exists(), 'test close-up gone, ready.js restored')
        results['evoker'] = eshots

    # ── N: a look's own signature effect sheet (Nov 1 2026) ──
    if want('lookfx'):
        from PIL import Image, ImageDraw
        tmp = pathlib.Path(SHOTS, '_src'); tmp.mkdir(exist_ok=True)
        im = Image.new('RGB', (1536, 1024), (0, 0, 0)); d = ImageDraw.Draw(im)
        for i in range(6):  # a pink star burst that grows to its peak (frame 3) and fades
            cx, cy, r, k = (i % 3) * 512 + 256, (i // 3) * 512 + 256, [50, 110, 170, 195, 210, 220][i], [0.7, 1, 1, 0.75, 0.45, 0.2][i]
            col = tuple(int(c * k) for c in (255, 79, 158)); wht = tuple(int(255 * k) for _ in range(3))
            for j in range(8):
                import math
                a0 = j * math.pi / 4; d.line([(cx, cy), (cx + math.cos(a0) * r, cy + math.sin(a0) * r)], fill=col, width=14)
            d.ellipse([cx - r // 2, cy - r // 2, cx + r // 2, cy + r // 2], outline=col, width=10); d.ellipse([cx - r // 6, cy - r // 6, cx + r // 6, cy + r // 6], fill=wht)
        im.save(tmp / 'skin-sk-date-fx.png')
        out = ART / 'skins/sk-date/fx.webp'
        rd0 = json.loads(READY0.split('window.FEMC_ART_READY = ')[1].rstrip().rstrip(';'))
        real = sorted(k for k, v in rd0['skins'].items() if v.get('fx'))
        ok(len(real) >= 41 and all((ART / 'skins' / k / 'fx.webp').exists() for k in real), f"Kat's signature sheets (Nov 2) listed and on disk: {len(real)}")
        if out.exists(): SAVED[out] = out.read_bytes()  # Kat's real Date Day sheet (Nov 2): set aside, put back by cleanup()
        MADE.append(out)
        subprocess.run([sys.executable, str(pathlib.Path(REPO, 'tools/femc-fx.py')), 'skin', 'sk-date', str(tmp / 'skin-sk-date-fx.png')], check=True, capture_output=True)
        sh = Image.open(out).convert('RGBA')
        ok(sh.size == (768, 512) and sh.getpixel((2, 2))[3] == 0 and sh.getpixel((640, 128))[3] > 200, f'fx.webp: 3 x 2 of 256, black keyed out, the peak kept: {sh.size}')
        rd = json.loads(READY.read_text().split('window.FEMC_ART_READY = ')[1].rstrip().rstrip(';'))
        h = rd['skins']['sk-date'].get('fx')
        ok(isinstance(h, str) and len(h) == 8, f"scan lists its hash: {rd['skins']['sk-date']}")
        setup(wear=['sk-date'])
        p.eval("(()=>{FEMC_ART_READY.skins['sk-date'].fx=%s;FemcGame.setSettings({skinFx:true,perf:false,calm:false});return true})()" % json.dumps(h))  # as scan wrote it
        b = p.eval("[FemcCosmetics.battle().fx,FemcCosmetics.tryOnSpec('sk-date').fxSheet]")
        ok(list(b[0]) == ['solar'] and f'skins/sk-date/fx.webp?v={h}' in b[0]['solar'] and f'skins/sk-date/fx.webp?v={h}' in b[1], f'battle().fx / tryOnSpec().fxSheet: {b}')
        p.eval("FemcGame.S.battleSave.settings&&(FemcGame.S.battleSave.settings.entrance=true);FemcGame.save()")
        night(['solar', 'akihiko', 'yukari', 'junpei'], "window.__btFreezeAt='entrance';")
        enter(); frozen_at('entrance', 60); time.sleep(0.4)
        nshots = []
        for w, hh in [(1440, 900), (390, 844)]:
            view(p, w, hh); time.sleep(0.3); hold(p, '.bt-entrance', 0.45)
            e = p.eval("(()=>{const l=document.querySelector('.bt-entrance .bt-lfx.en');return l&&{bg:l.style.backgroundImage,op:+getComputedStyle(l).opacity}})()")
            ok(e and 'skins/sk-date/fx.webp' in e['bg'] and e['op'] > 0.5 and fits(p), f'entrance: the look\'s sheet plays over the card ({w}): {e}')
            nshots.append(shot(p, f'lookfx-entrance-{w}x{hh}'))
        view(p, 1440, 900); go_on()
        bdrive(SOLAR_MENU, 120)
        p.wait("FemcFX.hasArt('look-solar')", 10)
        # Fallback first: without the look's sheet the hit plays theme-hearts as before.
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999});window.__holdAllout=true;window.__lfx=FemcBattle.looks.fx;FemcBattle.looks.fx={};true")
        cast_fire()
        p.wait("(FemcBattle.marks['fx-theme-hearts']||0)>0 && (FemcBattle.marks['fx-art-theme-hearts']||0)>0", 20)
        ok(not p.eval("FemcBattle.marks['fx-look-solar']"), 'no look sheet: the theme sheet, not the look\'s')
        bdrive(SOLAR_MENU, 30)
        h0 = p.eval("FemcBattle.marks['fx-theme-hearts']")
        p.eval("FemcBattle.looks.fx=window.__lfx;window.__btFreezeAt='fx-look-solar';true")
        cast_fire()
        frozen_at('fx-look-solar', 30); time.sleep(0.25)
        r = p.eval("({look:FemcBattle.marks['fx-look-solar']||0,art:FemcBattle.marks['fx-art-look-solar']||0,hearts:FemcBattle.marks['fx-theme-hearts']||0,log:FemcFX.sheetLog.filter(l=>l.name==='look-solar').length})")
        ok(r['look'] >= 1 and r['art'] >= 1 and r['hearts'] == h0 and r['log'] >= 1, f'the skill sparkle: the look\'s sheet in place of theme-hearts: {r}')
        nshots.append(shot(p, 'lookfx-skill-1440x900'))
        go_on()
        bdrive("FemcBattle.ctl?.kind==='allout'", 30)
        p.eval("window.__btFreezeAt='allout-dust';window.__holdAllout=false;FemcBattle.B.foes().forEach(f=>{f.hp=Math.min(f.hp,50)});FemcBattle.ctl.pickValue('1')")
        frozen_at('allout-dust', 30); time.sleep(0.5)
        tb = p.eval("[...document.querySelectorAll('.bt-tburst')].map(t=>({cls:t.className,bg:t.style.backgroundImage}))")
        ok(len(tb) == 2 and all('art' in t['cls'] and 'skins/sk-date/fx.webp' in t['bg'] for t in tb) and p.eval("FemcBattle.marks['allout-theme-look']") == 1, f'All-Out burst: the look\'s sheet: {tb}')
        go_on()
        p.eval("window.__holdSolar=false;window.__stopResults=true")
        bdrive("FemcBattle.screen()==='results'", 60); time.sleep(0.3)
        for w, hh in [(1440, 900), (390, 844)]:
            view(p, w, hh); time.sleep(0.3); hold(p, '.bt-res-heroW', 0.4)
            wl = p.eval("(()=>{const l=document.querySelector('.bt-res-heroW .bt-lfx.win'),i=document.querySelector('.bt-res-hero');return l&&{bg:l.style.backgroundImage,op:+getComputedStyle(l).opacity,behind:!!(l.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING)}})()")
            ok(wl and 'skins/sk-date/fx.webp' in wl['bg'] and wl['op'] > 0.5 and wl['behind'] and fits(p), f'win screen: the sheet behind the victory pose ({w}): {wl}')
            nshots.append(shot(p, f'lookfx-win-{w}x{hh}'))
        view(p, 1440, 900)
        clean(p, 'lookfx fight')
        # Try it on: the burst is the look's sheet.
        p.top(); p.eval("document.querySelectorAll('.g-dh').forEach(x=>x.remove())")
        p.eval("FemcTryOn.play('sk-date')")
        p.wait("(FemcTryOn.state()?.fx||[]).includes('burst-look')", 12); p.eval("FemcTryOn.freeze()")
        bu = p.eval("(()=>{const b=document.querySelector('.g-to-burst');return b&&{cls:b.className,bg:b.style.backgroundImage}})()")
        ok(bu and 'look' in bu['cls'] and 'skins/sk-date/fx.webp' in bu['bg'], f'Try it on: the look\'s sheet as the burst: {bu}')
        p.eval("FemcTryOn.close()")
        # Settings: Outfit effects Off or Performance mode: no layer at the entrance (Off: no sheet anywhere).
        for st, tag in (("{skinFx:false}", 'off'), ("{skinFx:true,perf:true}", 'perf')):
            p.top(); setup(wear=['sk-date'])
            p.eval("(()=>{FEMC_ART_READY.skins['sk-date'].fx=%s;FemcGame.setSettings(%s);FemcGame.S.battleSave.settings&&(FemcGame.S.battleSave.settings.entrance=true);FemcGame.save();return true})()" % (json.dumps(h), st))
            night(['solar', 'akihiko', 'yukari', 'junpei'], "window.__btFreezeAt='entrance';" + ("FemcBattle.save.perf=true;" if tag == 'perf' else ''))
            enter(); frozen_at('entrance', 60)
            ok(not p.eval("document.querySelector('.bt-lfx')") and not p.eval("FemcBattle.marks['look-fx-en']"), f'{tag}: no layer')
            go_on(); clean(p, 'lookfx ' + tag)
        p.top(); p.eval("FemcGame.setSettings({skinFx:true,perf:false})")
        kat = SAVED.get(out)
        cleanup(); shutil.rmtree(tmp, ignore_errors=True)
        ok(READY.read_text() == READY0 and (out.read_bytes() == kat if kat else not out.exists()), 'test sheet gone (Kat\'s put back), ready.js restored')
        results['lookfx'] = nshots

    # ── HD poses on the win screen (Nov 3 2026, tools/femc-hd-poses.py) ──
    if want('winhd'):
        hshots = []
        def solar_wins():
            bdrive(SOLAR_MENU, 120)
            p.eval("window.__stopResults=true;FemcBattle.B.foes().forEach(f=>{f.hp=1});FemcBattle.ctl.pickValue('attack')"); time.sleep(0.15)
            p.eval("(()=>{const c=FemcBattle.ctl,f=FemcBattle.B.foes().find(f=>!f.dead);if(c&&c.pickValue&&f)c.pickValue(f.id)})()")
            p.eval("window.__holdSolar=false")
            bdrive("FemcBattle.screen()==='results'", 60); time.sleep(0.8)
            return p.eval("(()=>{const h=document.querySelector('.bt-res-hero');return h&&{src:h.getAttribute('src'),ok:h.complete&&h.naturalWidth>0,h:h.naturalHeight,mid:h.dataset.mid,hd:h.classList.contains('hd')}})()")
        for wear, want_src, tag in ((['sk-cp-afterhours'], 'skins/sk-cp-afterhours/hd/peace.webp', 'afterhours'), ([], 'profile/solar-poses/peace.webp', 'own')):
            p.top(); setup(wear=wear)
            ok(not wear or p.eval("(FemcCosmetics.battle().hd.solar||{}).have.includes('peace')"), 'battle() hands the HD set')
            night(['solar', 'akihiko', 'yukari', 'junpei'], "FemcBattle.save.settings.entrance=false;window.__btGroup=['maya'];")
            enter()
            hero = solar_wins()
            ok(hero and want_src in hero['src'] and hero['ok'] and hero['h'] >= 1500 and hero['hd'] and p.eval("FemcBattle.marks['results-hero-hd']>0"), f'win screen ({tag}): the HD peace sign: {hero}')
            for w, hh in [(1440, 900), (390, 844)]:
                view(p, w, hh); time.sleep(0.9); ok(fits(p), f'win {tag} {w}: no sideways scroll'); hshots.append(shot(p, f'winhd-{tag}-{w}x{hh}'))
            view(p, 1440, 900)
            clean(p, f'winhd {tag}')
        # A set without peace falls back to the fist pump (cheer), then jump; a look without a set keeps pose 5.
        p.top(); setup(wear=['sk-cp-afterhours'])
        p.eval("(()=>{const R=FEMC_ART_READY.skins['sk-cp-afterhours'];R.hd=R.hd.filter(k=>k!=='peace');return true})()")
        night(['solar', 'akihiko', 'yukari', 'junpei'], "FemcBattle.save.settings.entrance=false;window.__btGroup=['maya'];"); enter()
        hero = solar_wins()
        ok(hero and 'sk-cp-afterhours/hd/cheer.webp' in hero['src'] and hero['ok'], f'no peace sign in the set: the fist pump: {hero}')
        p.top(); setup(wear=['sk-date'])
        night(['solar', 'akihiko', 'yukari', 'junpei'], "FemcBattle.save.settings.entrance=false;window.__btGroup=['maya'];"); enter()
        hero = solar_wins()
        ok(hero and 'skins/sk-date/solar-pose-5.webp' in hero['src'] and not hero['hd'], f'a look without an HD set: its pose 5 as before: {hero}')
        clean(p, 'winhd fallbacks')
        results['winhd'] = hshots

    print(json.dumps(results, indent=1))
    print('femc_skins_battle: all checks passed')
finally:
    p.close()
    cleanup()
