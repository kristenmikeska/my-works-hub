"""Cuts Kat's battle icon sheets into transparent WebP icons (batch 36, 2026-10-23).

Run: python3 tools/femc-icons.py
Sources (under Femc Mode Images; Added to Game once integrated, New Adds before):
  status-icons.jpeg       3 x 6 white sticker cards with a printed label under each, on a painted checkerboard.
                          Each card is cut whole (white face, dark rim, rounded corners); the label and the board are dropped.
  tartarusmapicons-sheet2.png  3 x 3 more glyphs on dark tiles, on flat #00ff00; cut the same way, the green ignored.
  tartarus-map-rooms.jpeg 3 x 3 neon glyphs on dark tiles, on a painted checkerboard. Each glyph is cut out of its tile
                          (its coloured outline and everything inside it are kept; the tile and the board are dropped).
Output: assets/femc/battle/art/icons/<name>.webp (square, transparent). battle.js reads them: STATUS_ART (ailments and
buff arrows on the cards, the Shadows' tags and the status panel) and ROOM_ART (the Tartarus node map).
Cells are numbered in reading order; the ones not listed (alternates, a mislabelled cell, the Reaper and an unlisted glyph)
are left out on purpose (tools/femc-new-adds.json, batch 36).
"""
import os
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as nd

IMAGES = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')
DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets/femc/battle/art/icons')
STATUS = {0: 'charm', 1: 'fear', 2: 'freeze', 3: 'shock', 5: 'poison', 7: 'distress', 8: 'bind', 9: 'disorient',
          10: 'atk-up', 11: 'atk-down', 12: 'def-up', 14: 'def-down', 16: 'agi-up', 17: 'agi-down'}
ROOMS = {0: 'room-shadow', 1: 'room-chest', 2: 'room-locked', 3: 'room-clock', 4: 'room-access', 5: 'room-stairs', 6: 'room-event'}
# Sheet 2 (batch 48, FEMC-ART-TODO 6C): the deeper Tartarus's rooms, 3 x 3 on flat green, cells 0-8 in reading order.
ROOMS2 = {0: 'room-guardian', 1: 'room-vault', 2: 'room-puzzle', 3: 'room-rest', 4: 'room-rare', 5: 'room-trap',
          6: 'room-altar', 7: 'room-crack', 8: 'room-orchid'}


def source(name):
    for sub in ('Added to Game', 'New Adds'):
        p = os.path.join(IMAGES, sub, name)
        if os.path.exists(p):
            return p
    raise SystemExit(f'missing source: {name}')


def reading_order(boxes):
    """Sorts (top, left, bottom, right) boxes into rows, then left to right."""
    boxes = sorted(boxes)
    rows, row = [], [boxes[0]]
    for b in boxes[1:]:
        if b[0] - row[0][0] > (row[0][2] - row[0][0]) / 2:
            rows.append(row); row = [b]
        else:
            row.append(b)
    rows.append(row)
    return [b for r in rows for b in sorted(r, key=lambda b: b[1])]


def save(rgb, alpha, box, size, name, pad):
    t, l, b, r = box
    t, l, b, r = max(0, t - pad), max(0, l - pad), min(rgb.shape[0], b + pad), min(rgb.shape[1], r + pad)
    im = Image.fromarray(rgb[t:b, l:r].astype('uint8'))
    im.putalpha(Image.fromarray(alpha[t:b, l:r]))
    side = max(im.size)
    sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    sq.paste(im, ((side - im.width) // 2, (side - im.height) // 2))
    sq = sq.resize((size, size), Image.LANCZOS)
    sq.save(os.path.join(DST, name + '.webp'), 'WEBP', quality=90, method=6)
    print(f'{name:14} {size}x{size}')


def soft(mask, grow):
    m = nd.binary_dilation(mask, iterations=grow) if grow else mask
    return np.asarray(Image.fromarray((m * 255).astype('uint8')).filter(ImageFilter.GaussianBlur(1.2)))


def status():
    rgb = np.asarray(Image.open(source('status-icons.jpeg')).convert('RGB')).astype(int)
    face = nd.binary_fill_holes(rgb.min(2) > 215)  # the white card faces, with the glyphs inside them
    lab, n = nd.label(face)
    objs = nd.find_objects(lab)
    cells = [(sl[0].start, sl[1].start, sl[0].stop, sl[1].stop, i + 1) for i, sl in enumerate(objs)
             if sl[0].stop - sl[0].start > 200 and sl[1].stop - sl[1].start > 200]
    cells = reading_order(cells)
    assert len(cells) == 18, len(cells)
    for k, name in STATUS.items():
        t, l, b, r, i = cells[k]
        alpha = soft(lab == i, 5)  # 5px takes in the card's dark rim
        save(rgb, alpha, (t, l, b, r), 96, name, 10)


def rooms():
    rgb = np.asarray(Image.open(source('tartarus-map-rooms.jpeg')).convert('RGB')).astype(int)
    lit = (rgb.max(2) - rgb.min(2) > 60) & (rgb.max(2) > 90)  # the neon outline; the tiles and the board are grey
    glyph = nd.binary_fill_holes(nd.binary_closing(lit, iterations=3))
    lab, n = nd.label(glyph)
    sizes = nd.sum(glyph, lab, range(1, n + 1))
    objs = nd.find_objects(lab)
    big = sorted(range(n), key=lambda i: -sizes[i])[:9]
    cells = reading_order([(objs[i][0].start, objs[i][1].start, objs[i][0].stop, objs[i][1].stop, i + 1) for i in big])
    for k, name in ROOMS.items():
        t, l, b, r, i = cells[k]
        alpha = soft(lab == i, 2)
        save(rgb, alpha, (t, l, b, r), 128, name, 8)


def rooms2():
    rgb = np.asarray(Image.open(source('tartarusmapicons-sheet2.png')).convert('RGB')).astype(int)
    H, W = rgb.shape[:2]
    board = (rgb[..., 1] - np.maximum(rgb[..., 0], rgb[..., 2]) > 60)  # the flat green
    lit = (rgb.max(2) - rgb.min(2) > 60) & (rgb.max(2) > 90) & ~nd.binary_dilation(board, iterations=6)
    glyph = nd.binary_fill_holes(nd.binary_closing(lit, iterations=3))
    lab, n = nd.label(glyph)
    sizes = nd.sum(glyph, lab, range(1, n + 1))
    objs = nd.find_objects(lab)
    for k, name in ROOMS2.items():
        r, c = divmod(k, 3)
        # every piece whose centre is in this cell (the rare Shadow's sparkles are separate pieces)
        ks = [i + 1 for i, sl in enumerate(objs) if sizes[i] > 120
              and int((sl[0].start + sl[0].stop) / 2 / (H / 3)) == r and int((sl[1].start + sl[1].stop) / 2 / (W / 3)) == c]
        m = np.isin(lab, ks)
        ys, xs = np.nonzero(m)
        save(rgb, soft(m, 2), (ys.min(), xs.min(), ys.max() + 1, xs.max() + 1), 128, name, 8)


os.makedirs(DST, exist_ok=True)
status()
rooms()
rooms2()
