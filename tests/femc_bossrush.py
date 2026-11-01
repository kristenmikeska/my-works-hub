"""Velvet Trials (2026-11-01, game trials.js + battle trials-battle.js; FEMC-BOSS-RUSH.md), in headless Chrome on an isolated
profile and a local server (never the player's saves).

Run: python3 tests/femc_bossrush.py [--only unlock,score,rewards,weekly,trial,interrupt,saves,sim,shots] [--screenshots DIR]

unlock     no button before any boss; a boss beaten opens it; unbeaten slots are ???, a trial opens only with all its bosses;
           guardians from tt.guardians and the climb's high-water mark, superbosses, New Game+ counting every full moon;
           bosses seen once stay seen; never in the epilogue; levels lifted (escorts too), never lowered; Duels at Solar's level.
score      the formula: par, knockouts, HP, the modifier's ×1.2 / ×1.1, rank thresholds; no rank without a clear.
rewards    one-time per rank (S at once pays C, B, A and S; never twice), cards and materials into the battle save, the looks.
weekly     the Featured Trial (seeded per week, a modifier, pays the difference when it improves), Duels capped at two a week,
           both reset the next week.
trial      a whole trial through the UI (Velvet Room → Velvet Trials → Begin → four real fights → the result screen → back to the
           trials): rank and plumes paid, and nothing of the story changed (day, slot, yen, items, Tartarus, bosses, flags,
           the battle save's level, EXP, party, items, Theurgy, Analyze); giving up at an interlude pays nothing.
interrupt  a reload mid-trial: the fight reopens and asks; Abandon pays nothing and leaves no trace; Start over plays it.
saves      records in a save slot and a backup code, New Game+ keeps them, malformed records rebuilt.
sim        a quick engine sim of the first trial at its tuned level (wins, rounds); the modifiers on an engine battle.
shots      the trials screen and a result screen at 1440x900 and 390x844 (no sideways scroll)."""
import argparse, base64, json, pathlib, time
from femc_browser import Page

