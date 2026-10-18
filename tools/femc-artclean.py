"""Art cleanup for the FEMC battle prototype: makes Shadow and Persona art from different games read as one set.

What it does to each image (clean() below):
  1. Cut-out: art without transparency goes through tools/femc-lift.swift (macOS Vision subject lift).
  2. Alpha cleanup: drops stray specks and faint haze, and pulls white/black fringe colours (left over from the
     background the art was cut from) toward the colour just inside the edge; art cut out by Vision also loses its
     light halo (dehalo). Edges keep a 1-2px soft ramp.
  3. Upscale (small sources only, longest side under 300px): Real-ESRGAN (realesr-animevideov3 x4, on the Mac's GPU)
     blended with a two-step LANCZOS upscale so 3D textures survive, then a mild unsharp mask. Without Real-ESRGAN
     it falls back to multi-step LANCZOS + unsharp mask. The alpha is upscaled the same way, so outlines stay smooth.
  4. Tone: a gentle brightness/contrast nudge for renders that are very dark or washed out (big, good art is left alone).
  5. Rim: a thin dark outline (about 1 CSS px at battle size), the same on every piece, like P3R's enemy art.
  Kat's own Haenim art (haenim*) only gets step 2's fringe cleanup and the usual trim/resize.

Run:  python3 tools/femc-shadows.py [--all]             Shadows (uses this file; writes art/shadows/*.webp + index.js)
      python3 tools/femc-artclean.py personas [--all]   Personas from Femc Mode Images/Personas -> art/personas/<slug>.webp
                                     [--only a,b] [--dst DIR]   (just these slugs / write somewhere else to try things)
      python3 tools/femc-artclean.py one IN.png OUT.webp [--small] [--pristine] [--no-rim] [--no-tone]
      python3 tools/femc-artclean.py sheet OUT.png DIR [DIR2]   contact sheet on dark purple (two dirs: before|after)
Without --all only new or changed sources are rebuilt; run with --all after changing this file.

Needs:  pip3 install --user numpy scipy realesrgan-ncnn-py   (realesrgan-ncnn-py is optional; PIL-only fallback)
Per-image exceptions (skip tone, skip rim, keep the old file) go in OVERRIDES below.
"""
import os, re, sys, glob, subprocess, tempfile
from femc_images import IMAGES as IMAGES_DIR
import numpy as np
from PIL import Image, ImageFilter, ImageDraw, ImageFont
from scipy import ndimage

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
LIFT = os.path.join(HERE, 'femc-lift.swift')
IMAGES = IMAGES_DIR
PERSONA_SRC = os.path.join(IMAGES, 'Personas')
PERSONA_DST = os.path.join(ROOT, 'assets/femc/battle/art/personas')

MAX = 900              # longest side of the output
SMALL = 300            # sources under this (longest side) are "small" and get upscaled
SMALL_TARGET_H = 640   # small Shadows are upscaled to about this height (2x the biggest battle size), at most 4x
PERSONA_TARGET = 900   # small Personas are upscaled toward this longest side (they are shown big in cut-ins), at most 4x
RIM_COLOR = (12, 5, 26)
RIM_ALPHA = 0.85
PURPLE = (34, 16, 52)

# slug: {'tone': False, 'rim': False, 'upscale': False, 'keep': True (leave the existing output alone)}
OVERRIDES = {
}
PERSONA_ALIASES = {'kalinemi': 'kala-nemi'}

_esr = None


def esrgan():
    """Real-ESRGAN upscaler (x4) or None when the package or a GPU is missing."""
    global _esr
    if _esr is None:
        try:
            import contextlib, io
            from realesrgan_ncnn_py import Realesrgan
            with contextlib.redirect_stdout(io.StringIO()):
                _esr = Realesrgan(gpuid=0, model=2)
        except Exception as e:  # noqa: BLE001
            print('  (Real-ESRGAN unavailable, using LANCZOS only:', e, ')')
            _esr = False
    return _esr or None


# ---------- helpers ----------

def arr(im):
    return np.asarray(im.convert('RGBA'), dtype=np.float32) / 255.0


