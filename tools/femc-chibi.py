"""Cut Kat's chibi All-Out Attack sheets (<mid>-chibi-alloutattack.png, already transparent) into frames for the
All-Out brawl cloud (battle.js allOutSequence). Sources are never modified.
Each sheet is a grid of figures (3x2; Haechan's is 4x2). Each figure (a large alpha piece) goes to the grid cell holding
most of its mass; a piece that really spans two cells (Minji's arrow touches her next pose) is cut at the emptiest column
near the cell line. Small bits (sparks, swoosh tips, casings) join the nearest figure. Every frame of every sheet is
scaled by one factor and placed on one shared canvas (mass centred, lowest solid point on one baseline), so frames don't jump while they cycle and every chibi is drawn at the same scale.
Out: assets/femc/battle/art/chibi/<mid>-<i>.webp (the last frame of each sheet is the victory pose).
Run: python3 tools/femc-chibi.py [mid ...]
"""
from pathlib import Path
import sys
import numpy as np
from scipy import ndimage
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]
IMAGES = Path.home() / 'Documents/UniverseHub-Images/Femc Mode Images'
DIRS = [IMAGES / 'Added to Game', IMAGES / 'New Adds']
OUT = ROOT / 'assets/femc/battle/art/chibi'
GRID = {'haechan': (4, 2)}
MIDS = ['aigis', 'akihiko', 'haechan', 'jihoon', 'jungwon', 'junpei', 'koromaru', 'minji', 'mitsuru', 'shinjiro', 'solar', 'yukari']
SCALE, PAD, BIG = 0.5, 6, 8000

def source(mid):
    for d in DIRS:
        p = d / f'{mid}-chibi-alloutattack.png'
        if p.exists(): return p
    raise SystemExit(f'missing source for {mid}')

def frames(mid):
    im = Image.open(source(mid)).convert('RGBA')
    a = np.asarray(im)
    H, W = a.shape[:2]
    cols, rows = GRID.get(mid, (3, 2))
    cw, ch = W / cols, H / rows
    mask = a[..., 3] > 8
    lab, n = ndimage.label(mask, structure=np.ones((3, 3)))
    yy, xx = np.indices(mask.shape)
    cell = (np.minimum((yy / ch).astype(int), rows - 1) * cols + np.minimum((xx / cw).astype(int), cols - 1))
    owner = np.full(mask.shape, -1, int)
    sizes = ndimage.sum(mask, lab, range(1, n + 1))
    for k in range(1, n + 1):
        if sizes[k - 1] < BIG: continue
        m = lab == k
        counts = np.bincount(cell[m], minlength=cols * rows)
        if counts.max() >= 0.85 * counts.sum():
            owner[m] = counts.argmax(); continue
        # Spans cells: split along the emptiest column / row near each cell line inside this piece.
        ys, xs = np.nonzero(m)
        colsum = m.sum(0); rowsum = m.sum(1)
        cut = lambda s, line, lim: max(0, line - 120) + int(np.argmin(s[max(0, line - 120):min(lim, line + 120)]))
        cx = sum((xs >= cut(colsum, int(c * cw), W)).astype(int) for c in range(1, cols))
        cy = sum((ys >= cut(rowsum, int(r * ch), H)).astype(int) for r in range(1, rows))
        owner[ys, xs] = cy * cols + cx
    # Small bits (sparks, swoosh tips, shell casings) join the figure they're nearest to.
    _, (iy, ix) = ndimage.distance_transform_edt(owner < 0, return_indices=True)
    small = mask & (owner < 0)
    owner[small] = owner[iy[small], ix[small]]
    out = []
    for i in range(cols * rows):
        m = owner == i
        f = a.copy(); f[~m] = 0
        ys, xs = np.nonzero(m)
        if not len(xs): raise SystemExit(f'{mid}: empty frame {i}')
        solid = a[..., 3] > 128
        base = ys[solid[ys, xs]].max()
        cxm = float(np.average(xs, weights=a[ys, xs, 3]))
        out.append((Image.fromarray(f).crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1)), cxm - xs.min(), base - ys.min() + 1))
    return out

def main(only):
    allf = {mid: frames(mid) for mid in MIDS}
    half = max(max(cx, im.width - cx) for fs in allf.values() for im, cx, _ in fs)
    above = max(b for fs in allf.values() for _, _, b in fs)
    below = max(im.height - b for fs in allf.values() for im, _, b in fs)
    CW, CH = int((2 * half) * SCALE) + 2 * PAD, int((above + below) * SCALE) + 2 * PAD
    BASE = PAD + round(above * SCALE)
    OUT.mkdir(parents=True, exist_ok=True)
    for mid in (only or MIDS):
        for i, (im, cx, b) in enumerate(allf[mid]):
            s = im.resize((max(1, round(im.width * SCALE)), max(1, round(im.height * SCALE))), Image.LANCZOS)
            c = Image.new('RGBA', (CW, CH), (0, 0, 0, 0))
            c.alpha_composite(s, (round(CW / 2 - cx * SCALE), BASE - round(b * SCALE)))
            c.save(OUT / f'{mid}-{i}.webp', 'WEBP', quality=86, method=6)
        print(mid, len(allf[mid]), 'frames', (CW, CH))

if __name__ == '__main__':
    main(sys.argv[1:])
