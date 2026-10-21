"""The polish batch (playtest notes 22, 24, 39, 70, 72), in an isolated headless Chrome (never the player's saves).

Checks: texts arriving one at a time (banner + chime, typing bubble, pop) and Solar's reply typing out and sending (whoosh),
with Skip, Instant text speed, Auto pace and reduced motion; the same typing in a scene's phone lines; group chat sender
names in every multi-person thread; Read all; the social stat level-up (sun) firing on a rank-up, waiting for a scene to end,
and the P5R-style stats screen (with five stats dropped in); the P5X-style Go Out menu (hover / focus / pad descriptions,
who's there today with portraits, touch, and an activity still reviewed and spending the slot exactly as before); the softened
pink slashes; screenshots at 1000x486, 375x812 and 1440x900; no browser errors.

    python3 tests/femc_polish.py [--screenshots /absolute/dir]
"""
import base64, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-polish-'))
OUT.mkdir(parents=True, exist_ok=True)
SIZES = [('laptop', 1000, 486), ('phone', 375, 812), ('desktop', 1440, 900)]
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


p = Page()


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})
    p.ws.call('Emulation.setTouchEmulationEnabled', {'enabled': mobile, 'maxTouchPoints': 5} if mobile else {'enabled': False})


def motion(reduce):
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce' if reduce else 'no-preference'}]})


def shot(name):
    # The site skin's own midnight splash (femc-eggs.js, once a night at 00:00 local time) is not this batch's; keep it out of frame.
    p.eval("document.querySelectorAll('.femc-dh').forEach(x=>x.remove());true")
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,450)))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def key(k, code=None):
    vk = {'Enter': 13, 'ArrowRight': 39, 'ArrowDown': 40, 'Escape': 27, ' ': 32}.get(k, 0)
    base = {'key': k, 'code': code or k, 'windowsVirtualKeyCode': vk}
    p.ws.call('Input.dispatchKeyEvent', {'type': 'keyDown', **base, **({'text': '\r'} if k == 'Enter' else {})})
    p.ws.call('Input.dispatchKeyEvent', {'type': 'keyUp', **base})


def center(sel):
    return p.eval(f"(()=>{{const r=document.querySelector({json.dumps(sel)}).getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2]}})()")


def hover(sel):
    x, y = center(sel)
    p.ws.call('Input.dispatchMouseEvent', {'type': 'mouseMoved', 'x': x, 'y': y})


def clear():
    p.eval("document.querySelectorAll('.g-overlay,.gs,.g-statup,.g-banner,.femc-dh').forEach(x=>x.remove());document.documentElement.classList.remove('g-in-scene');true")


def fresh(day='9/14', slot='lunch'):
    p.eval(f"""(()=>{{const G=FemcGame;G.newGame();G.S.phase='play';G.S.day=G.dayOf('{day}');G.S.slot='{slot}';
      G.setSetting('text','normal');G.setSetting('auto','off');G.setSetting('music',0);G.setSetting('dateCard',false);
      ['arrived-hanni','arrived-hyein','arrived-jihoon','arrived-crew','arrived-cherry','joined-junpei'].forEach(f=>G.S.flags[f]=true);
      G.S.phone={{threads:{{}},unread:{{}},done:G.D.texts.texts.map(t=>t.id),pending:{{}},invite:null,lastInvite:99}};G.save();return true}})()""")


def thread_from(tid):
    """Put one texts.js text into the phone as unread (exactly what deliverTexts does), without its toast."""
    p.eval(f"""(()=>{{const G=FemcGame,t=G.D.texts.texts.find(x=>x.id==='{tid}');G.S.phone.threads[t.thread]=(G.S.phone.threads[t.thread]||[]).concat(t.msgs.map((m,i)=>({{...m,d:G.S.day,slot:G.S.slot,seq:(G.S.phone.sequence=(G.S.phone.sequence||0)+1)}})));
      G.S.phone.unread[t.thread]=(G.S.phone.unread[t.thread]||0)+t.msgs.length;if(t.reply)G.S.phone.pending[t.thread]=t.id;G.save();return true}})()""")


def timeline(limit=20):
    """Poll the open conversation: (seconds, bubbles, typing bubble?, compose shown?, draft text) until it stops playing."""
    out, t0 = [], time.time()
    while time.time() - t0 < limit:
        st = p.eval("(()=>{const o=document.querySelector('.g-phone-ov:not(.out)');if(!o)return null;return {n:o.querySelectorAll('.g-ph-msg').length,typing:!!o.querySelector('.g-ph-typing'),compose:!o.querySelector('.g-ph-compose').hidden,draft:o.querySelector('.g-ph-draft').textContent,playing:o.classList.contains('g-ph-playing'),replies:o.querySelectorAll('.g-ph-reply button').length}})()")
        out.append((round(time.time() - t0, 2), st))
        if st and not st['playing']: break
        time.sleep(0.05)
    return out


