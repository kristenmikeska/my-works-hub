"""Re-cut Solar's HOAX faces at higher quality, same placement: each existing game face is matched (phase correlation on
alpha) against the sheet cell scaled by the batch-143 scale, then re-rendered (Lanczos), mirrored bust as before, a light
unsharp mask, saved as lossless WebP."""
import sys, os, numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as ndi
SRC, DIR, S = sys.argv[1], sys.argv[2], float(sys.argv[3])
ORDER = ['neutral', 'happy', 'sad', 'serious', 'surprised', 'flustered']
sh = np.asarray(Image.open(SRC).convert('RGBA')).astype(np.float32); H, W = sh.shape[:2]; al = sh[..., 3]
rs = (al > 15).sum(1); ycut = min(range(int(H * .45), int(H * .55)), key=lambda y: rs[y])
def seam(y0, y1, xc):
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
    cellmap[y0:y1] = r * 3 + (xs >= s1[:, None]).astype(int) + (xs >= s2[:, None])
for k, f in enumerate(ORDER):
    old = np.asarray(Image.open(f'{DIR}/{f}.webp').convert('RGBA')).astype(np.float32); CH, CW = old.shape[:2]
    piece = sh.copy(); piece[..., 3] *= (cellmap == k)
    lab, n = ndi.label(piece[..., 3] > 8); sizes = ndi.sum(np.ones_like(lab), lab, range(1, n + 1))
    piece[..., 3] *= np.isin(lab, [i + 1 for i in range(n) if sizes[i] > 400])
    ys = np.nonzero((piece[..., 3] > 200).sum(1) > 30)[0]; last = ys.max()
    pm = piece.copy(); pm[..., :3] *= pm[..., 3:4] / 255
    def render(ox, oy, interp):
        M = np.float32([[1 / S, 0, ox], [0, 1 / S, oy]])
        return np.clip(cv2.warpAffine(pm, M, (CW, CH), flags=cv2.WARP_INVERSE_MAP | interp, borderMode=cv2.BORDER_CONSTANT, borderValue=0), 0, None)
    ox, oy = (k % 3) * W / 3, (0 if k < 3 else H / 2)
    top = int(CH * .6)
    for _ in range(3):
        g = render(ox, oy, cv2.INTER_LINEAR)
        (dx, dy), resp = cv2.phaseCorrelate(old[:top, :, 3].astype(np.float32), g[:top, :, 3].astype(np.float32))
        ox += dx / S; oy += dy / S
    canvas = render(ox, oy, cv2.INTER_LANCZOS4)
    lastc = int(np.floor((last - 2 - oy) * S))
    if lastc < CH - 1:
        n_ = CH - 1 - lastc; canvas[lastc + 1:] = canvas[lastc - n_ + 1:lastc + 1][::-1]
    a = canvas[..., 3:4]; rgb = np.where(a > 0, canvas[..., :3] / np.maximum(a, 1e-3) * 255, 0)
    out = Image.fromarray(np.dstack([np.clip(rgb, 0, 255), np.clip(a, 0, 255)]).astype(np.uint8))
    r_, g_, b_, a_ = out.split(); sharp = Image.merge('RGB', (r_, g_, b_)).filter(ImageFilter.UnsharpMask(radius=1.2, percent=55, threshold=2))
    out = Image.merge('RGBA', (*sharp.split(), a_))
    iou = ((np.asarray(a_) > 128) & (old[..., 3] > 128)).sum() / max(1, ((np.asarray(a_) > 128) | (old[..., 3] > 128)).sum())
    out.save(f'{DIR}/{f}.webp', 'WEBP', lossless=True, method=6)
    print(f, 'origin', round(ox, 1), round(oy, 1), 'match %.3f' % resp, 'alpha IoU %.3f' % iou)
