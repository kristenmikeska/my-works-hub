"""The life-sim batch (2026-11-01), in an isolated headless Chrome (never the player's saves).

Sections:
  free      the phone's Who's Free app: today + three days, only met links, slots and places, rank / romance marks, Gone,
            a row for right now jumps to Go Out with its area open; never unmet, secret or story-only people
  contacts  contact cards: portrait, arcana, rank, birthday / favourites only from the rank that establishes them, gifts "?"
            until noted (giftReact), learned lines by rank, Messages button, back to the list; every data file's shape
  invites   ordinary-day invites: about two a week, never on a story day; yes books the slot (+1 ♪, plays at once);
            three ignored in a row → one wistful text; the reply shows the rank signpost
  calls     the new late-night calls: housing, gates, each reachable; calls can come a night sooner
  commute   about two school mornings a week; study / music / nap / sit with someone through the UI
  look      the evening figure: the season's outfit, a worn Wardrobe outfit first, the toggle off = the usual poses
  rankups   P5X-style: overflow ♪ carry (never past the next rank), story ranks unchanged, signposts, a rank through an invite
  shots     desktop 1440x900 and phone 390x844 of each new screen

    python3 tests/femc_life.py [--only free,contacts] [--screenshots /absolute/dir]
"""
import base64, json, pathlib, sys, tempfile
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-life-'))
OUT.mkdir(parents=True, exist_ok=True)
ONLY = sys.argv[sys.argv.index('--only') + 1].split(',') if '--only' in sys.argv else None
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


def want(name):
    return ONLY is None or name in ONLY


p = Page()


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
    p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': mobile, 'maxTouchPoints': 5} if mobile else {'enabled': False})


def shot(name):
    p.eval("document.querySelectorAll('.femc-dh,.g-banner,.gs-rank,.g-toasts > *').forEach(x=>x.remove());true")
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,500)))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def clear():
    p.eval("document.querySelectorAll('.g-overlay,.gs,.gs-rank,.g-statup,.g-banner,.femc-dh,.g-toasts > *').forEach(x=>x.remove());document.documentElement.classList.remove('g-in-scene');true")


def fresh(day='11/20', slot='after', met=None):
    """A new game on a day, with these links met at these ranks ({id: rank}); no texts, routines or run-ins in the way."""
    met = met or {}
    p.eval(f"""(()=>{{const G=FemcGame;G.newGame();const S=G.S;S.phase='play';S.started=true;S.day=G.dayOf('{day}');S.slot='{slot}';
      G.setSetting('text','instant');G.setSetting('auto','off');G.setSetting('music',0);G.setSetting('dateCard',false);
      Object.keys(G.D.flags.worlds||{{}}).forEach(w=>S.route.frags[w]=12);
      ['arrived-hanni','arrived-hyein','arrived-jihoon','arrived-crew','arrived-cherry','joined-junpei','shinji-awake'].forEach(f=>S.flags[f]=true);
      G.D.events.filter(e=>G.dayOf(e.date||'4/6')<S.day).forEach(e=>S.events.includes(e.id)||S.events.push(e.id));
      S.dailyLife={{seen:G.D.dailyLife.map(e=>e.id),lastDay:S.day}};S.runIns={{seen:G.D.runIns.map(e=>e.id),lastDay:S.day,later:[]}};
      S.phone={{threads:{{}},unread:{{}},done:G.D.texts.texts.map(t=>t.id).concat((G.D.texts.ambient||[]).map(t=>t.id)),pending:{{}},invite:null,lastInvite:9999,vars:{{}}}};
      const m={json.dumps(met)};Object.entries(m).forEach(([id,r])=>{{if(!S.met.includes(id))S.met.push(id);const pr=G.progress(id);pr.rank=r;for(let k=1;k<=r;k++)pr.rankDay[k]=S.day-30;}});
      G.save();return true}})()""")


