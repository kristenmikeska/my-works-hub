"""Bond skills, signature skills and battle lines, played for real in headless Chrome (femc-game.html and its Dark Hour battle
frame, isolated profile, localhost; never the player's saves).

Run: python3 tests/femc_bonds.py [--only rules,menu,fight,partner,art,settings,sigs,lines,banter,rush,shots] [--shots DIR]

Covers:
  - rules: every bond unlocks at its rank (5, then 9), the romance version only on the romance route at rank 9, a reversed
    link pauses it, Shinjiro's ends after the date the story uses; the handoff carries the romance route and the date;
    old battle saves (no bond fields) load with safe defaults; the new tree nodes teach the signature skills.
  - menu: the Bonds tab lists each met partner's bond with its unlock ranks (the romance version hidden until earned); the
    Skills tab shows the third tier-2 node.
  - fight: a real bond through the battle menu (Bond → partner → target): the fallback cut-in renders from both portraits
    and Personas (images decoded), damage lands, both pay SP, the partner's next turn is spent, it can't be used twice, and
    the availability rules (partner absent, frozen, low SP) grey it with the reason.
  - partner: a bond started on the partner's own turn (Solar then rests).
  - art: the data hook: bond.img → a still cut-in, bond.sheet → the strike sheet.
  - settings: Persona cut-ins Off → the short band, reduced motion → a fade, battle speed scales it.
  - sigs: each of the 16 signature skills cast through the menu plays its own effect and does what it says.
  - lines: weakness, Solar hurt, an ally low and down, knocked down, Theurgy ready, a boss appearing, victory.
  - banter: romance pair lines only on the romance route and from the rank they need.
  - rush: Rush starts a bond on its own when it's worth it (short cut-in).
  - shots: screenshots at 1000x486, 375x812 and 1440x900; no console errors anywhere.
"""
import argparse, base64, json, pathlib, tempfile, time
from femc_browser import Page

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--shots', default='')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
OUT = pathlib.Path(args.shots) if args.shots else pathlib.Path(tempfile.mkdtemp(prefix='femc-bonds-'))
OUT.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
results = {}


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


def clean(p, where):
    errs = p.console()
    ok(not errs, (where, errs))


# A playthrough on a day with everyone available, the given links at their ranks (and routes), and a battle save.
SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'12/12'); S.slot='evening';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.condition='good';
  Object.entries(cfg.ranks||{}).forEach(([id,r])=>{ if(!S.met.includes(id)) S.met.push(id); const p=G.progress(id); p.rank=r; if((cfg.love||[]).includes(id)) p.route='romance'; if((cfg.rev||[]).includes(id)) p.reversed=true; });
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
  b.lvl=cfg.lvl||45; b.pts=0; b.party=(cfg.party||['akihiko']).filter(x=>x!=='solar'); b.awakened=true; b.cutins=cfg.cutins||'always';
  D.party.forEach(m=>{ if(m.id!=='solar') b.mem[m.id]={lvl:cfg.lvl||45,exp:0}; });
  S.battleSave=FemcBattleSave.normalize(b); S.tartarus.lastParty=['solar'].concat(b.party); G.save();
  return true;
})()"""

# In the battle frame: log every cut-in (Theurgy or bond) and every speech bubble as they appear.
WATCH = r'''(() => {
  window.cutLog = []; window.barkLog = []; window.barkMax = 0;
  new MutationObserver(ms => ms.forEach(m => {
    m.addedNodes.forEach(n => { if (n.classList && n.classList.contains('bt-bond')) { const r = { cls: n.className, bond: n.dataset.bond, name: (n.querySelector('.th-name') || {}).textContent || '',
      lines: [...n.querySelectorAll('.th-line')].map(x => x.textContent), imgs: [...n.querySelectorAll('img')].map(i => i.getAttribute('src')), t0: performance.now(), done: null }; n._log = r; cutLog.push(r); } });
    m.removedNodes.forEach(n => { if (n._log) { n._log.done = performance.now(); n._log.final = n.className; n._log.loaded = [...n.querySelectorAll('img')].every(i => i.complete && i.naturalWidth > 0); } });
  })).observe(document.querySelector('.bt-cut'), { childList: true });
  new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => { if (n.classList && n.classList.contains('bt-bark')) { barkLog.push(n.textContent); barkMax = Math.max(barkMax, document.querySelectorAll('.bt-bark:not(.out)').length); } })))
    .observe(document.querySelector('.bt-barks'), { childList: true });
  return true;
})()'''


def fight(p, party, *, ranks, love=(), rev=(), speed=8, cutins='always', script='bond-check', day='12/12', huge=True, setup=''):
    """A story fight with this party and these links; returns once the battle is live in the frame."""
    p.top()
    p.goto(f'femc-game.html?seed=3' + (f'&speed={speed}' if speed else ''))
    p.eval(SETUP % {'cfg': json.dumps({'ranks': ranks, 'love': list(love), 'rev': list(rev), 'party': party, 'cutins': cutins, 'day': day})})
    p.eval('FemcGame.makeHandoff("scripted",{script:' + json.dumps(script) + ',notes:"",segment:1,forced:true,party:' + json.dumps(party) + '})')
    p.battle()
    for _ in range(300):
        st = p.eval("document.querySelector('[data-prep=begin]') ? (document.querySelector('[data-prep=begin]').click(), 'prep') : (window.FemcBattle && FemcBattle.B && document.querySelector('.bt-barks') ? 'live' : '')")
        if st == 'live': break
        time.sleep(0.1)
    p.eval('''(() => { window.__hoStay = true; const s = FemcBattle.save; s.cutins = ''' + json.dumps(cutins) + '''; s.awakened = true;
      ''' + ('''FemcBattle.B.party().forEach(u => { u.maxHp = u.hp = 99999; u.maxSp = u.sp = 999; u.th = 0; });
      FemcBattle.B.foes().forEach(f => { f.maxHp = f.hp = 9e6; });''' if huge else '') + setup + ''' })()''')
    p.eval(WATCH)


def my_menu(p, mid, timeout=60):
    """Wait for mid's root command menu (others guard). Returns once it's mid's."""
    t0 = time.time()
    while time.time() - t0 < timeout:
        r = p.eval('''(() => { const c = FemcBattle.ctl, b = FemcBattle.B; if (c && c.kind === 'allout') { c.pickValue('0'); return ''; }
          if (!c || c.kind !== 'menu' || !c.items || !c.items.some(i => i.v === 'guard')) return '';
          const u = b.U(b.S.cur.id); if (!u || u.side !== 'party') return '';
          if (u.mid !== ''' + json.dumps(mid) + ''') { c.pickValue('guard'); return 'other'; }
          return 'mine'; })()''')
        if r == 'mine': return True
        time.sleep(0.04)
    raise TimeoutError(f'no menu for {mid}')


