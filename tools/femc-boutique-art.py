#!/usr/bin/env python3
"""Boutique art (FEMC-ART-TODO 28 / 29, Kat's Nov 5 2026 batch) -> assets/femc/game/art/banners/ and art/cards/.

    python3 tools/femc-boutique-art.py [SRC_DIR]     (default: Femc Mode Images/WIP, then New Adds)

  banner-<banner id>.png          -> banners/<banner id>.webp (as is, q86)
  card-back.png                   -> cards/card-back.webp (the card trimmed to its border, 2:3)
  card-frames.png (3 frames)      -> cards/frame-R / -SR / -UR.webp (2:3, the white inside and outside made transparent)
  card-art-1/-2.png (3 x 3), -3 (2 x 2) on white -> cards/art-<item id>.webp (square, white kept: they're cards)

Then runs femc-wardrobe.py scan so ready.js lists them. Sources are only read, never changed.
"""
import os, subprocess, sys
from PIL import Image, ImageDraw
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMGS = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')
OUT = os.path.join(ROOT, 'assets/femc/game/art')
BANNERS = ['bloom', 'summer', 'masquerade', 'lights', 'sunrise', 'solar', 'runners', 'sees', 'haechan', 'hoax',
           'valentine', 'akihiko', 'searchers', 'swim', 'arcana']
ART = {
    'card-art-1.png': ['bui-moonlight', 'bui-jade', 'bui-velvet', 'bui-gold', 'ui-sakura', 'ui-mint', 'ui-moonlight', 'ui-velvet', 'ui-sunrise'],
    'card-art-2.png': ['ui-summer', 'ui-pumpkin', 'tt-snow', 'tt-sakura', 'tt-darkhour', 'tt-velvet', 'tt-sunburst', 'tt-twosuns', 'tt-eclipse'],
    'card-art-3.png': ['tt-zenith', 'wp-hearts', 'wp-snow', 'wp-pajamas'],
}


def find(name, dirs):
    for d in dirs:
        p = os.path.join(d, name)
        if os.path.exists(p): return p
    return None


def boxes(mask, axis_min=40):
    """Split a mask into runs along rows then columns (sheets with white gaps)."""
    def runs(v, gap=6):
        out, on, s, quiet = [], False, 0, 0
        for i, x in enumerate(v):
            if x and not on: on, s = True, i
            if on:
                quiet = quiet + 1 if not x else 0
                if quiet >= gap: out.append((s, i - quiet + 1)); on, quiet = False, 0
        if on: out.append((s, len(v)))
        return [r for r in out if r[1] - r[0] >= axis_min]
    res = []
    for y0, y1 in runs(mask.any(1)):
        for x0, x1 in runs(mask[y0:y1].any(0)):
            sub = mask[y0:y1, x0:x1]; ys = np.where(sub.any(1))[0]
            res.append((x0, y0 + ys[0], x1, y0 + ys[-1] + 1))
    return res


def ink(im, thr=236):
    a = np.asarray(im.convert('RGB')).astype(int)
    return (a < thr).any(2)


def main():
    dirs = [sys.argv[1]] if len(sys.argv) > 1 else [os.path.join(IMGS, 'WIP'), os.path.join(IMGS, 'New Adds')]
    os.makedirs(os.path.join(OUT, 'banners'), exist_ok=True); os.makedirs(os.path.join(OUT, 'cards'), exist_ok=True)
    n = 0
    for b in BANNERS:
        p = find(f'banner-{b}.png', dirs)
        if p: Image.open(p).convert('RGB').save(os.path.join(OUT, 'banners', f'{b}.webp'), quality=86, method=6); n += 1
    p = find('card-back.png', dirs)
    if p:
        im = Image.open(p).convert('RGB'); m = (np.asarray(im).astype(int) > 40).any(2)
        ys, xs = np.where(m); im = im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
        im.resize((600, 900), Image.LANCZOS).save(os.path.join(OUT, 'cards', 'card-back.webp'), quality=88, method=6); n += 1
    p = find('card-frames.png', dirs)
    if p:
        im = Image.open(p).convert('RGBA'); bx = boxes(ink(im))
        assert len(bx) == 3, f'card-frames: found {len(bx)} frames'
        for r, b in zip(['R', 'SR', 'UR'], sorted(bx)):
            f = im.crop(b)
            # white outside the border and the plain inside -> transparent (flood from the corners and the centre)
            rgb = f.convert('RGB'); W, H = rgb.size
            for seed in [(0, 0), (W - 1, 0), (0, H - 1), (W - 1, H - 1), (W // 2, H // 2)]:
                if min(rgb.getpixel(seed)) > 225: ImageDraw.floodfill(rgb, seed, (255, 0, 255), thresh=40)
            a = np.asarray(f).copy(); key = (np.asarray(rgb) == [255, 0, 255]).all(2); a[key, 3] = 0
            Image.fromarray(a).resize((600, 900), Image.LANCZOS).save(os.path.join(OUT, 'cards', f'frame-{r}.webp'), quality=90, method=6); n += 1
    for sheet, ids in ART.items():
        p = find(sheet, dirs)
        if not p: continue
        im = Image.open(p).convert('RGB'); g = 2 if len(ids) == 4 else 3; W, H = im.size; bx = []
        for k in range(len(ids)):  # an even grid (faint cell lines), then the ink inside each cell, away from its edges
            cx0, cy0 = (k % g) * W // g, (k // g) * H // g; m = int(W / g * .05)
            cell = ink(im.crop((cx0 + m, cy0 + m, cx0 + W // g - m, cy0 + H // g - m)), 215)
            ys, xs = np.where(cell); bx.append((cx0 + m + xs.min(), cy0 + m + ys.min(), cx0 + m + xs.max() + 1, cy0 + m + ys.max() + 1))
        for i, b in zip(ids, bx):
            x0, y0, x1, y1 = b; s = max(x1 - x0, y1 - y0); cx, cy = (x0 + x1) // 2, (y0 + y1) // 2
            pad = int(s * .04); s += 2 * pad
            c = Image.new('RGB', (s, s), 'white'); c.paste(im.crop((cx - s // 2, cy - s // 2, cx + s // 2, cy + s // 2)), (0, 0))
            c.resize((360, 360), Image.LANCZOS).save(os.path.join(OUT, 'cards', f'art-{i}.webp'), quality=88, method=6); n += 1
    print(n, 'pictures')
    subprocess.run([sys.executable, os.path.join(ROOT, 'tools/femc-wardrobe.py'), 'scan'], check=True)


if __name__ == '__main__':
    main()
