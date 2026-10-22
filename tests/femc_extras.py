"""Roadmap batch D: the gacha (capsule machine and Velvet Room draws), Elizabeth's Compendium Credit, and the Persona 3:
Solstice stamps on the hub's passport. Headless Chrome, isolated profile, localhost; no player saves.

Run: python3 tests/femc_extras.py [--only capsule,velvet,credit,tickets,stamps,saves,shots] [--screenshots DIR]

Covers: a capsule turn through the real UI (Go Out → the mall → Capsule machine → Turn), the animation's beats, a ticket
turn, trading Capsule Stars; rarity odds over many turns and the pity counters (Super Rare every 10, Ultra at 60); keychains
never repeat while a new one is available and only for people Solar has met; a Velvet Room draw through the UI (three cards,
pick one), plume draws and the Compendium claim, Velvet pity; Compendium Credit (no longer stubbed, cheaper draws, listed in
Bonds); Capsule Tickets from Shuffle Time's Hierophant, Tartarus results and Velvet Plumes from fights; stamps awarded from
a save and from the battle frame's hook, the in-game toast, and the passport's Persona 3: Solstice section; achievements.js
at v=20 everywhere; saves from before the gacha (autosave, slot, backup code) loading cleanly; zero console errors."""
import argparse, base64, json, pathlib, re, subprocess, time
from femc_browser import Page, REPO

