"""Novel-cast continuity: real scene branches, scheduling, cameo names and unchanged scene effects.
Optional --before accepts a data snapshot for checking that a prose pass preserved gameplay structure.
"""
import argparse,datetime,json,pathlib
from femc_browser import Page
ROOT=pathlib.Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--before',type=pathlib.Path);args=parser.parse_args()
CAST={'hanni':('R',None),'hyein':('R',None),'jihoon':('H','canon'),'minji':('R','canon'),'yunjin':('S',None),'jungwon':('HS','canon'),'jaehyun':('R',None),'junkyu':('H',None),'haechan':('RS','canon'),'sunoo':('H',None),'cherry':('H',None),'mark':('R',None)}
CAMEOS=['asahi','hyunsuk','jaehyuk','heeseung','sunghoon','jay','jake','niki']
p=Page()
try:
 p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
 p.goto('femc-game.html?debug=1');assert not p.console()
 p.eval((ROOT/'tests/femc_links.browser.js').read_text())
 current=p.eval('({links:FemcGame.LINKS,events:FemcGame.D.events})')
 assert {k for k,v in current['links'].items() if v.get('kind')=='searcher'}==set(CAST)
 for cid,(world,romance) in CAST.items():
  link=current['links'][cid];assert (link['world'],link.get('romance'))==(world,romance),cid
 structure_checks=0
 if args.before:
  before=json.loads(args.before.read_text())
  def shape(x):
   if isinstance(x,list):return [shape(v) for v in x if not (isinstance(v,dict) and set(v)=={'n'})]
   if isinstance(x,dict):return {k:shape(v) for k,v in x.items() if k not in ['n','t']}
   return x
  for cid in CAST:
   assert shape(before['links'][cid])==shape(current['links'][cid]),cid+' gameplay changed';structure_checks+=1
  assert shape(before['events'])==shape(current['events']),'Story structure changed';structure_checks+=1
  assert before['links']['mark']==current['links']['mark'],'Approved Mark writing changed'
 paths=0;scenes=[]
 targets=[(cid,0) for cid in CAST]+[('jihoon',1),('jihoon',7),('jihoon',9),('cherry',7),('cherry',8),('jungwon',1)]
 # Group scenes exercise every companion, including those with no Social Link of their own.
 targets += [('jihoon',6),('junkyu',2),('junkyu',7),('sunoo',1),('sunoo',4),('cherry',3)]
 hyein_hangout=p.eval("LinkAudit.sceneList('hyein').findIndex(e=>e.kind==='hangout'&&e.i===3)")
 targets.append(('hyein',hyein_hangout))
 for cid,index in targets:
  print('Checking '+cid+'/'+str(index),flush=True)
  result=p.eval('LinkAudit.one('+json.dumps(cid)+','+str(index)+')',timeout=180)
  paths+=result['paths'];scenes.append(result['key'])
 # Play all choices in the three modified arrival scenes, including the lodging additions.
 arrival_paths=0
 for event_id,cid in [('a4-lamppost','minji'),('a4-low-tide','yunjin'),('a4-council-room','jungwon')]:
  result=p.eval("""(()=>{const G=FemcGame,A=LinkAudit,e=G.D.events.find(e=>e.id==="""+json.dumps(event_id)+"""),id="""+json.dumps(cid)+""";let n=0;const queue=[[]];while(queue.length){const path=queue.shift();A.reset(id,{kind:'arrival',i:0},{flags:{}});const want=A.expected(id,e,path,e.id);A.reset(id,{kind:'arrival',i:0},{flags:{}});const got=A.play(id,e,path,e.id);if(!got.result.finished||JSON.stringify(got.text)!==JSON.stringify(want.text))throw Error('Arrival log/flow '+e.id);n++;const depth=path.length;if(got.decisions.length>depth){for(let k=1;k<got.decisions[depth];k++)queue.push([...path,k]);if(got.decisions.length>depth+1)queue.push([...path,0])}}return n})()""")
  arrival_paths+=result
 print('Scene traversal passed',len(scenes),paths,'arrival paths',arrival_paths,flush=True)
 scheduling=p.eval('''(()=>{const G=FemcGame;G.newGame();G.S.phase='play';G.S.route.frags={R:9,S:9,H:9};G.S.stats={academics:200,charm:200,courage:200};let ranks=0;for(const l of Object.values(G.LINKS).filter(l=>l.kind==='searcher')){G.S.links[l.id]={rank:0,xp:0,seen:[],rankDay:{},push:0,reversed:false};G.S.day=G.dayOf(l.ranks[0].after)-1;G.S.slot=l.home.slot;if(G.linkStatus(l).ok)throw Error('Early introduction '+l.id);for(let r=0;r<10;r++){G.S.links[l.id].rank=r;let found=false;for(let d=Math.max(G.dayOf(l.starts),G.dayOf(l.ranks[r].after));d<=G.dayOf('1/29');d++){G.S.day=d;if(G.linkStatus(l).ok){found=true;break}}if(!found)throw Error('Unreachable rank '+l.id+'/'+r);ranks++}}return ranks})()''')
 names=p.eval('Object.fromEntries('+json.dumps(CAMEOS)+'.map(id=>[id,FemcGame.name(id)]))')
 for cid in CAMEOS:assert names[cid].lower()==cid,(cid,names[cid])
 # Contradictory lodging, invented player quotations and election-result claims must stay absent.
 checks=p.eval('''(()=>{const G=FemcGame;let n=0;const ok=(v,m)=>{n++;if(!v)throw Error(m)};const prose=x=>{let out=[];const walk=x=>{if(Array.isArray(x))x.forEach(walk);else if(x&&typeof x==='object'){if(x.n)out.push(x.n);if(x.t)out.push(x.t);Object.entries(x).filter(([k])=>k!=='n'&&k!=='t').forEach(([,v])=>walk(v))}};walk(x);return out.join('\\n')};
 ok(prose(G.D.events.find(e=>e.id==='a4-lamppost')).includes('a room for Minji at the Kirijo guesthouse'),'Minji guesthouse');ok(prose(G.D.events.find(e=>e.id==='a4-low-tide')).includes('found Yunjin a room upstairs'),'Yunjin dorm');ok(!prose(G.LINKS.jihoon).includes('guesthouse'),'Jihoon lodging');ok(!prose(G.LINKS.cherry).includes('his room at the guesthouse'),'Companion lodging callback');
 ok(!prose(G.D.events.find(e=>e.id==='a4-council-room')).includes('next to the one where Jihoon'),'Arrival lodging');
 ok(!prose(G.LINKS.minji.ranks[0]).includes('hello, are you lost?'),'Invented Minji quotation');
 ok(!prose(G.LINKS.haechan.ranks[0]).includes("She'd said something careful and kind"),'Invented Haechan response');
 ok(!prose(G.LINKS.hanni.ranks[0]).includes("asked if they'd met"),'Invented Hanni response');
 ok(!prose(G.LINKS.jungwon.ranks[1]).includes('Twice. Unopposed'),'Unwritten election outcome');
 ok(!prose(G.LINKS.jungwon.ranks[1]).includes('a Saturday'),'Unavailable Saturday scene');
 for(const id of ['minji','haechan','jaehyun','sunoo','cherry']){const text=prose(G.LINKS[id].ranks[0]);ok(!/Two nights ago|It was two days later|You've only known me one day|last night, small and puzzled|You were here yesterday/.test(text),'Delayed first visit '+id)}return n})()''')
 assets=p.eval('LinkAudit.assetCheck()');assert not assets['missing'],assets
 errors=p.console();assert not errors,errors
 print(json.dumps({'novelSocialLinks':len(CAST),'groupCompanions':names,'sceneCount':len(scenes),'scenePaths':paths,'arrivalChoicePaths':arrival_paths,'reachableRanks':scheduling,'continuityChecks':checks,'unchangedGameplayStructures':structure_checks,'sceneAssets':assets['count'],'browserErrors':errors}))
finally:p.close()
