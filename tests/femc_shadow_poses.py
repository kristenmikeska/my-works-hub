"""Isolated browser checks for Shadow pose playback and four real battle action hooks."""
import sys,json,pathlib,hashlib,base64,tempfile,argparse
from femc_browser import Page
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=pathlib.Path(tempfile.mkdtemp(prefix='femc-shadow-poses-'))
data=json.loads((ROOT/'tools/femc-new-adds.json').read_text())
# Integrated sources moved from New Adds/ to Added to Game/ (same names; see the manifest's sourceRootNote): check either.
roots=[pathlib.Path(data['sourceRoot']),pathlib.Path(data['sourceRoot']).parent/'Added to Game']
for entry in data['entries']:
 # Only sources in the game must still exist; pending, prepared, skipped, missing or removed ones (e.g. a source Kat deleted) are skipped.
 if entry.get('status')!='integrated':continue
 src=next((r/entry['source'] for r in roots if (r/entry['source']).exists()),None)
 assert src, 'source missing: '+entry['source']
 assert hashlib.sha256(src.read_bytes()).hexdigest()==entry['sha256'],entry['source']
source=(ROOT/'assets/femc/battle/battle.js').read_text()
helpers=source[source.index('  const shadowFrames = new Map();'):source.index('  function addEnemy(u)')]
args=argparse.ArgumentParser();args.add_argument("--art",default="");args.add_argument("--enemies",default="ballot_box,flash_shadow,tide_shadow,fox_shadow");options=args.parse_args();art_filter=[x for x in options.art.split(",") if x]
p=Page()
try:
 p.goto('femc-game.html')
 # Load the normal battle page for its art metadata and styling.
 p.ws.call('Page.navigate',{'url':f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html'})
 p.wait('!!window.FemcBattle && !!window.FEMC_SHADOW_ART')
 factory='new Function("FX","perf","sleep","sart","absUrl",'+json.dumps(helpers+';return {shadowFrames,setShadowFrame,restShadow,animateShadow};')+')'
 result=p.eval('''(async()=>{let reduced=false;const wait=ms=>new Promise(r=>setTimeout(r,ms));const api=('''+factory+''')({reduced:()=>reduced},()=>false,ms=>wait(ms/10),s=>'assets/femc/battle/art/shadows/'+s+'.webp',s=>new URL(s,location.href).href);const results=[];
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
 for kind in options.enemies.split(','):
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
 errors=p.console();assert not errors,errors
 summary={'posePlayback':result,'actualBattleAttackAndCast':actual,'actualDefeatTransitions':defeats,'sourcesUnchanged':sum(e.get('status')=='integrated' for e in data['entries']),'browserErrors':errors,'screenshots':str(OUT)}
 (OUT/'results.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps(summary))
finally:p.close()
