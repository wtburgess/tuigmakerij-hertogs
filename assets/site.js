/* Tuigtassen Hertogs — shared layer.
   Alles wat op meerdere pagina's staat, staat hier: thema, contactgegevens,
   foto's, producten, winkelmandje, header en footer. */

/* ---------------------------------------------------------------- thema */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#182519', 'primary-container': '#2d3b2d', 'on-primary': '#ffffff',
        'on-primary-container': '#7e8d7d', 'primary-fixed': '#d7e7d4', 'primary-fixed-dim': '#bbcbb9',
        'on-primary-fixed': '#121f13', 'on-primary-fixed-variant': '#3c4a3c', 'inverse-primary': '#bbcbb9',
        secondary: '#725946', 'on-secondary': '#ffffff', 'secondary-container': '#fbd9c1',
        'on-secondary-container': '#775e4a', 'secondary-fixed': '#fedcc4', 'secondary-fixed-dim': '#e1c0a9',
        'on-secondary-fixed': '#291809', 'on-secondary-fixed-variant': '#594230',
        tertiary: '#3c1700', 'on-tertiary': '#ffffff', 'tertiary-container': '#3c1700',
        'on-tertiary-container': '#b77b58', 'tertiary-fixed': '#ffdbc9', 'tertiary-fixed-dim': '#fcb790',
        'on-tertiary-fixed': '#321200', 'on-tertiary-fixed-variant': '#6a3b1d',
        error: '#ba1a1a', 'on-error': '#ffffff', 'error-container': '#ffdad6', 'on-error-container': '#93000a',
        background: '#fcf9f1', 'on-background': '#1c1c17',
        surface: '#fcf9f1', 'on-surface': '#1c1c17', 'on-surface-variant': '#444842',
        'surface-dim': '#dcdad2', 'surface-bright': '#fcf9f1', 'surface-variant': '#e5e2db',
        'surface-container-lowest': '#f8f3e8', 'surface-container-low': '#f6f3eb',
        'surface-container': '#f1eee6', 'surface-container-high': '#ebe8e0', 'surface-container-highest': '#e5e2db',
        'inverse-surface': '#31312c', 'inverse-on-surface': '#f3f1e9',
        outline: '#747872', 'outline-variant': '#c4c8c0', 'surface-tint': '#546253',
        'deep-forest': '#2d3b2d', khaki: '#cfc8ad', 'tan-leather': '#e1c0a9', 'burnt-umber': '#5d2800', 'paper-cream': '#f1eee6',
        'stitch-color': '#c0a58c', 'success-green': '#2d3b2d'
      },
      borderRadius: { sm: '0.125rem', DEFAULT: '0.25rem', md: '0.375rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
      /* Verticale ruimte tussen secties kent twee maten, en meer niet:

           py-stack-raw md:py-section-xl   48 → 96px    de gewone sectie
           py-stack-raw                    48px         blokken die als paar
                                                        horen te lezen: een
                                                        intro onder een beeld,
                                                        een formulier, een
                                                        vervolg op het blok
                                                        erboven

         Hoort een sectie tegen zijn buur aan, dan is dat pt-0 of pb-0 — geen
         eigen tussenmaat. Er stonden er eerder een stuk of tien door elkaar
         (py-24, md:py-32, pt-20, pb-10, pt-4…), en dan valt niet meer te zien
         welke blokken bij elkaar horen en welke niet. */
      spacing: {
        unit: '8px', gutter: '24px', 'gutter-stitch': '24px', 'stack-raw': '48px',
        'margin-mobile': '20px', 'margin-desktop': '5vw',
        'container-max': '1440px', 'section-xl': '96px'
      },
      maxWidth: { 'container-max': '1440px' },
      /* Twee stemmen, meer niet:
         - Caveat Brush — het handschrift van de maakster. Álle koppen (h1 tot
           en met h3), citaten en de grote cijfers. Er stond hier eerder ook
           nog de gewone Caveat naast, maar twee handschriften door elkaar
           leest als twee sites; nu is elke kop dezelfde hand.
         - EB Garamond — al de rest. Broodtekst, en in kapitalen met ruime
           spatiëring ook de labels en de navigatie, zodat die aansluiten bij
           het woordmerk in het logo.
         Wil je iets anders proberen: vervang de familie hieronder én de
         fonts.googleapis-link in de <head> van de 7 pagina's. */
      fontFamily: {
        'display-lg': ['Caveat Brush', 'cursive'], 'display-lg-mobile': ['Caveat Brush', 'cursive'],
        handwritten: ['Caveat Brush', 'cursive'],
        'headline-md': ['EB Garamond', 'serif'],
        'body-lg': ['EB Garamond', 'serif'], 'body-md': ['EB Garamond', 'serif'],
        'label-sm': ['EB Garamond', 'serif'], 'label-mono': ['EB Garamond', 'serif']
      },
      fontSize: {
        'display-lg': ['72px', { lineHeight: '1.1', fontWeight: '600' }],
        'display-lg-mobile': ['48px', { lineHeight: '1.1', fontWeight: '600' }],
        'headline-md': ['26px', { lineHeight: '1.2', fontWeight: '600' }],
        /* Eén maat broodtekst. De twee namen blijven bestaan zodat de HTML
           niet doorzocht hoeft te worden, maar ze zijn bewust gelijk: een
           inleidende alinea van 20px gevolgd door 18px las als twee maten
           door elkaar. Wil je de site ruimer of compacter, dan verander je
           deze twee waarden samen — nergens anders staat een broodtekstmaat. */
        'body-lg': ['21px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['21px', { lineHeight: '1.6', fontWeight: '400' }],
        /* Eén labelstijl. Er stonden er twee — 13px/0.14em en 15px/0.12em —
           die hetzelfde deden: kapitalen met ruime spatiëring. Naast elkaar
           op één pagina las dat als slordigheid, niet als verschil. Net als
           bij de broodtekst blijven de twee namen bestaan zodat de HTML niet
           doorzocht hoeft te worden. */
        'label-sm': ['14px', { lineHeight: '1.3', letterSpacing: '0.13em', fontWeight: '600' }],
        'label-mono': ['14px', { lineHeight: '1.3', letterSpacing: '0.13em', fontWeight: '600' }]
      }
    }
  }
};

/* ------------------------------------------------------- contactgegevens
   Naam, telefoon en gemeente komen van de bestaande site. De regels met
   TODO staan er nog niet echt op — die moeten nog ingevuld worden. */
const CONTACT = {
  naam: 'Karolien Hertogs',
  atelier: 'Tuigtassen Hertogs',
  email: 'karolien@tuigtassenhertogs.be',
  telefoon: '+32 487 49 33 68',
  whatsapp: '32487493368',            // internationaal, zonder + en zonder spaties
  adres: 'Kriekestraat 131, 8480 Eernegem, België',
  btw: 'BE 1039.887.807',
  instagram: 'https://www.instagram.com/tuigmakerij.hertogs/',
  facebook: 'https://www.facebook.com/profile.php?id=61591953651508',
  iban: 'BE00 0000 0000 0000',        // TODO: echt rekeningnummer
  bic: 'GEBABEBB'
};

/* Verzendopties. Sleutel = waarde in het keuzemenu bij het afrekenen. */
const LEVERING = {
  be:     { label: 'Verzenden naar België',            en: 'Shipping to Belgium',       kost: 0,  adres: true, land: 'België' },
  nl:     { label: 'Verzenden naar Nederland',         en: 'Shipping to the Netherlands', kost: 15, adres: true, land: 'Nederland' },
  de:     { label: 'Verzenden naar Duitsland',         en: 'Shipping to Germany',       kost: 15, adres: true, land: 'Duitsland' },
  fr:     { label: 'Verzenden naar Frankrijk',         en: 'Shipping to France',        kost: 15, adres: true, land: 'Frankrijk' },
  lu:     { label: 'Verzenden naar Luxemburg',         en: 'Shipping to Luxembourg',    kost: 15, adres: true, land: 'Luxemburg' },
  /* Buiten die vier weten we de verzendkost niet vooraf. Zo'n bestelling komt
     binnen als aanvraag: de klant vult zelf het land in, betaalt nog niet, en
     krijgt het bedrag per mail. Staat daarom met opzet niet in de tabel van de
     edge function — anders zou ze wél afgerekend kunnen worden aan 0 euro. */
  ander:  { label: 'Verzenden naar een ander land',    en: 'Shipping to another country', kost: 0,  adres: true, land: '', opAanvraag: true },
  afhaal: { label: 'Afhalen in het atelier',           en: 'Collection from the workshop', kost: 0,  adres: false, land: '' }
};

/* De keuzelijst en de bedanktpagina tonen deze labels; wat er naar de server
   gaat is de sleutel (be, nl, …), dus daar verandert de taal niets aan. */
const leveringLabel = (lev) => (TAAL === 'en' && lev.en) || lev.label;

/* Bestellingen worden per mail bevestigd en per overschrijving betaald.
   Zet hier een formulier-endpoint (bv. Formspree of een eigen script) en
   elke bestelling wordt ook automatisch naar je doorgestuurd. Leeg = uit. */
const ORDER_ENDPOINT = '';

/* Online betalen via Mollie. Zolang dit leeg staat, blijft het afrekenen
   werken zoals voorheen: bestellen en overschrijven. Vul dit pas in wanneer
   de edge function 'bestelling' in Supabase staat én MOLLIE_API_KEY daar is
   ingesteld — anders loopt de klant vast op de betaalknop. */
const BETAAL_ENDPOINT = 'https://vpyuagltoqdnvyuwiumo.supabase.co/functions/v1/bestelling';

