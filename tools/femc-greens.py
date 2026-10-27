"""Kat's green-screen sheets for items, phone cases and group-chat pictures (batch 48, 2026-10-25). Sources are only read.

  python3 tools/femc-greens.py all [stem ...]
        Every sheet (or just the named ones) in SHEETS (from New Adds/ or Added to Game/) -> its folder, one transparent WebP per cell.
  python3 tools/femc-greens.py check OUT.png
        Contact sheet of every cut on a dark ground and on white.

Each sheet is a grid of art on flat #00ff00 (FEMC-ART-TODO 6B and 7). The green that reaches the edge, and enclosed holes of the same flat green, are keyed
out (a soft edge from how green a pixel is, the spill taken off near it), so green inside an item (the Dis-Poison bottle)
stays. Each cell's pieces are trimmed onto a transparent square (items, avatars) or a tight box (cases).
"""
import os, sys
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')
ITEMS = 'assets/femc/battle/art/items'
# stem: (folder, cols, rows, ids in reading order (None = an empty cell), size, square)
SHEETS = {
    'battleitems-sheet1': (ITEMS, 3, 2, ['medicine', 'bead', 'bead_chain', 'snuff_soul', 'chewing_soul', 'soma'], 128, True),
    'battleitems-sheet2': (ITEMS, 3, 2, ['revival_bead', 'patra_gem', 'dis_poison', 'dekaja_gem', 'dekunda_gem', 'traesto_gem'], 128, True),
    'battleitems-sheet3': (ITEMS, 3, 2, ['tartarus_key', 'shadow_ash', 'mask_shard', 'crimson_lacquer', 'mirror_shard', 'rusted_cog'], 128, True),
    'battleitems-sheet4': (ITEMS, 3, 2, ['stone_heart', 'moon_feather', 'arcana_fragment', 'tarot_dust', 'velvet_thread', 'lantern_glass'], 128, True),
    'battleitems-sheet5': (ITEMS, 3, 2, ['echo_shell', 'gilded_scale', 'guardian_crest', 'monad_sand', None, None], 128, True),
    'phonecases': ('assets/femc/game/art/cases', 3, 2, ['sakura', 'featherman', 'koro', 'moonlight', 'velvet', 'gold'], 288, False),
    'groupchaticons': ('assets/femc/game/art/phone', 2, 2, ['sees', 'sisters', 'searchparty', 'hateclub'], 176, True),
    # Batch 52: Haenim's sun node icons, 5 x 5 (sun.js ICONS / iconFor picks one per node).
    'sun-icons': ('assets/femc/battle/art/sun', 5, 5, ['crit', 'speed', 'evade', 'counter', 'autobuff', 'firstcut', 'hpregen', 'spregen', 'weak',
        'followup', 'ailment', 'ailturns', 'lowhp', 'physup', 'magicup', 'healup', 'corona', 'bell', 'momentum', 'buffturns', 'theurgy',
        'nullail', 'stat', 'keystone', 'memory'], 96, True),
    # Batch 54: the last two menu tab icons (menu.js TAB_ICONS), 2 x 1, sized like batch 43's tab icons.
    'menu-icons-2': ('assets/femc/game/art/icons', 2, 1, ['calendar', 'compendium'], 128, True),
}


def source(stem):
    for d in ('New Adds', 'Added to Game'):
        p = os.path.join(IMAGES, d, stem + '.png')
        if os.path.exists(p): return p
    return None


