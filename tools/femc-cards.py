"""Weapon sheets, Revelation card art and All-Out finish cards for FEMC battles. Sources are only read, never changed.

  python3 tools/femc-cards.py weapons SHEET.png PREFIX name1 name2 ... name6 [--rotate DEG] [--labels auto] [--wide]
        A 3x2 sheet of weapon cards on white (Kat's <name>-weapons.png, each card framed by a thin grey line with its name
        printed under the weapon) -> assets/femc/battle/art/weapons/<PREFIX>-<name>.webp, in reading order.
        The card frames are found from their grey lines; the printed name is left out. A diagonal knife is turned upright
        (--rotate, degrees counter-clockwise; 45 for a blade pointing up-right) so it fills the tall weapon slot the way the
        naginatas do (menu.js g-eq-art, battle.css .bt-loot.art: object-fit cover in a tall box). Kept on white.
        --labels auto finds the printed name itself (needed when a weapon reaches the bottom of its card, like Minji's film
        reel), instead of blanking a fixed strip. --wide puts the cut on a landscape canvas (a pair of gloves; the gear gets
        artWide and the slots show it in a wide box).
  python3 tools/femc-cards.py finish SRC.png MID
        A 16:9 All-Out finish card -> assets/femc/battle/art/finish/MID.webp (1600x900, framing kept).
  python3 tools/femc-cards.py revcard SRC.jpeg SET X0 Y0 X1
        A Revelation card set's art (Kat's card-<world>-<subject>) -> assets/femc/battle/art/cards/SET.webp: the painting inside
        her printed gold frame (the game draws its own frame), cut at X0..X1 across and from Y0 down (fractions of the source),
        as tall as the card face's art window (88:114, menu.js / icons.js revCard) needs. 540x700.
  python3 tools/femc-cards.py gear SHEET.png id1 ... id6
        A 3x2 sheet (or 3x1 strip) of armor / accessory cards on white (no names) -> assets/femc/battle/art/gear/<id>.webp (wide canvas).
  python3 tools/femc-cards.py all [--only plain- keepsakes books-]
        (also: keepsakes and books lines in BUILD, batch 52 -> game/art/items/keepsake-<id>.webp, game/art/books/<id>.webp;
        a weapons line may take grid 9 (3x3 sheets, frames found per cell), rotate 'auto' (each card stood upright on its
        own long axis), boxes, and None for an empty card)
        Rebuild everything in BUILD below from New Adds/ or Added to Game/ (wherever each source is now).
"""
import os, sys, argparse
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
WEAPONS = os.path.join(ROOT, 'assets/femc/battle/art/weapons')
FINISH = os.path.join(ROOT, 'assets/femc/battle/art/finish')
IMAGES = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')


def save(im, path, q):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, 'WEBP', quality=q, method=6)
    print('  wrote', os.path.relpath(path, ROOT), im.size)


def runs(mask_1d, min_len=1):
    """Groups of consecutive True indexes -> [(first, last)]."""
    idx = np.flatnonzero(mask_1d)
    out = []
    for i in idx:
        if out and i == out[-1][1] + 1: out[-1][1] = i
        else: out.append([i, i])
    return [(a, b) for a, b in out if b - a + 1 >= min_len]


def card_boxes(a):
    """The six card frames (x0, y0, x1, y1 inside the grey line), reading order."""
    grey = (a > 140) & (a < 225)
    cols = runs(grey.sum(0) > a.shape[0] * 0.45)
    rows = runs(grey.sum(1) > a.shape[1] * 0.45)
    # Each card has its own frame, so the lines come in order: left, right, left, right, ...
    if len(cols) != 6 or len(rows) not in (2, 4):  # 3x2, or a 3x1 strip (accessories sheet 4 came in two halves)
        raise SystemExit(f'expected a 3x2 grid of framed cards, found column lines {cols} and row lines {rows}')
    lefts, rights = [c[1] for c in cols[0::2]], [c[0] for c in cols[1::2]]
    tops, bottoms = [r[1] for r in rows[0::2]], [r[0] for r in rows[1::2]]
    return [(l + 3, t + 3, r - 2, b - 2) for t, b in zip(tops, bottoms) for l, r in zip(lefts, rights)]