const wa = (tekst) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(tekst || 'Dag Karolien, ')}`;

/* --------------------------------------------------------------- foto's
   Eén plek om alle beelden te vervangen door je eigen foto's.
   In de HTML: <img data-img="heroSaddle"> of <div data-img-bg="heroSaddle">. */
const B = 'https://lh3.googleusercontent.com/aida-public/';
const IMG = {
  /* Echte foto's van de tassen, in assets/foto/. De rest hieronder zijn nog
     de AI-beelden uit de ontwerpen. */
  waegemans1: 'assets/foto/waegemans-1.jpg',
  waegemans2: 'assets/foto/waegemans-2.jpg',
  waegemans3: 'assets/foto/waegemans-3.jpg',
  waegemans4: 'assets/foto/waegemans-4.jpg',
  barnsby1:   'assets/foto/barnsby-1.jpg',
  barnsby2:   'assets/foto/barnsby-2.jpg',
  barnsby3:   'assets/foto/barnsby-3.jpg',
  barnsby4:   'assets/foto/barnsby-4.jpg',
  barnsby5:   'assets/foto/barnsby-5.jpg',
  barnsby6:   'assets/foto/barnsby-6.jpg',
  heideTractor: 'assets/foto/heide-tractor.jpg',
  atelierKarolien: 'assets/foto/atelier-karolien.jpg',
  karolienKindje: 'assets/foto/karolien-kindje.jpg',
  // TODO Karolien: zet de foto van Maud bij het afgewerkte ponyzadel als
  // assets/foto/maud-ponyzadel.jpg — dan verschijnt ze vanzelf op de biopagina.
  maudPonyzadel: 'assets/foto/maud-ponyzadel.jpg',

  heroSaddle:       B + 'AB6AXuCI6BfxFL1_rvuIc-9oUZmWLJUD4Dj7RTFOzcSTmwGBmoOgXbNstgaipEPsu9XuzSbC4LyLeNf8cB4u8ayapguXfZnL2sA6PqA7TUchrpk9SkW6FXESfTVUfVfnNaRplh4pHIbzMvh_E2ikc-EF07RZvEVznX3hYYai_3RYtdLt0UCK3M-_DlQpdBAPG2UpR2k0dD-muPeC7VqvIrtkhby6VttueoonQMJereTjcEJcMZn1Ik9W8uFVpw',
  portret:          B + 'AB6AXuAQCeyNAI2qmGUlcewi1fi02brTUtV4289881rbgUrOerRS1EOcHY1y7q-jA74-v-gVHkn0I_7K1X9Hd_ks71apLleaIhZBEDI3AjKuxC2gq1rkNjBSLV0pyPSpNFAY1_9SW4DyTbX8KICsFvQvzpTILW5m2d5CLgoDVF-V41JBchTzU3Tgm0noKCu7g1KnlE2DFohhdjQhrBLSRAgpQZ13ijElGqx9AR4uqSfHyxxlGbVhTgquO9wVJw',
  portretDenkend:   B + 'AB6AXuA7c2RkpzkHtvlNqDXc9gmaqpfE5fxTlw9TCJ02F2ONiNSLUxnZPgVlPaeM_2khFvmciXx6QeKk8-Cx6Oj9CownJauaTPmg1qQGwUib5YG6eMA4Kw1zN-3VrB-v8B-gXb1GkMqqnWBDmHBdFlvyob1XxJvhoVrakwDqBFzMe_hFYj_pk7txxtiiA2HdsNCx8yhcM9L2cz5y6kB8l2L1WfbhZWP-TQ-HxqIJK3hYt6UpivJkPf1kqlPgEA',
  atelier:          B + 'AB6AXuDGCKqL7W9-Qmq63tETSjJX5gLIMqmcuXeWN_4uEB6VoV8C-ThXHGbvmwaRzZoeVxBjUS4Y-7JLmhYC4Oautr59GeBGtCczF7nkfCNI-NZFUhj0jCiN1iZRIotwXtkPNfjbFkbHrDiPr5tm0ohXpzoiftrI2uHXUGGLbAv3TqPPMf1_DNL-Mqr2nXDaAK37fXNcXeArPCBqsyjMRG8Xwi_xw_3_wagOV9WrXHMHW6jystNIHc2OVYP21g',
  gereedschap:      B + 'AB6AXuBrJHpztUz4cSckc2uco8hK5Qc6aVhJFrmgLrUumBuKRBXH-yqipmNbDqXT9klTm6uJbhvfxvE5jLpYKWwUKUKAO_bVKhwMV_MJ8Mp0jhLz0T4VZyWR5aENevROaqRNv50lpAIXuP5Wli5JruOZqzFR54Vgce6_9tzNbx5fD8eDCxXfct0nhlXi8Fhfge8GJZYWDLYIeharM5tIKy-VL0yMDpL6mqcj0pxgygLbLxBzTdxpwQi56Ye7gA',
  handenStikken:    B + 'AB6AXuBOp1FaluIz62qpyl_eC-nSBeAwV0m2bdDwUqwTatcfIxTKSQtSJXUw8_e9ZRRGatd3NwA3zLJaCJjbGQ9Dm1DgG477MPAQ9l3JKvoSv6t8126sATzLRFJ2d6StMx9WhvcQItKgGaPJRK-HfhGboAZIfWSBh6ZnjDjZ9yL6lWeZdMhyrAH54-F797DHc6RDoqMDFCxN8yzq0yLlML-5ZuDF4JYC6NmvrAycUIdldtjAzwwrMhftdQ1NxA',
  naaldDraad:       B + 'AB6AXuAYFDuthYtu59xL9-yV1Q9J_IVEsQCr_AGwWl3-gjxgVjnSYGbtLJvgNY8NXWWUlUK5yiTF1Ry8z1RD-Z8gAEVMd2J6HLLuEJ5lFDa2SziubMiahSwx3NblL5xHn9YdKJudfCmgxhKPGkvppUQ2-rOq5UVYOx61EglxgMENX6k9I6DseXq-pa7AkeytQnEB8kcJS9eWaXxp8UyR53d16qnFf147l-qTjO0ks9XQfECXwIbQz5ghW5IaOQ',
  zadelDemonteren:  B + 'AB6AXuBlhmvz6h49f0Oh0MgFB9UIioGAWcV51Fd51TVGbO__7Iddkva1Co-B6-9t6WnNYZvPmDLCK8dPG_h87jI2VCnGTKvqee53kh3wYO88fGWuHoO0-e0IHuVzjYVeJ7hQqqFSWIB9rHHEkYeFwYn608I4NcpzuuvszuTgGQLQ9Afn3rzVy3z5ctRFnHEHSPnhntSGEM55-NSal87cXUfccb7ty_MCq8RHtetTjND9_LOdwtL4zXmEIzknAg',
  zadelSnijden:     B + 'AB6AXuAFeyt7nLv5kAD1CI4SXN3dstnTqd9HupDGIMRI8FQ9G1wthT8RTHWjfK_frS7Q0Qr8t2D2vGQi9vURuPIiohxx6-0-UKGbGFzgm-MZQ922sGj3TByHfHrorr9ALiMYqxQdd0WL_mXRU6yq13RSSHArPD_RQt97beu8Fou5sR-y-GD_4fmGtlXlUm5FO7-TPmru4wfR42Emb2Yk95D3Hd-E-seewsS3j9rkEfJ9yk3ACNA5WgCPSLZwCg',
  zadelWerkbank:    B + 'AB6AXuDKi737cqDhwflJWa3ygV92QLHrBgboi3CYoKfPpGf9BPDLhQZgI7AS-AI0la5VOI5zlxD-3VQD32mThR9YBEEWFCm8FxVh6E4DLWipt83AkoO_fPJ936PrgWLAhc5z4IKjZXvsbFv_R3uk8cVlFnSake7edvCowWAB0fakv6OPCWUemQO4oQWDvwUeE2WX4TyZS-5X0x2Xz7-21Y3f-vCydpmu-WfN_yg7m5rMJpIPDxUQ_4yjq2r1PQ',
  zadelSchaduw:     B + 'AB6AXuCgN3SyoLlPh4Z9__9YlT9FnMdPbc_GpwKwFK8MM36LN5osZto7sLgVRBU4IDoRzJC6ozH8c0itfQFxr2X_S2ui21j_p34Na5GrdsX7slWRimgja23owaYpYCAEbdWgLrjnTdEzMDW3KoLl5NllYT5Iyd9XidVnyOUGwO32iXR3eX76UxEG5lOvK8NSnmJo0lFb7n0ckS1OSNPYvPGPgeraaTVbdxwld0a9wSjdOwxjGd_fR-nSfh0BRg',
  zadelPoetsen:     B + 'AB6AXuDYPp7Sj7V0jPhmWJy5ktWQ2pmhzgBW1a9V-rHQ_gChku4_z33cjr3I2gTnr8a-ewuoRyKZmJXYPI_drt9VsA7Wxn6pBRZe4_sKZXAZ4wORXRH4UGhzNznsZJbJ-zE18FIxYj5SBwzRywmQhbPQRXo0PeLOj55uzd4MFMfXBEyD1g_UpU0P4zhkPP3pNaMBNXL6Qi5Gg6s4-yFdqjRxHV4tuuZZqh97T_iHYuBM4qgUln9wV980hdDiQA',
  patina:           B + 'AB6AXuBzigbYEeRiseQPnot0nL_cuBY11Ck35KyAHUoRhV3FoMCqA5NfefXziRSoqx4aGc-P9TJbwgxF1LJr5jELbRXPJHfHzKQYhFyBgApxYbq36_w3wAMrKUwgEsTQ_JJuUyE2zFJ33f3zSE7Ule7T43Jq490rhBod9QdxBw--y9_mk5iwQq6XkVSHuTPEtehQ5IPcflVrhaDLNJwPoNDcnnaffbfuIURtCrTWHnOD4Xj-Uue46lS_K0y55g',
  schetsPaard:      B + 'AB6AXuCJCrxY3s6e3iZBepKDM4w9qk_vppzdejlUBVWrw8p5sg4peLYc0qAgLZNbJh-LIVJTMyIhW7fAPuoWwTvlge5GV2upm8WUx6gCVcGIOlUHwbIYpm-E5SvLizD5TvoD6-TSdL5zFXvypezcwTZnTQ00GSrbxRys9tM7F84uTnOIr1aAyv0vXkM8-sL7d3gVPHKdTnrY-_cvqADLetBxl29-IDK-GdYD1UsuUAKA1u6BSyK6rfPlxn4YCg',
  handenStiksel:    B + 'AB6AXuBh-aVabTuddWeWEAWvg-MKpNSZs0My3JgQkezoygZOc9r0ABri2T2ZitUKIjwuKZYaS5cPqirSpxLarERK9CO2bwofFTEs8LSA_1o6fgmUYVi22GDLDxWtxDpqNrIi_TdUqUOgRTi4B_PP-RWNSwBrlDubGqTLSGVI13a7U7ivvxMfDomhzDrZVcowB0cOoa24QCiTflz-LxMhm64GFeeRQbLakTyiYYrc1Ko07T5-467aZfvMFhTHkA',
  bioHero:          B + 'AB6AXuAhpwNomxpcMYYAIvA0Q52Cxcx3XNH73JSNVsJvh9iwfGnOslgdpxQUI1YNO7GNIcouZNSmfPFlNKndSH1FymBgj8miT6g1IP4ZAQn4JNflVcXv4mCd-AVVVeYjaW2V3_ZMJ7K8ZSog56K_i-IllJaT8VIRK6HuL_P6AZ_YL_XVvW0DMDS-n0yBcEB_IjB_x-R0LViuKADPU7ik31xyjoPFmgDmkAG8uYXcrPNSr-oF77880JoflQ3-Tw',
  bagRuitertas:     B + 'AB6AXuBw_oS3ENuI_x2T0QyytlqjVCUkE-8AfhPrz5I_c868O_yj8kgdXfox_7-ZyRpMLBFTYZDx96l7btrOy0vv2WccRkp2fjkCWis3DCcQBjCNOhB_5_3bX31Z0n42gz5SlxDkFOYjq2PceoB13yjI31BvMDh4emd1mOq16lb3nPV2rsKUjlt1uE5AYxVzzRXc2B0bPJ28aQTCocOtxO_CMZDMOc9K-JdC_yaRtbQ1muswTidxgacLnbvoAA',
  bagRuitertas2:    B + 'AB6AXuDJaucWbRvdYpkePIHZ7j4DX9GTmfoULfrMSp-eWcHv7rm6ogV7IggidfCVFfDWB4Qf0VVzFgX8esXwlEffYCE956iGWCI5C6B2gUeZW0LrrF4zIYZ6pJt1GDcQCfbUYGejXr2ZwLv7ftbwIWPFLTqpKsp3z6npgie5B0sDrWJnncsSKUTOWoVXNYeRgqwSsKrtATOq9PbpcIfLvGoy7zesml8hD6p0ODetKGzti337hgXZK8P3k2w0pQ',
  bagTote:          B + 'AB6AXuBZ6pWX1HYetq3VJsbBeJMwL-Vqaia-lln2lAT7wssblPRdDydhjRKNjHzEKPfG5vzamBJ99daRJ9gQfnrctFCfkFKMbsDRsoPvHHFHdSsN8cGsXl9JkLzD5M3OAK8c_GIHX7KsRMYVjhvKXfYT0xtmQo4a3fzuvuj38awr8dMQtiHFN7bqLrWdtjflJqbmpBS-zxei7_j8ob2oZqvIWxB96mAYfTYNoUbF35xpQd0rafGIq-evbF0V4A',
  bagVeldtas:       B + 'AB6AXuCp0WgYLD0zB21iaG6QnlvV6-9qrxDLxDQ7poOxdLXuK4BL6xH4JxEOyeBquiVdjMPfC9eCfZNnAl-HVabzabm_4Lh1riqkSGY7jNvIItViOHQ7YnyoDMYydUgX1ailr8zL3M6MAmUtFCpc-KSvA3P-p_ElZW4dRjwQPtGAAjriBWsVArsKEhFKwu7sNnC-UWSFE3pVmHn17T9cj_3hv5sNRACopmYzKeXMrHhe7BhAKIxVZ1lmBI1hGQ',
  bagBoswachter:    B + 'AB6AXuD4kYLYn4CDHadW5NUhz6wxnAAmO0UUiAdtQ6KoipxNyspSsCV1hLuyXv7oCgU7BurbKEosbEDBI1-ga-jtSR8BMKN5KgC-p9UcjknRKaOu01RfaEKHeaTXvkGHNFWI8I0PiZU6Z2lH9y5VsxvpFTcI66krYdc8RwOiILwGenJdKcjGzTWFZagDN3Fo8X4inXqqYZSvAMrELXrVRQP7bfACx0OEkSmpwAmXCSBtm5ru5jTW7FlopSL5pg',
  bagStadstas:      B + 'AB6AXuCSFic3O4NKCVqjITMPgUw16YJUaPNgYof7gu52zmNuqLDDGKm8L02ALNabSJEP_p5kya8Teh5AWGeU9TmKnpvpqbNuM0ytWprvU9GosBzUlAsHoQP2ask-WMF200jOjg_aqwGJ6OGZayoVjMI-wmLLB5tjsKRNnjlUp6dQBibHf0Ht5s0DsTUjev-lw2hKIWbjL1iQuL1y75MjaBKIf9ykHrFG2S1lMUVdmL8kES0XFmW16QB4hFajKA',
  bagGroteReis:     B + 'AB6AXuBCGcy6wh06QmMHm560luHnYlIPrRwKpP9n3xm5ZMiXouo_MqH4ub-JQnaZEzWMwZFhgVTnpKXaqsPSAPAr6fs8dRVagKIXcQkTDZA0Nw8F9dF9ncIIa0IPddRHHKtSiMDYl8QXUlZ3hgTRN1pWuCsi8W9jePhbQSvOnB-rBpjA26IbARf0_yjBEC2SX43s-n28Mf014_ABMPkYIsFT1SLgc98iSqWomGh4e9RqiKyTLuiyUscGypXJsg',
  bagTote2:         B + 'AB6AXuAsn_6eQFGxblJdqHz9PwY-1FxdjFikLdGqDSrW0gSh2IHQRQ6-NxJGV48uThq1k-1-zFUI7uNvKcLOy9OHOIKWsS7nhG1qNdv1UVaybYZqYlpWxrks3J3tRu1Cib4pYtKyOW6gGPOFZZ1PQMgPfuLtMKt890wSq2mMjIWdNud4Kd6zRXgJg8ajsuyRH6oHtucZIcT5ChrkBaCLFlT93WLhA8mRnb-gs-rJ2Dr5TAMuMb1waRIB98H4NQ',
  bagSatchel:       B + 'AB6AXuDSgGspfpPMo2ZYbdAR9AjdHCCdDqajhkzPyEWXIDDNtwAQtegtygaWqsinLLC6eOvHfhnZxVMD-1ttuyRSJ_hSwqwDwLro2VI6nEBJVEPs0hEgPd2Tb46EMjh0I3F5r29P81IHUDXlQxo5e46VCCjnTSgJMH17fHTZgY95hkc8gffcXr6H5lkqz0ls19RpJCx044myYWYqUmw0LonjW2rp21s5Bf3OZDxf4RkykR5eM5wRxkvkb37wjA',
  bagCrossbody:     B + 'AB6AXuBROhRZqnmcSz17zlLfJMjAZo-69SN-duhXiIYKvxJX5xd52NqUUYQohiK-DMV_lTqJcSqN3XIr7915zCK9M0eNTM6BudYSVp7l7VII6Sri303ebMc6bEvDm7soOrY7iiyxoJ9CuNtdSgEcHFBNd7_BBrP8forTcb40dkzAjkDdiPbHo7IlsexeilaTJEyykDHDwY6yqBLIwVqG8Ifsg1544uVEImOhYCp58jtidYxLta2jlPr_mL83CQ',
  bagToteGroen:     B + 'AB6AXuBUwnP0camHvxprG2Ulm2xNEtwcE4BOxX5zCj2YTYjwmiag9HgSy_8MAnR_NiyGGgHW4cstEMetWx5kPpaluXjvQEoWxS3Gum8P869LOOnyxtLTmHFb-X947bFxnBvEjvdNPNmyoo3tV24PEniBxqWsaB7YlsfmLEjb4hDZaaT0fdEAWS7AsqoywRomjkpljTWB8tRZuTr-mUBcVcPYuh5dWhDh7Pfn_0l3x7vJ3m1tvuTuJW43i6JWLw',

  /* Elke plek op de site heeft haar eigen naam, ook waar hetzelfde beeld
     tweemaal hing: zo pas je ze los van elkaar aan. Ze starten met dezelfde
     bron als het origineel; wissel je er één, dan blijft de andere staan. */
  zadelDemonterenB:  B + 'AB6AXuBlhmvz6h49f0Oh0MgFB9UIioGAWcV51Fd51TVGbO__7Iddkva1Co-B6-9t6WnNYZvPmDLCK8dPG_h87jI2VCnGTKvqee53kh3wYO88fGWuHoO0-e0IHuVzjYVeJ7hQqqFSWIB9rHHEkYeFwYn608I4NcpzuuvszuTgGQLQ9Afn3rzVy3z5ctRFnHEHSPnhntSGEM55-NSal87cXUfccb7ty_MCq8RHtetTjND9_LOdwtL4zXmEIzknAg',
  handenStikkenB:    B + 'AB6AXuBOp1FaluIz62qpyl_eC-nSBeAwV0m2bdDwUqwTatcfIxTKSQtSJXUw8_e9ZRRGatd3NwA3zLJaCJjbGQ9Dm1DgG477MPAQ9l3JKvoSv6t8126sATzLRFJ2d6StMx9WhvcQItKgGaPJRK-HfhGboAZIfWSBh6ZnjDjZ9yL6lWeZdMhyrAH54-F797DHc6RDoqMDFCxN8yzq0yLlML-5ZuDF4JYC6NmvrAycUIdldtjAzwwrMhftdQ1NxA',
  handenStikkenC:    B + 'AB6AXuBOp1FaluIz62qpyl_eC-nSBeAwV0m2bdDwUqwTatcfIxTKSQtSJXUw8_e9ZRRGatd3NwA3zLJaCJjbGQ9Dm1DgG477MPAQ9l3JKvoSv6t8126sATzLRFJ2d6StMx9WhvcQItKgGaPJRK-HfhGboAZIfWSBh6ZnjDjZ9yL6lWeZdMhyrAH54-F797DHc6RDoqMDFCxN8yzq0yLlML-5ZuDF4JYC6NmvrAycUIdldtjAzwwrMhftdQ1NxA',
  zadelWerkbankB:    B + 'AB6AXuDKi737cqDhwflJWa3ygV92QLHrBgboi3CYoKfPpGf9BPDLhQZgI7AS-AI0la5VOI5zlxD-3VQD32mThR9YBEEWFCm8FxVh6E4DLWipt83AkoO_fPJ936PrgWLAhc5z4IKjZXvsbFv_R3uk8cVlFnSake7edvCowWAB0fakv6OPCWUemQO4oQWDvwUeE2WX4TyZS-5X0x2Xz7-21Y3f-vCydpmu-WfN_yg7m5rMJpIPDxUQ_4yjq2r1PQ',
  bagRuitertasB:     B + 'AB6AXuBw_oS3ENuI_x2T0QyytlqjVCUkE-8AfhPrz5I_c868O_yj8kgdXfox_7-ZyRpMLBFTYZDx96l7btrOy0vv2WccRkp2fjkCWis3DCcQBjCNOhB_5_3bX31Z0n42gz5SlxDkFOYjq2PceoB13yjI31BvMDh4emd1mOq16lb3nPV2rsKUjlt1uE5AYxVzzRXc2B0bPJ28aQTCocOtxO_CMZDMOc9K-JdC_yaRtbQ1muswTidxgacLnbvoAA',
  zadelSchaduwB:     B + 'AB6AXuCgN3SyoLlPh4Z9__9YlT9FnMdPbc_GpwKwFK8MM36LN5osZto7sLgVRBU4IDoRzJC6ozH8c0itfQFxr2X_S2ui21j_p34Na5GrdsX7slWRimgja23owaYpYCAEbdWgLrjnTdEzMDW3KoLl5NllYT5Iyd9XidVnyOUGwO32iXR3eX76UxEG5lOvK8NSnmJo0lFb7n0ckS1OSNPYvPGPgeraaTVbdxwld0a9wSjdOwxjGd_fR-nSfh0BRg',
  atelierKarolienB:  'assets/foto/atelier-karolien.jpg',
  zadelSchaduwC:     B + 'AB6AXuCgN3SyoLlPh4Z9__9YlT9FnMdPbc_GpwKwFK8MM36LN5osZto7sLgVRBU4IDoRzJC6ozH8c0itfQFxr2X_S2ui21j_p34Na5GrdsX7slWRimgja23owaYpYCAEbdWgLrjnTdEzMDW3KoLl5NllYT5Iyd9XidVnyOUGwO32iXR3eX76UxEG5lOvK8NSnmJo0lFb7n0ckS1OSNPYvPGPgeraaTVbdxwld0a9wSjdOwxjGd_fR-nSfh0BRg',
  patinaB:           B + 'AB6AXuBzigbYEeRiseQPnot0nL_cuBY11Ck35KyAHUoRhV3FoMCqA5NfefXziRSoqx4aGc-P9TJbwgxF1LJr5jELbRXPJHfHzKQYhFyBgApxYbq36_w3wAMrKUwgEsTQ_JJuUyE2zFJ33f3zSE7Ule7T43Jq490rhBod9QdxBw--y9_mk5iwQq6XkVSHuTPEtehQ5IPcflVrhaDLNJwPoNDcnnaffbfuIURtCrTWHnOD4Xj-Uue46lS_K0y55g',
  zadelPoetsenB:     B + 'AB6AXuDYPp7Sj7V0jPhmWJy5ktWQ2pmhzgBW1a9V-rHQ_gChku4_z33cjr3I2gTnr8a-ewuoRyKZmJXYPI_drt9VsA7Wxn6pBRZe4_sKZXAZ4wORXRH4UGhzNznsZJbJ-zE18FIxYj5SBwzRywmQhbPQRXo0PeLOj55uzd4MFMfXBEyD1g_UpU0P4zhkPP3pNaMBNXL6Qi5Gg6s4-yFdqjRxHV4tuuZZqh97T_iHYuBM4qgUln9wV980hdDiQA',
  atelierB:          B + 'AB6AXuDGCKqL7W9-Qmq63tETSjJX5gLIMqmcuXeWN_4uEB6VoV8C-ThXHGbvmwaRzZoeVxBjUS4Y-7JLmhYC4Oautr59GeBGtCczF7nkfCNI-NZFUhj0jCiN1iZRIotwXtkPNfjbFkbHrDiPr5tm0ohXpzoiftrI2uHXUGGLbAv3TqPPMf1_DNL-Mqr2nXDaAK37fXNcXeArPCBqsyjMRG8Xwi_xw_3_wagOV9WrXHMHW6jystNIHc2OVYP21g',
  naaldDraadB:       B + 'AB6AXuAYFDuthYtu59xL9-yV1Q9J_IVEsQCr_AGwWl3-gjxgVjnSYGbtLJvgNY8NXWWUlUK5yiTF1Ry8z1RD-Z8gAEVMd2J6HLLuEJ5lFDa2SziubMiahSwx3NblL5xHn9YdKJudfCmgxhKPGkvppUQ2-rOq5UVYOx61EglxgMENX6k9I6DseXq-pa7AkeytQnEB8kcJS9eWaXxp8UyR53d16qnFf147l-qTjO0ks9XQfECXwIbQz5ghW5IaOQ',
  waegemans2B:       'assets/foto/waegemans-2.jpg',
  naaldDraadC:       B + 'AB6AXuAYFDuthYtu59xL9-yV1Q9J_IVEsQCr_AGwWl3-gjxgVjnSYGbtLJvgNY8NXWWUlUK5yiTF1Ry8z1RD-Z8gAEVMd2J6HLLuEJ5lFDa2SziubMiahSwx3NblL5xHn9YdKJudfCmgxhKPGkvppUQ2-rOq5UVYOx61EglxgMENX6k9I6DseXq-pa7AkeytQnEB8kcJS9eWaXxp8UyR53d16qnFf147l-qTjO0ks9XQfECXwIbQz5ghW5IaOQ',
  patinaC:           B + 'AB6AXuBzigbYEeRiseQPnot0nL_cuBY11Ck35KyAHUoRhV3FoMCqA5NfefXziRSoqx4aGc-P9TJbwgxF1LJr5jELbRXPJHfHzKQYhFyBgApxYbq36_w3wAMrKUwgEsTQ_JJuUyE2zFJ33f3zSE7Ule7T43Jq490rhBod9QdxBw--y9_mk5iwQq6XkVSHuTPEtehQ5IPcflVrhaDLNJwPoNDcnnaffbfuIURtCrTWHnOD4Xj-Uue46lS_K0y55g',
  zadelSchaduwD:     B + 'AB6AXuCgN3SyoLlPh4Z9__9YlT9FnMdPbc_GpwKwFK8MM36LN5osZto7sLgVRBU4IDoRzJC6ozH8c0itfQFxr2X_S2ui21j_p34Na5GrdsX7slWRimgja23owaYpYCAEbdWgLrjnTdEzMDW3KoLl5NllYT5Iyd9XidVnyOUGwO32iXR3eX76UxEG5lOvK8NSnmJo0lFb7n0ckS1OSNPYvPGPgeraaTVbdxwld0a9wSjdOwxjGd_fR-nSfh0BRg',
  heideTractorB:     'assets/foto/heide-tractor.jpg',
  zadelPoetsenC:     B + 'AB6AXuDYPp7Sj7V0jPhmWJy5ktWQ2pmhzgBW1a9V-rHQ_gChku4_z33cjr3I2gTnr8a-ewuoRyKZmJXYPI_drt9VsA7Wxn6pBRZe4_sKZXAZ4wORXRH4UGhzNznsZJbJ-zE18FIxYj5SBwzRywmQhbPQRXo0PeLOj55uzd4MFMfXBEyD1g_UpU0P4zhkPP3pNaMBNXL6Qi5Gg6s4-yFdqjRxHV4tuuZZqh97T_iHYuBM4qgUln9wV980hdDiQA',
};

/* ------------------------------------------------------------- producten
   `voorraad` = aantal beschikbare exemplaren. Elk stuk is uniek, dus
   meestal 1. Zet op 0 en de tas toont als "verkocht".

   Deze lijst is de terugval. Draait Supabase (zie onderaan), dan worden de
   tassen hieronder overschreven door wat er in de database staat. */
let PRODUCTS = [
  {
    id: 'waegemans', naam: 'Waegemans tuigtas', prijs: 450, voorraad: 1, nieuw: true,
    herkomst: 'Waegemans-zadel, Ninove',
    kleur: '', afmetingen: '', beslag: '',   // TODO Karolien: aanvullen
    fotos: ['waegemans1', 'waegemans3', 'waegemans4', 'waegemans2'],
    verhaal: 'Deze volledige handtas werd vervaardigd uit een oud Waegemans paardenzadel. ' +
      'Zadelmakerij Waegemans uit Ninove was destijds de hofleverancier van de Belgische adellijke ' +
      'familie, en gebruikte uitsluitend kwalitatief leder. Deze tas werd gemaakt met oog voor detail, ' +
      'en met liefde en aandacht voor authentieke elementen. Volledig handgemaakt en handgenaaid.',
    kenmerken: [
      'Gesp vervaardigd uit een singelstoot',
      'Vooraan het zakje waarin de boompunten rusten',
      'Ook vooraan de gesp voor de stijgbeugelriem',
      'Schouderriem ontworpen in de vorm van gevlochten teugels',
      'Bevestiging van schouderriem via halsterringen'
    ]
  },
  {
    id: 'barnsby', naam: 'Barnsby and Son tuigtas', prijs: 450, voorraad: 1, nieuw: true,
    herkomst: 'Barnsby and Son-zadel, Engeland',
    kleur: '', afmetingen: '', beslag: '',   // TODO Karolien: aanvullen
    fotos: ['barnsby1', 'barnsby3', 'barnsby5', 'barnsby4', 'barnsby2', 'barnsby6'],
    verhaal: 'Net als Waegemans voor België, had ook Engeland zijn vaste hofleverancier. Op zijn ' +
      'hoogtepunt behoorde Barnsby and Son tot de vijf grootste zadelmakerijbedrijven ter wereld, en ' +
      'exporteerde het zadels en andere lederwaren overheen de hele wereld. Het bedrijf maakte ' +
      'ceremoniële uitrusting voor vele militaire eenheden, waaronder de cavalerie-eenheden van het ' +
      'Britse leger en de Household Cavalry, de officiële lijfwacht van het Britse koningshuis. ' +
      'Het spreekt voor zich dat deze zadelmakerij het meest kwalitatieve leder selecteerde voor het ' +
      'vervaardigen van hun producten, wat zich weerspiegelt in deze hoogkwalitatieve tas.',
    kenmerken: [
      'Binnenvoering uit het originele juten doek van het zadel',
      'Drie militaire knopen vooraan, die voorheen de zadelkussens op hun plek hielden',
      'Authentieke elementen zorgvuldig bewaard en weer bij elkaar gepuzzeld'
    ]
  }
];

const productById = (id) => PRODUCTS.find((p) => p.id === id);

/* Verkochte tassen zakken naar onderaan. Binnen elke groep blijft de volgorde
   staan die op de beheerpagina ingesteld is — sorteren in JavaScript houdt
   gelijke gevallen op hun plaats. Zo toont "Een glimp van de collectie", dat
   enkel de eerste drie neemt, altijd tassen die nog te koop zijn. */
const beschikbaarEerst = (lijst) =>
  lijst.slice().sort((a, b) => (a.voorraad > 0 ? 0 : 1) - (b.voorraad > 0 ? 0 : 1));

/* Google levert deze beelden standaard op 512px breed. Voor een hero of een
   paginabrede foto is dat zichtbaar zacht; met =w1600 komt het origineel
   (1408px) binnen. Geldt niet voor de eigen foto's in assets/foto/. */
for (const sleutel in IMG) {
  if (IMG[sleutel].startsWith(B)) IMG[sleutel] += '=w1600';
}

/* Een foto is óf een sleutel uit IMG (de ingebouwde lijst) óf een kant-en-
   klare URL (uit de database). Eén functie die allebei aankan. */
/* De plekken die Karolien op de beheerpagina zelf kan vervangen. `naam` is
   hetzelfde als data-img in de HTML; `label` zegt wáár het beeld staat — de
   pagina en de kop van de sectie — en niet wat erop te zien is, want dat
   verandert net wel. Eén rij per plek op de site, ook waar twee plekken nu
   nog dezelfde foto tonen: ze zijn los van elkaar aan te passen. Alleen wat hier staat komt op de beheerpagina — de rest van IMG is
   ongebruikt en zou de lijst enkel langer maken. */
const BEELDEN = [
  { naam: 'heroSaddle'      , label: 'Startpagina · helemaal bovenaan' },
  { naam: 'handenStikken'   , label: 'Startpagina · Tijd is steeds schaarser. Wat als we tijd konden vangen?' },
  { naam: 'zadelDemonteren' , label: 'Startpagina · Een glimp van de collectie' },
  { naam: 'atelierKarolien' , label: 'Startpagina · Jouw dierbare zadel, een unieke tuigtas' },
  { naam: 'waegemans1'      , label: 'Collectie · Drie wegen naar jouw tuigtas' },
  { naam: 'zadelWerkbank'   , label: 'Collectie · Uit bestaande collectie' },
  { naam: 'zadelDemonterenB', label: 'Collectie · Op maat gemaakt uit een zadel op voorraad' },
  { naam: 'patina'          , label: 'Collectie · Uit voorraad' },
  { naam: 'handenStikkenB'  , label: 'Collectie · Geen exacte match? (1e foto)' },
  { naam: 'zadelSchaduw'    , label: 'Collectie · Geen exacte match? (2e foto)' },
  { naam: 'atelier'         , label: 'Collectie · Contact' },
  { naam: 'schetsPaard'     , label: 'Collectie · Gesprek' },
  { naam: 'handenStikkenC'  , label: 'Collectie · Ontwerp' },
  { naam: 'bagRuitertas'    , label: 'Collectie · Handwerk' },
  { naam: 'zadelWerkbankB'  , label: 'Collectie · Enkele voorbeelden (1e foto)' },
  { naam: 'bagRuitertasB'   , label: 'Collectie · Enkele voorbeelden (2e foto)' },
  { naam: 'zadelSchaduwB'   , label: 'Collectie · Enkele voorbeelden (3e foto)' },
  { naam: 'bagBoswachter'   , label: 'Collectie · Enkele voorbeelden (4e foto)' },
  { naam: 'zadelSnijden'    , label: 'Collectie · Enkele voorbeelden (5e foto)' },
  { naam: 'bagVeldtas'      , label: 'Collectie · Enkele voorbeelden (6e foto)' },
  { naam: 'atelierKarolienB', label: 'Verhaal · Een kleine éénvrouwszaak' },
  { naam: 'heideTractor'    , label: 'Verhaal · Wanneer dromen opdringerig komen aankloppen (1e foto)' },
  { naam: 'handenStiksel'   , label: 'Verhaal · Wanneer dromen opdringerig komen aankloppen (2e foto)' },
  { naam: 'zadelSchaduwC'   , label: 'Verhaal · Wanneer dromen opdringerig komen aankloppen (3e foto)' },
  { naam: 'maudPonyzadel'   , label: 'Verhaal · Leven volgens je eigen waarden (1e foto)' },
  { naam: 'patinaB'         , label: 'Verhaal · Leven volgens je eigen waarden (2e foto)' },
  { naam: 'naaldDraad'      , label: 'Verhaal · Leven volgens je eigen waarden (3e foto)' },
  { naam: 'waegemans2'      , label: 'Verhaal · Draagbare kunst' },
  { naam: 'zadelPoetsen'    , label: 'Onderhoud · Herstel & zorg' },
  { naam: 'zadelPoetsenB'   , label: 'Onderhoud · Wat ik herstel' },
  { naam: 'gereedschap'     , label: 'Onderhoud · Zadels' },
  { naam: 'atelierB'        , label: 'Onderhoud · Hoofdstellen & teugels' },
  { naam: 'naaldDraadB'     , label: 'Onderhoud · Tuig & menwerk' },
  { naam: 'waegemans2B'     , label: 'Onderhoud · Riemen & singels' },
  { naam: 'naaldDraadC'     , label: 'Onderhoud · Ophalen' },
  { naam: 'patinaC'         , label: 'Onderhoud · Zo gaat hij een leven mee' },
  { naam: 'zadelSchaduwD'   , label: 'Onderhoud · Voeden' },
  { naam: 'heideTractorB'   , label: 'Onderhoud · Nat geworden?' },
  { naam: 'zadelPoetsenC'   , label: 'Onderhoud · Beschermen' }
];

const fotoUrl = (f) => IMG[f] || f;

/* Een filmpje herken je aan de bestandsnaam. Verder loopt het net als een foto:
   zelfde tabel, zelfde opslagmap, zelfde volgorde. */
const isFilm = (naam) => /\.(mp4|webm|ogv|mov|m4v)(\?|#|$)/i.test(naam);

/* Geeft een <img> of een <video> terug, met dezelfde klassen. Zonder `bedien`
   toont een filmpje enkel zijn eerste beeld — dat is wat je wil op een kaart of
   een duimnagel. Die `#t=0.1` dwingt dat beeld af; anders blijft het vak zwart. */
