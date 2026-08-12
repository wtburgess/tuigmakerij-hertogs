-- Tuigtassen Hertogs — telefoonnummers voor de verwittiging bij een nieuwe collectie.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Mag meermaals draaien.

create table if not exists inschrijvingen (
  id          uuid primary key default gen_random_uuid(),
  telefoon    text not null check (char_length(telefoon) between 6 and 30),
  aangemaakt  timestamptz not null default now()
);

-- ---------------------------------------------------------------- toegang
-- Bezoekers mogen hun nummer achterlaten, maar de lijst niet inkijken:
-- enkel invoegen, geen select. Uitlezen doet Karolien ingelogd.
alter table inschrijvingen enable row level security;

drop policy if exists "iedereen schrijft in" on inschrijvingen;
create policy "iedereen schrijft in"
  on inschrijvingen for insert
  with check (char_length(telefoon) between 6 and 30);

drop policy if exists "ingelogd leest inschrijvingen" on inschrijvingen;
create policy "ingelogd leest inschrijvingen"
  on inschrijvingen for select
  using (auth.role() = 'authenticated');

drop policy if exists "ingelogd beheert inschrijvingen" on inschrijvingen;
create policy "ingelogd beheert inschrijvingen"
  on inschrijvingen for delete
  using (auth.role() = 'authenticated');
