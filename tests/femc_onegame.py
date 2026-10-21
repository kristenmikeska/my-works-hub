"""The one-game merge, played for real in an isolated Chrome profile and a local server on a random port.

  python3 tests/femc_onegame.py [--only tartarus,moon,late,saves,migration,practice,views] [--screenshots DIR]

tartarus   an evening's Tartarus night: the prompt's field menu, the Dark Hour hub's one Menu (party, equipment, items, the
           tree from Skills, M key), a climb with the field menu on the floor (items used, team locked) and at an access
           point (tonight's HP), leaving, the results back in the life sim, the next morning.
moon       5/9's story evening: the scene hands over to the full-moon operation in the same page and picks up after it.
late       a late-year operation (11/3) the same way, with a high-level battle save.
saves      a save slot taken after Tartarus holds the battle progress; loading another slot and back restores it.
migration  saves from the old two-page game: an autosave + battle save + slots + New Game+, a save left mid-fight
           (pending handoff, resumed on the right line) and one whose fight finished (applied once). v1 and practice saves
           untouched, the raw old save kept once.
practice   the standalone battle page (title's Practice link): its own save, the shared settings, back to the game.
views      title, HUD, field menu, the Dark Hour hub with the menu over it, a fight and the results at 1000x486, 375x812 and
           1440x900: screenshots, no sideways scrolling, no browser errors.
The prologue's scripted fights and the segment-1 interrupt are tests/femc_merge.py. Never touches the player's own browser."""
import argparse, base64, json, pathlib, tempfile, time
from femc_browser import Page

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='')
args = ap.parse_args()
ONLY = [x for x in args.only.split(',') if x]
OUT = pathlib.Path(args.screenshots) if args.screenshots else pathlib.Path(tempfile.mkdtemp(prefix='femc-onegame-'))
OUT.mkdir(parents=True, exist_ok=True)
GAME = 'femc-game.html?speed=10&seed=3'

# One step of the life sim: a choice, a card, an overlay's main button, or the next line.
LIFE = r"""(()=>{
  if (document.querySelector('.g-dh')) return 'battle';
  const c = document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
  const o = document.querySelector('.gs-title, .gs-summon.ready, .g-card, .g-actcard, .g-datecard'); if (o) { o.click(); return 'card'; }
  const ov = [...document.querySelectorAll('.g-overlay:not(.out)')].pop(); if (ov) { const b = ov.querySelector('[data-close], .g-btn.pink, button'); if (b) { b.click(); return 'overlay:' + (b.textContent||'').trim().slice(0,20); } }
  const g = document.querySelector('.gs:not(.out)'); if (g) { g.click(); return 'scene'; }
  const n = document.querySelector('#g-app [data-next]:not(:disabled)'); if (n) { n.click(); return 'next'; }
  return 'idle';
})()"""
# One step inside the battle frame. Attacks (the battle saves here are strong), heads for access points and stairs on a
# floor, leaves at the first access point or a sealed barrier when window.__leave is set.
FIGHT = r"""(()=>{
  const F = FemcBattle, d = document, c = F.ctl;
  if (window.__hoResult) return 'done';
  const tip = d.querySelector('.bt-tip [data-ok]'); if (tip) { tip.click(); return 'tip'; }
  const begin = d.querySelector('[data-prep=begin]'); if (begin) { begin.click(); return 'begin'; }
  if (!c) { const b = d.querySelector('.bt-btn.pink:not(:disabled)'); if (b) { b.click(); return 'click'; } return 'wait:' + F.screen(); }
  if (c.kind === 'field-menu') return 'field-menu';
  if (c.kind === 'allout') { c.pickValue('1'); return 'allout'; }
  if (c.kind === 'menu' && c.items) {
    // The engine's own Act Freely choice for whoever is up (weaknesses, heals, buffs), through the real menus.
    const B = F.B, has = v => c.items.some(it => it.v === v && !it.off);
    if (has('guard') && B && B.S.cur) {
      const u = B.U(B.S.cur.id); let a = null; try { a = B.autoAction(u, 'free'); } catch (e) {}
      window.__act = a || { type: 'attack' };
      if (a && has(a.type)) { c.pickValue(a.type); return 'cmd:' + a.type; }
      c.pickValue(has('attack') ? 'attack' : 'guard'); return 'cmd:attack';
    }
    const a = window.__act || {};
    if (a.skill && has(a.skill)) { c.pickValue(a.skill); return 'skill'; }
    if (a.item && has(a.item)) { c.pickValue(a.item); return 'item'; }
    if (a.target && has(a.target)) { c.pickValue(a.target); return 'target'; }
    const ok = c.items.find(it => !it.off); if (ok) { c.pickValue(ok.v); return 'pick:' + ok.v; }
    if (c.back) { c.back(); return 'back'; }
    return 'menu-stuck';
  }
  if (c.kind === 'map') {
    const o = c.opts || [];
    const score = n => (n.type === 'access' && !n.visited ? 100 : 0) + (n.type === 'stairs' ? 50 : 0) + (n.visited ? 0 : 10) + n.layer;
    const best = o.slice().sort((a, b) => score(b) - score(a))[0];
    if (best) { c.go(best.id); return 'map:' + best.type; }
    return 'map-stuck';
  }
  if (c.kind === 'buttons') {
    const leave = d.querySelector('[data-v=leave]');
    if (leave && (window.__leave || d.querySelector('.bt-room.barrier'))) { leave.click(); return 'leave'; }
    if (d.querySelector('.bt-room.access') && !window.__accessSeen) { window.__accessSeen = true; return 'access'; }
    const b = d.querySelector('.bt-btn.on:not(:disabled)') || d.querySelector('.bt-btn:not(:disabled)'); if (b) { b.click(); return 'btn:' + (b.dataset.v || b.dataset.go || ''); }
  }
  c.pick && c.pick(); return 'pick:' + c.kind;
})()"""