function mediaTag(url, klassen, { alt = '', bedien = false, extra = '', film = isFilm(url) } = {}) {
  if (!film) return `<img src="${url}" alt="${alt}" loading="lazy" class="${klassen}" ${extra}>`;
  return `<video src="${url}${bedien ? '' : '#t=0.1'}" class="${klassen}" preload="metadata"
                 muted playsinline ${bedien ? 'controls' : ''} ${extra}></video>`;
}

/* ------------------------------------------------------------- database
   De collectie komt uit Supabase. De publishable key hoort thuis in een
   publieke site: hij mag alleen lezen, schrijven vraagt een login.
   Lukt het ophalen niet, dan blijft de ingebouwde PRODUCTS-lijst staan —
   liever een verouderde collectie dan een lege pagina. */
const SUPABASE_URL = 'https://vpyuagltoqdnvyuwiumo.supabase.co';
const SUPABASE_KEY = 'sb_publishable_KcNCsgogsA1vEI4Z299YJQ_KwH2G7p2';

const opslagUrl = (pad) => `${SUPABASE_URL}/storage/v1/object/public/productfotos/${pad}`;

/* Beelden die op de beheerpagina vervangen zijn. Mislukt dit, dan blijft de
   lijst leeg en toont de site gewoon wat er in IMG staat — een pagina zonder
   foto's is erger dan een pagina met de oude foto. */
