"""Splits a sheet of expressions that ALREADY has a transparent background into one file per expression.

For sheets with a plain or fake-checker background use femc-sheet.py instead (it removes the background).
Cells are cut at the emptiest line near each boundary, not at exact fractions, because a jacket or shoulder
often spills a few pixels into the next cell; anything left that isn't connected to the figure is dropped.

Run: python3 tools/femc-split.py SHEET.png Name neutral,smiling,smiling-2,surprised,angry,sad [--grid 3x2]
Writes ~/Documents/UniverseHub-Images/Femc Mode Images/Character Portraits/<Name>/<Name>-<emotion>.png,
then run: python3 tools/femc-portraits.py <name>
"""
import os, sys, argparse
from femc_images import IMAGES as IMAGES_DIR
from PIL import Image

SRC = os.path.join(IMAGES_DIR, 'Character Portraits')

ap = argparse.ArgumentParser()
ap.add_argument('sheet'); ap.add_argument('name'); ap.add_argument('emotions')
ap.add_argument('--grid', default='3x2', help='columns x rows')
args = ap.parse_args()
cols, rows = (int(v) for v in args.grid.lower().split('x'))
names = args.emotions.split(',')
if len(names) != cols * rows:
    sys.exit(f'{len(names)} emotions for a {cols}x{rows} grid')

im = Image.open(args.sheet).convert('RGBA')
W, H = im.size
solid = im.getchannel('A').point(lambda v: 255 if v > 20 else 0)


def cut(size, n, axis):
    """Cut positions along one axis: the emptiest line within 4% of each even split."""
    out = [0]
    for k in range(1, n):
        mid, r = size * k // n, max(4, size // 25)
        def filled(i):
            box = (0, i, W, i + 1) if axis == 'y' else (i, 0, i + 1, H)
            return solid.crop(box).histogram()[255]
        out.append(min(range(mid - r, mid + r), key=filled))
    return out + [size]


def keep_largest(cell):
    a = cell.getchannel('A')
    m = a.point(lambda v: 255 if v > 20 else 0).load()
    w, h = cell.size
    seen = bytearray(w * h)
    pieces = []
    for y0 in range(h):
        for x0 in range(w):
            if m[x0, y0] and not seen[y0 * w + x0]:
                piece, stack = [], [(x0, y0)]
                seen[y0 * w + x0] = 1
                while stack:
                    x, y = stack.pop()
                    piece.append((x, y))
                    for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                        if 0 <= nx < w and 0 <= ny < h and m[nx, ny] and not seen[ny * w + nx]:
                            seen[ny * w + nx] = 1
                            stack.append((nx, ny))
                pieces.append(piece)
    pieces.sort(key=len, reverse=True)
    px = a.load()
    for piece in pieces[1:]:
        for x, y in piece:
            px[x, y] = 0
    cell.putalpha(a)
    return cell, sum(len(p) for p in pieces[1:])


xs, ys = cut(W, cols, 'x'), cut(H, rows, 'y')
folder = os.path.join(SRC, args.name)
os.makedirs(folder, exist_ok=True)
for i, emo in enumerate(names):
    c, r = i % cols, i // cols
    cell, dropped = keep_largest(im.crop((xs[c], ys[r], xs[c + 1], ys[r + 1])))
    path = os.path.join(folder, f'{args.name}-{emo}.png')
    cell.save(path)
    print(f'wrote {path}' + (f'  (dropped {dropped} stray px)' if dropped else ''))
