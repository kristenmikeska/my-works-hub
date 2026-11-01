"""Kat's Photoshop recut of a skin portrait sheet -> the game's existing skin portraits, placed exactly over the old faces.
Each existing face (assets/femc/game/art/skins/<skin>/portraits/<who>/<face>.webp) is found on the recut sheet by template
matching (same drawing, any cell order), the recut is resampled onto the same canvas, stray bits from neighbouring cells are
dropped and the body is carried down to the bottom edge where the old one reached it. Then install with
  python3 tools/femc-wardrobe.py portraits <skin> <who> OUT_DIR
and bump the portrait ?v= in cosmetics.js portrait().
Run: python3 tools/femc-recut-portraits.py SHEET.png <skin id> OUT_DIR   (who: solar; edit WHO for others)
"""
import sys, numpy as np, cv2
from PIL import Image
sheet_p, sid, out_dir = sys.argv[1], sys.argv[2], sys.argv[3]
WHO = sys.argv[4] if len(sys.argv) > 4 else "solar"
FACES=['neutral','happy','sad','serious','surprised','flustered']
sh=np.array(Image.open(sheet_p).convert('RGBA')).astype(np.float32); H,W=sh.shape[:2]
gray=cv2.cvtColor(sh[:,:,:3].astype(np.uint8),cv2.COLOR_RGB2GRAY)
for k,f in enumerate(FACES):
    old=np.array(Image.open(f'assets/femc/game/art/skins/{sid}/portraits/{WHO}/{f}.webp').convert('RGBA')).astype(np.float32)
    oh,ow=old.shape[:2]
    cells=[((j%3)*W//3,(j//3)*H//2,(j%3+1)*W//3,(j//3+1)*H//2) for j in range(6)]
    # template: a face-centred patch of the old portrait (fully opaque area)
    a=old[:,:,3]; ys,xs=np.where(a>250); my,mx=int(np.median(ys)),int(np.median(xs))
    best=None
    for cell in cells:
     for s in np.linspace(0.45,0.75,61):   # sheet px per old px
         th,tw=int(260*s),int(260*s)
         if th<20: continue
         y0=max(0,int(oh*0.30)); x0=max(0,mx-130)
         patch=old[y0:y0+260,x0:x0+260,:3].astype(np.uint8)
         tp=cv2.cvtColor(cv2.resize(patch,(tw,th),interpolation=cv2.INTER_AREA),cv2.COLOR_RGB2GRAY)
         reg=gray[cell[1]:cell[3],cell[0]:cell[2]]
         if tp.shape[0]>=reg.shape[0] or tp.shape[1]>=reg.shape[1]: continue
         r=cv2.matchTemplate(reg,tp,cv2.TM_CCOEFF_NORMED); _,v,_,loc=cv2.minMaxLoc(r)
         if best is None or v>best[0]: best=(v,s,cell[0]+loc[0]-x0*s,cell[1]+loc[1]-y0*s,cell)
    v,s,ox,oy,cell=best
    # map: old canvas (u,v) -> sheet (ox+u*s, oy+v*s)
    M=np.float32([[s,0,ox],[0,s,oy]])
    new=cv2.warpAffine(sh,M,(ow,oh),flags=cv2.INTER_LINEAR|cv2.WARP_INVERSE_MAP,borderMode=cv2.BORDER_CONSTANT,borderValue=(0,0,0,0))
    # outside the cell on the sheet: keep the old pixels (the carried-down bottom rows)
    uu,vv=np.meshgrid(np.arange(ow),np.arange(oh)); sx=ox+uu*s; sy=oy+vv*s
    inside=(sx>=cell[0])&(sx<cell[2]-1)&(sy>=cell[1])&(sy<cell[3]-1)
    # below the cell (the canvas runs past the sheet's gutter): carry the last clean row down, like the original cut
    new[~inside]=0
    for x in range(ow):
        col=np.where(inside[:,x])[0]
        if len(col)==0: continue
        last=col.max()-2
        if last<oh-1: new[last+1:,x]=new[last,x]
    # drop stray bits from the neighbouring faces: keep only pieces of real size
    al=(new[:,:,3]>20).astype(np.uint8); n,lab,st,_=cv2.connectedComponentsWithStats(al,8)
    if n>2:
        big=st[1:,cv2.CC_STAT_AREA].max()
        for i in range(1,n):
            if st[i,cv2.CC_STAT_AREA]<big*0.03: new[lab==i]=0
    # the body runs off the bottom edge like the old cut: in every column where the old portrait reached the bottom,
    # carry the new picture's lowest solid pixel down to the edge
    for x in range(ow):
        if old[oh-1,x,3]<128: new[oh-6:,x]=0; continue
        col=np.where(new[:oh,x,3]>200)[0]
        col=col[col>oh*0.6]
        if len(col)==0: continue
        last=col.max()-1
        new[last+1:,x]=new[last,x]
    Image.fromarray(np.clip(new,0,255).astype(np.uint8)).save(f'{out_dir}/{f}.png')
    print(f, cells.index(cell), 'match %.3f scale %.3f'%(v,s), 'outside', int((~inside & (old[:,:,3]>0)).sum()))