const sfeerGeladen = (async () => {
  try {
    const antwoord = await fetch(`${SUPABASE_URL}/rest/v1/sitefotos?select=naam,pad`,
      { headers: { apikey: SUPABASE_KEY } });
    if (!antwoord.ok) throw new Error(`HTTP ${antwoord.status}`);
    return await antwoord.json();
  } catch (e) {
    console.warn('Sfeerbeelden niet opgehaald:', e.message);
    return [];
  }
})();

const productsGeladen = (async () => {
  if (!SUPABASE_URL) return PRODUCTS;
  try {
    const antwoord = await fetch(
      `${SUPABASE_URL}/rest/v1/producten` +
      `?select=*,productfotos(pad,volgorde)&order=volgorde.asc`,
      { headers: { apikey: SUPABASE_KEY } }
    );
    if (!antwoord.ok) throw new Error(`HTTP ${antwoord.status}`);
    const rijen = await antwoord.json();
    // Een lege database betekent bijna altijd "nog niet ingevuld", geen
    // "uitverkocht". Dan houden we de ingebouwde lijst aan.
    if (rijen.length) {
      PRODUCTS = rijen.map((r) => {
        const uitDb = (r.productfotos || [])
          .sort((a, b) => a.volgorde - b.volgorde)
          .map((f) => opslagUrl(f.pad));
        // Staan de foto's nog niet in de opslag, dan blijven de meegeleverde
        // beelden staan. Anders krijg je een kaart met een leeg vak.
        const ingebouwd = PRODUCTS.find((x) => x.id === r.id);
        return {
          ...r,
          prijs: Number(r.prijs),
          oude_prijs: r.oude_prijs == null ? null : Number(r.oude_prijs),
          fotos: uitDb.length ? uitDb : (ingebouwd ? ingebouwd.fotos : [])
        };
      });
    }
  } catch (fout) {
    console.warn('Collectie ophalen uit Supabase lukte niet; de ingebouwde lijst blijft staan.', fout);
  }
  // Ook wanneer het ophalen misliep: de ingebouwde lijst wordt op dezelfde
  // manier geschikt, zodat de pagina er in beide gevallen hetzelfde uitziet.
  PRODUCTS = beschikbaarEerst(PRODUCTS);
  return PRODUCTS;
})();

/* Pagina's die de collectie tonen, wachten hierop in plaats van op
   DOMContentLoaded: dan staan én de DOM én de tassen klaar. */
const paginaKlaar = Promise.all([
  productsGeladen,
  document.readyState === 'loading'
    ? new Promise((klaar) => document.addEventListener('DOMContentLoaded', klaar))
    : Promise.resolve()
]);

/* ------------------------------------------------------------ mandje
   Opslag: localStorage. Vorm: [{id, aantal}] */
const CART_KEY = 'th-cart';
const euro = new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' });

/* Bij een verkochte tas mag de prijs weg: dat vinkje staat op de beheerpagina.
   Zolang er voorraad is blijft ze wél staan — een tas die je kan bestellen mag
   nooit zonder prijs in de collectie hangen. */
const toonPrijs = (p) => !(p.prijs_verbergen && p.voorraad < 1);

/* Staat er een oude prijs bij die hoger ligt, dan is het promo: die gaat
   doorstreept vóór het bedrag dat de klant nu betaalt. `prijs` blijft altijd
   wat er afgerekend wordt — de server rekent daar ook mee. */
function prijsHtml(p) {
  const nu = euro.format(p.prijs);
  return p.oude_prijs > p.prijs
    ? `<s class="opacity-60 mr-1.5">${euro.format(p.oude_prijs)}</s>${nu}`
    : nu;
}

const cartRead = () => {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
};
const cartWrite = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  document.dispatchEvent(new CustomEvent('cart:changed'));
};
/* Regels met een onbekend of uitverkocht product vallen weg, en het aantal
   kan nooit boven de voorraad. Dat gebeurt hier, niet bij elke aanroeper. */
const cartLines = () =>
  cartRead()
    .map((r) => ({ product: productById(r.id), aantal: r.aantal }))
    .filter((l) => l.product && l.product.voorraad > 0)
    .map((l) => ({ ...l, aantal: Math.max(1, Math.min(l.aantal, l.product.voorraad)) }))
    .map((l) => ({ ...l, subtotaal: l.product.prijs * l.aantal }));

const cartCount = () => cartLines().reduce((n, l) => n + l.aantal, 0);
const cartTotal = () => cartLines().reduce((n, l) => n + l.subtotaal, 0);

function cartAdd(id, aantal = 1) {
  const p = productById(id);
  if (!p || p.voorraad < 1) return false;
  const items = cartRead();
  const bestaand = items.find((r) => r.id === id);
  const nieuw = Math.min((bestaand ? bestaand.aantal : 0) + aantal, p.voorraad);
  if (bestaand) bestaand.aantal = nieuw; else items.push({ id, aantal: nieuw });
  cartWrite(items);
  return true;
}
function cartSet(id, aantal) {
  const items = cartRead().filter((r) => r.id !== id);
  if (aantal > 0) items.push({ id, aantal });
  cartWrite(items);
}
const cartClear = () => cartWrite([]);

/* De collectie komt pas na de DOM binnen. Tot dan kent productById alleen de
   ingebouwde terugvallijst, dus vallen tassen uit de databank uit cartLines
   weg: de teller staat op 0 en het mandje leest als leeg. Eén seintje zodra
   de tassen er zijn, en iedereen die het mandje toont tekent opnieuw. */
paginaKlaar.then(() => document.dispatchEvent(new CustomEvent('cart:changed')));

/* --------------------------------------------------------------- toast */
function toast(tekst) {
  let el = document.getElementById('th-toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'th-toast';
    el.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-primary text-on-primary stitched-border ' +
      'font-label-sm text-label-sm uppercase tracking-widest px-6 py-4 rounded shadow-lg';
    document.body.appendChild(el);
  }
  el.textContent = tekst;
  el.classList.remove('th-toast-out');
  void el.offsetWidth;
  el.classList.add('th-toast-out');
}

/* ------------------------------------------------------- header & footer */
/* ------------------------------------------------------------------ taal
   De site staat in het Nederlands; Engels ligt daar als een tweede laag over.
   Elke tekst die mee moet, krijgt in de HTML een sleutel:

     <h1 data-t="home.hero.titel">Een zadel dat verder leeft</h1>

   Staat die sleutel hieronder in EN, dan wordt de tekst vervangen zodra er op
   EN geklikt wordt. Staat hij er niet, dan blijft het Nederlands gewoon staan.
   Een vertaling die nog niet af is, laat dus nooit een leeg vak achter — ze
   loopt enkel voor een stuk in het Nederlands door.

   Voorlopig is enkel de startpagina vertaald, samen met de balk bovenaan, de
   voet en het inschrijfblok. De andere pagina's blijven in het Nederlands tot
   ook hun teksten hier staan.

   Teksten die in een attribuut zitten — een placeholder, een alt — gaan via
   data-t-attr: <input data-t-attr="placeholder:drop.telefoon"> . Meerdere
   attributen scheid je met een puntkomma. */
