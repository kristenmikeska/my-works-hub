"""Extract the approved 3x2 New Adds Shadow sheets (and the 2x2 QUADS sheets, below) without modifying sources.
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
 'hangedman-attack.png':'hanged-man-shadow','wrensshadow-attack.png':'wren-shadow-last-train',
 'justice-attack.png':'justice-shadow',
 # batch 56: the Reaper's sheet (its static reaper.webp stays); the Hanging Effigy's (static from hanging-effigy.jpeg, STATICS)
 'reaper-posesheet.png':'reaper','hanging-effigy-posesheet.jpeg':'hanging-effigy'}
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
# Bosses whose spell cell (bottom left) has a saturated golden glow but whose body is silver: AURA's rule with GLOW's
# luminance test (a yellow glow's darkest channel is low). Justice (2026-10-21): sheet-wide GLOW thinned its helm.
SPELL_GLOW={'justice-attack.png':0.8}
HOLES.update({'hermit-attack.png':0.85,'solar-posesheet.png':0.8,'yukari-posesheet.png':0.8,'akihiko-posesheet.png':0.62})

# Thin paper-white gaps between hair strands or inside a bow that Vision fills and white_holes misses (it opens away
# anything under 3px): near-white specks at least `flat` bright on average, ringed by clearly darker art. Shaded whites
# (shirts, socks, fur) average lower and stay.
GAPS={'solar-posesheet.png':0.975,'yukari-posesheet.png':0.975,'mitsuru-posesheet.png':0.975,'minji-posesheet.png':0.975,
 'haechan-posesheet.png':0.985,'jungwon-posesheet.png':0.975,'jihoon-posesheet.png':0.975}

def gaps(src,flat):
 flat,ringmax=flat if isinstance(flat,tuple) else (flat,0.7)  # (flat, ring limit): a darker ring limit keeps blade highlights
 rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2)
 lab,n=ndimage.label(minc>0.93);hole=np.zeros(minc.shape,bool)
 if not n:return hole
 ids=np.arange(1,n+1);area=ndimage.sum(np.ones_like(minc),lab,ids);mean=ndimage.mean(minc,lab,ids)
 for k,sl in enumerate(ndimage.find_objects(lab),1):
  if area[k-1]<6 or area[k-1]>40000 or mean[k-1]<flat:continue
  y0,y1=max(0,sl[0].start-3),sl[0].stop+3;x0,x1=max(0,sl[1].start-3),sl[1].stop+3
  mk=lab[y0:y1,x0:x1]==k;ring=ndimage.binary_dilation(mk,iterations=2)&~mk
  if ring.any() and minc[y0:y1,x0:x1][ring].mean()<ringmax:hole[y0:y1,x0:x1]|=mk
 return ndimage.binary_dilation(hole,iterations=1)

# Hair gaps GAPS still leaves (2026-10-21, Kat: white between Solar's strands shows on the Tartarus floor). Paper in
# long hair is often wider than GAPS allows, a touch grey from anti-aliasing (average 0.95-0.97), or opens onto the
# background through a strand tip. femc-theurgy.py strands() gives these the un-mix alpha (paper clear, edges soft):
#  - pale pixels joined to the background paper through pale (>0.88) pixels (a strand tip, a halo along a leg), and
#  - enclosed near-white patches at least ~5px wide, ringed by dark art, with no skin within 10px (a gap in the hair).
# Thin white piping, cuffs by the hands, collars by the face, shaded socks and shirts, blade highlights and teeth are
# enclosed by outline or near skin and stay solid. Value: (dark-ring limit, ring saturation limit); red or brown
# hair needs the saturation test off.
STRANDS={'solar-posesheet.png':(0.55,0.25),'minji-posesheet.png':(0.55,0.25),'haechan-posesheet.png':(0.55,0.25),
 'mitsuru-posesheet.png':(0.55,1.0)}

# Solar's outfit sheets with long loose black hair (art batch 93): her fighter sheet's HOLES, GAPS and STRANDS hair-gap
# clean-up, GAPS and STRANDS with darker ring limits (0.45, not 0.7 and 0.55): the usual ones nicked the naginata
# blade's bright edge. Not for outfits in
# white (Stage Idol: the clean-up punched through her white jacket), whose sheets keep the default key.
SOLAR_LONG_HAIR=['skin-sk-esports-posesheet.png','skin-sk-vp-posesheet.png']
for _n in SOLAR_LONG_HAIR:
 HOLES[_n]=HOLES['solar-posesheet.png'];GAPS[_n]=(0.975,0.45);STRANDS[_n]=(0.45,0.25)
# Morning Roadwork: no GAPS (it took the white piping on her shorts) and STRANDS at 0.35 (0.45 nicked a blade tip).
HOLES['sk-roadwork-solar-posesheet.png']=HOLES['solar-posesheet.png'];STRANDS['sk-roadwork-solar-posesheet.png']=(0.35,0.25)

# Paper pockets (art batch 94): flat white the key keeps where long hair fans out from the body, too big and too
# loosely ringed for GAPS and not open to the paper for STRANDS. HOLES 0.8 clears them but punches white clothing and
# shine (a white skirt, platform sneakers, red latex highlights). pockets() clears an opaque near-white patch only when
# the art around it is hair-like: darker than `ring_max` on average and at least `lowsat` of it unsaturated (black or
# ash hair, not a pink jacket, red latex or a pale yellow python). Values: (ring_max, lowsat[, skin_max]): with skin_max,
# a patch whose ring is more than that share skin-coloured (warm and light: a sock against a leg) stays.
POCKETS={}

def pockets(src,a,ring_max,lowsat,skin_max=1.0):
 rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2);sat=rgb.max(2)-minc
 lab,_=ndimage.label(ndimage.binary_opening((a[...,3]>0.5)&(minc>0.95),iterations=1));hole=np.zeros(minc.shape,bool)
 for k,sl in enumerate(ndimage.find_objects(lab),1):
  if sl is None:continue
  y0,y1=max(0,sl[0].start-6),sl[0].stop+6;x0,x1=max(0,sl[1].start-6),sl[1].stop+6
  mk=lab[y0:y1,x0:x1]==k
  if mk.sum()<40:continue
  ring=ndimage.binary_dilation(mk,iterations=4)&~mk&(a[y0:y1,x0:x1,3]>0.5)
  if not ring.any():continue
  r_=rgb[y0:y1,x0:x1][ring];skin=((r_[:,0]-r_[:,2])>0.15)&(r_.min(1)>0.45)
  if minc[y0:y1,x0:x1][ring].mean()<ring_max and (sat[y0:y1,x0:x1][ring]<0.3).mean()>=lowsat and skin.mean()<=skin_max:hole[y0:y1,x0:x1]|=mk
 hole=ndimage.binary_dilation(hole,iterations=1)
 aw=np.clip((1-minc-0.02)/0.98,0,1);aw[aw<0.05]=0
 unmixed=np.clip((rgb-(1-aw[...,None]))/np.maximum(aw,1e-3)[...,None],0,1)
 a[...,3]=np.where(hole,np.minimum(a[...,3],aw),a[...,3]);a[...,:3]=np.where(hole[...,None],unmixed,a[...,:3])

# Dark art Vision leaves out (art batch 94: Night Prowl's victory-pose shaft came out half see-through from the
# un-mix alone). Where Vision found nothing, pieces of dark, unsaturated art (darkest channel under the value, over 400 px)
# are made opaque, their pale highlights by a ramp, so a shaft with a light stripe stays whole. Values: the darkness limit.
SOLID_DARK={}

def solid_dark(src,a,limit):
 TH=theurgy_tool();rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2)
 av=TH.vision_alpha(str(src));miss=(av<0.35) if av is not None and av.shape==minc.shape else np.ones(minc.shape,bool)
 dark=miss&(minc<limit)&(rgb.max(2)-minc<0.35)
 lab,n=ndimage.label(ndimage.binary_closing(dark,iterations=3)&miss&(minc<0.85))
 if not n:return
 sz=ndimage.sum(np.ones_like(minc),lab,range(1,n+1));keep=np.isin(lab,1+np.nonzero(sz>400)[0])
 ramp=np.clip((0.85-minc)/0.35,0,1)
 a[...,:3]=np.where(keep[...,None],rgb,a[...,:3]);a[...,3]=np.where(keep,np.maximum(a[...,3],ramp),a[...,3])

# Art batch 94 (Solar's inspo outfits). Long loose hair fanned wide: STRANDS at the batch 93 ring (0.45) plus POCKETS, no
# HOLES or GAPS (they punched white skirts, sneakers, the python's pale scales and latex shine). Night Prowl also gets
# SOLID_DARK for her victory pose's black shaft. Summer Session (white jacket, a blue-and-white shaft that STRANDS
# nicks): POCKETS only. Strawberry Milk (pastel pink hair on white): POCKETS can't tell her hair from socks and
# sneakers, so HOLES at 0.75 (0.8 punched the centre of her spell burst).
for _n in ['skin-sk-y2k-posesheet.png','skin-sk-oops-posesheet.png','skin-sk-snake-posesheet.png','sk-skin-prowl-posesheet.png',
 'skin-sk-sugarrush-posesheet.png','skin-sk-limelight-posesheet.png']:
 STRANDS[_n]=(0.45,0.25);POCKETS[_n]=(0.6,0.4)
SOLID_DARK['sk-skin-prowl-posesheet.png']=0.45
POCKETS[' skin-sk-summersession-posesheet.png']=(0.6,0.4)
HOLES['skin-sk-strawberry-posesheet.png']=0.75

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
 if src.name in STRANDS:
  TH.strands(src,a,*STRANDS[src.name])
 if src.name in POCKETS:
  pockets(src,a,*POCKETS[src.name])
 if src.name in SOLID_DARK:
  solid_dark(src,a,SOLID_DARK[src.name])
 if src.name in AURA or src.name in SPELL_GLOW:
  rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2)
  lab,n=ndimage.label(ndimage.binary_closing((minc<0.6)&(a[...,3]>0.5),iterations=3));sizes=np.bincount(lab.ravel());sizes[0]=0
  body=ndimage.binary_dilation(ndimage.binary_fill_holes(np.isin(lab,np.nonzero(sizes>20000)[0])),iterations=8)
  aw=np.clip((1-minc-0.02)/0.98,0,1);unmixed=np.clip((rgb-(1-aw[...,None]))/np.maximum(aw,1e-3)[...,None],0,1)
  H,W=minc.shape;spell=np.zeros_like(body);spell[H//2:,:W//3]=True
  if src.name in SPELL_GLOW:t=np.clip((.299*rgb[...,0]+.587*rgb[...,1]+.114*rgb[...,2]-SPELL_GLOW[src.name])/0.08,0,1)*(~body&spell)
  else:t=np.clip((minc-AURA[src.name])/0.06,0,1)*(~body&spell)
  a[...,3]=a[...,3]*(1-t)+aw*t;a[...,:3]=a[...,:3]*(1-t[...,None])+unmixed*t[...,None]
 if src.name in GLOW:
  rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2);lum=.299*rgb[...,0]+.587*rgb[...,1]+.114*rgb[...,2]
  aw=np.clip((1-minc-0.02)/0.98,0,1);unmixed=np.clip((rgb-(1-aw[...,None]))/np.maximum(aw,1e-3)[...,None],0,1)
  t=np.clip((lum-GLOW[src.name])/0.08,0,1)
  a[...,3]=a[...,3]*(1-t)+aw*t;a[...,:3]=a[...,:3]*(1-t[...,None])+unmixed*t[...,None]
 masks=grid_figures(a)
 return place(TH,[a[...,3]*ndimage.binary_dilation(mk,iterations=2) for mk in masks],[a]*len(masks),rim)

def place(TH,alphas,arrays,rim=False):
 """Put each figure (its alpha over its RGBA array) on one fixed canvas: body mass centred, lowest solid row on one
 baseline. Returns the frames and the idle (first) figure's height on the canvas."""
 info=[]
 for al,a in zip(alphas,arrays):
  W=a.shape[1]
  ys,xs=np.nonzero(al>0.02)
  solid=al>0.8
  lab,_=ndimage.label(solid);sizes=np.bincount(lab.ravel());sizes[0]=0;body=lab==sizes.argmax()
  by=np.nonzero(body.any(1))[0].max()+1  # baseline: the body's lowest solid row (glows and sparks below it don't lift it)
  w=al*body;cx=float((w.sum(0)*np.arange(W)).sum()/w.sum())
  info.append((al,xs.min(),xs.max()+1,ys.min(),ys.max()+1,cx,by,a))
 pad=6+(4 if rim else 0)
 left=max(cx-x0 for _,x0,x1,y0,y1,cx,by,_a in info);right=max(x1-cx for _,x0,x1,y0,y1,cx,by,_a in info)
 up=max(by-y0 for _,x0,x1,y0,y1,cx,by,_a in info);down=max(max(0,y1-by) for _,x0,x1,y0,y1,cx,by,_a in info)
 cw=int(np.ceil(left+right))+2*pad;ch=int(np.ceil(up+down))+2*pad
 cw+=cw%2;ch+=ch%2
 out=[]
 for al,x0,x1,y0,y1,cx,by,a in info:
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
  index.setdefault(slug,{'small':False}).update(w=w,h=h,poses={'scale':round(h/idle_h,4),'frames':[f'{slug}-pose-{i}' for i in range(6)],'states':BOSS_STATES})
  print(name,'->',slug,(w,h),'idle',idle_h)
 p.write_text(s[:s.index('window.FEMC_SHADOW_ART')]+'window.FEMC_SHADOW_ART = '+json.dumps(index,sort_keys=True,indent=1)+';\n')
 for mid in FIGHTERS:
  name=f'{mid}-posesheet.png'
  if only and name not in only:continue
  frames,idle_h=white_frames(find(name))
  for i,f in enumerate(frames):f.save(ROOT/f'assets/femc/battle/art/poses/{mid}-pose-{i}.webp','WEBP',quality=90,method=5)
  print(name,'->',mid,frames[0].size,'idle',idle_h)