try:
    size(1440, 900)
    motion(False)
    # The site skin on, as when Kat comes in from the hub: its full-screen stripes must not cover this page any more.
    p.goto('femc-game.html')
    p.eval("localStorage.setItem('kg-femc','on');true")
    p.goto('femc-game.html')
    ok(p.eval("document.documentElement.classList.contains('femc')"), 'skin on for the slash check')
    ok(p.eval("getComputedStyle(document.body,'::after').display==='none'"), 'site skin stripes are off over the game (HUD and text boxes clear)')
    ok(p.eval("(()=>{const s=getComputedStyle(document.querySelector('.g-stripes'));return parseFloat(s.top)>=80&&parseFloat(s.left)>innerWidth*.3&&/1px/.test(s.backgroundImage)})()"), 'stage slashes are thin and kept to the lower right, below the HUD')

    # ── 1. Texts: banner + chime, then one bubble at a time ──
    fresh()
    p.eval("FemcGameUI.run();true")
    p.eval("FemcGame.S.slot='lunch';FemcGame.S.phone.done=FemcGame.S.phone.done.filter(x=>x!=='t-0914-sisters');FemcGame.deliverTexts();true")
    p.wait("!!document.querySelector('.g-banner')", 5)
    ban = p.eval("document.querySelector('.g-banner').textContent")
    ok('hanni, hyein' in ban and 'Hyein:' in ban and 'sol. SOL.' in ban, 'text banner names the chat and the sender: ' + ban)
    ok('notify' in p.eval("FemcGameUI.sfxLog()"), 'notification chime on a new text')
    shot('banner-desktop')
    p.eval("document.querySelector('.g-banner').click();true")
    p.wait("!!document.querySelector('.g-phone-ov:not(.out)')", 5)
    ok(p.eval("document.querySelector('.g-phone-ov .g-ph-top b').textContent==='hanni, hyein'"), 'banner opens its conversation')
    ok(p.eval("!!document.querySelector('.g-ph-typing') && document.querySelectorAll('.g-ph-msg').length===0 && !document.querySelector('.g-ph-reply button')"), 'typing bubble first, nothing shown yet, no answers yet')
    tl = timeline()
    counts = [s['n'] for _, s in tl if s]
    ok(counts[-1] == 3 and all(b - a in (0, 1) for a, b in zip(counts, counts[1:])), f'bubbles arrive one at a time: {sorted(set(counts))}')
    firsts = [next(t for t, s in tl if s and s['n'] >= k) for k in (1, 2, 3)]
    ok(all(b - a >= 0.6 for a, b in zip(firsts, firsts[1:])) and firsts[0] >= 0.4, f'readable pace between bubbles: {firsts}')
    ok(all(any(s and s['typing'] and s['n'] == k for _, s in tl) for k in (0, 1, 2)), 'a typing bubble before every incoming message')
    ok(tl[-1][1]['replies'] == 2, 'answers appear once the texts are in')
    ok(p.eval("FemcGameUI.sfxLog().filter(x=>x==='pop').length")>=3, 'a soft pop per incoming bubble')
    ok(p.eval("!FemcGame.S.phone.unread.sisters && FemcGame.unread()===0 && !document.querySelector('.g-menu [data-ui=phone] em')"), 'reading clears the badge')
    names = p.eval("[...document.querySelectorAll('.g-phone-ov .g-ph-msg.group b')].map(b=>b.firstChild.textContent.trim())")
    ok(names == ['Hyein', 'Hanni', 'Hyein'], f'sisters chat names its senders: {names}')
    ok(p.eval("![...document.querySelectorAll('.g-phone-ov .g-ph-msg')].some(m=>/^(Hyein|Hanni)?(hyein|hanni): /.test(m.textContent))"), 'the handle moves out of the bubble')
    shot('phone-thread-desktop')
    # Solar answers: it types out in the compose bar, sends with a whoosh, then the replies arrive with typing bubbles.
    p.eval("document.querySelector('.g-ph-reply button').click();true")
    tl = timeline()
    drafts = [s['draft'] for _, s in tl if s and s['compose']]
    full = p.eval("FemcGame.D.texts.texts.find(t=>t.id==='t-0914-sisters').reply[0].t")
    ok(len(drafts) >= 3 and any(0 < len(d) < len(full) for d in drafts) and max(drafts, key=len) == full, 'Solar\'s reply types out in the compose bar')
    log = p.eval("FemcGameUI.sfxLog()")
    ok('whoosh' in log and log.index('whoosh') < len(log) - 1, 'sends with a whoosh, then the answers pop in')
    final = p.eval("[...document.querySelectorAll('.g-phone-ov .g-ph-msg')].map(m=>m.className.includes('me')?'me':'them')")
    ok(final == ['them', 'them', 'them', 'me', 'them', 'them'], f'thread order after the reply: {final}')
    ok(any(s and s['typing'] and s['n'] == 4 for _, s in tl), 'typing bubble before the friend answers back')
    ok(p.eval("FemcGame.S.phone.threads.sisters.length===6 && !FemcGame.S.phone.pending.sisters"), 'the save already holds the whole exchange')

    # Skip: a tap, or the Skip button, shows everything still on its way at once.
    clear(); fresh(); thread_from('t-0925-searchparty')
    p.eval("FemcGameUI.openPhone('searchparty');true")
    p.wait("!!document.querySelector('.g-ph-typing')", 3)
    p.eval("document.querySelector('.g-phone-ov [data-skip]').click();true")
    ok(p.eval("document.querySelectorAll('.g-phone-ov .g-ph-msg, .g-phone-ov .g-ph-notice').length===7 && !document.querySelector('.g-ph-typing') && document.querySelectorAll('.g-ph-reply button').length===2"), 'Skip fast-forwards to the end and offers the answers')
    # Group chat notices and names (searchparty).
    ok(p.eval("[...document.querySelectorAll('.g-phone-ov .g-ph-notice')].map(n=>n.textContent).join('|')").startswith('hanni added jihoon and you'), 'chat notices show as notices')
    sp = p.eval("[...document.querySelectorAll('.g-phone-ov .g-ph-msg.group b')].map(b=>b.firstChild.textContent.trim())")
    ok(sp == ['Jihoon', 'Hyein', 'Jihoon', 'Hyein', 'Jihoon'], f'search party names: {sp}')
    # Keyboard: Enter while it plays fast-forwards too.
    clear(); fresh(); thread_from('t-1007-sisters')
    p.eval("FemcGameUI.openPhone('sisters');true")
    p.wait("!!document.querySelector('.g-ph-typing')", 3)
    time.sleep(0.1)
    key('Enter')
    p.wait("!document.querySelector('.g-phone-ov.g-ph-playing')", 3)
    ok(p.eval("document.querySelectorAll('.g-phone-ov .g-ph-msg').length===4"), 'Enter fast-forwards the conversation')

    # Instant text speed: everything at once (the pace other tests rely on); Slow takes longer than Normal; Auto Slow too.
    def play_time(text, auto='off'):
        clear(); fresh(); thread_from('t-1106-sisters')
        p.eval(f"FemcGame.setSetting('text','{text}');FemcGame.setSetting('auto','{auto}');FemcGameUI.openPhone('sisters');true")
        t0 = time.time()
        p.wait("!document.querySelector('.g-phone-ov.g-ph-playing') && document.querySelectorAll('.g-phone-ov .g-ph-msg').length===4", 20)
        return time.time() - t0
    clear(); fresh(); thread_from('t-1106-sisters')
    p.eval("FemcGame.setSetting('text','instant');FemcGameUI.openPhone('sisters');true")
    ok(p.eval("document.querySelectorAll('.g-phone-ov .g-ph-msg').length===4 && !document.querySelector('.g-ph-typing') && document.querySelectorAll('.g-ph-reply button').length===2"), 'Instant text speed shows the texts at once')
    tn, ts, tf, ta = play_time('normal'), play_time('slow'), play_time('fast'), play_time('normal', 'slow')
    ok(tf < tn < ts and ta > tn, f'text speed and Auto set the pace (fast {tf:.1f}s < normal {tn:.1f}s < slow {ts:.1f}s; Auto Slow {ta:.1f}s)')
    p.eval("FemcGame.setSetting('text','normal');FemcGame.setSetting('auto','off');true")
    # Reduced motion: no typing bubbles or slide-ins; the texts are just there.
    motion(True)
    clear(); fresh(); thread_from('t-1106-sisters')
    p.eval("FemcGameUI.openPhone('sisters');true")
    ok(p.eval("document.querySelectorAll('.g-phone-ov .g-ph-msg').length===4 && !document.querySelector('.g-ph-typing') && !document.querySelector('.g-ph-msg.in')"), 'reduced motion shows the texts without animation')
    clear()
    p.eval("FemcGame.toast('text','x',{thread:'sisters',from:'hyein',msg:'hyein: hi',count:1});true")
    ok(p.eval("document.querySelector('.g-banner')?.classList.contains('calm')"), 'reduced motion: the banner fades instead of sliding')
    motion(False)

    # Scene phone lines: a typing bubble before incoming texts (a tap shows it), Solar's sends at once; Skip skips the wait.
    clear(); fresh()
    p.eval("""window.sceneDone=0;FemcScene.play({scene:[{phone:[{from:'hyein',t:'are u up'},{from:'solar',t:'no'},{from:'hyein',t:'liar'}],contact:'hyein'}],place:'Iwatodai Dorm',time:'Evening',onDone:()=>{sceneDone++}});true""")
    p.wait("!!document.querySelector('.gs-typing')", 3)
    ok(p.eval("document.querySelectorAll('.gs-msg:not(.gs-typing)').length===0"), 'scene texts: typing bubble first')
    p.wait("document.querySelectorAll('.gs-msg:not(.gs-typing)').length===1 && !document.querySelector('.gs-typing')", 3)
    p.eval("document.querySelector('.gs:not(.out)').click();true")
    ok(p.eval("document.querySelectorAll('.gs-msg.me').length===1 && FemcGameUI.sfxLog().at(-1)==='whoosh'"), 'scene: Solar\'s text sends with a whoosh')
    p.eval("document.querySelector('.gs:not(.out)').click();true")
    ok(p.eval("!!document.querySelector('.gs-typing')"), 'scene: typing again before the answer')
    p.eval("document.querySelector('.gs:not(.out)').click();true")
    ok(p.eval("document.querySelectorAll('.gs-msg:not(.gs-typing)').length===3 && !document.querySelector('.gs-typing')"), 'scene: a tap shows a text still being typed')
    p.eval("document.querySelector('.gs:not(.out)').click();true")
    p.wait("sceneDone===1", 5)
    p.eval("""window.sceneDone=0;FemcScene.play({scene:[{phone:[{from:'hyein',t:'one'},{from:'hanni',t:'two'}],contact:'x'},{n:'After.'}],place:'Iwatodai Dorm',time:'Evening',onDone:()=>{sceneDone++}});true""")
    p.eval("document.querySelector('.gs:not(.out) [data-t=skip]').click();true")
    p.wait("sceneDone===1", 5)
    ok(True, 'scene: Skip runs through texts without waiting on typing')
    clear()

    # ── 2. Group sender names in every multi-person thread ──
    fresh()
    p.eval("FemcGame.setSetting('text','instant');true")
    groups = p.eval("FemcGame.D.texts.groups")
    ok(set(groups) >= {'sees', 'sisters', 'searchparty', 'hateclub'}, f'group threads listed: {groups}')
    multi = p.eval("[...new Set(FemcGame.D.texts.texts.filter(t=>new Set(t.msgs.concat(...(t.reply||[]).map(r=>r.then||[])).map(m=>m.from).filter(f=>f!=='solar')).size>1).map(t=>t.thread))]")
    ok(set(multi) <= set(groups), f'every multi-person thread is a group: {multi}')
    for g in groups:
        for t in p.eval(f"FemcGame.D.texts.texts.filter(t=>t.thread==='{g}').map(t=>t.id)"):
            thread_from(t)
        p.eval(f"FemcGame.S.phone.unread={{}};FemcGameUI.openPhone('{g}');true")
        r = p.eval("""(()=>{const ms=[...document.querySelectorAll('.g-phone-ov:not(.out) .g-ph-msg.them')];let prev=null,ok=true,named=0;
          for(const m of ms){const b=m.querySelector(':scope > b');const who=b?b.firstChild.textContent.trim():null;if(b)named++;
            if(prev===null&&!b)ok=false;prev=m;}
          return {ok,named,n:ms.length,leak:ms.filter(m=>/^[a-z0-9_.]+: /i.test([...m.childNodes].filter(c=>c.nodeType===3).map(c=>c.textContent).join(''))).length}})()""")
        ok(r['ok'] and r['named'] >= 1 and r['leak'] == 0, f'{g}: sender names on group bubbles, no handle left in the text ({r})')
        if g == 'hateclub':
            hc = p.eval("[...document.querySelectorAll('.g-phone-ov:not(.out) .g-ph-msg.group b')].slice(0,3).map(b=>b.textContent.trim())")
            ok(hc[0].startswith('Junkyu') and 'junkyute' in hc[0], f'hate club shows names with handles: {hc}')
        clear()
    # A one-on-one thread stays unlabelled.
    thread_from('t-0917-hyein')
    p.eval("FemcGameUI.openPhone('hyein');true")
    ok(p.eval("!document.querySelector('.g-phone-ov:not(.out) .g-ph-msg b')"), 'one-on-one chats show no sender names')
    clear()

    # ── 3. Read all ──
    fresh()
    p.eval("FemcGame.setSetting('text','instant');true")
    for t in ['t-0914-sisters', 't-0917-hyein', 't-0924-jihoon', 't-0925-searchparty']:
        thread_from(t)
    p.eval("FemcGameUI.run();FemcGameUI.openPhone();true")
    before = p.eval("[...document.querySelectorAll('.g-phone-ov:not(.out) .g-ph-row')].map(r=>r.dataset.th)")
    ok(before[0] == 'searchparty', f'newest thread on top: {before}')
    ok(p.eval("FemcGame.unread()===16 && !document.querySelector('[data-readall]').disabled && document.querySelector('.g-ph-bar').textContent.includes('16 unread')"), 'Read all offered with the unread count')
    shot('phone-list-desktop')
    p.eval("document.querySelector('[data-readall]').click();true")
    after = p.eval("[...document.querySelectorAll('.g-phone-ov:not(.out) .g-ph-row')].map(r=>r.dataset.th)")
    ok(p.eval("FemcGame.unread()===0 && !document.querySelector('.g-ph-row.unread') && !document.querySelector('.g-ph-row em:not(.g-ph-due)') && document.querySelector('[data-readall]').disabled && !document.querySelector('.g-menu [data-ui=phone] em')"), 'Read all clears every badge and the HUD count')
    ok(after == before, 'order unchanged: newest still on top')
    ok(p.eval("JSON.parse(localStorage.getItem('kg-femc-revamp')).phone.unread") == {}, 'Read all is saved')
    ok(p.eval("document.querySelectorAll('.g-ph-due').length===4 && Object.keys(FemcGame.S.phone.pending).length===4"), 'answers still waiting keep a Reply tag')
    clear()

    # ── 4. Social stat level-up (sun) and the stats screen ──
    fresh('5/1', 'after')
    p.eval("FemcGameUI.goOut('after');true")
    p.eval("FemcGame.addStat('charm',20,true);true")
    p.wait("!!document.querySelector('.g-statup')", 3)
    su = p.eval("({name:document.querySelector('.g-su-name').textContent,to:document.querySelector('.g-su-rank b').textContent,from:document.querySelector('.g-su-rank s').textContent,sun:!!document.querySelector('.g-su-sunbox svg.g-sun .g-sun-rays'),pips:document.querySelectorAll('.g-su-pips .g-sun').length,on:document.querySelectorAll('.g-su-pips .g-sun.on').length,new:document.querySelectorAll('.g-su-pips .g-sun.new').length,anim:getComputedStyle(document.querySelector('.g-su-sunbox .g-sun')).animationName})")
    ok(su['name'] == 'Charm' and su['to'] == 'Unpolished' and su['from'] == 'Plain', f'level-up names the stat and its new rank: {su}')
    ok(su['sun'] and su['pips'] == 6 and su['on'] == 2 and su['new'] == 1 and su['anim'] != 'none', 'a sun, not a star; rank pips with the new one lit; animated')
    time.sleep(1.1)  # let the card finish (it moves on by itself after ~4.8 s)
    shot('levelup-desktop')
    key('Enter')
    p.wait("!document.querySelector('.g-statup')", 3)
    ok(True, 'Enter dismisses the level-up')
    # During a scene the card waits until the scene ends.
    p.eval("""window.sceneDone=0;FemcScene.play({scene:[{n:'One.'},{n:'Two.'}],place:'Iwatodai Dorm',time:'Evening',onDone:()=>{sceneDone++}});FemcGame.addStat('courage',20,true);true""")
    time.sleep(0.8)
    ok(p.eval("!document.querySelector('.g-statup')"), 'level-up waits while a scene plays')
    p.eval("document.querySelector('.gs:not(.out) [data-t=skip]').click();true")
    p.wait("sceneDone===1", 5)
    p.wait("!!document.querySelector('.g-statup')", 3)
    ok(p.eval("document.querySelector('.g-su-name').textContent==='Courage'"), 'and shows right after it')
    p.eval("document.querySelector('.g-statup').click();true")
    p.wait("!document.querySelector('.g-statup')", 3)
    motion(True)
    p.eval("FemcGame.addStat('academics',25,true);true")
    p.wait("!!document.querySelector('.g-statup')", 3)
    ok(p.eval("document.querySelector('.g-statup').classList.contains('calm') && getComputedStyle(document.querySelector('.g-su-sunbox .g-sun')).animationName==='none'"), 'reduced motion: the level-up appears without animation')
    key('Escape')
    p.wait("!document.querySelector('.g-statup')", 3)
    motion(False)
    # The stats screen: every stat's rank name, suns and meter; a radar with one corner per stat.
    p.eval("FemcGameUI.openStatus('stats');true")
    p.wait("!!document.querySelector('.g-ss')", 3)
    ss = p.eval("({cards:[...document.querySelectorAll('.g-ss-stat')].map(c=>({k:c.dataset.stat,rank:c.querySelector('.g-ss-rank').textContent,suns:c.querySelectorAll('.g-ss-suns .g-sun.on').length,w:c.querySelector('.g-ss-meter i').style.width,next:c.querySelector('.g-ss-next').textContent})),corners:document.querySelector('.g-ss-radar .val').getAttribute('points').trim().split(/\\s+/).length})")
    want = p.eval("Object.keys(FemcGame.D.stats.stats).map(k=>({k,rank:FemcGame.statRankName(k),suns:FemcGame.statRank(k)}))")
    ok([{'k': c['k'], 'rank': c['rank'], 'suns': c['suns']} for c in ss['cards']] == want and ss['corners'] == len(want), f'stats screen shows each stat\'s rank and progress: {ss}')
    ok(all(c['next'].startswith('Next: ') for c in ss['cards']) and all(c['w'].endswith('%') for c in ss['cards']), 'each stat shows its meter and next rank')
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'stats-{name}')
        ok(p.eval("document.documentElement.scrollWidth<=innerWidth && document.querySelector('.g-fm-body').scrollWidth<=document.querySelector('.g-fm-body').clientWidth+1"), f'stats screen fits at {w}x{h}')
    size(1440, 900)
    p.eval("FemcMenu.close();true")
    time.sleep(0.3)
    # Five P5 stats drop in with no code changes (data only), then the real three come back.
    five = p.eval("""(()=>{const G=FemcGame,keep=G.D.stats.stats,keepS={...G.S.stats};
      const R=['Rank 1','Rank 2','Rank 3','Rank 4','Rank 5'],at=[0,10,25,45,70];
      G.D.stats.stats={knowledge:{name:'Knowledge',color:'#7fb6ff',ranks:R,at},courage:{name:'Courage',color:'#ffd36b',ranks:R,at},proficiency:{name:'Proficiency',color:'#7dffc0',ranks:R,at},charm:{name:'Charm',color:'#ff8cc0',ranks:R,at},kindness:{name:'Kindness',color:'#c9a0ff',ranks:R,at}};
      Object.keys(G.D.stats.stats).forEach(k=>{G.S.stats[k]=G.S.stats[k]||12});
      FemcMenu.open('status');const n=document.querySelectorAll('.g-ss-stat').length,c=document.querySelector('.g-ss-radar .val').getAttribute('points').trim().split(/\\s+/).length,pips=document.querySelectorAll('.g-ss-stat')[0].querySelectorAll('.g-ss-suns .g-sun').length;
      return {n,c,pips,restore(){}}})()""")
    ok(five['n'] == 5 and five['c'] == 5 and five['pips'] == 5, f'five P5 stats drop in: a pentagon and five cards ({five})')
    shot('stats-five-desktop')
    p.eval("FemcGame.addStat('kindness',20,true);true")
    p.eval("FemcMenu.close();true")
    p.wait("!!document.querySelector('.g-statup')", 3)
    ok(p.eval("document.querySelector('.g-su-name').textContent==='Kindness' && document.querySelectorAll('.g-su-pips .g-sun').length===5"), 'the level-up works for a new stat too')
    p.eval("document.querySelector('.g-statup').click();true")
    p.goto('femc-game.html')  # back to the real three stats

    # ── 5. Go Out (P5X): cards with art, descriptions on hover / focus / pad, who's there, touch, the slot spent as before ──
    found = p.eval("""(()=>{const G=FemcGame;G.newGame();G.S.phase='play';G.setSetting('text','instant');G.setSetting('music',0);G.setSetting('dateCard',false);
      for(let d=G.dayOf('4/20');d<G.dayOf('7/1');d++){G.S.day=d;G.S.slot='after';
        if(G.dayInfo().type!=='school')continue;
        for(const a of G.D.places.areas){const ls=G.linksAt(a.id,'after').filter(l=>G.linkStatus(l,d,'after').ok);
          if(ls.length&&a.id!=='mall'){return {day:d,area:a.id,link:ls[0].id,short:ls[0].short}}}}
      return null})()""")
    ok(found, 'a day with someone free somewhere')
    p.eval(f"FemcGame.S.day={found['day']};FemcGame.S.met.push('{found['link']}');FemcGame.S.yen=10000;FemcGame.S.condition='good';FemcGame.S.spent={{}};FemcGame.save();FemcGameUI.run();FemcGameUI.goOut('after');true")
    areas = p.eval("[...document.querySelectorAll('.g-px-card')].map(c=>c.dataset.area)")
    want_areas = p.eval("FemcGame.D.places.areas.filter(a=>a.slots.includes('after')&&!(a.schoolOnly&&FemcGame.dayInfo().type!=='school')).map(a=>a.id)")
    ok(areas == want_areas, f'one card per area: {areas}')
    ok(p.eval("[...document.querySelectorAll('.g-px-card')].every(c=>/url\\(/.test(c.style.getPropertyValue('--pic')))"), 'every card carries its place art')
    ok(p.eval(f"!!document.querySelector('.g-px-card[data-area={found['area']}] .g-px-faces img')"), 'who\'s there today: a met link\'s portrait on the area card')
    hover('.g-px-card[data-area=shrine]')
    info = p.eval("({h:document.querySelector('.g-px-info h2').textContent,t:document.querySelector('.g-px-info').textContent})")
    ok(info['h'] == 'Naganaki Shrine' and 'fortunes' in info['t'] and 'Make a wish' in info['t'] and 'Courage +' in info['t'], 'hover: the panel describes the place and what you\'d get')
    hover(f".g-px-card[data-area={found['area']}]")
    ok(p.eval(f"document.querySelector('.g-px-info .g-px-who')?.textContent.includes({json.dumps(found['short'])}) && !!document.querySelector('.g-px-info .g-px-who img')"), 'the panel lists who\'s there with portraits')
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'goout-{name}')
        ok(p.eval("document.documentElement.scrollWidth<=innerWidth && document.querySelector('#g-main').scrollWidth<=document.querySelector('#g-main').clientWidth+1"), f'Go Out fits at {w}x{h}')
    size(1440, 900)
    # Keyboard: focus moves card to card and the panel follows; a pad's D-pad does the same.
    p.eval("document.querySelector('.g-px-card').focus();true")
    key('ArrowRight')
    ok(p.eval("document.activeElement.dataset.area===[...document.querySelectorAll('.g-px-card')][1].dataset.area && document.querySelector('.g-px-info h2').textContent===FemcGame.areaById(document.activeElement.dataset.area).name"), 'arrow keys move between cards and the description follows focus')
    p.eval("(()=>{const e=new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true,cancelable:true});e.fromPad=true;document.activeElement.dispatchEvent(e)})();true")
    ok(p.eval("document.activeElement.dataset.area===[...document.querySelectorAll('.g-px-card')][2].dataset.area && document.querySelector('.g-px-info h2').textContent===FemcGame.areaById(document.activeElement.dataset.area).name"), 'a pad\'s D-pad moves too')
    p.eval("document.querySelector('.g-px-card[data-area=mall]').focus();true")
    key('Enter')
    p.wait("!!document.querySelector('.g-areaview')", 3)
    ok(p.eval("document.querySelector('.g-areaview h1').textContent==='Paulownia Mall'"), 'Enter opens the area')
    ok(p.eval("[...document.querySelectorAll('.g-pcard[data-act]')].every(c=>/url\\(/.test(c.style.getPropertyValue('--pic')))"), 'place cards carry their own art')
    hover('[data-act=chagall]')
    info = p.eval("document.querySelector('.g-px-info').textContent")
    ok('Pheromone Coffee' in info and 'Charm +2' in info and 'Costs ¥600' in info and 'Uses this time slot' in info, 'hover a place: what it is, what you\'d get, cost and time')
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'area-{name}')
        ok(p.eval("document.documentElement.scrollWidth<=innerWidth && document.querySelector('#g-main').scrollWidth<=document.querySelector('#g-main').clientWidth+1"), f'area view fits at {w}x{h}')
    size(1440, 900)
    # Choosing still reviews first and spends the slot exactly as before (femc_phone_activities.py's numbers).
    before = p.eval("JSON.stringify({yen:FemcGame.S.yen,stats:FemcGame.S.stats,spent:FemcGame.S.spent})")
    p.eval("document.querySelector('[data-act=chagall]').click();true")
    ok(p.eval("!!document.querySelector('.g-activity-preview:not(.out)') && document.querySelector('.g-activity-preview').textContent.includes('Pheromone Coffee')"), 'choosing opens the review (with the description)')
    ok(p.eval("JSON.stringify({yen:FemcGame.S.yen,stats:FemcGame.S.stats,spent:FemcGame.S.spent})") == before, 'nothing spent before confirming')
    p.eval("document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click();true")
    ok(p.eval("FemcGame.S.yen===9400 && FemcGame.S.stats.charm===2 && FemcGame.S.spent[FemcGame.S.day+'-after']==='act:chagall'"), 'confirming spends the slot, the yen and gives the stat')
    clear()
    # Something you can't do still explains why, and its review can't be confirmed.
    p.eval("FemcGame.S.spent={};FemcGame.S.yen=0;FemcGameUI.goOut('after','mall');true")
    ok(p.eval("document.querySelector('[data-act=chagall]').getAttribute('aria-disabled')==='true' && document.querySelector('[data-act=chagall]').textContent.includes('Not enough yen')"), 'an activity you can\'t afford says so')
    p.eval("document.querySelector('[data-act=chagall]').click();true")
    ok(p.eval("document.querySelector('.g-activity-preview [data-confirm]').disabled && FemcGame.S.yen===0 && !FemcGame.S.spent[FemcGame.S.day+'-after']"), 'and its review cannot be confirmed')
    clear()
    # Touch: a tap on an area card opens it; on a phone each place card carries its description itself.
    p.eval("FemcGame.S.yen=10000;FemcGameUI.goOut('after');true")
    size(375, 812, True)
    p.eval("document.querySelector('.g-px-card[data-area=mall]').scrollIntoView({block:'center'});true")
    x, y = center('.g-px-card[data-area=mall]')
    p.ws.call('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': x, 'y': y}]})
    p.ws.call('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
    p.wait("!!document.querySelector('.g-areaview')", 3)
    ok(p.eval("getComputedStyle(document.querySelector('.g-px-info')).display==='none' && getComputedStyle(document.querySelector('[data-act=chagall] .g-px-more')).display!=='none'"), 'touch: tap opens an area; place cards describe themselves on a phone')
    size(1440, 900)
    # The link's own card still starts the link (the same path femc_scene_keyboard.py drives with real keys).
    p.eval(f"FemcGameUI.goOut('after','{found['area']}');window.played=null;const pl=FemcScene.play;FemcScene.play=o=>{{window.played=o.link;FemcScene.play=pl;return {{}}}};true")
    hover(f"[data-link={found['link']}]")
    ok(p.eval(f"document.querySelector('.g-px-info h2').textContent===FemcGame.LINKS['{found['link']}'].name"), 'hover a person: their card in the panel')
    p.eval(f"document.querySelector('[data-link={found['link']}]').click();true")
    ok(p.eval(f"window.played==='{found['link']}'"), 'choosing a person starts their link')
    clear()

    # ── 6. A scene and the phone at three sizes (slashes clear of the text box and HUD) ──
    p.eval("FemcGame.setSetting('text','instant');FemcScene.play({scene:[{s:'yukari',f:'happy',t:'The slashes should stay out of the way of this box.'}],place:'Iwatodai Dorm · Lounge',time:'Evening'});true")
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'scene-{name}')
    ok(p.eval("(()=>{const s=getComputedStyle(document.querySelector('.gs-bg'),'::after').backgroundImage;return !/repeating/.test(s)})()"), 'no stripes over the scene art itself (only a faint corner accent)')
    clear()
    fresh(); thread_from('t-1102-hateclub'); p.eval("FemcGame.setSetting('text','instant');FemcGameUI.run();FemcGameUI.openPhone('hateclub');true")
    for name, w, h in SIZES:
        size(w, h, name == 'phone'); shot(f'phone-{name}')
        ok(p.eval("document.documentElement.scrollWidth<=innerWidth"), f'phone fits at {w}x{h}')
    size(1440, 900)

    errors = p.console()
    ok(not errors, f'no browser errors: {errors}')
    print(json.dumps({'checks': len(checks), 'screenshots': str(OUT), 'browserErrors': errors}))
finally:
    p.close()
