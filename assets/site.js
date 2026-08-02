/* Tuigtassen Hertogs — shared layer.
   Alles wat op meerdere pagina's staat, staat hier: thema, contactgegevens,
   foto's, producten, winkelmandje, header en footer. */

/* ---------------------------------------------------------------- thema */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#334428', 'primary-container': '#4a5c3e', 'on-primary': '#ffffff',
        'on-primary-container': '#bfd3ae', 'primary-fixed': '#d4e9c2', 'primary-fixed-dim': '#b8cda8',
        'on-primary-fixed': '#101f07', 'on-primary-fixed-variant': '#3a4c2f', 'inverse-primary': '#b8cda8',
        secondary: '#6b5c4c', 'on-secondary': '#ffffff', 'secondary-container': '#f4dfcb',
        'on-secondary-container': '#716252', 'secondary-fixed': '#f4dfcb', 'secondary-fixed-dim': '#d7c3b0',
        'on-secondary-fixed': '#241a0e', 'on-secondary-fixed-variant': '#524436',
        tertiary: '#3f403d', 'on-tertiary': '#ffffff', 'tertiary-container': '#575753',
        'on-tertiary-container': '#cecdc8', 'tertiary-fixed': '#e4e2dd', 'tertiary-fixed-dim': '#c8c6c2',
        'on-tertiary-fixed': '#1b1c19', 'on-tertiary-fixed-variant': '#474744',
        error: '#ba1a1a', 'on-error': '#ffffff', 'error-container': '#ffdad6', 'on-error-container': '#93000a',
        background: '#fcf9f8', 'on-background': '#1b1c1c',
        surface: '#fcf9f8', 'on-surface': '#1b1c1c', 'on-surface-variant': '#444840',
        'surface-dim': '#dcd9d9', 'surface-bright': '#fcf9f8', 'surface-variant': '#e4e2e1',
        'surface-container-lowest': '#ffffff', 'surface-container-low': '#f6f3f2',
        'surface-container': '#f0eded', 'surface-container-high': '#eae7e7', 'surface-container-highest': '#e4e2e1',
        'inverse-surface': '#303030', 'inverse-on-surface': '#f3f0f0',
        outline: '#75786f', 'outline-variant': '#c5c8bd', 'surface-tint': '#516445',
        'stitch-color': '#d7c3b0', 'success-green': '#334428'
      },
      borderRadius: { DEFAULT: '0.125rem', lg: '0.25rem', xl: '0.5rem', full: '9999px' },
      spacing: {
        unit: '8px', gutter: '24px', 'margin-mobile': '20px', 'margin-desktop': '64px',
        'container-max': '1280px', 'section-padding': '96px'
      },
      maxWidth: { 'container-max': '1280px' },
      /* Koppen: Lora. Klassieke serif met zachte, licht gebogen schreven en
         een gematigd verschil tussen dikke en dunne lijnen — daardoor blijven
         koppen leesbaar op klein scherm, waar Bodoni's haarlijnen wegvielen.
         Wil je iets anders proberen: vervang 'Lora' hieronder én de
         fonts.googleapis-link in de <head> van de 7 pagina's.
         Uitgesprokener alternatief: 'Fraunces'. */
      fontFamily: {
        'display-lg': ['Lora', 'serif'], 'display-lg-mobile': ['Lora', 'serif'],
        'headline-md': ['Lora', 'serif'],
        'body-lg': ['Source Serif 4', 'serif'], 'body-md': ['Source Serif 4', 'serif'],
        'label-sm': ['Hanken Grotesk', 'sans-serif']
      },
      fontSize: {
        'display-lg': ['62px', { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-lg-mobile': ['38px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-md': ['31px', { lineHeight: '1.32', fontWeight: '600' }],
        'body-lg': ['19px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-md': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1.2', letterSpacing: '0.1em', fontWeight: '600' }]
      }
    }
  }
};

/* ------------------------------------------------------- contactgegevens
   TODO Karolien: vervang onderstaande door je echte gegevens. */
