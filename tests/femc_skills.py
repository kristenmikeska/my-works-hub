"""The skill system, played for real in headless Chrome (femc-game.html, isolated profile, localhost; no player saves).

Run: python3 tests/femc_skills.py [--only menu,party,library,sun,fight,passives,rush,flash,migrate,practice,shots] [--screenshots DIR]

Covers: Haenim's sun (97 nodes on six rays, the corona and the crown; spending, in-place upgrades, choice nodes, hidden memory
nodes, hybrids, keystones -> forms, Unveiled's gating; mouse, keyboard and phone: tap, drag, wheel, pinch, + - and Fit), Solar's
skill list (every learned skill kept, no "forget which?" for her, free swapping into her eight slots outside battle, the swap
reaching a real fight), the Velvet Room respec, the deeper party trees (five tiers by link rank, points from levels, MAX), each
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
        ok(p.eval("document.querySelectorAll('.g-sunvp .sun-stage [data-hn]').length") == 97, 'every node of the sun is drawn')
        ok(p.eval("document.querySelectorAll('.sun-raylbl').length") == 6 and p.eval("document.querySelectorAll('[data-ray]').length") == 6, 'six rays')
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

    # ── Party trees: five tiers by link rank, points from levels, MAX evolution, respec ──
    if want('party'):
        setup(p, lvl=40, pts=0)
        p.eval("FemcGame.S.links.akihiko=Object.assign(FemcGame.progress('akihiko'),{rank:0});FemcGame.saveQuiet()")
        menu(p)
        click(p, '[data-sk=akihiko]')
        ok(p.eval("document.querySelectorAll('.g-pt-tier:not(.g-pt-max)').length") == 5, 'five tiers')
        ok(p.eval("document.querySelector('.g-sk-top').textContent.includes('12 points')"), p.eval("document.querySelector('.g-sk-top').textContent"))
        ok(state(p, 'ak1') == 'avail' and state(p, 'ak7') == 'avail' and state(p, 'ak8') == 'rank' and state(p, 'ak3') == 'rank' and state(p, 'ak11') == 'rank', 'tier 1 open, the rest by rank')
        buy(p, 'ak1')
        click(p, '[data-hn=ak8]'); click(p, '[data-hn=ak8]')
        ok('ak8' not in (p.eval(B + '.ptree.akihiko') or []), 'rank 0 cannot buy tier 2')
        p.eval("FemcGame.progress('akihiko').rank=4;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=akihiko]')
        ok(p.eval(B + '.ranks.akihiko') == 4, 'ranks copied into the battle save')
        ok(state(p, 'ak8') == 'avail' and state(p, 'ak3') == 'lock' and state(p, 'ak5a') == 'rank', 'rank 4: tier 3 needs tier 2 first')
        buy(p, 'ak8')
        ok(state(p, 'ak3') == 'avail', 'tier 2 opens tier 3')
        before = p.eval(KIT % '"akihiko"' + '.slots')
        buy(p, 'ak3')
        after = p.eval(KIT % '"akihiko"' + '.slots')
        zi = [s for s in before if s.startswith('zi')][0]
        ok(after[before.index(zi)] == 'ziodyne', (before, after))
        p.eval("FemcGame.progress('akihiko').rank=9;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=akihiko]')
        buy(p, 'ak5a')
        ok(state(p, 'ak5b') == 'taken', 'tier 4 is a choice')
        buy(p, 'ak11')
        ok(state(p, 'ak12') == 'taken', 'tier 5 is a choice')
        ok('sonic_punch' in p.eval(KIT % '"akihiko"' + '.slots'), 'no MAX yet')
        p.eval("FemcGame.progress('akihiko').rank=10;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=akihiko]')
        k = p.eval(KIT % '"akihiko"' + '.slots')
        ok('sonic_blitz' in k and 'sonic_punch' not in k, k)
        ok(p.eval("document.querySelector('.g-pt-max').classList.contains('done')"), 'MAX shown')
        u = p.eval("(()=>{const u=FemcBattleEngine.buildUnit('akihiko',FemcGame.S.battleSave);return {skills:u.skills,followUp:u.followUp,boss:u.bossUp}})()")
        ok('sonic_blitz' in u['skills'] and 'maziodyne' in u['skills'] and abs(u['followUp'] - 0.2) < 1e-9 and u['boss'] >= 0.2, ('tree passives on the battle unit', u))
        # Points come from levels.
        p.eval("FemcGame.S.battleSave.mem.yukari.lvl=12;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=yukari]')
        ok(p.eval("FemcBattleEngine.ptreePts(FemcGame.S.battleSave,'yukari')") == 2, 'level 12: two points')
        buy(p, 'yu1'); buy(p, 'yu2')
        click(p, '[data-hn=yu7]')
        ok(p.eval("document.querySelector('[data-pt-buy]').disabled"), 'no points left')
        # Same depth for everyone.
        depth = p.eval("Object.values(FEMC_BATTLE_DATA.ptrees).map(t=>t.tiers.map(x=>x.length).join(''))")
        ok(len(set(depth)) == 1 and depth[0] == '33322', depth)
        # Party respec at the Velvet Room.
        click(p, '[data-sk=akihiko]')
        yen0 = p.eval('FemcGame.S.yen')
        click(p, '[data-velvet=akihiko]'); click(p, '[data-velvet-ok]')
        ok(p.eval(B + '.ptree.akihiko') in (None, []) and p.eval('FemcGame.S.yen') == yen0 - max(500, 10 * 150), 'party respec')
        ok('sonic_blitz' in p.eval(KIT % '"akihiko"' + '.slots'), 'MAX evolution is the link\'s, not a node')
        # In the Dark Hour the Velvet Room's door is shut.
        p.eval("FemcMenu.close()"); p.wait("!document.querySelector('.g-fm-ov')")
        p.eval("FemcMenu.open('skills',{inBattle:true})"); p.wait("!!document.querySelector('[data-velvet]')")
        ok(p.eval("document.querySelector('[data-velvet]').disabled"), 'no respec in the Dark Hour')
        results['party trees'] = {'akihiko max': 'sonic_blitz', 'tier gates': p.eval('FEMC_BATTLE_DATA.ptreeRanks'), 'depth': depth[0]}
        errs = p.console(); ok(not errs, errs)
        print('Party trees: five tiers, rank gates, points from levels, MAX, respec OK', flush=True)

    # ── Solar's skill list: every learned skill, free swapping outside battle, the swap in a real fight ──
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
        ok(m['pts'] == 3 + 9 + 2 and m['nodes'] == [] and m['forms'] == ['haenim-sunna'] and m['form'] == 'haenim-sunna' and m['treeV'] == 3 and m['state'] == 'own', m)
        # Reloading doesn't refund twice; an old backup code (whole game) migrates the same way.
        p.goto(URL)
        ok(p.eval('FemcGame.S.battleSave.pts') == 14 and p.eval('FemcGame.S.battleSave.treeV') == 3, 'refund once')
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
            owned:b.nodes.every(id=>E.treeState(b,id)==='own'),akOwn:['ak1','ak2','ak3','ak6'].every(id=>E.ptreeState(b,'akihiko',id)==='own'),ak4:E.ptreeState(b,'akihiko','ak4'),ak5a:E.ptreeState(b,'akihiko','ak5a'),
            spent:E.treeSpent(b),akKit:E.kitFor('akihiko',b).slots}})()""" % V2)
        ok(mv['treeV'] == 3 and mv['pts'] == old['pts'] and sorted(mv['nodes']) == sorted(old['nodes']) and mv['owned'], ('every node and point kept', mv['nodes'], mv['pts']))
        ok(mv['forms'] == ['haenim-mazu'], mv['forms'])
        ok(mv['slots'] == ['golden_rope', 'morning_glory', 'diarama', 'kunai_flick', 'matarukaja', 'public_veneer', 'call_the_bluff', 'protective_suzu'], ('her slots are her old kit', mv['slots']))
        ok(all(x in mv['lib'] for x in ['agilao', 'maragion', 'kitsune_rush', 'bufu']) and 'solar' not in mv['forgot'] and mv['forgot'].get('akihiko') == ['tarunda'], ('forgotten skills back in her list; a friend\'s stay forgotten', mv['lib'], mv['forgot']))
        ok(mv['ptree'] == {'akihiko': ['ak1', 'ak2', 'ak3', 'ak6'], 'yukari': ['yu1', 'yu5a']} and mv['akOwn'] and mv['akPts'] >= 13 - 5, ('party nodes kept, more points than before', mv))
        ok(mv['ak4'] == 'avail' and mv['ak5a'] == 'avail', ('an old save can keep buying where it was', mv['ak4'], mv['ak5a']))
        ok('tarunda' not in mv['akKit'], mv['akKit'])
        # Reload (a slot) and a backup code: the same, and nothing moves a second time.
        p.goto(URL)
        again = p.eval("(()=>{const b=FemcGame.S.battleSave,E=FemcBattleEngine;return {pts:b.pts,nodes:b.nodes.length,slots:E.kitFor('solar',b).slots}})()")
        ok(again['pts'] == old['pts'] and again['nodes'] == len(old['nodes']) and again['slots'] == mv['slots'], again)
        code = p.eval("""(()=>{const S=JSON.parse(JSON.stringify(FemcGame.S));S.battleSave=%s;return btoa(unescape(encodeURIComponent(JSON.stringify({game:'kg-femc-revamp',v:1,state:S}))))})()""" % V2)
        ok(p.eval('FemcGame.importCode(%s)' % json.dumps(code)), 'v2 backup code loads')
        mc = p.eval("(()=>{const b=FemcGame.ensureBattleSave(),E=FemcBattleEngine;return {pts:b.pts,nodes:b.nodes.length,slots:E.kitFor('solar',b).slots,treeV:b.treeV}})()")
        ok(mc['pts'] == old['pts'] and mc['nodes'] == len(old['nodes']) and mc['slots'] == mv['slots'] and mc['treeV'] == 3, mc)
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
        ok(p.eval("document.querySelectorAll('.bt-sun [data-hn]').length") == 97, 'the whole sun')
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
