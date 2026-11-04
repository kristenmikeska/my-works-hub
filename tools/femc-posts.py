"""Kat's real-life pictures for the epilogue's social-media posts (FEMC-RUNNERS-POSTS.md). Sources are only read.

  python3 tools/femc-posts.py            New Adds/Runners Posts/post-*.jpg|jpeg|png|webp -> assets/femc/game/art/posts/<id>.webp
  python3 tools/femc-posts.py --src DIR  the same from another folder (a second source folder; the tests use it)
  python3 tools/femc-posts.py <post id> <source path> [--crop L,T,R,B] [--batch N]
                                         one picture from anywhere (the Runners World site, ~/Documents/UniverseHub-Images/…),
                                         optionally cropped first (pixels of the original; the original is never touched)
  python3 tools/femc-posts.py --index    only rewrite art/posts/index.js from the webps already there
  (--no-bump: leave femc-game.html's ?v= alone; --no-record: leave tools/femc-new-adds.json alone; the test uses both)

Each picture is converted longest side at most 1080px, WebP q82 (the game crops to 4:5 on screen, so a --crop is best 4:5 too).
A folder's files go in as they are (no crop): when Kat drops an edited post-<id>.jpg into New Adds/Runners Posts and runs the
tool, it replaces whatever that id had (a cropped pick included).
Every conversion is recorded in tools/femc-new-adds.json (source path, sha256, crop, output, its sha256); a new conversion of
the same output replaces its old entry. --batch N files it under batch N (default: the manifest's highest batch + 1).
index.js lists every id with a webp (window.FEMC_POSTS) and a version from their sizes and times (FEMC_POSTS_V); scene.js
shows a post's picture only when its id is listed, so a missing one keeps the line as text. When index.js changes, its ?v= in
femc-game.html goes up by one.
"""
import hashlib, json, os, re, sys
from PIL import Image, ImageOps

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from femc_images import IMAGES

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets/femc/game/art/posts')
SRC = os.path.join(IMAGES, 'New Adds', 'Runners Posts')
MANIFEST = os.path.join(ROOT, 'tools/femc-new-adds.json')
NAME = re.compile(r'^(post-[a-z]+-\d+-[a-z0-9-]+)\.(jpe?g|png|webp)$', re.I)
ID = re.compile(r'^post-[a-z]+-\d+-[a-z0-9-]+$')
MAX = 1080
HOME = os.path.expanduser('~')


def sha(path):
    return hashlib.sha256(open(path, 'rb').read()).hexdigest()


def one(pid, path, crop=None):
    im = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    if crop:
        im = im.crop(crop)
    im.thumbnail((MAX, MAX), Image.LANCZOS)
    dst = os.path.join(OUT, pid + '.webp')
    os.makedirs(OUT, exist_ok=True)
    im.save(dst, 'WEBP', quality=82, method=6)
    print(f'{os.path.basename(path)} -> {pid}.webp {im.size[0]}x{im.size[1]}{f" (crop {crop})" if crop else ""}')
    return {'id': pid, 'path': path, 'crop': list(crop) if crop else None, 'out': os.path.relpath(dst, ROOT), 'size': list(im.size)}


def convert(src_dir):
    done = []
    if not os.path.isdir(src_dir):
        print(f'no folder {src_dir}')
        return done
    for f in sorted(os.listdir(src_dir)):
        m = NAME.match(f)
        if m:
            done.append(one(m.group(1).lower(), os.path.join(src_dir, f)))
    return done


