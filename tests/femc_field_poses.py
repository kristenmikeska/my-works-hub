"""Exercise battlefield stances and fighter pose sheets through real battle turns in an isolated browser (fights run in
femc-game.html's Dark Hour frame).

Every member in --ids must show on the battlefield on their turn. Members with a pose sheet (battle.js FIGHTER_POSES:
poses/<mid>-pose-0..5.webp) are also checked through the real presentation code: the idle frame is the stance, a
real Attack shows the weapon frame, a summon holds the Evoker frame (in view, before the glass, which breaks beside the
figure, not over it) and then the spell (or weapon) frame, a hit on
them shows the hurt frame, every action returns to idle, reduced motion still swaps to the one pose without a
sequence, and a won fight ends on the victory frame. Members without a sheet keep their static stance.
  python3 tests/femc_field_poses.py [--ids solar,akihiko,...] [--screenshots DIR]
"""
import argparse,base64,json,pathlib,tempfile,time
from femc_browser import Page
ALL='solar,akihiko,yukari,junpei,mitsuru,aigis,koromaru,shinjiro,haechan,jungwon,jihoon,minji'
SHEETS=set(ALL.split(','))  # members with a pose sheet (battle.js FIGHTER_POSES)
parser=argparse.ArgumentParser();parser.add_argument('--ids',default=ALL);parser.add_argument('--screenshots',default='')
a=parser.parse_args();ids=a.ids.split(',')
# The searchers fight from December (each behind their awakening flag); Shinjiro only until 10/3: they get their own fights.
SEARCHERS={'haechan','jungwon','jihoon','minji'}
sees=[c for c in ids if c!='solar' and c not in SEARCHERS];found=[c for c in ids if c in SEARCHERS]
parties=[['solar']+g[i:i+3] for g in (sees,found) for i in range(0,len(g),3)] or [['solar']]
OUT=pathlib.Path(a.screenshots) if a.screenshots else pathlib.Path(tempfile.mkdtemp(prefix='femc-field-poses-'));OUT.mkdir(parents=True,exist_ok=True)
p=Page();seen=set();shots=False;posed={};won=None
# The fighter box's pose log: [mid, pose] every time its frame changes.
WATCH='''(()=>{const f=document.querySelector('.bt-fighter');window.poseLog=[];new MutationObserver(()=>{const u=FemcBattle.B.U(f.dataset.id);poseLog.push([u?.mid,f.dataset.pose===undefined?null:+f.dataset.pose])}).observe(f,{attributes:true,attributeFilter:['data-pose']});})()'''
def poses(mid):return [n for m,n in p.eval('poseLog') if m==mid]
def until(cond,secs=20):
 t=time.time()
 while time.time()-t<secs:
  if p.eval(cond):return True
  time.sleep(.05)
 raise AssertionError('timeout: '+cond)
