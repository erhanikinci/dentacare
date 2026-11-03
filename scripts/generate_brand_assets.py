"""Generate *original* DentaCare brand assets using pure vector + Pillow.
For reproducibility; no external image fetching or font assets distributed.
"""
import io, math, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import cairosvg
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS=os.path.join(ROOT,'assets');os.makedirs(ASSETS,exist_ok=True)
TOOTH='''<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 100 100"><defs>
<linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#93FFFF"/><stop offset="0.3" stop-color="#37EBF0"/><stop offset="0.6" stop-color="#08B5C8"/><stop offset="1" stop-color="#047FA0"/></linearGradient>
<linearGradient id="i" x1="0" x2=".8" y1="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.63" stop-color="#EFFDFF"/><stop offset="1" stop-color="#B4E8F4"/></linearGradient></defs>
<path d="M18 25 C11 11 25 7 37 12 C47 16 53 16 64 12 C79 5 92 17 83 33 C78 44 82 59 74 80 C71 89 62 88 60 79 L54 59 C52 52 47 52 45 59 L39 79 C36 89 27 89 24 79 C16 59 21 40 18 25 Z" fill="url(#b)" stroke="#A8FDFF" stroke-width="2.3"/>
<path d="M29 27 C24 18 34 18 42 21 C48 24 52 24 60 21 C69 17 77 19 72 30 C69 39 70 50 66 66 C64 73 62 68 60 60 C56 44 43 44 39 60 C37 69 34 73 32 66 C28 51 32 36 29 27 Z" fill="url(#i)"/>
<path d="M28 23 C36 17 45 28 55 24 C62 21 67 20 73 24" fill="none" stroke="#FFFFFF" stroke-width="3.8" stroke-linecap="round" opacity="0.85"/>
</svg>'''
logo=Image.open(io.BytesIO(cairosvg.svg2png(bytestring=TOOTH.encode(),output_width=720,output_height=720))).convert('RGBA')
def rgbgradient(size,top,bottom):
 w,h=size;img=Image.new('RGB',(w,h));px=img.load()
 for y in range(h):
  t=y/(h-1)
  col=tuple(int(top[i]*(1-t)+bottom[i]*t) for i in range(3))
  for x in range(w):px[x,y]=col
 return img.convert('RGBA')
def paste_center(base,obj,cx,cy):base.alpha_composite(obj,(int(cx-obj.width/2),int(cy-obj.height/2)))
def glass_disc(base,cx,cy,r):
 overlay=Image.new('RGBA',base.size,(0,0,0,0));d=ImageDraw.Draw(overlay)
 d.ellipse((cx-r,cy-r,cx+r,cy+r),fill=(255,255,255,98),outline=(255,255,255,210),width=3)
 base.alpha_composite(overlay)
# App icon
img=rgbgradient((1024,1024),(229,250,255),(142,216,239))
orbs=Image.new('RGBA',img.size,(0,0,0,0));d=ImageDraw.Draw(orbs);d.ellipse((-200,-310,740,570),fill=(255,255,255,80));d.ellipse((680,530,1180,1030),fill=(28,202,222,28));img.alpha_composite(orbs)
glass_disc(img,512,510,374)
shadow=Image.new('RGBA',(1024,1024),(0,0,0,0));paste_center(shadow,logo.resize((670,670),Image.Resampling.LANCZOS),518,552);shadow=shadow.filter(ImageFilter.GaussianBlur(24));shadow.putalpha(shadow.getchannel('A').point(lambda a:int(a*.2)));img.alpha_composite(shadow)
paste_center(img,logo.resize((675,675),Image.Resampling.LANCZOS),512,509)
img.convert('RGB').save(os.path.join(ASSETS,'icon.png'),quality=95)
# Android adaptive foreground transparent, generous empty region
fg=Image.new('RGBA',(1024,1024),(0,0,0,0));paste_center(fg,logo.resize((610,610),Image.Resampling.LANCZOS),512,510);fg.save(os.path.join(ASSETS,'adaptive-icon.png'))
# Small crisp favicon
img.resize((128,128),Image.Resampling.LANCZOS).save(os.path.join(ASSETS,'favicon.png'))
# Native splash icon (transparent foreground); Expo will center it on solid BG.
splashLogo=Image.new('RGBA',(800,800),(0,0,0,0));paste_center(splashLogo,logo.resize((610,610),Image.Resampling.LANCZOS),400,390)
splashLogo.save(os.path.join(ASSETS,'splash-icon.png'));splashLogo.save(os.path.join(ASSETS,'splash.png'))
# Premium static visual preview of the native splash concept (not the animated screen)
w,h=1000,1800
preview=rgbgradient((w,h),(247,253,255),(193,237,250));orbs=Image.new('RGBA',preview.size,(0,0,0,0));dr=ImageDraw.Draw(orbs);dr.ellipse((-210, -240,780,710),fill=(255,255,255,60));dr.ellipse((600,1170,1180,1750),fill=(34,212,228,20));preview.alpha_composite(orbs)
glass_disc(preview,500,740,354)
paste_center(preview,logo.resize((605,605),Image.Resampling.LANCZOS),500,730)
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
try:bold=ImageFont.truetype(font,74);medium=ImageFont.truetype(font,27);small=ImageFont.truetype(font,20)
except Exception:bold=medium=small=ImageFont.load_default()
dr=ImageDraw.Draw(preview,'RGBA')
for text, font_,y,color in [('DentaCare',bold,1190,(18,42,72,255)),('REIMAGINING DENTAL WELLNESS',medium,1310,(45,102,127,255)),('THE FUTURE OF SMILES',small,300,(23,139,163,255)),('Preparing your experience',small,1570,(64,125,147,255))]:
 bb=dr.textbbox((0,0),text,font=font_);dr.text((500-(bb[2]-bb[0])/2,y),text,font=font_,fill=color)
dr.rounded_rectangle((405,1510,595,1518),radius=5,fill=(190,226,232,255));dr.rounded_rectangle((405,1510,540,1518),radius=5,fill=(15,178,193,255))
preview.convert('RGB').save(os.path.join(ROOT,'PREVIEW_Premium_Splash.jpg'),quality=94)
print('Generated native icon, adaptive icon, splash icon, favicon, and visual preview')
