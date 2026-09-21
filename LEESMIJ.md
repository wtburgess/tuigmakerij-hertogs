# Tuigtassen Hertogs — website

Statische site. Geen build, geen framework, geen server nodig.
Lokaal bekijken: `python3 -m http.server` in deze map, dan http://localhost:8000

## Wat waar aanpassen

Bijna alles wat Karolien zelf wil wijzigen staat bovenaan in **`assets/site.js`**:

| Wat | Waar |
|---|---|
| Telefoon, mail, WhatsApp, adres, IBAN, BTW, socials | `CONTACT` |
| Foto's op de pagina's | Beheerpagina > Sfeerbeelden. `IMG` is enkel nog de terugval |
| Tassen: naam, prijs, maten, verhaal, voorraad | `PRODUCTS` |
| Verzendkosten per land | `LEVERING` |

Een tas verkocht? Zet `voorraad: 0` — hij blijft zichtbaar met "Verkocht" erop,
in grijstinten, en de knop wordt "Vraag naar iets gelijkaardigs".

Promo? Vul op de beheerpagina de **oude prijs** in; die komt doorstreept naast
de gewone prijs te staan. `prijs` blijft altijd wat de klant betaalt, dus zet
daar de promoprijs in. Veld leeg = geen promo.

Net af? Zet `nieuw: true` en hij krijgt een groen "Nieuw"-label. Haal die regel
weg zodra hij niet meer nieuw is. Verkocht wint altijd van nieuw.

Een tas toevoegen? Kopieer een blok in `PRODUCTS`, geef het een uniek `id`.
Hij verschijnt vanzelf op de collectiepagina.

## Sfeerbeelden

De foto's op de pagina's zelf staan in de tabel `sitefotos`: één rij per plek,
met het pad in de opslagmap `productfotos/sfeer/`. Staat er voor een naam geen
rij, dan geldt `IMG` in `assets/site.js`.

De pagina wacht eerst het lijstje met vervangen beelden af — een paar honderd
bytes — en vult dan elke plek in één keer juist in. Zo laadt de browser er nooit
twee na elkaar. Blijft dat lijstje uit, dan komen na twee tellen alsnog de
beelden uit `IMG`: een trage of onbereikbare databank levert dus nooit een lege
pagina op.

Karolien wisselt ze zelf op de beheerpagina onder **Sfeerbeelden**. Ze ziet
daar de 39 plekken op de site, elk met de pagina en de sectiekop waar het beeld
hangt.

Elke plek heeft een eigen naam, ook waar twee plekken dezelfde foto tonen.
Eerder deelden ze er één — `zadelSchaduw` hing op vier plaatsen — en dan wissel
je er vier tegelijk. De doublures dragen nu een letter achteraan
(`zadelSchaduwB`, `zadelSchaduwC`) en starten met dezelfde bron, zodat de site
er hetzelfde uitziet tot je er één vervangt.

De lijst met die plekken is `BEELDEN` in `assets/site.js`. Voeg je een
`data-img` toe in de HTML, geef hem dan een naam die nog niet bestaat en zet
hem daar ook bij, anders kan ze hem niet bereiken. De labels komen uit de
sectiekoppen; hernoem je een kop, werk ze dan mee bij.

Nieuwe foto's zet je het snelst in bulk klaar via Supabase > Storage >
`productfotos` > map `sfeer`. Alles wat daar staat, verschijnt in het
keuzevenster achter de knop Vervang.

De foto's van de tassen staan hier los van — die horen bij het product zelf.

## Foto's worden vanzelf verkleind

Kies je op de beheerpagina een foto, dan verkleint de browser ze eerst tot
hoogstens 2000 pixels aan de langste zijde en perst ze als jpeg, vóór er iets
vertrekt. Een foto van zes megabyte rechtstreeks van een toestel wordt zo
ongeveer tweehonderd kilobyte, zonder dat je er op het scherm iets van ziet.

