"""Cut Kat's remade HOAX Solar face sheets (FEMC-ART-TODO 48, Nov 12 2026: new drawings in Cherry's style) onto the
EXISTING canvases of assets/femc/portraits/solar-hoax*, so scale.js (0.78) and the placements (s 1.44) stay as they are.

Each sheet is a transparent 3 x 2 grid (neutral, happy, sad / serious, surprised, flustered). Cells are split at the
emptiest line near each grid line and keep their largest piece of art, then every cell is drawn with ONE affine per
sheet in cell-local coordinates (canvas = S * (x - cell origin) + (ox, oy)), so expressions never jump.
S was chosen so her Vision face height x 0.78 x 1.44 / canvas height equals the matching cherry-hoax* folder's
(Cherry's scale.js x her placement s x face height / canvas height); ox / oy put the new neutral's Vision face centre
on the old neutral's (so placements-data.js face centres stay right). The bust is mirrored down to the canvas bottom
where the art stops short (not row-repeated: stripes streak). WebP q90.

Run: python3 tools/femc-solar-hoax-faces.py [folder ...]   (no names = all five; sources: New Adds/<sheet>, else Added to Game/<sheet>)
Re-dropping an edited sheet under the same file name (e.g. Kat's nose stud) re-cuts with the same numbers.
"""
import os, sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi
from femc_images import IMAGES

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(IMAGES, 'New Adds')
DST = os.path.join(ROOT, 'assets/femc/portraits')
ORDER = ['neutral', 'happy', 'sad', 'serious', 'surprised', 'flustered']
# folder: (sheet, S, ox, oy)
SHEETS = {
    'solar-hoax':           ('solar-hoax-remake-portraits.png',       0.885, -2.1, 10.6),
    'solar-hoax-school':    ('solar-hoax-school-portraits.png',       0.900, -10.4, 4.9),
    'solar-hoax-christmas': ('solar-christmas-hoax-portraits.png',    1.471, 6.0, 34.3),
    'solar-hoax-party':     ('solar-hoax-party-remake-portraits.png', 1.779, -100.9, 8.5),
    'solar-hoax-newyear':   ('solar-hoax-hanbok-portraits.png',       1.715, -83.5, -4.7),
}


def emptiest(al, along, at, span):
    n = al.shape[1] if along == 'x' else al.shape[0]
    rng = range(max(1, at - span), min(n - 1, at + span))
    cnt = (al > 40).sum(0) if along == 'x' else (al > 40).sum(1)
    return min(rng, key=lambda v: cnt[v])


def cut(folder):
    sheet, S, ox, oy = SHEETS[folder]
    src = os.path.join(SRC, sheet)
    if not os.path.exists(src): src = os.path.join(IMAGES, 'Added to Game', sheet)  # after a New Adds clean-up
    im = Image.open(src).convert('RGBA')
    sh = np.asarray(im).astype(np.float32); H, W = sh.shape[:2]; al = sh[..., 3]
    xs = [0] + [emptiest(al, 'x', round(W * c / 3), W // 15) for c in (1, 2)] + [W]
    ys = [0, emptiest(al, 'y', H // 2, H // 10), H]
    ref = Image.open(os.path.join(DST, folder, 'neutral.webp')); CW, CH = ref.size
    for k, emo in enumerate(ORDER):
        c, r = k % 3, k // 3
        piece = np.zeros_like(sh); piece[ys[r]:ys[r + 1], xs[c]:xs[c + 1]] = sh[ys[r]:ys[r + 1], xs[c]:xs[c + 1]]
        lab, n = ndi.label(piece[..., 3] > 40)
        if n > 1:
            sizes = ndi.sum(np.ones_like(lab), lab, range(1, n + 1))
            keep = ndi.binary_dilation(lab == (int(np.argmax(sizes)) + 1), iterations=4)
            piece[..., 3] *= keep
        rows = np.nonzero((piece[..., 3] > 200).sum(1) > 30)[0]; last = rows.max()
        # premultiply, then place with the sheet's affine in cell-local coordinates (grid origin, not the seam)
        pm = piece.copy(); pm[..., :3] *= pm[..., 3:4] / 255
        x0, y0 = c * W / 3, r * H / 2
        chans = []
        for ch in range(4):
            band = Image.fromarray(pm[..., ch].astype(np.float32))
            # inverse map: source = (canvas - (ox, oy)) / S + cell origin
            band = band.transform((CW, CH), Image.AFFINE, (1 / S, 0, x0 - ox / S, 0, 1 / S, y0 - oy / S), Image.BICUBIC)
            chans.append(np.asarray(band))
        canvas = np.clip(np.dstack(chans), 0, 255)
        lastc = int(np.floor((last - 2 - y0) * S + oy))
        if lastc < CH - 1:
            m = CH - 1 - lastc
            canvas[lastc + 1:] = canvas[lastc - m + 1:lastc + 1][::-1]
        a = canvas[..., 3:4]; rgb = np.where(a > 0, canvas[..., :3] / np.maximum(a, 1e-3) * 255, 0)
        out = Image.fromarray(np.dstack([np.clip(rgb, 0, 255), np.clip(a, 0, 255)]).astype(np.uint8))
        r_, g_, b_, a_ = out.split()
        if S > 1.05:
            sharp = Image.merge('RGB', (r_, g_, b_)).filter(ImageFilter.UnsharpMask(radius=1.2, percent=55, threshold=2))
            out = Image.merge('RGBA', (*sharp.split(), a_))
        out.save(os.path.join(DST, folder, emo + '.webp'), 'WEBP', quality=90, method=6)
    print(folder, sheet, 'S', S, 'canvas', CW, CH)


for f in (sys.argv[1:] or SHEETS):
    cut(f)