def img(a):
    return Image.fromarray((np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8))


def has_alpha(im):
    if im.mode not in ('RGBA', 'LA', 'PA') and 'transparency' not in im.info:
        return False
    a = im.convert('RGBA').getchannel('A').resize((64, 64))
    return sum(1 for v in a.getdata() if v < 10) > 64 * 64 * 0.05


def lift_cmd():
    """femc-lift.swift compiled once into ~/Library/Caches (compiling on every call is slow); falls back to `swift`."""
    exe = os.path.expanduser('~/Library/Caches/femc-lift')
    if not os.path.exists(exe) or os.path.getmtime(exe) < os.path.getmtime(LIFT):
        os.makedirs(os.path.dirname(exe), exist_ok=True)
        if subprocess.run(['swiftc', '-O', LIFT, '-o', exe], capture_output=True).returncode != 0:
            return ['swift', LIFT]
    return [exe]


def load(src):
    """Open a source, cutting it out with Vision when it has no transparency."""
    im = Image.open(src)
    if not has_alpha(im):
        tmp = tempfile.NamedTemporaryFile(suffix='.png', delete=False).name
        r = subprocess.run(lift_cmd() + [src, tmp], capture_output=True, text=True)
        if r.returncode == 0:
            im = Image.open(tmp).convert('RGBA')
            im.info['lifted'] = True
        os.remove(tmp)
    lifted = im.info.get('lifted', False)
    im = im.convert('RGBA')
    im.info['lifted'] = lifted
    return im


def trim(im, pad=0):
    box = im.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox()
    if box:
        im = im.crop(box)
    if pad:
        c = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad), (0, 0, 0, 0))
        c.paste(im, (pad, pad))
        im = c
    return im


def lum(rgb):
    return rgb[..., 0] * 0.299 + rgb[..., 1] * 0.587 + rgb[..., 2] * 0.114


# ---------- 2. alpha cleanup ----------

def despeckle(a):
    """Zero faint haze and tiny islands that are clearly debris (small AND faint, or just a few pixels)."""
    A = a[..., 3]
    A[A < 4 / 255] = 0
    lab, n = ndimage.label(A > 0.04, structure=np.ones((3, 3)))
    if n > 1:
        idx = np.arange(1, n + 1)
        area = ndimage.sum(np.ones_like(A), lab, idx)
        peak = ndimage.maximum(A, lab, idx)
        total = area.sum()
        drop = (area < 5) | ((area < total * 0.0015) & (peak < 0.35))
        if drop.any():
            A[np.isin(lab, idx[drop])] = 0
    a[..., 3] = A
    return a


def defringe(a, band=2.5):
    """Pull edge colours toward the solid colour just inside, so leftover white or black background doesn't glow.
    Only touches the outer band of the cut-out; ghostly see-through bodies far from solid pixels are left alone."""
    A = a[..., 3]
    solid = A >= 0.92
    if solid.sum() < 50:
        solid = A >= 0.6
    if not solid.any():
        return a
    dist, (iy, ix) = ndimage.distance_transform_edt(~solid, return_indices=True)
    near = a[iy, ix, :3]
    edge = (A > 0) & (A < 0.92) & (dist <= band)
    # Is the fringe lighter (white cut-out) or darker than what's inside? Then take it out harder.
    if edge.sum() > 20:
        d = lum(a[..., :3])[edge] - lum(near)[edge]
        halo = abs(float(np.median(d)))
    else:
        halo = 0.0
    w = (1 - A) ** (0.6 if halo > 0.12 else 1.0)          # mostly-transparent pixels take the inside colour
    w = np.where(edge, w, 0)[..., None]
    a[..., :3] = a[..., :3] * (1 - w) + near * w
    if halo > 0.18:                                        # strong white halo: tighten the edge by ~half a pixel
        ramp = np.clip((A - 0.15) / 0.85, 0, 1)
        a[..., 3] = np.where(edge, ramp, A)
    return a