const TALEN = ['nl', 'en'];
const TAAL_SLEUTEL = 'th-taal';

let TAAL = (() => {
  // ?taal=en in een link wint: zo kan je iemand rechtstreeks de Engelse versie
  // doorsturen. Daarna onthoudt de browser de keuze voor de volgende pagina.
  const uitLink = new URLSearchParams(location.search).get('taal');
  if (TALEN.includes(uitLink)) return uitLink;
  try {
    const bewaard = localStorage.getItem(TAAL_SLEUTEL);
    if (TALEN.includes(bewaard)) return bewaard;
  } catch { /* privémodus: dan blijft het gewoon Nederlands */ }
  return 'nl';
})();

const EN = {
  /* --- balk bovenaan, voet, inschrijfblok --- */
  'kaart.verkocht': 'Sold',
  'kaart.nieuw': 'New',
  'nav.home': 'Home',
  'nav.collectie': 'Collection',
  'nav.bio': 'Story',
  'nav.onderhoud': 'Repair &amp; care',
  'nav.faq': 'FAQ',
  'header.instagram': 'Behind the scenes',
  'footer.navigatie': 'Navigation',
  'footer.contact': 'Contact',
  'footer.volg': 'Follow along',
  'footer.gemaakt': 'Handcrafted in Belgium',
  'footer.voorwaarden': 'Terms of sale',
  'footer.privacy': 'Privacy',
  'drop.titel.home': 'Stay in the loop',
  'drop.titel.collectie': 'Be the first to see new bags',
  'drop.tekst': 'This collection is exclusive, and small in number. Would you like to be the first to hear when new pieces become available? Leave your phone number here and I will send you a message.',
  'drop.telefoon': 'Your phone number *',
  'drop.knop': 'Sign up',
  'drop.gelukt': 'Noted. You will get a message as soon as new bags are ready.',
  'drop.mislukt': 'That did not work. Please try again later, or send me a message on WhatsApp.',

  /* --- startpagina --- */
  'home.paginatitel': 'Tuigtassen Hertogs — hand-stitched bags from old horse saddles',
  'home.hero.titel': 'A saddle that lives on',
  'home.hero.zin': 'Handmade bags from old horse saddles<br>Repairs of saddles and other horse tack.',
  'home.hero.knop': 'View the bags',
  'home.hero.herstel': 'or have something repaired',
  'home.intro.1': 'In my workshop I give horse saddles and tack a longer life: expertly repaired, or reworked into a unique hand-stitched bag.',
  'home.intro.2': 'I choose deliberately for the more attentive, the more lasting, the more solid and the more honest. For repairing what still holds value, and reworking what already carries a life behind it.',
  'home.ambacht.boventitel': 'The saddler&rsquo;s craft',
  'home.ambacht.titel': 'Handmade.<br>Stitch by stitch.',
  'home.ambacht.1': 'Every harness bag is made by hand from the leather of old horse saddles.',
  'home.ambacht.2': 'Most of the bag is stitched by hand. For that I use the traditional saddle stitch, just as it was taught to me during my training as a saddler.',
  'home.ambacht.maatwerk': 'Alongside building my own collection, I also work to order.',
  'home.ambacht.link': 'Discover what is possible',
  'home.glimp.titel': 'A glimpse of the collection',
  'home.glimp.link': 'Full collection',
  'home.maat.boventitel': 'Made to order',
  'home.maat.titel': 'Your treasured saddle, a one-off harness bag',
  'home.maat.1': 'Your very first pony saddle, or the saddle of a horse you sadly had to say goodbye to. It still carries so many memories.',
  'home.maat.li1': 'The scratches from that heavy fall the two of you took together;',
  'home.maat.li2': 'the marks of all those dusty competitions where close friendships were built;',
  'home.maat.li3': 'the patina from the cross-country course where you landed in the water jump with all your gear;',
  'home.maat.2': 'They are stories etched deep into the leather.',
  'home.maat.3': 'I do not try to hide that history — I give it a place in a new design.',
  'home.maat.knop': 'How it works',
  'home.citaat': '&ldquo;Making that first bag was the moment my own puzzle fell into place. That is where all the pieces came together: my love of craft and workmanship, my bond with the horse world, and my longing for a creative and free life.&rdquo;',
  'home.karolien.rol': 'Saddler &amp; founder',
  'home.karolien.link': 'Read my story',

  /* --- productpagina --- */
  'product.weg.titel': 'We could not find this bag',
  'product.weg.tekst': 'It may have been sold in the meantime — every piece exists only once.',
  'product.weg.knop': 'View the collection',
  'product.spec.referentie': 'Reference',
  'product.spec.herkomst': 'Leather origin',
  'product.spec.kleur': 'Colour',
  'product.spec.afmetingen': 'Dimensions',
  'product.verkocht.tekst': 'This bag is sold, and it exists only once. Something similar is certainly possible.',
  'product.verkocht.knop': 'Ask for something similar',
  'product.mandje': 'Add to my basket',
  'product.naarmandje': 'To my basket',
  'product.uniek.titel': 'One piece. Entirely handmade.',
  'product.uniek.tekst': 'Every piece comes from a different saddle, so this bag exists exactly once. Shipped free and insured within Belgium.',
  'product.vraag': 'A question about this bag?',
  'product.vraag.link': 'Send me a message.',
  'product.vergroot': 'View the full photo of {naam}',
  'product.fotonr': 'Photo {n} of {naam}',
  'product.fotokort': 'Photo {n}',
  'product.filmuitleg': 'Click the video to play it',
  'product.fotouitleg': 'Click the photo for the full image',
  'product.wa.verkocht': 'Hi Karolien, {naam} has been sold. Could you make something similar? ',
  'product.wa.vraag': 'Hi Karolien, I have a question about {naam}: ',
  'product.andere': 'Other bags in the workshop',

  /* --- veelgestelde vragen --- */
  'faq.paginatitel': 'Frequently asked questions — Tuigtassen Hertogs',
  'faq.titel': 'Frequently asked questions',
  'faq.v1': 'How do I care for my bag?',
  'faq.a1': 'These bags ask for exactly the same care as a horse saddle. You will find suggestions on the <a href="onderhoud.html" class="text-primary border-b border-dashed border-current">repair &amp; care</a> page.',
  'faq.v2': 'Do you work by appointment only, or can I drop by?',
  'faq.a2': 'For now I work by appointment only. But I would love to see you — send me a message beforehand and come on over.',
  'faq.v3': 'Do you do repairs as well?',
  'faq.a3a': 'Yes, you can come to me for any repair to horse tack. Have a look at the <a href="onderhoud.html" class="text-primary border-b border-dashed border-current">repair &amp; care</a> page.',
  'faq.a3b': 'For the bags: should premature wear appear within the one-year warranty — a loose seam, say — I repair it free of charge. It should not happen, and I am glad to put it right. Where it is damage rather than wear, the cost is charged. Best to get in touch first.',
  'faq.v4': 'How long do these bags last?',
  'faq.a4': 'Provided they are looked after, and given the care they need in good time, these bags can last several generations. Age only gives them more charm. Have a look at the <a href="onderhoud.html" class="text-primary border-b border-dashed border-current">repair &amp; care</a> page for tips.',
  'faq.v5': 'Can I order a gift voucher?',
  'faq.a5': 'Yes, you can. Get in touch on WhatsApp and we will sort it out.',
  'faq.slot': 'Is your question not here?',
  'faq.slot.link': 'Send me a message.',
  'faq.slot.wa': 'Hi Karolien, I have a question: ',

  /* --- afrekenen --- */
  'levering.opaanvraag': ' — shipping cost on request',
  'levering.gratis': ' — free',
  'bestel.paginatitel': 'Checkout — Tuigtassen Hertogs',
  'bestel.leeg.titel': 'Your basket is still empty',
  'bestel.leeg.tekst': 'Take all the time you need to look around',
  'bestel.leeg.knop': 'View the collection',
  'bestel.titel': 'Checkout',
  'bestel.contact': 'Contact',
  'bestel.email': 'Email address *',
  'bestel.telefoon': 'Phone *',
  'bestel.levering': 'Delivery',
  'bestel.hoe': 'How would you like to receive your bag?',
  'bestel.voornaam': 'First name *',
  'bestel.achternaam': 'Surname *',
  'bestel.adres': 'Street and number *',
  'bestel.postcode': 'Postcode *',
  'bestel.stad': 'Town *',
  'bestel.land': 'Country',
  'bestel.landvraag': 'To which country? *',
  'bestel.bericht': 'Message',
  'bestel.berichtvb': 'Anything I should know? Gift wrapping, a delivery wish…',
  'bestel.betaling': 'Payment',
  'bestel.bancontact': 'Payment by Bancontact',
  'bestel.betaaluitleg': 'You pay straight away by Bancontact. Once your order is placed you will see your order number and a summary. If the payment does not go through at once, your order stays reserved for 24 hours. As soon as the payment arrives I get your parcel ready and your bag goes in the post!',
  'bestel.akkoord': 'I agree to the <a href="voorwaarden.html" target="_blank" rel="noopener" class="text-primary border-b border-dashed border-current">terms of sale</a>. *',
  'bestel.knop': 'Order and pay',
  'bestel.veilig': 'Your details go to the workshop only. Payment is handled securely by Mollie.',
  'bestel.mandje': 'Your basket',
  'bestel.subtotaal': 'Subtotal',
  'bestel.verzending': 'Shipping',
  'bestel.afhalen': 'Collection',
  'bestel.gratis': 'Free',
  'bestel.opaanvraag': 'On request',
  'bestel.plusverzending': ' + shipping',
  'bestel.totaal': 'Total',
  'bestel.dank': 'With your purchase you make the world a little lovelier: you support local craftsmanship and choose something made to last. Thank you!',
  'bestel.verder': 'Keep looking',
  'bestel.voet': 'Questions about your order?',
  'bestel.voet.link': 'Send me a message',
  'bestel.voet.of': 'or email',
  'bestel.voet.wa': 'Hi Karolien, I have a question about my order: ',
  'bestel.verwijder': 'Remove',
  'bestel.min': 'One fewer',
  'bestel.plus': 'One more',
  'bestel.afhaaladres': '(collection from the workshop)',
  'bestel.fout.velden': 'Please fill in the fields marked with a * .',
  'bestel.fout.opnieuw': ' Please try again, or send me a message.',

  /* --- bedankt --- */
  'bedankt.paginatitel': 'Thank you for your order — Tuigtassen Hertogs',
  'bedankt.titel': 'Thank you for your order',
  'bedankt.tekst': 'The piece you chose has been reserved. You will receive a confirmation by email.',
  'bedankt.terug': 'Back to the collection',
  'bedankt.geen': 'We found no recent order here. Did you order and see nothing?',
  'bedankt.geen.link': 'Let me know.',
  'bedankt.geen.wa': 'Hi Karolien, I placed an order but see no confirmation. ',
  'bedankt.verzendkost.titel': 'I am looking up your shipping cost',
  'bedankt.verzendkost.tekst': 'Nothing has been charged yet. For {land} I first have to ask after the shipping — you will have the amount from me within two working days, with the details to pay.',
  'bedankt.jouwland': 'your country',
  'bedankt.verzendkost.slot': 'Until then I keep your bag aside for you. If anything is not right, do let me know.',
  'bedankt.overschrijven': 'Bank transfer',
  'bedankt.begunstigde': 'Beneficiary',
  'bedankt.bedrag': 'Amount',
  'bedankt.mededeling': 'Reference',
  'bedankt.vrijhouden': 'I keep your bag aside for 24 hours. As soon as the payment arrives I pack it up and it goes in the post — you will get a message with the tracking number.',
  'bedankt.doorsturen.titel': 'Send your order through',
  'bedankt.doorsturen.tekst': 'Then I know straight away that it has arrived. One click and the email is ready — all you have to do is send it.',
  'bedankt.mailknop': 'Confirm by email',
  'bedankt.waknop': 'Or by WhatsApp',
  'bedankt.wa': 'Hi Karolien, I have just placed order {ref}. ',
  'bedankt.mailonderwerp': 'Order',

  /* --- collectie --- */
  'col.paginatitel': 'Collection &amp; made to order — Tuigtassen Hertogs',
  'col.titel': 'Three ways to your harness bag',
  'col.weg1.titel': 'From the existing collection',
  'col.weg1.tekst': 'A bag that is already finished. From a saddle that has lived a life of its own, and is ready to begin a new story with you. You see exactly what you get, and it is on its way to you within a few days.',
  'col.weg1.link': 'To the bags',
  /* De korte regels staan enkel op een telefoon, in plaats van de hele alinea. */
  'col.weg1.kort': 'Finished, and with you within a few days.',
  'col.weg2.kort': 'A saddle from my stock, made to your idea.',
  'col.weg3.kort': 'Your saddle, with all its memories.',
  'col.stap1.kort': 'Send a message, with a photo if you like.',
  'col.stap2.kort': 'We look at what is possible together.',
  'col.stap3.kort': 'A design, and a price range.',
  'col.stap4.kort': 'The saddle comes apart; I keep you posted.',
  'col.stap5.kort': 'Collect at the workshop, or sent insured.',
  'col.weg2.titel': 'Made to order from a saddle in stock',
  'col.weg2.tekst': 'There are always saddles here waiting to become new designs. Tell me what matters to you and I will make one entirely to your idea.',
  'col.weg3.titel': 'Made to order from your own saddle',
  'col.weg3.tekst': 'Your horse\u2019s saddle, with every memory attached to it, becomes a bag to treasure for life.',
  'col.voorraad': 'In stock',
  'col.leverbaar': 'Ready to ship',
  'col.match.titel': 'Not quite the right one?',
  'col.match.tekst': 'Do you feel a click with my style, but not quite find what you are after? Then I will gladly make the bag you have in mind. You can choose a saddle from my stock, or bring your own. Send me a message or give me a ring and tell me what you picture. We will look at what is possible together.',
  'col.match.slot': 'Below you can see how an order made to measure goes.',
  'col.match.wa': 'Hi Karolien, I am thinking about a bag made to order. ',
  'col.match.knop': 'Send me a WhatsApp message',
  'col.stap1.titel': 'Contact',
  'col.stap1.tekst': 'You send me a message, with a few photos if you like, and tell me what you are looking for.',
  'col.stap2.titel': 'Conversation',
  'col.stap2.tekst': 'If the distance allows it, I would love to have you over at the workshop. We look at what is possible together.',
  'col.stap3.titel': 'Design',
  'col.stap3.tekst': 'I make a design based on your ideas, and we agree on a price range.',
  'col.stap4.titel': 'Handwork',
  'col.stap4.tekst': 'The saddle comes apart and the leather is prepared. I keep you posted by WhatsApp and check the choices with you as we go.',
  'col.stap5.titel': 'Delivery',
  'col.stap5.tekst': 'You collect your bag at the workshop, or I send it to you insured.',
  'col.werkwijze': 'How it works',
  'col.werkwijze.titel': 'From your saddle to your bag',
  'col.werkwijze.1': 'A harness bag made from your own saddle is something else again. Every mark of wear in the leather comes from a story you lived yourself.',
  'col.werkwijze.2': 'If you would like a harness bag made from your own saddle, I would love to have you over for a coffee at the workshop. We go back over the memories and so discover which elements you would like to see return in the bag. We also talk about the kind of bag you prefer: a tote, a cross body, or something more classic.',
  'col.werkwijze.3': 'Bringing the saddle in yourself is best, so that we can talk it through. Too far to travel? The saddle can be sent as well, and we settle the rest by phone.',
  'col.person.titel': 'Personalisation and finish',
  'col.person.1': 'Every bag can be tuned to your style and your preferences. From the colour of the stitching and the finish of the edges to the choice of buckles and fastenings. Together we look at which details suit you best.',
  'col.person.2': 'Because every saddle is different, not every one lends itself to every model. Sometimes extra leather is needed to bring your chosen design about. We talk through the options and look for the loveliest solution together.',
  'col.voorbeelden': 'A few examples',
  'col.vb1.titel': 'Polo saddle',
  'col.vb1.tekst': 'The seat had sagged beyond repair. The flaps gave the leather for this bag of the same name, the \u2018polo\u2019.',
  'col.vb2.titel': 'Barnsby and Son all-round saddle',
  'col.vb2.tekst': 'This saddlery once made saddles for the British army. Placing the three saddle knobs at the front gives this bag a sturdy, military look.',
  'col.stap1van5': 'Step 1 of 5',
  'col.oproep.titel': 'It all begins with your message',
  'col.oproep.tekst': 'Do you have a particular saddle or kind of bag in mind? Send me a photo on WhatsApp. Tell me a little more about it, and we will see what is possible together.',
  'col.oproep.wa': 'Hi Karolien, I have a saddle I would like made into a bag. ',
  'col.oproep.knop': 'Start on WhatsApp',

  /* --- verhaal --- */
  'bio.paginatitel': 'Story — Karolien Hertogs, saddler',
  'bio.boventitel': 'The story',
  'bio.titel': 'A small one-woman workshop',
  'bio.intro.1': 'Tuigtassen Hertogs is a small &ldquo;one-woman workshop&rdquo;, started in 2026.',
  'bio.intro.2': 'On this page I would like to tell you a little about who I am and why I do what I do. Will you read along?',
  'bio.h1.nr': 'Chapter one',
  'bio.h1.titel': 'When dreams come knocking insistently',
  'bio.h1.1': 'As a child I grew up among the animals on a small hobby farm. Bringing in straw in summer, harvesting beet in autumn. I loved it. A master\u2019s in animal science seemed the logical next step.',
  'bio.h1.2': 'But during my career in agricultural research something kept missing. It gnawed at me, and at first I could not place the feeling. It turned out to be a longing for more simplicity. For working with my hands and making something you can hold.',
  'bio.h1.3': 'I enrolled in an evening course in saddlery and harness making at Syntra West in Bruges. But before the course had even begun, one moment changed everything.',
  'bio.h2.nr': 'Chapter two',
  'bio.h2.titel': 'When life happens to you',
  'bio.h2.1': 'It was while training my young horse Silhouette. A hard kick to the head left me with a brain injury, memory loss and, to put it mildly, a difficult time. Specialists told my husband gently that I would never be the same again.',
  'bio.h2.2': 'But a strong will, helped along by a good deal of luck, can sometimes work wonders. And that luck, I had. Something I am still deeply grateful for every day.',
  'bio.h2.3': 'After a long and intensive rehabilitation, and surrounded by many kind people, I was able to start my training after all a while later.',
  'bio.citaat': '&ldquo;A strong will, helped along by a good deal of luck, can sometimes work wonders. And that luck, I had.&rdquo;',
  'bio.h3.nr': 'Chapter three',
  'bio.h3.titel': 'Living by your own values',
  'bio.h3.1': 'The whole episode changed how I look at work and at life. It became clear all at once that keeping up in a hectic world was no longer for me. It forced me to stop and think about what really matters.',
  'bio.h3.2': 'When our second child was born, and our daughter took her first steps at school, the wish to be more present as a mother grew.',
  'bio.h3.3': 'By then I had also learned the hard way how fragile life is. Too fragile not to spend your time on what makes your heart beat faster.',
  'bio.h3.bijschrift': '<em>September. The saddlery classes start again. The pony saddle was finished. With her in mind. The greatest motivation of all.</em>',
  'bio.h4.nr': 'Chapter four',
  'bio.h4.titel': 'An old soul',
  'bio.h4.1': 'The love of old materials, old crafts and stories with a past has always been there. So has the creativity. As a child I hung on my grandmother\u2019s every word when she talked about farming as it used to be. About horses harnessed to plough the land. About delivering fresh milk as a teenager with the dog cart.',
  'bio.h4.2': 'Perhaps I have an old soul that was looking for simplicity. And so in the evening hours, once the children were asleep, I set to work in earnest. With old materials, old techniques and a large helping of creativity. What began as experimenting with an old worn-out horse saddle grew into my first harness bag.',
  'bio.h4.3': 'Making that first bag was the moment my own puzzle fell into place. That is where all the pieces came together: my love of craft and workmanship, my bond with the horse world, and my longing for a creative and free life with my family at its centre.',
  'bio.h5.nr': 'Chapter five',
  'bio.h5.titel': 'Wearable art',
  'bio.h5.1': 'Today I give &ldquo;retired&rdquo; saddles a second life as a handbag. Every saddle carries traces of its past. I do not try to hide that history — I give it a place in a new design. That is why I like to call my work wearable art.',
  'bio.h5.2': 'Every piece gets the chance to begin a new story. Just as I did.',
  'bio.knop.tassen': 'View my bags',
  'bio.knop.contact': 'Get in touch',
  'bio.wa': 'Hi Karolien, I read your story. ',

  /* --- herstel & zorg --- */
  'ond.paginatitel': 'Repairs &amp; care — Tuigmakerij Hertogs',
  'ond.titel': 'Repair &amp; care',
  'ond.intro.1': 'Besides making bags I repair horse equipment. I trained as a saddler and work the traditional way. Hand-stitched where it belongs, with waxed thread that stands up to wear.',
  'ond.intro.2': 'Is your bridle broken, your girth worn through, your saddle damaged? Bring it by. Do you have one of my harness bags? Below is how to look after it for the decades to come.',
  'ond.wat.titel': 'What I repair',
  'ond.wat.tekst': 'Most leatherwork around horse and rider passes through here. Not sure whether yours belongs on the list? Send me a photo and I will answer as soon as I can.',
  'ond.wat.wa': 'Hi Karolien, I have something that needs repairing. ',
  'ond.wat.knop': 'Send me a photo',
  'ond.k1.titel': 'Saddles',
  'ond.k1.tekst': 'Stitching come loose, worn saddle flaps, replacing girth straps, mending tears.',
  'ond.k2.titel': 'Bridles &amp; reins',
  'ond.k2.tekst': 'Straps worn through, lengthening or shortening, fitting keepers, replacing buckles, …',
  'ond.k3.titel': 'Harness &amp; driving tack',
  'ond.k3.tekst': 'Alterations to any breastplate, driving reins, traces and so on needed in carriage driving.',
  'ond.k4.titel': 'Straps &amp; girths',
  'ond.k4.tekst': 'Among others: shortening or lengthening, stirrup leathers, headcollars and lungeing gear.',
  'ond.k5.titel': 'Bags &amp; other leather goods',
  'ond.k5.tekst': 'I am glad to help with other leather goods too. Lengthening or shortening shoulder straps, refitting buckles on belts, mending seams, …',
  'ond.k6.titel': 'What I do not do',
  'ond.k6.tekst': 'No saddle fitting and no alterations to the tree. For that I will gladly point you to someone who does.',
  'ond.hoe.titel': 'How it works',
  'ond.s1.titel': 'Send a photo',
  'ond.s1.tekst': 'By WhatsApp or email. Say briefly what happened. Usually I can tell you straight away whether it can be mended.',
  'ond.s2.titel': 'Bring it by',
  'ond.s2.tekst': 'By appointment, so that I have time for it and we can look at it together. Sending it works too, but coming by is often better.',
  'ond.s3.titel': 'Price and timing in advance',
  'ond.s3.tekst': 'You get a realistic timescale before I start, and an estimate of what it will cost.',
  'ond.s4.titel': 'Collection',
  'ond.s4.tekst': 'I let you know as soon as I am done with your gear. Small repairs are often ready within the week.',
  'ond.langskomen': 'Coming by',
  'ond.afspraak': 'By appointment only',
  'ond.langs.wa': 'Hi Karolien, I would like to bring something in. ',
  'ond.tips.boventitel': 'For your harness bag',
  'ond.tips.titel': 'This is how it lasts a lifetime',
  'ond.tips.tekst': 'Good leather asks for little. But that little, it really does ask for.',
  'ond.t1.titel': 'Feeding',
  'ond.t1.tekst': 'Give your bag a thin coat of leather grease now and then. You can use the same products as for greasing saddles and tack.',
  'ond.t2.titel': 'Got wet?',
  'ond.t2.tekst': 'Let it dry at room temperature. Do not put your bag beside a direct source of heat such as a radiator or a stove. That risks cracks in the leather.',
  'ond.t3.titel': 'Protecting',
  'ond.t3.tekst': 'Avoid long spells in full sun, to prevent discolouring and drying out.',
  'ond.t4.titel': 'Cleaning',
  'ond.t4.tekst': 'A slightly damp cloth is enough. Has your bag picked up a stain? Then use a mild saddle soap. After washing with saddle soap it is important to feed your bag again.',

  /* --- verkoopsvoorwaarden --- */
  'vw.paginatitel': 'Terms of sale — Tuigtassen Hertogs',
  'vw.titel': 'Terms of sale',
  'vw.bijgewerkt': 'Last updated 21 September 2026',
  'vw.1.titel': 'Who you are dealing with',
  'vw.1.tekst': 'Tuigtassen Hertogs is the trading name of Karolien Hertogs, a sole trader in Eernegem, Belgium. The workshop is at Kriekestraat 131, 8480 Eernegem. The company number is BE 1039.887.807. You can reach me at <a data-mail="" data-contact="email"></a> or on +32 487 49 33 68.',
  'vw.2.titel': 'What these terms cover',
  'vw.2.tekst': 'Everything you order through this website. Placing an order means you accept them. Work made to order and repairs are agreed separately; whatever we settle together there takes precedence over what is written here.',
  'vw.3.titel': 'Prices',
  'vw.3.tekst': 'All prices are in euro and include VAT. Shipping is charged separately and you see it before you pay. Where a price is struck through, that is the earlier price; you always pay the amount shown without the line.',
  'vw.4.titel': 'Your order',
  'vw.4.tekst': 'Every bag in the collection exists only once. As soon as someone buys it, it leaves the website. If a bag has gone in the meantime while you are checking out, you will be told before anything is charged. The contract is formed once your payment is confirmed; you then receive a confirmation by email.',
  'vw.5.titel': 'Payment',
  'vw.5.tekst': 'Payment is handled by Mollie, with Bancontact as the main option. Your card details never reach this website — they go straight to Mollie. For countries where the shipping cost is not fixed in advance, we agree the amount by email and you pay by bank transfer.',
  'vw.6.titel': 'Delivery',
  'vw.6.tekst': 'Shipping within Belgium is free. To the Netherlands, Germany, France and Luxembourg it is 15 euro. Other countries are quoted on request. Collection from the workshop is possible too, by appointment.',
  'vw.6.tekst2': 'Your order is prepared and goes in the post within three working days. Once the parcel reaches the post office you receive a code to follow it. If something goes wrong on the way, let me know — I will help sort it out.',
  'vw.7.titel': 'Changing your mind',
  'vw.7.tekst': 'If you buy a bag from the collection you have fourteen days to change your mind, counting from the day you receive it. You do not have to say why. Let me know within those fourteen days by email or message, and then send the bag back to the workshop within fourteen days. The cost of returning it is yours.',
  'vw.7.tekst2': 'Send the bag back as you received it. You may look at it and try it as you would in a shop; if you use it beyond that, I may charge for the loss in value. Once the bag is back, you have your money returned within fourteen days, including the shipping you paid.',
  'vw.7.tekst3': '<strong>One exception:</strong> a bag made to order — from your own saddle, or entirely to your specification — is not covered by that right. Such a piece exists only for you and I cannot sell it to anyone else. That is what the law provides for as well.',
  'vw.8.titel': 'Guarantee',
  'vw.8.tekst': 'As a consumer you have a two-year legal guarantee against defects that were already there on delivery. That guarantee always applies in full, whatever is written below.',
  'vw.8.tekst2': 'On top of that I do the following: if something comes loose or breaks prematurely within the year — a seam, say — I repair it free of charge. It should not happen and I am glad to put it right. Where it is damage rather than wear, the cost is charged. In both cases, get in touch first.',
  'vw.8.tekst3': 'Leather is a natural material. Differences in colour, scars and marks from the life of the saddle belong to it and are not a defect — they are exactly why these bags exist.',
  'vw.9.titel': 'If something is wrong',
  'vw.9.tekst': 'Just let me know. I am one person and you get me, not a call centre. If we cannot work it out together, you can turn to the Belgian Consumer Ombudsman (<a href=\"https://consumentenombudsdienst.be\" target=\"_blank\" rel=\"noopener\">consumentenombudsdienst.be</a>) or to the European online dispute platform (<a href=\"https://ec.europa.eu/consumers/odr\" target=\"_blank\" rel=\"noopener\">ec.europa.eu/consumers/odr</a>).',
  'vw.10.titel': 'Applicable law',
  'vw.10.tekst': 'Belgian law applies to this agreement. Disputes belong before the courts of the judicial district of West Flanders, Bruges division, without prejudice to your right as a consumer to choose your own court.',

  /* --- privacyverklaring --- */
  'pv.paginatitel': 'Privacy statement — Tuigtassen Hertogs',
  'pv.titel': 'Privacy statement',
  'pv.bijgewerkt': 'Last updated 21 September 2026',
  'pv.1.titel': 'Who processes your data',
  'pv.1.tekst': 'Karolien Hertogs, trading as Tuigtassen Hertogs, Kriekestraat 131, 8480 Eernegem, Belgium, company number BE 1039.887.807. Questions about your data are welcome at <a data-mail="" data-contact="email"></a>.',
  'pv.2.titel': 'What I keep, and why',
  'pv.2.tekst': 'If you order something, I keep your name, address, email address, phone number and what you ordered. I need that to make your order, send it, and be able to account for it — the last of those is required by accounting law. If you sign up to hear about a new collection, I keep only your phone number, and nothing else.',
  'pv.2.tekst2': 'If you send me a message on WhatsApp or by email, that conversation stays for as long as it is useful in helping you.',
  'pv.3.titel': 'On what grounds',
  'pv.3.li1': 'Carrying out your order — that is the contract between us.',
  'pv.3.li2': 'Keeping your order in the books — that is a legal obligation.',
  'pv.3.li3': 'Letting you know about a new collection — you give consent for that yourself, and you may withdraw it at any time.',
  'pv.4.titel': 'Who else sees it',
  'pv.4.tekst': 'I do not sell your data and I pass it to no one for advertising. I do work with a number of services that necessarily process it:',
  'pv.4.li1': '<strong>Supabase</strong> — the database holding the collection, the orders and the phone numbers. Servers in the European Union.',
  'pv.4.li2': '<strong>Mollie</strong> — the payment. Your card details never reach this website and go straight to Mollie.',
  'pv.4.li3': '<strong>Cloudflare</strong> — the website itself, and the visitor statistics. Those statistics work without cookies and trace nothing back to a person.',
  'pv.4.li4': '<strong>bpost</strong> — sending your parcel.',
  'pv.4.li5': '<strong>Google</strong> — the typefaces on this website are fetched from Google, which means your IP address reaches them.',
  'pv.4.li6': '<strong>Gmail and WhatsApp</strong> — if we are in touch that way.',
  'pv.5.titel': 'For how long',
  'pv.5.tekst': 'Order data I keep for seven years; that is the period accounting law requires. Your phone number for the notification stays until you ask me to remove it — one message is enough, and it is gone straight away.',
  'pv.6.titel': 'Cookies',
  'pv.6.tekst': 'This website sets no cookies to follow you, so there is no consent banner either. What your browser does remember: what is in your basket, which language you are reading the site in, and briefly the details of your last order so they can be shown on the thank-you page. All of that stays on your own device and never reaches me.',
  'pv.7.titel': 'Your rights',
  'pv.7.tekst': 'You may ask what data I hold about you, have it corrected, have it erased, have the processing restricted, or receive it in a readable file. Where you gave consent, you may withdraw it. Just send me a message; I answer within the month.',
  'pv.7.tekst2': 'If you feel I am not handling it properly, you may complain to the Belgian Data Protection Authority, Drukpersstraat 35, 1000 Brussels (<a href=\"https://www.gegevensbeschermingsautoriteit.be\" target=\"_blank\" rel=\"noopener\">gegevensbeschermingsautoriteit.be</a>).'
};

