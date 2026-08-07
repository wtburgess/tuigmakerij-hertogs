-- Tuigtassen Hertogs — databaseschema, fase 1: producten en hun foto's.
--
-- Uitvoeren in Supabase: SQL Editor > New query > plakken > Run.
-- Dit script mag meermaals draaien; het doet niets dubbel.

-- ---------------------------------------------------------------- producten
create table if not exists producten (
  id          text primary key,          -- komt in de URL: product.html?id=waegemans
  naam        text not null,
  prijs       numeric(10, 2) not null check (prijs >= 0),
  voorraad    integer not null default 1 check (voorraad >= 0),
  nieuw       boolean not null default false,
  herkomst    text not null default '',
  kleur       text not null default '',
  afmetingen  text not null default '',
  beslag      text not null default '',
  verhaal     text not null default '',
  kenmerken   text[] not null default '{}',
  volgorde    integer not null default 0, -- bepaalt de plek in de collectie
  aangemaakt  timestamptz not null default now()
);

-- ------------------------------------------------------------------ foto's
-- Aparte tabel in plaats van een kolom met een lijst: zo kan je een foto
-- verslepen, vervangen of verwijderen zonder de rest aan te raken.
create table if not exists productfotos (
  id         uuid primary key default gen_random_uuid(),
  product_id text not null references producten(id) on delete cascade,
  pad        text not null,              -- pad in de opslagmap 'productfotos'
  volgorde   integer not null default 0  -- 0 = de foto op de collectiekaart
);

create index if not exists productfotos_op_product
  on productfotos (product_id, volgorde);

-- -------------------------------------------------------------- toegang
-- Iedereen mag lezen (de site toont de collectie aan bezoekers).
-- Alleen wie ingelogd is mag wijzigen. Er is één gebruiker — Karolien — dus
-- een aparte rollentabel zou hier alleen maar in de weg zitten.
alter table producten     enable row level security;
alter table productfotos  enable row level security;

drop policy if exists "iedereen leest producten" on producten;
create policy "iedereen leest producten"
  on producten for select using (true);

drop policy if exists "ingelogd beheert producten" on producten;
create policy "ingelogd beheert producten"
  on producten for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

drop policy if exists "iedereen leest fotos" on productfotos;
create policy "iedereen leest fotos"
  on productfotos for select using (true);

drop policy if exists "ingelogd beheert fotos" on productfotos;
create policy "ingelogd beheert fotos"
  on productfotos for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- --------------------------------------------------------------- opslag
-- Map voor de productfoto's. Publiek leesbaar, alleen ingelogd schrijfbaar.
insert into storage.buckets (id, name, public)
values ('productfotos', 'productfotos', true)
on conflict (id) do nothing;

drop policy if exists "iedereen bekijkt productfotos" on storage.objects;
create policy "iedereen bekijkt productfotos"
  on storage.objects for select
  using (bucket_id = 'productfotos');

drop policy if exists "ingelogd beheert productfotos" on storage.objects;
create policy "ingelogd beheert productfotos"
  on storage.objects for all
  using (bucket_id = 'productfotos' and auth.role() = 'authenticated')
  with check (bucket_id = 'productfotos' and auth.role() = 'authenticated');
