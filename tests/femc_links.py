"""Real-browser regression checks for the finished links: by default Hyein, Mark, Hanni, Yunjin and Minji; also
mercy,kiriko,sebastian (the visitor depth pass) with --links.

Run: python3 tests/femc_links.py [--links hyein,mark,...] [--screenshots /absolute/output/directory]
Needs Chrome (set CHROME for a nonstandard installation), no Python packages.
Uses a temporary browser profile and loopback server; never opens the player's saves.
The output is spoiler-free. Full line/choice traversal uses reduced motion and instant
text, then screenshots exercise the normal animations and desktop/mobile layouts.
"""
import argparse, base64, json, pathlib
from femc_browser import Page

ROOT = pathlib.Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--screenshots', type=pathlib.Path)
parser.add_argument('--links', default='hyein,mark,hanni,yunjin,minji')
args = parser.parse_args()
LINKS = [x for x in args.links.split(',') if x]
p = Page()
try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    p.goto('femc-game.html?debug=1')
    p.eval((ROOT / 'tests/femc_links.browser.js').read_text())
    assert not p.console(), 'Errors during game load'
    assert not p.eval(f'LinkAudit.faces({json.dumps(LINKS)})'), 'Unknown portrait expression'
    protected = "I'd never put my name on something that was yours. I want you to know that. I want you to know I know that matters."
    assert p.eval(f"JSON.stringify(FemcGame.LINKS.mark.ranks[8].scene).includes({json.dumps(protected)})"), 'Approved dialogue changed'
    # Playtest notes 42/43/45/50/52/60/63/68/75/76 (2026-10-20): spoiler-free content guards on the link data.
    content = p.eval(r'''(()=>{const L=FemcGame.LINKS,txt=id=>JSON.stringify(L[id]),bad=[];
     const no=(id,re,msg)=>{if(re.test(txt(id)))bad.push(id+': '+msg)};
     for(const id of ['hanni','hyein','yunjin','mark','minji']){no(id,/Say it again/,'repeated catchphrase');no(id,/THERE SHE IS/i,'repeated catchphrase');}
     no('mark',/\bjk\b/i,'jk');no('mark',/the gap\b|mark-gap|mark-dad/,'canon gap/father thread');
     if(!/ifRank":\{"akihiko"/.test(txt('hyein')))bad.push('hyein: no Akihiko notice');
     if(!/ifRank":\{"akihiko"/.test(txt('hanni')))bad.push('hanni: no Akihiko notice');
     const r8=JSON.stringify(L.yunjin.ranks[7].scene);if(!/"s":"haechan"/.test(r8)||!/"s":"jungwon"/.test(r8))bad.push('yunjin r8: boys silent');
     if(!/guesthouse/.test(JSON.stringify(L.minji)))bad.push('minji: no lodging');
     const r1=JSON.stringify(L.hyein.ranks[0].scene);if(/talking like that|waiting for instructions/.test(r1))bad.push('hyein r1: shared formal accusation');
     return bad})()''')
    assert not content, content
    # The late Runners links (2026-10-22): the book's locked truths and catchphrases stay out of them (spoiler-free guard).
    late = [x for x in LINKS if x in ('danielle', 'jaemin', 'chenle')]
    if late:
        leaks = p.eval(f'''(()=>{{const bad=[],re=/girl I used to know|learned the hard way|hard lesson|Say it again|fits you better|THERE SHE IS|\\bdemo\\b|scholarship|recording/i;
         for(const id of {json.dumps(late)}){{const l=FemcGame.LINKS[id];const m=JSON.stringify([l.ranks,l.hangouts,l.afterMax,l.holidays||{{}},l.afterRank||{{}},l.invite]).match(re);if(m)bad.push(id+': '+m[0]);
          if(!l.portraitPending)bad.push(id+': portraitPending missing');if(!(l.storyEvents||[]).length)bad.push(id+': no arrival');}}
         return bad}})()''')
        assert not leaks, leaks
    # Link-local flags of the visitor depth pass (Mercy, Kiriko, Sebastian; prefix = id or seb-): every one a scene reads
    # is set by a choice somewhere in the same link.
    orphans = p.eval(f'''(()=>{{const L=FemcGame.LINKS,bad=[];const walk=(a,fn)=>(a||[]).forEach(l=>{{fn(l);walk(l.then,fn);walk(l.else,fn);(l.choose||[]).forEach(o=>{{fn(o);walk(o.then,fn);}});}});
     for(const id of {json.dumps([x for x in LINKS if x in ('mercy', 'kiriko', 'sebastian', 'danielle', 'jaemin', 'chenle')])}){{const l=L[id],read=new Set(),set=new Set(),scenes=[...l.ranks.map(r=>r.scene),...l.hangouts,...l.afterMax.map(e=>e.scene),...Object.values(l.holidays||{{}}).map(h=>h.scene),...(l.lateNights||[]).map(e=>e.scene)];
      scenes.forEach(s=>walk(s,x=>{{[].concat(x.ifFlag||[]).forEach(f=>read.add(f));if(x.flag)(typeof x.flag==='string'?[x.flag]:Array.isArray(x.flag)?x.flag:Object.keys(x.flag)).forEach(f=>set.add(f));}}));
      (l.lateNights||[]).forEach(e=>[].concat(e.flag||[]).forEach(f=>read.add(f)));
      const mine=f=>f.startsWith(id+'-')||f.startsWith(id.slice(0,3)+'-');
      read.forEach(f=>{{if(mine(f)&&!set.has(f))bad.push(id+': '+f+' is read but never set');}});}}
     return bad}})()''')
    assert not orphans, orphans
    print('Content guards passed', flush=True)
    totals = {}
    for link in LINKS:
        total = 0
        for i in range(p.eval(f"LinkAudit.sceneList('{link}').length")):
            r = p.eval(f"LinkAudit.one('{link}',{i})", timeout=180)
            total += r['paths']
        totals[link] = total
        print(f'{link}: {total} scene paths; every line and choice reached', flush=True)
        gates = p.eval(f"LinkAudit.gates('{link}')")
        print(f"  {gates['checks']} availability checks passed", flush=True)
        for low in ['false', 'true']:
            # Hyein and Mark were scheduled so one run reaches every post-MAX scene; the others rotate theirs.
            every = 'true' if link in ('hyein', 'mark') else 'false'
            r = p.eval(f"LinkAudit.progression('{link}',{low},{every})")
            print(f"  {'Lower-scoring' if low == 'true' else 'First-choice'} calendar run: MAX, {r['trace'][-1]['after']} of {p.eval(f'FemcGame.LINKS.{link}.afterMax.length')} post-MAX scenes, save/load passed", flush=True)
    # Speakers without portraits yet (portraitPending) were shown as the silhouette on every spoken line, and the moment their
    # portraits are listed in portraits/index.js the real face takes over (simulated here; no files are written).
    pending = p.eval(f"{json.dumps(LINKS)}.filter(id=>FemcGame.pendingFace(id))")
    if pending:
        sil = p.eval('LinkAudit.silhouettes()')
        assert not sil['bad'], sil['bad']
        assert set(pending) <= set(sil['seen']), sil
        swap = p.eval(f'''(()=>{{const G=FemcGame,out=[];for(const id of {json.dumps(pending)}){{const was=FEMC_PORTRAITS[id];
          FEMC_PORTRAITS[id]=['flustered','happy','neutral','sad','serious','surprised'];
          const ok=!G.pendingFace(id)&&G.silhouette(id)===null&&G.portrait(id,'serious').endsWith('assets/femc/portraits/'+id+'/serious.webp')&&G.portrait(id,'blushing').endsWith('/'+id+'/flustered.webp');
          if(was)FEMC_PORTRAITS[id]=was;else delete FEMC_PORTRAITS[id];if(!ok||!G.pendingFace(id))out.push(id);}}return out}})()''')
        assert not swap, swap
        print(f"{len(pending)} speakers without portraits shown as silhouettes on every line; their real portraits take over once listed", flush=True)
    assets = p.eval('LinkAudit.assetCheck()')
    assert not assets['missing'], assets
    print(f"{assets['count']} scene assets load; {assets['faces']} displayed portraits checked", flush=True)
    if args.screenshots:
        args.screenshots.mkdir(parents=True, exist_ok=True)
        for link in LINKS:
            p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'no-preference'}]})
            p.eval(f"LinkAudit.reset('{link}',LinkAudit.sceneList('{link}')[0],{{flags:{{}},rank:0}});window.sample=FemcScene.play({{...LinkAudit.sceneList('{link}')[0],link:'{link}'}});'ok'")
            p.eval("sample.el.querySelector('.gs-title')?.click();'ok'")
            p.eval("new Promise(r=>setTimeout(r,550))")
            p.eval("(async()=>{for(let i=0;i<100;i++){if(sample.el.querySelector('.gs-choices button'))return;sample.el.click();await new Promise(r=>setTimeout(r,200));}throw Error('No choices');})()")
            for width, height in [(1440,900),(375,812)]:
                p.ws.call('Emulation.setDeviceMetricsOverride', {'width':width,'height':height,'deviceScaleFactor':1,'mobile':False})
                p.eval("new Promise(r=>setTimeout(r,400))")
                assert p.eval("[...sample.el.querySelectorAll('.gs-choices button')].every(b=>{const r=b.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight})"), 'Choice buttons outside viewport'
                img=p.ws.call('Page.captureScreenshot',{'format':'png'})['data']
                (args.screenshots/f'{link}-{width}.png').write_bytes(base64.b64decode(img))
            p.eval("sample.close();sample.el.remove();'ok'")
    errors=p.console()
    assert not errors, errors
    print('PASS: no browser errors', flush=True)
finally:
    p.close()
