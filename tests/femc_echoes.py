"""Echoes (2026-10-27): Solar's collectible second Persona slot, played for real in headless Chrome (femc-game.html, isolated
profile, localhost; no player saves).

Run: python3 tests/femc_echoes.py [--only rules,fight,fusion,compendium,rewards,milestones,drops,migration,shots] [--screenshots DIR]

Covers: the roster (48 in four myth sets plus the secret one, arcana, the balance audit, the fusion chart), equipping through the
Personas tab and the Echo changing Solar's skills, passives and resists/weaknesses in a real fight (an Echo skill used through
the battle menus, its EXP after the win), fusion through the real Velvet Room UI (the chart hints, the preview, inheritance
picks, a link's arcana bonus EXP, the result registered), the Compendium (pages, register a stronger copy, summon for yen,
locked tiles), the +1 Velvet Plume per Echo through Elizabeth's claim button, milestones (an arcana, a myth set, everything:
plumes, cards, looks, Samjogo), drops (Shuffle Time's Echo card in a real Tartarus night, Tartarus loot), save migration
(old saves start empty, the starter after the first full moon, straight away when already past it) and zero console errors;
screenshots of the Personas tab, fusion and the Compendium at 1280x850 and 375x812."""
import argparse, base64, json, pathlib, time
from femc_browser import Page

