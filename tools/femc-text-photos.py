"""Kat's real photos for the epilogue texts (FEMC-TEXT-PHOTOS.md lists every slot; assets/femc/game/textphotos.js draws them).
Sources are only read, never changed.

  python3 tools/femc-text-photos.py <slot id> <source path> [--crop L,T,R,B] [--batch N]
        one photo from anywhere (Kat drops hers in ~/Documents/UniverseHub-Images/Femc Mode Images/Text Photos/<Runners|
        strangers|HOAX|Stay>/ with free names), optionally cropped first (pixels of the original, after EXIF rotation)
        -> assets/femc/game/art/texts/<world>/<slug>.webp for slot id tp-<world>-<slug>
  python3 tools/femc-text-photos.py --index    only rewrite art/texts/index.js from the webps already there
  python3 tools/femc-text-photos.py --list     every slot id the epilogue data names, with ✓ when its picture exists
  (--no-bump: leave femc-game.html's ?v= alone; --no-record: leave tools/femc-new-adds.json alone)

Each photo: EXIF orientation honoured, longest side at most 1080 px, WebP q82 (the bubble shows it whole; the viewer full size).
Every conversion is recorded in tools/femc-new-adds.json (source path, sha256, crop, output, its sha256; written with indent=1
like the rest of the manifest); a new conversion of the same output replaces its old entry. --batch N files it under batch N
(default: the manifest's highest batch + 1).
index.js lists every slot with a webp (window.FEMC_TEXT_PHOTOS) and a version from their sizes and times
(FEMC_TEXT_PHOTOS_V); the game shows a slot's photo only when it's listed, so a missing one keeps the text as written. When
index.js changes, its ?v= in femc-game.html goes up by one. A slot id the data doesn't name is converted anyway, with a warning.
To take a photo out: delete its webp, run --index.
"""
import glob, hashlib, json, os, re, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets/femc/game/art/texts')
DATA = os.path.join(ROOT, 'assets/femc/game/data/epi')
MANIFEST = os.path.join(ROOT, 'tools/femc-new-adds.json')
ID = re.compile(r'^tp-(runners|strangers|hoax|stay)-([a-z0-9]+(?:-[a-z0-9]+)*)$')
MAX = 1080
HOME = os.path.expanduser('~')


def sha(path):
    return hashlib.sha256(open(path, 'rb').read()).hexdigest()


def data_slots():
    """Every tp- id named in the epilogue data, with the file:line of its first mention."""
    seen = {}
    for f in sorted(glob.glob(os.path.join(DATA, '*', '*.js'))):
        for n, line in enumerate(open(f, encoding='utf-8'), 1):
            for m in re.finditer(r"'(tp-[a-z]+-[a-z0-9-]+)'", line):
                seen.setdefault(m.group(1), f'{os.path.relpath(f, ROOT)}:{n}')
    return seen


def one(slot, path, crop=None):
    world, slug = ID.match(slot).groups()
    im = ImageOps.exif_transpose(Image.open(path))
    im = im.convert('RGB')
    if crop:
        im = im.crop(crop)
    im.thumbnail((MAX, MAX), Image.LANCZOS)
    dst = os.path.join(OUT, world, slug + '.webp')
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    im.save(dst, 'WEBP', quality=82, method=6)
    print(f'{os.path.basename(path)} -> art/texts/{world}/{slug}.webp {im.size[0]}x{im.size[1]}{f" (crop {crop})" if crop else ""}')
    return {'id': slot, 'path': path, 'crop': list(crop) if crop else None, 'out': os.path.relpath(dst, ROOT), 'size': list(im.size)}


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
        crop = x['crop']
        ents.append({'batch': batch, 'source': os.path.basename(x['path']), 'sourceNow': shown, 'size': list(Image.open(x['path']).size),
                     'sha256': sha(x['path']), 'status': 'integrated', 'destination': x['out'],
                     'conversion': (f'crop {crop} (pixels of the original, after EXIF rotation), then ' if crop else 'EXIF rotation, ') + 'longest side at most 1080, WebP q82',
                     'placement': f"text photo slot {x['id']} (FEMC-TEXT-PHOTOS.md): a photo bubble in the epilogue phone / scene phone, its banner thumbnail",
                     'tool': f"python3 tools/femc-text-photos.py {x['id']} <source>" + (f" --crop {','.join(map(str, crop))}" if crop else ''),
                     'outputs': {x['out']: sha(os.path.join(ROOT, x['out']))}})
    with open(MANIFEST, 'w', encoding='utf-8') as fh:
        fh.write(json.dumps(d, indent=1, ensure_ascii=False) + ('\n' if raw.endswith('\n') else ''))
    print(f'tools/femc-new-adds.json: {len(done)} entr{"y" if len(done) == 1 else "ies"} (batch {batch})')


