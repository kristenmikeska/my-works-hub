"""Focused early-link branch and story-only listing regression checks."""
import json,pathlib
from femc_browser import Page
ROOT=pathlib.Path(__file__).resolve().parents[1]
p=Page()
try:
 p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
 p.goto('femc-game.html?debug=1');assert not p.console();p.eval((ROOT/'tests/femc_links.browser.js').read_text())
 total=0;scenes=[]
 for cid in ['hanni','hyein']:
  for rank in range(3):
   r=p.eval(f'LinkAudit.one({json.dumps(cid)},{rank})',timeout=180);total+=r['paths'];scenes.append(r)
 for rank in [0]:
  r=p.eval(f'LinkAudit.one("jihoon",{rank})',timeout=180);total+=r['paths'];scenes.append(r)
 # Direct semantic checks supplement traversal: no fabricated player quote; remembered quip only on its actual flag.
 semantic=p.eval(r'''(()=>{const G=FemcGame,A=LinkAudit,collect=(id,index,path,flags={})=>{const e=A.sceneList(id)[index];A.reset(id,e,{flags});return A.play(id,e,path,id+'/check').text.join('\n')};
 let count=0;const ok=(v,msg)=>{count++;if(!v)throw Error(msg)};
 for(let i=0;i<3;i++)for(let j=0;j<3;j++){const t=collect('hyein',0,[i,j,0]);ok(!t.includes("she said thank you")&&!t.includes('Like a hotel'),'Invented quote');ok(!t.includes('Why are you talking like that'),'Shared formal accusation')}
 const h=G.LINKS.hanni.ranks[1].scene.find(l=>l.ifFlag==='hyein-menace');G.S.flags={};ok(G.branch(h,'hanni')===h.else,'Unearned callback');G.S.flags['hyein-menace']=true;ok(G.branch(h,'hanni')===h.then,'Missing earned callback');
 for(const flag of [false,true]){const text=collect('hanni',1,[0,0,0],flag?{'hyein-menace':true}:{});ok(text.includes('You called me annoying at the mall')===flag,'Wrong displayed callback');ok(!text.includes('talking like a hotel'),'Repeated hotel accusation')}
 const intro=collect('jihoon',0,[0,0]);ok(!intro.includes('Yesterday?')&&!intro.includes('At the school gate'),'Stale arrival recap');
 // Every Wren story rank remains scheduled despite her absence from free-time map rows.
 const w=G.LINKS.wren;G.S.events=G.D.events.map(e=>e.id);G.S.phase='play';G.S.flags={};G.S.route.frags={R:99,S:99,H:99};G.S.spent={};G.S.links.wren={rank:0,xp:0,seen:[],rankDay:{},push:0,reversed:false};
 for(let rank=0;rank<10;rank++){G.S.links.wren.rank=rank;G.S.day=G.dayOf(w.ranks[rank].after);G.S.slot='evening';G.S.tartarus.bosses=G.D.cal.ops.map(o=>o.op);ok(!G.linksAt('station','evening').some(l=>l.id==='wren'),'Wren in map');ok(G.dueEvent('evening')?.link?.id==='wren','Wren story rank lost '+rank)}
 G.S.day=G.dayOf('5/1');G.S.slot='evening';G.S.met=['wren'];G.S.links.wren.rank=0;G.S.yen=10000;FemcGameUI.goOut('evening','station');ok(!document.querySelector('[data-link=wren]'),'Wren row rendered');ok(!!G.LINKS.wren&&w.ranks.length===10,'Story data deleted');return count})()''')
 assets=p.eval('LinkAudit.assetCheck()');assert not assets['missing'],assets
 errors=p.console();assert not errors,errors
 print(json.dumps({'scenes':len(scenes),'scenePaths':total,'allWrittenBranchesReached':True,'semanticAndStorySchedulingChecks':semantic,'sceneAssets':assets['count'],'browserErrors':errors}))
finally:p.close()
