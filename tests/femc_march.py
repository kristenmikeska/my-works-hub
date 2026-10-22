"""The year runs to early March, and five links are gone (2026-10-21, Kat's rulings).

  python3 tests/femc_march.py [--screenshots /absolute/dir]

calendar   the calendar ends on 3/7; February is ordinary school (2/11 a holiday, 2/14 Valentine's on a Sunday, 2/3 Setsubun),
           3/5 is graduation, 1/30 is a full moon with no operation and 3/6 is the last full moon (the finale's operation);
           sleeping through 1/31 goes on into February; the menu calendar draws March; the light February fill is loaded
           (living-march.js: job and club openers for months 2 and 3, routines, texts, Valentine's invites, two story events).
endings    the post-solstice story sits on its new dates (verso 2/20, Wren 10 3/2, snow 3/3, mirror 3/4, graduation and the
           playdate 3/5, the pre-finale breakfast and the last train 3/6, the endings 3/7) and each is due on its day and slot;
           the bad ending jumps to 3/7; through the real UI the ending plays on 3/7 and the end screen says 3/7.
migration  a late-January save from the old calendar loads (autosave, a slot, a backup code), keeps its day, is not sent to an
           ending, and plays on through 1/31 into February with the real UI; one past the old finale goes to its ending; one
           whose ending already played sits on the new last night; a Hermit-cleared save gets the Black Rose once.
removed    Leon, Cloud, Noctis, Astarion and Shadowheart are gone from links, stubs, story, run-ins, perks, bonds, keychains
           and the battle's cut-in list; an old save holding their progress loads cleanly (progress, meeting, threads and
           battle-side ranks dropped) and keeps what they gave (items, gear, the Black Rose, a learned MAX skill, a fragment);
           the shared Compendium hides their v1-only pages from a revamp-only player and keeps them for a v1 save.
No browser errors. Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-march-'))
OUT.mkdir(parents=True, exist_ok=True)
checks = []
REMOVED = ['leon', 'cloud', 'noctis', 'astarion', 'shadowheart']


def ok(cond, what):
    assert cond, what
    checks.append(what)


def comp():
    # The shared Compendium page (not the game, so Page.goto's wait doesn't apply).
    p.ctx = None
    p.ws.call('Page.navigate', {'url': f'http://127.0.0.1:{p.srv.server_port}/compendium.html'})
    p.wait("document.readyState==='complete' && !!window.femcCompendiumOpen && !!window.FEMC_COMPENDIUM")
    time.sleep(0.4)


def shot(name):
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,300)))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


HELPERS = r"""
window.MA = (() => {
  const G = FemcGame, copy = x => JSON.parse(JSON.stringify(x));
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off'); G.setSetting('dateCard', false);
  // The fixtures start from a fresh game; whatever save the page loaded stays as it was (the migration checks read it).
  const keep = copy(G.S); G.newGame(); const base = copy(G.S); base.phase = 'play'; base.started = true; base.flags = { armband: true };
  Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, keep); G.saveQuiet();
  // A clean save on md at slot: story events dated before it played (exact-date ones), the year's flags.
  function at(md, slot, extra = {}) {
    Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, copy(base));
    const d = G.dayOf(md); G.S.day = d; G.S.slot = slot;
    G.S.events = G.D.events.filter(e => G.dayOf(e.date) < d && (!e.flag || e.flag === 'year-goes-on' && d > G.dayOf('12/21'))).map(e => e.id);
    if (d > G.dayOf('4/18')) { G.S.flags['joined-junpei'] = true; G.S.unlocked.tartarus = true; } if (d > G.dayOf('12/21')) Object.assign(G.S.flags, { 'year-goes-on': true, 'route-R': true });
    G.S.tartarus.bosses = G.D.cal.ops.filter(o => G.dayOf(o.date) < d).map(o => o.op);
    ['wren', 'elizabeth'].forEach(id => { G.S.links[id] = { rank: 10, xp: 0, seen: [], rankDay: {}, push: 0, reversed: false }; });
    G.S.dailyLife = { seen: G.D.dailyLife.map(e => e.id), lastDay: 9999 }; G.S.lateNights = { seen: [], lastDay: 9999 }; G.S.runIns = { seen: G.D.runIns.map(e => e.id), lastDay: 9999, later: [] };
    Object.assign(G.S, copy(extra)); G.S.flags = { ...G.S.flags, ...(extra.flags || {}) };
    return G.S;
  }
  function step() {
    const c = document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
    const o = document.querySelector('.gs-title, .gs-summon.ready, .g-card, .g-actcard, .g-datecard'); if (o) { o.click(); return 'card'; }
    const ov = [...document.querySelectorAll('.g-overlay:not(.out)')].pop(); if (ov) { const b = ov.querySelector('[data-close], .g-btn.pink, button'); if (b) { b.click(); return 'overlay'; } }
    const g = document.querySelector('.gs:not(.out)'); if (g) { g.click(); return 'scene'; }
    const n = document.querySelector('#g-app [data-next]:not(:disabled)'); if (n) { n.click(); return 'next'; }
    return 'idle';
  }
  // The pre-calendar-change shape of a save: no yv (the old calendar), everything else as the game wrote it.
  const old = s => { const o = copy(s); delete o.yv; return o; };
  return { at, step, old, copy };
})();
"""

p = Page()
try:
    p.goto('femc-game.html')
    p.eval(HELPERS)

    # ── calendar ──
    cal = p.eval(r"""(()=>{const G=FemcGame,c=G.D.cal,i=md=>G.dayInfo(G.dayOf(md));
      return {end:c.end,END:G.END()===G.dayOf('3/7'),fin:c.finalStretch,feb11:i('2/11').type,feb11h:i('2/11').holiday,feb14:i('2/14').label,feb14dow:i('2/14').dow,feb3:i('2/3').label,
        grad:i('3/5').label,gradType:i('3/5').type,feb2:i('2/2').type,mar1:i('3/1').type,jan30:i('1/30').moon.full,jan30ops:i('1/30').ops.length,
        mar6:i('3/6').moon.full,mar6ops:i('3/6').ops.map(o=>o.op),mar3w:i('3/3').weather,mar6w:i('3/6').weather,feb20moon:i('2/20').moon.days,
        lastOp:c.ops[c.ops.length-1].date}})()""")
    ok(cal['end'] == '3/7' and cal['END'] and cal['fin'] == {'from': '2/1', 'graduation': '3/5', 'finale': '3/6', 'end': '3/7'}, f'the calendar ends on 3/7 ({cal})')
    ok(cal['feb11'] == 'off' and cal['feb11h'] == 'National Foundation Day' and cal['feb14'] == "Valentine's Day" and cal['feb14dow'] == 0 and cal['feb3'] == 'Setsubun', 'February: Setsubun, a holiday on 2/11, Valentine\'s on a Sunday')
    ok(cal['grad'] == 'Graduation' and cal['gradType'] == 'school' and cal['feb2'] == 'school' and cal['mar1'] == 'school', 'February is ordinary school; 3/5 is graduation')
    ok(cal['jan30'] and cal['jan30ops'] == 0 and cal['mar6'] and cal['mar6ops'] == ['finale'] and cal['lastOp'] == '3/6', '1/30 is a full moon with no operation; the finale is the full moon on 3/6')
    ok(cal['mar3w'] == 'snow' and cal['mar6w'] == 'snow' and cal['feb20moon'] == 14, 'snow on the snow night and the last train; the moon counts down to 3/6')
    sl = p.eval(r"""(()=>{const G=FemcGame,s=MA.at('1/31','late');const r1=G.sleep();const a=G.mdOf(G.S.day);MA.at('3/6','late');const r2=G.sleep();const b=G.mdOf(G.S.day);const r3=G.sleep();return {r1,a,r2,b,r3}})()""")
    ok(not sl['r1'].get('end') and sl['a'] == '2/1' and sl['b'] == '3/7' and sl['r3'].get('end'), f'sleeping through 1/31 goes into February; only 3/7 ends the year ({sl})')
    tartarus = p.eval("(()=>{const G=FemcGame;MA.at('2/9','evening');const a=G.tartarusOk?G.tartarusOk():null;MA.at('1/30','evening');const b=G.tartarusOk?G.tartarusOk():null;return {a,b}})()")
    if tartarus['a'] is not None:
        ok(tartarus['a'].get('ok') and tartarus['b'].get('why') == 'Full moon tonight', f'Tartarus is open in February, closed on the 1/30 full moon ({tartarus})')
    fill = p.eval(r"""(()=>{const G=FemcGame,P=G.packs?G.packs():{},withOpen=Object.entries(P).filter(([,x])=>x.openers&&Object.keys(x.openers).length);
      const ev=id=>G.D.events.find(e=>e.id===id)||null,val=Object.values(G.LINKS).filter(l=>l.holidays&&l.holidays['2/14']).map(l=>l.id);
      return {packs:withOpen.length,missing:withOpen.filter(([,x])=>!x.openers[2]||!x.openers[3]).map(([k])=>k),grad:ev('a6-graduation')&&[ev('a6-graduation').date,ev('a6-graduation').slot],
        moon:ev('a6-quiet-moon')&&[ev('a6-quiet-moon').date,ev('a6-quiet-moon').slot],val,
        routines:G.D.dailyLife.filter(e=>e.after&&G.dayOf(e.after)>=G.dayOf('1/31')).length,
        texts:(G.D.texts.ambient||[]).filter(t=>t.from&&G.dayOf(t.from)>=G.dayOf('1/31')).length}})()""")
    ok(fill['packs'] >= 10 and not fill['missing'], f"every job and club with monthly openers has February and March lines ({fill['packs']} packs; missing {fill['missing']})")
    ok(fill['grad'] == ['3/5', 'morning'] and fill['moon'] == ['1/30', 'late'], f"graduation (3/5) and the quiet full moon (1/30) are story events: {fill['grad']} {fill['moon']}")
    ok(len(fill['val']) >= 4 and fill['routines'] >= 5 and fill['texts'] >= 4, f"the February fill: Valentine's invites {fill['val']}, {fill['routines']} routines, {fill['texts']} texts")
    calview = p.eval(r"""(()=>{MA.at('3/2','after');FemcGameUI.run();FemcMenu.open('calendar');const t=document.querySelector('.g-cal')?.textContent||'';const n=document.querySelectorAll('.g-cal-grid i:not(.off)').length;FemcMenu.close();return {t:t.slice(0,40),n}})()""")
    ok('March' in calview['t'] and calview['n'] == 7, f'the menu calendar draws March up to the 7th ({calview})')

    # ── the post-solstice story on its new dates ──
    dates = p.eval(r"""(()=>{const G=FemcGame,e=id=>{const x=G.D.events.find(v=>v.id===id);return x?[x.date,x.slot]:null},w=G.LINKS.wren.ranks[9];
      return {visits:e('a6-elizabeth-visits'),verso:e('a6-verso'),wren10:[w.after],snow:e('a6-snow'),mirror:e('a6-mirror'),play:e('a6-playdate'),pre:e('lw-pre-last-train'),train:e('a6-last-train'),end:e('end-ending')}})()""")
    ok(dates == {'visits': ['1/9', 'after'], 'verso': ['2/20', 'after'], 'wren10': ['3/2'], 'snow': ['3/3', 'late'], 'mirror': ['3/4', 'evening'], 'play': ['3/5', 'after'],
                 'pre': ['3/6', 'early'], 'train': ['3/6', 'evening'], 'end': ['3/7', 'late']}, f'the last stretch is on its new dates: {dates}')
    due = p.eval(r"""(()=>{const G=FemcGame,out={};
      for(const [id,md,slot] of [['a6-verso','2/20','after'],['a6-snow','3/3','late'],['a6-mirror','3/4','evening'],['a6-graduation','3/5','morning'],['a6-playdate','3/5','after'],['lw-pre-last-train','3/6','early'],['a6-last-train','3/6','evening'],['end-ending','3/7','late'],['a6-quiet-moon','1/30','late']]){
        MA.at(md,slot);G.S.events=G.S.events.filter(x=>x!==id);const d=G.dueEvent(slot);const before=(MA.at(G.mdOf(G.dayOf(md)-1),slot),G.S.events=G.S.events.filter(x=>x!==id),G.dueEvent(slot));
        out[id]=[d&&d.kind==='event'?d.ev.id:null,before&&before.kind==='event'?before.ev.id:null];}
      MA.at('1/30','evening');const op=G.dueEvent('evening');out.jan30op=op?op.kind:null;
      MA.at('3/2','evening');G.S.links.wren={rank:9,xp:0,seen:[],rankDay:{},push:0,reversed:false};G.S.route.frags={R:9,S:8,H:8};const w=G.dueEvent('evening');out.wren=w&&w.kind==='link'?w.link.id:null;
      MA.at('3/1','evening');G.S.links.wren={rank:9,xp:0,seen:[],rankDay:{},push:0,reversed:false};G.S.route.frags={R:9,S:8,H:8};const w0=G.dueEvent('evening');out.wrenEarly=w0&&w0.kind==='link'?w0.link.id:null;
      return out})()""")
    for k in ['a6-verso', 'a6-snow', 'a6-mirror', 'a6-graduation', 'a6-playdate', 'lw-pre-last-train', 'a6-last-train', 'end-ending', 'a6-quiet-moon']:
        ok(due[k][0] == k and due[k][1] != k, f'{k} is due on its day and slot, not the day before ({due[k]})')
    ok(due['jan30op'] is None and due['wren'] == 'wren' and due['wrenEarly'] is None, f"no operation on 1/30; Wren's last rank waits for 3/2 ({due})")
    bad = p.eval("(()=>{const G=FemcGame;MA.at('12/22','early',{flags:{'route-bad':true,'year-goes-on':false,'route-R':false}});const a=G.endingDue();G.jumpToEnd();return {a,md:G.mdOf(G.S.day),slot:G.S.slot,name:G.endingName()}})()")
    ok(bad == {'a': True, 'md': '3/7', 'slot': 'late', 'name': 'the last stop'}, f'the bad ending jumps to the new last night ({bad})')
    no_jump = p.eval("(()=>{const G=FemcGame;MA.at('3/6','late');G.S.events.push('a6-last-train');const a=G.endingDue();MA.at('2/2','evening');G.S.events.push('a6-last-train');return [a,G.endingDue()]})()")
    ok(no_jump == [False, False], 'the finale on 3/6 leads to 3/7 normally (no jump); only an old save that played it early jumps')
    # Through the real UI: the last night plays the ending and the end screen names it, dated 3/7.
    p.goto('femc-game.html'); p.eval(HELPERS)
    p.eval("(()=>{const G=FemcGame;localStorage.removeItem('kg-femc-revamp-clears');MA.at('3/7','late',{flags:{'route-S':true,'route-R':false}});G.S.runId='march-test';G.S.events=G.S.events.filter(x=>x!=='end-ending');G.save();document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()")
    for _ in range(400):
        if p.eval("!!document.querySelector('.g-end')"):
            break
        p.eval('MA.step()'); time.sleep(0.12)
    p.wait("!!document.querySelector('.g-end')")
    es = p.eval("document.querySelector('.g-end').textContent")
    ok('3/7 · the last minutes' in es and 'ENDING · low tide' in es and p.eval("FemcGame.S.events.includes('end-ending')"), f'the ending plays on 3/7 through the UI and the end screen is dated 3/7 ({es[:90]})')
    shot('end-screen')
    p.eval("localStorage.removeItem('kg-femc-revamp-clears')")

    # ── migration: an old late-January save ──
    p.eval(r"""(()=>{const G=FemcGame,s=MA.at('1/28','early');
      // As the old calendar left it: the old 1/27 snow already played, the old Wren rank 10 (1/26) too.
      s.events.push('a6-snow');s.links.wren.rank=10;s.flags['op-hermit']=true;s.battleSave=null;
      localStorage.setItem('kg-femc-revamp',JSON.stringify(MA.old(s)));})()""")
    p.goto('femc-game.html'); p.eval(HELPERS)
    m = p.eval("(()=>{const G=FemcGame,S=G.S;return {yv:S.yv,md:G.mdOf(S.day),slot:S.slot,due:G.endingDue(),snow:S.events.includes('a6-snow'),train:S.events.includes('a6-last-train')}})()")
    ok(m == {'yv': 2, 'md': '1/28', 'slot': 'early', 'due': False, 'snow': True, 'train': False}, f'a late-January autosave loads on its own day and is not sent to an ending ({m})')
    # Play on with the real UI from 1/28 to 2/2: days pass, nothing ends, the old 1/30 finale doesn't come.
    p.eval("(()=>{const G=FemcGame;G.setSetting('text','instant');G.setSetting('dateCard',false);G.setSetting('quickClass',true);G.S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:9999};G.S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:9999,later:[]};G.S.lateNights={seen:[],lastDay:9999};G.save();document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()")
    seen_days, guard = set(), 0
    while guard < 3000:
        guard += 1
        st = p.eval("(()=>{const G=FemcGame;return {md:G.mdOf(G.S.day),end:!!document.querySelector('.g-end'),dh:!!document.querySelector('.g-dh'),slot:G.S.slot,go:!!document.querySelector('[data-go], .g-map, .g-dorm, .g-seg [data-next]')}})()")
        seen_days.add(st['md'])
        if st['end'] or st['md'] == '2/3':
            break
        # Free time is skipped (After School and the evening marked spent), so the walk moves through the calendar.
        p.eval(r"""(()=>{const G=FemcGame,S=G.S;if(document.querySelector('.gs:not(.out), .g-overlay:not(.out)'))return MA.step();
          const q=document.querySelector('#g-app [data-a]:not(:disabled)');if(q){q.click();return 'quiz'}
          if(['after','evening'].includes(S.slot)&&!S.spent[S.day+'-'+S.slot]){S.spent[S.day+'-'+S.slot]='skip';G.save();FemcGameUI.run();return 'skip'}
          return MA.step()})()""")
        time.sleep(0.1)
    st = p.eval("(()=>{const G=FemcGame;return {md:G.mdOf(G.S.day),end:!!document.querySelector('.g-end'),events:G.S.events.filter(e=>e.startsWith('a6-')||e==='end-ending')}})()")
    ok(st['md'] == '2/3' and not st['end'] and '1/31' in seen_days and '2/1' in seen_days and 'a6-last-train' not in st['events'] and 'end-ending' not in st['events'] and 'a6-quiet-moon' in st['events'],
       f'the old late-January save plays on through 1/30 (the quiet full moon) and 1/31 into February with the real UI, no ending ({st}; {sorted(seen_days)})')
    errs = p.console(); ok(not errs, f'no browser errors walking into February: {errs}')
    # Past the old finale: the ending is due and plays on the new last night.
    p.eval(r"""(()=>{const s=MA.at('1/30','late');s.events.push('a6-last-train');localStorage.setItem('kg-femc-revamp',JSON.stringify(MA.old(s)));})()""")
    p.goto('femc-game.html'); p.eval(HELPERS)
    fin = p.eval("(()=>{const G=FemcGame;const a=G.endingDue();FemcGameUI.run();return {a,md:G.mdOf(G.S.day),slot:G.S.slot}})()")
    ok(fin == {'a': True, 'md': '3/7', 'slot': 'late'}, f'a save past the old finale goes to its ending on the new last night ({fin})')
    # The ending already played on the old 1/31: it sits on the new last night, late, and sleeping ends the year.
    p.eval(r"""(()=>{const G=FemcGame,s=MA.at('1/31','late',{flags:{'route-R':true}});s.events.push('a6-last-train','end-ending');s.phase='title';localStorage.setItem('kg-femc-revamp',JSON.stringify(MA.old(s)));})()""")
    p.goto('femc-game.html'); p.eval(HELPERS)
    done = p.eval("(()=>{const G=FemcGame;const md=G.mdOf(G.S.day),slot=G.S.slot;const r=G.sleep();return {md,slot,end:!!r.end}})()")
    ok(done == {'md': '3/7', 'slot': 'late', 'end': True}, f'a save whose ending already played stays at the end ({done})')
    # Slots and backup codes migrate the same way; a Hermit-cleared save gets the Black Rose once.
    sc = p.eval(r"""(()=>{const G=FemcGame,s=MA.at('1/25','after');s.tartarus.bosses.push('hermit');s.battleSave={gear:{owned:{naginata1:1},eq:{}}};const raw=MA.old(s);
      localStorage.setItem('kg-femc-revamp-slot2',JSON.stringify({state:raw,at:Date.now(),label:'old'}));const okSlot=G.loadSlot(2);const a={md:G.mdOf(G.S.day),yv:G.S.yv,rose:G.S.battleSave.gear.owned.nag_rose,due:G.endingDue()};
      const code=G.exportCode?G.exportCode():null;let b=null;if(code&&G.importCode){const st=MA.old(G.S);st.battleSave.gear.owned={naginata1:1};st.yv=undefined;
        const c2=btoa(unescape(encodeURIComponent(JSON.stringify(st))));b=G.importCode(c2)?{md:G.mdOf(G.S.day),rose:G.S.battleSave.gear.owned.nag_rose}:'import failed'}
      return {okSlot,a,b}})()""")
    mid = p.eval(r"""(()=>{const G=FemcGame,s=MA.at('1/30','evening');s.handoff={id:'h-old',status:'pending',request:{kind:'scripted',op:'finale',script:'finale',segment:1}};
      const ok=G.importCode(btoa(unescape(encodeURIComponent(JSON.stringify({state:MA.old(s)})))));const r={ok,flag:!!G.S.flags['finale-early'],due:G.endingDue()};
      G.S.events.push('a6-last-train');r.after=G.endingDue();G.S.handoff=null;G.saveQuiet();return r})()""")
    ok(mid == {'ok': True, 'flag': True, 'due': False, 'after': True}, f'an old save in the middle of the old finale finishes it, then goes to its ending ({mid})')
    ok(sc['okSlot'] and sc['a'] == {'md': '1/25', 'yv': 2, 'rose': 1, 'due': False}, f'an old slot loads on its day, migrated, with the Black Rose for the Hermit it cleared ({sc})')

    # ── removed links ──
    gone = p.eval(r"""(()=>{const G=FemcGame,R=%s,txt=x=>JSON.stringify(x),B=FemcBuild,GA=FemcGacha,D=FEMC_BATTLE_DATA;
      const inLinks=R.filter(id=>G.LINKS[id]||(window.FEMC_GAME_LINKS||[]).some(l=>l.id===id));
      // Their ids as speakers / owners, or their names in prose (case-sensitive: 'cloud' is weather).
      const word=new RegExp('"(s|who|link|partner)":"('+R.join('|')+')"|\\b(Leon|Cloud|Noctis|Astarion|Shadowheart)\\b');
      const where={events:G.D.events.filter(e=>word.test(txt(e))).map(e=>e.id),runIns:G.D.runIns.filter(e=>word.test(txt(e))).map(e=>e.id),
        daily:G.D.dailyLife.filter(e=>word.test(txt(e))).map(e=>e.id),extras:Object.keys(window.FEMC_GAME_LINK_EXTRAS||{}).filter(id=>R.includes(id)),
        links:Object.values(G.LINKS).filter(l=>word.test(txt({ranks:l.ranks,hangouts:l.hangouts,afterMax:l.afterMax,christmas:l.christmas}))).map(l=>l.id),
        perks:B.PERKS.filter(p=>R.includes(p.link)).map(p=>p.id),bonds:(window.FemcBonds?.BONDS||[]).filter(b=>R.includes(b.partner)).map(b=>b.id),
        keys:GA.SETS.flatMap(s=>s.ids).filter(id=>R.includes(id)),texts:(G.D.texts.ambient||[]).filter(t=>word.test(txt(t))).map(t=>t.id)};
      return {inLinks,where,rose:D.gear.nag_rose.src,boss:B.BOSS_WEAPON.hermit,skills:['fangs_out','cross_slash','warding_bond','suplex'].every(k=>D.skills[k]),spray:!!D.items.aid_spray}})()""" % json.dumps(REMOVED))
    ok(not gone['inLinks'], f"no link or stub for them: {gone['inLinks']}")
    ok(not any(gone['where'].values()), f"no story event, run-in, routine, link scene, perk, bond, keychain or text names them: {gone['where']}")
    ok(gone['boss'] == 'nag_rose' and gone['rose'] == ['The Hermit (first clear)', 'Shuffle Time · Swords'], f"the Black Rose is the Hermit's first-clear drop now ({gone['rose']})")
    ok(gone['skills'] and gone['spray'], 'their MAX skills and the night kit keep their definitions for old saves')
    # An old save with their progress: loads, drops it, keeps what they gave.
    p.eval(r"""(()=>{const G=FemcGame,R=%s,s=MA.at('11/20','evening');
      R.forEach((id,i)=>{s.links[id]={rank:8+(i%%3),xp:3,seen:[0,1,2],rankDay:{},hung:2,push:0,reversed:false};s.met.push(id);s.registered.push(id);s.phone.threads[id]=[{from:id,t:'hey',d:100}];s.phone.unread[id]=1;});
      s.phone.pending.leon='x';s.phone.invite={link:'cloud',d:s.day,slot:'evening'};s.met.push('kiriko');s.links.kiriko={rank:6,xp:0,seen:[],rankDay:{},push:0,reversed:false};
      s.inventory.medicine=3;s.gear=['nag_rose'];s.fragments.push('strangers-suture-kit');s.route.frags.S=(s.route.frags.S||0)+1;
      s.battleSave={gear:{owned:{nag_rose:1,naginata1:1},eq:{solar:{weapon:'nag_rose'}}},items:{aid_spray:1,medicine:2},bonds:{leon:8,astarion:10,kiriko:6},bondsRev:['noctis'],bondsLove:['cloud'],bondGifts:['astarion-8'],
        learned:{solar:['suplex','fangs_out']},memories:['strangers-suture-kit']};
      localStorage.setItem('kg-femc-revamp',JSON.stringify(MA.old(s)));})()""" % json.dumps(REMOVED))
    p.goto('femc-game.html'); p.eval(HELPERS)
    old = p.eval(r"""(()=>{const G=FemcGame,S=G.S,R=%s,b=S.battleSave;
      return {links:R.filter(id=>S.links[id]),met:R.filter(id=>S.met.includes(id)),reg:R.filter(id=>S.registered.includes(id)),threads:R.filter(id=>S.phone.threads[id]||S.phone.unread[id]||S.phone.pending[id]),invite:S.phone.invite,
        bonds:Object.keys(b.bonds),rev:b.bondsRev,love:b.bondsLove,kiriko:S.links.kiriko&&S.links.kiriko.rank,metK:S.met.includes('kiriko'),
        kept:{medicine:S.inventory.medicine,gear:S.gear,owned:b.gear.owned,eq:b.gear.eq.solar.weapon,items:b.items,learned:b.learned,gifts:b.bondGifts,frag:S.fragments.includes('strangers-suture-kit'),mem:b.memories}}})()""" % json.dumps(REMOVED))
    ok(not old['links'] and not old['met'] and not old['reg'] and not old['threads'] and old['invite'] is None, f'their progress, meeting, registration and threads are dropped ({old})')
    ok(old['bonds'] == ['kiriko'] and old['rev'] == [] and old['love'] == [] and old['kiriko'] == 6 and old['metK'], f"the battle side's ranks for them are dropped; everyone else is untouched ({old['bonds']})")
    k = old['kept']
    ok(k['medicine'] == 3 and k['gear'] == ['nag_rose'] and k['owned'].get('nag_rose') == 1 and k['eq'] == 'nag_rose' and k['items'].get('aid_spray') == 1 and k['learned'] == {'solar': ['suplex', 'fangs_out']}
       and k['frag'] and k['mem'] == ['strangers-suture-kit'] and k['gifts'] == ['astarion-8'], f'what they gave stays: items, the Black Rose (equipped), learned skills, the Suture Kit ({k})')
    # The menus still open on that save (Links, Bonds, Equipment, Collection), with nobody missing a name.
    menus = p.eval(r"""(async()=>{const out={};for(const t of ['links','bonds','equip','collection','party']){FemcMenu.open(t);await new Promise(r=>setTimeout(r,120));const el=document.querySelector('.g-fm-ov:not(.out)')||document.querySelector('.g-overlay:not(.out)');out[t]=!!el&&!/undefined|NaN/.test(el.textContent);FemcMenu.close();}
      FemcGameUI.openPhone&&FemcGameUI.openPhone();await new Promise(r=>setTimeout(r,120));out.phone=!/undefined/.test(document.body.textContent);document.querySelectorAll('.g-overlay').forEach(x=>x.remove());return out})()""")
    ok(all(menus.values()), f'Links, Bonds, Equipment, Collection, Party and the phone open on the old save ({menus})')
    # The shared Compendium: no v1 save, their pages are hidden; with a v1 save, they're there and open from v1's progress only.
    comp()
    c1 = p.eval("(()=>{const R=%s;return {listed:[...document.querySelectorAll('#list button')].map(b=>b.dataset.id||b.textContent).filter(t=>R.some(id=>String(t).toLowerCase().includes(id))).length,entries:(window.FEMC_COMPENDIUM||[]).filter(e=>R.includes(e.id)).map(e=>[e.id,!!e.v1only,!!e.secret])}})()" % json.dumps(REMOVED))
    ok(len(c1['entries']) == 5 and all(e[1] and e[2] for e in c1['entries']) and c1['listed'] == 0, f'revamp-only player: their v1 pages stay hidden ({c1})')
    p.eval("localStorage.setItem('kg-femc-game',JSON.stringify({met:['leon','cloud'],past:{met:['noctis']}}))")
    comp()
    c2 = p.eval("(()=>{const E=window.FEMC_COMPENDIUM,f=id=>E.find(e=>e.id===id);return {secret:['leon','cloud','noctis','astarion','shadowheart'].map(id=>!!f(id).secret),open:['leon','noctis','astarion'].map(id=>window.femcCompendiumOpen(f(id)))}})()")
    ok(c2 == {'secret': [False] * 5, 'open': [True, True, False]}, f'v1 player: their pages are listed as before and open from v1 progress ({c2})')
    p.eval("localStorage.removeItem('kg-femc-game')")
    p.eval("localStorage.setItem('kg-femc-revamp',JSON.stringify({v:1,started:true,met:['astarion'],registered:['astarion']}))")
    comp()
    c3 = p.eval("window.femcCompendiumOpen(window.FEMC_COMPENDIUM.find(e=>e.id==='astarion'))")
    ok(c3 is False, 'a revamp save never opens a v1-only page')
    p.eval("localStorage.removeItem('kg-femc-revamp')")

    errs = p.console()
    ok(not errs, f'no browser errors: {errs}')
    print(json.dumps({'checks': len(checks), 'screenshots': str(OUT)}, indent=1))
    print('femc_march: all', len(checks), 'checks passed')
finally:
    p.close()
