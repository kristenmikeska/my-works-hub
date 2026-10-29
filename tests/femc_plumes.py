"""More Velvet Plumes (2026-10-29, requests.js): Elizabeth's Requests, the Tartarus floor and guardian milestones, and the
Plume Exchange, played in headless Chrome (femc-game.html, isolated profile, localhost; no player saves).

Run: python3 tests/femc_plumes.py [--only data,requests,ui,milestones,retro,exchange,saves,shots] [--screenshots DIR]

Covers: the request list (count, waves, kinds, rewards, every id it names exists), waves posting by date, three taken at a
time, counted requests starting from the moment they're taken (a save with a big tally doesn't finish one), the battle tally
through core.js applyResult (Shadows, weaknesses by element) and the ready toast, handing in (plumes paid, the item or material
consumed, extras given, never twice), state requests handed in at once by a save already past them, giving up (the count starts
over), an activity, the monorail and an Echo request; the Velvet Room's Requests board through the real UI (take, hand in);
milestones (a block's first floor and summit, a guardian, the totals, paid once and never again, nothing on the title screen),
the retroactive grant for a save already high in the tower (once, with a toast, not again after a reload); the exchange (never
the last copy, an equipped, locked, levelled or refined card; the exact payout; reserves and taken requests kept back; the
weekly cap and its reset; the confirm screen through the UI); older and malformed saves loading; zero console errors;
screenshots of the board and the exchange at 1280x850 and 375x812."""
import argparse, base64, json, pathlib, time
from femc_browser import Page

