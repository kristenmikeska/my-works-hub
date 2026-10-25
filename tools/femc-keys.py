"""Capsule keychain charms (FEMC-ART-TODO 7) from Kat's green-screen sheets. Sources are only read, never changed.

  python3 tools/femc-keys.py all
        Every sheet in SHEETS (from New Adds/ or Added to Game/) -> assets/femc/game/art/keys/<id>.webp, and the
        Halloween set (keychain-sheetN-halloween.png) -> <id>-halloween.webp. gacha.js keyFace reads them.
  python3 tools/femc-keys.py check OUT.png
        Contact sheet of every cut charm on the Collection's dark ground and on white.

A sheet is a 3 x 2 grid of charms on flat #00ff00. The green is keyed out (a soft edge from how green a pixel is, the
green spill taken off), then each charm is found as the connected pieces in its cell (the ring and chain can be separate
pieces; a charm that crosses its cell line is still kept whole, since pieces go to the cell their centre is in).
Each charm is trimmed and saved transparent, 360 px tall at most, WebP q88.
"""
import os, sys
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DST = os.path.join(ROOT, 'assets/femc/game/art/keys')
IMAGES = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')

# Reading order, as the art list gives it (batch 45, 2026-10-24).
SHEETS = {
    'keychain-sheet1': ['fuuka', 'ken', 'hanni', 'hyein', 'yunjin', 'mark'],
    'keychain-sheet2': ['jaehyun', 'cherry', 'sunoo', 'junkyu', 'ann', 'kasumi'],
    'keychain-sheet3': ['haru', 'kuromi', 'mymelody', 'rio', 'saori', 'kiriko'],
    'keychain-sheet4': ['solar', 'akihiko', 'yukari', 'junpei', 'mitsuru', 'aigis'],
    'keychain-sheet5': ['koromaru', 'shinjiro', 'haechan', 'jungwon', 'jihoon', 'minji'],
}
VARIANTS = {'': '', '-halloween': '-halloween'}  # source suffix -> output suffix


def source(stem):
    for d in ('New Adds', 'Added to Game'):
        p = os.path.join(IMAGES, d, stem + '.png')
        if os.path.exists(p): return p
    return None


def key_green(rgb):
    """Alpha from how green a pixel is; green spill clamped off what's kept."""
    a = rgb.astype(np.float32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    green = g - np.maximum(r, b)
    alpha = np.clip(1 - (green - 30) / 90, 0, 1)
    out = a.copy()
    out[..., 1] = np.minimum(g, np.maximum(r, b) + 10)
    return out.astype(np.uint8), (alpha * 255).astype(np.uint8)


def cut(src, ids, suffix):
    im = np.asarray(Image.open(src).convert('RGB'))
    rgb, alpha = key_green(im)
    H, W = alpha.shape
    lab, n = ndi.label(alpha > 40)
    objs = ndi.find_objects(lab)
    sizes = ndi.sum(np.ones_like(lab), lab, range(1, n + 1))
    cells = {i: [] for i in range(6)}
    for k, sl in enumerate(objs, 1):
        if sizes[k - 1] < 40: continue  # specks
        cy, cx = ndi.center_of_mass(lab == k) if sizes[k - 1] < 2000 else ((sl[0].start + sl[0].stop) / 2, (sl[1].start + sl[1].stop) / 2)
        col, row = min(2, int(cx / (W / 3))), min(1, int(cy / (H / 2)))
        cells[row * 3 + col].append(k)
    for i, name in enumerate(ids):
        ks = cells[i]
        if not ks: raise SystemExit(f'{src}: nothing in cell {i} ({name})')
        m = np.isin(lab, ks)
        ys, xs = np.nonzero(m)
        y0, y1, x0, x1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
        a = np.where(m, alpha, 0)[y0:y1, x0:x1]
        out = Image.fromarray(np.dstack([rgb[y0:y1, x0:x1], a]), 'RGBA')
        pad = 6
        canvas = Image.new('RGBA', (out.width + 2 * pad, out.height + 2 * pad), (0, 0, 0, 0))
        canvas.paste(out, (pad, pad))
        if canvas.height > 360:
            k = 360 / canvas.height
            canvas = canvas.resize((round(canvas.width * k), 360), Image.LANCZOS)
        os.makedirs(DST, exist_ok=True)
        p = os.path.join(DST, f'{name}{suffix}.webp')
        canvas.save(p, 'WEBP', quality=88, method=6)
        print(f'  {name}{suffix}: box {x0},{y0}-{x1},{y1} -> {canvas.size}')


def check(out):
    files = sorted(f for f in os.listdir(DST) if f.endswith('.webp'))
    cw, ch = 130, 190
    cols = 10
    rows = (len(files) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * cw * 2, rows * ch), (20, 7, 15))
    for i, f in enumerate(files):
        im = Image.open(os.path.join(DST, f)).convert('RGBA')
        im.thumbnail((cw - 10, ch - 10))
        for j, bg in enumerate([(32, 14, 40), (255, 255, 255)]):
            x, y = (i % cols) * cw + j * cols * cw, (i // cols) * ch
            tile = Image.new('RGBA', (cw, ch), bg + (255,))
            tile.alpha_composite(im, ((cw - im.width) // 2, (ch - im.height) // 2))
            sheet.paste(tile.convert('RGB'), (x, y))
    sheet.save(out)
    print('  wrote', out)


def main():
    if len(sys.argv) > 1 and sys.argv[1] == 'check': return check(sys.argv[2])
    for stem, ids in SHEETS.items():
        for sfx, osfx in VARIANTS.items():
            src = source(stem + sfx)
            if not src: print('  missing', stem + sfx); continue
            print(os.path.basename(src))
            cut(src, ids, osfx)


if __name__ == '__main__':
    main()
