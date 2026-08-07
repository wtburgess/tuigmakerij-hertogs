# Tuigtassen Hertogs — website

Statische site. Geen build, geen framework, geen server nodig.
Lokaal bekijken: `python3 -m http.server` in deze map, dan http://localhost:8000

## Wat waar aanpassen

Bijna alles wat Karolien zelf wil wijzigen staat bovenaan in **`assets/site.js`**:

| Wat | Waar |
|---|---|
| Telefoon, mail, WhatsApp, adres, IBAN, BTW, socials | `CONTACT` |
| Foto's (alle, één plek) | `IMG` — vervang de URL door bv. `'foto/ruitertas-1.jpg'` |
| Tassen: naam, prijs, maten, verhaal, voorraad | `PRODUCTS` |
| Verzendkosten per land | `LEVERING` |

Een tas verkocht? Zet `voorraad: 0` — hij blijft zichtbaar met "Verkocht" erop
en de knop wordt "Vraag naar iets gelijkaardigs".

Een tas toevoegen? Kopieer een blok in `PRODUCTS`, geef het een uniek `id`.
Hij verschijnt vanzelf op de collectiepagina.

## Bestellingen

Betaling gebeurt via **overschrijving**: de klant plaatst de bestelling, krijgt
meteen bestelnummer + IBAN + bedrag te zien en kan met één klik een
bevestigingsmail versturen. Geen kaartgegevens, geen betaalprovider, niets dat
maandelijks geld kost.

Wil je bestellingen automatisch binnenkrijgen in plaats van via de mail van de
klant: zet een endpoint in `ORDER_ENDPOINT` (bv. een Formspree-URL). Elke
bestelling wordt er dan als JSON naartoe gestuurd.

Wil je later online betalen (Bancontact/Payconiq): dat vraagt een account bij
Mollie of Stripe en een klein stukje server. De bestelgegevens zitten al in de
juiste vorm klaar in `bestelform`'s submit-handler.

## Nog te doen voor livegang

- [ ] Rest van `CONTACT`: mailadres, btw-nummer, IBAN, socials — telefoon en
      gemeente staan er wel al in
- [ ] Eigen foto's in `IMG` — de huidige zijn de AI-beelden uit de ontwerpen
- [ ] Kleur, afmetingen en beslag per tas in `PRODUCTS` (staan nu leeg en
      worden daarom niet getoond op de productpagina)
- [ ] Twee open plekken in de FAQ op `collectie.html`: de naam van de winkel
      die de tassen verkoopt, en wat er precies over cadeaubonnen moet staan
- [ ] Verkoopsvoorwaarden + privacyverklaring (verplicht bij online verkoop in België)
