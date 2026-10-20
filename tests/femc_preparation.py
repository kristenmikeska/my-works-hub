"""Forced-battle preparation: required members, equipment, reload, retries and solo/operation paths."""
import base64,json,pathlib,tempfile
from femc_browser import Page
OUT=pathlib.Path(tempfile.mkdtemp(prefix='femc-preparation-'))
p=Page()
def nav():
 p.ws.call('Page.navigate',{'url':f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?from=game&speed=10&seed=2'})
 p.wait("!!document.querySelector('[data-prep=begin]')")
try:
 p.goto('femc-game.html')
 p.eval("FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf('10/31');FemcGame.S.flags['awake-minji']=true;FemcGame.S.gear=['naginata1'];FemcGame.makeHandoff('scripted',{script:'memory-runners',segment:2,forced:true,party:['solar','akihiko','yukari']});window.beforeStory=localStorage.getItem('kg-femc-revamp');sessionStorage.setItem('beforeStory',beforeStory)")
 nav()
 assert p.eval("!FemcBattle.B && !FemcBattle.marks['battle-start']")
 p.eval("window.beforePrep=JSON.stringify({yen:FemcBattle.save.yen,items:FemcBattle.save.items,exp:FemcBattle.save.exp});sessionStorage.setItem('beforePrep',beforePrep);document.querySelector('[data-prep=party]').click();document.querySelector('[data-act=toggle][data-id=minji]').click()")
 assert p.eval("FemcBattle.save.party.includes('minji') && document.querySelector('.bt-party-foot').textContent.includes('must take part')")
 p.eval("document.querySelector('[data-act=toggle][data-id=yukari]').click();document.querySelector('[data-act=toggle][data-id=mitsuru]').click();document.querySelector('[data-act=done]').click();document.querySelector('[data-prep=equip]').click();document.querySelector('[data-s=\"0\"]').click()")
 assert p.eval("FemcBattle.ctl.list.includes('naginata1')")
 p.eval("document.querySelector('[data-l=\"'+FemcBattle.ctl.list.indexOf('naginata1')+'\"]').click();document.querySelector('[data-act=back]').click()")
 assert p.eval("FemcBattle.save.gear.eq.solar.weapon==='naginata1' && document.querySelector('.bt-prep-list').textContent.includes('Steel Naginata')")
 assert p.eval("JSON.stringify({yen:FemcBattle.save.yen,items:FemcBattle.save.items,exp:FemcBattle.save.exp})===sessionStorage.getItem('beforePrep') && localStorage.getItem('kg-femc-revamp')===sessionStorage.getItem('beforeStory')")
 # Save/export serialization and page reload retain preparation without starting the encounter.
 p.ws.call('Page.reload',{'ignoreCache':True});p.wait("!!document.querySelector('[data-prep=begin]')")
 assert p.eval("!FemcBattle.B && FemcBattle.save.party.includes('minji') && FemcBattle.save.party.includes('mitsuru') && !FemcBattle.save.party.includes('yukari') && FemcBattle.save.gear.eq.solar.weapon==='naginata1'")
 for name,w,h in [('desktop',1280,800),('phone',390,844)]:
  p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='phone'});p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))')
  assert p.eval("(()=>{const b=document.querySelector('[data-prep=begin]').getBoundingClientRect();return b.left>=0&&b.right<=innerWidth&&b.top>=0&&b.bottom<=innerHeight&&document.documentElement.scrollWidth<=innerWidth})()")
  shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
 p.eval("document.querySelector('[data-prep=begin]').click();document.querySelector('[data-prep=begin]')?.click()")
 p.wait("FemcBattle.ctl?.kind==='menu' && FemcBattle.ctl.items?.some(i=>i.v==='guard')")
 assert p.eval("FemcBattle.marks['battle-start']===1 && FemcBattle.B.party().some(u=>u.mid==='mitsuru') && !FemcBattle.B.party().some(u=>u.mid==='yukari') && FemcBattle.B.party()[0].atk===FEMC_BATTLE_DATA.gear.naginata1.atk")
 # Inject a loss result to exercise the retry UI, without changing gameplay rules.
 p.eval("FemcBattle.B.S.outcome='lose';FemcBattle.ctl.pickValue('guard')")
 p.wait("FemcBattle.screen()==='over' && !!document.querySelector('[data-v=retry]')")
 p.eval("document.querySelector('[data-v=retry]').click()")
 p.wait("FemcBattle.screen()==='preparation'")
 assert p.eval("FemcBattle.marks['battle-start']===1 && FemcBattle.save.gear.eq.solar.weapon==='naginata1' && FemcBattle.save.party.includes('minji')")
 # A new handoff must use its requested lineup, not the previous preparation's saved selection.
 p.goto('femc-game.html');p.eval("FemcGame.S.day=FemcGame.dayOf('1/30');FemcGame.makeHandoff('scripted',{script:'finale',segment:3,forced:true,party:['solar','akihiko','yukari']})")
 nav();assert p.eval("!document.querySelector('[data-prep=party]') && document.querySelector('.bt-prep-list').children.length===1 && FemcBattle.save.party.includes('yukari')")
 p.eval("document.querySelector('[data-prep=equip]').click()")
 assert p.eval("document.querySelectorAll('[data-m]').length===1 && FemcBattle.ctl.mid==='solar'")
 p.eval("document.querySelector('[data-act=back]').click();document.querySelector('[data-prep=begin]').click()")
 p.wait('!!FemcBattle.B');assert p.eval('FemcBattle.B.party().length===1')
 # Standard full-moon operations retain their clock heal, followed by preparation.
 p.goto('femc-game.html');p.eval("FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf('5/9');FemcGame.makeHandoff('operation',{op:'priestess',forced:true,party:['solar','yukari']})")
 p.ws.call('Page.navigate',{'url':f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?from=game&speed=10&seed=2'})
 p.wait("!!document.querySelector('.bt-clock-in button')")
 assert p.eval('!FemcBattle.B')
 p.eval("document.querySelector('.bt-clock-in button').click()")
 p.wait("FemcBattle.screen()==='preparation'");assert p.eval('!FemcBattle.B')
 errors=p.console();assert not errors,errors
 print(json.dumps({'forcedBossPreparation':True,'requiredMemberPreserved':True,'equipmentAndPartyPersistOnReload':True,'preparationDoesNotSpendOrAdvanceStory':True,'selectedPartyAndEquipmentUsed':True,'singleBattleStart':True,'retryReturnsToPreparation':True,'soloRestrictionsPreserved':True,'newHandoffUsesRequestedParty':True,'operationClockThenPreparation':True,'browserErrors':errors,'screenshots':str(OUT)}))
finally:p.close()
