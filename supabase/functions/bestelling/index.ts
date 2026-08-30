// Tuigtassen Hertogs — een bestelling aannemen en de betaling starten.
//
// Alles wat met geld te maken heeft, wordt hier opnieuw berekend. Wat de
// browser meestuurt is enkel: welke tas, hoeveel, en de klantgegevens. Prijzen,
// voorraad en verzendkosten komen uit de database — anders kan iemand met de
// ontwikkelaarsconsole een tas van 450 euro voor 1 euro bestellen.

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

// Zelfde tabel als LEVERING in assets/site.js. Staat hier apart omdat de
// browser deze bedragen niet mag bepalen. Pas je er één aan, pas dan beide.
const LEVERING: Record<string, { label: string; kost: number; adres: boolean }> = {
  be:     { label: 'Verzenden naar België',    kost: 0,  adres: true },
  nl:     { label: 'Verzenden naar Nederland', kost: 15, adres: true },
  de:     { label: 'Verzenden naar Duitsland', kost: 15, adres: true },
  fr:     { label: 'Verzenden naar Frankrijk', kost: 15, adres: true },
  lu:     { label: 'Verzenden naar Luxemburg', kost: 15, adres: true },
  afhaal: { label: 'Afhalen in het atelier',   kost: 0,  adres: false }
};

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const MOLLIE_KEY   = Deno.env.get('MOLLIE_API_KEY')!;
// De pagina waar de klant na het betalen terechtkomt, bv.
// https://tuigtassenhertogs.be/bedankt.html
const SITE_URL     = Deno.env.get('SITE_URL')!;

const db = (pad: string, opties: RequestInit = {}) =>
  fetch(`${SUPABASE_URL}/rest/v1/${pad}`, {
    ...opties,
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      ...(opties.headers ?? {})
    }
  });

const fout = (bericht: string, code = 400) =>
  new Response(JSON.stringify({ fout: bericht }), {
    status: code,
    headers: { ...CORS, 'Content-Type': 'application/json' }
  });

const tekst = (waarde: unknown, max: number) =>
  typeof waarde === 'string' ? waarde.trim().slice(0, max) : '';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return fout('Alleen POST', 405);

  let body: any;
  try { body = await req.json(); } catch { return fout('Ongeldig verzoek'); }

  // ------------------------------------------------------------- controle
  const levering = LEVERING[body?.levering];
  if (!levering) return fout('Onbekende leveringswijze');

  const gevraagd: { id: string; aantal: number }[] = Array.isArray(body?.regels) ? body.regels : [];
  if (!gevraagd.length) return fout('Lege bestelling');
  if (gevraagd.length > 20) return fout('Te veel regels');

  const klant = {
    naam:     tekst(body?.klant?.naam, 120),
    email:    tekst(body?.klant?.email, 160),
    telefoon: tekst(body?.klant?.telefoon, 40),
    adres:    tekst(body?.klant?.adres, 300),
    bericht:  tekst(body?.klant?.bericht, 1000)
  };
  if (!klant.naam) return fout('Naam ontbreekt');
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(klant.email)) return fout('Ongeldig e-mailadres');
  if (levering.adres && !klant.adres) return fout('Adres ontbreekt');

  // --------------------------------------------------- prijzen en voorraad
  const ids = [...new Set(gevraagd.map((r) => String(r.id)))];
  const antwoord = await db(`producten?select=id,naam,prijs,voorraad&id=in.(${ids.map(encodeURIComponent).join(',')})`);
  if (!antwoord.ok) return fout('De collectie kon niet gelezen worden', 500);
  const tassen: any[] = await antwoord.json();

  const regels = [];
  for (const r of gevraagd) {
    const tas = tassen.find((t) => t.id === r.id);
    if (!tas) return fout('Deze tas bestaat niet meer');
    const aantal = Math.floor(Number(r.aantal));
    if (!Number.isFinite(aantal) || aantal < 1) return fout('Ongeldig aantal');
    // Elk stuk is uniek; wie te laat is, krijgt dit netjes te zien in plaats
    // van een betaling voor iets dat al weg is.
    if (aantal > tas.voorraad) {
      return fout(tas.voorraad < 1
        ? `${tas.naam} is intussen verkocht.`
        : `Van ${tas.naam} is er nog maar ${tas.voorraad} beschikbaar.`, 409);
    }
    regels.push({
      id: tas.id, naam: tas.naam, aantal,
      stukprijs: Number(tas.prijs), bedrag: Number(tas.prijs) * aantal
    });
  }

  const totaal = regels.reduce((som, r) => som + r.bedrag, 0) + levering.kost;
  if (totaal <= 0) return fout('Bedrag klopt niet');

  // ------------------------------------------------------------ bewaren
  const referentie = 'TH-' + new Date().getFullYear() + '-' +
    crypto.randomUUID().replace(/-/g, '').slice(0, 4).toUpperCase();

  const bewaard = await db('bestellingen', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify({
      referentie, klant, regels,
      levering: levering.label,
      verzendkost: levering.kost,
      totaal
    })
  });
  if (!bewaard.ok) return fout('De bestelling kon niet bewaard worden', 500);
  const [bestelling] = await bewaard.json();

  // ------------------------------------------------------------- Mollie
  const betaling = await fetch('https://api.mollie.com/v2/payments', {
    method: 'POST',
    headers: { Authorization: `Bearer ${MOLLIE_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: { currency: 'EUR', value: totaal.toFixed(2) },
      description: `Tuigtassen Hertogs ${referentie}`,
      redirectUrl: `${SITE_URL}/bedankt.html?ref=${referentie}`,
      webhookUrl: `${SUPABASE_URL}/functions/v1/mollie-webhook`,
      metadata: { referentie },
      locale: 'nl_BE'
    })
  });

  if (!betaling.ok) {
    // De bestelling staat al in de database; markeer ze als mislukt zodat er
    // geen open bestelling blijft hangen waar niemand nog naar kijkt.
    await db(`bestellingen?id=eq.${bestelling.id}`, {
      method: 'PATCH', body: JSON.stringify({ status: 'mislukt' })
    });
    console.error('Mollie weigerde de betaling:', await betaling.text());
    return fout('De betaling kon niet gestart worden', 502);
  }

  const mollie = await betaling.json();
  await db(`bestellingen?id=eq.${bestelling.id}`, {
    method: 'PATCH', body: JSON.stringify({ mollie_id: mollie.id })
  });

  return new Response(
    JSON.stringify({ referentie, betaalUrl: mollie._links.checkout.href }),
    { headers: { ...CORS, 'Content-Type': 'application/json' } }
  );
});
