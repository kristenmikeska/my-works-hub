"""Tartarus, the New Game+ climb (2026-10-31, finish roadmap section 5): Raqia 255-300F, Zebul 301-350F, Araboth 351-399F and the
Zenith on 400F (data.js blocks with `ngp`, climb.js). Isolated Chrome profile, a local server on a random port; never the
player's saves.

  python3 tests/femc_ngclimb.py [--only gen,open,caps,stairs,scenes,events,sim,boss,rewards,saves,shots] [--screenshots DIR]

gen      the four blocks' floors, landings, gates, guardians, the superboss on 400F, backdrops on disk, every pool Shadow known
         and fixed by floor (an @level on each, never the party's), 12 maps of every floor (stairs reachable, the guardian the only
         way to the stairs, the superboss's door on 400F only).
open     only in New Game+: a first playthrough's request (even with a maxFloor past 254) never opens a floor above Monad, a New
         Game+ request opens up to its maxFloor; practice once this browser has a finished game (or the save's own ngp); Monad
         must still be open; the teleport list (gates stood on) and the stairs at each block's top.
caps     the life sim: floorCap by date in a first playthrough (254 at most) and New Game+ (1/9 300, 1/31 350, 2/14 400), the
         handoff request's ngp and maxFloor, New Game+ itself counting up.
stairs   through the UI in practice: Monad's last door shut (no clear yet), then open: up into 255F, Raqia's arrival scene once
         (not on the next visit), the summit scene at 300F, the stairs on into Zebul, the Zenith's stairs that go nowhere.
scenes   all eight scenes play page by page (forced) with three different parties (each speaker present, the fallbacks), Fuuka's
         lines, no empty pages, once per playthrough.
events   each of the climb's events in its block through the UI (forced event rooms), first choice, back to the map; `who`
         events only with that member.
sim      the balance sim (tests/femc_ngclimb_sim.js): a strong level-99 party beats each block's strong Shadows and its guardian;
         the Zenith's superboss is winnable but not easily (some losses, long fights), reaches its last phase (three actions, all
         three hills); harder by floor.
boss     the Zenith's superboss through the UI: the door, the fight (its phases called the hills: the big word), the first-fall
         loot, the closing scene once.
rewards  loot (guardians 3 plumes and a ★5 card up here, the superboss 10, an Echo; practice none); the life sim's milestones
         for the climb (a New Game+ save at the top gets 71 more, the Zenith title once; a first playthrough's save never does).
saves    old battle saves load (tt.climb defaults, junk cleaned), New Game+ resets the climb's scenes, gates and supers.
shots    Raqia's map and its arrival scene, the Zenith's superboss door, at 1280x800 and 375x812."""
import argparse, base64, json, pathlib, tempfile, time
from femc_browser import Page, REPO

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='')
args = ap.parse_args()
ONLY = [x for x in args.only.split(',') if x]
OUT = pathlib.Path(args.screenshots) if args.screenshots else pathlib.Path(tempfile.mkdtemp(prefix='femc-ngclimb-'))
OUT.mkdir(parents=True, exist_ok=True)
want = lambda n: not ONLY or n in ONLY
p = Page()
results = {}
SIM = pathlib.Path(REPO, 'tests/femc_ngclimb_sim.js').read_text()

DRIVE = r"""(()=>{const F=FemcBattle,c=F.ctl,d=document,sc=F.screen();
  if(window.__hoResult)return 'done';
  const tip=d.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return 'tip'}
  if(sc==='shuffle'){if(c&&c.kind==='shuffle'){c.pick();return 'sh-pick'}const ok=d.querySelector('[data-sh-ok]');if(ok){ok.click();return 'sh-ok'}return 'shuffle'}
  if(c?.kind==='allout'){c.pickValue('1');return 'allout'}
  if(c?.kind==='cinematic'){d.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));d.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));return 'skip'}
  if(c?.kind==='menu'){const v=c.items.filter(i=>!i.off).map(i=>i.v);const w=window.__cmd||'attack';if(v.includes(w)){c.pickValue(w);return w}c.pickValue(v[0]);return 'pick'}
  if(sc==='map'||sc==='room'||sc==='hub')return 'idle:'+sc;
  if(c?.kind==='buttons'){const b=d.querySelector('.bt-btn.pink:not(:disabled)')||d.querySelector('.bt-btn:not(:disabled)');if(b){b.click();return 'btn:'+sc}}
  return 'wait:'+sc})()"""


