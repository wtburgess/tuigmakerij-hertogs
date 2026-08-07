-- Tuigtassen Hertogs — de twee tassen die nu in de code staan.
-- Uitvoeren ná 01-schema.sql. Mag meermaals draaien.

insert into producten (id, naam, prijs, voorraad, nieuw, herkomst, verhaal, kenmerken, volgorde)
values ('waegemans', 'Waegemans tuigtas', 450, 1, true, 'Waegemans-zadel, Ninove',
        'Deze volledige handtas werd vervaardigd uit een oud Waegemans paardenzadel. Zadelmakerij Waegemans uit Ninove was destijds de hofleverancier van de Belgische adellijke familie, en gebruikte uitsluitend kwalitatief leder. Deze tas werd gemaakt met oog voor detail, en met liefde en aandacht voor authentieke elementen. Volledig handgemaakt en handgenaaid.',
        array['Gesp vervaardigd uit een singelstoot', 'Vooraan het zakje waarin de boompunten rusten', 'Ook vooraan de gesp voor de stijgbeugelriem', 'Schouderriem ontworpen in de vorm van gevlochten teugels', 'Bevestiging van schouderriem via halsterringen'], 0)
on conflict (id) do nothing;

insert into producten (id, naam, prijs, voorraad, nieuw, herkomst, verhaal, kenmerken, volgorde)
values ('barnsby', 'Barnsby and Son tuigtas', 450, 1, true, 'Barnsby and Son-zadel, Engeland',
        'Net als Waegemans voor België, had ook Engeland zijn vaste hofleverancier. Op zijn hoogtepunt behoorde Barnsby and Son tot de vijf grootste zadelmakerijbedrijven ter wereld, en exporteerde het zadels en andere lederwaren overheen de hele wereld. Het bedrijf maakte ceremoniële uitrusting voor vele militaire eenheden, waaronder de cavalerie-eenheden van het Britse leger en de Household Cavalry, de officiële lijfwacht van het Britse koningshuis. Het spreekt voor zich dat deze zadelmakerij het meest kwalitatieve leder selecteerde voor het vervaardigen van hun producten, wat zich weerspiegelt in deze hoogkwalitatieve tas.',
        array['Binnenvoering uit het originele juten doek van het zadel', 'Drie militaire knopen vooraan, die voorheen de zadelkussens op hun plek hielden', 'Authentieke elementen zorgvuldig bewaard en weer bij elkaar gepuzzeld'], 1)
on conflict (id) do nothing;