URL = 'femc-game.html?speed=10&seed=7'
ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/femc-echoes-shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
results = {}


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'8/3'); S.slot=cfg.slot||'after';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=cfg.yen||90000; S.condition='good';
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]}; S.lateNights={seen:[],lastDay:999};
  for (const l of Object.values(G.LINKS)) if (l.forced?.length) G.progress(l.id).rank=l.ranks.filter(r=>r&&r.after&&G.dayOf(r.after)<=S.day).length;
  Object.entries(cfg.ranks||{}).forEach(([id,r])=>{ if(!S.met.includes(id)) S.met.push(id); G.progress(id).rank=r; });
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
  b.lvl=cfg.lvl||30; b.pts=0; b.party=['akihiko','yukari','junpei']; b.awakened=true; b.ops.cleared=cfg.ops||[];
  D.party.forEach(m=>{ if(m.id!=='solar') b.mem[m.id]={lvl:cfg.lvl||30,exp:0}; });
  FemcBattleEngine.evolutionsDue(b,id=>FemcBattleEngine.lvlOf(b,id)).forEach(e=>{b.evo[e.mid]=true});
  S.battleSave=FemcBattleSave.normalize(b);
  (cfg.echoes||[]).forEach(e=>FemcEchoes.add(S.battleSave,e[0],{via:'gift',lvl:e[1]||null}));
  FemcEchoes.takeNews(S.battleSave);
  S.tartarus.lastParty=['solar'].concat(b.party); G.save();
  return true;
})()"""


def setup(p, **cfg):
    p.goto(URL)
    p.eval(SETUP % {'cfg': json.dumps(cfg)})


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


def menu(p, tab):
    p.eval("FemcMenu.isOpen()&&FemcMenu.close()")
    p.wait("!document.querySelector('.g-fm-ov:not(.out)')")
    p.eval('FemcMenu.open(%s)' % json.dumps(tab))
    p.wait("!!document.querySelector('.g-fm-ov:not(.out) .g-fm-body')")


def open_velvet(p):
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut('after','mall')")
    click(p, '[data-act=velvet]')
    click(p, '.g-activity-preview:not(.out) [data-confirm]')
    p.wait("!!document.querySelector('.g-vel-ov:not(.out) [data-draw=yen]')")


def no_scroll(p, name):
    ok(p.eval("(()=>{const o=[...document.querySelectorAll('.g-overlay:not(.out) .g-panel')].pop();return !o||o.scrollWidth<=o.clientWidth+1})()"), name + ': sideways scroll in the panel')


B = 'FemcGame.S.battleSave'
X = 'FemcEchoes'
STEP = r"""(()=>{const F=FemcBattle,c=F.ctl,d=document,want=window.__want||'shadow';
  if(window.__hoResult)return 'done';
  if(F.screen()==='shuffle'){ if(c&&c.kind==='shuffle'&&window.__pickShuffle!=null){ c.pickValue(window.__pickShuffle); window.__pickShuffle=null; return 'picked'; }
    if(c&&c.kind==='buttons'){ const ok=d.querySelector('[data-sh-ok]'); if(ok){ ok.click(); return 'sh-ok'; } } return 'shuffle'; }
  const tip=d.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return 'tip'}
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


p = Page()
try:
    view(p, 1280, 850)
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})

    # ── The roster, the balance audit and the chart ──
    if want('rules'):
        setup(p)
        r = p.eval(r"""(()=>{const X=FemcEchoes,D=FEMC_BATTLE_DATA,out={};
          out.n=X.ECHOES.length; out.sets={}; X.ECHOES.forEach(e=>{out.sets[e.set]=(out.sets[e.set]||0)+1});
          out.arcana=[...new Set(X.collectable().map(e=>e.arcana))].length; out.audit=X.audit();
          out.dupPersonas=X.ECHOES.filter(e=>Object.values(D.personas).some(p=>p.name.toLowerCase()===e.name.toLowerCase())).map(e=>e.id);
          out.skillsOk=X.ECHOES.every(e=>e.learn.length===3&&e.learn.every(([l,s])=>D.skills[s]));
          out.levels=[Math.min(...X.collectable().map(e=>e.lvl)),Math.max(...X.collectable().map(e=>e.lvl))];
          const A=X.ARCANA.map(a=>a.name); let sym=true,parent=false,cells=0;
          A.forEach(a=>A.forEach(b=>{const r=X.chart(a,b); if(r!==X.chart(b,a))sym=false; if(a!==b&&(r===a||r===b))parent=true; cells++;}));
          out.chart={sym,parent,cells};
          // Every pair of different Echoes either fuses into a third or says why not; a result is never a parent or the secret one.
          let pairs=0,bad=[]; X.collectable().forEach(a=>X.collectable().forEach(b=>{ if(a.id>=b.id)return; const pool=X.fuseResult(a.id,b.id); pairs++; if(pool&&pool.some(x=>x.id===a.id||x.id===b.id||x.id==='samjogo'))bad.push(a.id+'+'+b.id); }));
          out.pairs=pairs; out.badPairs=bad;
          // Every Echo can be made by fusion (so a missed drop is never lost for good).
          // (Parents can level up, so a pair can aim at any result from its lowest target, (base + base) / 2 + 1, upward.)
          out.unmade=X.collectable().filter(x=>!X.collectable().some(a=>X.collectable().some(b=>a.id!==b.id&&a.id!==x.id&&b.id!==x.id&&X.chart(a.arcana,b.arcana)===x.arcana&&Math.floor((a.lvl+b.lvl)/2)+1<=x.lvl))&&X.collectable().some(y=>y.arcana===x.arcana&&y.lvl>x.lvl)).map(x=>x.id);
          // Layering: an Echo never touches an element Haenim already has an affinity on, and never lands past a resist.
          const aff={light:'resist',dark:'weak'}; out.layer=[X.layerAff(aff,{dark:'resist',ice:'resist',elec:'weak'}),aff];
          // Searchers', S.E.E.S.'s and Haenim's Personas are never Echoes.
          out.names=X.ECHOES.map(e=>e.name);
          return out;})()""")
        ok(r['n'] == 49 and r['sets'] == {'strangers': 12, 'runners': 12, 'hoax': 12, 'p3': 12, 'secret': 1}, r['sets'])
        ok(r['arcana'] == 21, ('every arcana of the year', r['arcana']))
        ok(r['audit'] == [], ('balance audit', r['audit']))
        ok(not r['dupPersonas'], ('no Echo shares a Persona already in the game', r['dupPersonas']))
        ok(not any(n in r['names'] for n in ['Dalnim', 'Hyeonmu', 'Dokkaebi', 'Theia', 'Haenim', 'Sunna', 'Mazu', 'Nike']), 'searchers and Haenim stay theirs')
        ok(r['skillsOk'] and r['levels'][0] <= 5 and r['levels'][1] >= 50, ('three skills each, levels across the year', r['levels']))
        ok(r['chart']['sym'] and not r['chart']['parent'], ('chart symmetric, never a parent arcana', r['chart']))
        ok(not r['badPairs'], r['badPairs'])
        # The earliest few can't be fused down to (as in P3), but Shuffle Time and Tartarus deal them all year.
        early = p.eval("FemcEchoes.collectable().filter(x=>x.lvl<=13).map(x=>x.id)")
        ok(all(x in early for x in r['unmade']), ('every Echo past the first weeks can come from fusion', r['unmade']))
        ok(r['layer'][0] == ['ice', 'elec'] and r['layer'][1] == {'light': 'resist', 'dark': 'weak', 'ice': 'resist', 'elec': 'weak'}, ('layering', r['layer']))
        # Compared with her rays: no Echo skill hits harder than three quarters of High Noon.
        top = p.eval("(()=>{const X=FemcEchoes;let m=0;X.ECHOES.forEach(e=>e.learn.forEach(([,s])=>{m=Math.max(m,X.reach(s).one)}));return [m,FEMC_BATTLE_DATA.skills.high_noon.power]})()")
        ok(top[0] <= top[1] * 0.75, ('Echo skills stay under her rays', top))
        clean(p, 'rules')
        results['rules'] = f"49 Echoes (12 × 4 + secret), 21 arcana, audit clean, {r['pairs']} pairs checked, strongest one-target {top[0]} vs High Noon {top[1]}"
        print('rules OK', results['rules'], flush=True)

    # ── Equipping in the Personas tab changes skills, passives and resists in a real fight ──
    if want('fight'):
        setup(p, lvl=30, echoes=[['imugi', 16], ['gumiho', 11]])
        before = p.eval(f"(()=>{{const u=FemcBattleEngine.buildUnit('solar',{B});return {{skills:u.skills,ice:u.aff.ice||'normal',elec:u.aff.elec||'normal',sp:u.spRegen,dark:u.aff.dark}}}})()")
        menu(p, 'personas')
        ok(p.eval("!!document.querySelector('.g-ec-sec .g-ec-slot.empty')"), 'no Echo equipped yet')
        u = p.eval(f"{X}.owned({B}).find(i=>i.id==='imugi').u")
        click(p, f'.g-ec-sec [data-ec-u="{u}"]')
        p.wait("!!document.querySelector('.g-ec-sec .g-ec-slot:not(.empty)')")
        ok(p.eval(f"{X}.es({B}).on") == u, 'equipped through the Personas tab')
        txt = p.eval("document.querySelector('.g-ec-slot').textContent")
        ok('Imugi' in txt and 'Coil and Rise' in txt and 'A Thousand Years' in txt, txt)
        aff = p.eval("[...document.querySelectorAll('.g-pv-card > .g-affs .g-aff')].map(x=>x.title)")
        ok(any('Ice: resist' in a for a in aff) and any('Elec: weak' in a for a in aff), ('the Personas tab shows the layered affinities', aff))
        after = p.eval(f"(()=>{{const u=FemcBattleEngine.buildUnit('solar',{B});return {{skills:u.skills,ice:u.aff.ice,elec:u.aff.elec,sp:u.spRegen,dark:u.aff.dark,echo:u.echo}}}})()")
        ok(set(['bufu', 'sukunda', 'ec_coil_rise']) <= set(after['skills']) and 'ec_coil_rise' not in before['skills'], (before['skills'], after['skills']))
        ok(before['ice'] == 'normal' and after['ice'] == 'resist' and after['elec'] == 'weak' and after['dark'] == before['dark'] == 'weak', (before, after))
        ok(after['sp'] == before['sp'] + 2, ('A Thousand Years: +2 SP a turn', before['sp'], after['sp']))
        p.eval("FemcMenu.close()")
        # A real fight: the Echo's skill through the battle menus, its affinity in the unit, its EXP after the win.
        p.eval("FemcGame.makeHandoff('scripted',{script:'skills-test',forced:true,party:['solar','akihiko','yukari','junpei']});FemcGame.save()")
        p.battle()
        p.eval("window.__hoStay=true")
        p.wait('!!FemcBattle.B && FemcBattle.B.party().length===4', 60)
        unit = p.eval("(()=>{const s=FemcBattle.B.party()[0];return {skills:s.skills,ice:s.aff.ice,elec:s.aff.elec,sp:s.spRegen,echo:s.echo}})()")
        ok('ec_coil_rise' in unit['skills'] and unit['ice'] == 'resist' and unit['elec'] == 'weak' and unit['echo']['id'] == 'imugi', unit)
        p.eval("""(()=>{const B=FemcBattle.B;B.foes().forEach(f=>{f.maxHp=f.hp=999999;f.aff={...f.aff,ice:'normal'}});B.party().forEach(u=>{u.maxHp=u.hp=99999;u.sp=u.maxSp=999});
          window.log=[];const act=B.act;B.act=a=>{const mid=B.S.cur.mid,ev=act(a);log.push({mid,a,ev});return ev};return true})()""")
        t0 = time.time(); used = False; seen_tag = False
        while time.time() - t0 < 90 and not used:
            r = p.eval(r"""(()=>{const F=FemcBattle,B=F.B,c=F.ctl;if(!B||B.outcome())return 'over';if(c?.kind==='allout'){c.pickValue('0');return 'allout'}
              if(c?.kind!=='menu')return null;const u=B.S.cur,v=c.items.map(i=>i.v);
              if(u.mid!=='solar'){c.pickValue(v.includes('guard')?'guard':v[0]);return 'other'}
              if(v.includes('skill')&&v.includes('guard')){c.pickValue('skill');return 'root'}
              if(v.includes('ec_coil_rise')){window.__tag=!!(c.items.find(i=>i.v==='ec_coil_rise').desc||'').includes('Echo');c.pickValue('ec_coil_rise');return 'skill'}
              const f=v.find(x=>/^e\d/.test(x));if(f){c.pickValue(f);return 'target'}return null})()""")
            if p.eval("log.some(x=>x.mid==='solar'&&x.a.skill==='ec_coil_rise')"): used = True
            time.sleep(0.03)
        ok(used, 'Solar used Coil and Rise through the battle menus')
        ok(p.eval('window.__tag'), 'the skill menu marks it as the Echo’s')
        hit = p.eval("log.find(x=>x.mid==='solar'&&x.a.skill==='ec_coil_rise').ev.filter(e=>e.t==='hit').map(e=>({el:e.el,amount:e.amount}))")
        ok(hit and hit[0]['el'] == 'ice' and hit[0]['amount'] > 0, hit)
        # Win, and the Echo takes the fight's EXP.
        exp0 = p.eval("JSON.stringify(FemcBattle.save.echo.list.find(i=>i.id==='imugi'))")
        p.eval("FemcBattle.B.foes().forEach(f=>{f.hp=1;f.aff={}})")
        t0 = time.time()
        while time.time() - t0 < 60 and not p.eval("!!FemcBattle.marks['echo-exp']"):
            p.eval(r"""(()=>{const F=FemcBattle,B=F.B,c=F.ctl;const d=document;const tip=d.querySelector('.bt-tip [data-ok]');if(tip){tip.click();return}
              if(c?.kind==='allout'){c.pickValue('1');return}if(c?.kind==='menu'){const v=c.items.map(i=>i.v);c.pickValue(v.includes('attack')?'attack':v.find(x=>/^e\d/.test(x))||v[0]);return}})()""")
            time.sleep(0.05)
        ok(p.eval("!!FemcBattle.marks['echo-exp']"), 'the Echo took EXP from the win')
        exp1 = p.eval("JSON.stringify(FemcBattle.save.echo.list.find(i=>i.id==='imugi'))")
        e0, e1 = json.loads(exp0), json.loads(exp1)
        ok((e1['lvl'], e1['exp']) > (e0['lvl'], e0['exp']), (e0, e1))
        p.top()
        clean(p, 'fight')
        results['fight'] = f"equipped via the Personas tab: +3 skills, Ice resist / Elec weak (Dark weakness kept), SP regen +2; Coil and Rise hit for {hit[0]['amount']}; Echo Lv {e0['lvl']}→{e1['lvl']}"
        print('fight OK', results['fight'], flush=True)

    # ── Fusion through the real Velvet Room UI: the chart hints, the preview, inheritance, the arcana bonus ──
    if want('fusion'):
        setup(p, lvl=50, echoes=[['gumiho', 20], ['haetae', 24], ['kappa', 8], ['dionysus', 6]])
        # The result of Gumiho × Haetae, and a link in its arcana at rank 6.
        plan = p.eval(f"""(()=>{{const X={X},b={B},a=X.owned(b).find(i=>i.id==='gumiho'),h=X.owned(b).find(i=>i.id==='haetae');
          const ar=X.chart('Lovers','Justice'); const link=Object.values(FemcGame.LINKS).find(l=>l.arcana===ar&&!l.secret&&!l.forced);
          return {{ar,link:link&&link.id,ua:a.u,uh:h.u}}}})()""")
        ok(plan['link'], plan)
        p.eval("(()=>{const S=FemcGame.S,id=%s;if(!S.met.includes(id))S.met.push(id);FemcGame.progress(id).rank=6;FemcGame.save();})()" % json.dumps(plan['link']))
        open_velvet(p)
        ok(p.eval("!!document.querySelector('.g-vel-ov [data-ec-fuse]') && !!document.querySelector('.g-vel-ov [data-ec-vcomp]')"), 'the Velvet Room offers fusion and the Compendium')
        click(p, '.g-vel-ov [data-ec-fuse]')
        p.wait("!!document.querySelector('.g-ec-fuse .g-ec-fzstock [data-ec-u]')")
        click(p, f'.g-ec-fuse [data-ec-u="{plan["ua"]}"]')
        hints = p.eval("[...document.querySelectorAll('.g-ec-fuse .g-ec-to')].map(x=>x.textContent).filter(Boolean)")
        ok(len(hints) == 3 and all(h.startswith('→') for h in hints), ('the chart shows what each pair would make', hints))
        click(p, f'.g-ec-fuse [data-ec-u="{plan["uh"]}"]')
        p.wait("!!document.querySelector('.g-ec-prev .g-ec-res')")
        pv = p.eval(f"(()=>{{const r=FemcEchoUI.ranksByArcana();return {X}.preview({B},{plan['ua']},{plan['uh']},{{solarLvl:{B}.lvl,ranks:r.ranks,links:r.links}})}})()")
        res = pv['result']
        need = p.eval(f"FEMC_BATTLE_DATA.progression.expToNext({res['base']})")
        ok(res['rank'] == 6 and res['bonusExp'] == round(need * 6 * 0.25), ('a rank-6 link gives the P3-style bonus', res))
        prev_txt = p.eval("document.querySelector('.g-ec-prev').textContent")
        name = p.eval(f"{X}.byId({json.dumps(res['id'])}).name")
        ok(name in prev_txt and f"+{res['bonusExp']} EXP" in prev_txt and f"rank 6" in prev_txt, prev_txt)
        ok(res['inheritN'] == 1 and len(res['inheritable']) >= 2, ('levels 20 + 24 inherit one skill', res))
        # Pick a different skill to inherit than the default.
        alt = res['inheritable'][1]
        click(p, f'.g-ec-prev [data-inh="{alt}"]')
        p.wait(f"document.querySelector('.g-ec-prev [data-inh=\"{alt}\"]').classList.contains('on')")
        ok(p.eval("document.querySelectorAll('.g-ec-prev [data-inh].on').length") == 1, 'one inheritance pick')
        cred0 = p.eval("FemcGacha.unclaimed().length")
        shot(p, 'fusion-desktop')
        click(p, '.g-ec-prev [data-fuse]:not([disabled])')
        p.wait("!!document.querySelector('.g-ec-prev .g-ec-born')")
        after = p.eval(f"(()=>{{const b={B},X={X};return {{ids:X.owned(b).map(i=>i.id),res:X.owned(b).find(i=>i.id==={json.dumps(res['id'])}),reg:!!X.es(b).reg[{json.dumps(res['id'])}],fused:X.es(b).fused}}}})()")
        ok('gumiho' not in after['ids'] and 'haetae' not in after['ids'] and after['res'] and after['reg'] and after['fused'] == 1, after)
        ok(after['res']['inh'] == [alt] and after['res']['lvl'] == res['lvl'], ('the chosen skill was inherited, the bonus applied', after['res'], res))
        ok(p.eval("FemcGacha.unclaimed().length") == cred0 + 1, 'a new Echo is a Compendium page to show Elizabeth')
        # A result above Solar's level can't be made.
        lowpv = p.eval(f"(()=>{{const b={B},X={X},a=X.owned(b).find(i=>i.id==='kappa'),c=X.owned(b).find(i=>i.id==='dionysus');return X.preview(b,a.u,c.u,{{solarLvl:3}})}})()")
        ok(not lowpv['ok'] and 'level' in lowpv['why'], lowpv)
        p.eval("document.querySelector('.g-ec-fuse [data-close]').click()")
        clean(p, 'fusion')
        results['fusion'] = f"Gumiho × Haetae → {name} (Lv {res['base']} → {res['lvl']} with +{res['bonusExp']} EXP from a rank-6 {plan['ar']} link), inherited {alt}, through the Velvet Room UI"
        print('fusion OK', results['fusion'], flush=True)

    # ── The Compendium: pages, register, re-summon ──
    if want('compendium'):
        setup(p, lvl=30, yen=50000, echoes=[['oni', 22], ['kappa', 6]])
        open_velvet(p)
        click(p, '.g-vel-ov [data-ec-vcomp]')
        p.wait("!!document.querySelector('.g-ec-comp .g-ec-grid')")
        tiles = p.eval("[...document.querySelectorAll('.g-ec-comp [data-cp]')].map(t=>[t.dataset.cp,t.classList.contains('locked'),t.innerText])")
        ok(len(tiles) == 48 and sum(1 for t in tiles if not t[1]) == 2, ('48 tiles, two registered', len(tiles)))
        ok(all('???' in t[2] for t in tiles if t[1]), 'unregistered ones stay ???')
        shot(p, 'compendium-desktop')
        click(p, '.g-ec-comp [data-cp="oni"]')
        p.wait("!!document.querySelector('.g-ec-comp .g-ec-page')")
        pg = p.eval("document.querySelector('.g-ec-page').textContent")
        ok(all(s in pg for s in ['Oni', 'Strength', 'Japanese myth', 'Kanabō', 'Iron Club', 'Setsubun']), pg)
        ok(p.eval("!!document.querySelector('.g-ec-page .ec-pic img')"), 'the page shows its art (a stand-in Shadow for now)')
        shot(p, 'compendium-page-desktop')
        # Level the held copy, register it again.
        p.eval(f"(()=>{{const i={X}.owned({B}).find(i=>i.id==='oni');i.lvl=27;FemcGame.saveQuiet();document.querySelector('[data-cf=all]').click();}})()")
        click(p, '.g-ec-comp [data-cp="oni"]')
        click(p, '.g-ec-page [data-register]:not([disabled])')
        p.wait(f"{X}.es({B}).reg.oni.lvl===27")
        # Summon: a registered Echo, for yen.
        p.eval(f"(()=>{{const b={B},X={X};X.remove(b,X.owned(b).find(i=>i.id==='oni').u);FemcGame.saveQuiet();document.querySelector('[data-cp-back]').click()}})()")
        click(p, '.g-ec-comp [data-cp="oni"]')
        cost = p.eval(f"{X}.summonCost(27)")
        ok(f"¥{cost:,}" in p.eval("document.querySelector('.g-ec-page [data-summon]').textContent"), 'the summon price is shown')
        y0 = p.eval('FemcGame.S.yen')
        click(p, '.g-ec-page [data-summon]:not([disabled])')
        p.wait(f"{X}.owned({B}).some(i=>i.id==='oni')")
        got = p.eval(f"{X}.owned({B}).find(i=>i.id==='oni')")
        ok(got['lvl'] == 27 and p.eval('FemcGame.S.yen') == y0 - cost, ('summoned at its registered level for its price', got, cost))
        # Too high for Solar: refused. From the Personas tab: view only.
        ok('level' in p.eval(f"{X}.summonWhy({B},'oni',20)"), 'needs Solar’s level')
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
        menu(p, 'personas')
        click(p, '.g-ec-sec [data-ec-comp]')
        p.wait("!!document.querySelector('.g-ec-comp .g-ec-grid')")
        click(p, '.g-ec-comp [data-cp="kappa"]')
        ok(p.eval("!document.querySelector('.g-ec-page [data-summon]')"), 'summoning is the Velvet Room’s')
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
        clean(p, 'compendium')
        results['compendium'] = f"48 tiles (??? until registered), Oni's page, registered again at Lv 27, re-summoned for ¥{cost:,}; summoning only in the Velvet Room"
        print('compendium OK', results['compendium'], flush=True)

    # ── Rewards: a plume per registered Echo through Elizabeth's claim button ──
    if want('rewards'):
        setup(p, lvl=30, echoes=[['oni'], ['kappa'], ['tengu']])
        p.eval("FemcGame.S.registered=['akihiko'];FemcGame.save()")
        open_velvet(p)
        ok('(+4)' in p.eval("document.querySelector('.g-vel-ov [data-claim]').textContent"), 'one person and three Echoes to show her')
        pl0 = p.eval('FemcGacha.gs().plumes')
        click(p, '.g-vel-ov [data-claim]')
        ok(p.eval('FemcGacha.gs().plumes') == pl0 + 4 and set(['echo:oni', 'echo:kappa', 'echo:tengu']) <= set(p.eval('FemcGacha.gs().credited')), 'four plumes, Echoes credited')
        ok(p.eval("!document.querySelector('.g-vel-ov [data-claim]')"), 'nothing left to claim')
        # A repeat copy is not a new page.
        p.eval(f"{X}.add({B},'oni',{{via:'shuffle'}});FemcGame.saveQuiet()")
        ok(p.eval('FemcGacha.unclaimed().length') == 0, 'a repeat registers nothing new')
        p.eval("document.querySelector('.g-vel-ov [data-close]').click()")
        clean(p, 'rewards')
        results['rewards'] = '+1 Velvet Plume per new Echo through Elizabeth’s claim button (with the people pages); repeats give none'
        print('rewards OK', flush=True)

    # ── Milestones: an arcana, a myth set, everything ──
    if want('milestones'):
        setup(p, lvl=55)
        r = p.eval(r"""(async()=>{const X=FemcEchoes,G=FemcGame,b=G.S.battleSave,g=FemcGacha.gs();const out={};
          const tick=()=>new Promise(r=>setTimeout(r,500));
          let pl=g.plumes,cards=b.cards.list.length;
          // Strength: Bulgasari, Minotaur, Oni.
          ['bulgasari','minotaur','oni'].forEach(id=>X.add(b,id,{via:'gift'})); G.save(); await tick();
          out.arc={claimed:X.es(b).miles.includes('arc:Strength'),plumes:g.plumes-pl,cards:b.cards.list.length-cards};
          pl=g.plumes; cards=b.cards.list.length;
          // Every Persona 3 Echo: the myth set.
          X.collectable().filter(x=>x.set==='p3').forEach(x=>X.add(b,x.id,{via:'gift'})); G.save(); await tick();
          out.set={claimed:X.es(b).miles.includes('set:p3'),plumes:g.plumes-pl,cards:b.cards.list.length-cards,look:FemcCosmetics.owns('ec-tt-torii'),five:b.cards.list.some(c=>c.r===5)};
          // Everything: Samjogo.
          X.collectable().forEach(x=>X.add(b,x.id,{via:'gift'})); G.save(); await tick();
          out.all={claimed:X.es(b).miles.includes('all'),samjogo:X.isRegistered(b,'samjogo'),title:FemcCosmetics.owns('ec-tt-samjogo'),miles:X.es(b).miles.length,total:X.MILESTONES.length};
          // Paid once: saving again changes nothing.
          const p2=g.plumes; G.save(); await tick(); out.once=g.plumes===p2;
          out.toasts=document.querySelectorAll('.g-toast').length;
          return out})()""")
        ok(r['arc']['claimed'] and r['arc']['plumes'] == 3 and r['arc']['cards'] == 1, ('Strength complete: 3 plumes and a card', r['arc']))
        ok(r['set']['claimed'] and r['set']['look'] and r['set']['five'], ('Persona 3 set: plumes, a ★5 card, the Torii title', r['set']))
        ok(r['all']['claimed'] and r['all']['samjogo'] and r['all']['title'] and r['all']['miles'] == r['all']['total'], ('everything: Samjogo and its title', r['all']))
        ok(r['once'], 'milestones pay once')
        menu(p, 'wardrobe')
        ok('Torii Title' in p.eval("document.querySelector('.g-fm-body').innerText"), 'the look is in the Wardrobe')
        p.eval("FemcMenu.close()")
        clean(p, 'milestones')
        results['milestones'] = f"Strength (3 plumes + ★4 card), the Persona 3 set (5 plumes, ★5 card, Torii Title), everything (Samjogo, 10 plumes, title); {r['all']['total']} milestones, each paid once"
        print('milestones OK', results['milestones'], flush=True)

    # ── Drops: Shuffle Time's Echo card in a real Tartarus night, Tartarus loot ──
    if want('drops'):
        setup(p, lvl=30, slot='evening')
        d = p.eval(r"""(()=>{const B=FemcBuild,R=FemcBattleEngine.rng(3);let story=0,prac=0,majors=0;
          for(let i=0;i<4000;i++){ B.deal(R,{tier:4}).forEach(c=>{ if(c.kind==='major'){majors++; if(c.out==='echo')story++;} }); }
          for(let i=0;i<2000;i++){ B.deal(R,{tier:4,practice:true}).forEach(c=>{ if(c.out==='echo')prac++; }); }
          const c=FemcEchoes.shuffleCard(R,1);return {story,prac,majors,low:c.echo,lvl:FemcEchoes.byId(c.echo).lvl}})()""")
        ok(d['prac'] == 0 and 0.18 < d['story'] / d['majors'] < 0.32, ('Echo cards: about a quarter of Major Arcana, never in practice', d))
        ok(d['lvl'] <= 13, ('an early hand only holds early Echoes', d))
        p.eval("FemcGame.makeHandoff('tartarus',{party:['solar','akihiko','yukari','junpei']});FemcGame.save()")
        p.battle(); p.eval("window.__hoStay=true")
        p.wait("FemcBattle.screen()==='hub' && FemcBattle.ctl?.kind==='buttons'", 60)
        p.eval("window.__btShuffle=true;window.__btShuffleHand=[{kind:'major',id:'lovers',num:'VI',name:'Gumiho',out:'echo',echo:'gumiho',arcana:'Lovers'},{kind:'minor',suit:'cups',rank:1,num:'I',name:'I of Cups'}];window.__btGroup=['maya'];window.__want='shadow';window.__noUp=true;document.querySelector('[data-go=run],[data-go=cont]').click()")
        drive(p, "FemcBattle.screen()==='shuffle' && FemcBattle.ctl?.kind==='shuffle'", 120)
        face = p.eval("document.querySelector('.bt-sh-card[data-i=\"0\"]').textContent")
        ok('Gumiho' in face and p.eval("document.querySelector('.bt-sh-card[data-i=\"0\"] img').getAttribute('src').includes('tarot/lovers')"), ('the Echo card shows its name on its arcana', face))
        p.eval("window.__pickShuffle=0;window.__stopResults=true")
        drive(p, "FemcBattle.screen()==='results'", 60)
        ok(p.eval("!!FemcBattle.marks['shuffle-echo']") and p.eval("FemcBattle.save.echo.list.some(i=>i.id==='gumiho')"), 'the Echo joined Solar')
        ok(p.eval("FemcBattle.save.echo.reg.gumiho && FemcBattle.save.echo.reg.gumiho.lvl===11"), 'and is registered')
        # Tartarus loot: a golden Shadow's and a vault's rolls, granted and shown (story nights only).
        lt = p.eval(r"""(()=>{const TT=FemcTartarus,f=FEMC_BATTLE_DATA.floors.find(x=>x.id==='f23');const c=FemcBattle.tt(f);
          const n0=FemcBattle.save.echo.list.length; c.rand=()=>0.01; const o=TT.loot('rare',c,f); TT.grant(c,o); const html=TT.lootHtml(c,o);
          let got=0; c.rand=FemcBattleEngine.rng(5); for(let i=0;i<2000;i++){ if(TT.loot('vault',c,f).echo)got++; }
          return {echo:o.echo,n:FemcBattle.save.echo.list.length-n0,html:html.includes('Echo ·'),lvl:FemcEchoes.byId(o.echo).lvl,vault:got/2000}})()""")
        ok(lt['echo'] and lt['n'] == 1 and lt['html'] and lt['lvl'] <= 33, ('a golden Shadow’s Echo, granted and shown', lt))
        ok(0.1 < lt['vault'] < 0.2, ('vaults hold one about 15% of the time', lt['vault']))
        p.eval("window.__stopResults=false")
        p.top()
        clean(p, 'drops')
        results['drops'] = f"Echo cards ≈ {d['story'] / d['majors']:.0%} of Major Arcana (none in practice); a real Shuffle Time gave Gumiho; golden Shadows 30%, vaults ≈ {lt['vault']:.0%}"
        print('drops OK', results['drops'], flush=True)

    # ── Save migration: none at first, the starter after the first full moon (straight away for saves past it) ──
    if want('migration'):
        setup(p, lvl=12)
        ok(p.eval(f"{X}.owned({B}).length") == 0, 'a new save before the first full moon has no Echoes')
        m = p.eval(r"""(()=>{const BS=FemcBattleSave,G=FemcGame;const raw=JSON.parse(JSON.stringify(G.S.battleSave));delete raw.echo;
          const before=BS.fromRaw(Object.assign({},raw,{ops:{cleared:[]}}));
          const past=BS.fromRaw(Object.assign({},raw,{ops:{cleared:['priestess']},memories:['runners-campus','runners-energy-drink','runners-hoodie']}));
          // The first full moon cleared in a fight: the next load gives the starter (and only once).
          const won=BS.fromRaw(JSON.parse(JSON.stringify(before))); won.ops.cleared.push('priestess'); const again=BS.fromRaw(won); const twice=BS.fromRaw(again);
          return {before:before.echo.list.length,past:past.echo.list.map(i=>i.id),gifts:past.echo.gifts,again:again.echo.list.map(i=>i.id),twice:twice.echo.list.length,news:past.echo.news.map(n=>n.t)}})()""")
        ok(m['before'] == 0 and m['past'] == ['zashiki', 'hebe'] and m['gifts'] == ['starter', 'runners'] and m['again'] == ['zashiki'] and m['twice'] == 1, m)
        # A real old save (no echo field, past the first full moon) through the autosave: the toast on the next save.
        p.eval("(()=>{const S=FemcGame.S;delete S.battleSave.echo;S.battleSave.ops.cleared=['priestess'];localStorage.setItem(FemcGame.KEY,JSON.stringify(S));})()")
        p.goto(URL)
        p.eval("(()=>{const S=FemcGame.S;S.phase='play';FemcGame.ensureBattleSave();FemcGame.save();return true})()")
        p.wait(f"{X}.owned({B}).some(i=>i.id==='zashiki')", 10)
        p.wait("[...document.querySelectorAll('.g-toast')].some(t=>/Zashiki-warashi/.test(t.textContent))", 10)
        clean(p, 'migration')
        results['migration'] = 'old saves start empty; Zashiki-warashi after the first full moon (straight away when past it), once; world gifts after three memories; toast on load'
        print('migration OK', flush=True)

    # ── Screenshots: the Personas tab, fusion and the Compendium at desktop and phone size ──
    if want('shots'):
        for w, h, tag in [(1280, 850, 'desktop'), (375, 812, 'phone')]:
            view(p, w, h)
            setup(p, lvl=40, echoes=[['imugi', 16], ['gumiho', 20], ['haetae', 24], ['oni', 22], ['kaguya', 33], ['headless_rider', 21]])
            p.eval(f"{X}.equip({B},{X}.owned({B})[0].u);FemcGame.saveQuiet()")
            menu(p, 'personas')
            p.eval("document.querySelector('.g-ec-sec').scrollIntoView({block:'start'})")
            shot(p, f'personas-{tag}')
            no_scroll(p, f'personas {tag}')
            p.eval("FemcMenu.close()")
            open_velvet(p)
            click(p, '.g-vel-ov [data-ec-fuse]')
            # A pair Solar can fuse right now, so the preview shows the Fuse button.
            us = p.eval(f"(()=>{{const X={X},b={B},o=X.owned(b);for(const a of o)for(const c of o)if(a.u<c.u&&X.preview(b,a.u,c.u).ok)return [a.u,c.u];return o.slice(1,3).map(i=>i.u)}})()")
            click(p, f'.g-ec-fuse [data-ec-u="{us[0]}"]'); click(p, f'.g-ec-fuse [data-ec-u="{us[1]}"]')
            p.wait("!!document.querySelector('.g-ec-prev .g-ec-res')")
            if tag == 'phone': p.eval("document.querySelector('.g-ec-prev').scrollIntoView({block:'start'})")
            shot(p, f'fusion-{tag}')
            no_scroll(p, f'fusion {tag}')
            click(p, '.g-ec-fuse [data-ec-comp]')
            p.wait("!!document.querySelector('.g-ec-comp .g-ec-grid')")
            shot(p, f'compendium-{tag}')
            no_scroll(p, f'compendium {tag}')
            click(p, '.g-ec-comp [data-cp="kaguya"]')
            shot(p, f'compendium-page-{tag}')
            click(p, '.g-ec-comp [data-cf="rewards"]')
            shot(p, f'compendium-rewards-{tag}')
            no_scroll(p, f'rewards {tag}')
            p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")
        view(p, 1280, 850)
        clean(p, 'shots')
        results['shots'] = str(SHOTS)
        print('shots OK', SHOTS, flush=True)

    print(json.dumps(results, indent=1, ensure_ascii=False))
    print('ALL OK')
finally:
    p.close()