def dehalo(a):
    """For art cut out of a light background (Vision lift): the outermost 1-2 opaque pixels still carry that
    background. Pull edge pixels that are LIGHTER than the colour a few pixels inside back toward it, and choke the
    alpha by about half a pixel."""
    A = a[..., 3]
    solid = A >= 0.5
    core = ndimage.binary_erosion(solid, iterations=3)
    if core.sum() < 50:
        return a
    dist, (iy, ix) = ndimage.distance_transform_edt(~core, return_indices=True)
    near = a[iy, ix, :3]
    band = (A > 0) & (dist <= 4)
    lighter = np.clip((lum(a[..., :3]) - lum(near) - 0.04) / 0.15, 0, 1)
    w = np.where(band, lighter * np.clip((4.5 - dist) / 3, 0, 1), 0)[..., None] * 0.85
    a[..., :3] = a[..., :3] * (1 - w) + near * w
    a[..., 3] = 0.5 * A + 0.5 * ndimage.grey_erosion(A, size=(3, 3))
    return a


def bleed(a, px=8):
    """Fill the colour of transparent pixels with the nearest visible colour (alpha unchanged) so resampling
    never drags black or white in from outside the shape."""
    A = a[..., 3]
    vis = A > 0.5
    if not vis.any():
        return a
    _, (iy, ix) = ndimage.distance_transform_edt(~vis, return_indices=True)
    out = a.copy()
    m = ~vis
    out[..., :3][m] = a[iy, ix, :3][m]
    return out


# ---------- 3. upscale ----------

def lanczos_up(im, size):
    """Upscale in steps of at most 2x with a light unsharp mask after each step."""
    w, h = im.size
    while w * 2 < size[0]:
        w, h = w * 2, h * 2
        im = im.resize((w, h), Image.LANCZOS).filter(ImageFilter.UnsharpMask(1.0, 40, 2))
    return im.resize(size, Image.LANCZOS)


def upscale(a, scale):
    """Edge-aware upscale of a cleaned RGBA array by `scale` (<= 4)."""
    h, w = a.shape[:2]
    size = (max(1, round(w * scale)), max(1, round(h * scale)))
    filled = bleed(a)
    rgb = img(filled).convert('RGB')
    alpha = Image.fromarray((filled[..., 3] * 255 + 0.5).astype(np.uint8))
    lz = lanczos_up(rgb, size)
    lza = lanczos_up(alpha.convert('RGB'), size).convert('L')
    r = esrgan()
    if r:
        import contextlib, io
        with contextlib.redirect_stdout(io.StringIO()):
            e = r.process_pil(rgb)
            ea = r.process_pil(alpha.convert('RGB')).convert('L')
        e = e.resize(size, Image.LANCZOS)
        ea = ea.resize(size, Image.LANCZOS)
        # ESRGAN draws clean edges but flattens fine 3D texture (scales, marbling); mix some LANCZOS back in.
        rgb_up = Image.blend(e, lz, 0.3)
        a_up = Image.blend(ea, lza, 0.25)
    else:
        rgb_up, a_up = lz, lza
    rgb_up = rgb_up.filter(ImageFilter.UnsharpMask(1.2, 35, 2))
    # Keep a 1-2px soft edge: sharpen the alpha ramp a little, then soften it by a hair.
    A = np.asarray(a_up, np.float32) / 255
    A = np.clip((A - 0.08) / 0.84, 0, 1)
    A = A * A * (3 - 2 * A)
    A = ndimage.gaussian_filter(A, 0.55)
    out = np.dstack([np.asarray(rgb_up, np.float32) / 255, A])
    return out


# ---------- 4. tone ----------