# Labelled 2x2 sheets with a separate idle picture (batch 37, 2026-10-23): Kat's April boss came as one full figure
# (arcana-magician.jpeg, white) and a 2x2 sheet on grid paper (Prepare, Arcane Barrage / Rift Step, Damage Reaction)
# with printed labels and a thumbnail in a corner. The paper is turned white (pale grey pixels joined to the edges),
# the labels and thumbnail are blanked (`blank` boxes), every piece of art goes to its quadrant (row split `row`,
# column split per row `cols`), and the idle picture is scaled so its dark figure is as tall as the `match` cell's.
# `white`: near-white pixels Vision fills (the glow inside the card ring, paper between tails) take the un-mix alpha
# only. The idle picture is also written whole as the static <slug>.webp. Frames: idle, then `cells` in sheet
# reading order (frame numbers), so 0 idle, 1 wind-up, 2 attack, 3 cast, 4 hurt (also down and defeat).
QUADS={'arcana-magician-poses.jpeg':{'slug':'arcana-magician','idle':'arcana-magician.jpeg','cells':[1,3,2,4],'row':1000,
 'cols':(880,1130),'blank':[(60,80,285,175),(860,80,1220,175),(50,1110,295,1200),(1040,1110,1385,1200),(1890,1750,2128,2016)],
 'match':1,'white':0.93,'states':{'attack':[1,2],'cast':[1,3],'hurt':[4],'down':[4],'defeat':[4]}}}

