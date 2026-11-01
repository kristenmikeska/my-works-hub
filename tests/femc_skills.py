"""The skill system, played for real in headless Chrome (femc-game.html, isolated profile, localhost; no player saves).

Run: python3 tests/femc_skills.py [--only menu,party,late,library,sun,fight,passives,rush,flash,migrate,practice,shots] [--screenshots DIR]

Party section (since 2026-10-31, the orbits): node counts and ring gates for all twelve, points, the menu's orbit (click, keys, build
chips, ring labels, MAX, respec), an old save's migration, every Solar-ray hook and crown in fights, the party caps, Solar against a
maxed member at Lv 99, a real Rush frame, practice's orbit screen, and all twelve orbits at 1280x850 and 375x812.

Covers: Haenim's sun (97 nodes on six rays, the corona and the crown, plus 51 late-game ones: 148 drawn; spending, in-place upgrades, choice nodes, hidden memory
nodes, hybrids, keystones -> forms, Unveiled's gating; mouse, keyboard and phone: tap, drag, wheel, pinch, + - and Fit), Solar's
skill list (every learned skill kept, no "forget which?" for her, free swapping into her eight slots outside battle, the swap
reaching a real fight), the Velvet Room respec, the party orbits (see below), each
new skill's effect in a real fight driven through the battle menus, the new passives in the engine (crit, speed order, counters,
regen, auto-buffs, follow-ups, first-skill discount, Corona, Guardian Bell, SP on weakness, Momentum, longer buffs and ailments)
and on a real battle frame, buff stacking and its cap, Rush's decisions plus a real Rush fight, no finish card after a won
fight, migration of the first tree and of the five-branch tree (nothing lost, forgotten skills back in her list), practice mode's
sun, zero console errors, and Skills-tab screenshots at 1000x486, 375x812 and 1440x900."""
import argparse, base64, json, pathlib, time
from femc_browser import Page

URL = 'femc-game.html?speed=10&seed=7'
ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/femc-skills-shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
results = {}


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


# A playthrough at a fixed point with every fighter available and a battle save ready to spend.
SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf('8/3'); S.slot='evening';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=60000;
  // The story links (all ranks forced) at the rank their dates allow: none due, and no MAX bond perks out of season.
  for (const l of Object.values(G.LINKS)) if (l.forced?.length) G.progress(l.id).rank=l.ranks.filter(r=>r&&r.after&&G.dayOf(r.after)<=S.day).length;
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
  b.lvl=%(lvl)d; b.pts=%(pts)d; b.party=['akihiko','yukari','junpei']; b.awakened=true;
  D.party.forEach(m=>{ if(m.id!=='solar') b.mem[m.id]={lvl:%(lvl)d,exp:0}; });
  FemcBattleEngine.evolutionsDue(b,id=>FemcBattleEngine.lvlOf(b,id)).forEach(e=>{b.evo[e.mid]=true});
  S.battleSave=FemcBattleSave.normalize(b); G.save(); FemcGameUI.evening();
  return true;
})()"""


def setup(p, lvl=40, pts=200):
    p.goto(URL)
    # This machine's Chrome can open its own chrome://settings/help tab on a raw Enter (an update waiting), which leaves the
    # game page hidden: no frames, so a later mouseWheel is never acknowledged. Keep the game page in front.
    p.ws.call('Page.bringToFront')
    p.eval(SETUP % {'lvl': lvl, 'pts': pts})


def menu(p, tab='skills', o=None):
    p.eval("FemcMenu.isOpen()&&FemcMenu.close()")
    p.wait("!document.querySelector('.g-fm-ov')")
    p.eval('FemcMenu.open(%s%s)' % (json.dumps(tab), (',' + json.dumps(o)) if o else ''))
    p.wait("!!document.querySelector('.g-fm-ov:not(.out) .g-fm-body')")


def click(p, sel):
    p.wait('!!document.querySelector(%s)' % json.dumps(sel))
    p.eval('document.querySelector(%s).click()' % json.dumps(sel))


B = 'FemcGame.S.battleSave'
KIT = "FemcBattleEngine.kitFor(%s,FemcGame.S.battleSave)"


def kit(p, mid='solar'):
    return p.eval((KIT % json.dumps(mid)) + '.slots')


def lib(p):
    return p.eval((KIT % '"solar"') + '.library')


def state(p, nid):
    return p.eval("document.querySelector('[data-hn=%s]').className.split(' ')[1]" % json.dumps(nid))


def buy(p, nid, forget=None):
    """Select a node, then click it again to buy (the real menu flow). Handles a party member's forget prompt with `forget`."""
    if not p.eval("document.querySelector('[data-hn=%s]').classList.contains('sel')" % json.dumps(nid)):
        click(p, '[data-hn="%s"]' % nid)
    click(p, '[data-hn="%s"]' % nid)
    if p.eval("!!document.querySelector('[data-forget]')"):
        ok(forget, 'unexpected forget prompt after ' + nid)
        click(p, '[data-forget="%s"]' % forget)   # arm
        ok(p.eval("document.querySelector('[data-forget=%s]').classList.contains('armed')" % json.dumps(forget)), 'two-step forget')
        click(p, '[data-forget="%s"]' % forget)   # confirm
    else:
        ok(not forget, 'expected a forget prompt after ' + nid)


def key(p, k):
    code = {'ArrowUp': 38, 'ArrowDown': 40, 'ArrowLeft': 37, 'ArrowRight': 39, 'Enter': 13}[k]
    for t in ('rawKeyDown', 'keyUp'):
        p.ws.call('Input.dispatchKeyEvent', {'type': t, 'key': k, 'code': k, 'windowsVirtualKeyCode': code, 'nativeVirtualKeyCode': code})
    if k == 'Enter':
        p.ws.call('Input.dispatchKeyEvent', {'type': 'char', 'text': '\r', 'key': 'Enter', 'code': 'Enter', 'windowsVirtualKeyCode': 13})
    time.sleep(0.05)


def mouse(p, kind, x, y, buttons=0, **kw):
    p.ws.call('Input.dispatchMouseEvent', dict({'type': kind, 'x': x, 'y': y, 'button': 'left' if kind != 'mouseMoved' or buttons else 'none', 'buttons': buttons, 'clickCount': 1 if kind != 'mouseMoved' else 0}, **kw))


def center_of(p, sel):
    return p.eval("(()=>{const r=document.querySelector(%s).getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2,r.width,r.height]})()" % json.dumps(sel))


def zoom(p):
    return float(p.eval("document.querySelector('.sun-vp').dataset.zoom"))


def shot(p, name):
    p.eval("new Promise(r=>setTimeout(r,350))")
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def no_scroll(p):
    ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), 'sideways scroll')


