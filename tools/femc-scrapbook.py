#!/usr/bin/env python3
"""The epilogue scrapbook ("Previously…", Kat approved the pages Nov 10 2026).

  python3 tools/femc-scrapbook.py data   SCRAPBOOK-MOMENTS.md -> assets/femc/game/data/epi/<world>/scrapbook.js (re-run after editing it)
  python3 tools/femc-scrapbook.py art    New Adds/scrap-*.png -> assets/femc/game/art/scrapbook/ (FEMC-ART-TODO 46; re-run any time)
  python3 tools/femc-scrapbook.py        both

art:
  scrap-<world>-<nn>-<slug>.png   -> scrapbook/<world>/<nn>.webp   (the square photo, centre-cropped to 1:1, 900 px, q86)
  scrap-cover-<world>.png         -> scrapbook/ui/cover-<world>.webp
  scrap-divider-<world>.png       -> scrapbook/ui/divider-<world>.webp
  scrap-paper.png                 -> scrapbook/ui/paper.webp     (a tileable texture, 768 px)
  scrap-tape.png                  -> scrapbook/ui/tape-<n>.webp, clip-<n>.webp, corner-<n>.webp (each separate piece on the sheet,
                                     found by its outline: strips are tape, tall pieces paperclips, square ones photo corners drawn top-left)
  scrap-stickers-<world>.png      -> scrapbook/ui/sticker-<world>-<n>.webp (the same)
  then writes scrapbook/index.js (FEMC_SCRAPBOOK_ART: which files exist) so the game only asks for real pictures.
Kat's files are only read.
"""
import json, re, sys
from pathlib import Path
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
NEW = Path.home() / 'Documents/UniverseHub-Images/Femc Mode Images/New Adds'
OUT = ROOT / 'assets/femc/game/art/scrapbook'
WORLDS = {'1': 'runners', '2': 'strangers', '3': 'hoax'}


def data():
    md = (ROOT / 'SCRAPBOOK-MOMENTS.md').read_text()
    books, world, chap, page = {}, None, None, None
    for line in md.splitlines():
        m = re.match(r'^## (\d)\. (\S+)', line)
        if m:
            world = WORLDS.get(m.group(1)); chap = None
            if world: books[world] = {'world': world, 'chapters': []}
            continue
        if not world: continue
        m = re.match(r'^### Chapter (\w+): (.+)', line)
        if m:
            chap = {'name': m.group(2).strip(), 'pages': []}; books[world]['chapters'].append(chap); continue
        m = re.match(r'^(\d+)\. \*\*(.+?)\*\*\s*·?\s*(.*)$', line)
        if m and chap is not None:
            cite = m.group(3)
            page = {'n': int(m.group(1)), 'title': m.group(2).strip(), 'cite': re.sub(r'\s*\((big twist: cuttable|outline: not yet written)\)', '', cite).strip(),
                    'outline': 'outline: not yet written' in cite, 'cap': ''}
            chap['pages'].append(page); continue
        m = re.match(r'^\s+\*(.+)\*\s*$', line)
        if m and page is not None and not page['cap']:
            page['cap'] = m.group(1).strip()
    for w, b in books.items():
        n = sum(len(c['pages']) for c in b['chapters'])
        dst = ROOT / f'assets/femc/game/data/epi/{w}/scrapbook.js'
        dst.write_text('/* The "Previously…" scrapbook for this world: generated from SCRAPBOOK-MOMENTS.md by tools/femc-scrapbook.py data '
                       '(edit the .md, re-run). Read by assets/femc/game/scrapbook.js. */\n'
                       f'(window.FEMC_SCRAPBOOK ||= {{}}).{w} = ' + json.dumps(b, ensure_ascii=False, separators=(',', ':')) + ';\n')
        print(w, len(b['chapters']), 'chapters', n, 'pages ->', dst.relative_to(ROOT))


def alpha(im):
    im = im.convert('RGBA')
    if im.getchannel('A').getextrema()[0] == 255:  # white background: key it out softly
        px = np.asarray(im).copy(); d = px[..., :3].min(2).astype(int)
        px[..., 3] = np.where(d > 235, np.clip((255 - d) * 12, 0, 255), 255).astype(np.uint8)
        im = Image.fromarray(px, 'RGBA')
    return im


