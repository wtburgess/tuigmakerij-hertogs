-- Tuigtassen Hertogs — bestellingen en betalingen.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Mag meermaals draaien.

create table if not exists bestellingen (
  id           uuid primary key default gen_random_uuid(),
  referentie   text not null unique,        -- TH-2026-A3F9, komt op het rekeninguittreksel
  status       text not null default 'open' check (status in ('open', 'betaald', 'mislukt')),
  mollie_id    text,                        -- tr_xxx, om terug te koppelen aan Mollie
  klant        jsonb not null,              -- naam, mail, telefoon, adres, bericht
  regels       jsonb not null,              -- [{id, naam, aantal, stukprijs, bedrag}]
  levering     text not null,
  verzendkost  numeric(10, 2) not null default 0,
  totaal       numeric(10, 2) not null,
  aangemaakt   timestamptz not null default now(),
  betaald_op   timestamptz
);

create index if not exists bestellingen_op_mollie on bestellingen (mollie_id);

-- ---------------------------------------------------------------- toegang
-- Hier staan naam, adres en mailadres van klanten in. Bezoekers mogen dus
-- niets: lezen doet alleen Karolien, schrijven doet alleen de edge function
-- (die draait met de service-role-sleutel en gaat langs RLS heen).
alter table bestellingen enable row level security;

drop policy if exists "ingelogd leest bestellingen" on bestellingen;
create policy "ingelogd leest bestellingen"
  on bestellingen for select
  using (auth.role() = 'authenticated');

drop policy if exists "ingelogd beheert bestellingen" on bestellingen;
create policy "ingelogd beheert bestellingen"
  on bestellingen for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
