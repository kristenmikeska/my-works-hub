"""Kat's real-life pictures for the epilogue's social-media posts (FEMC-RUNNERS-POSTS.md). Sources are only read.

  python3 tools/femc-posts.py            New Adds/Runners Posts/post-*.jpg|jpeg|png|webp -> assets/femc/game/art/posts/<id>.webp
  python3 tools/femc-posts.py --src DIR  the same from another folder (tests)
  python3 tools/femc-posts.py --index    only rewrite art/posts/index.js from the webps already there
  (--no-bump: leave femc-game.html's ?v= alone; the test uses it)

Each picture is converted as it is (no crop: the game crops to 4:5 on screen), longest side at most 1080px, WebP q82.
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
NAME = re.compile(r'^(post-[a-z]+-\d+-[a-z0-9-]+)\.(jpe?g|png|webp)$', re.I)
MAX = 1080


def convert(src_dir):
    os.makedirs(OUT, exist_ok=True)
    done = []
    if not os.path.isdir(src_dir):
        print(f'no folder {src_dir}')
        return done
    for f in sorted(os.listdir(src_dir)):
        m = NAME.match(f)
        if not m:
            continue
        pid = m.group(1).lower()
        path = os.path.join(src_dir, f)
        im = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
        im.thumbnail((MAX, MAX), Image.LANCZOS)
        dst = os.path.join(OUT, pid + '.webp')
        im.save(dst, 'WEBP', quality=82, method=6)
        sha = hashlib.sha256(open(path, 'rb').read()).hexdigest()[:16]
        done.append({'source': f, 'sha256_16': sha, 'out': os.path.relpath(dst, ROOT), 'size': list(im.size)})
        print(f'{f} -> {pid}.webp {im.size[0]}x{im.size[1]}')
    return done


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


if __name__ == '__main__':
    args = sys.argv[1:]
    if '--index' not in args:
        src = args[args.index('--src') + 1] if '--src' in args else SRC
        convert(os.path.expanduser(src))
    index(bump='--no-bump' not in args)
