"""Cuts Kat's Evoker prop (evoker-prop.jpeg, batch 37) to a transparent WebP for the summon cut-in of anyone without
their own Evoker art (battle.js EVOKER_ART; the code-drawn EVOKER_SVG stays as the fallback).

The source is a silver revolver on a painted checkerboard, muzzle to the right, which is how the cut-in uses it (the
gun sits left of the face, muzzle at the temple), so it isn't flipped. Steps: the macOS Vision cut-out
(tools/femc-artclean.py load), the trigger-guard hole cleared by hand-drawn polygons (Vision keeps checker squares
there; the trigger itself is left out of the hole), flat checker squares cleared in the cylinder gap, the soft Vision
edge tightened and defringed so no light checker glows round the outline, trimmed and scaled to 800 wide.
Run: python3 tools/femc-evoker-prop.py
Out: assets/femc/battle/art/summon/evoker-prop.webp
"""
import importlib.util, os
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location('femc_artclean', os.path.join(HERE, 'femc-artclean.py'))
AC = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(AC)
IMAGES = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')
OUT = os.path.join(os.path.dirname(HERE), 'assets/femc/battle/art/summon/evoker-prop.webp')
# Guard hole and trigger, in source pixels (drawn on a 2x zoom of the 900,650 corner, hence /2).
HOLE = [(240, 190), (300, 140), (380, 122), (520, 125), (700, 122), (840, 150), (905, 230), (910, 340), (865, 445), (760, 515),
        (600, 562), (420, 572), (265, 548), (180, 482), (155, 380), (165, 280)]
TRIGGER = [(365, 118), (515, 118), (475, 200), (462, 290), (485, 375), (545, 445), (600, 520), (560, 532), (470, 462), (405, 382),
           (372, 292), (378, 210)]
CHECKER_BOXES = [(940, 715, 1380, 960), (1395, 495, 1455, 635)]


def source():
    for d in ('Added to Game', 'New Adds'):
        p = os.path.join(IMAGES, d, 'evoker-prop.jpeg')
        if os.path.exists(p):
            return p
    raise SystemExit('missing evoker-prop.jpeg')


def main():
    im = AC.load(source()).convert('RGBA')
    a = np.asarray(im).astype(np.float32)
    L = a[..., :3].mean(2); sat = a[..., :3].max(2) - a[..., :3].min(2)
    mu = ndimage.uniform_filter(L, 7); sd = np.sqrt(np.maximum(ndimage.uniform_filter(L * L, 7) - mu * mu, 0))
    flat = (sd < 6) & (sat < 10) & ((abs(L - 178) < 12) | (abs(L - 56) < 12)) & (a[..., 3] > 8)
    lab, _ = ndimage.label(flat); sz = np.bincount(lab.ravel()); sz[0] = 0
    chk = np.isin(lab, np.nonzero(sz >= 40)[0])
    box = np.zeros_like(chk)
    for x0, y0, x1, y1 in CHECKER_BOXES:
        box[y0:y1, x0:x1] = True
    chk = ndimage.binary_dilation(chk & box, iterations=2)
    hole = Image.new('L', im.size, 0); d = ImageDraw.Draw(hole)
    d.polygon([(900 + x / 2, 650 + y / 2) for x, y in HOLE], fill=255)
    d.polygon([(900 + x / 2, 650 + y / 2) for x, y in TRIGGER], fill=0)
    a[..., 3][chk | (np.asarray(hole) > 0)] = 0
    f = a / 255.0
    f[..., 3] = np.clip((f[..., 3] - 0.45) / 0.5, 0, 1)
    f = AC.defringe(f)
    out = Image.fromarray((np.clip(f, 0, 1) * 255).round().astype(np.uint8))
    out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox())
    out = out.resize((800, round(out.height * 800 / out.width)), Image.LANCZOS)
    out.save(OUT, 'WEBP', quality=90, method=5)
    print('wrote', OUT, out.size)


main()
