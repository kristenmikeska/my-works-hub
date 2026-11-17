"""Equinox faces onto a character's Solstice portrait canvas (Equinox art batch 4, Nov 16 2026; EQUINOX-TECH.md "Art batch 4").
Run: python3 tools/femc-equinox-faces.py SHEET BASE OUTDIR faces [grid]
  SHEET   Kat's transparent expression sheet (3 x 2 default; for single-face files, paste them into a 1536 x 1024 grid of
          512 cells first); BASE  the Solstice portrait folder (or one .webp) whose canvas, size and face spot to keep;
  OUTDIR  PNGs per face; faces  comma list in reading order ('-' skips a cell).
Then: WebP q90 into assets/femc/portraits/<id>-equinox/, index.js, scale.js (= the base's), placements-data.js (= the base's
face centre) + tools/femc-placements.py, config.js faces.
How: the new neutral's face (Vision box) gets the base neutral's face height and centre; every other cell is placed by its
BODY (the bust below the chin matched to the neutral's), so expressions never drift. Vision misses many anime faces:
then (or with FORCE_FALLBACK=1) the size comes from the cast's on-screen face, M_TARGET = scale.js x face height / canvas
height (women .375, men .385, Ken .335, Junpei .33, Fuuka .34, Koromaru .35), with SCALE_BASE = the base's scale.js value
and FACE_NEW = the new face height in sheet px (about 175 on Kat's 512 cells), placed by head centre and hair top.
CANVAS_W widens the base canvas (Fuuka's 540 was too narrow). Check every result beside the old face at game scale."""
import sys, subprocess, numpy as np, cv2, os
from PIL import Image
from scipy import ndimage as ndi
HERE = os.path.dirname(os.path.abspath(__file__)); FB = HERE + '/.femc-facebox'
if not os.path.exists(FB): subprocess.run(['swiftc', '-O', HERE + '/femc-facebox.swift', '-o', FB], check=True)
sheet, base, out, faces = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4].split(',')
cols, rows = map(int, (sys.argv[5] if len(sys.argv) > 5 else '3x2').split('x'))
os.makedirs(out, exist_ok=True)
def face(path):
    o = subprocess.run([FB, path], capture_output=True, text=True).stdout.split()
    if 'NOFACE' in o or 'noface' in o: return None
    W, H, x, y, w, h = map(float, o[1:7]); return x + w / 2, y + h / 2, h
SH = np.asarray(Image.open(sheet).convert('RGBA')).astype(np.float32); H, W = SH.shape[:2]; A = SH[..., 3]
def emptiest(axis, at, span):
    prof = (A > 40).sum(axis=0 if axis == 'x' else 1)
    lo, hi = max(1, at - span), at + span
    return lo + int(np.argmin(prof[lo:hi]))