def key_white(TH,src,white):
 a=TH.key(str(src),holes=True)
 rgb=np.asarray(Image.open(src).convert('RGB'),np.float32)/255;minc=rgb.min(2)
 aw=np.clip((1-minc-0.02)/0.98,0,1);unmixed=np.clip((rgb-(1-aw[...,None]))/np.maximum(aw,1e-3)[...,None],0,1)
 t=np.clip((minc-white)/0.04,0,1)
 a[...,3]=a[...,3]*(1-t)+aw*t;a[...,:3]=a[...,:3]*(1-t[...,None])+unmixed*t[...,None]
 return a

def dark_height(a):
 """Height of the biggest dark solid piece (the figure's body, not a pale glow around it)."""
 lab,_=ndimage.label(ndimage.binary_closing((a[...,:3].min(2)<0.45)&(a[...,3]>0.8),iterations=2));sizes=np.bincount(lab.ravel());sizes[0]=0
 rows=np.nonzero((lab==sizes.argmax()).any(1))[0];return rows.max()+1-rows.min()

def quad_frames(name,q):
 import tempfile
 TH=theurgy_tool();src=find(name)
 rgb=np.asarray(Image.open(src).convert('RGB'),np.uint8).copy();f=rgb.astype(np.float32)/255
 pale=(f.min(2)>0.78)&(f.max(2)-f.min(2)<0.1)
 lab,_=ndimage.label(pale);edge=np.unique(np.concatenate((lab[0],lab[-1],lab[:,0],lab[:,-1])));edge=edge[edge>0]
 rgb[np.isin(lab,edge)]=255
 # Paper shut in between tails and ribbons: warm (red over blue) and bright on average; the scrolls are greyer and darker.
 ids=np.arange(1,lab.max()+1);mr=ndimage.mean(f[...,0],lab,ids);warm=ndimage.mean(f[...,0]-f[...,2],lab,ids)
 shut=ids[(mr>0.925)&(warm>0.015)];rgb[np.isin(lab,shut)]=255
 for x0,y0,x1,y1 in q['blank']:rgb[y0:y1,x0:x1]=255
 tmp=Path(tempfile.mkdtemp())/(Path(name).stem+'.png');Image.fromarray(rgb).save(tmp)
 a=key_white(TH,tmp,q['white']);H,W=a.shape[:2]
 lab,n=ndimage.label(ndimage.binary_dilation(a[...,3]>0.06,iterations=2));lab=lab*(a[...,3]>0.06)
 quad=np.zeros(n+1,int)-1
 for k,(cy,cx) in enumerate(ndimage.center_of_mass(np.ones((H,W)),lab,range(1,n+1)),1):
  r=int(cy>=q['row']);quad[k]=r*2+int(cx>=q['cols'][r])
 cells=[a[...,3]*ndimage.binary_dilation((quad[lab]==c)&(lab>0),iterations=2) for c in range(4)]
 idle=key_white(TH,find(q['idle']),q['white'])
 ref=a.copy();ref[...,3]=cells[q['match']]
 k=dark_height(ref)/dark_height(idle)
 big=TH.to_img(idle);static=big
 small=big.resize((round(big.width*k),round(big.height*k)),Image.LANCZOS);ia=np.asarray(small,np.float32)/255
 alphas=[ia[...,3]]+[None]*4;arrays=[ia]+[None]*4
 for c,fr in enumerate(q['cells']):alphas[fr]=cells[c];arrays[fr]=a
 frames,idle_h=place(TH,alphas,arrays,rim=True)
 return frames,idle_h,static,k

