"""The life-sim batch (2026-11-01), in an isolated headless Chrome (never the player's saves).

Sections:
  free      the phone's Who's Free app: today + three days, only met links, slots and places, rank / romance marks, Gone,
            a row for right now jumps to Go Out with its area open; never unmet, secret or story-only people
  jobs      the phone's Jobs app: rows match jobs.js for a set of dates (days, days off, full moon, trip, story evenings),
            hidden / "Opens later", hired vs not, perk pay, the next-shift cue, a row for right now jumps to Go Out,
            a pure read (the save is byte-identical), keyboard / pad, layout at 1440x900 and 390x844
  raises    job raises and rare rewards: tiers from jobs.js, the pay math (rounded, perks on top), the raise toast once,
            the top tier's thanks once, a year's rare-reward rate on a fixed RNG (never two running, never on a gifting
            scene), old-save seeding of the shift count, the raise in the Jobs app and the Go Out preview
  contacts  contact cards: portrait, arcana, rank, birthday / favourites only from the rank that establishes them, gifts "?"
            until noted (giftReact), learned lines by rank, Messages button, back to the list; every data file's shape
  invites   ordinary-day invites: about two a week, never on a story day; yes books the slot (+1 ♪, plays at once);
            three ignored in a row → one wistful text; the reply shows the rank signpost
  calls     the new late-night calls: housing, gates, each reachable; calls can come a night sooner
  commute   about two school mornings a week; study / music / nap / sit with someone through the UI
  look      the evening figure: the season's outfit, a worn Wardrobe outfit first, the toggle off = the usual poses
  phone     Call / Message from a contact card: data shape, availability (rank 3+, met, gone, reversed, late, trip,
            Koromaru), once a week each (Sunday reset), no time spent, +1 ♪ once a week, rotation, bands / romance,
            the generic fallback, an invite at the end, a message and a call through the UI, saves ('reachshots': its screenshots)
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
        ok(p.eval("document.querySelectorAll('.g-phone-ov [data-tab]').length===4 && !!document.querySelector('.g-phone-ov .g-ph-wx')"), 'the phone lists four apps; Messages keeps the forecast')
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

    # ── Jobs ──
    if want('jobs') or want('shots'):
        fresh('11/21', 'after', {'jaemin': 2})
        p.eval("(()=>{const S=FemcGame.S;S.jobs={bookworms:{hired:true,shifts:2,beats:[],seen:[]},konbini:{hired:true,shifts:0,beats:[]},amulets:{hired:true,shifts:30,raise:3,thanked:true,beats:[],seen:[]}};S.stats.knowledge=0;FemcGame.save();return true})()")
        # Rows against jobs.js, over a set of dates: the shape of every row and its reason, recomputed here from the data.
        dates = p.eval("""(()=>{const G=FemcGame,C=G.D.cal,out=['11/21','11/22','11/23','12/1','1/4','6/14'];
          out.push(C.fullMoons.find(m=>G.dayOf(m)>G.dayOf('5/1')));const tr=(C.trips||[])[0];if(tr)out.push(tr.from);const ex=C.exams[0];if(ex)out.push(ex.days[0]);return out})()""")
        bad = p.eval("""(dates=>{const G=FemcGame,S=G.S,bad=[],DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];const d0=S.day;
          for(const md of dates){S.day=G.dayOf(md);S.slot='early';const days=G.jobsAhead(4);if(days.length!==4)bad.push(md+' days '+days.length);
            days.forEach(x=>{const info=G.dayInfo(x.d);
              if(info.type==='trip'){if(!x.away||x.rows.length)bad.push(info.md+' trip');return}
              const vis=G.D.jobs.filter(j=>{const u=j.unlock||{};return(!u.after||S.day>=G.dayOf(u.after))&&(!u.frags||Object.entries(u.frags).every(([w,n])=>(S.route.frags[w]||0)>=n))});
              const ids=x.rows.map(r=>r.job.id).sort().join(),want=vis.map(j=>j.id).sort().join();if(ids!==want)bad.push(info.md+' ids '+ids+' vs '+want);
              x.rows.forEach(r=>{const j=r.job,onDay=j.days.includes(info.dow)||(j.offDaysOnly&&info.type==='off'&&j.days.includes(0));
                if(r.slot!==j.slot)bad.push(j.id+' slot');
                if(r.ok&&!onDay)bad.push(info.md+' '+j.id+' open off-day');
                if(r.ok&&j.offDaysOnly&&info.type!=='off')bad.push(info.md+' '+j.id+' open on a school day');
                if(r.ok&&j.slot==='evening'&&info.moon.full)bad.push(info.md+' '+j.id+' open on a full moon');
                if(!onDay&&r.why!==(j.offDaysOnly?'Days off only':'No shifts on '+DN[info.dow]+'s'))bad.push(info.md+' '+j.id+' why '+r.why);
                if(onDay&&j.slot==='evening'&&info.moon.full&&r.why!=='Full moon tonight')bad.push(info.md+' '+j.id+' moon why '+r.why);
                if(r.ok&&r.pay!==Math.round(Math.round(j.pay*(1+G.raiseInfo(j,r.shifts).pct/100)/10)*10*1.1))bad.push(j.id+' pay '+r.pay);
                if(r.ok&&JSON.stringify(r.stats)!==JSON.stringify(G.sumStats?G.sumStats(j.stats):j.stats)&&j.id!=='yeobos')bad.push(j.id+' stats');
              })})}
          S.day=d0;S.slot='after';return bad})(""" + json.dumps(dates) + ")")
        ok(not bad, f'Jobs rows match jobs.js on {len(dates)} start dates (days, days off, full moons, trips, pay with The Pitch): {bad[:6]}')
        # A story evening is busy; spent and earlier slots today say so.
        r = p.eval("""(()=>{const G=FemcGame,S=G.S,ev=G.D.events.find(e=>e.date&&(e.slot||'evening')==='evening'&&!e.flag&&!e.unlock&&G.dayOf(e.date)>G.dayOf('5/1')&&G.dayInfo(G.dayOf(e.date)).type==='school'&&!G.dayInfo(G.dayOf(e.date)).moon.full);
          const d0=S.day,ev0=S.events.slice();S.day=G.dayOf(ev.date);S.events=S.events.filter(x=>x!==ev.id);const rows=G.jobsAhead(1)[0].rows.filter(r=>r.slot==='evening'&&r.why!=='Opens later'&&r.job.days.includes(G.dayInfo(S.day).dow));
          const busy=rows.length&&rows.every(r=>r.why==='Busy that evening');S.day=d0;S.events=ev0;
          S.spent[S.day+'-after']='act:x';const sp=G.jobsAhead(1)[0].rows.filter(r=>r.slot==='after'&&r.key==='spent').length;delete S.spent[S.day+'-after'];
          S.slot='evening';const past=G.jobsAhead(1)[0].rows.filter(r=>r.slot==='after'&&r.key==='past').length;S.slot='after';return {busy,n:rows.length,sp,past}})()""")
        ok(r['busy'] and r['sp'] and r['past'], f'a story evening is busy (no spoiler), time already spent and earlier slots are greyed: {r}')
        # Hidden until open; "Opens later" only for a job the save has already seen.
        h = p.eval("""(()=>{const G=FemcGame,S=G.S,d0=S.day;S.day=G.dayOf('6/1');const a=G.jobsAhead(1)[0].rows.map(r=>r.job.id);
          S.jobs.respawn={hired:false,shifts:0,beats:[]};const b=G.jobsAhead(1)[0].rows.find(r=>r.job.id==='respawn');delete S.jobs.respawn;S.day=d0;return {hidden:!a.includes('respawn')&&!a.includes('yeobos'),later:b&&b.why}})()""")
        ok(h['hidden'] and h['later'] == 'Opens later', f'jobs not open yet are hidden; one seen before says Opens later: {h}')
        # Hired vs not, needs, the next shift's cue (from the pack logic, on a copy).
        c = p.eval("""(()=>{const G=FemcGame,S=G.S,rows=G.jobsAhead(4).flatMap(x=>x.rows);const bw=rows.find(r=>r.job.id==='bookworms'&&r.ok),tu=rows.find(r=>r.job.id==='tutor'),fl=rows.find(r=>r.job.id==='flowers');
          const st=JSON.parse(JSON.stringify(S.jobs.bookworms)),pk=G.packPick('bookworms',st,3,bw.d||S.day);
          const pk2=G.packs().bookworms;S.jobs.bookworms.seen=pk2.shifts.map(x=>x.id);S.jobs.bookworms.beats=pk2.beats.map((b,i)=>i);
          const q=G.jobsAhead(4).flatMap(x=>x.rows).find(r=>r.job.id==='bookworms'&&r.ok);S.jobs.bookworms.seen=[];S.jobs.bookworms.beats=[];
          return {hired:bw.hired,cue:bw.cue&&bw.cue.label,kind:pk.kind,quiet:q&&q.cue&&q.cue.label,tutorNeeds:tu&&tu.needs,flHired:fl&&fl.hired,flPlace:fl&&fl.place,perk:bw.perks.map(p=>p.name+'/'+p.pct).join()}})()""")
        ok(c['hired'] and c['cue'] == 'New shift story' and c['kind'] in ('beat', 'shift') and c['quiet'] == 'Quiet shift', f'the cue follows the pack logic: {c}')
        ok(c['tutorNeeds'] and 'Knowledge' in c['tutorNeeds'] and c['flHired'] is False and c['flPlace'], f'not hired: where to apply, or the stat a job wants: {c}')
        ok('The Pitch/10' in c['perk'], f'perks that boost a job are listed: {c}')
        # A pure read: the whole save is the same after the app is opened, switched to and painted, and after jobsAhead over a year.
        p.eval("FemcGameUI.goOut('after');FemcGameUI.openPhone();true")
        p.wait("!!document.querySelector('.g-phone-ov [data-tab=jobs]')", 5)
        before = p.eval("(()=>{const s=JSON.parse(JSON.stringify(FemcGame.S));delete s.savedAt;delete s.playMinutes;return JSON.stringify(s)})()")
        p.eval("document.querySelector('.g-phone-ov [data-tab=jobs]').click();true")
        p.eval("(()=>{const G=FemcGame,S=G.S,d0=S.day;for(let d=G.dayOf('4/8');d<G.dayOf('3/1');d+=3){S.day=d;G.jobsAhead(4)}S.day=d0;return true})()")
        after = p.eval("(()=>{const s=JSON.parse(JSON.stringify(FemcGame.S));delete s.savedAt;delete s.playMinutes;return JSON.stringify(s)})()")
        ok(before == after, 'the Jobs app never changes the save (pure read)')
        ok(p.eval("document.querySelector('.g-phone-ov .g-ph-top b').textContent==='Jobs' && document.querySelectorAll('.g-ph-day').length===4 && !!document.querySelector('.g-ph-job.off') && /Hired/.test(document.querySelector('.g-ph-job[data-job=bookworms]').textContent) && /Not hired yet: apply at/.test(document.body.textContent)"), 'the app shows four days, greyed closed rows, Hired and where to apply')
        ok(p.eval("/No shifts on|Days off only/.test([...document.querySelectorAll('.g-ph-job.off')].map(b=>b.textContent).join())"), 'closed rows say why')
        # Keyboard / pad: arrows move between rows, a pad's Enter on the right-now row jumps.
        p.eval("document.querySelector('.g-phone-ov [data-tab=jobs]').focus();true")
        for _ in range(3):
            p.eval("(()=>{const e=new KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true,cancelable:true});e.fromPad=true;document.activeElement.dispatchEvent(e)})();true")
        ok(p.eval("document.activeElement.matches('.g-phone-ov button')"), 'the D-pad moves focus through the app')
        # Layout: no sideways scroll, tabs fit, at both sizes.
        for nm, w, hh in (('desktop', 1440, 900), ('phone', 390, 844)):
            size(w, hh, nm == 'phone')
            p.eval("new Promise(r=>setTimeout(r,300))")
            lay = p.eval("""(()=>{const b=document.querySelector('.g-phone-ov .g-ph-body');return {doc:document.documentElement.scrollWidth<=innerWidth,body:b.scrollWidth<=b.clientWidth+1,
              tabs:[...document.querySelectorAll('.g-phone-ov [data-tab]')].every(t=>t.scrollWidth<=t.clientWidth+1),rows:[...document.querySelectorAll('.g-ph-job')].every(r=>r.getBoundingClientRect().right<=b.getBoundingClientRect().right+1)}})()""")
            ok(all(lay.values()), f'Jobs fits at {w}x{hh} with no sideways scroll: {lay}')
            if want('shots'):
                shot(f'jobs-{nm}')
        size(1440, 900)
        go = p.eval("(()=>{const b=document.querySelector('.g-ph-job[data-go]');return b?b.dataset.go:null})()")
        ok(go, 'a job open right now offers Go now')
        slot, area = go.split('|')
        p.eval("(()=>{const b=document.querySelector('.g-ph-job[data-go]');b.focus();const e=new KeyboardEvent('keydown',{key:'Enter',bubbles:true,cancelable:true});e.fromPad=true;b.dispatchEvent(e)})();true")
        p.wait("!document.querySelector('.g-phone-ov:not(.out)') && !!document.querySelector('.g-areaview')", 5)
        ok(p.eval(f"document.querySelector('.g-areaview h1').textContent===FemcGame.areaById('{area}').name && !!document.querySelector('.g-areaview [data-job]')"), f'a row for right now jumps to Go Out with {area} and its job open')
        p.wait("!!document.querySelector('.gs') || !!document.querySelector('.g-overlay:not(.g-phone-ov)')", 5)
        ok(p.eval("!!document.querySelector('.gs') || !!document.querySelector('.g-overlay:not(.g-phone-ov) [data-y]')"), 'Go now starts the shift (or the hiring offer) straight away (Kat, Nov 2)')
        clear()

    # ── Raises and rare rewards ──
    if want('raises'):
        fresh('11/21', 'after')
        t = p.eval("""(()=>{const G=FemcGame,j=G.D.jobs.find(x=>x.id==='tutor');return [0,4,5,11,12,24,25,40].map(n=>[G.raiseInfo(j,n).pct,G.jobPay(j,n).pay])})()""")
        ok(t == [[0, 3200], [0, 3200], [15, 3680], [15, 3680], [30, 4160], [30, 4160], [50, 4800], [50, 4800]], f'tiers at 5 / 12 / 25 shifts: +15 / 30 / 50%, rounded to 10 yen: {t}')
        pp = p.eval("""(()=>{const G=FemcGame,S=G.S;S.met.push('jaemin');G.progress('jaemin').rank=2;const j=G.D.jobs.find(x=>x.id==='bookworms');const r=G.jobPay(j,12);delete S.links.jaemin;S.met=S.met.filter(x=>x!=='jaemin');return r})()""")
        ok(pp['base'] == 2340 and pp['pay'] == 2574 and pp['up'] == 10, f'perks multiply the raised pay: {pp}')
        # Toast once, pay from the next shift, the thanks at the top once.
        r = p.eval("""(()=>{const G=FemcGame,S=G.S,j=G.D.jobs.find(x=>x.id==='bookworms');G.setJobRng(()=>0.99);window.__lr=0;window.__th=0;S.jobs={};G.hire(j);const pays=[],raises=[];
          for(let k=0;k<26;k++){S.spent={};const y=S.yen;G.finishShift(j,{});pays.push(S.yen-y);const st0=G.jobState('bookworms');if((st0.raise||0)!==(window.__lr||0)){raises.push(k+1);window.__lr=st0.raise}if(st0.thanked&&!window.__th){window.__th=1;raises.push('thanks@'+(k+1))}}
          const st=G.jobState('bookworms');const inv=JSON.stringify(S.inventory);G.setJobRng(null);return {pays,raises,raise:st.raise,thanked:st.thanked,inv}})()""")
        ok(r['pays'][:5] == [1800] * 5 and r['pays'][5] == 2070 and r['pays'][12] == 2340 and r['pays'][25] == 2700, f'the raise pays from the shift after the tier: {r["pays"]}')
        ok(r['raises'] == [5, 12, 25, 'thanks@25'] and r['raise'] == 3 and r['thanked'], f'each raise toasts once, the thanks once at the top: {r["raises"]}')
        ok('chewing_soul' in r['inv'], 'the thanks puts its items in the bag')
        p.eval("(()=>{const G=FemcGame,S=G.S,j=G.D.jobs.find(x=>x.id==='bookworms');G.setJobRng(()=>0.99);S.jobs={bookworms:{hired:true,shifts:4,beats:[],seen:[]}};document.querySelectorAll('.g-toasts > *').forEach(t=>t.remove());S.spent={};G.finishShift(j,{});return true})()")
        p.eval("new Promise(r=>setTimeout(r,700))")
        t1 = p.eval("[...document.querySelectorAll('.g-toasts > *')].map(t=>t.textContent).filter(x=>/Raise!/.test(x))")
        p.eval("(()=>{const G=FemcGame,S=G.S,j=G.D.jobs.find(x=>x.id==='bookworms');document.querySelectorAll('.g-toasts > *').forEach(t=>t.remove());S.spent={};G.finishShift(j,{});G.setJobRng(null);return true})()")
        p.eval("new Promise(r=>setTimeout(r,700))")
        t2 = p.eval("[...document.querySelectorAll('.g-toasts > *')].map(t=>t.textContent).filter(x=>/Raise!/.test(x))")
        ok(len(t1) == 1 and 'Mitsuko:' in t1[0] and '¥2,070 a shift' in t1[0] and not t2, f'the raise toast in the boss\'s voice, once: {t1} {t2}')
        # A year's rare rate on a fixed RNG: 300 shifts at one job, a seeded LCG.
        rr = p.eval("""(()=>{const G=FemcGame,S=G.S,j=G.D.jobs.find(x=>x.id==='flowers');let seed=12345;G.setJobRng(()=>((seed=(seed*1103515245+12345)%2147483648)/2147483648));
          S.jobs={};G.hire(j);const hits=[];let expect=0;const R=window.FEMC_GAME_JOB_RAISES.rare;
          for(let k=0;k<300;k++){S.spent={};const st=G.jobState('flowers'),n0=st.rares||0,tier=G.raiseInfo(j,st.shifts+1).tier;G.finishShift(j,{});G.takeToasts();if((st.rares||0)>n0)hits.push(st.shifts);expect+=R[Math.min(tier,R.length-1)]}
          const twice=hits.some((h,i)=>i&&h===hits[i-1]+1);
          S.spent={};G.setJobRng(()=>0);const st=G.jobState('flowers'),n0=st.rares;st.rareAt=-1;G.finishShift(j,{scene:[{gift:{from:'x',item:{medicine:1}}}]});const gifted=st.rares>n0;
          S.spent={};G.finishShift(j,{});const after=st.rares>n0;S.spent={};const n1=st.rares;G.finishShift(j,{});const again=st.rares>n1;G.setJobRng(null);G.takeToasts();
          return {n:hits.length,expect:Math.round(expect),twice,gifted,after,again}})()""")
        ok(abs(rr['n'] - rr['expect']) <= max(8, rr['expect'] * 0.4) and not rr['twice'], f'a year of shifts: rare rewards near the expected rate, never two running: {rr}')
        ok(not rr['gifted'] and rr['after'] and not rr['again'], f'never on a scene that gives something; never two shifts running even at RNG 0: {rr}')
        # Old saves: a job record with no shift count is seeded from what it shows was worked.
        o = p.eval("""(()=>{const G=FemcGame,S=G.S;S.jobs={konbini:{hired:true,beats:[0],seen:['a','b','c'],log:['a','b','c','x','y','z','w']}};return G.jobState('konbini').shifts})()""")
        ok(o == 7, f'an old record without a count is seeded from its log / seen shifts: {o}')
        # Shown in the Jobs app and the Go Out preview.
        p.eval("(()=>{const G=FemcGame,S=G.S;S.jobs={bookworms:{hired:true,shifts:7,beats:[],seen:[],raise:1}};S.spent={};G.save();FemcGameUI.goOut('after');FemcGameUI.openPhone();document.querySelector('.g-phone-ov [data-tab=jobs]').click();return true})()")
        ok(p.eval("/Raise 1 of 3 \\(\\+15%\\) · 5 shifts to the next raise/.test(document.querySelector('.g-ph-job[data-job=bookworms]').textContent) && /¥2,070/.test(document.querySelector('.g-ph-job[data-job=bookworms]').textContent)"), 'the Jobs app shows the tier, the shifts to the next raise and the raised pay')
        clear()
        p.eval("FemcGameUI.goOut('after','strip');true")
        p.wait("!!document.querySelector('[data-job=bookworms]')", 5)
        p.eval("document.querySelector('[data-job=bookworms]').click();true")
        p.wait("!!document.querySelector('.g-activity-preview:not(.out)')", 5)
        ok(p.eval("/Earn ¥2,070/.test(document.querySelector('.g-activity-preview').textContent) && /Raise 1 of 3/.test(document.querySelector('.g-activity-preview').textContent)"), 'the shift preview shows the raised pay and the tier')
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
        ok(p.eval("JSON.stringify(FemcGame.contactCard(FemcGame.LINKS.akihiko).gifts)") == '{"loved":[],"liked":["Protein bar"],"meh":[],"no":[]}', 'gift reactions are recorded (the latest wins; "no" = disliked, gifts 2026-11-02)')
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
        ok(w['look'] == 'sk-wintercoat' and ('solar-pose-5' in w['src'] or 'sk-wintercoat/hd/thinking.webp' in w['src']), f'December: the winter coat: {w}')
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
        # Nov 3: HD single-figure poses (tools/femc-hd-poses.py): her own 18 at full size; a look with an HD set rotates
        # through it and reacts with its own matching pose; a pose the set lacks keeps the scroll pose; seasons use a set too
        ok(p.eval("Promise.all(['thinking','peace','arms-crossed','jump'].map(k=>new Promise(r=>{const i=new Image();i.onload=()=>r(i.naturalHeight>=1500);i.onerror=()=>r(false);i.src=FemcGame.base+'assets/femc/profile/solar-poses/'+k+'.webp'}))).then(a=>a.every(Boolean))"), 'own poses are the HD ones (full height)')
        A = p.eval("(FEMC_ART_READY.skins['sk-cp-afterhours']||{}).hd||[]")
        ok(len(A) == 18 and 'arms-crossed' in A and 'peace' in A, f'ready.js lists After Hours\' 18 HD poses: {A}')
        p.eval("(()=>{const C=FemcCosmetics;C.grantItem('sk-cp-afterhours');C.equip('sk-cp-afterhours');FemcGameUI.evening();return true})()")
        f = p.eval("(()=>{const f=document.querySelector('.g-home-fig');return {look:f.dataset.look,hd:f.classList.contains('hd'),old:f.classList.contains('look'),src:f.querySelector('img').getAttribute('src')}})()")
        ok(f['look'] == 'sk-cp-afterhours' and f['hd'] and not f['old'] and 'sk-cp-afterhours/hd/thinking.webp' in f['src'], f'After Hours worn: its HD set: {f}')
        got = {k: p.eval(HOV % json.dumps(k)) for k in want_pose}
        ok(all(v is None or f'sk-cp-afterhours/hd/{want_pose[k]}.webp' in v for k, v in got.items()) and sum(v is not None for v in got.values()) >= 4, f'After Hours hover reactions: {got}')
        p.eval("(()=>{const R=FEMC_ART_READY.skins['sk-cp-afterhours'];window.__hd0=R.hd;R.hd=R.hd.filter(k=>k!=='study');FemcGameUI.evening();return true})()")
        s0 = p.eval("document.querySelector('.g-home-fig img').getAttribute('src')"); s1 = p.eval(HOV % json.dumps('study'))
        ok(s1 is None or (s1 == s0 and 'sk-cp-afterhours/hd/' in s1), f'a pose the set lacks keeps the outfit\'s scroll pose: {s0} {s1}')
        p.eval("(()=>{FEMC_ART_READY.skins['sk-cp-afterhours'].hd=window.__hd0;FemcCosmetics.unequip('skin:solar');const W=FEMC_ART_READY.skins['sk-wintercoat'];window.__w0=W.hd;W.hd=['thinking','study'];return true})()")
        w = look('12/10')
        ok(w['look'] == 'sk-wintercoat' and 'sk-wintercoat/hd/thinking.webp' in w['src'], f'the season\'s outfit uses its HD set when it has one: {w}')
        p.eval("(()=>{const W=FEMC_ART_READY.skins['sk-wintercoat'];if(window.__w0)W.hd=window.__w0;else delete W.hd;return true})()")
        # Nov 3 (batch 134): a PARTIAL set (Velvet: 11 of 18) rotates only through what it has; a hover pose it lacks keeps the scroll pose
        V = p.eval("(FEMC_ART_READY.skins['sk-velvet']||{}).hd||[]")
        ok(len(V) == 11 and 'phone' in V and 'peace' not in V and 'study' in V, f'ready.js lists Velvet\'s 11 HD poses: {V}')
        p.eval("(()=>{const C=FemcCosmetics;C.grantItem('sk-velvet');C.equip('sk-velvet');FemcGameUI.evening();return true})()")
        v0 = p.eval("document.querySelector('.g-home-fig img').getAttribute('src')")
        vo = p.eval(HOV % json.dumps('out')); vs = p.eval(HOV % json.dumps('study')); vd = p.eval(HOV % json.dumps('desk'))
        ok('sk-velvet/hd/thinking.webp' in v0 and (vo is None or 'sk-velvet/hd/phone.webp' in vo) and (vs is None or 'sk-velvet/hd/study.webp' in vs)
           and (vd is None or vd == v0), f'Velvet (partial) worn: its own poses, sewing (missing) keeps the scroll pose: {v0} {vo} {vs} {vd}')
        if want('shots'):
            shot('evening-velvet-partial-desktop')
        p.eval("FemcCosmetics.unequip('skin:solar');true")
        errs = [e for e in p.console() if 'sk-wintercoat/hd/' not in str(e) and 'favicon' not in str(e)]  # the pretend set's files don't exist
        ok(not errs, f'HD looks: no browser errors: {errs}')
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

    # ── Call / Message from Contacts (2026-11-02) ──
    if want('phone') or want('shots') or want('reachshots'):
        reach_shots = want('shots') or want('reachshots')
        import time
        bad = p.eval("""(()=>{const P=window.FEMC_GAME_PHONE||{},G=FemcGame,out=[],ids=new Set();
          const main=['akihiko','yukari','junpei','mitsuru','fuuka','aigis','ken','shinjiro','haechan','jungwon','jihoon','minji','hanni','hyein','mark'];
          main.forEach(id=>{if(!(P.people||{})[id])out.push('missing '+id)});
          const lines=(a,k)=>(a||[]).forEach(x=>{if(x.s&&x.s!=='solar'&&x.s!=='them'&&!G.LINKS[x.s]&&!G.castHas?.(x.s))out.push(k+' speaker '+x.s);(x.choose||[]).forEach(o=>{if('notes' in o)out.push(k+' notes');lines(o.then,k)});lines(x.then,k);lines(x.else,k)});
          const check=(id,o)=>{if(o.noPhone)return;const fit=e=>(e.min??3)<=3&&!e.route;
            if((o.calls||[]).filter(fit).length<2)out.push(id+' calls');(o.calls||[]).forEach(c=>{if(ids.has(c.id))out.push('dup '+c.id);ids.add(c.id);lines(c.scene,c.id)});
            if((o.topics||[]).length!==3)out.push(id+' topics');(o.topics||[]).forEach(t=>{if(!(t.v||[]).some(fit))out.push(id+' '+t.id+' rank 3');
              (t.v||[]).forEach(v=>{if(!v.msgs?.length||!('me' in v.msgs[0]))out.push(id+' '+t.id+' starts');v.msgs.forEach(m=>{const st=m.sticker&&/^([a-z]+)-(\\d)$/.exec(m.sticker);
                if(m.sticker&&(!st||!(FEMC_STICKERS[st[1]])||(st[1]!==('me' in m?'solar':id))))out.push(id+' sticker '+m.sticker)})})})};
          Object.entries(P.people||{}).forEach(([id,o])=>{if(!G.LINKS[id])out.push('no link '+id);check(id,o)});check('generic',P.generic);
          return out})()""")
        ok(not bad, f'phone data in shape (15 main people, 2+ rank-3 calls, 3 topics, own sticker packs, no notes): {bad}')
        fresh('11/19', 'after', {'yukari': 2, 'junpei': 3, 'akihiko': 6, 'koromaru': 4, 'shinjiro': 6, 'rio': 4, 'fuuka': 5})
        why = p.eval("""(()=>{const G=FemcGame,L=G.LINKS,w=(id,k)=>{const r=G.phoneReach(L[id],k);return r?(r.ok?'ok':r.why):null};
          return {yk:w('yukari','call'),jp:w('junpei','call'),jpm:w('junpei','msg'),ko:w('koromaru','call'),sh:w('shinjiro','msg'),jw:w('jungwon','call')}})()""")
        ok(why == {'yk': 'Rank 3 first', 'jp': 'ok', 'jpm': 'ok', 'ko': 'He’s a dog', 'sh': 'Not around', 'jw': None}, f'availability: rank 3+, met, not gone, Koromaru has no phone: {why}')
        r = p.eval("""(()=>{const G=FemcGame,S=G.S,L=G.LINKS;const p=G.progress('rio');p.reversed=true;const a=G.phoneReach(L.rio,'msg').why;p.reversed=false;
          S.slot='late';const b=G.phoneReach(L.junpei,'call').why,c=G.phoneReach(L.junpei,'msg').ok;S.slot='after';
          const d0=S.day,tr=(G.D.cal.trips||[])[0];let t=null;if(tr){S.day=G.dayOf(tr.from);t=G.phoneReach(L.junpei,'call').why;S.day=d0}
          S.phone.pending.junpei='nope';const e=G.phoneReach(L.junpei,'msg').ok;delete S.phone.pending.junpei;
          return {a,b,c,t,e}})()""")
        ok(r['a'] == 'Things are tense' and r['b'] == 'Asleep' and r['c'] and r['t'] in (None, 'Away on a trip') and r['e'], f'reversed, late (calls asleep, texts fine), a trip: {r}')
        # A call and a message: no time spent, the week marked, the bonus once.
        r = p.eval("""(()=>{const G=FemcGame,S=G.S,L=G.LINKS,pr=G.progress('junpei');pr.xp=0;const d=S.day,sl=S.slot,sp=JSON.stringify(S.spent);
          const c=G.phoneCall('junpei');const n1=G.finishPhoneCall('junpei');const x1=pr.xp;
          const again=G.phoneReach(L.junpei,'call').why;const m=G.phoneMessage('junpei',G.phoneTopics('junpei')[0].id);const x2=pr.xp;
          const again2=G.phoneReach(L.junpei,'msg').why;
          return {own:/^pc-junpei/.test(c.id),n1,x1,again,mb:m.bonus,x2,again2,count:m.count,time:S.day===d&&S.slot===sl&&JSON.stringify(S.spent)===sp,thread:S.phone.threads.junpei.length}})()""")
        ok(r['own'] and r['n1'] == 1 and r['x1'] == 1 and r['mb'] == 0 and r['x2'] == 1, f'+1 ♪ once a week whichever comes first: {r}')
        ok(r['again'] == 'Called this week' and r['again2'] == 'Texted this week' and r['count'] >= 3 and r['thread'] == r['count'], f'once a week each, the exchange in the thread: {r}')
        ok(r['time'], 'calls and messages spend no time')
        r = p.eval("""(()=>{const G=FemcGame,S=G.S,L=G.LINKS,wk=G.weekOf?G.weekOf():null;let d=S.day;while(G.dayInfo(d).dow!==6)d++;S.day=d;const sat=G.phoneReach(L.junpei,'call').why;
          S.day=d+1;const sun=G.phoneReach(L.junpei,'call').ok;const c=G.phoneCall('junpei');const n=G.finishPhoneCall('junpei');
          const pr=G.progress('akihiko');pr.rank=15;const mx=G.phoneCall('akihiko')&&G.finishPhoneCall('akihiko');pr.rank=6;
          return {sat,sun,second:c.id,n,mx}})()""")
        ok(r['sat'] == 'Called this week' and r['sun'] and r['n'] == 1 and r['mx'] == 0, f'the week resets on Sunday; the next call rotates; nothing at MAX: {r}')
        ok(r['second'] != 'pc-junpei-1', f"calls play in turn: {r['second']}")
        # Variants by rank band and route; the generic fallback.
        r = p.eval("""(()=>{const G=FemcGame,S=G.S,pr=G.progress('akihiko');
          const pick=()=>{S.life.reach.akihiko={calls:(S.life.reach.akihiko||{}).calls||0};return G.phoneCall('akihiko').id};
          pr.rank=3;pr.route=null;const a=[pick(),pick()];pr.rank=9;pr.route='romance';const pool=new Set();for(let i=0;i<8;i++){S.life.reach.akihiko.call=-1;const c=G.phoneCall('akihiko');pool.add(c.id)}
          const g=G.phoneCall('rio'),t=G.phoneTopics('rio').map(x=>x.label);
          return {a,pool:[...pool],gid:g.id,gs:g.scene.some(x=>x.s==='rio'),gn:!JSON.stringify(g.scene).includes('{name}'),t}})()""")
        ok(r['gid'].startswith('pc-generic') and r['gs'] and r['gn'] and r['t'] == ['Checking in', 'How was your day?', 'Plans this weekend?'], f'someone without their own calls gets the generic ones in their name: {r}')
        rom = p.eval("(FEMC_GAME_PHONE.people.akihiko.calls||[]).filter(c=>c.route==='romance').map(c=>c.id)")
        ok(any(x in r['pool'] for x in rom) and not any(x in r['a'] for x in rom), f'romance calls only on the route, by rank: {r}')
        tv = p.eval("""(()=>{const G=FemcGame,S=G.S,pr=G.progress('akihiko');const out={};for(const [rk,rt] of [[3,null],[6,null],[9,'romance']]){pr.rank=rk;pr.route=rt;delete S.life.reach.akihiko;
          const th=S.phone.threads.akihiko=[];const m=G.phoneMessage('akihiko','day');out[rk]=th.slice(0,m.count-(m.invite?1:0)).map(x=>x.t).join('|')}pr.rank=6;pr.route='romance';delete S.life.reach.akihiko;return out})()""")
        ok(len(set(tv.values())) >= 2, f'message variants by rank band / route: {list(tv.values())[:1]}')
        # An invite at the end of an exchange: the ordinary-day invite in the thread; unanswered it isn't counted as ignored.
        r = p.eval("""(()=>{const G=FemcGame,S=G.S,P=FEMC_GAME_PHONE.people;
          for(const id of Object.keys(P)){const l=G.LINKS[id];if(!l||P[id].noPhone)continue;for(const t of P[id].topics||[])for(const v of t.v||[]){if(v.end!=='invite')continue;
            for(let k=0;k<40;k++){const d=G.dayOf('11/16')+k,info=G.dayInfo(d);if(info.type!=='school'&&info.type!=='off')continue;S.day=d;S.slot='early';if(!S.met.includes(id))S.met.push(id);
              const pr=G.progress(id);pr.rank=Math.max(v.min||3,3);pr.route=v.route||null;pr.reversed=false;S.life.inv=null;S.life.booked=null;delete S.life.reach[id];S.phone.pending={};
              if(G.storyDay()||!G.phoneReach(l,'msg')?.ok)continue;const m=G.phoneMessage(id,t.id);if(m&&m.invite)return {id,t:t.id,inv:S.life.inv,pend:!!G.dayInvitePending(id),ign:S.life.ignored};
              delete S.life.reach[id];}}}return null})()""")
        ok(r and r['inv']['phone'] and r['pend'], f"an exchange can end with their invite (Yes / Can't today in the thread): {r}")
        if r:
            ign = p.eval("(()=>{const G=FemcGame,S=G.S,b=S.life.ignored;G.sleep();return S.life.ignored===b})()")
            ok(ign, 'a phone invite left unanswered is not counted as ignored')
        # Through the UI: a message and a call from a contact card.
        fresh('11/19', 'after', {'junpei': 4, 'haechan': 6, 'yukari': 2})
        p.eval("FemcGameUI.goOut('after');FemcGameUI.openPhone();document.querySelector('.g-phone-ov [data-tab=people]').click();document.querySelector('.g-ph-ct[data-ct=yukari]').click();true")
        ok(p.eval("(()=>{const b=[...document.querySelectorAll('.g-ph-reachbtn')];return b.length===2&&b.every(x=>x.classList.contains('off')&&/Rank 3 first/.test(x.textContent))})()"), 'below rank 3 the buttons are greyed with the reason')
        p.eval("document.querySelector('.g-phone-ov .g-ph-back').click();document.querySelector('.g-ph-ct[data-ct=haechan]').click();true")
        if reach_shots:
            shot('reach-card-desktop'); size(390, 844, True); shot('reach-card-phone'); size(1440, 900)
        p.eval("document.querySelector('.g-ph-reachbtn[data-reach=msg]').click();true")
        p.wait("document.querySelectorAll('.g-ph-reply [data-topic]').length===3", 5)
        labels = p.eval("[...document.querySelectorAll('.g-ph-reply [data-topic]')].map(b=>b.textContent)")
        ok(len(labels) == 3 and 'How was your day?' in labels, f'Message offers three topics: {labels}')
        if reach_shots:
            shot('reach-topics-desktop'); size(390, 844, True); shot('reach-topics-phone'); size(1440, 900)
        n0 = p.eval("(FemcGame.S.phone.threads.haechan||[]).length")
        p.eval("document.querySelector('.g-ph-reply [data-topic]').click();true")
        p.wait("!document.querySelector('.g-ph-reply [data-topic]') && document.querySelectorAll('.g-ph-body .g-ph-msg').length>=3", 8)
        r = p.eval("({n:FemcGame.S.phone.threads.haechan.length,me:!!document.querySelector('.g-ph-body .g-ph-msg.me'),why:FemcGame.phoneReach(FemcGame.LINKS.haechan,'msg').why})")
        ok(r['n'] > n0 and r['me'] and r['why'] == 'Texted this week', f'the exchange types out in their thread through the UI: {r}')
        if reach_shots:
            shot('reach-thread-desktop'); size(390, 844, True); shot('reach-thread-phone'); size(1440, 900)
        p.eval("document.querySelector('.g-phone-ov .g-ph-back').click();document.querySelector('.g-phone-ov [data-tab=people]').click();document.querySelector('.g-ph-ct[data-ct=junpei]').click();true")
        before = p.eval("({d:FemcGame.S.day,s:FemcGame.S.slot,xp:FemcGame.progress('junpei').xp||0})")
        p.eval("document.querySelector('.g-ph-reachbtn[data-reach=call]').click();true")
        p.wait("!document.querySelector('.g-phone-ov:not(.out)') && !!document.querySelector('.gs:not(.out)')", 5)
        ok(p.eval("/Call/.test(document.querySelector('.gs:not(.out)').getAttribute('aria-label'))"), 'Call closes the phone and plays the call')
        if reach_shots:
            p.eval("new Promise(r=>setTimeout(r,800))"); shot('reach-call-desktop'); size(390, 844, True); shot('reach-call-phone'); size(1440, 900)
        t0 = time.time()
        while time.time() - t0 < 30 and p.eval("!!document.querySelector('.gs:not(.out)')"):
            p.eval("""(()=>{const sc=document.querySelector('.gs:not(.out)');const c=sc&&sc.querySelector('.gs-choices button:not(:disabled)');if(c)c.click();else if(sc){sc.querySelector('[data-t=skip]')?.click();sc.click()}return true})()""")
            time.sleep(0.15)
        after = p.eval("({d:FemcGame.S.day,s:FemcGame.S.slot,xp:FemcGame.progress('junpei').xp||0,why:FemcGame.phoneReach(FemcGame.LINKS.junpei,'call').why})")
        ok(after['d'] == before['d'] and after['s'] == before['s'] and after['xp'] == before['xp'] + 1 and after['why'] == 'Called this week', f'the call ends where it started, +1 ♪, once a week: {before} → {after}')
        # Saves: the week marks survive a save and reload; an old save without them is fine.
        p.eval("FemcGame.save();true"); p.goto('femc-game.html')
        p.wait("!!document.querySelector('[data-t=continue]')", 10); p.eval("document.querySelector('[data-t=continue]').click();true")
        p.wait("FemcGame.S.phase==='play'", 10)
        r = p.eval("({k:Object.keys((FemcGame.S.life||{}).reach||{}).sort(),why:FemcGame.phoneReach(FemcGame.LINKS.junpei,'call')})")
        ok('junpei' in r['k'] and r['why'] and r['why']['why'] == 'Called this week', f'the weekly marks survive a reload: {r}')
        p.eval("delete FemcGame.S.life.reach;true")
        ok(p.eval("FemcGame.phoneReach(FemcGame.LINKS.junpei,'call').ok===true"), 'a save without the marks works (nothing used this week)')
        clear()

    errors = p.console()
    ok(not errors, f'no browser errors: {errors}')
    print(json.dumps({'checks': len(checks), 'screenshots': str(OUT), 'browserErrors': errors}))
finally:
    p.close()
