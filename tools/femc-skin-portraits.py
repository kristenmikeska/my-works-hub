"""A FRESH cut of an outfit's portrait sheet (no faces for that look in the game yet; for a recut of existing faces use
femc-recut-portraits.py). Kat's 3 x 2 sheet, already transparent -> six faces on the fighter's portrait canvas (862 x 851
for Solar), placed by matching each face (eyes to chin) against the fighter's own portrait of the same expression in
assets/femc/portraits/<who>/: one shared scale (the median), the offset per cell, so she doesn't jump between faces or
between looks. Rows split at the emptiest line near the middle, columns on a min-cost seam through the hair near the
thirds, slivers of neighbours dropped, the bust carried down to the canvas bottom by its last clean row.
Run: python3 tools/femc-skin-portraits.py SHEET.png OUT_DIR [who] [face order, comma separated; default reading order
     neutral,happy,sad,serious,surprised,flustered: check the cells by eye first]
then python3 tools/femc-wardrobe.py portraits <skin> <who> OUT_DIR && python3 tools/femc-wardrobe.py scan
(first used Nov 1 2026 for The Sun, sk-arcana-sun, art batch 122). Source unchanged."""
import sys, numpy as np, cv2
from PIL import Image
from pathlib import Path
REPO = str(Path(__file__).resolve().parent.parent) + '/'
NEW = Path.home() / 'Documents/UniverseHub-Images/Femc Mode Images'
SRC = sys.argv[1] if Path(sys.argv[1]).exists() else next(str(d / sys.argv[1]) for d in (NEW / 'New Adds', NEW / 'Added to Game') if (d / sys.argv[1]).exists())
OUT = sys.argv[2]
WHO = sys.argv[3] if len(sys.argv) > 3 else 'solar'
ORDER = sys.argv[4].split(',') if len(sys.argv) > 4 else ['neutral', 'happy', 'sad', 'serious', 'surprised', 'flustered']
sh = np.asarray(Image.open(SRC).convert('RGBA')).astype(np.float32); H, W = sh.shape[:2]; al = sh[..., 3]
# rows: emptiest line near the middle
rs = (al > 15).sum(1); ycut = min(range(int(H * .45), int(H * .55)), key=lambda y: rs[y])
def seam(y0, y1, xc):
    """min-cost vertical seam through alpha within +-90 px of xc, rows y0..y1"""
    lo, hi = xc - 90, xc + 90; cost = al[y0:y1, lo:hi] + 1; n, m = cost.shape
    acc = cost.copy(); back = np.zeros((n, m), int)
    for i in range(1, n):
        prev = np.stack([np.r_[np.inf, acc[i - 1, :-1]], acc[i - 1], np.r_[acc[i - 1, 1:], np.inf]])
        k = prev.argmin(0); back[i] = k - 1; acc[i] += prev.min(0)
    x = np.zeros(n, int); x[-1] = acc[-1].argmin()
    for i in range(n - 1, 0, -1): x[i - 1] = x[i] + back[i, x[i]]
    return x + lo
cellmap = np.full((H, W), -1)
for r, (y0, y1) in enumerate([(0, ycut), (ycut, H)]):
    s1, s2 = seam(y0, y1, W // 3), seam(y0, y1, 2 * W // 3)
    xs = np.arange(W)[None, :]
    c = (xs >= s1[:, None]).astype(int) + (xs >= s2[:, None])
    cellmap[y0:y1] = r * 3 + c
print('ycut', ycut)
gray = cv2.cvtColor(sh[..., :3].astype(np.uint8), cv2.COLOR_RGB2GRAY)
res = {}
for k, f in enumerate(ORDER):
    ref = np.asarray(Image.open(REPO + f'assets/femc/portraits/{WHO}/{f}.webp').convert('RGBA')).astype(np.float32)
    # face patch of the reference: eyes to chin, between the cheeks
    patch = cv2.cvtColor(ref[230:560, 250:560, :3].astype(np.uint8), cv2.COLOR_RGB2GRAY)
    cellimg = np.where(cellmap == k, gray, 0).astype(np.uint8)
    best = None
    for s in np.linspace(0.40, 0.80, 81):
        tp = cv2.resize(patch, (int(310 * s), int(330 * s)), interpolation=cv2.INTER_AREA)
        r_ = cv2.matchTemplate(cellimg, tp, cv2.TM_CCOEFF_NORMED); _, v, _, loc = cv2.minMaxLoc(r_)
        if best is None or v > best[0]: best = (v, s, loc[0] - 250 * s, loc[1] - 230 * s)
    res[f] = best; print(f, 'score %.3f scale %.3f origin %.1f %.1f' % best)
S = float(np.median([res[f][1] for f in ORDER])); print('shared scale', S)
for k, f in enumerate(ORDER):
    ref = np.asarray(Image.open(REPO + f'assets/femc/portraits/{WHO}/{f}.webp').convert('RGBA')).astype(np.float32)
    patch = cv2.cvtColor(ref[230:560, 250:560, :3].astype(np.uint8), cv2.COLOR_RGB2GRAY)
    tp = cv2.resize(patch, (int(310 * S), int(330 * S)), interpolation=cv2.INTER_AREA)
    cellimg = np.where(cellmap == k, gray, 0).astype(np.uint8)
    r_ = cv2.matchTemplate(cellimg, tp, cv2.TM_CCOEFF_NORMED); _, v, _, loc = cv2.minMaxLoc(r_)
    ox, oy = loc[0] - 250 * S, loc[1] - 230 * S   # sheet coords of the canvas origin
    piece = sh.copy(); piece[..., 3] *= (cellmap == k)
    # keep only this cell's connected art (drop slivers of neighbours)
    from scipy import ndimage as ndi
    lab, n = ndi.label(piece[..., 3] > 8); sizes = ndi.sum(np.ones_like(lab), lab, range(1, n + 1))
    keep = np.isin(lab, [i + 1 for i in range(n) if sizes[i] > 400]); piece[..., 3] *= keep
    # carry the bust down: repeat the cell's last solid row to the bottom of the cell band
    ys = np.nonzero((piece[..., 3] > 200).sum(1) > 30)[0]; last = ys.max()
    y1 = ycut if k < 3 else H
    # premultiplied resample onto the canvas
    M = np.float32([[S, 0, ox], [0, S, oy]])
    pm = piece.copy(); pm[..., :3] *= pm[..., 3:4] / 255
    CH, CW = ref.shape[:2]   # the fighter's own canvas (862 x 851 Solar, 866 x 821 Minji, 870 x 822 Haechan)
    canvas = cv2.warpAffine(pm, M, (CW, CH), flags=cv2.WARP_INVERSE_MAP | cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0)
    # bust bottom on the canvas: rows below the last sheet row get the last clean row
    lastc = int(np.floor((last - 2 - oy) / S))
    if lastc < CH - 1:
        canvas[lastc + 1:] = canvas[lastc][None]
    a = canvas[..., 3:4]; rgb = np.where(a > 0, canvas[..., :3] / np.maximum(a, 1e-3) * 255, 0)
    out = np.dstack([np.clip(rgb, 0, 255), np.clip(a, 0, 255)]).astype(np.uint8)
    Image.fromarray(out).save(f'{OUT}/{f}.png')
    print(f, 'final score %.3f' % v, 'origin', round(ox, 1), round(oy, 1), 'bust ends canvas row', lastc)