URL = 'femc-game.html?speed=10&seed=7'
ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/femc-plumes-shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
results = {}


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  // Every toast requests.js (and gacha.js) shows goes through G.toast: kept in window.__toasts for the checks.
  if(!G.__toastHook){ const t0=G.toast; G.toast=(k,t,e)=>{ (window.__toasts||(window.__toasts=[])).push(t); return t0(k,t,e); }; G.__toastHook=true; }
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'8/3'); S.slot=cfg.slot||'after';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=cfg.yen||90000; S.condition='good';
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]}; S.lateNights={seen:[],lastDay:999};
  S.tartarus.maxFloor=cfg.maxFloor||1;
  Object.entries(cfg.ranks||{}).forEach(([id,r])=>{ if(!S.met.includes(id)) S.met.push(id); G.progress(id).rank=r; });
  Object.entries(cfg.inv||{}).forEach(([k,n])=>{ S.inventory[k]=n; });
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
  b.lvl=cfg.lvl||30; b.party=['akihiko','yukari','junpei']; b.awakened=true; b.ops.cleared=cfg.ops||[];
  D.party.forEach(m=>{ if(m.id!=='solar') b.mem[m.id]={lvl:cfg.lvl||30,exp:0}; });
  b.tt.guardians=(cfg.guardians||[]).slice();
  Object.entries(cfg.mats||{}).forEach(([k,n])=>{ b.mats[k]=n; });
  S.battleSave=FemcBattleSave.normalize(b);
  (cfg.echoes||[]).forEach(e=>FemcEchoes.add(S.battleSave,e[0],{via:'gift',lvl:e[1]||null}));
  FemcEchoes.takeNews(S.battleSave);
  // Milestones a test isn't about are marked paid, so their toasts and plumes stay out of the counts.
  const g=FemcGacha.gs(); g.plumes=cfg.plumes||0; if(!cfg.miles) g.miles=FemcRequests.milestones().map(m=>m.id);
  S.tartarus.lastParty=['solar'].concat(b.party); G.save();
  return true;
})()"""


def setup(p, **cfg):
    p.goto(URL)
    p.eval(SETUP % {'cfg': json.dumps(cfg)})
    p.eval("new Promise(r=>setTimeout(r,450))")  # the debounced milestone pass after that save


def click(p, sel, timeout=20):
    p.wait('!!document.querySelector(%s)' % json.dumps(sel), timeout)
    p.eval('document.querySelector(%s).click()' % json.dumps(sel))


def shot(p, name):
    p.eval("new Promise(r=>setTimeout(r,450)).then(()=>document.querySelectorAll('.g-toast,.g-toasts > *').forEach(x=>x.remove()))")
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def view(p, w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def clean(p, where):
    errs = p.console(); ok(not errs, f'{where}: {errs}')


def open_velvet(p):
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut('after','mall')")
    click(p, '[data-act=velvet]')
    click(p, '.g-activity-preview:not(.out) [data-confirm]')
    p.wait("!!document.querySelector('.g-vel-ov:not(.out) [data-draw=yen]')")


def no_scroll(p, name):
    ok(p.eval("(()=>{const o=[...document.querySelectorAll('.g-overlay:not(.out) .g-panel')].pop();return !o||o.scrollWidth<=o.clientWidth+1})()"), name + ': sideways scroll in the panel')


def toasts(p):
    """Texts passed to FemcGame.toast since the last call (SETUP's hook)."""
    return p.eval("(()=>{const t=(window.__toasts||[]).slice();window.__toasts=[];return t})()")


# A Tartarus night's result through core.js applyResult (the handoff's shape: FEMC-GAME-HANDOFF.md).
NIGHT = r"""((r)=>{const G=FemcGame,S=G.S;const h={id:'t'+Date.now()+Math.random(),kind:'tartarus',status:'done',request:{yen:S.yen,party:['solar'],maxFloor:254}};
  return G.applyResult(h,Object.assign({outcome:'win',exp:{},levels:{},yenDelta:0,items:{},fragments:[],bossesCleared:[],floorsReached:S.tartarus.maxFloor},r))})(%s)"""
def night(p, **r):
    return p.eval(NIGHT % json.dumps(r))


RQ = 'FemcRequests'
G = 'FemcGacha.gs()'

p = Page()
try:
    view(p, 1280, 850)
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})

    # ── The list itself ──
    if want('data'):
        setup(p)
        r = p.eval(r"""(()=>{const X=FemcRequests,D=FEMC_BATTLE_DATA,G=FemcGame,out={};
          out.n=X.REQUESTS.length; out.ids=new Set(X.REQUESTS.map(q=>q.id)).size; out.waves=X.WAVES.map((w,i)=>X.REQUESTS.filter(q=>q.wave===i).length);
          const kinds=['kills','weak','act','rides','fused','cards','rares','puzzles','floor','guardian','stat','links','maxLink','set4','echo','item','mat'];
          out.badKind=X.REQUESTS.filter(q=>!kinds.includes(q.kind)).map(q=>q.id);
          out.plumes=X.REQUESTS.map(q=>q.pay.plumes); out.total=out.plumes.reduce((a,b)=>a+b,0);
          const acts=G.activities().map(a=>a.id);
          out.bad=X.REQUESTS.filter(q=>(q.act&&!acts.includes(q.act))||(q.item&&!D.items[q.item])||(q.mat&&!D.materials[q.mat])||(q.el&&!D.elements[q.el])||(q.echo&&!FemcEchoes.byId(q.echo))
            ||(q.fid&&!D.floors.some(f=>f.id===q.fid&&f.guardian))||(q.stat&&!G.D.stats.stats[q.stat])||(q.pay.item&&!D.items[q.pay.item[0]])||(q.pay.mat&&!D.materials[q.pay.mat[0]])||!q.ask||!q.thanks||!q.title).map(q=>q.id);
          out.dates=X.WAVES.map(w=>G.dayOf(w)); return out})()""")
        ok(20 <= r['n'] <= 30 and r['ids'] == r['n'], ('20 to 30 requests, unique ids', r['n'], r['ids']))
        ok(all(2 <= n <= 4 for n in r['waves']) and len(r['waves']) == 8, ('a few a wave', r['waves']))
        ok(r['dates'] == sorted(r['dates']), ('waves in calendar order', r['dates']))
        ok(not r['badKind'] and not r['bad'], (r['badKind'], r['bad']))
        ok(all(2 <= n <= 6 for n in r['plumes']), ('2 to 6 plumes each', r['plumes']))
        clean(p, 'data')
        results['data'] = f"{r['n']} requests in waves {r['waves']}, {r['total']} plumes in all"
        print('data OK', results['data'], flush=True)

    # ── Requests: posting, taking, counting, handing in ──
    if want('requests'):
        setup(p, day='4/10')
        early = p.eval(f"{RQ}.openList().map(q=>q.wave)")
        ok(early and all(w == 0 for w in early), ('only the first wave is up in April', early))
        p.eval("FemcGame.S.day=FemcGame.dayOf('11/10')")
        ok(p.eval(f"{RQ}.openList().length") == p.eval(f"{RQ}.REQUESTS.length"), 'every wave is up by November')
        # A save with a big tally: a counted request starts from zero when it's taken.
        p.eval(f"{G}.tally.kills=500;{G}.tally.weak.fire=99")
        ok(p.eval(f"{RQ}.accept('dozen').ok") and p.eval(f"{RQ}.accept('fire').ok") and p.eval(f"{RQ}.accept('medicine').ok"), 'three taken')
        ok(not p.eval(f"{RQ}.accept('ice').ok"), 'a fourth is refused')
        pr = p.eval(f"[{RQ}.progress({RQ}.byId('dozen')),{RQ}.progress({RQ}.byId('fire'))]")
        ok(pr[0]['have'] == 0 and not pr[0]['ready'] and pr[1]['have'] == 0, ('counted from the moment it was taken', pr))
        toasts(p)
        # A Tartarus night: the battle's tally through applyResult.
        night(p, tally={'kills': 7, 'weak': {'fire': 5, 'ice': 2, 'bogus': 4}})
        pr = p.eval(f"[{RQ}.progress({RQ}.byId('dozen')),{RQ}.progress({RQ}.byId('fire'))]")
        ok(pr[0]['have'] == 7 and pr[1]['have'] == 5 and not pr[0]['ready'], pr)
        ok(p.eval(f"{G}.tally.kills") == 507 and p.eval(f"{G}.tally.weak.bogus") is None, 'tally kept, unknown elements dropped')
        night(p, tally={'kills': 6, 'weak': {'fire': 3}})
        ok(p.eval(f"{RQ}.progress({RQ}.byId('dozen')).ready") and p.eval(f"{RQ}.progress({RQ}.byId('fire')).ready"), 'both ready after the second night')
        t = toasts(p)
        ok(sum('request ready' in x for x in t) == 2, ('one ready toast each', t))
        night(p, tally={'kills': 1})
        ok(not any('request ready' in x for x in toasts(p)), 'the ready toast plays once')
        # Hand in: plumes paid, never twice; the board refills a slot.
        pl0 = p.eval(f"{G}.plumes")
        h = p.eval(f"{RQ}.handIn('dozen')")
        ok(h['ok'] and p.eval(f"{G}.plumes") == pl0 + 3, h)
        ok(not p.eval(f"{RQ}.handIn('dozen').ok") and not p.eval(f"{RQ}.accept('dozen').ok") and p.eval(f"{G}.plumes") == pl0 + 3, 'never twice')
        # An item request consumes what it asks for (a short bag first: not yet).
        p.eval("FemcGame.S.inventory.medicine=2")
        ok(not p.eval(f"{RQ}.progress({RQ}.byId('medicine')).ready"), 'two of three medicines: not yet')
        p.eval("FemcGame.S.inventory.medicine=5")
        h = p.eval(f"{RQ}.handIn('medicine')")
        ok(h['ok'] and p.eval("FemcGame.S.inventory.medicine") == 2, ('three medicines handed over', h))
        # A material request: consumed, and its ticket given.
        p.eval("FemcGame.S.battleSave.mats.shadow_ash=14;FemcGame.S.inventory.capsule_ticket=0")
        ok(p.eval(f"{RQ}.accept('ash').ok"), 'ash taken')
        h = p.eval(f"{RQ}.handIn('ash')")
        ok(h['ok'] and p.eval("FemcGame.S.battleSave.mats.shadow_ash") == 4 and p.eval("FemcGame.S.inventory.capsule_ticket") == 1, h)
        # A save already past it: a state request is ready the moment it's taken; its extra is given.
        p.eval("FemcGame.S.tartarus.maxFloor=40;FemcGame.S.inventory.snuff_soul=0")
        p.eval(f"{RQ}.handIn('fire')")
        ok(p.eval(f"{RQ}.accept('thirteen').ok") and p.eval(f"{RQ}.progress({RQ}.byId('thirteen')).ready"), 'past 13F already: ready at once')
        ok(p.eval(f"{RQ}.handIn('thirteen').ok") and p.eval("FemcGame.S.inventory.snuff_soul") == 1, 'Snuff Soul given')
        # Giving up: the count starts over when taken again.
        p.eval(f"{RQ}.accept('ice')")
        night(p, tally={'weak': {'ice': 4}})
        ok(p.eval(f"{RQ}.progress({RQ}.byId('ice')).have") == 4, 'ice 4')
        ok(p.eval(f"{RQ}.giveUp('ice')") and p.eval(f"{RQ}.accept('ice').ok") and p.eval(f"{RQ}.progress({RQ}.byId('ice')).have") == 0, 'given up, then taken again: from zero')
        p.eval(f"{RQ}.giveUp('ice')")
        # An activity, the monorail and an Echo.
        p.eval(f"{RQ}.accept('ramen');{RQ}.accept('monorail');{RQ}.accept('gumiho')")
        p.eval("FemcGame.doActivity(FemcGame.actById('hagakure'))")
        ok(p.eval(f"{RQ}.progress({RQ}.byId('ramen')).ready"), 'a bowl at Hagakure')
        d0 = p.eval("FemcGame.S.day")
        for i in range(5):
            p.eval(f"FemcGame.S.day={d0 + i};{RQ}.rode('rain');{RQ}.rode('rain')")  # twice a day still counts once
        ok(p.eval(f"{G}.rides.n") >= 5 and p.eval(f"{RQ}.progress({RQ}.byId('monorail')).have") == 5, 'five mornings, once a day')
        p.eval(f"FemcGame.S.day={d0}")
        ok(not p.eval(f"{RQ}.progress({RQ}.byId('gumiho')).ready"), 'no Gumiho yet')
        p.eval("FemcEchoes.add(FemcGame.S.battleSave,'gumiho',{via:'summon'})")
        ok(p.eval(f"{RQ}.progress({RQ}.byId('gumiho')).ready"), 'Gumiho in the stock')
        pl0 = p.eval(f"{G}.plumes")
        for q in ['ramen', 'monorail', 'gumiho']: ok(p.eval(f"{RQ}.handIn('{q}').ok"), q)
        ok(p.eval(f"{G}.plumes") == pl0 + 2 + 2 + 4, 'ramen 2, monorail 2, gumiho 4')
        ok(p.eval("FemcEchoes.owned(FemcGame.S.battleSave).some(i=>i.id==='gumiho')"), 'showing her an Echo never takes it')
        # It all survives a reload.
        p.eval("FemcGame.save()")
        done = p.eval(f"{G}.req.done.slice().sort()")
        p.goto(URL)
        ok(p.eval(f"FemcGacha.gs().req.done.slice().sort()") == done, ('kept in the save', done))
        clean(p, 'requests')
        results['requests'] = f"{len(done)} handed in: counted from taking, tally via applyResult, items and materials consumed, give-up resets, activity / monorail / Echo"
        print('requests OK', results['requests'], flush=True)

    # ── The board through the real UI ──
    if want('ui'):
        setup(p, day='7/20', maxFloor=30)
        open_velvet(p)
        ok(p.eval("!!document.querySelector('.g-vel-ov [data-rq-open]') && !!document.querySelector('.g-vel-ov [data-px-open]')"), 'the Velvet Room has both new buttons')
        ok('new' in p.eval("document.querySelector('[data-rq-open]').textContent"), 'the board says what is new')
        click(p, '.g-vel-ov [data-rq-open]')
        p.wait("!!document.querySelector('.g-rq-ov:not(.out) [data-rq-take]')")
        n_open = p.eval("document.querySelectorAll('.g-rq-ov [data-rq-take]').length")
        ok(n_open == p.eval(f"{RQ}.openList().length") and n_open >= 12, n_open)
        click(p, '.g-rq-ov [data-rq-take="thirteen"]')
        p.wait("!!document.querySelector('.g-rq-ov [data-rq-in=\"thirteen\"]:not([disabled])')")
        pl0 = p.eval(f"{G}.plumes")
        click(p, '.g-rq-ov [data-rq-in="thirteen"]')
        p.wait("!document.querySelector('.g-rq-ov [data-rq-in=\"thirteen\"]')")
        ok(p.eval(f"{G}.plumes") == pl0 + 2 and 'climb down' in p.eval("document.querySelector('.g-rq-say').textContent"), 'handed in through the board; her thanks')
        ok('Answered (1)' in p.eval("document.querySelector('.g-rq-ov').textContent"), 'listed as answered')
        for q in ['dozen', 'fire', 'ramen']: click(p, f'.g-rq-ov [data-rq-take="{q}"]')
        ok(p.eval("[...document.querySelectorAll('.g-rq-ov [data-rq-take]')].every(b=>b.disabled)"), 'three taken: the board waits')
        click(p, '.g-rq-ov [data-rq-drop="ramen"]')
        p.wait("!document.querySelector('.g-rq-ov [data-rq-drop=\"ramen\"]')")
        ok(p.eval(f"Object.keys({G}.req.taken).sort()") == ['dozen', 'fire'], 'set down')
        p.eval("document.querySelector('.g-rq-ov [data-close]').click()")
        p.wait("!!document.querySelector('.g-vel-ov:not(.out) [data-rq-open]')")
        ok('new' not in p.eval("document.querySelector('[data-rq-open]').textContent"), 'seen once the board was opened')
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
        clean(p, 'ui')
        results['ui'] = f'board from the Velvet Room: {n_open} posted, take / hand in / set down, thanks line, answered list'
        print('ui OK', results['ui'], flush=True)

    # ── Milestones: first reach, the summit, a guardian, never twice ──
    if want('milestones'):
        setup(p, day='5/12', miles=True)
        r = p.eval(f"(()=>{{const m={RQ}.milestones();return {{n:m.length,total:m.reduce((a,x)=>a+x.plumes,0),guards:m.filter(x=>x.kind==='guardian').length,ids:new Set(m.map(x=>x.id)).size}}}})()")
        ok(r['n'] == 27 and r['ids'] == 27 and r['guards'] == 9, r)
        ok(r['total'] == 106, ('106 plumes in all', r))
        ok(p.eval(f"{G}.plumes") == 0 and p.eval(f"{G}.miles.length") == 0, 'nothing for a new climber')
        toasts(p)
        pl = lambda: p.eval(f"{G}.plumes")
        night(p, floorsReached=6)
        ok(pl() == 1 + 2, ('a Tartarus night (+1) and Thebel reached (+2)', pl()))
        ok(any('Thebel reached' in x for x in toasts(p)), 'a toast names it')
        night(p, floorsReached=16)
        ok(pl() == 3 + 1 + 3, ('Thebel’s summit +3', pl()))
        p.eval("FemcGame.S.battleSave.tt.guardians.push('f11')")
        night(p, floorsReached=16)
        ok(pl() == 7 + 1 + 3, ('Thebel’s guardian +3', pl()))
        ok(any('guardian' in x for x in toasts(p)), 'guardian toast')
        night(p, floorsReached=16)
        ok(pl() == 11 + 1, 'never twice (only the night’s plume)')
        night(p, floorsReached=20)
        ok(pl() == 12 + 1 + 2 and 'in-arqa' in p.eval(f"{G}.miles"), 'Arqa reached +2')
        # The title screen and the epilogue never pay.
        p.eval("FemcGame.S.tartarus.maxFloor=36;FemcGame.S.phase='title';FemcGame.save()")
        p.eval("new Promise(r=>setTimeout(r,600))")
        ok(pl() == 15, 'nothing paid on the title screen')
        p.eval("FemcGame.S.phase='play';FemcGame.save()")
        p.eval("new Promise(r=>setTimeout(r,600))")
        ok(pl() == 15 + 3 and 'top-arqa' in p.eval(f"{G}.miles"), 'paid once back in play (Arqa’s summit +3)')
        clean(p, 'milestones')
        results['milestones'] = f"{r['n']} milestones ({r['guards']} guardians), {r['total']} plumes in all; block, summit, guardian, once each"
        print('milestones OK', results['milestones'], flush=True)

    # ── Retroactive: a save already high in the tower ──
    if want('retro'):
        # Through Tziah's summit (92F) with its four guardians: 2+2+2+3 + 3+3+4+4 + 3+3+4+4 = 37.
        p.goto(URL)
        p.eval(SETUP % {'cfg': json.dumps({'day': '7/30', 'maxFloor': 92, 'guardians': ['f11', 'f29', 'f52', 'f80'], 'miles': True})})
        p.eval("new Promise(r=>setTimeout(r,700))")
        ok(p.eval(f"{G}.plumes") == 37, ('37 plumes for a mid-game save', p.eval(f"{G}.plumes")))
        t = toasts(p)
        ok(sum('already climbed' in x for x in t) == 1, ('one toast for the lot', t))
        p.eval("FemcGame.save()"); p.eval("new Promise(r=>setTimeout(r,600))")
        ok(p.eval(f"{G}.plumes") == 37, 'not again on the next save')
        p.goto(URL)
        p.eval("FemcGame.S.phase='play';FemcGame.save()"); p.eval("new Promise(r=>setTimeout(r,600))")
        ok(p.eval(f"{G}.plumes") == 37 and p.eval(f"{G}.miles.length") == 12, 'not again after a reload')
        # A save at the very top (Monad's end, every guardian): everything, once.
        p.eval(SETUP % {'cfg': json.dumps({'day': '1/20', 'maxFloor': 254, 'guardians': ['f11', 'f29', 'f52', 'f80', 'f109', 'f135', 'f160', 'f204', 'f246'], 'miles': True})})
        p.eval("new Promise(r=>setTimeout(r,700))")
        ok(p.eval(f"{G}.plumes") == 106, ('everything at the top', p.eval(f"{G}.plumes")))
        clean(p, 'retro')
        results['retro'] = 'mid-game save (92F, four guardians) gets 37 once, a finished tower 106; never again after saves or a reload'
        print('retro OK', results['retro'], flush=True)

    # ── The Plume Exchange ──
    if want('exchange'):
        setup(p, day='9/14', mats={'shadow_ash': 300, 'tarot_dust': 160, 'velvet_thread': 12, 'mirror_shard': 10})
        # Cards: bell crown ★3 ×3 (one stays), bell sun ★4 ×2 (one worn), kite crown ★5 alone (the last copy), kite sun ★5 ×2
        # (one locked), lantern crown ★3 ×2 (one levelled), prism crown ★4 ×2 (one refined).
        made = p.eval(r"""(()=>{const B=FemcBuild,b=FemcGame.S.battleSave,S=B.SLOTS.map(s=>s.id),mk=(set,slot,r,o={})=>{const c=B.rollCard(Math.random,{set,slot:S[slot],r,minR:r});Object.assign(c,o);B.addCard(b,c);return c.u};
          const ids={};
          ids.bell3=[mk('bell',0,3),mk('bell',0,3),mk('bell',0,3)];
          ids.bell4=[mk('bell',1,4),mk('bell',1,4)]; B.equipCard(b,'solar',ids.bell4[0]);
          ids.kite5solo=[mk('kite',0,5)];
          ids.kite5=[mk('kite',1,5,{lock:true}),mk('kite',1,5)];
          ids.lantern3=[mk('lantern',0,3,{lvl:2}),mk('lantern',0,3)];
          ids.prism4=[mk('prism',0,4,{ref:1}),mk('prism',0,4)];
          FemcGame.save(); return ids})()""")
        spare = set(p.eval(f"{RQ}.spareCards().map(c=>c.u)"))
        ok(made['bell4'][0] not in spare and made['kite5'][0] not in spare and made['kite5solo'][0] not in spare and made['lantern3'][0] not in spare and made['prism4'][0] not in spare,
           ('never an equipped, locked, levelled or refined card, nor the last copy', spare))
        ok(len([u for u in made['bell3'] if u in spare]) == 2, ('two of three bell crowns spare (one stays)', spare))
        ok(made['bell4'][1] in spare and made['kite5'][1] in spare and made['lantern3'][1] in spare and made['prism4'][1] in spare, spare)
        ok(len(spare) == 6, ('six spares', spare))
        # Rates: ★3 three for a plume, ★4 one each, ★5 three.
        q = p.eval(f"{RQ}.quote({{cards:{{3:1,4:2,5:1}}}})")
        ok(q['ok'] and q['plumes'] == 1 + 2 + 3 and len(q['cards']) == 3 + 2 + 1, q)
        ok(not p.eval(f"{RQ}.quote({{cards:{{3:2}}}}).ok"), 'not six ★3s when there are three')
        # Reserves and taken requests: tarot dust keeps 150, thread keeps 8, mirror shards a taken request needs stay.
        p.eval(f"{RQ}.accept('mirror')")
        m = {x['id']: x for x in p.eval(f"{RQ}.spareMats()")}
        ok(m['tarot_dust']['lots'] == 0 and m['velvet_thread']['lots'] == 1 and m['mirror_shard']['spare'] == 4 and m['mirror_shard']['lots'] == 0 and m['shadow_ash']['lots'] == 10, m)
        # The trade itself: exact payout; the worn, locked and last cards are untouched.
        pl0 = p.eval(f"{G}.plumes")
        r = p.eval(f"{RQ}.trade({{cards:{{4:2,5:1}},mats:{{velvet_thread:1}}}})")
        ok(r['ok'] and r['plumes'] == 2 + 3 + 1 and p.eval(f"{G}.plumes") == pl0 + 6, r)
        left = set(p.eval("FemcGame.S.battleSave.cards.list.map(c=>c.u)"))
        ok(made['bell4'][0] in left and made['kite5'][0] in left and made['kite5solo'][0] in left and made['bell4'][1] not in left and made['kite5'][1] not in left, 'only spares went')
        ok(p.eval("FemcBuild.wearerOf(FemcGame.S.battleSave,%d)" % made['bell4'][0]) == 'solar', 'the worn card is still worn')
        ok(p.eval("FemcGame.S.battleSave.mats.velvet_thread") == 8, 'four thread went')
        # The weekly cap: 8 a week, then nothing until Sunday.
        ok(p.eval(f"{RQ}.weekLeft()") == 2, p.eval(f"{RQ}.weekLeft()"))
        ok(not p.eval(f"{RQ}.trade({{mats:{{shadow_ash:3}}}}).ok"), 'over the cap: refused')
        ok(p.eval(f"{RQ}.trade({{mats:{{shadow_ash:2}}}}).ok") and p.eval(f"{RQ}.weekLeft()") == 0, 'up to the cap')
        ok(not p.eval(f"{RQ}.quote({{mats:{{shadow_ash:1}}}}).ok"), 'done for the week')
        p.eval("FemcGame.S.day+=7")
        ok(p.eval(f"{RQ}.weekLeft()") == 8 and p.eval(f"{RQ}.trade({{mats:{{shadow_ash:1}}}}).ok"), 'a new week')
        ok(p.eval("FemcGame.S.battleSave.mats.shadow_ash") == 300 - 90, 'three lots of ash in all')
        # Through the UI: steppers, the confirm screen listing every card, then the trade.
        open_velvet(p)
        click(p, '.g-vel-ov [data-px-open]')
        p.wait("!!document.querySelector('.g-px-ov:not(.out) .g-px-body')")
        click(p, '.g-px-ov [data-px-step="c:3:1"]')
        p.wait("!!document.querySelector('.g-px-ov [data-px-ask]:not([disabled])')")
        click(p, '.g-px-ov [data-px-ask]')
        p.wait("!!document.querySelector('.g-px-ov .g-px-confirm')")
        lines = p.eval("[...document.querySelectorAll('.g-px-ov .g-px-list li')].map(x=>x.textContent)")
        ok(len(lines) == 3 and all('★3' in x for x in lines) and '+1 Velvet Plume' in p.eval("document.querySelector('.g-px-get').textContent"), lines)
        pl0 = p.eval(f"{G}.plumes")
        click(p, '.g-px-ov [data-px-go]')
        p.wait("!document.querySelector('.g-px-ov .g-px-confirm')")
        ok(p.eval(f"{G}.plumes") == pl0 + 1 and not p.eval(f"{RQ}.spareCards().some(c=>c.r===3)"), 'traded through the confirm')
        ok(p.eval("FemcGame.S.battleSave.cards.list.filter(c=>c.set==='bell'&&c.r===3).length") == 1, 'one bell crown stays')
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
        clean(p, 'exchange')
        results['exchange'] = '★3 3:1, ★4 1:1, ★5 1:3, materials by lot; worn / locked / levelled / refined / last copies kept; reserves; 8 a week; confirm UI'
        print('exchange OK', results['exchange'], flush=True)

    # ── Older and malformed saves ──
    if want('saves'):
        setup(p)
        r = p.eval(r"""(()=>{const S=FemcGame.S,out={};
          ['req','miles','tally','ex','rides'].forEach(k=>delete S.gacha[k]); const g=FemcGacha.gs();
          out.old=[typeof g.req.taken,Array.isArray(g.req.done),Array.isArray(g.miles),g.tally.kills,g.ex.n,g.rides.n];
          S.gacha.req='x'; S.gacha.miles={a:1}; S.gacha.tally={kills:-5,weak:[]}; S.gacha.ex={week:'x',n:-1}; S.gacha.rides=null;
          const h=FemcGacha.gs(); out.bad=[typeof h.req.taken,Array.isArray(h.miles),h.tally.kills,Array.isArray(h.tally.weak),h.ex.week,h.ex.n,h.rides.last];
          S.gacha.req.taken={nope:{at:1},dozen:{at:3,base:2}}; out.taken=FemcRequests.takenList().map(q=>q.id);
          return out})()""")
        ok(r['old'] == ['object', True, True, 0, 0, 0], r)
        ok(r['bad'] == ['object', True, 0, False, -1, 0, -1], r)
        ok(r['taken'] == ['dozen'], ('unknown request ids dropped', r['taken']))
        # A save from before this batch, through the backup-code path.
        code = p.eval("(()=>{const s=JSON.parse(JSON.stringify(FemcGame.S));['req','miles','tally','ex','rides'].forEach(k=>delete s.gacha[k]);return btoa(unescape(encodeURIComponent(JSON.stringify({game:FemcGame.KEY,v:s.v,mv:s.mv,at:Date.now(),state:s}))))})()")
        ok(p.eval("FemcGame.importCode(%s)" % json.dumps(code)), 'an older code loads')
        ok(p.eval(f"{RQ}.openList().length") > 0 and p.eval(f"Array.isArray({G}.miles)"), 'and plays')
        clean(p, 'saves')
        results['saves'] = 'missing and malformed parts rebuilt by gs(); unknown request ids dropped; an older backup code loads'
        print('saves OK', results['saves'], flush=True)

    # ── Screenshots ──
    if want('shots'):
        for tag, w, h in [('desktop', 1280, 850), ('phone', 375, 812)]:
            view(p, w, h)
            setup(p, day='9/14', maxFloor=60, mats={'shadow_ash': 90, 'mask_shard': 30}, echoes=[['gumiho', 12]])
            p.eval(r"""(()=>{const B=FemcBuild,b=FemcGame.S.battleSave;for(let i=0;i<5;i++){const c=B.rollCard(Math.random,{set:'bell',slot:'crown',r:3+i%3});B.addCard(b,c);}FemcGame.save()})()""")
            p.eval(f"{RQ}.accept('dozen');{RQ}.accept('gumiho')")
            open_velvet(p)
            click(p, '.g-vel-ov [data-rq-open]')
            p.wait("!!document.querySelector('.g-rq-ov:not(.out) .g-rq-card')")
            shot(p, f'requests-{tag}')
            no_scroll(p, f'requests {tag}')
            p.eval("document.querySelector('.g-rq-ov [data-close]').click()")
            click(p, '.g-vel-ov [data-px-open]')
            p.wait("!!document.querySelector('.g-px-ov:not(.out) .g-px-body')")
            click(p, '.g-px-ov [data-px-step="m:shadow_ash:1"]')
            shot(p, f'exchange-{tag}')
            no_scroll(p, f'exchange {tag}')
            click(p, '.g-px-ov [data-px-ask]')
            p.wait("!!document.querySelector('.g-px-ov .g-px-confirm')")
            shot(p, f'exchange-confirm-{tag}')
            p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
        view(p, 1280, 850)
        clean(p, 'shots')
        results['shots'] = str(SHOTS)
        print('shots OK', SHOTS, flush=True)

    print(json.dumps(results, indent=1, ensure_ascii=False))
    print('ALL OK')
finally:
    p.close()