try:
 p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1280,'height':800,'deviceScaleFactor':1,'mobile':False})
 for gi,party in enumerate(parties):
  p.goto('femc-game.html?speed=10&seed=1')
  late=any(m in SEARCHERS for m in party)
  p.eval('FemcGame.newGame();FemcGame.S.joined='+json.dumps(party)+';'+''.join(f'FemcGame.S.flags["awake-{m}"]=true;' for m in party if m in SEARCHERS)+'FemcGame.S.day=FemcGame.dayOf("'+('12/10' if late else '9/15')+'");FemcGame.makeHandoff("scripted",{script:"field-pose-check",notes:"interrupt turn 6",segment:1,forced:true,party:'+json.dumps(party)+'})')
  p.battle()  # the fight runs inside femc-game.html (the Dark Hour frame)
  p.wait('!!window.FemcBattle?.B && !!document.querySelector(".bt-fighter")');p.eval('window.__hoStay=true');p.eval(WATCH)
  # Solar and the party stay up through every check, and the scripted interrupt waits for them.
  p.eval('FemcBattle.B.party().forEach(u=>{u.maxHp=u.hp=99999})')
  party_seen=set()
  for n in range(400):
   state=p.eval('''(()=>{const b=FemcBattle.B,c=FemcBattle.ctl,f=document.querySelector('.bt-fighter'),im=f?.querySelector('img:not(.evk)'),ready=c?.kind==='menu'&&c.items?.some(i=>i.v==='guard');if(!ready||!f)return null;const u=b.U(b.S.cur.id);if(u.side!=='party')return null;return {id:u.id,mid:u.mid,visible:!f.hidden,loaded:im.complete&&im.naturalWidth>0,src:im.src,fit:getComputedStyle(im).objectFit,posed:im.classList.contains('posed'),pose:f.dataset.pose,cmd:document.querySelector('.bt-who img').src,party:b.party().map(u=>u.mid)}})()''')
   if state:
    assert set(state['party'])==set(party),state
    mid=state['mid']
    if not state['loaded']:time.sleep(.04);continue
    assert state['visible'] and state['fit']=='contain',state
    assert '/poses/' not in state['cmd'],state
    sheet=p.eval('!!FemcBattle.B && document.querySelector(".bt-fighter")._shadowPoses!=null')
    if sheet:assert '/poses/'+mid+'-pose-0.webp' in state['src'] and state['posed'] and state['pose']=='0',state
    else:assert '/poses/'+mid+'.webp' in state['src'] and not state['posed'],state
    party_seen.add(mid)
    if mid in ids:seen.add(mid)
    if not shots and mid in ids:
     p.eval('FemcBattle.freeze()')
     for name,w,h in [('desktop',1280,800),('phone',390,844)]:
      p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='phone'})
      p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))')
      assert p.eval('''(()=>{const f=document.querySelector('.bt-fighter img').getBoundingClientRect(),cmd=document.querySelector('.bt-cmd').getBoundingClientRect();return f.width>0&&f.left>=0&&f.right<=innerWidth&&f.top>=0&&f.bottom<=innerHeight&&!(f.left<cmd.right&&f.right>cmd.left&&f.top<cmd.bottom&&f.bottom>cmd.top)&&document.documentElement.scrollWidth<=innerWidth})()''')
      shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
     p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1280,'height':800,'deviceScaleFactor':1,'mobile':False})
     p.eval('FemcBattle.unfreeze()');shots=True
    if sheet and mid not in posed:
     # A summon through the real presentation (cut-in on, then the repeat that skips it), a hit on them, reduced motion.
     r={};m0=p.eval('Object.assign({},FemcBattle.marks)')
     for k,cut in (('summon','always'),('repeat','off')):
      p.eval('poseLog=[];FemcBattle.save.cutins='+json.dumps(cut)+';window.__ev=FemcBattle.playEvents([{t:"use",src:'+json.dumps(state['id'])+',skill:"agi",name:"Agi",el:"fire",summon:true,tgts:[]}]).then(()=>window.__ev=null)')
      until('window.__ev===null',30);until('document.querySelector(".bt-fighter").dataset.pose==="0"')
      r[k]=poses(mid);assert r[k][:2]==[1,3] and r[k][-1]==0,(mid,k,r[k])
     # The Evoker frame holds before the glass, the cut-in starts at the figure's right edge, a repeat breaks small
     # glass beside the figure (Solar: her field Evoker sheet does it), never the full-screen flash over it.
     m1=p.eval('FemcBattle.marks');d=lambda key:m1.get(key,0)-m0.get(key,0)
     assert d('evoke-hold')>=1 and d('evoke-side')>=1 and (d('side-glass')>=1 or d('field-evoke-done')>=1),(mid,{x:d(x) for x in ('evoke-hold','evoke-side','side-glass','field-evoke-done')})
     p.eval('poseLog=[];window.__ev=FemcBattle.playEvents([{t:"hit",src:FemcBattle.B.foes()[0].id,tgt:'+json.dumps(state['id'])+',amount:5,hp:99990,aff:"normal",el:"strike"}]).then(()=>window.__ev=null)')
     until('window.__ev===null');until('document.querySelector(".bt-fighter").dataset.pose==="0"')
     r['hurt']=poses(mid);assert 4 in r['hurt'] and r['hurt'][-1]==0,(mid,r['hurt'])
     p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
     p.eval('poseLog=[];window.__ev=FemcBattle.playEvents([{t:"use",src:'+json.dumps(state['id'])+',skill:"agi",name:"Agi",el:"fire",summon:true,tgts:[]}]).then(()=>window.__ev=null)')
     until('window.__ev===null',30);until('document.querySelector(".bt-fighter").dataset.pose==="0"')
     r['reduced']=poses(mid);assert r['reduced'][:2]==[1,3] and r['reduced'][-1]==0,(mid,r['reduced'])
     p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'no-preference'}]})
     # Then a real Attack from the command menu on one target: the weapon frame, then back to the stance.
     p.eval('poseLog=[];FemcBattle.ctl.pickValue("attack")')
     until('''(()=>{const c=FemcBattle.ctl;if(c?.kind==='menu'&&!c.items?.some(i=>i.v==='guard')){const e=[...document.querySelectorAll('.bt-enemy:not(.dead)')][0];if(e)e.click()}return poseLog.some(([m,n])=>m==='''+json.dumps(mid)+'''&&n===2)})()''',30)
     r['attack']=poses(mid);posed[mid]=r
     continue
    p.eval("FemcBattle.ctl.pickValue('guard')")
   if party_seen==set(party) and all(m in posed for m in party if m in SHEETS):break
   time.sleep(.05)
  assert party_seen==set(party),(party,party_seen,state)
  if gi==len(parties)-1:
   # A won fight: every Shadow but one goes, the last falls to a real Attack, and the fighter strikes the victory pose.
   until("FemcBattle.ctl?.kind==='menu' && FemcBattle.ctl.items?.some(i=>i.v==='guard') && FemcBattle.B.U(FemcBattle.B.S.cur.id).side==='party'",60)
   p.eval('poseLog=[];const fs=FemcBattle.B.foes();fs.forEach((f,i)=>{if(i){f.hp=0;f.dead=true}else f.hp=1});FemcBattle.ctl.pickValue("attack")')
   until('''(()=>{const c=FemcBattle.ctl;if(c?.kind==='menu'&&!c.items?.some(i=>i.v==='guard')){const e=[...document.querySelectorAll('.bt-enemy:not(.dead)')][0];if(e)e.click()}return !!FemcBattle.marks['fighter-win']})()''',60)
   won=p.eval('''(()=>{const f=document.querySelector('.bt-fighter');return {mid:FemcBattle.B.U(f.dataset.id)?.mid,pose:f.dataset.pose,won:f.classList.contains('won'),src:f.querySelector('img:not(.evk)').src,hidden:f.hidden}})()''')
   assert won['won'] and won['pose']=='5' and '-pose-5.webp' in won['src'] and not won['hidden'],won
   p.eval('FemcBattle.freeze()')
   for name,w,h in [('win-desktop',1280,800),('win-phone',390,844)]:
    p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='win-phone'})
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))')
    shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
   p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1280,'height':800,'deviceScaleFactor':1,'mobile':False})
   p.eval('FemcBattle.unfreeze()')
  else:
   # Continue until the scripted fight's normal interruption to verify turns still resolve.
   for n in range(300):
    if p.eval('!!window.__hoResult'):break
    p.eval("(()=>{const c=FemcBattle.ctl;if(c?.kind==='menu'&&c.items?.some(i=>i.v==='guard'))c.pickValue('guard')})()")
    time.sleep(.04)
   assert p.eval('!!window.__hoResult')
  errors=p.console();assert not errors,errors
 assert seen==set(ids),seen
 print(json.dumps({'battlefieldPosesLoaded':sorted(seen),'poseSheetsChecked':sorted(posed),'victory':won,'realTurnsAndBattleContinuation':True,'encounters':len(parties),'commandPortraitsPreserved':True,'browserErrors':[],'screenshots':str(OUT)}))
finally:p.close()