def record(done, batch=None):
    if not done:
        return
    raw = open(MANIFEST, encoding='utf-8').read()
    d = json.loads(raw)
    ents = d['entries']
    if batch is None:
        batch = max(e['batch'] for e in ents if isinstance(e.get('batch'), int)) + 1
    for x in done:
        ents[:] = [e for e in ents if e.get('destination') != x['out']]
        shown = x['path'].replace(HOME, '~', 1) if x['path'].startswith(HOME) else x['path']
        e = {'batch': batch, 'source': os.path.basename(x['path']), 'sourceNow': shown, 'size': list(Image.open(x['path']).size),
             'sha256': sha(x['path']), 'status': 'integrated', 'destination': x['out'],
             'conversion': (f"crop {x['crop']} (pixels of the original), then " if x['crop'] else '') + 'longest side at most 1080, WebP q82 (the game crops to 4:5)',
             'placement': f"the Runners epilogue post {x['id']} (FEMC-RUNNERS-POSTS.md): an image bubble on the phone or the phone-screen card over the scene; the album's Runners posts",
             'tool': 'python3 tools/femc-posts.py' + (f" {x['id']} <source>" + (f" --crop {','.join(map(str, x['crop']))}" if x['crop'] else '') if not NAME.match(os.path.basename(x['path'])) else ''),
             'outputs': {x['out']: sha(os.path.join(ROOT, x['out']))}}
        ents.append(e)
    with open(MANIFEST, 'w', encoding='utf-8') as fh:
        fh.write(json.dumps(d, indent=2, ensure_ascii=False) + '\n')
    print(f'tools/femc-new-adds.json: {len(done)} entr{"y" if len(done) == 1 else "ies"} (batch {batch})')


def index(bump=True):
    os.makedirs(OUT, exist_ok=True)
    ids = sorted((f[:-5] for f in os.listdir(OUT) if f.endswith('.webp')), key=lambda s: [int(x) if x.isdigit() else x for x in re.split(r'(\d+)', s)])
    sig = hashlib.sha1(''.join(f'{i}:{os.path.getsize(os.path.join(OUT, i + ".webp"))}:{int(os.path.getmtime(os.path.join(OUT, i + ".webp")))}' for i in ids).encode()).hexdigest()[:8]
    path = os.path.join(OUT, 'index.js')
    before = open(path).read() if os.path.exists(path) else ''
    with open(path, 'w') as fh:
        fh.write('/* The post pictures that exist (written by tools/femc-posts.py; FEMC-RUNNERS-POSTS.md lists the ids). scene.js shows a\n'
                 '   line\'s { img } as a post only when its id is here; FEMC_POSTS_V busts the browser cache when pictures change. */\n')
        fh.write(f'window.FEMC_POSTS = {json.dumps(ids)};\nwindow.FEMC_POSTS_V = {json.dumps(sig)};\n')
    print(f'index.js: {len(ids)} picture(s)')
    if bump and open(path).read() != before:
        # The page's ?v= for index.js, so a browser never keeps an old list.
        html = os.path.join(ROOT, 'femc-game.html')
        h = open(html).read()
        h2 = re.sub(r'(art/posts/index\.js\?v=)(\d+)', lambda m: m.group(1) + str(int(m.group(2)) + 1), h)
        if h2 != h:
            open(html, 'w').write(h2)
            print('femc-game.html: posts/index.js ?v= bumped')
    return ids


def opt(args, name):
    if name in args:
        i = args.index(name)
        v = args[i + 1]
        del args[i:i + 2]
        return v
    return None


if __name__ == '__main__':
    args = sys.argv[1:]
    bump, rec = '--no-bump' not in args, '--no-record' not in args
    args = [a for a in args if a not in ('--no-bump', '--no-record')]
    src, crop, batch = opt(args, '--src'), opt(args, '--crop'), opt(args, '--batch')
    done = []
    if '--index' in args:
        pass
    elif args:
        if len(args) != 2 or not ID.match(args[0]):
            sys.exit('usage: femc-posts.py <post id> <source path> [--crop L,T,R,B] [--batch N]')
        path = os.path.abspath(os.path.expanduser(args[1]))
        if not os.path.isfile(path):
            sys.exit(f'no file {path}')
        done = [one(args[0], path, tuple(int(v) for v in crop.split(',')) if crop else None)]
    else:
        done = convert(os.path.expanduser(src or SRC))
    if rec:
        record(done, int(batch) if batch else None)
    index(bump=bump)
