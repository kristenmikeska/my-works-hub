#!/usr/bin/env python3
"""Kat's minigame art: Regionals (mg-ow-*, FEMC-ART-TODO 43), the dumpling game (cook-*, 44), the booth (sing-*, 45), the listen game (listen-*, 47: street, things sheet, stickers sheet, haechan).

  python3 tools/femc-minigame-art.py        every New Adds/mg-ow-* | cook-* | sing-* (.png .jpg .jpeg .webp) that's there
                                             (re-run any time; it replaces). Kat's files are only read.

Regionals -> assets/femc/game/art/minigames/ow/<name>.webp (New Adds/mg-ow-<name>.*):
  map-<id>-<n>   16:9 backgrounds (Kat made 3 per map: map-busan-1..3, map-lijiang-1..3): at most 1920 wide, RGB, q86
  victory, defeat  the round / match card backgrounds: RGB, q86
  hands        Solar's first-person hands: kept transparent (a white background is keyed out), q90
  team-*, foe-*  full-body figures: transparent, trimmed to the figure with the feet on the bottom edge, on a 1:2 canvas, q90
  potg-*       the Play of the Game splash: RGB, at most 1920 wide, q88
Dumplings -> art/minigames/cook/ (New Adds/cook-<name>.*): counter, pan RGB; hands transparent; icons and stamps are sheets.
The booth -> art/minigames/sing/ (New Adds/sing-<name>.*): booth, haechan-desk, title RGB; the rest transparent; sheets below.
Each game loads its pictures by name and falls back to its drawn stand-in when a file isn't there.

Sheets (SHEETS): cut at the emptiest line near each expected grid line (not equal division: Kat's sheets aren't evenly laid
out, e.g. "Ready?" runs past the first third of the count-in), each piece trimmed, then
  'feet'    all frames on one canvas, feet on the bottom (pose / bop sheets)
  'center'  all frames on one square canvas, centred (arrows, icons, stamps: same size, so the game can rotate / swap them)
  None      each frame trimmed to itself (rating and count-in words)
White backgrounds (JPEGs) are keyed only where the white touches the edge, so white letters (PERFECT!!, Ready?) stay;
'holes' frames also key enclosed white of at least their size in px (the inside of GOOD's Os, OK's O, the gaps in MISS); 'fill' frames get
their enclosed transparent gaps filled white (Kat's arrows came with the white ring between arrow and black outline cut out).
"""
from pathlib import Path
import numpy as np
from PIL import Image
from scipy import ndimage as nd

ROOT = Path(__file__).resolve().parent.parent
NEW = Path.home() / 'Documents/UniverseHub-Images/Femc Mode Images/New Adds'
ART = ROOT / 'assets/femc/game/art/minigames'
EXTS = ('.png', '.jpg', '.jpeg', '.webp')

SING_SHEETS = {  # name: (cols, rows, frame names in reading order, canvas mode, options)
    'solar-poses': (3, 2, ['solar-idle', 'solar-left', 'solar-down', 'solar-up', 'solar-right', 'solar-miss'], 'feet', {}),
    'haechan-bop': (2, 1, ['haechan-bop-0', 'haechan-bop-1'], 'feet', {}),
    'haechan-poses': (3, 2, ['haechan-idle', 'haechan-left', 'haechan-down', 'haechan-up', 'haechan-right', 'haechan-miss'], 'feet', {}),
    'solar-bop': (2, 1, ['solar-bop-0', 'solar-bop-1'], 'feet', {}),
    # all four arrows point UP (sing.js rotates them per lane); lane colours hot pink, rose, blush, coral; then the target, the splash
    'arrows': (3, 2, ['arrow-0', 'arrow-1', 'arrow-2', 'arrow-3', 'target', 'splash'], 'center', {'fill': {'arrow-0', 'arrow-1', 'arrow-2', 'arrow-3'}}),
    'ratings': (2, 2, ['rating-perfect', 'rating-good', 'rating-ok', 'rating-miss'], None, {'holes': {'rating-good': 60, 'rating-ok': 60, 'rating-miss': 500}}),  # holes: min px (MISS keeps its drop's shine)
    'countdown': (3, 1, ['ready', 'set', 'sing'], None, {}),
}
LISTEN_SHEETS = {  # the listen game (FEMC-ART-TODO 47): the six things and their stickers, in listen.js THINGS order
    'things': (3, 2, ['obj-heat', 'obj-train', 'obj-light', 'obj-cab', 'obj-steam', 'obj-rad'], 'center', {}),
    'stickers': (3, 2, ['sticker-heat', 'sticker-train', 'sticker-light', 'sticker-cab', 'sticker-steam', 'sticker-rad'], 'center', {}),
}
COOK_SHEETS = {
    'icons': (3, 2, ['icon-perfect', 'icon-okay', 'icon-bag', 'icon-golden', 'icon-burnt', 'icon-steamed'], 'center', {}),
    'stamps': (2, 2, ['stamp-s', 'stamp-a', 'stamp-b', 'stamp-c'], 'center', {}),
}


