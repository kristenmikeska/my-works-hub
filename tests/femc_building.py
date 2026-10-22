"""The building systems, played for real in headless Chrome (femc-game.html, isolated profile, localhost; no player saves).

Run: python3 tests/femc_building.py [--only rules,menu,daily,fight,boss,knives,searchers,practice,migrate,shots] [--screenshots DIR]

Covers: Shuffle Time (real draws through the UI: Cups, a Major Arcana Revelation card, a penalty, Rush's auto-pick, and every
card type and penalty applied), Revelation cards (drops, equip through the menu, set bonuses applied in battle, level, refine,
lock, dismantle, skill cards taught), link perks (unlocking at the right ranks, the rank-up toast, a battle Assist, a
Tartarus perk at an access point, the night kit, a daily perk, Kiriko's MAX Protective Suzu at half SP without the Bell
branch, searchers' Assists before they join, a reversed link pausing them), Solar's naginatas (stats, refines and bonuses in
a fight, gifts from bonds, a boss drop), Haechan's six knives (his alone: every equip list, shop and Shuffle draw; art,
bonuses and refines in a real fight; his starter; the rank-7 gift; the Chariot's drop; shops and chests), Jungwon's rapiers,
Jihoon's gloves and Minji's bows the same way (plus the one-time boss backfill, Treasure's battle yen, and Minji's finish card
in a real All-Out, screenshotted), save migration (old battle and life-sim saves), zero console errors, and
screenshots of the new screens at 1000x486, 375x812 and 1440x900."""
import argparse, base64, json, pathlib, time
from femc_browser import Page

URL = 'femc-game.html?speed=10&seed=7'
ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/femc-building-shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
results = {}


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


