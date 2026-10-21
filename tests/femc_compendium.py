"""Read-only shared Compendium unlock checks and selected full-body profile loading checks."""
import json,pathlib,base64,tempfile,argparse
from femc_browser import Page
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=pathlib.Path(tempfile.mkdtemp(prefix='femc-compendium-'))
parser=argparse.ArgumentParser();parser.add_argument('--ids',default='hanni,hyein,mark,jihoon,minji');IDS=parser.parse_args().ids.split(',')
p=Page()
try:
 p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1280,'height':800,'deviceScaleFactor':1,'mobile':False})
 p.goto('femc-game.html')
 p.eval('localStorage.setItem("kg-femc","on");localStorage.setItem("kg-femc-game",JSON.stringify({met:["akihiko"],past:{met:["haechan"],registered:["yukari"]},sentinel:"keep-v1"}));localStorage.setItem("kg-femc-revamp",JSON.stringify({met:'+json.dumps(IDS)+',registered:'+json.dumps(IDS)+',sentinel:"keep-revamp"}));localStorage.setItem("kg-femc-revamp-slot1",JSON.stringify({met:["slot-only"],sentinel:"keep-slot"}));window.saveBefore=Object.fromEntries(["kg-femc-game","kg-femc-revamp","kg-femc-revamp-slot1"].map(k=>[k,localStorage.getItem(k)]));sessionStorage.setItem("compendium-test-saves",JSON.stringify(saveBefore))')
 p.ws.call('Page.navigate',{'url':f'http://127.0.0.1:{p.srv.server_port}/compendium.html'})
 p.wait("!!window.FEMC_COMPENDIUM && !document.getElementById('open').hidden && document.querySelectorAll('#list button').length>0")
 cases=p.eval('''(()=>{const key='kg-femc-revamp',saved=localStorage.getItem(key),ids='''+json.dumps(IDS)+''',check=(unlock)=>femcCompendiumOpen({unlock}),own=id=>FEMC_COMPENDIUM.find(e=>e.id===id).unlock;let n=0;function ok(x){n++;if(!x)throw Error('Unlock case '+n)}
 ok(check('met:akihiko'));ok(check('met:haechan'));ok(check('reg:yukari'));ok(check('always'));ok(!check('met:slot-only'));
 for(const id of ids)ok(check(own(id)));
 localStorage.setItem(key,JSON.stringify({met:[],registered:ids,ngp:1}));for(const id of ids)ok(check(own(id)));
 localStorage.setItem(key,JSON.stringify({met:[],registered:[]}));for(const id of ids)ok(!check(own(id)));
 localStorage.setItem(key,'{corrupt');ok(!check('met:hanni'));ok(check('met:akihiko'));
 localStorage.setItem(key,JSON.stringify({met:'not-an-array',registered:123}));ok(!check('met:hanni'));
 localStorage.setItem(key,saved);return n})()''')
 for cid in IDS:
  p.eval('(()=>{const e=FEMC_COMPENDIUM.find(e=>e.id==='+json.dumps(cid)+');if(!e?.profile||(e.unlock.startsWith("met:")&&!e.secret))throw Error("Bad profile metadata");const b=[...document.querySelectorAll("#list button")].find(b=>b.querySelector("b").textContent===e.name);if(!b)throw Error("Entry not visible");b.click()})()')
  p.wait("document.querySelector('#card img').complete && document.querySelector('#card img').naturalWidth>0")
  # Searchers' art is in profile/searchers/, S.E.E.S. members' New Adds art in profile/sees/.
  assert p.eval('/\\/profile\\/(searchers|sees)\\/'+cid+'\\.webp/.test(document.querySelector("#card img").src) && getComputedStyle(document.querySelector("#card img")).objectFit==="contain"')
  assert p.eval("document.querySelector('#card img').getBoundingClientRect().height<=620")
  assert p.eval('document.querySelector("#card h2").textContent===FEMC_COMPENDIUM.find(e=>e.id==='+json.dumps(cid)+').name')
  assert p.eval('(document.querySelector("#card a")?.getAttribute("href")||undefined)===FEMC_COMPENDIUM.find(e=>e.id==='+json.dumps(cid)+').link')
  if cid==IDS[0]:
   for name,w,h in [('desktop',1280,800),('phone',390,844)]:
    p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='phone'});p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,350)))');
    if name=='phone':p.eval("document.querySelector('#card').scrollIntoView({block:'start'})")
    assert p.eval('document.documentElement.scrollWidth<=innerWidth');shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
   p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1280,'height':800,'deviceScaleFactor':1,'mobile':False})
 assert p.eval('Object.entries(JSON.parse(sessionStorage.getItem("compendium-test-saves"))).every(([k,v])=>localStorage.getItem(k)===v)')
 # A fresh run must not expose the selected secret names or their descriptions in the page.
 p.eval('localStorage.setItem("kg-femc-revamp",JSON.stringify({met:[],registered:[]}))')
 p.ws.call('Page.reload',{'ignoreCache':True})
 p.wait("!!window.FEMC_COMPENDIUM && !document.getElementById('open').hidden && document.querySelectorAll('#list button').length>0")
 assert p.eval('('+json.dumps(IDS)+').every(id=>{const e=FEMC_COMPENDIUM.find(e=>e.id===id);return !e.secret||!document.querySelector("#open").textContent.includes(e.name)})')
 # Entries that aren't secret still keep their art dark and their notes hidden until registered.
 for cid in IDS:
  if p.eval('!!FEMC_COMPENDIUM.find(e=>e.id==='+json.dumps(cid)+').secret'):continue
  p.eval('(()=>{const e=FEMC_COMPENDIUM.find(e=>e.id==='+json.dumps(cid)+');const b=[...document.querySelectorAll("#list button")][FEMC_COMPENDIUM.filter(x=>!x.secret||femcCompendiumOpen(x)).indexOf(e)];b.click()})()')
  assert p.eval('document.querySelector("#card").classList.contains("locked") && document.querySelector("#card h2").textContent==="???" && !document.querySelector("#card").textContent.includes(FEMC_COMPENDIUM.find(e=>e.id==='+json.dumps(cid)+').note)')
 p.eval('Object.entries(JSON.parse(sessionStorage.getItem("compendium-test-saves"))).forEach(([k,v])=>localStorage.setItem(k,v))')
 errors=p.console();assert not errors,errors
 result={'unlockChecks':cases,'profilesLoaded':len(IDS),'undiscoveredEntriesHidden':True,'gameSavesUnchanged':True,'browserErrors':errors,'screenshots':str(OUT)}
 (OUT/'results.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result))
finally:p.close()