def guard_until(p, cond, timeout=60):
    """Guard every party menu (and decline All-Outs) until cond is true in the frame."""
    t0 = time.time()
    while time.time() - t0 < timeout:
        if p.eval(cond): return True
        p.eval("""(() => { const c = FemcBattle.ctl; if (c && c.kind === 'allout') { c.pickValue('0'); return; }
          if (c && c.kind === 'menu' && c.items && c.items.some(i => i.v === 'guard')) c.pickValue('guard'); })()""")
        time.sleep(0.06)
    raise TimeoutError(cond)


def pick(p, v):
    p.eval(f"FemcBattle.ctl.pickValue({json.dumps(v)})")
    time.sleep(0.12)


def menu_items(p):
    return p.eval("FemcBattle.ctl && FemcBattle.ctl.items ? FemcBattle.ctl.items.map(i => ({ v: i.v, off: !!i.off, why: i.why || '', label: i.label, offWhy: i.offWhy || '' })) : null")


def wait_cut(p, n, timeout=40):
    p.wait(f'cutLog.length >= {n} && cutLog[{n - 1}].done != null', timeout)
    return p.eval(f'cutLog[{n - 1}]')


def marks(p):
    return p.eval('Object.assign({}, FemcBattle.marks)')


def first_foe(p):
    return p.eval("FemcBattle.B.foes().find(f => !f.dead).id")


