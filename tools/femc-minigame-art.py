#!/usr/bin/env python3
"""Kat's minigame art: Regionals (mg-ow-*, FEMC-ART-TODO 43), the dumpling game (cook-*, 44), the booth (sing-*, 45), the listen game (listen-*, 47: street, things sheet, stickers sheet, haechan),
hwatu (hwatu-month-MM, 49), Yeobo's café (cafe-*, 50), The Trip (trip-*, 56).

  python3 tools/femc-minigame-art.py        every New Adds/mg-ow-* | cook-* | sing-* (.png .jpg .jpeg .webp) that's there
                                             (re-run any time; it replaces). Kat's files are only read.
  python3 tools/femc-minigame-art.py FILE…  only these files, from anywhere (named as above; Kat's WIP folder, a lifted copy)

Opaque sheets on a dark background (Kat's sing-solar-poses came on purple): lift a copy first with macOS Vision
(swiftc tools/femc-lift.swift -o lift; ./lift SRC scratch/sing-solar-poses.png) and pass that copy.

Regionals -> assets/femc/game/art/minigames/ow/<name>.webp (New Adds/mg-ow-<name>.*):
  map-<id>-<n>   16:9 backgrounds (Kat made 3 per map: map-busan-1..3, map-lijiang-1..3): at most 1920 wide, RGB, q86
  victory, defeat  the round / match card backgrounds: RGB, q86
  hands        Solar's first-person hands: kept transparent (a white background is keyed out), q90
  team-*, foe-*  full-body figures: transparent, trimmed to the figure with the feet on the bottom edge, on a 1:2 canvas, q90
  potg-*       the Play of the Game splash: RGB, at most 1920 wide, q88
Dumplings -> art/minigames/cook/ (New Adds/cook-<name>.*): counter, pan RGB; hands transparent; icons and stamps are sheets.
The booth -> art/minigames/sing/ (New Adds/sing-<name>.*): booth, haechan-desk, title RGB; the rest transparent; sheets below.
Hwatu -> art/minigames/hwatu/cards/<MM><type>.webp (New Adds/hwatu-month-MM.*): 4 cards left to right in hwatu.js MONTHS ty order,
  keyed, trimmed, 240 x 360. HWATU_FILE maps Kat's file number to the deck's month where they differ (empty since Nov 13).
  hwatu-back (card back: keyed, trimmed, 240 x 360), hwatu-felt (tile, RGB 768), hwatu-title (RGB 1920) -> art/minigames/hwatu/.
Café -> art/minigames/cafe/ (New Adds/cafe-<name>.*): bg-*, title RGB q86; sheets in CAFE_SHEETS; faces (already transparent) cut on an
  even grid into square 480 px cells (CAFE_FACES; cafe-regular-msbae -> the game's id mrsbae); cafe-downloads is Kat's name for the toppings sheet.
The Trip -> art/minigames/trip/ (New Adds/trip-<name>.*): ground (RGB, <= 2400 wide), title / sky (RGB 1920) q86; props 2 x 2 (TRIP_SHEETS);
  playground, blanket alpha; trip-sprite-<id> -> sprite-<id>.webp: 16 frames cut, one scale per sheet, re-laid on an even 4 x 4 grid of
  256 px cells, feet on a baseline 4% above each cell's bottom.
Each game loads its pictures by name and falls back to its drawn stand-in when a file isn't there.

Sheets (SHEETS): cut at the emptiest line near each expected grid line (not equal division: Kat's sheets aren't evenly laid
out, e.g. "Ready?" runs past the first third of the count-in), each piece trimmed, then
  'feet'    all frames on one canvas, feet on the bottom (pose / bop sheets)
  'center'  all frames on one square canvas, centred (arrows, icons, stamps: same size, so the game can rotate / swap them)
  'base'    all frames on one SQUARE canvas, bottoms aligned (café drinks, cups)
  'body'    all frames on one square canvas, centred on each frame's biggest piece (hotteok / toast: a burnt one's smoke doesn't shift it)
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
OW_SHEETS = {  # the player cards (FEMC-ART-TODO 43N), in the prompt's order; 'solid' drops the faint glow around each card
    'cards': (5, 1, ['card-solar', 'card-chenle', 'card-minji', 'card-olivia', 'card-haerin'], None, {'solid': 160}),
}
GRID_RGB = {  # opaque sheets cut on an even grid, each cell kept as a square picture (the talkback window shows its background)
    'haechan-faces': (3, 2, ['hc-neutral', 'hc-talking', 'hc-impressed', 'hc-happy', 'hc-wince', 'hc-soft']),
}
COOK_SHEETS = {
    'icons': (3, 2, ['icon-perfect', 'icon-okay', 'icon-bag', 'icon-golden', 'icon-burnt', 'icon-steamed'], 'center', {}),
    'stamps': (2, 2, ['stamp-s', 'stamp-a', 'stamp-b', 'stamp-c'], 'center', {}),
}

CAFE_SHEETS = {  # Yeobo's café (FEMC-ART-TODO 50; cafe.js names), cell order checked by eye on Kat's sheets
    'drinks': (2, 2, ['drink-cocoa', 'drink-yuzu', 'drink-americano', 'drink-sikhye'], 'base', {}),
    'cups': (2, 1, ['cup-s', 'cup-l'], 'base', {}),
    'addins': (3, 3, ['add-cream', 'add-marsh', 'add-cinnamon', 'add-honey', 'add-ginger', 'add-shot', 'add-syrup', 'add-pine', 'add-ice'], 'center', {'white': 251}),  # cream, marshmallow, ice are white on white
    'hotteok': (2, 2, ['hotteok-raw', 'hotteok-cooking', 'hotteok-done', 'hotteok-burnt'], 'body', {}),
    'toast': (2, 2, ['toast-raw', 'toast-cooking', 'toast-done', 'toast-burnt'], 'body', {}),
    'fillings': (4, 2, ['fill-rice', 'fill-egg', 'fill-carrot', 'fill-spinach', 'fill-danmuji', 'fill-ham', 'fill-tuna'], None, {}),
    'toppings': (3, 2, ['top-seeds', 'top-syrup', 'top-powder', 'top-sugar', 'top-ketchup', 'top-cheese'], 'center', {}),
    'downloads': (3, 2, ['top-seeds', 'top-syrup', 'top-powder', 'top-sugar', 'top-ketchup', 'top-cheese'], 'center', {}),  # Kat's file name for the toppings
    'tray': (2, 1, ['tray', 'plate'], None, {}),
    'tipjar': (2, 1, ['tipjar', 'coin'], None, {'size': {'coin': 128, 'tipjar': 600}}),
    'stamps': (2, 2, ['stamp-s', 'stamp-a', 'stamp-b', 'stamp-c'], 'center', {}),
}
CAFE_ONE = {'ticket': 360, 'stampcard': 480}  # single alpha pictures: max width
CAFE_FACES = {  # transparent face sheets, even grid -> square cells (cols, rows, prefix, expressions)
    'sunoo-apron-portraits': (3, 2, 'sunoo-apron', ['neutral', 'happy', 'surprised', 'flustered', 'sad', 'serious']),
}
CAFE_REGULAR_ID = {'msbae': 'mrsbae'}  # Kat's file id -> cafe.js REGULARS id
HWATU_FILE = {}  # Kat's file number -> deck month where they differ. Nov 13: none now. (Added to Game/hwatu-month-05 / -06 from Nov 12 are June / July:
#   to re-cut those two, add {5: 6, 6: 7} back for that run only.)
TRIP_SHEETS = {
    'props': (2, 2, ['tree', 'willow', 'lamp', 'bench'], None, {}),
}


def whiteish(px, lo=232):
    d = px[..., :3].min(2).astype(int); sat = px[..., :3].max(2).astype(int) - d
    return d, (d > lo) & (sat < 16)


def soft(px, region, d):
    """key a region out with a soft edge (2 px of falloff into the neighbours)"""
    zone = nd.binary_dilation(region, iterations=2)
    a = px[..., 3].astype(int)
    px[..., 3] = np.where(region, 0, np.where(zone, np.minimum(a, np.clip((255 - d) * 12, 0, 255)), a)).astype(np.uint8)


def alpha(im, lo=232):
    """RGBA; an opaque picture on white gets the white that touches the edge keyed out (enclosed white is kept);
    lo: how white counts as background (raise it for white things on white: whipped cream, ice, marshmallows)"""
    im = im.convert('RGBA')
    if im.getchannel('A').getextrema()[0] < 255: return im
    px = np.asarray(im).copy(); d, w = whiteish(px, lo)
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
    im = alpha(Image.open(src), opt.get('white', 232))
    if opt.get('solid'): px = np.asarray(im).copy(); px[..., 3] = np.where(px[..., 3] < opt['solid'], 0, px[..., 3]); im = Image.fromarray(px)
    W, H = im.size; a = np.asarray(im.getchannel('A')) > 16
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
    if mode in ('center', 'base'): cw = ch = max(cw, ch)
    if mode == 'body':
        offs = {n: body_centre(c) for n, c in cells}
        cw = ch = 2 * max(max(cx, c.width - cx, cy, c.height - cy) for n, c in cells for cx, cy in [offs[n]])
    for n, c in cells:
        if mode == 'body':
            cx, cy = offs[n]; cv = Image.new('RGBA', (cw, ch), (0, 0, 0, 0)); cv.paste(c, (cw // 2 - cx, ch // 2 - cy)); c = cv
        elif mode:
            cv = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
            cv.paste(c, ((cw - c.width) // 2, ch - c.height if mode in ('feet', 'base') else (ch - c.height) // 2)); c = cv
        fit(c, opt.get('size', {}).get(n, 1400)).save(out / f'{n}.webp', 'WEBP', quality=90, alpha_quality=100); print(src.name, '->', n, c.size)


def body_centre(c):
    """the centre of a frame's biggest solid piece (so smoke or a stray crumb doesn't move it)"""
    lab, n = nd.label(np.asarray(c.getchannel('A')) > 128)
    if not n: return c.width // 2, c.height // 2
    k = int(np.argmax(nd.sum(lab > 0, lab, range(1, n + 1)))) + 1; ys, xs = np.nonzero(lab == k)
    return (int(xs.min()) + int(xs.max())) // 2, (int(ys.min()) + int(ys.max())) // 2


def opaque_crop(im):
    """crop an opaque picture on white tight to what isn't the edge white (kimbap seaweed / rice sheets)"""
    a = np.asarray(alpha(im).getchannel('A')) > 128; ys, xs = np.nonzero(a.any(1))[0], np.nonzero(a.any(0))[0]
    return im.convert('RGB').crop((int(xs[0]), int(ys[0]), int(xs[-1]) + 1, int(ys[-1]) + 1))


