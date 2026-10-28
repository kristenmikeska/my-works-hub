"""Isolated browser checks for Shadow pose playback, real battle action hooks for the memory Shadows, and the full-moon
bosses' pose sheets in their real fights (--ops; 'finale' is the Last Train): each boss's attack (wind-up, attack),
cast (wind-up, cast), hurt, down and defeat frames through the battle's own event playback, back to idle after each,
and one canvas per boss. --ops '' skips the bosses; --enemies '' skips the memory fights; --shots picks the boss fights
to screenshot at desktop and phone size.
The finale's Last Train is also checked the way the game plays it (--finale-path): 'story' plays the 3/6 story event in
the life sim, phase 1 (Last Call) in its own battle frame and then phase 2 (No Stops) in the next; 'full' runs the
whole finale in one frame. Each must show the train's own layout (.trainyard: the train big in the middle, never in a
corner), open every battle frame at a fresh URL (so an old femc-battle.html can't come from the cache) with the
battle.js version femc-battle.html names, and screenshot phase 2 at 1000x486, 375x812 and 1440x900; Kat's three lantern
windows (art/shadows/memory-lantern-*.webp) load on screen at each size, the route's own open and the other two behind glass.
  python3 tests/femc_shadow_poses.py --only-finale-path        just the finale paths"""
import sys,json,pathlib,hashlib,base64,tempfile,argparse,time
from femc_browser import Page
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=pathlib.Path(tempfile.mkdtemp(prefix='femc-shadow-poses-'))
data=json.loads((ROOT/'tools/femc-new-adds.json').read_text())
# Integrated sources moved from New Adds/ to Added to Game/ (same names; see the manifest's sourceRootNote): check either.
# Some newer entries name the folder themselves ('Added to Game/…'), relative to Femc Mode Images/.
roots=[pathlib.Path(data['sourceRoot']),pathlib.Path(data['sourceRoot']).parent/'Added to Game',pathlib.Path(data['sourceRoot']).parent]
for entry in data['entries']:
 # Only sources in the game must still exist; pending, prepared, skipped, missing or removed ones (e.g. a source Kat deleted) are skipped.
 if entry.get('status')!='integrated':continue
 src=next((r/entry['source'] for r in roots if (r/entry['source']).exists()),None)
 assert src, 'source missing: '+entry['source']
 # A few newer entries (the Echoes art) record no hash; check the ones that do.
 if 'sha256' in entry: assert hashlib.sha256(src.read_bytes()).hexdigest()==entry['sha256'],entry['source']
