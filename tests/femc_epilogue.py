"""The epilogue (FEMC-EPILOGUE-PLAN.md; batch 1, 2026-10-27: the engine, with stand-in worlds).

  python3 tests/femc_epilogue.py [--only engine,saves,glitch,runners1,runners2,hoax,shots] [--screenshots /absolute/dir]

engine   the end screen's Epilogue button on the Runners, strangers and HOAX home endings (none on bad, true or Stay); the
         save-first offer writes the finished year to a slot; entering from each eligible ending tucks the year into the save
         (year1), loads the world on demand and runs its calendar in its own year (Syracuse 2025; Hanlim across New Year
         2023-24; Incheon 2013), with its own slots, weekends, holidays and exams; a day lived through the real UI (the date
         card, the stand-in event, the morning, Go Out paid in the world's money, staying in, Sleep); money per world and
         yen untouched in the year; carry-over (stats, fragments, battle save, the lean); ifYear / ifEpiRoute; the route
         lock; the end of the act (end card, Equinox card) gives the year back on its end screen with the battle save, the
         clear noted, and New Game+ as before; the main game is unchanged for a player who never enters (the calendar
         against Python's dates for the whole year, slots, money, data sources, and the weather before and after a world).
saves    mid-epilogue saves in a slot and by backup code, each loaded into a fresh page (the world loads on demand, the slot
         reads "Epilogue · Syracuse · Dec …"); the year inside migrates like any save; an old save loads untouched.
glitch   (batch 2, glitch.js) never in the main game (a year save: no glitch from any call, a scene's glitch lines pass, no
         hands choice, no state); in the epilogue every kind plays and cleans up (no tint, overlay, swapped face, clock, audio
         or weather mode left behind), the date card's own flicker, hands unpickable and pickable, scene lines and ifGlitch;
         the stages escalate (floors by date, midnight, full moon, thin place, constant, strain, a story's own stage, cap 4);
         the same seed rolls the same glitches after a reload; the stand-ins' schedule through the real UI (the opening
         scene's tint and hands, the station card greyed and then open); Glitch effects Full / Gentle / Off through the settings
         panel, Reduce flashes (fades) and reduced motion (still frames); one desktop / phone pair mid-glitch.
runners1 (batch 3, Runners part 1, 12/1-12/14) the twenty beats on their dates and slots, each route's own 12/10 beat; a walk of every
         line on every branch of every event, routine and hangout (speakers named, faces, backgrounds, music moods, glitch ids) and
         every image they use loading; closeness from the year; three runs through the real UI to 12/14's night, one per route
         (Haechan: "Not yet", the long way home; the cover: "Delete it" closes his route at the crossroads; Minji), each checking
         the lock, the route's beats and no other route's, the studio terms / going public, the glitches on schedule, hangouts
         (the route-only one), practice days, routines and texts; a 12/14 slot in a fresh page sleeping on to 12/15; ifBond /
         ifRouteOpen never true in the year; one desktop / phone pair of a week-2 Go Out.
runners2 (batch 4, Runners part 2, 12/14 late-12/20) week 3's eleven beats on their dates and slots (12/14's late pull, the
         finale `ends`), the four half-present fights as { battle } placeholders (script epi-runners-1..4, not yet in battle.js, so
         its plain story fight; the epilogue passes over them with no handoff); a walk of every line on every branch of the whole
         world (73 scenes); the music placeholders; three whole acts through the real UI, one per route, 12/1 to the end card
         (Haechan: the year's Danielle refused, so she gives up the file; the cover: sold, so she has sent it; Minji: neither, so she
         keeps it), each checking week 3's beats and flags, the glitches on schedule (stage 3, then 4), the finale's own branch, the
         end card and the Equinox card, and the year's end screen afterwards (S.epilogues, the clear, the battle save, yen, New
         Game+); the Haechan act saved on 12/20's morning and finished in a fresh page from that slot; the main game untouched (a
         year save reads Iwatodai's data, no glitch, no `ends`); one desktop / phone pair of the rooftop.
hoax     (batch 5, the whole HOAX world, 12/21/2023-1/12/2024) the 34 beats on their dates and slots (each route's three own
         beats; only the gym `ends`), the calendar, the four fight placeholders (epi-hoax-1..4, not in battle.js yet), a walk of every
         line on every branch (76 scenes) and every image, the music placeholders and world-hoax in the gym, the reframed line, the
         hearing's Charm / Courage / Knowledge checks (and a plain answer) against the year's stats, closeness from the year; three
         whole acts through the real UI to the end card, the Equinox card and the year's end screen, one per route (Jungwon:
         saved on 1/10 and finished in a fresh page, the hearing's locked options greyed, one desktop / phone pair in the gym;
         Jihoon; the council: Christmas Eve offers only Yeobo's), each checking the lock, every shared beat and only its own,
         the flags, every glitch on schedule to stage 4, hangouts, texts, routines and council duty; the year untouched.
shots    one desktop / phone pair of the end-screen button and of an epilogue day.
No browser errors. Isolated browser profile and server; never the player's saves."""
import base64, datetime, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-epilogue-'))
OUT.mkdir(parents=True, exist_ok=True)
ONLY = set(sys.argv[sys.argv.index('--only') + 1].split(',')) if '--only' in sys.argv else {'engine', 'saves', 'glitch', 'runners1', 'runners2', 'hoax', 'shots'}
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})


