"""Recruit catch-up migration checks plus Minji's actual introductory battle UI.
The fight runs inside femc-game.html (the Dark Hour frame); the old battle record sits in the life sim's save (S.battleSave)."""
import json,pathlib,time
from femc_browser import Page
ROOT=pathlib.Path(__file__).resolve().parents[1]
source=(ROOT/'assets/femc/battle/battle.js').read_text()
start=source.index('  function catchUpRecruits(');helper=source[start:source.index('\n  }\n',start)+5]
p=Page()
try:
 p.goto('femc-game.html?speed=10&seed=2')
 # Use an old v4 battle record with future recruits initialized at level 5.
 p.eval('''FemcGame.newGame();FemcGame.S.started=true;FemcGame.S.phase='play';FemcGame.S.day=FemcGame.dayOf('10/31');FemcGame.S.flags['awake-minji']=true;
 const run=FemcGame.S.runId;localStorage.setItem('kg-femc-game',JSON.stringify({sentinel:'v1-untouched'}));localStorage.setItem('kg-femc-battle-proto',JSON.stringify({sentinel:'practice-untouched'}));
 localStorage.setItem('kg-femc-revamp-battle',JSON.stringify({v:1,runs:{other:{at:0,save:{sentinel:'other-run'}}}}));
 FemcGame.S.battleSave={v:4,awakened:true,lvl:40,exp:73,party:['akihiko','yukari'],mem:{minji:{lvl:5,exp:17},aigis:{lvl:50,exp:89},jungwon:{lvl:5,exp:23}},gear:{owned:{},eq:{}},nodes:[]};
 FemcGame.makeHandoff('scripted',{script:'memory-runners',segment:2,forced:true,party:['solar','akihiko','yukari']})''')
 p.battle()
 p.wait("!!document.querySelector('[data-prep=begin]')");p.eval("document.querySelector('[data-prep=begin]').click()")
 p.wait('!!window.FemcBattle?.B && FemcBattle.B.party().some(u=>u.mid==="minji")')
 result=p.eval('''(()=>{const s=FemcBattle.save,check=(v,msg)=>{if(!v)throw Error(msg)};
 check(s.mem.minji.lvl===39&&s.mem.minji.exp===17,'Old recruit was not repaired');check(s.mem.aigis.lvl===50&&s.mem.aigis.exp===89,'Higher record changed');check(s.mem.jungwon.lvl===5&&s.mem.jungwon.exp===23,'Unavailable recruit changed');
 const fix=new Function('D','member', '''+json.dumps(helper+';return catchUpRecruits;')+''')(FEMC_BATTLE_DATA,id=>FEMC_BATTLE_DATA.party.find(m=>m.id===id));
 let n=0;const ok=(v)=>{n++;check(v,'Recruit unit case '+n)};
 const a={lvl:40,mem:{minji:{lvl:5,exp:17},aigis:{lvl:50,exp:89},jungwon:{lvl:5,exp:23},akihiko:{lvl:8,exp:7}}};
 fix(a,['solar','unknown','akihiko','minji','aigis'],'available');ok(a.mem.minji.lvl===39);ok(a.mem.minji.exp===17);ok(a.mem.aigis.lvl===50&&a.mem.aigis.exp===89);ok(a.mem.akihiko.lvl===8);ok(a.mem.jungwon.lvl===5);a.lvl=50;fix(a,['minji'],'available');ok(a.mem.minji.lvl===39);
 const b={lvl:20,mem:{minji:{lvl:5,exp:17}}};fix(b,['minji'],'available');ok(b.mem.minji.lvl===19);fix(b,['minji'],'awakening',39);ok(b.mem.minji.lvl===39&&b.mem.minji.exp===17);b.lvl=60;fix(b,['minji'],'awakening',39);ok(b.mem.minji.lvl===39);fix(b,['minji'],'available');ok(b.mem.minji.lvl===39);
 const c={lvl:60,mem:{minji:{lvl:80,exp:123}}};fix(c,['minji'],'awakening',39);ok(c.mem.minji.lvl===80&&c.mem.minji.exp===123);
 const d={lvl:5,mem:{}};fix(d,['mitsuru'],'available');ok(d.mem.mitsuru.lvl===5&&d.mem.mitsuru.exp===0);
 // New-save initialization and forced join use the same one-time paths.
 const fresh={lvl:35,mem:{}};fix(fresh,['minji'],'available');fix(fresh,['minji'],'awakening',39);ok(fresh.mem.minji.lvl===39);
 // Exercise actual engine skill costs, boss immunity, healing and Theurgy across seeded rolls.
 const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,save=JSON.parse(JSON.stringify(s));let hits=0;
 for(let seed=1;seed<=8;seed++){
  const make=()=>{const unit=E.buildUnit('minji',save);unit.th=100;const fight=E.create({party:[unit],enemies:['flash_shadow'],rand:E.rng(seed)});fight.S.cur=fight.party()[0];return fight};
  let fight=make(),u=fight.party()[0],hp=u.hp;const shots=fight.act({type:'skill',skill:'twin_shot',target:'e0'});ok(u.hp<hp);if(shots.some(e=>e.t==='hit'&&e.amount>0))hits++;
  fight=make();u=fight.party()[0];u.hp-=100;hp=u.hp;fight.act({type:'skill',skill:'diarama',target:u.id});ok(u.hp>hp);
  fight=make();const ev=fight.act({type:'theurgy'});ok(ev.some(e=>e.t==='hit'&&e.amount>0&&e.aff!=='drain'));
  fight=make();hp=fight.foes()[0].hp;fight.act({type:'skill',skill:'hamaon',target:'e0'});ok(!fight.foes()[0].dead&&fight.foes()[0].hp===hp);
 }
 ok(hits>=6);
 return {checks:n,recruitLevel:s.mem.minji.lvl,higherLevel:s.mem.aigis.lvl,unavailableLevel:s.mem.jungwon.lvl}})()''')
 print('Recruitment checks:',json.dumps(result),flush=True)
 p.eval('''window.__hoStay=true;window.battleActions=[];window.testShots=0;const original=FemcBattle.B.act;FemcBattle.B.act=action=>{const mid=FemcBattle.B.S.cur.mid;const ev=original(action);battleActions.push({mid,action,ev});if(mid==='minji'&&action.skill==='twin_shot')testShots++;return ev};''')
 # Drive ordinary UI commands. Force the first Minji action to Twin Shot, then use the existing AI decisions.
 for i in range(1800):
  state=p.eval('''(()=>{const F=FemcBattle,b=F.B,c=F.ctl;if(window.__hoResult)return 'done';if(b?.outcome()==='lose')throw Error('Lost introductory fight');if(c?.kind==='cinematic'){c.pick?.();return 'cinematic'}if(c?.kind==='allout'){c.pickValue('1');return 'allout'}if(F.screen()==='results'){document.querySelector('[data-go=next]')?.click();return 'results'}if(c?.kind!=='menu')return null;
 const choices=c.items.filter(x=>!x.off),has=v=>choices.some(x=>x.v===v),u=b.U(b.S.cur.id);
 if(has('guard')){let a=u.mid==='minji'&&!testShots?{type:'skill',skill:'twin_shot',target:b.foes()[0].id}:b.autoAction(u,'free');window.testAction=a;if(has(a.type))c.pickValue(a.type);else c.pickValue('guard');}
 else if(has('twin_shot')||choices.some(x=>FEMC_BATTLE_DATA.skills[x.v])){if(has(testAction.skill))c.pickValue(testAction.skill);else c.back();}
 else if(has(testAction?.target))c.pickValue(testAction.target);
 else if(has('continue'))c.pickValue('continue');
 else {const next=[...document.querySelectorAll('button')].find(x=>/^(Continue|Back to the dorm)/i.test(x.textContent.trim()));if(next)next.click();}
 return b?.outcome()||null})()''')
  if state=='done':break
  time.sleep(.025)
 else:raise AssertionError(p.eval('({ctl:FemcBattle.ctl?.kind,items:FemcBattle.ctl?.items?.map(i=>i.v),out:FemcBattle.B.outcome(),marks:FemcBattle.marks})'))
 actual=p.eval('''(()=>{const a=battleActions.filter(x=>x.mid==='minji');return {outcome:__hoResult,shots:a.filter(x=>x.action.skill==='twin_shot').length,shotDamage:a.flatMap(x=>x.ev).filter(e=>e.t==='hit'&&e.amount>0).length,actions:a.map(x=>x.action)}})()''')
 assert actual['shots']>0 and actual['shotDamage']>0,actual
 assert p.eval('JSON.parse(localStorage.getItem("kg-femc-game")).sentinel==="v1-untouched" && JSON.parse(localStorage.getItem("kg-femc-battle-proto")).sentinel==="practice-untouched" && JSON.parse(localStorage.getItem("kg-femc-revamp-battle")).runs.other.save.sentinel==="other-run"')
 assert actual['outcome']['outcome']=='win',actual
 p.eval("sessionStorage.setItem('expectedReturn',JSON.stringify({yen:FemcBattle.handoff.request.yen+__hoResult.yenDelta,minjiExp:__hoResult.exp.minji}));if(FemcBattle.save.preparation)throw Error('Preparation marker not cleared')")
 # Hand the result back the way the frame does when it isn't held (__hoStay): the life sim fades back and applies it.
 p.eval("window.parent.FemcBridge.finish(window.__hoResult)")
 p.top();p.wait("FemcGame.S.handoffId===null && !document.querySelector('.g-dh')")
 assert p.eval("(()=>{const want=JSON.parse(sessionStorage.getItem('expectedReturn'));return FemcGame.S.yen===want.yen&&FemcGame.S.battle.exp.minji===want.minjiExp&&!FemcGame.readHandoff()&&!FemcGame.S.battleSave.preparation})()")
 # A genuinely new battle save uses the date seed and the same encounter floor.
 p.goto('femc-game.html?speed=10&seed=2')
 p.eval("FemcGame.newGame();FemcGame.S.day=FemcGame.dayOf('10/31');FemcGame.S.flags['awake-minji']=true;FemcGame.makeHandoff('scripted',{script:'memory-runners',segment:2,forced:true,party:['solar','akihiko','yukari']})")
 p.battle()
 p.wait("!!document.querySelector('[data-prep=begin]')");p.eval("document.querySelector('[data-prep=begin]').click()")
 p.wait('!!window.FemcBattle?.B && FemcBattle.B.party().some(u=>u.mid==="minji")')
 fresh=p.eval('({lvl:FemcBattle.B.party().find(u=>u.mid==="minji").lvl,skills:FemcBattle.B.party().find(u=>u.mid==="minji").skills})')
 assert fresh['lvl']>=39 and 'twin_shot' in fresh['skills'],fresh
 errors=p.console();assert not errors,errors
 print(json.dumps({'migration':result,'newBattleSave':fresh,'actualIntroFight':actual,'unrelatedSavesUnchanged':True,'returnToLifeSimRewardsApplied':True,'browserErrors':errors}))
finally:p.close()