/* Voor tekst die niet in de HTML staat maar in JavaScript opgebouwd wordt: een
   melding, een aria-label, het onderwerp van een mailtje. Het Nederlands geef
   je mee als terugval, zo blijft de code leesbaar zonder de lijst erbij.

   Moet er iets in de zin ingevuld worden, zet dat dan tussen accolades en geef
   de waarden mee: t('product.fotonr', 'Foto {n} van {naam}', { n: 2, naam }).
   Zo staat de Engelse zin gewoon in de lijst, met de accolades op de plaats
   waar het Engels ze wil — niet noodzakelijk waar het Nederlands ze had. */
const t = (sleutel, nederlands, waarden) => {
  const tekst = (TAAL === 'en' && EN[sleutel]) || nederlands;
  return waarden
    ? tekst.replace(/\{(\w+)\}/g, (heel, naam) => naam in waarden ? waarden[naam] : heel)
    : tekst;
};

/* Wat Karolien per tas invult, staat twee keer in de databank: `verhaal` en
   `verhaal_en`. Is het Engelse veld leeg, dan blijft het Nederlands staan —
   zo kan die vertaling stuk voor stuk groeien zonder lege vakken. Werkt zowel
   voor tekst als voor de lijst met kenmerken; allebei hebben ze een length. */