const CONTACT = {
  naam: 'Karolien Hertogs',
  atelier: 'Tuigmakerij Hertogs',
  email: 'info@tuigtassenhertogs.be',
  telefoon: '+32 470 00 00 00',
  whatsapp: '32470000000',            // internationaal, zonder + en zonder spaties
  adres: 'Straat 00, 0000 Gemeente',
  btw: 'BE 0000.000.000',
  instagram: 'https://www.instagram.com/tuigtassenhertogs',
  facebook: 'https://www.facebook.com/tuigtassenhertogs',
  iban: 'BE00 0000 0000 0000',
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
  heroSaddle:       B + 'AB6AXuA0W19LSlWwWTEMP8HjOVEiEiNPJc_Oytzrs1QZEcME3J4HxC7N5U0Ztx4dEJzuL_OS8y_43uXFGx098ohHUbBJX6vKd1fNLglo0F6lKZgOyDA_qL3ZbCOO0E7prpOhKgynUae3pmB7kGxAhpdHqvgJQ3iNdHDKaD79KRYvtLPl_ieJVYftUBgvzzAj8aTw0FRI83hlzY153m1xWgIpajzq_FidWhp9n7Qvfty0zR3gO83o348OVSmbvw',
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
    id: 'de-ruitertas', naam: 'De Ruitertas', prijs: 425, voorraad: 1,
    herkomst: 'Cavaleriezadel, ca. 1940',
    kleur: 'Cognac', afmetingen: '38 × 28 × 12 cm', beslag: 'Massief messing',
    fotos: ['bagRuitertas2', 'bagRuitertas', 'bagSatchel'],
    verhaal: 'Dit zadel deed decennialang dienst en droeg de sporen daarvan open en bloot. ' +
      'De diepste slijtplekken heb ik niet weggewerkt, maar bewust in de klep van de tas gelegd — ' +
      'daar waar je ze elke dag ziet. Volledig handgenaaid met gewaxt lijnen garen.'
  },
  {
    id: 'klassieke-tote', naam: 'Klassieke Tote', prijs: 380, voorraad: 1,
    herkomst: 'Tuigleer, plantaardig gelooid',
    kleur: 'Cognac', afmetingen: '36 × 30 × 14 cm', beslag: 'Massief messing',
    fotos: ['bagTote', 'bagTote2'],
    verhaal: 'Een ruime, rechttoe rechtaan tote uit dik tuigleer. Geen voering, geen ritsen — ' +
      'alleen leder, garen en gesp. Hoe meer je hem gebruikt, hoe mooier hij wordt.'
  },
  {
    id: 'veldtas', naam: 'Veldtas', prijs: 310, voorraad: 1,
    herkomst: 'Officierszadel',
    kleur: 'Bosgroen', afmetingen: '28 × 22 × 9 cm', beslag: 'Oud messing, hergebruikt',
    fotos: ['bagVeldtas', 'bagCrossbody'],
    verhaal: 'Compact, met een lange schouderband die je kruislings draagt. De gespen komen ' +
      'van het originele zadel — herbruikt, gepoetst, maar niet gepolijst tot ze hun leeftijd kwijt zijn.'
  },
  {
    id: 'de-boswachter', naam: 'De Boswachter Tote', prijs: 345, voorraad: 1,
    herkomst: 'Dressuurzadel, bosgroen gebeitst',
    kleur: 'Forest green', afmetingen: '34 × 30 × 12 cm', beslag: 'Massief messing',
    fotos: ['bagBoswachter', 'bagToteGroen'],
    verhaal: 'De zitting van dit dressuurzadel was doorgereden, de flappen nog gaaf. ' +
      'Uit die flappen kwamen de twee grote panelen van deze tote, met de handvatten uit de singelriemen.'
  },
  {
    id: 'stadstas-hertog', naam: "Stadstas 'Hertog'", prijs: 280, voorraad: 1,
    herkomst: 'Zadelflappen, bosgroen',
    kleur: 'Bosgroen', afmetingen: '26 × 20 × 8 cm', beslag: 'Massief messing',
    fotos: ['bagStadstas'],
    verhaal: 'Klein genoeg voor de stad, groot genoeg voor wat je echt nodig hebt. ' +
      'De sluiting is een klassieke zadelmakersgesp — die gaat je overleven.'
  },
  {
    id: 'de-grote-reis', naam: 'De Grote Reis', prijs: 520, voorraad: 1,
    herkomst: 'Westernzadel, notelaarbruin',
    kleur: 'Donker notelaar', afmetingen: '48 × 30 × 22 cm', beslag: 'Massief messing',
    fotos: ['bagGroteReis'],
    verhaal: 'Een weekendtas uit een zwaar westernzadel. Het dikste leder dat ik in huis had, ' +
      'en dus ook het meeste handwerk: ruim veertig uur naaien.'
  }
];

const productById = (id) => PRODUCTS.find((p) => p.id === id);

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
    el.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-primary text-on-primary ' +
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
    `<a href="${n.href}" class="font-body-md text-body-md transition-colors duration-300 ${extra} ${
      n.page === actief
        ? 'text-primary border-primary'
        : 'text-on-surface-variant border-transparent hover:text-primary'
    }">${n.label}</a>`;

  return `
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center gap-6 py-5">
  <a href="index.html" class="font-headline-md text-[22px] md:text-headline-md text-primary leading-none">Tuigtassen Hertogs</a>
  <nav class="hidden lg:flex items-center gap-8">
    ${NAV.map((n) => link(n, 'border-b-2 pb-1')).join('')}
  </nav>
  <div class="flex items-center gap-1">
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
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-gutter">
  <div class="space-y-4">
    <p class="font-headline-md text-headline-md text-primary">Tuigtassen Hertogs</p>
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
<div class="border-t border-stitch-color/60">
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col sm:flex-row justify-between gap-2">
    <p class="font-label-sm text-label-sm text-secondary">© ${new Date().getFullYear()} ${CONTACT.atelier} — ${CONTACT.btw}</p>
    <p class="font-label-sm text-label-sm text-secondary">Ambachtelijk vervaardigd in België</p>
  </div>
</div>`;
}

/* ------------------------------------------------------------- productkaart */
function productCard(p, klasse = '') {
  const uitverkocht = p.voorraad < 1;
  return `
<a href="product.html?id=${p.id}" class="group block ${klasse}">
  <div class="bg-surface-container-lowest p-2 ambient-shadow mb-6 relative">
    <div class="aspect-[3/4] overflow-hidden bg-surface-container-low">
      <img src="${IMG[p.fotos[0]]}" alt="${p.naam}" loading="lazy"
           class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${uitverkocht ? 'grayscale opacity-70' : ''}">
    </div>
    ${uitverkocht ? `<span class="absolute top-5 left-5 bg-inverse-surface text-inverse-on-surface px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest">Verkocht</span>` : ''}
  </div>
  <div class="text-center">
    <h3 class="font-body-lg text-body-lg text-primary mb-1">${p.naam}</h3>
    <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">${p.herkomst}</p>
    <p class="font-body-md text-body-md text-secondary">${euro.format(p.prijs)}</p>
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
