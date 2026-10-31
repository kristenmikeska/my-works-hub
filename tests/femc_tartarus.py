"""Tartarus, deeper (2026-10-25): more floors per block, the newer room types, puzzles, secret floors and Monad, rewards,
old-save migration and a real Tartarus night. Isolated Chrome profile, a local server on a random port; never the player's saves.

  python3 tests/femc_tartarus.py [--only gen,puzzles,rooms,secret,teleport,migration,night,shots] [--screenshots DIR]

Since the finish roadmap's phase 1 (2026-10-31): 113 stopping floors (the main floors plus short landings between them),
teleporting from the entrance, Monad's three section guardians, four superbosses, more events (and arrival events), stairs
that skip mapped landings, guardian / superboss plumes.

gen        floors per block (real P3 numbers, the calendar's caps at each block's top), 20 maps of every floor: the stairs
           always reachable, guardians on their floors and the only way to the stairs, every room type turns up, the block
           biases show (traps in Yabbashah, puzzles in Arqa, golden Shadows in Adamah, cracked walls in Tziah), hidden rooms
           out of reach until found, Monad's door on 172F only once it's open. Phase 1: floors per block, landings (3 layers,
           never a guardian), a superboss door on exactly its four floors, distinct guardian names, the gates, the pool's
           level ramp.
puzzles    the three puzzles' generators over 900 seeds and every block: solvable, inside their budgets; then each solved
           through the real UI with keys, and one given up.
rooms      every room type entered through the map in practice mode: guardian, vault (key, guards), puzzle, rest, rare
           (caught and fled), trap (dodge, brace, spotted), moon shrine, events (each one), cracked walls (loot, memory).
           Phase 1: a superboss (left shut, beaten, its loot, then a rematch), the plume rewards (guardian 2, superboss 5,
           a rematch none, practice none), the romance gate on events, arrival events (cadence, a forced one through the UI).
secret     a cracked wall's stairwell to a hidden floor and out onto the next floor; Monad's door at 172F into 176F, its
           access point, and a Monad floor's sealed stairs in the story.
teleport   the entrance's Teleport list (practice: blocks reached; story: tonight's open blocks and Monad's sections by date)
           and a teleport through the UI; stairs that skip mapped landings (and stop at an unbeaten superboss's floor).
migration  old battle saves (three floors a block, a v2 save with a number, Sketch the Floor's list) move their access point to
           the same game floor; a new save is left alone; a story slot with an old battle save continues from the right floor.
           Phase 1: tt.gates / tt.supers default and are cleaned; an access point on a landing loads.
night      a real Tartarus night from the dorm: the new floors' numbers, rooms on the way, leaving at an access point, the result
           back in the life sim (best floor, Velvet Plumes found), the next morning. Phase 1: a landing on the way, a forced
           arrival event (the blue feather: a plume).
shots      the map (rooms revealed, a party line), a puzzle of each kind, a guardian and a golden Shadow at 1440x900 and 375x812."""
import argparse, base64, json, pathlib, tempfile, time
from femc_browser import Page

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='')
args = ap.parse_args()
ONLY = [x for x in args.only.split(',') if x]
OUT = pathlib.Path(args.screenshots) if args.screenshots else pathlib.Path(tempfile.mkdtemp(prefix='femc-tartarus-'))
OUT.mkdir(parents=True, exist_ok=True)
want = lambda n: not ONLY or n in ONLY
p = Page()
results = {}

# One step of a fight or a screen between fights. Map and room panels are left alone (the test decides those).
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


def practice(lvl=60, extra=''):
    p.ctx = None
    p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=10&seed=4'})
    p.wait("document.readyState==='complete' && !!window.FemcBattle && FemcBattle.screen()==='hub'")
    p.eval("""(()=>{const s=FemcBattle.save;s.lvl=%d;s.exp=0;Object.values(s.mem).forEach(m=>{m.lvl=%d});s.items={medicine:3};s.yen=20000;s.reached=null;
      s.tt={guardians:[],monad:false,secrets:[],puzzles:0,rares:0};s.ops.cleared=[];s.party=['akihiko','yukari','junpei'];s.cycle=0;FEMC_BATTLE_DATA.party.forEach(m=>{s.evo[m.id]=true});s.memories=[];s.settings.tips=false;%s})()""" % (lvl, lvl - 1, extra))


def climb(fid, force=None, extra=''):
    """Start a run on floor fid (practice), with room types forced next to the arrival point."""
    p.eval("window.__ttForce=%s;window.__ttCrack=null;window.__ttReveal=false;window.__ttEvent=null;window.__ttPuzzle=null;%s" % (json.dumps(force), extra))
    p.eval("(FemcBattle.climb(%s), 0)" % json.dumps(fid))
    settle("FemcBattle.screen()==='map' && FemcBattle.ctl?.kind==='map'", 30)
    p.eval("window.__ttForce=null")


def node_of(t):
    return p.eval("(()=>{const m=FemcBattle.run.map;const n=FemcBattle.ctl.opts.find(x=>x.type===%s);return n?n.id:null})()" % json.dumps(t))


def enter(t):
    nid = node_of(t)
    ok(nid, f'no {t} room next to the arrival point')
    snap(); p.eval("(FemcBattle.ctl.go(%s), 0)" % json.dumps(nid))
    return nid


def snap():
    p.eval("window.__rc=Object.assign({},FemcBattle.marks)")


def room_open(name, limit=20):
    """Wait for the panel `name` to open (again) since the last action."""
    settle("FemcBattle.screen()==='room' && !!document.querySelector('.bt-room [data-v]') && (FemcBattle.marks['room-%s']||0)>((window.__rc||{})['room-%s']||0)" % (name, name), limit)


def click(v):
    snap()
    p.eval("document.querySelector('.bt-room [data-v=%s]').click()" % v)


def node(nid, expr='n'):
    return p.eval("(()=>{const n=FemcTartarusMap.get(FemcBattle.run.map,%s);return %s})()" % (json.dumps(nid), expr))