const veld = (rij, naam) => {
  const en = rij[naam + '_en'];
  return TAAL === 'en' && en && en.length ? en : rij[naam];
};

/* De Nederlandse tekst staat in de HTML zelf; die bewaren we bij de eerste
   beurt, anders kan je niet meer terug naar het Nederlands. */
const NEDERLANDS = new WeakMap();

function vertaal(wortel = document) {
  wortel.querySelectorAll('[data-t]').forEach((el) => {
    if (!NEDERLANDS.has(el)) NEDERLANDS.set(el, { html: el.innerHTML, attr: {} });
    el.innerHTML = (TAAL === 'en' && EN[el.dataset.t]) || NEDERLANDS.get(el).html;
  });

  wortel.querySelectorAll('[data-t-attr]').forEach((el) => {
    if (!NEDERLANDS.has(el)) NEDERLANDS.set(el, { html: null, attr: {} });
    const bewaard = NEDERLANDS.get(el).attr;
    el.dataset.tAttr.split(';').forEach((paar) => {
      const [attr, sleutel] = paar.split(':').map((stuk) => stuk.trim());
      if (!attr || !sleutel) return;
      if (bewaard[attr] === undefined) bewaard[attr] = el.getAttribute(attr) || '';
      el.setAttribute(attr, (TAAL === 'en' && EN[sleutel]) || bewaard[attr]);
    });
  });

  /* Een vertaalde alinea kan een link of een contactgegeven bevatten dat bij
     het laden één keer ingevuld werd. innerHTML heeft dat nu overschreven, dus
     vullen we het opnieuw in. */
  wortel.querySelectorAll('[data-wa]').forEach((el) => { el.href = wa(el.dataset.wa); });
  wortel.querySelectorAll('[data-mail]').forEach((el) => {
    el.href = 'mailto:' + CONTACT.email + (el.dataset.mail ? '?subject=' + encodeURIComponent(el.dataset.mail) : '');
  });
  wortel.querySelectorAll('[data-contact]').forEach((el) => { el.textContent = CONTACT[el.dataset.contact]; });

  markeerTaal();
}

/* Eén knop in plaats van NL / EN naast elkaar: ze toont waar je naartoe gaat.
   Sta je op het Nederlands, dan staat er EN. Half zo breed, en de schuine
   streep ertussen is weg — die maakte de rechterkant van de balk druk.

   In het uitklapmenu is er plaats voor de naam voluit; daar staat "English" in
   plaats van "EN". Dat zegt `data-taal-vorm="lang"`.

   We hertekenen de balk niet om dit bij te werken: daar hangen de teller van
   het mandje en het uitklapmenu aan. */
const ANDERE_TAAL = { nl: 'en', en: 'nl' };
const TAALNAAM = { nl: 'Nederlands', en: 'English' };
const TAALUITLEG = { nl: 'Schakel over naar het Nederlands', en: 'Switch to English' };

const taalKnopTekst = (lang, vorm) => vorm === 'lang' ? TAALNAAM[lang] : lang.toUpperCase();

function markeerTaal() {
  const doel = ANDERE_TAAL[TAAL];
  document.querySelectorAll('[data-taal]').forEach((knop) => {
    knop.dataset.taal = doel;
    knop.textContent = taalKnopTekst(doel, knop.dataset.taalVorm);
    knop.setAttribute('aria-label', TAALUITLEG[doel]);
  });
}

function zetTaal(nieuw) {
  if (!TALEN.includes(nieuw) || nieuw === TAAL) return;
  TAAL = nieuw;
  try { localStorage.setItem(TAAL_SLEUTEL, TAAL); } catch { /* privémodus */ }
  document.documentElement.lang = TAAL;
  vertaal();
  // Pagina's die hun eigen stukken tekenen, kunnen hierop wachten.
  document.dispatchEvent(new CustomEvent('taal:gewisseld'));
}

document.addEventListener('click', (e) => {
  const knop = e.target.closest('[data-taal]');
  if (knop) zetTaal(knop.dataset.taal);
});

const NAV = [
  { href: 'index.html', label: 'Home', page: 'home', t: 'nav.home' },
  { href: 'collectie.html', label: 'Collectie', page: 'collectie', t: 'nav.collectie' },
  { href: 'bio.html', label: 'Verhaal', page: 'bio', t: 'nav.bio' },
  { href: 'onderhoud.html', label: 'Herstel & zorg', page: 'onderhoud', t: 'nav.onderhoud' },
  { href: 'faq.html', label: 'FAQ', page: 'faq', t: 'nav.faq' }
];

function renderHeader(actief) {
  const link = (n, extra) =>
    `<a href="${n.href}" class="font-label-mono text-label-mono uppercase transition-colors duration-300 ${extra} ${
      n.page === actief
        ? 'text-primary border-primary'
        : 'text-secondary border-transparent hover:text-primary'
    }" data-t="${n.t}">${n.label}</a>`;

  return `
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center gap-6 py-5">
  <a href="index.html" class="shrink-0">
    <img src="assets/logo.png" alt="Tuigtassen Hertogs — handtassen uit oude paardenzadels"
         width="600" height="296" class="h-16 md:h-20 w-auto">
  </a>
  <nav class="hidden lg:flex items-center gap-8">
    ${NAV.map((n) => link(n, 'border-b pb-1')).join('')}
  </nav>
  <div class="flex items-center gap-1">
    <a href="${CONTACT.instagram}" target="_blank" rel="noopener"
       class="hidden xl:inline-block whitespace-nowrap bg-deep-forest text-on-primary rounded
              font-label-sm text-label-sm uppercase tracking-widest px-6 py-3 mr-3
              hover:bg-tertiary transition-colors duration-300" data-t="header.instagram">Achter de schermen</a>
    <!-- Tussenin past de knop hierboven niet; daar blijft de Instagram-link als
         icoon staan. Op een telefoon valt ze helemaal weg: daar stond ze als
         naamloos icoontje te concurreren met het mandje en het menu, terwijl
         Instagram ook gewoon onderaan in de voet staat. -->
    <a href="${CONTACT.instagram}" target="_blank" rel="noopener" aria-label="Instagram — een kijkje achter de schermen"
       class="hidden lg:inline-flex xl:hidden p-2 text-on-surface hover:text-primary transition-colors duration-300">
      <span class="material-symbols-outlined">photo_camera</span>
    </a>
    <a href="bestellen.html" aria-label="Winkelmandje"
       class="relative p-2 text-on-surface hover:text-primary transition-colors duration-300">
      <span class="material-symbols-outlined">shopping_bag</span>
      <span data-cart-badge hidden
            class="absolute top-0 right-0 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-on-primary
                   font-label-sm text-[10px] flex items-center justify-center"></span>
    </a>
    <button type="button" data-menu-toggle aria-label="Menu" aria-expanded="false"
            class="lg:hidden p-2 text-on-surface hover:text-primary transition-colors duration-300">
      <span class="material-symbols-outlined">menu</span>
    </button>
    <!-- De taalknop sluit de rij af, helemaal rechts. Op een telefoon staat ze
         niet hier maar onderaan het uitklapmenu: naast het mandje en het menu
         werd het daar te vol. -->
    <button type="button" data-taal="${ANDERE_TAAL[TAAL]}" aria-label="${TAALUITLEG[ANDERE_TAAL[TAAL]]}"
            class="hidden lg:inline-block ml-2 px-2 py-2 font-label-mono text-label-mono uppercase
                   text-secondary hover:text-primary border-b border-transparent hover:border-primary
                   transition-colors duration-300">${taalKnopTekst(ANDERE_TAAL[TAAL])}</button>
  </div>
</div>
<div data-menu hidden class="lg:hidden border-t border-surface-container bg-surface">
  <nav class="px-margin-mobile py-4 flex flex-col gap-1">
    ${NAV.map((n) => link(n, 'border-l-2 pl-4 py-2')).join('')}
    <!-- Hier is plaats voor de naam voluit; in de balk staat enkel EN. De
         streepjeslijn zet ze los van de navigatie: het is geen zesde pagina. -->
    <span class="block mt-2 mb-1 border-t border-dashed border-secondary/40"></span>
    <button type="button" data-taal="${ANDERE_TAAL[TAAL]}" data-taal-vorm="lang"
            aria-label="${TAALUITLEG[ANDERE_TAAL[TAAL]]}"
            class="font-label-mono text-label-mono uppercase text-secondary hover:text-primary
                   text-left border-l-2 border-transparent pl-4 py-2
                   transition-colors duration-300">${taalKnopTekst(ANDERE_TAAL[TAAL], 'lang')}</button>
  </nav>
</div>`;
}