def grid_cells(im, cols, rows):
    """an even grid: [(col, row, cell)]"""
    cw, ch = im.width / cols, im.height / rows
    return [(c, r, im.crop((round(c * cw), round(r * ch), round((c + 1) * cw), round((r + 1) * ch)))) for r in range(rows) for c in range(cols)]


def sprite_sheet(src, dst, cell=256, base=0.04):
    """Kat's 4 x 4 walk sheet -> one even 4 x 4 grid: frames cut at the emptiest lines, trimmed, one scale for the sheet,
    feet on a baseline `base` above each cell's bottom, centred left to right"""
    im = alpha(Image.open(src)); a = np.asarray(im.getchannel('A')) > 16
    ys = cuts(a.sum(1), 4); frames = []
    for r in range(4):
        xs = cuts(a[ys[r]:ys[r + 1]].sum(0), 4)
        for c in range(4): frames.append(trim(im.crop((xs[c], ys[r], xs[c + 1], ys[r + 1]))))
    top = cell * (1 - base) - cell * 0.03
    k = min(top / max(f.height for f in frames), cell * 0.94 / max(f.width for f in frames))
    out = Image.new('RGBA', (cell * 4, cell * 4), (0, 0, 0, 0)); foot = round(cell * (1 - base))
    for i, f in enumerate(frames):
        f = f.resize((max(1, round(f.width * k)), max(1, round(f.height * k))), Image.LANCZOS)
        out.alpha_composite(f, ((i % 4) * cell + (cell - f.width) // 2, (i // 4) * cell + foot - f.height))
    out.save(dst, 'WEBP', quality=90, alpha_quality=100); print(src.name, '->', dst.relative_to(ROOT), 'scale', round(k, 3))


def hwatu_month(src, out):
    """4 cards in a row on white -> cards/<MM><type>.webp in the deck's own type order"""
    TY = {1: 'b r j1 j2', 2: 'a r j1 j2', 3: 'b r j1 j2', 4: 'a r j1 j2', 5: 'a r j1 j2', 6: 'a r j1 j2', 7: 'a r j1 j2',
          8: 'b a j1 j2', 9: 'a r j1 j2', 10: 'a r j1 j2', 11: 'b jd j1 j2', 12: 'b a r jd'}
    n = int(src.stem.split('-')[-1]); m = HWATU_FILE.get(n, n)
    im = alpha(Image.open(src)); a = np.asarray(im.getchannel('A')) > 16
    col = a.sum(0); xs = cuts(col, 4)
    for i, t in enumerate(TY[m].split()):
        c = trim(im.crop((xs[i], 0, xs[i + 1], im.height)))
        c.resize((240, 360), Image.LANCZOS).save(out / f'{m:02d}{t}.webp', 'WEBP', quality=90, alpha_quality=100)
        print(src.name, '->', f'cards/{m:02d}{t}', c.size)


def figure(im):
    im = alpha(im); a = np.asarray(im.getchannel('A')) > 16
    ys, xs = np.nonzero(a.sum(1) >= 3)[0], np.nonzero(a.sum(0) >= 3)[0]
    im = im.crop((int(xs[0]), int(ys[0]), int(xs[-1]) + 1, int(ys[-1]) + 1))
    w, h = im.size; H = max(h, w * 2); W = H // 2
    c = Image.new('RGBA', (W, H), (0, 0, 0, 0)); c.paste(im, ((W - w) // 2, H - h)); return c


def fit(im, w=1920):
    return im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)


PICK = [Path(a) for a in __import__('sys').argv[1:]]


def files(prefix):
    src = [f for f in PICK if f.name.startswith(prefix)] if PICK else sorted(NEW.glob(prefix + '*'))
    return [f for f in src if f.suffix.lower() in EXTS]


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
        if name in GRID_RGB:
            cols, rows, names = GRID_RGB[name]; im = Image.open(f).convert('RGB'); cw, ch = im.width / cols, im.height / rows
            for i, n in enumerate(names):
                x, y = (i % cols) * cw, (i // cols) * ch; s = min(cw, ch) * 0.96
                cell = im.crop((round(x + (cw - s) / 2), round(y + (ch - s) / 2), round(x + (cw + s) / 2), round(y + (ch + s) / 2)))
                cell.resize((480, 480), Image.LANCZOS).save(SING / f'{n}.webp', 'WEBP', quality=88); print(f.name, '->', n)
            continue
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
    CAFE = ART / 'cafe'; CAFE.mkdir(parents=True, exist_ok=True)
    for f in files('cafe-'):
        name = f.stem[len('cafe-'):]; im = Image.open(f)
        if name in CAFE_SHEETS: sheet(f, CAFE_SHEETS[name], CAFE); continue
        if name.startswith('regular-') or name in CAFE_FACES:
            if name in CAFE_FACES: cols, rows, pre, ex = CAFE_FACES[name]
            else: rid = name[len('regular-'):]; cols, rows, pre, ex = 3, 1, 'face-' + CAFE_REGULAR_ID.get(rid, rid), ['neutral', 'happy', 'grumpy']
            for (c, r, cell), e in zip(grid_cells(im.convert('RGBA'), cols, rows), ex):
                s = min(cell.size); cell = cell.crop(((cell.width - s) // 2, 0, (cell.width - s) // 2 + s, s))
                cell.resize((480, 480), Image.LANCZOS).save(CAFE / f'{pre}-{e}.webp', 'WEBP', quality=88, alpha_quality=100); print(f.name, '->', f'{pre}-{e}')
            continue
        if name == 'kimbap':
            (_, _, sw), (_, _, rc), (_, _, roll), (_, _, sl) = grid_cells(im, 2, 2)
            opaque_crop(sw).save(CAFE / 'kimbap-seaweed.webp', 'WEBP', quality=88); opaque_crop(rc).save(CAFE / 'kimbap-rice.webp', 'WEBP', quality=88)
            trim(alpha(roll)).save(CAFE / 'kimbap-roll.webp', 'WEBP', quality=90, alpha_quality=100)
            trim(alpha(sl)).save(CAFE / 'kimbap-sliced.webp', 'WEBP', quality=90, alpha_quality=100); print(f.name, '-> kimbap-seaweed / -rice / -roll / -sliced'); continue
        if name in CAFE_ONE: fit(trim(alpha(im)), CAFE_ONE[name]).save(CAFE / f'{name}.webp', 'WEBP', quality=90, alpha_quality=100)
        else: fit(im.convert('RGB')).save(CAFE / f'{name}.webp', 'WEBP', quality=86)  # bg-*, title
        print(f.name, '->', name)
    HW = ART / 'hwatu' / 'cards'; HW.mkdir(parents=True, exist_ok=True)
    for f in files('hwatu-month-'): hwatu_month(f, HW)
    for f in files('hwatu-'):
        name = f.stem[len('hwatu-'):]; im = Image.open(f); dst = ART / 'hwatu' / f'{name}.webp'
        if name == 'back': trim(alpha(im)).resize((240, 360), Image.LANCZOS).save(dst, 'WEBP', quality=90, alpha_quality=100)
        elif name == 'felt': im.convert('RGB').resize((768, 768), Image.LANCZOS).save(dst, 'WEBP', quality=86)
        elif name == 'title': fit(im.convert('RGB')).save(dst, 'WEBP', quality=86)
        else: continue
        print(f.name, '->', dst.relative_to(ROOT))
    TRIP = ART / 'trip'; TRIP.mkdir(parents=True, exist_ok=True)
    for f in files('trip-'):
        name = f.stem[len('trip-'):]; im = Image.open(f)
        if name in TRIP_SHEETS: sheet(f, TRIP_SHEETS[name], TRIP); continue
        if name.startswith('sprite-'): sprite_sheet(f, TRIP / f'{name}.webp'); continue
        if name == 'ground': fit(im.convert('RGB'), 2400).save(TRIP / 'ground.webp', 'WEBP', quality=86)
        elif name in ('title', 'sky'): fit(im.convert('RGB')).save(TRIP / f'{name}.webp', 'WEBP', quality=86)
        else: fit(trim(alpha(im)), 1400).save(TRIP / f'{name}.webp', 'WEBP', quality=90, alpha_quality=100)  # playground, blanket
        print(f.name, '->', name)
    for f in files('mg-ow-'):
        name = f.stem[len('mg-ow-'):]
        if name in OW_SHEETS: sheet(f, OW_SHEETS[name], OW); continue
        im = Image.open(f); dst = OW / f'{name}.webp'
        if name.startswith('map-') or name in ('victory', 'defeat'): fit(im.convert('RGB')).save(dst, 'WEBP', quality=86)
        elif name.startswith('potg'): fit(im.convert('RGB')).save(dst, 'WEBP', quality=88)
        elif name == 'hands': fit(alpha(im)).save(dst, 'WEBP', quality=90, alpha_quality=100)
        else: figure(im).save(dst, 'WEBP', quality=90, alpha_quality=100)
        print(f.name, '->', dst.relative_to(ROOT), Image.open(dst).size)


if __name__ == '__main__':
    main()
