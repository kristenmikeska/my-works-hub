"""Check phone recency and reversible activity previews in an isolated browser."""
import base64,json,pathlib,tempfile
from femc_browser import Page
OUT=pathlib.Path(tempfile.mkdtemp(prefix='femc-phone-activities-'))
p=Page()
try:
 p.goto('femc-game.html');p.eval("FemcGame.newGame();FemcGame.setSetting('text','instant');FemcGame.S.phase='play';FemcGame.S.day=FemcGame.dayOf('4/8');FemcGame.S.slot='evening';FemcGame.S.phone={threads:{yukari:[{from:'yukari',t:'old',d:0}],junpei:[{from:'junpei',t:'recent',d:1}],akihiko:[{from:'akihiko',t:'oldest',d:0}]},unread:{},done:[],pending:{},invite:null,lastInvite:99};FemcGame.save();FemcGameUI.openPhone()")
 assert p.eval("document.querySelector('.g-ph-row').dataset.th==='junpei'")
 p.eval("document.querySelector('.g-ph-top [data-close]').click();FemcGame.deliverTexts();FemcGameUI.openPhone()")
 assert p.eval("document.querySelector('.g-phone-ov:not(.out) .g-ph-row').dataset.th==='yukari'")
 p.eval("document.querySelector('.g-phone-ov:not(.out) [data-th=yukari]').click();window.seqBefore=FemcGame.S.phone.sequence;document.querySelector('.g-phone-ov:not(.out) .g-ph-reply button').click();document.querySelector('.g-phone-ov:not(.out) .g-ph-back').click()")
 assert p.eval("document.querySelector('.g-phone-ov:not(.out) .g-ph-row').dataset.th==='yukari' && FemcGame.S.phone.sequence>seqBefore && !FemcGame.S.phone.unread.yukari")
 # Invitation replies must also move an existing conversation to the top on the same day.
 p.eval("FemcGame.S.phone.invite={link:'akihiko',d:FemcGame.S.day,slot:FemcGame.S.slot};FemcGame.answerInvite(false);document.querySelector('.g-phone-ov:not(.out) [data-close]').click();FemcGameUI.openPhone()")
 assert p.eval("document.querySelector('.g-phone-ov:not(.out) .g-ph-row').dataset.th==='akihiko'")
 assert p.eval("JSON.parse(localStorage.getItem('kg-femc-revamp')).phone.sequence===FemcGame.S.phone.sequence")
 p.eval("document.querySelector('.g-phone-ov:not(.out) [data-close]').click();FemcGame.S.day=FemcGame.dayOf('4/25');FemcGame.S.slot='after';FemcGame.S.yen=10000;FemcGame.S.condition='great';FemcGame.S.spent={};FemcGameUI.goOut('after','mall')")
 # All activity types have descriptions; values match existing condition rounding.
 details=p.eval("FemcGame.D.places.activities.map(a=>({id:a.id,...FemcGame.activityInfo(a)}))")
 assert all(d['benefit'] and d['cost'] and d['time'] for d in details),details
 assert p.eval("FemcGame.activityInfo(FemcGame.D.places.activities.find(a=>a.id==='chagall')).benefit.includes('Charm +3')")
 assert p.eval("FemcGame.activityInfo(FemcGame.D.places.activities.find(a=>a.id==='cinema')).benefit.startsWith('Now showing: ')")
 assert p.eval("FemcGame.activityInfo(FemcGame.D.places.activities.find(a=>a.id==='fortune')).benefit.includes('random fortune')")
 assert p.eval("FemcGame.activityInfo(FemcGame.D.places.activities.find(a=>a.id==='clinic')).benefit.includes('Tired or Sick')")
 p.eval("window.beforePreview=JSON.stringify({yen:FemcGame.S.yen,stats:FemcGame.S.stats,spent:FemcGame.S.spent});document.querySelector('[data-act=chagall]').click()")
 assert p.eval("JSON.stringify({yen:FemcGame.S.yen,stats:FemcGame.S.stats,spent:FemcGame.S.spent})===beforePreview")
 assert p.eval("document.querySelector('.g-activity-preview:not(.out)').textContent.includes('Costs ¥600')")
 # Review a desktop/phone pair of the actual confirmation.
 for name,w,h in [('desktop',1280,800),('phone',390,844)]:
  p.ws.call('Emulation.setDeviceMetricsOverride',{'width':w,'height':h,'deviceScaleFactor':1,'mobile':name=='phone'});p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))')
  assert p.eval('document.documentElement.scrollWidth<=innerWidth')
  shot=p.ws.call('Page.captureScreenshot',{'format':'png'});(OUT/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
 p.eval("document.querySelector('.g-activity-preview:not(.out) [data-close]').click()")
 assert p.eval("JSON.stringify({yen:FemcGame.S.yen,stats:FemcGame.S.stats,spent:FemcGame.S.spent})===beforePreview")
 # Shop browsing is free and consumes no time.
 p.eval("document.querySelector('[data-act=police]').click();document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click()")
 assert p.eval("JSON.stringify({yen:FemcGame.S.yen,stats:FemcGame.S.stats,spent:FemcGame.S.spent})===beforePreview")
 p.eval("document.querySelector('.g-overlay:not(.out) [data-close]').click();FemcGame.hire(FemcGame.D.jobs.find(j=>j.id==='bookworms'));FemcGameUI.goOut('after','strip');window.beforeJob=JSON.stringify({yen:FemcGame.S.yen,stats:FemcGame.S.stats,spent:FemcGame.S.spent,jobs:FemcGame.S.jobs});document.querySelector('[data-job=bookworms]').click()")
 assert p.eval("document.querySelector('.g-activity-preview:not(.out)').textContent.includes('Earn ¥1,800') && document.querySelector('.g-activity-preview:not(.out)').textContent.includes('Knowledge +2, Proficiency +2')")
 p.eval("document.querySelector('.g-activity-preview:not(.out) [data-close]').click()")
 assert p.eval("JSON.stringify({yen:FemcGame.S.yen,stats:FemcGame.S.stats,spent:FemcGame.S.spent,jobs:FemcGame.S.jobs})===beforeJob")
 p.eval("FemcGameUI.goOut('after','mall');document.querySelector('[data-act=chagall]').click();document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click()")
 assert p.eval("FemcGame.S.yen===9400 && FemcGame.S.stats.charm===3 && FemcGame.S.spent[FemcGame.S.day+'-after']==='act:chagall'")
 # Weather-specific preview and committed gain must agree.
 weather=p.eval("(()=>{const G=FemcGame;const day=Array.from({length:90},(_,i)=>i+1).find(d=>G.weather(d)==='rain');G.S.day=day;G.S.slot='after';G.S.condition='good';G.S.spent={};const a=G.D.places.activities.find(a=>a.id==='hagakure'),preview=G.activityInfo(a);const before=G.S.stats.knowledge;G.doActivity(a);return {preview,gain:G.S.stats.knowledge-before}})()")
 assert weather['gain']==4 and 'Knowledge +4' in weather['preview']['benefit'],weather
 errors=p.console();assert not errors,errors
 print(json.dumps({'phoneRecencyCases':4,'activityDescriptions':len(details),'previewAndCancelPreserveState':True,'confirmedCostAndGainsChecked':True,'shopDoesNotSpendTime':True,'jobPreviewAndCancelChecked':True,'rainBonusChecked':True,'browserErrors':errors,'screenshots':str(OUT)}))
finally:p.close()