try:
    view(1280, 800)
    # ── Floor generation ───────────────────────────────────────────────────────────────────────────────────────────
    if want('gen'):
        practice()
        r = p.eval(r"""(()=>{const D=FEMC_BATTLE_DATA,M=FemcTartarusMap,T=FemcTartarus,E=FemcBattleEngine;
          const per={},tops=[],mon=[],bad=[],types={},share={};let n=0,hidOk=true,guardOk=true,monadDoor={open:0,shut:0};
          D.blocks.forEach(b=>{per[b.id]=b.floors.length;if(!b.secret)tops.push(b.floors[b.floors.length-1]);});
          for(let i=1;i<D.floors.length;i++)if(D.floors[i].gameFloor<=D.floors[i-1].gameFloor)bad.push('order '+D.floors[i].id);
          const ctxOf=(f,R,cleared)=>{const c=FemcBattle.tt(f);c.rand=R;Object.defineProperty(c,'save',{value:Object.assign({},FemcBattle.save,{ops:{cleared},tt:{guardians:[],monad:false,secrets:[],puzzles:0,rares:0}})});return c};
          D.floors.forEach(f=>{const s=share[f.blockId]||(share[f.blockId]={rooms:0});for(let i=0;i<20;i++){
            const R=E.rng(i*131+f.gameFloor),c=ctxOf(f,R,i%2?['fortune']:[]),pl=T.plan(f,c),m=M.generate(f,{rand:R,plan:pl});T.dress(m,f,c);n++;
            const {dist}=M.bfs(m,m.start);if(dist[m.stairs]==null)bad.push('stairs '+f.id);
            m.nodes.forEach(x=>{if(dist[x.id]==null)bad.push('cut off '+f.id+' '+x.type);types[x.type]=(types[x.type]||0)+1;if(!['start','stairs'].includes(x.type)){s.rooms++;s[x.type]=(s[x.type]||0)+1}});
            if(f.guardian){const st=M.get(m,m.stairs);if(st.links.length!==1||M.get(m,st.links[0]).type!=='guardian')guardOk=false;if(!m.nodes.some(x=>x.type==='guardian'&&x.group&&x.group.length))guardOk=false}
            else if(m.nodes.some(x=>x.type==='guardian'))guardOk=false;
            m.nodes.filter(x=>x.hidden).forEach(h=>{if(m.nodes.some(o=>M.neighbors(m,o.id).includes(h)))hidOk=false;if(M.move(Object.assign({},m,{pos:h.links[0]}),h.id).ok)hidOk=false;});
            if(f.last){const has=m.nodes.some(x=>x.secret==='monad');if(has&&!(i%2))bad.push('monad door while shut');if(has)monadDoor.open++;else monadDoor.shut++;}
            else if(m.nodes.some(x=>x.secret==='monad'))bad.push('monad door off 172F');
          }});
          const pct=(b,t)=>Math.round(1000*(share[b][t]||0)/share[b].rooms)/10;
          return {per,tops,caps:FemcBattle.save&&[16,36,64,92,118,144,172],n,bad:bad.slice(0,8),types,guardOk,hidOk,monadDoor,
            // each pair: a block of the same map size without the bias, then the block with it
            bias:{trap:[pct('tziah','trap'),pct('yabbashah','trap')],puzzle:[pct('thebel','puzzle'),pct('arqa','puzzle')],rare:[pct('harabah','rare'),pct('adamah','rare')],crack:[pct('thebel','crack'),pct('tziah','crack')],vault:[pct('adamah','vault'),pct('harabah','vault')]},
            floors:D.floors.length,monad:D.floors.filter(f=>f.secret).map(f=>f.gameFloor)}})()""")
        ok(r['per'] == {'thebel': 7, 'arqa': 8, 'yabbashah': 9, 'tziah': 9, 'harabah': 8, 'adamah': 8, 'empyrean': 9, 'monad': 10}, r['per'])  # main floors
        # Phase 1: the landings between them, their short maps, superboss doors, guardians, gates, the level ramp.
        q = p.eval(r"""(()=>{const D=FEMC_BATTLE_DATA,M=FemcTartarusMap,T=FemcTartarus,E=FemcBattleEngine,bad=[],per={},doors={};
          D.floors.forEach(f=>{per[f.blockId]=(per[f.blockId]||0)+1});
          D.blocks.forEach(b=>{const fl=D.floors.filter(f=>f.blockId===b.id).map(f=>f.gameFloor);for(let i=1;i<fl.length;i++)if(fl[i]-fl[i-1]>(b.secret?4:fl[0]<93?2:3))bad.push('gap '+fl[i])});
          D.floors.forEach(f=>{if(f.landing&&(f.guardian||f.top||f.fi===0||f.layers!==3))bad.push('landing '+f.id);
            for(let i=0;i<12;i++){const R=E.rng(i*77+f.gameFloor),c=FemcBattle.tt(f);c.rand=R;const m=M.generate(f,{rand:R,plan:T.plan(f,c)});T.dress(m,f,c);
              const s=m.nodes.filter(n=>n.type==='super');if(s.length!==(f.superboss?1:0))bad.push('door '+f.id);
              if(s.length){doors[f.id]=s[0].group;if(s[0].group[0]!==f.superboss||s[0].group.length<2)bad.push('door group '+f.id)}
              if(f.landing&&m.layers!==3)bad.push('layers '+f.id)}});
          const gk=D.floors.filter(f=>f.guardian).map(f=>f.guardian),gn=gk.map(k=>D.enemies[k].name);
          const sup=D.floors.filter(f=>f.superboss).map(f=>[f.id,f.superboss,D.enemies[f.superboss].lvl,D.enemies[f.superboss].acts]);
          const ramp=[D.floors.find(f=>f.id==='f2').pool.flat().some(k=>k.includes('@')),D.floors.find(f=>f.id==='f16').pool.flat().every(k=>k.includes('@'))];
          return {n:D.floors.length,per,bad:bad.slice(0,8),guards:gk.length,names:new Set(gn).size,sup,doors,ramp,gates:D.floors.filter(f=>f.gate).map(f=>f.id)}})()""")
        ok(q['n'] == 113 and q['per'] == {'thebel': 9, 'arqa': 13, 'yabbashah': 17, 'tziah': 17, 'harabah': 12, 'adamah': 12, 'empyrean': 12, 'monad': 21}, q)
        ok(not q['bad'], q['bad'])
        ok(q['guards'] == 10 and q['names'] == 10, ('a guardian per block and per Monad section, each its own name', q))
        ok([x[0] for x in q['sup']] == ['f61', 'f115', 'f169', 'f250'] and all(x[3] == 2 for x in q['sup']), q['sup'])
        ok(q['ramp'] == [False, True], ('pool levels ramp up within a block', q['ramp']))
        ok(q['gates'] == ['f2', 'f17', 'f37', 'f65', 'f93', 'f119', 'f145', 'f176', 'f208', 'f234'], q['gates'])
        ok(r['tops'] == r['caps'], ('block tops are the calendar caps', r['tops']))
        ok(not r['bad'], r['bad'])
        ok(r['guardOk'] and r['hidOk'], (r['guardOk'], r['hidOk']))
        for t in ['shadow', 'chest', 'locked', 'clock', 'access', 'event', 'guardian', 'vault', 'puzzle', 'rest', 'rare', 'trap', 'altar', 'crack', 'empty']:
            ok(r['types'].get(t, 0) > 0, f'{t} never turns up')
        for k, (lo, hi) in r['bias'].items(): ok(hi > lo, ('bias', k, lo, hi))
        ok(r['monadDoor']['open'] > 0 and r['monadDoor']['shut'] > 0, r['monadDoor'])
        results['gen'] = {'floors': r['floors'], 'per block': q['per'], 'maps': r['n'], 'bias %': r['bias'], 'monad': r['monad'], 'supers': q['sup']}
        print('gen', json.dumps(results['gen']), flush=True)

    # ── Puzzles ────────────────────────────────────────────────────────────────────────────────────────────────────
    if want('puzzles'):
        practice()
        r = p.eval(r"""(()=>{const Z=FemcTartarus.puzzles,out={lantern:0,slide:0,switch:0},bad=[];
          for(let bi=0;bi<8;bi++)for(let s=1;s<=300;s++){
            const L=Z.lantern.gen(s*7+bi,bi);if(L.seq.some((v,i)=>i&&v===L.seq[i-1])||L.seq.length<3||JSON.stringify(Z.lantern.solve(L))!==JSON.stringify(L.solution))bad.push('lantern '+s);else out.lantern++;
            const S=Z.slide.gen(s*13+bi,bi),sol=FemcTartarus.slideSolve(S);
            if(!sol||sol.length!==S.solution.length||sol.length<3||S.budget<sol.length)bad.push('slide '+s);else out.slide++;
            const W=Z.switch.gen(s*17+bi,bi);if(new Set(W.solution).size!==4||JSON.stringify(Z.switch.solve(W))!==JSON.stringify(W.solution))bad.push('switch '+s);else out.switch++;}
          return {out,bad:bad.slice(0,5)}})()""")
        ok(not r['bad'], r['bad'])
        ui = {}
        KEY = "document.dispatchEvent(new KeyboardEvent('keydown',{key:%s,bubbles:true}))"
        for kind in ['lantern', 'slide', 'switch']:
            m0 = p.eval("FemcBattle.save.mats.lantern_glass||0")
            climb('f17', ['puzzle'], "window.__ttPuzzle=%s" % json.dumps(kind))
            enter('puzzle'); room_open('puzzle'); click('try')
            p.wait("FemcTartarus.state && FemcTartarus.state.kind===%s && FemcTartarus.state.phase==='input'" % json.dumps(kind), 20)
            sol = p.eval("FemcTartarus.state.solution")
            if kind == 'slide':
                for d in sol: p.eval(KEY % json.dumps({'U': 'ArrowUp', 'D': 'ArrowDown', 'L': 'ArrowLeft', 'R': 'ArrowRight'}[d])); time.sleep(0.05)
            else:
                for i in sol:
                    # walk the selection with arrows to the right one, then Enter (as a keyboard player would)
                    cur = p.eval("[...document.querySelectorAll('.tt-lamp,.tt-sw')].findIndex(b=>b.classList.contains('sel'))")
                    n = 4; steps = (i - cur) % n
                    for _ in range(steps): p.eval(KEY % json.dumps('ArrowRight'))
                    p.eval(KEY % json.dumps('Enter')); time.sleep(0.08)
            p.wait("FemcTartarus.state.done", 10)
            ok(p.eval("FemcTartarus.state.ok"), f'{kind}: not solved')
            room_open('puzzle-loot')
            ok(p.eval("FemcBattle.save.mats.lantern_glass||0") > m0, f'{kind}: no Lantern Glass')
            click('ok'); settle("FemcBattle.ctl?.kind==='map'")
            ui[kind] = len(sol)
        # Giving up: no loot, the room is done.
        climb('f17', ['puzzle'], "window.__ttPuzzle='switch'")
        nid = enter('puzzle'); room_open('puzzle'); click('try')
        p.wait("FemcTartarus.state && FemcTartarus.state.phase==='input' && !FemcTartarus.state.done", 10)
        p.eval("document.querySelector('[data-pz=quit]').click()")
        settle("FemcBattle.ctl?.kind==='map'")
        ok(node(nid, 'n.used') and not p.eval("FemcTartarus.state.ok"), 'gave up')
        results['puzzles'] = {'generated': r['out'], 'solved in UI (moves)': ui, 'gave up': True, 'solved count': p.eval("FemcBattle.save.tt.puzzles")}
        print('puzzles', json.dumps(results['puzzles']), flush=True)

    # ── Every room type ────────────────────────────────────────────────────────────────────────────────────────────
    if want('rooms'):
        practice()
        out = {}
        # Rest: 35% back.
        climb('f2', ['rest'])
        p.eval("FemcBattle.run.carry={solar:{hp:10,sp:5,th:0}}")
        hp0 = p.eval("FemcBattle.run.carry.solar.hp")
        enter('rest'); room_open('rest')
        hp1 = p.eval("FemcBattle.run.carry.solar.hp")
        ok(hp1 > hp0, ('rest', hp0, hp1)); click('ok'); settle("FemcBattle.ctl?.kind==='map'")
        out['rest'] = [hp0, hp1]
        # Vault with a key.
        climb('f20', ['vault'], "FemcBattle.save.items.tartarus_key=1")
        y0 = p.eval("FemcBattle.save.yen")
        enter('vault'); room_open('vault'); click('key'); room_open('vault-loot')
        ok(not p.eval("FemcBattle.save.items.tartarus_key") and p.eval("FemcBattle.save.yen") > y0, 'vault key')
        click('ok'); settle("FemcBattle.ctl?.kind==='map'")
        # Vault, waking its guards.
        climb('f20', ['vault'])
        enter('vault'); room_open('vault'); click('fight')
        room_open('vault-loot', 90)
        ok(p.eval("FemcBattle.marks['vault-guards']") == 1, 'vault guards'); click('ok'); settle("FemcBattle.ctl?.kind==='map'")
        out['vault'] = 'key and guards'
        # Guardian: 11F's stairs only through it; beaten once, gone next time.
        climb('f11')
        snap(); g = p.eval("(()=>{const m=FemcBattle.run.map,M=FemcTartarusMap,st=M.get(m,m.stairs),g=m.nodes.find(n=>n.type==='guardian');return {only:st.links.length===1&&st.links[0]===g.id,kind:g.group[0]}})()")
        ok(g['only'] and g['kind'] == 'guard_thebel', g)
        cards0 = p.eval("FemcBattle.save.cards.list.length")
        snap(); p.eval("(()=>{const m=FemcBattle.run.map,g=m.nodes.find(n=>n.type==='guardian');const n=FemcTartarusMap.get(m,g.links.find(id=>FemcTartarusMap.get(m,id).type!=='stairs'));m.pos=n.id;FemcTartarusMap.visit(m,n.id);})()")
        # re-render the map at the new position by moving: go straight into the guardian
        snap(); p.eval("(()=>{const m=FemcBattle.run.map,g=m.nodes.find(n=>n.type==='guardian');FemcBattle.ctl.go(g.id)})()")
        room_open('guardian'); click('fight')
        room_open('guardian-loot', 120)
        ok(p.eval("FemcBattle.save.tt.guardians").count('f11') == 1 and p.eval("FemcBattle.save.cards.list.length") > cards0, 'guardian rewards')
        click('ok'); settle("FemcBattle.ctl?.kind==='map'")
        climb('f11')
        ok(not p.eval("FemcBattle.run.map.nodes.some(n=>n.type==='guardian')"), 'guardian came back')
        out['guardian'] = 'blocks 11F, beaten once, a card'
        # Rare Shadow: caught with Attack (Lv 60), fled when everyone guards.
        climb('f6', ['rare'])
        enter('rare'); settle("(FemcBattle.marks['room-rare-loot']||0)>0 || (FemcBattle.marks['rare-fled']||0)>0", 90)
        caught = p.eval("(FemcBattle.marks['rare-win']||0)>0")
        if caught: ok(p.eval("FemcBattle.save.mats.gilded_scale||0") >= 1, 'gilded scale'); click('ok')
        settle("FemcBattle.ctl?.kind==='map'")
        climb('f6', ['rare'], "window.__cmd='guard'")
        nid = enter('rare'); settle("(FemcBattle.marks['rare-fled']||0)>0", 90)
        p.eval("window.__cmd=null"); settle("FemcBattle.ctl?.kind==='map'")
        ok(node(nid, 'n.gone && n.type') == 'empty' and p.eval("FemcBattle.marks['rule-fled']") >= 1, 'fled')
        # A golden Shadow seen on the map runs off after a few moves.
        climb('f6', ['rare'])
        rid = node_of('rare')
        p.eval("FemcTartarus.afterMove(FemcBattle.tt(FEMC_BATTLE_DATA.floors.find(f=>f.id==='f6')))")
        flee0 = node(rid, 'n.flee')
        for _ in range(5): p.eval("FemcTartarus.afterMove(FemcBattle.tt(FEMC_BATTLE_DATA.floors.find(f=>f.id==='f6')))")
        ok(flee0 == 4 and node(rid, 'n.gone'), ('runs off', flee0))
        out['rare'] = {'caught': caught, 'fled in battle': True, 'ran off the map': True}
        # Traps: brace (spikes, half), dodge a spotted one, an unspotted one looks like a corridor.
        climb('f37', ['trap'])
        tid = node_of('trap')
        ok(p.eval("FemcTartarus.look(FemcTartarusMap.get(FemcBattle.run.map,%s))" % json.dumps(tid)) == 'empty', 'unspotted trap shows')
        p.eval("(()=>{const n=FemcTartarusMap.get(FemcBattle.run.map,%s);n.trap='spikes';FemcBattle.run.carry=null})()" % json.dumps(tid))
        enter('trap'); room_open('trap'); click('brace'); settle("FemcBattle.ctl?.kind==='map'")
        hp = p.eval("(()=>{const c=FemcBattle.run.carry.solar;return c.hp})()")
        ok(hp is not None and p.eval("FemcBattle.marks['trap-braced']") == 1, 'braced')
        climb('f37', ['trap'])
        tid = node_of('trap')
        snap(); found = p.eval("(()=>{const m=FemcBattle.run.map;const r=FemcTartarusMap.scan(m,3);return r.traps.map(n=>n.id)})()")
        ok(tid in found, 'scan spots the trap')
        enter('trap'); room_open('trap')
        odds = p.eval("document.querySelector('.bt-room [data-v=dodge] small').textContent")
        click('dodge'); settle("FemcBattle.ctl?.kind==='map' || (FemcBattle.marks['room-trap-hit']||0)>0")
        if p.eval("(FemcBattle.marks['room-trap-hit']||0)>0"): click('ok'); settle("FemcBattle.ctl?.kind==='map'")
        out['trap'] = {'braced': True, 'spotted odds': odds, 'dodged': p.eval("FemcBattle.marks['trap-dodged']||0"), 'hit': p.eval("FemcBattle.marks['trap-hit']||0")}
        # Moon shrine: Moonwater for yen.
        climb('f93', ['altar'], "window.__ttReveal=false")
        aid = node_of('altar')
        p.eval("(()=>{const n=FemcTartarusMap.get(FemcBattle.run.map,%s);n.offers=['mend','hush','edge']})()" % json.dumps(aid))
        p.eval("FemcBattle.run.carry={solar:{hp:10,sp:5,th:0}}")
        y0 = p.eval("FemcBattle.save.yen")
        enter('altar'); room_open('altar'); click('mend'); settle("FemcBattle.ctl?.kind==='map'")
        ok(p.eval("FemcBattle.save.yen") < y0 and p.eval("FemcBattle.run.carry.solar.hp") > 10 and p.eval("FemcBattle.marks['altar-mend']") == 1, 'altar')
        out['altar'] = y0 - p.eval("FemcBattle.save.yen")
        # Cracked walls: a hidden room's loot, a memory fragment. Every card is scene-awarded and NO_DROP (Kat, 2026-10-27),
        # so a memory wall falls back to the stash; with one card made droppable for the test, the wall still gives it.
        ok(p.eval("FEMC_BATTLE_DATA.memories.every(m=>m.noDrop)"), 'every memory card is NO_DROP')
        for kind in ['loot', 'memory-none', 'memory']:
            if kind == 'memory':
                p.eval("FEMC_BATTLE_DATA.memories.find(m=>m.id==='runners-campus').noDrop=false")
            climb('f4', None, "window.__ttCrack=%s;window.__ttReveal=true" % json.dumps('memory' if kind.startswith('memory') else kind))
            p.eval("window.__ttCrack=null;window.__ttReveal=false")
            cid = p.eval("FemcBattle.run.map.nodes.find(n=>n.type==='crack').id")
            snap(); p.eval("(()=>{const m=FemcBattle.run.map,c=FemcTartarusMap.get(m,%s);m.pos=c.links[0];FemcTartarusMap.visit(m,m.pos);FemcBattle.ctl.go(c.id)})()" % json.dumps(cid))
            # ctl.opts were built for the old position; go() checks the real links, so it moves.
            room_open('crack'); click('break')
            if kind == 'loot':
                room_open('hidden-loot'); ok(p.eval("FemcBattle.save.mats.echo_shell||0") >= 1, 'echo shell'); click('ok')
            elif kind == 'memory-none':
                room_open('hidden-loot'); ok(len(p.eval("FemcBattle.save.memories")) == 0, 'no memory drops at random'); click('ok')
            else:
                room_open('memory'); ok(p.eval("FemcBattle.save.memories") == ['runners-campus'], 'memory'); click('ok')
                p.eval("FEMC_BATTLE_DATA.memories.find(m=>m.id==='runners-campus').noDrop=true")
            settle("FemcBattle.ctl?.kind==='map'")
        out['crack'] = {'secrets': p.eval("FemcBattle.save.tt.secrets")}
        # Events: every one, its first choice (members in the party for theirs).
        evs = p.eval("FemcTartarus.EVENTS.map(e=>[e.id,e.who||null])")
        done = []
        for eid, who in evs:
            party = [x for x in [who] if x] or ['yukari', 'junpei', 'akihiko']
            extra = "FemcBattle.save.party=%s;window.__ttEvent=%s;FemcBattle.save.memories=['runners-campus']" % (json.dumps([x for x in party if x != 'solar'][:3]), json.dumps(eid))
            climb('f2', ['event'], extra)
            enter('event'); room_open('event')
            ok(p.eval("(FemcBattle.marks['event-%s']||0)>0" % eid), f'event {eid} did not play')
            snap(); p.eval("document.querySelector('.bt-room .bt-btn:not(:disabled)').click()")
            settle("FemcBattle.ctl?.kind==='map' || (FemcBattle.screen()==='room' && (FemcBattle.marks['room-event-out']||0)>(window.__rc['room-event-out']||0))", 90)
            if p.eval("FemcBattle.screen()==='room'"): p.eval("document.querySelector('.bt-room .bt-btn').click()")
            settle("FemcBattle.ctl?.kind==='map'", 60)
            done.append(eid)
        p.eval("window.__ttEvent=null;FemcBattle.save.party=['yukari','junpei','akihiko']")
        out['events'] = len(done)
        ok(len(done) >= 50, ('events in all', len(done)))
        # Romance events: only on that link's romance route at its rank, never reversed.
        lv = p.eval(r"""(()=>{const T=FemcTartarus,f=FEMC_BATTLE_DATA.floors[0],e=T.EVENTS.find(x=>x.id==='love-hc'),s=FemcBattle.save,c=FemcBattle.tt(f);
          const t=(love,bonds,rev)=>{s.bondsLove=love;s.bonds=bonds;s.bondsRev=rev;return T.fits(c,f,e)};s.party=['haechan','yukari','junpei'];
          const r=[t([],{haechan:9},[]),t(['haechan'],{haechan:4},[]),t(['haechan'],{haechan:5},[]),t(['haechan'],{haechan:9},['haechan'])];
          s.party=['yukari','junpei','akihiko'];r.push(t(['haechan'],{haechan:9},[]));s.bondsLove=[];s.bonds={};s.bondsRev=[];
          return {r,n:T.EVENTS.filter(x=>x.love).length,all:T.EVENTS.length}})()""")
        ok(lv['r'] == [False, False, True, False, False] and lv['n'] == 6, lv)
        out['romance gate'] = lv
        # Plumes (story only): a guardian 2, a superboss 5 the first time, a rematch none; practice none.
        pl = p.eval(r"""(()=>{const T=FemcTartarus,f=FEMC_BATTLE_DATA.floors.find(x=>x.id==='f61'),base=FemcBattle.tt(f);
          const story=Object.assign({},base,{HO:{request:{}},save:base.save}),out={};
          ['guardian','super','super2'].forEach(k=>{out[k]=[T.loot(k,story,f).plumes||0,T.loot(k,base,f).plumes||0]});return out})()""")
        ok(pl == {'guardian': [2, 0], 'super': [5, 0], 'super2': [0, 0]}, pl)
        out['plumes'] = pl
        # A superboss: its door asks (leaving it shut keeps the party there), the fight, its first-win loot, then a rematch.
        p.eval("FemcBattle.save.party=['akihiko','yukari','junpei']")
        p.eval("window.__ttReveal=true"); climb('f61'); p.eval("window.__ttReveal=false")
        door = p.eval("FemcBattle.run.map.nodes.find(n=>n.type==='super').id")
        def to_door():
            snap(); p.eval("(()=>{const m=FemcBattle.run.map,d=FemcTartarusMap.get(m,%s);m.pos=d.links[0];FemcTartarusMap.visit(m,m.pos);FemcBattle.ctl.go(d.id)})()" % json.dumps(door))
        to_door(); room_open('super'); click('back'); settle("FemcBattle.ctl?.kind==='map'")
        ok(p.eval("FemcBattle.run.map.pos") == door and not node(door, 'n.cleared'), 'left shut, standing in the doorway')
        cards0 = p.eval("FemcBattle.save.cards.list.length")
        snap(); p.eval("(()=>{const m=FemcBattle.run.map,d=FemcTartarusMap.get(m,%s);m.pos=d.links.find(id=>id!==d.id);FemcTartarusMap.visit(m,m.pos);FemcBattle.ctl.go(d.id)})()" % json.dumps(door))
        room_open('super'); ok(p.eval("document.querySelector('.bt-room h1').textContent") == 'A SEALED DOOR', 'door title')
        click('fight')
        p.wait("FemcBattle.screen()==='battle' && !!document.querySelector('.bt-enemy.superboss')", 30)
        ok(p.eval("getComputedStyle(document.querySelector('.bt-enemy.superboss')).getPropertyValue('--sb-tint').includes('hue-rotate')"), 'tinted')
        room_open('super-loot', 240)
        ok(p.eval("FemcBattle.save.tt.supers") == ['super_abbess'] and p.eval("FemcBattle.save.cards.list.length") > cards0 and p.eval("FemcBattle.marks['super-first']") == 1, 'superboss rewards')
        click('ok'); settle("FemcBattle.ctl?.kind==='map'")
        p.eval("window.__ttReveal=true"); climb('f61'); p.eval("window.__ttReveal=false")
        door = p.eval("FemcBattle.run.map.nodes.find(n=>n.type==='super').id"); to_door(); room_open('super')
        ok(p.eval("document.querySelector('.bt-room h1').textContent") == 'THE LACQUERED ABBESS', 'rematch door names it')
        click('fight'); room_open('super-loot', 240)
        ok(p.eval("FemcBattle.save.tt.supers") == ['super_abbess'] and p.eval("FemcBattle.marks['super-win']") == 2, 'rematch')
        click('ok'); settle("FemcBattle.ctl?.kind==='map'")
        out['superboss'] = 'left shut, beaten (tinted, loot), rematch'
        # Arrival events: never on a run's first three floors, then a chance a floor; a forced one through the UI.
        climb('f2')
        cad = p.eval(r"""(async()=>{const f=FEMC_BATTLE_DATA.floors[0],c=window.__arc=FemcBattle.tt(f);c.rand=()=>0;const r=FemcBattle.run;r.ttSince=null;const out=[];
          for(let i=0;i<3;i++)out.push(await FemcTartarus.arrive(c,f));return {out,since:r.ttSince}})()""")
        ok(cad['out'] == [None] * 3 and cad['since'] == 2, cad)
        snap(); p.eval("(FemcTartarus.arrive(window.__arc,FEMC_BATTLE_DATA.floors[0]), 0)")
        room_open('arrive', 20)  # the fourth floor of a run: now it can happen
        p.eval("[...document.querySelectorAll('.bt-room [data-v]')].pop().click()"); time.sleep(0.5)
        if p.eval("FemcBattle.screen()==='room'"): p.eval("document.querySelector('.bt-room [data-v]').click()")
        p.eval("window.__ttArrive='quiet'")
        snap(); p.eval("(FemcBattle.climb('f4'), 0)")
        room_open('arrive', 30)
        ok('At the top of the stairs' in p.eval("document.querySelector('.bt-room .bt-kicker').textContent"), 'arrival kicker')
        p.eval("window.__ttArrive=null"); click('tiptoe'); room_open('event-out'); click('ok')
        settle("FemcBattle.ctl?.kind==='map'")
        ok(p.eval("FemcBattle.marks['arrive-event']") >= 1 and p.eval("FEMC_BATTLE_DATA.floors[FemcBattle.run.fi].id") == 'f4', 'arrival event then the map')
        out['arrival'] = 'none in the first floors, forced one through the UI'
        ok(not p.console(), p.console())
        results['rooms'] = out
        print('rooms', json.dumps(out), flush=True)

    # ── Secret floors and Monad ──────────────────────────────────────────────────────────────────────────────────────
    if want('secret'):
        practice()
        climb('f8', None, "window.__ttCrack='floor';window.__ttReveal=true")
        p.eval("window.__ttCrack=null;window.__ttReveal=false")
        cid = p.eval("FemcBattle.run.map.nodes.find(n=>n.type==='crack').id")
        snap(); p.eval("(()=>{const m=FemcBattle.run.map,c=FemcTartarusMap.get(m,%s);m.pos=c.links[0];FemcTartarusMap.visit(m,m.pos);FemcBattle.ctl.go(c.id)})()" % json.dumps(cid))
        room_open('crack'); click('break'); room_open('secret-stairs'); click('go')
        settle("FemcBattle.ctl?.kind==='map' && FemcBattle.run.hiddenOf==='f8'", 30)
        snap(); hid = p.eval("(()=>{const m=FemcBattle.run.map;return {label:document.querySelector('.bt-floorlabel b').textContent,crack:m.nodes.some(n=>n.type==='crack'&&n.found),access:m.nodes.some(n=>n.type==='access')}})()")
        ok(hid['label'] == '8F·B' and hid['crack'] and not hid['access'], hid)
        if want('shots') or True:
            pass
        # Walk to its stairs (fights on the way), out onto 10F (the landing above 8F).
        snap(); p.eval("(()=>{const m=FemcBattle.run.map,{prev}=FemcTartarusMap.bfs(m,m.stairs);window.__path=[];let k=m.pos;while(k&&k!==m.stairs){k=prev[k];window.__path.push(k)}})()")
        t0 = time.time()
        while not p.eval("(FemcBattle.marks['room-stairs']||0)>0") and time.time() - t0 < 240:
            if p.eval("FemcBattle.ctl?.kind==='map'"):
                snap(); p.eval("(()=>{const m=FemcBattle.run.map,{prev}=FemcTartarusMap.bfs(m,m.stairs);const nx=prev[m.pos];FemcBattle.ctl.go(nx)})()")
            elif p.eval("FemcBattle.screen()==='room'"):
                p.eval("(()=>{const b=document.querySelector('.bt-room [data-v=ok],.bt-room [data-v=no],.bt-room [data-v=leave]')||document.querySelector('.bt-room .bt-btn:not(:disabled)');b&&b.click()})()")
            else: p.eval(DRIVE)
            time.sleep(0.05)
        room_open('stairs', 60); click('up')
        settle("FemcBattle.ctl?.kind==='map' && FemcBattle.run.fi===FEMC_BATTLE_DATA.floors.findIndex(f=>f.id==='f10')", 30)
        ok(p.eval("FemcBattle.save.tt.secrets").count('f8-h') == 1, 'secret floor recorded')
        # Monad: shut before Fortune, open after; through the wall to 176F; its access point; Continue from there.
        climb('f172')
        ok(not p.eval("FemcBattle.run.map.nodes.some(n=>n.secret==='monad')"), 'monad door before fortune')
        p.eval("FemcBattle.save.ops.cleared=['priestess','empress','hierophant','lovers','chariot','hermit','fortune']")
        climb('f172', None, "window.__ttReveal=true")
        p.eval("window.__ttReveal=false")
        cid = p.eval("FemcBattle.run.map.nodes.find(n=>n.secret==='monad').id")
        snap(); p.eval("(()=>{const m=FemcBattle.run.map,c=FemcTartarusMap.get(m,%s);m.pos=c.links[0];FemcTartarusMap.visit(m,m.pos);FemcBattle.ctl.go(c.id)})()" % json.dumps(cid))
        room_open('crack'); click('break')
        settle("FemcBattle.ctl?.kind==='map' && FEMC_BATTLE_DATA.floors[FemcBattle.run.fi].id==='f176'", 30)
        ok(p.eval("FemcBattle.save.tt.monad") and p.eval("document.querySelector('.bt-floorlabel').textContent").startswith('176FMonad'), p.eval("document.querySelector('.bt-floorlabel').textContent"))
        acc = p.eval("FemcBattle.ctl.opts.concat(FemcBattle.run.map.nodes).find(n=>n.type==='access').id")
        snap(); p.eval("(()=>{const m=FemcBattle.run.map,a=FemcTartarusMap.get(m,%s);if(!m.nodes.find(n=>n.id===m.pos).links.includes(a.id)){m.pos=a.links[0];FemcTartarusMap.visit(m,m.pos)}FemcBattle.ctl.go(a.id)})()" % json.dumps(acc))
        room_open('access')
        ok(p.eval("FemcBattle.save.reached") == 'f176', 'monad access point')
        click('leave'); settle("FemcBattle.screen()==='hub'", 30)
        ok('176F' in p.eval("document.querySelector('[data-go=cont]').textContent"), 'continue from 176F')
        # The 172F door stays visible once found.
        climb('f172')
        ok(p.eval("FemcBattle.run.map.nodes.some(n=>n.secret==='monad'&&n.found)"), 'door remembered')
        # In the story Monad opens floor by floor with the calendar (204F on 11/4, 230F on 12/3, 254F on 1/1).
        gate = p.eval("""(()=>{const T=FemcTartarus,F=id=>FEMC_BATTLE_DATA.floors.find(f=>f.id===id),c=mf=>({save:{ops:{cleared:['fortune']}},HO:{request:{maxFloor:mf}}});
          return [T.floorOpen(c(172),F('f176')),T.floorOpen(c(204),F('f204')),T.floorOpen(c(204),F('f212')),T.floorOpen(c(254),F('f254')),T.floorOpen({save:{ops:{cleared:[]}},HO:{request:{maxFloor:254}}},F('f176'))]})()""")
        ok(gate == [False, True, False, True, False], gate)
        results['secret'] = {'monad by date': gate, 'hidden floor': hid, 'out onto': '10F', 'monad': 'found at 172F → 176F, access point, continue'}
        print('secret', json.dumps(results['secret']), flush=True)

    # ── Teleport and stairs that skip ─────────────────────────────────────────────────────────────────────────────────
    if want('teleport'):
        practice(extra="s.floorsMapped=[];FemcBattle.hub()")
        ok(not p.eval("!!document.querySelector('[data-go=warp]')"), 'no Teleport on a fresh save')
        # Practice: a block reached (a floor mapped in Yabbashah, Arqa's door from the Priestess) shows its first floor.
        p.eval("FemcBattle.save.floorsMapped=['f45'];FemcBattle.save.ops.cleared=['priestess'];FemcBattle.hub()")
        snap(); p.eval("document.querySelector('[data-go=warp]').click()")
        p.wait("FemcBattle.screen()==='warp'", 10)
        lst = p.eval("[...document.querySelectorAll('[data-warp]')].map(b=>b.dataset.warp)")
        ok(lst == ['f17', 'f37', ''], lst)
        p.eval("document.querySelector('[data-warp=f37]').click()")
        settle("FemcBattle.ctl?.kind==='map'", 30)
        ok(p.eval("FEMC_BATTLE_DATA.floors[FemcBattle.run.fi].id") == 'f37' and 'f37' in p.eval("FemcBattle.save.tt.gates"), 'teleported to 37F')
        # The rules: the story keeps to tonight's open blocks; Monad's sections by date once it's found.
        g = p.eval(r"""(()=>{const T=FemcTartarus,ids=l=>l.map(f=>f.id);
          const st=(o,hoMax,maxBi)=>ids(T.gates({save:Object.assign({floorsMapped:[],reached:null,ops:{cleared:['priestess','empress','hierophant','lovers','chariot','hermit','fortune']},tt:{guardians:[],gates:[],monad:false}},o),HO:hoMax?{request:{maxFloor:hoMax}}:null},maxBi));
          return {open4:st({},92,3),monad204:st({tt:{monad:true,gates:[],guardians:[]}},204,6),monad230:st({floorsMapped:['f212'],tt:{monad:true,gates:[],guardians:[]}},230,6),
            notFound:st({},254,6),practice:st({floorsMapped:['f242'],tt:{monad:true,gates:[],guardians:[]}},0,Infinity),fresh:ids(T.gates({save:{floorsMapped:[],reached:null,ops:{cleared:[]},tt:{gates:[],guardians:[]}},HO:null}))}})()""")
        ok(g['open4'] == ['f2', 'f17', 'f37', 'f65'], g)
        ok(g['monad204'][-1] == 'f176' and g['monad230'][-2:] == ['f176', 'f208'] and 'f176' not in g['notFound'] and g['practice'][-3:] == ['f176', 'f208', 'f234'] and g['fresh'] == ['f2'], g)
        # Stairs past mapped landings: 37F → 41F with 39F mapped; never past an unbeaten superboss's floor.
        p.eval("FemcBattle.save.floorsMapped=['f39']")
        climb('f37')
        snap(); p.eval("(()=>{const m=FemcBattle.run.map,st=FemcTartarusMap.get(m,m.stairs),n=FemcTartarusMap.get(m,st.links[0]);n.cleared=true;n.type='empty';m.pos=n.id;FemcTartarusMap.visit(m,n.id);FemcBattle.ctl.go(st.id)})()")
        room_open('stairs')
        ok(p.eval("document.querySelector('.bt-room [data-v=skip]').textContent").startswith('Climb on to 41F'), 'skip offered')
        click('skip'); settle("FemcBattle.ctl?.kind==='map'", 30)
        ok(p.eval("FEMC_BATTLE_DATA.floors[FemcBattle.run.fi].id") == 'f41' and p.eval("FemcBattle.marks['stairs-skip']") == 1, 'skipped to 41F')
        sk = p.eval(r"""(()=>{const T=FemcTartarus,F=FEMC_BATTLE_DATA.floors,i=id=>F.findIndex(f=>f.id===id),c=(m,sup)=>({save:{floorsMapped:m,tt:{supers:sup},ops:{cleared:['fortune']}},HO:null});
          const at=k=>k<0?null:F[k].id;
          return [at(T.skipTo(c([],[]),i('f37'))),at(T.skipTo(c(['f39'],[]),i('f37'))),at(T.skipTo(c(['f47','f50'],[]),i('f45'))),at(T.skipTo(c(['f250'],[]),i('f246'))),at(T.skipTo(c(['f250'],['super_eclipse']),i('f246'))),
            at(T.skipTo({save:{floorsMapped:['f208'],tt:{supers:[]},ops:{cleared:['fortune']}},HO:{request:{maxFloor:204}}},i('f204')))]})()""")
        ok(sk == [None, 'f41', 'f48', None, 'f254', None], sk)
        ok(not p.console(), p.console())
        results['teleport'] = {'practice list': lst, 'rules': g, 'skips': sk}
        print('teleport', json.dumps(results['teleport']), flush=True)

    # ── Old saves ──────────────────────────────────────────────────────────────────────────────────────────────────
    if want('migration'):
        practice()
        r = p.eval(r"""(()=>{const BS=FemcBattleSave,base=JSON.parse(JSON.stringify(FemcBattle.save));delete base.tv;delete base.tt;
          const mk=o=>BS.fromRaw(Object.assign(JSON.parse(JSON.stringify(base)),o));
          const out={};[['f2','f6'],['f4','f11'],['f6','f16'],['f9','f23'],['f12','f29'],['f15','f36'],['f18','f45'],['f24','f64'],['f30','f83'],['f39','f109'],['f45','f127'],['f57','f163'],['f60','f172']].forEach(([a,b])=>{out[a]=[mk({reached:a}).reached,b]});
          const v2=mk({v:2,reached:2,clears:0}), mapped=mk({reached:'f9',floorsMapped:['f2','f4','f9','f60']}).floorsMapped;
          const fresh=BS.fromRaw(Object.assign(JSON.parse(JSON.stringify(FemcBattle.save)),{reached:'f23',tv:2}));
          return {out,v2:v2.reached,mapped,fresh:fresh.reached,tt:fresh.tt,moved:BS.moveFloor('f60')}})()""")
        ok(all(v[0] == v[1] for v in r['out'].values()), r['out'])
        ok(r['v2'] == 'f16' and r['mapped'] == ['f6', 'f11', 'f23', 'f172'] and r['fresh'] == 'f23', r)
        # Phase 1: tt.gates / tt.supers default to empty and are cleaned; an access point on a landing loads as it is.
        m2 = p.eval(r"""(()=>{const BS=FemcBattleSave,s=JSON.parse(JSON.stringify(FemcBattle.save));
          const a=BS.fromRaw(Object.assign({},s,{tv:2,tt:{guardians:['f11'],monad:true,secrets:[],puzzles:1,rares:0}})).tt;
          const b=BS.fromRaw(Object.assign({},s,{tv:2,reached:'f39',tt:{guardians:[],gates:['f17','f18','nope',3],supers:['super_abbess','guard_thebel',null]}}));
          return {a:[a.gates,a.supers,a.guardians,a.monad],b:[b.reached,b.tt.gates,b.tt.supers],ng:BS.carry(b).tt}})()""")
        ok(m2['a'] == [[], [], ['f11'], True] and m2['b'] == ['f39', ['f17'], ['super_abbess']] and m2['ng']['gates'] == [] and m2['ng']['supers'] == [], m2)
        # A story slot whose battle save is from before: the night's hub offers the same game floor.
        p.goto('femc-game.html?speed=10&seed=3')
        p.eval("""(()=>{FemcGame.newGame();const S=FemcGame.S;S.phase='play';S.day=FemcGame.dayOf('6/20');S.slot='evening';S.unlocked.tartarus=true;S.flags.armband=true;
          S.tartarus.bosses=['priestess'];S.tartarus.maxFloor=29;const b=FemcGame.ensureBattleSave();b.lvl=30;b.reached='f12';delete b.tv;delete b.tt;b.ops={cleared:['priestess']};FemcGame.save();})()""")
        p.goto('femc-game.html?speed=10&seed=3')
        p.eval("FemcGame.makeHandoff('tartarus',{party:['solar']});FemcGame.save()")
        p.battle()
        settle("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'", 60)
        cont = p.eval("document.querySelector('[data-go=cont] span')?.textContent || ''")
        ok('29F' in cont, cont)
        results['migration'] = {'floors': r['out'], 'v2 number save': r['v2'], 'sketch list': r['mapped'], 'story slot': cont}
        print('migration', json.dumps(results['migration']), flush=True)
        p.top()

    # ── A real Tartarus night ─────────────────────────────────────────────────────────────────────────────────────
    if want('night'):
        p.goto('femc-game.html?speed=10&seed=5')
        p.eval("""(()=>{FemcGame.newGame();const S=FemcGame.S;S.phase='play';S.day=FemcGame.dayOf('6/20');S.slot='evening';S.unlocked.tartarus=true;S.flags.armband=true;
          S.tartarus.bosses=['magician','priestess','empress'];S.inventory={medicine:3};const b=FemcGame.ensureBattleSave();b.lvl=32;b.exp=0;Object.values(b.mem).forEach(m=>m.lvl=31);
          b.ops={cleared:['priestess','empress']};FEMC_BATTLE_DATA.party.forEach(m=>{b.evo[m.id]=true});S.battleSave=b;FemcGame.save();})()""")
        pl0 = p.eval("FemcGacha.gs().plumes")
        p.eval("document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.evening()")
        p.eval("document.querySelector('[data-n=tartarus]').click()")
        p.wait("!!document.querySelector('.g-tt [data-go]')")
        p.eval("document.querySelector('.g-tt [data-go]').click()")
        p.battle()
        settle("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'", 60)
        entry = p.eval("document.querySelector('[data-go=run] span').textContent")
        ok('37F' in entry, entry)
        p.eval("window.__ttArrive='feather'")  # the blue feather at the top of the first stairs: a Velvet Plume (story only)
        p.eval("document.querySelector('[data-go=run]').click()")
        settle("(FemcBattle.marks['room-arrive']||0)>0", 30)
        p.eval("window.__ttArrive=null")
        ok(p.eval("FemcBattle.marks['event-feather']") == 1, 'feather')
        p.eval("document.querySelector('.bt-room [data-v]').click()"); time.sleep(0.3); p.eval("document.querySelector('.bt-room [data-v]')?.click()")
        p.wait("FemcBattle.ctl?.kind==='map'", 30)
        ok(p.eval("FemcBattle.hs.plumes") >= 1, ('the feather’s plume', p.eval("FemcBattle.hs.plumes")))
        floors, seen_rooms, t0 = set(), {}, time.time()
        # Climb: unvisited rooms first, the stairs when there; take every room the way a player would (first choice).
        while time.time() - t0 < 240 and len(floors) < 3:
            sc = p.eval("FemcBattle.screen()")
            if p.eval("FemcBattle.ctl?.kind==='map'"):
                floors.add(p.eval("FEMC_BATTLE_DATA.floors[FemcBattle.run.fi].id"))
                p.eval("""(()=>{const c=FemcBattle.ctl,o=c.opts;const sc=n=>(n.type==='stairs'?(FemcBattle.run.map.nodes.filter(x=>!x.visited&&x.known).length<3?100:5):0)+(n.visited?0:20)+(n.type==='guardian'?-30:0)+n.layer;const b=o.slice().sort((a,b)=>sc(b)-sc(a))[0];c.go(b.id)})()""")
            elif sc == 'room':
                name = p.eval("Object.keys(FemcBattle.marks).filter(k=>k.startsWith('room-')).slice(-1)[0]")
                seen_rooms[name] = seen_rooms.get(name, 0) + 1
                if p.eval("!!document.querySelector('.bt-room.stairs [data-v=up]')"): p.eval("document.querySelector('.bt-room [data-v=up]').click()")
                elif p.eval("!!document.querySelector('.bt-room.access')"): p.eval("document.querySelector('.bt-room [data-v=stay]').click()")
                else: p.eval("(document.querySelector('.bt-room .bt-btn.pink:not(:disabled)')||document.querySelector('.bt-room .bt-btn:not(:disabled)')).click()")
            elif sc == 'room' or p.eval("FemcBattle.ctl?.kind==='buttons' && FemcBattle.ctl.puzzle"):
                p.eval("document.querySelector('[data-pz=quit]')?.click()")
            else: p.eval(DRIVE)
            time.sleep(0.04)
        ok(len(floors) >= 3 and 'f39' in floors, ('climbed, a landing on the way', floors))
        # Velvet Plumes found tonight travel back with the result.
        p.eval("FemcBattle.hs.plumes=(FemcBattle.hs.plumes||0)+2")
        best = p.eval("FemcBattle.hs.floor")
        p.eval("FemcBattle.hoFinish('win')")
        res = p.eval("window.__hoResult")
        p.top(); p.wait("!document.querySelector('.g-dh') && !!document.querySelector('.g-results')", 30)
        S = p.eval("({f:FemcGame.S.tartarus.maxFloor,n:FemcGame.S.tartarus.nights,pl:FemcGacha.gs().plumes})")
        ok(res['floorsReached'] == best >= 41 and S['f'] == best and S['n'] == 1 and S['pl'] - pl0 >= 1 + res.get('plumes', 0) and res.get('plumes', 0) >= 3, (res, S, pl0))
        p.eval("document.querySelector('.g-results-ov [data-close]').click()")
        results['night'] = {'entered at': entry, 'floors': sorted(floors), 'rooms': seen_rooms, 'best floor': S['f'], 'plumes': [pl0, S['pl']], 'result plumes': res.get('plumes')}
        print('night', json.dumps(results['night']), flush=True)

    # ── Screenshots ───────────────────────────────────────────────────────────────────────────────────────────────
    if want('shots'):
        for (w, h, tag) in [(1440, 900, 'desktop'), (375, 812, 'phone')]:
            view(w, h)
            practice(extra="s.party=['akihiko','yukari','junpei']")
            climb('f69', ['vault', 'puzzle', 'rare'], "window.__ttReveal=true;window.__ttCrack='loot'")
            p.eval("window.__ttReveal=false;window.__ttCrack=null")
            # A party line on the map (Akihiko's), shown when the map draws again (back from the items panel).
            p.eval("FemcBattle.tt().line(['This floor has a decent incline. Good for sprints.','serious','akihiko']);(FemcBattle.ctl.back(), 0)")
            room_open('items'); click('back'); settle("FemcBattle.ctl?.kind==='map'")
            ok(p.eval("document.querySelector('.bt-map-nav.mate b').textContent") == 'Akihiko', 'party line on the map')
            shot(f'map-{tag}')
            for kind in ['slide', 'switch', 'lantern']:
                climb('f80', ['puzzle'], "window.__ttPuzzle=%s" % json.dumps(kind))
                enter('puzzle'); room_open('puzzle'); click('try')
                p.wait("FemcTartarus.state && FemcTartarus.state.phase==='input'", 20)
                if kind == 'lantern': p.eval("document.querySelector('.tt-lamp').classList.add('lit')")
                shot(f'puzzle-{kind}-{tag}')
                p.eval("document.querySelector('[data-pz=quit]').click()"); settle("FemcBattle.ctl?.kind==='map'")
            climb('f80')
            snap(); p.eval("(()=>{const m=FemcBattle.run.map,g=m.nodes.find(n=>n.type==='guardian');const n=FemcTartarusMap.get(m,g.links.find(id=>FemcTartarusMap.get(m,id).type!=='stairs'));m.pos=n.id;FemcTartarusMap.visit(m,n.id);FemcBattle.ctl.go(g.id)})()")
            room_open('guardian'); shot(f'guardian-room-{tag}'); click('fight')
            p.wait("FemcBattle.screen()==='battle' && !!document.querySelector('.bt-enemy.guardian')", 30)
            p.wait("FemcBattle.ctl?.kind==='menu'", 30); shot(f'guardian-battle-{tag}')
            p.eval("FemcBattle.freeze()"); p.eval("FemcBattle.unfreeze()")
            climb('f69', ['rare'])
            enter('rare'); p.wait("FemcBattle.ctl?.kind==='menu' && !!document.querySelector('.bt-enemy.golden')", 30); shot(f'golden-{tag}')
            ok(p.eval("document.documentElement.scrollWidth <= innerWidth + 1"), f'sideways scroll at {tag}')
        ok(not p.console(), p.console())
        results['shots'] = str(OUT)
        print('shots', str(OUT), flush=True)
    print('ALL OK', json.dumps(results)[:600])
finally:
    p.close()
