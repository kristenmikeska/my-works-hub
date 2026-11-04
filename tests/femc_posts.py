"""Post pictures (FEMC-RUNNERS-POSTS.md; scene.js postReady / postHtml, tools/femc-posts.py, art/posts/index.js).

  python3 tests/femc_posts.py [--screenshots /absolute/dir]

data     every post id in the Runners epilogue data is in FEMC-RUNNERS-POSTS.md and the other way round, ids unique.
tool     femc-posts.py converts a test JPG and PNG from a temp folder (longest side 1080, WebP) and lists them in index.js.
scene    a phone text with a ready picture is an image bubble (handle, picture loaded, caption without the [description]);
         one without stays its own text; a narration line with a ready picture shows the phone-screen card, gone on the
         next line; one without shows none; no browser errors.
shots    the bubble and the card at 1440x900 and 390x844.
The test pictures are removed afterwards and index.js rewritten from what's left. Isolated browser profile and server."""
import base64, json, pathlib, re, subprocess, sys, tempfile
from PIL import Image, ImageDraw
from femc_browser import Page

REPO = pathlib.Path(__file__).resolve().parents[1]
OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-posts-'))
OUT.mkdir(parents=True, exist_ok=True)
POSTS = REPO / 'assets/femc/game/art/posts'
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


# data: ids in the story data vs the doc.
ids = []
reuse = []  # alerts.js reuses the posts' pictures (SUnews / SUanon alerts, Nov 3 2026)
for f in sorted((REPO / 'assets/femc/game/data/epi/runners').glob('*.js')):
    (reuse if f.name == 'alerts.js' else ids).extend(re.findall(r"img: '(post-r-\d+-[a-z0-9-]+)'", f.read_text()))
doc = set(re.findall(r'`(post-r-\d+-[a-z0-9-]+)`', (REPO / 'FEMC-RUNNERS-POSTS.md').read_text()))
ok(len(ids) == len(set(ids)), f'post ids unique ({len(ids)})')
ok(set(ids) == doc, f'data ids == doc ids ({sorted(set(ids) ^ doc)})')
ok(set(reuse) <= doc, f'the alerts only reuse known posts ({sorted(set(reuse) - doc)})')

