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

Net af? Zet `nieuw: true` en hij krijgt een groen "Nieuw"-label. Haal die regel
weg zodra hij niet meer nieuw is. Verkocht wint altijd van nieuw.

Een tas toevoegen? Kopieer een blok in `PRODUCTS`, geef het een uniek `id`.
Hij verschijnt vanzelf op de collectiepagina.

## Sfeerbeelden

De foto's op de pagina's zelf staan in de tabel `sitefotos`: één rij per plek,
met het pad in de opslagmap `productfotos/sfeer/`. Staat er voor een naam geen
rij, dan geldt `IMG` in `assets/site.js`.

Die volgorde is met opzet. De pagina tekent eerst uit `IMG` en vervangt daarna
wat gewisseld is, zodat een trage of onbereikbare databank nooit een lege
pagina oplevert — hooguit even de oude foto.

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
keuzevenster achter de knop Vervang. Verklein ze eerst tot zo'n 2000 pixels
breed: het gratis plan geeft 1 GB, en onbewerkte toestelfoto's lopen daar snel
tegenaan.

De foto's van de tassen staan hier los van — die horen bij het product zelf.

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

`ORDER_ENDPOINT` (bv. een Formspree-URL) stuurt elke bestelling ook nog eens als
JSON naar je door. Bij een Mollie-betaling heb je dat niet nodig — die staat al
in de database en op de beheerpagina.

### Opzetten

1. SQL Editor: `01-schema.sql`, `02-tassen.sql`, `03-fotos.sql`, `04-bestellingen.sql`,
   `05-sfeerbeelden.sql`.
2. Supabase > Edge Functions > Secrets: `MOLLIE_API_KEY` (test_ of live_) en
   `SITE_URL` (de basis-URL van de site, zonder schuine streep achteraan).
3. Functions deployen:
   `npx supabase functions deploy bestelling --no-verify-jwt`
   `npx supabase functions deploy mollie-webhook --no-verify-jwt`
   Die `--no-verify-jwt` moet erbij: bezoekers zijn niet aangemeld, en Mollie
   al helemaal niet.
4. `BETAAL_ENDPOINT` in `assets/site.js` invullen.

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