def shots(name):
    for tag, w, h in [('desktop', 1000, 486), ('phone', 375, 812)]:
        size(w, h, tag == 'phone')
        p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,450)))')
        (OUT / f'{name}-{tag}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
    size(1000, 486)


HELPERS = r"""
window.EP = (() => {
  const G = FemcGame, copy = x => JSON.parse(JSON.stringify(x));
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off'); G.setSetting('dateCard', false);
  // A finished year on its last night (the ending played), on a route; a battle save with a marker to follow.
  function year(flags, extra = {}) {
    G.newGame();
    const s = G.S;
    Object.assign(s, { phase: 'play', day: G.END(), slot: 'late', yen: 12345, runId: 'epi-test-' + Object.keys(flags).join('-'),
      stats: { knowledge: 40, courage: 30, proficiency: 20, charm: 50, kindness: 25 }, fragments: ['runners-snow', 'hoax-tin'] });
    s.flags = { 'year-goes-on': true, ...flags }; s.events = ['end-ending'];
    s.links = { haechan: { rank: 15, xp: 0, seen: [], rankDay: {}, route: 'romance' }, minji: { rank: 8, xp: 0, seen: [], rankDay: {} }, jungwon: { rank: 6, xp: 0, seen: [], rankDay: {} } };
    s.route.choices.xmas = 'haechan'; s.flags['xmas-haechan'] = true;
    s.battleSave = { lvl: 47, marker: 'year-battle' };
    Object.assign(s, copy(extra));
    G.save();
    return s;
  }
  function clear() { document.querySelectorAll('.gs,.g-overlay,.g-actcard,.g-datecard').forEach(x => x.remove()); document.documentElement.classList.remove('g-in-scene'); }
  function end() { clear(); FemcGameUI.endScreen(); return !!document.querySelector('.g-end'); }
  function step() {
    const c = document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
    const o = document.querySelector('.gs-title, .g-actcard:not(.out), .g-datecard'); if (o) { o.click(); return 'card'; }
    const g = document.querySelector('.gs:not(.out)'); if (g) { g.click(); return 'scene'; }
    const n = document.querySelector('#g-app [data-next]:not(:disabled)'); if (n) { n.click(); return 'next'; }
    return 'idle';
  }
  const screen = () => document.querySelector('.g-epi-out') ? 'out' : document.querySelector('.gs:not(.out)') ? 'scene' : document.querySelector('.g-actcard:not(.out)') ? 'card'
    : document.querySelector('.g-end') ? 'end' : document.querySelector('#g-app [data-next]') ? 'seg' : 'other';
  return { year, end, step, screen, clear, copy };
})();
"""



DRIVER = r"""
window.RUN = async (until, policy, sleepOn) => {
  const G = FemcGame, S = ms => new Promise(r => setTimeout(r, ms)), stop = G.dayOf(until), log = { steps: 0, choices: [], cross: [], hangouts: [], practice: 0, locked: [] };
  const pick = texts => { for (const w of policy.prefer || []) { const i = texts.findIndex(t => t.includes(w)); if (i >= 0) return i; } return 0; };
  let lastPractice = null;
  for (let i = 0; i < 40000; i++) {
    log.steps = i;
    if (!G.S.epi || G.S.day > stop) break;
    if (G.S.spent[G.S.day + '-after'] === 'practice' && lastPractice !== G.S.day) { lastPractice = G.S.day; log.practice++; }
    const sc = document.querySelector('.gs:not(.out)');
    if (sc && policy.stopText && (sc.querySelector('.gs-text')?.textContent || '').includes(policy.stopText)) { log.stopped = true; break; }
    if (sc) {
      const t = sc.querySelector('.gs-title'); if (t) { t.click(); await S(10); continue; }
      const btns = [...sc.querySelectorAll('.gs-choices button:not(:disabled):not(.gs-hand)')];
      if (btns.length) { const texts = btns.map(b => b.textContent.trim()); if (texts.some(x => x.includes(policy.cross || 'shuttle'))) log.cross = texts;
        sc.querySelectorAll('.gs-choices button:disabled:not(.gs-hand)').forEach(b => log.locked.push(b.textContent.trim()));
        const k = pick(texts); log.choices.push(texts[k]); btns[k].click(); await S(10); continue; }
      sc.click(); await S(8); continue;
    }
    const card = document.querySelector('.g-actcard:not(.out), .g-datecard'); if (card) { card.click(); await S(20); continue; }
    const out = document.querySelector('.g-epi-out');
    if (out) { const b = out.querySelector('[data-bond]'); if (b) { log.hangouts.push(b.dataset.bond + ':' + FemcEpilogue.hangoutFor(b.dataset.bond).id); b.click(); } else out.querySelector('[data-stay]').click(); await S(20); continue; }
    const n = document.querySelector('#g-app [data-next]:not(:disabled)');
    if (n) { if (G.S.day === stop && G.S.slot === 'late' && !sleepOn) break; n.click(); await S(20); continue; }
    await S(40);
  }
  return log;
};
window.WALK = () => {
  const G = FemcGame, R = FemcEpilogue.raw(), moods = G.D.places.music, gl = new Set((R.glitches || []).map(g => g.id)), K = FemcGlitch.KINDS;
  const out = { lines: 0, paths: 0, scenes: 0, problems: [], urls: [], music: [] }, urls = new Set(), music = new Set();
  const count = (lines, key) => {
    let n = 1;
    for (const l of lines || []) {
      out.lines++;
      if (l.s) {
        if (l.s !== 'solar' && !G.castHas(l.s)) out.problems.push(key + ': no name for ' + l.s);
        const u = G.portrait(l.s, l.f); if (u) urls.add(u);
      }
      if (l.place) { const b = G.background(l.place, l.time || ''); if (!b) out.problems.push(key + ': no background for ' + l.place); else urls.add(b.url); }
      if (l.bg) urls.add(G.background('', '', l.bg).url);
      if (l.music) { if (!moods[l.music]) out.problems.push(key + ': no music mood ' + l.music); music.add(l.music); }
      if (typeof l.glitch === 'string' && !K.includes(l.glitch) && !gl.has(l.glitch)) out.problems.push(key + ': unknown glitch ' + l.glitch);
      if (l.phone) l.phone.forEach(m => { if (m.from !== 'solar' && !G.castHas(m.from)) out.problems.push(key + ': phone from ' + m.from); });
      if (l.then || l.else) n *= count(l.then, key) + count(l.else, key);
      if (l.choose) n *= l.choose.reduce((a, o) => a + count(o.then, key), 0);
    }
    return n;
  };
  const scenes = [...R.events.map(e => [e.id, e.scene, e.place]), ...(R.routines || []).map(e => [e.id, e.scene, e.place]),
    ...Object.values(R.bonds || {}).flatMap(b => b.hangouts.map(h => [h.id, h.scene, h.place]))];
  for (const [id, sc, place] of scenes) {
    out.scenes++;
    if (place && !G.background(place, '')) out.problems.push(id + ': no background for ' + place);
    out.paths += count(sc, id);
  }
  Object.values(R.bonds || {}).forEach(b => { if (!G.castHas(b.id)) out.problems.push('bond ' + b.id + ' has no name'); });
  out.urls = [...urls]; out.music = [...music];
  return out;
};
window.CHECK_ASSETS = async list => {
  const bad = [];
  await Promise.all(list.map(u => new Promise(r => { const i = new Image(); i.onload = () => r(); i.onerror = () => { bad.push(u); r(); }; i.src = u; })));
  return { n: list.length, bad };
};
"""

def step_until(cond, n=200, pause=0.08):
    for _ in range(n):
        if p.eval(cond):
            return True
        p.eval('EP.step()'); time.sleep(pause)
    return p.eval(cond)


def enter(world_flag):
    """A finished year on world_flag, its end screen, the Epilogue button, then into the world (without saving first)."""
    p.eval("(()=>{EP.year(%s);EP.end()})()" % json.dumps({world_flag: True}))
    p.eval("document.querySelector('[data-t=epi]').click()")
    p.wait("!!document.querySelector('.g-epi-offer [data-go]')")
    p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
    p.wait("!!FemcGame.S.epi && FemcGame.world()===FemcGame.S.epi.world", 20)


p = Page()
try:
    p.goto('femc-game.html'); p.eval(HELPERS); size(1000, 486)

    if 'engine' in ONLY:
        # The main game for a player who never enters: the calendar against Python's dates for the whole year.
        n = p.eval('FemcGame.END()')
        days = p.eval('Array.from({length:FemcGame.END()+1},(_,d)=>[FemcGame.mdOf(d),FemcGame.dateOf(d).getDay(),FemcGame.dateOf(d).getFullYear()])')
        want = [[f'{(datetime.date(2009, 4, 6) + datetime.timedelta(d)).month}/{(datetime.date(2009, 4, 6) + datetime.timedelta(d)).day}',
                 ((datetime.date(2009, 4, 6) + datetime.timedelta(d)).weekday() + 1) % 7, (datetime.date(2009, 4, 6) + datetime.timedelta(d)).year] for d in range(n + 1)]
        ok(days == want and n == 335, f'Iwatodai: every day 4/6/2009 → 3/7/2010 has its date, weekday and year ({n + 1} days)')
        base = p.eval(r"""(()=>{const G=FemcGame;EP.year({'route-R':true});G.S.day=10;const fp=()=>JSON.stringify(Array.from({length:G.END()+1},(_,d)=>{const i=G.dayInfo(d);return [i.md,i.type,i.label,i.weather,i.wx.level,i.moon.name,G.slotsFor(i).join()]}));
          return {fp:fp(),cal:G.D.cal===FEMC_GAME_CALENDAR,ev:G.D.events===FEMC_GAME_EVENTS,places:G.D.places===FEMC_GAME_PLACES,links:Object.keys(G.LINKS).length,
            linkWant:new Set(FEMC_GAME_LINKS.map(l=>l.id)).size,money:G.money(1234),world:G.world(),dayOf:[G.dayOf('4/6'),G.dayOf('1/1'),G.dayOf('3/7')],school:G.slotsFor(G.dayInfo(G.dayOf('4/9'))).join(),off:G.slotsFor(G.dayInfo(G.dayOf('4/12'))).join()}})()""")
        ok(base['cal'] and base['ev'] and base['places'] and base['world'] is None and base['links'] == base['linkWant'], f'a year save reads Iwatodai’s calendar, events, places and every link ({base["links"]})')
        ok(base['money'] == '¥1,234' and base['dayOf'] == [0, 270, 335], f'yen and day numbers as before ({base["money"]}, {base["dayOf"]})')
        ok(base['school'] == 'early,morning,lunch,afternoon,after,evening,late' and base['off'] == 'early,after,evening,late', 'a school day and a Sunday keep their slots')

        # The button: Runners, strangers and HOAX home endings; never bad, true or Stay.
        btn = p.eval(r"""(()=>{const out={};for(const [k,f] of [['R',{'route-R':true}],['S',{'route-S':true}],['H',{'route-H':true}],['stay',{'route-stay':true}],['bad',{'route-bad':true,'route-R':true}],['true',{'route-true':true,'true-final':true,'route-R':true}]]){EP.year(f);EP.end();const b=document.querySelector('.g-end [data-t=epi]');out[k]=b?b.textContent:null}return out})()""")
        ok(btn['R'] and 'Runners' in btn['R'] and 'strangers' in btn['S'] and 'HOAX' in btn['H'] and btn['stay'] is None and btn['bad'] is None and btn['true'] is None, f'the Epilogue button by ending ({btn})')

        # The save-first offer: the finished year goes to a slot, then in.
        p.eval("(()=>{localStorage.removeItem('kg-femc-revamp-slot2');EP.year({'route-R':true});EP.end();document.querySelector('[data-t=epi]').click()})()")
        p.wait("!!document.querySelector('.g-epi-offer [data-slot=\"2\"]')")
        p.eval("FemcGame.setSetting('dateCard', true);document.querySelector('.g-epi-offer [data-slot=\"2\"]').click()")
        p.wait("!!FemcGame.S.epi && FemcGame.world()==='runners'", 20)
        p.wait("!!document.querySelector('.g-datecard')")
        dc = p.eval("document.querySelector('.g-datecard').textContent")
        ok('DECEMBER 2025' in dc and '12/1' in dc, f'the date card shows December 2025 ({dc[:40]!r})')
        p.eval("FemcGame.setSetting('dateCard', false)")
        sv = p.eval("(()=>{const x=FemcGame.readSlot(2);return {epi:!!x.state.epi,day:x.state.day,end:x.state.events.includes('end-ending'),label:x.label,world:FemcGame.S.epi.world}})()")
        ok(not sv['epi'] and sv['day'] == 335 and sv['end'] and sv['world'] == 'runners', f'the offer saves the finished year to slot 2, then goes in ({sv["label"]})')
        p.eval("localStorage.removeItem('kg-femc-revamp-slot2')")

        # Entering: the year inside, carry-over, the world's own calendar in its own year.
        st = p.eval(r"""(()=>{const G=FemcGame,s=G.S,i=G.dayInfo(0);return {y1:!!s.year1,y1day:s.year1.day,y1yen:s.year1.yen,y1bs:s.year1.battleSave,bs:s.battleSave&&s.battleSave.marker,yen:s.yen,money:G.money(s.yen),
          stats:s.stats.charm,frags:s.fragments.length,links:Object.keys(G.LINKS).length,lean:s.epi.lean,carry:s.epi.carry,year:G.dateOf(0).getFullYear(),md:i.md,dow:i.day,end:G.mdOf(G.END()),last:G.END(),
          cal:G.D.cal.start,ev:G.D.events.map(e=>e.id),slots:G.slotsFor(i).join(),sat:G.dayInfo(G.dayOf('12/6')).type,finals:G.dayInfo(G.dayOf('12/15')).type,moon:G.dayInfo(G.dayOf('12/4')).moon.full,wx:i.weather}})()""")
        ok(st['y1'] and st['y1day'] == 335 and st['y1yen'] == 12345 and st['y1bs'] is None and st['bs'] == 'year-battle', 'the year is tucked inside the save (year1); its battle save comes along into the epilogue layer')
        ok(st['yen'] == 200 and st['money'] == '$200' and st['stats'] == 50 and st['frags'] == 2 and st['links'] == 0, f'Runners: dollars, her stats and memory journal carried, no Iwatodai links ({st["money"]})')
        ok(st['lean'] == 'haechan' and st['carry']['romance'] == ['haechan'] and st['carry']['xmas'] == 'haechan' and st['carry']['ending'] == 'where it begins', f'carry-over and the lean ({st["lean"]})')
        ok(st['year'] == 2025 and st['md'] == '12/1' and st['dow'] == 'Mon' and st['end'] == '12/20' and st['last'] == 19 and st['cal'] == '12/1', 'Syracuse: Monday 12/1/2025 to 12/20, twenty days')
        ok(st['slots'] == 'early,after,evening,late' and st['sat'] == 'off' and st['finals'] == 'exam' and st['moon'] and st['wx'] == 'snow' and st['ev'][0] == 'epi-r-home' and len(st['ev']) >= 20, f'its own slots, weekends, finals, full moon, snow and events ({st["slots"]}, {len(st["ev"])} events)')
        cond = p.eval(r"""(()=>{const G=FemcGame,b=l=>JSON.stringify(G.branch({...l,then:['y'],else:['n']}));return [b({ifYear:{romance:'haechan'}}),b({ifYear:{romance:'jungwon'}}),b({ifYear:'xmas-haechan'}),b({ifYear:{rank:{minji:8},ending:'where it begins'}}),b({ifEpiRoute:'haechan'}),b({ifEpiRoute:['cover']})]})()""")
        ok(cond == ['["y"]', '["n"]', '["y"]', '["y"]', '["y"]', '["n"]'], f'ifYear reads the finished year, ifEpiRoute the route ({cond})')

        # A day lived through the real UI.
        ok(step_until("FemcGame.S.events.includes('epi-r-home') && !document.querySelector('.gs:not(.out)')"), 'the opening plays on the first morning')
        hud = p.eval("document.querySelector('.g-hud .g-yen').textContent + '|' + document.querySelector('.g-hud .g-slot').textContent + '|' + document.querySelector('.g-hud .g-date').textContent")
        ok(hud.startswith('$200|Morning|12/1'), f'the HUD: dollars, the world’s slot name, the date ({hud})')
        ok(step_until("EP.screen()==='out' && FemcGame.S.slot==='evening'") and p.eval("FemcGame.S.events.includes('epi-r-five-days') && FemcGame.S.spent[FemcGame.S.day+'-after']==='ev:epi-r-five-days'"), 'After Class is the day’s story (it takes the slot); Evening: Go Out at home')
        out = p.eval("[...document.querySelectorAll('.g-epi-act')].map(b=>b.textContent)")
        ok(len(out) == 4 and '$7' in out[0] and 'Charm' in out[0] and 'Free' in out[1], f'the world’s evening activities, priced in dollars ({out})')
        p.eval("document.querySelector('[data-act=epi-r-coffee]').click()")
        paid = p.eval("[FemcGame.S.yen, FemcGame.S.stats.charm, FemcGame.S.spent[FemcGame.S.day+'-evening']]")
        ok(paid[0] == 193 and paid[1] > 50 and paid[2] == 'act:epi-r-coffee', f'coffee costs $7 and raises Charm a little ({paid})')
        ok(step_until("FemcGame.S.slot==='late' && FemcGame.S.events.includes('epi-r-pale') && !!document.querySelector('#g-app [data-next]')"), 'the late story, then the late screen')
        ok(p.eval("document.querySelector('#g-app [data-next]').textContent").startswith('Sleep'), 'the late screen offers Sleep')
        p.eval("document.querySelector('#g-app [data-next]').click()")
        p.wait("FemcGame.S.day===1")
        nd = p.eval("[FemcGame.mdOf(FemcGame.S.day),FemcGame.dayInfo().day,FemcGame.S.slot,FemcGame.S.year1.yen]")
        ok(nd == ['12/2', 'Tue', 'early', 12345], f'Sleep: the next morning is Tuesday 12/2, and the year’s yen is untouched ({nd})')
        errs = p.console(); ok(not errs, f'no browser errors through a day: {errs}')
        # The menu and the phone open in the epilogue.
        menus = p.eval(r"""(async()=>{FemcGameUI.openStatus();await new Promise(r=>setTimeout(r,250));const a=!!document.querySelector('.g-overlay');document.querySelectorAll('.g-overlay').forEach(x=>x.remove());
          FemcGameUI.openPhone();await new Promise(r=>setTimeout(r,250));const b=!!document.querySelector('.g-overlay')&&!/undefined|NaN/.test(document.querySelector('.g-overlay').textContent);document.querySelectorAll('.g-overlay').forEach(x=>x.remove());return [a,b]})()""")
        errs = p.console()
        ok(menus == [True, True] and not errs, f'the menu and the phone open in the epilogue ({menus}, {errs})')

        # The route lock: the night of lockAfter (a scene's epi-route-<id> flag wins over the lean).
        lock = p.eval(r"""(()=>{const G=FemcGame,s=G.S;s.day=G.dayOf('12/7');s.slot='late';s.events.push('epi-r-crossroads');s.flags['epi-route-cover']=true;G.save();EP.clear();FemcGameUI.run();
          document.querySelector('#g-app [data-next]').click();return [s.epi.locked,s.epi.route,FemcEpilogue.route(),G.mdOf(G.S.day)]})()""")
        ok(lock == [True, 'cover', 'cover', '12/8'], f'the route locks on 12/7’s night, to the picked route ({lock})')

        # The end of the act: the end card, the Equinox card, the year's end screen; the clear noted; New Game+ as before.
        p.eval("(()=>{const G=FemcGame;localStorage.setItem(G.CLEARS_KEY,JSON.stringify([{run:G.S.runId,ending:'where it begins',at:1}]));G.S.day=G.END();G.S.slot='late';G.D.events.filter(e=>e.date===G.mdOf(G.END())).forEach(e=>G.S.events.push(e.id));G.S.battleSave.lvl=48;G.save();EP.clear();FemcGameUI.run();document.querySelector('#g-app [data-next]').click()})()")
        p.wait("!!document.querySelector('.g-epi-end')")
        cards = []
        for _ in range(60):
            c = p.eval("(()=>{const c=document.querySelector('.g-actcard:not(.out)');return c?c.textContent:null})()")
            if c and (not cards or cards[-1] != c): cards.append(c)
            if p.eval("!!document.querySelector('.g-end')"): break
            p.eval("document.querySelector('.g-actcard:not(.out)')?.click()"); time.sleep(0.25)
        p.wait("!!document.querySelector('.g-end')")
        back = p.eval(r"""(()=>{const G=FemcGame,s=G.S;return {epi:!!s.epi,y1:!!s.year1,yen:s.yen,money:G.money(s.yen),bs:s.battleSave.marker,lvl:s.battleSave.lvl,done:s.epilogues&&s.epilogues.runners,world:G.world(),
          end:document.querySelector('.g-end').textContent.includes('ENDING · where it begins'),btn:!!document.querySelector('.g-end [data-t=epi]'),clear:JSON.parse(localStorage.getItem(G.CLEARS_KEY)).find(c=>c.run===s.runId),cal:G.D.cal===FEMC_GAME_CALENDAR}})()""")
        ok(len(cards) == 2 and 'EPILOGUE' in cards[0] and 'EQUINOX' in cards[1], f'the end card, then the Equinox card ({[c[:30] for c in cards]})')
        ok(not back['epi'] and not back['y1'] and back['money'] == '¥12,345' and back['bs'] == 'year-battle' and back['lvl'] == 48 and back['world'] is None and back['cal'], 'the year comes back: yen, Iwatodai’s calendar, the battle save with what the epilogue added')
        ok(back['end'] and back['btn'] and back['done']['done'] and back['done']['route'] == 'cover' and back['clear']['epi'] == ['runners'] and back['clear']['ending'] == 'where it begins', f'its end screen, the epilogue recorded with the clear ({back["clear"]})')
        p.eval("document.querySelector('.g-end [data-t=ngp]').click()")
        ngp = p.eval("(()=>{const s=FemcGame.S;return [s.ngp,s.phase,s.day,!!s.epi,!!s.year1,s.stats.charm,s.yen,FemcGame.D.cal===FEMC_GAME_CALENDAR]})()")
        ok(ngp[0] == 1 and ngp[1] == 'prologue' and ngp[2] == 0 and not ngp[3] and not ngp[4] and ngp[5] == 50 and ngp[6] == 6173 and ngp[7], f'New Game+ from the year as before (stats kept, half the yen) ({ngp})')
        p.eval("EP.clear()")

        # HOAX: across New Year, won, the lean; strangers: 2013, won.
        enter('route-H')
        hx = p.eval(r"""(()=>{const G=FemcGame,s=G.S,i=d=>G.dayInfo(G.dayOf(d));return {md:G.mdOf(0),y0:G.dateOf(0).getFullYear(),last:G.END(),endY:G.dateOf(G.END()).getFullYear(),endMd:G.mdOf(G.END()),
          xmas:i('12/25').type,sat:i('12/23').type,back:i('1/8').type,mon:i('1/15'),lean:s.epi.lean,money:G.money(s.yen),moon:i('12/27').moon.full,ny:i('1/1').label}})()""")
        ok(hx['md'] == '12/21' and hx['y0'] == 2023 and hx['endMd'] == '1/13' and hx['endY'] == 2024 and hx['last'] == 23, f'Hanlim: 12/21/2023 to 1/13/2024, across New Year ({hx["last"] + 1} days)')
        ok(hx['xmas'] == 'off' and hx['sat'] == 'off' and hx['back'] == 'exam' and hx['moon'] and hx['ny'] == "New Year's Day", 'winter break and holidays off, make-up exams from 1/8, the full moon')
        ok(hx['money'] == '₩50,000' and hx['lean'] == 'council', f'won, and the lean with no HOAX romance ({hx["money"]}, {hx["lean"]})')
        ok(step_until("EP.screen()==='out'", 900, 0.03), 'HOAX: the first morning and afternoon, then Go Out')
        p.eval("document.querySelector('[data-act=epi-h-study]').click()")
        ok(p.eval("[FemcGame.money(FemcGame.S.yen),FemcGame.S.yen]") == ['₩45,500', 45500], 'a study session at Yeobo’s costs ₩4,500')
        p.eval("EP.clear()")
        enter('route-S')
        sx = p.eval("(()=>{const G=FemcGame;return [G.mdOf(0),G.dateOf(0).getFullYear(),G.dayInfo(0).day,G.mdOf(G.END()),G.money(G.S.yen),G.S.epi.lean,G.D.events.map(e=>e.id)]})()")
        ok(sx == ['2/17', 2013, 'Sun', '3/16', '₩100,000', 'haechan', ['epi-s-stub-home']], f'Incheon: 2013, won, its own stand-in ({sx})')
        ok(step_until("FemcGame.S.events.includes('epi-s-stub-home') && EP.screen()==='seg'"), 'strangers: the stand-in morning plays')
        # Back out to a year save: Iwatodai's data again, with the world still loaded.
        p.eval("(()=>{EP.year({'route-R':true});})()")
        after = p.eval(r"""(()=>{const G=FemcGame;G.S.day=10;const fp=JSON.stringify(Array.from({length:G.END()+1},(_,d)=>{const i=G.dayInfo(d);return [i.md,i.type,i.label,i.weather,i.wx.level,i.moon.name,G.slotsFor(i).join()]}));
          return {fp,links:Object.keys(G.LINKS).length,money:G.money(1234),cal:G.D.cal===FEMC_GAME_CALENDAR}})()""")
        ok(after['fp'] == base['fp'] and after['links'] == base['links'] and after['money'] == '¥1,234' and after['cal'], 'a year save after three epilogues: the same calendar, weather, moon, slots, links and yen as before any')
        errs = p.console(); ok(not errs, f'no browser errors: {errs}')

    if 'saves' in ONLY:
        p.goto('femc-game.html'); p.eval(HELPERS)
        enter('route-R')
        step_until("EP.screen()==='out'")
        p.eval("document.querySelector('[data-act=epi-r-library]').click()")
        p.eval("(()=>{const G=FemcGame;G.saveSlot(3);window.__code=G.exportCode()})()")
        lab = p.eval("(()=>{const x=FemcGame.readSlot(3);return [x.label,FemcGame.slotInfo(x.state)]})()")
        ok(lab[0] == 'Epilogue · Syracuse · Dec 1' and lab[1]['epi'] == 'Syracuse' and lab[1]['md'] == '12/1' and lab[1]['day'] == 'Mon' and lab[1]['slot'] == 'Evening', f'the slot reads Epilogue · Syracuse · Dec 1 ({lab[0]})')
        code = p.eval('window.__code')
        snap = p.eval("JSON.stringify({day:FemcGame.S.day,spent:FemcGame.S.spent[FemcGame.S.day+'-evening'],yen:FemcGame.S.yen,epi:FemcGame.S.epi.world,y1:FemcGame.S.year1.day,y1yen:FemcGame.S.year1.yen})")
        # A fresh page: the autosave is a year, the slot is mid-epilogue; the title reads the slot without the world loaded.
        p.eval("(()=>{EP.year({'route-H':true});})()")
        p.goto('femc-game.html'); p.eval(HELPERS)
        pre = p.eval("[!!window.FEMC_EPI_WORLDS, FemcGame.world()]")
        ok(pre == [False, None], 'a fresh page loads no epilogue data at start-up')
        p.eval("(()=>{FemcGameUI.openSaves(true)})()")
        p.wait("!!document.querySelector('.g-saves [data-load=\"3\"]')")
        card = p.eval("document.querySelectorAll('.g-saves .g-slot')[3].textContent")
        ok('Epilogue · Syracuse' in card and '12/1' in card, f'the save screen shows the epilogue slot ({card[:80]!r})')
        p.eval("document.querySelector('.g-saves [data-load=\"3\"]').click()")
        p.wait("FemcGame.world()==='runners' && !!document.querySelector('#g-app [data-next], .g-epi-out, .gs:not(.out)')", 20)
        back = p.eval("JSON.stringify({day:FemcGame.S.day,spent:FemcGame.S.spent[FemcGame.S.day+'-evening'],yen:FemcGame.S.yen,epi:FemcGame.S.epi.world,y1:FemcGame.S.year1.day,y1yen:FemcGame.S.year1.yen})")
        ok(back == snap and p.eval("document.querySelector('.g-hud .g-yen').textContent") == '$200', f'loaded from the slot in a fresh page: the world loads on demand, mid-day (the spent evening stays spent), dollars ({back})')
        # By backup code, in another fresh page.
        p.eval("(()=>{EP.year({'route-S':true});})()")
        p.goto('femc-game.html'); p.eval(HELPERS)
        r = p.eval("FemcGame.importCode(%s)" % json.dumps(code))
        p.eval("EP.clear();FemcGameUI.run()")
        p.wait("FemcGame.world()==='runners'", 20)
        back2 = p.eval("JSON.stringify({day:FemcGame.S.day,spent:FemcGame.S.spent[FemcGame.S.day+'-evening'],yen:FemcGame.S.yen,epi:FemcGame.S.epi.world,y1:FemcGame.S.year1.day,y1yen:FemcGame.S.year1.yen})")
        ok(r is True and back2 == snap, 'loaded from the backup code in a fresh page')
        # The year inside migrates like any save (read against Iwatodai's calendar, not the world's).
        mig = p.eval(r"""(()=>{const G=FemcGame,s=EP.copy(G.S);delete s.year1.yv;s.year1.day=300;s.year1.events=['end-ending'];localStorage.setItem('kg-femc-revamp-slot3',JSON.stringify({at:1,label:'x',state:s}));G.loadSlot(3);return [G.S.year1.yv,G.S.year1.day,G.S.year1.slot,G.S.day,!!G.S.epi]})()""")
        ok(mig[0] == 2 and mig[1] == 335 and mig[2] == 'late' and mig[4], f'the year inside migrates against Iwatodai’s calendar (an old one moves to 3/7) ({mig})')
        # An old save (no epilogue fields) loads untouched.
        old = p.eval(r"""(()=>{const G=FemcGame;EP.year({'route-R':true});const s=EP.copy(G.S);s.day=120;s.slot='after';s.phase='play';s.events=['a1-x'];s.flags={'route-R':true};delete s.battleSave;
          localStorage.setItem('kg-femc-revamp-slot3',JSON.stringify({at:1,label:'old',state:s}));G.loadSlot(3);return {epi:'epi' in G.S,y1:'year1' in G.S,day:G.S.day,slot:G.S.slot,flags:G.S.flags,md:G.mdOf(G.S.day),cal:G.D.cal===FEMC_GAME_CALENDAR,money:G.money(G.S.yen)}})()""")
        ok(not old['epi'] and not old['y1'] and old['day'] == 120 and old['slot'] == 'after' and old['flags'] == {'route-R': True} and old['md'] == '8/4' and old['cal'] and old['money'] == '¥12,345', f'an old save loads untouched ({old["md"]})')
        p.eval("['kg-femc-revamp-slot3'].forEach(k=>localStorage.removeItem(k))")
        errs = p.console(); ok(not errs, f'no browser errors in the save checks: {errs}')

    if 'glitch' in ONLY:
        p.goto('femc-game.html'); p.eval(HELPERS)
        KINDS = ['tint', 'weather', 'clock', 'date', 'phone', 'map', 'face', 'sound', 'tear', 'name', 'hands']
        ok(p.eval('FemcGlitch.KINDS') == KINDS, 'eleven glitch kinds')
        # Never in the main game: a year save, mid-year and on its last night.
        main = p.eval(r"""(async()=>{const G=FemcGame,GL=FemcGlitch;EP.year({'route-R':true});G.S.day=120;G.S.slot='late';G.save();
          const plays=GL.KINDS.map(k=>GL.play({kind:k,ms:3000})),ticks=['card','morning','out','late'].map(w=>GL.tick(w));
          let saw=0;const mo=new MutationObserver(()=>{if(document.querySelector('.g-glx,.gs-hand,.g-glx-dh,.g-glx-clock'))saw++});mo.observe(document.body,{subtree:true,childList:true,attributes:true});
          let choices=null;FemcScene.play({scene:[{n:'a'},{glitch:'tint'},{glitch:'hands'},{glitch:{kind:'hands',pickable:true,then:[{flag:'glx-main'}]}},{glitch:{stage:4}},{choose:[{t:'(x)'}]},{ifGlitch:0,then:[{flag:'glx-g0'}]},{n:'b'}],onDone:()=>{},label:'t'});
          for(let i=0;i<40&&document.querySelector('.gs:not(.out)');i++){const c=document.querySelectorAll('.gs:not(.out) .gs-choices button');if(c.length){choices=c.length;c[0].click()}else document.querySelector('.gs:not(.out)').click();await new Promise(r=>setTimeout(r,60))}
          await new Promise(r=>setTimeout(r,300));mo.disconnect();
          return {plays,ticks,saw,choices,state:'glitch' in G.S,stage:GL.stage(),active:GL.active(),flags:[!!G.S.flags['glx-main'],!!G.S.flags['glx-g0']],branch:JSON.stringify(G.branch({ifGlitch:0,then:['y'],else:['n']})),st:GL.state()}})()""")
        ok(not main['active'] and all(x == 0 for x in main['plays']) and all(x is None for x in main['ticks']) and main['stage'] == 0, f'the main game: no kind plays and no screen rolls one ({main["plays"]})')
        ok(main['saw'] == 0 and main['choices'] == 1 and not main['state'] and main['flags'] == [False, False] and main['branch'] == '["n"]' and main['st']['dom'] == 0 and main['st']['log'] == [],
           f'the main game: a scene’s glitch lines pass silently, no hands choice, ifGlitch is never true, no glitch state saved ({main["choices"]} choice, {main["branch"]})')

        # Into Runners. The opening scene's own tint (and the static of her thumbs) play through the real UI.
        p.eval("window.__hand=null;new MutationObserver(()=>{const h=document.querySelector('.gs-hand');if(h&&!window.__hand)window.__hand=[h.textContent,h.getAttribute('aria-disabled'),document.querySelectorAll('.gs-choices button').length]}).observe(document.body,{subtree:true,childList:true})")
        enter('route-R')
        ok(p.eval("FEMC_EPI_WORLDS.runners.glitches.length>0 && FemcGlitch.active()"), 'the world’s glitch file loads with it; glitches are live in the epilogue')
        ok(step_until("FemcGame.S.events.includes('epi-r-home') && !document.querySelector('.gs:not(.out)')"), 'the opening plays')
        op = p.eval("(()=>{const s=FemcGlitch.state();return {seen:s.seen,kinds:s.log.map(x=>x.kind),dom:s.dom}})()")
        ok('epi-r-g-wake' in op['seen'] and 'epi-r-g-thumbs' in op['seen'] and op['kinds'][:2] == ['tint', 'sound'], f'the opening scene’s tint and static ({op["kinds"][:3]})')
        ok(step_until("EP.screen()==='out'"), 'Go Out on 12/1')
        p.eval("FemcGame.setSetting('music',40)")

        # Every kind plays over a screen and leaves nothing behind.
        PROBE = {
          'tint': "!!document.querySelector('.g-bg.g-glx-dh') && !!document.querySelector('.g-glx-tint')",
          'weather': "FemcWeather.state().glitch==='rise' && FemcWeather.state().shown && FemcWeather.state().drops>0",
          'clock': "document.querySelector('.g-hud .g-slot').textContent==='12:00 AM' && !!document.querySelector('.g-hud .g-moon.g-glx-moon')",
          'date': "!!document.querySelector('.g-glx-date') && document.querySelector('.g-glx-date').textContent.includes('4/6') && document.querySelector('.g-glx-date').textContent.includes('2009')",
          'phone': "!!document.querySelector('.g-banners .g-glx-phone') && document.querySelector('.g-glx-phone').textContent.includes('Read 12:00 AM')",
          'face': "!!document.querySelector('.g-glx-ghost:not([hidden])') && /portraits\\//.test(document.querySelector('.g-glx-ghost').src)",
          'sound': "FemcGlitch.state().live>0",
          'tear': "document.querySelectorAll('.g-glx-tear path').length===1 && document.querySelectorAll('.g-glx-tear .g-glx-glass i').length===6",
          'name': "!!document.querySelector('.g-glx-name b') && document.querySelector('.g-glx-name').textContent.includes('Persona')",
        }
        CLEAN = "(()=>{const s=FemcGlitch.state();return s.dom===0&&s.live===0&&!s.weather&&!document.querySelector('.g-glx')&&document.querySelector('.g-hud .g-slot').textContent!=='12:00 AM'})()"
        played = {}
        for k, probe in PROBE.items():
            dur = p.eval("FemcGlitch.play({kind:%s,ms:%d})" % (json.dumps(k), 1500 if k == 'face' else 900))
            try: seen = p.wait(probe, 3)
            except TimeoutError: seen = False
            time.sleep(dur / 1000 + 0.5)
            played[k] = [dur > 0, bool(seen), p.eval(CLEAN)]
        ok(all(v == [True, True, True] for v in played.values()), f'nine screen kinds play, show and clean up ({played})')
        # Weather's hold mode, and a weather glitch on a clear day indoors (drops on the glass).
        wh = p.eval("(async()=>{FemcGlitch.play({kind:'weather',mode:'hold',ms:700});await new Promise(r=>setTimeout(r,100));const a=FemcWeather.state();const f0=a.frames;await new Promise(r=>setTimeout(r,300));const f1=FemcWeather.state().frames;await new Promise(r=>setTimeout(r,800));return [a.glitch,a.shown,f1-f0,FemcWeather.state().glitch]})()")
        ok(wh[0] == 'hold' and wh[1] and wh[2] == 0 and wh[3] is None, f'weather hold: the drops hang (no frames drawn while held), then the weather is itself again ({wh})')
        # The map: one greyed station card on Go Out (stage below 4), gone with the screen.
        mp = p.eval("(()=>{const n0=document.querySelectorAll('.g-epi-act').length,n=FemcGlitch.play({kind:'map'});const b=document.querySelector('.g-epi-acts .g-glx-station');return [b?b.textContent:null,b?b.disabled:null,document.querySelectorAll('.g-epi-act').length-n0]})()")
        ok(mp[0] and 'Iwatodai Station' in mp[0] and mp[1] is True and mp[2] == 1, f'the map: Iwatodai Station, greyed out ({mp})')
        # The date on the date card itself.
        dc = p.eval("(async()=>{FemcGame.setSetting('dateCard',true);FemcGameUI.dateCard(()=>{});FemcGlitch.play({kind:'date',md:'4/6',ms:1200});await new Promise(r=>setTimeout(r,900));const t=document.querySelector('.g-datecard .g-dc-days span:last-child').textContent+'|'+document.querySelector('.g-datecard .g-dc-month').textContent;await new Promise(r=>setTimeout(r,1300));const u=document.querySelector('.g-datecard .g-dc-days span:last-child')?.textContent;document.querySelectorAll('.g-datecard').forEach(x=>x.remove());FemcGame.setSetting('dateCard',false);return [t,u]})()")
        ok(dc[0].startswith('4/6') and 'APRIL 2009' in dc[0] and (dc[1] is None or dc[1].startswith('12/1')), f'the date card flickers to an Iwatodai date, then back ({dc})')
        # Hands: unpickable (it flickers and goes), then pickable (its lines play); scene lines and ifGlitch.
        hd = p.eval(r"""(async()=>{const G=FemcGame,GL=FemcGlitch,out={};
          FemcScene.play({scene:[{n:'x'},{glitch:'hands'},{choose:[{t:'(Wait.)'}]},{glitch:{kind:'hands',t:'(Evoke.)',pickable:true,then:[{flag:'glx-evoked'}]}},{choose:[{t:'(Wait.)'}]},
            {glitch:'clock',wait:false},{n:'y'},{glitch:{stage:3}},{ifGlitch:3,then:[{flag:'glx-at3'}],else:[{flag:'glx-not3'}]},{ifGlitch:4,then:[{flag:'glx-at4'}]},{n:'z'}],label:'t',place:'Syracuse · The Quad',onDone:()=>{out.done=true}});
          const S=ms=>new Promise(r=>setTimeout(r,ms)),sc=()=>document.querySelector('.gs:not(.out)');
          sc().click();await S(80);
          const h=sc().querySelector('.gs-hand');out.a=h?[h.textContent,h.getAttribute('aria-disabled')]:null;h&&h.click();await S(50);out.stay=!!sc().querySelector('.gs-choices button:not(.gs-hand)');
          await S(2600);out.gone=!sc().querySelector('.gs-hand');sc().querySelector('.gs-choices button').click();await S(120);
          const h2=sc().querySelector('.gs-hand.pick');out.b=h2?h2.textContent:null;h2&&h2.click();await S(120);
          out.place=sc().querySelector('.gs-place span').textContent;
          for(let i=0;i<10&&sc();i++){sc().click();await S(80)}
          out.flags=['glx-evoked','glx-at3','glx-not3','glx-at4'].filter(k=>G.S.flags[k]);out.stage=GL.state().stage;await S(1700);out.clean=GL.state().dom;return out})()""")
        ok(hd['a'] == ['(Evoke.)', 'true'] and hd['stay'] and hd['gone'], f'hands: a choice she didn’t write flickers in, can’t be picked, and goes ({hd["a"]})')
        ok(hd['b'] == '(Evoke.)' and 'glx-evoked' in hd['flags'], 'hands, pickable: picking it plays its lines')
        ok(hd['place'] == '12:00 AM' and hd['flags'][1:] == ['glx-at3'] and hd['stage'] == 3 and hd['done'] and hd['clean'] == 0, f'scene lines: the place plate reads 12:00 AM; a story stage; ifGlitch ({hd["flags"]}, stage {hd["stage"]})')
        # A face swap on a speaking portrait, put back after one frame.
        fc = p.eval(r"""(async()=>{const S=ms=>new Promise(r=>setTimeout(r,ms));FemcScene.play({scene:[{s:'hanni',f:'neutral',t:'hi'},{glitch:{kind:'face',who:'akihiko',ms:600}},{s:'hanni',f:'neutral',t:'again'}],label:'t',onDone:()=>{}});
          await S(200);const sc=document.querySelector('.gs:not(.out)'),img=sc.querySelector('.gs-portrait'),a=img.getAttribute('src');sc.click();await S(350);const b=img.getAttribute('src');await S(900);const c=img.getAttribute('src');
          for(let i=0;i<6&&document.querySelector('.gs:not(.out)');i++){document.querySelector('.gs:not(.out)').click();await S(80)}return [/hanni/.test(a),/akihiko/.test(b),c===a]})()""")
        ok(fc == [True, True, True], f'face: a speaking portrait swaps to someone from S.E.E.S. and back ({fc})')
        ok(not p.console(), 'no browser errors through every kind')

        # The stages: floors by date, the triggers (one higher), a story's own stage, the cap.
        stg = p.eval(r"""(()=>{const G=FemcGame,GL=FemcGlitch,s=G.S,g=s.glitch,at=(md,slot,ctx)=>{s.day=G.dayOf(md);s.slot=slot;return GL.stage(ctx)};delete g.set;g.near=null;g.strainDay=null;
          const r={};r.d1=at('12/1','early');r.d1late=at('12/1','late');r.moon=at('12/4','early');r.w2=at('12/10','after');r.w2late=at('12/10','late');r.reg=at('12/6','early');r.w3=at('12/15','early');r.top=at('12/19','early');r.cap=at('12/19','late');
          r.thin=at('12/2','after',{place:'Syracuse · Language Arts Rooftop'});r.notThin=at('12/2','after',{place:'Syracuse · The Quad'});GL.heard('hanni');r.other=at('12/2','after');GL.heard('haechan');r.constant=at('12/2','after');r.nextDay=at('12/3','after');
          g.strainDay=s.day;r.strain=at('12/3','after');g.strainDay=null;g.set={day:G.dayOf('12/3'),stage:4};r.story=at('12/3','early');r.storyNext=at('12/4','early');r.peak=g.peak;r.trig=GL.triggers();return r})()""")
        want = {'d1': 0, 'd1late': 1, 'moon': 1, 'reg': 1, 'w2': 2, 'w2late': 3, 'w3': 3, 'top': 4, 'cap': 4, 'thin': 1, 'notThin': 0, 'other': 0, 'constant': 1, 'nextDay': 0, 'strain': 1, 'story': 4, 'storyNext': 1, 'peak': 4}
        ok({k: stg[k] for k in want} == want, f'the stages escalate: floors 0 / 1 (Regionals) / 2 (the studio) / 3 / 4, midnight, full moon, thin place, constant, strain each one higher, a story’s own stage, capped at 4 ({stg})')
        # The same seed rolls the same glitches after a reload (slot round trip in a fresh page).
        ROLLS = r"""(()=>{const G=FemcGame,GL=FemcGlitch,s=G.S,keep=[s.day,s.slot],done=JSON.stringify(s.glitch.done),seen=[...s.glitch.seen],out=[];s.glitch.seen=[];
          for(let d=0;d<=G.END();d++)for(const sl of ['early','after','evening','late']){s.day=d;s.slot=sl;for(const w of ['card','morning','out','late']){const e=GL.roll(w,{place:'Syracuse · Alpha Phi House · Her Room'});out.push(e?e.id:'-')}}
          s.day=keep[0];s.slot=keep[1];s.glitch.done=JSON.parse(done);s.glitch.seen=seen;return {out,seed:s.glitch.seed}})()"""
        r1 = p.eval(ROLLS)
        p.eval("(()=>{const G=FemcGame;G.S.day=G.dayOf('12/2');G.S.slot='after';G.save();G.saveSlot(3)})()")
        p.goto('femc-game.html'); p.eval(HELPERS)
        p.eval("FemcGame.loadSlot(3)")
        p.eval("FemcEpilogue.loadWorld('runners').then(()=>FemcEpilogue.ensure())")
        p.wait("FemcGame.world()==='runners'", 20)
        r2 = p.eval(ROLLS)
        amb = sum(1 for x in r1['out'] if x.startswith('amb-'))
        ok(r1 == r2 and amb > 5 and len(set(x for x in r1['out'] if x != '-')) > 8, f'the same seed rolls the same glitches after a reload ({amb} ambient, {len(r1["out"])} screens)')
        ok(p.eval("FemcGame.S.glitch.seen.includes('epi-r-g-wake') && FemcGame.S.glitch.peak===4"), 'the glitch state comes back with the save (seen, peak)')

        # The station through the real UI: the schedule's greyed card on an evening 12/11-13, open at stage 4, and it opens.
        sta = p.eval(r"""(async()=>{const G=FemcGame,s=G.S,S=ms=>new Promise(r=>setTimeout(r,ms)),go=md=>{s.day=G.dayOf(md);s.slot='evening';delete s.spent[s.day+'-evening'];
            G.D.events.filter(e=>e.date===md).forEach(e=>{if(!s.events.includes(e.id))s.events.push(e.id)});s.dailyLife.lastDay=s.day;s.glitch.done={};s.glitch.seen=s.glitch.seen.filter(x=>x!=='epi-r-g-station');G.save();EP.clear();FemcGameUI.run()};
          go('12/11');await S(150);const a=document.querySelector('.g-glx-station');const r={grey:a?a.disabled:null};
          go('12/19');await S(150);FemcGlitch.play({kind:'map'});await S(50);const b=document.querySelector('.g-glx-station');r.open=b?!b.disabled:null;r.note=b?b.textContent:null;b&&b.click();await S(200);
          r.scene=!!document.querySelector('.gs:not(.out)');r.tear=!!document.querySelector('.g-glx-tear')||FemcGlitch.state().log.slice(-2).some(x=>x.kind==='tear');
          for(let i=0;i<30&&document.querySelector('.gs:not(.out)');i++){document.querySelector('.gs:not(.out)').click();await S(150)}
          await S(300);r.back=!!document.querySelector('.g-epi-out');r.gone=!document.querySelector('.g-glx-station');return r})()""")
        ok(sta['grey'] is True and sta['open'] is True and sta['scene'] and sta['tear'] and sta['back'] and sta['gone'], f'Go Out: Iwatodai Station greyed on 12/11, open at stage 4 on 12/19, and it opens ({sta})')

        # Settings: Glitch effects through the panel (Full → Gentle → Off), Reduce flashes, reduced motion.
        st0 = p.eval(r"""(async()=>{const S=ms=>new Promise(r=>setTimeout(r,ms));FemcGameUI.openSettings({startKey:'glitchFx'});await S(100);const row=document.querySelector('.g-set[data-k=glitchFx]');const v=[row.querySelector('b').textContent];
          row.querySelector('[data-d="1"]').click();v.push(row.querySelector('b').textContent,FemcGame.settings().glitchFx);row.querySelector('[data-d="1"]').click();v.push(row.querySelector('b').textContent,FemcGame.settings().glitchFx);
          document.querySelectorAll('.g-overlay').forEach(x=>x.remove());return v})()""")
        ok(st0 == ['Full', 'Gentle', 'gentle', 'Off', 'off'], f'the Glitch effects setting: Full by default, then Gentle, then Off ({st0})')
        off = p.eval(r"""(async()=>{const GL=FemcGlitch,S=ms=>new Promise(r=>setTimeout(r,ms)),n=GL.KINDS.filter(k=>k!=='hands'&&k!=='map').map(k=>GL.play({kind:k}));await S(50);const dom=GL.state().dom+document.querySelectorAll('.g-glx').length;
          GL.play({kind:'hands'});FemcScene.play({scene:[{choose:[{t:'(a)'}]},{glitch:{kind:'hands',pickable:true,then:[]}},{choose:[{t:'(b)'}]}],label:'t',onDone:()=>{}});await S(80);const sc=document.querySelector('.gs:not(.out)');const h1=sc.querySelectorAll('.gs-hand').length;
          sc.querySelector('.gs-choices button').click();await S(80);const h2=[...sc.querySelectorAll('.gs-hand')].map(b=>b.className.includes('m-off'));sc.querySelector('.gs-choices button').click();await S(80);for(let i=0;i<4&&document.querySelector('.gs:not(.out)');i++){document.querySelector('.gs:not(.out)').click();await S(60)}
          return {n,dom,h1,h2,logged:GL.state().log.slice(-3).map(x=>x.mode)}})()""")
        ok(all(x == 0 for x in off['n']) and off['dom'] == 0 and off['h1'] == 0 and off['h2'] == [True] and off['logged'][-1] == 'off', f'Off: nothing shows or sounds; an unpickable hands choice is gone, a pickable one shows plainly ({off})')
        p.eval("FemcGame.setSetting('glitchFx','gentle')")
        gen = p.eval(r"""(async()=>{const GL=FemcGlitch,s=FemcGame.S,S=ms=>new Promise(r=>setTimeout(r,ms)),d=GL.play({kind:'tint'});const w=document.querySelector('.g-glx-tint');const r={d,cls:w&&w.className,soft:!!document.querySelector('.g-bg.g-glx-dh.soft')};
          GL.clear();GL.play({kind:'tear'});r.shards=document.querySelectorAll('.g-glx-tear .g-glx-glass i').length;r.tear=!!document.querySelector('.g-glx-tear.m-gentle');GL.clear();
          const count=()=>{let n=0;const k=[s.day,s.slot];for(let x=0;x<=FemcGame.END();x++)for(const sl of ['early','after','evening','late']){s.day=x;s.slot=sl;const e=GL.roll('morning');if(e&&e.src==='ambient')n++}s.day=k[0];s.slot=k[1];return n};
          const seen=[...s.glitch.seen];s.glitch.seen=FemcEpilogue.raw().glitches.map(e=>e.id);r.gentle=count();FemcGame.setSetting('glitchFx','full');r.full=count();s.glitch.seen=seen;return r})()""")
        ok(gen['d'] == 660 and 'm-gentle' in gen['cls'] and gen['soft'] and gen['shards'] == 0 and gen['tear'] and gen['gentle'] < gen['full'], f'Gentle: shorter (660 ms), softer, no glass, fewer ambient glitches ({gen["gentle"]} vs {gen["full"]})')
        p.eval("FemcGame.setSetting('calm',true)")
        calm = p.eval(r"""(async()=>{const GL=FemcGlitch;GL.play({kind:'tint',ms:600});await new Promise(r=>setTimeout(r,60));const w=document.querySelector('.g-glx-tint');const r=[w.className.includes('calm'),getComputedStyle(w).animationName];GL.clear();return r})()""")
        ok(calm == [True, 'g-glx-fade'], f'Reduce flashes: the tint fades instead of flickering ({calm})')
        p.eval("FemcGame.setSetting('calm',false)")
        p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
        rm = p.eval(r"""(async()=>{const GL=FemcGlitch,S=ms=>new Promise(r=>setTimeout(r,ms)),r={};GL.play({kind:'tint',ms:900});await S(60);const w=document.querySelector('.g-glx-tint');r.tint=[w.className.includes('still'),getComputedStyle(w).animationName,getComputedStyle(w).opacity];
          GL.play({kind:'tear',ms:900});await S(60);const pth=document.querySelector('.g-glx-tear path');r.tear=[getComputedStyle(pth).strokeDashoffset,document.querySelectorAll('.g-glx-tear .g-glx-glass i').length];
          GL.play({kind:'name',ms:900});await S(60);const a=document.querySelector('.g-glx-name b').textContent;await S(400);r.name=a===document.querySelector('.g-glx-name b').textContent;
          GL.play({kind:'weather',ms:900});await S(100);const f0=FemcWeather.state().frames;await S(400);r.weather=[FemcWeather.state().still,FemcWeather.state().frames-f0];
          await S(700);r.clean=GL.state().dom;return r})()""")
        p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'no-preference'}]})
        ok(rm['tint'][0] and rm['tint'][1] == 'none' and float(rm['tint'][2]) > 0.5 and rm['tear'][0] in ('0', '0px') and rm['tear'][1] == 0 and rm['name'] and rm['weather'][0] and rm['weather'][1] == 0 and rm['clean'] == 0,
           f'reduced motion: still frames (a held tint, drawn cracks, a name that holds still, one weather frame) ({rm})')
        errs = p.console(); ok(not errs, f'no browser errors in the glitch checks: {errs}')

        # One desktop / phone pair mid-glitch: 12/19's Go Out with the open station, the tint, the clock and a tear.
        p.eval(r"""(()=>{const G=FemcGame,s=G.S;s.day=G.dayOf('12/19');s.slot='evening';delete s.spent[s.day+'-evening'];s.glitch.done={};G.save();EP.clear();FemcGameUI.run();
          ['tint','clock','tear','name'].forEach(k=>FemcGlitch.play({kind:k,ms:30000}));FemcGlitch.play({kind:'weather',mode:'rise',ms:30000})})()""")
        time.sleep(0.8)
        shots('glitch-mid')
        p.eval("FemcGlitch.clear()")
        ok(p.eval("FemcGlitch.state().dom===0 && !FemcGlitch.state().weather"), 'clear() ends everything at once')
        p.eval("localStorage.removeItem('kg-femc-revamp-slot3')")

    if 'runners1' in ONLY:
        # Runners part 1 (batch 3): the real world for 12/1-12/14. A structural walk of every scene, three real runs through the UI
        # (one per route), the route choice, home bonds, glitches on schedule, texts, a mid-week-2 save, and the year untouched.
        p.goto('femc-game.html'); p.eval(HELPERS)
        p.eval(DRIVER)
        year_before = p.eval(r"""(()=>{const G=FemcGame;EP.year({'route-R':true});G.S.day=200;G.S.slot='after';const h=G.progress('hanni');const x0=h.xp||0;
          const b=JSON.stringify([G.branch({ifBond:{hanni:0},then:['y'],else:['n']}),G.branch({ifRouteOpen:'cover',then:['y'],else:['n']})]);
          return {links:Object.keys(G.LINKS).length,cal:G.D.cal===FEMC_GAME_CALENDAR,b,epi:'epi' in G.S}})()""")
        ok(year_before['cal'] and year_before['b'] == '[["n"],["n"]]' and not year_before['epi'], f'the year: ifBond and ifRouteOpen are never true outside the epilogue ({year_before["b"]})')
        enter('route-R')
        ok(p.eval("FEMC_EPI_WORLDS.runners._loaded===5 && !FEMC_EPI_WORLDS.runners.stub && FemcGame.world()==='runners'"), 'the Runners world loads all its files (calendar, world, glitches, people, the story files)')
        # The data: dates and slots of weeks 1-2's beats (week 3 and 12/14's late pull are runners2's).
        beats = p.eval("FemcGame.D.events.filter(e=>FemcGame.dayOf(e.date)<=FemcGame.dayOf('12/14')&&e.id!=='epi-r-alone').map(e=>[e.id,e.date,e.slot,e.flag||null])")
        want_beats = {'epi-r-home': ['12/1', 'early'], 'epi-r-five-days': ['12/1', 'after'], 'epi-r-pale': ['12/1', 'late'], 'epi-r-cover': ['12/2', 'early'], 'epi-r-ask': ['12/2', 'late'],
                      'epi-r-did-you-eat': ['12/3', 'after'], 'epi-r-confession': ['12/3', 'evening'], 'epi-r-moon': ['12/4', 'late'], 'epi-r-friday': ['12/5', 'evening'],
                      'epi-r-regionals-1': ['12/6', 'early'], 'epi-r-regionals-2': ['12/7', 'early'], 'epi-r-crossroads': ['12/7', 'late'], 'epi-r-studio': ['12/9', 'evening'],
                      'epi-r-playback': ['12/10', 'evening'], 'epi-r-sisters': ['12/10', 'evening'], 'epi-r-reel': ['12/10', 'evening'], 'epi-r-print': ['12/11', 'after'],
                      'epi-r-strategy': ['12/11', 'evening'], 'epi-r-sigma': ['12/12', 'evening'], 'epi-r-sunday': ['12/14', 'after']}
        got_beats = {b[0]: [b[1], b[2]] for b in beats}
        ok(all(got_beats.get(k) == v for k, v in want_beats.items()) and len(beats) == 20, f'twenty story beats on Kat’s canon dates (12/1 to 12/14) and slots ({len(beats)})')
        ok({b[0]: b[3] for b in beats if b[3]} == {'epi-r-playback': 'epi-route-haechan', 'epi-r-sisters': 'epi-route-cover', 'epi-r-reel': 'epi-route-minji'}, 'each route has its own 12/10 beat')
        dates = p.eval("(()=>{const G=FemcGame,i=d=>G.dayInfo(G.dayOf(d));return [i('12/1').day,i('12/6').day,i('12/7').day,i('12/14').day,i('12/4').moon.full,G.mdOf(G.END())]})()")
        ok(dates == ['Mon', 'Sat', 'Sun', 'Sun', True, '12/20'], f'the calendar: Regionals on the weekend of 12/6, the full moon on 12/4 ({dates})')
        # The structural walk: every line on every branch of every event, routine and hangout.
        walk = p.eval("WALK()")
        ok(not walk['problems'], f'every scene line resolves (speakers, faces, places, music, glitches): {walk["problems"][:8]}')
        ok(walk['scenes'] >= 20 + 8 + 21 and walk['lines'] > 1500, f'{walk["scenes"]} scenes walked ({walk["lines"]} lines, {walk["paths"]} paths by choice and branch)')
        assets = p.eval("CHECK_ASSETS(%s)" % json.dumps(walk['urls']), timeout=120)
        ok(not assets['bad'] and assets['n'] >= 15, f'every background and portrait those scenes use loads ({assets["n"]}): {assets["bad"]}')
        mus = walk['music']
        ok({'world-runners', 'epi-r-confession', 'epi-r-regionals', 'epi-r-closure', 'epi-r-studio'} <= set(mus), f'the world theme and the music placeholders are in the scenes ({sorted(mus)})')
        # Home bonds: closeness from the year (romance + Christmas pick for Haechan at rank 15; Minji at rank 8; nobody else).
        start = p.eval("(()=>{const E=FemcEpilogue;return ['haechan','minji','hanni','danielle'].map(id=>E.closeness(id))})()")
        ok(start == [5, 2, 0, 0], f'closeness starts from the year: Haechan 5, Minji 2, the rest 0 ({start})')
        yflags = p.eval("Object.keys(FemcGame.S.flags).filter(k=>k.startsWith('y-')).sort()")
        ok('y-xmas-haechan' in yflags and 'y-romance-haechan' in yflags and 'y-route-R' in yflags, f'the year’s flags carried as y- flags ({yflags})')

        def run(policy, until='12/14'):
            return p.eval("RUN(%s,%s)" % (json.dumps(until), json.dumps(policy)), timeout=900)

        def route_state():
            return p.eval(r"""(()=>{const G=FemcGame,s=G.S,GS=FemcGlitch.state();return {route:s.epi.route,locked:s.epi.locked,ev:s.events,flags:Object.keys(s.flags).filter(k=>/^epi-/.test(k)),
              seen:GS.seen,bonds:s.epi.bonds,threads:Object.keys(s.phone.threads||{}),routines:(s.dailyLife.seen||[]).length,md:G.mdOf(s.day),slot:s.slot,stats:s.stats}})()""")

        # Route 1: Haechan (his romance and her Christmas pick; "Not yet" to the stem; the long way home).
        h = run({'prefer': ['Not yet.', 'long way', 'Post it', '(Stay.)']})
        st = route_state()
        ok(st['md'] == '12/14' and st['slot'] == 'late', f'the Haechan run reaches 12/14’s night through the UI ({st["md"]} {st["slot"]}, {h["steps"]} steps)')
        ok(st['route'] == 'haechan' and st['locked'] and 'epi-route-haechan' in st['flags'] and 'epi-r-stem-wait' in st['flags'], 'the crossroads picks Haechan; the route locks on 12/7’s night')
        evs = ['epi-r-home', 'epi-r-confession', 'epi-r-regionals-1', 'epi-r-regionals-2', 'epi-r-crossroads', 'epi-r-studio', 'epi-r-playback', 'epi-r-print', 'epi-r-strategy', 'epi-r-sigma', 'epi-r-sunday']
        ok(all(e in st['ev'] for e in evs) and 'epi-r-sisters' not in st['ev'] and 'epi-r-reel' not in st['ev'], f'every Haechan-route beat plays, none of the other routes’ ({len(st["ev"])} events)')
        ok(any(c.startswith('(Walk back the long way') for c in h['cross']) and len(h['cross']) >= 2, f'the crossroads offered ({h["cross"]})')
        ok(any(f.startswith('epi-r-term-') for f in st['flags']) and any(f in st['flags'] for f in ['epi-r-public-inner', 'epi-r-public-post']), 'the studio’s terms and going public were chosen')
        g_need = ['epi-r-g-wake', 'epi-r-g-thumbs', 'epi-r-g-moon', 'epi-r-g-junpei', 'epi-r-g-evoke', 'epi-r-g-room', 'epi-r-g-freeze', 'epi-r-g-sting', 'epi-r-g-date', 'epi-r-g-name', 'epi-r-g-thread']
        ok(all(g in st['seen'] for g in g_need), f'the glitches on schedule, week 1 to week 2 ({[g for g in g_need if g not in st["seen"]]} missing)')
        ok(len(h['hangouts']) >= 6 and any(x.endswith('epi-r-haechan-3') for x in h['hangouts']), f'home bonds through Go Out, including the Haechan route’s own ({h["hangouts"]})')
        ok(st['bonds']['haechan']['c'] > 5 and any(st['bonds'][k]['c'] >= 1 for k in st['bonds'] if k != 'haechan'), f'closeness grows ({ {k: v["c"] for k, v in st["bonds"].items()} })')
        ok(h['practice'] >= 4 and st['routines'] >= 3, f'practice days ({h["practice"]}) and routines ({st["routines"]}) through the UI')
        ok({'girls', 'haechan', 'team'} <= set(st['threads']), f'texts arrive on their threads ({st["threads"]})')
        ok(p.eval("FemcGame.S.glitch.peak>=2"), 'week 2 reaches stage 2')
        errs = p.console(); ok(not errs, f'no browser errors on the Haechan run: {errs}')
        # A mid-week-2 save: the slot in a fresh page keeps the route, bonds, glitch state and flags; the next day plays on.
        p.eval("(()=>{const G=FemcGame;G.saveSlot(3)})()")
        snap = p.eval("JSON.stringify({d:FemcGame.S.day,r:FemcGame.S.epi.route,b:FemcGame.S.epi.bonds,g:FemcGame.S.glitch.seen,f:Object.keys(FemcGame.S.flags).sort()})")
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER)
        p.eval("FemcGame.loadSlot(3)")
        p.eval("EP.clear();FemcGameUI.run()")
        p.wait("FemcGame.world()==='runners'", 20)
        back = p.eval("JSON.stringify({d:FemcGame.S.day,r:FemcGame.S.epi.route,b:FemcGame.S.epi.bonds,g:FemcGame.S.glitch.seen,f:Object.keys(FemcGame.S.flags).sort()})")
        ok(back == snap, 'a 12/14 slot loads in a fresh page with its route, bonds, glitches and flags')
        nxt = p.eval("RUN('12/14',{prefer:[]},true)", timeout=300)
        ok(p.eval("FemcGame.mdOf(FemcGame.S.day)") == '12/15', 'and sleeps on into 12/15')
        p.eval("localStorage.removeItem('kg-femc-revamp-slot3')")

        # Route 2: the cover (no romance, no Christmas pick; "Delete it" closes Haechan's route at the crossroads).
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER)
        p.eval("(()=>{EP.year({'route-R':true},{links:{hanni:{rank:10,xp:0,seen:[],rankDay:{}},hyein:{rank:6,xp:0,seen:[],rankDay:{}},minji:{rank:3,xp:0,seen:[],rankDay:{}}},route:{tally:{},choices:{},frags:{R:0,S:0,H:0},doorsDue:[],doorsSeen:[]},flags:{'year-goes-on':true,'route-R':true}});EP.end()})()")
        p.eval("document.querySelector('[data-t=epi]').click()"); p.wait("!!document.querySelector('.g-epi-offer [data-go]')"); p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
        p.wait("!!FemcGame.S.epi && FemcGame.world()==='runners'", 20)
        ok(p.eval("[FemcGame.S.epi.lean,FemcEpilogue.closeness('hanni'),FemcEpilogue.closeness('haechan')]") == ['cover', 3, 0], 'the cover’s lean, Hanni’s closeness from rank 10')
        c = run({'prefer': ['Delete it.', 'shuttle', '(Stay.)']})
        st = route_state()
        ok(st['route'] == 'cover' and 'epi-r-stem-deleted' in st['flags'] and not any(x.startswith('(Walk back the long way') for x in c['cross']) and len(c['cross']) == 1,
           f'"Delete it" closes Haechan’s route; the crossroads offers only the girls ({c["cross"]})')
        ok('epi-r-sisters' in st['ev'] and 'epi-r-playback' not in st['ev'] and 'epi-r-studio' in st['ev'] and 'epi-r-sigma' in st['ev'], 'the cover route’s beats play (the sisters on 12/10; the studio with a friend at the door)')
        ok(not any(x.endswith('epi-r-haechan-3') for x in c['hangouts']), f'the Haechan route’s own hangout never shows off it ({c["hangouts"]})')
        errs = p.console(); ok(not errs, f'no browser errors on the cover run: {errs}')

        # Route 3: Minji (her romance and Christmas pick; "Give me the file").
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER)
        p.eval("(()=>{EP.year({'route-R':true,'arrived-mark':true,'arrived-danielle':true,'arrived-jaemin':true,'arrived-chenle':true},{links:{minji:{rank:15,xp:0,seen:[],rankDay:{},route:'romance'},haechan:{rank:6,xp:0,seen:[],rankDay:{},route:'friend'}},route:{tally:{},choices:{xmas:'minji'},frags:{R:0,S:0,H:0},doorsDue:[],doorsSeen:[]}});const s=FemcGame.S;delete s.flags['xmas-haechan'];s.flags['xmas-minji']=true;FemcGame.save();EP.end()})()")
        p.eval("document.querySelector('[data-t=epi]').click()"); p.wait("!!document.querySelector('.g-epi-offer [data-go]')"); p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
        p.wait("!!FemcGame.S.epi && FemcGame.world()==='runners'", 20)
        ok(p.eval("[FemcGame.S.epi.lean,FemcEpilogue.closeness('minji')]") == ['minji', 5], 'Minji’s lean, her closeness from rank 15, romance and the Christmas pick')
        m = run({'prefer': ['Give me the file.', 'Minji', '(Stay.)']})
        st = route_state()
        ok(st['route'] == 'minji' and 'epi-r-stem-file' in st['flags'] and any('Minji' in x for x in m['cross']), f'the crossroads offers Minji and locks her route ({m["cross"]})')
        ok('epi-r-reel' in st['ev'] and 'epi-r-sisters' not in st['ev'] and 'epi-r-playback' not in st['ev'], 'the Minji route’s beats play')
        errs = p.console(); ok(not errs, f'no browser errors on the Minji run: {errs}')
        # One desktop / phone pair: a week-2 Go Out with people above places.
        p.eval(r"""(()=>{const G=FemcGame,s=G.S;s.day=G.dayOf('12/13');s.slot='evening';s.epi.bonds={};delete s.spent[s.day+'-evening'];G.save();EP.clear();FemcGameUI.run()})()""")
        p.wait("!!document.querySelector('.g-epi-out')")
        ok(p.eval("document.querySelectorAll('.g-epi-bond').length") >= 1, 'Go Out lists people above places')
        p.eval("document.querySelectorAll('.g-banners > *, .g-toasts > *').forEach(x=>x.remove());document.querySelector('.g-epi-out .g-seg-box')?.scrollTo(0,0)")
        shots('runners1-goout')

    if 'runners2' in ONLY:
        # Runners part 2 (batch 4): week 3 and the act's end. Three whole acts through the real UI, one per route, to the end card,
        # the Equinox card and the year's end screen; a save across the finale; the main game untouched.
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER)
        HOOK = r"""(()=>{const G=FemcGame;window.__snap=null;window.__cards=[];window.__noBattle=true;const mk=G.markEvent;
          G.markEvent=id=>{const r=mk(id);if(id==='epi-r-rooftop')window.__snap=JSON.parse(JSON.stringify(G.S));return r};
          const mh=G.makeHandoff;G.makeHandoff=(...a)=>{if(G.S.epi)window.__noBattle=false;return mh(...a)};
          new MutationObserver(()=>document.querySelectorAll('.g-epi-card').forEach(c=>{const t=c.querySelector('.g-ac-num').textContent+' · '+c.querySelector('.g-ac-title').textContent;if(!__cards.includes(t))__cards.push(t)})).observe(document.body,{childList:true})})()"""
        # The main game for a player who never enters: no week-3 data reaches the year.
        base = p.eval(r"""(()=>{const G=FemcGame;EP.year({'route-R':true});G.S.day=200;return {cal:G.D.cal===FEMC_GAME_CALENDAR,ev:G.D.events===FEMC_GAME_EVENTS,world:G.world(),ends:FEMC_GAME_EVENTS.some(e=>e.ends),
          gl:!FemcGlitch.active(),b:JSON.stringify(G.branch({ifGlitch:3,then:['y'],else:['n']}))}})()""")
        ok(base['cal'] and base['ev'] and base['world'] is None and not base['ends'] and base['gl'] and base['b'] == '["n"]', f'the year reads Iwatodai’s data; no glitch, no `ends`, ifGlitch false ({base})')
        enter('route-R')
        ok(p.eval("FEMC_EPI_WORLDS.runners._loaded===5 && FemcEpilogue.WORLDS.runners.files.join()==='calendar,world,glitches,people,story-w1,story-w2,people-w3,story-w3'"), 'the Runners world loads eight files (week 3’s story and people files last)')
        beats = p.eval("FemcGame.D.events.filter(e=>e.id==='epi-r-alone'||FemcGame.dayOf(e.date)>=FemcGame.dayOf('12/15')).map(e=>[e.id,e.date,e.slot,!!e.ends,!!e.consumes])")
        want3 = {'epi-r-alone': ['12/14', 'late'], 'epi-r-upward': ['12/15', 'early'], 'epi-r-kitchen': ['12/16', 'early'], 'epi-r-unseen': ['12/16', 'late'], 'epi-r-butterfly': ['12/17', 'evening'],
                 'epi-r-clocks': ['12/18', 'early'], 'epi-r-unheard': ['12/18', 'late'], 'epi-r-holiday': ['12/19', 'evening'], 'epi-r-footage': ['12/19', 'late'],
                 'epi-r-first-snow': ['12/20', 'early'], 'epi-r-rooftop': ['12/20', 'late']}
        got3 = {b[0]: [b[1], b[2]] for b in beats}
        ok(got3 == want3, f'week 3’s eleven beats on their dates and slots ({len(beats)})')
        ok([b[0] for b in beats if b[3]] == ['epi-r-rooftop'] and p.eval("FemcGame.D.events.length") == 31, 'only the rooftop ends the act; 31 story events in all')
        fights = p.eval(r"""(()=>{const out=[];const f=l=>{for(const x of l||[]){if(x.battle)out.push([x.battle.script,x.battle.kind,x.battle.forced,!!x.battle.notes]);f(x.then);f(x.else);(x.choose||[]).forEach(o=>f(o.then))}};FemcGame.D.events.forEach(e=>f(e.scene));return out})()""")
        ok([x[0] for x in fights] == ['epi-runners-1', 'epi-runners-2', 'epi-runners-3', 'epi-runners-4'] and all(x[1] == 'scripted' and x[2] and x[3] for x in fights), f'the four half-present fights are scripted, forced placeholders with notes for batch 6 ({fights})')
        bjs = (pathlib.Path(__file__).resolve().parent.parent / 'assets/femc/battle/battle.js').read_text()
        ok('epi-runners' not in bjs and 'function genericScript' in bjs and '(SCRIPTS[id] || genericScript)' in bjs, 'battle.js has no epi-runners script yet, so a handoff would get its plain story fight')
        walk = p.eval("WALK()")
        ok(not walk['problems'], f'every line of the whole world resolves (speakers, faces, places, music, glitches): {walk["problems"][:8]}')
        ok(walk['scenes'] == 31 + 11 + 31, f'{walk["scenes"]} scenes walked ({walk["lines"]} lines, {walk["paths"]} paths)')
        assets = p.eval("CHECK_ASSETS(%s)" % json.dumps(walk['urls']), timeout=120)
        ok(not assets['bad'], f'every background and portrait loads ({assets["n"]}): {assets["bad"]}')
        need = {'epi-r-finals', 'epi-r-verdict', 'epi-r-bleed', 'epi-r-half', 'epi-r-holiday', 'epi-r-footage', 'epi-r-snow', 'world-runners'}
        ok(need <= set(walk['music']) and p.eval("FemcGame.D.events.find(e=>e.id==='epi-r-rooftop').scene[0].music") == 'world-runners', f'week 3’s ♪ placeholders and world-runners on the rooftop ({sorted(need - set(walk["music"]))} missing)')

        def run(policy, until='12/20', sleep=True):
            return p.eval("RUN(%s,%s,%s)" % (json.dumps(until), json.dumps(policy), 'true' if sleep else 'false'), timeout=1500)

        def finale(tag):
            snap = p.eval("(()=>{const s=window.__snap;if(!s)return null;return {route:s.epi.route,ev:s.events,flags:Object.keys(s.flags).filter(k=>/^epi-/.test(k)),seen:s.glitch.seen,peak:s.glitch.peak,handoff:s.handoff||null}})()")
            ok(snap is not None, f'{tag}: the rooftop plays and is recorded')
            p.wait("!!document.querySelector('.g-end')", 30)
            end = p.eval(r"""(()=>{const s=FemcGame.S,c=JSON.parse(localStorage.getItem(FemcGame.CLEARS_KEY)||'[]').find(x=>x.run===s.runId);return {epi:'epi' in s,y1:'year1' in s,e:s.epilogues&&s.epilogues.runners,
              yen:s.yen,bs:s.battleSave&&s.battleSave.marker,world:FemcGame.world(),clear:c&&c.epi,ngp:!!document.querySelector('.g-end [data-t]'),cards:window.__cards.slice(),noBattle:window.__noBattle,gl:FemcGlitch.active()}})()""")
            ok(end['cards'] == ['EPILOGUE · Syracuse', 'PERSONA 3 · EQUINOX'], f'{tag}: the end card, then the Equinox card ({end["cards"]})')
            ok(not end['epi'] and not end['y1'] and end['e'] and end['e']['done'] and end['e']['route'] == snap['route'] and end['world'] is None and not end['gl'], f'{tag}: back to the year’s end screen ({end["e"]})')
            ok(end['yen'] == 12345 and end['bs'] == 'year-battle' and end['clear'] and 'runners' in end['clear'] and end['ngp'], f'{tag}: the year’s yen and battle save, the clear noted, the end screen’s buttons ({end["clear"]})')
            ok(end['noBattle'] and snap['handoff'] is None, f'{tag}: the fight placeholders made no handoff inside the epilogue (batch 6 wires them)')
            return snap

        g3 = ['epi-r-g-alone', 'epi-r-g-upward', 'epi-r-g-kitchen', 'epi-r-g-butterfly', 'epi-r-g-clocks', 'epi-r-g-midnight', 'epi-r-g-pull', 'epi-r-g-hud']
        week3 = ['epi-r-alone', 'epi-r-upward', 'epi-r-kitchen', 'epi-r-unseen', 'epi-r-butterfly', 'epi-r-clocks', 'epi-r-unheard', 'epi-r-holiday', 'epi-r-footage', 'epi-r-first-snow', 'epi-r-rooftop']

        # Route 1: Haechan (romance + Christmas pick; Danielle refused in the year). Played to 12/20's morning, saved, finished in a fresh page.
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER); p.eval(HOOK)
        p.eval("(()=>{EP.year({'route-R':true,'danielle-refused':true,'arrived-danielle':true});EP.end()})()")
        p.eval("document.querySelector('[data-t=epi]').click()"); p.wait("!!document.querySelector('.g-epi-offer [data-go]')"); p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
        p.wait("!!FemcGame.S.epi && FemcGame.world()==='runners'", 20)
        pol_h = {'prefer': ['Not yet.', 'long way', 'Post it', '(Stay', 'Ten minutes', 'make music honestly', 'While.', 'Yes. It', '(Confirm', '(Kiss him', '(Put the reader']}
        h = run(pol_h, '12/19')
        st = p.eval("(()=>{const s=FemcGame.S;return {md:FemcGame.mdOf(s.day),slot:s.slot,route:s.epi.route,ev:s.events,peak:s.glitch.peak,flags:Object.keys(s.flags).filter(k=>/^epi-/.test(k))}})()")
        ok(st['md'] == '12/20' and st['route'] == 'haechan' and all(e in st['ev'] for e in week3[:9]), f'the Haechan act reaches 12/20 through the UI with week 3’s beats so far ({st["md"]}, {h["steps"]} steps)')
        ok(st['peak'] == 4 and 'epi-r-mark-door' in st['flags'] and 'epi-r-said-it' in st['flags'] and 'epi-r-travel-yes' in st['flags'] and 'epi-r-footage-file' in st['flags'], f'stage 4 by the party; the verdict, out loud, the travel, the file Danielle gave up ({[f for f in st["flags"] if "footage" in f or "mark-" in f or "travel" in f]})')
        ok(any(x.startswith('haechan:epi-r-haechan-4') for x in h['hangouts']) or any('-3' in x or '-4' in x for x in h['hangouts']), f'week 3’s hangouts show in Go Out ({h["hangouts"][-6:]})')
        errs = p.console(); ok(not errs, f'no browser errors on the Haechan act: {errs}')
        p.eval("FemcGame.saveSlot(3)")
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER); p.eval(HOOK)
        p.eval("FemcGame.loadSlot(3)"); p.eval("EP.clear();FemcGameUI.run()")
        p.wait("FemcGame.world()==='runners'", 20)
        ok(p.eval("FemcGame.mdOf(FemcGame.S.day)==='12/20' && FemcGame.S.epi.route==='haechan'"), 'the 12/20 slot loads in a fresh page (the world on demand, the route kept)')
        stop = run({**pol_h, 'stopText': 'Every world.'})
        ok(stop.get('stopped'), 'the rooftop reaches its last promise')
        p.eval("document.querySelectorAll('.g-banners > *, .g-toasts > *').forEach(x=>x.remove())")
        shots('runners2-rooftop')
        run(pol_h)
        sh = finale('Haechan')
        ok(all(e in sh['ev'] for e in week3) and {'epi-r-jacket', 'epi-r-held'} <= set(sh['flags']), 'Haechan: every week-3 beat, the jacket on the roof, held')
        ok(all(g in sh['seen'] for g in g3), f'the week-3 glitches on schedule ({[g for g in g3 if g not in sh["seen"]]} missing)')
        errs = p.console(); ok(not errs, f'no browser errors finishing from the slot: {errs}')
        p.eval("localStorage.removeItem('kg-femc-revamp-slot3')")

        # Route 2: the cover (Hanni at rank 10; Danielle sold in the year). The whole act in one go.
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER); p.eval(HOOK)
        p.eval("(()=>{EP.year({'route-R':true},{links:{hanni:{rank:10,xp:0,seen:[],rankDay:{}},hyein:{rank:6,xp:0,seen:[],rankDay:{}}},route:{tally:{},choices:{},frags:{R:0,S:0,H:0},doorsDue:[],doorsSeen:[]},flags:{'year-goes-on':true,'route-R':true,'danielle-sold':true}});EP.end()})()")
        p.eval("document.querySelector('[data-t=epi]').click()"); p.wait("!!document.querySelector('.g-epi-offer [data-go]')"); p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
        p.wait("!!FemcGame.S.epi && FemcGame.world()==='runners'", 20)
        run({'prefer': ['Delete it.', 'shuttle', '(Stay', '(Nod', 'Thank you for telling', 'What are you going', '(Lie.) It', "(Don't answer"]})
        sc_ = finale('the cover')
        ok(sc_['route'] == 'cover' and all(e in sc_['ev'] for e in week3) and 'epi-r-footage-sent' in sc_['flags'] and 'epi-r-travel-no' in sc_['flags'] and 'epi-r-mark-closed' in sc_['flags'] and 'epi-r-jacket' not in sc_['flags'] and 'epi-r-held' in sc_['flags'],
           f'the cover: every week-3 beat, Danielle has sent it, no answer to Ms. Han, the jacket stays in the bag, held ({[f for f in sc_["flags"] if f.startswith("epi-r-") and ("footage" in f or "travel" in f or "jacket" in f)]})')
        errs = p.console(); ok(not errs, f'no browser errors on the cover act: {errs}')

        # Route 3: Minji (her romance and Christmas pick; neither Danielle flag). The whole act in one go.
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER); p.eval(HOOK)
        p.eval("(()=>{EP.year({'route-R':true,'arrived-mark':true,'arrived-danielle':true,'arrived-jaemin':true,'arrived-chenle':true},{links:{minji:{rank:15,xp:0,seen:[],rankDay:{},route:'romance'},haechan:{rank:6,xp:0,seen:[],rankDay:{},route:'friend'}},route:{tally:{},choices:{xmas:'minji'},frags:{R:0,S:0,H:0},doorsDue:[],doorsSeen:[]}});const s=FemcGame.S;delete s.flags['xmas-haechan'];s.flags['xmas-minji']=true;FemcGame.save();EP.end()})()")
        p.eval("document.querySelector('[data-t=epi]').click()"); p.wait("!!document.querySelector('.g-epi-offer [data-go]')"); p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
        p.wait("!!FemcGame.S.epi && FemcGame.world()==='runners'", 20)
        run({'prefer': ['Give me the file.', 'Minji', 'Yes. All of it', '(Stay', 'Ten minutes', 'make music honestly', 'While.', 'Yes. It', '(Confirm']})
        sm = finale('Minji')
        ok(sm['route'] == 'minji' and all(e in sm['ev'] for e in week3) and 'epi-r-footage-kept' in sm['flags'] and 'epi-r-jacket' not in sm['flags'] and 'epi-r-held' in sm['flags'], 'Minji: every week-3 beat, Danielle keeps it, the camera on the roof, held')
        errs = p.console(); ok(not errs, f'no browser errors on the Minji act: {errs}')
        # And the year afterwards: Iwatodai's data again, no glitch.
        aft = p.eval("(()=>{const G=FemcGame;return [G.D.events===FEMC_GAME_EVENTS,G.D.cal===FEMC_GAME_CALENDAR,FemcGlitch.active(),G.money(5)]})()")
        ok(aft == [True, True, False, '¥5'], f'after the act the year reads Iwatodai again, in yen ({aft})')

    if 'hoax' in ONLY:
        # HOAX (batch 5): the whole world, 12/21/2023 to the gym at midnight on 1/12/2024. A structural walk of every scene, the
        # hearing's stat checks, three whole acts through the real UI (one per route) to the end card, the Equinox card and the
        # year's end screen; a save mid-week-3 finished in a fresh page; the main game untouched.
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER)
        HOOK_H = r"""(()=>{const G=FemcGame;window.__snap=null;window.__cards=[];window.__noBattle=true;const mk=G.markEvent;
          G.markEvent=id=>{const r=mk(id);if(id==='epi-h-gym')window.__snap=JSON.parse(JSON.stringify(G.S));return r};
          const mh=G.makeHandoff;G.makeHandoff=(...a)=>{if(G.S.epi)window.__noBattle=false;return mh(...a)};
          new MutationObserver(()=>document.querySelectorAll('.g-epi-card').forEach(c=>{const t=c.querySelector('.g-ac-num').textContent+' · '+c.querySelector('.g-ac-title').textContent;if(!__cards.includes(t))__cards.push(t)})).observe(document.body,{childList:true})})()"""
        base = p.eval(r"""(()=>{const G=FemcGame;EP.year({'route-H':true});G.S.day=200;G.S.slot='after';return {cal:G.D.cal===FEMC_GAME_CALENDAR,ev:G.D.events===FEMC_GAME_EVENTS,world:G.world(),
          ends:FEMC_GAME_EVENTS.some(e=>e.ends),gl:!FemcGlitch.active(),b:JSON.stringify([G.branch({ifGlitch:3,then:['y'],else:['n']}),G.branch({ifRouteOpen:'council',then:['y'],else:['n']}),G.branch({ifBond:{jungwon:0},then:['y'],else:['n']})])}})()""")
        ok(base['cal'] and base['ev'] and base['world'] is None and not base['ends'] and base['gl'] and base['b'] == '[["n"],["n"],["n"]]', f'a HOAX year reads Iwatodai’s data; no glitch, no `ends`, ifGlitch / ifRouteOpen / ifBond false ({base})')
        enter('route-H')
        files = 'calendar,world,glitches,people,people-crew,story-w1,story-w2,story-w3,story-end'
        ok(p.eval(f"FEMC_EPI_WORLDS.hoax._loaded===5 && !FEMC_EPI_WORLDS.hoax.stub && FemcGame.world()==='hoax' && FemcEpilogue.WORLDS.hoax.files.join()==='{files}'"), 'the HOAX world loads its nine files (no stand-in left)')
        beats = p.eval("FemcGame.D.events.map(e=>[e.id,e.date,e.slot,e.flag||null,!!e.ends])")
        want = {'epi-h-home': ['12/21', 'early'], 'epi-h-part-four': ['12/21', 'after'], 'epi-h-curfew': ['12/21', 'late'], 'epi-h-emergency': ['12/22', 'after'],
                'epi-h-study-plans': ['12/23', 'after'], 'epi-h-karaoke': ['12/23', 'evening'], 'epi-h-eve': ['12/24', 'evening'], 'epi-h-christmas': ['12/25', 'after'],
                'epi-h-seance': ['12/27', 'late'], 'epi-h-party': ['12/29', 'evening'], 'epi-h-livestream': ['12/31', 'evening'], 'epi-h-notes': ['12/31', 'late'],
                'epi-h-new-year': ['1/1', 'early'], 'epi-h-motion': ['1/2', 'after'], 'epi-h-alone': ['1/2', 'late'], 'epi-h-study-jw': ['1/3', 'evening'],
                'epi-h-study-jh': ['1/3', 'evening'], 'epi-h-study-council': ['1/3', 'evening'], 'epi-h-snowed-in': ['1/4', 'after'], 'epi-h-clocks': ['1/5', 'evening'],
                'epi-h-unseen': ['1/5', 'late'], 'epi-h-window': ['1/6', 'evening'], 'epi-h-porch': ['1/6', 'evening'], 'epi-h-war-room': ['1/6', 'evening'],
                'epi-h-makeup': ['1/8', 'early'], 'epi-h-prom': ['1/9', 'after'], 'epi-h-unheard': ['1/9', 'late'], 'epi-h-last-paper': ['1/10', 'evening'],
                'epi-h-witness': ['1/10', 'evening'], 'epi-h-gym-lights': ['1/10', 'evening'], 'epi-h-hearing': ['1/11', 'after'], 'epi-h-after': ['1/11', 'late'],
                'epi-h-results': ['1/12', 'early'], 'epi-h-gym': ['1/12', 'late']}
        ok({b[0]: [b[1], b[2]] for b in beats} == want and len(beats) == 34, f'34 story beats on their dates and slots, 12/21 to 1/12 ({len(beats)})')
        gated = {b[0]: b[3] for b in beats if b[3]}
        ok(gated == {'epi-h-study-jw': 'epi-route-jungwon', 'epi-h-window': 'epi-route-jungwon', 'epi-h-last-paper': 'epi-route-jungwon', 'epi-h-study-jh': 'epi-route-jihoon',
                     'epi-h-porch': 'epi-route-jihoon', 'epi-h-witness': 'epi-route-jihoon', 'epi-h-study-council': 'epi-route-council', 'epi-h-war-room': 'epi-route-council',
                     'epi-h-gym-lights': 'epi-route-council'}, f'each route has its own three beats (1/3, 1/6, 1/10) ({gated})')
        ok([b[0] for b in beats if b[4]] == ['epi-h-gym'], 'only the gym at midnight ends the act')
        cal = p.eval("(()=>{const G=FemcGame,i=d=>G.dayInfo(G.dayOf(d));return [i('12/21').day,i('12/24').day,i('12/27').moon.full,i('1/8').type,i('1/11').day,i('1/11').type,G.mdOf(G.END()),FemcEpilogue.raw().lockAfter]})()")
        ok(cal == ['Thu', 'Sun', True, 'exam', 'Thu', 'school', '1/13', '12/24'], f'the calendar: home on a Thursday, Christmas Eve the lock, the full moon at the séance, make-ups from 1/8, the hearing on a Thursday ({cal})')
        fights = p.eval(r"""(()=>{const out=[];const f=l=>{for(const x of l||[]){if(x.battle)out.push([x.battle.script,x.battle.kind,x.battle.forced,!!x.battle.notes,x.battle.title]);f(x.then);f(x.else);(x.choose||[]).forEach(o=>f(o.then))}};FemcGame.D.events.forEach(e=>f(e.scene));return out})()""")
        ok([x[0] for x in fights] == ['epi-hoax-1', 'epi-hoax-2', 'epi-hoax-3', 'epi-hoax-4'] and all(x[1] == 'scripted' and x[2] and x[3] for x in fights), f'the four half-present fights are scripted, forced placeholders with notes for batch 6 ({fights})')
        bjs = (pathlib.Path(__file__).resolve().parent.parent / 'assets/femc/battle/battle.js').read_text()
        ok('epi-hoax' not in bjs and '(SCRIPTS[id] || genericScript)' in bjs, 'battle.js has no epi-hoax script yet, so a handoff would get its plain story fight')
        walk = p.eval("WALK()")
        ok(not walk['problems'], f'every line of the HOAX world resolves (speakers, faces, places, music, glitches): {walk["problems"][:8]}')
        ok(walk['scenes'] == 34 + 8 + 34 and walk['lines'] > 3000, f'{walk["scenes"]} scenes walked ({walk["lines"]} lines, {walk["paths"]} paths by choice and branch)')
        assets = p.eval("CHECK_ASSETS(%s)" % json.dumps(walk['urls']), timeout=120)
        ok(not assets['bad'] and assets['n'] >= 20, f'every background and portrait those scenes use loads ({assets["n"]}): {assets["bad"]}')
        moods = {'world-hoax', 'epi-h-home', 'epi-h-goofy', 'epi-h-forum', 'epi-h-romance', 'epi-h-eve', 'epi-h-christmas', 'epi-h-seance', 'epi-h-party', 'epi-h-jihoon', 'epi-h-newyear', 'epi-h-dread', 'epi-h-half', 'epi-h-exam', 'epi-h-hearing'}
        ok(moods <= set(walk['music']) and p.eval("FemcGame.D.events.find(e=>e.id==='epi-h-gym').scene[0].music") == 'world-hoax', f'the ♪ placeholders are in the scenes and the gym plays world-hoax ({sorted(moods - set(walk["music"]))} missing)')
        line = p.eval(r"""(()=>{const out=[];const f=l=>{for(const x of l||[]){if(x.t&&x.t.includes('wouldn')&&x.t.includes('come looking'))out.push([x.s,x.t]);f(x.then);f(x.else);(x.choose||[]).forEach(o=>f(o.then))}};f(FemcGame.D.events.find(e=>e.id==='epi-h-gym').scene);return out})()""")
        ok(any(t == "I said I wouldn't come looking. That was if you picked. You didn't pick this." for _, t in line), f'the voice through the bleed says the reframed line ({line})')
        hear = p.eval(r"""(()=>{let o=null;const f=l=>{for(const x of l||[]){if(x.choose&&x.choose.some(c=>c.needs))o=x.choose.map(c=>[c.t,c.needs||null,c.flag]);f(x.then);f(x.else);(x.choose||[]).forEach(c=>f(c.then))}};f(FemcGame.D.events.find(e=>e.id==='epi-h-hearing').scene);
          const G=FemcGame;return {o,lack:o.map(c=>c[1]?G.lacking(c[1]):null),ranks:['charm','courage','knowledge'].map(k=>G.statRank(k))}})()""")
        needs = [c[1] for c in hear['o']]
        ok({'charm': 3} in needs and {'courage': 3} in needs and {'knowledge': 3} in needs and None in needs, f'the hearing’s arguments check Charm, Courage and Knowledge, with a plain answer always open ({needs})')
        ok(hear['ranks'] == [3, 2, 2] and [x is None for x in hear['lack']] == [True, False, False, True], f'with the year’s stats Charm is open and Courage and Knowledge are locked ({hear["lack"]})')
        cl = p.eval("['jungwon','jihoon','cherry','council','sunoo'].map(id=>FemcEpilogue.closeness(id))")
        ok(cl == [2, 0, 0, 0, 0] and p.eval("Object.keys(FemcEpilogue.raw().bonds).length") == 14, f'14 home bonds; closeness from the year (Jungwon at rank 6 → 2) ({cl})')
        locked_opts = [c[0] for c in hear['o'] if c[1] and c[1] != {'charm': 3}]

        def run(policy, until='1/12', sleep=True):
            return p.eval("RUN(%s,%s,%s)" % (json.dumps(until), json.dumps(policy), 'true' if sleep else 'false'), timeout=1800)

        def start(flags, extra, js_after=''):
            p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER); p.eval(HOOK_H)
            p.eval("(()=>{EP.year(%s,%s);const s=FemcGame.S;delete s.flags['xmas-haechan'];%sFemcGame.save();EP.end()})()" % (json.dumps(flags), json.dumps(extra), js_after))
            p.eval("document.querySelector('[data-t=epi]').click()"); p.wait("!!document.querySelector('.g-epi-offer [data-go]')"); p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
            p.wait("!!FemcGame.S.epi && FemcGame.world()==='hoax'", 20)

        def finale(tag):
            snap = p.eval("(()=>{const s=window.__snap;if(!s)return null;return {route:s.epi.route,ev:s.events,flags:Object.keys(s.flags).filter(k=>/^epi-/.test(k)),seen:s.glitch.seen,peak:s.glitch.peak,handoff:s.handoff||null,bonds:s.epi.bonds,threads:Object.keys(s.phone.threads||{}),routines:(s.dailyLife.seen||[]).length}})()")
            ok(snap is not None, f'{tag}: the gym at midnight plays and is recorded')
            p.wait("!!document.querySelector('.g-end')", 30)
            end = p.eval(r"""(()=>{const s=FemcGame.S,c=JSON.parse(localStorage.getItem(FemcGame.CLEARS_KEY)||'[]').find(x=>x.run===s.runId);return {epi:'epi' in s,y1:'year1' in s,e:s.epilogues&&s.epilogues.hoax,
              yen:s.yen,bs:s.battleSave&&s.battleSave.marker,world:FemcGame.world(),clear:c&&c.epi,ngp:!!document.querySelector('.g-end [data-t]'),cards:window.__cards.slice(),noBattle:window.__noBattle,gl:FemcGlitch.active()}})()""")
            ok(end['cards'] == ['EPILOGUE · Hanlim', 'PERSONA 3 · EQUINOX'], f'{tag}: the end card, then the Equinox card ({end["cards"]})')
            ok(not end['epi'] and not end['y1'] and end['e'] and end['e']['done'] and end['e']['route'] == snap['route'] and end['world'] is None and not end['gl'], f'{tag}: back to the year’s end screen ({end["e"]})')
            ok(end['yen'] == 12345 and end['bs'] == 'year-battle' and end['clear'] and 'hoax' in end['clear'] and end['ngp'], f'{tag}: the year’s yen and battle save, the clear noted, the end screen’s buttons ({end["clear"]})')
            ok(end['noBattle'] and snap['handoff'] is None, f'{tag}: the fight placeholders made no handoff inside the epilogue (batch 6 wires them)')
            return snap

        common = ['epi-h-home', 'epi-h-part-four', 'epi-h-curfew', 'epi-h-emergency', 'epi-h-study-plans', 'epi-h-karaoke', 'epi-h-eve', 'epi-h-christmas', 'epi-h-seance', 'epi-h-party',
                  'epi-h-livestream', 'epi-h-notes', 'epi-h-new-year', 'epi-h-motion', 'epi-h-alone', 'epi-h-snowed-in', 'epi-h-clocks', 'epi-h-unseen', 'epi-h-makeup', 'epi-h-prom',
                  'epi-h-unheard', 'epi-h-hearing', 'epi-h-after', 'epi-h-results', 'epi-h-gym']
        own = {'jungwon': ['epi-h-study-jw', 'epi-h-window', 'epi-h-last-paper'], 'jihoon': ['epi-h-study-jh', 'epi-h-porch', 'epi-h-witness'], 'council': ['epi-h-study-council', 'epi-h-war-room', 'epi-h-gym-lights']}
        g_all = ['epi-h-g-wake', 'epi-h-g-autocorrect', 'epi-h-g-vending', 'epi-h-g-planchette', 'epi-h-g-party', 'epi-h-g-frame', 'epi-h-g-yunjin', 'epi-h-g-notes', 'epi-h-g-alone',
                 'epi-h-g-flicker', 'epi-h-g-clocks', 'epi-h-g-unseen', 'epi-h-g-upward', 'epi-h-g-unheard', 'epi-h-g-evoke', 'epi-h-g-hearing', 'epi-h-g-gym', 'epi-h-g-pull',
                 'epi-h-g-sting', 'epi-h-g-date', 'epi-h-g-name', 'epi-h-g-thread', 'epi-h-g-hud']

        def route_checks(tag, sn, rid, log):
            others = [e for r, es in own.items() if r != rid for e in es]
            ok(sn['route'] == rid and f'epi-route-{rid}' in sn['flags'], f'{tag}: Christmas Eve locks the {rid} route')
            ok(all(e in sn['ev'] for e in common + own[rid]) and not any(e in sn['ev'] for e in others), f'{tag}: every shared beat and the route’s own three, none of the others’ ({[e for e in common + own[rid] if e not in sn["ev"]]} missing)')
            ok({'epi-h-retreat', 'epi-h-party', 'epi-h-notes', 'epi-h-motion', 'epi-h-alone', 'epi-h-unseen', 'epi-h-unheard', 'epi-h-filed', 'epi-h-motion-failed', 'epi-h-flickered', 'epi-h-held'} <= set(sn['flags'])
               and any(f.startswith('epi-h-hearing-') for f in sn['flags']), f'{tag}: the act’s flags, the hearing decided, held')
            ok(all(g in sn['seen'] for g in g_all) and sn['peak'] == 4, f'{tag}: the glitches on schedule, comedy to the gym, stage 4 ({[g for g in g_all if g not in sn["seen"]]} missing)')
            ok(len(log['hangouts']) >= 10 and len({h.split(':')[0] for h in log['hangouts']}) >= 4, f'{tag}: home bonds through Go Out ({len(log["hangouts"])}: {log["hangouts"][:6]}…)')
            ok({'club', 'retreat', 'jungwon'} <= set(sn['threads']) and sn['routines'] >= 4, f'{tag}: texts on their threads and routines ({sn["threads"]}, {sn["routines"]} routines)')

        # Route 1: Jungwon (his romance and her Christmas pick in the year). Played to 1/10, saved, finished in a fresh page.
        jw_year = {'links': {'jungwon': {'rank': 15, 'xp': 0, 'seen': [], 'rankDay': {}, 'route': 'romance'}, 'jihoon': {'rank': 8, 'xp': 0, 'seen': [], 'rankDay': {}}, 'cherry': {'rank': 10, 'xp': 0, 'seen': [], 'rankDay': {}}},
                   'route': {'tally': {}, 'choices': {'xmas': 'jungwon'}, 'frags': {'R': 0, 'S': 0, 'H': 0}, 'doorsDue': [], 'doorsSeen': []}}
        start({'route-H': True}, jw_year, "s.flags['xmas-jungwon']=true;")
        ok(p.eval("[FemcGame.S.epi.lean,FemcEpilogue.closeness('jungwon'),FemcEpilogue.closeness('cherry')]") == ['jungwon', 5, 3], 'Jungwon’s lean; his closeness from rank 15, romance and the Christmas pick; Cherry’s from rank 10')
        pol_jw = {'prefer': ["(Go to the end of Jungwon", 'Make them laugh', '(Say it. All of it.)', '(Hold out your hand. Take it', 'If it takes me'], 'cross': "(Go to Yeobo's"}
        a = run(pol_jw, '1/10', False)
        st = p.eval("(()=>{const s=FemcGame.S;return {md:FemcGame.mdOf(s.day),slot:s.slot,route:s.epi.route,ev:s.events}})()")
        ok(st['md'] == '1/10' and st['route'] == 'jungwon' and 'epi-h-last-paper' in st['ev'], f'the Jungwon act reaches 1/10’s night through the UI ({st["md"]} {st["slot"]}, {a["steps"]} steps)')
        ok(len(a['cross']) == 3, f'Christmas Eve offers all three when all are open ({a["cross"]})')
        errs = p.console(); ok(not errs, f'no browser errors on the Jungwon act so far: {errs}')
        p.eval("FemcGame.saveSlot(3)")
        snap0 = p.eval("JSON.stringify({d:FemcGame.S.day,r:FemcGame.S.epi.route,b:FemcGame.S.epi.bonds,g:FemcGame.S.glitch.seen,f:Object.keys(FemcGame.S.flags).sort()})")
        p.goto('femc-game.html'); p.eval(HELPERS); p.eval(DRIVER); p.eval(HOOK_H)
        p.eval("FemcGame.loadSlot(3)"); p.eval("EP.clear();FemcGameUI.run()")
        p.wait("FemcGame.world()==='hoax'", 20)
        back = p.eval("JSON.stringify({d:FemcGame.S.day,r:FemcGame.S.epi.route,b:FemcGame.S.epi.bonds,g:FemcGame.S.glitch.seen,f:Object.keys(FemcGame.S.flags).sort()})")
        ok(back == snap0, 'a 1/10 slot loads in a fresh page with its route, bonds, glitches and flags (the world on demand)')
        b2 = run({**pol_jw, 'stopText': "You didn't pick this."})
        ok(b2.get('stopped'), 'the gym reaches the voice through the bleed')
        ok(any(o in x for o in locked_opts for x in b2['locked']), f'the hearing’s locked arguments show greyed in the UI ({[x for x in b2["locked"] if any(o in x for o in locked_opts)]})')
        p.eval("document.querySelectorAll('.g-banners > *, .g-toasts > *').forEach(x=>x.remove())")
        shots('hoax-gym')
        b3 = run(pol_jw)
        sj = finale('Jungwon')
        route_checks('Jungwon', sj, 'jungwon', {'hangouts': a['hangouts'] + b2['hangouts'] + b3['hangouts']})
        ok({'epi-h-said-name', 'epi-h-jw-gate', 'epi-h-hearing-charm'} <= set(sj['flags']) and any(x in sj['bonds']['jungwon']['seen'] for x in ['epi-h-jungwon-3', 'epi-h-jungwon-4']), f'Jungwon: the name said out loud, the gate in front of his mother, the charm argument, his route’s own hangouts ({sj["bonds"]["jungwon"]})')
        ok(a['practice'] + b2['practice'] + b3['practice'] >= 1, 'council duty after school once term is back')
        errs = p.console(); ok(not errs, f'no browser errors finishing the Jungwon act from the slot: {errs}')
        p.eval("localStorage.removeItem('kg-femc-revamp-slot3')")

        # Route 2: Jihoon's redemption (his romance and Christmas pick in the year). The whole act in one go.
        jh_year = {'links': {'jihoon': {'rank': 15, 'xp': 0, 'seen': [], 'rankDay': {}, 'route': 'romance'}, 'jungwon': {'rank': 6, 'xp': 0, 'seen': [], 'rankDay': {}}},
                   'route': {'tally': {}, 'choices': {'xmas': 'jihoon'}, 'frags': {'R': 0, 'S': 0, 'H': 0}, 'doorsDue': [], 'doorsSeen': []}}
        start({'route-H': True}, jh_year, "s.flags['xmas-jihoon']=true;")
        ok(p.eval("[FemcGame.S.epi.lean,FemcEpilogue.closeness('jihoon')]") == ['jihoon', 5], 'Jihoon’s lean and closeness from the year')
        h = run({'prefer': ["(Get in Jihoon's car", '(Hold out your hand.)', 'You\'d do that?', '(Lean into him', 'We were gone.', 'If it takes me'], 'cross': "(Go to Yeobo's"})
        sh = finale('Jihoon')
        route_checks('Jihoon', sh, 'jihoon', h)
        ok({'epi-h-jihoon-chose', 'epi-h-jihoon-remembers', 'epi-h-jihoon-speaks', 'epi-h-hearing-plain'} <= set(sh['flags']) and 'epi-h-g-jihoon' in sh['seen'], 'Jihoon: he chooses differently at the party, remembers on the porch, stands up at the hearing; the plain answer')
        errs = p.console(); ok(not errs, f'no browser errors on the Jihoon act: {errs}')

        # Route 3: the council (no HOAX romance or pick; Sunoo, Jay and Cherry high in the year). The whole act in one go.
        co_year = {'links': {'sunoo': {'rank': 8, 'xp': 0, 'seen': [], 'rankDay': {}}, 'jay': {'rank': 7, 'xp': 0, 'seen': [], 'rankDay': {}}, 'cherry': {'rank': 7, 'xp': 0, 'seen': [], 'rankDay': {}}},
                   'route': {'tally': {}, 'choices': {}, 'frags': {'R': 0, 'S': 0, 'H': 0}, 'doorsDue': [], 'doorsSeen': []}}
        start({'route-H': True}, co_year)
        ok(p.eval("FemcGame.S.epi.lean") == 'council', 'the council’s lean with no HOAX romance')
        c = run({'prefer': ["(Go to Yeobo's", 'We show them every won', 'Make them laugh', 'If it takes me'], 'cross': "(Go to Yeobo's"})
        sc_ = finale('the council')
        route_checks('the council', sc_, 'council', c)
        ok(len(c['cross']) == 1, f'with Jungwon and Jihoon’s routes closed, Christmas Eve offers only Yeobo’s ({c["cross"]})')
        ok({'epi-h-gym-plan', 'epi-h-gym-done'} <= set(sc_['flags']), 'the council: the war room and the finished gym')
        errs = p.console(); ok(not errs, f'no browser errors on the council act: {errs}')
        aft = p.eval("(()=>{const G=FemcGame;return [G.D.events===FEMC_GAME_EVENTS,G.D.cal===FEMC_GAME_CALENDAR,FemcGlitch.active(),G.money(5)]})()")
        ok(aft == [True, True, False, '¥5'], f'after the act the year reads Iwatodai again, in yen ({aft})')

    if 'shots' in ONLY:
        p.goto('femc-game.html'); p.eval(HELPERS)
        p.eval("(()=>{EP.year({'route-R':true});EP.end()})()")
        shots('end-button')
        p.eval("document.querySelector('[data-t=epi]').click()")
        p.wait("!!document.querySelector('.g-epi-offer [data-go]')")
        p.eval("document.querySelector('.g-epi-offer [data-go]').click()")
        p.wait("FemcGame.world()==='runners'", 20)
        step_until("EP.screen()==='out'")
        shots('epilogue-day')
        errs = p.console(); ok(not errs, f'no browser errors in the screenshots: {errs}')

    print(json.dumps({'checks': len(checks), 'screenshots': str(OUT)}, indent=1))
    print('femc_epilogue: all', len(checks), 'checks passed')
finally:
    p.close()