# tool: two test pictures.
TEST = ['post-r-1-team-photo', 'post-r-9-quad-snow']  # two posts that have no picture yet
src = pathlib.Path(tempfile.mkdtemp(prefix='femc-posts-src-'))
for i, (pid, ext, size) in enumerate(((TEST[0], 'jpg', (1600, 2000)), (TEST[1], 'png', (900, 900)))):
    im = Image.new('RGB', size, (20, 7, 15)); d = ImageDraw.Draw(im); w, h = size
    for k in range(12):
        d.ellipse([w * (k % 4) / 4 + 20, h * (k // 4) / 3 + 20, w * (k % 4 + 1) / 4 - 20, h * (k // 4 + 1) / 3 - 20], fill=(255, 79 + k * 10, 158))
    d.rectangle([0, h * .78, w, h], fill=(255, 214, 232))
    im.save(src / f'{pid}.{ext}')
existing = {p.name for p in POSTS.glob('*.webp')} if POSTS.exists() else set()
ok(not any(f'{t}.webp' in existing for t in TEST), 'no real picture would be overwritten by the test ones')
subprocess.run([sys.executable, str(REPO / 'tools/femc-posts.py'), '--src', str(src), '--no-bump', '--no-record'], check=True, capture_output=True)
try:
    for t in TEST:
        im = Image.open(POSTS / f'{t}.webp'); ok(max(im.size) <= 1080, f'{t}: {im.size} within 1080')
    idx = (POSTS / 'index.js').read_text()
    ok(all(f'"{t}"' in idx for t in TEST), 'index.js lists the test pictures')
    # One picture from an explicit path, cropped from the original (Nov 3 2026), and its manifest entry (on a temp copy).
    TEST.append('post-r-7-kitchen-mop')
    ok('post-r-7-kitchen-mop.webp' not in existing, 'post 7 has no real picture to overwrite')
    big = src / 'anywhere.jpg'; Image.new('RGB', (1200, 1600), (255, 79, 158)).save(big); before = big.read_bytes()
    subprocess.run([sys.executable, str(REPO / 'tools/femc-posts.py'), 'post-r-7-kitchen-mop', str(big), '--crop', '100,200,900,1200', '--no-bump', '--no-record'], check=True, capture_output=True)
    ok(Image.open(POSTS / 'post-r-7-kitchen-mop.webp').size == (800, 1000) and big.read_bytes() == before, 'an explicit source path with --crop: cropped from the original, the original untouched')
    import importlib.util, shutil
    spec = importlib.util.spec_from_file_location('fp', REPO / 'tools/femc-posts.py'); fp = importlib.util.module_from_spec(spec); spec.loader.exec_module(fp)
    man = src / 'manifest.json'; shutil.copy(REPO / 'tools/femc-new-adds.json', man); fp.MANIFEST = str(man)
    n0 = len(json.loads(man.read_text())['entries'])
    fp.record([{'id': 'post-r-7-kitchen-mop', 'path': str(big), 'crop': [100, 200, 900, 1200], 'out': 'assets/femc/game/art/posts/post-r-7-kitchen-mop.webp'}], 999)
    fp.record([{'id': 'post-r-7-kitchen-mop', 'path': str(big), 'crop': None, 'out': 'assets/femc/game/art/posts/post-r-7-kitchen-mop.webp'}], 999)
    ents = json.loads(man.read_text())['entries']; e = ents[-1]
    ok(len(ents) == n0 + 1 and e['batch'] == 999 and e['sha256'] and e['sourceNow'].endswith('anywhere.jpg') and e['conversion'].startswith('longest'), 'the manifest records the source and a re-run replaces its entry')

    p = Page()
    try:
        p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
        p.goto('femc-game.html')
        ok(p.eval('FEMC_POSTS.length') >= 2, 'FEMC_POSTS loaded in the page')
        p.eval("""(() => { const G = FemcGame; G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off');
          G.newGame(); G.S.phase = 'play'; G.S.started = true; return true; })()""")
        PHONE = [{'place': 'Test', 'bg': 'gekkoukan-classroom-day'},
                 {'phone': [{'from': 'suesports', 't': 'SUesports posted a photo.'},
                            {'from': 'suesports', 't': 'FIVE DAYS TO REGIONALS ⏳ come loud', 'img': TEST[0], 'handle': '@SUesports'},
                            {'from': 'jaemin', 't': '[a red room] december lineup pt 1', 'img': 'post-r-4-antlers-selfie', 'handle': 'jaemin'}], 'contact': '@SUesports · Instagram'},
                 {'n': 'After.'}]
        p.eval(f"window.__pl = FemcScene.play({{ scene: {json.dumps(PHONE)}, onDone: () => {{}} }}); true")
        p.eval("(async () => { const el = __pl.el; for (let k = 0; k < 2; k++) { el.click(); await new Promise(r => setTimeout(r, 150)); } })()")
        p.wait("document.querySelectorAll('.gs-phone .gs-msg').length >= 3")
        p.wait("(document.querySelector('.gs-post img')?.naturalWidth || 0) > 0")
        r = p.eval("""(() => { const m = [...document.querySelectorAll('.gs-phone .gs-msg')]; const post = document.querySelector('.gs-post');
          return { n: m.length, handle: post?.querySelector('.gs-post-head b')?.textContent, cap: post?.querySelector('p')?.textContent,
            plain: m[2]?.textContent, plainPost: m[2]?.classList.contains('gs-post') }; })()""")
        ok(r['handle'] == '@SUesports' and r['cap'] == 'FIVE DAYS TO REGIONALS ⏳ come loud', f'ready picture: an image bubble with handle and caption ({r})')
        ok(r['plain'] == '[a red room] december lineup pt 1' and not r['plainPost'], f'no picture: the text as written ({r})')
        for tag, w, h in (('desktop', 1440, 900), ('phone', 390, 844)):
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': tag == 'phone'})
            p.eval("new Promise(r => setTimeout(() => { const t = document.querySelector('.gs-phone-thread'); t.scrollTop = t.scrollHeight; r(); }, 300))")
            (OUT / f'phone-{tag}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
        p.eval("document.querySelectorAll('.gs').forEach(x => x.remove()); document.documentElement.classList.remove('g-in-scene'); true")

        NAR = [{'place': 'Test', 'bg': 'gekkoukan-classroom-day'},
               {'n': 'Her phone lit on the desk. NEW POST.', 'img': TEST[1], 'handle': '@SUnews', 'cap': 'happy holidays 🎄'},
               {'n': 'She put it face down.'},
               {'n': 'Another, no picture yet.', 'img': 'post-r-4-antlers-selfie', 'handle': 'jaemin'},
               {'n': 'End.'}]
        for tag, w, h in (('desktop', 1440, 900), ('phone', 390, 844)):
            p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': tag == 'phone'})
            p.eval(f"document.querySelectorAll('.gs').forEach(x => x.remove()); window.__pl = FemcScene.play({{ scene: {json.dumps(NAR)}, onDone: () => {{}} }}); true")
            p.wait("(document.querySelector('.gs-postcard img')?.naturalWidth || 0) > 0")
            c = p.eval("""(() => { const c = document.querySelector('.gs-postcard'), b = c.getBoundingClientRect(), box = document.querySelector('.gs-box').getBoundingClientRect();
              return { handle: c.querySelector('b').textContent, cap: c.querySelector('p').textContent, top: b.top, bottom: b.bottom, left: b.left, right: b.right, boxTop: box.top, w: innerWidth }; })()""")
            ok(c['handle'] == '@SUnews' and c['cap'] == 'happy holidays 🎄', f'{tag}: narration card with handle and caption')
            ok(c['top'] >= 0 and c['left'] >= 0 and c['right'] <= c['w'] and c['bottom'] <= c['boxTop'] + 4, f'{tag}: the card fits above the text box ({c})')
            p.eval("new Promise(r => setTimeout(r, 300))")
            (OUT / f'card-{tag}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
            p.eval("__pl.el.click(); true"); p.eval("new Promise(r => setTimeout(r, 150))")
            ok(p.eval("!document.querySelector('.gs-postcard')"), f'{tag}: the card goes with its line')
            p.eval("__pl.el.click(); true"); p.eval("new Promise(r => setTimeout(r, 150))")
            ok(p.eval("/no picture yet/.test(document.querySelector('.gs-text').textContent) && !document.querySelector('.gs-postcard')"), f'{tag}: no picture, no card')
        errs = p.console(); print('console:', errs)
        ok(not errs, 'no browser errors')
    finally:
        p.close()
finally:
    for t in TEST:
        (POSTS / f'{t}.webp').unlink(missing_ok=True)
    subprocess.run([sys.executable, str(REPO / 'tools/femc-posts.py'), '--index', '--no-bump'], check=True, capture_output=True)
real = json.loads(re.search(r'FEMC_POSTS = (\[.*?\]);', (POSTS / 'index.js').read_text()).group(1))
ok(set(real) == {p.stem for p in POSTS.glob('*.webp')} and not set(real) & set(TEST), f'index.js lists the real pictures only, afterwards ({real})')
print(f'{len(checks)} checks passed; screenshots in {OUT}')
