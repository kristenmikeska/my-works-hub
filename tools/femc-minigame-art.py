#!/usr/bin/env python3
"""Kat's Regionals minigame art (FEMC-ART-TODO 43, Nov 10 2026) -> assets/femc/game/art/minigames/ow/<name>.webp.

  python3 tools/femc-minigame-art.py        every New Adds/mg-ow-*.png|jpg|webp that's there (re-run any time; it replaces)

New Adds/mg-ow-<name>.png -> <name>.webp:
  map-*        16:9 backgrounds: resized to at most 1920 wide, RGB, q86
  hands        Solar's first-person hands: kept transparent (a white background is keyed out), q90
  team-*, foe-*  full-body figures: transparent (white keyed out), trimmed to the figure with the feet on the bottom edge,
               on a 1:2 canvas (the game's figure box), q90
  potg-*       the Play of the Game splash: RGB, at most 1920 wide, q88
regionals.js loads each by name and falls back to its drawn stand-in when a file isn't there. Kat's files are only read.
"""
import os
from pathlib import Path
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
NEW = Path.home() / 'Documents/UniverseHub-Images/Femc Mode Images/New Adds'
OUT = ROOT / 'assets/femc/game/art/minigames/ow'


def alpha(im):
    im = im.convert('RGBA')
    if im.getchannel('A').getextrema()[0] == 255:  # plain white background: key it out with a soft edge
        px = np.asarray(im).copy(); d = px[..., :3].min(2).astype(int)
        px[..., 3] = np.where(d > 235, np.clip((255 - d) * 12, 0, 255), 255).astype(np.uint8)
        im = Image.fromarray(px, 'RGBA')
    return im


def figure(im):
    im = alpha(im); a = np.asarray(im.getchannel('A')) > 16
    ys, xs = np.nonzero(a.sum(1) >= 3)[0], np.nonzero(a.sum(0) >= 3)[0]
    im = im.crop((int(xs[0]), int(ys[0]), int(xs[-1]) + 1, int(ys[-1]) + 1))
    w, h = im.size; H = max(h, w * 2); W = H // 2
    c = Image.new('RGBA', (W, H), (0, 0, 0, 0)); c.paste(im, ((W - w) // 2, H - h)); return c


def fit(im, w=1920):
    return im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    # the dumpling game's counter and pan (FEMC-ART-TODO 44): New Adds/cook-*.png -> art/minigames/cook/*.webp
    COOK = ROOT / 'assets/femc/game/art/minigames/cook'; COOK.mkdir(parents=True, exist_ok=True)
    for f in sorted(NEW.glob('cook-*')):
        if f.suffix.lower() not in ('.png', '.jpg', '.jpeg', '.webp'): continue
        dst = COOK / f'{f.stem[len("cook-"):]}.webp'; fit(Image.open(f).convert('RGB')).save(dst, 'WEBP', quality=88); print(f.name, '->', dst.relative_to(ROOT))
    for f in sorted(NEW.glob('mg-ow-*')):
        if f.suffix.lower() not in ('.png', '.jpg', '.jpeg', '.webp'): continue
        name = f.stem[len('mg-ow-'):]; im = Image.open(f); dst = OUT / f'{name}.webp'
        if name.startswith('map-'): fit(im.convert('RGB')).save(dst, 'WEBP', quality=86)
        elif name.startswith('potg'): fit(im.convert('RGB')).save(dst, 'WEBP', quality=88)
        elif name == 'hands': fit(alpha(im)).save(dst, 'WEBP', quality=90, alpha_quality=100)
        else: figure(im).save(dst, 'WEBP', quality=90, alpha_quality=100)
        print(f.name, '->', dst.relative_to(ROOT), Image.open(dst).size)


if __name__ == '__main__':
    main()
