// Tuigtassen Hertogs — Mollie meldt hier dat er iets met een betaling gebeurd is.
//
// Mollie stuurt enkel een id, nooit een bedrag of een status: die halen we zelf
// op bij Mollie. Zo kan niemand met een verzonnen bericht een bestelling op
// "betaald" zetten.
//
// Mollie herhaalt de oproep bij een fout, dus dit moet meermaals mogen draaien
// zonder de voorraad twee keer af te trekken. Vandaar de controle op de
// bestaande status voor er iets verandert.

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const MOLLIE_KEY   = Deno.env.get('MOLLIE_API_KEY')!;

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

Deno.serve(async (req) => {
  // Mollie verwacht altijd een 200. Een foutcode laat hem uren blijven
  // proberen, ook wanneer er niets meer te redden valt.
  const ok = () => new Response('ok');

  try {
    const formulier = await req.formData();
    const betaalId = String(formulier.get('id') ?? '');
    if (!betaalId.startsWith('tr_')) return ok();

    const antwoord = await fetch(`https://api.mollie.com/v2/payments/${betaalId}`, {
      headers: { Authorization: `Bearer ${MOLLIE_KEY}` }
    });
    if (!antwoord.ok) {
      console.error('Mollie gaf geen betaling terug:', betaalId, await antwoord.text());
      return ok();
    }
    const betaling = await antwoord.json();
    const referentie = betaling.metadata?.referentie;
    if (!referentie) return ok();

    const gevonden = await db(`bestellingen?select=*&referentie=eq.${encodeURIComponent(referentie)}`);
    const [bestelling] = await gevonden.json();
    if (!bestelling) {
      console.error('Onbekende bestelling in webhook:', referentie);
      return ok();
    }

    // Al verwerkt? Dan is dit een herhaling en doen we niets meer.
    if (bestelling.status === 'betaald') return ok();

    if (betaling.status !== 'paid') {
      // expired, canceled of failed: de tas komt weer vrij, want de voorraad
      // is nooit afgetrokken.
      if (['expired', 'canceled', 'failed'].includes(betaling.status)) {
        await db(`bestellingen?id=eq.${bestelling.id}`, {
          method: 'PATCH', body: JSON.stringify({ status: 'mislukt' })
        });
      }
      return ok();
    }

    // Klopt het bedrag met wat wij verwachtten? Zo niet, niets automatisch
    // doen — dan kijkt Karolien er zelf naar.
    if (Number(betaling.amount.value) !== Number(bestelling.totaal)) {
      console.error('Bedrag wijkt af bij', referentie, betaling.amount.value, bestelling.totaal);
      return ok();
    }

    await db(`bestellingen?id=eq.${bestelling.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'betaald', betaald_op: new Date().toISOString() })
    });

    // Voorraad afboeken. Elk stuk is uniek, dus dit zet hem meestal op 0 en
    // verschijnt de tas voortaan als "Verkocht".
    for (const regel of bestelling.regels) {
      const huidig = await db(`producten?select=voorraad&id=eq.${encodeURIComponent(regel.id)}`);
      const [tas] = await huidig.json();
      if (!tas) continue;
      await db(`producten?id=eq.${encodeURIComponent(regel.id)}`, {
        method: 'PATCH',
        body: JSON.stringify({ voorraad: Math.max(0, tas.voorraad - regel.aantal) })
      });
    }
  } catch (e) {
    console.error('Webhook liep vast:', e);
  }

  return ok();
});
