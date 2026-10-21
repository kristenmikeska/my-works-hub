"""Extract the approved 3x2 New Adds Shadow sheets without modifying sources.
Uses fixed 512px cells; removes disconnected border fragments from neighboring cells.
Keeps source scale and aligns each cell's main silhouette at bottom center on a 640px canvas.
Sheets in SPREAD have attacks that cross the 512px cell lines: every piece of art goes to the nearest of the six figures,
pose 0 is anchored like the others and each action pose lines up with it (mask correlation), shifted only to stay on canvas.
White sheets (2026-10-21): Kat's full-moon boss sheets (<boss>-attack.png) and fighter sheets (<name>-posesheet.png) are
on plain white. They're keyed with tools/femc-theurgy.py key() (Vision mask + un-mix from white), split into the six
grid figures (a piece that touches two cells is cut at the cell line; stray bits join the nearest figure), and every
frame is put on one fixed canvas per sheet with the body's mass centred and the lowest solid point on one baseline.
Bosses get the same thin dark rim as the static Shadow art and their index.js entry gains poses (scale keeps the idle
figure at the boss's d.h). Fighters go to art/poses/<mid>-pose-<i>.webp (idle, Evoker, attack, spell, hurt, victory).
Run: python3 tools/femc-shadow-poses.py [sheet names]      (memory Shadows, then the white boss and fighter sheets)
     python3 tools/femc-shadow-poses.py check OUT.png SHEET  (edge check: every frame on pink, purple and white)
"""
from pathlib import Path
import json, sys
import numpy as np
from scipy import ndimage
from scipy.signal import fftconvolve
from PIL import Image
import importlib.util
ROOT=Path(__file__).resolve().parents[1]
# Integrated sources moved from New Adds/ to Added to Game/ (same names, 2026-10-20); look there first.
IMAGES=Path.home()/'Documents/UniverseHub-Images/Femc Mode Images'
SOURCE=IMAGES/'Added to Game'
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

# White 3x2 sheets: source -> slug. Poses: 0 idle, 1 wind-up, 2 attack, 3 cast, 4 hurt, 5 down.
BOSSES={'priestess-attack.png':'priestess-shadow','empress-attack.png':'empress-shadow','emperor-attack.png':'emperor-shadow',
 'hierophant-attack.png':'hierophant-shadow','lovers-attack.png':'lovers-shadow','chariot-attack.png':'chariot-shadow',
 'hermit-attack.png':'hermit-shadow','fortune-attack.png':'fortune-shadow','strength-attack.png':'strength-shadow',
 'hangedman-attack.png':'hanged-man-shadow','wrensshadow-attack.png':'wren-shadow-last-train'}
BOSS_STATES={'attack':[1,2],'cast':[1,3],'hurt':[4],'down':[5],'defeat':[5]}
# Fighters: 0 idle (the stance), 1 Evoker raised, 2 weapon attack, 3 spell, 4 hurt, 5 victory.
FIGHTERS=['solar','akihiko','yukari','junpei','mitsuru','aigis','koromaru','shinjiro','haechan','jungwon','jihoon','minji']
# key() hole-punch ring (None: off). Off where white art is ringed by dark outline (the Hierophant's body and crosses,
# the Priestess's paper ribbons, white shirts under black jackets); the punch is for hair gaps.
HOLES={'hierophant-attack.png':0.97,'priestess-attack.png':0.85,'haechan-posesheet.png':None,'akihiko-posesheet.png':None,
 'aigis-posesheet.png':None,'koromaru-posesheet.png':None}

# Sheets with big pale glows (a light column, a golden whirl) that Vision fills in solid: art lighter than this
# luminance takes its opacity from the un-mix only, so the glow stays see-through. Not for white-bodied bosses.
GLOW={'hermit-attack.png':0.78,'fortune-attack.png':0.8}
# Fighters whose spell glow Vision fills (pale bands, a lightning cloud) but who wear white: the same un-mix-only
# opacity, only in the spell cell and outside the body (dark art, holes filled, grown a little), for pixels whose
# darkest channel is above this.
AURA={'akihiko-posesheet.png':0.82,'shinjiro-posesheet.png':0.8}
HOLES.update({'hermit-attack.png':0.85,'solar-posesheet.png':0.8,'yukari-posesheet.png':0.8,'akihiko-posesheet.png':0.62})

# Thin paper-white gaps between hair strands or inside a bow that Vision fills and white_holes misses (it opens away
# anything under 3px): near-white specks at least `flat` bright on average, ringed by clearly darker art. Shaded whites
# (shirts, socks, fur) average lower and stay.
GAPS={'solar-posesheet.png':0.975,'yukari-posesheet.png':0.975,'mitsuru-posesheet.png':0.975,'minji-posesheet.png':0.975,
 'haechan-posesheet.png':0.985,'jungwon-posesheet.png':0.975,'jihoon-posesheet.png':0.975}