p = Page()
try:
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 850, 'deviceScaleFactor': 1, 'mobile': False})
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})

    # ── Haenim's sun in the field menu: spending, the skill list, upgrades, choices, memories, hybrids, keystones, Unveiled, respec ──
    if want('menu'):
        setup(p, lvl=20, pts=200)
        menu(p)
        ok(p.eval("document.querySelectorAll('.g-sunvp .sun-stage [data-hn]').length") == 148, 'every node of the sun is drawn')
        ok(p.eval("document.querySelectorAll('.sun-raylbl').length") == 6 and p.eval("document.querySelectorAll('[data-ray]').length") == 8, 'six rays (and the Eclipse and Epilogues chips)')
        ok(p.eval("!!document.querySelector('[data-hn=unveiled].crown') && !!document.querySelector('[data-hn=sun1].heart')"), 'Lady Sun at the core, Unveiled as the crown')
        ok(p.eval("['bell-key','jade-key','star-key','st-key','tr-key','gd-key'].every(id=>document.querySelector(`[data-hn=${id}]`).classList.contains('key'))"), 'a keystone at every tip')
        start = kit(p)
        ok(start == ['agilao', 'daybreak', 'golden_rope', 'diarama'], start)
        # Locked before the core, then open; the keyboard walks the sun and Enter buys.
        ok(state(p, 'bell1') == 'lock', 'ray roots need Lady Sun')
        time.sleep(0.2)  # the menu's own opening focus lands first
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tab=skills]').focus()")
        key(p, 'ArrowDown')
        ok(p.eval("document.activeElement.classList.contains('g-sn')"), 'Down from the tabs (keys or a pad) enters the sun')
        p.eval("document.querySelector('[data-hn=sun1]').focus()")
        key(p, 'Enter'); key(p, 'Enter')
        ok('sun1' in p.eval(B + '.nodes'), 'Enter bought the selected node')
        ok(state(p, 'bell1') == 'avail' and state(p, 'st1') == 'avail', 'the core opens every ray')
        p.eval("document.querySelector('[data-hn=sun1]').focus()")
        key(p, 'ArrowLeft')
        ok(p.eval("document.querySelector('.g-sn.sel').dataset.hn") == 'bell1', ('Left from the core: the Healer ray (west)', p.eval("document.querySelector('.g-sn.sel').dataset.hn")))
        key(p, 'ArrowLeft')
        ok(p.eval("document.querySelector('.g-sn.sel').dataset.hn") == 'bell2', 'arrows walk out along a ray')
        key(p, 'ArrowRight'); key(p, 'ArrowRight'); key(p, 'ArrowRight')
        ok(p.eval("document.querySelector('.g-sn.sel').dataset.hn") == 'st1', ('across the core to the Striker ray (east)', p.eval("document.querySelector('.g-sn.sel').dataset.hn")))
        ok(p.eval("document.activeElement.dataset.hn") == 'st1', 'focus follows the selection')
        # The ray chips jump to a ray.
        click(p, '[data-ray=guard]')
        ok(p.eval("document.querySelector('.g-sn.sel').dataset.hn") == 'veil1' and 'Guard' in p.eval("document.querySelector('.g-sk-detail .g-kicker').textContent"), 'ray chip')
        # In-place upgrades on the corona: Morning Glory takes Daybreak's slot.
        buy(p, 'sun2')
        ok(kit(p)[1] == 'morning_glory' and len(kit(p)) == 4, kit(p))
        buy(p, 'sun3')
        ok(kit(p)[2] == 'golden_tether', kit(p))
        # Fill to eight: Sun Thrust, Kunai Flick, Bufu, Matarukaja.
        for n in ['bell1', 'bell2', 'st1', 'st2', 'tr1', 'bell3', 'jade1', 'jade2', 'star1', 'star2']:
            buy(p, n)
        k8 = kit(p)
        ok(len(k8) == 8 and k8[4:] == ['sun_thrust', 'kunai_flick', 'bufu', 'matarukaja'], k8)
        # A ninth (Bewitch): Solar never forgets. It waits in her skill list, marked new.
        buy(p, 'tr2')
        ok(kit(p) == k8 and 'bewitch' in lib(p) and len(lib(p)) == 9, ('ninth into the list', kit(p), lib(p)))
        ok('bewitch' in p.eval((KIT % '"solar"') + '.fresh'), 'marked new')
        ok('slots are full' in p.eval("[...document.querySelectorAll('.g-toast')].map(x=>x.textContent).join('|')"), 'the toast says where it went')
        # Choice nodes on a ray.
        buy(p, 'st3'); buy(p, 'st4a')
        ok(state(p, 'st4b') == 'taken', 'choice node taken')
        click(p, '[data-hn="st4b"]'); click(p, '[data-hn="st4b"]')
        ok('st4b' not in p.eval(B + '.nodes'), 'a taken choice cannot be bought')
        # A hybrid needs a node on each side.
        ok(state(p, 'hy-st-tr1') == 'avail', 'Pounce: Follow Through + Bewitch')
        ok(state(p, 'hy-tr-mg1') == 'lock', 'Frostbite still needs Cold Focus')
        buy(p, 'hy-st-tr1')
        ok('Hybrid' in p.eval("document.querySelector('.g-sk-detail .g-kicker').textContent"), 'hybrid kicker')
        # Level gate: High Noon (Lv 30). Lv 26's Maragion goes to her list too: no prompt.
        ok(state(p, 'sun5') == 'lvl', 'High Noon waits for Lv 30')
        p.eval(B + '.lvl=40;FemcGame.saveQuiet()'); menu(p)
        ok(not p.eval("!!document.querySelector('.g-sk-forget')") and 'maragion' in lib(p) and 'maragion' not in kit(p), 'level-up skill joins her list')
        ok(state(p, 'sun5') == 'avail', ('level opens it', state(p, 'sun5')))
        # Hidden memory node: hidden until its fragment is found, then buyable (Kitsune Rush).
        ok(state(p, 'bell-m1') == 'hidden' and p.eval("document.querySelector('[data-hn=bell-m1] b').textContent") == '? ? ?', 'memory node hidden')
        for n in ['hl1', 'bell4a', 'bell5', 'bell6']:
            buy(p, n)
        ok('protective_suzu' in lib(p), lib(p))
        p.eval("FemcGame.S.fragments.push('runners-stadium');FemcGame.saveQuiet()")
        pts0 = p.eval(B + '.pts')
        menu(p)
        ok(p.eval(B + '.pts') == pts0 + 1, 'a fragment found in the life sim gives a skill point once')
        ok(state(p, 'bell-m1') == 'avail', 'the memory opened the node')
        buy(p, 'bell-m1')
        ok('kitsune_rush' in lib(p), lib(p))
        # Keystones -> forms; Unveiled needs all three and a full moon.
        buy(p, 'bell7'); buy(p, 'bell-key')
        ok('haenim-sunna' in p.eval(B + '.forms'), 'Sunna awakened')
        for n in ['mg1', 'jade4a', 'jade5', 'jade6', 'jade7', 'jade-key', 'sp1', 'star4b', 'star5', 'star6', 'star7', 'star-key']:
            buy(p, n)
        ok(all(f in p.eval(B + '.forms') for f in ['haenim-sunna', 'haenim-mazu', 'haenim-nike']), p.eval(B + '.forms'))
        ok(state(p, 'unveiled') == 'story', 'Unveiled waits for the story (a full moon)')
        p.eval(B + ".ops.cleared=['priestess'];FemcGame.saveQuiet()"); menu(p)
        ok(state(p, 'unveiled') == 'avail', 'Unveiled opens')
        buy(p, 'unveiled')
        ok('haenim-unveiled' in p.eval(B + '.forms'), 'Unveiled form')
        click(p, '[data-tab=personas]')
        ok(p.eval("[...document.querySelectorAll('.g-form')].filter(x=>!x.disabled).length") == 5, 'five forms on the Personas tab')
        click(p, '[data-form="haenim-sunna"]')
        ok(p.eval("FemcBattleEngine.kitFor('solar',FemcGame.S.battleSave).sig") == 'encore', 'the form signature has its own slot')
        click(p, '[data-tab=skills]')
        # Respec at the Velvet Room: refunds everything but the form keystones; forms stay; yen fee.
        before = kit(p)
        spent = p.eval("FemcBattleEngine.treeSpent(FemcGame.S.battleSave)")
        pts0, yen0 = p.eval(B + '.pts'), p.eval('FemcGame.S.yen')
        click(p, '[data-velvet=solar]')
        ok(p.eval("document.querySelector('.g-sk-velvet').textContent.includes('Elizabeth')"), 'the Velvet Room')
        click(p, '[data-velvet-ok]')
        fee = max(500, spent * 100)
        ok(p.eval(B + '.pts') == pts0 + spent and p.eval('FemcGame.S.yen') == yen0 - fee, (spent, fee))
        ok(sorted(p.eval(B + '.nodes')) == sorted(['bell-key', 'jade-key', 'star-key', 'unveiled']), p.eval(B + '.nodes'))
        ok(len(p.eval("FemcGame.S.battleSave.forms")) == 4 and state(p, 'bell-key') == 'own', 'forms stay awake')
        ok(state(p, 'sun1') == 'avail', 'the sun is open to spend again')
        # Learning a skill again puts it back among her slots, in its old order.
        ok('matarukaja' not in kit(p), kit(p))
        for n in ['sun1', 'star1', 'star2']:
            buy(p, n)
        roots = lambda ids: p.eval("%s.map(FemcBattleEngine.rootOf)" % json.dumps(ids))
        ok('matarukaja' in kit(p) and [x for x in roots(before) if x in roots(kit(p))] == roots(kit(p)), ('Matarukaja back in her slots, old order', kit(p), before))
        results['haenim sun'] = {'kit': kit(p), 'list': len(lib(p)), 'respec': {'points back': spent, 'fee': fee}, 'forms': p.eval(B + '.forms')}
        errs = p.console(); ok(not errs, errs)
        print('Haenim sun: keys/rays/upgrades/list/choices/hybrids/memory/keystones/Unveiled/respec OK', flush=True)

    # ── Party trees: the orbits (2026-10-31). Rules, the menu, migration, respec, every hook and crown in real fights, the caps,
    #    Solar still ahead of a maxed member, practice's screen and all twelve orbits at desktop and phone size ──
    if want('party'):
        setup(p, lvl=40, pts=0)
        # 1) Data and rules: ~40 nodes in 8 rings, every 2026-10-25 id kept, ring gates by level and rank, points at Lv 99.
        R = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,out={};
          const R15=['akihiko','shinjiro','jihoon','minji','jungwon','haechan'];
          const base=mid=>E.ptreeNodes(mid).filter(n=>!n.rad&&!n.crown2&&!n.duet); // the orbit itself (the late-game nodes: the 'late' section)
          Object.keys(D.ptrees).forEach(mid=>{const ns=base(mid),ids=ns.map(n=>n.id);
            out[mid]={n:ns.length,uniq:new Set(ids).size===ids.length,old:ids.filter(i=>/^[a-z]{2}\d+[ab]?$/.test(i)).length,cost:ns.reduce((s,n)=>s+n.cost,0),
              rings:[...new Set(ns.map(n=>n.ring))].sort().join(''),core:ns.filter(n=>n.ray==='core').length,builds:D.ptrees[mid].builds.map(b=>b.nodes.length).join('/'),
              solar:ns.filter(n=>n.ray==='solar').length,r15:ns.filter(n=>n.rank===15).length,want15:R15.includes(mid),crown:ns.filter(n=>n.crown).length,
              max:D.ptrees[mid].max.to};});
          const all=Object.values(D.ptrees).flatMap((t,i)=>base(Object.keys(D.ptrees)[i]).map(n=>n.id));
          out.globalUniq=new Set(all).size===all.length;
          out.pts={5:D.progression.partyPts(5),40:D.progression.partyPts(40),99:D.progression.partyPts(99)};
          // Gates on a fresh save: level then rank then path.
          const mk=(lvl,rank,own=[])=>({lvl:60,mem:{akihiko:{lvl}},ptree:{akihiko:own.slice()},ranks:{akihiko:rank},bonds:{},forgot:{},order:{},nodes:[],forms:[],evo:{},ops:{cleared:[]},gear:{eq:{},owned:{}}});
          const S=(s,id)=>E.ptreeState(s,'akihiko',id);
          out.g={core:S(mk(1,0),'ak1'),ring2lvl:S(mk(14,0,['ak1']),'ak-c1'),ring2path:S(mk(15,0),'ak-c1'),ring2:S(mk(15,0,['ak1']),'ak-c1'),
            ring3:S(mk(29,0,['ak1','ak-c1']),'ak4'),ring3ok:S(mk(30,0,['ak1','ak-c1']),'ak4'),
            ring5rank:S(mk(60,3,['ak1','ak-c1','ak4','ak-c2']),'ak-c3'),ring5:S(mk(60,4,['ak1','ak-c1','ak4','ak-c2']),'ak-c3'),
            ring8:S(mk(60,9,['ak1','ak-c1','ak4','ak-c2','ak-c3','ak-c4','ak11']),'ak-c6'),ring8ok:S(mk(60,10,['ak1','ak-c1','ak4','ak-c2','ak-c3','ak-c4','ak11']),'ak-c6'),
            crownLock:S(mk(60,10,['ak1']),'ak-crown'),crown:S(mk(60,10,['ak1','ak-c1','ak4','ak-c2','ak-c3','ak-c4','ak11','ak-c6']),'ak-crown'),
            r15:S(mk(60,10,['ak1','ak-s1','ak-s2','ak-s3','ak-s4','ak-s5']),'ak-s6'),
            r15ok:(()=>{const s=mk(60,10,['ak1','ak-s1','ak-s2','ak-s3','ak-s4','ak-s5']);s.bonds.akihiko=15;return E.ptreeState(s,'akihiko','ak-s6')})(),
            oldDeep:S(mk(60,7,['ak11']),'ak-c4'),
            why:E.ptreeWhy(mk(20,0,['ak1','ak-c1']),'akihiko','ak4'),whyRank:E.ptreeWhy(mk(60,3,['ak1','ak-c1','ak4','ak-c2']),'akihiko','ak-c3')};
          return out})()""")
        for mid, v in R.items():
            if mid in ('globalUniq', 'pts', 'g'): continue
            ok(v['n'] == (41 if v['want15'] else 40) and v['uniq'] and v['old'] == 13 and v['rings'] == '12345678' and v['core'] == 4 and v['builds'] == '10/10/10'
               and v['solar'] == (6 if v['want15'] else 5) and v['r15'] == (1 if v['want15'] else 0) and v['crown'] == 1 and 80 <= v['cost'] <= 92, (mid, v))
        ok(R['globalUniq'], 'node ids unique across trees')
        ok(55 <= R['pts']['99'] <= 60 and R['pts']['40'] == 24, R['pts'])
        ok(all(R[m]['cost'] - R['pts']['99'] >= 20 for m in R if m not in ('globalUniq', 'pts', 'g')), 'about two builds of three by Lv 99')
        g = R['g']
        ok(g['core'] == 'avail' and g['ring2lvl'] == 'lvl' and g['ring2path'] == 'lock' and g['ring2'] == 'avail' and g['ring3'] == 'lvl' and g['ring3ok'] == 'avail', ('level rings', g))
        ok(g['ring5rank'] == 'rank' and g['ring5'] == 'avail' and g['ring8'] == 'rank' and g['ring8ok'] == 'avail', ('rank rings', g))
        ok(g['crownLock'] == 'lock' and g['crown'] == 'avail' and g['r15'] == 'rank' and g['r15ok'] == 'avail' and g['oldDeep'] == 'avail', ('crown, rank 15, old saves keep buying', g))
        ok(g['why'] == 'Opens at Lv 30 (now 20).' and g['whyRank'] == 'Opens at link rank 4 (now 3).', (g['why'], g['whyRank']))
        print('Orbits: 40/41 nodes in 8 rings for all twelve, old ids kept, gates by level and rank, crown, rank 15, points OK', flush=True)

        # 2) The menu: the orbit drawn like the sun, ring labels, buying by click and keys, build chips, MAX, respec.
        p.eval("FemcGame.S.links.akihiko=Object.assign(FemcGame.progress('akihiko'),{rank:0});FemcGame.saveQuiet()")
        menu(p)
        click(p, '[data-sk=akihiko]')
        ok(p.eval("document.querySelectorAll('.g-orbit .sun-stage [data-hn]').length") == 46, 'Akihiko’s orbit: every node drawn (41 + three Radiance, the second crown and the duet)')
        ok(p.eval("!!document.querySelector('.g-orbit [data-hn=ak-crown].crown')"), 'the crown at the heart')
        labels = p.eval("[...document.querySelectorAll('.g-orbit .sun-ringlbl')].map(x=>x.textContent+(x.classList.contains('shut')?'!':''))")
        ok(labels == ['Lv 15', 'Lv 30', 'Lv 45!', 'Rank 4!', 'Rank 7!', 'Rank 9!', 'Rank 10!'], ('ring labels say what opens them', labels))
        ok(p.eval("document.querySelector('.g-sk-top').textContent.includes('24 points')"), p.eval("document.querySelector('.g-sk-top').textContent"))
        ok(state(p, 'ak1') == 'avail' and state(p, 'ak-c1') == 'lock' and state(p, 'ak-c2') == 'lvl' and state(p, 'ak-c3') == 'lvl', 'core open, the rest by path and level')
        buy(p, 'ak1')
        ok(state(p, 'ak-c1') == 'avail' and state(p, 'ak-s1') == 'avail', 'the core opens the rays')
        click(p, '[data-hn=ak-c2]')
        ok('Opens at Lv 45 (now 40).' in p.eval("document.querySelector('.g-sk-detail').textContent"), 'a level ring says what opens it')
        # Keyboard: arrows walk the orbit; Enter on the selected node buys it.
        p.eval("document.querySelector('[data-hn=ak1]').focus()")
        key(p, 'ArrowUp')
        moved = p.eval("document.querySelector('.g-sn.sel').dataset.hn")
        ok(moved != 'ak1', 'arrows move in the orbit')
        p.eval("document.querySelector('[data-pray=champion]').click()")
        ok(p.eval("document.querySelector('.g-sn.sel').dataset.hn") == 'ak-c1', 'a build chip jumps to its first buyable node')
        key(p, 'Enter'); key(p, 'Enter')
        ok('ak-c1' in p.eval(B + '.ptree.akihiko'), 'Enter bought it')
        for n in ['ak4', 'ak9', 'ak-o1', 'ak10']:
            buy(p, n)
        ok(state(p, 'ak-c3') == 'lvl', 'ring 5 waits for Lv 45')
        p.eval("FemcGame.S.battleSave.mem.akihiko.lvl=60;FemcGame.progress('akihiko').rank=4;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=akihiko]')
        ok(p.eval(B + '.ranks.akihiko') == 4, 'ranks copied into the battle save')
        ok(state(p, 'ak-c2') == 'avail', 'Lv 60 opens ring 4')
        buy(p, 'ak-c2')
        ok(state(p, 'ak-c3') == 'avail' and state(p, 'ak-c4') == 'rank', 'rank 4 opens ring 5, not ring 6')
        before = p.eval(KIT % '"akihiko"' + '.slots')
        for n in ['ak-t1', 'ak3']:
            buy(p, n)
        after = p.eval(KIT % '"akihiko"' + '.slots')
        zi = [s for s in before if s.startswith('zi')][0]
        ok(after[before.index(zi)] == 'ziodyne', (before, after))
        ok('sonic_punch' in p.eval(KIT % '"akihiko"' + '.slots') and not p.eval("document.querySelector('.g-pt-maxline').classList.contains('done')"), 'no MAX yet')
        p.eval("FemcGame.progress('akihiko').rank=10;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=akihiko]')
        k = p.eval(KIT % '"akihiko"' + '.slots')
        ok('sonic_blitz' in k and 'sonic_punch' not in k and p.eval("document.querySelector('.g-pt-maxline').classList.contains('done')"), ('MAX evolution unchanged', k))
        ok(p.eval("[...document.querySelectorAll('.g-orbit .sun-ringlbl.shut')].length") == 0, 'every ring open at Lv 60 and rank 10')
        # Points come from levels.
        p.eval("FemcGame.S.battleSave.mem.yukari.lvl=5;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=yukari]')
        ok(p.eval("FemcBattleEngine.ptreePts(FemcGame.S.battleSave,'yukari')") == 3, 'Lv 5: three points')
        buy(p, 'yu1'); buy(p, 'yu7'); buy(p, 'yu2')
        click(p, '[data-hn=yu8]')
        ok(p.eval("document.querySelector('[data-pt-buy]').disabled"), 'no points left')
        # Respec at the Velvet Room (yen per point, as before); the MAX evolution is the link's, not a node.
        click(p, '[data-sk=akihiko]')
        spent = p.eval("FemcBattleEngine.ptreeSpent(FemcGame.S.battleSave,'akihiko')")
        yen0 = p.eval('FemcGame.S.yen')
        click(p, '[data-velvet=akihiko]'); click(p, '[data-velvet-ok]')
        ok(p.eval(B + '.ptree.akihiko') in (None, []) and p.eval('FemcGame.S.yen') == yen0 - max(500, spent * 150), ('party respec', spent))
        ok('sonic_blitz' in p.eval(KIT % '"akihiko"' + '.slots'), 'MAX stays after a respec')
        p.eval("FemcMenu.close()"); p.wait("!document.querySelector('.g-fm-ov')")
        p.eval("FemcMenu.open('skills',{inBattle:true})"); p.wait("!!document.querySelector('[data-velvet]')")
        ok(p.eval("document.querySelector('[data-velvet]').disabled"), 'no respec in the Dark Hour')
        errs = p.console(); ok(not errs, errs)
        print('Orbits in the menu: drawn, ring labels, click and keys, build chips, level / rank rings, MAX, points, respec OK', flush=True)

        # 3) An old save (treeV 3): every party node and spent point carries over, once.
        OLD = """{v:4,treeV:3,lvl:44,exp:0,pts:3,nodes:['sun1'],forms:[],form:'haenim',ops:{cleared:[]},ptree:{akihiko:['ak1','ak2','ak3','ak6','ak11'],yukari:['yu1','yu5a','yu12']},
          ranks:{akihiko:7,yukari:9},party:['akihiko','yukari'],mem:{akihiko:{lvl:40,exp:0},yukari:{lvl:41,exp:0}},gear:{owned:{},eq:{}}}"""
        mv = p.eval("""(()=>{const G=FemcGame,E=FemcBattleEngine;G.S.battleSave=%s;const b=G.ensureBattleSave();G.save();
          return {treeV:b.treeV,from:b.ptreeFrom,ptree:b.ptree,akSpent:E.ptreeSpent(b,'akihiko'),yuSpent:E.ptreeSpent(b,'yukari'),akPts:E.ptreePts(b,'akihiko'),
            own:['ak1','ak2','ak3','ak6','ak11'].every(id=>E.ptreeState(b,'akihiko',id)==='own'),kit:E.kitFor('akihiko',b).slots,pts:b.pts,nodes:b.nodes}})()""" % OLD)
        ok(mv['treeV'] == 4 and mv['from'] == 3 and mv['ptree'] == {'akihiko': ['ak1', 'ak2', 'ak3', 'ak6', 'ak11'], 'yukari': ['yu1', 'yu5a', 'yu12']} and mv['own'], ('nodes kept', mv))
        ok(mv['akSpent'] == 1 + 1 + 1 + 2 + 3 and mv['yuSpent'] == 1 + 3 + 3 and mv['akPts'] == 24 - 8 and mv['pts'] == 3 and mv['nodes'] == ['sun1'], ('spent points carry over', mv))
        ok('ziodyne' in mv['kit'] and 'corkscrew' in mv['kit'], mv['kit'])
        p.goto(URL)
        again = p.eval("(()=>{const b=FemcGame.S.battleSave;return {treeV:b.treeV,ptree:b.ptree}})()")
        ok(again == {'treeV': 4, 'ptree': mv['ptree']}, ('reload: nothing moves twice', again))
        results['party migration'] = {k: mv[k] for k in ('treeV', 'from', 'akSpent', 'akPts')}
        print('Orbits: an old save keeps its nodes and spent points (treeV 4), once OK', flush=True)

        # 4) Every hook and crown in fights (the engine on this page, the real units from a save), the caps, no chains.
        setup(p, lvl=70, pts=0)
        H = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,save=JSON.parse(JSON.stringify(FemcGame.S.battleSave)),out={};
          Object.keys(D.ptrees).forEach(mid=>{save.mem[mid]={lvl:99,exp:0};save.ranks[mid]=10;save.bonds=save.bonds||{};save.bonds[mid]=15;});
          const give=(mid,ids)=>{save.ptree[mid]=ids;};
          const all=mid=>E.ptreeNodes(mid).filter(n=>!n.rad&&!n.crown2&&!n.duet).map(n=>n.id), ray=(mid,r)=>E.ptreeNodes(mid).filter(n=>n.ray===r||n.ray==='core').map(n=>n.id);
          const fight=(ids,foes,seed,f)=>{const units=ids.map(id=>E.buildUnit(id,save));const b=E.create({party:units,enemies:foes,rand:E.rng(seed),known:{}});if(f)f(b);return b};
          const has=(ev,lbl)=>ev.some(e=>e.t==='status'&&e.label===lbl);
          // Caps: a whole orbit stays under the party's caps.
          Object.keys(D.ptrees).forEach(mid=>give(mid,all(mid)));
          out.caps=Object.keys(D.ptrees).map(mid=>{const f=E.ptreeFx(save,mid);return {mid,crit:f.crit,critAdd:f.critAdd,followUp:f.followUp,counter:f.counter,evade:f.evade,physUp:f.physUp,magicUp:f.magicUp,assist:f.assist,cover:f.cover,baton:f.baton,kindle:f.kindle,resonance:f.resonance,boost:Math.max(1,...Object.values(f.boost))}});
          // Assist: Solar hits a weakness, Akihiko follows in (and never chains: one assist per member per action).
          let n=0,chain=0;for(let s=1;s<=60;s++){const b=fight(['solar','akihiko'],['pesce'],s,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.aff={agi:'weak',fire:'weak'};});
            const ev=b.act((b.S.cur=b.party()[0],{type:'skill',skill:b.party()[0].skills.find(id=>D.skills[id].el==='fire'&&D.skills[id].target==='one')||'agilao',target:b.foes()[0].id}));
            const a=ev.filter(e=>e.t==='status'&&e.label==='ASSIST').length;if(a)n++;if(a>1)chain++;}
          out.assist={fights:n,chains:chain};
          // Mitsuru's assist answers a frozen Shadow; Minji's a weakness she scanned.
          n=0;for(let s=1;s<=60;s++){const b=fight(['solar','mitsuru'],['pesce'],s,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.ail={id:'freeze',t:2};});b.S.cur=b.party()[0];if(has(b.act({type:'attack',target:b.foes()[0].id}),'ASSIST'))n++;}
          out.assistAil=n;
          // Kindling: Yukari's hits fill Solar's gauge.
          out.kindle={th:0,ev:false};for(let s=1;s<=10&&!out.kindle.ev;s++){const b=fight(['solar','yukari'],['pesce'],s,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.ag=-999;});const L=b.party()[0];L.th=0;b.S.cur=b.party()[1];const ev=b.act({type:'attack',target:b.foes()[0].id});out.kindle={th:L.th,ev:ev.some(e=>e.t==='thGain'&&e.kindle)};}
          // Cover: Junpei steps in front of single-target hits meant for Solar.
          // (A Shadow's act aimed at Solar: b.act with the Shadow as the current unit.)
          const hitSolar=(b,sk='bash')=>{const f=b.foes()[0],L=b.party()[0];if(!f.skills.includes(sk))f.skills.push(sk);b.S.cur=f;return b.act({type:'skill',skill:sk,target:L.id})};
          n=0;for(let s=1;s<=40;s++){const b=fight(['solar','junpei'],['pesce@40'],s,b=>{b.party().forEach(u=>{u.maxHp=u.hp=1e6});});if(hitSolar(b).some(e=>e.t==='status'&&e.label==='COVER'))n++;}
          out.cover=n;
          // Baton: Rush hands Akihiko's One More to Solar, and her boost is bigger.
          {const b=fight(['solar','akihiko'],['pesce','pesce'],5);const a=b.party()[1];b.S.cur=a;b.S.oneMore=true;const act=b.autoAction(a,'rush');const ev=b.act(act);
           out.baton={act:act.type,to:act.to===b.party()[0].id,boost:b.party()[0].boost,ev:has(ev,'BATON')};
           const c=fight(['solar','akihiko'],['pesce','pesce'],5);const a2=c.party()[1];c.S.cur=a2;c.S.oneMore=true;out.batonHeal=c.autoAction(a2,'heal').type;}
          // Sunlit: Jihoon's buffs on Solar last longer, and she starts with attack up.
          const buffOf=u=>u.skills.find(id=>D.skills[id].type==='buff'&&[].concat(D.skills[id].stat).includes('atk'))||(u.skills.push('tarukaja'),'tarukaja');
          {const b=fight(['solar','jihoon'],['pesce'],7);b.start();const L=b.party()[0];out.sunOpen=L.buffs.atk;const j=b.party()[1];b.S.cur=j;j.sp=999;
           b.act({type:'skill',skill:buffOf(j),target:L.id});out.sunlit={turns:L.buffT.atk};}
          // Resonance: Solar's ice hits with Mitsuru in the party.
          {const dmg=withM=>{let t=0;for(let s=1;s<=30;s++){const b=fight(withM?['solar','mitsuru']:['solar','yukari'],['pesce'],s,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.aff={};});const L=b.party()[0];L.sp=999;if(!L.skills.includes('bufu'))L.skills.push('bufu');b.S.cur=L;b.act({type:'skill',skill:'bufu',target:b.foes()[0].id}).forEach(e=>{if(e.t==='hit'&&e.src===L.id)t+=e.amount});}return t};out.res=[dmg(false),dmg(true)];}
          // Crowns.
          const C={};
          {let k=0;for(let s=1;s<=20&&!k;s++){const b=fight(['solar','akihiko'],['pesce','pesce'],s,b=>{b.foes().forEach(f=>{f.maxHp=f.hp=1e7;f.aff={elec:'weak'}});});const a=b.party()[1];a.sp=999;b.S.cur=a;if(has(b.act({type:'skill',skill:a.skills.find(id=>D.skills[id].el==='elec'&&D.skills[id].target==='one')||'ziodyne',target:b.foes()[0].id}),'UNDISPUTED'))k=1;}C.undisputed=k;}
          {const b=fight(['solar','yukari'],['pesce@60'],2,b=>{const f=b.foes()[0];f.st=f.ma=9999;f.ag=999;b.party().forEach(u=>{u.guardianBell=false;u.cover=0;u.shield=0;u.evade=0});});const L=b.party()[0];L.hp=1;
           const ev=hitSolar(b);C.secondWind={label:has(ev,'SECOND WIND'),alive:!L.dead,hp:L.hp/L.maxHp};
           L.hp=1;L.shield=0;hitSolar(b);C.secondWindOnce=L.dead;}
          {let downs=0,hit=0;for(let s=1;s<=30;s++){const b=fight(['solar','junpei'],['pesce@50'],s,b=>{b.foes()[0].ag=999;b.party()[0].aff={fire:'weak'};b.party().forEach(u=>{u.maxHp=u.hp=1e6;u.cover=0;u.shield=0;u.evade=0});});
             if(hitSolar(b,'e_agilao').some(e=>e.t==='hit'&&e.tgt===b.party()[0].id&&e.aff==='weak'))hit++;if(b.party()[0].down)downs++;}
           const b0=fight(['solar','junpei'],['pesce@50'],1,b=>{b.foes()[0].ag=999;b.party()[0].aff={fire:'weak'};b.party().forEach(u=>{u.maxHp=u.hp=1e6;u.cover=0;u.evade=0});b.party()[1].crown=null;});hitSolar(b0,'e_agilao');
           C.homePlate={downs,hit,without:b0.party()[0].down};}
          {const b=fight(['solar','mitsuru'],['pesce'],4,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.ag=-999;f.ail={id:'poison',t:3};});const L=b.party()[0];b.S.cur=L;const e1=b.act({type:'attack',target:b.foes()[0].id});b.S.cur=L;const e2=b.act({type:'attack',target:b.foes()[0].id});
           C.execution={first:has(e1,'EXECUTION')&&e1.some(e=>e.t==='hit'&&e.src===L.id&&e.crit),again:has(e2,'EXECUTION')};}
          {const b=fight(['solar','aigis'],['pesce'],3,b=>{b.foes()[0].maxHp=b.foes()[0].hp=1e7;b.foes()[0].ag=-999;});const a=b.party()[1],L=b.party()[0];a.orgia=3;a.kindle=0;L.th=0;b.S.cur=a;const ev=b.act({type:'attack',target:b.foes()[0].id});C.orgia={kindles:ev.filter(e=>e.t==='thGain'&&e.kindle).length,hits:ev.filter(e=>e.t==='hit'&&e.src===a.id).length};}
          {const d=on=>{let t=0;for(let s=1;s<=20;s++){const b=fight(['solar','ken'],['pesce'],s,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.aff={};if(!on)b.party()[1].crown=null;});const k=b.party()[1];k.sp=999;k.hp=k.maxHp;if(!k.skills.includes('justice_lance'))k.skills.push('justice_lance');b.foes()[0].ag=-999;b.S.cur=k;b.act({type:'skill',skill:'justice_lance',target:b.foes()[0].id}).forEach(e=>{if(e.t==='hit'&&e.src===k.id&&e.tgt!==k.id)t+=e.amount});}return t};C.lance=[d(false),d(true)];}
          {let k=0;for(let s=1;s<=30;s++){const b=fight(['solar','koromaru'],['pesce@40'],s,b=>{b.foes()[0].ag=999;b.party().forEach(u=>{u.maxHp=u.hp=1e6;u.cover=0;u.evade=0});});const ev=hitSolar(b);if(has(ev,'LOYAL')&&ev.some(e=>e.t==='counter'))k++;}C.loyal=k;}
          C.lastStand={};for(let s=1;s<=20&&!C.lastStand.label;s++){const b=fight(['solar','shinjiro'],['pesce@60'],s,b=>{b.foes()[0].ag=999;});const sh=b.party()[1],L=b.party()[0];sh.hp=Math.round(sh.maxHp*0.34);sh.evade=0;sh.endure=true;sh.shield=0;
           const f=b.foes()[0];if(!f.skills.includes('bash'))f.skills.push('bash');b.S.cur=f;const ev=b.act({type:'skill',skill:'bash',target:sh.id});C.lastStand={label:has(ev,'LAST STAND'),sure:sh.sureHit,boost:L.standBoost};}
          {const b=fight(['solar','jihoon','yukari'],['pesce'],6);const j=b.party()[1];j.sp=999;b.S.cur=j;const sk=buffOf(j);const ev=b.act({type:'skill',skill:sk,target:j.id});C.lightOfLife={label:has(ev,'LIGHT OF YOUR LIFE'),atk:b.party().map(u=>u.buffs.atk)};
           b.S.cur=j;C.lightOnce=has(b.act({type:'skill',skill:sk,target:j.id}),'LIGHT OF YOUR LIFE');}
          {const b=fight(['solar','minji'],['pesce','pesce'],8,b=>{b.foes().forEach(f=>{f.maxHp=f.hp=1e7;f.ag=-999});});const L=b.party()[0];L.sp=999;b.S.cur=L;const sk=L.skills.find(id=>D.skills[id].type==='dmg'&&D.skills[id].cost&&D.skills[id].cost.sp)||'agilao';
           const ev=b.act({type:'skill',skill:sk,target:b.foes()[0].id});const uses=ev.filter(e=>e.t==='hit'&&e.src===L.id).length;b.S.cur=L;const ev2=b.act({type:'skill',skill:sk,target:b.foes()[0].id});C.cutPrint={label:has(ev,'CUT. PRINT.'),hits:uses,again:has(ev2,'CUT. PRINT.')};}
          {const b=fight(['solar','jungwon'],['pesce','maya'],9);const ev=b.start();C.appointed=b.foes().filter(f=>f.appointed).length;}
          {let k=0;for(let s=1;s<=40&&!k;s++){const b=fight(['solar','haechan'],['pesce'],s,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;});const L=b.party()[0];L.critBonus=200;b.S.cur=L;if(has(b.act({type:'attack',target:b.foes()[0].id}),'EVERY UNIVERSE'))k=1;}C.everyUniverse=k;}
          out.crowns=C;
          // Shields: Yukari's opening shield soaks a hit first.
          {const b=fight(['solar','yukari'],['pesce@40'],3,b=>{b.foes()[0].ag=999;b.party().forEach(u=>{u.cover=0;u.evade=0});});b.start();const L=b.party()[0],sh=L.shield;const ev=hitSolar(b);out.shield={start:sh,after:L.shield,ev:has(ev,'SHIELD')||has(ev,'SHIELD BREAK')};}
          // A long Rush brawl with every hook and crown on the field: it ends, and no action runs away.
          {let worst=0,errs=0;for(let s=1;s<=6;s++){try{const ids=[['akihiko','yukari','junpei'],['mitsuru','aigis','ken'],['koromaru','shinjiro','jihoon'],['minji','jungwon','haechan']][s%4];
            const b=fight(['solar'].concat(ids),['pesce@60','pesce@60','maya@60'],s,b=>{b.foes().forEach(f=>{f.maxHp=f.hp=40000;f.aff={fire:'weak',light:'weak'}})});b.start();
            for(let i=0;i<300&&!b.outcome();i++){const nt=b.nextTurn();let u=b.S.cur;if(!nt.canAct)continue;if(u.side==='enemy'){b.enemyAct();continue}
              for(let k=0;k<8&&!b.outcome();k++){const ev=b.act(b.autoAction(u,'rush'));worst=Math.max(worst,ev.filter(e=>e.t==='status'&&e.follow).length);if(b.S.alloutReady){b.allOut();break}if(b.S.shifted){b.S.shifted=false;u=b.S.cur;continue}if(!(b.S.oneMore&&b.S.cur===u))break;}}
          }catch(e){errs++;out.err=String(e.stack||e)}}out.brawl={worst,errs};}
          return out})()""")
        for c in H['caps']:
            ok(c['crit'] <= 15 and c['critAdd'] <= 0.3 and c['followUp'] <= 0.3 and c['counter'] <= 0.5 and c['evade'] <= 30 and c['physUp'] <= 0.2 and c['magicUp'] <= 0.2
               and c['assist'] <= 0.5 and c['cover'] <= 0.5 and c['baton'] <= 0.5 and c['kindle'] <= 8 and c['resonance'] <= 0.25 and c['boost'] <= 1.4 + 1e-9, ('caps hold for a whole orbit', c))
        ok(H['assist']['fights'] >= 5 and H['assist']['chains'] == 0, ('Assist fires, one per member per action', H['assist']))
        ok(H['assistAil'] >= 5, ('Mitsuru assists on a frozen Shadow', H['assistAil']))
        ok(H['kindle']['ev'] and H['kindle']['th'] > 0, ('Kindling', H['kindle']))
        ok(H['cover'] >= 5, ('Cover', H['cover']))
        ok(H['baton']['act'] == 'shift' and H['baton']['to'] and H['baton']['ev'] and H['baton']['boost'] > 1.25 + 0.3 and H['batonHeal'] != 'shift', ('Baton (and Rush passes it)', H['baton'], H['batonHeal']))
        ok(H['sunOpen'] >= 1 and H['sunlit']['turns'] >= 5, ('Sunlit', H['sunOpen'], H['sunlit']))
        ok(H['res'][1] > H['res'][0] * 1.15, ('Resonance', H['res']))
        C = H['crowns']
        ok(C['undisputed'] == 1, ('Undisputed', C))
        ok(C['secondWind']['label'] and C['secondWind']['alive'] and C['secondWind']['hp'] >= 0.45 and C['secondWindOnce'], ('Second Wind, once', C['secondWind']))
        ok(C['homePlate']['downs'] == 0 and C['homePlate']['hit'] >= 5 and C['homePlate']['without'], ('Home Plate: no Down on Solar (and a Down without him)', C['homePlate']))
        ok(C['execution']['first'] and not C['execution']['again'], ('Execution, once', C['execution']))
        ok(C['orgia']['kindles'] >= 2 and C['orgia']['kindles'] == C['orgia']['hits'], ('Orgia Mode kindles every hit', C['orgia']))
        ok(C['lance'][1] > C['lance'][0] * 1.05, ('Lance of Justice, refined', C['lance']))
        ok(C['loyal'] >= 4, ('Loyal to the End', C['loyal']))
        ok(C['lastStand']['label'] and C['lastStand']['sure'] and C['lastStand']['boost'] == 1.3, ('Last Stand', C['lastStand']))
        ok(C['lightOfLife']['label'] and C['lightOfLife']['atk'] == [3, 3, 3] and not C['lightOnce'], ('Light of Your Life, once', C['lightOfLife']))
        ok(C['cutPrint']['label'] and C['cutPrint']['hits'] >= 2 and not C['cutPrint']['again'], ('Cut. Print., once', C['cutPrint']))
        ok(C['appointed'] == 1, ('Appointed', C['appointed']))
        ok(C['everyUniverse'] == 1, ('Every Single Universe', C['everyUniverse']))
        ok(H['shield']['start'] > 0 and H['shield']['ev'] and H['shield']['after'] < H['shield']['start'], ('Sunlit shield soaks', H['shield']))
        ok(H['brawl']['errs'] == 0 and H['brawl']['worst'] <= 6, ('no runaway chains', H['brawl'], H.get('err')))
        results['party hooks'] = {'assist': H['assist'], 'cover': H['cover'], 'baton': H['baton'], 'res': H['res'], 'brawl': H['brawl']}
        print('Orbits in fights: caps, Assist, Kindling, Cover, Baton (Rush), Sunlit, Resonance, all twelve crowns, shields, no runaway chains OK', flush=True)

        # 5) Solar stays ahead: a maxed member at Lv 99 with a realistic 59-point orbit (core, Solar ray, then builds in each order)
        #    against Solar at Lv 99 with the whole sun, in Rush, two Shadows with a weakness she can reach.
        BAL = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,mids=Object.keys(D.ptrees),out={};
          const base=()=>{const s={lvl:99,form:'haenim-unveiled',forms:['haenim-sunna','haenim-mazu','haenim-nike','haenim-unveiled'],nodes:E.treeNodes().map(n=>n.id),mem:{},ptree:{},ranks:{},bonds:{},forgot:{},order:{},ops:{cleared:['priestess']},evo:{},gear:{eq:{},owned:{}},th:{}};
            mids.forEach(m=>{s.mem[m]={lvl:99};s.ptree[m]=[];s.ranks[m]=10;s.bonds[m]=15;});return s};
          const build=(who,order)=>{const s=base(),ns=E.ptreeNodes(who),t=D.ptrees[who];let seq=ns.filter(n=>n.ray==='core').concat(ns.filter(n=>n.ray==='solar'));
            order.forEach(k=>{seq=seq.concat(ns.filter(n=>n.ray===t.builds[k].id))});seq.push(ns.find(n=>n.crown));
            for(let g=0,again=true;again&&g<10;g++){again=false;seq.forEach(n=>{if(!s.ptree[who].includes(n.id)&&E.ptreeState(s,who,n.id,15)==='avail'&&E.ptreePts(s,who)>=n.cost){s.ptree[who].push(n.id);again=true}})}
            return s};
          const duel=(s,who)=>{const fx=E.treeFx(s.nodes),tot={solar:0,[who]:0};
            for(let seed=1;seed<=6;seed++){const b=E.create({party:['solar',who].map(id=>E.buildUnit(id,s,{fx})),enemies:['pesce@60','pesce@60'],rand:E.rng(seed*7+1),known:{}});
              b.foes().forEach(f=>{f.maxHp=f.hp=25000;f.aff={light:'weak',pierce:'resist'};f.st*=0.4;f.ma*=0.4});let ev=b.start();
              for(let i=0;i<300&&!b.outcome();i++){const nt=b.nextTurn();ev=ev.concat(nt.events);let u=b.S.cur;if(!nt.canAct)continue;if(u.side==='enemy'){ev=ev.concat(b.enemyAct());continue}
                for(let k=0;k<6&&!b.outcome();k++){let a=b.autoAction(u,'rush');if(a.type==='skill'&&D.skills[a.skill].type==='insta')a={type:'attack',target:b.foes().find(f=>!f.dead).id};
                  ev=ev.concat(b.act(a));if(b.S.alloutReady){ev=ev.concat(b.allOut());break}if(b.S.shifted){b.S.shifted=false;u=b.S.cur;continue}if(!(b.S.oneMore&&b.S.cur===u))break;}}
              ev.forEach(e=>{const su=b.U(e.src);if(e.t==='hit'&&su&&su.side==='party'&&e.amount>0&&!e.insta&&e.tgt!==e.src)tot[su.mid]+=e.amount;});}
            return +(tot[who]/Math.max(1,tot.solar)).toFixed(2)};
          mids.forEach(m=>{out[m]=Math.max(...[[0,1,2],[1,2,0],[2,0,1]].map(o=>duel(build(m,o),m)));});
          return out})()""")
        ok(all(v < 0.8 for v in BAL.values()), ('Solar out-damages every maxed member', BAL))
        results['solar vs maxed member (share of her damage)'] = BAL
        print('Solar still out-damages every maxed member:', BAL, flush=True)

        # 6) A real Rush fight in a battle frame with three orbits bought: the hooks fire on screen and it ends.
        p.eval("""(()=>{const b=FemcGame.S.battleSave,E=FemcBattleEngine;b.lvl=70;b.party=['akihiko','yukari','junpei'];
          ['akihiko','yukari','junpei'].forEach(m=>{b.mem[m]={lvl:70,exp:0};b.ptree[m]=E.ptreeNodes(m).filter(n=>n.ray==='core'||n.ray==='solar').map(n=>n.id);});
          ['akihiko','yukari','junpei'].forEach(m=>{FemcGame.progress(m).rank=10;});
          FemcGame.S.tartarus.lastParty=['solar','akihiko','yukari','junpei'];FemcGame.makeHandoff('tartarus',{party:['solar','akihiko','yukari','junpei']});FemcGame.save();})()""")
        p.battle(); p.eval("window.__hoStay=true")
        # Rush is for ordinary Shadows: a Tartarus fight (as in the rush section).
        p.wait("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'", 60)
        p.eval("window.__btGroup=['pesce','pesce'];document.querySelector('[data-go=run],[data-go=cont]').click()")
        for i in range(400):
            st = p.eval("""(()=>{const F=FemcBattle,c=F.ctl;if(F.B&&F.screen()==='battle')return 'battle';const tip=document.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return null}
              if(c?.kind==='map'){const o=c.opts||[];const n=o.find(x=>x.type==='shadow')||o[0];if(n)c.go(n.id);return null}
              if(c?.kind==='buttons'){const b=document.querySelector('.bt-btn.pink:not(:disabled)');b&&b.click();return null}return null})()""")
            if st == 'battle': break
            time.sleep(0.05)
        p.wait("!!FemcBattle.B && FemcBattle.B.party().length===4 && FemcBattle.ctl?.kind==='menu'", 90)
        u = p.eval("(()=>{const P=FemcBattle.B.party();return {assist:P[1].assist,baton:P[1].baton,cover:P[3].cover,kindle:P[2].kindle,shield:P[0].shield,crown:P.map(x=>x.crown)}})()")
        ok(u['assist'] > 0 and u['baton'] > 0 and u['cover'] > 0 and u['kindle'] > 0 and u['shield'] > 0, ('hooks on the real units', u))
        p.eval("""(()=>{const B=FemcBattle.B;B.foes().forEach(f=>{f.maxHp=f.hp=Math.round(f.maxHp*6);f.aff=Object.assign({},f.aff,{fire:'weak',agi:'weak'})});return true})()""")
        p.eval("document.dispatchEvent(new KeyboardEvent('keydown',{key:'r',bubbles:true}))")
        p.wait("FemcBattle.B.outcome()||FemcBattle.screen()!=='battle'||(FemcBattle.marks['rush-act']||0)>=24", 180)
        marks = p.eval("Object.keys(FemcBattle.marks).filter(k=>/^status-/.test(k))")
        ok(p.eval('FemcBattle.marks["rush-act"]') >= 4 and any(k in marks for k in ('status-shield', 'status-assist', 'status-baton', 'status-cover')), ('hooks on screen in a Rush fight', marks))
        p.eval("FemcBattle.hoFinish('retreat')"); p.top()
        results['party real fight'] = marks
        errs = p.console(); ok(not errs, errs)
        print('Orbits in a real Rush fight: hooks on the units and on screen OK', flush=True)

        # 7) Practice mode's tree screen: the chips switch to a member's orbit; buy, keys, free refund.
        p.goto(URL)
        p.eval("localStorage.setItem('kg-femc-battle-proto',JSON.stringify({v:4,treeV:4,lvl:20,exp:0,pts:4,nodes:[],party:['akihiko'],mem:{akihiko:{lvl:20,exp:0}},gear:{owned:{},eq:{}}}))")
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=10&seed=4'})
        p.wait("!!window.FemcBattle && FemcBattle.screen()==='hub'", 60)
        p.eval("document.querySelector('[data-go=tree]').click()")
        p.wait("FemcBattle.screen()==='tree'")
        p.eval("document.querySelector('[data-who=akihiko]').click()")
        p.wait("!!document.querySelector('.bt-orbit [data-hn]')")
        ok(p.eval("document.querySelectorAll('.bt-orbit [data-hn]').length") == 46 and p.eval("document.querySelectorAll('.bt-orbit .sun-ringlbl.shut').length") >= 4, 'practice: Akihiko’s orbit with shut rank rings')
        p.eval("FemcBattle.ctl.pick()")
        ok(p.eval("(FemcBattle.save.ptree.akihiko||[]).length") == 1, 'bought in practice')
        cur = p.eval("document.querySelector('.bt-sn.sel').dataset.hn")
        p.eval("FemcBattle.ctl.key({key:'ArrowUp'})")
        ok(p.eval("document.querySelector('.bt-sn.sel').dataset.hn") != cur, 'arrows walk the orbit in practice')
        p.eval("document.querySelector('[data-act=refund]').click()")
        ok(p.eval("(FemcBattle.save.ptree.akihiko||[]).length") == 0, 'free refund in practice')
        p.eval("document.querySelector('[data-who=solar]').click()")
        ok(p.eval("document.querySelectorAll('.bt-sun [data-hn]').length") == 148, 'back to the sun')
        p.eval("FemcBattle.ctl.back()"); p.wait("FemcBattle.screen()==='hub'")
        errs = p.console(); ok(not errs, errs)
        print('Practice: orbits switch, buy, keys, refund OK', flush=True)

        # 8) All twelve orbits draw at desktop and phone size (fit, no sideways scroll); screenshots of a few.
        setup(p, lvl=50, pts=0)
        p.eval("FEMC_BATTLE_DATA.party.forEach(m=>{if(m.id!=='solar'&&FemcGame.LINKS[m.id])FemcGame.progress(m.id).rank=Math.max(FemcGame.progress(m.id).rank,1)});FemcGame.saveQuiet()")
        sizes = []
        for w, h, mobile in [(1280, 850, False), (375, 812, True)]:
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
            menu(p, 'skills', {'extra': ['ken', 'koromaru', 'shinjiro', 'jihoon', 'minji', 'jungwon', 'haechan']})  # everyone, whatever the date
            for mid in ['akihiko', 'yukari', 'junpei', 'mitsuru', 'aigis', 'ken', 'koromaru', 'shinjiro', 'jihoon', 'minji', 'jungwon', 'haechan']:
                if not p.eval("!!document.querySelector('[data-sk=%s]')" % mid):
                    sizes.append((mid, w, 'not in roster')); continue
                click(p, '[data-sk=%s]' % mid)
                n = p.eval("FemcBattleEngine.ptreeNodes(%s).length" % json.dumps(mid))
                ok(p.eval("document.querySelectorAll('.g-orbit .sun-stage [data-hn]').length") == n, (mid, w, 'every node drawn'))
                ok(p.eval("(()=>{const r=document.querySelector('.g-orbit').getBoundingClientRect();return r.width>200&&r.height>200})()"), (mid, w, 'orbit visible'))
                ok(p.eval("(()=>{const r=document.querySelector('.g-fm-ov .g-panel').getBoundingClientRect();return r.right<=innerWidth+1&&r.bottom<=innerHeight+1})()"), (mid, w, 'panel fits'))
                no_scroll(p)
                sizes.append((mid, w, n))
                if mid in ('akihiko', 'minji', 'shinjiro'): shot(p, 'orbit-%s-%dx%d' % (mid, w, h))
        p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 850, 'deviceScaleFactor': 1, 'mobile': False})
        missing = [s for s in sizes if s[2] == 'not in roster']
        ok(not missing and len(sizes) == 24, ('all twelve orbits drawn at both sizes', sizes))
        results['orbits drawn'] = {'desktop+phone': len(sizes) - len(missing), 'not in roster at this date': sorted(set(s[0] for s in missing))}
        errs = p.console(); ok(not errs, errs)
        print('All orbits draw at 1280x850 and 375x812 OK', flush=True)

    # ── Solar's skill list: every learned skill, free swapping outside battle, the swap in a real fight ──
    # ── The late-game branches (2026-10-31, FEMC-LATE-BRANCHES-DESIGN.md): the Eclipse ring, Radiance, the epilogue branches,
    #    second crowns and duets: data, every gate, caps, save migration, each new active and hook in a fight, the late-game
    #    balance, the menu and practice screens, and screenshots at 1440x810 and 390x844 ──
    if want('late'):
        setup(p, lvl=99, pts=0)
        # 1) Data: 25 Eclipse nodes for 135 points, six Radiance nodes, four five-node epilogue branches at 2 points; every member
        #    has three Radiance nodes, a second crown and one duet; six duets cover all twelve; every late node names its art.
        L = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,out={};const ns=E.treeNodes(),g=id=>(D.tree.find(x=>x.id===id)||{}).nodes||[];
          out.total=ns.length;out.ecl=g('eclipse').length;out.eclPts=g('eclipse').reduce((s,n)=>s+n.cost,0);out.rad=g('radiance').length;
          out.epi=D.tree.filter(x=>x.epi).map(x=>x.id+':'+x.nodes.length+':'+x.nodes.reduce((s,n)=>s+n.cost,0)).join(' ');
          out.segs=D.ECLIPSE_ORDER.map(r=>ns.filter(n=>n.seg===r).map(n=>n.cost).join('/')).join(' ');
          out.uniq=new Set(ns.map(n=>n.id)).size===ns.length;
          out.art=ns.filter(n=>(n.seg||n.rad||n.id==='ec-total'||(D.tree.find(x=>x.id===n.branch)||{}).epi)&&!n.art).map(n=>n.id);
          out.party={};Object.keys(D.ptrees).forEach(m=>{const l=E.ptreeNodes(m);out.party[m]=[l.filter(n=>n.rad).length,l.filter(n=>n.crown2).length,l.filter(n=>n.duet).length,l.filter(n=>(n.rad||n.crown2||n.duet)&&!n.art).length].join('/')});
          out.duets=D.duets.flatMap(d=>d.pair).sort().join(',')===Object.keys(D.ptrees).sort().join(',');
          out.learn=['grandmaster','red_crane','motion_carried','landslide','spring_again','ice_and_wind'].every(id=>D.skills[id]&&D.skills[id].name&&D.skills[id].desc&&D.skills[id].cost);
          return out})()""")
        ok(L['ecl'] == 25 and L['eclPts'] == 135 and L['rad'] == 6 and L['total'] == 148 and L['uniq'], ('eclipse data', L))
        ok(L['segs'] == ' '.join(['3/4/5/8'] * 6), ('segments 3/4/5 + Solstice 8', L['segs']))
        ok(L['epi'] == 'epi-runners:5:10 epi-strangers:5:10 epi-hoax:5:10 epi-stay:5:10', ('epilogue branches', L['epi']))
        ok(not L['art'] and all(v == '3/1/1/0' for v in L['party'].values()) and L['duets'] and L['learn'], ('late nodes, art names, actives', L))
        results['late data'] = {k: L[k] for k in ('total', 'ecl', 'eclPts', 'rad', 'epi')}
        # 2) Gates, in the engine: the Eclipse ring by the New Game+ climb (sealed before, two segments a block, the crown at the
        #    Zenith), New Game+ keeping it open, the epilogue branches by world, duets by both links at MAX, second crowns by
        #    New Game+ and 300F, Radiance only on a full ray.
        G = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,BS=FemcBattleSave,out={};
          const s=BS.normalize(BS.fresh());s.lvl=99;s.pts=500;s.ngp=1;
          s.nodes=E.treeNodes().filter(n=>!n.rad&&!n.seg&&n.id!=='ec-total'&&!(D.tree.find(g=>g.id===n.branch)||{}).epi&&!n.choice).map(n=>n.id).concat(['st4a','tr3a','jade4a','bell4a','veil4a','star4a']);
          const st=id=>E.treeState(s,id),firsts=()=>D.ECLIPSE_ORDER.map(r=>st(E.treeNodes().find(n=>n.seg===r).id)).join(',');
          out.before=[firsts(),st('ec-total'),E.treeWhy(s,'ec-hl1'),E.treeWhy(s,'ec-total')];
          s.tt.climb=['raqia-arrive','raqia-summit'];out.raqia=firsts();
          s.tt.climb.push('zebul-summit');out.zebul=firsts();
          s.tt.climb.push('araboth-summit');out.araboth=[firsts(),st('ec-total')];
          s.tt.supers=['super_tiger'];out.zenith=st('ec-total');
          // New Game+ again: tt resets, the ring stays open (late.top / late.zenith).
          const c=BS.carry(s);out.carry=[c.tt.climb.length,c.ngp,E.eclipseOpen(c),E.treeState(c,'ec-total'),c.late.top];
          // An owned Eclipse node before its segment opens (never happens, but a hand-edited save): it stays owned.
          // Radiance: sealed on a ray that isn't full, open once it is (and the open segment owned too).
          const t=BS.normalize(BS.fresh());t.lvl=99;t.pts=200;out.radEmpty=E.treeState(t,'rad-striker');
          out.radStriker=[st('rad-striker'),E.treeWhy(s,'rad-striker')];
          s.nodes.push(...E.treeNodes().filter(n=>n.seg==='striker').map(n=>n.id));out.radStriker2=st('rad-striker');
          // Epilogue branches: sealed until that world is finished.
          out.epi0=[st('ep-ru1'),E.treeWhy(s,'ep-ru1'),st('ep-hx1')];
          s.epis=['runners'];out.epi1=[st('ep-ru1'),st('ep-ru2'),st('ep-hx1')];
          const u=BS.normalize(BS.fresh());u.lvl=99;u.epis=['runners'];out.epiReq=[E.treeState(u,'ep-ru1'),E.treeWhy(u,'ep-ru1')];
          // Duets: both links at MAX; 5 points from either; shared once one buys it.
          const q=BS.normalize(BS.fresh());q.lvl=99;q.ngp=0;['akihiko','shinjiro'].forEach(m=>{q.mem[m]={lvl:99,exp:0}});
          q.ranks={akihiko:10,shinjiro:6};out.duet0=[E.ptreeState(q,'akihiko','duet-old-friends'),E.ptreeWhy(q,'akihiko','duet-old-friends')];
          q.ranks.shinjiro=10;out.duet1=E.ptreeState(q,'akihiko','duet-old-friends');
          const p0=E.ptreePts(q,'akihiko'),p1=E.ptreePts(q,'shinjiro');out.duetBuy=E.ptreeBuy(q,'akihiko','duet-old-friends').ok;
          out.duet2=[E.ptreeState(q,'shinjiro','duet-old-friends'),p0-E.ptreePts(q,'akihiko'),p1-E.ptreePts(q,'shinjiro'),E.ptreeFx(q,'shinjiro').duets.join()];
          // Second crowns: New Game+ only, once the climb passes 300F, after the crown.
          const crown=E.ptreeNodes('akihiko').find(n=>n.crown).id;q.ptree.akihiko.push(crown);
          out.c2=[E.ptreeState(q,'akihiko','ak-crown2'),E.ptreeWhy(q,'akihiko','ak-crown2')];q.ngp=1;q.tt.climb=['raqia-summit'];
          out.c2b=E.ptreeState(q,'akihiko','ak-crown2');q.tt.climb.push('zebul-arrive');out.c2c=E.ptreeState(q,'akihiko','ak-crown2');
          q.ptree.akihiko=q.ptree.akihiko.filter(x=>x!==crown);out.c2d=E.ptreeState(q,'akihiko','ak-crown2');
          return out})()""")
        ok(G['before'][0] == ','.join(['sealed'] * 6) and G['before'][1] == 'sealed' and '300F' in G['before'][2] and 'top' in G['before'][3], ('eclipse sealed before the climb', G['before']))
        ok(G['raqia'] == 'avail,avail,sealed,sealed,sealed,sealed' and G['zebul'] == 'avail,avail,avail,avail,sealed,sealed', ('two segments a block', G['raqia'], G['zebul']))
        ok(G['araboth'] == [','.join(['avail'] * 6), 'sealed'] and G['zenith'] == 'lock', ('third block, then the crown (needs one Solstice)', G['araboth'], G['zenith']))
        ok(G['carry'][0] == 0 and G['carry'][1] == 2 and G['carry'][2] == 6 and G['carry'][3] == 'lock' and G['carry'][4] == 399, ('New Game+ keeps the ring open', G['carry']))
        ok(G['radEmpty'] == 'sealed' and G['radStriker'][0] == 'sealed' and 'Eclipse' in G['radStriker'][1] and G['radStriker2'] == 'avail', ('Radiance on a full ray (and its open segment)', G))
        ok(G['epi0'][0] == 'sealed' and 'Runners epilogue' in G['epi0'][1] and G['epi1'] == ['avail', 'lock', 'sealed'] and G['epiReq'][0] == 'lock', ('epilogue branches by world', G['epi0'], G['epi1'], G['epiReq']))
        ok(G['duet0'][0] == 'rank' and 'both links' in G['duet0'][1] and G['duet1'] == 'avail' and G['duetBuy'], ('duet needs both at MAX', G['duet0'], G['duet1']))
        ok(G['duet2'][0] == 'own' and G['duet2'][1] == 5 and G['duet2'][2] == 0 and G['duet2'][3] == 'oldFriends', ('duet shared, paid by one', G['duet2']))
        ok(G['c2'][0] == 'sealed' and 'New Game+' in G['c2'][1] and G['c2b'] == 'sealed' and G['c2c'] == 'avail' and G['c2d'] == 'lock', ('second crown: NG+, past 300F, after the crown', G))
        results['late gates'] = 'eclipse 0/2/4/6 + crown, NG+ keeps it, epilogues, duets, second crowns, radiance'
        print('Late-game gates OK', flush=True)

        # 3) Radiance: ten buys at 2 points, the caps still hold, a respec refunds it; the party's by build, under the party caps.
        RA = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,BS=FemcBattleSave,out={};
          const s=BS.normalize(BS.fresh());s.lvl=99;s.pts=100;s.nodes=D.tree.find(g=>g.id==='striker').nodes.filter(n=>n.id!=='st4b').map(n=>n.id).concat(['sun1']);
          let n=0;while(E.treeBuy(s,'rad-striker').ok)n++;out.buys=[n,s.rad.striker,s.pts,E.treeState(s,'rad-striker'),E.treeWhy(s,'rad-striker')];
          out.crit=E.treeFx(s.nodes,s.rad).unit.critUp;s.rad.striker=50;out.capRad=E.treeFx(s.nodes,s.rad).unit.critUp;
          s.rad.striker=10;s.nodes.push('st4b','hy-st-tr1');const big=Object.assign({},s,{rad:{striker:10}});
          const all=E.treeNodes().filter(x=>!x.rad).map(x=>x.id);const fx=E.treeFx(all,{striker:10,trickster:10,mage:10,healer:10,guard:10,support:10});
          out.caps=Object.entries({critUp:30,counter:0.5,ailUp:0.3,magicUp:0.4,thStart:30,physUp:0.4,followUp:0.4,corona:0.15}).filter(([k,c])=>fx.unit[k]>c+1e-9).map(([k])=>k);
          const spent=E.treeSpent(s),pts0=s.pts;E.treeRespec(s);out.respec=[Object.keys(s.rad).length,s.pts-pts0===spent,spent>=20];
          // Party: a full build opens its Radiance; ten buys; party caps hold.
          const q=BS.normalize(BS.fresh());q.lvl=99;q.mem.akihiko={lvl:99,exp:0};q.ranks={akihiko:10};
          const ns=E.ptreeNodes('akihiko');q.ptree.akihiko=ns.filter(x=>x.ray==='champion'&&!x.rad).map(x=>x.id);
          out.p0=E.ptreeState(q,'akihiko','akihiko-rad-combo');out.p1=E.ptreeState(q,'akihiko','akihiko-rad-champion');
          q.ptree.akihiko=ns.filter(x=>!x.rad&&!x.duet&&!x.crown2).map(x=>x.id);q.prad={akihiko:{champion:10,combo:10,thunder:10}};
          const pf=E.ptreeFx(q,'akihiko');out.pcap=[pf.crit<=15,pf.followUp<=0.3,(pf.boost.elec||1)<=1.4];
          out.pspent=E.ptreeSpent(q,'akihiko')-ns.filter(x=>q.ptree.akihiko.includes(x.id)).reduce((a,x)=>a+x.cost,0);
          E.ptreeRespec(q,'akihiko');out.prespec=[!q.prad.akihiko,(q.ptree.akihiko||[]).length];
          return out})()""")
        ok(RA['buys'][:4] == [10, 10, 80, 'own'] and '10 of 10' in RA['buys'][4], ('ten Radiance buys at 2 points', RA['buys']))
        ok(RA['crit'] == 10 and RA['capRad'] == 10 and not RA['caps'], ('Radiance adds +1 crit a buy, stops at 10, caps hold', RA))
        ok(RA['respec'] == [0, True, True] and RA['p0'] == 'sealed' and RA['p1'] == 'avail' and all(RA['pcap']) and RA['pspent'] == 60 and RA['prespec'] == [True, 0], ('Radiance respec and party', RA))
        results['radiance'] = {'buys': RA['buys'][:3], 'crit after 10': RA['crit']}

        # 4) Save migration: a save from before this batch (no rad / prad / epis / late) loads unchanged: same nodes, points,
        #    orbits; the new fields come in empty; junk in them is cleaned.
        MG = p.eval(r"""(()=>{const BS=FemcBattleSave,E=FemcBattleEngine;
          const old={v:4,treeV:4,tv:2,lvl:62,pts:17,nodes:['sun1','st1','st2','bell1'],ptree:{akihiko:['ak1','ak7']},ranks:{akihiko:6},mem:{akihiko:{lvl:60,exp:0}},party:['akihiko'],gear:{owned:{},eq:{}},tt:{guardians:[],climb:[]}};
          const s=BS.fromRaw(old);const junk=BS.fromRaw(Object.assign({},old,{rad:{striker:99,nope:3},prad:{akihiko:{champion:4,zzz:2},nobody:{a:1}},epis:['runners','x'],late:{top:'abc'}}));
          return {nodes:s.nodes.join(),pts:s.pts,ptree:s.ptree.akihiko.join(),rad:JSON.stringify(s.rad),prad:JSON.stringify(s.prad),epis:s.epis.length,late:JSON.stringify(s.late),
            spent:E.treeSpent(s),junk:[JSON.stringify(junk.rad),JSON.stringify(junk.prad),junk.epis.join(),junk.late.top]}})()""")
        ok(MG['nodes'] == 'sun1,st1,st2,bell1' and MG['pts'] == 17 and MG['ptree'] == 'ak1,ak7' and MG['rad'] == '{}' and MG['prad'] == '{}' and MG['epis'] == 0 and MG['late'] == '{"top":0,"zenith":false}', ('old save loads unchanged', MG))
        ok(MG['junk'] == ['{"striker":10}', '{"akihiko":{"champion":4}}', 'runners', 0], ('junk cleaned', MG['junk']))
        results['late migration'] = 'old saves load unchanged'

        # 5) Every new active in a fight, and each late hook (engine fights, as in the party section).
        F = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,BS=FemcBattleSave,out={};
          const save=BS.normalize(BS.fresh());save.lvl=80;Object.keys(D.ptrees).forEach(m=>{save.mem[m]={lvl:80,exp:0}});
          const fight=(ids,foes,seed,f,o={})=>{const units=ids.map(id=>E.buildUnit(id,save));const b=E.create(Object.assign({party:units,enemies:foes,rand:E.rng(seed),known:{}},o));if(f)f(b);return b};
          const has=(ev,l)=>ev.some(e=>e.t==='status'&&e.label===l);
          const use=(b,u,sk,t)=>{u.skills.includes(sk)||u.skills.push(sk);u.sp=u.maxSp=999;b.S.cur=u;return b.act({type:'skill',skill:sk,target:t})};
          // Grandmaster never misses, even against a dodging Shadow.
          {let hit=0;for(let s=1;s<=20;s++){const b=fight(['solar'],['pesce'],s,b=>{const f=b.foes()[0];f.ag=9999;f.maxHp=f.hp=1e7;});const ev=use(b,b.party()[0],'grandmaster',b.foes()[0].id);if(ev.some(e=>e.t==='hit'&&e.amount>0))hit++;}out.grandmaster=hit;}
          // Red Crane: the Shadow loses its turn (Bind).
          {let n=0;for(let s=1;s<=20;s++){const b=fight(['solar'],['pesce'],s);const ev=use(b,b.party()[0],'red_crane',b.foes()[0].id);if(ev.some(e=>e.t==='ail'&&e.id==='bind'))n++;}out.crane=n;}
          // Motion Carried: party attack and defense up.
          {const b=fight(['solar','akihiko'],['pesce'],3);use(b,b.party()[0],'motion_carried',b.party()[0].id);out.motion=b.party().map(u=>u.buffs.atk+'/'+u.buffs.def).join(' ');}
          // Landslide: harder with more foes.
          {const per=k=>{let t=0;for(let s=1;s<=12;s++){const b=fight(['solar'],Array(k).fill('pesce'),s,b=>{b.foes().forEach(f=>{f.maxHp=f.hp=1e7;f.aff={}})});const ev=use(b,b.party()[0],'landslide',b.foes()[0].id);t+=ev.filter(e=>e.t==='hit'&&e.amount>0).reduce((a,e)=>a+e.amount,0)/k;}return t};out.landslide=+(per(3)/per(1)).toFixed(2);}
          // Spring Again: revives with all HP, once a battle.
          {const b=fight(['solar','akihiko'],['pesce'],2);const a=b.party()[1];a.hp=0;a.dead=true;const L=b.party()[0];use(b,L,'spring_again',a.id);out.spring=[a.dead,a.hp===a.maxHp];a.hp=0;a.dead=true;b.S.cur=L;out.springAgain=b.act({type:'skill',skill:'spring_again',target:a.id}).some(e=>e.t==='msg'&&/once/.test(e.text));}
          // Ice and Wind: wind then ice on every foe; only with both in the party.
          {save.ptree.yukari=['duet-ice-wind'];const b=fight(['solar','yukari','mitsuru'],['pesce','pesce'],4,b=>{b.foes().forEach(f=>{f.maxHp=f.hp=1e7;f.aff={}})});const y=b.party()[1];
           out.iwKnown=y.skills.includes('ice_and_wind')&&b.party()[2].skills.includes('ice_and_wind');const ev=use(b,y,'ice_and_wind',b.foes()[0].id);
           out.iw=[...new Set(ev.filter(e=>e.t==='hit').map(e=>e.el))].sort().join()+':'+ev.filter(e=>e.t==='hit').length;
           const c=fight(['solar','yukari','akihiko'],['pesce'],4);out.iwAlone=c.party()[1].skills.includes('ice_and_wind');save.ptree={};}
          // Total Eclipse: her first damaging skill lands as a weakness on a foe weak to something else, once.
          {save.nodes=['ec-total'];const b=fight(['solar'],['pesce'],5,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.aff={fire:'weak',ice:'weak',pierce:'null'};f.ag=-999;});const L=b.party()[0];L.sp=999;
           L.skills.push('grandmaster');const ev=b.act((b.S.cur=L,{type:'skill',skill:'grandmaster',target:b.foes()[0].id}));
           out.eclipse=[has(ev,'TOTAL ECLIPSE'),ev.some(e=>e.t==='hit'&&e.aff==='weak')];b.foes()[0].down=false;b.S.cur=L;const ev2=b.act({type:'skill',skill:'grandmaster',target:b.foes()[0].id});out.eclipse2=ev2.some(e=>e.t==='hit'&&e.aff==='weak');save.nodes=[];}
          // Solar's branch passives: Respawn, Petal Shield, Point of Order, Clutch Play, Low Tide.
          {save.nodes=['ep-ru2','ep-sy2','ep-hx1','ep-ru1','ep-st2'];
           const b=fight(['solar','akihiko'],['pesce@60'],2,b=>{const f=b.foes()[0];f.st=f.ma=9999;f.ag=999;});const ev=b.start();out.petal=has(ev,'PETAL SHIELD')&&b.party().every(u=>u.shield>0);
           const L=b.party()[0];L.shield=0;L.hp=5;const f=b.foes()[0];b.S.cur=f;const e2=b.act({type:'attack',target:L.id});out.respawn=[has(e2,'RESPAWN'),!L.dead,L.hp>1];
           const c=fight(['solar'],['pesce'],3,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.aff={pierce:'weak'};f.buffs.atk=2;f.buffT.atk=3;f.ag=-999});const L2=c.party()[0];c.S.cur=L2;const e3=c.act({type:'attack',target:c.foes()[0].id});out.order=[has(e3,'POINT OF ORDER'),c.foes()[0].buffs.atk];
           const dmg=alone=>{let t=0;for(let s=1;s<=12;s++){const d=fight(['solar','akihiko'],['pesce'],s,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.aff={};f.ag=-999;if(alone){b.party()[1].dead=true;b.party()[1].hp=0}});const u=d.party()[0];d.S.cur=u;t+=d.act({type:'attack',target:d.foes()[0].id}).filter(e=>e.t==='hit'&&e.src===u.id).reduce((a,e)=>a+e.amount,0);}return t};out.clutch=+(dmg(true)/dmg(false)).toFixed(2);
           const g=on=>{let t=0;for(let s=1;s<=12;s++){if(!on)save.nodes=[];const d=fight(['solar'],['pesce@40'],s);const u=d.party()[0];u.maxHp=u.hp=1e6;u.guard=true;u.evade=0;const f=d.foes()[0];f.ag=999;d.S.cur=f;t+=d.act({type:'attack',target:u.id}).filter(e=>e.t==='hit'&&e.tgt===u.id).reduce((a,e)=>a+e.amount,0);save.nodes=['ep-st2'];}return t};out.lowTide=+(g(true)/g(false)).toFixed(2);save.nodes=[];}
          // Second crowns and duets in fights.
          {save.ptree={akihiko:['ak-crown','ak-crown2']};save.ngp=1;const b=fight(['solar','akihiko'],['pesce','pesce'],6,b=>{b.foes().forEach(f=>{f.maxHp=f.hp=1e7;f.aff={elec:'weak'};f.ag=-999})});const a=b.party()[1];out.champion=a.crown2;}
          {save.ptree={junpei:['duet-pinch']};const b=fight(['solar','junpei','koromaru'],['pesce@60'],2,b=>{b.foes()[0].st=9999;b.foes()[0].ag=999;});const j=b.party()[1];j.hp=1;j.endure=false;j.shield=0;j.evade=0;b.party().forEach(u=>u.guardianBell=false);const f=b.foes()[0];b.S.cur=f;
           let ev=[];for(let i=0;i<8&&!j.dead;i++){b.S.cur=f;ev=ev.concat(b.act({type:'attack',target:j.id}));}out.pinch=[j.dead,has(ev,'PINCH HITTERS'),b.party()[2].buffs.atk];}
          {save.ptree={haechan:['duet-two-universes']};const b=fight(['solar','haechan','jungwon'],['pesce'],7,b=>{const f=b.foes()[0];f.maxHp=f.hp=1e7;f.ag=-999;});const L=b.party()[0];L.critBonus=500;let got=false;for(let i=0;i<6&&!got;i++){b.foes()[0].down=false;b.S.cur=L;got=has(b.act({type:'attack',target:b.foes()[0].id}),'TWO UNIVERSES');}out.two=[got,b.foes()[0].buffs.def];}
          {save.ptree={shinjiro:['sh-crown','sh-crown2']};let n=0;const b=fight(['solar','shinjiro'],['pesce@60'],3,b=>{b.foes()[0].ag=999;});const sh=b.party()[1];sh.evade=0;sh.endure=false;
           for(let k=0;k<2;k++){sh.hp=Math.round(sh.maxHp*0.3);sh.sureHit=false;const f=b.foes()[0];f.st=4;b.S.cur=f;if(has(b.act({type:'attack',target:sh.id}),'LAST STAND'))n++;sh.sureHit=false;sh.hp=sh.maxHp;}out.unbroken=n;save.ptree={};}
          save.ngp=0;
          return out})()""")
        ok(F['grandmaster'] == 20, ('Grandmaster never misses', F['grandmaster']))
        ok(F['crane'] >= 17 and F['motion'] == '1/1 1/1' and F['landslide'] >= 1.25, ('Red Crane, Motion Carried, Landslide', F))
        ok(F['spring'] == [False, True] and F['springAgain'], ('Spring Again once', F))
        ok(F['iwKnown'] and F['iw'] == 'ice,wind:4' and not F['iwAlone'], ('Ice and Wind', F))
        ok(F['eclipse'] == [True, True] and not F['eclipse2'], ('Total Eclipse once', F))
        ok(F['petal'] and F['respawn'] == [True, True, True] and F['order'] == [True, 0] and F['clutch'] >= 1.15 and F['lowTide'] <= 0.8, ('branch passives', F))
        ok(F['champion'] == 'champion' and F['pinch'][1] and F['pinch'][2] == 2 and F['two'][0] and F['two'][1] < 0 and F['unbroken'] == 2, ('second crowns and duets', F))
        results['late actives and hooks'] = {k: F[k] for k in ('grandmaster', 'crane', 'landslide', 'clutch', 'lowTide', 'iw')}
        print('Late-game actives and hooks in fights OK', flush=True)

        # 6) Every new active in a real battle frame: a story fight driven through the battle menus (Solar's five, then the duet).
        setup(p, lvl=90, pts=0)
        p.eval("""(()=>{const b=FemcGame.S.battleSave;b.nodes=['sun1','bell1','st1','tr1','jade1','star1','veil1','ep-ru1','ep-ru3','ep-ru5','ep-st1','ep-st3','ep-hx1','ep-hx3','ep-hx5','ep-sy1','ep-sy2','ep-sy4'];
          b.epis=['runners','strangers','hoax','stay'];b.equip={solar:['grandmaster','red_crane','motion_carried','landslide','spring_again','dia']};
          b.party=['yukari','mitsuru','akihiko'];b.ptree={yukari:['duet-ice-wind']};b.ranks={yukari:10,mitsuru:10};
          FemcGame.progress('yukari').rank=10;FemcGame.progress('mitsuru').rank=10;
          FemcGame.makeHandoff('scripted',{script:'skills-test',forced:true,party:['solar','yukari','mitsuru','akihiko']});FemcGame.save();})()""")
        k5 = kit(p); ok(all(x in k5 for x in ['grandmaster', 'red_crane', 'motion_carried', 'landslide', 'spring_again']), k5)
        p.battle()
        p.eval("window.__hoStay=true")
        p.wait('!!FemcBattle.B && FemcBattle.B.party().length===4', 60)
        p.eval("""(()=>{const B=FemcBattle.B;B.foes().forEach(f=>{f.maxHp=f.hp=999999;f.aff={};f.st=f.ma=1;});B.party().forEach(u=>{u.maxHp=u.hp=99999;u.sp=u.maxSp=999});
          window.log=[];const act=B.act;B.act=a=>{const mid=B.S.cur.mid,ev=act(a);log.push({mid,a,ev});return ev};
          window.plan=[{mid:'solar',skill:'grandmaster',target:'e0'},{mid:'yukari',skill:'ice_and_wind',target:'e0'},{mid:'solar',skill:'red_crane',target:'e0'},{mid:'solar',skill:'motion_carried',target:'all'},
            {mid:'solar',skill:'landslide',target:'e0'},{mid:'solar',skill:'spring_again',target:'p3',kill:'p3'}];window.done=[];return true})()""")
        STEP2 = r"""(()=>{const F=FemcBattle,B=F.B,c=F.ctl;if(!B||B.outcome())return 'over';
          if(c?.kind==='allout'){c.pickValue('0');return 'allout'}
          if(c?.kind!=='menu')return null;const u=B.S.cur,v=c.items.map(i=>i.v);u.sp=u.maxSp;
          const st=plan.find(x=>x.mid===u.mid);
          if(!plan.length)return 'plan-done';
          if(!st){ if(v.includes('guard'))c.pickValue('guard'); else c.back&&c.back(); return 'guard'}
          if(v.includes('skill')&&v.includes('guard')){if(st.kill){const t=B.U(st.kill);t.hp=0;t.dead=true;}c.pickValue('skill');return 'root'}
          if(v.includes(st.skill)){ if(FEMC_BATTLE_DATA.skills[st.skill].target==='self'){done.push(st.skill);plan.splice(plan.indexOf(st),1)} c.pickValue(st.skill);return 'skill'}
          const pickT=v.includes(st.target)?st.target:v.includes('all')?'all':v.find(x=>x!=='back');
          if(pickT){c.pickValue(pickT);done.push(st.skill);plan.splice(plan.indexOf(st),1);return 'target'}
          return 'wait'})()"""
        t0 = time.time(); r = None
        while time.time() - t0 < 300:
            r = p.eval(STEP2)
            if r in ('over', 'plan-done'): break
            time.sleep(0.02)
        ok(r == 'plan-done', (r, p.eval('done'), p.eval('plan')))
        p.wait("['grandmaster','ice_and_wind','red_crane','motion_carried','landslide','spring_again'].every(s=>log.some(x=>x.a.skill===s))", 60)
        used = p.eval("""(()=>{const out={};log.forEach(x=>{if(!x.a.skill)return;const ev=x.ev;out[x.a.skill]=x.a.skill==='spring_again'?ev.some(e=>e.t==='revive'):x.a.skill==='red_crane'?ev.some(e=>e.t==='ail'||e.t==='miss'):x.a.skill==='motion_carried'?ev.some(e=>e.t==='buff'):ev.some(e=>e.t==='hit'&&e.amount>0)});
          out.iwEls=[...new Set((log.find(x=>x.a.skill==='ice_and_wind')||{ev:[]}).ev.filter(e=>e.t==='hit').map(e=>e.el))].sort().join();out.marks=Object.keys(FemcBattle.marks).filter(k=>/use|skill/.test(k)).length;return out})()""")
        ok(all(used.get(w) is True for w in ['grandmaster', 'red_crane', 'motion_carried', 'landslide', 'spring_again', 'ice_and_wind']) and used['iwEls'] == 'ice,wind', ('every new active in a real battle frame', used))
        p.top()
        errs = p.console(); ok(not errs, errs)
        results['late actives in a real fight'] = sorted(k for k in used if used[k] is True)
        print('Every new active used in a real battle frame OK', flush=True)

        # 7) Balance, late game: Solar with every node of the sun (Eclipse ring, epilogue branches, Total Eclipse) and Radiance x10
        #    on every ray, against each member with every orbit node, the second crown, the duet and Radiance x10 on every build
        #    (more than any save can hold), both at Lv 99, Rush, two Shadows with a weakness she can reach. Solar stays ahead.
        BAL2 = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,mids=Object.keys(D.ptrees),out={};
          const base=who=>{const s={lvl:99,ngp:1,form:'haenim-unveiled',forms:['haenim-sunna','haenim-mazu','haenim-nike','haenim-unveiled'],nodes:E.treeNodes().filter(n=>!n.rad).map(n=>n.id),
            rad:{striker:10,trickster:10,mage:10,healer:10,guard:10,support:10},epis:['runners','strangers','hoax','stay'],late:{top:400,zenith:true},mem:{},ptree:{},prad:{},ranks:{},bonds:{},forgot:{},order:{},ops:{cleared:['priestess']},evo:{},gear:{eq:{},owned:{}},th:{},tt:{climb:[],supers:['super_tiger']}};
            mids.forEach(m=>{s.mem[m]={lvl:99};s.ranks[m]=10;s.bonds[m]=15;});
            s.ptree[who]=E.ptreeNodes(who).filter(n=>!n.rad).map(n=>n.id);s.prad[who]=Object.fromEntries(D.ptrees[who].builds.map(b=>[b.id,10]));return s};
          const duel=(s,who)=>{const fx=E.treeFx(s.nodes,s.rad),tot={solar:0,[who]:0};const du=D.duets.find(d=>d.pair.includes(who)),other=du.pair.find(x=>x!==who);
            for(let seed=1;seed<=6;seed++){const b=E.create({party:['solar',who].map(id=>E.buildUnit(id,s,{fx})),enemies:['pesce@60','pesce@60'],rand:E.rng(seed*7+1),known:{}});
              b.foes().forEach(f=>{f.maxHp=f.hp=25000;f.aff={light:'weak',pierce:'resist'};f.st*=0.4;f.ma*=0.4});let ev=b.start();
              for(let i=0;i<300&&!b.outcome();i++){const nt=b.nextTurn();ev=ev.concat(nt.events);let u=b.S.cur;if(!nt.canAct)continue;if(u.side==='enemy'){ev=ev.concat(b.enemyAct());continue}
                for(let k=0;k<6&&!b.outcome();k++){let a=b.autoAction(u,'rush');if(a.type==='skill'&&D.skills[a.skill].type==='insta')a={type:'attack',target:b.foes().find(f=>!f.dead).id};
                  ev=ev.concat(b.act(a));if(b.S.alloutReady){ev=ev.concat(b.allOut());break}if(b.S.shifted){b.S.shifted=false;u=b.S.cur;continue}if(!(b.S.oneMore&&b.S.cur===u))break;}}
              ev.forEach(e=>{const su=b.U(e.src);if(e.t==='hit'&&su&&su.side==='party'&&e.amount>0&&!e.insta&&e.tgt!==e.src)tot[su.mid]+=e.amount;});}
            return +(tot[who]/Math.max(1,tot.solar)).toFixed(2)};
          mids.forEach(m=>{out[m]=duel(base(m),m);});
          // The duet pair together (both maxed, both in the party) against Solar.
          return out})()""", 600)
        ok(all(v < 0.8 for v in BAL2.values()), ('Solar out-damages every late-game maxed member', BAL2))
        results['solar vs late-game maxed member'] = BAL2
        print('Solar still out-damages every late-game maxed member:', BAL2, flush=True)

        # 8) The menu: the sun with the Eclipse ring sealed (shadow, hint), opened by the climb, a buy and a Radiance buy by click;
        #    an epilogue branch sealed then opened through the life sim's finished world; an orbit with its second crown, duet and
        #    Radiance; screenshots at 1440x810 and 390x844.
        setup(p, lvl=99, pts=300)
        p.eval("""(()=>{const b=FemcGame.S.battleSave,E=FemcBattleEngine,D=FEMC_BATTLE_DATA;b.ngp=1;FemcGame.S.ngp=1;
          b.nodes=E.treeNodes().filter(n=>!n.rad&&!n.seg&&n.id!=='ec-total'&&!(D.tree.find(g=>g.id===n.branch)||{}).epi&&!n.choice).map(n=>n.id).concat(['st4a','tr3a','jade4a','bell4a','veil4a','star4a']);
          b.forms=['haenim-sunna','haenim-mazu','haenim-nike','haenim-unveiled'];b.ops={cleared:['priestess']};FemcGame.saveQuiet()})()""")
        for w, h, tag, mob in [(1440, 810, '1440x810', False), (390, 844, '390x844', True)]:
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mob})
            p.eval("(()=>{const b=FemcGame.S.battleSave,E=FemcBattleEngine;b.tt.climb=[];b.tt.supers=[];b.late={top:0,zenith:false};b.epis=[];b.rad={};b.nodes=b.nodes.filter(id=>{const n=E.treeNode(id);return !n.seg&&!/^ep-/.test(id)});FemcGame.S.epilogues={};FemcGame.saveQuiet()})()")
            menu(p); click(p, '[data-sk=solar]'); click(p, '[data-skmode=sun]'); click(p, '[data-ray=eclipse]')
            no_scroll(p)
            ok(p.eval("document.querySelectorAll('.sun-ecl-seg.shut').length") == 6 and state(p, 'ec-hl1') == 'sealed', ('Eclipse shadows while sealed', tag, p.eval("document.querySelectorAll('.sun-ecl-seg.shut').length"), state(p, 'ec-hl1'), p.eval("JSON.stringify([FemcGame.S.battleSave.late,FemcGame.S.battleSave.tt,FemcGame.S.battleSave.reached])")))
            click(p, '[data-hn=ec-hl1]')
            ok('300F' in p.eval("document.querySelector('.g-sk-why').textContent") and p.eval("document.querySelector('[data-sk-buy]').disabled"), 'sealed hint and no buy')
            shot(p, f'late-sun-sealed-{tag}')
            p.eval("(()=>{const b=FemcGame.S.battleSave;b.tt.climb=['raqia-summit','zebul-summit','araboth-summit'];b.tt.supers=['super_tiger'];FemcGame.saveQuiet()})()")
            menu(p); click(p, '[data-sk=solar]'); click(p, '[data-skmode=sun]'); click(p, '[data-ray=eclipse]')
            ok(p.eval("document.querySelectorAll('.sun-ecl-seg.shut').length") == 0 and state(p, 'ec-hl1') == 'avail', 'Eclipse open after the climb')
            if tag == '1440x810':
                pts0 = p.eval(B + '.pts'); buy(p, 'ec-hl1')
                ok(state(p, 'ec-hl1') == 'own' and p.eval(B + '.pts') == pts0 - 3, 'an Eclipse node bought by click')
                p.eval("(()=>{const b=FemcGame.S.battleSave,E=FemcBattleEngine;b.nodes.push(...E.treeNodes().filter(n=>n.seg==='healer'&&!b.nodes.includes(n.id)).map(n=>n.id));FemcGame.saveQuiet()})()")
                menu(p); click(p, '[data-sk=solar]'); click(p, '[data-skmode=sun]')
                click(p, '[data-hn=rad-healer]'); r0 = p.eval(B + '.rad.healer||0'); click(p, '[data-hn=rad-healer]'); click(p, '[data-sk-buy]')
                ok(p.eval(B + '.rad.healer') == r0 + 2 and p.eval("document.querySelector('[data-hn=rad-healer] small').textContent") == f'{r0 + 2}/10', 'Radiance bought twice by click, badge counts')
                click(p, '[data-hn=ec-hl-sol]')
            shot(p, f'late-sun-open-{tag}')
            # An epilogue branch: sealed, then the life sim's finished world opens it (menu.js syncLife).
            menu(p); click(p, '[data-sk=solar]'); click(p, '[data-skmode=sun]'); click(p, '[data-ray=epilogues]')
            ok(state(p, 'ep-ru1') == 'sealed' and 'Runners epilogue' in p.eval("document.querySelector('.g-sk-why').textContent"), 'epilogue branch sealed with its hint')
            p.eval("(()=>{FemcGame.S.epilogues={runners:{done:true,route:'haechan',at:1}};FemcGame.saveQuiet()})()")
            menu(p); click(p, '[data-sk=solar]'); click(p, '[data-skmode=sun]'); click(p, '[data-ray=epilogues]')
            ok(p.eval(B + '.epis.includes("runners")') and state(p, 'ep-ru1') == 'avail' and state(p, 'ep-hx1') == 'sealed', 'finishing the world opens its branch')
            if tag == '1440x810':
                buy(p, 'ep-ru1'); ok(state(p, 'ep-ru1') == 'own', 'an epilogue node bought')
            click(p, '[data-hn=ep-ru2]')
            shot(p, f'late-epilogue-{tag}')
            # A party orbit with the second crown, the duet and Radiance.
            p.eval("""(()=>{const b=FemcGame.S.battleSave,E=FemcBattleEngine;['akihiko','shinjiro'].forEach(m=>{FemcGame.progress(m).rank=10;b.mem[m]={lvl:99,exp:0}});
              b.ptree.akihiko=E.ptreeNodes('akihiko').filter(n=>n.ray==='core'||n.ray==='champion'||n.crown).filter(n=>!n.rad).map(n=>n.id);b.prad={akihiko:{champion:3}};b.ptree.shinjiro=[];FemcGame.saveQuiet()})()""")
            menu(p); click(p, '[data-sk=akihiko]')
            ok(p.eval("!!document.querySelector('[data-hn=ak-crown2]') && !!document.querySelector('[data-hn=duet-old-friends]') && !!document.querySelector('.sun-bridge')"), 'orbit shows the second crown, the duet and its bridge')
            ok(state(p, 'ak-crown2') == 'avail' and state(p, 'akihiko-rad-champion') == 'avail' and state(p, 'akihiko-rad-combo') == 'sealed', ('orbit states', state(p, 'ak-crown2'), state(p, 'akihiko-rad-champion')))
            if tag == '1440x810':
                p.eval("FemcGame.S.battleSave.mem.akihiko.lvl=99;FemcGame.saveQuiet()")
                pts = p.eval("FemcBattleEngine.ptreePts(FemcGame.S.battleSave,'akihiko')")
                if pts >= 15:
                    buy(p, 'duet-old-friends'); ok(state(p, 'duet-old-friends') == 'own', 'duet bought by click')
                    ok(p.eval("FemcBattleEngine.ptreeState(FemcGame.S.battleSave,'shinjiro','duet-old-friends')") == 'own', 'the duet is owned on the partner too')
            click(p, '[data-hn=akihiko-rad-champion]')
            ok(p.eval("document.querySelector('[data-hn=akihiko-rad-champion] small').textContent").endswith('/10'), 'party Radiance badge')
            shot(p, f'late-orbit-{tag}')
            click(p, '[data-hn=ak-crown2]'); shot(p, f'late-orbit-crown2-{tag}')
        p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 850, 'deviceScaleFactor': 1, 'mobile': False})
        errs = p.console(); ok(not errs, errs)
        results['late menu'] = 'sealed and open ring, buys, Radiance, epilogue branch via the life sim, orbit late nodes'
        print('Late-game menu OK; screenshots in', SHOTS, flush=True)

        # 9) Practice: the same sun (148 nodes) with the sealed hints; the orbit's late nodes; a practice save with a finished
        #    world in this browser's clears opens its branch there.
        p.goto(URL)
        p.eval("localStorage.setItem('kg-femc-revamp-clears',JSON.stringify([{run:'r1',ending:'R',at:1,ngp:0,epi:['hoax']}]));localStorage.setItem('kg-femc-battle-proto',JSON.stringify({v:4,treeV:4,tv:2,lvl:99,exp:0,pts:40,nodes:['sun1','star1','bell1'],party:['akihiko'],mem:{akihiko:{lvl:99,exp:0}},evo:Object.fromEntries(FEMC_BATTLE_DATA.party.map(m=>[m.id,true]).concat([['fuuka',true]])),tipsSeen:Object.keys(FEMC_BATTLE_DATA.tips),gear:{owned:{},eq:{}}}))")
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=10&seed=4'})
        p.wait("!!window.FemcBattle && FemcBattle.screen()==='hub'", 60)
        p.eval("document.querySelector('[data-go=tree]').click()"); p.wait("FemcBattle.screen()==='tree'")
        PR = p.eval("""(()=>{const q=s=>document.querySelector(s),cls=id=>q(`.bt-sun [data-hn="${id}"]`).className.split(' ')[1];
          q('.bt-sun [data-hn="ec-st1"]').click();const hint=q('.bt-tree-foot em').textContent;
          return {n:document.querySelectorAll('.bt-sun [data-hn]').length,ec:cls('ec-st1'),hx:cls('ep-hx1'),ru:cls('ep-ru1'),hint,shadows:document.querySelectorAll('.bt-sun .sun-ecl-seg.shut').length}})()""")
        ok(PR['n'] == 148 and PR['ec'] == 'sealed' and PR['hx'] == 'avail' and PR['ru'] == 'sealed' and '300F' in PR['hint'] and PR['shadows'] == 6, ('practice sun', PR))
        p.eval("document.querySelector('[data-who=akihiko]').click()")
        ok(p.eval("!!document.querySelector('.bt-sun [data-hn=ak-crown2]') && document.querySelector('.bt-sun [data-hn=ak-crown2]').className.split(' ')[1]==='sealed'"), 'practice orbit shows the sealed second crown')
        errs = p.console(); ok(not errs, errs)
        results['late practice'] = PR
        print('Late-game practice screens OK', flush=True)

    if want('library'):
        setup(p, lvl=40, pts=200)
        p.eval("""(()=>{const b=FemcGame.S.battleSave,E=FemcBattleEngine;
          ['sun1','st1','st2','tr1','bell3','tr2','jade1','jade2','star1','star2','bell1','bell2','hl1','bell4a','mg1','jade4a','jade5','jade6'].forEach(n=>{const r=E.treeBuy(b,n);if(!r.ok)throw n+': '+r.why});
          FemcGame.saveQuiet()})()""")
        menu(p)
        click(p, '[data-skmode=list]')
        L = lib(p)
        ok(len(L) > 8 and p.eval("document.querySelectorAll('[data-lib]').length") == len(L), ('every skill she knows is listed', L))
        ok(p.eval("document.querySelectorAll('[data-slot]').length") == 8 and len(kit(p)) == 8, 'eight slots, full')
        out = [x for x in L if x not in kit(p)]
        ok(p.eval("document.querySelectorAll('.g-lib-sk .g-new').length") >= 1, 'new skills marked')
        # Filters.
        click(p, '[data-libf=magic]')
        shown = p.eval("[...document.querySelectorAll('[data-lib]')].map(b=>b.dataset.lib)")
        ok(shown and all(p.eval("(id=>{const s=FEMC_BATTLE_DATA.skills[id];return ['dmg','insta'].includes(s.type)&&!FemcBattleEngine.PHYS.has(s.el)})(%s)" % json.dumps(x)) for x in shown), ('magic filter', shown))
        click(p, '[data-libf=all]')
        # A skill, then Swap in…, then a slot: it replaces that slot, and what was there goes back to the list.
        a = out[0]
        click(p, '[data-lib="%s"]' % a)
        ok(p.eval("!document.querySelector('[data-lib=\"%s\"] .g-new')" % a), 'looking at it clears NEW')
        click(p, '[data-lib-equip]')
        ok(p.eval("document.querySelector('[data-slot=\"0\"]').classList.contains('pick')"), 'full: pick a slot')
        was = kit(p)[2]
        click(p, '[data-slot="2"]')
        ok(kit(p)[2] == a and was not in kit(p) and was in lib(p), ('swap into slot 3', kit(p)))
        # A slot, then a skill: it goes in that slot.
        click(p, '[data-slot="0"]')
        click(p, '[data-lib="%s"]' % was)
        ok(kit(p)[0] == was, ('slot then skill', kit(p)))
        # Moving an equipped skill swaps the two slots.
        k0 = kit(p)
        click(p, '[data-slot="7"]'); click(p, '[data-lib="%s"]' % k0[0])
        ok(kit(p)[7] == k0[0] and kit(p)[0] == k0[7], ('swap two slots', kit(p)))
        # Remove, then Equip into the free slot.
        rem = kit(p)[1]
        click(p, '[data-lib="%s"]' % rem); click(p, '[data-lib-remove]')
        ok(len(kit(p)) == 7 and rem not in kit(p), 'take out')
        b2 = [x for x in lib(p) if x not in kit(p) and x != rem][0]
        click(p, '[data-lib="%s"]' % b2); click(p, '[data-lib-equip]')
        ok(len(kit(p)) == 8 and kit(p)[7] == b2, ('equip into the free slot', kit(p)))
        # Keyboard: arrows walk the list.
        p.eval("document.querySelector('[data-slot=\"0\"]').focus()")
        key(p, 'ArrowDown')
        ok(p.eval("document.activeElement.dataset.slot") == '1', 'arrows walk the slots and list')
        # In the Dark Hour menu (outside a fight) she can still swap.
        p.eval("FemcMenu.close()"); p.wait("!document.querySelector('.g-fm-ov')")
        p.eval("FemcMenu.open('skills',{inBattle:true})"); p.wait("!!document.querySelector('[data-skmode=list]')")
        click(p, '[data-skmode=list]')
        click(p, '[data-slot="1"]'); click(p, '[data-lib="%s"]' % rem)
        ok(kit(p)[1] == rem, 'swap in the Dark Hour menu')
        final = kit(p)
        # A real fight uses exactly these eight (plus nothing from the list).
        p.eval("FemcMenu.close()"); p.wait("!document.querySelector('.g-fm-ov')")
        p.eval("FemcGame.S.battleSave.party=['akihiko','yukari','junpei'];FemcGame.makeHandoff('scripted',{script:'skills-test',forced:true,party:['solar','akihiko','yukari','junpei']});FemcGame.save()")
        p.battle(); p.eval("window.__hoStay=true")
        p.wait('!!FemcBattle.B && FemcBattle.B.party().length===4', 60)
        bs = p.eval("FemcBattle.B.party()[0].skills")
        ok([x for x in bs if x in L] == final, ('the battle uses her eight', bs, final))
        for i in range(600):
            r = p.eval(r"""(()=>{const F=FemcBattle,c=F.ctl;if(c?.kind==='allout'){c.pickValue('0');return null}if(c?.kind!=='menu')return null;const v=c.items.map(i=>i.v);
              if(F.B.S.cur.mid!=='solar'){if(v.includes('guard'))c.pickValue('guard');else c.back&&c.back();return null}
              if(v.includes('skill')&&v.includes('guard')){c.pickValue('skill');return 'skill'}return 'in'})()""")
            if r: break
            time.sleep(0.05)
        p.wait("FemcBattle.ctl?.kind==='menu' && FemcBattle.ctl.items.some(i=>i.v===%s)" % json.dumps(final[0]), 30)
        menu_items = p.eval("FemcBattle.ctl.items.map(i=>i.v)")
        ok(all(x in menu_items for x in final) and not any(x in menu_items for x in L if x not in final), ('battle skill menu', menu_items))
        p.eval("FemcBattle.hoFinish('retreat')"); p.top()
        results['skill list'] = {'known': len(L), 'slots': final}
        errs = p.console(); ok(not errs, errs)
        print('Skill list: every skill kept, filters, swap/slot/move/remove/equip, keys, Dark Hour, real fight OK', flush=True)

    # ── The sun with a mouse and on a phone: tap, drag to pan, wheel and pinch to zoom, + − and Fit ──
    if want('sun'):
        setup(p, lvl=40, pts=60)
        p.eval("(()=>{const b=FemcGame.S.battleSave;b.nodes=['sun1','st1','st2','bell1'];FemcGame.saveQuiet()})()")
        for w, h, mobile in [(1280, 850, False), (375, 812, True)]:
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
            if mobile: p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': True, 'maxTouchPoints': 5})
            p.eval("window.__sunView=null"); menu(p)
            no_scroll(p)
            z0 = zoom(p)
            # Tap / click a node: it's selected, and a second tap buys it.
            p.eval("document.querySelector('.sun-vp').scrollIntoView({block:'start'})")
            click(p, '[data-ray=striker]')
            x, y, bw, bh = center_of(p, '[data-hn=st3]')
            ok(bw >= (24 if mobile else 18), ('nodes are big enough to tap', bw))
            if mobile:
                for t in ('touchStart', 'touchEnd'):
                    p.ws.call('Input.dispatchTouchEvent', {'type': t, 'touchPoints': [{'x': x, 'y': y}] if t == 'touchStart' else []})
                    time.sleep(0.05)
            else:
                mouse(p, 'mousePressed', x, y, 1); mouse(p, 'mouseReleased', x, y, 0)
            time.sleep(0.2)
            ok(p.eval("document.querySelector('.g-sn.sel').dataset.hn") == 'st3', ('tap selects', p.eval("document.querySelector('.g-sn.sel').dataset.hn")))
            # Drag pans; a drag over a node never selects it.
            vx, vy, vw, vh = center_of(p, '.sun-vp')
            before = p.eval("document.querySelector('.sun-stage').style.transform")
            sx, sy = vx - 30, vy + 10
            if mobile:
                p.ws.call('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': sx, 'y': sy}]})
                for i in range(1, 9): p.ws.call('Input.dispatchTouchEvent', {'type': 'touchMove', 'touchPoints': [{'x': sx + 12 * i, 'y': sy + 6 * i}]}); time.sleep(0.02)
                p.ws.call('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
            else:
                mouse(p, 'mousePressed', sx, sy, 1)
                for i in range(1, 9): mouse(p, 'mouseMoved', sx + 12 * i, sy + 6 * i, 1); time.sleep(0.02)
                mouse(p, 'mouseReleased', sx + 96, sy + 48, 0)
            time.sleep(0.2)
            ok(p.eval("document.querySelector('.sun-stage').style.transform") != before, 'drag pans')
            ok(p.eval("document.querySelector('.g-sn.sel').dataset.hn") == 'st3', 'a drag is not a tap')
            # Zoom: wheel (desktop) or pinch (phone), then the buttons and Fit.
            z1 = zoom(p)
            if mobile:
                p.ws.call('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': vx - 20, 'y': vy, 'id': 1}, {'x': vx + 20, 'y': vy, 'id': 2}]})
                for i in range(1, 7): p.ws.call('Input.dispatchTouchEvent', {'type': 'touchMove', 'touchPoints': [{'x': vx - 20 - 10 * i, 'y': vy, 'id': 1}, {'x': vx + 20 + 10 * i, 'y': vy, 'id': 2}]}); time.sleep(0.02)
                p.ws.call('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
            else:
                p.ws.call('Input.dispatchMouseEvent', {'type': 'mouseWheel', 'x': vx, 'y': vy, 'deltaX': 0, 'deltaY': -300})
            time.sleep(0.2)
            z2 = zoom(p)
            ok(z2 > z1 * 1.15, ('pinch / wheel zooms in', z1, z2))
            click(p, '[data-sun-zoom=out]')
            ok(zoom(p) < z2, 'the − button')
            click(p, '[data-sun-zoom=fit]')
            zf = zoom(p)
            ok(p.eval("(()=>{const v=document.querySelector('.sun-vp').getBoundingClientRect(),s=document.querySelector('[data-hn=unveiled]').getBoundingClientRect(),t=document.querySelector('[data-hn=tr-key]').getBoundingClientRect();return s.top>=v.top-2&&t.bottom<=v.bottom+2})()"), 'Fit shows the whole sun')
            click(p, '[data-sun-zoom=in]')
            ok(zoom(p) > zf, 'the + button')
            # The view stays put across a re-render (like a map); a keyboard step keeps the selection in view.
            zk = zoom(p)
            p.eval("document.querySelector('[data-hn=st3]').focus()")
            for i in range(5): key(p, 'ArrowRight')
            ok(abs(zoom(p) - zk) < 0.01, 'zoom kept across re-renders')
            ok(p.eval("(()=>{const v=document.querySelector('.sun-vp').getBoundingClientRect(),s=document.querySelector('.g-sn.sel').getBoundingClientRect();return s.left>=v.left&&s.right<=v.right&&s.top>=v.top&&s.bottom<=v.bottom})()"), 'the selection stays in view')
            shot(p, 'sun-' + ('phone' if mobile else 'desktop'))
            results['sun ' + ('phone' if mobile else 'desktop')] = {'start zoom': z0, 'pinch/wheel': [z1, z2], 'fit': zf, 'node px': round(bw)}
            if mobile: p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': False})
        p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 850, 'deviceScaleFactor': 1, 'mobile': False})
        errs = p.console(); ok(not errs, errs)
        print('Sun: tap, drag, wheel/pinch, buttons, Fit, kept view, keys in view, desktop and phone OK', json.dumps({k: v for k, v in results.items() if k.startswith('sun ')}), flush=True)

    # ── Every new skill in a real fight (the battle frame, driven through its menus) ──
    if want('fight'):
        setup(p, lvl=45, pts=0)
        # Solar's eight: Kat's five, Matarukaja, Golden Rope, and Dia's line; the Veil passives for Off Angle Flank.
        p.eval("""(()=>{const b=FemcGame.S.battleSave;
          b.nodes=['sun1','bell1','bell2','bell3','bell4b','bell5','bell6','bell-m1','star1','star2','star3','star4a','star5','veil1','veil2','veil3'];
          b.memories=['runners-stadium'];b.equip={solar:['golden_rope','dia','kunai_flick','tarukaja','public_veneer','call_the_bluff','protective_suzu','kitsune_rush']};b.party=['akihiko','yukari','junpei'];
          FemcGame.makeHandoff('scripted',{script:'skills-test',forced:true,party:['solar','akihiko','yukari','junpei']});FemcGame.save();})()""")
        k = kit(p)
        ok(sorted(k) == sorted(['golden_rope', 'diarama', 'kunai_flick', 'matarukaja', 'public_veneer', 'call_the_bluff', 'protective_suzu', 'kitsune_rush']), k)
        p.battle()
        p.eval("window.__hoStay=true")
        p.wait('!!FemcBattle.B && FemcBattle.B.party().length===4', 60)
        # Beefy foes and a sturdy party (the fight must last) (the fight must last), an ailing ally (Suzu cures it), a buffed foe (the Bluff strips it).
        p.eval("""(()=>{const B=FemcBattle.B;B.foes().forEach(f=>{f.maxHp=f.hp=999999;f.aff={...f.aff,pierce:'normal'};});B.party().forEach(u=>{u.maxHp=u.hp=99999});
          B.party()[2].ail={id:'poison',t:3};B.foes()[0].buffs.atk=2;B.foes()[0].buffT.atk=99;
          window.log=[];const act=B.act;B.act=a=>{const mid=B.S.cur.mid,sp=B.S.cur.sp,ev=act(a);log.push({mid,a,ev,sp,after:B.S.cur&&B.S.cur.sp});return ev};
          const ea=B.enemyAct;B.enemyAct=()=>{const ev=ea();log.push({mid:'enemy',ev});return ev};
          window.plan=[{skill:'protective_suzu',target:'all'},{skill:'public_veneer'},{skill:'call_the_bluff',target:'e0'},{skill:'kitsune_rush',target:'all'},
            {skill:'matarukaja',target:'all'},{skill:'matarukaja',target:'all'},{skill:'matarukaja',target:'all'},{skill:'matarukaja',target:'all'},{freeze:true,skill:'kunai_flick',target:'e1'},{skill:'kunai_flick',target:'e1'},{skill:'public_veneer'}];
          window.done=[];addEventListener('unhandledrejection',e=>{window.__rej=String(e.reason&&e.reason.stack||e.reason)});
          window.dump=()=>({ctl:FemcBattle.ctl&&FemcBattle.ctl.kind,out:B.outcome(),screen:FemcBattle.screen(),paused:FemcBattle.paused,rej:window.__rej||null,err:window.__err||null,
            cur:B.S.cur&&(B.S.cur.mid||B.S.cur.kind),queue:B.S.queue,oneMore:B.S.oneMore,dom:[...document.querySelectorAll('body > div, .bt-screen > div')].map(x=>x.className),
            last:log.slice(-3).map(x=>[x.mid,x.ev.map(e=>e.t)]),blog:FemcBattle.blog.slice(-6).map(x=>x.t),marks:Object.keys(FemcBattle.marks).slice(-12)});addEventListener('error',e=>{window.__err=String(e.error&&e.error.stack||e.message)});return true})()""")
        STEP = r"""(()=>{const F=FemcBattle,B=F.B,c=F.ctl;if(!B||B.outcome())return 'over';
          if(c?.kind==='allout'){c.pickValue('0');return 'allout'}
          if(c?.kind!=='menu')return null;const u=B.S.cur,v=c.items.map(i=>i.v);
          if(u.mid!=='solar'){ if(v.includes('guard'))c.pickValue('guard'); else c.back&&c.back(); return 'guard'}
          if(!plan.length){return 'plan-done'}
          const st=plan[0];
          if(v.includes('skill')&&v.includes('guard')){c.pickValue('skill');return 'root'}
          if(v.includes(st.skill)){ if(st.freeze){B.U(st.target).ail={id:'freeze',t:2};} if(FEMC_BATTLE_DATA.skills[st.skill].target==='self')done.push(plan.shift().skill); c.pickValue(st.skill);return 'skill'}
          if(v.includes(st.target)||v.includes('all')){c.pickValue(v.includes(st.target)?st.target:'all');done.push(plan.shift().skill);return 'target'}
          return 'wait'})()"""
        def run_plan(limit=300):
            t0 = time.time()
            while time.time() - t0 < limit:
                r = p.eval(STEP)
                if r in ('over', 'plan-done'): return r
                time.sleep(0.02)
            return 'timeout'
        r = run_plan()
        ok(r == 'plan-done', (r, p.eval('done'), p.eval('dump()')))
        p.wait("log.filter(x=>x.mid==='solar'&&x.a.skill==='public_veneer').length===2 && document.querySelector('.bt-card[data-id=p1] .st').innerHTML.includes('FLANK')", 60)
        flank_chip = p.eval("document.querySelector('.bt-card[data-id=p1] .st').innerHTML")
        # Three more Matarukajas: the HUD shows the capped level (ATK ▲▲▲ and its turns).
        p.eval("plan.push({skill:'matarukaja',target:'all'},{skill:'matarukaja',target:'all'},{skill:'matarukaja',target:'all'})")
        ok(run_plan() == 'plan-done', 'second plan')
        p.wait("log.filter(x=>x.mid==='solar'&&x.a.skill==='matarukaja').length===7", 60)
        p.wait("!!document.querySelector('.bt-card[data-id=p0] .st [data-buff=atk3]')", 30)
        hud = p.eval("(()=>{const i=document.querySelector('.bt-card[data-id=p0] .st [data-buff=atk3]');return {text:i.textContent,title:i.title}})()")
        ok('▲▲▲' in hud['text'] and 'up 3 levels' in hud['title'], hud)
        L = p.eval("JSON.parse(JSON.stringify(log.map(x=>({mid:x.mid,a:x.a,sp:x.sp,after:x.after,ev:x.ev.map(e=>({t:e.t,tgt:e.tgt,src:e.src,aff:e.aff,warded:e.warded,amount:e.amount,crit:e.crit,keen:e.keen,flank:e.flank,v:e.v,stat:e.stat,capped:e.capped,turns:e.turns,id:e.id,skill:e.skill}))}))))")
        solar = [x for x in L if x['mid'] == 'solar']
        evs = lambda x: x['ev']
        # Protective Suzu: everyone warded, the poison cured, enemy hits on warded members do nothing.
        suzu = solar[0]; ok(suzu['a']['skill'] == 'protective_suzu', suzu['a'])
        ok(sum(1 for e in evs(suzu) if e['t'] == 'ward') == 4 and any(e['t'] == 'ailEnd' and e['id'] == 'poison' for e in evs(suzu)), evs(suzu))
        idx = L.index(suzu)
        warded = [e for x in L[idx + 1:] if x['mid'] == 'enemy' for e in x['ev'] if e['t'] == 'hit' and e.get('warded')]
        ok(warded and all(e['amount'] == 0 for e in warded), 'enemy hits on warded members do nothing')
        # Public Veneer: aggro, +2 defense levels, single-target attacks drawn to Solar; Off Angle Flank lights up the others.
        ven = solar[1]
        ok(any(e['t'] == 'taunt' for e in evs(ven)) and any(e['t'] == 'buff' and e['stat'] == 'def' and e['v'] == 2 for e in evs(ven)), evs(ven))
        drawn = [e for x in L if x['mid'] == 'enemy' for e in x['ev'] if e['t'] == 'drawn']
        hits_after = [e for x in L[L.index(ven) + 1:] if x['mid'] == 'enemy' for e in x['ev'] if e['t'] == 'hit' and not e.get('warded')]
        # Bluff: buffs stripped (even lasting), Disoriented.
        bl = solar[2]
        ok(any(e['t'] == 'dispel' for e in evs(bl)) and any(e['t'] == 'ail' and e['id'] == 'disorient' for e in evs(bl)), evs(bl))
        # Kitsune Rush: 3 turns; costs halved afterwards; once per battle.
        kr = solar[3]
        ok(any(e['t'] == 'kitsune' for e in evs(kr)), evs(kr))
        mt = solar[4]
        ok(mt['sp'] - mt['after'] == 5, ('Matarukaja at half cost', mt['sp'], mt['after']))
        # Buff stacking: four Matarukajas -> 1, 2, 3, 3 (capped), turns refreshed to 3.
        lv = [[e['v'] for e in evs(x) if e['t'] == 'buff' and e['stat'] == 'atk'][0] for x in solar[4:8]]
        caps = [[e['capped'] for e in evs(x) if e['t'] == 'buff' and e['stat'] == 'atk'][0] for x in solar[4:8]]
        ok(lv == [1, 2, 3, 3] and caps == [False, False, False, True], (lv, caps))
        ok(all([e['turns'] for e in evs(x) if e['t'] == 'buff' and e['stat'] == 'atk'][0] == 3 for x in solar[4:8]), 'recast refreshes 3 turns')
        # Kunai Flick on a frozen (ailing) foe: a sure ×3.5 critical.
        kf = solar[8]
        hit = [e for e in evs(kf) if e['t'] == 'hit'][0]
        ok(hit['crit'] and hit['keen'], hit)
        state_now = p.eval("""(()=>{const B=FemcBattle.B,s=B.party()[0];return {once:B.usedOnce(s,'kitsune_rush'),flank:B.flanking(B.party()[1]),kit:B.S.kitsune,
          chips:document.querySelector('.bt-card[data-id=p1] .st').innerHTML, solarChips:document.querySelector('.bt-card[data-id=p0] .st').innerHTML,
          foeDis:B.foes()[0].buffs.atk}})()""")
        ok(state_now['once'], 'Kitsune Rush is once per battle')
        # The skill list marks Kitsune Rush USED on Solar's next turn.
        for i in range(2000):
            r = p.eval(r"""(()=>{const F=FemcBattle,B=F.B,c=F.ctl;if(c?.kind==='allout'){c.pickValue('0');return null}if(c?.kind!=='menu')return null;const u=B.S.cur,v=c.items.map(i=>i.v);
              if(u.mid!=='solar'){c.pickValue('guard');return null}
              if(v.includes('skill')&&v.includes('guard')){c.pickValue('skill');return null}
              const it=c.items.find(i=>i.v==='kitsune_rush');return it?{off:!!it.off,html:document.querySelector('.bt-mi[data-v=kitsune_rush]').textContent}:null})()""")
            if r: break
            time.sleep(0.02)
        ok(r and r['off'] and 'USED' in r['html'], r)
        # Off Angle Flank: while Solar draws aggro the others flank (HUD chip, evasion and crit in the engine).
        stat = p.eval("""(()=>{const E=FemcBattleEngine,save=FemcBattle.save,out={miss:[0,0],crit:[0,0],on:0};
          for(let s=1;s<=400;s++) for(const fl of [0,1]){
            const b=E.create({party:['solar','akihiko'].map(id=>E.buildUnit(id,save)),enemies:['pesce@30'],rand:E.rng(s),mods:fl?{flank:true}:{}});
            const foe=b.foes()[0],aki=b.party()[1];b.party()[0].taunt=3;if(fl&&b.flanking(aki))out.on++;
            foe.skills=['e_mazio'];foe.ai='random';b.S.cur=foe;
            if(b.enemyAct().some(e=>e.t==='miss'&&e.tgt===aki.id))out.miss[fl]++;
            b.S.cur=aki;foe.ail=null;foe.guard=false;foe.down=false;foe.ward=false;foe.hp=foe.maxHp;
            if(b.act({type:'attack',target:foe.id}).some(e=>e.t==='hit'&&e.crit))out.crit[fl]++;
          }
          return out})()""")
        ok(stat['on'] == 400 and stat['miss'][1] > stat['miss'][0] + 60 and stat['crit'][1] > stat['crit'][0] + 60, stat)
        ok('FLANK' in flank_chip, 'Off Angle Flank chip on an ally')
        p.eval("FemcBattle.hoFinish('retreat')")
        p.top()
        results['fight'] = {'suzu': 'ward+cure', 'veneer drawn': len(drawn), 'bluff': 'stripped+disoriented', 'kitsune': 'half cost, once', 'stack': lv, 'kunai': hit['amount']}
        errs = p.console(); ok(not errs, errs)
        print('Real fight: Suzu, Veneer, Bluff, Kitsune Rush, Kunai Flick, Flank, buff stacking OK', json.dumps(results['fight']), flush=True)

    # ── The new passives: measured in the engine with seeded fights, then on a real battle frame ──
    if want('passives'):
        setup(p, lvl=40, pts=0)
        R = p.eval(r"""(()=>{const E=FemcBattleEngine,save=FemcGame.S.battleSave,out={};
          const mk=(id,extra={})=>Object.assign(E.buildUnit(id,save),extra);
          const fight=(units,foes,seed)=>E.create({party:units,enemies:foes,rand:E.rng(seed),known:{}});
          const clean=f=>{f.ail=null;f.guard=false;f.down=false;f.hp=f.maxHp;f.buffs={atk:0,def:0,agi:0};};
          // Crit rate: Keen Edge (+12) and the cap (85%).
          out.crit=[0,0,0];
          for(let s=1;s<=500;s++)[0,12,200].forEach((c,i)=>{const b=fight([mk('solar',{critBonus:c})],['pesce@30'],s),f=b.foes()[0];f.maxHp=f.hp=1e7;f.aff={};b.S.cur=b.party()[0];if(b.act({type:'attack',target:f.id}).some(e=>e.t==='hit'&&e.crit))out.crit[i]++;});
          // Speed: haste moves her up the order against a slightly faster foe; Quick Draw puts her first on round 1.
          out.first=[0,0];
          for(let s=1;s<=300;s++)[0,0.3].forEach((h,i)=>{const b=fight([mk('solar',{haste:h,ag:30})],['pesce@30'],s);b.foes()[0].ag=33;b.nextTurn();if(b.S.cur===b.party()[0])out.first[i]++;});
          {const b=fight([mk('solar',{quick:true,ag:1})],['pesce@60'],3);b.nextTurn();out.quick=b.S.cur.side;}
          // Counters: 50% (capped at 60% even with Public Veneer's stance).
          out.counter=[0,0];
          for(let s=1;s<=400;s++)[[0.5,0],[0.5,0.4]].forEach(([c,v],i)=>{const b=fight([mk('solar',{counter:c,maxHp:1e6,hp:1e6})],['pesce@30'],s),u=b.party()[0],f=b.foes()[0];f.maxHp=f.hp=1e7;f.skills=['bash'];f.ai='random';
            if(v){u.taunt=3;u.veneer=v;}b.S.cur=f;if(b.enemyAct().some(e=>e.t==='counter'))out.counter[i]++;});
          // Regen: HP and SP at the start of her turn.
          {const b=fight([mk('solar',{hpRegen:0.04,spRegen:3})],['pesce'],5),u=b.party()[0];u.hp=Math.round(u.maxHp/2);u.sp=10;b.foes()[0].ag=-99;const ev=b.nextTurn().events;out.regen={hp:u.hp-Math.round(u.maxHp/2),want:Math.round(u.maxHp*0.04),sp:u.sp-10};}
          // Auto-buffs at the start: her own (Bastion / Daystar) and the party's (Security Detail / Tailwind).
          {const b=fight([mk('solar',{openBuff:['atk','def'],partyOpen:['agi']}),mk('yukari')],['pesce'],2),a=b.party()[0],y=b.party()[1];b.start();out.open={solar:a.buffs,yukari:y.buffs};}
          // Follow-ups: about their chance; never from a spread skill, never a follow-up of a follow-up.
          out.follow={n:0,chain:0,spread:0};
          for(let s=1;s<=300;s++){const b=fight([mk('solar',{followUp:0.4})],['pesce@30','pesce@30'],s),u=b.party()[0];b.foes().forEach(f=>{f.maxHp=f.hp=1e7});b.S.cur=u;
            const ev=b.act({type:'attack',target:b.foes()[0].id}),n=ev.filter(e=>e.t==='status'&&e.follow).length;out.follow.n+=n?1:0;if(n>1)out.follow.chain++;
            b.S.cur=u;u.sp=999;if(b.act({type:'skill',skill:'maragion',target:'all'}).some(e=>e.t==='status'&&e.follow))out.follow.spread++;}
          // Talking Points: her first skill each turn costs 25% less; a One More pays in full.
          {const b=fight([mk('solar',{firstCut:0.25})],['pesce'],4),u=b.party()[0],sk=FEMC_BATTLE_DATA.skills.maragion;out.cut=[b.costOf(u,sk).sp];u.cutUsed=true;out.cut.push(b.costOf(u,sk).sp);b.foes()[0].ag=-99;b.nextTurn();out.cut.push(b.costOf(u,sk).sp);}
          // Corona: the party takes 10% less while its holder stands.
          {const dmg=c=>{let t=0;for(let s=1;s<=60;s++){const b=fight([mk('solar',{maxHp:1e6,hp:1e6,corona:c}),mk('yukari',{maxHp:1e6,hp:1e6})],['pesce@30'],s),u=b.party()[0],y=b.party()[1],f=b.foes()[0];f.skills=['bash'];f.ai='random';b.S.cur=f;b.enemyAct().forEach(e=>{if(e.t==='hit'&&(e.tgt===y.id||e.tgt===u.id))t+=e.amount});}return t};out.corona=[dmg(0),dmg(0.1)];}
          // Guardian Bell: the first one who would fall keeps 1 HP, once.
          {const b=fight([mk('solar',{guardianBell:true}),mk('yukari')],['pesce@60'],6),u=b.party()[0],y=b.party()[1],f=b.foes()[0];f.st=f.ma=999;f.skills=['e_agilao'];f.ai='random';y.hp=1;
            let ev=[];for(let i=0;i<6&&!y.dead;i++){b.S.cur=f;ev=ev.concat(b.enemyAct());}out.bell={endure:ev.filter(e=>e.t==='endure').length,dead:y.dead||u.dead};}
          // SP back on a weakness (once a skill), Momentum on a One More, longer buffs and ailments.
          {const b=fight([mk('solar',{weakSp:3,momentum:4})],['pesce','pesce'],7),u=b.party()[0];b.foes().forEach(f=>{f.maxHp=f.hp=1e7;f.aff=Object.assign({},f.aff,{fire:'weak'})});u.sp=40;b.S.cur=u;const ev=b.act({type:'skill',skill:'maragion',target:'all'});
            out.weakSp={spGain:ev.filter(e=>e.t==='heal'&&e.tgt===u.id&&e.sp).map(e=>e.sp),onemore:ev.some(e=>e.t==='onemore'||e.t==='alloutReady')};}
          {const b=fight([mk('solar',{buffTurns:1,debuffTurns:1})],['pesce'],8),u=b.party()[0];b.S.cur=u;u.sp=99;u.skills.push('tarukaja');b.act({type:'skill',skill:'tarukaja',target:u.id});
            out.turns={buff:u.buffT.atk};}
          {const b=fight([mk('solar',{ailTurns:1,ailUp:1})],['pesce'],9),u=b.party()[0],f=b.foes()[0];f.maxHp=f.hp=1e7;u.skills.push('bewitch');u.sp=99;b.S.cur=u;b.act({type:'skill',skill:'bewitch',target:f.id});out.ail=f.ail;}
          return out})()""")
        c = R['crit']
        ok(c[1] > c[0] + 25 and c[2] <= 500 * 0.85 + 25 and c[2] > 380, ('crit up and the 85%% cap', c))
        ok(R['first'][1] > R['first'][0] + 60 and R['quick'] == 'party', ('haste and Quick Draw', R['first'], R['quick']))
        k = R['counter']
        ok(150 < k[0] < 250 and 190 < k[1] < 290, ('counter 50%%, capped at 60%% with Veneer', k))
        ok(R['regen']['hp'] >= R['regen']['want'] - 1 and R['regen']['sp'] == 3, R['regen'])
        ok(R['open']['solar']['atk'] == 1 and R['open']['solar']['def'] == 1 and R['open']['solar']['agi'] == 1 and R['open']['yukari']['agi'] == 1, ('auto-buffs', R['open']))
        f = R['follow']
        ok(80 < f['n'] < 160 and f['chain'] == 0 and f['spread'] == 0, ('follow-ups: ~40%%, no chains, no spread', f))
        base = p.eval("FEMC_BATTLE_DATA.skills.maragion.cost.sp")
        ok(R['cut'] == [int(-(-base * 0.75 // 1)), base, int(-(-base * 0.75 // 1))], ('first skill each turn', R['cut'], base))
        ok(0.85 * R['corona'][0] < R['corona'][1] < 0.95 * R['corona'][0], ('Corona -10%%', R['corona']))
        ok(R['bell']['endure'] >= 1, ('Guardian Bell', R['bell']))
        ok(R['weakSp']['spGain'][:1] == [3] and R['weakSp']['spGain'].count(3) == 1 and 4 in R['weakSp']['spGain'], ('SP on a weakness once, Momentum on the One More', R['weakSp']))
        ok(R['turns']['buff'] == 4, ('Long Speech: a buff lasts 4 turns', R['turns']))
        ok(R['ail'] and R['ail']['id'] == 'charm' and R['ail']['t'] >= 3, ('Lantern Trick: an ailment lasts longer', R['ail']))
        results['passives (engine)'] = R
        # A real battle frame: a Striker / Guard / Support build's passives on the unit and its opening buffs.
        p.eval("""(()=>{const b=FemcGame.S.battleSave;b.pts=0;
          b.nodes=['sun1','st1','st2','st3','st4b','st5','st6','st7','st-key','veil1','gd1','star3','veil3','veil4b','gd2','gd4','star1','star2','sp1','hy-gd-sp1','hy-sp-st1','hl1'];
          b.lvl=45;b.party=['akihiko','yukari','junpei'];
          FemcGame.makeHandoff('scripted',{script:'skills-test',forced:true,party:['solar','akihiko','yukari','junpei']});FemcGame.save();})()""")
        p.battle(); p.eval("window.__hoStay=true")
        p.wait("!!FemcBattle.B && FemcBattle.B.party().length===4 && FemcBattle.ctl?.kind==='menu'", 90)
        u = p.eval("""(()=>{const s=FemcBattle.B.party()[0],y=FemcBattle.B.party()[2];return {followUp:s.followUp,phys:s.physUp,crit:s.critBonus,counter:s.counter,cut:s.firstCut,hp:s.hpRegen,th:s.th,
          atk:s.buffs.atk,def:s.buffs.def,yDef:y.buffs.def,skills:s.skills}})()""")
        ok(abs(u['followUp'] - 0.3) < 1e-9 and u['phys'] >= 0.15 and abs(u['counter'] - 0.3) < 1e-9 and u['cut'] == 0.25 and u['hp'] >= 0.04, ('passives on the real unit', u))
        ok(u['atk'] >= 1 and u['def'] >= 1 and u['yDef'] >= 1 and u['th'] >= 20, ('opening buffs and Theurgy in a real fight', u))
        ok('solstice_edge' in u['skills'], u['skills'])
        p.eval("FemcBattle.hoFinish('retreat')"); p.top()
        results['passives (real frame)'] = u
        errs = p.console(); ok(not errs, errs)
        print('Passives: crit+cap, speed, counters+cap, regen, auto-buffs, follow-ups, first-skill cut, Corona, Bell, weakSp, Momentum, Long Speech, Lantern; real frame OK', flush=True)

    # ── Rush: staged decisions, then a real Rush fight ──
    if want('rush'):
        setup(p, lvl=40, pts=0)
        R = p.eval(r"""(()=>{const E=FemcBattleEngine,D=FEMC_BATTLE_DATA,save=FemcGame.S.battleSave,out={};
          const fight=(ids,foes,seed=3,f)=>{const units=ids.map(id=>E.buildUnit(id,save));const b=E.create({party:units,enemies:foes,rand:E.rng(seed),known:{}});if(f)f(b);return b};
          // 1) A supporter heals someone low.
          let b=fight(['solar','yukari','junpei'],['pesce','pesce'],3,b=>{b.party()[2].hp=Math.round(b.party()[2].maxHp*0.35)});
          out.heal=b.autoAction(b.party()[1],'rush');
          // 2) A buffer rebuffs when the buff is missing (long fight) ...
          b=fight(['solar','jihoon','junpei'],['hierophant'],3);
          out.buffMissing=b.autoAction(b.party()[1],'rush');
          // ... and when it's about to run out, but not when it's fresh
          b.party().forEach(p=>{p.buffs.atk=1;p.buffT.atk=1});out.buffExpiring=b.autoAction(b.party()[1],'rush');
          b.party().forEach(p=>{p.buffs.atk=1;p.buffT.atk=3});out.buffFresh=b.autoAction(b.party()[1],'rush');
          // ... and not in a fight that's about to end.
          b=fight(['solar','jihoon'],['maya'],3,b=>{b.foes()[0].hp=5});out.buffShort=b.autoAction(b.party()[1],'rush');
          // 3) An attacker goes for a known weakness and never a known null.
          b=fight(['solar','akihiko'],['pesce','beetle'],3,b=>{b.S.known.pesce={elec:true};b.S.known.beetle={elec:true};b.foes()[1].aff={...b.foes()[1].aff,elec:'null'}});
          out.weak=b.autoAction(b.party()[1],'rush');
          b=fight(['solar','akihiko'],['beetle'],3,b=>{b.S.known.beetle={elec:true,strike:true};b.foes()[0].aff={elec:'null',strike:'null'}});
          out.noNull=b.autoAction(b.party()[1],'rush');
          // 4) Theurgy fires the moment it's ready (and a support Theurgy waits for need).
          b=fight(['solar','junpei','yukari'],['pesce'],3,b=>{b.party()[1].th=100;b.party()[2].th=100});
          out.theurgy=b.autoAction(b.party()[1],'rush');out.supportWaits=b.autoAction(b.party()[2],'rush');
          // 5) Buffed foe: strip it.
          b=fight(['solar','mitsuru'],['hierophant'],3,b=>{b.foes()[0].buffs.atk=1;b.foes()[0].buffT.atk=99});
          out.dekaja=b.autoAction(b.party()[1],'rush');
          return out})()""")
        ok(R['heal']['type'] == 'skill' and R['heal']['skill'] in ('dia', 'diarama', 'media', 'mediarama', 'diarahan') , R['heal'])
        ok(R['buffMissing'].get('skill') == 'tarukaja', R['buffMissing'])
        ok(R['buffExpiring'].get('skill') == 'tarukaja' and R['buffFresh'].get('skill') != 'tarukaja', (R['buffExpiring'], R['buffFresh']))
        ok(R['buffShort'].get('skill') != 'tarukaja', R['buffShort'])
        ok(R['weak'].get('target') == 'e0' and R['weak'].get('skill', 'attack') in ('zio', 'zionga', 'ziodyne', 'mazio', 'mazionga') or R['weak'].get('target') == 'all', R['weak'])
        ok(R['noNull']['type'] in ('attack', 'skill') and R['noNull'].get('skill') not in ('zio', 'zionga', 'ziodyne', 'mazio', 'mazionga', 'sonic_punch', 'kill_rush', 'heat_wave'), R['noNull'])
        ok(R['theurgy']['type'] == 'theurgy' and R['supportWaits']['type'] != 'theurgy', (R['theurgy'], R['supportWaits']))
        ok(R['dekaja'].get('skill') == 'dekaja', R['dekaja'])
        # A real Rush fight in Tartarus (Rush is for ordinary Shadows): Junpei is hurt, Yukari (Direct) heals him under Rush.
        p.eval("FemcGame.S.battleSave.party=['akihiko','yukari','junpei'];FemcGame.S.tartarus.lastParty=['solar','akihiko','yukari','junpei'];FemcGame.makeHandoff('tartarus',{party:['solar','akihiko','yukari','junpei']});FemcGame.save()")
        p.battle(); p.eval("window.__hoStay=true")
        p.wait("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'", 60)
        p.eval("window.__btGroup=['pesce','pesce'];document.querySelector('[data-go=run],[data-go=cont]').click()")
        for i in range(400):
            st = p.eval("""(()=>{const F=FemcBattle,c=F.ctl;if(F.B&&F.screen()==='battle')return 'battle';const tip=document.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return null}
              if(c?.kind==='map'){const o=c.opts||[];const n=o.find(x=>x.type==='shadow')||o[0];if(n)c.go(n.id);return null}
              if(c?.kind==='buttons'){const b=document.querySelector('.bt-btn.pink:not(:disabled)');b&&b.click();return null}return null})()""")
            if st == 'battle': break
            time.sleep(0.05)
        p.wait('!!FemcBattle.B && FemcBattle.B.party().length===4', 60)
        p.eval("""(()=>{const B=FemcBattle.B;B.foes().forEach(f=>{f.maxHp=f.hp=Math.round(f.maxHp*8)});B.party()[3].hp=Math.round(B.party()[3].maxHp*0.42);
          window.rlog=[];const act=B.act;B.act=a=>{const u=B.S.cur;rlog.push({mid:u.mid,a,hp:B.party().map(p=>p.hp/p.maxHp)});return act(a)};return true})()""")
        p.wait("FemcBattle.ctl?.kind==='menu'", 60)
        p.eval("document.dispatchEvent(new KeyboardEvent('keydown',{key:'r',bubbles:true}))")
        p.wait("FemcBattle.B.outcome()||FemcBattle.screen()!=='battle'||rlog.length>=14", 120)
        rl = p.eval('rlog')
        ok(p.eval('FemcBattle.marks["rush-act"]') >= 4, 'Rush acted')
        heals = [x for x in rl if x['mid'] == 'yukari' and x['a'].get('skill') in ('dia', 'diarama', 'media', 'mediarama', 'diarahan')]
        ok(heals, rl[:6])
        ok(not [x for x in rl if x['a']['type'] == 'guard'], 'no wasted guard turns under Rush')
        p.eval("FemcBattle.hoFinish('retreat')"); p.top()
        results['rush'] = {k: v for k, v in R.items()}
        results['rush']['real fight'] = {'actions': len(rl), 'heals': len(heals)}
        errs = p.console(); ok(not errs, errs)
        print('Rush: heal, rebuff (missing/expiring/fresh/short), weakness, no null, Theurgy, Dekaja, real Rush fight OK', flush=True)

    # ── No finish-card flash after a won boss fight ──
    if want('flash'):
        setup(p, lvl=60, pts=0)
        p.eval("FemcGame.S.battleSave.party=['akihiko','yukari','junpei'];FemcGame.makeHandoff('scripted',{script:'magician',forced:true,party:['solar','akihiko','yukari','junpei']});FemcGame.save()")
        p.battle(); p.eval("window.__hoStay=true")
        p.wait("!!document.querySelector('[data-prep=begin]')", 60); p.eval("document.querySelector('[data-prep=begin]').click()")
        p.wait('!!FemcBattle.B && FemcBattle.screen()==="battle"', 60)
        p.eval("""(()=>{window.after=[];window.during=0;new MutationObserver(m=>m.forEach(r=>r.addedNodes.forEach(n=>{if(n.nodeType===1&&(n.matches?.('.bt-finish,.bt-allout')||n.querySelector?.('.bt-finish'))){if(FemcBattle.B&&FemcBattle.B.outcome())after.push(n.className);else during++}}))).observe(document.body,{childList:true,subtree:true});
          FemcBattle.B.foes().forEach(f=>{f.hp=1});return true})()""")
        for i in range(3000):
            r = p.eval(r"""(()=>{const F=FemcBattle,c=F.ctl;if(window.__hoResult)return 'done';if(F.screen()==='results'){document.querySelector('[data-go=next]')?.click();return null}
              if(c?.kind==='allout'){c.pickValue('1');return null}if(c?.kind==='buttons'&&F.screen()!=='battle'){c.pick();return null}
              if(c?.kind!=='menu')return null;const v=c.items.map(i=>i.v);if(v.includes('attack')){c.pickValue('attack');return null}c.pickValue(v[0]);return null})()""")
            if r == 'done': break
            time.sleep(0.03)
        ok(p.eval('window.__hoResult.outcome') == 'win', 'boss won')
        ok(p.eval('after.length') == 0 and not p.eval("FemcBattle.marks['navcard']"), ('finish card after the win', p.eval('after')))
        p.top()
        results['post-battle flash'] = {'finish cards after the win': 0}
        errs = p.console(); ok(not errs, errs)
        print('No finish card flashes after a won fight OK', flush=True)

    # ── Old saves migrate: the first tree is refunded once (forms kept); the five-branch tree keeps every node, point and skill ──
    if want('migrate'):
        setup(p, lvl=30, pts=0)
        m = p.eval("""(()=>{const G=FemcGame,S=G.S;
          S.battleSave={v:4,lvl:30,exp:0,pts:3,nodes:['bell1','bell2','bell3','bell4','bell5','star1','star2'],forms:['haenim-sunna'],form:'haenim-sunna',ops:{cleared:['priestess']},
            party:['yukari'],mem:{yukari:{lvl:29,exp:0}},gear:{owned:{},eq:{}}};
          const b=G.ensureBattleSave();G.save();
          return {pts:b.pts,nodes:b.nodes,forms:b.forms,form:b.form,treeV:b.treeV,state:FemcBattleEngine.treeState(b,'bell-key'),refund:b.treeRefund}})()""")
        ok(m['pts'] == 3 + 9 + 2 and m['nodes'] == [] and m['forms'] == ['haenim-sunna'] and m['form'] == 'haenim-sunna' and m['treeV'] == 4 and m['state'] == 'own', m)
        # Reloading doesn't refund twice; an old backup code (whole game) migrates the same way.
        p.goto(URL)
        ok(p.eval('FemcGame.S.battleSave.pts') == 14 and p.eval('FemcGame.S.battleSave.treeV') == 4, 'refund once')
        code = p.eval("""(()=>{const S=JSON.parse(JSON.stringify(FemcGame.S));S.battleSave={v:4,lvl:22,pts:0,nodes:['jade1','jade2','jade3','jade4','jade5'],forms:[],ops:{cleared:[]},party:[],mem:{},gear:{owned:{},eq:{}}};
          return btoa(unescape(encodeURIComponent(JSON.stringify({game:'kg-femc-revamp',v:1,state:S}))))})()""")
        ok(p.eval('FemcGame.importCode(%s)' % json.dumps(code)), 'backup code loads')
        mb = p.eval("(()=>{const b=FemcGame.ensureBattleSave();return {pts:b.pts,forms:b.forms,nodes:b.nodes}})()")
        ok(mb['pts'] == 9 and mb['forms'] == ['haenim-mazu'] and mb['nodes'] == [], mb)
        menu(p)
        ok(state(p, 'jade-key') == 'own' and state(p, 'sun1') == 'avail', 'migrated save opens the sun')
        # The five-branch tree (treeV 2): every node, point, form, party node and skill comes along; forgotten skills wait in her list.
        V2 = """{v:4,treeV:2,lvl:45,exp:0,pts:7,nodes:['sun1','sun2','bell1','bell2','bell3','bell4b','bell5','bell6','bell-m1','star1','star2','star3','star4a','star5','veil1','veil2','veil3','veil4a','veil5','jade1','jade2','jade3','jade-key'],
          memories:['runners-stadium'],forms:['haenim-mazu'],form:'haenim',ops:{cleared:['priestess']},forgot:{solar:['agi','maragi','media'],akihiko:['tarunda']},
          order:{solar:['golden_rope','daybreak','dia','kunai_flick','tarukaja','public_veneer','call_the_bluff','protective_suzu','agi','maragi','bufu','media','kitsune_rush']},
          ptree:{akihiko:['ak1','ak2','ak3','ak6'],yukari:['yu1','yu5a']},ranks:{akihiko:7,yukari:7},party:['akihiko','yukari'],mem:{akihiko:{lvl:44,exp:0},yukari:{lvl:44,exp:0}},gear:{owned:{},eq:{}}}"""
        old = p.eval("""(()=>{const s=%s,E=FemcBattleEngine;return {nodes:s.nodes.slice(),pts:s.pts}})()""" % V2)
        mv = p.eval("""(()=>{const G=FemcGame,E=FemcBattleEngine;G.S.battleSave=%s;const b=G.ensureBattleSave();G.save();const k=E.kitFor('solar',b);
          return {treeV:b.treeV,pts:b.pts,nodes:b.nodes,forms:b.forms,slots:k.slots,lib:k.library,forgot:b.forgot,ptree:b.ptree,akPts:E.ptreePts(b,'akihiko'),
            owned:b.nodes.every(id=>E.treeState(b,id)==='own'),akOwn:['ak1','ak2','ak3','ak6'].every(id=>E.ptreeState(b,'akihiko',id)==='own'),ak4:E.ptreeState(b,'akihiko','ak-t2'),ak5a:E.ptreeState(b,'akihiko','ak5a'),
            spent:E.treeSpent(b),akKit:E.kitFor('akihiko',b).slots}})()""" % V2)
        ok(mv['treeV'] == 4 and mv['pts'] == old['pts'] and sorted(mv['nodes']) == sorted(old['nodes']) and mv['owned'], ('every node and point kept', mv['nodes'], mv['pts']))
        ok(mv['forms'] == ['haenim-mazu'], mv['forms'])
        ok(mv['slots'] == ['golden_rope', 'morning_glory', 'diarama', 'kunai_flick', 'matarukaja', 'public_veneer', 'call_the_bluff', 'protective_suzu'], ('her slots are her old kit', mv['slots']))
        ok(all(x in mv['lib'] for x in ['agilao', 'maragion', 'kitsune_rush', 'bufu']) and 'solar' not in mv['forgot'] and mv['forgot'].get('akihiko') == ['tarunda'], ('forgotten skills back in her list; a friend\'s stay forgotten', mv['lib'], mv['forgot']))
        ok(mv['ptree'] == {'akihiko': ['ak1', 'ak2', 'ak3', 'ak6'], 'yukari': ['yu1', 'yu5a']} and mv['akOwn'] and mv['akPts'] >= 13 - 5, ('party nodes kept, more points than before', mv))
        ok(mv['ak4'] == 'avail' and mv['ak5a'] == 'lvl', ('an old save can keep buying where it was (Live Wire, beside Ziodyne on its ray; the orbit\'s level rings still hold)', mv['ak4'], mv['ak5a']))
        ok('tarunda' not in mv['akKit'], mv['akKit'])
        # Reload (a slot) and a backup code: the same, and nothing moves a second time.
        p.goto(URL)
        again = p.eval("(()=>{const b=FemcGame.S.battleSave,E=FemcBattleEngine;return {pts:b.pts,nodes:b.nodes.length,slots:E.kitFor('solar',b).slots}})()")
        ok(again['pts'] == old['pts'] and again['nodes'] == len(old['nodes']) and again['slots'] == mv['slots'], again)
        code = p.eval("""(()=>{const S=JSON.parse(JSON.stringify(FemcGame.S));S.battleSave=%s;return btoa(unescape(encodeURIComponent(JSON.stringify({game:'kg-femc-revamp',v:1,state:S}))))})()""" % V2)
        ok(p.eval('FemcGame.importCode(%s)' % json.dumps(code)), 'v2 backup code loads')
        mc = p.eval("(()=>{const b=FemcGame.ensureBattleSave(),E=FemcBattleEngine;return {pts:b.pts,nodes:b.nodes.length,slots:E.kitFor('solar',b).slots,treeV:b.treeV}})()")
        ok(mc['pts'] == old['pts'] and mc['nodes'] == len(old['nodes']) and mc['slots'] == mv['slots'] and mc['treeV'] == 4, mc)
        results['migration'] = {'first tree': m, 'backup code': mb, 'five-branch tree': {'nodes': len(mv['nodes']), 'pts': mv['pts'], 'slots': mv['slots'], 'list': len(mv['lib'])}}
        errs = p.console(); ok(not errs, errs)
        print('Migration: first tree refunded once; five-branch tree keeps nodes, points, forms, party nodes; forgotten skills in her list; slot and code OK', flush=True)

    # ── Practice mode keeps its own screen: the same sun and rules, a free refund ──
    if want('practice'):
        p.goto(URL)
        p.eval("localStorage.setItem('kg-femc-battle-proto',JSON.stringify({v:3,lvl:20,exp:0,pts:4,nodes:['bell1','bell2','jade1'],party:['yukari'],mem:{},gear:{owned:{},eq:{}}}))")
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=10&seed=4'})
        p.wait("!!window.FemcBattle && FemcBattle.screen()==='hub'", 60)
        ok(p.eval('FemcBattle.save.pts') == 4 + 3 and p.eval('FemcBattle.save.nodes.length') == 0, 'practice save migrated (refunded)')
        p.eval("document.querySelector('[data-go=tree]').click()")
        p.wait("FemcBattle.screen()==='tree'")
        ok(p.eval("document.querySelectorAll('.bt-sun [data-hn]').length") == 148, 'the whole sun')
        ok(p.eval("document.querySelector('.bt-sn.sel b').textContent") == 'Lady Sun', 'starts on the first node you can buy')
        p.eval("FemcBattle.ctl.pick()")
        ok(p.eval("FemcBattle.save.nodes.includes('sun1') && FemcBattle.save.pts===6"), 'bought in practice')
        p.eval("FemcBattle.ctl.key({key:'ArrowLeft'})")
        ok(p.eval("document.querySelector('.bt-sn.sel').dataset.hn") == 'bell1', 'arrows walk the sun in practice')
        p.eval("document.querySelector('[data-act=refund]').click()")
        ok(p.eval("FemcBattle.save.nodes.length===0 && FemcBattle.save.pts===7"), 'free refund in practice')
        p.eval("FemcBattle.ctl.back()"); p.wait("FemcBattle.screen()==='hub'")
        results['practice'] = 'sun screen works'
        errs = p.console(); ok(not errs, errs)
        print('Practice mode sun screen OK', flush=True)

    # ── Screenshots of the Skills tab at three sizes (and no sideways scroll) ──
    if want('shots'):
        setup(p, lvl=36, pts=30)
        p.eval("""(()=>{const b=FemcGame.S.battleSave;b.nodes=['sun1','sun2','sun3','st1','st2','st3','bell1','bell2','hl1','jade1','jade2','mg1','tr1','bell3','tr2','hy-st-tr1','star1','star2','veil1'];FemcGame.progress('akihiko').rank=5;FemcGame.saveQuiet()})()""")
        for w, h, name, mobile in [(1000, 486, 'skills-1000x486', False), (375, 812, 'skills-375x812', True), (1440, 900, 'skills-1440x900', False)]:
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
            menu(p)
            click(p, '[data-sk=solar]')
            click(p, '[data-skmode=sun]')
            click(p, '[data-hn=tr2]')
            no_scroll(p)
            ok(p.eval("(()=>{const r=document.querySelector('.g-fm-ov .g-panel').getBoundingClientRect();return r.right<=innerWidth+1&&r.bottom<=innerHeight+1})()"), name + ' panel fits')
            ok(p.eval("(()=>{const r=document.querySelector('.sun-vp').getBoundingClientRect();return r.width>200&&r.height>200})()"), name + ' sun visible')
            shot(p, name)
            click(p, '[data-skmode=list]'); no_scroll(p); shot(p, name + '-list')
            click(p, '[data-sk=akihiko]'); no_scroll(p); shot(p, name + '-akihiko')
        results['screenshots'] = str(SHOTS)
        errs = p.console(); ok(not errs, errs)
        print('Screenshots in', SHOTS, flush=True)

    errs = p.console(); ok(not errs, errs)
    print(json.dumps({'ok': True, 'sections': list(results), 'console errors': 0}, indent=1))
except Exception:
    print('Browser errors:', p.console(), flush=True)
    raise
finally:
    p.close()
