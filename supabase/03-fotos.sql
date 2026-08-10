-- Tuigtassen Hertogs — de foto's van de twee tassen koppelen aan de opslag.
--
-- Vóór dit script: upload de bestanden uit assets/foto/ naar de bucket
-- 'productfotos' (Supabase > Storage > productfotos > Upload files).
-- De namen hieronder moeten exact overeenkomen met de bestandsnamen.
--
-- Volgorde 0 = de foto op de collectiekaart. Mag meermaals draaien.

delete from productfotos where product_id in ('waegemans', 'barnsby');

insert into productfotos (product_id, pad, volgorde) values
  ('waegemans', 'waegemans-1.jpg', 0),
  ('waegemans', 'waegemans-3.jpg', 1),
  ('waegemans', 'waegemans-4.jpg', 2),
  ('waegemans', 'waegemans-2.jpg', 3),
  ('barnsby',   'barnsby-1.jpg',   0),
  ('barnsby',   'barnsby-3.jpg',   1),
  ('barnsby',   'barnsby-5.jpg',   2),
  ('barnsby',   'barnsby-4.jpg',   3),
  ('barnsby',   'barnsby-2.jpg',   4),
  ('barnsby',   'barnsby-6.jpg',   5);
