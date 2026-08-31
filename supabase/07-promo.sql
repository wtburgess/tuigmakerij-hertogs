-- Tuigtassen Hertogs — promoprijs.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Mag meermaals draaien.
--
-- `prijs` blijft altijd het bedrag dat de klant betaalt — daar rekent de
-- edge function ook mee. `oude_prijs` is enkel om te tonen: staat ze hoger dan
-- de prijs, dan verschijnt ze doorstreept ernaast. Leeg = geen promo.

alter table producten
  add column if not exists oude_prijs numeric(10, 2) check (oude_prijs >= 0);