def build_quads(only=()):
 p=ROOT/'assets/femc/battle/art/shadows/index.js';s=p.read_text();index=json.loads(s[s.index('{'):s.rindex('}')+1])
 for name,q in QUADS.items():
  if only and name not in only:continue
  slug=q['slug'];frames,idle_h,static,k=quad_frames(name,q)
  for i,f in enumerate(frames):f.save(ROOT/f'assets/femc/battle/art/shadows/{slug}-pose-{i}.webp','WEBP',quality=90,method=5)
  # The static picture (Compendium-style uses, analysis): trimmed, rimmed like every Shadow, at most 900 tall.
  TH=theurgy_tool();st=np.asarray(static,np.float32)/255;bb=static.getchannel('A').point(lambda v:255 if v>8 else 0).getbbox()
  st=st[bb[1]:bb[3],bb[0]:bb[2]];r=min(1,900/st.shape[0])
  im=TH.to_img(TH.AC.rim(np.asarray(TH.to_img(st).resize((round(st.shape[1]*r),round(st.shape[0]*r)),Image.LANCZOS),np.float32)/255,1.6))
  im.save(ROOT/f'assets/femc/battle/art/shadows/{slug}.webp','WEBP',quality=90,method=5)
  w,h=frames[0].size
  index[slug]={'w':w,'h':h,'small':False,'poses':{'scale':round(h/idle_h,4),'frames':[f'{slug}-pose-{i}' for i in range(len(frames))],'states':q['states']}}
  print(name,'->',slug,(w,h),'idle',idle_h,'idle art x',round(k,3),'static',im.size)
 p.write_text(s[:s.index('window.FEMC_SHADOW_ART')]+'window.FEMC_SHADOW_ART = '+json.dumps(index,sort_keys=True,indent=1)+';\n')