Dat is geen luxe. Het gratis plan van Supabase geeft 5 GB verkeer per maand, en
elke bezoeker haalt die foto's op. Met onbewerkte toestelfoto's is die vijf
gigabyte in enkele honderden bezoeken op.

Zet je foto's rechtstreeks in Supabase > Storage — dus buiten de beheerpagina
om — dan gebeurt dat verkleinen níét. Doe het daar dan zelf, tot zo'n 2000
pixels breed.

Foto's die er vóór deze wijziging al op stonden, zijn nog de onverkleinde. Voor
die ene keer staat er onderaan de beheerpagina een knop **Alle foto's
verkleinen**. Die haalt elke foto uit de opslag, verkleint ze en zet ze op
dezelfde plaats terug — de tassen en de sfeerbeelden wijzen naar een pad, en dat
pad blijft kloppen, dus aan de databank verandert er niets.

Het ophalen kost zelf één keer verkeer, ongeveer zoveel als er in de opslag
staat. Doe het dus één keer en niet elke week. Filmpjes blijven ongemoeid, en
een foto die al klein genoeg is wordt overgeslagen. Omdat de foto's hun adres
houden, kan een browser nog een uurtje de oude versie tonen; aan de opslag en
het verkeer is dan al wel geraakt.

## Filmpjes

Bij een tas mag tussen de foto's ook een filmpje staan: op de beheerpagina kies
je gewoon een mp4 in plaats van een foto. Het komt in dezelfde rij duimnagels
terecht en speelt af op de productpagina; op de collectiekaart en de duimnagels
staat het eerste beeld stil. Hooguit 50 MB per bestand — dat is de grens van de
opslag bij Supabase. Verklein een filmpje eerst; een minuut in 720p volstaat
ruimschoots en houdt de pagina snel.

## De code van een tas

Elke tas heeft een eigen code — TH-001, TH-002, en zo verder. Die hangt aan de
tas zelf en blijft altijd dezelfde, ook als de volgorde in de collectie
verschuift. Je ziet ze op de kaart in de collectie, bij de gegevens op de
productpagina en in het overzicht van de bestellingen.

Ze gaat ook mee in de omschrijving die Mollie op je rekeninguittreksel zet:
daar staat dan `Tuigtassen Hertogs TH-2026-A3F9 - TH-014`. Het eerste nummer is
de bestelling, het tweede de tas.

Een nieuwe tas krijgt het eerstvolgende vrije nummer voorgesteld. Je mag dat
overschrijven met wat je wil; enkel twee tassen met dezelfde code gaat niet.
Laat je het veld leeg, dan toont de kaart gewoon haar plaats in de collectie.

## De mobiele versie van de kaders

Drie blokken krijgen op een telefoon een andere vorm dan op een breed scherm:
"Drie wegen naar jouw tuigtas" en de vijf stappen op de collectiepagina, en de
kaders op herstel & zorg. Op een breed scherm blijven het kaarten met een foto
erboven; onder de 640 pixels worden het rijen met een icoontje links, de titel
en één korte regel.

Dat scheelt veel: de collectiepagina werd zo'n 3000 pixels korter, herstel &
zorg ongeveer evenveel. Je ziet de drie wegen of de vijf stappen nu samen op
één scherm in plaats van één per scherm.

In de HTML zie je dat aan twee paar klassen: `hidden sm:block` op de fotoband
en `sm:!hidden` op het icoontje. Dat uitroepteken hoort erbij — de stylesheet
van Google zet zelf `display: inline-block` op `.material-symbols-outlined`, en
zonder het uitroepteken hangt het van de volgorde van de stylesheets af wie
wint.

De korte regels staan naast de volledige tekst in de HTML, met hun eigen
sleutel (`col.weg1.kort`, `col.stap1.kort`). Pas je de lange tekst aan, kijk
dan of de korte nog klopt.

## Engels