def blank_name(card, span=(0.3, 0.7)):
    """Blank the printed name only: small dark marks in the card's bottom strip, centred, that don't run up into the art
    above (a film reel or a tassel reaching the strip touches its top edge, so it's kept)."""
    from scipy import ndimage as ndi
    w0, h0 = card.size
    y0 = int(h0 * 0.86)
    band = np.asarray(card.convert('L').crop((0, y0, w0, h0))).astype(int) < 200
    lab, n = ndi.label(ndi.binary_dilation(band, structure=np.ones((5, 15), bool)))
    for i, sl in enumerate(ndi.find_objects(lab), 1):
        ys, xs = sl
        cx = (xs.start + xs.stop) / 2
        if ys.start == 0 or not (span[0] * w0 < cx < span[1] * w0) or ys.stop - ys.start > 0.1 * h0: continue
        card.paste((255, 255, 255), (xs.start - 2, y0 + ys.start - 2, xs.stop + 2, y0 + ys.stop + 2))


def cell_boxes(a, cols=3, rows=3):
    """Card frames of a cols x rows sheet, found one cell at a time (batch 52: the plain-weapon 3x3 sheets, whose faint or
    doubled frame lines defeat card_boxes). Each grid cell's own frame is the grey line nearest its edges, looked for in
    the outer 15% of the cell (the innermost one there); a cell with none (or an unframed sheet) keeps a 2% margin. Reading order, inside the line."""
    H, W = a.shape
    grey = (a > 120) & (a < 232)
    out = []
    for r in range(rows):
        for c in range(cols):
            x0, x1, y0, y1 = W * c // cols, W * (c + 1) // cols, H * r // rows, H * (r + 1) // rows
            g = grey[y0:y1, x0:x1]
            def edge(frac, n, lo):
                band = range(0, int(n * .15)) if lo else range(n - 1, int(n * .85), -1)
                hits = [i for i in band if frac[i] > .75]  # a frame line is grey nearly all the way; a glow or a blade isn't
                if not hits: return int(n * .02) if lo else n - int(n * .02)
                return (max(hits) + 6) if lo else (min(hits) - 6)  # the innermost line (the next card's can sit outside it)
            fx, fy = g.mean(0), g.mean(1)
            out.append((x0 + edge(fx, x1 - x0, True), y0 + edge(fy, y1 - y0, True), x0 + edge(fx, x1 - x0, False), y0 + edge(fy, y1 - y0, False)))
    return out


def upright(card):
    """The weapon's long axis (principal axis of its ink), as degrees counter-clockwise that stand it up."""
    g = np.asarray(card.convert('L')).astype(int) < 225
    ys, xs = np.nonzero(g)
    if len(xs) < 50: return 0
    xs = xs - xs.mean(); ys = ys - ys.mean()
    cov = np.cov(np.stack([xs, -ys]))
    w, v = np.linalg.eigh(cov)
    vx, vy = v[:, w.argmax()]
    ang = np.degrees(np.arctan2(vy, vx)) % 180  # 0 = lying flat, 90 = upright
    return 90 - ang  # positive: counter-clockwise