source=(ROOT/'assets/femc/battle/battle.js').read_text()
helpers=source[source.index('  const shadowFrames = new Map();'):source.index('  function addEnemy(u)')]
args=argparse.ArgumentParser();args.add_argument("--art",default="");args.add_argument("--enemies",default="ballot_box,flash_shadow,tide_shadow,fox_shadow");args.add_argument("--ops",default="priestess,empress,hierophant,lovers,chariot,hermit,fortune,hanged,finale");args.add_argument("--shots",default="empress,finale");args.add_argument("--finale-path",default="story,full");args.add_argument("--only-finale-path",action="store_true");options=args.parse_args()
if options.only_finale_path:options.enemies=options.ops=''
BATTLE_JS=__import__('re').search(r'battle/battle\.js\?v=(\d+)',(ROOT/'femc-battle.html').read_text()).group(1);art_filter=[x for x in options.art.split(",") if x]
p=Page()
try:
 p.goto('femc-game.html')
 # Load the normal battle page for its art metadata and styling.
 p.ws.call('Page.navigate',{'url':f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html'})
 p.wait('!!window.FemcBattle && !!window.FEMC_SHADOW_ART')
 factory='new Function("FX","perf","sleep","sart","absUrl",'+json.dumps(helpers+';return {shadowFrames,setShadowFrame,restShadow,animateShadow};')+')'
 result=[] if options.only_finale_path else p.eval('''(async()=>{let reduced=false;const wait=ms=>new Promise(r=>setTimeout(r,ms));const api=('''+factory+''')({reduced:()=>reduced},()=>false,ms=>wait(ms/10),s=>'assets/femc/battle/art/shadows/'+s+'.webp',s=>new URL(s,location.href).href);const results=[];
 for(const [slug,art] of Object.entries(FEMC_SHADOW_ART).filter(([k,a])=>a.poses&&('''+json.dumps(art_filter)+'''.length===0||'''+json.dumps(art_filter)+'''.includes(k)))){
  await Promise.all(art.poses.frames.map(s=>new Promise((resolve,reject)=>{const i=new Image();api.shadowFrames.set(s,i);i.onload=resolve;i.onerror=()=>reject(Error(s));i.src='assets/femc/battle/art/shadows/'+s+'.webp'})));
  const el=document.createElement('div');el.style.cssText='position:fixed;width:300px;left:0;top:0';el.innerHTML='<div class="sh-pic"><img width="640" height="640"><i class="flash"></i></div>';el._shadowPoses=art.poses;document.body.append(el);api.restShadow(el);
  const rect=el.getBoundingClientRect();let seen=[];const observer=new MutationObserver(()=>seen.push(+el.dataset.pose));observer.observe(el.querySelector('img'),{attributes:true,attributeFilter:['src']});
  for(const state of ['attack','cast','hurt']){seen=[];await api.animateShadow(el,state,180);await wait(0);const seq=art.poses.states[state]||[];if(seq.some(n=>!seen.includes(n)))throw Error(slug+' '+state+' missed frame '+JSON.stringify(seen));if(el.dataset.pose!=='0')throw Error('Did not return to idle');const b=el.getBoundingClientRect();if(b.width!==rect.width||b.height!==rect.height)throw Error('Layout jump')}
  // A hit supersedes a longer attack without its old timer restoring idle over down.
  const attack=api.animateShadow(el,'cast',500);await wait(5);el.classList.add('down');await api.animateShadow(el,'hurt',80);await attack;api.restShadow(el);if(+el.dataset.pose!==(art.poses.states.down||[0])[0])throw Error('Stale action overrode down');
  el.classList.remove('down');reduced=true;seen=[];await api.animateShadow(el,'cast',100);await wait(0);if(seen.filter(n=>n!==0).length!==1)throw Error('Reduced motion cycled frames');reduced=false;
  // Missing preloads retain the visible frame instead of flashing a broken image.
  const src=el.querySelector('img').src;const cached=api.shadowFrames.get(art.poses.frames[1]);api.shadowFrames.delete(art.poses.frames[1]);api.setShadowFrame(el,1);if(el.querySelector('img').src!==src)throw Error('Unloaded frame replaced image');api.shadowFrames.set(art.poses.frames[1],cached);
  observer.disconnect();el.remove();results.push({slug,frames:art.poses.frames.length,states:Object.keys(art.poses.states)});
 }return results})()''')
 actual=[]
 scripts={'ballot_box':'memory-hoax','flash_shadow':'memory-runners','tide_shadow':'memory-strangers','fox_shadow':'memory-haechan','party_shadow':'memory-runners-2','veil_poster':'memory-jungwon','group_chat':'memory-hoax','fishmonger':'memory-strangers'}
 defeats=[]
 for kind in [k for k in options.enemies.split(',') if k]:
  script=scripts[kind]
  p.goto('femc-game.html?speed=10&seed=1');p.eval('FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf("12/5");FemcGame.makeHandoff("scripted",{script:'+json.dumps(script)+',segment:2,forced:true,party:["solar"]})')
  p.battle()  # the fight runs inside femc-game.html (the Dark Hour frame)
  p.wait("!!document.querySelector('[data-prep=begin]')");p.eval("document.querySelector('[data-prep=begin]').click()")
  p.wait("!!window.FemcBattle && !!FemcBattle.B && !!document.querySelector('.bt-enemy img')")
  # The Shadow under test (a memory floor can field more than one); Solar is made sturdy so a two-Shadow floor can't end the run.
  p.eval('''window.poseFoe=FemcBattle.B.foes().find(f=>f.kind==='''+json.dumps(kind)+''');window.poseSeen=[];window.poseEnemy=document.querySelector('.bt-enemy[data-id="'+poseFoe.id+'"]');const s=FemcBattle.B.party()[0];s.maxHp=s.hp=99999;new MutationObserver(()=>poseSeen.push(+poseEnemy.dataset.pose)).observe(poseEnemy.querySelector('img'),{attributes:true,attributeFilter:['src']});''')
  for skill,state in [('bash','attack'),('e_agi','cast')]:
   p.eval('poseFoe.skills=['+json.dumps(skill)+'];poseSeen=[]')
   for i in range(200):
    ok=p.eval('''(()=>{const expected=poseEnemy._shadowPoses.states['''+json.dumps(state)+'''];if(expected.every(n=>poseSeen.includes(n))&&poseEnemy.dataset.pose==='0')return true;const c=FemcBattle.ctl;if(c?.kind==='menu'&&c.items?.some(i=>i.v==='guard'))c.pickValue('guard');return false})()''')
    if ok:break
    import time;time.sleep(.03)
   else:raise AssertionError((kind,state,p.eval('poseSeen')))
  if p.eval('!!poseEnemy._shadowPoses.states.defeat'):
   p.wait("FemcBattle.ctl?.kind==='menu' && FemcBattle.ctl.items?.some(i=>i.v==='attack')")
   p.eval("window.defeatFrame=null;window.__hoStay=true;new MutationObserver(()=>{if(poseEnemy.classList.contains('dead'))defeatFrame=+poseEnemy.dataset.pose}).observe(poseEnemy,{attributes:true,attributeFilter:['class']});poseFoe.hp=1")
   for i in range(200):
    if p.eval("defeatFrame!==null"):break
    p.eval("(()=>{const c=FemcBattle.ctl;if(c?.kind==='menu'&&c.items?.some(i=>i.v==='attack'))c.pickValue('attack');else if(c?.kind==='menu')poseEnemy.click();else if(c?.kind==='allout')c.pickValue('0')})()")
    import time;time.sleep(.03)
   else:raise AssertionError('Defeat not shown: '+kind)
   assert p.eval("defeatFrame===poseEnemy._shadowPoses.states.defeat[0]"),kind
   defeats.append(kind)
  actual.append(kind)
  if kind==options.enemies.split(',')[0]:
   p.wait("FemcBattle.ctl?.kind==='menu'");p.eval('FemcBattle.freeze()')
   for name,w,h in [('desktop',1280,800),('phone',390,844)]:
    p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='phone'});p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))');shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
 bosses={}
 def run(kind,evs,done):
  p.eval('poseSeen=[];window.__ev=FemcBattle.playEvents('+evs+').then(()=>window.__ev=null)')
  for i in range(400):
   if p.eval('window.__ev===null && ('+done+')'):return p.eval('poseSeen')
   time.sleep(.03)
  raise AssertionError((kind,evs,p.eval('poseSeen')))
 for op in [o for o in options.ops.split(',') if o]:
  p.goto('femc-game.html?speed=10&seed=1')
  if op=='finale':p.eval('FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf("3/6");FemcGame.makeHandoff("scripted",{script:"finale",segment:2,forced:true,party:["solar"]})')
  else:p.eval('FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf("12/5");FemcGame.makeHandoff("operation",{op:'+json.dumps(op)+',forced:true,party:["solar"]})')
  p.battle();p.eval('window.__hoStay=true')
  for i in range(600):
   if p.eval("!!window.FemcBattle?.B && FemcBattle.screen()==='battle' && FemcBattle.ctl?.kind==='menu'"):break
   p.eval("(()=>{const b=document.querySelector('.bt-clock-in button')||document.querySelector('[data-prep=begin]');if(b)b.click();else if(FemcBattle.ctl&&FemcBattle.ctl.kind!=='menu'&&FemcBattle.ctl.pick)FemcBattle.ctl.pick()})()")
   time.sleep(.05)
  else:raise AssertionError('no battle: '+op)
  p.eval('FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999})')
  # One run per kind: the Hanged Man's three effigies share one sheet (batch 56), and a run ends with its foe defeated.
  kinds=p.eval("[...new Set(FemcBattle.B.foes().filter(f=>{const el=document.querySelector('.bt-enemy[data-id=\"'+f.id+'\"]');return el&&el._shadowPoses}).map(f=>f.kind))]")
  assert kinds,('no posed boss',op)
  if op in options.shots.split(','):
   p.eval('FemcBattle.freeze()')
   for name,w,h in [('desktop',1280,800),('phone',390,844)]:
    p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='phone'});p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,400)))');shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(op+'-'+name+'.png')).write_bytes(base64.b64decode(shot['data']))
   p.ws.call('Emulation.clearDeviceMetricsOverride',{});p.eval('FemcBattle.unfreeze()')
  for kind in kinds:
   p.eval("window.poseFoe=FemcBattle.B.foes().find(f=>f.kind==="+json.dumps(kind)+");window.poseEnemy=document.querySelector('.bt-enemy[data-id=\"'+poseFoe.id+'\"]');window.poseSeen=[];new MutationObserver(()=>poseSeen.push(+poseEnemy.dataset.pose)).observe(poseEnemy.querySelector('img'),{attributes:true,attributeFilter:['src']})")
   r={};party='FemcBattle.B.party()[0].id'
   r['attack']=run(kind,'[{t:"use",src:poseFoe.id,skill:"bash",name:"Bash",el:"strike",tgts:[]}]',"poseEnemy.dataset.pose==='0'")
   r['cast']=run(kind,'[{t:"use",src:poseFoe.id,skill:"e_agi",name:"Agi",el:"fire",tgts:[]}]',"poseEnemy.dataset.pose==='0'")
   r['hurt']=run(kind,'[{t:"hit",src:'+party+',tgt:poseFoe.id,amount:1,hp:poseFoe.hp,aff:"normal",el:"strike"}]',"poseEnemy.dataset.pose==='0'")
   st=p.eval('poseEnemy._shadowPoses.states')
   for k in ('attack','cast','hurt'):assert all(n in r[k] for n in st[k]) and r[k][-1]==0,(kind,k,r[k],st[k])
   p.eval('poseFoe.down=true');r['down']=run(kind,'[{t:"hit",src:'+party+',tgt:poseFoe.id,amount:1,hp:poseFoe.hp,aff:"weak",el:"strike",downed:true}]',"poseEnemy.classList.contains('down')")
   assert p.eval('poseEnemy.dataset.pose')==str(st['down'][0]),(kind,'down',p.eval('poseEnemy.dataset.pose'))
   # Size: frames share one canvas (img width/height) and the element width keeps the idle figure at the boss's own height.
   chk=p.eval("(()=>{const im=poseEnemy.querySelector('img'),a=FEMC_SHADOW_ART[im.src.split('/').pop().split('-pose-')[0]];return {w:poseEnemy.style.getPropertyValue('--w'),aw:a.w,ah:a.h,scale:a.poses.scale,iw:im.getAttribute('width'),ih:im.getAttribute('height')}})()")
   assert chk['iw']==str(chk['aw']) and chk['ih']==str(chk['ah']),chk
   r['size']=chk
   # Defeat: the dissolve keeps the defeat frame.
   p.eval('poseFoe.hp=0;poseFoe.dead=true');run(kind,'[{t:"hit",src:'+party+',tgt:poseFoe.id,amount:1,hp:0,aff:"normal",el:"strike",killed:true}]',"poseEnemy.classList.contains('dead')")
   assert p.eval('poseEnemy.dataset.pose')==str(st['defeat'][0]),(kind,'defeat')
   bosses[kind]=r
  errors=p.console();assert not errors,(op,errors)
 # ── The finale as the game plays it: phase 1, then the Last Train (see the docstring) ──
 FIN=r"""(()=>{const G=FemcGame,copy=x=>JSON.parse(JSON.stringify(x));G.setSetting('text','instant');G.setSetting('music',0);G.setSetting('sfx',false);G.setSetting('auto','off');G.setSetting('dateCard',false);
  G.newGame();const S=G.S,d=G.dayOf('3/6');S.phase='play';S.started=true;S.day=d;S.slot='evening';
  S.events=G.D.events.filter(e=>G.dayOf(e.date)<d&&(!e.flag||e.flag==='year-goes-on')).map(e=>e.id).concat('lw-pre-last-train');
  Object.assign(S.flags,{armband:true,'joined-junpei':true,'year-goes-on':true,'route-R':true});S.unlocked.tartarus=true;S.tartarus.bosses=G.D.cal.ops.filter(o=>G.dayOf(o.date)<d).map(o=>o.op);
  S.joined=['solar','akihiko','yukari','junpei','mitsuru','aigis'];['wren','elizabeth'].forEach(id=>{S.links[id]={rank:10,xp:0,seen:[],rankDay:{},push:0,reversed:false}});
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:9999};S.lateNights={seen:[],lastDay:9999};S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:9999,later:[]};
  if(FULL)G.makeHandoff('scripted',{script:'finale',segment:0,forced:true,party:['solar','akihiko','yukari','junpei']});
  G.save();document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()"""
 STEP=r"""(()=>{const c=document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)');if(c){c.click();return}
  const o=document.querySelector('.gs-title, .gs-summon.ready, .g-card, .g-actcard, .g-datecard');if(o){o.click();return}
  const ov=[...document.querySelectorAll('.g-overlay:not(.out)')].pop();if(ov){const b=ov.querySelector('[data-close], .g-btn.pink, button');if(b){b.click();return}}
  const g=document.querySelector('.gs:not(.out)');if(g){g.click();return}const n=document.querySelector('#g-app [data-next]:not(:disabled)');if(n)n.click()})()"""
 # Phase 1 holds (Guard) until its rounds run out; everything else (prep, clock-in, cards) goes on.
 FIGHT=r"""(()=>{const b=document.querySelector('.bt-clock-in button')||document.querySelector('[data-prep=begin]');if(b){b.click();return}
  const c=FemcBattle.ctl;if(!c)return;if(c.kind==='menu'&&c.items?.some(i=>i.v==='guard'))c.pickValue('guard');else if(c.pick)c.pick()})()"""
 LAYOUT=r"""(()=>{const f=document.querySelector('.bt-field'),t=document.querySelector('.bt-enemy.train'),fr=f.getBoundingClientRect(),r=t&&t.getBoundingClientRect();
  return {field:f.className,train:!!t,pos:t&&getComputedStyle(t).position,cx:r&&(r.left+r.width/2-fr.left)/fr.width,left:r&&(r.left-fr.left)/fr.width,top:r&&(r.top-fr.top)/fr.height,w:r&&r.width/fr.width,
   lanterns:[...document.querySelectorAll('.bt-enemy.lantern')].map(l=>getComputedStyle(l).position),js:[...document.scripts].map(s=>s.src).filter(s=>/battle\/battle\.js/.test(s)),url:location.href}})()"""
 LANTERNS=r"""[...document.querySelectorAll('.bt-enemy.lantern')].map(l=>{const im=l.querySelector('.sh-pic img'),r=(im||l).getBoundingClientRect(),g=im&&getComputedStyle(l.querySelector('.sh-pic'),'::before');
  return {world:[...l.classList].find(c=>/^ln-/.test(c))?.slice(3),art:!!im&&/memory-lantern-/.test(im.src),loaded:!!im&&im.complete&&im.naturalWidth>0,glass:!!g&&g.content!=='none'&&l.classList.contains('unreachable'),
   inView:r.width>8&&r.left>=-2&&r.right<=innerWidth+2&&r.top>=-2&&r.bottom<=innerHeight+2}})"""
 finale={}
 for path in [x for x in options.finale_path.split(',') if x]:
  p.top();p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1440,'height':900,'deviceScaleFactor':1,'mobile':False})
  p.goto('femc-game.html?speed=10&seed=1');p.eval(FIN.replace('FULL',json.dumps(path=='full')))
  frames=[];layout=None;t0=time.time()
  while layout is None:
   assert time.time()-t0<300,('finale path timed out',path,frames)
   p.top()
   if not p.eval("!!document.querySelector('.g-dh.live .g-dh-iframe')"):p.eval(STEP);time.sleep(.03);continue
   try:p.frame(10)
   except Exception:continue
   src=p.eval('location.href');frames.append(src)
   while True:
    try:
     st=p.eval("(()=>{const B=FemcBattle.B;return {foes:B&&FemcBattle.screen()==='battle'?B.foes().map(f=>f.kind):[],menu:FemcBattle.ctl?.kind==='menu'}})()")
     if 'last_train' in st['foes'] and st['menu']:layout=p.eval(LAYOUT);break
     p.eval(FIGHT)
    except RuntimeError:break  # the frame closed (phase 1 is over); back to the story
    time.sleep(.04)
  # Each frame opened at its own URL; phase 2 came after phase 1 (story) or in the same frame (full).
  assert all('fresh=' in u for u in frames) and len(set(frames))==len(frames),frames
  assert len(frames)==(2 if path=='story' else 1),(path,frames)
  assert layout['js']==[layout['js'][0]] and layout['js'][0].endswith('battle.js?v='+BATTLE_JS),(layout['js'],BATTLE_JS)
  # The train's own layout: on the field, big, its middle right of center (the fighter has the left), not in a corner.
  shots={}
  p.eval('FemcBattle.freeze()')
  for w,h in [(1000,486),(375,812),(1440,900)]:
   p.top();p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':w<600});p.frame(10)
   p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,400)))');L=p.eval(LAYOUT)
   assert 'trainyard' in L['field'] and L['train'] and L['pos']=='absolute' and all(x=='absolute' for x in L['lanterns']) and len(L['lanterns'])==3,(path,w,L)
   if w>=600:assert .45<L['cx']<.75 and L['left']>.2 and L['w']>.25,(path,w,'train out of place',L)
   # Kat's lantern art (art/shadows/memory-lantern-<world>.webp): loaded, on screen; the locked route's (Runners here) is open, the others behind glass.
   LA=p.eval(LANTERNS)
   assert [x['world'] for x in LA]==['R','S','H'] and all(x['loaded'] and x['art'] and x['inView'] for x in LA),(path,w,LA)
   assert [x['glass'] for x in LA]==[False,True,True],(path,w,LA)
   name=f'finale-{path}-phase2-{w}x{h}.png';(OUT/name).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot',{'format':'png'})['data']));shots[f'{w}x{h}']={'cx':round(L['cx'],3),'left':round(L['left'],3),'w':round(L['w'],3),'shot':name}
  p.eval('FemcBattle.unfreeze()');p.top();p.ws.call('Emulation.clearDeviceMetricsOverride',{})
  finale[path]={'frames':len(frames),'battleJs':BATTLE_JS,**shots}
  errors=p.console();assert not errors,(path,errors)
 errors=p.console();assert not errors,errors
 summary={'finalePaths':finale,'bossPoses':{k:{s:v[s] for s in ('attack','cast','hurt','down')} for k,v in bosses.items()},'posePlayback':result,'actualBattleAttackAndCast':actual,'actualDefeatTransitions':defeats,'sourcesUnchanged':sum(e.get('status')=='integrated' for e in data['entries']),'browserErrors':errors,'screenshots':str(OUT)}
 (OUT/'results.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps(summary))
finally:p.close()
