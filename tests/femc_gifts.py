"""Gifts, P5X-style (data/gifts.js + gifts-links-1..4.js; core.js giveGift, scene.js giftAsk, ui.js shops; 2026-11-02).
Headless Chrome, isolated profile, its own server; never the player's saves.

Run: python3 tests/femc_gifts.py [--only data,shop,give,tiers,overflow,max,special,contacts,saves,shots] [--screenshots DIR]

  data      40-50 gifts, each in a shop that exists, shops spread over several areas; every giftable link (not hidden,
            not story-only) has preferences; ids valid; every loved gift has its own reaction; specials only on loved gifts,
            two or more for every main link; every face used exists; some gifts loved by several people, some by one.
  shop      Go Out → a gift shop through the UI: rows with the faces of MET people who like / love it (heart on loved),
            never unmet people; buying takes the yen and puts the gift in the bag; the Items page lists it; a battle shop
            (Be Blue V) lists its gifts after its own stock.
  give      a hangout through the UI (Go Out → the person's card): "Give a gift?" appears, Not today skips (bag kept), a
            gift given leaves the bag and plays its reaction; nothing is asked with an empty bag.
  tiers     the same hangout four times: loved / liked / neutral / disliked add 4 / 2 / 1 / 0 ♪ to the scene's own.
  overflow  a loved gift that fills the meter ranks up and carries the rest (finishLink's cap one short of the next need).
  max       at MAX the reaction plays and no ♪ is added.
  special   a special plays once (lines added the first time only); a keepsake special lands on the Items page.
  contacts  the contact card files the gift under Loved / Liked / Shrugged / Not for them; others stay "?".
  saves     an old save (no gift fields, or malformed ones) loads with clean defaults; the bag survives save / load.
  shots     a shop with faces and a reaction, at 1440 x 900 and 390 x 844 (checked by eye), no sideways scroll.
"""
import argparse, base64, json, pathlib, re, sys
from femc_browser import Page, REPO

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/claude-501/-Users-katarinagrande/e8f9a9d2-09eb-475d-859c-9dc4016b9da5/scratchpad/gifts/shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
URL = 'femc-game.html?speed=10&seed=7'
MAIN = ['yukari', 'junpei', 'akihiko', 'mitsuru', 'fuuka', 'aigis', 'ken', 'koromaru', 'shinjiro', 'haechan', 'jungwon', 'jihoon', 'minji', 'hanni', 'hyein', 'mark']

SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'6/16'); S.slot='after';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=cfg.yen??50000; S.condition='good';
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]}; S.lateNights={seen:[],lastDay:999};
  (cfg.met||['akihiko','yukari','junpei']).forEach(id=>{ if(!S.met.includes(id)) S.met.push(id); });
  Object.entries(cfg.bag||{}).forEach(([k,n])=>G.addGift(k,n));
  Object.entries(cfg.ranks||{}).forEach(([id,r])=>{ const p=G.progress(id); p.rank=r; p.ready=r; p.xp=0; for(let i=0;i<r;i++) if(!p.seen.includes(i)) p.seen.push(i); });
  G.save(); return true;
})()"""

# Plays whatever scene is open: answers the gift question by plan.gift ('skip' | a gift id | null = no question expected),
# the first option of any other choice, records what finishLink got, then clears overlays (no day advance).
DRIVE = r"""(async plan=>{
  const sleep=ms=>new Promise(r=>setTimeout(r,ms)); const out={asked:0,gave:null,lines:[]};
  const G=FemcGame; if(!G.__fl){ G.__fl=G.finishLink; } window.__fin=null;
  G.finishLink=(l,k,r,g)=>{ const before={rank:G.progress(l.id).rank,xp:G.progress(l.id).xp}; const res=G.__fl(l,k,r,g); window.__fin={kind:k,r,gained:g,res,before,after:{rank:G.progress(l.id).rank,xp:G.progress(l.id).xp}}; return res; };
  const t0=Date.now();
  while(Date.now()-t0<60000){
    if(window.__fin) break;
    const gs=document.querySelector('.gs:not(.out)'); if(!gs){ await sleep(60); continue; }
    const btns=[...gs.querySelectorAll('.gs-choices button:not(:disabled)')];
    if(btns.length){
      const give=btns.find(b=>b.textContent.includes('(Give a gift.)'));
      if(give){ out.asked++; out.question=gs.querySelector('.gs-text').textContent;
        if(plan.gift && plan.gift!=='skip'){ give.click(); await sleep(80); const g=gs.querySelector(`.gs-giftlist [data-gift="${plan.gift}"]`); out.listed=[...gs.querySelectorAll('.gs-giftlist [data-gift]')].map(b=>b.dataset.gift); if(!g) return {...out,err:'gift not listed'}; g.click(); out.gave=plan.gift; await sleep(60);
          // the reaction's first lines
          for(let k=0;k<3;k++){ await sleep(120); const t=gs.querySelector('.gs-text')?.textContent; if(t) out.lines.push((gs.querySelector('.gs-name')?.textContent||'')+': '+t); gs.click(); }
        } else btns.find(b=>b.textContent.includes('(Not today.)')).click();
        continue; }
      btns[0].click(); await sleep(40); continue; }
    gs.click(); await sleep(25);
  }
  await sleep(50);
  out.fin=window.__fin;
  document.querySelectorAll('.gs, .gs-rank, .g-overlay').forEach(x=>x.remove()); document.documentElement.classList.remove('g-in-scene');
  return out;
})(%s)"""


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


p = Page()
results = []


def check(name, cond, msg=''):
    ok(cond, f'{name}: {msg}')
    results.append(name)


def setup(**cfg):
    p.goto(URL); p.eval(SETUP % {'cfg': json.dumps(cfg)})


def view(w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def shot(name):
    p.eval("new Promise(r=>setTimeout(r,500))")
    f = SHOTS / (name + '.png')
    f.write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
    return str(f)


def clean(where):
    errs = [e for e in p.console() if 'favicon' not in str(e)]
    ok(not errs, f'{where}: console errors {errs}')


def hang(link, area, gift=None, slot='after'):
    """Go Out → area → the person's card → drive the scene."""
    p.eval(f"FemcGame.S.spent={{}};document.querySelectorAll('.g-overlay,.gs,.gs-rank').forEach(x=>x.remove());FemcGameUI.goOut({json.dumps(slot)},{json.dumps(area)});true")
    p.wait(f"!!document.querySelector('[data-link={link}]')", 10)
    st = p.eval(f"FemcGame.linkStatus(FemcGame.LINKS.{link})")
    ok(st.get('ok'), f'{link} free here: {st}')
    p.eval(f"document.querySelector('[data-link={link}]').click()")
    return p.eval(DRIVE % json.dumps({'gift': gift}), timeout=90)


def openShop(area, act):
    p.eval(f"document.querySelectorAll('.g-overlay,.gs').forEach(x=>x.remove());FemcGameUI.goOut('after',{json.dumps(area)});true")
    p.wait(f"!!document.querySelector('[data-act=\"{act}\"]')", 10)
    p.eval(f"document.querySelector('[data-act=\"{act}\"]').click()")
    p.wait("!!document.querySelector('.g-activity-preview:not(.out) [data-confirm]')", 10)
    p.eval("document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click()")
    p.wait("!!document.querySelector('.g-shop-ov:not(.out) .g-shop-list')", 10)


