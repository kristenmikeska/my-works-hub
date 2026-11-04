"""The Runners epilogue's realism pass (Nov 3 2026, Kat: "loved the realism"): lake-effect snow, the Regionals broadcast HUD,
the Runners sticker pack and the Alpha Phi home screen.

  python3 tests/femc_runners_realism.py [--only snow,match,home,stickers] [--screenshots /absolute/dir]

snow     the Runners calendar's fixed December (every day's kind and level as the scenes describe the sky; heavy only on 12/1 and
         12/20; the lake-effect spells named); Iwatodai's calendar unchanged (no frost, its own 12/25 heavy); weatherFx: the quad /
         rooftop / loading dock / back porch outdoors, the Regionals hall and its green room, van and after-the-final none
         (the '$' exact match), rooms indoors; in Runners on a snow day a scene outdoors snows and her room frosts (the .frost
         class, drops of melt), a clear day has no frost, the hall shows nothing; Weather effects Off hides it, reduced motion
         makes it still; the phone's forecast header (Syracuse weather · Lake-effect snow) and its snow note; the snow-day
         variants only come on snow days.
match    the broadcast HUD through the real Regionals scenes (both days, each choice of every match): teams, the series score
         after each beat, the kill-feed's handles, the GG card at each series' end, gone before the scene's next place and the
         CG; it never covers the text box or takes a click (1440x900 and 390x844), reduced motion makes it still; the data only
         adds { match } lines (no flag, gate or choice); one desktop / phone pair mid-final and of the GG card.
home     homeView: the day-off morning, Go Out and Late Night fall back to her room (dimmed in the evening / at night) while
         viewsReady is empty, and use the day / evening / night views (undimmed) once listed; the Go Out screen through the UI.
stickers the runners pack is used in seven places, every use has its fallback text, the pack isn't listed yet, and a thread with one
         shows the text through the real phone (no picture, no broken image); the sticker reply shows as its text.
No browser errors. Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-realism-'))
OUT.mkdir(parents=True, exist_ok=True)
ONLY = set(sys.argv[sys.argv.index('--only') + 1].split(',')) if '--only' in sys.argv else {'snow', 'match', 'home', 'stickers'}
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)
    print('ok  ', what)


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})


def shot(name):
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,500)))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def reduce(on):
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce' if on else 'no-preference'}]})


HELPERS = r"""
window.EP = (() => {
  const G = FemcGame;
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off'); G.setSetting('dateCard', false);
  function year(flags) {
    G.newGame();
    const s = G.S;
    Object.assign(s, { phase: 'play', day: G.END(), slot: 'late', yen: 12345, runId: 'realism-' + Object.keys(flags).join('-'),
      stats: { knowledge: 40, courage: 30, proficiency: 20, charm: 50, kindness: 25 }, fragments: ['runners-snow'] });
    s.flags = { 'year-goes-on': true, ...flags }; s.events = ['end-ending'];
    s.links = { haechan: { rank: 15, xp: 0, seen: [], rankDay: {}, route: 'romance' }, minji: { rank: 8, xp: 0, seen: [], rankDay: {} } };
    s.route.choices.xmas = 'haechan'; s.flags['xmas-haechan'] = true;
    G.save();
  }
  function clear() { document.querySelectorAll('.gs,.g-overlay,.g-actcard,.g-datecard').forEach(x => x.remove()); document.documentElement.classList.remove('g-in-scene'); }
  return { year, clear };
})();
"""


def enter():
    p.eval("(()=>{EP.year({'route-R':true});EP.clear();FemcGameUI.endScreen()})()")
    p.wait("!!document.querySelector('[data-t=epi]')")
    p.eval("document.querySelector('[data-t=epi]').click()")
    p.wait("!!document.querySelector('.g-epi-offer [data-go]')")
    p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
    p.wait("!!FemcGame.S.epi && FemcGame.world()==='runners'", 20)
    p.eval("EP.clear()")


# Plays one event's scene through scene.js (as epilogue.js does), clicking through; picks choice `pick(i)` by index list.
PLAY = r"""
window.PLAYEV = async (id, picks) => {
  const G = FemcGame, R = FemcEpilogue.raw(), ev = R.events.find(e => e.id === id), S = ms => new Promise(r => setTimeout(r, ms));
  const log = [], seen = new Set(); let done = false, k = 0, overlap = 0, ptr = 0, gone = { beforePlace: null, beforeCg: null };
  FemcScene.play({ scene: ev.scene, place: ev.place, time: ev.time, faces: ev.faces, onDone: () => { done = true; } });
  for (let i = 0; i < 4000 && !done; i++) {
    const sc = document.querySelector('.gs:not(.out)'); if (!sc) { await S(20); continue; }
    const st = FemcMatch.state();
    if (st.on) {
      const key = JSON.stringify([st.away, st.score, st.gg, st.map]);
      if (!seen.has(key)) { seen.add(key); log.push({ away: st.away, score: st.score.join('-'), gg: st.gg, map: st.map, feed: st.feed.slice() }); }
      const hud = sc.querySelector('.gs-match'), box = sc.querySelector('.gs-box').getBoundingClientRect();
      [...hud.querySelectorAll('.gs-mx-bar, .gs-mx-sub:not([hidden]), .gs-mx-feed li, .gs-mx-gg:not([hidden])')].forEach(e => { const r = e.getBoundingClientRect();
        if (r.width && r.bottom > box.top && r.top < box.bottom && r.right > box.left && r.left < box.right) overlap++; });
      if (getComputedStyle(hud).pointerEvents !== 'none') ptr++;
    }
    if (sc.querySelector('.gs-cg:not([hidden])') && gone.beforeCg === null) gone.beforeCg = !st.on;
    const t = sc.querySelector('.gs-title'); if (t) { t.click(); await S(10); continue; }
    const btns = [...sc.querySelectorAll('.gs-choices button:not(:disabled):not(.gs-hand)')];
    if (btns.length) { const n = picks[k++] ?? 0; btns[Math.min(n, btns.length - 1)].click(); await S(10); continue; }
    sc.click(); await S(6);
  }
  return { done, log, overlap, ptr, gone, after: FemcMatch.state().on };
};
"""

p = Page()
try:
    p.goto('femc-game.html'); p.eval(HELPERS); p.eval(PLAY); size(1440, 900)
    iw = p.eval("(()=>{const G=FemcGame;EP.year({'route-R':true});return {frost:!!G.D.cal.frost,x:G.wx(G.dayOf('12/25')).level,y:G.wx(G.dayOf('12/24')).level}})()")
    enter()

    if 'snow' in ONLY:
        ok(not iw['frost'] and iw['x'] == 'heavy' and iw['y'] == 'light', f'Iwatodai unchanged: no frost, 12/24 light and 12/25 heavy snow ({iw})')
        cal = p.eval("Array.from({length:20},(_,d)=>{const w=FemcGame.wx(d);return [FemcGame.mdOf(d),w.kind,w.level,w.spell]})")
        want = {'12/1': 'heavy', '12/4': 'clear', '12/6': 'light', '12/7': 'light', '12/12': 'light', '12/14': 'clear', '12/15': 'light', '12/19': 'clear', '12/20': 'heavy'}
        got = {c[0]: c[2] for c in cal}
        ok(all(got[k] == v for k, v in want.items()), f'Runners December follows the scenes (the storm return, the full-moon night, the van, the crossroads, the party, the first real snow) {got}')
        ok([c[0] for c in cal if c[2] == 'heavy'] == ['12/1', '12/20'] and sum(c[1] == 'snow' for c in cal) == 13, 'heavy snow on two days only (12/1, 12/20); 13 snow days in 20')
        ok(next(c for c in cal if c[0] == '12/10')[3] == 'Lake-effect snow' and next(c for c in cal if c[0] == '12/14')[3] is None, 'the lake-effect stretches are named for the forecast')
        pk = p.eval("['epi-r-quad-day','epi-r-rooftop-night-snow','epi-r-regionals-dock','epi-r-sigma-porch','epi-r-regionals','epi-r-regionals-green-room','epi-r-regionals-van','epi-r-regionals-after','epi-r-her-room','epi-r-home-night'].map(FemcWeather.placeKind)")
        ok(pk == ['out', 'out', 'out', 'out', 'none', 'none', 'none', 'none', 'in', 'in'], f'weatherFx: outdoors, the Regionals hall and its rooms none (the dock outdoors), rooms indoors {pk}')
        sc = p.eval(r"""(async()=>{const G=FemcGame,S=ms=>new Promise(r=>setTimeout(r,ms)),out={};
          const at=async(md,bg)=>{G.S.day=G.dayOf(md);FemcWeather.refresh();FemcScene.play({scene:[{bg},{n:'x'}],place:'Syracuse',time:'Morning'});await S(250);const s=FemcWeather.state();EP.clear();FemcWeather.refresh();return [s.level,s.where,s.shown,s.frost,s.drops>0]};
          out.quad=await at('12/1','epi-r-quad-day');out.room=await at('12/1','epi-r-her-room');out.clear=await at('12/4','epi-r-her-room');out.hall=await at('12/6','epi-r-regionals');out.dock=await at('12/7','epi-r-valley');
          G.setSetting('wxFx',false);out.off=await at('12/1','epi-r-quad-day');G.setSetting('wxFx',true);G.S.day=0;return out})()""")
        ok(sc['quad'] == ['heavy', 'out', True, False, True], f'12/1 on the quad: heavy snow falling ({sc["quad"]})')
        ok(sc['room'] == ['heavy', 'in', True, True, True], f'12/1 in her room: frost on the glass and drops of melt ({sc["room"]})')
        ok(not sc['clear'][2] and not sc['clear'][3], f'the clear full-moon day: nothing on the window ({sc["clear"]})')
        ok(not sc['hall'][2] and sc['dock'][:3] == ['light', 'out', True], f'Regionals: nothing in the hall; 12/7 outdoors light snow (the dock, once its art is in, is outdoors too) ({sc["hall"]}, {sc["dock"]})')
        ok(not sc['off'][2], 'Weather effects Off: no snow')
        for tag, w, h, m in [('desktop', 1440, 900, False), ('phone', 390, 844, True)]:
            size(w, h, m)
            for md, bg in [('12/1', 'epi-r-her-room'), ('12/20', 'epi-r-rooftop-night-snow')]:
                p.eval("(()=>{EP.clear();const G=FemcGame;G.S.day=G.dayOf(%s);FemcWeather.refresh();FemcScene.play({scene:[{bg:%s},{n:'Snow.'}],place:'Syracuse',time:'Morning'})})()" % (json.dumps(md), json.dumps(bg)))
                time.sleep(0.9); shot(f'snow-{bg}-{tag}')
            p.eval("EP.clear();FemcGame.S.day=0;FemcWeather.refresh()")
        size(1440, 900)
        reduce(True)
        still = p.eval("(async()=>{const G=FemcGame;G.S.day=0;FemcScene.play({scene:[{bg:'epi-r-her-room'},{n:'x'}],place:'Syracuse'});await new Promise(r=>setTimeout(r,250));FemcWeather.refresh();const s=FemcWeather.state();const st=getComputedStyle(document.querySelector('.g-wxfx .g-wx-fog')).animationName;EP.clear();return [s.still,s.frost,st]})()")
        reduce(False)
        ok(still[0] and still[1] and still[2] == 'none', f'reduced motion: a still frame, the frost without motion ({still})')
        ph = p.eval("(()=>{FemcGame.S.day=0;FemcGameUI.openPhone();const o=document.querySelector('.g-phone-ov .g-ph-wx');const r=[o.querySelector('.g-ph-wx-h').textContent,(o.querySelector(':scope > p:not(.g-ph-wx-h)')||{}).textContent||''];EP.clear();return r})()")
        ok(ph[0].startswith('Syracuse weather') and 'Lake-effect snow' in ph[0] and 'Lake-effect snow off Ontario' in ph[1], f'the phone forecast: {ph}')
        v = p.eval(r"""(()=>{const G=FemcGame,R=FemcEpilogue.raw().variants,tag=new Set();const walk=o=>Object.values(o).forEach(x=>Array.isArray(x)?x.forEach(y=>typeof y==='object'&&tag.add(y.t)):walk(x));walk(R);
          const bad=[];let snowHits=0;for(let d=0;d<20;d++){G.S.day=d;const snow=G.wx(d).kind==='snow';for(const p of ['late','stayIn','morning.school','morning.off','practice']){const t=G.vary(p,[]);if(tag.has(t)){if(!snow)bad.push(G.mdOf(d)+' '+p);else snowHits++;}}}
          G.S.day=0;return {n:tag.size,bad,snowHits}})()""")
        ok(v['n'] == 7 and not v['bad'] and v['snowHits'] > 0, f'seven snow-day lines, only on snow days ({v})')

    if 'match' in ONLY:
        d = p.eval(r"""(()=>{const R=FemcEpilogue.raw(),evs=R.events.filter(e=>/^epi-r-regionals-/.test(e.id));let n=0,bad=[];
          const walk=ls=>(ls||[]).forEach(l=>{if(l&&'match' in l){n++;if(Object.keys(l).length!==1)bad.push(JSON.stringify(l).slice(0,60));}walk(l.then);walk(l.else);(l.choose||[]).forEach(o=>walk(o.then))});evs.forEach(e=>walk(e.scene));
          const other=R.events.filter(e=>!/^epi-r-regionals-/.test(e.id)).some(e=>JSON.stringify(e.scene).includes('"match"'));return {n,bad,other}})()""")
        ok(d['n'] == 33 and not d['bad'] and not d['other'], f'33 {{ match }} lines, each on its own line, only in the Regionals scenes ({d})')
        r1 = p.eval("PLAYEV('epi-r-regionals-1',[])", timeout=300)
        g1 = [x for x in r1['log'] if x['gg']]
        ok(r1['done'] and [x['away'] for x in r1['log']][:2] == ['Top Seed', 'Top Seed'] and any(x['away'] == 'Ohio' for x in r1['log']), f'day one: the opener, then Ohio ({[x["away"] + " " + x["score"] for x in r1["log"]]})')
        ok(len(g1) == 1 and g1[0]['score'] == '2-0' and 'Syracuse win' in g1[0]['gg'] and not r1['after'], f'the Ohio set ends 2-0 with the GG card, gone before the green room ({g1})')
        feeds = {f for x in r1['log'] for f in x['feed']}
        ok(any(f.startswith('sollee') for f in feeds) and any(f.startswith('haerin.k') for f in feeds), f'the kill-feed uses the players’ handles ({sorted(feeds)[:5]})')
        ok(r1['overlap'] == 0 and r1['ptr'] == 0, 'at 1440x900 the HUD never covers the text box and takes no clicks')
        # Day two, both branches of every match (choice 0 = the first option, 1 = the read).
        for picks, want in [([0, 0, 0], ['2-1', '2-1', '3-2']), ([1, 1, 1], ['2-0', '2-0', '3-1'])]:
            size(1440, 900) if picks[0] == 0 else size(390, 844, True)
            r2 = p.eval("PLAYEV('epi-r-regionals-2',%s)" % json.dumps(picks), timeout=300)
            ggs = [x['score'] for x in r2['log'] if x['gg']]
            aw = []
            [aw.append(x['away']) for x in r2['log'] if x['away'] not in aw]
            ok(r2['done'] and ggs == want and aw == ['Boston', 'Semifinalist', 'Top Seed'], f'day two {picks}: Boston, the semifinal, the final; GG at {ggs}')
            ok(r2['gone']['beforeCg'] is True and not r2['after'], 'the HUD is down before the champions CG and after the scene')
            ok(r2['overlap'] == 0 and r2['ptr'] == 0, f'{"390x844" if picks[0] else "1440x900"}: the HUD never covers the text box, no clicks taken ({r2["overlap"]})')
        size(1440, 900)
        # Screenshots: mid-final and the GG card, desktop and phone.
        for tag, w, h, m in [('desktop', 1440, 900, False), ('phone', 390, 844, True)]:
            size(w, h, m)
            p.eval("""(()=>{EP.clear();FemcGame.S.day=6;FemcScene.play({scene:[{place:'Syracuse · Regionals',time:'Afternoon'},
              {match:{home:'Syracuse',homeTag:'SU',away:'Top Seed',awayTag:'SEED 1',stage:'Grand final · Bo5',map:'Map 4 · Numbani · Overtime',score:[2,1],feed:[{by:'sollee',how:'Suzu',on:'Graviton',su:true},{by:'Lucio',how:'Sound Barrier',on:'blocked',su:false},{by:'haerin.k',how:'calls',on:'Beat up · 40s',su:true}]}},
              {s:'haerin',f:'serious',t:"Beat's up. He's had it forty seconds."},{match:{score:[3,1],gg:'Regional champions · 3-1'}},{n:'The hall came apart.'}],place:'Syracuse · Regionals',time:'Afternoon',faces:'runners-regionals'})})()""")
            for _ in range(3):
                p.eval("(()=>{const t=document.querySelector('.gs-title');if(t)t.click()})()"); time.sleep(0.15)
            p.wait("FemcMatch.state().on && FemcMatch.state().feed.length===3", 10)
            time.sleep(0.6); shot(f'match-final-{tag}')
            p.eval("document.querySelector('.gs').click()"); p.wait("FemcMatch.state().ggShown", 10)
            time.sleep(0.7); shot(f'match-gg-{tag}')
            reduce(True); p.eval("FemcMatch.apply(document.querySelector('.gs'),{feed:[{by:'x',how:'y',on:'z',su:true}]})")
            ok(p.eval("FemcMatch.state().still && getComputedStyle(document.querySelector('.gs-mx-gg')).animationName==='none'"), f'{tag}: reduced motion, no motion in the HUD')
            reduce(False); p.eval("EP.clear()")
        size(1440, 900)

    if 'home' in ONLY:
        h = p.eval(r"""(()=>{const E=FemcEpilogue,H=FemcEpilogue.raw().places.home,v=s=>{const x=E.homeView(s);return [x.bg,x.mood]};
          const fall=[v('early'),v('evening'),v('late')];H.viewsReady=Object.values(H.views);const art=[v('early'),v('after'),v('evening'),v('late')];H.viewsReady=[];return {fall,art,views:H.views}})()""")
        ok(h['fall'] == [['epi-r-her-room', ''], ['epi-r-her-room', 'night'], ['epi-r-her-room', 'night']], f'no home art yet: her room, dimmed in the evening and at night ({h["fall"]})')
        ok(h['art'] == [['epi-r-home-day', ''], ['epi-r-home-day', ''], ['epi-r-home-evening', ''], ['epi-r-home-night', '']], f'once listed: day / evening / night views, undimmed ({h["art"]})')
        for tag, w, hh, m in [('desktop', 1440, 900, False), ('phone', 390, 844, True)]:
            size(w, hh, m)
            g = p.eval("(async()=>{const G=FemcGame;EP.clear();G.S.day=G.dayOf('12/8');G.S.slot='evening';delete G.S.spent[G.S.day+'-evening'];FemcEpilogue.run();await new Promise(r=>setTimeout(r,500));const b=document.querySelector('.g-bg');return [b.style.backgroundImage,b.className,!!document.querySelector('.g-epi-out')]})()")
            ok('epi-r-her-room.webp' in g[0] and 'night' in g[1] and g[2], f'{tag}: the Go Out screen in the evening shows her room, dimmed (the fallback) {g}')
            shot(f'home-goout-{tag}')
        size(1440, 900)

    if 'stickers' in ONLY:
        s = p.eval(r"""(()=>{const T=FemcEpilogue.raw().texts,uses=[];const msg=(m,k)=>{if(m.sticker&&/^runners-/.test(m.sticker))uses.push([k,m.sticker,!!(m.t&&m.t.trim())])};
          [...T.texts,...(T.ambient||[])].forEach(t=>{t.msgs.forEach(m=>msg(m,t.id));(t.reply||[]).forEach(r=>{msg(r,t.id+' reply');(r.then||[]).forEach(m=>msg(m,t.id))})});
          return {uses,listed:'runners' in (window.FEMC_STICKERS||{})}})()""")
        ok(len(s['uses']) == 7 and all(u[2] for u in s['uses']) and not s['listed'], f'the runners pack: 7 uses, each with its fallback text; not listed until the art is cut ({[u[1] for u in s["uses"]]})')
        u = p.eval(r"""(async()=>{const G=FemcGame,T=FemcEpilogue.raw().texts,S=ms=>new Promise(r=>setTimeout(r,ms));EP.clear();
          const day1=T.texts.find(t=>t.id==='epi-r-tx-team-day1'),last=T.texts.find(t=>t.id==='epi-r-tx-team-last');
          G.S.phone.threads.team=day1.msgs.map(m=>({...m,d:5,slot:'late'}));G.S.phone.pending.team=last.id;
          FemcGameUI.openPhone('team');await S(1500);const o=document.querySelector('.g-phone-ov');o.querySelector('[data-skip]')?.click();await S(300);
          const txt=o.querySelector('.g-ph-body').textContent,imgs=[...o.querySelectorAll('.g-ph-body img')].filter(i=>/stickers\/runners/.test(i.src)).length,
            rep=[...o.querySelectorAll('.g-ph-reply button')].map(b=>b.textContent.trim());EP.clear();return {gg:txt.includes('(GG! Solar in her jersey, fist up)'),imgs,rep}})()""")
        ok(u['gg'] and u['imgs'] == 0, 'the team chat shows Olivia’s sticker as its text (no picture, no broken image)')
        ok(any('asleep on a stack of textbooks' in r for r in u['rep']), f'Solar’s sticker reply shows as its text ({u["rep"]})')

    errs = p.console()
    errs = [e for e in errs if 'favicon' not in str(e)]
    ok(not errs, f'no browser errors {errs[:3]}')
    print(f'\n{len(checks)} checks passed. Screenshots: {OUT}')
finally:
    p.close()
