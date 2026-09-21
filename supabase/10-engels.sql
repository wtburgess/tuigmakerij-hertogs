-- Tuigtassen Hertogs — Engelse tekst bij een tas.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Mag meermaals draaien.
--
-- De vaste teksten van de site staan in `EN` in assets/site.js. Wat Karolien
-- zelf per tas invult staat in de databank, en daar hoort dus een tweede veld
-- bij. Elk Engels veld mag leeg blijven: dan toont de site gewoon het
-- Nederlands. Zo kan de vertaling stuk voor stuk groeien zonder dat er ooit
-- een leeg vak op de productpagina verschijnt.
--
-- `beslag` krijgt er geen: dat veld staat niet op de beheerpagina en wordt
-- nergens getoond.

alter table producten
  add column if not exists naam_en       text not null default '',
  add column if not exists herkomst_en   text not null default '',
  add column if not exists kleur_en      text not null default '',
  add column if not exists afmetingen_en text not null default '',
  add column if not exists verhaal_en    text not null default '',
  add column if not exists kenmerken_en  text[] not null default '{}';