def whiteish(px):
    d = px[..., :3].min(2).astype(int); sat = px[..., :3].max(2).astype(int) - d
    return d, (d > 232) & (sat < 16)


def soft(px, region, d):
    """key a region out with a soft edge (2 px of falloff into the neighbours)"""
    zone = nd.binary_dilation(region, iterations=2)
    a = px[..., 3].astype(int)
    px[..., 3] = np.where(region, 0, np.where(zone, np.minimum(a, np.clip((255 - d) * 12, 0, 255)), a)).astype(np.uint8)


def alpha(im):
    """RGBA; an opaque picture on white gets the white that touches the edge keyed out (enclosed white is kept)"""
    im = im.convert('RGBA')
    if im.getchannel('A').getextrema()[0] < 255: return im
    px = np.asarray(im).copy(); d, w = whiteish(px)
    lab, _ = nd.label(w); edge = np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]]); edge = edge[edge > 0]
    if not len(edge): return im
    soft(px, np.isin(lab, edge), d)
    return Image.fromarray(px)


def key_holes(im, min_px=500):
    px = np.asarray(im).copy(); d, w = whiteish(px); w &= px[..., 3] > 200
    lab, n = nd.label(w); sizes = nd.sum(w, lab, range(1, n + 1))
    soft(px, np.isin(lab, [i + 1 for i, s in enumerate(sizes) if s >= min_px]), d)
    return Image.fromarray(px)


def fill_gaps(im):
    px = np.asarray(im).astype(float); a = px[..., 3] / 255
    clear = a < 0.06; lab, _ = nd.label(clear)
    edge = np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])
    gap = clear & ~np.isin(lab, edge)
    zone = nd.binary_dilation(gap, iterations=3) & (a < 1)
    for c in range(3): px[..., c] = np.where(zone, px[..., c] * a + 255 * (1 - a), px[..., c])
    px[..., 3] = np.where(zone, 255, px[..., 3])
    return Image.fromarray(px.astype(np.uint8))


