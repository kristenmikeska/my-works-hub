"""Contact profile pictures for the epilogue phone (Nov 3 2026, Kat's notes after the Runners epilogue).

  python3 tools/femc-avatars.py          Runners: the Runners World site's SUgram profile pictures -> art/avatars/runners/<id>.webp
  python3 tools/femc-avatars.py --index  only rewrite art/avatars/index.js from the webps already there

Sources are only read (the runners-world repo next to this one: scripts/data/sugram-profiles.js `avatar: assets("…")`).
Each becomes a 256 px square WebP (q84), cropped around the face OpenCV finds (largest frontal face; else the upper middle).
Any other world, or anyone without a file here: the phone crops their portrait instead (ui.js avatar()).
A custom picture for anyone: drop art/avatars/<world>/<id>.webp (square) and run --index; group chats use the thread id.
index.js lists what exists (window.FEMC_AVATARS = { world: [ids] }) so the game never asks for a file that isn't there.
"""
import hashlib, json, os, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets/femc/game/art/avatars')
RW = os.path.join(os.path.dirname(ROOT), 'runners-world', 'assets')
SIZE = 256
# Hand-set crops where the face is small in the picture: id -> (face x, face y as shares of the picture, side as a share of its short side).
CROP = {'mark': (0.55, 0.44, 0.42)}
# game id -> the SUgram profile's avatar file (runners-world/assets/…); handles in the comments.
RUNNERS = {
    'solar': 'solar-cuteselfie.jpg',                                   # sollee
    'haechan': 'haechan-profilepicture.jpg',                           # haechanah
    'mark': 'mark-holdingbackpack-stagedpose.jpg',                     # markylee
    'minji': 'minji-selfie.jpg',                                       # minjibear
    'jeno': 'jeno-profilepicture.jpg',                                 # jen0l33
    'hanni': 'hanni-profilepicture.jpg',                               # hanni
    'hyein': 'hyein-profilepicture.jpg',                               # hyein
    'jaemin': 'sugram/jaemins posts/jaemin-profilepicture.jpg',        # jaemin
    'renjun': 'sugram/renjuns posts/renjun-profilepicture.jpg',        # renjun
    'chenle': 'sugram/chenles posts/chenle-profilepicture.jpg',        # chenle
    'sunews': 'sumascot-pic.jpg',                                      # SUnews
}


def face_box(im):
    try:
        import cv2, numpy as np
        g = cv2.cvtColor(np.array(im), cv2.COLOR_RGB2GRAY)
        det = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
        fs = det.detectMultiScale(g, 1.1, 6, minSize=(min(im.size) // 10,) * 2)
        if len(fs):
            return max(fs, key=lambda f: f[2] * f[3])
    except Exception:
        pass
    return None


def crop(src, gid=None):
    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
    w, h = im.size
    f = face_box(im)
    if gid in CROP:
        fx, fy, fs = CROP[gid]
        side, cx, cy = int(min(w, h) * fs), w * fx, h * fy
    elif f is not None:
        x, y, fw, fh = f
        side = min(w, h, int(max(fw, fh) * 2.4))
        cx, cy = x + fw / 2, y + fh / 2 + fh * 0.12
    else:
        side = min(w, h)
        cx, cy = w / 2, min(h / 2, side / 2 + h * 0.08)
    l = int(max(0, min(w - side, cx - side / 2)))
    t = int(max(0, min(h - side, cy - side / 2)))
    return im.crop((l, t, l + side, t + side)).resize((SIZE, SIZE), Image.LANCZOS), f is not None


def index():
    out = {}
    if os.path.isdir(OUT):
        for world in sorted(os.listdir(OUT)):
            d = os.path.join(OUT, world)
            if os.path.isdir(d):
                ids = sorted(f[:-5] for f in os.listdir(d) if f.endswith('.webp'))
                if ids:
                    out[world] = ids
    with open(os.path.join(OUT, 'index.js'), 'w') as fh:
        fh.write('/* The contact pictures that exist (written by tools/femc-avatars.py): { world: [ids] }. ui.js uses one only when it is\n'
                 '   listed here; everyone else gets a crop of their portrait. */\n')
        fh.write('window.FEMC_AVATARS = ' + json.dumps(out) + ';\n')
        h = hashlib.sha1()
        for w, ids in out.items():
            for i in ids:
                h.update(open(os.path.join(OUT, w, i + '.webp'), 'rb').read())
        fh.write('window.FEMC_AVATARS_V = "' + h.hexdigest()[:8] + '";\n')
    return out


if __name__ == '__main__':
    if '--index' not in sys.argv:
        d = os.path.join(OUT, 'runners')
        os.makedirs(d, exist_ok=True)
        for gid, rel in RUNNERS.items():
            src = os.path.join(RW, rel)
            if not os.path.exists(src):
                print('missing', src)
                continue
            im, found = crop(src, gid)
            im.save(os.path.join(d, gid + '.webp'), 'WEBP', quality=84)
            print(gid, 'face' if found else 'centre')
    print(index())
