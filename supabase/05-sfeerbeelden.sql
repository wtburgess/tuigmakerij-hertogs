-- Tuigtassen Hertogs — databaseschema, fase 2: de sfeerbeelden.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Dit script mag meermaals draaien; het doet niets dubbel.
--
-- De foto's op de pagina's zelf stonden vast in de lijst IMG in
-- assets/site.js. Een beeld vervangen vroeg dus een codewijziging. Deze tabel
-- zet er een laag overheen: staat er hier een rij voor een naam, dan wint die.
-- Staat er niets, dan blijft IMG gelden. Zo werkt de site ook gewoon door als
-- de databank onbereikbaar is.

create table if not exists sitefotos (
  naam       text primary key,           -- komt overeen met data-img in de HTML
  pad        text not null,              -- pad in de opslagmap 'productfotos'
  bijgewerkt timestamptz not null default now()
);

-- -------------------------------------------------------------- toegang
-- Zelfde afspraak als bij de producten: iedereen leest, alleen Karolien
-- schrijft. Bezoekers moeten de foto's kunnen ophalen zonder aan te melden.
alter table sitefotos enable row level security;

drop policy if exists "iedereen leest sitefotos" on sitefotos;
create policy "iedereen leest sitefotos"
  on sitefotos for select using (true);

drop policy if exists "ingelogd beheert sitefotos" on sitefotos;
create policy "ingelogd beheert sitefotos"
  on sitefotos for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- De bestanden zelf gaan in de bestaande bucket 'productfotos', onder de map
-- 'sfeer/'. Een tweede bucket zou een tweede set regels vragen zonder dat er
-- iets mee opgelost wordt — de toegang is voor beide precies dezelfde.