def weapon_cut(card, rotate, aspect=0.46, pad=0.05, names='box'):
    """The weapon alone from one card: blank the printed name (centred along the card's bottom edge; the pommels sit to
    its left), turn it, trim, and centre it on a white canvas of the naginata cards' shape (or `aspect`)."""
    card = card.convert('RGB').copy()
    w0, h0 = card.size
    if names == 'auto': blank_name(card)
    elif names == 'auto-wide': blank_name(card, (0.12, 0.88))  # a long two- or three-word name (Akihiko's, Aigis's sheets)
    elif names == 'strip': card.paste((255, 255, 255), (0, int(h0 * 0.87), w0, h0))  # names in their own strip under the art (plain gloves)
    elif names == 'none': pass  # an unlabelled sheet (Junpei's, Shinjiro's and the twelve-card ones)
    else: card.paste((255, 255, 255), (int(w0 * 0.27), int(h0 * 0.9), int(w0 * 0.73), h0))
    if rotate == 'auto': rotate = upright(card); print(f'    turned {rotate:.0f} degrees')
    im = card.rotate(rotate, resample=Image.BICUBIC, expand=True, fillcolor=(255, 255, 255)) if rotate else card.convert('RGB')
    g = np.asarray(im.convert('L')).astype(int) < 238
    ys, xs = np.nonzero(g)
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    w, h = x1 - x0 + 1, y1 - y0 + 1
    H = int(h * (1 + 2 * pad)); W = max(int(w * (1 + 2 * pad)), int(H * aspect))
    H = max(H, int(W / aspect))
    out = Image.new('RGB', (W, H), (255, 255, 255))
    out.paste(im.crop((x0, y0, x1 + 1, y1 + 1)), ((W - w) // 2, (H - h) // 2))
    if max(W, H) > 560: k = 560 / max(W, H); out = out.resize((round(W * k), round(H * k)), Image.LANCZOS)
    return out


WIDE = 1.45  # a pair of gloves: landscape (game.css / battle.css .wide boxes are this shape)


# Batch 23's S.E.E.S. sheets (2528x1696): their thin, soft frame lines defeat card_boxes, so the cards' boxes are given.
# Three columns or six, two rows; the frames sit at the same places on every sheet. Reading order.
# Each box stays 8px inside its frame line, so no grey edge widens the trim.
_ROWS = [(25, 828), (865, 1662)]
GRID3 = [(x0, y0, x1, y1) for y0, y1 in _ROWS for x0, x1 in [(111, 864), (911, 1649), (1694, 2433)]]
GRID3A = [(x0, y0, x1, y1) for y0, y1 in _ROWS for x0, x1 in [(111, 844), (884, 1649), (1694, 2434)]]  # Akihiko's: narrower first column
GRID6 = [(x0, y0, x1, y1) for y0, y1 in _ROWS for x0, x1 in [(111, 476), (525, 864), (911, 1256), (1300, 1649), (1694, 2043), (2086, 2433)]]


def weapons(src, prefix, names, rotate=45, dst=WEAPONS, auto_names=False, wide=False, grid=None, pick=None, labels=None, boxes=None):
    """grid: 3, '3a' or 6 (GRID3 / GRID3A / GRID6) instead of finding the frames; pick: which cards (reading-order indexes) the names are
    for, when a sheet has more cards than weapons (Yukari's, Mitsuru's and Koromaru's have twelve or eleven: two takes on
    most themes, and Kat's six are picked from them)."""
    im = Image.open(src).convert('RGB')
    L = np.asarray(im.convert('L')).astype(int)
    if not boxes:
        boxes = cell_boxes(L, 3, 3) if grid == 9 else {3: GRID3, '3a': GRID3A, 6: GRID6}[grid] if grid else card_boxes(L)
    if pick: boxes = [boxes[i] for i in pick]
    if any(n is None for n in names):  # an empty card on the sheet
        boxes, names = zip(*[(b, n) for b, n in zip(boxes, names) if n is not None])
    if len(names) != len(boxes): raise SystemExit(f'{len(boxes)} cards, {len(names)} names')
    for box, name in zip(boxes, names):
        print(' ', name, 'card', box)
        cut = weapon_cut(im.crop(box), rotate, aspect=WIDE if wide else 0.46, names=labels or ('auto' if auto_names else 'box'))
        save(cut, os.path.join(dst, f'{prefix}-{name}.webp' if prefix else f'{name}.webp'), q=88)
    return boxes


GEAR = os.path.join(ROOT, 'assets/femc/battle/art/gear')
ITEMS = os.path.join(ROOT, 'assets/femc/game/art/items')
BOOKS = os.path.join(ROOT, 'assets/femc/game/art/books')


def keepsakes(src, ids, boxes):
    """The birthday keepsakes (batch 52): cards on white like the gear, at given boxes (Kat's sheet has three cards on top and
    two between narrow empty ones below) -> game/art/items/keepsake-<id>.webp on the wide canvas."""
    return weapons(src, 'keepsake', ids, rotate=0, dst=ITEMS, wide=True, labels='none', boxes=boxes)


def books(src, ids, cols=3, rows=2):
    """Bookworms' covers (batch 52): a 3x2 sheet of unframed book covers on white or pale grey. Each cell's cover is its
    biggest patch that differs from the cell's own background (a faint grid line or page shadow doesn't count); trimmed to
    it and kept as drawn -> game/art/books/<id>.webp, 420 px tall at most. None = an empty cell."""
    from scipy import ndimage as ndi
    im = Image.open(src).convert('RGB'); a = np.asarray(im).astype(int)
    H, W = a.shape[:2]
    for i, name in enumerate(ids):
        if name is None: continue
        r, c = divmod(i, cols)
        x0, x1, y0, y1 = W * c // cols, W * (c + 1) // cols, H * r // rows, H * (r + 1) // rows
        cell = a[y0:y1, x0:x1]
        ring = np.concatenate([cell[:12].reshape(-1, 3), cell[-12:].reshape(-1, 3), cell[:, :12].reshape(-1, 3), cell[:, -12:].reshape(-1, 3)])
        bg = np.median(ring, axis=0)  # the cell's own edge (a cover can fill most of the cell)
        m = np.abs(cell - bg).max(2) > 28
        m = ndi.binary_opening(m, iterations=3)
        lab, n = ndi.label(m)
        if not n: raise SystemExit(f'{src}: nothing in cell {i} ({name})')
        k = 1 + int(np.argmax(ndi.sum(m, lab, range(1, n + 1))))
        ys, xs = np.nonzero(ndi.binary_fill_holes(lab == k))
        box = (x0 + xs.min(), y0 + ys.min(), x0 + xs.max() + 1, y0 + ys.max() + 1)
        print(' ', name, 'cover', box)
        out = im.crop(box)
        if out.height > 420: out = out.resize((round(out.width * 420 / out.height), 420), Image.LANCZOS)
        save(out, os.path.join(BOOKS, name + '.webp'), q=88)


def gear(src, ids, pick=None):
    """A 3x2 sheet of armor or accessory cards on white (FEMC-ART-TODO 6B: no printed names) -> art/gear/<id>.webp, in
    reading order. Kept upright on the wide canvas: the items are about square, so the wide box (build.js GEAR_ART sets
    artWide) shows them whole."""
    return weapons(src, None, ids, rotate=0, dst=GEAR, wide=True, labels='none', pick=pick)


CARDS = os.path.join(ROOT, 'assets/femc/battle/art/cards')
CARD_ASPECT = 88 / 114  # the art window on a card face (icons.js revCard)


def revcard(src, set_id, x0, y0, x1, dst=CARDS):
    im = Image.open(src).convert('RGB')
    W, H = im.size
    w = (x1 - x0) * W
    h = w / CARD_ASPECT
    box = (round(x0 * W), round(y0 * H), round(x1 * W), round(y0 * H + h))
    if box[3] > H: raise SystemExit(f'{set_id}: the cut runs off the bottom ({box})')
    print('  cut', box)
    save(im.crop(box).resize((540, 700), Image.LANCZOS), os.path.join(dst, set_id + '.webp'), q=86)


def finish(src, mid, dst=FINISH):
    save(Image.open(src).convert('RGB').resize((1600, 900), Image.LANCZOS), os.path.join(dst, mid + '.webp'), q=86)


# What's in the game. New pieces: add a line here and run `all` (or the single command).
BUILD = [
    ('weapons', 'haechan-weapons.png', ('haechan', ['starter', 'mixdown', 'widows-kiss', 'harbor-watch', 'old-disc', 'neo-sunlight'])),
    ('finish', 'haechan-alloutattack.png', 'haechan'),
    ('finish', 'jungwon-alloutattack.png', 'jungwon'),
    # Batch 22 (2026-10-22): the other three searchers' weapons and the last two finish cards.
    # Rapiers lie at about 45 degrees like the knives; the bows at about 53 (turned 37 to stand upright); gloves stay as drawn.
    ('weapons', 'jungwon-weapons.png', ('jungwon', ['starter', 'mandate', 'maeumi', 'jade-heir', 'black-tortoise', 'hyphen'], {'rotate': 45, 'auto_names': True})),
    ('weapons', 'jihoon-weapons.png', ('jihoon', ['starter', 'capitalized', 'best-friend', 'goblin-club', 'varsity', 'treasure'], {'rotate': 0, 'auto_names': True, 'wide': True})),
    ('weapons', 'minji-weapons.png', ('minji', ['starter', 'final-cut', 'hitscan', 'muse', 'theia', 'bunny'], {'rotate': 37, 'auto_names': True})),
    ('finish', 'jihoon-alloutattack.png', 'jihoon'),
    ('finish', 'minji-alloutattack.png', 'minji'),
    # Batch 23 (2026-10-22): the seven S.E.E.S. sheets. Gloves and arm guns stay as drawn on the wide canvas; blades, bows
    # and axes are turned upright (their measured slant: swords ~47, axes ~54 with the head, bows/rapiers/knives ~72).
    # Batch 23: the thirteen Revelation card sets, cut inside each family's printed frame (Runners: moons and chains; strangers:
    # bronze scrollwork; Hoax: star corners; Persona: jewelled filigree). Each subject stays inside the window.
    ('revcard', 'card-runners-foxbell.jpeg', ('bell', .1, .08, .9)),
    ('revcard', 'card-runners-stadium.jpeg', ('stadium', .1, .1, .9)),
    ('revcard', 'card-runners-headset.jpeg', ('headset', .1, .09, .9)),
    ('revcard', 'card-strangers-jade.jpeg', ('jade', .13, .1, .87)),
    ('revcard', 'card-strangers-crane.jpeg', ('crane', .13, .095, .87)),
    ('revcard', 'card-strangers-needle.jpeg', ('needle', .13, .14, .87)),
    ('revcard', 'card-hoax-star.jpeg', ('pin', .13, .14, .87)),
    ('revcard', 'card-hoax-ballot.jpeg', ('ballot', .13, .14, .87)),
    ('revcard', 'card-hoax-croissant.jpeg', ('croissant', .13, .14, .87)),
    ('revcard', 'card-persona-evoker.jpeg', ('evoker', .13, .14, .87)),
    ('revcard', 'card-persona-moon.jpeg', ('moon', .13, .095, .87)),
    ('revcard', 'card-persona-butterfly.jpeg', ('butterfly', .13, .13, .87)),
    ('revcard', 'card-persona-coffin.png', ('coffin', .13, .135, .87)),
    ('weapons', 'akihiko-weapons.jpeg', ('akihiko', ['starter', 'red-champion', 'lightning', 'silver-wolf', 'gold-belt', 'midnight'], {'grid': '3a', 'rotate': 0, 'labels': 'auto-wide', 'wide': True})),
    ('weapons', 'yukari-weapons.jpeg', ('yukari', ['starter', 'pink-heart', 'feather', 'sakura', 'moon', 'angel'], {'grid': 6, 'pick': [0, 1, 3, 7, 8, 11], 'rotate': 18, 'labels': 'none'})),
    ('weapons', 'junpei-weapons.jpeg', ('junpei', ['starter', 'baseball-bat', 'katana', 'flame', 'neon', 'cleaver'], {'grid': 3, 'rotate': 43, 'labels': 'none'})),
    ('weapons', 'mitsuru-weapons.jpeg', ('mitsuru', ['starter', 'ice-crystal', 'rose', 'gold-filigree', 'snow-queen', 'kirijo-crest'], {'grid': 6, 'pick': [0, 2, 3, 6, 9, 10], 'rotate': 17, 'labels': 'none'})),
    ('weapons', 'aigis-weapons.jpeg', ('aigis', ['starter', 'gold-plated', 'papillon-heart', 'angelic-wing', 'siege-cannon', 'velvet-butterfly'], {'grid': 3, 'rotate': 0, 'labels': 'auto-wide', 'wide': True})),
    ('weapons', 'koromaru-weapons.jpeg', ('koromaru', ['starter', 'bone', 'shrine-bell', 'flame', 'collar-tag', 'kunai'], {'grid': 6, 'pick': [0, 1, 3, 6, 7, 5], 'rotate': 18, 'labels': 'none'})),
    ('weapons', 'shinjiro-weapons.jpeg', ('shinjiro', ['starter', 'black-steel', 'chain', 'kitchen-cleaver', 'ember', 'moonlit'], {'grid': 3, 'rotate': 40, 'labels': 'none'})),
    # Batch 45 (2026-10-24): armor and accessories (6B), ids in the art list's reading order. Accessory sheets 3-5 still to come.
    ('gear', 'armor-sheet1.png', ['armor0', 'armor1', 'armor2', 'armor3', 'armor4', 'armor5']),
    ('gear', 'armor-sheet2.png', ['armor6', 'armor7', 'frost_coat', 'insulated_vest', 'fireproof_suit', 'gale_cloak']),
    ('gear', 'accessories-sheet1.png', ['power_ring', 'magic_ring', 'guard_ring', 'speed_ring', 'lucky_charm', 'antidote_charm']),
    ('gear', 'accessories-sheet2.png', ['rose_barrette', 'calm_amulet', 'holy_cross', 'black_earring', 'sp_bangle', 'power_bangle']),
    # Batch 48: the rest. Sheet 4 came as two 3x1 strips; sheet 5 has three cards and three empty ones.
    ('gear', 'accessories-sheet3.png', ['magic_bangle', 'sniper_scope', 'vitality_belt', 'theurgy_charm', 'star_brooch', 'vel_ribbon']),
    ('gear', 'accessories-sheet4.1.png', ['cap_koro_charm', 'cap_feather_pin', 'cap_jack_frost']),
    ('gear', 'accessories-sheet4.2.png', ['cap_moon_locket', 'cap_gold_sun', 'vel_butterfly']),
    ('gear', 'accessories-sheet5.png', (['vel_key', 'vel_compendium', 'vel_coat'], [0, 1, 2])),
    # Batch 52 (2026-10-26): the plain shop weapons (3x3 sheets; ids are data.js gear, tiers 0-7 then the element weapon;
    # None = the empty ninth card), turned upright one by one. Gloves have printed names; gloves and arm guns stay wide.
    ('weapons', 'plain-naginatas.jpeg', ('plain', [f'naginata{t}' for t in range(8)] + ['sun_naginata'], {'grid': 9, 'rotate': 'auto', 'labels': 'none'})),
    ('weapons', 'plain-gloves.jpeg', ('plain', [f'gloves{t}' for t in range(8)] + ['thunder_fist'], {'grid': 9, 'rotate': 0, 'labels': 'strip', 'wide': True})),
    ('weapons', 'plain-bows.jpeg', ('plain', [f'bow{t}' for t in range(8)] + ['gale_bow'], {'grid': 9, 'rotate': 'auto', 'labels': 'none'})),
    ('weapons', 'plain-greatswords.jpeg', ('plain', [f'greatsword{t}' for t in range(8)] + ['blaze_blade'], {'grid': 9, 'rotate': 'auto', 'labels': 'none'})),
    ('weapons', 'plain-rapiers.jpeg', ('plain', [f'rapier{t}' for t in range(8)] + ['ice_rapier'], {'grid': 9, 'rotate': 'auto', 'labels': 'none'})),
    ('weapons', 'plain-guns.jpeg', ('plain', [f'gun{t}' for t in range(8)] + [None], {'grid': 9, 'rotate': 0, 'labels': 'none', 'wide': True})),
    ('weapons', 'plain-spears.jpeg', ('plain', [f'spear{t}' for t in range(8)] + [None], {'grid': 9, 'rotate': 'auto', 'labels': 'none'})),
    ('weapons', 'plain-knives.jpeg', ('plain', [f'knife{t}' for t in range(8)] + [None], {'grid': 9, 'rotate': 'auto', 'labels': 'none'})),
    ('weapons', 'plain-axes.jpeg', ('plain', [f'axe{t}' for t in range(8)] + [None], {'grid': 9, 'rotate': 'auto', 'labels': 'none'})),
    # Batch 52: the five birthday keepsakes (three cards on top, two between empty ones below: boxes given) and the books.
    ('keepsakes', 'keepsakes.jpeg', (['recorder', 'omamori', 'cd', 'cord', 'socks'],
        [(111, 26, 864, 827), (911, 26, 1649, 827), (1694, 26, 2434, 827), (525, 866, 1256, 1661), (1300, 866, 2044, 1661)])),
    ('books', 'books-1.jpeg', ['manga-school', 'poise', 'tiger', 'algebra', 'speech', 'handmade']),
    ('books', 'books-2.jpeg', ['fixit', 'letters', 'kitchen', 'listening', None, None]),
]


def source(name):
    for d in ('Added to Game', 'New Adds'):
        p = os.path.join(IMAGES, d, name)
        if os.path.exists(p): return p
    raise SystemExit('missing source: ' + name)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    sub = ap.add_subparsers(dest='cmd', required=True)
    p = sub.add_parser('weapons'); p.add_argument('src'); p.add_argument('prefix'); p.add_argument('names', nargs='+'); p.add_argument('--rotate', type=float, default=45)
    p.add_argument('--labels', choices=['box', 'auto'], default='box'); p.add_argument('--wide', action='store_true')
    p = sub.add_parser('gear'); p.add_argument('src'); p.add_argument('ids', nargs='+')
    p = sub.add_parser('finish'); p.add_argument('src'); p.add_argument('mid')
    p = sub.add_parser('revcard'); p.add_argument('src'); p.add_argument('set'); p.add_argument('x0', type=float); p.add_argument('y0', type=float); p.add_argument('x1', type=float)
    p = sub.add_parser('all'); p.add_argument('--only', nargs='+', help='just the BUILD lines whose source name contains one of these')
    a = ap.parse_args()
    if a.cmd == 'weapons': weapons(a.src, a.prefix, a.names, a.rotate, auto_names=a.labels == 'auto', wide=a.wide)
    elif a.cmd == 'gear': gear(a.src, a.ids)
    elif a.cmd == 'finish': finish(a.src, a.mid)
    elif a.cmd == 'revcard': revcard(a.src, a.set, a.x0, a.y0, a.x1)
    else:
        for kind, src, arg in BUILD:
            if a.only and not any(o in src for o in a.only): continue
            print(kind, src)
            if kind == 'weapons': weapons(source(src), arg[0], arg[1], **(arg[2] if len(arg) > 2 else {}))
            elif kind == 'revcard': revcard(source(src), *arg)
            elif kind == 'gear': gear(source(src), *(arg if isinstance(arg, tuple) else (arg,)))
            elif kind == 'keepsakes': keepsakes(source(src), *arg)
            elif kind == 'books': books(source(src), arg)
            else: finish(source(src), arg)


if __name__ == '__main__':
    main()
