-- VALDY STORE: database stok online Supabase
-- Jalankan seluruh file ini di Supabase > SQL Editor > New query.

create table if not exists public.product_stock (
  product_id text primary key,
  product_name text not null,
  stock integer null check (stock is null or stock >= 0),
  updated_at timestamptz not null default now()
);

alter table public.product_stock enable row level security;

drop policy if exists "Public can read product stock" on public.product_stock;
create policy "Public can read product stock"
  on public.product_stock for select to anon, authenticated using (true);

grant select on public.product_stock to anon, authenticated;

-- Stok NULL berarti belum diatur. Konflik tidak akan menimpa stok yang sudah ada.
insert into public.product_stock (product_id, product_name, stock) values
  ('product-001', 'Netflix Premium', 5),
  ('product-002', 'Netflix Premium', NULL),
  ('product-003', 'Canva Pro', NULL),
  ('product-004', 'YouTube Premium', NULL),
  ('product-005', 'Spotify Premium', NULL),
  ('product-006', 'VIU Premium', NULL),
  ('product-007', 'Alight Motion Premium', NULL),
  ('product-008', 'Gemini Plus', NULL),
  ('product-009', 'CapCut Pro 7 Hari', NULL),
  ('product-010', 'CapCut Pro 1 Bulan', NULL),
  ('product-011', 'ChatGPT Plus', NULL),
  ('product-012', 'MLBB Weekly Diamond Pass', NULL),
  ('product-013', 'MLBB Starlight Basic', NULL),
  ('product-014', 'MLBB Starlight Premium', NULL),
  ('product-015', 'MLBB 50+50 Diamond', NULL),
  ('product-016', 'MLBB 150+150 Diamond', NULL),
  ('product-017', 'MLBB 250+250 Diamond', NULL),
  ('product-018', 'MLBB 500+500 Diamond', NULL),
  ('product-019', 'MLBB 5 Diamond', NULL),
  ('product-020', 'MLBB 17+2 Diamond', NULL),
  ('product-021', 'MLBB 25+3 Diamond', NULL),
  ('product-022', 'MLBB 40+4 Diamond', NULL),
  ('product-023', 'MLBB 53+6 Diamond', NULL),
  ('product-024', 'MLBB 77+8 Diamond', NULL),
  ('product-025', 'MLBB 154+16 Diamond', NULL),
  ('product-026', 'MLBB 217+23 Diamond', NULL),
  ('product-027', 'MLBB 256+40 Diamond', NULL),
  ('product-028', 'MLBB 367+41 Diamond', NULL),
  ('product-029', 'MLBB 503+65 Diamond', NULL),
  ('product-030', 'MLBB 774+101 Diamond', NULL),
  ('product-031', 'MLBB 1708+302 Diamond', NULL),
  ('product-032', 'MLBB 4003+827 Diamond', NULL),
  ('product-033', 'Free Fire 5 Diamond', NULL),
  ('product-034', 'Free Fire 50 Diamond', NULL),
  ('product-035', 'Free Fire 70 Diamond', NULL),
  ('product-036', 'Free Fire 140 Diamond', NULL),
  ('product-037', 'Free Fire 355 Diamond', NULL),
  ('product-038', 'Free Fire 720 Diamond', NULL),
  ('product-039', 'Roblox 100 Robux', NULL),
  ('product-040', 'Roblox 200 Robux', NULL),
  ('product-041', 'Roblox 300 Robux', NULL),
  ('product-042', 'Roblox 400 Robux', NULL),
  ('product-043', 'Roblox 500 Robux', NULL),
  ('product-044', 'Roblox 1000 Robux', NULL),
  ('product-045', 'Roblox 1500 Robux', NULL),
  ('product-046', 'Roblox 2000 Robux', NULL),
  ('product-047', 'Roblox 3000 Robux', NULL),
  ('product-048', 'PUBG Mobile', NULL),
  ('product-049', 'PUBG Mobile2', NULL),
  ('product-050', 'Valorant', NULL),
  ('product-051', 'Telkomsel Flash 7GB', NULL),
  ('product-052', 'Telkomsel Flash 10GB', NULL),
  ('product-053', 'Telkomsel Flash 15GB', NULL),
  ('product-054', 'Telkomsel Flash 20GB', NULL),
  ('product-055', 'Telkomsel Flash 30GB', NULL),
  ('product-056', 'Telkomsel Flash 45GB', NULL),
  ('product-057', 'Telkomsel Flash 50GB', NULL),
  ('product-058', 'Telkomsel Flash 75GB', NULL),
  ('product-059', 'Telkomsel Flash 100GB', NULL),
  ('product-060', 'Indosat Freedom 3GB', NULL),
  ('product-061', 'Indosat Freedom 7GB', NULL),
  ('product-062', 'Indosat Freedom 9GB', NULL),
  ('product-063', 'Indosat Freedom 11GB', NULL),
  ('product-064', 'Indosat Freedom 16GB', NULL),
  ('product-065', 'Indosat Freedom 18GB', NULL),
  ('product-066', 'Indosat Freedom 20GB', NULL),
  ('product-067', 'Indosat Freedom 25GB', NULL),
  ('product-068', 'Indosat Freedom 42GB', NULL),
  ('product-069', 'Indosat Sensasi 50GB', NULL),
  ('product-070', 'Indosat Sensasi 100GB', NULL),
  ('product-071', 'XL Flexmax 7GB', NULL),
  ('product-072', 'XL Flexmax 10GB', NULL),
  ('product-073', 'XL Flexmax 22GB', NULL),
  ('product-074', 'XL Flexmax 28GB', NULL),
  ('product-075', 'XL Flexmax 36GB', NULL),
  ('product-076', 'XL Flexmax 46GB', NULL),
  ('product-077', 'XL Flexmax 65GB', NULL),
  ('product-078', 'XL Flexmax 100GB', NULL),
  ('product-079', 'Axis Bronet 3GB', NULL),
  ('product-080', 'Axis Bronet 7GB', NULL),
  ('product-081', 'Axis Bronet 10GB', NULL),
  ('product-082', 'Axis Bronet 15GB', NULL),
  ('product-083', 'Axis Bronet 26GB', NULL),
  ('product-084', 'Axis Bronet 30GB', NULL),
  ('product-085', 'Axis Bronet 40GB', NULL),
  ('product-086', 'Axis Bronet 65GB', NULL),
  ('product-087', 'Axis Bronet 100GB', NULL),
  ('product-088', 'Axis Bronet 150GB', NULL),
  ('product-089', 'Axis Bronet 250GB', NULL),
  ('product-090', 'Tri Happy 3GB', NULL),
  ('product-091', 'Tri Happy 7GB', NULL),
  ('product-092', 'Tri Happy 11GB', NULL),
  ('product-093', 'Tri Happy 14GB', NULL),
  ('product-094', 'Tri Happy 18GB', NULL),
  ('product-095', 'Tri Happy 30GB', NULL),
  ('product-096', 'Tri Happy 32GB', NULL),
  ('product-097', 'Tri Happy 42GB', NULL),
  ('product-098', 'Tri Happy 45GB', NULL),
  ('product-099', 'Tri Happy 55GB', NULL),
  ('product-100', 'Tri Happy 100GB', NULL),
  ('product-101', 'Tri Happy 130GB', NULL),
  ('product-102', 'Tri AON 4GB', NULL),
  ('product-103', 'Tri AON 6GB', NULL),
  ('product-104', 'Tri AON 10GB', NULL),
  ('product-105', 'Tri AON 14GB', NULL),
  ('product-106', 'Tri AON 26GB', NULL)
on conflict (product_id) do update
set product_name = excluded.product_name;

-- Pemotongan stok atomik: tidak bisa membuat stok minus saat klik bersamaan.
create or replace function public.decrement_product_stock(p_product_id text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_remaining integer;
begin
  update public.product_stock
     set stock = stock - 1,
         updated_at = now()
   where product_id = p_product_id
     and stock is not null
     and stock > 0
  returning stock into v_remaining;

  return v_remaining;
end;
$$;

revoke all on function public.decrement_product_stock(text) from public;
grant execute on function public.decrement_product_stock(text) to anon, authenticated;

-- Aktifkan Realtime untuk tabel stok.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'product_stock'
  ) then
    alter publication supabase_realtime add table public.product_stock;
  end if;
end $$;

-- Atur stok nyata melalui Table Editor, misalnya:
-- update public.product_stock set stock = 10 where product_id = 'product-001';