Uiterst rechts in de balk staat een knop die toont waar je naartoe gaat: sta je
op het Nederlands, dan staat er EN. Op een telefoon zit ze onderaan het
uitklapmenu, met de taal voluit. Het afrekenen en de bedanktpagina dragen een
eigen, kale balk; daar staat de knop rechts naast het logo. De keuze blijft
bewaard terwijl je doorklikt. Wil je iemand rechtstreeks de Engelse versie
sturen, zet dan `?taal=en` achter de link.

Alle pagina's zijn vertaald. Alle Engelse tekst staat op één plek: `EN` in
`assets/site.js`. In de HTML draagt elke tekst die mee moet een sleutel:

    <h1 data-t="home.hero.titel">Een zadel dat verder leeft</h1>

Staat die sleutel in `EN`, dan wordt de tekst vervangen; staat hij er niet, dan
blijft het Nederlands staan. Een halve vertaling laat dus nooit een leeg vak
achter. Tekst die in een attribuut zit, gaat via `data-t-attr`, bijvoorbeeld
`data-t-attr="placeholder:drop.telefoon"`. Tekst die in JavaScript opgebouwd
wordt gaat via `t('sleutel', 'het Nederlands')`; moet er iets in de zin
ingevuld worden, dan mag dat met accolades: `t('product.fotonr', 'Foto {n} van
{naam}', { n: 2, naam })`.

Wat per tas ingevuld wordt — naam, herkomst, kleur, afmetingen, verhaal,
kenmerken — staat in de databank en heeft daar een tweede veld. Dat vul je in
op de beheerpagina, in het dichtgeklapte blok "Engelse versie". Laat je een
veld leeg, dan toont de Engelse site het Nederlands.

Pagina's die hun tekst uit de databank halen — de collectie, de startpagina,
de productpagina, het mandje — worden bij een taalwissel opnieuw getekend. Dat
gebeurt op het signaal `taal:gewisseld`.

## Bestellingen en betaling

Online betalen loopt via **Mollie**, met Bancontact als voornaamste knop (vaste
kost per transactie in plaats van een percentage — op een tas van 450 euro
scheelt dat pakweg zes euro tegenover een kaartbetaling).

De keten: `bestellen.html` roept de edge function `bestelling` aan → die
herberekent prijs, voorraad en verzendkost uit de database, bewaart de
bestelling en start een Mollie-betaling → de klant betaalt → Mollie roept
`mollie-webhook` aan → die zet de bestelling op betaald en de voorraad op 0.

Prijzen komen nooit uit de browser. Wat de klant meestuurt is enkel welke tas
en hoeveel; al de rest wordt op de server nagerekend.

Staat `BETAAL_ENDPOINT` in `assets/site.js` leeg, dan valt het afrekenen terug
op **overschrijving**: de klant krijgt bestelnummer, IBAN en bedrag te zien en
kan met één klik een bevestigingsmail sturen. Handig zolang het Mollie-account
nog niet goedgekeurd is.

### Bevestigingsmail — aangesloten, wacht op twee secrets

De mail staat in `supabase/functions/mollie-webhook/mail.ts` en wordt verstuurd
door de webhook, dus pas wanneer Mollie bevestigt dat er betaald is. Daarom mag
hij "bedankt voor je aankoop" zeggen — bij het bestellen alleen is er nog niets
afgerekend. Mollie herhaalt zijn oproep bij een fout, maar de webhook stopt dan
al op status `betaald`: de klant krijgt de mail één keer.

Zolang de secret `MAIL_WACHTWOORD` leeg is, vertrekt er niets en loopt een
bestelling gewoon door. Vul je hem in, dan staat de mail meteen aan.

Afhalen in het atelier krijgt een andere zin dan verzenden — beide staan
bovenaan in `mail.ts`, bij `bericht`.