def tone(a, strength=0.6):
    """Nudge very dark or washed-out art toward the middle of the set. Returns (array, note)."""
    A = a[..., 3]
    m = A > 0.6
    if m.sum() < 200:
        return a, ''
    L = lum(a[..., :3])[m]
    lo, mid, hi = np.percentile(L, [2, 50, 98])
    rgb = a[..., :3]
    notes = []
    # washed out: low contrast and lifted blacks -> stretch levels
    if hi - lo < 0.62 and lo > 0.10:
        rng = hi - lo
        new = rng + (min(0.8, rng * 1.35) - rng) * strength      # widen the range by up to ~20%, around the middle
        c = (lo + hi) / 2 - 0.03 * strength                      # and settle the blacks a touch
        t_lo, t_hi = c - new / 2, min(0.98, c + new / 2)
        rgb = (rgb - lo) / max(rng, 1e-3) * (t_hi - t_lo) + t_lo
        notes.append(f'levels {lo:.2f}-{hi:.2f}')
    # very dark overall -> lift midtones with a gamma (blacks stay black)
    if mid < 0.16 and hi < 0.75:
        g = np.log(0.2) / np.log(max(mid, 0.02))
        g = 1 + (min(max(g, 0.75), 1.0) - 1) * strength * 0.8
        rgb = np.clip(rgb, 0, 1) ** g
        notes.append(f'gamma {g:.2f}')
    a = a.copy()
    a[..., :3] = np.clip(rgb, 0, 1)
    return a, ' '.join(notes)


# ---------- 5. rim ----------

def rim(a, width):
    """Composite the art over a thin dark outline `width` px wide (soft outer pixel). Pads the canvas."""
    pad = int(np.ceil(width)) + 2
    a = np.pad(a, ((pad, pad), (pad, pad), (0, 0)))
    A = a[..., 3]
    inside = A >= 0.5
    dist = ndimage.distance_transform_edt(~inside)
    R = np.clip(width + 0.5 - dist, 0, 1)
    # Inside the silhouette, back only the outermost ~1.5px (the soft edge) so there's no light gap between art and
    # rim; see-through bodies (ghosts, mist) must not get a dark backing everywhere.
    din = ndimage.distance_transform_edt(inside)
    R = np.where(inside, np.clip(2.0 - din, 0, 1) * 0.6 + 0.4 * (din <= 1), R) * RIM_ALPHA
    out_a = A + R * (1 - A)
    col = np.array(RIM_COLOR, np.float32) / 255
    num = a[..., :3] * A[..., None] + col * (R * (1 - A))[..., None]
    rgb = np.where(out_a[..., None] > 0, num / np.maximum(out_a, 1e-6)[..., None], 0)
    return np.dstack([rgb, out_a])


# ---------- the pipeline ----------

def clean(im, *, small=None, target=None, pristine=False, do_tone=True, do_rim=True, do_upscale=True, log=None):
    """im: RGBA PIL image from load(). small: source counts as small (default: longest side < SMALL).
    target: (for small sources) desired output height, or ('long', px) for the longest side."""
    lifted = im.info.get('lifted', False)
    im = trim(im.convert('RGBA'))
    w0, h0 = im.size
    if small is None:
        small = max(w0, h0) < SMALL
    a = arr(im)
    a = despeckle(a)
    if lifted:
        a = dehalo(a)
    a = defringe(a)
    if pristine:
        out = img(a)
        out.thumbnail((MAX, MAX), Image.LANCZOS)
        return trim(out)
    if small and do_upscale:
        if isinstance(target, tuple):
            s = target[1] / max(w0, h0)
        else:
            s = (target or SMALL_TARGET_H) / h0
        s = min(4.0, s, MAX / max(w0, h0))
        if s > 1.05:
            a = upscale(a, s)
            a = despeckle(a)
    else:
        big = max(a.shape[:2])
        if big > MAX:
            pim = img(bleed(a))
            pim.thumbnail((MAX, MAX), Image.LANCZOS)
            a = arr(pim)
    note = ''
    if do_tone:
        a, note = tone(a)
    if do_rim:
        a = rim(a, max(1.6, a.shape[0] / 300))
    if log is not None and note:
        log.append(note)
    out = img(a)
    # zero the colour of fully transparent pixels (smaller files, nothing to fringe)
    out = Image.composite(out, Image.new('RGBA', out.size, (0, 0, 0, 0)), out.getchannel('A'))
    return trim(out, 0)


def save(im, path):
    im.save(path, 'WEBP', quality=90, method=5)


# ---------- Personas ----------

def persona_slug(name):
    s = os.path.splitext(name)[0]
    s = re.sub(r'\d+$', '', s)
    s = re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
    return PERSONA_ALIASES.get(s, s)


