"""Forced-battle preparation: required members, equipment, reload, retries and solo/operation paths.
Fights run inside femc-game.html (the Dark Hour frame); Party and Equipment open the game's one field menu over it."""
import base64,json,pathlib,tempfile
from femc_browser import Page
OUT=pathlib.Path(tempfile.mkdtemp(prefix='femc-preparation-'))
p=Page()
# The story's own state, without the battle progress the fight keeps writing into the same save.
STORY="(()=>{const s=JSON.parse(localStorage.getItem('kg-femc-revamp'));['battleSave','battleAt','savedAt','handoff'].forEach(k=>delete s[k]);return JSON.stringify(s)})()"
def prep():
 p.battle();p.wait("!!document.querySelector('[data-prep=begin]')")
def menu(tab):
 p.eval("document.querySelector('[data-prep=%s]').click()"%tab)
 p.top();p.wait("!!document.querySelector('.g-fm-ov.g-over-battle:not(.out) .g-fm-body [data-%s]')"%('pm' if tab=='party' else 'slot'))
def close_menu():
 p.top();p.eval("document.querySelector('.g-fm-ov:not(.out) [data-close]').click()");p.frame();p.wait("!!document.querySelector('[data-prep=begin]') && FemcBattle.ctl?.kind==='buttons'")