def settle(until, limit=60):
    t0 = time.time()
    while time.time() - t0 < limit:
        if p.eval(until): return True
        p.eval(DRIVE); time.sleep(0.04)
    raise AssertionError(('settle timed out', until, p.eval("JSON.stringify({s:FemcBattle.screen(),k:FemcBattle.ctl&&FemcBattle.ctl.kind,m:Object.keys(FemcBattle.marks).slice(-40)})")))


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


def shot(name):
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))')
    d = p.ws.call('Page.captureScreenshot', {'format': 'png'})
    (OUT / (name + '.png')).write_bytes(base64.b64decode(d['data']))


def view(w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def practice(open_=True, strong=True, party=('akihiko', 'mitsuru', 'aigis')):
    """The practice page with Monad found and (by default) the climb open and a strong level-99 party."""
    p.ctx = None
    # Every section starts from a fresh practice save (a strong one from an earlier section would open on its level-up screens).
    try: p.eval("location.protocol==='http:' && localStorage.removeItem('kg-femc-battle-proto')")
    except Exception: pass
    p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=10&seed=4'})
    p.wait("document.readyState==='complete' && !!window.FemcBattle && FemcBattle.screen()==='hub'")
    p.eval(SIM)
    p.eval("""(()=>{const s=FemcBattle.save;%s
      s.items={medicine:3};s.yen=200000;s.reached=null;s.cycle=0;s.settings.tips=false;s.ops.cleared=['fortune'];
      s.tt={guardians:[],monad:true,secrets:[],puzzles:0,rares:0,gates:[],supers:[],climb:[]};window.__climbOpen=%s;})()"""
           % (("Object.assign(s,NGSIM.strong(%s,99));" % json.dumps(list(party))) if strong else '', 'true' if open_ else 'false'))


def climb(fid, force=None, extra=''):
    p.eval("window.__ttForce=%s;window.__ttCrack=null;window.__ttReveal=false;window.__ttEvent=null;window.__ttPuzzle=null;window.__ttArrive=false;%s" % (json.dumps(force), extra))
    p.eval("(FemcBattle.climb(%s), 0)" % json.dumps(fid))
    settle("FemcBattle.screen()==='map' && FemcBattle.ctl?.kind==='map'", 30)
    p.eval("window.__ttForce=null")


def snap():
    p.eval("window.__rc=Object.assign({},FemcBattle.marks)")


def room_open(name, limit=20):
    settle("FemcBattle.screen()==='room' && !!document.querySelector('.bt-room [data-v]') && (FemcBattle.marks['room-%s']||0)>((window.__rc||{})['room-%s']||0)" % (name, name), limit)


def click(v):
    snap()
    p.eval("document.querySelector('.bt-room [data-v=%s]').click()" % v)


def walk_to(kind):
    """Stand next to the first room of a type (stairs, super, event…) and step into it."""
    snap()
    p.eval("""(()=>{const m=FemcBattle.run.map,M=FemcTartarusMap,d=%s==='stairs'?M.get(m,m.stairs):m.nodes.find(n=>n.type===%s);
      m.pos=d.links.find(id=>id!==d.id);M.visit(m,m.pos);FemcBattle.ctl.go(d.id)})()""" % (json.dumps(kind), json.dumps(kind)))


def pages(n):
    """Click through a scene's n pages."""
    for i in range(n):
        room_open('climb-scene', 20)
        ok(p.eval("document.querySelector('.bt-room h1').textContent.length>0"), 'scene title')
        click('ok')


try:
    view(1280, 800)
    # ── Floors, maps ───────────────────────────────────────────────────────────────────────────────────────────────
    if want('gen'):
        practice(strong=False)
        r = p.eval(r"""(()=>{const D=FEMC_BATTLE_DATA,M=FemcTartarusMap,T=FemcTartarus,E=FemcBattleEngine,bad=[];
          const B=D.blocks.filter(b=>b.ngp),F=D.floors.filter(f=>f.ngp),per={};F.forEach(f=>{per[f.blockId]=(per[f.blockId]||0)+1});
          F.forEach((f,i)=>{if(!f.secret)bad.push('not secret '+f.id);if(i&&f.gameFloor-F[i-1].gameFloor>4)bad.push('gap '+f.id);
            f.pool.concat(f.strong).flat().forEach(k=>{const [id,l]=k.split('@');if(!D.enemies[id])bad.push('unknown '+k);if(!l)bad.push('no level '+k)});
            for(let i=0;i<12;i++){const R=E.rng(i*97+f.gameFloor),c=FemcBattle.tt(f);c.rand=R;const m=M.generate(f,{rand:R,plan:T.plan(f,c)});T.dress(m,f,c);
              const {dist}=M.bfs(m,m.start);if(dist[m.stairs]==null)bad.push('stairs '+f.id);
              if(f.guardian){const st=M.get(m,m.stairs);if(st.links.length!==1||M.get(m,st.links[0]).type!=='guardian')bad.push('guard '+f.id)}
              const s=m.nodes.filter(n=>n.type==='super');if(s.length!==(f.superboss?1:0))bad.push('door '+f.id);
              m.nodes.forEach(n=>(n.group||[]).forEach(k=>{if(!D.enemies[String(k).split('@')[0]])bad.push('group '+k)}))}});
          const lv=f=>Math.max(...f.pool.flat().map(k=>+k.split('@')[1]));
          return {blocks:B.map(b=>[b.id,b.floors[0],b.floors[b.floors.length-1],b.bg.split('/').pop()]),per,n:F.length,bad:bad.slice(0,10),
            guards:F.filter(f=>f.guardian).map(f=>[f.id,f.guardian,D.enemies[f.guardian].name,D.enemies[f.guardian].lvl]),sup:F.filter(f=>f.superboss).map(f=>[f.id,f.superboss,D.enemies[f.superboss].lvl]),
            gates:F.filter(f=>f.gate).map(f=>f.id),first:F[0].id,afterMonad:D.floors[D.floors.findIndex(f=>f.id==='f254')+1].id,
            levels:B.map(b=>{const fl=F.filter(f=>f.blockId===b.id);return [lv(fl[0]),lv(fl[fl.length-1])]}),bgs:B.map(b=>b.bg)}})()""")
        ok(r['blocks'] == [['raqia', 255, 300, 'tartarus-raqia.webp'], ['zebul', 301, 350, 'tartarus-zebul.webp'], ['araboth', 351, 399, 'tartarus-araboth.webp'], ['zenith', 400, 400, 'tartarus-zenith.webp']], r['blocks'])
        ok(r['per'] == {'raqia': 14, 'zebul': 15, 'araboth': 15, 'zenith': 1} and r['n'] == 45 and r['afterMonad'] == 'f255', r)
        ok(not r['bad'], r['bad'])
        ok([g[0] for g in r['guards']] == ['f290', 'f343', 'f393'] and len({g[2] for g in r['guards']}) == 3, r['guards'])
        ok(r['sup'] == [['f400', 'super_tiger', 104]], r['sup'])
        ok(r['gates'] == ['f255', 'f276', 'f301', 'f322', 'f351', 'f372', 'f400'], r['gates'])
        lv = sum(r['levels'], [])
        ok(lv == sorted(lv) and lv[0] >= 60 and lv[-1] >= 97, ('levels climb with the floors', r['levels']))
        for bg in r['bgs']: ok(pathlib.Path(REPO, bg).exists(), bg)
        results['gen'] = {'per block': r['per'], 'guardians': r['guards'], 'superboss': r['sup'], 'pool levels': r['levels']}
        print('gen', json.dumps(results['gen']), flush=True)

    # ── Open only in New Game+ ─────────────────────────────────────────────────────────────────────────────────────
    if want('open'):
        practice(strong=False)
        o = p.eval(r"""(()=>{const D=FEMC_BATTLE_DATA,T=FemcTartarus,F=id=>D.floors.find(f=>f.id===id);
          const ctx=(HO,save)=>{const c=FemcBattle.tt(F('f2'));c.HO=HO;Object.defineProperty(c,'save',{value:Object.assign({},FemcBattle.save,save)});return c};
          const req=(ngp,max)=>({request:{ngp,maxFloor:max}}),base={ops:{cleared:['fortune']},tt:{guardians:[],monad:true,gates:[],supers:[]},ngp:0};
          const op=(c,ids)=>ids.map(id=>T.floorOpen(c,F(id)));
          const out={};
          out.first=op(ctx(req(0,254),base),['f254','f255','f300']);
          out.firstForced=op(ctx(req(0,400),base),['f255','f400']);              // a first playthrough never, whatever the cap says
          out.ngp300=op(ctx(req(1,300),base),['f254','f255','f300','f301']);
          out.ngp400=op(ctx(req(2,400),base),['f351','f399','f400']);
          out.saveNgp=op(ctx(req(0,300),Object.assign({},base,{ngp:1})),['f255']); // an older core.js without request.ngp: the battle save's own count
          out.noFortune=op(ctx(req(1,400),Object.assign({},base,{ops:{cleared:[]}})),['f255']);
          window.__climbOpen=undefined;localStorage.removeItem('kg-femc-revamp-clears');
          out.pracNone=op(ctx(null,base),['f255']);
          localStorage.setItem('kg-femc-revamp-clears',JSON.stringify([{run:'x',ending:'here',at:1,ngp:0}]));
          out.pracClear=op(ctx(null,base),['f255','f400']);
          localStorage.removeItem('kg-femc-revamp-clears');
          out.pracNgp=op(ctx(null,Object.assign({},base,{ngp:1})),['f255']);
          // Teleport: a New Game+ gate only once stood on (or a floor above it in its block mapped), and only while open.
          const g=(HO,save)=>T.gates(ctx(HO,save),Infinity).filter(f=>f.ngp).map(f=>f.id);
          out.gatesNone=g(req(1,400),base);
          out.gatesStood=g(req(1,400),Object.assign({},base,{tt:{guardians:[],monad:true,gates:['f255','f301'],supers:[]}}));
          out.gatesMapped=g(req(1,400),Object.assign({},base,{floorsMapped:['f283'],tt:{guardians:[],monad:true,gates:[],supers:[]}}));
          out.gatesFirst=g(req(0,254),Object.assign({},base,{tt:{guardians:[],monad:true,gates:['f255'],supers:[]}}));
          out.gatesCap=g(req(1,300),Object.assign({},base,{tt:{guardians:[],monad:true,gates:['f255','f301'],supers:[]}}));
          return out})()""")
        ok(o['first'] == [True, False, False] and o['firstForced'] == [False, False], o)
        ok(o['ngp300'] == [True, True, True, False] and o['ngp400'] == [True, True, True] and o['saveNgp'] == [True] and o['noFortune'] == [False], o)
        ok(o['pracNone'] == [False] and o['pracClear'] == [True, True] and o['pracNgp'] == [True], o)
        ok(o['gatesNone'] == [] and o['gatesStood'] == ['f255', 'f301'] and o['gatesMapped'] == ['f255', 'f276'] and o['gatesFirst'] == [] and o['gatesCap'] == ['f255'], o)
        results['open'] = o
        print('open OK', flush=True)

    # ── The life sim: caps by date, the request ────────────────────────────────────────────────────────────────────
    if want('caps'):
        p.goto('femc-game.html?speed=10&seed=7')
        c = p.eval(r"""(()=>{const G=FemcGame;G.newGame();const S=G.S;S.started=true;S.phase='play';S.unlocked.tartarus=true;
          const at=(md,ngp)=>{S.ngp=ngp;S.day=G.dayOf(md);return G.floorCap()};
          const out={first:['1/1','1/9','1/31','2/14','3/4'].map(d=>at(d,0)),ngp:['12/31','1/1','1/8','1/9','1/30','1/31','2/13','2/14','3/4'].map(d=>at(d,1))};
          S.ngp=1;S.day=G.dayOf('2/20');const h=G.makeHandoff('tartarus',{});out.req=[h.request.ngp,h.request.maxFloor];G.clearHandoff();
          S.ngp=0;const h2=G.makeHandoff('tartarus',{});out.req0=[h2.request.ngp,h2.request.maxFloor];G.clearHandoff();
          return out})()""")
        ok(c['first'] == [254, 254, 254, 254, 254], c)
        ok(c['ngp'] == [230, 254, 254, 300, 300, 350, 350, 400, 400], c)
        ok(c['req'] == [1, 400] and c['req0'] == [0, 254], c)
        n = p.eval("(()=>{const G=FemcGame;G.S.ngp=1;G.S.battleSave=null;G.newGamePlus();return [G.S.ngp,G.S.flags.ngplus]})()")
        ok(n == [2, True], n)
        results['caps'] = c
        print('caps OK', json.dumps(c), flush=True)

    # ── Stairs and scenes through the UI ───────────────────────────────────────────────────────────────────────────
    if want('stairs'):
        practice(open_=False)
        climb('f254')
        walk_to('stairs'); room_open('monad-sealed')
        ok(p.eval("document.querySelector('.bt-room h1').textContent") == 'THE LAST DOOR', 'shut without a finished game')
        click('no'); settle("FemcBattle.ctl?.kind==='map'")
        p.eval("window.__climbOpen=true")
        climb('f254')
        walk_to('stairs'); room_open('climb-door'); click('up')
        pages(3)
        settle("FemcBattle.ctl?.kind==='map' && FemcBattle.run.map && FEMC_BATTLE_DATA.floors[FemcBattle.run.fi].id==='f255'", 30)
        ok(p.eval("FemcBattle.marks['climb-raqia-arrive']") == 1 and p.eval("FemcBattle.save.tt.climb") == ['raqia-arrive'], 'Raqia arrival scene once')
        ok('f255' in p.eval("FemcBattle.save.tt.gates"), 'gate stood on')
        climb('f255')
        ok(p.eval("FemcBattle.marks['climb-raqia-arrive']") == 1, 'not again')
        # The summit floor plays its scene on arrival; its stairs go on into Zebul.
        p.eval("(FemcBattle.climb('f300'), 0)")
        pages(3)
        settle("FemcBattle.ctl?.kind==='map'", 30)
        ok(p.eval("FemcBattle.marks['climb-raqia-summit']") == 1, 'summit scene')
        walk_to('stairs'); room_open('climb-door'); click('up')
        pages(3)
        settle("FemcBattle.ctl?.kind==='map' && FEMC_BATTLE_DATA.floors[FemcBattle.run.fi].id==='f301'", 30)
        ok(p.eval("FemcBattle.marks['climb-zebul-arrive']") == 1, 'Zebul arrival')
        # The Zenith: its arrival scene, then stairs that go nowhere.
        p.eval("(FemcBattle.climb('f400'), 0)")
        pages(3)
        settle("FemcBattle.ctl?.kind==='map'", 30)
        walk_to('stairs'); room_open('zenith-top')
        ok(p.eval("document.querySelector('.bt-room h1').textContent") == 'THE ZENITH', 'no stairs past the top')
        click('no'); settle("FemcBattle.ctl?.kind==='map'")
        # Practice with no finished game: the climb's own floors can't be teleported to, and a sealed Monad top stays sealed.
        ok(p.eval("FemcBattle.save.tt.climb") == ['raqia-arrive', 'raqia-summit', 'zebul-arrive', 'zenith-arrive'], p.eval("FemcBattle.save.tt.climb"))
        results['stairs'] = 'Monad’s door shut, then open into 255F; arrival / summit scenes once; on into Zebul; the Zenith’s stairs end'
        print('stairs OK', flush=True)

    # ── Every scene with three parties ─────────────────────────────────────────────────────────────────────────────
    if want('scenes'):
        practice()
        sc = p.eval("Object.entries(FemcClimb.SCENES).map(([k,v])=>[k,v.block,v.pages.length])")
        ok(len(sc) == 8 and all(n == 3 for _, _, n in sc), sc)
        seen = {}
        for party in (['haechan', 'minji', 'jungwon'], ['akihiko', 'mitsuru', 'aigis'], ['koromaru', 'jihoon', 'ken']):
            p.eval("FemcBattle.save.party=%s" % json.dumps(party))
            climb('f2')
            for sid, block, n in sc:
                fid = {'raqia': 'f255', 'zebul': 'f301', 'araboth': 'f351', 'zenith': 'f400'}[block]
                snap()
                p.eval("(FemcClimb.play(FemcBattle.tt(FEMC_BATTLE_DATA.floors.find(f=>f.id===%s)),FEMC_BATTLE_DATA.floors.find(f=>f.id===%s),%s,{force:true}),0)" % (json.dumps(fid), json.dumps(fid), json.dumps(sid)))
                for i in range(n):
                    room_open('climb-scene')
                    pg = p.eval("(()=>{const b=document.querySelector('.bt-room-body');return {says:[...b.querySelectorAll('.tt-say b')].map(x=>x.textContent),paras:b.querySelectorAll('p').length,nav:!!document.querySelector('.bt-room-nav')}})()")
                    ok(pg['paras'] > 0, (sid, i, 'empty page'))
                    for who in pg['says']: seen.setdefault(sid, set()).add(who)
                    click('ok')
        ok(p.eval("FemcBattle.save.tt.climb.length") == 8, 'each recorded once')
        ok(p.eval("(async()=>{const f=FEMC_BATTLE_DATA.floors.find(x=>x.id==='f255');return await FemcClimb.play(FemcBattle.tt(f),f,'raqia-arrive')})()") is False, 'not twice')
        results['scenes'] = {k: sorted(v) for k, v in seen.items()}
        print('scenes OK', json.dumps(results['scenes']), flush=True)

    # ── Events in each block ───────────────────────────────────────────────────────────────────────────────────────
    if want('events'):
        practice(party=('haechan', 'minji', 'jungwon'))
        p.eval("FemcBattle.save.tt.climb=Object.keys(FemcClimb.SCENES)")
        ev = p.eval("FemcClimb.EVENTS.map(e=>[e.id,e.who||null])")
        per = {}
        for eid, who in ev:
            block = eid.split('-')[0]
            per[block] = per.get(block, 0) + 1
            fid = {'rq': 'f258', 'zb': 'f304', 'ab': 'f354', 'zn': 'f400'}[block]
            party = ['haechan', 'minji', 'jungwon'] if block in ('rq', 'zb') else ['jihoon', 'jungwon', 'akihiko']
            p.eval("FemcBattle.save.party=%s" % json.dumps(party))
            climb(fid, ['event'], "window.__ttEvent=%s;" % json.dumps(eid))
            fits = p.eval("(()=>{const f=FEMC_BATTLE_DATA.floors.find(x=>x.id===%s),e=FemcTartarus.EVENTS.find(x=>x.id===%s);return FemcTartarus.fits(FemcBattle.tt(f),f,e)})()" % (json.dumps(fid), json.dumps(eid)))
            ok(fits, (eid, 'fits its block and party'))
            snap(); p.eval("(()=>{const m=FemcBattle.run.map,n=FemcBattle.ctl.opts.find(x=>x.type==='event');FemcBattle.ctl.go(n.id)})()")
            room_open('event', 20)
            p.eval("document.querySelector('.bt-room [data-v]:not(:disabled)').click()")
            settle("FemcBattle.ctl?.kind==='map' || (FemcBattle.screen()==='room' && (FemcBattle.marks['room-event-out']||0)>(window.__rc['room-event-out']||0))", 90)
            if p.eval("FemcBattle.screen()==='room'"): p.eval("document.querySelector('.bt-room .bt-btn').click()")
            settle("FemcBattle.ctl?.kind==='map'", 60)
            ok(p.eval("FemcBattle.marks['event-%s']" % eid) >= 1, eid)
        # Not outside its block; a `who` event not without its member.
        nf = p.eval(r"""(()=>{const T=FemcTartarus,D=FEMC_BATTLE_DATA,f=D.floors.find(x=>x.id==='f250'),c=FemcBattle.tt(f);FemcBattle.save.party=['akihiko','yukari','junpei'];
          const out=FemcClimb.EVENTS.filter(e=>T.fits(c,f,e)).length;const r=D.floors.find(x=>x.id==='f258');return [out,T.fits(FemcBattle.tt(r),r,T.EVENTS.find(e=>e.id==='rq-hc-coffee'))]})()""")
        ok(nf == [0, False], nf)
        ok(per == {'rq': 6, 'zb': 6, 'ab': 6, 'zn': 3}, per)
        results['events'] = per
        print('events OK', per, flush=True)

    # ── The balance sim ────────────────────────────────────────────────────────────────────────────────────────────
    if want('sim'):
        practice(strong=False)
        s = p.eval(r"""(()=>{const G={raqia:['rq_encore@74','rq_bellfox@73'],zebul:['zb_undertow@87','zb_veil@86'],araboth:['ab_recount@99','ab_poster@98'],
            gRaqia:['guard_raqia'],gZebul:['guard_zebul'],gAraboth:['guard_araboth']};const out={};
          const s=NGSIM.strong(['akihiko','mitsuru','aigis'],99);Object.entries(G).forEach(([k,g])=>{out[k]=NGSIM.many(s,g,4)});
          const t=[];for(let i=0;i<10;i++)t.push(NGSIM.fight(s,['super_tiger','zn_hill_r'],100+i));
          out.tiger={wins:t.filter(x=>x.out==='win').length,rounds:Math.round(t.reduce((a,x)=>a+x.rounds,0)/10),phase:Math.max(...t.map(x=>x.phase)),acts:Math.max(...t.map(x=>x.acts)),foes:Math.max(...t.map(x=>x.foes)),hp:t.filter(x=>x.out==='win').map(x=>x.hp)};
          const w=NGSIM.strong(['haechan','jungwon','yukari'],99);out.tiger2=NGSIM.many(w,['super_tiger','zn_hill_r'],10,200);
          const m=NGSIM.strong(['akihiko','mitsuru','aigis'],80);out.mid={raqia:NGSIM.many(m,G.raqia,4),araboth:NGSIM.many(m,G.araboth,4)};
          return out})()""")
        for k in ('raqia', 'zebul', 'araboth', 'gRaqia', 'gZebul', 'gAraboth'): ok(s[k]['wins'] == 4, (k, s[k]))
        ok(s['gAraboth']['rounds'] > s['gRaqia']['rounds'] and s['araboth']['rounds'] >= s['raqia']['rounds'], ('harder by floor', s))
        t = s['tiger']
        ok(3 <= t['wins'] <= 9, ('winnable, not easily', t))
        ok(t['rounds'] >= 12 and t['phase'] == 2 and t['acts'] == 3 and t['foes'] == 4, t)
        ok(1 <= s['tiger2']['wins'] <= 9, ('another party', s['tiger2']))
        ok(s['mid']['araboth']['rounds'] > s['mid']['raqia']['rounds'], ('a level-80 party feels Araboth', s['mid']))
        results['sim'] = s
        print('sim OK', json.dumps(s), flush=True)

    # ── The Zenith's superboss through the UI ──────────────────────────────────────────────────────────────────────
    if want('boss'):
        practice()
        p.eval("FemcBattle.save.tt.climb=['zenith-arrive']")
        p.eval("window.__ttReveal=true"); climb('f400'); p.eval("window.__ttReveal=false")
        walk_to('super'); room_open('super')
        ok(p.eval("document.querySelector('.bt-room h1').textContent") == 'A SEALED DOOR', 'door')
        click('fight')
        p.wait("FemcBattle.screen()==='battle' && !!document.querySelector('.bt-enemy.superboss')", 30)
        ok(p.eval("FemcBattle.B.foes().map(f=>f.kind)") == ['super_tiger', 'zn_hill_r'], 'with the first hill')
        # Bring it under both thresholds: at its next turn it changes twice and calls both other hills.
        p.eval("(()=>{const t=FemcBattle.B.foes().find(f=>f.kind==='super_tiger');t.hp=Math.round(t.maxHp*0.3)})()")
        settle("(FemcBattle.marks['summon-adds']||0)>=1 && FemcBattle.B.foes().length===4", 180)
        ph = p.eval("(()=>{const t=FemcBattle.B.foes().find(f=>f.kind==='super_tiger');return [t.phase,t.acts,FemcBattle.B.foes().map(f=>f.kind)]})()")
        ok(ph[0] == 2 and ph[1] == 3 and ph[2] == ['super_tiger', 'zn_hill_r', 'zn_hill_s', 'zn_hill_h'], ph)
        p.eval("FemcBattle.B.foes().forEach(f=>{if(!f.dead)f.hp=1})")
        room_open('super-loot', 240)
        ok(p.eval("FemcBattle.save.tt.supers") == ['super_tiger'] and p.eval("FemcBattle.marks['super-first']") == 1, 'first fall')
        click('ok')
        pages(3)
        settle("FemcBattle.ctl?.kind==='map'", 30)
        ok(p.eval("FemcBattle.marks['climb-zenith-summit']") == 1, 'closing scene')
        results['boss'] = {'phase': ph}
        print('boss OK', flush=True)

    # ── Rewards: loot and the life sim's milestones ────────────────────────────────────────────────────────────────
    if want('rewards'):
        practice(strong=False)
        pl = p.eval(r"""(()=>{const T=FemcTartarus,D=FEMC_BATTLE_DATA,F=id=>D.floors.find(f=>f.id===id),out={};
          const story=f=>{const b=FemcBattle.tt(f);return Object.assign({},b,{HO:{request:{}},save:b.save})};
          const z=F('f400'),g=F('f290'),m=F('f204');const lz=T.loot('super',story(z),z),lg=T.loot('guardian',story(g),g);
          out.zenith=[lz.plumes,!!lz.echo,lz.card&&lz.card.r,lz.items.tartarus_key];out.zenithPractice=T.loot('super',FemcBattle.tt(z),z).plumes||0;
          out.guard=[lg.plumes,lg.card&&lg.card.r];out.monadGuard=T.loot('guardian',story(m),m).plumes;out.rematch=T.loot('super2',story(z),z).plumes||0;return out})()""")
        ok(pl['zenith'] == [10, True, 5, 2] and pl['zenithPractice'] == 0 and pl['guard'] == [3, 5] and pl['monadGuard'] == 2 and pl['rematch'] == 0, pl)
        # The life sim: a New Game+ save at the top with everything beaten gets the climb's 71 on top of the year's 111, and the title.
        p.goto('femc-game.html?speed=10&seed=7')
        mk = r"""(()=>{const G=FemcGame,D=FEMC_BATTLE_DATA;G.newGame();const S=G.S;S.started=true;S.phase='play';S.day=G.dayOf('2/20');S.slot='after';
          S.ngp=%d;S.tartarus.maxFloor=%d;S.unlocked.tartarus=true;const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
          b.tt.guardians=D.floors.filter(f=>f.guardian&&f.gameFloor<=%d).map(f=>f.id);b.tt.supers=%s;S.battleSave=FemcBattleSave.normalize(b);
          const g=FemcGacha.gs();g.plumes=0;g.miles=[];if(S.gacha.cos)S.gacha.cos.own=(S.gacha.cos.own||[]).filter(x=>x!=='tt-zenith');G.save();return true})()"""
        p.eval(mk % (1, 400, 400, "['super_tiger','super_eclipse']"))
        p.eval("new Promise(r=>setTimeout(r,900))")
        got = p.eval("[FemcGacha.gs().plumes,FemcGacha.gs().miles.length,(FemcGame.S.gacha.cos&&FemcGame.S.gacha.cos.own||[]).includes('tt-zenith')]")
        ok(got == [182, 39, True], ('everything once, and the title', got))
        p.eval("FemcGame.save()"); p.eval("new Promise(r=>setTimeout(r,700))")
        ok(p.eval("FemcGacha.gs().plumes") == 182, 'not again')
        p.eval(mk % (0, 254, 254, "['super_eclipse']"))
        p.eval("new Promise(r=>setTimeout(r,900))")
        ok(p.eval("FemcGacha.gs().plumes") == 111, ('a first playthrough at the top: the year’s 111 only', p.eval("FemcGacha.gs().plumes")))
        results['rewards'] = {'loot': pl, 'milestones': 'New Game+ top 182 (71 from the climb) + the Zenith title; a first playthrough 111'}
        print('rewards OK', json.dumps(pl), flush=True)

    # ── Saves ──────────────────────────────────────────────────────────────────────────────────────────────────────
    if want('saves'):
        practice(strong=False)
        sv = p.eval(r"""(()=>{const BS=FemcBattleSave,s=JSON.parse(JSON.stringify(FemcBattle.save));
          const old=Object.assign({},s,{reached:'f250',tt:{guardians:['f204'],monad:true,secrets:[],puzzles:1,rares:0}});delete old.tt.climb;
          const a=BS.fromRaw(old),b=BS.fromRaw(Object.assign({},s,{reached:'f290',tt:{guardians:['f290'],monad:true,gates:['f255','nope'],supers:['super_tiger'],climb:['raqia-arrive','junk',4]}}));
          const c=BS.carry(b);return {a:[a.reached,a.tt.climb,a.tt.guardians],b:[b.reached,b.tt.climb,b.tt.gates,b.tt.supers],c:[c.tt.climb,c.tt.gates,c.tt.supers,c.tt.guardians,c.ngp===(b.ngp||0)+1,c.lvl===b.lvl]}})()""")
        ok(sv['a'] == ['f250', [], ['f204']], sv)
        ok(sv['b'] == ['f290', ['raqia-arrive'], ['f255'], ['super_tiger']], sv)
        ok(sv['c'] == [[], [], [], [], True, True], sv)
        results['saves'] = sv
        print('saves OK', flush=True)

    # ── Screenshots ────────────────────────────────────────────────────────────────────────────────────────────────
    if want('shots'):
        for w, h in ((1280, 800), (375, 812)):
            view(w, h)
            practice()
            p.eval("window.__ttReveal=true"); climb('f258'); p.eval("window.__ttReveal=false")
            shot(f'raqia-map-{w}')
            snap(); p.eval("(()=>{const f=FEMC_BATTLE_DATA.floors.find(x=>x.id==='f255');FemcClimb.play(FemcBattle.tt(f),f,'raqia-arrive',{force:true})})()")
            room_open('climb-scene'); shot(f'raqia-scene-{w}')
            for _ in range(3):
                click('ok')
                if _ < 2: room_open('climb-scene')
            p.eval("FemcBattle.save.tt.climb=['zenith-arrive']")
            p.eval("window.__ttReveal=true"); climb('f400'); p.eval("window.__ttReveal=false")
            walk_to('super'); room_open('super'); shot(f'zenith-door-{w}')
            click('back'); settle("FemcBattle.ctl?.kind==='map'")
            ok(not p.eval("document.documentElement.scrollWidth>innerWidth+1"), ('no sideways scroll', w))
        view(1280, 800)
        results['shots'] = str(OUT)
        print('shots in', OUT, flush=True)

    errs = [m for m in p.console() if m[0] in ('exception', 'error')]
    ok(not errs, errs[:5])
    print(json.dumps(results, indent=1, default=str))
    print('ALL OK')
finally:
    try: p.close()
    except Exception: pass
