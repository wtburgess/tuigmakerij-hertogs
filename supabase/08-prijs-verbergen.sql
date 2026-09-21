-- Tuigtassen Hertogs — prijs verbergen bij een verkochte tas.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Mag meermaals draaien.
--
-- Staat een tas op verkocht, dan hoeft haar prijs er niet meer bij te staan.
-- `prijs` blijft gewoon bewaard — de bestellingen die er al zijn rekenen
-- ermee, en zet je de voorraad weer op 1, dan staat ze er meteen opnieuw.
-- Dit vinkje zegt enkel: toon ze niet. Het werkt alleen bij voorraad 0, zodat
-- een tas die nog te koop is nooit zonder prijs in de collectie komt.

alter table producten
  add column if not exists prijs_verbergen boolean not null default false;