try:
 p.goto('femc-game.html?speed=10&seed=2')
 p.eval("FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf('10/31');FemcGame.S.flags['awake-minji']=true;FemcGame.S.gear=['naginata1'];FemcGame.makeHandoff('scripted',{script:'memory-runners',segment:2,forced:true,party:['solar','akihiko','yukari']})")
 prep()
 p.top();p.eval("sessionStorage.setItem('beforeStory',"+STORY+")");p.frame()
 assert p.eval("!FemcBattle.B && !FemcBattle.marks['battle-start']")
 p.eval("window.beforePrep=JSON.stringify({yen:FemcBattle.save.yen,items:FemcBattle.save.items,exp:FemcBattle.save.exp});sessionStorage.setItem('beforePrep',beforePrep)")
 menu('party')
 # Minji is required: she's in the party and can't be benched.
 p.eval("document.querySelector('.g-fm-ov:not(.out) [data-pm=minji]').click()")
 assert p.eval("FemcGame.S.battleSave.party.includes('minji') && document.querySelector('.g-fm-ov:not(.out) [data-pm=minji] .g-pm-slot').textContent==='Required' && [...document.querySelectorAll('.g-toast')].some(t=>t.textContent.includes('must take part'))")
 p.eval("document.querySelector('.g-fm-ov:not(.out) [data-pm=yukari]').click();document.querySelector('.g-fm-ov:not(.out) [data-pm=mitsuru]').click()")
 close_menu()
 menu('equip')
 p.eval("document.querySelector('.g-fm-ov:not(.out) [data-slot=weapon]').click()")
 assert p.eval("!!document.querySelector('.g-fm-ov:not(.out) [data-pick=naginata1]')")
 p.eval("document.querySelector('.g-fm-ov:not(.out) [data-pick=naginata1]').click()")
 close_menu()
 assert p.eval("FemcBattle.save.gear.eq.solar.weapon==='naginata1' && document.querySelector('.bt-prep-list').textContent.includes('Steel Naginata')")
 assert p.eval("JSON.stringify({yen:FemcBattle.save.yen,items:FemcBattle.save.items,exp:FemcBattle.save.exp})===sessionStorage.getItem('beforePrep')")
 p.top();assert p.eval(STORY+"===sessionStorage.getItem('beforeStory')"),'preparation changed the story'
 # Reloading the page (Continue) reopens Get Ready with the chosen party and gear, and starts nothing.
 p.ws.call('Page.reload',{'ignoreCache':True});p.wait("!!window.FemcGameUI && !!document.querySelector('[data-t=continue]')")
 p.eval("document.querySelector('[data-t=continue]').click()");p.frame();p.wait("!!document.querySelector('[data-prep=begin]')")
 assert p.eval("!FemcBattle.B && FemcBattle.save.party.includes('minji') && FemcBattle.save.party.includes('mitsuru') && !FemcBattle.save.party.includes('yukari') && FemcBattle.save.gear.eq.solar.weapon==='naginata1'")
 for name,w,h in [('desktop',1280,800),('phone',390,844)]:
  p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='phone'});p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))')
  assert p.eval("(()=>{const b=document.querySelector('[data-prep=begin]').getBoundingClientRect();return b.left>=0&&b.right<=innerWidth&&b.top>=0&&b.bottom<=innerHeight&&document.documentElement.scrollWidth<=innerWidth})()")
  shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
 p.ws.call('Emulation.clearDeviceMetricsOverride')
 p.eval("document.querySelector('[data-prep=begin]').click();document.querySelector('[data-prep=begin]')?.click()")
 p.wait("FemcBattle.ctl?.kind==='menu' && FemcBattle.ctl.items?.some(i=>i.v==='guard')")
 assert p.eval("FemcBattle.marks['battle-start']===1 && FemcBattle.B.party().some(u=>u.mid==='mitsuru') && !FemcBattle.B.party().some(u=>u.mid==='yukari') && FemcBattle.B.party()[0].atk===FEMC_BATTLE_DATA.gear.naginata1.atk")
 # Inject a loss result to exercise the retry UI, without changing gameplay rules.
 p.eval("FemcBattle.B.S.outcome='lose';FemcBattle.ctl.pickValue('guard')")
 p.wait("FemcBattle.screen()==='over' && !!document.querySelector('[data-v=retry]')")
 p.eval("document.querySelector('[data-v=retry]').click()")
 p.wait("FemcBattle.screen()==='preparation'")
 assert p.eval("FemcBattle.marks['battle-start']===1 && FemcBattle.save.gear.eq.solar.weapon==='naginata1' && FemcBattle.save.party.includes('minji')")
 # A new handoff must use its requested lineup, not the previous preparation's saved selection. Solo: only Solar's gear.
 p.goto('femc-game.html?speed=10&seed=2');p.eval("FemcGame.S.day=FemcGame.dayOf('3/6');FemcGame.makeHandoff('scripted',{script:'finale',segment:3,forced:true,party:['solar','akihiko','yukari']})")
 prep();assert p.eval("!document.querySelector('[data-prep=party]') && document.querySelector('.bt-prep-list').children.length===1 && FemcBattle.save.party.includes('yukari')")
 menu('equip')
 assert p.eval("document.querySelectorAll('.g-fm-ov:not(.out) [data-eq]').length===1 && !!document.querySelector('.g-fm-ov:not(.out) [data-eq=solar]')")
 close_menu();p.eval("document.querySelector('[data-prep=begin]').click()")
 p.wait('!!FemcBattle.B');assert p.eval('FemcBattle.B.party().length===1')
 # Standard full-moon operations retain their clock heal, followed by preparation.
 p.goto('femc-game.html?speed=10&seed=2');p.eval("FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf('5/9');FemcGame.makeHandoff('operation',{op:'priestess',forced:true,party:['solar','yukari']})")
 p.battle();p.wait("!!document.querySelector('.bt-clock-in button')")
 assert p.eval('!FemcBattle.B')
 p.eval("document.querySelector('.bt-clock-in button').click()")
 p.wait("FemcBattle.screen()==='preparation'");assert p.eval('!FemcBattle.B')
 errors=p.console();assert not errors,errors
 print(json.dumps({'forcedBossPreparation':True,'requiredMemberPreserved':True,'unifiedFieldMenu':True,'equipmentAndPartyPersistOnReload':True,'preparationDoesNotSpendOrAdvanceStory':True,'selectedPartyAndEquipmentUsed':True,'singleBattleStart':True,'retryReturnsToPreparation':True,'soloRestrictionsPreserved':True,'newHandoffUsesRequestedParty':True,'operationClockThenPreparation':True,'browserErrors':errors,'screenshots':str(OUT)}))
finally:p.close()