def cuts(profile, n):
    """n-1 cut positions: for each expected grid line, the middle of the emptiest run within ±40% of a cell"""
    L = len(profile); out = [0]
    for i in range(1, n):
        e = L * i // n; lo, hi = max(out[-1] + 1, e - int(L / n * 0.4)), min(L - 1, e + int(L / n * 0.4))
        win = profile[lo:hi]; m = win.min(); runs, s = [], None
        for j, v in enumerate(win):
            if v <= m and s is None: s = j
            if (v > m or j == len(win) - 1) and s is not None: runs.append((s, j if v > m else j + 1)); s = None
        a, b = max(runs, key=lambda r: (r[1] - r[0], -abs((r[0] + r[1]) / 2 - (e - lo))))
        out.append(lo + (a + b) // 2)
    return out + [L]


def trim(c):
    a = np.asarray(c.getchannel('A')) > 16; ys, xs = np.nonzero(a.any(1))[0], np.nonzero(a.any(0))[0]
    return None if len(ys) == 0 else c.crop((int(xs[0]), int(ys[0]), int(xs[-1]) + 1, int(ys[-1]) + 1))


def sheet(src, spec, out):
    cols, rows, names, mode, opt = spec
    im = alpha(Image.open(src)); W, H = im.size; a = np.asarray(im.getchannel('A')) > 16
    ys = cuts(a.sum(1), rows); cells = []
    for r in range(rows):
        band = a[ys[r]:ys[r + 1]]; xs = cuts(band.sum(0), cols)
        for c in range(cols):
            i = r * cols + c
            if i >= len(names): break
            n = names[i]; cell = im.crop((xs[c], ys[r], xs[c + 1], ys[r + 1]))
            if n in opt.get('holes', {}): cell = key_holes(cell, opt['holes'][n])
            if n in opt.get('fill', ()): cell = fill_gaps(cell)
            cell = trim(cell)
            if cell is not None: cells.append((n, cell))
    cw, ch = max(c.width for _, c in cells), max(c.height for _, c in cells)
    if mode == 'center': cw = ch = max(cw, ch)
    for n, c in cells:
        if mode:
            cv = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
            cv.paste(c, ((cw - c.width) // 2, ch - c.height if mode == 'feet' else (ch - c.height) // 2)); c = cv
        fit(c, 1400).save(out / f'{n}.webp', 'WEBP', quality=90, alpha_quality=100); print(src.name, '->', n, c.size)


def figure(im):
    im = alpha(im); a = np.asarray(im.getchannel('A')) > 16
    ys, xs = np.nonzero(a.sum(1) >= 3)[0], np.nonzero(a.sum(0) >= 3)[0]
    im = im.crop((int(xs[0]), int(ys[0]), int(xs[-1]) + 1, int(ys[-1]) + 1))
    w, h = im.size; H = max(h, w * 2); W = H // 2
    c = Image.new('RGBA', (W, H), (0, 0, 0, 0)); c.paste(im, ((W - w) // 2, H - h)); return c


def fit(im, w=1920):
    return im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)


def files(prefix):
    return [f for f in sorted(NEW.glob(prefix + '*')) if f.suffix.lower() in EXTS]


def main():
    COOK, SING, OW = ART / 'cook', ART / 'sing', ART / 'ow'
    for d in (COOK, SING, OW): d.mkdir(parents=True, exist_ok=True)
    for f in files('cook-'):
        name = f.stem[len('cook-'):]
        if name in COOK_SHEETS: sheet(f, COOK_SHEETS[name], COOK); continue
        dst = COOK / f'{name}.webp'; im = Image.open(f)
        if name == 'hands': fit(alpha(im)).save(dst, 'WEBP', quality=90, alpha_quality=100)
        else: fit(im.convert('RGB')).save(dst, 'WEBP', quality=88)
        print(f.name, '->', dst.relative_to(ROOT))
    for f in files('sing-'):
        name = f.stem[len('sing-'):]
        if name in SING_SHEETS: sheet(f, SING_SHEETS[name], SING); continue
        dst = SING / f'{name}.webp'; im = Image.open(f)
        if name in ('booth', 'haechan-desk', 'title'): fit(im.convert('RGB')).save(dst, 'WEBP', quality=88)
        else: fit(alpha(im)).save(dst, 'WEBP', quality=90, alpha_quality=100)
        print(f.name, '->', dst.relative_to(ROOT))
    LIS = ART / 'listen'; LIS.mkdir(parents=True, exist_ok=True)
    for f in files('listen-'):
        name = f.stem[len('listen-'):]
        if name in LISTEN_SHEETS: sheet(f, LISTEN_SHEETS[name], LIS); continue
        dst = LIS / f'{name}.webp'; im = Image.open(f)
        if name == 'street': fit(im.convert('RGB')).save(dst, 'WEBP', quality=86)
        else: fit(alpha(im)).save(dst, 'WEBP', quality=90, alpha_quality=100)
        print(f.name, '->', dst.relative_to(ROOT))
    for f in files('mg-ow-'):
        name = f.stem[len('mg-ow-'):]; im = Image.open(f); dst = OW / f'{name}.webp'
        if name.startswith('map-') or name in ('victory', 'defeat'): fit(im.convert('RGB')).save(dst, 'WEBP', quality=86)
        elif name.startswith('potg'): fit(im.convert('RGB')).save(dst, 'WEBP', quality=88)
        elif name == 'hands': fit(alpha(im)).save(dst, 'WEBP', quality=90, alpha_quality=100)
        else: figure(im).save(dst, 'WEBP', quality=90, alpha_quality=100)
        print(f.name, '->', dst.relative_to(ROOT), Image.open(dst).size)


if __name__ == '__main__':
    main()
