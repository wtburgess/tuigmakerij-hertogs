-- Tuigtassen Hertogs — bijhouden wat er met een bestelling nog moet gebeuren.
--
-- De kolom `status` zegt of er betaald is; die komt van Mollie en past niemand
-- met de hand aan. Deze kolom gaat over jouw werk erna: inpakken, versturen,
-- afgeven. Daarom staat ze apart.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Mag meermaals draaien.

alter table bestellingen
  add column if not exists afhandeling text not null default 'te doen';

do $$
begin
  alter table bestellingen
    add constraint bestellingen_afhandeling_check
    check (afhandeling in ('te doen', 'bezig', 'klaar'));
exception
  when duplicate_object then null;   -- stond er al
end $$;