xs = [0] + [emptiest('x', W * c // cols, W // (cols * 5)) for c in range(1, cols)] + [W]
ys = [0] + [emptiest('y', H * r // rows, H // (rows * 5)) for r in range(1, rows)] + [H]
def cell(k):
    c, r = k % cols, k // cols; m = np.zeros((H, W), bool); m[ys[r]:ys[r+1], xs[c]:xs[c+1]] = True
    p = SH.copy(); p[..., 3] *= m
    lab, n = ndi.label(p[..., 3] > 8)
    if n > 1:
        sz = ndi.sum(np.ones_like(lab), lab, range(1, n + 1)); keep = np.isin(lab, [i + 1 for i in range(n) if sz[i] > max(400, sz.max() * .02)])
        p[..., 3] *= keep
    return p, ys[r + 1]
def gray(p): return cv2.cvtColor((p[..., :3] * p[..., 3:] / 255).astype(np.uint8), cv2.COLOR_RGB2GRAY)
# neutral = first cell
n_p, _ = cell(0); tmp = out + '/_n.png'
ys_, xs_ = np.nonzero(n_p[..., 3] > 8); bx = (xs_.min(), ys_.min(), xs_.max() + 1, ys_.max() + 1)
Image.fromarray(n_p.astype(np.uint8)).crop(bx).save(tmp)
f = face(tmp); os.remove(tmp)
cands = [base] if not os.path.isdir(base) else [base + '/' + x + '.webp' for x in ['neutral', 'happy', 'serious', 'sad', 'surprised', 'flustered', 'blushing'] if os.path.exists(base + '/' + x + '.webp')]
fb = None
for cb in cands:
    B = np.asarray(Image.open(cb).convert('RGBA'))
    if os.environ.get('CANVAS_W'):
        pw = int(os.environ['CANVAS_W']) - B.shape[1]; B = np.pad(B, ((0, 0), (pw // 2, pw - pw // 2), (0, 0)))
    CH, CW = B.shape[:2]
    Image.fromarray(B).save(out + '/_b.png'); fb = face(out + '/_b.png'); os.remove(out + '/_b.png')
    if fb: print('base ref', os.path.basename(cb)); break
FN, MT, SB = os.environ.get('FACE_NEW'), os.environ.get('M_TARGET'), os.environ.get('SCALE_BASE')
if f is None or fb is None or os.environ.get('FORCE_FALLBACK'):
    # fallback: size from the cast's on-screen face (m = scale.js x face / canvas H), place by head centre x and hair top
    nh = float(FN) if FN else (f[2] if f else 175.0); T = float(MT) * CH / float(SB); s = T / nh
    ba = B[..., 3] > 40; byt = np.nonzero(ba.any(1))[0][0]; bhx = np.nonzero(ba[byt:byt + int(.42 * CH)].any(0))[0]
    na = n_p[..., 3] > 40; nyt = np.nonzero(na.any(1))[0][0]; nhx = np.nonzero(na[nyt:nyt + int(.42 * CH / s)].any(0))[0]
    # face centre stand-ins: head centre x, and 'hair top + 0.62 face heights' for y, mapped the same on both
    ncx, ncy = (nhx[0] + nhx[-1]) / 2, nyt + .62 * nh
    fb = ((bhx[0] + bhx[-1]) / 2, byt + .62 * T, T); print('fallback face', nh, 'target', round(T, 1))
else:
    ncx, ncy, nh = f[0] + bx[0], f[1] + bx[1], f[2]
s = fb[2] / nh; print('scale', round(s, 4), 'new face', round(nh, 1), 'base face', round(fb[2], 1), 'canvas', CW, CH)
g0 = gray(n_p); by0 = int(ncy + .75 * nh); by1 = min(int(ncy + 1.6 * nh), ys[1] - 3); bx0 = int(max(xs[0], ncx - 1.3 * nh)); bx1 = int(min(xs[1], ncx + 1.3 * nh))
body = g0[by0:by1, bx0:bx1]
for k, name in enumerate(faces):
    if name == '-': continue
    p, ybot = cell(k)
    if k == 0: dx = dy = 0; v = 1
    else:
        c, r = k % cols, k // cols; ox, oy = xs[c] - xs[0], ys[r] - ys[0]
        g = gray(p); sx0, sy0 = max(0, bx0 + ox - 120), max(0, by0 + oy - 120)
        reg = g[sy0: by1 + oy + 120, sx0: bx1 + ox + 120]
        rr = cv2.matchTemplate(reg, body, cv2.TM_CCOEFF_NORMED); _, v, _, L = cv2.minMaxLoc(rr)
        dx, dy = sx0 + L[0] - bx0, sy0 + L[1] - by0
    # canvas = (sheet - (ncx+dx, ncy+dy)) * s + (fbx, fby)
    M = np.float32([[s, 0, fb[0] - (ncx + dx) * s], [0, s, fb[1] - (ncy + dy) * s]])
    pm = p.copy(); pm[..., :3] *= pm[..., 3:4] / 255
    cv = cv2.warpAffine(pm, M, (CW, CH), flags=cv2.INTER_AREA if s < 1 else cv2.INTER_LINEAR, borderValue=0)
    last = int(np.nonzero((p[..., 3] > 200).sum(1) > 30)[0].max()) - 2
    lastc = int(np.floor((last - (ncy + dy)) * s + fb[1]))
    if lastc < CH - 1: cv[lastc + 1:] = cv[lastc][None]
    a = cv[..., 3:4]; rgb = np.where(a > 0, cv[..., :3] / np.maximum(a, 1e-3) * 255, 0)
    o = np.dstack([np.clip(rgb, 0, 255), np.clip(a, 0, 255)]).astype(np.uint8)
    Image.fromarray(o).save(f'{out}/{name}.png'); print(name, 'body %.3f' % v, 'shift', dx, dy, 'bust row', lastc)
