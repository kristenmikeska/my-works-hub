"""The skill system, played for real in headless Chrome (femc-game.html, isolated profile, localhost; no player saves).

Run: python3 tests/femc_skills.py [--only menu,party,fight,rush,flash,migrate,shots] [--screenshots DIR]

Covers: 8 skill slots (learn a ninth, forget which?), in-place upgrades, Haenim's tree (spending, choice nodes, hidden memory
nodes, keystones -> forms, Unveiled's gating), the Velvet Room respec, party trees gated by link rank (and MAX), each new
skill's effect in a real fight driven through the battle menus, buff stacking and its cap (and the HUD), Rush's decisions in
staged fights plus a real Rush fight, no finish card after a won fight, migration of an old tree save, zero console errors,
and Skills-tab screenshots at 1000x486, 375x812 and 1440x900."""
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
  for (const l of Object.values(G.LINKS)) if (l.forced?.length) G.progress(l.id).rank=Math.max(...l.forced);
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


def menu(p, tab='skills'):
    p.eval("FemcMenu.isOpen()&&FemcMenu.close()")
    p.wait("!document.querySelector('.g-fm-ov')")
    p.eval('FemcMenu.open(%s)' % json.dumps(tab))
    p.wait("!!document.querySelector('.g-fm-ov:not(.out) .g-fm-body')")


def click(p, sel):
    p.wait('!!document.querySelector(%s)' % json.dumps(sel))
    p.eval('document.querySelector(%s).click()' % json.dumps(sel))


B = 'FemcGame.S.battleSave'
KIT = "FemcBattleEngine.kitFor(%s,FemcGame.S.battleSave)"


def kit(p, mid='solar'):
    return p.eval((KIT % json.dumps(mid)) + '.slots')


def state(p, nid):
    return p.eval("document.querySelector('[data-hn=%s]').className.split(' ')[1]" % json.dumps(nid))


def buy(p, nid, forget=None):
    """Select a node, then click it again to buy (the real menu flow). Handles the forget prompt with `forget`."""
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


def shot(p, name):
    p.eval("new Promise(r=>setTimeout(r,350))")
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def no_scroll(p):
    ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), 'sideways scroll')


