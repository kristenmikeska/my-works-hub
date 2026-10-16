"""Splits a grid of expressions (one AI generation, e.g. 2x2 or 3x2) into separate portrait files.

Run: python3 tools/femc-sheet.py SHEET.png Name [--grid 2x2] [--emotions neutral,happy,serious,surprised] [--force]
  Cells are read left to right, top to bottom, and named by --emotions (defaults: 2x2 = neutral, happy, sad,
  angry; 2x1 = embarrassed, surprised; 3x2 = neutral, happy, sad, angry, embarrassed, surprised). The plain background is cut out.
Output: ~/Documents/UniverseHub-Images/Femc Mode Images/Character Portraits/<Name>/<Name>-<Emotion>.png
Then run python3 tools/femc-portraits.py <name> to align them and add them to the site.
"""
import os, sys, argparse
from collections import deque
from PIL import Image, ImageFilter

DST = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images/Character Portraits')
DEFAULTS = {(2, 2): 'neutral,happy,sad,angry', (2, 1): 'embarrassed,surprised', (3, 2): 'neutral,happy,sad,angry,embarrassed,surprised',
            (2, 3): 'neutral,happy,sad,angry,embarrassed,surprised', (3, 1): 'neutral,happy,sad'}


def drop_specks(alpha, step=4):
    """Removes tiny opaque islands (stray sparkles, dust) that aren't attached to the character."""
    w, h = alpha.size
    small = alpha.resize((w // step, h // step)).point(lambda v: 255 if v > 40 else 0)
    sw, sh = small.size
    sp = small.load()
    seen = set()
    comps = []
    for y0 in range(sh):
        for x0 in range(sw):
            if not sp[x0, y0] or (x0, y0) in seen:
                continue
            comp, q = [], deque([(x0, y0)])
            seen.add((x0, y0))
            while q:
                x, y = q.popleft()
                comp.append((x, y))
                for nx in (x - 1, x, x + 1):
                    for ny in (y - 1, y, y + 1):
                        if 0 <= nx < sw and 0 <= ny < sh and sp[nx, ny] and (nx, ny) not in seen:
                            seen.add((nx, ny)); q.append((nx, ny))
            comps.append(comp)
    if len(comps) < 2:
        return alpha
    biggest = max(len(c) for c in comps)
    out = alpha.copy()
    for comp in comps:
        if len(comp) < biggest * 0.004:
            for x, y in comp:
                out.paste(0, (x * step - step, y * step - step, x * step + 2 * step, y * step + 2 * step))
    return out


def cut_background(im, tol=26, checker=False):
    """Flood-fills the background in from the cell's edges (anything close to the corner colors) and makes it transparent."""
    im = im.convert('RGBA')
    w, h = im.size
    px = im.load()
    # The background is the commonest flat gray along the cell's border (ignoring the white gutter and
    # anything colorful, like a plume or armor that reaches the edge).
    from collections import Counter
    border = [px[x, y][:3] for x in range(0, w, 3) for y in (8, h - 9)] + [px[x, y][:3] for y in range(0, h, 3) for x in (8, w - 9)]
    flat = [c for c in border if max(c) - min(c) < 18 and min(c) < 240]
    counts = Counter((c[0] // 6, c[1] // 6, c[2] // 6) for c in flat or border)
    q = counts.most_common(1)[0][0]
    gray = tuple(sum(c[i] for c in flat or border if (c[0] // 6, c[1] // 6, c[2] // 6) == q) // counts[q] for i in range(3))
    diff = lambda p, c: sum(abs(a - b) for a, b in zip(p[:3], c))
    # From the edges: the background or gutter white. Inside the figure: only the exact background gray,
    # so eye whites and highlights are never touched.
    near = lambda p: diff(p, gray) < tol or min(p[:3]) > 244
    if checker:
        # A fake transparency checkerboard (gray and white squares, sometimes in odd bands): any flat light
        # gray or white reachable from the edge is background. The figure's black outline stops the fill.
        near = lambda p: max(p[:3]) - min(p[:3]) < 14 and min(p[:3]) > 150
    pocket = lambda p: diff(p, gray) < 14
    m = Image.new('L', (w, h), 0)
    mk = m.load()
    # The figure is always cut off at the bottom of the panel, so the fill never starts there
    # (a white shirt or white lettering touching the bottom edge would otherwise be taken for background).
    q = deque([(x, 0) for x in range(w)] + [(0, y) for y in range(h)] + [(w - 1, y) for y in range(h)])
    while q:
        x, y = q.popleft()
        if mk[x, y] or not near(px[x, y]):
            continue
        mk[x, y] = 255
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not mk[nx, ny]:
                q.append((nx, ny))
    # Pockets of background boxed in by hair, collars and shoulders: any other patch of background color
    # big enough not to be a stray highlight goes too.
    # A real gap between hair and shoulder is ringed by the black lineart; a matching patch of fabric
    # (camo, a gray stripe) is surrounded by other fabric colors and must stay.
    def outlined(region):
        inside = set(region)
        dark = total = 0
        for x, y in region[::max(1, len(region) // 400)]:
            for dx, dy in ((3, 0), (-3, 0), (0, 3), (0, -3)):
                nx, ny = x + dx, y + dy
                if (nx, ny) in inside or not (0 <= nx < w and 0 <= ny < h) or mk[nx, ny]:
                    continue
                total += 1
                dark += min(px[nx, ny][:3]) < 90
        return total == 0 or dark / total > 0.45

    seen = Image.new('L', (w, h), 0)
    sk = seen.load()
    for y0 in range(h):
        for x0 in range(w):
            if mk[x0, y0] or sk[x0, y0] or not pocket(px[x0, y0]):
                continue
            region, q = [], deque([(x0, y0)])
            sk[x0, y0] = 1
            while q:
                x, y = q.popleft()
                region.append((x, y))
                for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                    if 0 <= nx < w and 0 <= ny < h and not sk[nx, ny] and not mk[nx, ny] and pocket(px[nx, ny]):
                        sk[nx, ny] = 1
                        q.append((nx, ny))
            if len(region) >= max(60, w * h // 4000) and outlined(region):
                for x, y in region:
                    mk[x, y] = 255
    alpha = m.filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(1)).point(lambda v: 255 - v)
    alpha = drop_specks(alpha)
    im.putalpha(alpha)
    box = alpha.point(lambda v: 255 if v > 8 else 0).getbbox()
    return im.crop(box) if box else im


ap = argparse.ArgumentParser()
ap.add_argument('sheet'); ap.add_argument('name')
ap.add_argument('--grid', default='2x2', help='columns x rows')
ap.add_argument('--emotions')
ap.add_argument('--force', action='store_true')
ap.add_argument('--checker', action='store_true', help='the sheet has a fake transparency checkerboard drawn in')
a = ap.parse_args()
cols, rows = map(int, a.grid.lower().split('x'))
emotions = (a.emotions or DEFAULTS.get((cols, rows), '')).split(',')
if len(emotions) != cols * rows:
    sys.exit(f'Need {cols * rows} emotions for a {cols}x{rows} grid, got {len(emotions)}: use --emotions')
sheet = Image.open(a.sheet).convert('RGB')
cw, ch = sheet.width / cols, sheet.height / rows
inset = 4   # skip the thin gutter lines between panels
out = os.path.join(DST, a.name)
os.makedirs(out, exist_ok=True)
for i, emo in enumerate(emotions):
    c, r = i % cols, i // cols
    cell = sheet.crop((round(c * cw) + inset, round(r * ch) + inset, round((c + 1) * cw) - inset, round((r + 1) * ch) - inset))
    path = os.path.join(out, f'{a.name}-{emo.strip().capitalize()}.png')
    if os.path.exists(path) and not a.force:
        print(f'skip   {path} (exists; --force to replace)'); continue
    cut_background(cell, checker=a.checker).save(path)
    print(f'wrote  {path}')
