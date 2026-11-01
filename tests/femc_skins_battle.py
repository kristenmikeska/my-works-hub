"""Skins in battle, part 8 (FEMC-SKINS-BATTLE-DESIGN H-L, 2026-11-01): the One More eye strip, the battle-start entrance
card, a couple set's Showtime, the theme frame on the HUD card and the theme burst in the All-Out cloud.
Headless Chrome, isolated profile, its own localhost server; no player saves.

Run: python3 tests/femc_skins_battle.py [--only data,tools,fallback,art,settings] [--screenshots DIR]

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
            theme:b.theme,name:b.name,couple:b.couple,onemore:b.onemore,entrance:b.entrance,showtime:b.showtime,frames:b.frames}})()""")
        ok(len(r['themes']) == 13 and not r['missing'] and not r['dup'], f'13 themes, every look real, none twice: {r["missing"]} {r["dup"]}')
        ok(r['date'] == 'hearts' and r['sun'] == 'sunmoon' and r['moon'] == 'sunmoon' and r['plain'] == [None] * 4, f'part 4 picks: {r}')
        ok(r['theme'] == {'solar': 'hearts'} and r['name'] == {'solar': 'Date Day'} and r['couple'] == {} and not r['onemore'] and not r['entrance']
           and not r['showtime'] and not r['frames'], f'battle() with no part-8 art: {r}')
        clean(p, 'data')
        results['data'] = f"13 themes over {r['themed']} looks; battle() theme/name, no art paths"

    # ── The tool commands and scan ──
    if want('tools'):
        from PIL import Image, ImageDraw
        tmp = pathlib.Path(SHOTS, '_src'); tmp.mkdir(exist_ok=True)
        wide = Image.new('RGB', (1536, 300), (255, 79, 158)); ImageDraw.Draw(wide).rectangle([600, 100, 900, 200], fill=(20, 7, 15)); wide.save(tmp / 'om.png')
        Image.new('RGB', (1536, 1024), (20, 7, 15)).save(tmp / 'card.png')
        fr = Image.new('RGB', (1500, 600), (0, 255, 0)); d = ImageDraw.Draw(fr); d.rectangle([20, 20, 1480, 580], outline=(255, 79, 158), width=10)
        d.ellipse([10, 10, 90, 90], fill=(255, 140, 192)); fr.save(tmp / 'frame.png')
        W = [sys.executable, str(pathlib.Path(REPO, 'tools/femc-wardrobe.py'))]
        outs = {'onemore': ART / 'skins/sk-date/solar-onemore.webp', 'own': ART / 'onemore/solar.webp', 'entrance': ART / 'skins/sk-date/solar-entrance.webp',
                'showtime': ART / 'couples/cp-sunmoon-showtime.webp', 'frame': ART / 'frames/hearts.webp'}
        for f in outs.values(): ok(not f.exists(), f'{f} should not exist before the test'); MADE.append(f)
        subprocess.run(W + ['onemore', str(tmp / 'om.png'), 'sk-date'], check=True, capture_output=True)
        subprocess.run(W + ['onemore', str(tmp / 'om.png'), 'own', 'solar'], check=True, capture_output=True)
        subprocess.run(W + ['entrance', str(tmp / 'card.png'), 'sk-date'], check=True, capture_output=True)
        subprocess.run(W + ['showtime', str(tmp / 'card.png'), 'sunmoon'], check=True, capture_output=True)
        subprocess.run(W + ['frame', str(tmp / 'frame.png'), 'hearts'], check=True, capture_output=True)
        sizes = {k: Image.open(f).size for k, f in outs.items()}
        ok(sizes == {'onemore': (1800, 300), 'own': (1800, 300), 'entrance': (1600, 900), 'showtime': (1600, 900), 'frame': (1000, 400)}, f'sizes: {sizes}')
        fa = Image.open(outs['frame']).convert('RGBA')
        ok(fa.getpixel((500, 200))[3] == 0 and fa.getpixel((16, 200))[3] > 200 and fa.getpixel((5, 200))[3] == 0, 'the frame\'s green keyed out, its border kept')
        rj = READY.read_text()
        data = json.loads(rj.split('window.FEMC_ART_READY = ')[1].rstrip().rstrip(';'))
        ok(data['skins']['sk-date'].get('onemore') == ['solar'] and data['skins']['sk-date'].get('entrance') == ['solar'] and data['own'] == {'onemore': ['solar'], 'entrance': []}
           and data['couples'] == ['cp-sunmoon'] and data['frames'] == ['hearts'], f'scan lists them: {data["own"]}, {data["couples"]}, {data["frames"]}')
        cleanup()
        ok(READY.read_text() == READY0 and not any(f.exists() for f in outs.values()), 'test files gone, ready.js restored')
        shutil.rmtree(tmp, ignore_errors=True)
        results['tools'] = sizes

    # ── A real night with no part-8 art: every built-in version, screenshots mid-play ──
    def fight_pieces(tag, art=False):
        """One Tartarus fight wearing Date Day: entrance card, frame, One More strip, All-Out burst; then a couple bond."""
        got = {}
        setup(wear=['sk-date'])
        if art:  # test art in each path, listed in the page's ready.js (as scan would)
            p.eval("(()=>{const A=FEMC_ART_READY;A.skins['sk-date'].onemore=['solar'];A.skins['sk-date'].entrance=['solar'];A.frames=['hearts'];A.couples=['cp-sunmoon'];return true})()")
        p.eval("FemcGame.S.battleSave.settings&&(FemcGame.S.battleSave.settings.entrance=true);FemcGame.save()")
        night(['solar', 'akihiko', 'yukari', 'junpei'], "window.__btFreezeAt='entrance';" + ("FEMC_FX_ART['theme-hearts']={blend:'lighter',cell:256,frames:6,peak:2,v:'test'};FemcFX.preloadArt();" if art else ''))
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
        for w, h in [(1440, 900), (390, 844)]:
            view(p, w, h); time.sleep(0.3); hold(p, '.bt-onemore', 0.45)
            ok(fits(p), f'strip {w}: no sideways scroll'); got[f'onemore-{w}'] = shot(p, f'{tag}-onemore-{w}x{h}')
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
        view(p, 1440, 900); go_on()
        p.eval("window.__holdSolar=false;window.__stopResults=true")
        bdrive("FemcBattle.screen()==='results'", 60)
        clean(p, f'{tag} fight')
        # Couple Showtime: Sun Hoodie + Moon Hoodie, a bond of Solar and Haechan through the real presentation.
        p.top()
        setup(wear=['sk-cp-sunmoon', 'sk-haechan-cp-sunmoon'], day='12/12')
        if art: p.eval("(()=>{FEMC_ART_READY.couples=['cp-sunmoon'];return true})()")
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
        test_art = {ART / 'skins/sk-date/solar-onemore.webp': (1800, 300), ART / 'skins/sk-date/solar-entrance.webp': (1600, 900),
                    ART / 'couples/cp-sunmoon-showtime.webp': (1600, 900), ART / 'frames/hearts.webp': (1000, 400),
                    pathlib.Path(REPO, 'assets/femc/battle/art/fx/theme-hearts.webp'): (768, 512)}
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
        ok(p.eval("!document.querySelector('.bt-tframe') && (FemcBattle.marks['entrance-code']||0)===1"), 'Outfit effects Off: no frame; the entrance card plays')
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})")
        cast_fire()
        p.wait("(FemcBattle.marks['onemore']||0)>0", 30)
        ok(p.eval("(FemcBattle.marks['onemore-strip-code']||0)===1"), 'the eye strip is not an outfit effect: it still plays')
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
        an = p.eval("(()=>{const e=document.querySelector('.bt-entrance');return e&&{reduced:e.classList.contains('reduced'),pose:getComputedStyle(e.querySelector('.en-pose')).animationName}})()")
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

    print(json.dumps(results, indent=1))
    print('femc_skins_battle: all checks passed')
finally:
    p.close()
    cleanup()