def key_outer_green(rgb):
    """(rgb, alpha): the green connected to the sheet's edge goes; green enclosed by an item's outline stays."""
    a = rgb.astype(np.float32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    green = g - np.maximum(r, b)
    lab, _ = ndi.label(green > 30)
    edge = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    bg = np.isin(lab, edge[edge > 0])
    # Holes the sheet's green shows through (inside a bead bracelet, a cog, a mask's eye) are the same flat green as the
    # board; the green an item is painted in (the Dis-Poison bottle) isn't, so keep any enclosed patch that isn't.
    flat = np.median(a[bg], axis=0)
    close = np.abs(a - flat).max(2) < 40
    for k in np.setdiff1d(np.unique(lab[(green > 30) & ~bg]), [0]):
        part = lab == k
        if part.sum() > 30 and close[part].mean() > 0.6: bg |= part
    near = ndi.binary_dilation(bg, iterations=4)
    alpha = np.where(near, np.clip(1 - (green - 30) / 90, 0, 1), 1)
    alpha[bg & (green > 120)] = 0
    out = a.copy()
    out[..., 1] = np.where(near, np.minimum(g, np.maximum(r, b) + 10), g)
    return out.astype(np.uint8), (alpha * 255).astype(np.uint8)


def cut(src, folder, cols, rows, ids, size, square):
    rgb, alpha = key_outer_green(np.asarray(Image.open(src).convert('RGB')))
    H, W = alpha.shape
    lab, n = ndi.label(alpha > 40)
    objs = ndi.find_objects(lab)
    sizes = ndi.sum(np.ones_like(lab), lab, range(1, n + 1))
    cells = {i: [] for i in range(cols * rows)}
    for k, sl in enumerate(objs, 1):
        if sizes[k - 1] < 60: continue  # specks
        cy, cx = (sl[0].start + sl[0].stop) / 2, (sl[1].start + sl[1].stop) / 2
        cells[min(rows - 1, int(cy / (H / rows))) * cols + min(cols - 1, int(cx / (W / cols)))].append(k)
    dst = os.path.join(ROOT, folder)
    os.makedirs(dst, exist_ok=True)
    for i, name in enumerate(ids):
        if name is None: continue
        if not cells[i]: raise SystemExit(f'{src}: nothing in cell {i} ({name})')
        m = np.isin(lab, cells[i])
        ys, xs = np.nonzero(m)
        y0, y1, x0, x1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
        im = Image.fromarray(np.dstack([rgb[y0:y1, x0:x1], np.where(m, alpha, 0)[y0:y1, x0:x1]]))
        pad = max(4, max(im.size) // 30)
        cw, ch = (max(im.size) + 2 * pad,) * 2 if square else (im.width + 2 * pad, im.height + 2 * pad)
        canvas = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
        canvas.paste(im, ((cw - im.width) // 2, (ch - im.height) // 2))
        k = size / max(canvas.size)
        if k < 1: canvas = canvas.resize((round(canvas.width * k), round(canvas.height * k)), Image.LANCZOS)
        canvas.save(os.path.join(dst, name + '.webp'), 'WEBP', quality=90, method=6)
        print(f'  {name}: box {x0},{y0}-{x1},{y1} -> {canvas.size}')


def check(out):
    files = [os.path.join(ROOT, f, n + '.webp') for f, _, _, ids, _, _ in SHEETS.values() for n in ids if n]
    cw, ch, per = 120, 150, 10
    rows = (len(files) + per - 1) // per
    sheet = Image.new('RGB', (per * cw, rows * ch * 2), (20, 7, 15))
    for i, f in enumerate(files):
        im = Image.open(f).convert('RGBA'); im.thumbnail((cw - 12, ch - 12))
        for j, bg in enumerate([(32, 14, 40), (255, 255, 255)]):
            tile = Image.new('RGBA', (cw, ch), bg + (255,))
            tile.alpha_composite(im, ((cw - im.width) // 2, (ch - im.height) // 2))
            sheet.paste(tile.convert('RGB'), ((i % per) * cw, ((i // per) * 2 + j) * ch))
    sheet.save(out)
    print('  wrote', out)


def main():
    if len(sys.argv) > 2 and sys.argv[1] == 'check': return check(sys.argv[2])
    only = sys.argv[2:] if len(sys.argv) > 2 and sys.argv[1] == 'all' else None  # all [stem ...]: just those sheets
    for stem, spec in SHEETS.items():
        if only and stem not in only: continue
        src = source(stem)
        if not src: print('  missing', stem); continue
        print(os.path.basename(src))
        cut(src, *spec)


if __name__ == '__main__':
    main()
