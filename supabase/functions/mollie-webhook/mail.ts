// Tuigtassen Hertogs — de bevestigingsmail naar de klant.
//
// Hij vertrekt vanuit de Mollie-webhook, dus pas wanneer de betaling
// binnen is. Daarom mag hij "bedankt voor je aankoop" zeggen: op het
// moment van bestellen is er nog niets betaald.
//
// Versturen gebeurt via Resend, een verzenddienst. Vroeger liep dit via
// Gmail met een app-wachtwoord, maar daarvoor heb je een échte mailbox op
// het eigen domein nodig, en die is er niet — er staat enkel een doorstuur.
// Met een verzenddienst mag de mail wél van karolien@tuigtassenhertogs.be
// komen: je zet twee regels in de DNS bij Cloudflare en het domein staat
// er dan officieel voor in. Dat scheelt ook spam.
//
// Nodig is één secret bij Supabase > Edge Functions > Secrets:
//   RESEND_API_KEY   de sleutel uit je Resend-account (begint met re_)
//
// Optioneel:
//   MAIL_ATELIER     waar de kopie naartoe gaat, en waarnaar de klant
//                    antwoordt. Standaard karolien@tuigtassenhertogs.be
//   MAIL_VAN         de afzender zoals de klant hem ziet. Het adres hierin
//                    moet op het domein staan dat je bij Resend hebt
//                    goedgekeurd, anders weigert Resend de mail.
//
// Ontbreekt RESEND_API_KEY, dan verstuurt deze functie stilzwijgend niets en
// loopt de bestelling gewoon door.

const secret = (naam: string) =>
  (Deno.env.get(naam) ?? '').trim().replace(/^["']|["']$/g, '');

const RESEND_API_KEY = secret('RESEND_API_KEY');
const MAIL_ATELIER   = secret('MAIL_ATELIER') || 'karolien@tuigtassenhertogs.be';
const MAIL_VAN       = secret('MAIL_VAN')     || `Tuigtassen Hertogs <${MAIL_ATELIER}>`;

const euro = (bedrag: number) => '€ ' + bedrag.toFixed(2).replace('.', ',');

// Wat de klant intikt komt in de mail terecht; zonder dit kan een naam met een
// punthaak de opmaak breken.
const veilig = (t: string) =>
  String(t ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Bevestigingsmail naar de klant, in kopie naar het atelier. Faalt ze, dan
   staat dat in de logs — de afhandeling van de betaling mag er nooit op
   stuklopen. */
export async function stuurBevestiging(bestelling: {
  referentie: string;
  klant: { naam: string; email: string; adres: string };
  regels: { naam: string; code?: string | null; aantal: number; bedrag: number }[];
  levering: string;
  verzendkost: number;
  totaal: number;
}) {
  if (!RESEND_API_KEY) return;

  // Bij afhalen klopt "wordt verzonden" niet, dus dat geval krijgt zijn
  // eigen zin. De rest van de mail blijft hetzelfde.
  const afhalen = /afhal/i.test(bestelling.levering);

  const bericht = afhalen
    ? `<p>Jouw bestelling wordt voorbereid. Ik laat je weten zodra ze klaarstaat
       om af te halen in het atelier.</p>`
    : `<p>Jouw bestelling wordt voorbereid en zal binnen de 3 werkdagen verzonden worden.<br>
       Wanneer jouw pakje het postkantoor heeft bereikt ontvang je een track and trace
       code waarmee je op de hoogte blijft van het verzendproces.</p>`;

  const regels = (bestelling.regels ?? [])
    .map((r) => `<tr>
      <td style="padding:6px 0">${veilig(r.naam)}${r.aantal > 1 ? ` &times;&nbsp;${r.aantal}` : ''}${
        r.code ? `<br><span style="font-size:13px;color:#6b5c4c">${veilig(r.code)}</span>` : ''}</td>
      <td style="padding:6px 0;text-align:right;white-space:nowrap">${euro(r.bedrag)}</td>
    </tr>`)
    .join('');

  const html = `<div style="font-family:Georgia,serif;font-size:16px;line-height:1.6;color:#2b2118;max-width:520px">
  <p>Bedankt voor je aankoop!</p>

  ${bericht}

  <p style="margin:32px 0 4px"><strong>Bestelnummer ${veilig(bestelling.referentie)}</strong></p>
  <table style="width:100%;border-collapse:collapse;border-top:1px solid #d8cdbe;border-bottom:1px solid #d8cdbe">
    ${regels}
    <tr><td style="padding:6px 0">${veilig(bestelling.levering)}</td>
        <td style="padding:6px 0;text-align:right">${bestelling.verzendkost ? euro(bestelling.verzendkost) : 'Gratis'}</td></tr>
    <tr><td style="padding:10px 0"><strong>Betaald</strong></td>
        <td style="padding:10px 0;text-align:right"><strong>${euro(bestelling.totaal)}</strong></td></tr>
  </table>

  <p style="margin-top:24px">Karolien<br>
  <span style="font-size:14px;color:#6b5c4c">Tuigtassen Hertogs &mdash; ${MAIL_ATELIER}</span></p>
</div>`;

  try {
    const antwoord = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: MAIL_VAN,
        to: [bestelling.klant.email],
        bcc: [MAIL_ATELIER],        // zo weet het atelier meteen van de bestelling
        reply_to: MAIL_ATELIER,
        subject: 'Jouw bestelling werd bevestigd',
        html
      })
    });
    if (!antwoord.ok) {
      // De reden staat voluit in het antwoord van Resend; meestal is het een
      // afzender die niet op een goedgekeurd domein staat.
      console.error('Bevestigingsmail geweigerd:', antwoord.status, await antwoord.text());
    }
  } catch (e) {
    console.error('Bevestigingsmail lukte niet:', e);
  }
}
