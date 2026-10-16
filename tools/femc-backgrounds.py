"""Copies Kat's FEMC scene backgrounds into the site as webp.

Run: python3 tools/femc-backgrounds.py
Source: ~/Documents/UniverseHub-Images/Femc Mode Images/Background Images/<Name>.jpg|png|webp|avif
Output: assets/femc/bg/<name>.webp (lowercased, spaces and underscores become hyphens), at most 1920px wide.
Which place uses which background is set by hand in assets/femc/backgrounds.js.
"""
import os, re
from PIL import Image

SRC = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images/Background Images')
DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets/femc/bg')
os.makedirs(DST, exist_ok=True)


def trim_bars(im):
    """Crops letterbox/pillarbox bars (rows or columns that are almost entirely black) off the edges."""
    g = im.convert('L')
    dark = lambda box: max(g.crop(box).getdata()) < 24
    top, bottom, left, right = 0, im.height, 0, im.width
    while top < bottom - 10 and dark((0, top, im.width, top + 1)): top += 1
    while bottom > top + 10 and dark((0, bottom - 1, im.width, bottom)): bottom -= 1
    while left < right - 10 and dark((left, top, left + 1, bottom)): left += 1
    while right > left + 10 and dark((right - 1, top, right, bottom)): right -= 1
    return im.crop((left, top, right, bottom)) if (top, bottom, left, right) != (0, im.height, 0, im.width) else im
for f in sorted(os.listdir(SRC)):
    stem, ext = os.path.splitext(f)
    if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp', '.avif'):
        continue
    slug = re.sub(r'[^a-z0-9]+', '-', stem.lower()).strip('-')
    im = trim_bars(Image.open(os.path.join(SRC, f)).convert('RGB'))
    if im.width > 1920:
        im = im.resize((1920, round(im.height * 1920 / im.width)), Image.LANCZOS)
    im.save(os.path.join(DST, slug + '.webp'), 'WEBP', quality=82, method=5)
    print(f'{slug:32} {im.width}x{im.height}')
