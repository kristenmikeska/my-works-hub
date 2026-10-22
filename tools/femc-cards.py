"""Weapon sheets and All-Out finish cards for FEMC battles. Sources are only read, never changed.

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
  python3 tools/femc-cards.py all
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
    if len(cols) != 6 or len(rows) != 4:
        raise SystemExit(f'expected a 3x2 grid of framed cards, found column lines {cols} and row lines {rows}')
    lefts, rights = [c[1] for c in cols[0::2]], [c[0] for c in cols[1::2]]
    tops, bottoms = [r[1] for r in rows[0::2]], [r[0] for r in rows[1::2]]
    return [(l + 3, t + 3, r - 2, b - 2) for t, b in zip(tops, bottoms) for l, r in zip(lefts, rights)]


def blank_name(card):
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
        if ys.start == 0 or not (0.3 * w0 < cx < 0.7 * w0) or ys.stop - ys.start > 0.1 * h0: continue
        card.paste((255, 255, 255), (xs.start - 2, y0 + ys.start - 2, xs.stop + 2, y0 + ys.stop + 2))


def weapon_cut(card, rotate, aspect=0.46, pad=0.05, names='box'):
    """The weapon alone from one card: blank the printed name (centred along the card's bottom edge; the pommels sit to
    its left), turn it, trim, and centre it on a white canvas of the naginata cards' shape (or `aspect`)."""
    card = card.convert('RGB').copy()
    w0, h0 = card.size
    if names == 'auto': blank_name(card)
    else: card.paste((255, 255, 255), (int(w0 * 0.27), int(h0 * 0.9), int(w0 * 0.73), h0))
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


def weapons(src, prefix, names, rotate=45, dst=WEAPONS, auto_names=False, wide=False):
    im = Image.open(src).convert('RGB')
    boxes = card_boxes(np.asarray(im.convert('L')).astype(int))
    if len(names) != len(boxes): raise SystemExit(f'{len(boxes)} cards, {len(names)} names')
    for box, name in zip(boxes, names):
        print(' ', name, 'card', box)
        cut = weapon_cut(im.crop(box), rotate, aspect=WIDE if wide else 0.46, names='auto' if auto_names else 'box')
        save(cut, os.path.join(dst, f'{prefix}-{name}.webp'), q=88)
    return boxes


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
    p = sub.add_parser('finish'); p.add_argument('src'); p.add_argument('mid')
    sub.add_parser('all')
    a = ap.parse_args()
    if a.cmd == 'weapons': weapons(a.src, a.prefix, a.names, a.rotate, auto_names=a.labels == 'auto', wide=a.wide)
    elif a.cmd == 'finish': finish(a.src, a.mid)
    else:
        for kind, src, arg in BUILD:
            print(kind, src)
            if kind == 'weapons': weapons(source(src), arg[0], arg[1], **(arg[2] if len(arg) > 2 else {}))
            else: finish(source(src), arg)


if __name__ == '__main__':
    main()
