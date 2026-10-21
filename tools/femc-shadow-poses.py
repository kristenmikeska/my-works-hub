"""Extract the approved 3x2 New Adds Shadow sheets without modifying sources.
Uses fixed 512px cells; removes disconnected border fragments from neighboring cells.
Keeps source scale and aligns each cell's main silhouette at bottom center on a 640px canvas.
Sheets in SPREAD have attacks that cross the 512px cell lines: every piece of art goes to the nearest of the six figures,
pose 0 is anchored like the others and each action pose lines up with it (mask correlation), shifted only to stay on canvas.
Run: python3 tools/femc-shadow-poses.py [sheet names]
"""
from pathlib import Path
import json, sys
import numpy as np
from scipy import ndimage
from scipy.signal import fftconvolve
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
 'grandmasterShadow.png':('memory-mirror-fox',{'attack':[1,2,4],'cast':[1,3,5]}),
 'GroupChatShadow.png':('memory-group-chat',{'attack':[1,3],'cast':[1,2,4],'hurt':[5],'down':[5],'defeat':[5]}),
 'fishmongerShadow.png':('memory-fishmonger',{'attack':[1,2,5],'cast':[3,4,5]})
}
SPREAD={'GroupChatShadow.png','fishmongerShadow.png'}
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

def spread(sheet):
 a=np.asarray(sheet.getchannel('A'));m=a>8
 # Glow edges join a splash into one piece; each piece belongs to the nearest figure.
 labels,count=ndimage.label(ndimage.binary_dilation(m,iterations=3));labels=labels*m
 ids=range(1,count+1);sizes=np.asarray(ndimage.sum(m,labels,ids));centres=ndimage.center_of_mass(m,labels,ids)
 figures=[]
 for i in range(6):
  cx,cy=i%3*512+256,i//3*512+256
  figures.append(max(range(count),key=lambda k:sizes[k]/(1+(np.hypot(centres[k][1]-cx,centres[k][0]-cy)/200)**2)))
 if len(set(figures))!=6:raise ValueError('Figures not found')
 boxes=[ndimage.find_objects((labels==k+1).astype(int))[0] for k in figures]
 owner=np.full(count+1,-1)
 for k in range(count):
  if not sizes[k]:continue
  cy,cx=centres[k]
  owner[k+1]=figures.index(k) if k in figures else int(np.argmin([np.hypot(max(b[1].start-cx,0,cx-b[1].stop),max(b[0].start-cy,0,cy-b[0].stop)) for b in boxes]))
 frames,idle=[],None
 for i in range(6):
  keep=ndimage.binary_dilation((owner[labels]==i)&(labels>0),iterations=3)&(a>0)
  alpha=np.where(keep,a,0).astype('uint8');cell=sheet.copy();cell.putalpha(Image.fromarray(alpha))
  mask=alpha>8;ys,xs=np.where(mask)
  if i==0:
   idle=mask[::4,::4].astype(float);ox,oy=round(320-(xs.min()+xs.max()+1)/2),round(608-(ys.max()+1));origin=(ox,oy)
  else:
   c=fftconvolve(mask[::4,::4].astype(float),idle[::-1,::-1],mode='full');py,px=np.unravel_index(np.argmax(c),c.shape)
   ox,oy=origin[0]-(px-idle.shape[1]+1)*4,origin[1]-(py-idle.shape[0]+1)*4
   # Stay on the canvas: shift the whole pose as little as possible.
   if xs.max()+1+ox>640:ox=640-xs.max()-1
   if xs.min()+ox<0:ox=-xs.min()
   if ys.min()+oy<0:oy=-ys.min()
  big=Image.new('RGBA',(640+2*sheet.width,640+2*sheet.height));big.alpha_composite(cell,(sheet.width+ox,sheet.height+oy))
  frames.append(big.crop((sheet.width,sheet.height,sheet.width+640,sheet.height+640)))
 return frames

def main():
 p=ROOT/'assets/femc/battle/art/shadows/index.js';s=p.read_text();index=json.loads(s[s.index('{'):s.rindex('}')+1])
 only=set(sys.argv[1:])
 for name,(slug,states) in CONFIG.items():
  if only and name not in only:continue
  with Image.open(SOURCE/name) as sheet:
   if sheet.size!=(1536,1024):raise ValueError(name)
   if name in SPREAD:
    for i,frame in enumerate(spread(sheet.convert('RGBA'))):frame.save(ROOT/f'assets/femc/battle/art/shadows/{slug}-pose-{i}.webp','WEBP',quality=90,method=4)
   for i in range(6 if name not in SPREAD else 0):
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