try:
    p.goto('femc-game.html')
    size(1440, 900)

    # ── Who's free ──
    if want('free') or want('shots'):
        fresh('11/20', 'after', {'yukari': 4, 'junpei': 3, 'mitsuru': 5, 'akihiko': 6, 'fuuka': 3, 'rio': 2, 'saori': 3, 'ann': 4, 'jungwon': 3, 'shinjiro': 6})
        p.eval("FemcGame.progress('akihiko').route='romance';FemcGame.save();FemcGameUI.goOut('after');true")
        days = p.eval("FemcGame.whoFree(4).map(x=>({d:x.d,rows:x.rows.map(r=>({id:r.link.id,slot:r.slot,area:r.area,now:r.now}))}))")
        ok(len(days) == 4, 'Who\'s free covers today and three more days')
        ids = {r['id'] for d in days for r in d['rows']}
        met = set(p.eval("FemcGame.S.met"))
        ok(ids and ids <= met, f'only met people are listed: {sorted(ids)}')
        ok(p.eval("!FemcGame.whoFree(4).some(x=>x.rows.some(r=>r.link.storyOnly||r.link.hidden||(r.link.secret&&!FemcGame.flag(r.link.secret.flag))))"), 'never story-only, hidden or unfound secret links')
        ok(p.eval("FemcGame.whoFree(4).every(x=>x.rows.every(r=>FemcGame.linkStatus(r.link,x.d,r.slot).ok||r.spent))"), 'every row is somebody really free then')
        ok('shinjiro' in p.eval("FemcGame.goneLinks().map(l=>l.id)"), 'a link that has left shows as gone')
        p.eval("FemcGameUI.openPhone();true")
        p.wait("!!document.querySelector('.g-phone-ov [data-tab=free]')", 5)
        ok(p.eval("document.querySelectorAll('.g-phone-ov [data-tab]').length===3 && !!document.querySelector('.g-phone-ov .g-ph-wx')"), 'the phone lists three apps; Messages keeps the forecast')
        p.eval("document.querySelector('.g-phone-ov [data-tab=free]').click();true")
        ok(p.eval("document.querySelector('.g-phone-ov .g-ph-top b').textContent==='Who’s free' && document.querySelectorAll('.g-ph-day').length>=4"), 'the Who\'s free app opens on its tab')
        ok(p.eval("[...document.querySelectorAll('.g-ph-fr')].some(b=>/R6/.test(b.textContent)&&/♥/.test(b.textContent))") or 'akihiko' not in ids, 'rank and romance marks on rows')
        ok(p.eval("[...document.querySelectorAll('.g-ph-day.gone .g-ph-fr')].some(b=>/Shinjiro/.test(b.textContent))"), 'the Gone section lists who left')
        if want('shots'):
            shot('free-desktop'); size(390, 844, True); shot('free-phone'); size(1440, 900)
        now = p.eval("(()=>{const b=document.querySelector('.g-ph-fr[data-go]');return b?b.dataset.go:null})()")
        if now:
            slot, area = now.split('|')
            p.eval("document.querySelector('.g-ph-fr[data-go]').click();true")
            p.wait(f"!document.querySelector('.g-phone-ov:not(.out)') && !!document.querySelector('.g-areaview')", 5)
            ok(p.eval(f"document.querySelector('.g-areaview h1').textContent===FemcGame.areaById('{area}').name"), f'a row for right now jumps to Go Out with {area} open')
        else:
            ok(False, 'expected someone free right now on 11/20 after school')
        clear()
        # A row for later is a card, not a jump; the card's back returns to Who's free.
        p.eval("FemcGameUI.openPhone();document.querySelector('.g-phone-ov [data-tab=free]').click();document.querySelector('.g-ph-fr:not([data-go])').click();true")
        ok(p.eval("!!document.querySelector('.g-ph-card')"), 'a later row opens their contact card')
        p.eval("document.querySelector('.g-phone-ov .g-ph-back').click();true")
        ok(p.eval("document.querySelector('.g-phone-ov .g-ph-top b').textContent==='Who’s free'"), 'back from the card returns to Who\'s free')
        clear()

    # ── Contacts ──
    if want('contacts') or want('shots'):
        bad = p.eval("""(()=>{const C=window.FEMC_GAME_CONTACTS||{},G=FemcGame,out=[];
          Object.entries(C).forEach(([id,c])=>{const l=G.LINKS[id];if(!l){out.push('no link '+id);return}
            Object.keys(c.learned||{}).forEach(k=>{if(+k%2||+k<2||+k>G.maxOf(l))out.push(id+' key '+k)});
            if(c.birthday&&!/^\\d{1,2}\\/\\d{1,2}$/.test(c.birthday.t||c.birthday))out.push(id+' birthday');
            const iv=l.dayInvite;if(id!=='wren'&&(!iv||iv.ask.length<3||iv.ok.length<2||iv.no.length<2||iv.sad.length<2))out.push(id+' dayInvite')});
          Object.values(G.LINKS).filter(l=>!l.hidden&&l.status!=='stub').forEach(l=>{if(!C[l.id])out.push('missing '+l.id)});return out})()""")
        ok(not bad, f'every link has a contact card and day invites in shape: {bad}')
        fresh('11/20', 'after', {'akihiko': 6, 'kuromi': 3, 'yukari': 2})
        c = p.eval("(()=>{const c=FemcGame.contactCard(FemcGame.LINKS.akihiko);return {b:c.birthday,k:c.known.map(x=>x.rank),locked:c.locked,g:c.gifts}})()")
        ok(c['b'] == '9/22' and c['k'] == [2, 4, 6] and c['locked'] >= 2, f'learned lines by rank, the birthday once its scene has played: {c}')
        ok(p.eval("FemcGame.contactCard(FemcGame.LINKS.kuromi).birthday===null && FemcGame.contactCard(FemcGame.LINKS.kuromi).hobbies===null"), 'a birthday or favourite learned at a later rank stays hidden')
        ok(p.eval("FemcGame.contactCard(FemcGame.LINKS.jungwon)===null"), 'no card for someone not met')
        p.eval("FemcGameUI.openPhone();document.querySelector('.g-phone-ov [data-tab=people]').click();true")
        names = p.eval("[...document.querySelectorAll('.g-ph-ct')].map(b=>b.dataset.ct)")
        ok(sorted(names) == ['akihiko', 'kuromi', 'yukari'], f'contacts list only met people: {names}')
        p.eval("document.querySelector('.g-ph-ct[data-ct=akihiko]').click();true")
        txt = p.eval("document.querySelector('.g-ph-card').textContent")
        ok('Rank 6 of 15' in txt and '9/22' in txt and 'Things Solar has learned' in txt and txt.count('?') >= 3, 'the card shows rank, birthday, gifts ? and learned lines')
        if want('shots'):
            shot('contact-desktop'); size(390, 844, True); shot('contact-phone')
            p.eval("document.querySelector('.g-phone-ov .g-ph-back').click();true"); shot('contacts-phone'); size(1440, 900)
        clear()
        p.eval("FemcGame.effect({giftReact:{link:'akihiko',item:'Protein bar',tier:'loved'}});FemcGame.effect({giftReact:{link:'akihiko',item:'Protein bar',tier:'liked'}});true")
        ok(p.eval("JSON.stringify(FemcGame.contactCard(FemcGame.LINKS.akihiko).gifts)") == '{"loved":[],"liked":["Protein bar"],"meh":[]}', 'gift reactions are recorded (the latest wins)')
        clear()

    # ── Ordinary-day invites ──
    if want('invites') or want('rankups'):
        fresh('5/11', 'early', {'yukari': 4, 'junpei': 3, 'akihiko': 4, 'mitsuru': 3, 'fuuka': 2, 'rio': 3, 'saori': 2})
        sim = p.eval("""(()=>{const G=FemcGame,S=G.S,got=[];let story=0;
          for(let d=G.dayOf('5/11');d<G.dayOf('7/6');d++){S.day=d;S.slot='early';S.holiday=null;G.deliverTexts();
            if(S.life&&S.life.inv&&S.life.inv.d===d){got.push(d);if(G.storyDay(d))story++;S.life.inv.ans='no';}
            G.sleep();S.day=d;}
          return {n:got.length,weeks:(G.dayOf('7/6')-G.dayOf('5/11'))/7,story}})()""")
        rate = sim['n'] / sim['weeks']
        ok(1.2 <= rate <= 3.2 and sim['story'] == 0, f'about two invites a week, none on a story day: {sim}')
        # Yes books the slot; it plays at once with +1 ♪.
        fresh('5/12', 'early', {'yukari': 3})
        p.eval("""(()=>{const G=FemcGame,S=G.S;S.life={lastInv:-9,ignored:0,gifts:{}};let d=S.day;
          while(!G.dayInvitePending('yukari')&&d<S.day+40){S.life.inv=null;S.life.lastInv=-9;S.slot='early';G.deliverTexts();if(!G.dayInvitePending('yukari')){d++;S.day=d;}}return true})()""")
        inv = p.eval("FemcGame.S.life.inv")
        ok(inv and inv['link'] == 'yukari', f'an invite from a free rank-2+ link arrives: {inv}')
        p.eval("FemcGameUI.openPhone('yukari');true")
        p.wait("!!document.querySelector('.g-ph-reply [data-dayinv=yes]')", 5)
        ok(p.eval("!!document.querySelector('.g-ph-reply .g-ph-hint')"), 'the invite reply shows the rank signpost')
        p.eval("document.querySelector('.g-ph-reply [data-dayinv=yes]').click();true")
        p.wait("FemcGame.S.life.booked&&FemcGame.S.life.booked.link==='yukari'", 5)
        ok(p.eval("FemcGame.S.phone.threads.yukari.slice(-2).map(m=>m.from).join()==='solar,yukari'"), 'yes: her answer and the reply land in the thread')
        clear()
        xp0 = p.eval("FemcGame.progress('yukari').xp||0")
        rk0 = p.eval("FemcGame.progress('yukari').rank")
        p.eval("""window.played=null;const pl=FemcScene.play;FemcScene.play=o=>{window.played=o;FemcScene.play=pl;setTimeout(()=>o.onDone({gained:1}),0);return {}};
          window.__due=FemcGame.dueEvent;FemcGame.dueEvent=()=>null;FemcGame.S.slot=FemcGame.S.life.booked.slot;FemcGameUI.run();FemcGame.dueEvent=window.__due;true""")
        p.wait("window.played && !FemcGame.S.life.booked", 5)
        p.eval("new Promise(r=>setTimeout(r,300))")
        ok(p.eval("window.played.link==='yukari'"), 'the booked slot plays the time together at once')
        rk1, xp1 = p.eval("FemcGame.progress('yukari').rank"), p.eval("FemcGame.progress('yukari').xp||0")
        ok(rk1 > rk0 or xp1 >= xp0 + 2, f'keeping plans adds +1 ♪ on top (rank {rk0}->{rk1}, xp {xp0}->{xp1})')
        clear()
        # Three ignored in a row: one wistful text the next morning, no meter loss.
        fresh('5/12', 'early', {'junpei': 3})
        res = p.eval("""(()=>{const G=FemcGame,S=G.S,l=G.LINKS.junpei;S.life={lastInv:-9,ignored:0,gifts:{}};const xp=G.progress('junpei').xp||0;
          for(let i=0;i<3;i++){S.life.inv={d:S.day,link:'junpei',slot:'after',ans:null};G.sleep();}
          S.slot='early';G.deliverTexts();const last=S.phone.threads.junpei?.at(-1);
          return {sad:!!last&&l.dayInvite.sad.includes(last.t),xp:(G.progress('junpei').xp||0)===xp,ign:S.life.ignored}})()""")
        ok(res['sad'] and res['xp'] and res['ign'] == 0, f'three ignored invites: one sad text, no meter loss: {res}')
        clear()

    # ── Late-night calls ──
    if want('calls'):
        r = p.eval("""(()=>{const G=FemcGame,LG=window.FEMC_GAME_LODGING,out=[];const calls=[];
          Object.values(G.LINKS).forEach(l=>(l.lateNights||[]).forEach(e=>{if(/^call-/.test(e.id))calls.push([l,e])}));
          calls.forEach(([l,e])=>{if(e.kind!=='call')out.push(e.id+' kind');if(!(e.scene||[]).some(x=>x.choose))out.push(e.id+' choice');
            const n=e.scene.length;if(n<5||n>14)out.push(e.id+' length '+n)});
          return {n:calls.length,ids:calls.map(([l,e])=>l.id+':'+e.id),bad:out}})()""")
        ok(r['n'] >= 6 and not r['bad'], f"six or more new calls, all phone calls with a choice: {r}")
        for cid in [x.split(':')[1] for x in r['ids']]:
            got = p.eval(f"""(()=>{{const G=FemcGame;const [l,e]=Object.values(G.LINKS).flatMap(l=>(l.lateNights||[]).map(e=>[l,e])).find(([,e])=>e.id==='{cid}');
              G.newGame();const S=G.S;S.phase='play';S.met.push(l.id);const pr=G.progress(l.id);pr.rank=Math.max(e.rank||1,1);if(e.route&&e.route!=='none')pr.route=e.route;
              (e.flag?[].concat(e.flag):[]).forEach(f=>S.flags[f]=true);(e.events||[]).forEach(x=>S.events.push(x));
              if(l.storyEvents)l.storyEvents.forEach(x=>S.events.push(x));
              for(let d=G.dayOf(e.after);d<=G.dayOf(e.until||'3/6');d++){{S.day=d;S.tonight=null;S.lateNights={{seen:l.lateNights.map(x=>x.id).filter(x=>x!=='{cid}'),lastDay:-99}};
                if(G.dayInfo(d).moon.full)continue;const x=G.lateNightDue(d);if(x&&x.e.id==='{cid}')return G.mdOf(d);}}return null}})()""")
            ok(got, f'{cid} is reachable (first night {got})')
        gap = p.eval("""(()=>{const G=FemcGame;G.newGame();const S=G.S;S.phase='play';const l=G.LINKS.jungwon;S.met.push('jungwon');G.progress('jungwon').rank=4;
          (l.storyEvents||[]).forEach(x=>S.events.push(x));
          let d=G.dayOf('11/9');while(G.dayInfo(d).moon.full)d++;S.day=d;S.lateNights={seen:G.LINKS.jungwon.lateNights.filter(e=>e.kind!=='call').map(e=>e.id),lastDay:d-2};
          const x=G.lateNightDue(d);S.lateNights.seen=G.LINKS.jungwon.lateNights.filter(e=>e.kind==='call').map(e=>e.id);const y=G.lateNightDue(d);
          return {call:x&&x.e.kind,other:y&&y.e.id}})()""")
        ok(gap['call'] == 'call' and gap['other'] is None, f'two nights after a late night, only a call may come: {gap}')

    # ── The commute ──
    if want('commute') or want('shots'):
        fresh('4/13', 'early', {'yukari': 3, 'junpei': 2})
        sim = p.eval("""(()=>{const G=FemcGame,S=G.S;let n=0,school=0,days=[];for(let d=G.dayOf('4/13');d<G.dayOf('7/13');d++){const i=G.dayInfo(d);if(i.type!=='school')continue;school++;
          S.day=d;const c=G.commuteDue(d);if(c){n++;days.push(d);S.life.commute={d,last:d}}}return {n,weeks:(G.dayOf('7/13')-G.dayOf('4/13'))/7,school,gap:Math.min(...days.slice(1).map((d,i)=>d-days[i]))}})()""")
        ok(1.2 <= sim['n'] / sim['weeks'] <= 2.8 and sim['gap'] >= 2, f'about two commute choices a week, never two mornings running: {sim}')
        for kind, check in [('study', "s.stats.knowledge>k0"), ('nap', "s.condition==='good'"), ('sit', "true")]:
            fresh('4/13', 'early', {'yukari': 3, 'junpei': 2})
            p.eval("""(()=>{const G=FemcGame,S=G.S;let d=S.day;while(!(G.dayInfo(d).type==='school'&&(S.day=d,G.commuteDue(d))))d++;S.day=d;S.condition='tired';window.k0=S.stats.knowledge;return true})()""")
            p.eval("FemcGameUI.run();true")
            p.wait("!!document.querySelector('.g-commute [data-cm]')", 5)
            if kind == 'study' and want('shots'):
                shot('commute-desktop'); size(390, 844, True); shot('commute-phone'); size(1440, 900)
            p.eval(f"document.querySelector('.g-commute [data-cm={kind}]').click();true")
            ok(p.eval(f"(()=>{{const s=FemcGame.S,k0=window.k0;return !document.querySelector('.g-cm-r').hidden && {check}}})()"), f'commute: {kind} through the UI')
            if kind == 'study' and want('shots'):
                shot('commute-picked-desktop')
            clear()
        ok(p.eval("(()=>{const G=FemcGame;G.S.day=G.dayOf('4/12');return G.commuteDue()===null})()"), 'no commute choice on a Sunday')

    # ── The evening look ──
    if want('look') or want('shots'):
        def look(day):
            fresh(day, 'evening')
            p.eval("FemcGameUI.evening();true")
            return p.eval("(()=>{const f=document.querySelector('.g-home-fig');return {look:f.dataset.look||null,src:f.querySelector('img').getAttribute('src')}})()")
        w = look('12/10')
        ok(w['look'] == 'sk-wintercoat' and 'solar-pose-5' in w['src'], f'December: the winter coat: {w}')
        if want('shots'):
            shot('evening-winter-desktop')
        s = look('8/3')
        ok(s['look'] == 'sk-summersession', f'August: the summer look: {s}')
        if want('shots'):
            shot('evening-summer-desktop')
        n = look('5/12')
        ok(n['look'] is None and 'solar-poses/thinking' in n['src'], 'spring: the usual poses')
        # Nov 1: eighteen poses; hovering an activity shows its own (Kat's solar-poses-2 / -3)
        ok(p.eval("Promise.all(['thinking','wave','peace','hair','arms-crossed','shy','study','ramen','watering','evoker','stretch','phone','cheer','jump','tease','heart','lookback','sewing'].map(k=>new Promise(r=>{const i=new Image();i.onload=()=>r(i.naturalHeight>700);i.onerror=()=>r(false);i.src=FemcGame.base+'assets/femc/profile/solar-poses/'+k+'.webp'}))).then(a=>a.every(Boolean))"), 'all eighteen evening poses load')
        HOV = "(n=>{const b=document.querySelector('.g-dorm [data-n=\"'+n+'\"]');if(!b)return null;b.dispatchEvent(new Event('pointerenter'));const s=document.querySelector('.g-home-fig img').getAttribute('src');b.dispatchEvent(new Event('pointerleave'));return s})(%s)"
        want_pose = {'study': 'study', 'rest': 'stretch', 'out': 'phone', 'tartarus': 'evoker', 'dorm:cook': 'ramen', 'dorm:roofgarden': 'watering', 'desk': 'sewing'}
        got = {k: p.eval(HOV % json.dumps(k)) for k in want_pose}
        ok(all(v is None or f'solar-poses/{want_pose[k]}.webp' in v for k, v in got.items()) and sum(v is not None for v in got.values()) >= 4, f'hover reactions: {got}')
        p.eval("(()=>{const C=FemcCosmetics;C.grantItem('sk-yukata');C.equip('sk-yukata');return true})()")
        p.eval("FemcGameUI.evening();true")
        ok(p.eval("document.querySelector('.g-home-fig').dataset.look==='sk-yukata'"), 'a worn Wardrobe outfit comes first')
        t = p.eval(HOV % json.dumps('tartarus')); r = p.eval(HOV % json.dumps('rest'))
        ok((t is None or 'sk-yukata/solar-pose-0' in t) and (r is None or 'sk-yukata/solar-pose-' in r), f'the worn look still wins on hover: {t} {r}')
        p.eval("FemcCosmetics.setPortraits(false);FemcGameUI.evening();true")
        ok(p.eval("!document.querySelector('.g-home-fig').dataset.look"), 'outfits toggled off: the usual poses')
        p.eval("FemcCosmetics.setPortraits(true);true")
        clear()

    # ── Rank-ups ──
    if want('rankups'):
        r = p.eval("""(()=>{const G=FemcGame;G.newGame();const S=G.S;S.phase='play';S.day=G.dayOf('6/1');S.slot='after';S.met.push('yukari');const p=G.progress('yukari');p.rank=2;
          const req=G.need(G.LINKS.yukari,2),nxt=G.need(G.LINKS.yukari,3);const out=G.finishLink(G.LINKS.yukari,'rank',2,req+50);return {up:out.up,xp:p.xp,nxt}})()""")
        ok(r['up'] and 0 < r['xp'] <= r['nxt'] - 1, f'overflow ♪ carries, one short of the next rank at most: {r}')
        r = p.eval("""(()=>{const G=FemcGame;G.newGame();const S=G.S;S.phase='play';S.day=G.dayOf('12/20');S.met.push('haechan');const p=G.progress('haechan');p.rank=8;p.xp=40;
          const out=G.finishLink(G.LINKS.haechan,'rank',8,5);return {up:out.up,xp:p.xp}})()""")
        ok(r['up'] and r['xp'] == 0, f'story ranks keep their rule (no carry): {r}')
        h = p.eval("""(()=>{const G=FemcGame;G.newGame();const S=G.S;S.phase='play';S.day=G.dayOf('11/12');['haechan','yukari'].forEach(id=>S.met.push(id));
          G.progress('haechan').rank=2;G.progress('yukari').rank=3;const L=G.LINKS;const y=L.yukari.ranks[3];
          return {hc:G.rankHint(L.haechan).label,yk:G.rankHint(L.yukari).key}})()""")
        ok(h['hc'] == 'Waits on the story', f'a story rank says it waits on the story (never which): {h}')
        ok(p.eval("""(()=>{const G=FemcGame;G.newGame();const S=G.S;S.phase='play';S.day=G.dayOf('2/10');S.met.push('akihiko');const p=G.progress('akihiko');p.rank=11;
          const n=G.LINKS.akihiko.ranks[11];S.day=G.dayOf(n.after)-1;const h=G.rankHint(G.LINKS.akihiko);return h.key==='quiet'&&/Next rank opens|Waits/.test(h.label)&&/Nothing new/.test(h.note)})()"""), 'rank 10+ before the next rank opens: "nothing new for now"')
        ok(p.eval("""(()=>{const G=FemcGame;G.newGame();const S=G.S;S.phase='play';S.day=G.dayOf('5/12');S.met.push('yukari');G.progress('yukari').rank=1;return G.rankHint(G.LINKS.yukari).key})()""") in ('ready', 'opens'), 'an open rank says Rank up ready (or the date it opens)')
        # Social Link screen shows the signpost.
        fresh('11/20', 'after', {'yukari': 4})
        p.eval("FemcMenu&&FemcMenu.open?FemcMenu.open('links'):FemcGameUI.openStatus('links');true")
        p.eval("new Promise(r=>setTimeout(r,500))")
        ok(p.eval("/Rank up ready|Next rank opens|Meter filling|Waits on the story/.test(document.querySelector('.g-sl-detail')?.textContent||'')"), 'the Social Link card shows the signpost')
        clear()

    errors = p.console()
    ok(not errors, f'no browser errors: {errors}')
    print(json.dumps({'checks': len(checks), 'screenshots': str(OUT), 'browserErrors': errors}))
finally:
    p.close()
