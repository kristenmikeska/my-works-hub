"""Arrival-aware routines: scene choices, gating, save compatibility and real calendar flow."""
import json,pathlib
from femc_browser import Page
ROOT=pathlib.Path(__file__).resolve().parents[1]
p=Page()
try:
 p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
 p.goto('femc-game.html?debug=1');assert not p.console()
 p.eval((ROOT/'tests/femc_links.browser.js').read_text())
 paths=p.eval('''(()=>{const G=FemcGame,A=LinkAudit;let paths=0;for(const entry of G.D.dailyLife){for(const pick of (entry.scene.some(l=>l.choose)?[0,1]:[0])){A.reset('hanni',{kind:'daily',i:0},{flags:{}});const e={...entry,scene:[{bg:entry.bg},...entry.scene]};const r=A.play('hanni',e,[pick],entry.id);if(!r.result.finished||r.result.gained!==0)throw Error('Incomplete or rewarded routine');paths++}}return paths})()''')
 gates=p.eval('''(()=>{const G=FemcGame;let n=0;const ok=(v,m)=>{n++;if(!v)throw Error(m)};G.newGame();G.S.phase='play';G.S.day=G.dayOf('9/14');G.S.slot='early';
 ok(!G.dailyLife(),'Before housing/arrival');G.S.events=['a4-names'];ok(G.dailyLife()?.id==='girls-school-gate','Arrival event without link rank');G.finishDailyLife('girls-school-gate');ok(!G.dailyLife(),'One-time scene');G.S.day++;G.S.slot='lunch';ok(!G.dailyLife(),'Cooldown');G.S.day++;ok(G.dailyLife()?.id==='hanni-packed-lunch','Lunch routine after cooldown');
 G.S.dailyLife={seen:[],lastDay:-99};G.S.day=G.dayOf('9/20');G.S.slot='early';ok(!G.dailyLife(),'No school routine on Sunday');G.S.day=G.dayOf('7/22');G.S.slot='evening';G.S.events=['a4-names','a4-ice-cream'];ok(!G.dailyLife(),'No dorm routine on trip');
 G.S.day=G.dayOf('9/23');G.S.slot='evening';G.S.events=[];ok(!G.dailyLife(),'No early Jihoon');G.S.events=['a4-ice-cream'];ok(!G.dailyLife(),'All present characters must have arrived');G.S.events=['a4-names','a4-ice-cream'];G.S.dailyLife.seen=['hyein-dorm-offcuts'];ok(G.dailyLife()?.id==='jihoon-dorm-errands','Jihoon arrival gate');G.S.dailyLife={seen:[],lastDay:-99};G.S.events=['a4-names'];G.S.day=G.dayOf('9/13');ok(!G.dailyLife(),'Completed story day protected');
 delete G.S.dailyLife;G.S.day=G.dayOf('9/18');G.S.events=['a4-names'];ok(G.dailyLife()?.id==='hyein-dorm-offcuts','Legacy save without new field');G.finishDailyLife('hyein-dorm-offcuts');G.saveSlot(1);G.S.dailyLife={seen:[],lastDay:-99};G.loadSlot(1);ok(G.S.dailyLife.seen.includes('hyein-dorm-offcuts'),'Save-slot persistence');return n})()''')
 # Drive real UI routines and check the time-slot transitions and absence of costs/rewards.
 p.eval('''window.setupDaily=(id)=>{const G=FemcGame,e=G.D.dailyLife.find(e=>e.id===id);G.newGame();G.S.phase='play';G.S.day=G.dayOf(e.after);G.S.slot=e.slot;G.S.events=[...e.events];G.S.dailyLife={seen:G.D.dailyLife.filter(x=>x.slot===e.slot&&x.id!==id).map(x=>x.id),lastDay:-99};G.S.links.wren={rank:10,xp:0,seen:[],rankDay:{},push:0,reversed:false};for(let i=0;i<35&&(G.dailyLife()?.id!==id||G.dueEvent());i++)G.S.day++;if(G.dailyLife()?.id!==id||G.dueEvent())throw Error('No eligible date for '+id);G.setSetting('dateCard',false);G.setSetting('text','instant');G.setSetting('auto','off');window.beforeDaily={day:G.S.day,slot:G.S.slot,stats:JSON.stringify(G.S.stats),yen:G.S.yen,spent:JSON.stringify(G.S.spent)};FemcGameUI.run()};
 window.finishRoutine=()=>{const el=document.querySelector('.gs[aria-label="Everyday life"]:not(.out)');if(!el)throw Error('Missing routine');for(let i=0;i<100&&!el.classList.contains('out');i++){const b=el.querySelector('.gs-choices button');if(b)b.click();else el.click()}if(!el.classList.contains('out'))throw Error('Routine stuck')};''')
 flow=[]
 for cid in ['girls-school-gate','hanni-packed-lunch','hyein-dorm-offcuts','jihoon-morning-route','jihoon-dorm-errands']:
  p.eval('setupDaily('+json.dumps(cid)+')')
  print('Checking UI: '+cid,flush=True)
  p.wait("!!document.querySelector('.gs[aria-label=\"Everyday life\"]:not(.out)')")
  p.eval('finishRoutine()')
  state=p.eval('''({seen:FemcGame.S.dailyLife.seen,slot:FemcGame.S.slot,stats:JSON.stringify(FemcGame.S.stats),yen:FemcGame.S.yen,spent:JSON.stringify(FemcGame.S.spent),before:beforeDaily,eveningMenu:!!document.querySelector('.g-nights')})''')
  assert cid in state['seen'],state
  assert state['stats']==state['before']['stats'] and state['yen']==state['before']['yen'] and state['spent']==state['before']['spent'],state
  expected={'early':'morning','lunch':'afternoon','evening':'evening'}[state['before']['slot']];assert state['slot']==expected,state
  if expected=='evening':assert state['eveningMenu'],state
  flow.append(cid)
 # A story scene due in the same slot takes precedence over the routine.
 priority=p.eval('''(()=>{const G=FemcGame;G.newGame();G.S.phase='play';G.S.day=G.dayOf('9/14');G.S.slot='early';G.S.events=['a4-names'];G.setSetting('dateCard',false);G.D.events.push({id:'daily-priority-fixture',date:'9/14',slot:'early',scene:[{n:'Story priority test.'}]});FemcGameUI.run();return !document.querySelector('.gs[aria-label="Everyday life"]:not(.out)')&&G.S.dailyLife.seen.length===0})()''')
 assert priority
 assets=p.eval('LinkAudit.assetCheck()');assert not assets['missing'],assets
 errors=p.console();assert not errors,errors
 print(json.dumps({'routineScenes':5,'scenePaths':paths,'gatingAndSaveChecks':gates,'realCalendarFlows':flow,'noStatMoneyOrFreeTimeCost':True,'storyPriorityChecked':True,'assetsChecked':assets['count'],'browserErrors':errors}))
finally:p.close()
