"""Where Kat's FEMC art folder lives, on whichever computer runs the tools.

Set FEMC_IMAGES to point somewhere else. Otherwise the first of these that exists wins:
  ~/Documents/UniverseHub/UniverseHub-Images/Femc Mode Images   (the Windows PC)
  ~/Documents/UniverseHub-Images/Femc Mode Images               (the laptop)
"""
import os

CANDIDATES = [
    '~/Documents/UniverseHub/UniverseHub-Images/Femc Mode Images',
    '~/Documents/UniverseHub-Images/Femc Mode Images',
]


def images_dir():
    if os.environ.get('FEMC_IMAGES'):
        return os.path.expanduser(os.environ['FEMC_IMAGES'])
    for c in CANDIDATES:
        if os.path.isdir(os.path.expanduser(c)):
            return os.path.expanduser(c)
    return os.path.expanduser(CANDIDATES[0])


IMAGES = images_dir()