try:
    view(1440, 900)
    p.goto(URL)
    if want('data'):
        d = p.eval(r"""(()=>{const X=FEMC_GAME_GIFTS,G=FemcGame,P=G.D.places;
          const links=Object.values(G.LINKS).filter(l=>!l.hidden&&!l.storyOnly&&l.status!=='stub'&&l.ranks?.[0]?.scene).map(l=>l.id);
          const items=Object.keys(X.items); const bad=[];
          items.forEach(k=>{const g=X.items[k]; if(!P.shops[g.shop]) bad.push('shop '+k); if(!g.name||!g.short||!g.desc||!(g.price>0)||!g.kind) bad.push('fields '+k);});
          const lovedBy={}; const faces=[];
          links.forEach(id=>{const L=X.links[id]; if(!L){bad.push('no prefs '+id);return;}
            const all=[...(L.loved||[]),...(L.liked||[]),...(L.no||[])]; all.forEach(k=>{if(!X.items[k]) bad.push(id+' unknown '+k);});
            if(new Set(all).size!==all.length) bad.push(id+' dup');
            if((L.loved||[]).length<3) bad.push(id+' loved<3');
            (L.loved||[]).forEach(k=>{ (lovedBy[k] ||= []).push(id); if(!L.say?.[k]) bad.push(id+' no say '+k); });
            ['liked','meh','no'].forEach(t=>{ if(!(L.say?.[t]||[]).length) bad.push(id+' no generic '+t); });
            Object.keys(L.special||{}).forEach(k=>{ if(!(L.loved||[]).includes(k)) bad.push(id+' special not loved '+k); });
            JSON.stringify(L.say, (k,v)=>{ if(v&&v.s&&v.f) faces.push([v.s,v.f]); return v; });
          });
          const areas=new Set(items.map(k=>P.shops[X.items[k].shop].area));
          return {n:items.length,bad,links,areas:[...areas],lovedBy,faces,specials:Object.fromEntries(Object.entries(X.links).map(([k,v])=>[k,Object.keys(v.special||{}).length]))};})()""")
        check('data.count', 40 <= d['n'] <= 50, d['n'])
        check('data.valid', not d['bad'], d['bad'][:20])
        check('data.areas', len(d['areas']) >= 6, d['areas'])
        check('data.spread', any(len(v) >= 3 for v in d['lovedBy'].values()) and any(len(v) == 1 for v in d['lovedBy'].values()), d['lovedBy'])
        missing = sorted({f'{s}/{f}' for s, f in d['faces'] if s != 'solar' and not (pathlib.Path(REPO) / 'assets/femc/portraits' / s / f'{f}.webp').exists()})
        check('data.faces', not missing, missing)
        check('data.specials', all(d['specials'].get(m, 0) >= 2 for m in MAIN), {m: d['specials'].get(m) for m in MAIN})
        check('data.nolinks', 'elizabeth' not in d['links'] and 'wren' not in d['links'], d['links'])
        print('data ok:', d['n'], 'gifts,', len(d['links']), 'links, areas', d['areas'])

    if want('shop'):
        setup(met=['akihiko', 'yukari', 'junpei'], yen=20000)
        openShop('portisland', 'g-sports')
        rows = p.eval("[...document.querySelectorAll('.g-gf-row')].map(b=>({id:b.dataset.gift,fans:[...b.querySelectorAll('[data-fan]')].map(f=>f.dataset.fan+(f.classList.contains('loved')?'*':''))}))")
        byid = {r['id']: r['fans'] for r in rows}
        exp = p.eval("Object.fromEntries(Object.keys(FEMC_GAME_GIFTS.items).filter(k=>FEMC_GAME_GIFTS.items[k].shop==='g-sports').map(k=>[k,['akihiko','yukari','junpei'].map(id=>({id,t:FemcGame.giftTier(id,k)})).filter(x=>x.t==='loved'||x.t==='liked').map(x=>x.id+(x.t==='loved'?'*':'')).sort()]))")
        check('shop.rows', set(byid) == set(exp), (byid, exp))
        check('shop.fans', all(sorted(byid[k]) == exp[k] for k in exp), (byid, exp))
        check('shop.akihiko-loves-wraps', 'akihiko*' in byid.get('handwraps', []), byid)
        allfans = {f.rstrip('*') for v in byid.values() for f in v}
        check('shop.only-met', allfans <= {'akihiko', 'yukari', 'junpei'}, allfans)
        y0 = p.eval("FemcGame.S.yen")
        p.eval("document.querySelector('.g-gf-row[data-gift=handwraps]').click()")
        check('shop.buy', p.eval("FemcGame.S.life.bag.handwraps") == 1 and p.eval("FemcGame.S.yen") == y0 - 1500, p.eval("FemcGame.S.life.bag"))
        check('shop.own', 'own 1' in p.eval("document.querySelector('.g-gf-row[data-gift=handwraps] > em').textContent"))
        # someone met later shows up; Ken (unmet) never on the Featherman figure until met
        openShop('mall', 'g-prizes')
        check('shop.unmet', not p.eval("!!document.querySelector('.g-gf-row[data-gift=featherman] [data-fan=ken]')"))
        p.eval("FemcGame.S.met.push('ken');FemcGame.save();true")
        openShop('mall', 'g-prizes')
        check('shop.met-later', p.eval("!!document.querySelector('.g-gf-row[data-gift=featherman] [data-fan=ken].loved s')"))
        openShop('mall', 'bebluev')
        check('shop.battle-shop', p.eval("!!document.querySelector('.g-shop-sub') && document.querySelectorAll('.g-gf-row').length===3 && document.querySelectorAll('.g-shop-list .g-act:not(.g-gf-row)').length>0"))
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());true")
        items = p.eval("FemcMenu ? (FemcMenu.open('items'), new Promise(r=>setTimeout(()=>r(document.querySelector('.g-gf-bag')?.textContent||''),400))) : ''")
        check('shop.items-page', 'Boxing Hand Wraps' in items, items)
        p.eval("document.querySelectorAll('.g-overlay,.g-fm-ov').forEach(x=>x.remove());true")
        clean('shop')
        print('shop ok')

    if want('give'):
        setup(met=['akihiko'], ranks={'akihiko': 2}, bag={'handwraps': 1, 'liptint': 1})
        r = hang('akihiko', 'gekkoukan', 'skip')
        check('give.asked', r['asked'] == 1 and 'Akihiko' in r.get('question', ''), r)
        check('give.skip-keeps', p.eval("FemcGame.S.life.bag.handwraps") == 1)
        r = hang('akihiko', 'gekkoukan', 'handwraps')
        check('give.listed', set(r.get('listed', [])) == {'handwraps', 'liptint'}, r)
        check('give.gone', not p.eval("FemcGame.S.life.bag.handwraps"))
        check('give.reaction', any('Akihiko' in x for x in r['lines']), r['lines'])
        setup(met=['akihiko'], ranks={'akihiko': 2})
        r = hang('akihiko', 'gekkoukan', None)
        check('give.empty-bag', r['asked'] == 0, r)
        clean('give')
        print('give ok')

    if want('tiers'):
        gains = {}
        tier = p.eval("({loved:FEMC_GAME_GIFTS.links.akihiko.loved.find(k=>!FEMC_GAME_GIFTS.links.akihiko.special?.[k]), liked:FEMC_GAME_GIFTS.links.akihiko.liked[0], no:FEMC_GAME_GIFTS.links.akihiko.no[0], meh:Object.keys(FEMC_GAME_GIFTS.items).find(k=>FemcGame.giftTier('akihiko',k)==='meh')})")
        for t, gid in [('none', None)] + list(tier.items()):
            setup(met=['akihiko'], ranks={'akihiko': 2}, bag=({gid: 1} if gid else {}))
            r = hang('akihiko', 'gekkoukan', gid)
            ok(r['fin'] and r['fin']['kind'] == 'hangout', f'tiers {t}: {r}')
            gains[t] = r['fin']['gained']
        base = gains['none']
        check('tiers.points', [gains['loved'] - base, gains['liked'] - base, gains['meh'] - base, gains['no'] - base] == [4, 2, 1, 0], gains)
        clean('tiers')
        print('tiers ok', gains)

    if want('overflow'):
        setup(met=['akihiko'], ranks={'akihiko': 2}, bag={'handwraps': 1})
        req = p.eval("FemcGame.need(FemcGame.LINKS.akihiko,2)")
        p.eval(f"FemcGame.progress('akihiko').xp={req - 1};FemcGame.save();true")
        r = hang('akihiko', 'gekkoukan', 'handwraps')
        f = r['fin']
        nxt = p.eval("FemcGame.need(FemcGame.LINKS.akihiko,3)")
        carry = max(0, min(req - 1 + f['gained'] - req, nxt - 1))
        check('overflow.up', f['after']['rank'] == 3 and f['after']['xp'] == carry, (f, req, nxt, carry))
        clean('overflow')
        print('overflow ok', f['gained'], carry)

    if want('max'):
        setup(met=['yukari'], bag={'sprayroses': 1})
        p.eval("(()=>{const l=FemcGame.LINKS.yukari,p=FemcGame.progress('yukari');p.rank=FemcGame.maxOf(l);p.xp=0;delete p.ready;FemcGame.save();return 1})()")
        home = p.eval("FemcGame.homeOf(FemcGame.LINKS.yukari)")
        has_after = p.eval("FemcGame.afterList(FemcGame.LINKS.yukari).length")
        if has_after:
            day = p.eval("(()=>{const h=FemcGame.homeOf(FemcGame.LINKS.yukari);for(let d=FemcGame.dayOf('6/15');d<FemcGame.dayOf('7/15');d++){const i=FemcGame.dayInfo(d);if((h.days||[]).includes(i.dow)&&i.type==='school')return d;}})()")
            slot = 'evening' if home.get('slot') == 'evening' else 'after'
            p.eval(f"FemcGame.S.day={day};FemcGame.S.slot='{slot}';FemcGame.save();true")
            area = p.eval("FemcGame.areaById(FemcGame.homeOf(FemcGame.LINKS.yukari).area).id")
            if area == 'dorm':
                p.eval("FemcGameUI.playLink(FemcGame.LINKS.yukari);true")
                r = p.eval(DRIVE % json.dumps({'gift': 'sprayroses'}), timeout=90)
            else:
                r = hang('yukari', area, 'sprayroses', slot)
            check('max.reaction', r['asked'] == 1 and r['gave'] == 'sprayroses' and r['lines'], r)
            check('max.nopoints', r['fin']['kind'] == 'after' and r['fin']['after']['xp'] == 0, r['fin'])
        # rule check either way
        check('max.giftPoints', p.eval("FemcGame.giftPoints(FemcGame.LINKS.yukari,'loved')") == 0)
        clean('max')
        print('max ok')

    if want('special'):
        setup(met=['shinjiro', 'akihiko'], bag={'castiron': 2, 'handwraps': 2})
        a = p.eval("FemcGame.giveGift('shinjiro','castiron')")
        b = p.eval("FemcGame.giveGift('shinjiro','castiron')")
        check('special.once', a['special'] and not b['special'] and len(a['lines']) > len(b['lines']), (a['special'], b['special']))
        keeps = p.eval("FemcGame.keepsakes()")
        check('special.keepsake', any(k['link'] == 'shinjiro' for k in keeps), keeps)
        ok(p.eval("FemcGame.S.life.specials.length") == 1, 'one special recorded')
        p.eval("FemcMenu.open('items');true")
        p.wait("!!document.querySelector('.g-gf-keeps')", 5)
        check('special.items', 'Shinjiro' in p.eval("document.querySelector('.g-gf-keeps').textContent"))
        p.eval("document.querySelectorAll('.g-overlay,.g-fm-ov').forEach(x=>x.remove());true")
        clean('special')
        print('special ok')

    if want('contacts'):
        setup(met=['akihiko'], bag={'handwraps': 1})
        no = p.eval("FEMC_GAME_GIFTS.links.akihiko.no[0]")
        p.eval(f"FemcGame.addGift('{no}',1);FemcGame.giveGift('akihiko','handwraps');FemcGame.giveGift('akihiko','{no}');true")
        p.eval("FemcGameUI.openPhone();true")
        p.wait("!!document.querySelector('[data-ph-app=people], [data-app=people], .g-ph-tabs button')", 10)
        p.eval("(()=>{const b=[...document.querySelectorAll('button')].find(b=>/Contacts/.test(b.textContent));b&&b.click();return 1})()")
        p.wait("!!document.querySelector('[data-ct=akihiko]')", 10)
        p.eval("document.querySelector('[data-ct=akihiko]').click()")
        p.wait("!!document.querySelector('.g-ph-gifts')", 5)
        rows = p.eval("[...document.querySelectorAll('.g-ph-gifts li')].map(li=>[li.querySelector('b').textContent,li.querySelector('span').textContent])")
        d = dict(rows)
        nm = p.eval(f"FEMC_GAME_GIFTS.items['{no}'].name")
        check('contacts.rows', d.get('Loved') == 'Boxing Hand Wraps' and d.get('Not for them') == nm and d.get('Liked') == '?' and d.get('Shrugged') == '?', d)
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());true")
        clean('contacts')
        print('contacts ok')

    if want('saves'):
        setup(met=['akihiko'], bag={'pudding': 2})
        p.eval("FemcGame.saveSlot(3);true")
        p.eval("(()=>{const s=JSON.parse(localStorage.getItem('kg-femc-revamp'));delete s.life.bag;delete s.life.specials;s.life.keeps='x';s.life.given=null;localStorage.setItem('kg-femc-revamp',JSON.stringify(s));return 1})()")
        p.goto(URL)
        L = p.eval("FemcGame.S.life")
        check('saves.defaults', L['bag'] == {} and L['specials'] == [] and L['keeps'] == [] and L['given'] == {}, L)
        p.eval("(()=>{const s=JSON.parse(localStorage.getItem('kg-femc-revamp'));delete s.life;localStorage.setItem('kg-femc-revamp',JSON.stringify(s));return 1})()")
        p.goto(URL)
        check('saves.nolife', p.eval("FemcGame.giftBag().length===0 && JSON.stringify(FemcGame.S.life.bag)==='{}'"))
        p.eval("(()=>{const s=JSON.parse(localStorage.getItem('kg-femc-revamp'));s.life={bag:{pudding:'2',nope:-1,zero:0}};localStorage.setItem('kg-femc-revamp',JSON.stringify(s));return 1})()")
        p.goto(URL)
        check('saves.malformed', p.eval("JSON.stringify(FemcGame.S.life.bag)") == '{"pudding":2}', p.eval("FemcGame.S.life.bag"))
        p.eval("FemcGame.loadSlot(3);true")
        check('saves.slot', p.eval("FemcGame.S.life.bag.pudding") == 2)
        clean('saves')
        print('saves ok')

    if want('shots'):
        for w, h, tag in [(1440, 900, 'desktop'), (390, 844, 'phone')]:
            view(w, h)
            setup(met=['akihiko', 'yukari', 'junpei', 'haechan', 'jungwon', 'ken', 'koromaru', 'mitsuru'], ranks={'akihiko': 2}, bag={'handwraps': 1, 'pudding': 1, 'sunflowers': 1})
            openShop('portisland', 'g-sports')
            check(f'shots.fit-shop-{tag}', p.eval("document.documentElement.scrollWidth<=innerWidth+1"))
            print(shot(f'gifts-shop-{tag}'))
            p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut('after','gekkoukan');true")
            p.wait("!!document.querySelector('[data-link=akihiko]')", 10)
            p.eval("document.querySelector('[data-link=akihiko]').click()")
            p.wait("!![...document.querySelectorAll('.gs-choices button')].find(b=>b.textContent.includes('Give a gift'))", 30)
            print(shot(f'gifts-ask-{tag}'))
            p.eval("[...document.querySelectorAll('.gs-choices button')].find(b=>b.textContent.includes('Give a gift')).click()")
            p.wait("!!document.querySelector('.gs-giftlist [data-gift]')", 5)
            print(shot(f'gifts-list-{tag}'))
            p.eval("document.querySelector('.gs-giftlist [data-gift=handwraps]').click()")
            p.eval("new Promise(r=>setTimeout(r,1500))")
            check(f'shots.fit-scene-{tag}', p.eval("document.documentElement.scrollWidth<=innerWidth+1"))
            print(shot(f'gifts-reaction-{tag}'))
            p.eval("document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());true")
        view(1440, 900)
        clean('shots')

    print(f'ALL PASS ({len(results)} checks)')
finally:
    p.close()