function renderFooter() {
  const kolom = (titel, sleutel, items) => `
    <div class="space-y-3">
      <h4 class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4" data-t="${sleutel}">${titel}</h4>
      ${items.join('')}
    </div>`;
  const a = (href, tekst, attr = '', sleutel = '') =>
    `<a href="${href}" ${attr} ${sleutel ? `data-t="${sleutel}"` : ''} class="block font-body-md text-body-md text-secondary hover:text-primary transition-colors duration-300">${tekst}</a>`;

  return `
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-12
            grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-gutter">
  <div>
    <!-- Zonder de ondertitel: die staat hier te klein om leesbaar te zijn. -->
    <img src="assets/logo-woordmerk.png" alt="Tuigtassen Hertogs" width="600" height="270" loading="lazy"
         class="h-36 w-auto -ml-1">
  </div>
  ${kolom('Navigatie', 'footer.navigatie', NAV.map((n) => a(n.href, n.label, '', n.t)))}
  ${kolom('Contact', 'footer.contact', [
    a(wa(), 'WhatsApp', 'target="_blank" rel="noopener"'),
    a('mailto:' + CONTACT.email, CONTACT.email),
    `<p class="font-body-md text-body-md text-on-surface-variant">${CONTACT.adres}</p>`
  ])}
  ${kolom('Volg mee', 'footer.volg', [
    a(CONTACT.instagram, 'Instagram', 'target="_blank" rel="noopener"'),
    a(CONTACT.facebook, 'Facebook', 'target="_blank" rel="noopener"')
  ])}
</div>
<div class="border-t-2 border-dashed border-secondary/40">
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col sm:flex-row justify-between gap-2">
    <p class="font-label-sm text-label-sm text-secondary uppercase tracking-widest">© ${new Date().getFullYear()} ${CONTACT.atelier} — ${CONTACT.btw}</p>
    <p class="font-label-sm text-label-sm text-secondary uppercase tracking-widest flex flex-wrap gap-x-6 gap-y-1">
      <a href="voorwaarden.html" class="hover:text-primary transition-colors" data-t="footer.voorwaarden">Verkoopsvoorwaarden</a>
      <a href="privacy.html" class="hover:text-primary transition-colors" data-t="footer.privacy">Privacy</a>
      <span data-t="footer.gemaakt">Ambachtelijk vervaardigd in België</span>
    </p>
  </div>
</div>`;
}

/* ------------------------------------------------------- collectiedrop
   Staat op de home én op de collectiepagina. Eén plek, want anders loopt de
   tekst op de twee pagina's vroeg of laat uit elkaar.
   De kop verschilt per pagina; die staat in het data-drop-attribuut zelf.
   In de HTML: <section data-drop="Blijf op de hoogte"></section> */
function renderDrop(titel, sleutel) {
  /* Geen streepjesrails boven en onder: het blok heeft zijn eigen kleur en een
     scheurrand (zie .golfrand in styles.css), en dat is één scheiding genoeg.
     Op de collectiepagina loopt het bovendien door in het blok eronder — daar
     zou een rail dwars door één doorlopend vlak lopen. */
  return `
<div class="max-w-xl mx-auto px-margin-mobile text-center">
  <h2 class="font-display-lg text-[36px] md:text-[48px] text-primary mb-4 rotate-1" ${sleutel ? `data-t="${sleutel}"` : ''}>${titel}</h2>
  <p class="font-body-md text-body-md text-on-surface-variant mb-10" data-t="drop.tekst">
    Deze collectie is exclusief, en beperkt in omvang. Wil je als eerste verwittigd worden
    wanneer er nieuwe collectiestukken beschikbaar zijn? Laat hier je telefoonnummer achter
    en ik stuur je een berichtje!
  </p>
  <form data-inschrijving class="flex flex-col sm:flex-row items-stretch gap-4 text-left">
    <input class="input-underline flex-1" name="telefoon" type="tel" required
           autocomplete="tel" placeholder="Jouw telefoonnummer *" data-t-attr="placeholder:drop.telefoon">
    <button type="submit"
            class="shrink-0 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest
                   px-8 py-4 rounded hover:bg-tertiary transition-colors duration-300
                   disabled:opacity-60 disabled:cursor-not-allowed" data-t="drop.knop">
      Inschrijven
    </button>
  </form>
  <p data-inschrijving-melding class="font-body-md text-body-md text-on-surface-variant mt-4 hidden"></p>
</div>`;
}

/* Het nummer gaat naar de tabel `inschrijvingen`; die laat alleen invoegen toe,
   niemand kan de lijst uitlezen met de publieke sleutel. */
function inschrijvingKlaarzetten(form) {
  const melding = form.parentElement.querySelector('[data-inschrijving-melding]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const knop = form.querySelector('button');
    knop.disabled = true;
    melding.classList.add('hidden');
    try {
      const antwoord = await fetch(`${SUPABASE_URL}/rest/v1/inschrijvingen`, {
        method: 'POST',
        headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ telefoon: form.telefoon.value.trim() })
      });
      if (!antwoord.ok) throw new Error(`HTTP ${antwoord.status}`);
      form.remove();
      melding.textContent = t('drop.gelukt', 'Genoteerd. Je krijgt een bericht zodra er nieuwe tassen klaar zijn.');
    } catch (fout) {
      console.warn('Inschrijven lukte niet.', fout);
      melding.textContent = t('drop.mislukt', 'Dat lukte niet. Probeer het later opnieuw, of stuur me een berichtje op WhatsApp.');
      knop.disabled = false;
    }
    melding.classList.remove('hidden');
  });
}

/* --------------------------------------------------------------- badges
   Eén plek die bepaalt welk label een tas krijgt. "Verkocht" wint van
   "Nieuw": een verkochte tas is geen nieuwtje meer.
   Een tas is nieuw zolang `nieuw: true` in PRODUCTS staat. */
function badge(p) {
  const verkocht = p.voorraad < 1;
  const label = verkocht ? 'Verkocht' : p.nieuw ? 'Nieuw' : null;
  if (!label) return '';
  const kleur = verkocht
    ? 'bg-inverse-surface text-inverse-on-surface'
    : 'bg-primary text-on-primary';
  return `<span data-t="kaart.${verkocht ? 'verkocht' : 'nieuw'}" class="absolute top-2 right-2 z-20 ${kleur}
                 font-label-sm text-label-sm uppercase tracking-widest px-3 py-1">${label}</span>`;
}

/* ------------------------------------------------------------- productkaart */
function productCard(p, klasse = '') {
  const uitverkocht = p.voorraad < 1;
  // Elk stuk is er maar één, dus een catalogusnummer is hier echte informatie.
  const nr = String(PRODUCTS.indexOf(p) + 1).padStart(2, '0');
  // Heeft de tas een tweede foto, dan wisselt hij bij hover — je draait het
  // object als het ware om. Anders blijft het bij de lichte zoom.
  const tweede = p.fotos[1] ? fotoUrl(p.fotos[1]) : null;

  /* Geen twee huiden zijn gelijk. Elke kaart krijgt een ander silhouet, een
     andere hoogte en een andere verticale verschuiving, zodat het raster niet
     als een spreadsheet oogt. Drie varianten die zich herhalen: genoeg om de
     rigiditeit te breken, weinig genoeg om nog rustig te blijven. */
  const i = PRODUCTS.indexOf(p) % 3;
  const huid = ['hide-mask', 'hide-mask-2', 'hide-mask-3'][i];
  const hoogte = ['h-96', 'h-[28rem]', 'h-80'][i];
  const zak = ['md:translate-y-12', '', 'md:translate-y-24'][i];
  return `
<a href="product.html?id=${p.id}" class="group block ${zak} ${klasse}">
  <div class="${hoogte} relative">
    <!-- Eén naad per kaart. Achter het beeld lag hier nog een tweede
         streepjesrand die bij hover wegschoof; samen met de zadelsteek in het
         beeld bewogen er dan twee stiksels tegelijk. De binnenste blijft. -->
    <div class="absolute inset-0 z-10 overflow-hidden bg-surface-container-low ${huid} soft-edge-mask saddle-stitch saddle-stitch-dark">
      ${mediaTag(fotoUrl(p.fotos[0]), `absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out
                  group-hover:scale-105 ${tweede ? 'group-hover:opacity-0' : ''}
                  ${uitverkocht ? 'grayscale opacity-70' : ''}`, { alt: veld(p, 'naam') })}
      ${tweede ? mediaTag(tweede, `absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-out
                  group-hover:opacity-100 group-hover:scale-105 ${uitverkocht ? 'grayscale' : ''}`,
                  { extra: 'aria-hidden="true"' }) : ''}
    </div>

    <!-- De vaste code van de tas als ze er een heeft. Die blijft dezelfde,
         ook als er iets verkocht wordt en de volgorde verschuift; zonder code
         valt de kaart terug op haar plaats in de collectie. -->
    <span class="absolute top-2 left-2 z-20 font-label-mono text-label-mono text-secondary">${p.code || 'Nr. ' + nr}</span>
    ${badge(p)}
  </div>

  <div class="flex justify-between items-start gap-4 mt-6">
    <div>
      <h3 class="font-headline-md text-headline-md text-primary leading-tight">${veld(p, 'naam')}</h3>
      <p class="font-label-mono text-label-mono text-secondary uppercase mt-1">${veld(p, 'herkomst')}</p>
    </div>
    ${toonPrijs(p) ? `<span class="shrink-0 font-label-mono text-label-mono bg-surface-container-high border border-secondary
                 text-on-surface-variant px-2 py-1 whitespace-nowrap">${prijsHtml(p)}</span>` : ''}
  </div>
</a>`;
}

/* ------------------------------------------------------------- opstarten */
document.addEventListener('DOMContentLoaded', () => {
  /* Foto's invullen. Hier stond eerst meteen het meegeleverde beeld, en pas
     daarna het beeld dat Karolien gewisseld had. De browser laadde er dan twee
     na elkaar: bij een trage verbinding stond de oude foto seconden te kijken
     voor de nieuwe eroverheen schoof. Daarom wachten we eerst op het lijstje
     met vervangen beelden — dat is een paar honderd bytes, terwijl een foto
     al gauw honderden kilobytes weegt. Zo laadt er per plek maar één beeld.

     Laat dat lijstje op zich wachten, dan vullen we na twee tellen alsnog de
     meegeleverde beelden in: een pagina zonder foto's is erger dan een foto
     die nadien nog wisselt. */
  const vulBeelden = (vervangen) => {
    const kies = (naam) => vervangen[naam] || IMG[naam];
    document.querySelectorAll('[data-img]').forEach((el) => {
      const url = kies(el.dataset.img);
      if (url && el.getAttribute('src') !== url) el.setAttribute('src', url);
    });
    document.querySelectorAll('[data-img-bg]').forEach((el) => {
      const url = kies(el.dataset.imgBg);
      if (url && el.dataset.bgUrl !== url) {
        el.dataset.bgUrl = url;
        el.style.backgroundImage = `url('${url}')`;
      }
    });
  };

  const noodrem = setTimeout(() => vulBeelden({}), 2000);
  sfeerGeladen.then((rijen) => {
    clearTimeout(noodrem);
    const vervangen = {};
    rijen.forEach(({ naam, pad }) => { vervangen[naam] = opslagUrl(pad); });
    vulBeelden(vervangen);
  });

  // header + footer
  const header = document.getElementById('site-header');
  if (header) header.innerHTML = renderHeader(document.body.dataset.page);
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = renderFooter();
  document.querySelectorAll('[data-drop]').forEach((el) => {
    el.innerHTML = renderDrop(el.dataset.drop || 'Blijf op de hoogte', el.dataset.dropT);
    inschrijvingKlaarzetten(el.querySelector('[data-inschrijving]'));
  });

  // Pas nadat de balk, de voet en het inschrijfblok er staan: die dragen zelf
  // ook sleutels, en anders worden ze overgeslagen.
  document.documentElement.lang = TAAL;
  vertaal();

  // mobiel menu
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.hidden = !menu.hidden;
      toggle.setAttribute('aria-expanded', String(!menu.hidden));
    });
  }

  // contactgegevens invullen
  document.querySelectorAll('[data-wa]').forEach((el) => { el.href = wa(el.dataset.wa); });
  document.querySelectorAll('[data-mail]').forEach((el) => {
    el.href = 'mailto:' + CONTACT.email + (el.dataset.mail ? '?subject=' + encodeURIComponent(el.dataset.mail) : '');
  });
  document.querySelectorAll('[data-contact]').forEach((el) => { el.textContent = CONTACT[el.dataset.contact]; });

  // mandje-teller
  const updateBadge = () => {
    const n = cartCount();
    document.querySelectorAll('[data-cart-badge]').forEach((el) => {
      el.textContent = n;
      el.hidden = n === 0;
    });
  };
  document.addEventListener('cart:changed', updateBadge);
  updateBadge();

  // "in mandje"-knoppen op eender welke pagina
  document.addEventListener('click', (e) => {
    const knop = e.target.closest('[data-add]');
    if (!knop) return;
    e.preventDefault();
    if (cartAdd(knop.dataset.add)) toast('Toegevoegd aan je mandje');
    else toast('Deze tas is niet meer beschikbaar');
  });
});