def personas(redo=False, dst=PERSONA_DST, only=()):
    os.makedirs(dst, exist_ok=True)
    best = {}
    for f in sorted(os.listdir(PERSONA_SRC)):
        p = os.path.join(PERSONA_SRC, f)
        if f.startswith('.') or not os.path.isfile(p) or os.path.splitext(f)[1].lower() not in ('.png', '.webp', '.jpg', '.jpeg'):
            continue
        with Image.open(p) as probe:
            rank = (has_alpha(probe), probe.size[0] * probe.size[1])   # cut-out art first, then the biggest
        sid = persona_slug(f)
        if sid not in best or rank > best[sid][0]:
            best[sid] = (rank, p)
    for sid, (_, src) in sorted(best.items()):
        if only and sid not in only:
            continue
        out = os.path.join(dst, sid + '.webp')
        o = OVERRIDES.get(sid, {})
        if o.get('keep') and os.path.exists(out):
            continue
        if not redo and not only and os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
            continue
        im = load(src)
        pristine = sid.startswith('haenim')
        tw = trim(im).size
        small = max(tw) < 600 and not pristine
        log = []
        res = clean(im, small=small, target=('long', PERSONA_TARGET), pristine=pristine,
                    do_tone=o.get('tone', True), do_rim=o.get('rim', True), do_upscale=o.get('upscale', True), log=log)
        save(res, out)
        print(f'  {sid:20} {res.width}x{res.height}  from {os.path.basename(src)} {tw[0]}x{tw[1]}'
              f'{"  pristine" if pristine else ""}{"  upscaled" if small else ""} {" ".join(log)}')


# ---------- contact sheets ----------

def sheet(out, dirs, H=260, width=2400):
    names = sorted(os.path.basename(f) for f in glob.glob(os.path.join(dirs[-1], '*.webp')))
    try:
        font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 14)
    except Exception:  # noqa: BLE001
        font = ImageFont.load_default()
    cells = []
    for n in names:
        ims = []
        for d in dirs:
            p = os.path.join(d, n)
            im = Image.open(p).convert('RGBA') if os.path.exists(p) else Image.new('RGBA', (10, H))
            ims.append(im.resize((max(1, round(im.width * H / im.height)), H), Image.LANCZOS))
        c = Image.new('RGBA', (sum(i.width for i in ims) + 8 * len(ims) + 8, H + 36), PURPLE + (255,))
        x = 8
        for i in ims:
            c.alpha_composite(i, (x, 8))
            x += i.width + 8
        ImageDraw.Draw(c).text((8, H + 14), n[:-5], fill=(230, 220, 255, 255), font=font)
        cells.append(c)
    rows, row, rw = [], [], 0
    for c in cells:
        if row and rw + c.width > width:
            rows.append(row)
            row, rw = [], 0
        row.append(c)
        rw += c.width
    if row:
        rows.append(row)
    s = Image.new('RGB', (width, sum(max(c.height for c in r) for r in rows)), PURPLE)
    y = 0
    for r in rows:
        x = 0
        for c in r:
            s.paste(c, (x, y), c)
            x += c.width
        y += max(c.height for c in r)
    s.save(out)
    print(out, s.size)


if __name__ == '__main__':
    args = sys.argv[1:]
    cmd = args[0] if args else ''
    if cmd == 'personas':
        dst = args[args.index('--dst') + 1] if '--dst' in args else PERSONA_DST
        only = set(args[args.index('--only') + 1].split(',')) if '--only' in args else ()
        personas('--all' in args, dst, only)
    elif cmd == 'one' and len(args) >= 3:
        res = clean(load(args[1]), small=True if '--small' in args else None, pristine='--pristine' in args,
                    do_rim='--no-rim' not in args, do_tone='--no-tone' not in args)
        save(res, args[2]) if args[2].endswith('.webp') else res.save(args[2])
        print(args[2], res.size)
    elif cmd == 'sheet' and len(args) >= 3:
        sheet(args[1], args[2:])
    else:
        print(__doc__)
