"""Weather, P5-style (2026-10-23): the calendar, the overlays, the sound, the settings, the forecast, the world's reactions,
the festival and rain art, and the portrait wiring fixes from the same batch.

  python3 tests/femc_weather.py [--screenshots /absolute/dir]

calendar   a deterministic year: fixed dates kept (10/30 storm, 10/31 rain, 12/24-25 snow…), a wet rainy season in June,
           snow only in winter, storms in typhoon season, weather in spells, every level used and named.
overlays   field and scene backdrops on rain, storm and snow days show the overlay (outdoors falling, indoors on the glass,
           sealed rooms nothing); clear days, the Dark Hour, the Velvet Room, CGs and replays show none; frames run;
           Performance mode thins it; lightning flashes (soft with Reduce flashes, none with reduced motion).
settings   Weather effects and Weather sound rows in the real panel; off hides it; sound starts only after a gesture,
           follows Weather sound, Sound effects and the place (muffled indoors), and stops in a battle.
forecast   five days from today in the phone (today first, levels, the spell), the date box's icon opens it.
world      weather lines in the commute, lunch, home and bedtime through the real UI; the rainy-day sale, closures and
           bonuses; the umbrella-type crush moment goes first on its weather.
art        the festival hallway on its sunny prep days and not in the festival's storm and rain; the Strip in the rain.
portraits  camelCase speaker ids find lowercase portrait folders; the split shared ids each have their own cast name;
           a teacher's face shows in a class question once it exists.
Screenshots of rain, storm and snow scenes and the forecast. Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-weather-'))
OUT.mkdir(parents=True, exist_ok=True)
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


p = Page()


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})


def shot(name):
    p.eval('new Promise(r=>setTimeout(r,500))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def click_at(x=5, y=5):
    for t in ('mousePressed', 'mouseReleased'):
        p.ws.call('Input.dispatchMouseEvent', {'type': t, 'x': x, 'y': y, 'button': 'left', 'buttons': 1 if t == 'mousePressed' else 0, 'clickCount': 1})


HELPERS = r"""
window.WX = (() => {
  const G = FemcGame, W = FemcWeather;
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('auto', 'off'); G.setSetting('dateCard', false);
  G.newGame();
  const base = JSON.parse(JSON.stringify(G.S));
  // A quiet day at `md`: every story event played, routines / run-ins / crush moments / late nights out of the way.
  function at(md, slot = 'early') {
    document.querySelectorAll('.gs,.g-overlay').forEach(x => x.remove());
    document.documentElement.classList.remove('g-in-scene');
    const S = G.S;
    Object.assign(S, JSON.parse(JSON.stringify(base)));
    S.phase = 'play'; S.started = true; S.flags = { armband: true }; S.day = G.dayOf(md); S.slot = slot;
    S.events = G.D.events.map(e => e.id);
    S.dailyLife = { seen: G.D.dailyLife.map(e => e.id), lastDay: 999 }; S.runIns = { seen: G.D.runIns.map(e => e.id), lastDay: 999, later: [] };
    S.lateNights = { seen: [], lastDay: 999 }; S.crush = { t: {}, seen: (G.D.crush.moments || []).map(m => m.id), lastDay: 999 };
    S.holidays = {}; S.holiday = null; S.spent = {};
    return S;
  }
  const dayWith = (pred, from = '4/9', to = '3/4') => { for (let d = G.dayOf(from); d <= G.dayOf(to); d++) if (pred(G.wx(d), G.dayInfo(d))) return G.mdOf(d); return null; };
  const scene = (place, time, extra = []) => new Promise(r => { FemcScene.play({ scene: [...extra, { n: 'Weather check.' }, { n: 'Second line.' }], place, time, onDone: () => r(true) }); setTimeout(r, 50); });
  return { at, dayWith, scene, st: () => W.state() };
})();
true"""


try:
    size(1000, 486)
    p.ws.call('Page.addScriptToEvaluateOnNewDocument', {'source': "window.__audioCtx=0;const _AC=window.AudioContext;window.AudioContext=class extends _AC{constructor(...a){super(...a);window.__audioCtx++}}"})
    p.goto('femc-game.html')
    p.eval(HELPERS)

    # ── calendar ──
    cal = p.eval(r"""(()=>{const G=FemcGame,L=G.END(),out={months:{},levels:{},runs:0,fixed:{},again:true,names:{}};
      for(let d=0;d<=L;d++){const w=G.wx(d),m=G.dateOf(d).getMonth()+1;const o=out.months[m]||={n:0,wet:0,snow:0,storm:0};o.n++;if(w.wet)o.wet++;if(w.kind==='snow')o.snow++;if(w.kind==='storm')o.storm++;
        out.levels[w.level]=(out.levels[w.level]||0)+1;out.names[w.level]=w.name;if(d&&w.kind!=='clear'&&G.wx(d-1).kind===w.kind)out.runs++;if(JSON.stringify(G.wx(d))!==JSON.stringify(G.wx(d)))out.again=false}
      for(const md of ['4/6','4/7','4/8','10/28','10/29','10/30','10/31','12/24','12/25','3/3','3/5','3/6','3/7','7/21','7/22','7/23','8/16'])out.fixed[md]=G.wx(G.dayOf(md)).kind+'/'+G.wx(G.dayOf(md)).level;
      const june=[];for(let d=G.dayOf('6/6');d<=G.dayOf('7/14');d++)june.push(G.wx(d).wet);out.rainySeason=june.filter(Boolean).length/june.length;
      out.spell=G.wx(G.dayOf('6/20')).spell;return out})()""")
    F = cal['fixed']
    ok(F['10/30'] == 'storm/storm' and F['10/31'].startswith('rain/') and F['12/24'] == 'snow/light' and F['12/25'] == 'snow/heavy' and F['3/6'] == 'snow/heavy' and F['3/3'] == 'snow/light', f'fixed dates kept: {F}')
    ok(all(F[k] == 'clear/clear' for k in ['4/6', '4/7', '4/8', '3/7', '7/21', '7/22', '7/23', '8/16', '10/28', '10/29', '3/5']), f'clear fixed days: {F}')
    ok(cal['again'], 'weather is deterministic')
    M = cal['months']
    ok(cal['rainySeason'] >= 0.45 and cal['spell'] == 'Rainy season', f"the rainy season is wet: {cal['rainySeason']:.2f}")
    ok(all(M[str(m)]['snow'] == 0 for m in range(4, 12)) and sum(M[str(m)]['snow'] for m in (12, 1, 2, 3)) >= 8, f'snow only in winter: {M}')
    ok(sum(M[str(m)]['storm'] for m in (8, 9, 10)) >= 2, f'storms in typhoon season: {M}')
    ok(cal['runs'] >= 30, f"weather comes in spells: {cal['runs']} repeats")
    ok(all(cal['levels'].get(k) for k in ['clear', 'overcast', 'fog', 'drizzle', 'rain', 'storm', 'light', 'heavy']), f"every level occurs: {cal['levels']}")
    ok(cal['names']['heavy'] == 'Heavy snow' and cal['names']['drizzle'] == 'Drizzle', f"names: {cal['names']}")

    # ── overlays ──
    md = {k: p.eval(f"WX.dayWith(w=>w.level==='{k}')") for k in ['clear', 'drizzle', 'rain', 'storm', 'light', 'heavy', 'fog', 'overcast']}
    md['schoolrain'] = p.eval("WX.dayWith((w,i)=>w.level==='rain'&&i.type==='school')")
    ok(all(md.values()), f'a day for every level: {md}')
    res = {}
    for lv in ['clear', 'rain', 'light', 'heavy', 'fog', 'drizzle']:
        p.eval(f"WX.at('{md[lv]}','after');FemcGameUI.run();true")
        p.eval("new Promise(r=>setTimeout(r,250))")
        p.eval("document.querySelectorAll('.gs').forEach(x=>x.remove());FemcWeather.field('park',document.querySelector('.g-stage'));true")
        p.eval("new Promise(r=>setTimeout(r,300))")
        res[lv] = p.eval('WX.st()')
    ok(not res['clear']['shown'], f"no overlay on a clear day: {res['clear']}")
    ok(all(res[k]['shown'] and res[k]['where'] == 'out' and res[k]['drops'] > 20 and res[k]['level'] == k for k in ['rain', 'light', 'heavy', 'drizzle']), f'rain and snow fall outdoors: {res}')
    ok(res['heavy']['drops'] > res['light']['drops'] and res['fog']['shown'] and res['fog']['drops'] == 0, 'heavy snow is heavier; fog is a layer')
    ok(res['rain']['frames'] > 2, 'the rain animates')
    p.eval(f"WX.at('{md['rain']}','after');FemcWeather.field('gekkoukan-classroom-day',document.querySelector('.g-stage'));true")
    inside = p.eval('WX.st()')
    p.eval("FemcWeather.field('paulownia-karaoke',document.querySelector('.g-stage'));true")
    sealed = p.eval('WX.st()')
    ok(inside['where'] == 'in' and inside['shown'] and 0 < inside['drops'] < 30 and sealed['where'] == 'sealed' and not sealed['shown'], f'indoors: drops on the glass; sealed rooms: none: {inside} {sealed}')
    kinds = p.eval("(()=>{const W=FemcWeather;const r={};for(const s of ['iwatodai-strip-rain','gekkoukanhigh-winter','naganaki-shrine-night','solar-dormroom-night','hagakure-ramen','tartarus-lobby','darkhour-iwatodai-street','velvetroom-elevator','flashback-yeobos-cafe'])r[s]=W.placeKind(s);return r})()")
    ok(kinds == {'iwatodai-strip-rain': 'out', 'gekkoukanhigh-winter': 'out', 'naganaki-shrine-night': 'out', 'solar-dormroom-night': 'in', 'hagakure-ramen': 'sealed', 'tartarus-lobby': 'none', 'darkhour-iwatodai-street': 'none', 'velvetroom-elevator': 'none', 'flashback-yeobos-cafe': 'in'}, f'indoor/outdoor by background: {kinds}')
    # Scenes: outdoors in the rain; the Dark Hour, the Velvet Room, a CG and a replay show none.
    p.eval(f"WX.at('{md['storm']}','after');WX.scene('Iwatodai Strip','After School')")
    sc = p.eval('WX.st()')
    ok(sc['shown'] and sc['level'] == 'storm' and sc['host'].startswith('gs') and sc['where'] == 'out', f'a scene outdoors in a storm: {sc}')
    p.eval("FemcWeather.flash();true"); fl = p.eval('WX.st()')
    ok(fl['flashes'] >= 1 and 'on' in fl['flashing'], f'lightning flashes: {fl}')
    p.eval("FemcGame.setSetting('calm',true);FemcWeather.flash();true"); soft = p.eval('WX.st()')
    ok('soft' in soft['flashing'], f'Reduce flashes: a soft brightening: {soft}')
    p.eval("FemcGame.setSetting('calm',false);true")
    size(1000, 486); shot('storm-scene')
    p.eval("document.querySelectorAll('.gs').forEach(x=>x.remove());true")
    for place, time_ in [('Iwatodai Strip · The Dark Hour', 'The Dark Hour'), ('The Velvet Room', ''), ('Tartarus · Lobby', 'The Dark Hour')]:
        p.eval(f"WX.scene({json.dumps(place)},{json.dumps(time_)})")
        st = p.eval('WX.st()')
        ok(not st['shown'], f'no weather in {place}: {st}')
        p.eval("document.querySelectorAll('.gs').forEach(x=>x.remove());true")
    p.eval("WX.scene('Iwatodai Strip','After School',[{cg:'story-graduation'}])")
    ok(not p.eval('WX.st()')['shown'], 'no weather over a CG')
    p.eval("document.querySelectorAll('.gs').forEach(x=>x.remove());FemcScene.play({scene:[{n:'Replay.'}],place:'Iwatodai Strip',time:'After School',replay:true});true")
    ok(not p.eval('WX.st()')['shown'], 'no weather in a Theater replay')
    p.eval("document.querySelectorAll('.gs').forEach(x=>x.remove());true")
    # Screenshots: rain and snow scenes (outdoors), rain indoors, a phone-sized snow scene.
    for lv, place, time_ in [('rain', 'Iwatodai Strip', 'After School'), ('heavy', 'Gekkoukan High · Front Gate', 'Morning'), ('rain', "Iwatodai Dorm · Solar's Room", 'Evening')]:
        p.eval(f"WX.at('{md[lv]}','after');WX.scene({json.dumps(place)},{json.dumps(time_)})")
        shot(f"{lv}-{place.split(' ')[0].lower()}-{'in' if 'Room' in place else 'out'}")
        p.eval("document.querySelectorAll('.gs').forEach(x=>x.remove());true")
    size(375, 812, True)
    p.eval(f"WX.at('{md['light']}','after');WX.scene('Naganaki Shrine','After School')")
    shot('snow-scene-phone')
    p.eval("document.querySelectorAll('.gs').forEach(x=>x.remove());true")
    size(1000, 486)
    # Performance mode thins it out; leaving a scene goes back to the field's backdrop.
    p.eval(f"WX.at('{md['rain']}','after');FemcWeather.field('park',document.querySelector('.g-stage'));true")
    full = p.eval('WX.st()')['drops']
    p.eval("FemcGame.setSetting('perf',true);FemcWeather.refresh();true"); thin = p.eval('WX.st()')['drops']
    p.eval("FemcGame.setSetting('perf',false);FemcWeather.refresh();true")
    ok(0 < thin < full, f'Performance mode: fewer drops ({thin} < {full})')

    # ── settings ──
    p.eval("FemcGameUI.openSettings();true")
    rows = p.eval("['wxFx','wxSound'].map(k=>!!document.querySelector(`.g-settings [data-k=${k}]`))")
    ok(rows == [True, True], 'Weather effects and Weather sound rows in the settings panel')
    p.eval("document.querySelector('.g-settings [data-k=wxFx] [data-d=\"1\"]').click();true")
    ok(p.eval("FemcGame.settings().wxFx") is False and not p.eval('WX.st()')['shown'], 'Weather effects off hides the overlay')
    p.eval("document.querySelector('.g-settings [data-k=wxFx] [data-d=\"1\"]').click();true")
    ok(p.eval("FemcGame.settings().wxFx") is True and p.eval('WX.st()')['shown'], 'and on shows it again')
    ok(p.eval("JSON.parse(localStorage.getItem('kg-femc-revamp-settings')).wxFx") is True, 'the setting is saved')
    p.eval("document.querySelector('.g-settings [data-close]').click();true")
    # Sound: nothing before a gesture; a click starts it; Weather sound 0, Sound effects off and a battle stop it.
    p.eval("FemcGame.setSetting('sfx',true);FemcGame.setSetting('wxSound',60);FemcWeather.refresh();true")
    ok(p.eval('WX.st().audio.ctx') is False and p.eval('window.__audioCtx') == 0, 'no audio before the first click')
    click_at(990, 470)
    p.eval("new Promise(r=>setTimeout(r,200))")
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcWeather.field('park',document.querySelector('.g-stage'));true")
    a1 = p.eval('WX.st().audio')
    ok(a1['ctx'] and a1['on'] and a1['key'].endswith('|out'), f'a click starts the rain sound: {a1}')
    p.eval("FemcWeather.field('gekkoukan-classroom-day',document.querySelector('.g-stage'));true")
    ok(p.eval('WX.st().audio.key').endswith('|in'), 'indoors it is muffled')
    p.eval("FemcGame.setSetting('wxSound',0);FemcWeather.refresh();true")
    ok(not p.eval('WX.st().audio.on'), 'Weather sound 0 silences it')
    p.eval("FemcGame.setSetting('wxSound',60);FemcGame.setSetting('sfx',false);FemcWeather.refresh();true")
    ok(not p.eval('WX.st().audio.on'), 'Sound effects off silences it')
    p.eval("FemcGame.setSetting('sfx',true);FemcWeather.refresh();FemcWeather.pause(true);true")
    ok(not p.eval('WX.st().audio.on') and not p.eval('WX.st().shown'), 'nothing shows or sounds during a battle')
    p.eval("FemcWeather.pause(false);true")
    p.eval(f"WX.at('{md['storm']}','after');FemcWeather.field('park',document.querySelector('.g-stage'));FemcWeather.flash();true")
    p.eval("new Promise(r=>setTimeout(r,300))")
    ok(p.eval('WX.st().audio.thunders') >= 1, 'thunder follows the lightning')
    p.eval(f"WX.at('{md['clear']}','after');FemcWeather.field('park',document.querySelector('.g-stage'));true")
    ok(not p.eval('WX.st().audio.on'), 'clear days are quiet')

    # ── forecast ──
    p.eval(f"WX.at('{md['rain']}','after');FemcGameUI.run();true"); p.eval("new Promise(r=>setTimeout(r,300))")
    fc = p.eval("FemcGame.forecast(5).map(d=>[d.md,d.level,d.name])")
    ok(len(fc) == 5 and fc[0][0] == md['rain'] and fc[0][1] == 'rain', f'forecast: today and four days: {fc}')
    ok(p.eval("!!document.querySelector('.g-hud .g-wx[data-ui=forecast] svg')"), 'the date box has the weather icon')
    p.eval("document.querySelector('.g-hud .g-wx').click();true"); p.eval("new Promise(r=>setTimeout(r,300))")
    ph = p.eval("(()=>{const f=document.querySelector('.g-phone .g-ph-wx');return f&&{n:f.querySelectorAll('li').length,today:f.querySelector('li.today').dataset.wx,txt:f.textContent}})()")
    ok(ph and ph['n'] == 5 and ph['today'] == 'rain' and 'Today' in ph['txt'], f'the phone shows the forecast: {ph}')
    shot('forecast-phone')
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());true")
    dc = p.eval(f"(()=>{{WX.at('{md['heavy']}','early');return FemcGame.dayInfo().wx.name}})()")
    ok(dc == 'Heavy snow', f'the day knows its level name: {dc}')

    # ── world ──
    texts = {}
    for key, kinds, slot in [('storm-commute', ['storm'], 'early'), ('rain-lunch', ['rain', 'storm'], 'lunch')]:
        days = p.eval(f"(()=>{{const G=FemcGame,o=[];for(let d=G.dayOf('4/9');d<G.END()&&o.length<6;d++){{const i=G.dayInfo(d);if({json.dumps(kinds)}.includes(i.weather)&&i.type==='school'&&!i.label)o.push(G.mdOf(d))}}return o}})()")
        seen = []
        for d in days:
            p.eval(f"WX.at('{d}','{slot}');FemcGameUI.run();true")
            p.wait("!!document.querySelector('.g-seg-text')")
            seen.append(p.eval("document.querySelector('.g-seg-text').textContent"))
        texts[key] = seen
    wv = p.eval("(()=>{const V=FemcGame.D.variants;return [...V.monorail.storm,...Object.values(V.weather.lunch).flat(),...V.lunch.rain].map(x=>typeof x==='string'?x:x.t)})()")
    ok(any(t in wv for t in texts['storm-commute']), f"a storm commute reads as a storm: {list(texts['storm-commute'])[:1]}")
    ok(all(t in wv or 'indoors' in t.lower() or 'rain' in t.lower() for t in texts['rain-lunch']), f"rainy lunches are rainy: {list(texts['rain-lunch'])[:2]}")
    eff = p.eval(f"""(()=>{{const G=FemcGame,out={{}};
      WX.at('{md['clear']}','after');out.clear=G.shopStock('aohige').map(x=>x.price);out.pierClear=G.activityOk(G.actById('pier'),'after').ok;
      WX.at('{md['rain']}','after');out.rain=G.shopStock('aohige').map(x=>x.price);out.lib=G.activityInfo(G.actById('library')).benefit;
      WX.at('{md['storm']}','after');out.pierStorm=G.activityOk(G.actById('pier'),'after');out.hag=G.activityInfo(G.actById('hagakure')).benefit;
      WX.at('{md['light']}','evening');out.bath=G.activityInfo(G.actById('bathhouse')).benefit;return out}})()""")
    ok(eff['rain'] and all(r == round(c * 0.9) for r, c in zip(eff['rain'], eff['clear'])), f"rainy-day sale: {eff['clear'][:3]} → {eff['rain'][:3]}")
    ok(eff['pierClear'] and not eff['pierStorm']['ok'] and 'storm' in eff['pierStorm']['why'].lower(), f"the pier shuts in a storm: {eff['pierStorm']}")
    ok('Rainy-day quiet' in eff['lib'] and 'Rainy-day special' in eff['hag'] and 'Snow-day soak' in eff['bath'], f'weather bonuses: {eff}')
    pr = p.eval("""(()=>{const G=FemcGame,m=G.D.crush.moments.find(x=>x.id==='cr-aki-umbrella');return {weather:m.weather,first:(()=>{const S=WX.at(WX.dayWith((w,i)=>w.kind==='rain'&&i.type==='school','5/14','6/30'),'after');
      S.crush={t:{akihiko:{phase:'crush',w:9}},seen:[],lastDay:-99};const due=G.crushDue('after');return due&&due.id})()}})()""")
    ok(pr['first'] == 'cr-aki-umbrella', f'on a rainy day the umbrella moment goes first: {pr}')
    wl = p.eval("FemcGame.D.crush.world['late.plain'].concat(FemcGame.D.crush.world.home,FemcGame.D.crush.world['evening.sub']).filter(x=>x.weather).length")
    ok(wl >= 4, f'rain and snow crush world lines: {wl}')

    # ── art ──
    art = p.eval("""(()=>{const G=FemcGame,r={};for(const md of ['10/27','10/28','10/29','10/30','10/31','11/1']){WX.at(md);r[md]=G.dressed('school-hallway')+'|'+G.dressed('school-hallwaysecondfloor')}
      const rain=WX.dayWith(w=>w.kind==='rain'),clear=WX.dayWith(w=>w.kind==='clear');WX.at(rain);r.rain=G.dressed('location-2')+'|'+G.dressed('iwatodai-strip-night');WX.at('10/30');r.storm=G.dressed('location-2');WX.at(clear);r.clear=G.dressed('location-2');return r})()""")
    F2 = 'gekkoukan-culture-festival|gekkoukan-culture-festival'
    ok(art['10/28'] == F2 and art['10/29'] == F2, f'the festival hallway on its sunny prep days: {art}')
    ok(art['10/27'] == art['11/1'] == 'school-hallway|school-hallwaysecondfloor' and art['10/30'] == art['10/31'] == 'school-hallway|school-hallwaysecondfloor', f"not in the festival's storm and rain: {art}")
    ok(art['rain'] == 'iwatodai-strip-rain|iwatodai-strip-rain' and art['storm'] == 'iwatodai-strip-rain' and art['clear'] == 'location-2', f'the Strip in the rain: {art}')
    ok(p.eval("FemcGame.D.cal.events['10/30']==='Culture Festival'&&FemcGame.D.cal.events['10/31']==='Culture Festival'"), 'the festival keeps its days')

    # ── portraits ──
    pt = p.eval("""(()=>{const G=FemcGame,P=window.FEMC_PORTRAITS;const keep=JSON.stringify(P);P.chkagami=['neutral'];P.hgmaster=['neutral','happy'];P.ono=['neutral'];
      const r={kagami:G.portrait('chKagami','neutral'),master:G.portrait('hgMaster','happy'),none:G.portrait('kbGonda','neutral'),
        names:['tsuji','ybTsuji','ueda','lbUeda','daichi','tuDaichi','clerk','wdClerk'].map(id=>G.name(id))};return r})()""")
    ok(pt['kagami'].endswith('portraits/chkagami/neutral.webp') and pt['master'].endswith('portraits/hgmaster/happy.webp') and pt['none'] is None, f'camelCase ids find lowercase folders: {pt}')
    ok(pt['names'] == ['Tsuji', 'Mrs. Tsuji', 'Mrs. Ueda', 'Ueda', 'Daichi', 'Daichi', 'Clerk', 'Clerk'], f"each shared id is one person with its own name: {pt['names']}")
    used = p.eval(r"""(()=>{const s=[];const walk=x=>{if(Array.isArray(x))x.forEach(walk);else if(x&&typeof x==='object'){if(typeof x.s==='string')s.push(x.s);Object.values(x).forEach(walk)}};
      walk(FemcGame.packs());walk(FemcGame.LINKS.mitsuru);const c=id=>s.filter(x=>x===id).length;
      return {ybTsuji:c('ybTsuji'),lbUeda:c('lbUeda'),tuDaichi:c('tuDaichi'),wdClerk:c('wdClerk'),tsuji:c('tsuji'),ueda:c('ueda'),daichi:c('daichi')}})()""")
    ok(all(used[k] for k in used), f'the renamed speakers are in their scenes: {used}')
    # A teacher's face in a real class question (Mr. Ono has a face for this check only).
    face = None
    for k in range(40):
        p.eval(f"(()=>{{const S=WX.at('{md['clear']}','morning');S.day+= {k};S.condition='good';FemcGameUI.run()}})()")
        p.eval("new Promise(r=>setTimeout(r,120))")
        face = p.eval("(()=>{const q=document.querySelector('.g-quiz');if(!q)return null;return {has:q.classList.contains('has-face'),img:q.querySelector('.g-quiz-face')?.getAttribute('src')||null,who:q.querySelector('.g-quiz-q b').textContent}})()")
        if face and face['who'] == 'Mr. Ono': break
    ok(face and face['who'] == 'Mr. Ono' and face['has'] and face['img'].endswith('portraits/ono/neutral.webp'), f"a teacher's face in the class question: {face}")
    if face: shot('teacher-face')
    p.eval("delete FEMC_PORTRAITS.ono;true")
    face2 = None
    for k in range(40):
        p.eval(f"(()=>{{const S=WX.at('{md['clear']}','morning');S.day+= {k};S.condition='good';FemcGameUI.run()}})()")
        p.eval("new Promise(r=>setTimeout(r,120))")
        face2 = p.eval("(()=>{const q=document.querySelector('.g-quiz');return q?{has:q.classList.contains('has-face'),who:q.querySelector('.g-quiz-q b').textContent}:null})()")
        if face2 and face2['who'] == 'Mr. Ono': break
    ok(face2 and not face2['has'], f'no face: the name alone, as before: {face2}')

    # Reduced motion: a still frame and no lightning.
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    p.goto('femc-game.html'); p.eval(HELPERS)
    p.eval(f"WX.at('{md['storm']}','after');FemcWeather.field('park',document.querySelector('.g-stage'));true")
    f0 = p.eval('WX.st().frames'); p.eval("new Promise(r=>setTimeout(r,500))")
    rm = p.eval('WX.st()'); p.eval("FemcWeather.flash();true"); rm2 = p.eval('WX.st()')
    ok(rm['still'] and rm['shown'] and rm['frames'] == f0 and rm2['flashes'] == 0, f'reduced motion: still, no flashes: {rm2}')

    errors = p.console()
    ok(not [e for e in errors if 'portraits/ono/' not in str(e)], f'no browser errors: {errors}')
    print(json.dumps({'checks': len(checks), 'days': md, 'screenshots': str(OUT)}, indent=1))
finally:
    p.close()
