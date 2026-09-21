-- Tuigtassen Hertogs — een vaste code per tas.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Mag meermaals draaien: tassen die al een code hebben, houden ze.
--
-- Het bestelnummer (TH-2026-A3F9) zegt wélke bestelling er betaald is, maar
-- niet welke tas. Deze code hangt aan de tas zelf en blijft altijd dezelfde,
-- ook als de volgorde in de collectie verschuift. Ze staat op de kaart in de
-- collectie, op de productpagina, en ze gaat mee in de omschrijving die Mollie
-- op het rekeninguittreksel zet.

alter table producten
  add column if not exists code text;

-- Twee tassen met dezelfde code zou het hele doel onderuithalen. Leeg mag wel:
-- een tas zonder code valt gewoon terug op haar plaats in de collectie.
create unique index if not exists producten_code_uniek
  on producten (code) where code is not null;

-- Tassen die er al staan krijgen meteen een code, op volgorde van de
-- collectie. Er wordt verder geteld vanaf het hoogste nummer dat al bestaat,
-- zodat een tweede keer draaien nooit een bestaande code opnieuw uitdeelt.
with volgend as (
  select coalesce(max((substring(code from '^TH-([0-9]+)$'))::int), 0) as vanaf
    from producten
   where code ~ '^TH-[0-9]+$'
),
genummerd as (
  select id, row_number() over (order by volgorde, id) as n
    from producten
   where code is null
)
update producten p
   set code = 'TH-' || lpad((v.vanaf + g.n)::text, 3, '0')
  from genummerd g, volgend v
 where p.id = g.id;
