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
        'surface-container-lowest': '#ffffff', 'surface-container-low': '#f6f3eb',
        'surface-container': '#f1eee6', 'surface-container-high': '#ebe8e0', 'surface-container-highest': '#e5e2db',
        'inverse-surface': '#31312c', 'inverse-on-surface': '#f3f1e9',
        outline: '#747872', 'outline-variant': '#c4c8c0', 'surface-tint': '#546253',
        'deep-forest': '#2d3b2d', khaki: '#cfc8ad', 'tan-leather': '#e1c0a9', 'burnt-umber': '#5d2800', 'paper-cream': '#f1eee6',
        'stitch-color': '#c0a58c', 'success-green': '#2d3b2d'
      },
      borderRadius: { sm: '0.125rem', DEFAULT: '0.25rem', md: '0.375rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
      spacing: {
        unit: '8px', gutter: '24px', 'gutter-stitch': '24px', 'stack-raw': '48px',
        'margin-mobile': '20px', 'margin-desktop': '5vw',
        'container-max': '1440px', 'section-padding': '96px', 'section-xl': '120px'
      },
      maxWidth: { 'container-max': '1440px' },
      /* Twee stemmen:
         - Caveat — het handschrift van de maakster. Grote koppen.
         - EB Garamond — al de rest. Broodtekst, kleinere koppen, en in
           kapitalen met ruime spatiëring ook de labels en de navigatie, zodat
           die aansluiten bij het woordmerk in het logo.
         Wil je iets anders proberen: vervang de familie hieronder én de
         fonts.googleapis-link in de <head> van de 7 pagina's. */
      fontFamily: {
        'display-lg': ['Caveat', 'cursive'], 'display-lg-mobile': ['Caveat', 'cursive'],
        handwritten: ['Caveat', 'cursive'],
        'headline-md': ['EB Garamond', 'serif'],
        'body-lg': ['EB Garamond', 'serif'], 'body-md': ['EB Garamond', 'serif'],
        'label-sm': ['EB Garamond', 'serif'], 'label-mono': ['EB Garamond', 'serif']
      },
      fontSize: {
        'display-lg': ['72px', { lineHeight: '1.1', fontWeight: '600' }],
        'display-lg-mobile': ['48px', { lineHeight: '1.1', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '1.2', fontWeight: '500' }],
        'body-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm': ['13px', { lineHeight: '1.3', letterSpacing: '0.14em', fontWeight: '600' }],
        'label-mono': ['15px', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '600' }]
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
  email: 'info@tuigtassenhertogs.be',   // TODO: echt mailadres
  telefoon: '+32 487 49 33 68',
  whatsapp: '32487493368',            // internationaal, zonder + en zonder spaties
  adres: 'Eernegem, België',          // TODO: straat en nummer, als je die publiek wil
  btw: 'BE 0000.000.000',             // TODO: echt btw-nummer
  instagram: 'https://www.instagram.com/tuigtassenhertogs',   // TODO: echte link
  facebook: 'https://www.facebook.com/tuigtassenhertogs',     // TODO: echte link
  iban: 'BE00 0000 0000 0000',        // TODO: echt rekeningnummer
  bic: 'GEBABEBB'
};

/* Verzendopties. Sleutel = waarde in het keuzemenu bij het afrekenen. */
const LEVERING = {
  be:     { label: 'Verzenden naar België',            kost: 0,  adres: true },
  nl:     { label: 'Verzenden naar Nederland',         kost: 15, adres: true },
  de:     { label: 'Verzenden naar Duitsland',         kost: 15, adres: true },
  afhaal: { label: 'Afhalen in het atelier',           kost: 0,  adres: false }
};

/* Bestellingen worden per mail bevestigd en per overschrijving betaald.
   Zet hier een formulier-endpoint (bv. Formspree of een eigen script) en
   elke bestelling wordt ook automatisch naar je doorgestuurd. Leeg = uit. */
const ORDER_ENDPOINT = '';

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
  bagToteGroen:     B + 'AB6AXuBUwnP0camHvxprG2Ulm2xNEtwcE4BOxX5zCj2YTYjwmiag9HgSy_8MAnR_NiyGGgHW4cstEMetWx5kPpaluXjvQEoWxS3Gum8P869LOOnyxtLTmHFb-X947bFxnBvEjvdNPNmyoo3tV24PEniBxqWsaB7YlsfmLEjb4hDZaaT0fdEAWS7AsqoywRomjkpljTWB8tRZuTr-mUBcVcPYuh5dWhDh7Pfn_0l3x7vJ3m1tvuTuJW43i6JWLw'
};

/* ------------------------------------------------------------- producten
   `voorraad` = aantal beschikbare exemplaren. Elk stuk is uniek, dus
   meestal 1. Zet op 0 en de tas toont als "verkocht". */