URL = 'femc-game.html?speed=10&seed=7'
ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/femc-extras-shots')
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
  S.joined=D.party.map(m=>m.id); S.yen=cfg.yen||50000; S.condition='good';
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]}; S.lateNights={seen:[],lastDay:999};
  (cfg.met||['akihiko','yukari','junpei']).forEach(id=>{ if(!S.met.includes(id)) S.met.push(id); });
  Object.entries(cfg.ranks||{}).forEach(([id,r])=>{ if(!S.met.includes(id)) S.met.push(id); G.progress(id).rank=r; });
  const b=FemcBattleSave.normalize(FemcBattleSave.fresh()); b.lvl=30; b.party=['akihiko','yukari','junpei']; b.awakened=true;
  S.battleSave=FemcBattleSave.normalize(b); S.tartarus.bosses=cfg.bosses||['magician','priestess','empress']; G.save();
  return true;
})()"""


def setup(p, **cfg):
    p.goto(URL)
    p.eval(SETUP % {'cfg': json.dumps(cfg)})


def click(p, sel, timeout=20):
    p.wait('!!document.querySelector(%s)' % json.dumps(sel), timeout)
    p.eval('document.querySelector(%s).click()' % json.dumps(sel))


def shot(p, name):
    p.eval("new Promise(r=>setTimeout(r,350))")
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def view(p, w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def motion(p, reduce):
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce' if reduce else 'no-preference'}]})


def clean(p, where):
    errs = p.console(); ok(not errs, f'{where}: {errs}')


# A seeded random for the machines (mulberry32), so a run is repeatable.
SEED = "window.__seed=s=>{let a=s>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};"


def open_act(p, act):
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut('after','mall')")
    click(p, f'[data-act={act}]')
    click(p, '.g-activity-preview:not(.out) [data-confirm]')


p = Page()
try:
    view(p, 1280, 850)
    motion(p, True)

    # ── The capsule machine, through the UI ──
    if want('capsule'):
        setup(p)
        p.eval(SEED + "FemcGacha.rng=__seed(3)")
        motion(p, False)
        open_act(p, 'capsule')
        p.wait("!!document.querySelector('.g-cap-ov:not(.out) [data-pull=yen]')")
        ok(p.eval("FemcGame.S.spent[FemcGame.S.day+'-after']") is None, 'walking up to the machine spends no time')
        y0 = p.eval('FemcGame.S.yen')
        click(p, '.g-cap-ov [data-pull=yen]')
        beats = set()
        t0 = time.time()
        while time.time() - t0 < 10 and not p.eval("!!document.querySelector('.g-cap-ov .g-ga-prize')"):
            beats.update(p.eval("[...document.querySelector('.g-cap-machine').classList]"))
            time.sleep(0.05)
        ok({'turn', 'drop', 'pop'} <= beats, f'the handle turns, the capsule drops and pops: {beats}')
        ok(p.eval("document.querySelectorAll('.g-cap-spark i').length") == 12, 'sparkles')
        g = p.eval('JSON.parse(JSON.stringify(FemcGame.S.gacha))')
        ok(p.eval('FemcGame.S.yen') == y0 - 500 and g['pulls'] == 1 and g['last'], f'a turn costs ¥500 and is recorded: {g}')
        ok(g['pity']['cap']['sr'] + g['pity']['cap']['ur'] >= 1, 'pity counters move')
        ok(p.eval("document.querySelector('.g-ga-pity').textContent.includes('within')"), 'pity is shown on the machine')
        ok(p.eval("document.querySelectorAll('.g-ga-odds li').length") == 4, 'odds shown')
        shot(p, 'capsule-desktop')
        # A ticket turn (reduced motion: straight to the prize).
        motion(p, True)
        p.eval("FemcGame.S.inventory.capsule_ticket=2;document.querySelector('.g-cap-ov [data-close]').click()")
        open_act(p, 'capsule')
        y1 = p.eval('FemcGame.S.yen')
        click(p, '.g-cap-ov [data-pull=ticket]:not([disabled])')
        p.wait("FemcGame.S.gacha.pulls===2 && !!document.querySelector('.g-cap-ov .g-ga-prize')")
        ok(p.eval('FemcGame.S.inventory.capsule_ticket') == 1 and p.eval('FemcGame.S.yen') == y1, 'a ticket turn uses a ticket, not yen')
        # Capsule Stars trade for a ticket.
        p.eval("FemcGame.S.gacha.stars=11;document.querySelector('.g-cap-ov [data-close]').click()")
        open_act(p, 'capsule')
        click(p, '.g-cap-ov [data-trade]')
        ok(p.eval('FemcGame.S.gacha.stars') == 1 and p.eval('FemcGame.S.inventory.capsule_ticket') == 2, 'ten stars → one ticket')
        # Can't turn without yen or tickets.
        p.eval("FemcGame.S.yen=100;delete FemcGame.S.inventory.capsule_ticket;document.querySelector('.g-cap-ov [data-close]').click()")
        open_act(p, 'capsule')
        ok(p.eval("document.querySelector('.g-cap-ov [data-pull=yen]').disabled && document.querySelector('.g-cap-ov [data-pull=ticket]').disabled"), 'no yen, no tickets: no turn')
        ok(p.eval("FemcGacha.pull('yen')") is None, 'the rule agrees')
        p.eval("document.querySelector('.g-cap-ov [data-close]').click()")
        # Pity: a random that only ever rolls Common gives a Super Rare on every 10th turn and an Ultra on the 60th.
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e7;G.S.gacha=GA.fresh();GA.rng=()=>0.99;const out=[];
          for(let i=0;i<60;i++){out.push(GA.pull('yen').r);} return out;})()""")
        ok([i + 1 for i, x in enumerate(r) if x == 'SR'] == [10, 20, 30, 40, 50] and r[59] == 'UR' and r.count('C') == 54, f'pity: {r}')
        # Odds over many turns (seeded): close to the printed odds.
        r = p.eval(SEED + r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e7;G.S.gacha=GA.fresh();GA.rng=__seed(99);const n={C:0,R:0,SR:0,UR:0};
          const save=G.save;G.save=()=>{};try{for(let i=0;i<3000;i++)n[GA.pull('yen').r]++;}finally{G.save=save;}return n;})()""")
        ok(1550 <= r['C'] <= 1900 and 780 <= r['R'] <= 1000 and 300 <= r['SR'] <= 480 and 30 <= r['UR'] <= 100, f'odds with pity: {r}')
        results['capsule odds (3000 turns)'] = r
        # Keychains: only people she's met, no repeat while a new one is left.
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e7;G.S.gacha=GA.fresh();GA.rng=Math.random;const got=[];
          const save=G.save;G.save=()=>{};try{for(let i=0;i<400;i++){const x=GA.pull('yen');if(x.kind==='key')got.push([x.id,!!x.dup]);}}finally{G.save=save;}
          const elig=GA.SETS.flatMap(s=>s.ids).filter(GA.keyEligible);
          const firstDup=got.findIndex(x=>x[1]);const before=got.slice(0,firstDup<0?got.length:firstDup).map(x=>x[0]);
          return {elig:elig.length,unmet:got.filter(x=>!elig.includes(x[0])).length,dupEarly:firstDup>=0&&new Set(before).size<elig.length,distinct:new Set(before).size,stars:G.S.gacha.stars,keys:Object.keys(G.S.gacha.keys).length};})()""")
        ok(r['unmet'] == 0 and not r['dupEarly'] and r['keys'] == r['elig'], f'keychains: {r}')
        clean(p, 'capsule')
        results['capsule'] = 'UI turn (yen + ticket), animation beats, star trade, pity 10/60, odds, keychains'

    # ── The Velvet Room ──
    if want('velvet'):
        setup(p, ranks={'elizabeth': 1})
        p.eval(SEED + "FemcGacha.rng=__seed(5)")
        open_act(p, 'velvet')
        p.wait("!!document.querySelector('.g-vel-ov:not(.out) [data-draw=yen]')")
        ok(p.eval("document.querySelector('.g-vel-ov [data-draw=yen]').textContent.includes('¥3,000')"), 'a draw is ¥3,000 without the perk')
        y0 = p.eval('FemcGame.S.yen')
        click(p, '.g-vel-ov [data-draw=yen]')
        p.wait("document.querySelectorAll('.g-vel-card').length===3")
        ok(p.eval('FemcGame.S.gacha.draws') == 0 and p.eval('FemcGame.S.yen') == y0, 'nothing is paid until a card is picked')
        before = p.eval("JSON.stringify([FemcGame.S.battleSave.skillCards,FemcGame.S.battleSave.mats,FemcGame.S.battleSave.cards.list.length,FemcGame.S.battleSave.gear.owned])")
        click(p, '.g-vel-card[data-i="2"]')
        p.wait("!!document.querySelector('.g-vel-ov .g-ga-prize')")
        ok(p.eval('FemcGame.S.gacha.draws') == 1 and p.eval('FemcGame.S.yen') == y0 - 3000, 'one draw, ¥3,000')
        ok(p.eval("document.querySelector('.g-vel-card[data-i=\"2\"]').classList.contains('up') && document.querySelectorAll('.g-vel-card.other').length===2"), 'the picked card turns over')
        after = p.eval("JSON.stringify([FemcGame.S.battleSave.skillCards,FemcGame.S.battleSave.mats,FemcGame.S.battleSave.cards.list.length,FemcGame.S.battleSave.gear.owned])")
        ok(before != after, 'the prize landed in the save')
        shot(p, 'velvet-desktop')
        # Compendium pages → plumes, then a plume draw.
        p.eval("FemcGame.S.registered=['akihiko','yukari','junpei'];document.querySelector('.g-vel-ov [data-close]').click()")
        open_act(p, 'velvet')
        click(p, '.g-vel-ov [data-claim]')
        ok(p.eval('FemcGame.S.gacha.plumes') == 3 and p.eval('FemcGame.S.gacha.credited.length') == 3, 'one plume per Compendium page')
        ok(p.eval("!document.querySelector('.g-vel-ov [data-claim]')"), 'nothing left to claim')
        y1 = p.eval('FemcGame.S.yen')
        click(p, '.g-vel-ov [data-draw=plumes]:not([disabled])')
        p.wait("document.querySelectorAll('.g-vel-card').length===3")
        click(p, '.g-vel-card[data-i="0"]')
        p.wait("FemcGame.S.gacha.draws===2 && !!document.querySelector('.g-vel-ov .g-ga-prize')")
        ok(p.eval('FemcGame.S.gacha.plumes') == 0 and p.eval('FemcGame.S.yen') == y1, 'a plume draw costs three plumes')
        p.eval("document.querySelector('.g-vel-ov [data-close]').click()")
        # Velvet pity: Super Rare by the 5th draw, Ultra by the 30th.
        r = p.eval(r"""(()=>{const G=FemcGame,GA=FemcGacha;G.S.yen=1e7;G.S.gacha=GA.fresh();GA.rng=()=>0.99;const out=[];
          for(let i=0;i<30;i++){out.push(GA.draw('yen').r);} return out;})()""")
        ok([i + 1 for i, x in enumerate(r) if x == 'SR'] == [5, 10, 15, 20, 25] and r[29] == 'UR', f'velvet pity: {r}')
        # The Velvet Room is closed before Elizabeth's contract.
        p.eval("FemcGame.S.day=FemcGame.dayOf('4/7')")
        ok(not p.eval("FemcGame.activityOk(FemcGame.actById('velvet'),'after').ok"), 'no blue door before 4/8')
        clean(p, 'velvet')
        results['velvet'] = 'UI draw (yen + plumes), pick-a-card, Compendium claim, pity 5/30, opens 4/8'

    # ── Compendium Credit (Elizabeth rank 2) ──
    if want('credit'):
        setup(p, ranks={'elizabeth': 2})
        st = p.eval("(()=>{const B=FemcBuild,x=B.perkById('elizabeth-2');return [x.stub,B.perkState(x,{bonds:{elizabeth:2}}),B.perkState(x,{bonds:{elizabeth:1}})]})()")
        ok(st == [None, 'own', 'rank'], f'Compendium Credit works at rank 2: {st}')
        ok(p.eval("JSON.stringify(FemcGacha.velCost())") == json.dumps({'yen': 2250, 'plumes': 2, 'credit': True}, separators=(',', ':')), p.eval("JSON.stringify(FemcGacha.velCost())"))
        open_act(p, 'velvet')
        ok(p.eval("document.querySelector('.g-vel-ov [data-draw=yen]').textContent.includes('¥2,250') && document.querySelector('.g-vel-ov [data-draw=plumes]').textContent.includes('2 Plumes') && !!document.querySelector('.g-ga-credit')"), 'the room shows the discount')
        y0 = p.eval('FemcGame.S.yen')
        click(p, '.g-vel-ov [data-draw=yen]')
        click(p, '.g-vel-card[data-i="1"]')
        p.wait("FemcGame.S.gacha.draws===1")
        ok(p.eval('FemcGame.S.yen') == y0 - 2250, 'paid ¥2,250')
        p.eval("FemcGame.S.gacha.plumes=2;document.querySelector('.g-vel-ov [data-close]').click()")
        open_act(p, 'velvet')
        click(p, '.g-vel-ov [data-draw=plumes]:not([disabled])')
        click(p, '.g-vel-card[data-i="0"]')
        p.wait("FemcGame.S.gacha.draws===2")
        ok(p.eval('FemcGame.S.gacha.plumes') == 0, 'two plumes with the credit')
        p.eval("document.querySelector('.g-vel-ov [data-close]').click();FemcMenu.open('bonds')")
        p.wait("!!document.querySelector('.g-fm-ov .g-fm-body')")
        txt = p.eval("document.querySelector('.g-fm-body').innerText")
        ok('Compendium Credit' in txt and 'Waits on' not in txt.split('Compendium Credit')[1][:160], 'Bonds lists it as working')
        p.eval("FemcMenu.close()")
        clean(p, 'credit')
        results['credit'] = 'perk on at rank 2, ¥2,250 / 2 plumes, shown in the room and in Bonds'

    # ── Tickets and plumes from the Dark Hour ──
    if want('tickets'):
        setup(p)
        r = p.eval(r"""(()=>{const B=FemcBuild,t=FemcBattleSave.normalize(FemcBattleSave.fresh());const h=B.SH.majors.find(m=>m.id==='hierophant');
          const res=B.applyShuffle(t,Object.assign({kind:'major'},h),{R:Math.random,tier:5,party:['solar']});
          const kept=FemcBattleSave.normalize(JSON.parse(JSON.stringify(t))).items.capsule_ticket;
          const practice=Array.from({length:200},()=>B.deal(Math.random,{practice:true})).flat().some(c=>c.out==='ticket');
          return {lines:res.lines,n:t.items.capsule_ticket,kept,practice,text:B.cardText(Object.assign({kind:'major'},h))};})()""")
        ok(r['n'] == 2 and r['kept'] == 2 and not r['practice'] and 'Capsule' in r['text'], f'the Hierophant gives tickets (not in practice): {r}')
        r = p.eval(r"""(()=>{const G=FemcGame;const p0=G.S.gacha.plumes;
          let h=G.makeHandoff('tartarus',{});let res=G.simulate(h,'win');res.items={capsule_ticket:1};G.finishHandoff(res);G.applyResult(h,res);G.clearHandoff();
          const afterNight={plumes:G.S.gacha.plumes-p0,tickets:G.S.inventory.capsule_ticket||0};
          h=G.makeHandoff('operation',{op:'empress'});res=G.simulate(h,'win');G.finishHandoff(res);G.applyResult(h,res);G.clearHandoff();
          return Object.assign(afterNight,{afterMoon:G.S.gacha.plumes-p0});})()""")
        ok(r == {'plumes': 1, 'tickets': 1, 'afterMoon': 4}, f'a night: +1 plume and the ticket home; a full moon: +3: {r}')
        clean(p, 'tickets')
        results['tickets'] = 'Hierophant ×2 (kept by the battle save, never in practice), ticket home from Tartarus, plumes 1/3'

    # ── Stamps ──
    if want('stamps'):
        setup(p, ranks={'yukari': 10, 'mymelody': 1}, bosses=['magician', 'priestess', 'empress', 'lovers'])  # Akihiko's MAX is 15 since the rank-15 batch
        p.eval("localStorage.removeItem('kg-achievements')")
        p.eval(r"""(()=>{const G=FemcGame,S=G.S;S.tartarus.maxFloor=120;S.gacha.pulls=3;S.gacha.draws=1;
          (G.D.places.clubs||[]).forEach(c=>{G.clubState(c.id).joined=true;});
          FemcGacha.SETS[0].ids.forEach(id=>{S.gacha.keys[id]=1;});
          localStorage.setItem('kg-femc-revamp-clears',JSON.stringify([{run:'x',ending:'low tide',at:1}]));})()""")
        p.eval("new Promise(r=>setTimeout(r,600))")  # let the save-watcher's own check run too
        p.eval("FemcStamps.check()")
        ids = p.eval("FemcStamps.earned()")
        exp = {'p3s-persona', 'p3s-moon-magician', 'p3s-moon-priestess', 'p3s-moon-empress', 'p3s-moon-lovers', 'p3s-max-link', 'p3s-mymelody',
               'p3s-clubs', 'p3s-floor-100', 'p3s-capsule', 'p3s-velvet', 'p3s-keyset', 'p3s-end-low-tide'}
        ok(set(ids) == exp, f'stamps the save has earned: {sorted(ids)} vs {sorted(exp)}')
        got = p.eval("JSON.parse(localStorage.getItem('kg-achievements'))")
        ok(exp <= set(got), 'recorded in kg-achievements')
        p.wait("document.querySelectorAll('.g-toast.k-stamp').length>=1", 5)
        ok(p.eval("!!document.querySelector('.g-toast.k-stamp svg') && !document.querySelector('.ach-toast')"), 'the in-game toast, not the site pill')
        shot(p, 'stamp-toast')
        ok(p.eval("FemcStamps.check()") == [], 'each stamp only once')
        ok('p3s-sees-max' not in ids and 'p3s-stats-all' not in ids and 'p3s-naginatas' not in ids, 'unearned ones stay locked')
        # The battle frame's hook (bond skill), and a save change picked up after a save.
        ok(p.eval("FemcStamps.award('p3s-bond')") is True and p.eval("FemcStamps.award('p3s-bond')") is False, 'award once')
        p.eval("FemcGame.S.tartarus.bosses.push('chariot');FemcGame.save()")
        p.wait("!!JSON.parse(localStorage.getItem('kg-achievements'))['p3s-moon-chariot']", 5)
        # Every page loads the same achievements.js.
        bad = []
        tracked = subprocess.run(['git', 'ls-files', '*.html', '*.js'], cwd=REPO, capture_output=True, text=True).stdout.split()
        for f in (pathlib.Path(REPO, x) for x in tracked):
            if 'tests' not in f.parts and f.is_file():
                for m in re.findall(r'achievements\.js\?v=(\d+)', f.read_text(errors='ignore')):
                    if m != '20': bad.append((str(f), m))
        ok(not bad and p.eval("FemcStamps.lib().then(()=>[...document.scripts].some(s=>/achievements\\.js\\?v=21/.test(s.src)))"), f'achievements.js?v=20 everywhere: {bad}')
        # The hub's passport shows them in their own section.
        p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/passport.html'})
        p.wait("document.readyState==='complete' && !!window.Achievements && !!document.querySelector('#solsticeGrid .secret-stamp')")
        r = p.eval(r"""(()=>({hidden:document.querySelector('#solsticeSection').hidden,count:document.querySelector('#solsticeCount').textContent,
          found:[...document.querySelectorAll('#solsticeGrid .secret-found b')].map(b=>b.textContent),
          locked:[...document.querySelectorAll('#solsticeGrid .secret-stamp:not(.secret-found) small')].map(s=>s.textContent),
          mainHasSol:[...document.querySelectorAll('#secretGrid .secret-stamp b')].some(b=>/Moon$/.test(b.textContent))}))()""")
        ok(not r['hidden'] and 'Low Tide' in r['found'] and 'April Moon' in r['found'] and 'Bonded' in r['found'] and len(r['found']) == 15 and not r['mainHasSol'], f'passport: {r}')
        ok(all('Reach an ending.' == x or 'ending' not in x.lower() for x in r['locked']), 'locked hints stay spoiler-free')
        results['passport'] = r['count']
        shot(p, 'passport')
        clean(p, 'stamps')
        results['stamps'] = f'{len(exp) + 2} awarded from save, hook and a later save; toast; passport section'

    # ── Old saves ──
    if want('saves'):
        setup(p, ranks={'elizabeth': 2})
        # A save from before the gacha: no S.gacha, a battle save without feats or tickets.
        p.eval(r"""(()=>{const G=FemcGame,S=JSON.parse(JSON.stringify(G.S));delete S.gacha;delete S.battleSave.feats;S.inventory={medicine:3};
          localStorage.setItem('kg-femc-revamp',JSON.stringify(S));
          localStorage.setItem('kg-femc-revamp-slot2',JSON.stringify({at:Date.now(),label:'old',state:S}));
          window.__oldCode=btoa(unescape(encodeURIComponent(JSON.stringify({game:'kg-femc-revamp',v:1,mv:2,at:Date.now(),state:S}))));
          localStorage.setItem('__oldCode',window.__oldCode);})()""")
        p.goto(URL)
        r = p.eval("(()=>{const S=FemcGame.S;return {g:!!S.gacha&&S.gacha.pulls===0&&S.gacha.pity.cap.sr===0,yen:S.yen,inv:S.inventory,day:S.day,links:S.links.elizabeth.rank}})()")
        ok(r['g'] and r['inv'] == {'medicine': 3} and r['links'] == 2, f'autosave from before the gacha loads: {r}')
        p.eval("document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGame.S.phase='play';FemcMenu.open('collection')")
        p.wait("!!document.querySelector('.g-fm-ov .g-col-set')")
        ok(p.eval("document.querySelectorAll('.g-keys li').length") == 30, 'Collection lists 30 keychains')
        ok(p.eval("[...document.querySelectorAll('.g-keys li small')].filter(s=>s.textContent==='???').length") > 0, 'unmet people stay ???')
        p.eval("FemcMenu.close()")
        ok(p.eval("FemcGacha.pull('yen')!==null && FemcGacha.draw('yen')!==null"), 'old save can turn and draw')
        ok(p.eval("FemcGame.loadSlot(2) && !!FemcGame.S.gacha && FemcGame.S.gacha.draws===0"), 'old slot loads')
        ok(p.eval("FemcGame.importCode(localStorage.getItem('__oldCode'))!==false && !!FemcGame.S.gacha"), 'old backup code loads')
        # Phone case: equip from the Collection and the phone wears it.
        p.eval("FemcGame.S.gacha.cases=['sakura'];FemcGame.save();FemcMenu.open('collection')")
        click(p, '[data-case-pick=sakura]')
        ok(p.eval('FemcGame.S.gacha.caseOn') == 'sakura', 'case equipped')
        p.eval("FemcMenu.close();FemcGameUI.openPhone()")
        p.wait("document.querySelector('.g-phone-ov')?.dataset.case==='sakura'")
        p.eval("document.querySelector('.g-phone-ov [data-close]').click()")
        # New Game+ keeps the collection, not the counters.
        r = p.eval("(()=>{const G=FemcGame;G.S.gacha.keys={solar:2};G.S.gacha.plumes=9;G.newGamePlus();return [G.S.gacha.keys.solar,G.S.gacha.plumes,G.S.gacha.caseOn]})()")
        ok(r == [2, 0, 'sakura'], f'NG+: {r}')
        clean(p, 'saves')
        results['saves'] = 'autosave, slot and code from before the gacha; Collection; phone case; NG+'

    # ── Screens ──
    if want('shots'):
        setup(p, met=['akihiko', 'yukari', 'junpei', 'haechan', 'ann'])
        p.eval("(()=>{const g=FemcGame.S.gacha;['solar','akihiko','yukari','haechan','ann'].forEach(id=>g.keys[id]=1);g.cases=['sakura','moonlight','gold'];g.caseOn='moonlight';FemcGame.save();})()")
        for w, h, tag in [(1000, 486, 'short'), (375, 812, 'phone'), (1440, 900, 'wide')]:
            view(p, w, h)
            open_act(p, 'capsule')
            click(p, '.g-cap-ov [data-pull=yen]')
            p.wait("!!document.querySelector('.g-cap-ov .g-ga-prize')")
            ok(p.eval('document.documentElement.scrollWidth <= innerWidth + 1'), tag + ': no sideways scroll')
            shot(p, f'capsule-{tag}')
            p.eval("document.querySelector('.g-cap-ov [data-close]').click()")
            open_act(p, 'velvet')
            click(p, '.g-vel-ov [data-draw=yen]')
            click(p, '.g-vel-card[data-i="1"]')
            p.wait("!!document.querySelector('.g-vel-ov .g-ga-prize')")
            shot(p, f'velvet-{tag}')
            p.eval("document.querySelector('.g-vel-ov [data-close]').click();FemcMenu.open('collection')")
            p.wait("!!document.querySelector('.g-fm-ov .g-col-set')")
            shot(p, f'collection-{tag}')
            p.eval("FemcMenu.close()")
        view(p, 1280, 850)
        clean(p, 'shots')
        results['shots'] = str(SHOTS)

    clean(p, 'end')
    print(json.dumps(results, indent=1))
    print('femc_extras: all checks passed')
finally:
    p.close()