def gaps(src,flat):
 rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2)
 lab,n=ndimage.label(minc>0.93);hole=np.zeros(minc.shape,bool)
 if not n:return hole
 ids=np.arange(1,n+1);area=ndimage.sum(np.ones_like(minc),lab,ids);mean=ndimage.mean(minc,lab,ids)
 for k,sl in enumerate(ndimage.find_objects(lab),1):
  if area[k-1]<6 or area[k-1]>40000 or mean[k-1]<flat:continue
  y0,y1=max(0,sl[0].start-3),sl[0].stop+3;x0,x1=max(0,sl[1].start-3),sl[1].stop+3
  mk=lab[y0:y1,x0:x1]==k;ring=ndimage.binary_dilation(mk,iterations=2)&~mk
  if ring.any() and minc[y0:y1,x0:x1][ring].mean()<0.7:hole[y0:y1,x0:x1]|=mk
 return ndimage.binary_dilation(hole,iterations=1)

def theurgy_tool():
 spec=importlib.util.spec_from_file_location('femc_theurgy',ROOT/'tools/femc-theurgy.py');m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m);return m

def find(name):
 for d in ('Added to Game','New Adds'):
  if (IMAGES/d/name).exists():return IMAGES/d/name
 raise SystemExit('missing source: '+name)

def grid_figures(a):
 """Six boolean masks, row by row, for a 3x2 sheet. Pieces are connected art; one that holds a lot of two cells
 (figures touching) is cut along the cell lines; each cell's biggest piece is its figure; the rest join the nearest figure."""
 H,W=a.shape[:2];m=a[...,3]>0.06
 lab,count=ndimage.label(ndimage.binary_dilation(m,iterations=2));lab=lab*m
 cell=(np.arange(H)[:,None]*2//H)*3+(np.arange(W)[None,:]*3//W)
 piece=np.zeros_like(lab);n=0
 for k,sl in enumerate(ndimage.find_objects(lab),1):
  if sl is None:continue
  mk=lab[sl]==k;cs=cell[sl][mk];counts=np.bincount(cs,minlength=6);total=counts.sum()
  big=[c for c in range(6) if counts[c]>max(4000,0.12*total)]
  if len(big)>1:
   for c in range(6):
    if counts[c]:n+=1;piece[sl][mk&(cell[sl]==c)]=n
  else:n+=1;piece[sl][mk]=n
 ids=np.arange(1,n+1);sizes=np.asarray(ndimage.sum(m,piece,ids));centres=ndimage.center_of_mass(m,piece,ids)
 home=[int(cell[min(H-1,int(cy)),min(W-1,int(cx))]) for cy,cx in centres]
 figs=[]
 for c in range(6):
  cand=[i for i in range(n) if home[i]==c]
  if not cand:raise SystemExit(f'no figure in cell {c}')
  figs.append(max(cand,key=lambda i:sizes[i]))
 boxes=[ndimage.find_objects((piece==f+1).astype(int))[0] for f in figs]
 owner=np.zeros(n+1,int)-1
 for i in range(n):
  if i in figs:owner[i+1]=figs.index(i);continue
  cy,cx=centres[i]
  owner[i+1]=int(np.argmin([np.hypot(max(b[1].start-cx,0,cx-b[1].stop),max(b[0].start-cy,0,cy-b[0].stop)) for b in boxes]))
 return [(owner[piece]==c)&(piece>0) for c in range(6)]

def white_frames(src,rim=False):
 """Key a white 3x2 sheet and return six RGBA images on one fixed canvas, plus the idle figure's height on it."""
 TH=theurgy_tool();ring=HOLES.get(src.name,0.62)
 TH.HOLES[src.name]=ring
 a=TH.key(str(src),holes=bool(ring))
 if src.name in GAPS:
  h=gaps(src,GAPS[src.name]);a[...,3]*=~h
 if src.name in AURA:
  rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2)
  lab,n=ndimage.label(ndimage.binary_closing((minc<0.6)&(a[...,3]>0.5),iterations=3));sizes=np.bincount(lab.ravel());sizes[0]=0
  body=ndimage.binary_dilation(ndimage.binary_fill_holes(np.isin(lab,np.nonzero(sizes>20000)[0])),iterations=8)
  aw=np.clip((1-minc-0.02)/0.98,0,1);unmixed=np.clip((rgb-(1-aw[...,None]))/np.maximum(aw,1e-3)[...,None],0,1)
  H,W=minc.shape;spell=np.zeros_like(body);spell[H//2:,:W//3]=True
  t=np.clip((minc-AURA[src.name])/0.06,0,1)*(~body&spell)
  a[...,3]=a[...,3]*(1-t)+aw*t;a[...,:3]=a[...,:3]*(1-t[...,None])+unmixed*t[...,None]
 if src.name in GLOW:
  rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2);lum=.299*rgb[...,0]+.587*rgb[...,1]+.114*rgb[...,2]
  aw=np.clip((1-minc-0.02)/0.98,0,1);unmixed=np.clip((rgb-(1-aw[...,None]))/np.maximum(aw,1e-3)[...,None],0,1)
  t=np.clip((lum-GLOW[src.name])/0.08,0,1)
  a[...,3]=a[...,3]*(1-t)+aw*t;a[...,:3]=a[...,:3]*(1-t[...,None])+unmixed*t[...,None]
 masks=grid_figures(a);H,W=a.shape[:2]
 info=[]
 for mk in masks:
  al=a[...,3]*ndimage.binary_dilation(mk,iterations=2)
  ys,xs=np.nonzero(al>0.02)
  solid=al>0.8
  lab,_=ndimage.label(solid);sizes=np.bincount(lab.ravel());sizes[0]=0;body=lab==sizes.argmax()
  by=np.nonzero(body.any(1))[0].max()+1  # baseline: the body's lowest solid row (glows and sparks below it don't lift it)
  w=al*body;cx=float((w.sum(0)*np.arange(W)).sum()/w.sum())
  info.append((al,xs.min(),xs.max()+1,ys.min(),ys.max()+1,cx,by))
 pad=6+(4 if rim else 0)
 left=max(cx-x0 for _,x0,x1,y0,y1,cx,by in info);right=max(x1-cx for _,x0,x1,y0,y1,cx,by in info)
 up=max(by-y0 for _,x0,x1,y0,y1,cx,by in info);down=max(max(0,y1-by) for _,x0,x1,y0,y1,cx,by in info)
 cw=int(np.ceil(left+right))+2*pad;ch=int(np.ceil(up+down))+2*pad
 cw+=cw%2;ch+=ch%2
 out=[]
 for al,x0,x1,y0,y1,cx,by in info:
  b=a.copy();b[...,3]=al
  b=TH.AC.bleed(b)
  piece=b[y0:y1,x0:x1]
  if rim:piece=TH.AC.rim(piece,max(1.6,(info[0][6]-info[0][3])/300));o=int(np.ceil(max(1.6,(info[0][6]-info[0][3])/300)))+2
  else:o=0
  canvas=np.zeros((ch,cw,4),np.float32)
  ox=int(round(pad+left-(cx-x0)))-o;oy=int(round(pad+up-(by-y0)))-o
  canvas[oy:oy+piece.shape[0],ox:ox+piece.shape[1]]=piece
  out.append(TH.to_img(canvas))
 idle_h=info[0][6]-info[0][3]+(2 if rim else 0)
 return out,idle_h