# A playthrough on 8/3 with S.E.E.S. available, links at the given ranks, and a battle save at a level.
SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'8/3'); S.slot=cfg.slot||'evening';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=cfg.yen||80000; S.condition='good';
  Object.entries(cfg.ranks||{}).forEach(([id,r])=>{ if(!S.met.includes(id)) S.met.push(id); G.progress(id).rank=r; });
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
  b.lvl=cfg.lvl||40; b.pts=0; b.party=cfg.party||['akihiko','yukari','junpei']; b.awakened=true;
  D.party.forEach(m=>{ if(m.id!=='solar') b.mem[m.id]={lvl:cfg.lvl||40,exp:0}; });
  FemcBattleEngine.evolutionsDue(b,id=>FemcBattleEngine.lvlOf(b,id)).forEach(e=>{b.evo[e.mid]=true});
  b.mats=Object.assign({},cfg.mats||{});
  S.battleSave=FemcBattleSave.normalize(b); S.tartarus.lastParty=['solar'].concat(b.party); G.save();
  if(cfg.evening!==false) FemcGameUI.evening();
  return true;
})()"""


def setup(p, **cfg):
    p.goto(URL)
    p.eval(SETUP % {'cfg': json.dumps(cfg)})


def menu(p, tab):
    p.eval("FemcMenu.isOpen()&&FemcMenu.close()")
    p.wait("!document.querySelector('.g-fm-ov')")
    p.eval('FemcMenu.open(%s)' % json.dumps(tab))
    p.wait("!!document.querySelector('.g-fm-ov:not(.out) .g-fm-body')")


def click(p, sel):
    p.wait('!!document.querySelector(%s)' % json.dumps(sel))
    p.eval('document.querySelector(%s).click()' % json.dumps(sel))


def shot(p, name):
    p.eval("new Promise(r=>setTimeout(r,350))")
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def view(p, w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def no_scroll(p, name):
    ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), name + ': sideways scroll')


B = 'FemcGame.S.battleSave'
# One step of a Tartarus night in the battle frame: walk to `want` rooms, attack, take All-Outs, click through panels.
STEP = r"""(()=>{const F=FemcBattle,c=F.ctl,d=document,want=window.__want||'shadow';
  if(window.__hoResult)return 'done';
  if(F.screen()==='shuffle'){ if(c&&c.kind==='shuffle'&&window.__pickShuffle!=null){ c.pickValue(window.__pickShuffle); window.__pickShuffle=null; return 'picked'; }
    if(c&&c.kind==='buttons'){ const ok=d.querySelector('[data-sh-ok]'); if(ok){ ok.click(); return 'sh-ok'; } } return 'shuffle'; }
  const tip=d.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return 'tip'}
  if(F.screen()==='room'&&window.__stopAt&&d.querySelector('.bt-room.'+window.__stopAt))return 'stop';
  if(F.screen()==='results'&&window.__stopResults)return 'results';
  if(window.__noUp&&d.querySelector('.bt-room.stairs [data-v=no], .bt-room.barrier [data-v=no]')){d.querySelector('.bt-room [data-v=no]').click();return 'not-yet'}
  if(c?.kind==='map'){const o=c.opts||[];const n=o.find(x=>x.type===want&&!x.cleared&&!x.used)||o.find(x=>!x.visited)||o[0];if(n)c.go(n.id);return 'map'}
  if(c?.kind==='allout'){c.pickValue('1');return 'allout'}
  if(c?.kind==='menu'){const v=c.items.map(i=>i.v);if(v.includes('attack')){c.pickValue('attack');return 'attack'}c.pickValue(v[0]);return 'pick'}
  if(c?.kind==='buttons'){const b=d.querySelector('.bt-btn.pink:not(:disabled)')||d.querySelector('.bt-btn:not(:disabled)');b&&b.click();return 'btn'}
  return null})()"""


def drive(p, until, limit=90):
    t0 = time.time()
    while time.time() - t0 < limit:
        if p.eval(until): return True
        p.eval(STEP)
        time.sleep(0.04)
    raise TimeoutError(until + ' :: ' + str(p.eval("JSON.stringify({s:FemcBattle.screen(),c:FemcBattle.ctl&&FemcBattle.ctl.kind})")))


def night(p, party=None):
    """Open a Tartarus night (the battle frame) and stop on its hub."""
    p.eval("FemcGame.makeHandoff('tartarus',{party:%s});FemcGame.save()" % json.dumps(['solar'] + (party or ['akihiko', 'yukari', 'junpei'])))
    p.battle(); p.eval("window.__hoStay=true")
    p.wait("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'", 60)


p = Page()
try:
    view(p, 1280, 850)
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})

    # ── Rules (in the page): perk states by rank, every Shuffle Time card, cards, refines ──
    if want('rules'):
        setup(p, ranks={'kiriko': 3, 'minji': 3, 'mercy': 8})
        r = p.eval(r"""(()=>{
          const B=FemcBuild,D=FEMC_BATTLE_DATA,s=FemcGame.S.battleSave,out={};
          const st=(id,ctx)=>B.perkState(B.perkById(id),ctx);
          out.fox3=st('kiriko-4',{bonds:{kiriko:3}}); out.fox4=st('kiriko-4',{bonds:{kiriko:4}}); out.paused=st('kiriko-4',{bonds:{kiriko:4},rev:['kiriko']});
          out.cross=st('minji-3',{bonds:{minji:3},joined:[]}); out.crossJoined=st('minji-3',{bonds:{minji:3},joined:['minji']}); out.ken=st('ken-4',{bonds:{ken:4},joined:[]});
          out.stub=st('jaehyun-4',{bonds:{jaehyun:10}});
          const bp=B.battlePerks({bonds:{minji:5,kiriko:10,mark:4},bondsRev:[]},['minji']);
          out.bp={duo:bp.duo&&bp.duo.by, cross:bp.crosshair&&bp.crosshair.by, suzu:bp.suzuHalf&&bp.suzuHalf.v, count:bp.countIn&&bp.countIn.assist};
          out.perks=B.PERKS.length; out.stubs=B.PERKS.filter(p=>p.stub).map(p=>p.id);
          // Every Shuffle Time card, applied to a scratch save.
          const t=FemcBattleSave.normalize(FemcBattleSave.fresh()); t.yen=10000; const R=FemcBattleEngine.rng(11); out.cards={};
          const hand=[].concat(['cups','coins','swords','wands'].map(suit=>({kind:'minor',suit,rank:9,num:'IX',name:'IX of '+suit})),
            B.SH.majors.map(m=>Object.assign({kind:'major'},m)), B.SH.penalties.map(m=>Object.assign({kind:'penalty'},m)));
          hand.forEach(c=>{ const res=B.applyShuffle(t,c,{R,tier:4,party:['solar','akihiko']}); out.cards[c.kind+':'+(c.suit||c.out||c.id)+':'+(c.id||'')]={lines:res.lines,fx:Object.keys(res.fx),pen:!!res.penalty}; });
          out.after={cards:t.cards.list.length, skillCards:Object.keys(t.skillCards).length, boost:t.pboost, mats:t.mats, yen:t.yen, gear:Object.keys(t.gear.owned)};
          // Cards: roll, level, refine, lock, dismantle.
          const c=B.rollCard(R,{set:'bell',slot:'crown',r:5}); B.addCard(t,c); t.mats={tarot_dust:500,velvet_thread:20,arcana_fragment:2}; t.yen=50000;
          const v0=B.mainValue(c); const l1=B.levelCard(t,c.u); const v1=B.mainValue(c);
          const r1=B.refineCard(t,c.u,R); c.lock=true; const d0=B.dismantleCard(t,c.u); c.lock=false; const d1=B.dismantleCard(t,c.u);
          out.card={v0,v1,l1:l1.ok,lvl:c.lvl,ref:r1.ok&&c.ref,subs:c.subs.length,lockStops:!d0.ok,gone:d1.ok&&!t.cards.list.some(x=>x.u===c.u),dust:d1.dust};
          // Weapon refines: cost, ATK and bonus scaling.
          t.gear.owned.nag_ice=1; t.mats={tarot_dust:500,velvet_thread:20,arcana_fragment:2};
          const a0=B.weaponAtk(t,'nag_ice'); B.refineWeapon(t,'nag_ice'); B.refineWeapon(t,'nag_ice');
          const bx=B.unitBonus(t,'solar','nag_ice');
          out.wref={a0,a2:B.weaponAtk(t,'nag_ice'),lvl:B.wrefOf(t,'nag_ice'),ice:bx.el.ice,freeze:bx.freeze};
          return out;})()""")
        ok(r['fox3'] == 'rank' and r['fox4'] == 'own' and r['paused'] == 'paused', ('Fox Spirit at rank 4, paused when reversed', r))
        ok(r['cross'] == 'assist' and r['crossJoined'] == 'party' and r['ken'] == 'rank', ('searchers assist before joining; S.E.E.S. battle perks need them', r))
        # Since the living world, part 2 (clubs), only party switching and Velvet Room draws are left.
        ok(r['stub'] == 'stub' and sorted(r['stubs']) == ['jaehyun-4'], r['stubs'])
        ok(r['bp']['duo'] == 'minji' and r['bp']['suzu'] == 0.5 and r['bp']['count'], r['bp'])
        kinds = r['cards']
        ok(len(kinds) == 4 + 13 + 4, len(kinds))
        ok(all(v['lines'] for v in kinds.values()), [k for k, v in kinds.items() if not v['lines']])
        ok(kinds['penalty:tower:tower']['fx'] == ['hpLoss'] and kinds['penalty:reaper:death']['fx'] == ['reaper'] and kinds['penalty:moon:moon']['fx'] == ['curse'] and kinds['penalty:devil:devil']['pen'], 'penalties')
        ok(kinds['minor:cups:']['fx'] == ['heal'] and kinds['minor:wands:']['fx'] == ['expMult'] and 'yen' in kinds['minor:coins:']['fx'] and 'gear' in kinds['minor:swords:']['fx'], 'minor suits')
        ok(r['after']['cards'] == 3 and r['after']['skillCards'] == 1 and sum(len(v) for v in r['after']['boost'].values()) == 5, r['after'])
        c = r['card']
        ok(c['l1'] and c['lvl'] == 2 and c['v1'] > c['v0'] and c['ref'] == 1 and c['subs'] == 4 and c['lockStops'] and c['gone'] and c['dust'] > 30, c)
        w = r['wref']
        ok(w['a0'] == 55 and w['a2'] == round(55 * 1.12) and w['lvl'] == 2 and abs(w['ice'] - 20 * 1.3) < 1e-6 and abs(w['freeze'] - 13) < 1e-6, w)
        results['rules'] = {'perks': r['perks'], 'stubbed': len(r['stubs']), 'shuffle card types': len(kinds), 'card': c, 'refine': w}
        errs = p.console(); ok(not errs, errs)
        print('Rules: perk states, every Shuffle Time card, cards, weapon refines OK', flush=True)

    # ── The menu: Cards (equip a set, level, refine, lock, dismantle, teach), Equipment (art, refine), Bonds, Links, toasts ──
    if want('menu'):
        setup(p, ranks={'kiriko': 6, 'kuromi': 7, 'aphrodite': 2, 'akihiko': 3}, mats={'tarot_dust': 400, 'velvet_thread': 12, 'arcana_fragment': 2})
        p.eval(r"""(()=>{const b=FemcGame.S.battleSave,B=FemcBuild,R=FemcBattleEngine.rng(4);
          B.SLOTS.slice(0,4).forEach(sl=>B.addCard(b,B.rollCard(R,{set:'pin',slot:sl.id,r:4})));
          for(let i=0;i<6;i++) B.addCard(b,B.rollCard(R,{tier:3}));
          b.skillCards={mediarama:1}; FemcGame.saveQuiet();})()""")
        menu(p, 'cards')
        # Equip the four Star Pin cards through the menu: pick a slot, the card, Equip.
        pins = p.eval(B + ".cards.list.filter(c=>c.set==='pin').map(c=>c.u)")
        for u in pins:
            click(p, '[data-card="%d"]' % u); click(p, '[data-cequip]')
        eq = p.eval(B + ".cards.eq.solar")
        ok(sorted(eq.values()) == sorted(pins), eq)
        ok(p.eval("document.querySelector('.g-card-sum').textContent.includes('Star Pin 4')"), 'set bonus shown')
        unit = p.eval("(()=>{const u=FemcBattleEngine.buildUnit('solar',FemcGame.S.battleSave);return {dmg:u.dmgUp,open:u.partyOpen,st:u.st}})()")
        ok(abs(unit['dmg'] - 0.06) < 1e-9 and unit['open'] == ['atk'], unit)
        # Level, refine, lock, dismantle (two presses) on one card.
        cu = pins[0]
        click(p, '[data-card="%d"]' % cu)
        d0 = p.eval(B + ".mats.tarot_dust"); y0 = p.eval('FemcGame.S.yen')
        click(p, '[data-clevel]')
        ok(p.eval(B + ".cards.list.find(c=>c.u===%d).lvl" % cu) == 2 and p.eval(B + ".mats.tarot_dust") < d0 and p.eval('FemcGame.S.yen') < y0, 'level up')
        t0 = p.eval(B + ".mats.velvet_thread")
        click(p, '[data-crefine]')
        ok(p.eval(B + ".cards.list.find(c=>c.u===%d).ref" % cu) == 1 and p.eval(B + ".mats.velvet_thread") < t0, 'refine')
        click(p, '[data-clock]')
        ok(p.eval("document.querySelector('[data-cdis]').disabled"), 'locked cards cannot be dismantled')
        click(p, '[data-clock]')
        n0 = p.eval(B + ".cards.list.length"); d1 = p.eval(B + ".mats.tarot_dust")
        click(p, '[data-cdis]')
        ok(p.eval(B + ".cards.list.length") == n0, 'first press only arms')
        click(p, '[data-cdis]')
        ok(p.eval(B + ".cards.list.length") == n0 - 1 and p.eval(B + ".mats.tarot_dust") > d1 and cu not in p.eval(B + ".cards.eq.solar").values(), 'dismantled and unequipped')
        # A skill card taught to Akihiko (a ninth skill: the Skills tab opens on "forget which?").
        click(p, '[data-teach="mediarama"]'); click(p, '[data-teach="mediarama"][data-to="akihiko"]')
        ok('mediarama' in p.eval("FemcBattleEngine.skillsFor('akihiko',FemcGame.S.battleSave)") and not p.eval(B + ".skillCards.mediarama"), 'skill card taught')
        # Equipment: the naginatas from Kiriko (rank 6) and Kuromi (rank 7) arrived as gifts; art shows; refine.
        # (Astarion's Black Rose was a gift too until his link was removed on 2026-10-21; it's the Hermit's first-clear drop now.)
        menu(p, 'equip')
        ok(p.eval(B + ".gear.owned.nag_fox===1 && " + B + ".gear.owned.nag_kitty===1"), 'bond gifts')
        click(p, '[data-slot="weapon"]')
        ok(p.eval("!!document.querySelector('[data-pick=nag_fox] img.g-eq-art')"), 'naginata art in the list')
        click(p, '[data-pick="nag_fox"]')
        ok(p.eval("document.querySelector('[data-slot=weapon] img.g-eq-art').getAttribute('src').includes('weapons/autumn-fox.webp')"), 'equipped art')
        click(p, '[data-refine="nag_fox"]')
        ok(p.eval(B + ".wref.nag_fox") == 1 and p.eval("FemcBattleEngine.buildUnit('solar',FemcGame.S.battleSave).atk") == round(84 * 1.06), 'weapon refine')
        # Bonds tab and a link's perks.
        menu(p, 'bonds')
        ok(p.eval("document.querySelectorAll('.g-bond').length") >= 4 and p.eval("document.querySelector('.g-bonds').textContent.includes('Swift Step')"), 'bonds listed')
        click(p, '[data-btype="earned"]')
        ok(not p.eval("document.querySelector('.g-bonds').textContent.includes('Protective Suzu')"), 'filter: earned only')
        menu(p, 'links')
        click(p, '[data-link="kiriko"]')
        ok(p.eval("document.querySelector('.g-link-perks').textContent.includes('Fox Spirit')"), 'link perks shown')
        # A rank-up toast: Kiriko 6 → 7 earns nothing; Fuuka 1 → 2 earns Experimental Bento.
        p.eval("FemcMenu.close()")
        p.eval("(()=>{const G=FemcGame;G.S.met.push('fuuka');G.progress('fuuka').rank=1;G.finishLink(G.LINKS.fuuka,'rank',1,99);})()")
        p.wait("[...document.querySelectorAll('.g-toast.k-perk')].some(t=>t.textContent.includes('Experimental Bento'))", 10)
        results['menu'] = {'set': 'Star Pin 4 in battle units', 'level/refine/lock/dismantle': 'ok', 'gifts': ['nag_fox', 'nag_kitty'], 'toast': 'Experimental Bento'}
        errs = p.console(); ok(not errs, errs)
        print('Menu: cards equip/set/level/refine/lock/dismantle, skill card, gifts, art, refine, bonds, toast OK', flush=True)

    # ── Daily perks in the life sim ──
    if want('daily'):
        setup(p, ranks={'aphrodite': 2, 'mercy': 2, 'junpei': 2}, slot='after', day='8/4', evening=False)
        d = p.eval(r"""(()=>{const G=FemcGame,A=id=>G.D.places.activities.find(a=>a.id===id),S=G.S;S.condition='good';
          S.day=Array.from({length:30},(_,i)=>S.day+i).find(x=>G.weather(x)==='clear'&&G.dateOf(x).getDay()!==0);
          const out={};
          out.bathInfo=G.activityInfo(A('bathhouse')).benefit; S.slot='evening'; S.spent={}; const c0=S.stats.charm; G.doActivity(A('bathhouse')); out.bath=S.stats.charm-c0;
          S.spent={}; S.slot='after'; const y0=S.yen; G.doActivity(A('clinic')); out.clinic=y0-S.yen;
          S.spent={}; const y1=S.yen, a0=S.stats.knowledge; G.doActivity(A('hagakure')); out.hagakure={paid:y1-S.yen, acad:S.stats.knowledge-a0};
          S.links.mercy.rank=1; out.clinicNo=G.actCost(A('clinic'));
          return out;})()""")
        ok(d['bath'] == 4 and 'Charm +4' in d['bathInfo'], ('Glow Up: the bathhouse (Charm +2 since the five stats) +2 Charm', d))
        ok(d['clinic'] == 0 and d['clinicNo'] == 1000, ('House Call: the clinic is free at rank 2', d))
        ok(d['hagakure']['paid'] == 560 and d['hagakure']['acad'] == 3, ('Bro Discount: 30% off, +1 Knowledge', d))
        results['daily'] = d
        errs = p.console(); ok(not errs, errs)
        print('Daily perks: Glow Up, House Call, Bro Discount OK', flush=True)

    # ── A real Tartarus night: night kit, assists, Kiriko's MAX, naginata and set bonuses in battle, Shuffle Time, Tea Time ──
    if want('fight'):
        setup(p, ranks={'kiriko': 10, 'fuuka': 8, 'mark': 4, 'hanni': 4, 'ken': 6}, lvl=40)
        p.eval("FemcGame.setSetting('difficulty','story')")  # no Reaper while the test walks the floor
        p.eval(r"""(()=>{const b=FemcGame.S.battleSave,B=FemcBuild,R=FemcBattleEngine.rng(9);
          b.gear.owned.nag_ice=1; b.gear.eq.solar={weapon:'nag_ice',armor:'armor0',acc:null}; b.wref={nag_ice:2};
          B.SLOTS.forEach(sl=>{const c=B.rollCard(R,{set:'bell',slot:sl.id,r:5});B.addCard(b,c);B.equipCard(b,'solar',c.u);});
          FemcGame.saveQuiet();})()""")
        night(p)
        # The frame took the link ranks in (hoBegin): Kiriko's MAX puts Protective Suzu in Solar's kit without the Bell branch.
        kit = p.eval("FemcBattleEngine.kitFor('solar',FemcBattle.save).slots")
        ok('protective_suzu' in kit and 'bell6' not in p.eval('FemcBattle.save.nodes'), ('Kiriko MAX: Protective Suzu without the Bell branch', kit))
        ok(p.eval("FemcBattle.save.items.night_bento===1 && FemcBattle.save.items.kit_bead===1"), 'night kit: Fuuka’s bento and Ken’s bead')
        p.eval("window.__btGroup=['pesce','pesce'];window.__want='shadow';window.__noUp=true;document.querySelector('[data-go=run],[data-go=cont]').click()")
        drive(p, "FemcBattle.screen()==='battle' && !!FemcBattle.B && FemcBattle.ctl?.kind==='menu'", 90)
        u = p.eval("(()=>{const B=FemcBattle.B,s=B.party()[0],bx=FemcBuild.unitBonus(FemcBattle.save,'solar','nag_ice');return {atk:s.atk,ice:s.elBoost.ice,bxIce:bx.el.ice,spRegen:s.spRegen,heal:s.healMult,perks:Object.keys(B.perks()),agi:B.party().map(p=>p.buffs.agi),marks:FemcBattle.marks}})()")
        ok(u['atk'] == round(55 * 1.12) and u['bxIce'] >= 26 and abs(u['ice'] - (1 + u['bxIce'] / 100)) < 1e-6, ('Ice Crystal +2 in battle: ATK and Ice', u))
        ok(u['spRegen'] >= 4 and u['heal'] >= 1.2, ('Fox Bell 4-piece in battle', u))
        ok(all(a >= 1 for a in u['agi']) and u['marks'].get('perk-countIn'), ('Mark’s Count-In (an Assist) at the start', u))
        # Kiriko's Protective Suzu at half SP, through the menus.
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=99999})")
        sp = None
        for i in range(400):
            r = p.eval(r"""(()=>{const F=FemcBattle,B=F.B,c=F.ctl;if(c?.kind!=='menu')return null;const u=B.S.cur,v=c.items.map(i=>i.v);
              if(u.mid!=='solar'){c.pickValue(v.includes('guard')?'guard':v[0]);return null}
              if(v.includes('skill')&&v.includes('guard')){window.__sp0=u.sp;c.pickValue('skill');return null}
              if(v.includes('protective_suzu')){c.pickValue('protective_suzu');return null}
              if(v.includes('all')){c.pickValue('all');return 'cast'}return null})()""")
            if r == 'cast': break
            time.sleep(0.03)
        p.wait("FemcBattle.blog.some(x=>/Protective Suzu/.test(x.t))||FemcBattle.marks['use-protective_suzu']", 30)
        spent = p.eval("window.__sp0 - FemcBattle.B.party()[0].sp")
        ok(spent in (18, 18 - 4), ('Protective Suzu at half SP (36 → 18; the Bell set may give 4 back first)', spent))
        # Steady Signal (Fuuka, an Assist) on round 3.
        p.eval("FemcBattle.B.party().forEach(u=>{u.hp=Math.round(u.maxHp*0.5)})")
        p.wait("(()=>{for(let i=0;i<1;i++){const F=FemcBattle,c=F.ctl;if(c?.kind==='menu'){const v=c.items.map(i=>i.v);c.pickValue(v.includes('guard')?'guard':v[0]);}}return FemcBattle.marks['perk-steadySignal']>0})()", 60)
        p.eval("FemcBattle.B.foes().forEach(f=>{f.hp=1})")
        # Shuffle Time, forced: a Cups card after the fight heals tonight's HP.
        p.eval("window.__btShuffle=true;window.__btShuffleHand=[{kind:'minor',suit:'cups',rank:10,num:'X',name:'X of Cups'},{kind:'minor',suit:'coins',rank:1,num:'I',name:'I of Coins'},{kind:'minor',suit:'wands',rank:2,num:'II',name:'II of Wands'},{kind:'penalty',id:'tower',num:'XVI',name:'The Tower',out:'tower',text:'Everyone loses a quarter of their HP.'}]")
        drive(p, "FemcBattle.screen()==='shuffle' && FemcBattle.ctl?.kind==='shuffle'", 90)
        ok(p.eval("document.querySelectorAll('.bt-sh-card').length") == 4, 'four cards')
        p.eval("window.__pickShuffle=0")
        drive(p, "!!document.querySelector('.bt-sh-out:not([hidden])')", 30)
        ok(p.eval("document.querySelector('.bt-sh-out').textContent.includes('X of Cups')") and p.eval("FemcBattle.marks['shuffle-cups']"), 'Cups revealed')
        hp = p.eval("(()=>{const c=FemcBattle.run.carry;return Object.values(c).map(x=>x.hp)})()")
        p.eval("window.__stopResults=true")
        drive(p, "FemcBattle.screen()==='results'", 30)
        ok(p.eval("document.querySelector('.bt-res-extra').textContent.includes('Shuffle Time')"), 'results list the card')
        # A penalty next: the Tower takes a quarter of everyone's HP.
        p.eval("window.__stopResults=false;window.__btGroup=['maya','maya'];window.__btShuffleHand=[{kind:'penalty',id:'tower',num:'XVI',name:'The Tower',out:'tower',text:'Everyone loses a quarter of their HP.'},{kind:'minor',suit:'cups',rank:1,num:'I',name:'I of Cups'}]")
        drive(p, "FemcBattle.screen()==='shuffle' && FemcBattle.ctl?.kind==='shuffle'", 120)
        before = p.eval("(()=>{const u=FemcBattle.B.party().map(p=>[p.mid,p.hp]);return Object.fromEntries(u)})()")
        p.eval("window.__pickShuffle=0;window.__stopResults=true")
        drive(p, "FemcBattle.screen()==='results'", 30)
        after = p.eval("(()=>{const c=FemcBattle.run.carry;return Object.fromEntries(Object.entries(c).map(([k,v])=>[k,v.hp]))})()")
        ok(p.eval("FemcBattle.marks['shuffle-penalty']") and all(after[k] < before[k] for k in before), ('the Tower: HP lost', before, after))
        p.eval("window.__stopResults=false")
        # Rush picks for you (a Major Arcana: a Revelation card).
        n0 = p.eval("FemcBattle.save.cards.list.length")
        p.eval("window.__btShuffleHand=[{kind:'major',id:'fool',num:'0',name:'The Fool',out:'card'}];window.__btShufflePick=0;window.__btGroup=['maya']")
        drive(p, "FemcBattle.screen()==='battle' && FemcBattle.ctl?.kind==='menu'", 60)
        p.eval("document.dispatchEvent(new KeyboardEvent('keydown',{key:'r',bubbles:true}))")
        drive(p, "FemcBattle.marks['shuffle-major']>0", 120)
        ok(p.eval("FemcBattle.save.cards.list.length") == n0 + 1, 'the Fool gave a Revelation card (Rush picked)')
        # Tea Time (Hanni, Tartarus) at the access point every first floor has.
        p.eval("window.__want='access';window.__stopAt='access';FemcBattle.run.carry=Object.fromEntries(FemcBattle.B.party().map(p=>[p.mid,{hp:Math.round(p.maxHp*0.4),sp:Math.round(p.maxSp*0.4),th:0}]))")
        drive(p, "FemcBattle.screen()==='room' && !!document.querySelector('.bt-room.access')", 120)
        tea = p.eval("(()=>{const s=FemcBattle.B.party()[0];return {note:document.querySelector('.bt-room.access').textContent.includes('Tea Time'),hp:FemcBattle.run.carry.solar.hp,max:s.maxHp}})()")
        ok(tea['note'] and tea['hp'] >= round(tea['max'] * 0.55) - 1, ('Tea Time at the access point: +15% HP', tea))
        p.eval("window.__hoStay=false;FemcBattle.hoFinish('win')")
        p.top()
        p.wait("!FemcGame.S.handoff || FemcGame.S.handoff.status==='done'", 30)
        p.wait("!document.querySelector('.g-dh')", 30)
        ok(not p.eval("FemcGame.S.inventory.night_bento") and not p.eval("FemcGame.S.inventory.kit_bead"), 'night kits never come home')
        results['fight'] = {'night kit': True, 'Ice Crystal +2': u['atk'], 'Fox Bell 4pc': 'spRegen/heal', 'Count-In': True, 'Suzu SP': spent, 'Steady Signal': True, 'Shuffle': ['cups', 'tower', 'fool via Rush'], 'Tea Time': True}
        errs = p.console(); ok(not errs, errs)
        print('Real night: kit, assists, Kiriko MAX, naginata + set in battle, Shuffle Time (cups, penalty, Rush), Tea Time OK', json.dumps(results['fight']), flush=True)

    # ── A boss's first clear drops a naginata; Shuffle Time is guaranteed ──
    if want('boss'):
        setup(p, day='5/9', lvl=30, party=['yukari'])
        p.eval("FemcGame.makeHandoff('operation',{op:'priestess',forced:true,party:['solar','yukari']});FemcGame.save()")
        p.battle(); p.eval("window.__hoStay=true")
        p.wait("!!document.querySelector('.bt-clock-in button')", 60); p.eval("document.querySelector('.bt-clock-in button').click()")
        p.wait("!!document.querySelector('[data-prep=begin]')", 60); p.eval("document.querySelector('[data-prep=begin]').click()")
        p.wait("!!FemcBattle.B && FemcBattle.screen()==='battle'", 60)
        p.eval("FemcBattle.B.foes().forEach(f=>{f.hp=1});window.__want='shadow'")
        drive(p, "FemcBattle.screen()==='shuffle' && FemcBattle.ctl?.kind==='shuffle'", 120)
        ok(p.eval("FemcBattle.marks['shuffle-boss']") and p.eval("FemcBattle.save.gear.owned.nag_ice") == 1, 'Ice Crystal dropped; Shuffle Time after the full moon')
        p.eval("window.__pickShuffle=1")
        drive(p, "!!window.__hoResult", 90)
        ok('nag_ice' in p.eval("window.__hoResult.gear"), 'the naginata goes home with the result')
        p.top()
        results['boss'] = {'drop': 'nag_ice', 'shuffle': 'boss'}
        errs = p.console(); ok(not errs, errs)
        print('Boss: naginata drop and Shuffle Time OK', flush=True)

    # ── Haechan's six knives (FEMC-ART-TODO section 5): data, sources, who can hold them, the menu, a real fight ──
    if want('knives'):
        setup(p, day='12/12', ranks={'haechan': 6}, mats={'tarot_dust': 400, 'velvet_thread': 12, 'arcana_fragment': 2}, party=['haechan', 'koromaru'])
        r = p.eval(r"""(async()=>{
          const B=FemcBuild,D=FEMC_BATTLE_DATA,BS=FemcBattleSave,E=FemcBattleEngine,out={};
          const ids=['hk_starter','hk_mixdown','hk_widow','hk_harbor','hk_disc','hk_sunlight'];
          out.gear=ids.map(id=>{const g=D.gear[id];return [id,g.wtype,g.owner,g.tier,!!g.art,!!g.look,g.desc]});
          // Every card's art decodes, and is the tall shape the weapon slots crop to.
          out.art=await Promise.all(ids.map(id=>new Promise(res=>{const i=new Image();i.onload=()=>res([id,i.naturalWidth,i.naturalHeight]);i.onerror=()=>res([id,0,0]);i.src=D.gear[id].art;})));
          out.start=D.startGear.haechan.weapon; out.koroStart=D.startGear.koromaru.weapon;
          out.fits={h:B.fits(D.gear.hk_widow,'haechan'),k:B.fits(D.gear.hk_widow,'koromaru'),hk0:B.fits(D.gear.knife3,'haechan')};
          const t=BS.normalize(BS.fresh()); ids.forEach(id=>{t.gear.owned[id]=1}); t.gear.owned.knife3=1;
          out.cand={h:BS.candidates(t,'haechan','weapon'),k:BS.candidates(t,'koromaru','weapon')};
          // Koromaru can't be handed one, even by a hand-edited save (the engine falls back to his own weapon).
          t.gear.eq.koromaru={weapon:'hk_sunlight',armor:'armor0',acc:null}; out.koroGear=E.gearOf?E.gearOf(t,'koromaru').wid:E.buildUnit('koromaru',t).atk;
          // An old save with Haechan on the plain Combat Knife moves to his own.
          const old=BS.fromRaw({v:4,lvl:30,gear:{owned:{},eq:{haechan:{weapon:'knife0',armor:'armor1',acc:null},koromaru:{weapon:'knife0',armor:'armor0',acc:null}}}});
          out.migr=[old.gear.eq.haechan.weapon,old.gear.eq.koromaru.weapon];
          // Bonuses and refines.
          const bm=B.unitBonus(t,'haechan','hk_mixdown'), bw=B.unitBonus(t,'haechan','hk_widow'), bs=B.unitBonus(t,'haechan','hk_sunlight');
          t.mats={tarot_dust:500,velvet_thread:20,arcana_fragment:2}; t.yen=99999; const a0=B.weaponAtk(t,'hk_widow'); B.refineWeapon(t,'hk_widow'); B.refineWeapon(t,'hk_widow');
          const bw2=B.unitBonus(t,'haechan','hk_widow');
          out.bonus={th:bm.th,sp:bm.spRegen,crit:bw.crit,critX:bw.critX,light:bs.el.light,a0,a2:B.weaponAtk(t,'hk_widow'),crit2:bw2.crit,starterNoRefine:B.wrefCost(t,'hk_starter')};
          // Sources: the Police Box (life sim, tier 3), Mayoido, locked chests, the Chariot, the rank-7 gift, Shuffle Time's Swords.
          FemcGame.S.tartarus.bosses=['priestess','hierophant'];
          out.police=FemcGame.shopStock('police').filter(x=>/^hk_/.test(x.id)).map(x=>[x.id,x.who,!!x.art]);
          out.mayoido=D.shops.mayoido.stock.includes('hk_sunlight'); out.chest=D.map.chest.lockedRare.includes('hk_widow'); out.boss=B.BOSS_WEAPON.chariot;
          const g=BS.normalize(BS.fresh()); out.gift5=B.syncBonds(g,{haechan:6}).length; out.gift7=B.syncBonds(g,{haechan:7}).map(x=>x.gear); out.gift7b=B.syncBonds(g,{haechan:9}).length;
          const draws=party=>{const s=BS.normalize(BS.fresh()),R=E.rng(5),got=new Set();for(let i=0;i<60;i++){const res=B.applyShuffle(s,{kind:'minor',suit:'swords',rank:9},{R,tier:6,party});if(res.fx.gear)got.add(res.fx.gear);}return [...got]};
          const without=draws(['solar','akihiko']), withH=draws(['solar','haechan']);
          out.shuffle={without:without.filter(x=>/^hk_/.test(x)),withH:withH.filter(x=>/^hk_/.test(x)).sort()};
          out.tag=B.namedTag('hk_disc');
          out.line=BS.gearLine('hk_widow');
          return out;})()""")
        ok([x[0] for x in r['gear']] == ['hk_starter', 'hk_mixdown', 'hk_widow', 'hk_harbor', 'hk_disc', 'hk_sunlight'] and all(x[1] == 'knife' and x[2] == 'haechan' and x[4] and x[5] and x[6] for x in r['gear']), r['gear'])
        ok(all(w > 200 and h > 500 for _, w, h in r['art']), ('weapon art decodes, tall', r['art']))
        ok(r['start'] == 'hk_starter' and r['koroStart'] == 'knife0', 'Haechan starts with his own knife; Koromaru keeps the Combat Knife')
        ok(r['fits'] == {'h': True, 'k': False, 'hk0': True}, r['fits'])
        ok(set(r['cand']['h']) >= {'hk_starter', 'hk_mixdown', 'hk_widow', 'hk_harbor', 'hk_disc', 'hk_sunlight', 'knife3'} and not any(x.startswith('hk_') for x in r['cand']['k']), r['cand'])
        ok(r['koroGear'] == 'knife0', ('a hand-edited save cannot arm Koromaru with one', r['koroGear']))
        ok(r['migr'] == ['hk_starter', 'knife0'], r['migr'])
        b = r['bonus']
        ok(b['th'] == 25 and b['sp'] == 3 and b['crit'] == 14 and b['critX'] == 18 and b['light'] == 20 and b['a0'] == 84 and b['a2'] == round(84 * 1.12) and abs(b['crit2'] - 14 * 1.3) < 1e-6 and b['starterNoRefine'] is None, b)
        ok(r['police'] == [['hk_harbor', 'Haechan', True]], ('the Police Box sells Harbor Watch, for Haechan only', r['police']))
        ok(r['mayoido'] and r['chest'] and r['boss'] == 'hk_disc', 'Mayoido, locked chests, the Chariot')
        ok(r['gift5'] == 0 and r['gift7'] == ['hk_mixdown'] and r['gift7b'] == 0, ('Mixdown arrives once, at rank 7', r))
        ok(r['shuffle']['without'] == [] and set(r['shuffle']['withH']) <= {'hk_harbor', 'hk_widow', 'hk_disc', 'hk_sunlight'} and r['shuffle']['withH'], r['shuffle'])
        ok(r['tag'] == ' (one of Haechan’s knives!)' and 'Crit +14%' in r['line'], (r['tag'], r['line']))
        # The menu: the gift arrived with rank 7; Haechan's weapon list has his knives with their art; Koromaru's doesn't.
        p.eval("(()=>{const G=FemcGame;G.progress('haechan').rank=7;G.save();})()")
        menu(p, 'equip'); click(p, '[data-eq="haechan"]')
        ok(p.eval(B + ".gear.owned.hk_mixdown") == 1, 'the rank-7 gift synced into the battle save')
        ok(p.eval("document.querySelector('[data-slot=weapon] img.g-eq-art').getAttribute('src').includes('weapons/haechan-starter.webp')"), 'his starter is equipped, with art')
        click(p, '[data-slot="weapon"]')
        ok(p.eval("!!document.querySelector('[data-pick=hk_mixdown] img.g-eq-art')"), 'Mixdown in his list, with art')
        click(p, '[data-pick="hk_mixdown"]')
        ok(p.eval("document.querySelector('[data-slot=weapon] img.g-eq-art').getAttribute('src').includes('weapons/haechan-mixdown.webp')") and p.eval("document.querySelector('[data-slot=weapon] .look').textContent.includes('waveform')"), 'equipped art and look')
        click(p, '[data-refine="hk_mixdown"]')
        ok(p.eval(B + ".wref.hk_mixdown") == 1 and p.eval("FemcBattleEngine.buildUnit('haechan',FemcGame.S.battleSave).atk") == round(80 * 1.06), 'refine')
        for w, h, name in [(1000, 486, '1000x486'), (375, 812, '375x812')]:
            view(p, w, h); menu(p, 'equip'); click(p, '[data-eq="haechan"]'); click(p, '[data-slot="weapon"]'); no_scroll(p, 'knives ' + name); shot(p, 'knives-equip-' + name)
        view(p, 1280, 850)
        click(p, '[data-eq="koromaru"]'); click(p, '[data-slot="weapon"]')
        ok(not p.eval("[...document.querySelectorAll('[data-pick]')].some(b=>/^hk_/.test(b.dataset.pick))"), 'none in Koromaru\'s list')
        p.eval("FemcMenu.close()")
        # A real Tartarus fight: Mixdown's Theurgy charge and SP regen are on Haechan's unit; Koromaru keeps his own knife.
        night(p, ['haechan', 'koromaru'])
        p.eval("window.__btGroup=['pesce'];window.__want='shadow';document.querySelector('[data-go=run],[data-go=cont]').click()")
        drive(p, "FemcBattle.screen()==='battle' && !!FemcBattle.B", 90)
        u = p.eval("(()=>{const P=FemcBattle.B.party(),h=P.find(x=>x.mid==='haechan'),k=P.find(x=>x.mid==='koromaru');return {th:h.thMult,sp:h.spRegen,atk:h.atk,katk:k.atk}})()")
        ok(abs(u['th'] - (1 + 25 * 1.15 / 100)) < 1e-6 and u['sp'] >= 3 * 1.15 - 1e-6 and u['atk'] == round(80 * 1.06), u)
        p.eval("window.__hoStay=false;FemcBattle.hoFinish('retreat')"); p.top(); p.wait("!document.querySelector('.g-dh')", 30)
        results['knives'] = {'gear': [x[0] for x in r['gear']], 'police': r['police'], 'gift': r['gift7'], 'shuffle': r['shuffle'], 'unit': u}
        errs = p.console(); ok(not errs, errs)
        print("Haechan's knives: data, art, owner-only lists, sources, menu, refine, real fight OK", flush=True)

    # ── Jungwon's rapiers, Jihoon's gloves, Minji's bows (batch 22): the knives' checks for each, a real fight, an All-Out ──
    if want('searchers'):
        SETS = {
            'jungwon': {'pre': 'jw_', 'wtype': 'rapier', 'other': 'mitsuru', 'plain': 'rapier0', 'gift': ('jw_maeumi', 6), 'police': 'jw_mandate', 'mayoido': 'jw_hyphen', 'chest': 'jw_jade', 'boss': ('hierophant', 'jw_tortoise'), 'art': 'jungwon-starter', 'noun': 'rapiers'},
            'jihoon': {'pre': 'jh_', 'wtype': 'gloves', 'other': 'akihiko', 'plain': 'gloves0', 'gift': ('jh_bestfriend', 6), 'police': 'jh_varsity', 'mayoido': 'jh_goblin', 'chest': 'jh_capitalized', 'boss': ('fortune', 'jh_treasure'), 'art': 'jihoon-starter', 'noun': 'pairs of gloves'},
            'minji': {'pre': 'mj_', 'wtype': 'bow', 'other': 'yukari', 'plain': 'bow0', 'gift': ('mj_muse', 5), 'police': 'mj_finalcut', 'mayoido': 'mj_theia', 'chest': 'mj_hitscan', 'boss': ('empress', 'mj_bunny'), 'art': 'minji-starter', 'noun': 'bows'},
        }
        setup(p, day='12/12', ranks={'jungwon': 4, 'jihoon': 4, 'minji': 4}, mats={'tarot_dust': 400, 'velvet_thread': 12, 'arcana_fragment': 2}, party=['jungwon', 'jihoon', 'minji'])
        r = p.eval(r"""(async()=>{
          const B=FemcBuild,D=FEMC_BATTLE_DATA,BS=FemcBattleSave,E=FemcBattleEngine,SETS=%s,out={};
          FemcGame.S.tartarus.bosses=['priestess','hierophant'];
          const police=FemcGame.shopStock('police');
          for(const [mid,c] of Object.entries(SETS)){
            const o=out[mid]={}, ids=Object.keys(D.gear).filter(k=>k.startsWith(c.pre));
            o.ids=ids; o.gear=ids.map(id=>{const g=D.gear[id];return [id,g.wtype===c.wtype,g.owner===mid,!!g.art,!!g.look,!!g.desc,g.tier]});
            o.art=await Promise.all(ids.map(id=>new Promise(res=>{const i=new Image();i.onload=()=>res([id,i.naturalWidth,i.naturalHeight,!!D.gear[id].artWide]);i.onerror=()=>res([id,0,0]);i.src=D.gear[id].art;})));
            o.start=D.startGear[mid].weapon; o.otherStart=D.startGear[c.other].weapon;
            o.fits=[B.fits(D.gear[c.chest],mid),B.fits(D.gear[c.chest],c.other)];
            const t=BS.normalize(BS.fresh()); ids.forEach(id=>{t.gear.owned[id]=1});
            o.candOther=BS.candidates(t,c.other,'weapon').filter(x=>x.startsWith(c.pre));
            o.cand=BS.candidates(t,mid,'weapon');
            t.gear.eq[c.other]={weapon:c.mayoido,armor:'armor0',acc:null}; o.otherGear=E.gearOf(t,c.other).wid;
            const old=BS.fromRaw({v:4,lvl:30,gear:{owned:{},eq:{[mid]:{weapon:c.plain,armor:'armor1',acc:null},[c.other]:{weapon:c.plain,armor:'armor0',acc:null}}}});
            o.migr=[old.gear.eq[mid].weapon,old.gear.eq[c.other].weapon];
            t.mats={tarot_dust:500,velvet_thread:20,arcana_fragment:2}; t.yen=99999; const a0=B.weaponAtk(t,c.chest); B.refineWeapon(t,c.chest);
            o.refine=[a0,B.weaponAtk(t,c.chest),B.wrefCost(t,o.start)];
            o.police=police.filter(x=>x.id.startsWith(c.pre)).map(x=>[x.id,x.who,!!x.art,x.wide]);
            o.mayoido=D.shops.mayoido.stock.includes(c.mayoido); o.chest=D.map.chest.lockedRare.includes(c.chest); o.boss=B.bossWeapons(c.boss[0]);
            const g=BS.normalize(BS.fresh()); o.giftBefore=B.syncBonds(g,{[mid]:c.gift[1]-1}).length; o.gift=B.syncBonds(g,{[mid]:c.gift[1]}).map(x=>x.gear); o.giftAgain=B.syncBonds(g,{[mid]:10}).length;
            const draws=party=>{const s=BS.normalize(BS.fresh()),R=E.rng(5),got=new Set();for(let i=0;i<80;i++){const res=B.applyShuffle(s,{kind:'minor',suit:'swords',rank:9},{R,tier:6,party});if(res.fx.gear)got.add(res.fx.gear);}return [...got]};
            o.shufWithout=draws(['solar','akihiko','yukari']).filter(x=>x.startsWith(c.pre)); o.shufWith=draws(['solar',mid]).filter(x=>x.startsWith(c.pre)).sort();
            o.tag=B.namedTag(c.chest); o.line=BS.gearLine(c.chest);
          }
          // Bonuses the user asked for: Black Tortoise Ice, Hyphen Dark/crit, Treasure luck + yen, Hitscan crit + accuracy, Theia Light.
          const t=BS.normalize(BS.fresh());
          out.bon={tortoise:B.unitBonus(t,'jungwon','jw_tortoise').el.ice, hyphen:[B.unitBonus(t,'jungwon','jw_hyphen').el.dark,B.unitBonus(t,'jungwon','jw_hyphen').crit],
            treasure:[D.gear.jh_treasure.stats.lu,D.gear.jh_treasure.bonus.yen], hitscan:[B.unitBonus(t,'minji','mj_hitscan').crit,D.gear.mj_hitscan.acc], theia:B.unitBonus(t,'minji','mj_theia').el.light};
          t.gear.owned.jh_treasure=1; t.gear.eq.jihoon={weapon:'jh_treasure',armor:'armor0',acc:null};
          out.yen=[B.yenBonus(t,['solar','jihoon']),B.yenBonus(t,['solar','akihiko'])];
          // The one-time backfill: a save that already cleared the Empress, Hierophant and Fortune gets their owner weapons once.
          const bf=BS.fromRaw({v:4,lvl:40,ops:{cleared:['priestess','empress','hierophant','lovers','chariot','hermit','fortune']},gear:{owned:{nag_prism:1},eq:{}}});
          out.backfill=['mj_bunny','jw_tortoise','jh_treasure','hk_disc','nag_prism','nag_ice'].map(k=>bf.gear.owned[k]||0); out.flag=bf.ownBoss;
          delete bf.gear.owned.mj_bunny; const again=BS.normalize(bf); out.again=again.gear.owned.mj_bunny||0;
          return out;})()""" % json.dumps(SETS))
        for mid, c in SETS.items():
            o = r[mid]
            ok(len(o['ids']) == 6 and all(x[1] and x[2] and x[3] and x[4] and (x[5] or x[0].endswith('starter')) for x in o['gear']), (mid, o['gear']))  # a starter's accuracy shows through gearLine, not desc
            ok(all(w > 200 and h > 150 for _, w, h, *_ in o['art']), (mid, 'art decodes', o['art']))
            ok(all((w > h) == (mid == 'jihoon') and wide == (mid == 'jihoon') for _, w, h, wide in o['art']), (mid, 'tall art, gloves wide', o['art']))
            ok(o['start'] == c['pre'] + 'starter' and o['otherStart'] == c['plain'], (mid, 'own starter; S.E.E.S. keep the plain one', o['start'], o['otherStart']))
            ok(o['fits'] == [True, False] and o['candOther'] == [] and all(x.startswith(c['pre']) or not x.startswith(('jw_', 'jh_', 'mj_', 'hk_')) for x in o['cand']), (mid, o['fits'], o['candOther'], o['cand']))
            ok(o['otherGear'] == c['plain'], (mid, 'a hand-edited save cannot arm', c['other']))
            ok(o['migr'] == [c['pre'] + 'starter', c['plain']], (mid, 'starter swap', o['migr']))
            ok(o['refine'][1] == round(o['refine'][0] * 1.06) and o['refine'][2] is None, (mid, 'refine', o['refine']))
            ok(o['police'] == [[c['police'], mid.capitalize(), True, mid == 'jihoon']], (mid, 'Police Box, for them only', o['police']))
            ok(o['mayoido'] and o['chest'] and c['boss'][1] in o['boss'], (mid, 'Mayoido, locked chests, boss'))
            ok(o['giftBefore'] == 0 and o['gift'] == [c['gift'][0]] and o['giftAgain'] == 0, (mid, 'rank gift once', o))
            ok(o['shufWithout'] == [] and o['shufWith'] and not set(o['shufWith']) & {c['pre'] + 'starter', c['gift'][0]}, (mid, 'Shuffle Swords only with them in the party', o))
            ok(o['tag'] == ' (one of %s’s %s!)' % (mid.capitalize(), c['noun']) and o['line'], (mid, o['tag'], o['line']))
        b = r['bon']
        ok(b['tortoise'] == 20 and b['hyphen'] == [20, 10] and b['treasure'] == [5, 15] and b['hitscan'] == [14, 10] and b['theia'] == 20, b)
        ok(r['yen'] == [15, 0], ('Treasure yen only while Jihoon fights', r['yen']))
        ok(r['backfill'] == [1, 1, 1, 1, 1, 0] and r['flag'] == 1 and r['again'] == 0, ('one-time boss backfill', r['backfill'], r['again']))
        # The menu: gifts arrive with the ranks; each list shows their own with art (gloves in the wide box).
        p.eval("(()=>{const G=FemcGame;G.progress('jungwon').rank=6;G.progress('jihoon').rank=6;G.progress('minji').rank=5;G.save();})()")
        menu(p, 'equip')
        for mid, c in SETS.items():
            click(p, '[data-eq="%s"]' % mid)
            ok(p.eval(B + ".gear.owned.%s" % c['gift'][0]) == 1, (mid, 'gift synced'))
            ok(p.eval("document.querySelector('[data-slot=weapon] img.g-eq-art').getAttribute('src').includes('weapons/%s.webp')" % c['art']), (mid, 'starter equipped with art'))
            click(p, '[data-slot="weapon"]')
            ok(p.eval("!!document.querySelector('[data-pick=%s] img.g-eq-art')" % c['gift'][0]), (mid, 'gift in the list with art'))
            click(p, '[data-pick="%s"]' % c['gift'][0])
            ok(p.eval("document.querySelector('[data-slot=weapon] img.g-eq-art').classList.contains('wide')") == (mid == 'jihoon'), (mid, 'wide box only for gloves'))
            click(p, '[data-refine="%s"]' % c['gift'][0])
            ok(p.eval(B + ".wref.%s" % c['gift'][0]) == 1, (mid, 'refine through the menu'))
        click(p, '[data-eq="akihiko"]'); click(p, '[data-slot="weapon"]')
        ok(not p.eval("[...document.querySelectorAll('[data-pick]')].some(b=>/^jh_/.test(b.dataset.pick))"), 'none of Jihoon\'s gloves in Akihiko\'s list')
        for w, h, name in [(1000, 486, '1000x486'), (375, 812, '375x812')]:
            view(p, w, h)
            for mid in SETS:
                menu(p, 'equip'); click(p, '[data-eq="%s"]' % mid); click(p, '[data-slot="weapon"]'); no_scroll(p, mid + ' weapons ' + name); shot(p, 'weapons-%s-%s' % (mid, name))
        view(p, 1280, 850)
        p.eval("FemcMenu.close()")
        # A real Tartarus fight: the gifts' bonuses are on the units; then Minji takes an All-Out and her finish card shows.
        night(p, ['jungwon', 'jihoon', 'minji'])
        p.eval("window.__btGroup=['pesce','pesce'];window.__want='shadow';document.querySelector('[data-go=run],[data-go=cont]').click()")
        drive(p, "FemcBattle.screen()==='battle' && !!FemcBattle.B", 90)
        u = p.eval("(()=>{const P=FemcBattle.B.party(),f=m=>P.find(x=>x.mid===m);return {jw:[f('jungwon').atk,f('jungwon').healMult],jh:[f('jihoon').atk,f('jihoon').def],mj:[f('minji').atk,f('minji').spRegen,f('minji').acc]}})()")
        ok(u['jw'][0] == round(80 * 1.06) and u['jh'][0] == round(80 * 1.06) and u['mj'][0] == round(80 * 1.06) and u['mj'][1] >= 3 * 1.15 - 1e-6, u)
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=999999});window.__btFreezeAt='allout-finish'")
        # On Minji's turn: every foe Down, and her hit counts as a One More, so the All-Out is hers.
        t0 = time.time()
        while not p.eval("FemcBattle.frozen"):
            if time.time() - t0 > 120: raise TimeoutError('no All-Out finish')
            p.eval(r"""(()=>{const F=FemcBattle,B=F.B,c=F.ctl;if(!B||!c)return;
              if(c.kind==='allout'){c.pickValue('1');return}
              if(c.kind==='menu'&&B.S.cur&&B.S.cur.mid==='minji'&&!window.__primed){B.foes().forEach(f=>{f.down=true});B.S.forceOneMore=true;window.__primed=true}
              if(c.kind==='menu'&&B.S.cur&&B.S.cur.mid!=='minji'){const v=c.items.map(i=>i.v);c.pickValue(v.includes('guard')?'guard':v[0]);return}
              if(c.kind==='menu'){const v=c.items.map(i=>i.v);c.pickValue(v.includes('attack')?'attack':v[0]);return}
              if(c.kind==='buttons'){const b=document.querySelector('.bt-btn.pink:not(:disabled)')||document.querySelector('.bt-btn:not(:disabled)');b&&b.click()}})()""")
            time.sleep(0.05)
        p.eval("new Promise(r=>setTimeout(r,500))")
        fin = p.eval("(()=>{const i=document.querySelector('.bt-finish.card img');return i?{src:i.getAttribute('src'),w:i.naturalWidth,alt:i.alt}:null})()")
        ok(fin and 'art/finish/minji.webp' in fin['src'] and fin['w'] == 1600 and fin['alt'].startswith('Minji'), ('Minji\'s finish card in a real All-Out', fin))
        shot(p, 'finish-minji-allout')
        p.eval("window.__btFreezeAt=null;FemcBattle.unfreeze()")
        p.eval("window.__hoStay=false;FemcBattle.hoFinish('retreat')"); p.top(); p.wait("!document.querySelector('.g-dh')", 30)
        jh = p.eval("new Promise(r=>{const i=new Image();i.onload=()=>r(i.naturalWidth);i.onerror=()=>r(0);i.src='assets/femc/battle/art/finish/jihoon.webp'})")
        ok(jh == 1600, 'Jihoon\'s finish card decodes')
        results['searchers'] = {m: {'police': r[m]['police'][0][0], 'gift': r[m]['gift'][0], 'boss': SETS[m]['boss'], 'shuffle': r[m]['shufWith']} for m in SETS}
        results['searchers']['finish'] = fin['src']
        errs = p.console(); ok(not errs, errs)
        print("Searchers' weapons: data, art, owner-only lists, sources, gifts, backfill, menu, refine, real fight, Minji's All-Out finish card OK", flush=True)

    # ── Practice mode still works (its own save; Shuffle Time without the card menu's outcomes) ──
    if want('practice'):
        p.goto(URL)
        p.eval("localStorage.removeItem('kg-femc-battle-proto')")
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/femc-battle.html?practice=1&speed=10&seed=4'})
        p.wait("!!window.FemcBattle && FemcBattle.screen()==='hub'", 60)
        p.eval("window.__btShuffle=true;window.__btGroup=['maya'];document.querySelector('[data-go=run]').click()")
        drive(p, "FemcBattle.screen()==='shuffle' && FemcBattle.ctl?.kind==='shuffle'", 120)
        hand = p.eval("FemcBattle.ctl.items.map(c=>c.out||c.suit)")
        ok('card' not in hand and 'skillcard' not in hand, hand)
        p.eval("FemcBattle.ctl.pick()")
        drive(p, "FemcBattle.screen()==='map'", 60)
        ok(p.eval("JSON.parse(localStorage.getItem('kg-femc-battle-proto')).shuffles") == 1, 'practice save')
        results['practice'] = {'shuffle': hand}
        errs = p.console(); ok(not errs, errs)
        print('Practice mode: hub, fight, Shuffle Time OK', flush=True)

    # ── Save migration: an old battle save and an old life-sim save load with nothing lost ──
    if want('migrate'):
        setup(p, evening=False)
        m = p.eval(r"""(()=>{const G=FemcGame,S=G.S;
          // A pre-building battle save (no cards, refines, boosts or bonds) with real progress.
          S.battleSave={v:4,lvl:33,exp:120,pts:5,nodes:['sun1','bell1'],treeV:2,forms:['haenim-sunna'],form:'haenim-sunna',ops:{cleared:['priestess']},party:['yukari'],
            mem:{yukari:{lvl:32,exp:7}},gear:{owned:{naginata3:1,power_ring:1},eq:{solar:{weapon:'naginata3',armor:'armor2',acc:'power_ring'}}},mats:{shadow_ash:4},items:{medicine:3}};
          delete S.perks; G.save();
          const raw=JSON.parse(localStorage.getItem(G.KEY)); delete raw.perks;
          localStorage.setItem(G.KEY, JSON.stringify(raw)); return true;})()""")
        p.goto(URL)
        r = p.eval(r"""(()=>{const G=FemcGame,b=G.ensureBattleSave();
          return {lvl:b.lvl,exp:b.exp,pts:b.pts,nodes:b.nodes,forms:b.forms,eq:b.gear.eq.solar,mats:b.mats,mem:b.mem.yukari,cards:b.cards,wref:b.wref,bonds:b.bonds,perks:G.S.perks,
            unit:FemcBattleEngine.buildUnit('solar',b).atk}})()""")
        ok(r['lvl'] == 33 and r['exp'] == 120 and r['pts'] == 5 and r['nodes'] == ['sun1', 'bell1'] and r['forms'] == ['haenim-sunna'] and r['mem'] == {'lvl': 32, 'exp': 7}, r)
        ok(r['eq'] == {'weapon': 'naginata3', 'armor': 'armor2', 'acc': 'power_ring'} and r['mats'] == {'shadow_ash': 4} and r['unit'] == 78, r)
        ok(r['cards'] == {'list': [], 'eq': {}, 'uid': 0} and r['wref'] == {} and r['bonds'] == {} and r['perks'] == {'week': {}, 'pitchDay': -1}, r)
        # A hand-edited / corrupt build section is cleaned, the rest kept.
        c = p.eval(r"""(()=>{const s=FemcBattleSave.fromRaw({v:4,lvl:20,cards:{list:[{u:3,set:'bell',slot:'crown',r:4,main:'hp',subs:[['st',1],['nope',2]],lvl:2},{u:4,set:'nope',slot:'x',r:9,main:'hp'}],eq:{solar:{crown:3,heart:99},ghost:{crown:3}},uid:1},wref:{nag_ice:9,bogus:2},pboost:{solar:{st:2,zz:1}},bonds:{kiriko:16,x:-1}});
          return {n:s.cards.list.length,subs:s.cards.list[0].subs,eq:s.cards.eq,uid:s.cards.uid,wref:s.wref,pboost:s.pboost,bonds:s.bonds}})()""")
        ok(c['n'] == 1 and c['subs'] == [['st', 1]] and c['eq'] == {'solar': {'crown': 3}} and c['uid'] == 3 and c['wref'] == {'nag_ice': 5} and c['pboost'] == {'solar': {'st': 2}} and c['bonds'] == {'kiriko': 15}, c)
        results['migration'] = {'old battle save': 'kept', 'corrupt build fields': 'cleaned'}
        errs = p.console(); ok(not errs, errs)
        print('Migration: old saves load with nothing lost; bad build fields cleaned OK', flush=True)

    # ── Screenshots of the new screens at three sizes ──
    if want('shots'):
        sizes = [(1000, 486, '1000x486'), (375, 812, '375x812'), (1440, 900, '1440x900')]
        p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'no-preference'}]})
        setup(p, ranks={'kiriko': 10, 'kuromi': 7, 'mark': 4, 'fuuka': 8, 'akihiko': 6, 'minji': 5}, mats={'tarot_dust': 300, 'velvet_thread': 8, 'arcana_fragment': 1})
        p.eval(r"""(()=>{const b=FemcGame.S.battleSave,B=FemcBuild,R=FemcBattleEngine.rng(21);
          ['bell','bell','jade','jade','moon','needle'].forEach((set,i)=>{const c=B.rollCard(R,{set,slot:B.SLOTS[i].id,r:3+i%3});B.addCard(b,c);B.equipCard(b,'solar',c.u);});
          for(let i=0;i<10;i++) B.addCard(b,B.rollCard(R,{tier:5}));
          b.gear.owned.nag_moon=1; b.gear.eq.solar={weapon:'nag_moon',armor:'armor3',acc:null}; FemcGame.saveQuiet();})()""")
        for w, h, name in sizes:
            view(p, w, h)
            menu(p, 'cards'); click(p, '.g-cbox-card'); no_scroll(p, 'cards ' + name); shot(p, 'cards-' + name)
            menu(p, 'equip'); click(p, '[data-slot="weapon"]'); no_scroll(p, 'equip ' + name); shot(p, 'equip-' + name)
            menu(p, 'bonds'); no_scroll(p, 'bonds ' + name); shot(p, 'bonds-' + name)
            menu(p, 'links'); click(p, '[data-link="kiriko"]'); no_scroll(p, 'links ' + name); shot(p, 'links-' + name)
        p.eval("FemcMenu.close()")
        # Shuffle Time and a perk cut-in, frozen for the camera at each size.
        view(p, 1280, 850)
        night(p, ['akihiko', 'yukari', 'junpei'])
        p.eval("window.__btGroup=['pesce','pesce'];window.__want='shadow';document.querySelector('[data-go=run],[data-go=cont]').click()")
        drive(p, "FemcBattle.screen()==='battle' && FemcBattle.ctl?.kind==='menu'", 90)
        p.eval("FemcBattle.B.foes().forEach(f=>{f.maxHp=f.hp=999999});window.__btFreezeAt='perk-cut'")
        drive(p, "FemcBattle.frozen", 120)
        for w, h, name in sizes:
            view(p, w, h); p.eval("new Promise(r=>setTimeout(r,200))"); shot(p, 'perkcut-' + name)
        p.eval("window.__hoStay=false;FemcBattle.hoFinish('retreat')"); p.top(); p.wait("!document.querySelector('.g-dh')", 30)
        view(p, 1280, 850)
        night(p, ['akihiko', 'yukari', 'junpei'])
        p.eval("window.__btShuffle=true;window.__btGroup=['maya'];window.__btFreezeAt='shuffle-ready';document.querySelector('[data-go=run],[data-go=cont]').click()")
        drive(p, "FemcBattle.frozen && FemcBattle.screen()==='shuffle'", 120)
        for w, h, name in sizes:
            view(p, w, h); p.eval("new Promise(r=>setTimeout(r,200))")
            ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), 'shuffle sideways scroll ' + name)
            ok(p.eval("(()=>{const r=document.querySelector('.bt-sh-hand').getBoundingClientRect();return r.left>=-1&&r.right<=innerWidth+1&&r.bottom<=innerHeight+1})()"), 'cards fit ' + name)
            shot(p, 'shuffle-' + name)
        p.eval("window.__hoStay=false;FemcBattle.hoFinish('retreat')"); p.top(); p.wait("!document.querySelector('.g-dh')", 30)
        results['screenshots'] = str(SHOTS)
        errs = p.console(); ok(not errs, errs)
        print('Screenshots in', SHOTS, flush=True)

    errs = p.console(); ok(not errs, errs)
    print(json.dumps({'ok': True, 'sections': list(results), 'results': results, 'console errors': 0}, indent=1))
except Exception:
    print('Browser errors:', p.console(), flush=True)
    raise
finally:
    p.close()
