window.LinkAudit = (() => {
 const G=FemcGame, SC=FemcScene, copy=x=>JSON.parse(JSON.stringify(x));
 const assets=new Set(), covered=new Set(), errors=[], seenFaces=new Set(), seenSil=new Set(), silBad=[];
 // Speakers whose portraits aren't drawn yet (a link's portraitPending, core.js pendingFace): shown by name in the box.
 const pendingNames=()=>new Map(Object.values(G.LINKS).filter(l=>G.pendingFace(l.id)).map(l=>[G.name(l.id),l.id]));
 const checkSil=(el,key)=>{const who=pendingNames().get(el.querySelector('.gs-name')?.textContent||'');if(!who||el.querySelector('.gs-text')?.classList.contains('narration'))return;const sil=el.querySelector('.gs-silhouette'),img=el.querySelector('.gs-portrait');if(sil&&!sil.hidden&&!sil.classList.contains('art')&&img.hidden)seenSil.add(who);else silBad.push(key+': '+who+' without a silhouette');};
 const original=copy(G.S), base=copy(G.S); base.phase='play'; base.started=true;
 G.setSetting('text','instant'); G.setSetting('music',0); G.setSetting('sfx',false); G.setSetting('auto','off');
 const assert=(ok,msg)=>{if(!ok) throw Error(msg)};
 // A rank-15 link's February hangouts (stretchHangouts, 2026-10-21) are played at rank 10 like its afterMax.
 const sceneList=id=>{const l=G.LINKS[id];return [...l.ranks.map((e,i)=>({kind:'rank',i,...e})),...l.hangouts.map((scene,i)=>({kind:'hangout',i,scene,place:G.linkPlace(l)})),...(l.stretchHangouts||[]).map((scene,i)=>({kind:'stretch',i,scene,place:G.linkPlace(l)})),...l.afterMax.map((e,i)=>({kind:'after',i,...e}))]};
 const walk=(a,fn,p='')=>(a||[]).forEach((l,i)=>{const key=p+'/'+i;fn(l,key);walk(l.then,fn,key+'/then');walk(l.else,fn,key+'/else');(l.choose||l.route||[]).forEach((o,j)=>{fn(o,key+'/option'+j,true);walk(o.then,fn,key+'/option'+j)});});
 const reset=(id,e,p)=>{
  Object.keys(G.S).forEach(k=>delete G.S[k]);Object.assign(G.S,copy(base));
  // A link with an arrival story event (storyEvents, e.g. Danielle's a4-light-on) can only be met after it: it has played.
  const arrival=G.LINKS[id]?.storyEvents||[];
  G.S.flags={armband:true,...Object.fromEntries(arrival.length?[['arrived-'+id,true]]:[]),...p.flags};G.S.met=p.met||[];G.S.events=[...new Set([...(p.events||[]),...arrival])];{const v=p.low?0:200;G.S.stats={knowledge:v,courage:v,proficiency:v,charm:v,kindness:v};}
  G.S.day=G.dayOf(p.date||e.after||'1/24');G.S.slot=id==='mark'?'evening':'after';G.S.route.frags={R:9,S:9,H:9};
  G.S.links[id]={rank:p.rank??(e.kind==='rank'?e.i:e.kind==='after'||e.kind==='stretch'?10:5),xp:0,seen:[],rankDay:{},hung:e.i,after:e.i,push:0,reversed:false,route:p.route||'friend'};
  for(const [cid,r] of Object.entries(p.ranks||{}))G.S.links[cid]={rank:r,xp:0,seen:[],rankDay:{},push:0,reversed:false};
  for(const [cid,value] of Object.entries(p.romances||{})){const state=G.S.links[cid]||={rank:8,xp:0,seen:[],rankDay:{},push:0,reversed:false};state.route=value?'romance':'friend';}
  // Crushes (2026-10-23): a track set to a phase its ifCrush names (a growing one with no route on that link yet), and
  // ifCrushed's peak reached or not.
  G.S.crush={t:{},seen:[],lastDay:-99};
  for(const [cid,ph] of Object.entries(p.crush||{})){if(!ph)continue;const peak=['noticed','crush','puppy','almost','dating'].indexOf(ph)+1;G.S.crush.t[cid]={opt:'in',phase:ph,warmth:0,peak,since:{}};
   if(['noticed','crush','puppy','almost'].includes(ph)&&G.S.links[cid])delete G.S.links[cid].route;}
  for(const cid of Object.keys(p.crushed||{})){const t=G.S.crush.t[cid]||={opt:'in',phase:'faded',warmth:0,peak:0,since:{}};t.peak=5;}
 };
 function presets(e,id) {
  const flags=new Set(),written=new Set(),met=new Set(),events=new Set(),romances=new Set(),dates=new Set(),others={},crushes={},crushed=new Set();let rank=false,taken=false,date=false,needs=false,route=false,heading=false;
  walk(e.scene,l=>{[].concat(l.ifFlag||[]).forEach(f=>flags.add(f));[].concat(l.ifMet||[]).forEach(m=>met.add(m));[].concat(l.ifEvent||[]).forEach(ev=>events.add(ev));if(l.ifRank)Object.entries(l.ifRank).forEach(([cid,r])=>{if(cid===id||!id)rank=true;else others[cid]=Math.max(others[cid]||0,r);});if(l.ifRoute)route=true;if(l.ifHeading)heading=true;if(l.ifRomance)romances.add(l.ifRomance);if(l.ifBefore||l.ifAfter){date=true;dates.add(l.ifBefore||l.ifAfter);}if(l.needs)needs=true;
   if(l.ifCrush)Object.entries(l.ifCrush).forEach(([cid,ph])=>{crushes[cid]||=[].concat(ph)[0];});if(l.ifTaken)taken=true;if(l.ifCrushed)Object.keys(l.ifCrushed).forEach(cid=>crushed.add(cid));
   if(l.flag) (typeof l.flag==='string'?[l.flag]:Array.isArray(l.flag)?l.flag:Object.keys(l.flag)).forEach(f=>written.add(f));});
  // These are derived inside the scene from the selected route, never independent player choices.
  ['mark-home','mark-away'].forEach(f=>flags.delete(f));
  const keys=[...flags].filter(f=>!written.has(f));let out=[{flags:{},met:[]}];
  for(const f of keys) out=out.flatMap(p=>[p,{...p,flags:{...p.flags,[f]:true}}]);
  out=out.filter(p=>!(p.flags['route-R']&&p.flags['route-true'])&&!(p.flags['mark-headphones']&&p.flags['mark-too-much'])&&['hyein-dress-run','hyein-dress-pockets','hyein-dress-red'].filter(f=>p.flags[f]).length<=1);
  // Choices that can only ever set one flag of a group (one pick per rank, or one solstice route) never combine.
  const exclusive=[['hanni-msg-ok','hanni-msg-joke','hanni-msg-ily'],['hanni-tag-coffee','hanni-tag-question','hanni-tag-this'],['hanni-knock','hanni-people'],['route-R','route-S','route-H','route-stay','route-true']];
  out=out.filter(p=>exclusive.every(g=>g.filter(f=>p.flags[f]).length<=1));
  // Another link's rank gate (e.g. ifRank akihiko): play it below and at the rank.
  for(const [cid,r] of Object.entries(others))out=out.flatMap(p=>[p,{...p,ranks:{...p.ranks,[cid]:r}}]);
  for(const cid of romances)out=out.flatMap(p=>[{...p,romances:{...p.romances,[cid]:false}},{...p,romances:{...p.romances,[cid]:true}}]);
  if(route)out=out.flatMap(p=>[{...p,route:'friend'},{...p,route:'romance'}]);
  // A scene branched by where the story is heading (ifHeading; ranks 11-15): played on each locked route.
  if(heading)out=out.flatMap(p=>['route-R','route-S','route-H','route-stay','route-true'].map(f=>({...p,flags:{...p.flags,'year-goes-on':true,[f]:true}})));
  if(events.size)out=out.flatMap(p=>[p,{...p,events:[...events]}]);
  if(met.size)out=out.flatMap(p=>[p,{...p,met:[...met]}]);
  if(rank)out=out.flatMap(p=>[{...p,rank:1},{...p,rank:10}]);
  // Each date gate is played on its threshold day and the day before (e.g. ifBefore 12/23 -> 12/22 and 12/23).
  if(date){const ds=[...new Set([...dates].flatMap(t=>[G.mdOf(G.dayOf(t)-1),t]))];out=out.flatMap(p=>ds.map(d=>({...p,date:d})));}
  if(needs)out=out.flatMap(p=>[p,{...p,low:true}]);
  for(const [cid,ph] of Object.entries(crushes))out=out.flatMap(p=>[p,{...p,crush:{...p.crush,[cid]:ph}}]);
  for(const cid of crushed)out=out.flatMap(p=>[p,{...p,crushed:{...p.crushed,[cid]:true}}]);
  // ifTaken (the multi-romance batch, 2026-10-23): she's with someone else, Akihiko (named) or anyone (unnamed).
  if(taken)out=out.flatMap(p=>[p,...['akihiko','rio'].filter(c=>c!==id).map(c=>({...p,romances:{...p.romances,[c]:true}}))]);
  return out;
 }
 function expected(id,e,path,key){let pick=0,notes=0;const text=[],nodes=[];
  const run=(arr,where)=>{for(let i=0;i<(arr||[]).length;i++){const l=arr[i],k=where+'/'+i;
   if(l.choose||l.route){const opts=(l.choose||l.route).map((o,j)=>({o,j})).filter(({o})=>!o.ifFlag||G.flag(o.ifFlag)).filter(({o})=>!o.needs||!G.lacking(o.needs));const requested=path[pick++]??0;const {o,j}=opts[requested<0?opts.length-1:requested];G.applyChoice(o,id);notes+=o.notes||0;nodes.push(k+'/option'+j);const spoken=o.say||(o.t.trim().startsWith('(')?null:o.t);if(spoken)text.push(SC.plain(G.sub(spoken)));run(o.then,k+'/option'+j);continue;}
   const branch=G.branch(l,id);if(branch!==null){run(branch,k+(branch===l.then?'/then':'/else'));continue;}
   if(l.place!==undefined){text.push('—');continue;}
   if(l.phone){l.phone.forEach((m,j)=>{text.push('[text] '+G.sub(m.t));nodes.push(k+'/phone'+j)});continue;}
   if(G.effect(l))continue;
   if(l.n!==undefined||l.t!==undefined){text.push(SC.plain(G.sub(l.n??l.t)));nodes.push(k);}
  }};run(e.scene,key);return {text,notes,nodes,flags:copy(G.S.flags)};
 }
 function play(id,e,path,key){let result,choice=0;const decisions=[],rendered=[];
  const p=SC.play({...e,link:id,onDone:r=>{result=r}}),el=p.el;
  let steps=0;
  while(!result){assert(++steps<1500,'stuck '+key);const buttons=[...el.querySelectorAll('.gs-choices button:not(:disabled)')];
   if(buttons.length){const requested=path[choice++]??0;const n=requested<0?buttons.length-1:requested;assert(n<buttons.length,'bad path');decisions.push(buttons.length);buttons[n].click();continue;}
   const phone=el.querySelector('.gs-phone-thread');
   if(phone){const m=phone.lastElementChild;if(m&&!m.dataset.audit){m.dataset.audit='1';rendered.push('[text] '+m.textContent);}}
   else {const t=el.querySelector('.gs-text').textContent;if(t)rendered.push(t);}
   for(const img of el.querySelectorAll('img:not([hidden])'))if(img.getAttribute('src'))assets.add(img.src);
   const bg=el.querySelector('.gs-bg').style.backgroundImage.match(/url\("?(.*?)"?\)/);if(bg)assets.add(bg[1]);
   const img=el.querySelector('.gs-portrait');if(!phone&&!img.hidden&&img.alt)seenFaces.add(img.alt+' '+img.getAttribute('src'));
   if(!phone)checkSil(el,key);
   el.click();
  }
  el.querySelector('[data-t=log]').click();
  const text=[...el.querySelectorAll('.gs-log-inner p')].map(p=>{const c=p.cloneNode(true);c.querySelector('b')?.remove();return c.textContent});
  el.remove();document.documentElement.classList.remove('g-in-scene');
  return {result,decisions,text,rendered};
 }
 // play(), but it can wait for a summon card's timer (one() and progression use it; other tests keep the sync play).
 async function playA(id,e,path,key){let result,choice=0;const decisions=[],rendered=[];
  const p=SC.play({...e,link:id,onDone:r=>{result=r}}),el=p.el;
  let steps=0;
  while(!result){assert(++steps<1500,'stuck '+key);
   // A summon card ({ summon }) waits for its own timer (instant under reduced motion), then a tap.
   const sm=el.querySelector('.gs-summon:not(.out)');if(sm){const art=sm.querySelector('img');if(art?.getAttribute('src'))assets.add(art.src);if(!sm.classList.contains('ready')){await new Promise(r=>setTimeout(r,20));continue;}sm.click();continue;}
   const buttons=[...el.querySelectorAll('.gs-choices button:not(:disabled)')];
   if(buttons.length){const requested=path[choice++]??0;const n=requested<0?buttons.length-1:requested;assert(n<buttons.length,'bad path');decisions.push(buttons.length);buttons[n].click();continue;}
   const phone=el.querySelector('.gs-phone-thread');
   if(phone){const m=phone.lastElementChild;if(m&&!m.dataset.audit){m.dataset.audit='1';rendered.push('[text] '+m.textContent);}}
   else {const t=el.querySelector('.gs-text').textContent;if(t)rendered.push(t);}
   for(const img of el.querySelectorAll('img:not([hidden])'))if(img.getAttribute('src'))assets.add(img.src);
   const bg=el.querySelector('.gs-bg').style.backgroundImage.match(/url\("?(.*?)"?\)/);if(bg)assets.add(bg[1]);
   const img=el.querySelector('.gs-portrait');if(!phone&&!img.hidden&&img.alt)seenFaces.add(img.alt+' '+img.getAttribute('src'));
   if(!phone)checkSil(el,key);
   el.click();
  }
  el.querySelector('[data-t=log]').click();
  const text=[...el.querySelectorAll('.gs-log-inner p')].map(p=>{const c=p.cloneNode(true);c.querySelector('b')?.remove();return c.textContent});
  el.remove();document.documentElement.classList.remove('g-in-scene');
  return {result,decisions,text,rendered};
 }
 async function one(id,index){const e=sceneList(id)[index],key=id+'/'+e.kind+e.i,configs=presets(e,id);let paths=0,min=Infinity,max=0;
  const staticNodes=[];walk(e.scene,(l,k,option)=>{if(option||l.n!==undefined||l.t!==undefined)staticNodes.push(key+k);if(l.phone)l.phone.forEach((_,j)=>staticNodes.push(key+k+'/phone'+j));});
  for(const preset of configs){const queue=[[]];while(queue.length){const path=queue.shift();reset(id,e,preset);const want=expected(id,e,path,key);reset(id,e,preset);const got=await playA(id,e,path,key);
   assert(got.result.finished,key+' unfinished');assert(got.result.gained===want.notes,key+' notes');
   assert(JSON.stringify(got.text)===JSON.stringify(want.text),key+' log mismatch '+JSON.stringify({path,preset,got:got.text,want:want.text}));
   assert(JSON.stringify(G.S.flags)===JSON.stringify(want.flags),key+' flag mismatch');
   const display=want.text.filter(t=>t!=='—');assert(JSON.stringify(got.rendered)===JSON.stringify(display),key+' display mismatch '+JSON.stringify({path,preset,got:got.rendered,want:display}));
   want.nodes.forEach(n=>covered.add(n));min=Math.min(min,want.notes);max=Math.max(max,want.notes);paths++;
   const depth=path.length;if(got.decisions.length>depth){for(let n=1;n<got.decisions[depth];n++)queue.push([...path,n]);if(got.decisions.length>depth+1)queue.push([...path,0]);}
  }}
  const missing=staticNodes.filter(k=>!covered.has(k));assert(!missing.length,key+' unreachable nodes '+missing.join(','));
  return {key,presets:configs.length,paths,linesAndChoices:staticNodes.length,min,max};
 }
 async function assetCheck(){return {count:assets.size,missing:(await Promise.all([...assets].map(u=>fetch(u,{method:'HEAD'}).then(r=>r.ok?null:u).catch(()=>u)))).filter(Boolean),faces:seenFaces.size};}
 // A speaker whose portraits aren't drawn yet may use only the six expressions tools/femc-portraits.py writes (Kat's sheets:
 // neutral, happy, sad, angry → serious, surprised, embarrassed → flustered), so every face resolves once the files exist.
 const SIX=['neutral','happy','sad','serious','surprised','flustered'];
 function faces(ids=['hyein','mark']){const bad=[];for(const id of ids)for(const e of sceneList(id))walk(e.scene,l=>{if(l.s&&l.f&&!(G.pendingFace(l.s)?SIX:(FEMC_PORTRAITS[l.s]||[])).includes(l.f))bad.push(l.s+'/'+l.f);});return bad;}
 const silhouettes=()=>({seen:[...seenSil],bad:silBad.slice(0,8)});
 return {one,sceneList,assetCheck,faces,silhouettes,reset,play,playA,expected,original,base};
})();
LinkAudit.progression = async (id,low=false,requireAll=true) => {
 const G=FemcGame, A=LinkAudit,L=G.LINKS[id], trace=[];
 A.reset(id,A.sceneList(id)[0],{flags:{'year-goes-on':true,'route-R':true},rank:0});
 for(let day=G.dayOf(L.starts);day<=G.dayOf('1/29');day++){
  G.S.day=day;G.S.slot=L.home.slot;
  if(G.dueEvent(G.S.slot)?.kind==='event'||!G.linkStatus(L).ok)continue;
  const e=G.linkScene(L), state=JSON.stringify(G.S);
  // Replay actual calendar-selected scenes with the player's existing flags, then apply their actual bond result.
  const path=low?Array(12).fill(-1):[];
  // The last enabled option exercises lower-scoring answers and subsequent hangouts.
  const want=A.expected(id,e,path,'progress');
  Object.keys(G.S).forEach(k=>delete G.S[k]);Object.assign(G.S,JSON.parse(state));
  const got=await A.playA(id,e,path,'progress');
  if(!got.result.finished||got.result.gained!==want.notes)throw Error('progress result');
  const result=G.finishLink(L,e.kind,e.r,got.result.gained);
  trace.push({date:G.mdOf(day),kind:e.kind,rank:result.rank??G.S.links[id].rank,after:G.S.links[id].after||0});
  if((G.S.links[id].after||0)>=L.afterMax.length)break;
 }
 if(G.S.links[id].rank!==10)throw Error(id+' cannot reach MAX '+JSON.stringify(trace));
 if(!low&&requireAll&&(G.S.links[id].after||0)<L.afterMax.length)throw Error(id+' not enough post-MAX days '+JSON.stringify(trace));
 const saved=JSON.stringify(G.S.links[id]);G.saveSlot(3);G.S.links[id].rank=0;G.loadSlot(3);
 if(JSON.stringify(G.S.links[id])!==saved)throw Error('slot did not restore link progress');
 return {id,low,trace,saveRoundTrip:true};
};
LinkAudit.gates = id => {
 const G=FemcGame,L=G.LINKS[id],A=LinkAudit;let checks=0;
 const assert=(v,m)=>{checks++;if(!v)throw Error(id+' '+m);};
 const world=Object.keys(L.gate||{R:0})[0];const probe=(day,slot,frags,rank=0)=>{A.reset(id,A.sceneList(id)[0],{flags:{},rank});G.S.day=day;G.S.slot=slot;G.S.route.frags[world]=frags;return G.linkStatus(L)};
 assert(probe(G.dayOf(L.starts)-1,L.home.slot,9).reason==='away','before start');
 // Visitors and the Persona cast have no fragment gate.
 if(L.gate)assert(probe(G.dayOf(L.starts)+10,L.home.slot,L.gate[world]-1).reason==='away','fragment gate');
 // A closed link that comes back (Shinjiro: closes 10/4, stretch.from 2/1) has another home from stretch.from, and a rank may
 // keep its own slot (rank.slot); nothing is available between closes and stretch.from.
 // Breaks too (summerHome / winterHome, e.g. Akihiko's rank 6 on the dorm roof in August): core.js homeOf is the truth.
 const homeAt=day=>G.homeOf?G.homeOf(L,day):(L.stretch&&day>=G.dayOf(L.stretch.from))?L.stretch.home:L.home;
 const closedOn=day=>!!(L.closes&&day>=G.dayOf(L.closes)&&!(L.stretch&&day>=G.dayOf(L.stretch.from)));
 for(let r=0;r<G.maxOf(L);r++){
  const earliest=G.dayOf(L.ranks[r].after),H=homeAt(earliest),slot=L.ranks[r].slot||H.slot;
  // Ranks 11+ (maxRank 15): the day before the next rank's date, time together is afterMax (no rank scene yet),
  // unless the link is closed that day (then it's simply away).
  // A holiday closes a school home (Akihiko's boxing club on 2/11): he's elsewhere, so step past it.
  const shut=(day,rr)=>probe(day,homeAt(day).slot,9,rr).reason==='elsewhere';
  if(r>=10){let pd=earliest-1;while(!homeAt(pd).days.includes(G.dayInfo(pd).dow)||shut(pd,r))pd--;
   if(closedOn(pd))assert(!probe(pd,homeAt(pd).slot,9,r).ok,'closed before rank date '+r);
   // A link that left at rank 10 and came back on a stretch (core.js linkStatus) is hidden while its next rank isn't open.
   else if(L.stretch&&G.leavesAtMax(L)){const st=probe(pd,homeAt(pd).slot,9,r);assert(!st.ok&&st.reason==='max','hidden before rank date '+r);}
   else{const st=probe(pd,homeAt(pd).slot,9,r);assert(st.ok&&st.after&&G.linkScene(L).kind==='after','afterMax before rank date '+r);}}
  // A story rank (L.forced) isn't on the map before its date: time with him there is a hangout (Haechan).
  else if(!(L.forced&&L.forced.includes(r+1)))assert(!probe(earliest-1,slot,9,r).ok,'rank date '+r);
  let d=earliest;while(!H.days.includes(G.dayInfo(d).dow)||(!(L.forced&&L.forced.includes(r+1))&&shut(d,r)))d++;
  // A story rank (L.forced, e.g. Shinjiro's 15) plays on its date through dueEvent, not from the map.
  if(L.forced&&L.forced.includes(r+1)){assert(probe(d,slot,9,r).reason==='story','story rank on its date '+r);continue;}
  assert(probe(d,slot,9,r).ok&&!G.linkStatus(L).after,'rank available '+r);
  assert(!probe(d,slot==='after'?'evening':'after',9,r).ok,'wrong slot '+r);
  probe(d,slot,9,r);G.S.spent[d+'-'+slot]=id;
  assert(G.linkStatus(L).reason==='spent','spent slot '+r);
 }
 // A link that closes (Shinjiro, 10/4) leaves at MAX by design; every other link stays.
 if(!L.closes)assert(!G.leavesAtMax(L),'stays after MAX');
 A.reset(id,A.sceneList(id)[0],{flags:{},rank:10});
 // afterMax entries gated by flags / noFlags (a rank-15 link's, e.g. after its rank 15) rotate within the ones that apply.
 const rotation=[],list=G.afterList?G.afterList(L):L.afterMax;for(let n=0;n<=list.length;n++){G.S.links[id].after=n;rotation.push(G.linkScene(L).scene===list[n%list.length].scene)};
 assert(rotation.every(Boolean),'post-MAX rotation');
 if(id==='mark'){
  G.S.events=[];G.S.flags['door-R6']=true;const line=L.ranks[0].scene.find(l=>l.ifEvent);
  assert(G.branch(line,id)===line.else,'late-open door must not invent meeting');
  G.S.events=['a4-mark'];assert(G.branch(line,id)===line.then,'played event must be remembered');
  G.saveSlot(2);G.S.events=[];G.loadSlot(2);assert(G.branch(line,id)===line.then,'meeting retained in save');
 }
 return {id,checks};
};