p = Page()
results = {}
shots = []


def shot(name):
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,250)))')
    d = p.ws.call('Page.captureScreenshot', {'format': 'png'})
    f = OUT / (name + '.png'); f.write_bytes(base64.b64decode(d['data'])); shots.append(f.name)


def view(w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def no_errors(where):
    errs = p.console()
    assert not errs, (where, errs)


def life(until, limit=1500):
    p.top()
    for _ in range(limit):
        if p.eval(until): return
        p.eval(LIFE); time.sleep(.04)
    raise AssertionError('life: timed out waiting for ' + until)


def fight(until="!!window.__hoResult", limit=4000):
    p.frame()
    seen = {}
    for _ in range(limit):
        if p.eval(until): return seen
        s = p.eval(FIGHT); seen[s.split(':')[0]] = seen.get(s.split(':')[0], 0) + 1
        if s == 'access': return seen
        time.sleep(.03)
    raise AssertionError(('fight: timed out', until, p.eval("JSON.stringify({s:FemcBattle.screen(),k:FemcBattle.ctl?.kind,m:Object.keys(FemcBattle.marks).slice(-8)})")))


def fresh_play(md, slot='evening', lvl=None, extra=''):
    """A new game placed on a date, with a battle save at a given level (a fixture; the battle save is the merged shape)."""
    p.goto(GAME)
    lv = ("b.lvl=%d;b.exp=0;Object.values(b.mem).forEach(m=>m.lvl=%d);" % (lvl, lvl - 1)) if lvl else ''
    p.eval("""(()=>{FemcGame.newGame();const S=FemcGame.S;S.phase='play';S.day=FemcGame.dayOf(%s);S.slot=%s;S.unlocked.tartarus=true;S.flags.armband=true;
      const b=FemcGame.ensureBattleSave(); %s %s FemcGame.save();})()""" % (json.dumps(md), json.dumps(slot), lv, extra))


def want(name):
    return not ONLY or name in ONLY


try:
    view(1280, 800)
    # ── A Tartarus night ──────────────────────────────────────────────────────────────────────────────────────────────
    if want('tartarus'):
        fresh_play('7/24', lvl=30, extra="FemcGame.S.inventory={medicine:3};")
        p.eval("document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.evening()")
        p.eval("document.querySelector('[data-n=tartarus]').click()")
        p.wait("!!document.querySelector('.g-tt [data-menu]')")
        # The prompt's Party & equipment opens the field menu; the chips follow what it changed.
        p.eval("document.querySelector('.g-tt [data-menu]').click()")
        p.wait("!!document.querySelector('.g-fm-ov:not(.out) [data-pm]')")
        before = p.eval("[...document.querySelectorAll('.g-tt [data-m].on')].map(b=>b.dataset.m).sort().join()")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-pm=mitsuru]').click()")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-close]').click()")
        time.sleep(.3)
        after = p.eval("[...document.querySelectorAll('.g-tt [data-m].on')].map(b=>b.dataset.m).sort().join()")
        assert after != before and p.eval("FemcGame.S.battleSave.party.join()") == ','.join(p.eval("FemcGame.S.battleSave.party")), (before, after)
        p.eval("document.querySelector('.g-tt [data-go]').click()")
        fight("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'")
        assert p.eval("!!document.querySelector('[data-go=menu]') && !document.querySelector('[data-go=party],[data-go=equip],[data-go=personas],[data-go=memories]')"), 'old hub menu'
        shot('tartarus-hub')
        # The hub's Menu: the field menu over the frame, in the Dark Hour.
        p.eval("document.querySelector('[data-go=menu]').click()")
        p.top(); p.wait("!!document.querySelector('.g-fm-ov.g-over-battle:not(.out) [data-pm]')")
        assert 'Dark Hour' in p.eval("document.querySelector('.g-fm-ov:not(.out) .g-kicker').textContent")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tab=equip]').click()")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-slot=acc]').click()")
        shot('tartarus-menu-equip')
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tab=items]').click()")
        assert p.eval("document.querySelector('.g-fm-ov:not(.out) .g-fm-body').textContent.includes('Medicine')"), 'tonight items'
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tab=party]').click()")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tac=yukari], .g-fm-ov:not(.out) [data-tac]').click()")
        tac = p.eval("JSON.stringify(FemcGame.S.battleSave.tactics)")
        # The Skills tab is the skill system itself (Haenim's tree), in the Dark Hour too.
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tab=skills]').click()")
        assert p.eval("document.querySelectorAll('.g-fm-ov:not(.out) .g-ht-col').length") == 5, 'tree in the Skills tab'
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-close]').click()")
        p.frame(); p.wait("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'")
        assert p.eval("JSON.stringify(FemcBattle.save.tactics)") == tac, 'tactic not handed back'
        # M opens it too; Escape closes it.
        p.eval("document.dispatchEvent(new KeyboardEvent('keydown',{key:'m',bubbles:true}))")
        p.top(); p.wait("!!document.querySelector('.g-fm-ov.g-over-battle:not(.out)')")
        p.eval("document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))")
        p.wait("!document.querySelector('.g-fm-ov:not(.out)')")
        p.frame(); p.wait("FemcBattle.ctl?.kind==='buttons'")
        # Climb. On the floor, the map's Menu opens the field menu on Items: use one, the team is locked.
        p.eval("document.querySelector('[data-go=run],[data-go=cont]').click()")
        p.wait("FemcBattle.ctl?.kind==='map'")
        shot('tartarus-floor')
        p.eval("document.querySelector('[data-act=items]').click()")
        p.top(); p.wait("!!document.querySelector('.g-fm-ov.g-over-battle:not(.out) [data-use]')")
        n0 = p.eval("FemcGame.S.battleSave.items.medicine")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-use=medicine]').click()")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tgt]').click()")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tab=party]').click()")
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-pm]:not([data-pm=solar])')?.click()")
        assert p.eval("[...document.querySelectorAll('.g-toast')].some(t=>t.textContent.includes('access point'))"), 'party not locked on a floor'
        shot('tartarus-floor-menu')
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-close]').click()")
        p.frame(); p.wait("FemcBattle.ctl?.kind==='map'")
        assert p.eval("(FemcBattle.save.items.medicine||0)") == n0 - 1, 'item not used'
        # Up to an access point (fights on the way), then its Menu shows tonight's HP; then leave.
        seen = fight("FemcBattle.screen()==='room' && !!document.querySelector('.bt-room.access')", 6000)
        p.eval("document.querySelector('[data-v=menu]').click()")
        p.top(); p.wait("!!document.querySelector('.g-fm-ov.g-over-battle:not(.out) [data-pm]')")
        hp = p.eval("[...document.querySelectorAll('.g-fm-ov:not(.out) .g-bar.hp i')].map(i=>i.style.getPropertyValue('--w'))")
        shot('tartarus-access-menu')
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-close]').click()")
        p.frame(); p.eval("window.__leave=true"); fight()
        res = p.eval("window.__hoResult")
        p.top(); p.wait("!document.querySelector('.g-dh') && !!document.querySelector('.g-results')", 30)
        shot('tartarus-results')
        p.eval("document.querySelector('.g-results-ov [data-close]').click()")
        life("FemcGame.S.slot==='early' || FemcGame.S.slot==='morning' || FemcGame.dayInfo().md==='7/25'")
        S = p.eval("({n:FemcGame.S.tartarus.nights,f:FemcGame.S.tartarus.maxFloor,c:FemcGame.S.condition,md:FemcGame.dayInfo().md,acc:FemcGame.S.battleSave.gear.eq.solar?.acc,exp:FemcGame.S.battle.exp.solar||0,h:FemcGame.S.handoff})")
        assert S['n'] == 1 and S['f'] > 0 and S['h'] is None and S['exp'] > 0 and S['md'] == '7/25', S
        no_errors('tartarus')
        results['tartarus'] = {'prompt menu': True, 'hub has one Menu': True, 'menu over the frame': True, 'tree in Skills': True, 'M/Escape': True,
                               'floor menu: item used, team locked': True, 'access point HP': hp, 'fights': seen.get('cmd', 0), 'floors reached': res.get('floorsReached'),
                               'back on': S['md'], 'nights': S['n']}
        print('tartarus', json.dumps(results['tartarus']), flush=True)

    # ── Full-moon operation from the story (5/9) ──────────────────────────────────────────────────────────────────────
    def story_fight(md, lvl, label):
        fresh_play(md, lvl=lvl)
        p.eval("document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()")
        life("!!document.querySelector('.g-dh.live')", 3000)
        info = p.eval("(()=>{const h=FemcGame.S.handoff;return {kind:h.kind,op:h.request.op||null,script:h.request.script||null,live:!!document.querySelector('.gs:not(.out)'),snap:!!FemcGame.S.pending?.snap}})()")
        p.eval("""window.__expectedLine=(()=>{const q=FemcGame.S.pending?.snap?.queue||[];const line=q.find(l=>l.n!==undefined||l.t!==undefined);if(!line)return null;const el=document.createElement('div');el.innerHTML=FemcGame.sub(line.n??line.t);return el.textContent})()""")
        shot(label + '-battle-start')
        steps = fight()
        out = p.eval("window.__hoResult.outcome")
        p.top(); p.wait("!document.querySelector('.g-dh')", 30)
        if p.eval("window.__expectedLine"):
            p.wait("[...document.querySelectorAll('.g-results-ov [data-close]')].forEach(b=>b.click()) || document.querySelector('.gs:not(.out) .gs-text')?.textContent === window.__expectedLine", 30)
        bosses = p.eval("FemcGame.S.tartarus.bosses")
        no_errors(label)
        return info, steps, out, bosses

    if want('moon'):
        info, steps, out, bosses = story_fight('5/9', 25, 'moon')
        assert info['kind'] in ('operation', 'scripted') and info['live'] and out == 'win' and 'priestess' in bosses, (info, out, bosses)
        results['moon'] = {'handoff': info, 'outcome': out, 'cleared': bosses, 'resumed on the next line': True, 'turns': steps.get('cmd', 0)}
        print('moon', json.dumps(results['moon']), flush=True)

    if want('late'):
        info, steps, out, bosses = story_fight('11/3', 75, 'late')
        assert out == 'win' and info['live'], (info, out)
        results['late'] = {'handoff': info, 'outcome': out, 'cleared': bosses, 'turns': steps.get('cmd', 0)}
        print('late', json.dumps(results['late']), flush=True)

    # ── Save slots carry the battle progress ──────────────────────────────────────────────────────────────────────────
    if want('saves'):
        fresh_play('8/20', lvl=33)
        p.eval("(()=>{const b=FemcGame.S.battleSave;b.gear.owned.ring1=1;b.gear.eq.solar={...(b.gear.eq.solar||{}),acc:null};FemcGame.saveQuiet();FemcGame.saveSlot(1)})()")
        p.eval("(()=>{const b=FemcGame.S.battleSave;b.lvl=50;b.party=['yukari'];FemcGame.saveQuiet();FemcGame.saveSlot(2)})()")
        p.eval("FemcGame.loadSlot(1)")
        a = p.eval("({lvl:FemcGame.S.battleSave.lvl,party:FemcGame.S.battleSave.party})")
        p.eval("FemcGame.loadSlot(2)")
        b = p.eval("({lvl:FemcGame.S.battleSave.lvl,party:FemcGame.S.battleSave.party})")
        assert a['lvl'] == 33 and b['lvl'] == 50 and b['party'] == ['yukari'], (a, b)
        # Through the Save screen and a reload: the title's Load shows Solar's level per slot.
        p.goto(GAME); p.eval("document.querySelector('[data-t=load]').click()")
        labels = p.eval("[...document.querySelectorAll('.g-slot .g-slot-main small')].map(x=>x.textContent)")
        assert any('Lv 33' in x for x in labels) and any('Lv 50' in x for x in labels), labels
        no_errors('saves')
        results['saves'] = {'slot1': a, 'slot2': b, 'title Load shows levels': True}
        print('saves', json.dumps(results['saves']), flush=True)

    # ── Old two-page saves ────────────────────────────────────────────────────────────────────────────────────────────
    if want('migration'):
        # 1) A finished playthrough's state from before the merge: the autosave, its battle save in kg-femc-revamp-battle,
        #    an old slot, a New Game+ save pointing at an earlier run, and the v1 / practice saves that must stay as they are.
        p.goto(GAME)
        built = p.eval("""(()=>{
          FemcGame.newGame(); const S=JSON.parse(JSON.stringify(FemcGame.S));
          S.phase='play'; S.day=FemcGame.dayOf('6/20'); S.slot='evening'; S.runId='rOLD1'; S.yen=12345; S.tartarus={nights:4,maxFloor:30,bosses:['priestess'],lastParty:['solar','yukari']};
          ['battleSave','battleCarry','battleAt','handoff','mv'].forEach(k=>delete S[k]);
          const B=JSON.parse(JSON.stringify(FemcBattleSave.seed(70))); B.lvl=24; B.exp=55; B.party=['yukari','akihiko']; B.settings.difficulty='hard'; B.cutins='off'; B.speed=2;
          const NG=JSON.parse(JSON.stringify(S)); NG.runId='rNEW2'; NG.ngFrom='rOLD1'; NG.ngp=1; NG.day=FemcGame.dayOf('4/20');
          localStorage.clear();
          localStorage.setItem('kg-femc-game', JSON.stringify({sentinel:'v1'}));
          localStorage.setItem('kg-femc-battle-proto', JSON.stringify({sentinel:'practice'}));
          localStorage.setItem('kg-femc-revamp', JSON.stringify(S));
          localStorage.setItem('kg-femc-revamp-slot1', JSON.stringify({at:Date.now(),label:'old',state:S}));
          localStorage.setItem('kg-femc-revamp-slot2', JSON.stringify({at:Date.now(),label:'old ng+',state:NG}));
          localStorage.setItem('kg-femc-revamp-battle', JSON.stringify({v:1,runs:{rOLD1:{at:Date.now(),day:75,save:B}}}));
          return {bl:B.lvl};
        })()""")
        p.goto(GAME)
        m = p.eval("""({mv:FemcGame.S.mv, lvl:FemcGame.S.battleSave?.lvl, party:FemcGame.S.battleSave?.party, yen:FemcGame.S.yen, nights:FemcGame.S.tartarus.nights,
          diff:FemcGame.settings().difficulty, cut:FemcGame.settings().cutins, spd:FemcGame.settings().battleSpeed,
          pre:!!localStorage.getItem('kg-femc-revamp-premerge'), old:!!localStorage.getItem('kg-femc-revamp-battle'),
          v1:localStorage.getItem('kg-femc-game'), proto:localStorage.getItem('kg-femc-battle-proto'), foot:document.querySelector('.g-title-foot')?.textContent})""")
        assert m['mv'] == 2 and m['lvl'] == 24 and m['party'] == ['yukari', 'akihiko'] and m['yen'] == 12345 and m['nights'] == 4, m
        assert m['diff'] == 'hard' and m['cut'] == 'off' and m['spd'] == 2 and m['pre'] and m['old'], m
        assert json.loads(m['v1']) == {'sentinel': 'v1'} and json.loads(m['proto']) == {'sentinel': 'practice'}, m
        assert 'Lv 24' in (m['foot'] or ''), m['foot']
        p.eval("document.querySelector('[data-t=continue]').click()")
        p.wait("!!document.querySelector('.g-hud:not([hidden])')", 20)
        # The old slots load into the merged shape too; New Game+ carries the earlier run's battle save into its first fight.
        s1 = p.eval("FemcGame.loadSlot(1) && ({lvl:FemcGame.S.battleSave?.lvl, mv:FemcGame.S.mv})")
        s2 = p.eval("FemcGame.loadSlot(2) && ({own:FemcGame.S.battleSave, carry:FemcGame.S.battleCarry?.lvl, mv:FemcGame.S.mv})")
        made = p.eval("(()=>{const b=FemcGame.ensureBattleSave();return {lvl:b.lvl, ngp:b.ngp, ops:b.ops.cleared.length, carry:FemcGame.S.battleCarry}})()")
        assert s1 == {'lvl': 24, 'mv': 2} and s2['own'] is None and s2['carry'] == 24 and made['lvl'] == 24 and made['ngp'] == 1 and made['ops'] == 0 and made['carry'] is None, (s1, s2, made)
        # An old backup code (no battle progress inside) still loads.
        code = p.eval("""btoa(unescape(encodeURIComponent(JSON.stringify({game:'kg-femc-revamp',v:1,at:Date.now(),state:JSON.parse(localStorage.getItem('kg-femc-revamp-slot1')).state}))))""")
        assert p.eval("FemcGame.importCode(%s) === true && FemcGame.S.battleSave.lvl === 24" % json.dumps(code))
        no_errors('migration-1')

        # 2) Mid-fight: the old game had sent Solar to femc-battle.html (a pending kg-femc-handoff) and the tab was closed.
        #    Build it from a real prologue fight's state, in the old shape, then Continue: the fight reopens here and the
        #    scene goes on from the line after it.
        p.goto(GAME)
        p.eval("localStorage.clear();localStorage.setItem('kg-femc-game',JSON.stringify({sentinel:'v1'}));localStorage.setItem('kg-femc-battle-proto',JSON.stringify({sentinel:'practice'}))")
        p.goto(GAME)
        p.eval("document.querySelector('[data-t=new]').click()")
        life("!!document.querySelector('.g-dh')", 2000)
        p.eval("""(()=>{const S=JSON.parse(JSON.stringify(FemcGame.S)), h=S.handoff;
          ['battleSave','battleCarry','battleAt','handoff','mv'].forEach(k=>delete S[k]); delete S.pending.music;
          h.returnTo='femc-game.html?from=battle';
          sessionStorage.setItem('oldState',JSON.stringify(S)); sessionStorage.setItem('oldHandoff',JSON.stringify(h));})()""")
        p.goto(GAME)  # leave the page mid-transition, then write the old-shape save over it
        p.eval("""localStorage.setItem('kg-femc-revamp',sessionStorage.getItem('oldState'));localStorage.setItem('kg-femc-handoff',sessionStorage.getItem('oldHandoff'));localStorage.removeItem('kg-femc-revamp-premerge')""")
        p.goto(GAME)
        mid = p.eval("({h:FemcGame.S.handoff?.status, key:localStorage.getItem('kg-femc-handoff'), pre:JSON.parse(localStorage.getItem('kg-femc-revamp-premerge')||'null')?.handoff?.length>0, foot:document.querySelector('.g-title-foot')?.textContent})")
        assert mid['h'] == 'pending' and mid['key'] is None and mid['pre'] and 'Dark Hour' in mid['foot'], mid
        p.eval("""window.__expectedLine=(()=>{const line=FemcGame.S.pending.snap.queue.find(l=>l.n!==undefined||l.t!==undefined);const el=document.createElement('div');el.innerHTML=FemcGame.sub(line.n??line.t);return el.textContent})()""")
        p.eval("document.querySelector('[data-t=continue]').click()")
        p.wait("!!document.querySelector('.g-dh.live')", 30)
        fight()
        p.top(); p.wait("!document.querySelector('.g-dh') && document.querySelector('.gs-text')?.textContent === window.__expectedLine", 30)
        assert p.eval("!FemcGame.S.handoff && FemcGame.S.battleSave && localStorage.getItem('kg-femc-handoff')===null")
        no_errors('migration-2')

        # 3) Finished but never applied: the old battle page had written its result and the tab closed before the life sim
        #    read it. Continue applies it once (and a second reload doesn't apply it again).
        p.goto(GAME)
        p.eval("""(()=>{const S=JSON.parse(JSON.stringify(FemcGame.S)); S.phase='play'; S.pending=null; S.handoffId='hOLD9'; S.yen=1000;
          ['battleSave','battleCarry','battleAt','handoff','mv'].forEach(k=>delete S[k]);
          const h={id:'hOLD9',kind:'tartarus',status:'done',request:{title:'Tartarus',party:['solar']},date:{md:'6/2',weekday:'Tue'},result:{outcome:'win',yenDelta:500,exp:{solar:77},items:{},fatigue:'tired',floorsReached:12}};
          localStorage.setItem('kg-femc-revamp',JSON.stringify(S)); localStorage.setItem('kg-femc-handoff',JSON.stringify(h)); localStorage.removeItem('kg-femc-revamp-premerge');
          sessionStorage.setItem('exp0', String(S.battle.exp.solar||0));})()""")
        p.goto(GAME)
        p.eval("document.querySelector('[data-t=continue]').click()")
        p.wait("!!document.querySelector('.g-results')", 20)
        done = p.eval("({yen:FemcGame.S.yen, exp:(FemcGame.S.battle.exp.solar||0)-(+sessionStorage.getItem('exp0')), floor:FemcGame.S.tartarus.maxFloor, h:FemcGame.S.handoff})")
        p.eval("document.querySelector('.g-results-ov [data-close]').click()")
        p.goto(GAME)
        again = p.eval("({yen:FemcGame.S.yen, h:FemcGame.S.handoff})")
        assert done['yen'] == 1500 and done['exp'] == 77 and done['floor'] >= 12 and done['h'] is None and again['yen'] == 1500 and again['h'] is None, (done, again)
        assert json.loads(p.eval("localStorage.getItem('kg-femc-game')")) == {'sentinel': 'v1'} and json.loads(p.eval("localStorage.getItem('kg-femc-battle-proto')")) == {'sentinel': 'practice'}
        no_errors('migration-3')
        results['migration'] = {'old autosave + battle save': m['lvl'], 'battle settings seeded': True, 'old slots': True, 'New Game+ carry': made, 'old backup code': True,
                                'mid-fight resumed on the right line': True, 'finished fight applied once': done, 'v1/practice untouched': True, 'raw old save kept': True}
        print('migration', json.dumps(results['migration']), flush=True)

    # ── Practice mode ─────────────────────────────────────────────────────────────────────────────────────────────────
    if want('practice'):
        p.goto(GAME)
        p.eval("localStorage.clear(); FemcGame.newGame(); FemcGame.S.phase='play'; FemcGame.save(); location.reload()")
        time.sleep(1); p.goto(GAME)
        story0 = p.eval("localStorage.getItem('kg-femc-revamp')")
        href = p.eval("document.querySelector('.g-title-practice')?.getAttribute('href')")
        assert href == 'femc-battle.html?practice=1', href
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/{href}&speed=10&seed=4'})
        p.wait("!!window.FemcBattle && FemcBattle.screen()==='hub'")
        assert p.eval("!FemcBattle.embedded && document.querySelector('.bt-kicker').textContent.includes('Practice') && document.querySelector('a[href=\"femc-game.html\"]') !== null")
        shot('practice-hub')
        # A practice fight: enter Tartarus, win one battle, leave.
        p.eval("document.querySelector('[data-go=run]').click()")
        for _ in range(3000):
            if p.eval("!!FemcBattle.marks['results']"): break
            p.eval(FIGHT); time.sleep(.03)
        else:
            raise AssertionError('practice fight did not finish')
        proto = p.eval("JSON.parse(localStorage.getItem('kg-femc-battle-proto'))")
        assert proto and proto.get('v') == 4 and proto.get('runs', 0) >= 1, proto
        assert p.eval("localStorage.getItem('kg-femc-revamp')") == story0, 'practice touched the story save'
        # One settings store: a change in practice is the story's setting too.
        p.eval("FemcBattle.openSettings('difficulty')")
        p.eval("(()=>{const r=document.querySelector('.bt-set-row.sel [data-d=\"1\"], .bt-setp [data-d=\"1\"]'); r && r.click()})()")
        p.eval("FemcBattle.ctl?.back?.()")
        diff = p.eval("JSON.parse(localStorage.getItem('kg-femc-revamp-settings')||'{}').difficulty")
        assert diff and diff == p.eval("FemcBattle.settings.difficulty"), diff
        # The old page-jump URL just goes back to the game.
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?from=game'})
        p.wait("location.pathname.endsWith('femc-game.html') && !!window.FemcGame")
        no_errors('practice')
        results['practice'] = {'own save': True, 'story save untouched': True, 'shared settings': diff, 'old ?from=game goes home': True}
        print('practice', json.dumps(results['practice']), flush=True)

    # ── Three window sizes ────────────────────────────────────────────────────────────────────────────────────────────
    if want('views'):
        fits = {}
        for w, h in [(1000, 486), (375, 812), (1440, 900)]:
            tag = f'{w}x{h}'
            view(w, h)
            p.goto(GAME)
            p.eval("localStorage.clear()"); p.goto(GAME)
            time.sleep(1.2)  # the title slams in
            shot(f'{tag}-title')
            fresh_play('7/24', lvl=30)
            p.eval("document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.evening()")
            shot(f'{tag}-evening')
            p.eval("FemcGameUI.openStatus('party')"); time.sleep(.3)
            shot(f'{tag}-menu')
            over = [p.eval("document.documentElement.scrollWidth > innerWidth")]
            p.eval("document.querySelector('.g-fm-ov:not(.out) [data-close]').click()")
            p.eval("FemcGameUI.openSettings()"); time.sleep(.3); shot(f'{tag}-settings')
            p.eval("document.querySelector('.g-settings-ov [data-close]').click()")
            p.eval("FemcGame.makeHandoff('tartarus',{title:'Tartarus',party:['solar','yukari','junpei'],forced:false})")
            p.battle(); fight("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'")
            shot(f'{tag}-dh-hub')
            over.append(p.eval("document.documentElement.scrollWidth > innerWidth"))
            p.eval("document.querySelector('[data-go=menu]').click()")
            p.top(); p.wait("!!document.querySelector('.g-fm-ov.g-over-battle:not(.out)')"); time.sleep(.3)
            shot(f'{tag}-dh-menu')
            over.append(p.eval("document.documentElement.scrollWidth > innerWidth"))
            p.eval("document.querySelector('.g-fm-ov:not(.out) [data-close]').click()")
            p.frame(); p.wait("FemcBattle.ctl?.kind==='buttons'")
            p.eval("document.querySelector('[data-go=run],[data-go=cont]').click()")
            fight("!!FemcBattle.B && FemcBattle.ctl?.kind==='menu' && FemcBattle.ctl.items?.some(i=>i.v==='guard')", 3000)
            p.eval("FemcBattle.freeze()"); shot(f'{tag}-fight'); p.eval("FemcBattle.unfreeze()")
            over.append(p.eval("document.documentElement.scrollWidth > innerWidth"))
            p.eval("window.__leave=true"); fight()
            p.top(); p.wait("!document.querySelector('.g-dh') && !!document.querySelector('.g-results')", 30)
            shot(f'{tag}-results')
            over.append(p.eval("document.documentElement.scrollWidth > innerWidth"))
            assert not any(over), (tag, over)
            no_errors(tag)
            fits[tag] = 'no sideways scroll, no errors'
        results['views'] = fits
        print('views', json.dumps(fits), flush=True)
    print(json.dumps({'passed': list(results), 'screenshots': str(OUT), 'files': len(shots)}))
finally:
    p.close()