def present():
    ids = []
    for f in sorted(glob.glob(os.path.join(OUT, '*', '*.webp'))):
        world, slug = os.path.basename(os.path.dirname(f)), os.path.basename(f)[:-5]
        if ID.match(f'tp-{world}-{slug}'):
            ids.append((f'tp-{world}-{slug}', f))
    return ids


def index(bump=True):
    os.makedirs(OUT, exist_ok=True)
    have = present()
    ids = [i for i, _ in have]
    sig = hashlib.sha1(''.join(f'{i}:{os.path.getsize(f)}:{int(os.path.getmtime(f))}' for i, f in have).encode()).hexdigest()[:8]
    path = os.path.join(OUT, 'index.js')
    before = open(path).read() if os.path.exists(path) else ''
    with open(path, 'w') as fh:
        fh.write('/* The text photos that exist (written by tools/femc-text-photos.py; FEMC-TEXT-PHOTOS.md lists the slots). textphotos.js\n'
                 '   shows a message\'s { img: \'tp-<world>-<slug>\' } as a photo only when its id is here; FEMC_TEXT_PHOTOS_V busts the\n'
                 '   browser cache when pictures change. Pictures: art/texts/<world>/<slug>.webp. */\n')
        fh.write(f'window.FEMC_TEXT_PHOTOS = {json.dumps(ids)};\nwindow.FEMC_TEXT_PHOTOS_V = {json.dumps(sig)};\n')
    print(f'art/texts/index.js: {len(ids)} photo(s)')
    if bump and open(path).read() != before and before:
        html = os.path.join(ROOT, 'femc-game.html')
        h = open(html).read()
        h2 = re.sub(r'(art/texts/index\.js\?v=)(\d+)', lambda m: m.group(1) + str(int(m.group(2)) + 1), h)
        if h2 != h:
            open(html, 'w').write(h2)
            print('femc-game.html: texts/index.js ?v= bumped')
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
    crop, batch = opt(args, '--crop'), opt(args, '--batch')
    if '--list' in args:
        have = {i for i, _ in present()}
        slots = data_slots()
        for i, at in sorted(slots.items()):
            print(f"{'✓' if i in have else ' '} {i:44} {at}")
        print(f'{len(slots)} slots, {len(have & set(slots))} with a photo' + (f'; not in the data: {sorted(have - set(slots))}' if have - set(slots) else ''))
        sys.exit(0)
    done = []
    if '--index' not in args:
        if len(args) != 2 or not ID.match(args[0]):
            sys.exit(__doc__)
        path = os.path.abspath(os.path.expanduser(args[1]))
        if not os.path.isfile(path):
            sys.exit(f'no file {path}')
        if args[0] not in data_slots():
            print(f'warning: no epilogue data names {args[0]} (converted anyway; add img: \'{args[0]}\' to its message)')
        done = [one(args[0], path, tuple(int(v) for v in crop.split(',')) if crop else None)]
    if rec:
        record(done, int(batch) if batch else None)
    index(bump=bump)