URL = 'femc-game.html?speed=10&seed=7'
REPO = pathlib.Path(__file__).resolve().parents[1]
ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/femc-bossrush-shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
SRC = (REPO / 'tests/femc_onegame.py').read_text()
FIGHT = SRC.split('FIGHT = r"""', 1)[1].split('"""', 1)[0]  # the shared in-frame driver (real menus, Act Freely)
SIM = (REPO / 'tests/femc_ngclimb_sim.js').read_text()


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'8/3'); S.slot=cfg.slot||'after';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=50000; S.condition='good'; S.ngp=cfg.ngp||0;
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]}; S.lateNights={seen:[],lastDay:999};
  S.tartarus.bosses=(cfg.ops||[]).slice(); S.tartarus.maxFloor=cfg.maxFloor||40; S.inventory={medicine:2};
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
  b.lvl=cfg.lvl||99; b.party=['akihiko','yukari','mitsuru']; b.awakened=true; b.ops.cleared=(cfg.ops||[]).slice();
  D.party.forEach(m=>{ if(m.id!=='solar') b.mem[m.id]={lvl:cfg.lvl||99,exp:0}; });
  b.tt.guardians=(cfg.guardians||[]).slice(); b.tt.supers=(cfg.supers||[]).slice(); if(cfg.top) b.late={top:cfg.top,zenith:false};
  b.items={medicine:2}; b.th={solar:40};
  S.battleSave=FemcBattleSave.normalize(b);
  const g=FemcGacha.gs(); g.plumes=0; g.miles=FemcRequests.milestones().map(m=>m.id);
  S.tartarus.lastParty=['solar'].concat(b.party); G.save();
  return true;
})()"""


p = Page()


def setup(**cfg):
    p.top(); p.goto(URL)
    p.eval(SETUP % {'cfg': json.dumps(cfg)})
    p.eval("new Promise(r=>setTimeout(r,450))")


def click(sel, timeout=20):
    p.wait('!!document.querySelector(%s)' % json.dumps(sel), timeout)
    p.eval('document.querySelector(%s).click()' % json.dumps(sel))


def view(w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def shot(name):
    p.eval("new Promise(r=>setTimeout(r,500)).then(()=>document.querySelectorAll('.g-toast,.g-toasts > *').forEach(x=>x.remove()))")
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def clean(where):
    errs = p.console(); ok(not errs, f'{where}: {errs}')


def open_velvet():
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut('after','mall')")
    click('[data-act=velvet]')
    click('.g-activity-preview:not(.out) [data-confirm]')
    p.wait("!!document.querySelector('.g-vel-ov:not(.out) [data-draw=yen]')")


def open_trials():
    open_velvet()
    click('.g-vel-ov:not(.out) [data-tr-open]')
    p.wait("!!document.querySelector('.g-tr-ov:not(.out) .g-tr-list')")


def fight_until(cond, limit=6000):
    p.frame()
    for _ in range(limit):
        if p.eval(cond): return
        p.eval(FIGHT); time.sleep(.03)
    raise AssertionError(('timed out', cond, p.eval("JSON.stringify({s:FemcBattle.screen(),k:FemcBattle.ctl&&FemcBattle.ctl.kind,m:Object.keys(FemcBattle.marks).slice(-8)})")))


STORY = r"""(()=>{const S=FemcGame.S,b=S.battleSave;return JSON.stringify({day:S.day,slot:S.slot,yen:S.yen,inv:S.inventory,tt:S.tartarus,flags:Object.keys(S.flags).sort(),
  events:S.events.length,cond:S.condition,spent:S.spent,lvl:b.lvl,exp:b.exp,mem:b.mem,party:b.party,items:b.items,th:b.th,known:b.known,ops:b.ops,ttb:b.tt,
  links:Object.fromEntries(Object.entries(S.links).filter(([k,v])=>v.rank>0).map(([k,v])=>[k,v.rank])),battle:S.battle})})()"""
APPLY = r"""((T,t,extra)=>{const G=FemcGame;const h={id:'x'+Math.random(),kind:'trial',status:'done',request:{trial:T}};
  return G.applyResult(h,Object.assign({outcome:t&&t.outcome==='clear'?'win':'lose',exp:{},items:{},yenDelta:0,trial:t},extra||{})).trial})(%s,%s,%s)"""
def fake(T, rounds=6, ko=False, hp=1.0, outcome='clear'):
    return {'id': T['id'], 'outcome': outcome, 'cleared': len(T['fights']), 'rounds': rounds * len(T['fights']), 'kos': len(T['fights']) if ko else 0, 'hp': hp, 'ms': 60000,
            'fights': [{'rounds': rounds, 'ko': ko, 'hp': hp} for _ in T['fights']]}


try:
    view(1280, 850)
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    ALL_OPS = ['priestess', 'empress', 'hierophant', 'lovers', 'chariot', 'hermit', 'fortune', 'hanged']

    if want('unlock'):
        setup()
        open_velvet()
        ok(not p.eval("!!document.querySelector('[data-tr-open]')"), 'button with no boss beaten')
        setup(ops=['priestess'])
        open_trials()
        r = p.eval("""(()=>{const c=document.querySelector('[data-tr=moons1]');return {slots:[...c.querySelectorAll('.g-tr-slots li')].map(x=>x.textContent),
          dis:c.querySelector('[data-tr-go]').disabled,name:c.querySelector('.g-tr-top b').textContent,shut:document.querySelector('[data-tr=doors] .g-tr-top b').textContent,
          duels:[...document.querySelectorAll('[data-tr-duel]')].map(b=>b.dataset.trDuel),feat:!!document.querySelector('[data-tr-feat]')}})()""")
        ok(r['slots'] == ['The Priestess', '???', '???', '???'] and r['dis'] and r['name'] == 'The First Moons' and r['shut'] == 'Sealed' and r['duels'] == ['priestess'] and not r['feat'], r)
        ok('Lacquered' not in p.eval("document.querySelector('.g-tr-ov').textContent"), 'unseen boss named')
        setup(ops=ALL_OPS[:4], guardians=['f11', 'f29'], supers=['super_abbess'])
        b = p.eval("[...FemcTrials.beaten()].sort()")
        ok(b == sorted(ALL_OPS[:4] + ['guard_thebel', 'guard_arqa', 'super_abbess']), b)
        ok(p.eval("FemcTrials.trialState(FemcTrials.TRIALS[0]).open && !FemcTrials.trialState(FemcTrials.TRIALS[1]).open"), 'open rules')
        # New Game+: every full moon; the climb's high-water mark covers guardians below it.
        setup(ngp=1, top=150)
        b = p.eval("[...FemcTrials.beaten()]")
        ok(all(o in b for o in ALL_OPS) and 'guard_adamah' in b and 'guard_empyrean' not in b and 'super_cavalier' not in b, b)
        # Seen stays seen (a later save line without the records).
        p.eval("FemcGame.S.ngp=0;FemcGame.S.battleSave.late={top:0,zenith:false}")
        ok(len(p.eval("[...FemcTrials.beaten()]")) == len(b), 'seen kept')
        # Levels: lifted with escorts, never lowered; Duels at Solar's level.
        lf = p.eval("""(()=>{const T=FemcTrials,C=T.catalogue();return {pr:T.lift(C.priestess,27),ab:T.lift(C.super_abbess,60),zb:T.lift(C.guard_zebul,80),
          duel:T.request('duel','guard_thebel').fights[0].group,rq:T.request('trial','moons1')}})()""")
        ok(lf['pr'] == ['priestess@27'] and lf['ab'] == ['super_abbess@60', 'relic@57', 'relic@57'] and lf['zb'] == ['guard_zebul'] and lf['duel'] == ['guard_thebel@99'], lf)
        rq = lf['rq']; ok(len(rq['fights']) == 4 and rq['heal'] == 0.25 and rq['fights'][0]['op']['id'] == 'priestess' and 'medicine' in rq['kit'], rq)
        # Never in the epilogue.
        p.eval("FemcGame.S.epi={world:'runners'}")
        ok(p.eval("FemcTrials.velvetButtons()") == '' and not p.eval("FemcTrials.anyBeaten()"), 'epilogue')
        clean('unlock'); print('unlock OK', flush=True)

    if want('score'):
        setup(ops=ALL_OPS)
        s = p.eval("""(()=>{const T=FemcTrials,R=T.request('trial','moons1'),f=(r,ko,hp)=>({fights:R.fights.map(()=>({rounds:r,ko})),hp});
          const M=Object.assign({},R,{mod:{id:'glass'}});
          return {best:T.score(R,f(3,false,1)),par:T.score(R,f(6,false,1)),slow:T.score(R,f(12,false,1)),ko:T.score(R,f(6,true,.3)),mid:T.score(R,f(9,false,.5)),
            low:T.score(R,f(12,true,0)),mod:T.score(M,f(9,false,.5))}})()""")
        ok(s['best']['score'] == 4400 and s['best']['rank'] == 'S' and s['par']['score'] == 4400, s)
        ok(s['slow']['rank'] == 'A' and s['mid']['rank'] == 'A', s)          # no speed on the singles, a little on the pairs
        ok(s['ko']['rank'] == 'B' and s['low']['rank'] == 'C', s)
        ok(s['mod']['score'] == round(s['mid']['score'] * 1.2) and s['mod']['pct'] > s['mid']['pct'], s)
        print('score OK', json.dumps(s), flush=True)

    if want('rewards'):
        setup(ops=ALL_OPS)
        T = p.eval("FemcTrials.request('trial','moons1')")
        cards0 = p.eval("FemcBuild.ensureCards?FemcBuild.ensureCards(FemcGame.S.battleSave).list.length:FemcGame.S.battleSave.cards.list.length")
        a = p.eval(APPLY % (json.dumps(T), json.dumps(fake(T, rounds=12, ko=True, hp=0.0)), 'null'))   # C
        ok(a['rank'] == 'C' and p.eval("FemcGacha.gs().plumes") == 1 and p.eval("FemcGame.S.battleSave.mats.guardian_crest") == 1, a)
        ok('New look: Challenger Title' in a['got'] and p.eval("FemcCosmetics.owns('tr-tt-challenger')"), a)
        a = p.eval(APPLY % (json.dumps(T), json.dumps(fake(T, rounds=12, ko=True, hp=0.0)), 'null'))   # C again: nothing
        ok(a['got'] == [] and p.eval("FemcGacha.gs().plumes") == 1, a)
        a = p.eval(APPLY % (json.dumps(T), json.dumps(fake(T)), 'null'))   # S: B + A + S
        ok(a['rank'] == 'S' and a['newBest'] and p.eval("FemcGacha.gs().plumes") == 1 + 2 + 3 + 4, a)
        ok(p.eval("FemcGame.S.battleSave.mats.velvet_thread") == 2 and p.eval("FemcBuild.ensureCards?FemcBuild.ensureCards(FemcGame.S.battleSave).list.length:FemcGame.S.battleSave.cards.list.length") == cards0 + 2, 'card / thread')
        ok(p.eval("FemcTrials.tr().paid.moons1.join()") == 'C,B,A,S', 'paid')
        a = p.eval(APPLY % (json.dumps(T), json.dumps(fake(T)), 'null'))
        ok(a['got'] == [] and p.eval("FemcGacha.gs().plumes") == 10, 'S twice')
        # Abandoned / lost / simulated: nothing.
        a = p.eval(APPLY % (json.dumps(T), json.dumps(dict(fake(T), outcome='lose', cleared=2)), 'null'))
        a2 = p.eval(APPLY % (json.dumps(T), json.dumps({'id': T['id'], 'outcome': 'abandoned', 'abandoned': True}), 'null'))
        a3 = p.eval(APPLY % (json.dumps(T), 'null', '{"simulated":true}'))
        ok(not a.get('rank') and a2['outcome'] == 'abandoned' and a3['outcome'] == 'void' and p.eval("FemcGacha.gs().plumes") == 10, (a, a2, a3))
        # Three trials at A → the wallpaper; S on all seven → the Champion title.
        for tid in ('moons2', 'wardens1'):
            T2 = p.eval("FemcTrials.request('trial',%s)" % json.dumps(tid)); p.eval(APPLY % (json.dumps(T2), json.dumps(fake(T2, rounds=9, hp=.6)), 'null'))
        ok(p.eval("FemcCosmetics.owns('tr-wp-checker') && !FemcCosmetics.owns('tr-tt-champion')"), 'checker')
        for t in p.eval("FemcTrials.TRIALS.map(t=>t.id)"):
            T2 = p.eval("FemcTrials.request('trial',%s)" % json.dumps(t)); p.eval(APPLY % (json.dumps(T2), json.dumps(fake(T2, rounds=3)), 'null'))
        ok(p.eval("FemcCosmetics.owns('tr-tt-champion')"), 'champion')
        ok(p.eval("FemcCosmetics.byId('tr-bui-rose').pool===false && FemcCosmetics.PAL.trialrose.length===4"), 'looks data')
        total = p.eval("FemcGacha.gs().plumes"); ok(total == 70, total)
        clean('rewards'); print('rewards OK total', total, flush=True)

    if want('weekly'):
        setup(ops=ALL_OPS, guardians=['f11', 'f29', 'f52', 'f80'])
        f1 = p.eval("(()=>{const F=FemcTrials.featured();return [F.T.id,F.mod.id]})()")
        same = p.eval("(()=>{const F=FemcTrials.featured();return [F.T.id,F.mod.id]})()")
        ok(f1 == same, 'seeded')
        seen = set()
        for d in range(0, 70, 7):
            p.eval("FemcGame.S.day=FemcGame.dayOf('8/3')+%d" % d); F = p.eval("(()=>{const F=FemcTrials.featured();return F.T.id+'/'+F.mod.id})()"); seen.add(F)
        ok(len(seen) >= 3, ('rotates', seen))
        p.eval("FemcGame.S.day=FemcGame.dayOf('8/3')")
        T = p.eval("FemcTrials.request('featured')")
        ok(T['featured'] and T['mod'] and (T['kit'] == {} if T['mod']['id'] == 'bare' else T['kit']), T)
        a = p.eval(APPLY % (json.dumps(T), json.dumps(fake(T, rounds=14, ko=True, hp=0)), 'null'))
        ok(a['rank'] == 'C' and p.eval("FemcGacha.gs().plumes") == 1, a)
        a = p.eval(APPLY % (json.dumps(T), json.dumps(fake(T, rounds=12, hp=.3)), 'null'))
        pl = p.eval("FemcGacha.gs().plumes"); ok(a['rank'] in 'AB' and pl == {'A': 3, 'B': 2}[a['rank']], (a, pl))
        a = p.eval(APPLY % (json.dumps(T), json.dumps(fake(T, rounds=3)), 'null'))
        ok(a['rank'] == 'S' and p.eval("FemcGacha.gs().plumes") == 4 and p.eval("FemcCosmetics.owns('tr-bui-rose')"), a)
        a = p.eval(APPLY % (json.dumps(T), json.dumps(fake(T, rounds=3)), 'null')); ok(p.eval("FemcGacha.gs().plumes") == 4, 'feat once')
        ok(not p.eval("FemcTrials.tr().paid[%s]" % json.dumps(T['id'])), 'featured does not pay the one-time ranks')
        # Duels: two a week.
        D = p.eval("FemcTrials.request('duel','priestess')")
        for _ in range(3): p.eval(APPLY % (json.dumps(D), json.dumps(fake(D, rounds=4)), 'null'))
        ok(p.eval("FemcGacha.gs().plumes") == 6 and p.eval("FemcTrials.tr().wk.duels") == 2, 'duel cap')
        # Next week: both reset.
        p.eval("FemcGame.S.day+=7")
        T = p.eval("FemcTrials.request('featured')")
        p.eval(APPLY % (json.dumps(T), json.dumps(fake(T, rounds=3)), 'null')); p.eval(APPLY % (json.dumps(D), json.dumps(fake(D, rounds=4)), 'null'))
        ok(p.eval("FemcGacha.gs().plumes") == 6 + 4 + 1, p.eval("FemcGacha.gs().plumes"))
        clean('weekly'); print('weekly OK', f1, flush=True)

    if want('trial') or want('shots'):
        setup(ops=ALL_OPS)
        before = p.eval(STORY)
        view(1440, 900)
        open_trials()
        if want('shots'):
            shot('trials-1440')
            ok(p.eval("(()=>{const o=document.querySelector('.g-tr-ov .g-panel');return o.scrollWidth<=o.clientWidth+1})()"), 'sideways 1440')
        click('.g-tr-ov:not(.out) [data-tr-go=moons1]')
        fight_until("FemcBattle.screen()==='room' && !!document.querySelector('.tr-trial')")
        intro = p.eval("document.querySelector('.bt-room-in').textContent")
        ok('4 fights in a row' in intro and 'The Priestess' in intro and 'Medicine' in intro, intro)
        fight_until("!!window.__hoResult", limit=20000)
        res = p.eval("window.__hoResult")
        ok(res['outcome'] == 'win' and res['trial']['outcome'] == 'clear' and res['trial']['cleared'] == 4 and len(res['trial']['fights']) == 4 and res['exp'] == {} and res['yenDelta'] == 0, res)
        p.top()
        p.wait("!!document.querySelector('.g-tr-res-ov:not(.out) .g-tr-rank.big')", 40)
        rank = p.eval("document.querySelector('.g-tr-rank.big').textContent")
        tr = p.eval("FemcTrials.tr()")
        ok(tr['best']['moons1']['rank'] == rank and tr['paid']['moons1'][-1] == rank and tr['clears'] == 1, (rank, tr))
        pl = p.eval("FemcGacha.gs().plumes"); ok(pl == sum({'C': 1, 'B': 2, 'A': 3, 'S': 4}[r] for r in 'CBAS'[:'CBAS'.index(rank) + 1]), (rank, pl))
        if want('shots'):
            shot('result-1440')
        after = json.loads(p.eval(STORY)); b4 = json.loads(before)
        diff = {k: (b4[k], after[k]) for k in b4 if b4[k] != after[k] and k not in ('known',)}
        ok(not diff, ('story changed', diff))
        click('.g-tr-res-ov [data-tr-back]')
        p.wait("!!document.querySelector('.g-tr-ov:not(.out) .g-tr-list') && !!document.querySelector('.g-vel-ov:not(.out)')", 20)
        ok(p.eval("document.querySelector('[data-tr=moons1] .g-tr-rank').textContent") == rank, 'best on the card')
        ok(p.eval("!FemcGame.S.handoff && !FemcGame.S.pending && !FemcGame.S.battleSave.trialAt"), 'clean after')
        # Give up at the first interlude: nothing paid.
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
        pl0 = p.eval("FemcGacha.gs().plumes")
        p.eval("FemcTrials.start('trial','moons1')")
        fight_until("!!document.querySelector('.tr-trial') && /NEXT/.test(document.querySelector('.bt-room-in h1')?.textContent||'')", limit=12000)
        p.eval("document.querySelector('[data-v=quit]').click()")
        p.wait("!!window.__hoResult")
        p.top(); p.wait("!!document.querySelector('.g-tr-res-ov:not(.out)')", 30)
        ok('Given up' in p.eval("document.querySelector('.g-tr-res-ov').textContent") and p.eval("FemcGacha.gs().plumes") == pl0, 'gave up')
        ok(json.loads(p.eval(STORY))['items'] == b4['items'], 'items back after giving up')
        clean('trial'); print('trial OK rank', rank, flush=True)
        if want('shots'):
            view(390, 844)
            p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
            open_trials(); shot('trials-390')
            ok(p.eval("(()=>{const o=document.querySelector('.g-tr-ov .g-panel');return o.scrollWidth<=o.clientWidth+1 && document.documentElement.scrollWidth<=390})()"), 'sideways 390')
            p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
            T = p.eval("FemcTrials.request('trial','moons1')")
            p.eval("(()=>{const T=%s,t=%s;const h={id:'s',kind:'trial',status:'done',request:{trial:T}};const sum=FemcGame.applyResult(h,{outcome:'win',trial:t});FemcTrials.results(h,sum,()=>{})})()" % (json.dumps(T), json.dumps(fake(T, rounds=7, hp=.8))))
            shot('result-390')
            ok(p.eval("(()=>{const o=document.querySelector('.g-tr-res-ov .g-panel');return o.scrollWidth<=o.clientWidth+1})()"), 'sideways result 390')
            view(1280, 850)
            print('shots OK', SHOTS, flush=True)

    if want('interrupt'):
        setup(ops=ALL_OPS)
        before = p.eval(STORY)
        p.eval("FemcTrials.start('trial','moons1')")
        fight_until("(FemcBattle.marks['trial-fight']||0)>=2", limit=12000)
        ok(p.eval("FemcBattle.save.trialAt===FemcBattle.handoff.id"), 'marked')
        p.top(); p.goto(URL)
        ok(p.eval("FemcGame.S.handoff && FemcGame.S.handoff.status==='pending' && FemcGame.S.handoff.kind==='trial'"), 'pending after reload')
        p.battle()
        p.wait("/INTERRUPTED/.test(document.querySelector('.bt-room-in h1')?.textContent||'')", 30)
        p.eval("document.querySelector('[data-v=leave]').click()")
        p.wait("!!window.__hoResult")
        ok(p.eval("window.__hoResult.trial.abandoned"), 'abandoned')
        p.top(); p.wait("!!document.querySelector('.g-tr-res-ov:not(.out)')", 30)
        p.eval("document.querySelector('.g-tr-res-ov [data-tr-back]').click()")
        time.sleep(.6)
        after = json.loads(p.eval(STORY)); b4 = json.loads(before)
        diff = {k: (b4[k], after[k]) for k in b4 if b4[k] != after[k]}
        ok(not diff and p.eval("FemcGacha.gs().plumes") == 0 and not p.eval("FemcGame.S.battleSave.trialAt") and not p.eval("FemcGame.S.battleSave.trialKeep"), ('trace', diff))
        # Start over: the same trial again from the first fight.
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcTrials.start('trial','moons1')")
        fight_until("(FemcBattle.marks['trial-fight']||0)>=1", limit=12000)
        p.top(); p.goto(URL); p.battle()
        p.wait("/INTERRUPTED/.test(document.querySelector('.bt-room-in h1')?.textContent||'')", 30)
        p.eval("document.querySelector('[data-v=again]').click()")
        fight_until("!!window.__hoResult", limit=20000)
        ok(p.eval("window.__hoResult.trial.outcome") == 'clear', p.eval("JSON.stringify(window.__hoResult.trial)"))
        p.top(); p.wait("!!document.querySelector('.g-tr-res-ov:not(.out)')", 30)
        ok(p.eval("FemcGacha.gs().plumes") > 0, 'paid after a restart')
        clean('interrupt'); print('interrupt OK', flush=True)

    if want('saves'):
        setup(ops=ALL_OPS)
        T = p.eval("FemcTrials.request('trial','moons1')")
        p.eval(APPLY % (json.dumps(T), json.dumps(fake(T, rounds=9, hp=.5)), 'null'))
        p.eval("FemcGame.saveSlot(3)")
        code = p.eval("FemcGame.exportCode()")
        best = p.eval("JSON.stringify(FemcTrials.tr().best)")
        p.goto(URL); p.eval("FemcGame.loadSlot(3)")
        ok(p.eval("JSON.stringify(FemcTrials.tr().best)") == best, 'slot')
        p.goto(URL); p.eval("FemcGame.importCode(%s)" % json.dumps(code))
        ok(p.eval("JSON.stringify(FemcTrials.tr().best)") == best, 'code')
        p.eval("FemcGame.newGamePlus()")
        ng = p.eval("JSON.stringify({b:FemcTrials.tr().best,p:FemcTrials.tr().paid,s:FemcTrials.tr().seen,ngp:FemcGame.S.ngp})")
        ok(p.eval("JSON.stringify(FemcTrials.tr().best)") == best and p.eval("FemcTrials.tr().paid.moons1.length") >= 2 and 'priestess' in p.eval("FemcTrials.tr().seen"), ('NG+ keeps', ng))
        p.eval("FemcGacha.gs().trials={seen:'x',best:[],paid:{moons1:'C'},wk:5,looks:null}")
        t = p.eval("FemcTrials.tr()")
        ok(t['seen'] == [] and t['best'] == {} and t['paid']['moons1'] == [] and isinstance(t['looks'], list), t)
        clean('saves'); print('saves OK', flush=True)

    if want('sim'):
        p.top(); p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=10&seed=4'})
        p.wait("document.readyState==='complete' && !!window.FemcBattle")
        p.eval(SIM)
        s = p.eval(r"""(()=>{const st=NGSIM.strong(['akihiko','yukari','mitsuru'],30),o=[];
          for(const g of [['priestess@27'],['empress@27','emperor@27'],['hierophant@27'],['lovers@27']]) o.push(NGSIM.many(st,g,3));return o})()""")
        ok(all(x['wins'] >= 2 for x in s), s)
        # The modifiers on a real engine battle (trials-battle.js MODS).
        m = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,M=FemcTrialsBattle.MODS,st=NGSIM.strong(['akihiko','yukari','mitsuru'],30);
          const mk=()=>{const fx=E.treeFx(st.nodes);return E.create({party:['solar'].concat(st.party).map(id=>E.buildUnit(id,st,{fx})),enemies:['priestess@27'],rand:E.rng(3),mods:fx.mods,known:{}})};
          let i=0;const rnd=()=>((i=(i*9301+49297)%233280)/233280);
          const a=mk(),f=a.foes()[0],aff0=JSON.stringify(f.aff);M.shuffle({D},rnd).setup(a);
          const vals=o=>Object.values(o).sort().join();
          const b=mk(),g=b.foes()[0],hp0=g.maxHp,lu0=g.lu,c0=b.S.mods.crit;M.glass({D}).setup(b);M.crit({D}).setup(b);
          return {shuf:JSON.stringify(f.aff)!==aff0&&vals(JSON.parse(aff0))===vals(f.aff),glass:g.maxHp===Math.round(hp0*.8)&&M.glass({D}).edmg===1.3,crit:b.S.mods.crit===c0+15&&g.lu===lu0*2}})()""")
        ok(all(m.values()), m)
        print('sim OK', json.dumps(s), flush=True)
finally:
    p.close()
