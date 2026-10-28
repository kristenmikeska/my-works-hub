"""The epilogue (FEMC-EPILOGUE-PLAN.md; batch 1, 2026-10-27: the engine, with stand-in worlds).

  python3 tests/femc_epilogue.py [--only engine,saves,glitch,shots] [--screenshots /absolute/dir]

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
shots    one desktop / phone pair of the end-screen button and of an epilogue day.
No browser errors. Isolated browser profile and server; never the player's saves."""
import base64, datetime, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-epilogue-'))
OUT.mkdir(parents=True, exist_ok=True)
ONLY = set(sys.argv[sys.argv.index('--only') + 1].split(',')) if '--only' in sys.argv else {'engine', 'saves', 'glitch', 'shots'}
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
        ok(st['slots'] == 'early,after,evening,late' and st['sat'] == 'off' and st['finals'] == 'exam' and st['moon'] and st['wx'] == 'snow' and st['ev'] == ['epi-r-stub-home'], f'its own slots, weekends, finals, full moon, snow and events ({st["slots"]})')
        cond = p.eval(r"""(()=>{const G=FemcGame,b=l=>JSON.stringify(G.branch({...l,then:['y'],else:['n']}));return [b({ifYear:{romance:'haechan'}}),b({ifYear:{romance:'jungwon'}}),b({ifYear:'xmas-haechan'}),b({ifYear:{rank:{minji:8},ending:'where it begins'}}),b({ifEpiRoute:'haechan'}),b({ifEpiRoute:['cover']})]})()""")
        ok(cond == ['["y"]', '["n"]', '["y"]', '["y"]', '["y"]', '["n"]'], f'ifYear reads the finished year, ifEpiRoute the route ({cond})')

        # A day lived through the real UI.
        ok(step_until("FemcGame.S.events.includes('epi-r-stub-home') && !document.querySelector('.gs:not(.out)')"), 'the stand-in opening plays on the first morning')
        hud = p.eval("document.querySelector('.g-hud .g-yen').textContent + '|' + document.querySelector('.g-hud .g-slot').textContent + '|' + document.querySelector('.g-hud .g-date').textContent")
        ok(hud.startswith('$200|Morning|12/1'), f'the HUD: dollars, the world’s slot name, the date ({hud})')
        ok(step_until("EP.screen()==='out'"), 'After Class: Go Out at home')
        out = p.eval("[...document.querySelectorAll('.g-epi-act')].map(b=>b.textContent)")
        ok(len(out) == 2 and '$7' in out[0] and 'Charm' in out[0] and 'Free' in out[1], f'the world’s activities, priced in dollars ({out})')
        p.eval("document.querySelector('[data-act=epi-r-coffee]').click()")
        paid = p.eval("[FemcGame.S.yen, FemcGame.S.stats.charm, FemcGame.S.spent[FemcGame.S.day+'-after']]")
        ok(paid[0] == 193 and paid[1] > 50 and paid[2] == 'act:epi-r-coffee', f'coffee costs $7 and raises Charm a little ({paid})')
        ok(step_until("EP.screen()==='out' && FemcGame.S.slot==='evening'"), 'Evening: Go Out again')
        p.eval("document.querySelector('[data-stay]').click()")
        ok(step_until("FemcGame.S.slot==='late' && !!document.querySelector('#g-app [data-next]')"), 'stayed in; the late screen')
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
        lock = p.eval(r"""(()=>{const G=FemcGame,s=G.S;s.day=G.dayOf('12/7');s.slot='late';s.flags['epi-route-cover']=true;G.save();EP.clear();FemcGameUI.run();
          document.querySelector('#g-app [data-next]').click();return [s.epi.locked,s.epi.route,FemcEpilogue.route(),G.mdOf(G.S.day)]})()""")
        ok(lock == [True, 'cover', 'cover', '12/8'], f'the route locks on 12/7’s night, to the picked route ({lock})')

        # The end of the act: the end card, the Equinox card, the year's end screen; the clear noted; New Game+ as before.
        p.eval("(()=>{const G=FemcGame;localStorage.setItem(G.CLEARS_KEY,JSON.stringify([{run:G.S.runId,ending:'where it begins',at:1}]));G.S.day=G.END();G.S.slot='late';G.S.battleSave.lvl=48;G.save();EP.clear();FemcGameUI.run();document.querySelector('#g-app [data-next]').click()})()")
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
        ok(step_until("EP.screen()==='out'"), 'HOAX: the first morning, then Go Out')
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
        ok(lab[0] == 'Epilogue · Syracuse · Dec 1' and lab[1]['epi'] == 'Syracuse' and lab[1]['md'] == '12/1' and lab[1]['day'] == 'Mon' and lab[1]['slot'] == 'After Class', f'the slot reads Epilogue · Syracuse · Dec 1 ({lab[0]})')
        code = p.eval('window.__code')
        snap = p.eval("JSON.stringify({day:FemcGame.S.day,spent:FemcGame.S.spent[FemcGame.S.day+'-after'],yen:FemcGame.S.yen,epi:FemcGame.S.epi.world,y1:FemcGame.S.year1.day,y1yen:FemcGame.S.year1.yen})")
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
        p.wait("FemcGame.world()==='runners' && !!document.querySelector('#g-app [data-next], .g-epi-out')", 20)
        back = p.eval("JSON.stringify({day:FemcGame.S.day,spent:FemcGame.S.spent[FemcGame.S.day+'-after'],yen:FemcGame.S.yen,epi:FemcGame.S.epi.world,y1:FemcGame.S.year1.day,y1yen:FemcGame.S.year1.yen})")
        ok(back == snap and p.eval("document.querySelector('.g-hud .g-yen').textContent") == '$200', f'loaded from the slot in a fresh page: the world loads on demand, mid-day (the spent afternoon stays spent), dollars ({back})')
        # By backup code, in another fresh page.
        p.eval("(()=>{EP.year({'route-S':true});})()")
        p.goto('femc-game.html'); p.eval(HELPERS)
        r = p.eval("FemcGame.importCode(%s)" % json.dumps(code))
        p.eval("EP.clear();FemcGameUI.run()")
        p.wait("FemcGame.world()==='runners'", 20)
        back2 = p.eval("JSON.stringify({day:FemcGame.S.day,spent:FemcGame.S.spent[FemcGame.S.day+'-after'],yen:FemcGame.S.yen,epi:FemcGame.S.epi.world,y1:FemcGame.S.year1.day,y1yen:FemcGame.S.year1.yen})")
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

        # Into Runners (the stand-in demo). The opening scene's scheduled tint and hands play through the real UI.
        p.eval("window.__hand=null;new MutationObserver(()=>{const h=document.querySelector('.gs-hand');if(h&&!window.__hand)window.__hand=[h.textContent,h.getAttribute('aria-disabled'),document.querySelectorAll('.gs-choices button').length]}).observe(document.body,{subtree:true,childList:true})")
        enter('route-R')
        ok(p.eval("FEMC_EPI_WORLDS.runners.glitches.length>0 && FemcGlitch.active()"), 'the world’s glitch file loads with it; glitches are live in the epilogue')
        ok(step_until("FemcGame.S.events.includes('epi-r-stub-home') && !document.querySelector('.gs:not(.out)')"), 'the opening plays')
        op = p.eval("(()=>{const s=FemcGlitch.state();return {seen:s.seen,kinds:s.log.map(x=>x.kind),hand:window.__hand,dom:s.dom}})()")
        ok('epi-r-g-wake' in op['seen'] and 'epi-r-g-hands' in op['seen'] and op['kinds'][:2] == ['tint', 'hands'] and op['hand'] == ['(Evoke.)', 'true', 3], f'the opening scene’s scheduled tint and the unwritten (Evoke.) choice ({op["hand"]})')
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
        mp = p.eval("(()=>{const n=FemcGlitch.play({kind:'map'});const b=document.querySelector('.g-epi-acts .g-glx-station');return [b?b.textContent:null,b?b.disabled:null,document.querySelectorAll('.g-epi-act').length]})()")
        ok(mp[0] and 'Iwatodai Station' in mp[0] and mp[1] is True and mp[2] == 3, f'the map: Iwatodai Station, greyed out ({mp})')
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
          const r={};r.d1=at('12/1','early');r.d1late=at('12/1','late');r.moon=at('12/4','early');r.w2=at('12/8','after');r.w2late=at('12/8','late');r.w3=at('12/15','early');r.top=at('12/19','early');r.cap=at('12/19','late');
          r.thin=at('12/2','after',{place:'Syracuse · Rooftop'});r.notThin=at('12/2','after',{place:'Syracuse · The Quad'});GL.heard('hanni');r.other=at('12/2','after');GL.heard('haechan');r.constant=at('12/2','after');r.nextDay=at('12/3','after');
          g.strainDay=s.day;r.strain=at('12/3','after');g.strainDay=null;g.set={day:G.dayOf('12/3'),stage:4};r.story=at('12/3','early');r.storyNext=at('12/4','early');r.peak=g.peak;r.trig=GL.triggers();return r})()""")
        want = {'d1': 0, 'd1late': 1, 'moon': 1, 'w2': 2, 'w2late': 3, 'w3': 3, 'top': 4, 'cap': 4, 'thin': 1, 'notThin': 0, 'other': 0, 'constant': 1, 'nextDay': 0, 'strain': 1, 'story': 4, 'storyNext': 1, 'peak': 4}
        ok({k: stg[k] for k in want} == want, f'the stages escalate: week floors 0 / 2 / 3 / 4, midnight, full moon, thin place, constant, strain each one higher, a story’s own stage, capped at 4 ({stg})')
        # The same seed rolls the same glitches after a reload (slot round trip in a fresh page).
        ROLLS = r"""(()=>{const G=FemcGame,GL=FemcGlitch,s=G.S,keep=[s.day,s.slot],done=JSON.stringify(s.glitch.done),seen=[...s.glitch.seen],out=[];s.glitch.seen=[];
          for(let d=0;d<=G.END();d++)for(const sl of ['early','after','evening','late']){s.day=d;s.slot=sl;for(const w of ['card','morning','out','late']){const e=GL.roll(w);out.push(e?e.id:'-')}}
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

        # The station through the real UI: greyed on 12/11, open from 12/19 (stage 4), and it opens.
        sta = p.eval(r"""(async()=>{const G=FemcGame,s=G.S,S=ms=>new Promise(r=>setTimeout(r,ms)),go=md=>{s.day=G.dayOf(md);s.slot='after';delete s.spent[s.day+'-after'];s.glitch.done={};G.save();EP.clear();FemcGameUI.run()};
          go('12/11');await S(150);const a=document.querySelector('.g-glx-station');const r={grey:a?a.disabled:null};
          go('12/19');await S(150);const b=document.querySelector('.g-glx-station');r.open=b?!b.disabled:null;r.note=b?b.textContent:null;b&&b.click();await S(200);
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
        p.eval(r"""(()=>{const G=FemcGame,s=G.S;s.day=G.dayOf('12/19');s.slot='after';delete s.spent[s.day+'-after'];s.glitch.done={};G.save();EP.clear();FemcGameUI.run();
          ['tint','clock','tear','name'].forEach(k=>FemcGlitch.play({kind:k,ms:30000}));FemcGlitch.play({kind:'weather',mode:'rise',ms:30000})})()""")
        time.sleep(0.8)
        shots('glitch-mid')
        p.eval("FemcGlitch.clear()")
        ok(p.eval("FemcGlitch.state().dom===0 && !FemcGlitch.state().weather"), 'clear() ends everything at once')
        p.eval("localStorage.removeItem('kg-femc-revamp-slot3')")

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