p = Page()
try:
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 800, 'deviceScaleFactor': 1, 'mobile': False})

    # ── Rules: unlock ranks, the romance version, reversed, Shinjiro's last day, handoff fields, old saves, tree nodes ──
    if want('rules'):
        p.goto('femc-game.html')
        r = p.eval(r'''(() => { const BD = FemcBonds, out = {};
          BD.BONDS.forEach(b => {
            const at = (rank, extra = {}) => { const s = BD.status(b, Object.assign({ bonds: { [b.partner]: rank } }, extra)); return s.state === 'own' ? s.cur.name + (s.cur.love ? '♥' : '') : s.state; };
            out[b.id] = { r4: at(4), r5: at(5), r8: at(8), r9: at(9), love9: at(9, { love: [b.partner] }), love6: at(6, { love: [b.partner] }), rev: at(9, { rev: [b.partner] }) };
          });
          const sh = BD.byId('shinjiro');
          out.shinjiroDates = ['10/2', '10/3', '10/4', '1/10', null].map(d => BD.status(sh, { bonds: { shinjiro: 9 }, date: d }).state);
          out.romances = BD.BONDS.filter(b => b.love).map(b => b.id);
          out.friends = BD.BONDS.filter(b => !b.love).map(b => b.id);
          return out; })()''')
        for bid, v in r.items():
            if bid in ('shinjiroDates', 'romances', 'friends'): continue
            ok(v['r4'] == 'rank' and v['r5'] not in ('rank', 'paused') and v['r9'] != v['r5'] and v['r8'] == v['r5'], (bid, v))
            ok(v['rev'] == 'paused', (bid, 'reversed', v))
            if bid in r['romances']: ok(v['love9'].endswith('♥') and not v['r9'].endswith('♥') and not v['love6'].endswith('♥'), (bid, 'love', v))
            else: ok(v['love9'] == v['r9'], (bid, 'friend has no love version', v))
        ok(sorted(r['romances']) == sorted(['akihiko', 'haechan', 'jungwon', 'jihoon', 'minji', 'shinjiro']), r['romances'])
        ok(sorted(r['friends']) == sorted(['yukari', 'junpei', 'mitsuru', 'aigis', 'ken', 'koromaru']), r['friends'])
        ok(r['shinjiroDates'] == ['own', 'own', 'gone', 'gone', 'own'], r['shinjiroDates'])
        # The handoff carries the romance route and the date; the battle save picks them up (syncBonds).
        p.eval(SETUP % {'cfg': json.dumps({'ranks': {'akihiko': 9, 'haechan': 6}, 'love': ['akihiko'], 'party': ['akihiko']})})
        h = p.eval("FemcGame.makeHandoff('tartarus',{party:['solar','akihiko']}).request")
        ok(h['social']['romance'] == ['akihiko'], h['social'])
        ok(p.eval("FemcGame.S.handoff.date.md") == '12/12', 'handoff date')
        # Old battle save (no bond fields) and a bad value: safe defaults.
        old = p.eval('''(() => { const b = FemcBattleSave.fresh(); delete b.bondsLove; delete b.bondDate; const n = FemcBattleSave.normalize(JSON.parse(JSON.stringify(b)));
          const bad = FemcBattleSave.normalize(Object.assign(FemcBattleSave.fresh(), { bondsLove: 'akihiko', bondDate: 'soon' }));
          return { love: n.bondsLove, date: n.bondDate, badLove: bad.bondsLove, badDate: bad.bondDate, arts: FemcBonds.arts(n).length }; })()''')
        ok(old == {'love': [], 'date': None, 'badLove': [], 'badDate': None, 'arts': 0}, old)
        # The menu's sync writes the route and date into the battle save.
        p.eval("FemcMenu.open('bonds')"); p.wait("!!document.querySelector('.g-fm-ov .g-fm-body')")
        bs = p.eval("({ love: FemcGame.S.battleSave.bondsLove, date: FemcGame.S.battleSave.bondDate, arts: FemcBonds.arts(FemcGame.S.battleSave).map(a => a.name) })")
        ok(bs['love'] == ['akihiko'] and bs['date'] == '12/12' and 'Sunrise Cadenza' in bs['arts'] and 'Sun and Moon' in bs['arts'], bs)
        p.eval("FemcMenu.close()")
        # The new tree nodes (tier 2, link rank 4) teach each fighter's signature skill.
        taught = p.eval(r'''(() => { const E = FemcBattleEngine, D = FEMC_BATTLE_DATA, out = {};
          Object.entries(D.ptrees).forEach(([mid, t]) => { const n = t.tiers[1][2]; const save = { lvl: 60, mem: { [mid]: { lvl: 60 } }, ptree: { [mid]: [t.tiers[0][0].id] }, ranks: { [mid]: 4 }, forgot: {}, order: {}, nodes: [], forms: [], evo: {}, ops: { cleared: [] }, gear: { eq: {}, owned: {} } };
            const before = E.ptreeState(save, mid, n.id, 3), r = E.ptreeBuy(save, mid, n.id, 4); out[mid] = { before, ok: r.ok, learned: r.learned[0], inKit: E.skillsFor(mid, save).includes(n.fx.learn), icon: !!(D.skills[n.fx.learn].icon && D.skills[n.fx.learn].fx) }; });
          return out; })()''')
        for mid, v in taught.items(): ok(v['before'] == 'rank' and v['ok'] and v['inKit'] and v['icon'], (mid, v))
        clean(p, 'rules')
        results['rules'] = {'bonds': len(r) - 3, 'romanceVersions': r['romances'], 'shinjiroDates': r['shinjiroDates'], 'signatureNodes': len(taught)}
        print('rules OK', flush=True)

    # ── Menu: the Bonds tab and the Skills tab's new node ──
    if want('menu'):
        p.goto('femc-game.html')
        p.eval(SETUP % {'cfg': json.dumps({'ranks': {'akihiko': 6, 'yukari': 9, 'jungwon': 3}, 'love': ['akihiko'], 'party': ['akihiko', 'yukari']})})
        p.eval("FemcMenu.open('bonds')"); p.wait("!!document.querySelector('[data-bondsk]')")
        tab = p.eval(r'''[...document.querySelectorAll('[data-bondsk]')].map(s => ({ id: s.dataset.bondsk, head: s.querySelector('header').textContent, rows: [...s.querySelectorAll('.g-perk')].map(r => r.textContent.replace(/\s+/g, ' ').trim()) }))''')
        ids = [x['id'] for x in tab]
        ok(ids == ['akihiko', 'yukari', 'jungwon'] or sorted(ids) == sorted(['akihiko', 'yukari', 'jungwon']), ids)
        ak = next(x for x in tab if x['id'] == 'akihiko')
        ok(any(r.startswith('R5') and 'Daybreak One-Two' in r and 'In use' in r for r in ak['rows']), ak)
        ok(any(r.startswith('R9') and 'Sunrise Cadenza' in r for r in ak['rows']) and not any('Thunder at Dawn' in r for r in ak['rows']), ('on the romance route the R9 is the romance one', ak))
        jw = next(x for x in tab if x['id'] == 'jungwon')
        ok('Not yet' in jw['head'] and any('♥ ? ? ?' in r for r in jw['rows']) and not any('Jade Ring' in r for r in jw['rows']), ('romance version hidden', jw))
        yu = next(x for x in tab if x['id'] == 'yukari')
        ok(any('Sunlit Gale' in r and 'In use' in r for r in yu['rows']), yu)
        p.eval("FemcMenu.close()"); p.wait("!document.querySelector('.g-fm-ov')")
        p.eval("FemcGame.progress('akihiko').rank=4;FemcGame.saveQuiet();FemcMenu.open('skills')"); p.wait("!!document.querySelector('[data-sk=akihiko]')")
        p.eval("document.querySelector('[data-sk=akihiko]').click()"); p.wait("!!document.querySelector('[data-hn=ak6]')")
        st = p.eval("document.querySelector('[data-hn=ak6]').className")
        ok('lock' in st or 'avail' in st, st)
        clean(p, 'menu')
        results['menu'] = {'bondsTab': ids, 'akihiko': ak['rows'], 'akihikoNode': st}
        print('menu OK', flush=True)

    # ── A real bond through the battle menu ──
    if want('fight'):
        fight(p, ['solar', 'akihiko', 'jungwon'], ranks={'akihiko': 9, 'jungwon': 5, 'yukari': 5}, love=['akihiko'])
        my_menu(p, 'solar')
        items = menu_items(p)
        bond = next((i for i in items if i['v'] == 'bond'), None)
        ok(bond and not bond['off'], items)
        pick(p, 'bond')
        p.wait("FemcBattle.ctl && FemcBattle.ctl.items && FemcBattle.ctl.items.some(i => i.v === 'akihiko')")
        lst = menu_items(p)
        ok([i['v'] for i in lst] == ['akihiko', 'jungwon'] and lst[0]['label'] == 'Sunrise Cadenza' and lst[1]['label'] == 'Jade Frost', lst)
        sp0 = p.eval("FemcBattle.B.party().map(u => u.sp)"); hp0 = p.eval("FemcBattle.B.foes().reduce((a, f) => a + f.hp, 0)")
        pick(p, 'akihiko')
        p.wait("FemcBattle.ctl && FemcBattle.ctl.items && FemcBattle.ctl.items.some(i => FemcBattle.B.U(i.v) && FemcBattle.B.U(i.v).side === 'enemy')")
        pick(p, first_foe(p))
        r = wait_cut(p, 1)
        ok('kind-duo' in r['cls'] and 'st-full' in r['cls'] and 'love' in r['cls'] and r['loaded'] and 'SUNRISE CADENZA' in r['name'], r)
        ok(any('/portraits/solar/' in s for s in r['imgs']) and any('/portraits/akihiko/blushing' in s for s in r['imgs']) and any('haenim' in s for s in r['imgs']) and any('polydeuces' in s or 'caesar' in s for s in r['imgs']), r['imgs'])
        ok(any('Stay on my left' in l for l in r['lines']) and any('I always do' in l for l in r['lines']), r['lines'])
        p.wait("FemcBattle.marks['bond-done'] >= 1")
        sp1 = p.eval("FemcBattle.B.party().map(u => u.sp)"); hp1 = p.eval("FemcBattle.B.foes().reduce((a, f) => a + f.hp, 0)")
        ok(sp1[0] == sp0[0] - 16 and sp1[1] == sp0[1] - 16 and sp1[2] == sp0[2], (sp0, sp1))
        ok(hp1 < hp0, 'no damage')
        m = marks(p)
        for k in ('bond', 'bond-akihiko', 'bond-love', 'bond-full', 'bond-kind-duo', 'bond-final', 'bond-impact', 'bond-done'): ok(m.get(k, 0) >= 1, (k, m))
        ok(any('Bond: Solar & Akihiko · Sunrise Cadenza' in x['t'] for x in p.eval('FemcBattle.blog')), 'battle log')
        # Akihiko's next turn is spent; the bond can't be used twice.
        guard_until(p, "(FemcBattle.marks['bond-rest'] || 0) >= 1")
        ok(p.eval("FemcBattle.blog.some(x => /Akihiko is catching their breath/.test(x.t))"), 'rest logged')
        my_menu(p, 'solar')
        items = menu_items(p)
        bond = next(i for i in items if i['v'] == 'bond')
        ok(not bond['off'], ('Jade Frost is still there', items))
        pick(p, 'bond'); p.wait("FemcBattle.ctl.items.some(i => i.v === 'akihiko')")
        lst = menu_items(p)
        ok(lst[0]['off'] and lst[0]['why'] == 'USED' and not lst[1]['off'], lst)
        p.eval("FemcBattle.ctl.back()")
        # Availability: a frozen partner, low SP, an absent partner.
        av = p.eval(r'''(() => { const B = FemcBattle.B, L = B.leader(), J = B.party().find(u => u.mid === 'jungwon'), out = {};
          J.ail = { id: 'freeze', t: 2 }; out.frozen = B.bondInfo(L, 'jungwon').why; J.ail = null;
          J.down = true; out.down = B.bondInfo(L, 'jungwon').why; J.down = false;
          const sp = J.sp; J.sp = 3; out.sp = B.bondInfo(L, 'jungwon').why; J.sp = sp;
          J.dead = true; out.ko = B.bondInfo(L, 'jungwon').why; J.dead = false;
          out.ok = B.bondInfo(L, 'jungwon').ok; out.absent = B.bondInfo(L, 'yukari').why; out.locked = B.bondInfo(L, 'haechan').why;
          return out; })()''')
        ok('can’t move' in av['frozen'] and 'can’t move' in av['down'] and 'SP' in av['sp'] and 'knocked out' in av['ko'] and av['ok'] and 'isn’t in the party' in av['absent'] and 'Not unlocked' in av['locked'], av)
        clean(p, 'fight')
        results['fight'] = {'cutIn': r['cls'], 'spBefore': sp0, 'spAfter': sp1, 'availability': av}
        print('fight OK', flush=True)

    # ── Started from the partner's own turn ──
    if want('partner'):
        fight(p, ['solar', 'yukari'], ranks={'yukari': 5})
        my_menu(p, 'yukari')
        pick(p, 'bond'); p.wait("FemcBattle.ctl.items.some(i => i.v === 'yukari')")
        ok([i['v'] for i in menu_items(p)] == ['yukari'], menu_items(p))
        p.eval("FemcBattle.B.party().forEach(u => { u.hp = Math.round(u.maxHp / 2); })")
        pick(p, 'yukari')  # all foes: no target step
        r = wait_cut(p, 1)
        ok('MORNING BREEZE' in r['name'] and 'love' not in r['cls'] and r['loaded'], r)
        guard_until(p, "(FemcBattle.marks['bond-rest'] || 0) >= 1")
        healed = p.eval("FemcBattle.B.party().every(u => u.hp > Math.round(u.maxHp / 2))")
        ok(healed, 'Morning Breeze heals the party')
        ok(p.eval("FemcBattle.blog.some(x => /Solar is catching their breath/.test(x.t))"), 'Solar rests')
        clean(p, 'partner')
        results['partner'] = 'Yukari started Morning Breeze; the party healed; Solar rested'
        print('partner OK', flush=True)

    # ── The art hook: bond.img and bond.sheet ──
    if want('art'):
        TH = 'assets/femc/battle/art/theurgy/'
        fight(p, ['solar', 'jungwon'], ranks={'jungwon': 9}, love=['jungwon'],
              setup=f"const a = FemcBattle.B.S.bondArts.find(x => x.id === 'jungwon'); a.img = '{TH}jungwon.webp'; a.focus = [50, 37];")
        my_menu(p, 'solar'); pick(p, 'bond'); p.wait("FemcBattle.ctl.items.some(i => i.v === 'jungwon')"); pick(p, 'jungwon')
        r = wait_cut(p, 1)
        ok('kind-cut' in r['cls'] and 'has-sheet' not in r['cls'] and any('theurgy/jungwon.webp' in s for s in r['imgs']) and r['loaded'] and 'JADE RING' in r['name'], r)
        ok(p.eval("FemcBattle.B.leader().ward === true || FemcBattle.marks['ward'] >= 1"), 'Jade Ring wards Solar')
        fight(p, ['solar', 'jungwon'], ranks={'jungwon': 9}, love=['jungwon'],
              setup=f"const a = FemcBattle.B.S.bondArts.find(x => x.id === 'jungwon'); a.img = '{TH}jungwon.webp'; a.sheet = {{ frames: [0, 1, 2].map(i => '{TH}jungwon-strike-' + i + '.webp') }};")
        my_menu(p, 'solar'); pick(p, 'bond'); p.wait("FemcBattle.ctl.items.some(i => i.v === 'jungwon')"); pick(p, 'jungwon')
        r = wait_cut(p, 1)
        ok('has-sheet' in r['cls'] and all(any(f'jungwon-strike-{k}' in s for s in r['imgs']) for k in range(3)) and r['loaded'], r)
        clean(p, 'art')
        results['art'] = 'bond.img → still cut-in; bond.sheet → strike sheet'
        print('art OK', flush=True)

    # ── Settings: Off → short band; reduced motion → fade; speed ──
    if want('settings'):
        fight(p, ['solar', 'koromaru'], ranks={'koromaru': 5}, cutins='off')
        my_menu(p, 'solar'); pick(p, 'bond'); p.wait("FemcBattle.ctl.items.some(i => i.v === 'koromaru')"); pick(p, 'koromaru')
        ok('st-short' in wait_cut(p, 1)['cls'], 'off → short')
        times = {}
        for spd in (1, 3):
            fight(p, ['solar', 'koromaru'], ranks={'koromaru': 5}, speed=0, setup=f'FemcBattle.save.speed = {spd};')
            my_menu(p, 'solar'); pick(p, 'bond'); p.wait("FemcBattle.ctl.items.some(i => i.v === 'koromaru')"); pick(p, 'koromaru')
            r = wait_cut(p, 1); times[spd] = r['done'] - r['t0']
        ok(times[1] > 2.2 * times[3] and times[1] > 2500, times)
        p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
        fight(p, ['solar', 'koromaru'], ranks={'koromaru': 5})
        my_menu(p, 'solar'); pick(p, 'bond'); p.wait("FemcBattle.ctl.items.some(i => i.v === 'koromaru')"); pick(p, 'koromaru')
        r = wait_cut(p, 1)
        ok('st-fade' in r['cls'] and r['done'] - r['t0'] < 2500, r)
        p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'no-preference'}]})
        clean(p, 'settings')
        results['settings'] = {'off': 'short', 'reduced': 'fade', 'speedMs': {k: round(v) for k, v in times.items()}}
        print('settings OK', flush=True)

    # ── Every signature skill, cast through the menu ──
    if want('sigs'):
        SIGS = [('akihiko', 'corkscrew'), ('yukari', 'gale_arrow'), ('junpei', 'fastball'), ('mitsuru', 'glacial_fleche'), ('aigis', 'missile_salvo'), ('ken', 'justice_lance'),
                ('koromaru', 'three_heads'), ('shinjiro', 'haymaker'), ('haechan', 'waning_moon'), ('haechan', 'moon_static'), ('jungwon', 'serpent_coil'), ('jungwon', 'black_tortoise'),
                ('jihoon', 'goblin_club'), ('jihoon', 'goblin_fire'), ('minji', 'clear_sight'), ('minji', 'focus_pull')]
        seen = {}
        # Shinjiro fights only until early October (the story's date), so his group is in September.
        groups = [(SIGS[0:3], '12/12'), (SIGS[3:6], '12/12'), ([SIGS[6], SIGS[7]], '9/1'), (SIGS[8:11], '12/12'), (SIGS[11:14], '12/12'), (SIGS[14:16], '12/12')]
        for g, day in groups:
            mids = []
            for mid, _ in g:
                if mid not in mids: mids.append(mid)
            fight(p, ['solar'] + mids, ranks={m: 5 for m in mids}, day=day, setup="FemcBattle.B.foes().forEach(f => { f.aff = {}; });")
            for mid, sk in g:
                my_menu(p, mid)
                p.eval(f"(() => {{ const u = FemcBattle.B.U(FemcBattle.B.S.cur.id); if (!u.skills.includes({json.dumps(sk)})) u.skills.push({json.dumps(sk)}); }})()")
                fx = p.eval(f"FEMC_BATTLE_DATA.skills[{json.dumps(sk)}].fx")
                before = p.eval(f"({{ hp: FemcBattle.B.foes().reduce((a, f) => a + f.hp, 0), fx: FemcBattle.marks['fx-{fx}'] || 0, use: FemcBattle.marks['use-{sk}'] || 0 }})")
                ex = p.eval("(() => { const B = FemcBattle.B, u = B.U(B.S.cur.id); return { sp: u.sp, hp: u.hp, down: B.foes().map(f => f.down) }; })()")
                pick(p, 'skill')
                p.wait(f"FemcBattle.ctl && FemcBattle.ctl.items && FemcBattle.ctl.items.some(i => i.v === {json.dumps(sk)})")
                pick(p, sk)
                tgt = p.eval("FemcBattle.ctl && FemcBattle.ctl.items ? FemcBattle.ctl.items[0].v : null")
                pick(p, tgt)
                p.wait(f"(FemcBattle.marks['use-{sk}'] || 0) > {before['use']} && (FemcBattle.marks['fx-{fx}'] || 0) > {before['fx']}", 30)
                time.sleep(0.6)
                after = p.eval("({ hp: FemcBattle.B.foes().reduce((a, f) => a + f.hp, 0) })")
                info = {'fx': fx, 'dmg': before['hp'] - after['hp']}
                if sk == 'black_tortoise':
                    t = p.eval("(() => { const B = FemcBattle.B, J = B.party().find(u => u.mid === 'jungwon'); return { taunt: J.taunt, def: B.party().map(u => u.buffs.def) }; })()")
                    ok(t['taunt'] > 0 and all(d > 0 for d in t['def']), (sk, t)); info.update(t)
                elif sk == 'focus_pull':
                    t = p.eval("(() => { const B = FemcBattle.B, f = B.foes()[0]; return { agi: f.buffs.agi, known: Object.keys(B.known(f.kind)).length }; })()")
                    ok(t['agi'] < 0 and t['known'] >= 9 and info['dmg'] > 0, (sk, t)); info.update(t)
                else:
                    ok(info['dmg'] > 0, (sk, info))
                seen[sk] = info
        # The mechanics that need numbers, on the engine with a fixed seed: Down bonus, low-HP bonus, Gale Arrow's heal, the drain.
        nums = p.eval(r'''(() => { const E = FemcBattleEngine;
          const hit = (party, mid, sk, prep) => { const sp = E.simParty({ lvl: 40, party, tier: 4 }); const B = E.create({ party: sp.units, enemies: ['pesce'], rand: E.rng(9) });
            const u = B.party().find(x => x.mid === mid), f = B.foes()[0]; f.maxHp = f.hp = 9e6; f.aff = {}; u.skills.push(sk); B.S.cur = u; if (prep) prep(B, u, f);
            const ev = B.act({ type: 'skill', skill: sk, target: f.id }); return { dmg: ev.filter(e => e.t === 'hit' && e.tgt === f.id).reduce((a, e) => a + e.amount, 0), u, ev }; };
          const up = hit(['junpei'], 'junpei', 'fastball').dmg, dn = hit(['junpei'], 'junpei', 'fastball', (B, u, f) => { f.down = true; }).dmg;
          const full = hit(['shinjiro'], 'shinjiro', 'haymaker').dmg, low = hit(['shinjiro'], 'shinjiro', 'haymaker', (B, u) => { u.hp = Math.round(u.maxHp * 0.2); }).dmg;
          const ga = hit(['yukari'], 'yukari', 'gale_arrow', B => B.party().forEach(x => { x.hp = Math.round(x.maxHp * 0.4); }));
          const lj = hit(['ken'], 'ken', 'justice_lance', (B, u) => { u.hp = 10; });
          return { downRatio: dn / up, lowRatio: low / full, galeHeals: ga.ev.filter(e => e.t === 'heal').length, lanceDrain: lj.u.hp > 10 }; })()''')
        ok(1.25 < nums['downRatio'] < 1.75 and nums['lowRatio'] > 1.3 and nums['galeHeals'] >= 2 and nums['lanceDrain'], nums)
        clean(p, 'sigs')
        results['signatures'] = {'cast': seen, 'mechanics': nums}
        print('sigs OK', flush=True)

    # ── Situational lines (real weakness and Theurgy; the rest through the real hit presentation) ──
    if want('lines'):
        fight(p, ['solar', 'akihiko', 'yukari', 'mitsuru'], ranks={'akihiko': 3, 'yukari': 3, 'mitsuru': 3}, setup="FemcBattle.B.foes().forEach(f => { f.aff = { fire: 'weak' }; f.down = false; });")
        my_menu(p, 'solar')
        pick(p, 'skill'); p.wait("FemcBattle.ctl.items.some(i => (FEMC_BATTLE_DATA.skills[i.v] || {}).el === 'fire')")
        pick(p, p.eval("FemcBattle.ctl.items.find(i => (FEMC_BATTLE_DATA.skills[i.v] || {}).el === 'fire').v"))
        pick(p, first_foe(p))
        p.wait("(FemcBattle.marks['bark-solar-weak'] || 0) >= 1", 30)
        time.sleep(1.2)  # lines never talk over each other (a short gap)
        # The rest: engine-shaped hit events through the real playback (hitLines → bark → the speech bubble).
        p.eval("FemcBattle.B.party().forEach(u => { u.maxHp = 300; u.hp = 300; })")
        def play(evs):
            p.eval("FemcBattle.playEvents(" + json.dumps(evs) + ")", timeout=60)
            time.sleep(1.0)
        ids = p.eval("Object.fromEntries(FemcBattle.B.party().map(u => [u.mid, u.id]))")
        foe = first_foe(p)
        play([{'t': 'hit', 'src': foe, 'tgt': ids['solar'], 'el': 'strike', 'aff': 'normal', 'amount': 120, 'hp': 180, 'maxHp': 300}])
        play([{'t': 'hit', 'src': foe, 'tgt': ids['yukari'], 'el': 'strike', 'aff': 'normal', 'amount': 230, 'hp': 70, 'maxHp': 300}])
        p.eval(f"FemcBattle.B.U('{ids['mitsuru']}').down = true")
        play([{'t': 'hit', 'src': foe, 'tgt': ids['mitsuru'], 'el': 'strike', 'aff': 'weak', 'amount': 40, 'hp': 260, 'maxHp': 300, 'downed': True}])
        p.eval(f"(() => {{ const u = FemcBattle.B.U('{ids['yukari']}'); u.dead = true; u.hp = 0; }})()")
        play([{'t': 'hit', 'src': foe, 'tgt': ids['yukari'], 'el': 'strike', 'aff': 'normal', 'amount': 70, 'hp': 0, 'maxHp': 300, 'killed': True}])
        p.eval(f"(() => {{ const u = FemcBattle.B.U('{ids['akihiko']}'); u.th = 100; }})()")
        play([{'t': 'thReady', 'tgt': ids['akihiko']}])
        m = marks(p)
        need = ['bark-solarHurt', 'bark-allyLow', 'bark-downed', 'bark-mitsuru-downed', 'bark-allyDown', 'bark-akihiko-thReady']
        for k in need: ok(m.get(k, 0) >= 1, (k, {x: y for x, y in m.items() if x.startswith('bark')}))
        ok(m.get('banter', 0) == 0, 'no banter without the romance route')
        bl = p.eval("barkLog")
        ok(any('{name}' not in x and ('Yukari' in x) for x in bl), ('names filled in', bl))
        # Caps: the same member doesn't repeat the same situation in one fight. The cap is per member (each says
        # "Solar's hurt" once), so count each member's own mark: deterministic whatever the 900 ms gap between lines does
        # (the old total-count check raced that gap against the sleep between hits).
        for _ in range(3):
            play([{'t': 'hit', 'src': foe, 'tgt': ids['solar'], 'el': 'strike', 'aff': 'normal', 'amount': 150, 'hp': 30, 'maxHp': 300}])
        per = p.eval("Object.fromEntries(Object.entries(FemcBattle.marks).filter(([k]) => /^bark-[a-z]+-solarHurt$/.test(k)))")
        ok(per and all(v <= 1 for v in per.values()), ('capped: each member says it once', per))
        first = {k: v for k, v in marks(p).items() if k.startswith('bark-')}
        clean(p, 'lines (fight)')
        # A boss appearing, and a victory line, in a real full-moon fight.
        fight(p, ['solar', 'junpei', 'yukari'], ranks={'junpei': 3, 'yukari': 3}, script='magician', huge=False)
        p.wait("(FemcBattle.marks['bark-boss'] || 0) >= 1", 30)
        p.eval("FemcBattle.B.foes().forEach(f => { f.hp = 1; f.aff = {}; })")
        for _ in range(40):
            if p.eval("FemcBattle.B.outcome() === 'win'"): break
            try:
                my_menu(p, 'solar', timeout=10)
                pick(p, 'attack'); pick(p, first_foe(p))
            except Exception:
                pass
            time.sleep(0.2)
        p.wait("(FemcBattle.marks['bark-win'] || 0) >= 1", 30)
        clean(p, 'lines (boss)')
        results['lines'] = {'fight': first, 'boss fight': {k: v for k, v in marks(p).items() if k.startswith('bark-')}}
        results['linesSample'] = bl[:6]
        print('lines OK', flush=True)

    # ── Romance banter: only on the romance route, from the rank each line needs ──
    if want('banter'):
        def banter_run(love, rank):
            fight(p, ['solar', 'haechan'], ranks={'haechan': rank}, love=love)
            my_menu(p, 'solar')
            ids = p.eval("Object.fromEntries(FemcBattle.B.party().map(u => [u.mid, u.id]))")
            foe = first_foe(p)
            p.eval("FemcBattle.B.party().forEach(u => { u.maxHp = 300; u.hp = 300; })")
            # Lines queue one at a time, each up for its reading time (battle.js barkMs): wait for the queue to empty
            # instead of sleeping a fixed time, so the run doesn't depend on the line lengths.
            drained = "!document.querySelector('.bt-bark')"
            p.eval("FemcBattle.playEvents(" + json.dumps([{'t': 'hit', 'src': ids['solar'], 'tgt': foe, 'el': 'pierce', 'aff': 'normal', 'crit': True, 'amount': 300, 'hp': 8e6, 'maxHp': 9e6}]) + ")", timeout=60)
            p.wait(drained, 40)
            p.eval("FemcBattle.playEvents(" + json.dumps([{'t': 'hit', 'src': foe, 'tgt': ids['solar'], 'el': 'strike', 'aff': 'normal', 'amount': 150, 'hp': 150, 'maxHp': 300}]) + ")", timeout=60)
            p.wait(drained, 40)
            ok(p.eval("barkMax") <= 1, ('one bubble at a time', p.eval("barkMax")))
            return marks(p), p.eval("barkLog")
        m0, _ = banter_run([], 9)
        ok(not m0.get('banter') and m0.get('bark-haechan-solarHurt', 0) >= 1, ('friend route: no banter, a plain line', m0))
        m4, _ = banter_run(['haechan'], 4)
        ok(not m4.get('banter'), ('romance route below the rank: no banter', m4))
        m6, bl6 = banter_run(['haechan'], 6)
        ok(m6.get('banter-haechan-crit') == 1 and m6.get('banter-haechan-hurt') == 1, m6)
        ok(any('Solar' in x for x in bl6) and any('Haechan' in x for x in bl6), ('both speak', bl6))
        # Each pair: their line, then Solar's reply right after it (both crit and hurt pairs played in full).
        ok(len(bl6) == 4 and [x.startswith('Haechan') for x in bl6] == [True, False, True, False], ('pairs in order', bl6))
        m9, bl9 = banter_run(['haechan'], 9)
        ok(m9.get('banter-haechan-crit') == 1, m9)
        clean(p, 'banter')
        results['banter'] = {'friendRoute': 'plain lines', 'rank4': 'none', 'rank6': bl6, 'rank9': bl9}
        print('banter OK', flush=True)

    # ── Rush: it starts a bond on its own when it's worth it ──
    if want('rush'):
        p.top(); p.goto('femc-game.html?seed=1&speed=8')
        p.eval(SETUP % {'cfg': json.dumps({'ranks': {'akihiko': 5}, 'party': ['akihiko']})})
        p.eval("FemcGame.makeHandoff('tartarus',{party:['solar','akihiko']});FemcGame.save()")
        p.battle(); p.eval("window.__hoStay=true")
        for i in range(300):
            if p.eval("(()=>{if(FemcBattle.screen()==='hub'&&FemcBattle.ctl?.kind==='buttons')return true;const b=document.querySelector('.bt-evx-skip,.bt-tip [data-ok]');b&&b.click();return false})()"): break
            time.sleep(0.1)
        p.eval("window.__btGroup=['pesce','pesce'];FemcBattle.save.cutins='always';document.querySelector('[data-go=run],[data-go=cont]').click()")
        for i in range(400):
            st = p.eval("""(()=>{const F=FemcBattle,c=F.ctl;if(F.B&&F.screen()==='battle')return 'battle';const tip=document.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return null}
              if(c?.kind==='map'){const o=c.opts||[];const n=o.find(x=>x.type==='shadow')||o[0];if(n)c.go(n.id);return null}
              if(c?.kind==='buttons'){const b=document.querySelector('.bt-btn.pink:not(:disabled)');b&&b.click();return null}return null})()""")
            if st == 'battle': break
            time.sleep(0.05)
        p.wait("!!FemcBattle.B && !!document.querySelector('.bt-barks')", 60)
        p.eval("(()=>{const B=FemcBattle.B;B.foes().forEach(f=>{f.maxHp=f.hp=9e6});B.party().forEach(u=>{u.maxHp=u.hp=99999;u.maxSp=u.sp=999;u.th=0});return true})()")
        p.eval(WATCH)
        p.wait("FemcBattle.ctl?.kind==='menu'", 60)
        p.eval("FemcBattle.toggleRush()")
        r = wait_cut(p, 1, 60)
        ok('st-short' in r['cls'] and 'DAYBREAK ONE-TWO' in r['name'], r)
        ok(p.eval("FemcBattle.marks['rush-act-solar'] >= 1"), 'Rush acted for Solar')
        p.eval("FemcBattle.toggleRush(); FemcBattle.hoFinish('retreat')")
        clean(p, 'rush')
        results['rush'] = 'Rush started Daybreak One-Two (short cut-in)'
        print('rush OK', flush=True)

    # ── Screenshots: the bond cut-in (frozen on its impact), the Bond menu, a speech bubble, the Bonds tab ──
    if want('shots'):
        shots = []
        for (w, h, mobile) in [(1000, 486, False), (375, 812, True), (1440, 900, False)]:
            p.top()
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
            fight(p, ['solar', 'haechan', 'jungwon'], ranks={'haechan': 9, 'jungwon': 9}, love=['haechan'], speed=0)
            my_menu(p, 'solar'); pick(p, 'bond'); p.wait("FemcBattle.ctl.items.some(i => i.v === 'haechan')")
            p.top(); (OUT / f'{w}x{h}-bond-menu.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data'])); shots.append(f'{w}x{h}-bond-menu.png')
            p.frame()
            fit = p.eval("(() => { const m = document.querySelector('.bt-cmd'); const r = m.getBoundingClientRect(); return { inside: r.left >= -1 && r.right <= innerWidth + 1 && r.bottom <= innerHeight + 1, scroll: document.documentElement.scrollWidth <= innerWidth }; })()")
            ok(fit['inside'] and fit['scroll'], (w, h, 'menu fits', fit))
            p.eval("window.__btFreezeAt = 'bond-impact'")
            pick(p, 'haechan')
            p.wait('FemcBattle.frozen', 30)
            time.sleep(0.35)
            p.eval("document.getAnimations().forEach(a => a.pause())")
            fit = p.eval('''(() => { const t = document.querySelector('.bt-bond'), n = t.querySelector('.th-name').getBoundingClientRect(), l = [...t.querySelectorAll('.th-line')].map(x => x.getBoundingClientRect());
              const bands = [...t.querySelectorAll('.bd-band img')].every(i => i.complete && i.naturalWidth > 0);
              return { cover: t.getBoundingClientRect().width >= innerWidth - 1, nameIn: n.left >= 0 && n.right <= innerWidth + 2 && n.top >= 0, linesIn: l.every(r => r.left >= -2 && r.right <= innerWidth + 2 && r.bottom <= innerHeight + 2),
                       bands, scroll: document.documentElement.scrollWidth <= innerWidth, rect: [n.left, n.top, n.right, n.bottom] }; })()''')
            p.top(); name = f'{w}x{h}-bond-cutin.png'
            (OUT / name).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data'])); shots.append(name)
            ok(all(v for k, v in fit.items() if k != 'rect'), (w, h, fit))
            p.frame()
            p.eval("FemcBattle.unfreeze(); document.getAnimations().forEach(a => a.play()); window.__btFreezeAt = null")
            p.wait("(FemcBattle.marks['bond-done'] || 0) >= 1", 30)
            # A speech bubble (and a romance exchange) over the cards.
            ids = p.eval("Object.fromEntries(FemcBattle.B.party().map(u => [u.mid, u.id]))")
            p.eval("FemcBattle.B.party().forEach(u => { u.maxHp = 300; u.hp = 300; })")
            p.eval("FemcBattle.playEvents(" + json.dumps([{'t': 'hit', 'src': first_foe(p), 'tgt': ids['solar'], 'el': 'strike', 'aff': 'normal', 'amount': 150, 'hp': 150, 'maxHp': 300}]) + ")", timeout=60)
            time.sleep(1.6)
            bub = p.eval("[...document.querySelectorAll('.bt-bark')].map(b => { const r = b.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth + 1 && r.top >= 0; })")
            ok(bub and all(bub), (w, h, 'bubbles on screen', bub))
            p.top(); name = f'{w}x{h}-banter.png'
            (OUT / name).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data'])); shots.append(name)
            # The Bonds tab.
            p.top(); p.goto('femc-game.html')
            p.eval(SETUP % {'cfg': json.dumps({'ranks': {'akihiko': 9, 'haechan': 5, 'yukari': 9, 'mitsuru': 2}, 'love': ['akihiko'], 'party': ['akihiko']})})
            p.eval("FemcMenu.open('bonds')"); p.wait("!!document.querySelector('[data-bondsk]')")
            time.sleep(0.7)
            ok(p.eval("document.documentElement.scrollWidth <= innerWidth"), (w, h, 'bonds tab overflow'))
            name = f'{w}x{h}-bonds-tab.png'
            (OUT / name).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data'])); shots.append(name)
            p.eval("FemcMenu.close()")
            clean(p, f'shots {w}x{h}')
        p.ws.call('Emulation.setDeviceMetricsOverride', {'width': 1280, 'height': 800, 'deviceScaleFactor': 1, 'mobile': False})
        results['screenshots'] = {'dir': str(OUT), 'files': shots}
        print('shots OK', flush=True)

    results['browserErrors'] = []
    print(json.dumps(results, indent=1, ensure_ascii=False))
finally:
    p.close()
