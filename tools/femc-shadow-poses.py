"""Extract the approved 3x2 New Adds Shadow sheets without modifying sources.
Uses fixed 512px cells; removes disconnected border fragments from neighboring cells.
Keeps source scale and aligns each cell's main silhouette at bottom center on a 640px canvas.
Run: python3 tools/femc-shadow-poses.py
"""
from pathlib import Path
import json, sys
import numpy as np
from scipy import ndimage
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
SOURCE=Path.home()/'Documents/UniverseHub-Images/Femc Mode Images/New Adds'
CONFIG={
 'BallotBoxShadow.png':('memory-ballot-box',{'attack':[1,2,3,4,5],'cast':[1,2,3,4,5]}),
 'PaparazziShadow.png':('memory-flash',{'attack':[1,3,4],'cast':[1,2,5],'hurt':[4],'down':[4],'defeat':[4]}),
 'lowtideshadow.png':('memory-tide',{'attack':[1,2,3,5],'cast':[2,4,5],'hurt':[5],'down':[5],'defeat':[5]}),
 'CampaignPosterShadow.png':('memory-poster',{'attack':[1,2,3,4,5],'cast':[1,2,3,4,5]}),
 'brideShadow.png':('memory-veil',{'attack':[1,2,3,4,5],'cast':[1,2,3,4,5]}),
 'kegstandshadow.png':('memory-party',{'attack':[1,2,3,5],'cast':[1,2,4,5]}),
 'grandmasterShadow.png':('memory-mirror-fox',{'attack':[1,2,4],'cast':[1,3,5]})
}
def extract(cell):
 a=np.asarray(cell.getchannel('A')).copy()
 labels,count=ndimage.label(a>8)
 sizes=np.bincount(labels.ravel());sizes[0]=0
 main=labels==sizes.argmax()
 ys,xs=np.where(main);left,right,top,bottom=xs.min(),xs.max()+1,ys.min(),ys.max()+1
 # Keep the figure and effects within its bounds, and nearby detached effects.
 nearby=ndimage.binary_dilation(main,iterations=10)
 keep=np.unique(labels[nearby]);keep=keep[keep!=0]
 border=set(np.unique(np.concatenate((labels[0],labels[-1],labels[:,0],labels[:,-1]))))
 keep=[k for k in keep if k==sizes.argmax() or k not in border]
 valid=np.isin(labels,keep)
 # Preserve soft edges up to three pixels from the selected artwork.
 valid=ndimage.binary_dilation(valid,iterations=3)
 a[~valid]=0;cell.putalpha(Image.fromarray(a))
 bounds=cell.getchannel('A').point(lambda x:255 if x>8 else 0).getbbox()
 if not bounds:raise ValueError('Empty pose')
 # Anchor the primary connected figure, not stray particles at the cell edges.
 frame=Image.new('RGBA',(640,640))
 frame.alpha_composite(cell,(round(320-(left+right)/2),round(608-bottom)))
 return frame

def main():
 p=ROOT/'assets/femc/battle/art/shadows/index.js';s=p.read_text();index=json.loads(s[s.index('{'):s.rindex('}')+1])
 only=set(sys.argv[1:])
 for name,(slug,states) in CONFIG.items():
  if only and name not in only:continue
  with Image.open(SOURCE/name) as sheet:
   if sheet.size!=(1536,1024):raise ValueError(name)
   for i in range(6):
    cell=sheet.convert('RGBA').crop((i%3*512,i//3*512,(i%3+1)*512,(i//3+1)*512))
    # Two lower-right poses extend above the nominal row divider.
    if i==5 and name in ['brideShadow.png','CampaignPosterShadow.png']:
     cell=sheet.convert('RGBA').crop((1024,464 if name=='brideShadow.png' else 500,1536,1024))
    if name=='grandmasterShadow.png' and i==4:
     cell.paste((0,0,0,0),(488,0,512,512))
    frame=extract(cell);frame.save(ROOT/f'assets/femc/battle/art/shadows/{slug}-pose-{i}.webp','WEBP',quality=90,method=4)
  with Image.open(ROOT/f'assets/femc/battle/art/shadows/{slug}-pose-0.webp') as idle:
   b=idle.getchannel('A').point(lambda x:255 if x>8 else 0).getbbox();scale=round(640/(b[3]-b[1]),4)
  index.setdefault(slug,{'small':False}).update(w=640,h=640,poses={'scale':scale,'frames':[f'{slug}-pose-{i}' for i in range(6)],'states':states})
 # The existing story boss combines the veil and poster; its action changes between both forms.
 if 'memory-veil' in index and 'memory-poster' in index:
  veil=index['memory-veil']['poses'];poster=index['memory-poster']['poses']
  index['memory-veil-poster']={'w':640,'h':640,'small':False,'poses':{'scale':max(veil['scale'],poster['scale']),'frames':veil['frames']+poster['frames'],'states':{'attack':[6,7,8,9,10,11],'cast':[1,2,6,7,8,9,10,11,3,4,5]}}}
 p.write_text(s[:s.index('window.FEMC_SHADOW_ART')]+'window.FEMC_SHADOW_ART = '+json.dumps(index,sort_keys=True,indent=1)+';\n')
if __name__=='__main__':main()
