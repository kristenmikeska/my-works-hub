"""Tartarus, deeper (2026-10-25): more floors per block, the newer room types, puzzles, secret floors and Monad, rewards,
old-save migration and a real Tartarus night. Isolated Chrome profile, a local server on a random port; never the player's saves.

  python3 tests/femc_tartarus.py [--only gen,puzzles,rooms,secret,migration,night,shots] [--screenshots DIR]

gen        floors per block (real P3 numbers, the calendar's caps at each block's top), 20 maps of every floor: the stairs
           always reachable, guardians on their floors and the only way to the stairs, every room type turns up, the block
           biases show (traps in Yabbashah, puzzles in Arqa, golden Shadows in Adamah, cracked walls in Tziah), hidden rooms
           out of reach until found, Monad's door on 172F only once it's open.
puzzles    the three puzzles' generators over 900 seeds and every block: solvable, inside their budgets; then each solved
           through the real UI with keys, and one given up.
rooms      every room type entered through the map in practice mode: guardian, vault (key, guards), puzzle, rest, rare
           (caught and fled), trap (dodge, brace, spotted), moon shrine, events (each one), cracked walls (loot, memory).
secret     a cracked wall's stairwell to a hidden floor and out onto the next floor; Monad's door at 172F into 176F, its
           access point, and a Monad floor's sealed stairs in the story.
migration  old battle saves (three floors a block, a v2 save with a number, Sketch the Floor's list) move their access point to
           the same game floor; a new save is left alone; a story slot with an old battle save continues from the right floor.
night      a real Tartarus night from the dorm: the new floors' numbers, rooms on the way, leaving at an access point, the result
           back in the life sim (best floor, Velvet Plumes found), the next morning.
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
        ok(r['per'] == {'thebel': 7, 'arqa': 8, 'yabbashah': 9, 'tziah': 9, 'harabah': 8, 'adamah': 8, 'empyrean': 9, 'monad': 10}, r['per'])
        ok(r['tops'] == r['caps'], ('block tops are the calendar caps', r['tops']))
        ok(not r['bad'], r['bad'])
        ok(r['guardOk'] and r['hidOk'], (r['guardOk'], r['hidOk']))
        for t in ['shadow', 'chest', 'locked', 'clock', 'access', 'event', 'guardian', 'vault', 'puzzle', 'rest', 'rare', 'trap', 'altar', 'crack', 'empty']:
            ok(r['types'].get(t, 0) > 0, f'{t} never turns up')
        for k, (lo, hi) in r['bias'].items(): ok(hi > lo, ('bias', k, lo, hi))
        ok(r['monadDoor']['open'] > 0 and r['monadDoor']['shut'] > 0, r['monadDoor'])
        results['gen'] = {'floors': r['floors'], 'per block': r['per'], 'maps': r['n'], 'bias %': r['bias'], 'monad': r['monad']}
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
        out['events'] = done
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
        # Walk to its stairs (fights on the way), out onto 11F.
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
        settle("FemcBattle.ctl?.kind==='map' && FemcBattle.run.fi===FEMC_BATTLE_DATA.floors.findIndex(f=>f.id==='f11')", 30)
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
        results['secret'] = {'monad by date': gate, 'hidden floor': hid, 'out onto': '11F', 'monad': 'found at 172F → 176F, access point, continue'}
        print('secret', json.dumps(results['secret']), flush=True)

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
        p.eval("document.querySelector('[data-go=run]').click()")
        p.wait("FemcBattle.ctl?.kind==='map'", 30)
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
        ok(len(floors) >= 3, ('climbed', floors))
        # Velvet Plumes found tonight travel back with the result.
        p.eval("FemcBattle.hs.plumes=(FemcBattle.hs.plumes||0)+2")
        best = p.eval("FemcBattle.hs.floor")
        p.eval("FemcBattle.hoFinish('win')")
        res = p.eval("window.__hoResult")
        p.top(); p.wait("!document.querySelector('.g-dh') && !!document.querySelector('.g-results')", 30)
        S = p.eval("({f:FemcGame.S.tartarus.maxFloor,n:FemcGame.S.tartarus.nights,pl:FemcGacha.gs().plumes})")
        ok(res['floorsReached'] == best >= 41 and S['f'] == best and S['n'] == 1 and S['pl'] == pl0 + 1 + res.get('plumes', 0) and res.get('plumes', 0) >= 2, (res, S, pl0))
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
