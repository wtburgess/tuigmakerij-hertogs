"""Maakt een klein icoonlettertype met enkel de icoontjes die de site gebruikt.

Het volledige Material Symbols weegt bijna vier megabyte: zesduizend
tekeningen. Uitdunnen alleen volstaat niet — de namen worden als ligatuur
omgezet naar een tekening, en die regels overleven het uitdunnen niet. Dus
bouwen we ze er daarna zelf weer in, enkel voor de vijfendertig die we houden.
"""
import sys
from fontTools.ttLib import TTFont
from fontTools.subset import Subsetter, Options
from fontTools.feaLib.builder import addOpenTypeFeaturesFromString

bron, iconenlijst, doel = sys.argv[1], sys.argv[2], sys.argv[3]
iconen = [r.strip() for r in open(iconenlijst) if r.strip()]

f = TTFont(bron)
letters = sorted({c for naam in iconen for c in naam})

opties = Options()
opties.glyph_names = True          # namen behouden, anders kunnen we ze niet aanspreken
opties.layout_features = []        # de oude ligatuurregels gaan eruit
opties.notdef_outline = True
opties.drop_tables += ['DSIG']
s = Subsetter(options=opties)
s.populate(glyphs=iconen, text=''.join(letters))
s.subset(f)

namen = f.getGlyphOrder()
ontbreekt = [i for i in iconen if i not in namen]
if ontbreekt:
    raise SystemExit('deze icoontjes zaten niet in het lettertype: ' + ', '.join(ontbreekt))

cm = f.getBestCmap()
glyph = lambda teken: cm[ord(teken)]
regels = '\n'.join(
    '    sub %s by %s;' % (' '.join(glyph(c) for c in naam), naam) for naam in iconen)
addOpenTypeFeaturesFromString(f, 'feature liga {\n%s\n} liga;\n' % regels)

f.flavor = 'woff2'
f.save(doel)
print('%d icoontjes, %d glyphs' % (len(iconen), len(f.getGlyphOrder())))
