"""Real-browser regression checks for the finished Hyein and Mark links.

Run: python3 tests/femc_links.py [--screenshots /absolute/output/directory]
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
args = parser.parse_args()
p = Page()
try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    p.goto('femc-game.html?debug=1')
    p.eval((ROOT / 'tests/femc_links.browser.js').read_text())
    assert not p.console(), 'Errors during game load'
    assert not p.eval('LinkAudit.faces()'), 'Unknown portrait expression'
    protected = "I'd never put my name on something that was yours. I want you to know that. I want you to know I know that matters."
    assert p.eval(f"JSON.stringify(FemcGame.LINKS.mark.ranks[8].scene).includes({json.dumps(protected)})"), 'Approved dialogue changed'
    totals = {}
    for link in ['hyein', 'mark']:
        total = 0
        for i in range(p.eval(f"LinkAudit.sceneList('{link}').length")):
            r = p.eval(f"LinkAudit.one('{link}',{i})", timeout=180)
            total += r['paths']
        totals[link] = total
        print(f'{link}: {total} scene paths; every line and choice reached', flush=True)
        gates = p.eval(f"LinkAudit.gates('{link}')")
        print(f"  {gates['checks']} availability checks passed", flush=True)
        for low in ['false', 'true']:
            r = p.eval(f"LinkAudit.progression('{link}',{low})")
            print(f"  {'Lower-scoring' if low == 'true' else 'First-choice'} calendar run: MAX, {r['trace'][-1]['after']} post-MAX scenes, save/load passed", flush=True)
    assets = p.eval('LinkAudit.assetCheck()')
    assert not assets['missing'], assets
    print(f"{assets['count']} scene assets load; {assets['faces']} displayed portraits checked", flush=True)
    if args.screenshots:
        args.screenshots.mkdir(parents=True, exist_ok=True)
        for link in ['hyein', 'mark']:
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
