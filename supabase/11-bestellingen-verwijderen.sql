-- Tuigtassen Hertogs — bestellingen verwijderen vanop de beheerpagina.
--
-- Bedoeld voor testbestellingen. Een echte bestelling laat je beter staan:
-- verwijderen hier betaalt niets terug bij Mollie en zet de tas niet terug
-- in voorraad.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Mag meermaals draaien.

drop policy if exists "ingelogd verwijdert bestellingen" on bestellingen;
create policy "ingelogd verwijdert bestellingen"
  on bestellingen for delete
  using (auth.role() = 'authenticated');