def pieces(im, min_area=0.004):
    """Each separate piece on a sheet (connected blobs of the alpha), in reading order."""
    from scipy import ndimage
    keyed = im.convert('RGBA').getchannel('A').getextrema()[0] == 255  # white sheet: close small gaps the keying left
    im = alpha(im); a = np.asarray(im.getchannel('A')) > (24 if keyed else 128)  # transparent sheets: faint shadows can touch
    if keyed: a = ndimage.binary_closing(a, iterations=4)  # never on transparent sheets: touching outlines would merge two stickers
    lab, n = ndimage.label(a); boxes = ndimage.find_objects(lab)
    W, H = im.size; out = []
    for i, sl in enumerate(boxes):
        ys, xs = sl; area = (ys.stop - ys.start) * (xs.stop - xs.start)
        if area < min_area * W * H: continue
        P = 0 if keyed else 4  # keep the soft edge outside the solid part
        out.append((ys.start, xs.start, im.crop((max(0, xs.start - P), max(0, ys.start - P), min(W, xs.stop + P), min(H, ys.stop + P)))))
    rowh = H / 8
    out.sort(key=lambda p: (round(p[0] / rowh), p[1]))
    return [p[2] for p in out]


def art():
    (OUT / 'ui').mkdir(parents=True, exist_ok=True)
    for f in sorted(NEW.glob('scrap-*')):
        if f.suffix.lower() not in ('.png', '.jpg', '.jpeg', '.webp'): continue
        name = f.stem[len('scrap-'):]; im = Image.open(f)
        m = re.match(r'^(runners|strangers|hoax)-(\d+)', name)
        if m:
            w, n = m.group(1), int(m.group(2)); (OUT / w).mkdir(exist_ok=True)
            im = im.convert('RGB'); s = min(im.size); im = im.crop(((im.width - s) // 2, (im.height - s) // 2, (im.width + s) // 2, (im.height + s) // 2))
            im.resize((900, 900), Image.LANCZOS).save(OUT / w / f'{n:02d}.webp', 'WEBP', quality=86); print(f.name, '->', f'{w}/{n:02d}.webp'); continue
        if name.startswith(('cover-', 'divider-')):
            im = im.convert('RGB'); im.thumbnail((1600, 1600), Image.LANCZOS); im.save(OUT / 'ui' / f'{name}.webp', 'WEBP', quality=88); print(f.name, '->', f'ui/{name}.webp'); continue
        if name == 'paper':
            im.convert('RGB').resize((768, 768), Image.LANCZOS).save(OUT / 'ui/paper.webp', 'WEBP', quality=86); print(f.name, '-> ui/paper.webp'); continue
        if name == 'tape' or name.startswith('stickers-'):
            stem = 'tape' if name == 'tape' else 'sticker-' + name[len('stickers-'):]
            kinds = ('tape', 'clip', 'corner') if stem == 'tape' else (stem,)
            for k in kinds:
                for old in (OUT / 'ui').glob(f'{k}-*.webp'): old.unlink()
            count = {}
            for p in pieces(im):
                k = stem
                if stem == 'tape':  # the tape sheet also holds paperclips (tall) and photo corners (square, drawn as top-left)
                    r = p.width / p.height
                    k = 'tape' if r > 2 else 'clip' if r < 0.6 else 'corner'
                count[k] = count.get(k, 0) + 1
                p.thumbnail((360, 360), Image.LANCZOS); p.save(OUT / 'ui' / f'{k}-{count[k]}.webp', 'WEBP', quality=90, alpha_quality=100)
            print(f.name, '->', ', '.join(f'ui/{k}-1..{n}.webp' for k, n in count.items())); continue
        print('skipped (unknown name):', f.name)
    have = sorted(str(p.relative_to(OUT))[:-5] for p in OUT.rglob('*.webp'))
    (OUT / 'index.js').write_text('/* Which scrapbook pictures exist (tools/femc-scrapbook.py art writes this). */\n'
                                  f'window.FEMC_SCRAPBOOK_ART = {json.dumps(have)};\n')
    print(len(have), 'pictures listed in art/scrapbook/index.js')


if __name__ == '__main__':
    what = sys.argv[1] if len(sys.argv) > 1 else 'all'
    if what in ('data', 'all'): data()
    if what in ('art', 'all'): art()
