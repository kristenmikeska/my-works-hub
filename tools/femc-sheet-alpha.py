"""Splits an expression sheet that already has a transparent background (Kat's HOAX holiday sheets, Oct 31 2026) into
portrait files. Cuts fall on the emptiest column/row near each grid line, and each cell keeps its largest piece of art
(a strand of the neighbour's hair that crosses the line is dropped).

Run: python3 tools/femc-sheet-alpha.py SHEET.png Name [--grid 3x2] [--emotions ...] [--force]
  3x2 default order: neutral, happy, sad / serious, surprised, flustered.
Output: Character Portraits/<Name>/<emotion>.png; then python3 tools/femc-portraits.py <name lowercased>.
"""
import os, sys, argparse
from femc_images import IMAGES as IMAGES_DIR
from PIL import Image

DST = os.path.join(IMAGES_DIR, 'Character Portraits')
ap = argparse.ArgumentParser()
ap.add_argument('sheet'); ap.add_argument('name')
ap.add_argument('--grid', default='3x2'); ap.add_argument('--emotions', default='neutral,happy,sad,serious,surprised,flustered')
ap.add_argument('--force', action='store_true')
a = ap.parse_args()
cols, rows = map(int, a.grid.split('x')); emos = a.emotions.split(',')
im = Image.open(a.sheet).convert('RGBA'); A = im.getchannel('A'); W, H = im.size
px = A.load()

def emptiest(along, at, span, length):
    """The line (column if along == 'x') near `at` with the least art on it."""
    best = None
    for v in range(max(1, at - span), min(length - 1, at + span)):
        n = sum(1 for u in range(0, (H if along == 'x' else W), 2) if (px[v, u] if along == 'x' else px[u, v]) > 40)
        if best is None or n < best[0]: best = (n, v)
    return best[1]

xs = [0] + [emptiest('x', round(W * c / cols), W // (cols * 5), W) for c in range(1, cols)] + [W]
ys = [0] + [emptiest('y', round(H * r / rows), H // (rows * 5), H) for r in range(1, rows)] + [H]

def largest(cell):
    """Keeps the biggest connected piece of art (on a quarter-size map), clearing the rest."""
    s = 4; a = cell.getchannel('A'); small = a.resize((max(1, a.width // s), max(1, a.height // s))).point(lambda v: 255 if v > 40 else 0)
    sw, sh = small.size; sp = small.load(); seen = {}; comps = []
    for y0 in range(sh):
        for x0 in range(sw):
            if sp[x0, y0] and (x0, y0) not in seen:
                comp = [(x0, y0)]; seen[(x0, y0)] = 1; i = 0
                while i < len(comp):
                    x, y = comp[i]; i += 1
                    for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                        if 0 <= nx < sw and 0 <= ny < sh and sp[nx, ny] and (nx, ny) not in seen:
                            seen[(nx, ny)] = 1; comp.append((nx, ny))
                comps.append(comp)
    if len(comps) < 2: return cell
    keep = Image.new('L', (sw, sh), 0); kp = keep.load()
    for x, y in max(comps, key=len): kp[x, y] = 255
    keep = keep.resize(a.size).point(lambda v: 255 if v else 0)
    from PIL import ImageFilter, ImageChops
    keep = keep.filter(ImageFilter.MaxFilter(9))
    cell.putalpha(ImageChops.multiply(a, keep)); return cell

out = os.path.join(DST, a.name); os.makedirs(out, exist_ok=True)
for i, emo in enumerate(emos):
    c, r = i % cols, i // cols
    cell = largest(im.crop((xs[c], ys[r], xs[c + 1], ys[r + 1])))
    box = cell.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox()
    if box: cell = cell.crop(box)
    path = os.path.join(out, f"{emo}.png")
    if os.path.exists(path) and not a.force: print('skip', path); continue
    cell.save(path); print('wrote', path, cell.size)