# Transparent sheets with a separate static picture (batch 51, 2026-10-26): Kat's Sleeper Car came as one full figure
# (memory-sleeper-car.png) and a 3x3 pose sheet (sleeper-car-poses.png), both with real transparency, so nothing is keyed.
# The sheet's pieces go to their cells' figures (grid_figures), the frames share one canvas with the Shadow rim, in reading
# order (0 idle, 1 lurch, 2 green aura, 3 rush, 4 ooze, 5 gust, 6 hurt, 7 sagging, 8 collapsing). The static picture is
# written whole as <slug>.webp (trimmed, rimmed, at most 900 tall). STATICS: single transparent pictures, static art only.
ALPHA_GRIDS={'sleeper-car-poses.png':{'slug':'memory-sleeper-car','static':'memory-sleeper-car.png','cols':3,'rows':3,
 'states':{'attack':[1,3,4],'cast':[2,5],'hurt':[6],'down':[7],'defeat':[8]}}}
# Wren's last phase (batch 51): Kat made two versions; ver2 (true-black hair, no green cast) is used, ver1 is the alternate.
STATICS={'wren-shadow-phase3-ver2.png':'wren-shadow-phase3',
 'wren-shadow-phase1.png':'wren-shadow-phase1',  # batch 56: her phase 1 (the bench), real transparency
 'hanging-effigy.jpeg':'hanging-effigy'}  # batch 56: a JPEG with a painted checkerboard, keyed first (CHECKER)
