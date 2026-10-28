"""Copies Kat's FEMC scene backgrounds into the site as webp.

Run: python3 tools/femc-backgrounds.py
Source: ~/Documents/UniverseHub-Images/Femc Mode Images/Background Images/<Name>.jpg|png|webp|avif
Output: assets/femc/bg/<name>.webp (lowercased, spaces and underscores become hyphens), at most 1920px wide.
Also: the backgrounds in EXTRA, which Kat delivered through New Adds and which now live in Added to Game.
Which place uses which background is set by hand in assets/femc/backgrounds.js (v1) and assets/femc/game/data/places.js.
"""
import os, re
from femc_images import IMAGES as IMAGES_DIR
from PIL import Image, ImageOps

SRC = os.path.join(IMAGES_DIR, 'Background Images')
DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets/femc/bg')
os.makedirs(DST, exist_ok=True)
IMAGES = IMAGES_DIR
# output slug -> source under IMAGES (batch 26, 2026-10-22). Kat's files say "yukishima"; the place is Yakushima.
EXTRA = {
    'kirijo-guesthouse-day': 'Added to Game/kirijo-guesthouse-day.png',
    'gekkoukan-tennis-courts': 'Added to Game/gekkoukan-tenniscourt.jpeg',
    'gekkoukan-music-room': 'Added to Game/band-room.jpeg',
    'gekkoukan-computer-room': 'Added to Game/gaming-room.jpeg',
    'yakushima-villa': 'Added to Game/yukishima-villa.jpeg',
    'yakushima-forest': 'Added to Game/yukishima-forest.jpeg',
    'yakushima-beach-fireworks': 'Added to Game/yukishima-beach-fireworks.jpeg',
    # batch 27 (2026-10-22)
    'iwatodai-bathhouse': 'Added to Game/bathouse.jpeg',
    'seaside-park-beach-cleanup': 'Added to Game/beachcleanup.jpeg',
    'iwatodaidorm-livingroom-birthday': 'Added to Game/dormlounge-bday.jpeg',
    'iwatodaidorm-roof-planters': 'Added to Game/dormroof-planters.jpeg',
    'gamepanic-inside': 'Added to Game/gamepanic-inside.jpeg',
    'gekkoukan-study-group': 'Added to Game/gekkoukan-studyroom.jpeg',
    'hagakure-challenge-bowl': 'Added to Game/hagakure-challengebowl.jpeg',
    'hagakure-ramen': 'Added to Game/hagakure-ramen-updated.jpeg',
    'hospital-childrens-ward': 'Added to Game/hospital-childrensroom.jpeg',
    'screenshot-theater': 'Added to Game/movietheater-inside.jpeg',
    'port-island-museum': 'Added to Game/museumhall.jpeg',
    'naganaki-shrine-autumn': 'Added to Game/naganakishrine-leaves.jpeg',
    'paulownia-flower-shop': 'Added to Game/portisland-flowershop.png',
    'record-shop-listening-booth': 'Added to Game/recordshop-listeningbooth.jpeg',
    'iwatodai-riverside-night': 'Added to Game/riverside-night.jpeg',
    'solar-desk-night': 'Added to Game/solars-desk.jpeg',
    'yakushima-ferry': 'Added to Game/yakushima-ferrytopdeck.jpeg',
    'yakushima-villa-balcony': 'Added to Game/yakushima-villabalcony.jpeg',
    'yakushima-villa-terrace': 'Added to Game/yakushima-villaterrace.jpeg',
    # batch 29 (2026-10-22)
    'botanical-garden-greenhouse': 'Added to Game/botanicalgarden.jpeg',
    'chagall-cafe-inside': 'Added to Game/chagallcafe-inside.jpeg',
    'iwatodaidorm-kitchen-night-cake': 'Added to Game/dormkitchen-almondcake.jpeg',
    'naganaki-amulet-stall': 'Added to Game/naganaki-amulet-stall.jpeg',
    'naganaki-shrine-newyear': 'Added to Game/naganakishrine-newyears.jpeg',
    'naganaki-shrine-spring': 'Added to Game/naganakishrine-spring.jpeg',
    'naganaki-shrine-summer': 'Added to Game/naganakishrine-summer.jpeg',
    'naganaki-shrine-winter': 'Added to Game/naganakishrine-winter.jpeg',
    # batch 30 (2026-10-22). "-night" / "-evening" ones are night-lit and only go in evening slots.
    'bookworms-inside': 'Added to Game/bookworms-inside.jpeg',
    'gekkoukan-archery-range': 'Added to Game/gekkoukan-archery-range.jpeg',
    'gekkoukan-gym': 'Added to Game/gekkoukan-gym.jpeg',
    'hagakure-kitchen': 'Added to Game/hagakure-kitchen.jpeg',
    'hospital-rooftop': 'Added to Game/hospital-rooftop.jpeg',
    'iwatodai-station': 'Added to Game/iwatodai-station.jpeg',
    'iwatodai-station-overpass': 'Added to Game/iwatodai-station-overpass.jpeg',
    'station-concourse-busy': 'Added to Game/iwatodaistationconcourse-busy.jpeg',
    'kirijo-guesthouse-night': 'Added to Game/kirijo-guesthouse.jpeg',
    'kirijo-guesthouse-roof-night': 'Added to Game/kirijo-guesthouse-roof.jpeg',
    # batch 57: Kat's replacement guesthouse lobby (night-lit); kirijo-guesthouse-night stays for the lounge and window-seat scenes
    'kirijo-guesthouse-lobby': 'Added to Game/kirijo-guesthouse-new.png',
    'paulownia-karaoke': 'Added to Game/paulownia-karaoke.jpeg',
    'port-island-konbini-night': 'Added to Game/port-island-konbini.jpeg',
    'port-island-pier': 'Added to Game/port-island-pier.jpeg',
    'port-island-pier-night': 'Added to Game/port-island-pier-night.jpeg',
    'port-island-seaside-park': 'Added to Game/port-island-seaside-park.jpeg',
    'respawn-cafe-evening': 'Added to Game/respawn-cafe.jpeg',
    'sakamoto-apartment-night': 'Added to Game/sakamoto-apartment.jpeg',
    'station-platform-day': 'Added to Game/station-platform-day.jpeg',
    # batch 35 (2026-10-23): night versions (evening slots only) and seasonal day art (places.js seasons)
    'bathhouse-night': 'Added to Game/bathhouse-night.jpeg',
    'iwatodai-strip-night': 'Added to Game/iwatodai-strip-night.jpeg',
    'kirijo-guesthouse-front-night': 'Added to Game/kirijo-guesthouse-front-night.jpeg',
    'paulownia-mall-night': 'Added to Game/paulownia-mall-night.jpeg',
    'portisland-station-night': 'Added to Game/portisland-station-night.jpeg',
    'gekkoukanhigh-summer': 'Added to Game/gekkoukanhigh-summer.jpeg',
    'gekkoukanhigh-autumn': 'Added to Game/gekkoukanhigh-autumn.jpeg',
    'gekkoukanhigh-winter': 'Added to Game/gekkoukanhigh-winter.jpeg',
    'park-2-autumn': 'Added to Game/park-2-autumn.jpeg',
    'park-2-winter': 'Added to Game/park-2-winter.jpeg',
    'rooftop-day-winter': 'Added to Game/rooftop-day-winter.jpeg',
    'iwatodaidorm-front-winter': 'Added to Game/iwatodaidorm-front-winter.jpeg',
    # batch 36 (2026-10-23): the July full-moon arenas (battle/data.js ops, story-act3 a3-hierophant), the culture festival
    # (places.js today: the school hallway on 10/30-31) and the Strip in the rain (places.js today: rain and storm days)
    'darkhour-hotel-outside': 'Added to Game/darkhour-hotel-outside.jpeg',
    'darkhour-hotel-lobby': 'Added to Game/darkhour-hotel-lobby.jpeg',
    'gekkoukan-culture-festival': 'Added to Game/gekkoukan-culture-festival.jpeg',
    'iwatodai-strip-rain': 'Added to Game/iwatodai-strip-rain.jpeg',
    # batch 51 (2026-10-26): Yeobo's Cafe and the fish market today (were the faded memory pictures), Monad, four spots
    'yeobos-cafe': 'Added to Game/yeobos-cafe.jpeg',
    'port-island-fish-market': 'Added to Game/port-island-fish-market.jpeg',
    'tartarus-monad': 'Added to Game/tartarus-monad.jpeg',
    'iwatodai-supermarket': 'Added to Game/iwatodai-supermarket.jpeg',
    'gekkoukan-stairwell': 'Added to Game/gekkoukan-stairwell.jpeg',
    'paulownia-canal': 'Added to Game/paulownia-canal.jpeg',
    'kirijo-flat': 'Added to Game/kirijo-flat.jpeg',
    # batch 67 (2026-10-28): the dorm kitchen and front at night (evening slots only)
    'iwatodaidorm-kitchen-night': 'Added to Game/iwatodaidorm-kitchen-night.jpeg',
    'iwatodaidorm-front-night': 'Added to Game/iwatodaidorm-front-night.jpeg',
    # batch 68 (2026-10-28): the dorm lounge at Christmas and the roof on a snowy night (places.js today)
    'iwatodaidorm-livingroom-christmas': 'Added to Game/iwatodaidorm-livingroom-christmas.jpeg',
    'iwatodaidorm-roof-night-snow': 'Added to Game/iwatodaidorm-roof-night-snow.jpeg',
    # batch 69 (2026-10-28): the dorm dining room, laundry room and stairs at night (evening slots only)
    'iwatodaidorm-diningroom-night': 'Added to Game/iwatodaidorm-diningroom-night.jpeg',
    'iwatodaidorm-laundryroom-night': 'Added to Game/iwatodaidorm-laundryroom-night.jpeg',
    'iwatodaidorm-stairs-night': 'Added to Game/iwatodaidorm-stairs-night.jpeg',
    # batch 70 (2026-10-28): Paulownia Mall's central atrium, day and dusk
    'paulownia-atrium': 'Added to Game/paulownia-atrium.jpeg',
    'paulownia-atrium-evening': 'Added to Game/paulownia-atrium-evening.jpeg',
    # batch 71 (2026-10-28): the atrium at Christmas (places.js today, 12/1-12/25)
    'paulownia-atrium-christmas': 'Added to Game/paulownia-atrium-christmas.jpeg',
    # batch 72 (2026-10-28): the mall photo booth and the alley behind Port Island Station (both slots each)
    'paulownia-photo-booth': 'Added to Game/paulownia-photo-booth.jpeg',
    'portisland-back-alley-night': 'Added to Game/portisland-back-alley-night.jpeg',
    # batch 73 (2026-10-28): the back streets behind Port Island Station (both slots) and the concourse in the evening
    'portisland-back-streets': 'Added to Game/portisland-back-streets.jpeg',
    'station-concourse-evening': 'Added to Game/station-concourse-evening.jpeg',
}
SIZE = (1920, 1072)  # Kat's New Adds backgrounds; one with another shape is cropped / scaled to fill this


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
def convert(path, slug, size=None):
    im = trim_bars(Image.open(path).convert('RGB'))
    if im.width > 1920:
        im = im.resize((1920, round(im.height * 1920 / im.width)), Image.LANCZOS)
    if size and im.size != size:
        im = ImageOps.fit(im, size, Image.LANCZOS)
    im.save(os.path.join(DST, slug + '.webp'), 'WEBP', quality=82, method=5)
    print(f'{slug:32} {im.width}x{im.height}')


for f in sorted(os.listdir(SRC)):
    stem, ext = os.path.splitext(f)
    if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp', '.avif'):
        continue
    convert(os.path.join(SRC, f), re.sub(r'[^a-z0-9]+', '-', stem.lower()).strip('-'))
for slug, rel in EXTRA.items():
    if os.path.exists(os.path.join(IMAGES, rel)):
        convert(os.path.join(IMAGES, rel), slug, SIZE)