def build_white(only=()):
 p=ROOT/'assets/femc/battle/art/shadows/index.js';s=p.read_text();index=json.loads(s[s.index('{'):s.rindex('}')+1])
 for name,slug in BOSSES.items():
  if only and name not in only:continue
  frames,idle_h=white_frames(find(name),rim=True)
  for i,f in enumerate(frames):f.save(ROOT/f'assets/femc/battle/art/shadows/{slug}-pose-{i}.webp','WEBP',quality=90,method=5)
  w,h=frames[0].size
  index[slug].update(w=w,h=h,poses={'scale':round(h/idle_h,4),'frames':[f'{slug}-pose-{i}' for i in range(6)],'states':BOSS_STATES})
  print(name,'->',slug,(w,h),'idle',idle_h)
 p.write_text(s[:s.index('window.FEMC_SHADOW_ART')]+'window.FEMC_SHADOW_ART = '+json.dumps(index,sort_keys=True,indent=1)+';\n')
 for mid in FIGHTERS:
  name=f'{mid}-posesheet.png'
  if only and name not in only:continue
  frames,idle_h=white_frames(find(name))
  for i,f in enumerate(frames):f.save(ROOT/f'assets/femc/battle/art/poses/{mid}-pose-{i}.webp','WEBP',quality=90,method=5)
  print(name,'->',mid,frames[0].size,'idle',idle_h)

def main():
 p=ROOT/'assets/femc/battle/art/shadows/index.js';s=p.read_text();index=json.loads(s[s.index('{'):s.rindex('}')+1])
 only=set(sys.argv[1:])
 for name,(slug,states) in CONFIG.items():
  if only and name not in only:continue
  with Image.open(SOURCE/name if (SOURCE/name).exists() else IMAGES/'New Adds'/name) as sheet:
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
if __name__=='__main__':
 if sys.argv[1:2]==['check']:
  out=sys.argv[2];files=[]
  for name in sys.argv[3:]:
   slug=BOSSES.get(name);files+=[str(ROOT/f'assets/femc/battle/art/shadows/{slug}-pose-{i}.webp') if slug else str(ROOT/f'assets/femc/battle/art/poses/{name.split("-")[0]}-pose-{i}.webp') for i in range(6)]
  theurgy_tool().check(out,files)
 else:
  only=set(sys.argv[1:]);white=set(BOSSES)|{f'{m}-posesheet.png' for m in FIGHTERS}
  if not only or only-white:main()
  if not only or only&white:build_white(only&white)