const PRODUCTS = [
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

/* Google levert deze beelden standaard op 512px breed. Voor een hero of een
   paginabrede foto is dat zichtbaar zacht; met =w1600 komt het origineel
   (1408px) binnen. Geldt niet voor de eigen foto's in assets/foto/. */
for (const sleutel in IMG) {
  if (IMG[sleutel].startsWith(B)) IMG[sleutel] += '=w1600';
}

/* ------------------------------------------------------------ mandje
   Opslag: localStorage. Vorm: [{id, aantal}] */
const CART_KEY = 'th-cart';
const euro = new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' });

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
const NAV = [
  { href: 'index.html', label: 'Home', page: 'home' },
  { href: 'collectie.html', label: 'Collectie & op maat', page: 'collectie' },
  { href: 'bio.html', label: 'Bio', page: 'bio' },
  { href: 'onderhoud.html', label: 'Onderhoud & Reparaties', page: 'onderhoud' }
];

function renderHeader(actief) {
  const link = (n, extra) =>
    `<a href="${n.href}" class="font-label-mono text-label-mono uppercase transition-colors duration-300 ${extra} ${
      n.page === actief
        ? 'text-primary border-primary'
        : 'text-on-surface-variant border-transparent hover:text-primary'
    }">${n.label}</a>`;

  return `
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center gap-6 py-5">
  <a href="index.html" class="shrink-0">
    <img src="assets/logo.png" alt="Tuigtassen Hertogs — handtassen uit oude paardenzadels"
         width="600" height="296" class="h-11 md:h-14 w-auto">
  </a>
  <nav class="hidden lg:flex items-center gap-8">
    ${NAV.map((n) => link(n, 'border-b pb-1')).join('')}
  </nav>
  <div class="flex items-center gap-1">
    <a href="onderhoud.html#atelier"
       class="hidden xl:inline-block bg-deep-forest text-on-primary rounded
              font-label-sm text-label-sm uppercase tracking-widest px-6 py-3 mr-3
              hover:bg-tertiary transition-colors duration-300">Bezoek atelier</a>
    <a href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp"
       class="hidden sm:inline-flex p-2 text-on-surface hover:text-primary transition-colors duration-300">
      <span class="material-symbols-outlined">chat</span>
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
  </div>
</div>
<div data-menu hidden class="lg:hidden border-t border-surface-container bg-surface">
  <nav class="px-margin-mobile py-4 flex flex-col gap-1">
    ${NAV.map((n) => link(n, 'border-l-2 pl-4 py-2')).join('')}
  </nav>
</div>`;
}

function renderFooter() {
  const kolom = (titel, items) => `
    <div class="space-y-3">
      <h4 class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">${titel}</h4>
      ${items.join('')}
    </div>`;
  const a = (href, tekst, attr = '') =>
    `<a href="${href}" ${attr} class="block font-body-md text-body-md text-secondary hover:text-primary transition-colors duration-300">${tekst}</a>`;

  return `
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-12
            grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-gutter">
  <div class="space-y-4">
    <img src="assets/logo.png" alt="Tuigtassen Hertogs" width="600" height="296" loading="lazy"
         class="h-24 w-auto -ml-1">
    <p class="font-body-md text-body-md text-secondary max-w-xs">
      Handgenaaide tassen uit afgedankte paardenzadels, en herstellingen van paardenmateriaal.
      Uit het atelier van ${CONTACT.naam}.
    </p>
  </div>
  ${kolom('Navigatie', NAV.map((n) => a(n.href, n.label)))}
  ${kolom('Contact', [
    a(wa(), 'WhatsApp', 'target="_blank" rel="noopener"'),
    a('mailto:' + CONTACT.email, CONTACT.email),
    `<p class="font-body-md text-body-md text-secondary">${CONTACT.adres}</p>`
  ])}
  ${kolom('Volg mee', [
    a(CONTACT.instagram, 'Instagram', 'target="_blank" rel="noopener"'),
    a(CONTACT.facebook, 'Facebook', 'target="_blank" rel="noopener"')
  ])}
</div>
<div class="border-t-2 border-dashed border-secondary/40">
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col sm:flex-row justify-between gap-2">
    <p class="font-label-sm text-label-sm text-secondary uppercase tracking-widest">© ${new Date().getFullYear()} ${CONTACT.atelier} — ${CONTACT.btw}</p>
    <p class="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Ambachtelijk vervaardigd in België</p>
  </div>
</div>`;
}

/* --------------------------------------------------------------- badges
   Eén plek die bepaalt welk label een tas krijgt. "Verkocht" wint van
   "Nieuw": een verkochte tas is geen nieuwtje meer.
   Een tas is nieuw zolang `nieuw: true` in PRODUCTS staat. */
function badge(p) {
  const label = p.voorraad < 1 ? 'Verkocht' : p.nieuw ? 'Nieuw' : null;
  if (!label) return '';
  const kleur = label === 'Verkocht'
    ? 'bg-inverse-surface text-inverse-on-surface'
    : 'bg-primary text-on-primary';
  return `<span class="absolute top-2 right-2 z-20 ${kleur}
                 font-label-sm text-label-sm uppercase tracking-widest px-3 py-1">${label}</span>`;
}

/* ------------------------------------------------------------- productkaart */
function productCard(p, klasse = '') {
  const uitverkocht = p.voorraad < 1;
  // Elk stuk is er maar één, dus een catalogusnummer is hier echte informatie.
  const nr = String(PRODUCTS.indexOf(p) + 1).padStart(2, '0');
  // Heeft de tas een tweede foto, dan wisselt hij bij hover — je draait het
  // object als het ware om. Anders blijft het bij de lichte zoom.
  const tweede = p.fotos[1] ? IMG[p.fotos[1]] : null;

  /* Geen twee huiden zijn gelijk. Elke kaart krijgt een ander silhouet, een
     andere hoogte en een andere verticale verschuiving, zodat het raster niet
     als een spreadsheet oogt. Drie varianten die zich herhalen: genoeg om de
     rigiditeit te breken, weinig genoeg om nog rustig te blijven. */
  const i = PRODUCTS.indexOf(p) % 3;
  const huid = ['hide-mask', 'hide-mask-2', 'hide-mask-3'][i];
  const hoogte = ['h-96', 'h-[28rem]', 'h-80'][i];
  const zak = ['md:translate-y-12', '', 'md:translate-y-24'][i];
  // De losse streepjesrand ligt achter het beeld en schuift bij hover weg —
  // alsof het patroon en het leer twee losse lagen zijn.
  const wijk = ['group-hover:-translate-x-2 group-hover:-translate-y-2',
                'group-hover:translate-x-2 group-hover:translate-y-2',
                'group-hover:translate-x-2 group-hover:-translate-y-2'][i];

  return `
<a href="product.html?id=${p.id}" class="group block ${zak} ${klasse}">
  <div class="${hoogte} relative">
    <div class="absolute inset-0 border-2 border-dashed border-secondary/60 ${huid}
                transition-transform duration-500 ${wijk}"></div>

    <div class="absolute inset-0 z-10 overflow-hidden bg-surface-container-low ${huid} soft-edge-mask saddle-stitch saddle-stitch-dark">
      <img src="${IMG[p.fotos[0]]}" alt="${p.naam}" loading="lazy"
           class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out
                  group-hover:scale-105 ${tweede ? 'group-hover:opacity-0' : ''}
                  ${uitverkocht ? 'grayscale opacity-70' : ''}">
      ${tweede ? `
      <img src="${tweede}" alt="" aria-hidden="true" loading="lazy"
           class="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-out
                  group-hover:opacity-100 group-hover:scale-105 ${uitverkocht ? 'grayscale' : ''}">` : ''}
    </div>

    <span class="absolute top-2 left-2 z-20 font-label-mono text-label-mono text-secondary">Nr. ${nr}</span>
    ${badge(p)}
  </div>

  <div class="flex justify-between items-start gap-4 mt-6">
    <div>
      <h3 class="font-headline-md text-headline-md text-primary leading-tight">${p.naam}</h3>
      <p class="font-label-mono text-label-mono text-on-surface-variant uppercase mt-1">${p.herkomst}</p>
    </div>
    <span class="shrink-0 font-label-mono text-label-mono bg-surface-container-high border border-secondary
                 text-on-surface-variant px-2 py-1 whitespace-nowrap">${euro.format(p.prijs)}</span>
  </div>
</a>`;
}

/* ------------------------------------------------------------- opstarten */
document.addEventListener('DOMContentLoaded', () => {
  // foto's invullen
  document.querySelectorAll('[data-img]').forEach((el) => { el.src = IMG[el.dataset.img]; });
  document.querySelectorAll('[data-img-bg]').forEach((el) => {
    el.style.backgroundImage = `url('${IMG[el.dataset.imgBg]}')`;
  });

  // header + footer
  const header = document.getElementById('site-header');
  if (header) header.innerHTML = renderHeader(document.body.dataset.page);
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = renderFooter();

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

  // nieuwsbrief: opent een mail met het adres van de bezoeker
  document.querySelectorAll('[data-newsletter]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const adres = form.querySelector('input[type=email]').value.trim();
      if (!adres) return;
      location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Inschrijving nieuwsbrief')}` +
        `&body=${encodeURIComponent('Schrijf mij in met dit adres: ' + adres)}`;
      form.reset();
      toast('Je mailprogramma opent — verstuur de mail om af te ronden');
    });
  });
});
