"""Renders the installable-app icons for Persona 3: Solstice from assets/femc/title/solstice-icon.svg (2026-11-04).

Run: python3 tools/femc-app-icons.py
Output (assets/femc/title/): app-icon-192.png, app-icon-512.png (the SVG as drawn: rounded night square, pink edge,
transparent corners) and app-icon-maskable-512.png (full-bleed #14070f with the icon inside the maskable safe circle),
listed in femc-game.webmanifest; apple-touch-icon uses app-icon-192.png.
No SVG library is installed on this Mac, so headless Chrome draws the SVG at 512 x 512 (one Chrome at a time, closed
after each shot) and PIL makes the 192 copy. Re-run after editing solstice-icon.svg, then bump the ?v= on the icon paths
in femc-game.webmanifest and femc-game.html.
"""
import os, subprocess, sys, tempfile
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SVG = os.path.join(ROOT, 'assets/femc/title/solstice-icon.svg')
OUT = os.path.join(ROOT, 'assets/femc/title')
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
SIZE = 512
NIGHT = '#14070f'


def render(html, dst):
    with tempfile.TemporaryDirectory(prefix='femc-icon-') as tmp:
        page = os.path.join(tmp, 'icon.html')
        with open(page, 'w') as f:
            f.write(html)
        shot = os.path.join(tmp, 'shot.png')
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
                        '--no-default-browser-check', f'--user-data-dir={tmp}/profile', '--force-device-scale-factor=1',
                        '--default-background-color=00000000', f'--window-size={SIZE},{SIZE}', f'--screenshot={shot}',
                        'file://' + page], check=True, capture_output=True, timeout=60)
        im = Image.open(shot).convert('RGBA')
        if im.size != (SIZE, SIZE):
            im = im.crop((0, 0, SIZE, SIZE))
        im.save(dst, optimize=True)
        return im


def main():
    svg = open(SVG).read()
    base = '<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:%dpx;height:%dpx;overflow:hidden;background:%s}' \
           'svg{display:block}</style>'
    # "any": the icon as drawn, transparent outside its rounded square.
    plain = base % (SIZE, SIZE, 'transparent') + svg.replace('<svg ', f'<svg width="{SIZE}" height="{SIZE}" ', 1)
    im = render(plain, os.path.join(OUT, 'app-icon-512.png'))
    im.resize((192, 192), Image.LANCZOS).save(os.path.join(OUT, 'app-icon-192.png'), optimize=True)
    # "maskable": full-bleed night, the icon at 76% so its pink edge sits inside the 80% safe circle's square.
    k = round(SIZE * .76)
    mask = (base % (SIZE, SIZE, NIGHT)).replace('svg{display:block}', f'svg{{display:block;position:absolute;left:{(SIZE - k) // 2}px;top:{(SIZE - k) // 2}px}}') \
        + svg.replace('<svg ', f'<svg width="{k}" height="{k}" ', 1)
    m = render(mask, os.path.join(OUT, 'app-icon-maskable-512.png'))
    for name, img in [('app-icon-512.png', im), ('app-icon-maskable-512.png', m)]:
        corner = img.getpixel((2, 2))
        print(name, img.size, 'corner', corner)
    print('wrote', OUT)


if __name__ == '__main__':
    sys.exit(main())