# Statics whose "transparency" is a painted checkerboard: femc-sheet.py cut_background(checker=True) clears it first.
CHECKER={'hanging-effigy.jpeg'}

def static_src(name):
 if name not in CHECKER:return Image.open(find(name)).convert('RGBA')
 spec=importlib.util.spec_from_file_location('femc_sheet_cb',ROOT/'tools/femc-sheet.py');m=importlib.util.module_from_spec(spec)
 src=open(spec.origin).read();code=src[:src.index('ap = argparse')] if 'ap = argparse' in src else src
 exec(compile(code,spec.origin,'exec'),m.__dict__);return m.cut_background(Image.open(find(name)),checker=True)

def alpha_figures(a,cols,rows):
 """One mask per cell of a transparent cols x rows sheet, row by row. A connected piece belongs to its cell; a piece two
 cells share a lot of (figures touching) is split between their solid bodies by growing each body through the art, so a
 tendril stays with the figure it comes out of. Each cell's biggest piece is its figure; specks join the nearest figure."""
 H,W=a.shape[:2];m=a[...,3]>0.06;N=cols*rows
 lab,_=ndimage.label(ndimage.binary_dilation(m,iterations=2));lab=lab*m
 cell=(np.arange(H)[:,None]*rows//H)*cols+(np.arange(W)[None,:]*cols//W)
 parts=[]
 for k,sl in enumerate(ndimage.find_objects(lab),1):
  if sl is None:continue
  mk=lab[sl]==k;counts=np.bincount(cell[sl][mk],minlength=N);big=[c for c in range(N) if counts[c]>0.3*counts.sum()]
  if len(big)<2:parts.append((sl,mk));continue
  reg=np.zeros(mk.shape,int);solid=mk&(a[sl][...,3]>0.9)
  for c in big:
   cl,_=ndimage.label(solid&(cell[sl]==c));sz=np.bincount(cl.ravel());sz[0]=0;reg[cl==sz.argmax()]=c+1
  while True:
   grown=ndimage.grey_dilation(reg,size=3)*(mk&(reg==0))
   if not grown.any():break
   reg=np.where(reg==0,grown,reg)
  _,(iy,ix)=ndimage.distance_transform_edt(reg==0,return_indices=True);reg=np.where(mk,reg[iy,ix],0)
  parts+=[(sl,reg==c+1) for c in big]
 full=lambda sl,mk:np.pad(mk,((sl[0].start,H-sl[0].stop),(sl[1].start,W-sl[1].stop)))
 masks=[full(sl,mk) for sl,mk in parts];sizes=[mk.sum() for mk in masks]
 cent=[ndimage.center_of_mass(mk) for mk in masks];home=[int(cell[min(H-1,int(cy)),min(W-1,int(cx))]) for cy,cx in cent]
 figs=[max([i for i in range(len(masks)) if home[i]==c],key=lambda i:sizes[i]) for c in range(N)]
 boxes=[ndimage.find_objects(masks[f].astype(int))[0] for f in figs];out=[masks[f].copy() for f in figs]
 for i,mk in enumerate(masks):
  if i in figs:continue
  cy,cx=cent[i];out[int(np.argmin([np.hypot(max(b[1].start-cx,0,cx-b[1].stop),max(b[0].start-cy,0,cy-b[0].stop)) for b in boxes]))]|=mk
 return out

def write_static(TH,a,slug):
 bb=TH.to_img(a).getchannel('A').point(lambda v:255 if v>8 else 0).getbbox();st=a[bb[1]:bb[3],bb[0]:bb[2]];r=min(1,900/st.shape[0])
 im=TH.to_img(TH.AC.rim(np.asarray(TH.to_img(st).resize((round(st.shape[1]*r),round(st.shape[0]*r)),Image.LANCZOS),np.float32)/255,1.6))
 im.save(ROOT/f'assets/femc/battle/art/shadows/{slug}.webp','WEBP',quality=90,method=5);return im

def build_alpha(only=()):
 p=ROOT/'assets/femc/battle/art/shadows/index.js';s=p.read_text();index=json.loads(s[s.index('{'):s.rindex('}')+1])
 TH=theurgy_tool()
 for name,g in ALPHA_GRIDS.items():
  if only and name not in only:continue
  slug=g['slug'];a=np.asarray(Image.open(find(name)).convert('RGBA'),np.float32)/255
  masks=alpha_figures(a,g['cols'],g['rows'])
  frames,idle_h=place(TH,[a[...,3]*ndimage.binary_dilation(mk,iterations=2) for mk in masks],[a]*len(masks),rim=True)
  for i,f in enumerate(frames):f.save(ROOT/f'assets/femc/battle/art/shadows/{slug}-pose-{i}.webp','WEBP',quality=90,method=5)
  im=write_static(TH,np.asarray(Image.open(find(g['static'])).convert('RGBA'),np.float32)/255,slug)
  w,h=frames[0].size
  index[slug]={'w':w,'h':h,'small':False,'poses':{'scale':round(h/idle_h,4),'frames':[f'{slug}-pose-{i}' for i in range(len(frames))],'states':g['states']}}
  print(name,'->',slug,(w,h),'idle',idle_h,'static',im.size)
 for name,slug in STATICS.items():
  if only and name not in only:continue
  im=write_static(TH,np.asarray(static_src(name),np.float32)/255,slug)
  e=index.setdefault(slug,{'small':False})
  if 'poses' not in e:e.update(w=im.width,h=im.height)  # a pose sheet's frames set w / h (hanging-effigy)
  print(name,'->',slug,im.size)
 p.write_text(s[:s.index('window.FEMC_SHADOW_ART')]+'window.FEMC_SHADOW_ART = '+json.dumps(index,sort_keys=True,indent=1)+';\n')

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
   slug=BOSSES.get(name) or QUADS.get(name,{}).get('slug') or ALPHA_GRIDS.get(name,{}).get('slug');n=len(QUADS[name]['cells'])+1 if name in QUADS else ALPHA_GRIDS[name]['cols']*ALPHA_GRIDS[name]['rows'] if name in ALPHA_GRIDS else 6
   files+=[str(ROOT/f'assets/femc/battle/art/shadows/{slug}-pose-{i}.webp') if slug else str(ROOT/f'assets/femc/battle/art/poses/{name.split("-")[0]}-pose-{i}.webp') for i in range(n)]
  theurgy_tool().check(out,files)
 else:
  only=set(sys.argv[1:]);white=set(BOSSES)|{f'{m}-posesheet.png' for m in FIGHTERS}
  alpha=set(ALPHA_GRIDS)|set(STATICS)
  if not only or only-white-set(QUADS)-alpha:main()
  if not only or only&white:build_white(only&white)
  if not only or only&set(QUADS):build_quads(only&set(QUADS))
  if not only or only&alpha:build_alpha(only&alpha)