p = Page()
try:
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 850, 'deviceScaleFactor': 1, 'mobile': False})
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})

    # ── Haenim's tree in the field menu: spending, 8 slots, upgrades, choices, memories, keystones, Unveiled, respec ──
    if want('menu'):
        setup(p, lvl=20, pts=200)
        menu(p)
        ok(p.eval("document.querySelectorAll('.g-ht-col').length") == 5, 'five columns (four branches and the trunk)')
        ok(p.eval("!!document.querySelector('[data-hn=unveiled].center')"), 'Unveiled at the center')
        start = kit(p)
        ok(start == ['agilao', 'daybreak', 'golden_rope', 'diarama'], start)
        # Locked before the trunk, then open; the keyboard walks the tree and Enter buys.
        ok(state(p, 'bell1') == 'lock', 'branch roots need the trunk')
        time.sleep(0.2)  # the menu's own opening focus lands first
        p.eval("document.querySelector('.g-fm-ov:not(.out) [data-tab=skills]').focus()")
        key(p, 'ArrowDown')
        ok(p.eval("document.activeElement.classList.contains('g-hn')"), 'Down from the tabs (keys or a pad) enters the tree')
        p.eval("document.querySelector('[data-hn=sun1]').focus()")
        key(p, 'Enter'); key(p, 'Enter')
        ok('sun1' in p.eval(B + '.nodes'), 'Enter bought the selected node')
        ok(state(p, 'bell1') == 'avail', 'trunk opens the branches')
        p.eval("document.querySelector('[data-hn=sun1]').focus()")
        key(p, 'ArrowLeft'); key(p, 'ArrowLeft')
        ok(p.eval("document.querySelector('.g-hn.sel').dataset.hn") == 'bell1', 'arrows move across branches')
        key(p, 'ArrowDown')
        ok(p.eval("document.querySelector('.g-hn.sel').dataset.hn") == 'bell2', 'arrows move down a branch')
        # In-place upgrade: Morning Glory takes Daybreak's slot.
        buy(p, 'sun2')
        ok(kit(p)[1] == 'morning_glory' and len(kit(p)) == 4, kit(p))
        buy(p, 'sun3')
        ok(kit(p)[2] == 'golden_tether', kit(p))
        # Fill to eight: Kunai Flick, Matarukaja, Public Veneer, Bufu.
        for n in ['bell1', 'bell2', 'bell3', 'star1', 'star2', 'star3', 'jade1', 'jade2']:
            buy(p, n)
        k8 = kit(p)
        ok(len(k8) == 8 and k8[4:] == ['kunai_flick', 'matarukaja', 'public_veneer', 'bufu'], k8)
        # A ninth: Rally (choice). Forget which? Choosing the new one skips it.
        pts0 = p.eval(B + '.pts')
        buy(p, 'star4b', forget='rally')
        ok(kit(p) == k8 and 'rally' in p.eval(B + '.forgot.solar'), 'skipping the new skill')
        ok(p.eval(B + '.pts') == pts0 - 2, 'points spent')
        # Choice: the other one is taken now.
        ok(state(p, 'star4a') == 'taken', 'choice node taken')
        click(p, '[data-hn="star4a"]'); click(p, '[data-hn="star4a"]')
        ok('star4a' not in p.eval(B + '.nodes'), 'a taken choice cannot be bought')
        # Another ninth (Call the Bluff): forget agilao instead; its whole line stays forgotten.
        buy(p, 'star5', forget='agilao')
        k = kit(p)
        ok('call_the_bluff' in k and 'agilao' not in k and len(k) == 8, k)
        ok(p.eval(B + '.forgot.solar').count('agi') == 1, 'the agi line is forgotten')
        # In-place upgrade inside the full kit: Bufu -> Bufula keeps the slot.
        i_bufu = kit(p).index('bufu')
        for n in ['jade3', 'jade4a', 'jade5']:
            buy(p, n)
        ok(kit(p).index('bufula') == i_bufu and len(kit(p)) == 8, 'Bufula took Bufu\'s slot')
        ok(state(p, 'jade4b') == 'taken', 'Cold Read takes Cut Deep')
        # Level gate.
        buy(p, 'sun4')
        ok(state(p, 'sun5') == 'lvl', 'High Noon waits for Lv 30')
        p.eval(B + '.lvl=40;FemcGame.saveQuiet()'); menu(p)
        # Lv 26's Maragion is a ninth: the Skills tab opens on "forget which?" (keep the other eight).
        ok(p.eval("document.querySelector('.g-sk-forget b').textContent.includes('Maragion')") and p.eval("!!document.querySelector('[data-forget=maragion].new')"), 'level-up forget prompt')
        click(p, '[data-forget="maragion"]'); click(p, '[data-forget="maragion"]')
        ok('maragion' not in kit(p) and p.eval("!!document.querySelector('.g-ht')"), 'skipped Maragion')
        ok(state(p, 'sun5') == 'avail', ('level opens it', state(p, 'sun5'), p.eval(B + '.lvl'), p.eval(B + '.nodes')))
        # Hidden memory node: hidden until its fragment is found, then buyable (Kitsune Rush).
        ok(state(p, 'bell-m1') == 'hidden' and p.eval("document.querySelector('[data-hn=bell-m1] b').textContent") == '? ? ?', 'memory node hidden')
        for n in ['bell4a', 'bell5', 'bell6']:
            buy(p, n, forget={'bell4a': 'recarm', 'bell5': 'mediarama', 'bell6': 'bufula'}[n])
        ok('protective_suzu' in kit(p), kit(p))
        p.eval("FemcGame.S.fragments.push('runners-stadium');FemcGame.saveQuiet()")
        pts0 = p.eval(B + '.pts')
        menu(p)
        ok(p.eval(B + '.pts') == pts0 + 1, 'a fragment found in the life sim gives a skill point once')
        ok(state(p, 'bell-m1') == 'avail', 'the memory opened the node')
        buy(p, 'bell-m1', forget='matarukaja')
        ok('kitsune_rush' in kit(p), kit(p))
        # Keystones -> forms; Unveiled needs all three and a full moon.
        buy(p, 'bell7')
        buy(p, 'bell-key')
        ok('haenim-sunna' in p.eval(B + '.forms'), 'Sunna awakened')
        for n in ['jade6', 'jade7', 'jade-key']:
            buy(p, n, forget={'jade6': 'mabufula', 'jade7': 'bufudyne', 'jade-key': None}[n])  # buying an upgrade brings a forgotten line back: skip it again
        for n in ['star6', 'star7', 'star-key']:
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
        # Respec at the Velvet Room: refunds everything but the keystones; forms stay; yen fee.
        spent = p.eval("FemcBattleEngine.treeSpent(FemcGame.S.battleSave)")
        pts0, yen0 = p.eval(B + '.pts'), p.eval('FemcGame.S.yen')
        click(p, '[data-velvet=solar]')
        ok(p.eval("document.querySelector('.g-sk-velvet').textContent.includes('Elizabeth')"), 'the Velvet Room')
        click(p, '[data-velvet-ok]')
        fee = max(500, spent * 100)
        ok(p.eval(B + '.pts') == pts0 + spent and p.eval('FemcGame.S.yen') == yen0 - fee, (spent, fee))
        ok(sorted(p.eval(B + '.nodes')) == sorted(['bell-key', 'jade-key', 'star-key', 'unveiled']), p.eval(B + '.nodes'))
        ok(len(p.eval("FemcGame.S.battleSave.forms")) == 4 and state(p, 'bell-key') == 'own', 'forms stay awake')
        ok(state(p, 'sun1') == 'avail', 'tree is open to spend again')
        # Rebuying a forgotten skill brings it back.
        for n in ['sun1', 'star1', 'star2', 'star3', 'star4b']:
            buy(p, n)
        ok('rally' in kit(p), 'buying Rally again un-forgets it')
        results['haenim tree'] = {'kit': kit(p), 'respec': {'points back': spent, 'fee': fee}, 'forms': p.eval(B + '.forms')}
        errs = p.console(); ok(not errs, errs)
        print('Haenim tree: slots/forget/upgrades/choices/memory/keystones/Unveiled/respec OK', flush=True)

    # ── Party trees: tiers by link rank, points from levels, MAX evolution, respec ──
    if want('party'):
        setup(p, lvl=40, pts=0)
        p.eval("FemcGame.S.links.akihiko=Object.assign(FemcGame.progress('akihiko'),{rank:0});FemcGame.saveQuiet()")
        menu(p)
        click(p, '[data-sk=akihiko]')
        ok(p.eval("document.querySelector('.g-sk-top').textContent.includes('9 points')"), p.eval("document.querySelector('.g-sk-top').textContent"))
        ok(state(p, 'ak1') == 'avail' and state(p, 'ak3') == 'rank' and state(p, 'ak5a') == 'rank', 'tier 1 open, 2-3 by rank')
        buy(p, 'ak1')
        click(p, '[data-hn=ak3]'); click(p, '[data-hn=ak3]')
        ok('ak3' not in (p.eval(B + '.ptree.akihiko') or []), 'rank 0 cannot buy tier 2')
        p.eval("FemcGame.progress('akihiko').rank=4;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=akihiko]')
        ok(p.eval(B + '.ranks.akihiko') == 4, 'ranks copied into the battle save')
        ok(state(p, 'ak3') == 'avail' and state(p, 'ak5a') == 'rank', 'rank 4 opens tier 2')
        before = p.eval(KIT % '"akihiko"' + '.slots')
        buy(p, 'ak3')
        after = p.eval(KIT % '"akihiko"' + '.slots')
        zi = [s for s in before if s.startswith('zi')][0]
        ok(after[before.index(zi)] == 'ziodyne', (before, after))
        p.eval("FemcGame.progress('akihiko').rank=7;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=akihiko]')
        buy(p, 'ak5a')
        ok(state(p, 'ak5b') == 'taken', 'tier 3 is a choice')
        ok('sonic_punch' in p.eval(KIT % '"akihiko"' + '.slots'), 'no MAX yet')
        p.eval("FemcGame.progress('akihiko').rank=10;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=akihiko]')
        k = p.eval(KIT % '"akihiko"' + '.slots')
        ok('sonic_blitz' in k and 'sonic_punch' not in k, k)
        ok(p.eval("document.querySelector('.g-pt-max').classList.contains('done')"), 'MAX shown')
        # In a fight, the evolved skill is there too.
        u = p.eval("FemcBattleEngine.buildUnit('akihiko',FemcGame.S.battleSave).skills")
        ok('sonic_blitz' in u and 'maziodyne' in u, u)
        # Points come from levels.
        p.eval("FemcGame.S.battleSave.mem.yukari.lvl=12;FemcGame.saveQuiet()"); menu(p); click(p, '[data-sk=yukari]')
        ok(p.eval("FemcBattleEngine.ptreePts(FemcGame.S.battleSave,'yukari')") == 2, 'level 12: two points')
        buy(p, 'yu1'); buy(p, 'yu2')
        click(p, '[data-hn=yu3]')
        ok(p.eval("document.querySelector('[data-pt-buy]').disabled"), 'no points left')
        # Party respec at the Velvet Room.
        click(p, '[data-sk=akihiko]')
        yen0 = p.eval('FemcGame.S.yen')
        click(p, '[data-velvet=akihiko]'); click(p, '[data-velvet-ok]')
        ok(p.eval(B + '.ptree.akihiko') in (None, []) and p.eval('FemcGame.S.yen') == yen0 - max(500, 5 * 150), 'party respec')
        ok('sonic_blitz' in p.eval(KIT % '"akihiko"' + '.slots'), 'MAX evolution is the link\'s, not a node')
        # In the Dark Hour the Velvet Room's door is shut.
        p.eval("FemcMenu.close()"); p.wait("!document.querySelector('.g-fm-ov')")
        p.eval("FemcMenu.open('skills',{inBattle:true})"); p.wait("!!document.querySelector('[data-velvet]')")
        ok(p.eval("document.querySelector('[data-velvet]').disabled"), 'no respec in the Dark Hour')
        results['party trees'] = {'akihiko max': 'sonic_blitz', 'tier gates': [0, 4, 7]}
        errs = p.console(); ok(not errs, errs)
        print('Party trees: tier gating, points from levels, MAX, respec OK', flush=True)

    # ── Every new skill in a real fight (the battle frame, driven through its menus) ──
    if want('fight'):
        setup(p, lvl=45, pts=0)
        # Solar's eight: Kat's five, Matarukaja, Golden Rope, and Dia's line; the Veil passives for Off Angle Flank.
        p.eval("""(()=>{const b=FemcGame.S.battleSave;
          b.nodes=['sun1','bell1','bell2','bell3','bell4b','bell5','bell6','bell-m1','star1','star2','star3','star4a','star5','veil1','veil2','veil3'];
          b.memories=['runners-stadium'];b.forgot={solar:['agi','daybreak','media','maragi']};b.party=['akihiko','yukari','junpei'];
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

    # ── Old tree save migrates: points refunded, forms kept ──
    if want('migrate'):
        setup(p, lvl=30, pts=0)
        m = p.eval("""(()=>{const G=FemcGame,S=G.S;
          S.battleSave={v:4,lvl:30,exp:0,pts:3,nodes:['bell1','bell2','bell3','bell4','bell5','star1','star2'],forms:['haenim-sunna'],form:'haenim-sunna',ops:{cleared:['priestess']},
            party:['yukari'],mem:{yukari:{lvl:29,exp:0}},gear:{owned:{},eq:{}}};
          const b=G.ensureBattleSave();G.save();
          return {pts:b.pts,nodes:b.nodes,forms:b.forms,form:b.form,treeV:b.treeV,state:FemcBattleEngine.treeState(b,'bell-key'),refund:b.treeRefund}})()""")
        ok(m['pts'] == 3 + 9 + 2 and m['nodes'] == [] and m['forms'] == ['haenim-sunna'] and m['form'] == 'haenim-sunna' and m['treeV'] == 2 and m['state'] == 'own', m)
        # Reloading doesn't refund twice; an old backup code (whole game) migrates the same way.
        p.goto(URL)
        ok(p.eval('FemcGame.S.battleSave.pts') == 14 and p.eval('FemcGame.S.battleSave.treeV') == 2, 'refund once')
        code = p.eval("""(()=>{const S=JSON.parse(JSON.stringify(FemcGame.S));S.battleSave={v:4,lvl:22,pts:0,nodes:['jade1','jade2','jade3','jade4','jade5'],forms:[],ops:{cleared:[]},party:[],mem:{},gear:{owned:{},eq:{}}};
          return btoa(unescape(encodeURIComponent(JSON.stringify({game:'kg-femc-revamp',v:1,state:S}))))})()""")
        ok(p.eval('FemcGame.importCode(%s)' % json.dumps(code)), 'backup code loads')
        mb = p.eval("(()=>{const b=FemcGame.ensureBattleSave();return {pts:b.pts,forms:b.forms,nodes:b.nodes}})()")
        ok(mb['pts'] == 9 and mb['forms'] == ['haenim-mazu'] and mb['nodes'] == [], mb)
        menu(p)
        ok(state(p, 'jade-key') == 'own' and state(p, 'sun1') == 'avail', 'migrated save opens the new tree')
        results['migration'] = {'slot': m, 'backup code': mb}
        errs = p.console(); ok(not errs, errs)
        print('Migration: old tree refunded once, forms kept, backup code too OK', flush=True)

    # ── Practice mode keeps its own tree screen (same tree and rules, a free refund) ──
    if want('practice'):
        p.goto(URL)
        p.eval("localStorage.setItem('kg-femc-battle-proto',JSON.stringify({v:3,lvl:20,exp:0,pts:4,nodes:['bell1','bell2','jade1'],party:['yukari'],mem:{},gear:{owned:{},eq:{}}}))")
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=10&seed=4'})
        p.wait("!!window.FemcBattle && FemcBattle.screen()==='hub'", 60)
        ok(p.eval('FemcBattle.save.pts') == 4 + 3 and p.eval('FemcBattle.save.nodes.length') == 0, 'practice save migrated (refunded)')
        p.eval("document.querySelector('[data-go=tree]').click()")
        p.wait("FemcBattle.screen()==='tree'")
        ok(p.eval("document.querySelectorAll('.bt-branches.n6 .bt-branch').length") == 6, 'five branches and the center')
        ok(p.eval("document.querySelector('.bt-node.sel b').textContent") == 'Lady Sun', 'starts on the first node you can buy')
        p.eval("FemcBattle.ctl.pick()")
        ok(p.eval("FemcBattle.save.nodes.includes('sun1') && FemcBattle.save.pts===6"), 'bought in practice')
        p.eval("document.querySelector('[data-act=refund]').click()")
        ok(p.eval("FemcBattle.save.nodes.length===0 && FemcBattle.save.pts===7"), 'free refund in practice')
        p.eval("FemcBattle.ctl.back()"); p.wait("FemcBattle.screen()==='hub'")
        results['practice'] = 'tree screen works'
        errs = p.console(); ok(not errs, errs)
        print('Practice mode tree screen OK', flush=True)

    # ── Screenshots of the Skills tab at three sizes (and no sideways scroll) ──
    if want('shots'):
        setup(p, lvl=36, pts=30)
        p.eval("""(()=>{const b=FemcGame.S.battleSave;b.nodes=['sun1','sun2','bell1','bell2','bell3','star1','star2','jade1'];FemcGame.progress('akihiko').rank=5;FemcGame.saveQuiet()})()""")
        for w, h, name, mobile in [(1000, 486, 'skills-1000x486', False), (375, 812, 'skills-375x812', True), (1440, 900, 'skills-1440x900', False)]:
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
            menu(p)
            click(p, '[data-sk=solar]')
            click(p, '[data-hn=bell3]')
            no_scroll(p)
            ok(p.eval("(()=>{const r=document.querySelector('.g-fm-ov .g-panel').getBoundingClientRect();return r.right<=innerWidth+1&&r.bottom<=innerHeight+1})()"), name + ' panel fits')
            shot(p, name)
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
