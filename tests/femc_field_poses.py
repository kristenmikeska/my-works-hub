"""Exercise selected weapon stances through real battle turns in an isolated browser."""
import argparse,base64,json,pathlib,tempfile,time
from femc_browser import Page
parser=argparse.ArgumentParser();parser.add_argument('--ids',default='solar,akihiko,junpei,yukari');ids=parser.parse_args().ids.split(',')
companions=[cid for cid in ids if cid!='solar'];parties=[['solar']+companions[i:i+3] for i in range(0,len(companions),3)] or [['solar']]
OUT=pathlib.Path(tempfile.mkdtemp(prefix='femc-field-poses-'))
p=Page();seen=set();shots=False
try:
 p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1280,'height':800,'deviceScaleFactor':1,'mobile':False})
 for party in parties:
  p.goto('femc-game.html')
  p.eval('FemcGame.newGame();FemcGame.S.joined='+json.dumps(party)+';FemcGame.S.day=FemcGame.dayOf("9/15");FemcGame.makeHandoff("scripted",{script:"field-pose-check",notes:"interrupt turn 6",segment:1,forced:true,party:'+json.dumps(party)+'})')
  p.ws.call('Page.navigate',{'url':f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?from=game&speed=10&seed=1'})
  p.wait('!!window.FemcBattle?.B && !!document.querySelector(".bt-fighter")');p.eval('window.__hoStay=true')
  party_seen=set()
  for n in range(260):
   state=p.eval('''(()=>{const b=FemcBattle.B,c=FemcBattle.ctl,f=document.querySelector('.bt-fighter'),im=f?.querySelector('img'),ready=c?.kind==='menu'&&c.items?.some(i=>i.v==='guard');if(!ready||!f)return null;const u=b.U(b.S.cur.id);if(u.side!=='party')return null;return {mid:u.mid,visible:!f.hidden,loaded:im.complete&&im.naturalWidth>0,src:im.src,fit:getComputedStyle(im).objectFit,cmd:document.querySelector('.bt-who img').src,party:b.party().map(u=>u.mid)}})()''')
   if state:
    assert set(state['party'])==set(party),state
    if not state['loaded']:time.sleep(.04);continue
    assert state['visible'] and state['fit']=='contain',state
    assert '/poses/'+state['mid']+'.webp' in state['src'],state
    assert '/poses/' not in state['cmd'],state
    party_seen.add(state['mid'])
    if state['mid'] in ids:seen.add(state['mid'])
    if not shots and state['mid'] in ids:
     p.eval('FemcBattle.freeze()')
     for name,w,h in [('desktop',1280,800),('phone',390,844)]:
      p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='phone'})
      p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))')
      assert p.eval('''(()=>{const f=document.querySelector('.bt-fighter img').getBoundingClientRect(),cmd=document.querySelector('.bt-cmd').getBoundingClientRect();return f.width>0&&f.left>=0&&f.right<=innerWidth&&f.top>=0&&f.bottom<=innerHeight&&!(f.left<cmd.right&&f.right>cmd.left&&f.top<cmd.bottom&&f.bottom>cmd.top)&&document.documentElement.scrollWidth<=innerWidth})()''')
      shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
     p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1280,'height':800,'deviceScaleFactor':1,'mobile':False})
     p.eval('FemcBattle.unfreeze()');shots=True
    p.eval("FemcBattle.ctl.pickValue('guard')")
   if party_seen==set(party):break
   time.sleep(.05)
  assert party_seen==set(party),(party,party_seen,state)
  # Continue until the scripted fight's normal interruption to verify turns still resolve.
  for n in range(300):
   if p.eval('!!window.__hoResult'):break
   p.eval("(()=>{const c=FemcBattle.ctl;if(c?.kind==='menu'&&c.items?.some(i=>i.v==='guard'))c.pickValue('guard')})()")
   time.sleep(.04)
  assert p.eval('!!window.__hoResult')
  errors=p.console();assert not errors,errors
 assert seen==set(ids),seen
 print(json.dumps({'battlefieldPosesLoaded':sorted(seen),'realTurnsAndBattleContinuation':True,'encounters':len(parties),'commandPortraitsPreserved':True,'browserErrors':[],'screenshots':str(OUT)}))
finally:p.close()
