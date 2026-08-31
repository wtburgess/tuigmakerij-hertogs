// Tuigtassen Hertogs — de bevestigingsmail. Nog niet aangesloten.
//
// Aanzetten (later):
//   1. In `index.ts` bovenaan:  import { stuurBevestiging } from './mail.ts';
//   2. En na het bewaren van de bestelling, vóór het antwoord:
//        await stuurBevestiging({ referentie, klant, regels,
//          levering: levering.label, verzendkost: levering.kost, totaal,
//          betaalUrl: mollie._links.checkout.href });
//   3. Secrets zetten: MAIL_GEBRUIKER (Gmail-adres) en MAIL_WACHTWOORD
//      (app-wachtwoord). Zonder die laatste vertrekt er niets.

import { SMTPClient } from 'https://deno.land/x/denomailer@1.6.0/mod.ts';

const secret = (naam: string) =>
  (Deno.env.get(naam) ?? '').trim().replace(/^["']|["']$/g, '');

const MAIL_GEBRUIKER  = secret('MAIL_GEBRUIKER');
const MAIL_WACHTWOORD = secret('MAIL_WACHTWOORD');
const MAIL_ATELIER    = secret('MAIL_ATELIER') || 'karolien@tuigtassenhertogs.be';
const MAIL_VAN        = secret('MAIL_VAN')     || `Tuigtassen Hertogs <${MAIL_ATELIER}>`;

const euro = (bedrag: number) => '\u20ac\u00a0' + bedrag.toFixed(2).replace('.', ',');

// Wat de klant intikt komt in de mail terecht; zonder dit kan een naam met een
// punthaak de opmaak breken.
const veilig = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Bevestigingsmail naar de klant, in kopie naar het atelier. Faalt ze, dan
   staat dat in de logs — de bestelling zelf mag er nooit op stuklopen. */
export async function stuurBevestiging(bestelling: {
  referentie: string;
  klant: { naam: string; email: string; adres: string };
  regels: { naam: string; aantal: number; bedrag: number }[];
  levering: string;
  verzendkost: number;
  totaal: number;
  betaalUrl: string;
}) {
  if (!MAIL_WACHTWOORD) return;

  const regels = bestelling.regels
    .map((r) => `<tr>
      <td style="padding:6px 0">${veilig(r.naam)}${r.aantal > 1 ? ` &times;&nbsp;${r.aantal}` : ''}</td>
      <td style="padding:6px 0;text-align:right;white-space:nowrap">${euro(r.bedrag)}</td>
    </tr>`)
    .join('');

  const html = `<div style="font-family:Georgia,serif;font-size:16px;line-height:1.6;color:#2b2118;max-width:520px">
  <p>Dag ${veilig(bestelling.klant.naam.split(' ')[0] || bestelling.klant.naam)},</p>
  <p>Bedankt voor je bestelling. Hieronder staat alles nog eens op een rij.</p>

  <p style="margin:24px 0 4px"><strong>Bestelnummer ${bestelling.referentie}</strong></p>
  <table style="width:100%;border-collapse:collapse;border-top:1px solid #d8cdbe;border-bottom:1px solid #d8cdbe">
    ${regels}
    <tr><td style="padding:6px 0">${veilig(bestelling.levering)}</td>
        <td style="padding:6px 0;text-align:right">${bestelling.verzendkost ? euro(bestelling.verzendkost) : 'Gratis'}</td></tr>
    <tr><td style="padding:10px 0"><strong>Totaal</strong></td>
        <td style="padding:10px 0;text-align:right"><strong>${euro(bestelling.totaal)}</strong></td></tr>
  </table>

  <p style="margin:24px 0">
    <a href="${bestelling.betaalUrl}" style="background:#3d2f22;color:#faf6ef;text-decoration:none;padding:14px 24px;border-radius:4px;display:inline-block">Je betaling afronden</a>
  </p>
  <p style="font-size:14px;color:#6b5c4c">Al betaald? Dan mag je die knop gerust negeren. Liep er iets mis, dan
  rond je je betaling ermee alsnog af &mdash; je bestelling blijft 24u voor je gereserveerd.</p>

  <p>Zodra de betaling binnen is, maak ik je pakketje klaar en gaat je tas op de post!</p>
  <p style="margin-top:24px">Karolien<br>
  <span style="font-size:14px;color:#6b5c4c">Tuigtassen Hertogs &mdash; ${MAIL_ATELIER}</span></p>
</div>`;

  const post = new SMTPClient({
    connection: {
      hostname: 'smtp.gmail.com',
      port: 465,
      tls: true,
      auth: { username: MAIL_GEBRUIKER, password: MAIL_WACHTWOORD }
    }
  });

  try {
    await post.send({
      from: MAIL_VAN,
      to: bestelling.klant.email,
      bcc: MAIL_ATELIER,          // zo weet het atelier meteen van de bestelling
      replyTo: MAIL_ATELIER,
      subject: `Je bestelling bij Tuigtassen Hertogs \u2014 ${bestelling.referentie}`,
      html,
      content: 'auto'             // denomailer maakt zelf een tekstversie
    });
  } catch (e) {
    console.error('Bevestigingsmail lukte niet:', e);
  } finally {
    await post.close();
  }
}