Hij vertrekt via de gewone mailbox, met Gmail als postbode — geen aparte
maildienst. Nodig zijn twee secrets: `MAIL_GEBRUIKER` (het Gmail-adres) en
`MAIL_WACHTWOORD` (een **app-wachtwoord**, niet je gewone wachtwoord). Zo'n
app-wachtwoord maak je bij Google > Beveiliging > App-wachtwoorden; daarvoor
moet tweestapsverificatie aanstaan.

Wil je dat er `karolien@tuigtassenhertogs.be` als afzender staat in plaats van
het Gmail-adres, voeg dat adres dan in Gmail toe bij Instellingen > Accounts >
"E-mail versturen als". Google stuurt een bevestigingscode naar dat adres, en
die komt via de Email Routing in je Gmail terecht. Daarna zet je het adres in
de secret `MAIL_VAN`.

Gmail laat een paar honderd mails per dag toe — ruim voldoende. Loopt het ooit
vast in spamfilters, dan is een echte maildienst (Resend, Postmark) het
alternatief; dan verandert enkel `stuurBevestiging` in de edge function.

`ORDER_ENDPOINT` (bv. een Formspree-URL) stuurt elke bestelling ook nog eens als
JSON naar je door. Bij een Mollie-betaling heb je dat niet nodig — die staat al
in de database en op de beheerpagina.

### Opzetten

1. SQL Editor: `01-schema.sql`, `02-tassen.sql`, `03-fotos.sql`, `04-bestellingen.sql`,
   `05-sfeerbeelden.sql`, `07-promo.sql`, `08-prijs-verbergen.sql`,
   `09-tascode.sql`.
2. Supabase > Edge Functions > Secrets: `MOLLIE_API_KEY` (test_ of live_) en
   `SITE_URL` = `https://tuigtassenhertogs.be` — de basis-URL van de site,
   zonder pad en zonder schuine streep achteraan. Mollie plakt daar zelf
   `/bedankt.html?ref=…` achter; klopt die URL niet, dan weigert Mollie de
   betaling. (Voor de bevestigingsmail komen daar later `MAIL_GEBRUIKER` en
   `MAIL_WACHTWOORD` bij.)
3. Functions deployen:
   `npx supabase functions deploy bestelling --no-verify-jwt`
   `npx supabase functions deploy mollie-webhook --no-verify-jwt`
   Die `--no-verify-jwt` moet erbij: bezoekers zijn niet aangemeld, en Mollie
   al helemaal niet.
4. `BETAAL_ENDPOINT` in `assets/site.js` invullen.

Ziet de klant "De betaling kon niet gestart worden", dan heeft Mollie zelf
geweigerd. De reden staat in de console van de browser, en voluit in Supabase >
Edge Functions > `bestelling` > Logs. Meestal is het één van drie: het
Mollie-account is nog niet goedgekeurd, de secret `SITE_URL` of
`MOLLIE_API_KEY` ontbreekt, of het bedrag ligt onder het minimum van de
betaalmethode.

De webhook moet van buitenaf bereikbaar zijn, dus testen met Mollie werkt niet
tegen een server op je eigen machine. Zet de site eerst online, of test met een
tunnel.

## Online zetten

Er zijn twee omgevingen, elk op een eigen branch en een eigen host:

| branch | host | adres | wat het is |
| --- | --- | --- | --- |
| `main` | Cloudflare Pages | tuigtassenhertogs.be | de echte site |
| `preview` | Vercel | tuigtassen-karolien.vercel.app | proefversie |

Elke push naar `main` gaat vanzelf live op het domein. Karolien werkt op
`preview` en ziet haar wijzigingen op de Vercel-link; is het goed, dan gaat
`preview` naar `main` en staat het op de site.

Houd `preview` na elke merge gelijk met `main`. Groeien ze uit elkaar en
wijzigt elke kant dezelfde regel, dan geeft de volgende merge een conflict.

De webshop zelf hoort op Cloudflare te blijven: het gratis plan van Vercel
verbiedt commercieel gebruik. Vandaar dat het domein daar niet naar wijst.

Instellingen in Cloudflare Pages:

- Production branch: `main` — staat dit per ongeluk op `preview`, dan zet elke
  proefwijziging zichzelf rechtstreeks op de echte site
- Build command: `mkdir -p dist && cp -r *.html assets dist/`
- Build output directory: `dist`

Er is geen bouwstap nodig voor de site zelf; dat commando dient enkel om
`ontwerpen/` en `supabase/` niet mee te publiceren. Voeg je later een map toe
die wél online moet, zet ze dan mee in die `cp`-regel.

Het domein staat bij EasyHost, met de nameservers naar Cloudflare. Daar loopt
ook Email Routing: `karolien@tuigtassenhertogs.be` stuurt door naar Gmail.

Let op: een gratis Supabase-project gaat slapen na een week zonder activiteit.
Een dagelijkse ping op de REST-URL houdt het wakker; die staat in de repo als
`.github/workflows/supabase-wakker.yml` en draait op GitHub Actions. Je kan hem
ook met de hand starten via het tabblad Actions op GitHub.

GitHub zet geplande workflows stil in een repo waar 60 dagen niets gebeurt. Je
krijgt daar een mail over en kan hem met één klik weer aanzetten. Wordt de site
lang niet aangeraakt, zet de ping dan bij een externe dienst (cron-job.org) die
daar geen last van heeft.

Slaapt het project toch, dan blijft de site werken — de collectie valt terug op
de ingebouwde lijst in `site.js` — maar bestellen en het beheer liggen plat.

## Beheerpagina

`admin.html` — niet in het menu, wel publiek bereikbaar. Zonder account kan je
er niets: de database weigert elke wijziging van wie niet aangemeld is.
Gebruikers beheer je in Supabase onder Authentication.

Daar bewerk je de tassen (naam, prijs, voorraad, verhaal, kenmerken, foto's),
wissel je de sfeerbeelden op de pagina's, en zie je de laatste vijftig
bestellingen met adres en status.

## Zoekmachines

De zes gewone pagina's mogen gevonden worden. Het beheerscherm, het mandje en
de bevestiging na een bestelling niet: die dragen elk een `noindex` in hun
`<head>`, en staan ook in `robots.txt`. Allebei, want `robots.txt` vraagt een
zoekmachine enkel om niet te kijken — `noindex` houdt de pagina echt uit de
resultaten.

De proefversie op Vercel is een tweede, publiek bereikbare kopie van dezelfde
site. Zonder maatregel zou die mee in de zoekresultaten komen en met het echte
adres concurreren. `vercel.json` stuurt daarom bij elk antwoord een
`X-Robots-Tag: noindex` mee. Dat bestand doet niets bij Cloudflare, dus de
echte site heeft er geen last van.

Wil je later een sitemap, dan hoort die op `tuigtassenhertogs.be/sitemap.xml`
en mag hij enkel die zes pagina's bevatten plus de productpagina's.

## Nog te doen voor livegang

- [ ] Rest van `CONTACT`: mailadres, btw-nummer, IBAN, socials — telefoon en
      gemeente staan er wel al in
- [ ] Eigen foto's voor de hero, het atelier en het portret — die staan nog
      op de AI-beelden uit de ontwerpen. Dat gaat nu via de beheerpagina onder
      Sfeerbeelden, niet meer via de code. De tassenfoto's zijn wel echt.
- [ ] "Van zadel naar tas" op `collectie.html` toont nog drie voor-en-na-
      paren van tassen die niet meer in de collectie staan. Vervangen door
      echte voor-en-na-foto's, of het blok weglaten.
- [ ] Kleur, afmetingen en beslag per tas in `PRODUCTS` (staan nu leeg en
      worden daarom niet getoond op de productpagina)
- [ ] Twee open plekken in de FAQ op `collectie.html`: de naam van de winkel
      die de tassen verkoopt, en wat er precies over cadeaubonnen moet staan
- [ ] Verkoopsvoorwaarden + privacyverklaring (verplicht bij online verkoop in België)
