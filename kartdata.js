// kartdata.js - klubber med koordinater (geokodet mot OSM Nominatim 2026-09-06).
// Generert fil - rediger ikke for hand. Kilder: adressene pa klubbssidene.
const KLUBBER_KART = [
  { s:"arnestad-skolekorps", n:"Arnestad Skolekorps", k:"Skolekorps", adr:"Håkavikveien 49, 1390 Asker", lat:59.802359, lon:10.489763 },
  { s:"asker-1-og-1-skougum-speidergruppe", n:"Asker 1 og 1. Skougum Speidergruppe", k:"Speider", adr:"Solvangveien 32, 1383 Asker", lat:59.839680, lon:10.424440 },
  { s:"asker-drill", n:"Asker Drill", k:"Scenekunst & dans", adr:"Solvang skole, Solvangveien 32, 1383 Asker", lat:59.839936, lon:10.424471 },
  { s:"asker-kfuk-kfum-kulturskole", n:"Asker KFUK-KFUM Kulturskole", k:"Kulturskole", adr:"Askertun, ved Asker kirke, 1384 Asker", lat:59.843334, lon:10.436699 },
  { s:"asker-kfuk-kfum-speidere", n:"Asker KFUK-KFUM Speidere", k:"Speider", adr:"Vardåsen kirke, 1385 Asker", lat:59.826037, lon:10.413489 },
  { s:"asker-kulturskole-dans", n:"Asker Kulturskole – Dans", k:"Kulturskole", adr:"Askerveien 19, 1384 Asker", lat:59.838601, lon:10.435315 },
  { s:"asker-kulturskole-for-de-yngste", n:"Asker Kulturskole – For de yngste", k:"Kulturskole", adr:"Askerveien 19, 1384 Asker", lat:59.838601, lon:10.435315 },
  { s:"asker-kulturskole-korps", n:"Asker Kulturskole – Korps", k:"Kulturskole", adr:"Askerveien 19, 1384 Asker", lat:59.838601, lon:10.435315 },
  { s:"asker-kulturskole-musikk", n:"Asker Kulturskole – Musikk", k:"Kulturskole", adr:"Askerveien 19, 1384 Asker", lat:59.838601, lon:10.435315 },
  { s:"asker-kulturskole-teater", n:"Asker Kulturskole – Teater", k:"Kulturskole", adr:"Askerveien 19, 1384 Asker", lat:59.838601, lon:10.435315 },
  { s:"asker-kulturskole-visuell-kunst", n:"Asker Kulturskole – Visuell kunst", k:"Kulturskole", adr:"Askerveien 19, 1384 Asker", lat:59.838601, lon:10.435315 },
  { s:"asker-kulturskole", n:"Asker Kulturskole", k:"Kulturskole", adr:"Askerveien 19, 1384 Asker", lat:59.838601, lon:10.435315 },
  { s:"asker-modellklubb", n:"Asker Modellklubb", k:"Hobby & teknikk", adr:"Gamle Systua, Sykehusveien 18, 1385 Asker", lat:59.806614, lon:10.379585 },
  { s:"asker-musikkorps", n:"Asker Musikkorps", k:"Kor & musikk", adr:"Asker kulturhus, Strøket 15A, 1383 Asker", lat:59.835895, lon:10.433057 },
  { s:"asker-rode-kors-besoksvenn", n:"Asker Røde Kors – Besøksvenn", k:"Frivillig & annet", adr:"Strøket 8, 1383 Asker", lat:59.835509, lon:10.433058 },
  { s:"asker-rode-kors-hjelpekorps", n:"Asker Røde Kors – Hjelpekorps", k:"Frivillig & annet", adr:"Nedre Frydendal 3, 1384 Asker", lat:59.842710, lon:10.423267 },
  { s:"blakstad-kfuk-kfum-speidere", n:"Blakstad KFUK-KFUM Speidere", k:"Speider", adr:"Grubbegata 4, 0179 Asker", lat:59.681260, lon:10.474836 },
  { s:"crossing-borders", n:"Crossing Borders", k:"Frivillig & annet", adr:"Astrid Skares vei 72, 3474 Asker", lat:59.714439, lon:10.510600 },
  { s:"dansesonen-dans", n:"Dansesonen – Dans", k:"Scenekunst & dans", adr:"Vollenveien 45, 1390 Asker", lat:59.805683, lon:10.471336 },
  { s:"heggedal-og-blakstad-skolekorps", n:"Heggedal og Blakstad Skolekorps", k:"Skolekorps", adr:"Heggedal skole, Skoleveien 64, 1389 Heggedal", lat:59.792000, lon:10.444524 },
  { s:"holmen-kfuk-kfum-speidere", n:"Holmen KFUK-KFUM-speidere", k:"Speider", adr:"Speiderhula, Holmen kirke, Nesbruveien 55B, 1396 Billingstad", lat:59.871751, lon:10.490133 },
  { s:"holmen-skolekorps", n:"Holmen Skolekorps", k:"Skolekorps", adr:"Landøyveien 16, 1394 Asker", lat:59.860075, lon:10.497705 },
  { s:"hyggen-speidergruppe", n:"Hyggen Speidergruppe", k:"Speider", adr:"Hyggenveien 56, 3442 Asker", lat:59.719596, lon:10.370381 },
  { s:"musica-sinfonietta-asker-barne-og-ungdomsorkester", n:"Musica Sinfonietta – Asker barne- og ungdomsorkester", k:"Kor & musikk", adr:"Brages vei 9, 1387 Asker", lat:59.825835, lon:10.441419 },
  { s:"naersnes-sangkor", n:"Nærsnes Sangkor", k:"Kor & musikk", adr:"Nærsnes Grendehus, Sundbyveien 5b, 3478 Asker", lat:59.760851, lon:10.499005 },
  { s:"nesoya-skolekorps", n:"Nesøya Skolekorps", k:"Skolekorps", adr:"Tverråsen 4, 1397 Asker", lat:59.869018, lon:10.517625 },
  { s:"royken-og-hurum-modellflyklubb", n:"Røyken og Hurum Modellflyklubb", k:"Hobby & teknikk", adr:"Modellflyplassen ved Sørlie gård, Klokkarstua i Hurum", lat:59.613792, lon:10.459106 },
  { s:"royken-speidergruppe", n:"Røyken Speidergruppe", k:"Speider", adr:"Gleinåsveien 17, 3440 Røyken", lat:59.746349, lon:10.419559 },
  { s:"royken-teatergruppe", n:"Røyken Teatergruppe", k:"Scenekunst & dans", adr:"Sagveien 14, 3430 Asker", lat:59.739443, lon:10.353117 },
  { s:"saetre-barnekor", n:"Sætre Barnekor", k:"Kor & musikk", adr:"Sætre barneskole, Søndre Sætrevei 1, 3475 Sætre", lat:59.676227, lon:10.538927 },
  { s:"saetre-og-folkestad-skolekorps", n:"Sætre og Folkestad Skolekorps", k:"Skolekorps", adr:"Søndre Sætrevei 1, 3475 Asker", lat:59.676227, lon:10.538927 },
  { s:"saetre-speidergruppe", n:"Sætre Speidergruppe", k:"Speider", adr:"Grytnes ungdomsskole, Stikkvannsveien 4, 3475 Sætre", lat:59.670310, lon:10.536507 },
  { s:"slemmestad-kfuk-kfum-speiderne", n:"Slemmestad KFUK-KFUM-Speiderne", k:"Speider", adr:"Torvbråten, 3470 Asker", lat:59.762014, lon:10.484277 },
  { s:"slemmestad-skolekorps", n:"Slemmestad Skolekorps", k:"Skolekorps", adr:"Slemmestad, 3471 Asker", lat:59.781652, lon:10.495867 },
  { s:"tofte-skolekorps", n:"Tofte Skolekorps", k:"Skolekorps", adr:"Skoledalen 7, 3482 Asker", lat:59.541911, lon:10.554040 },
  { s:"ukm-asker", n:"UKM Asker", k:"Frivillig & annet", adr:"Ungkultur Asker, kirkeveien 206b, 1372 Asker", lat:59.836373, lon:10.432917 },
  { s:"vardasen-barne-og-ungdomskor", n:"Vardåsen barne- og ungdomskor", k:"Kor & musikk", adr:"Vardefaret 40, 1388 Asker", lat:59.826110, lon:10.413569 }
];

// klubber uten fysisk møteadresse (vises i liste, ikke som markor)
const KART_INGEN_POS = [
  { s:"bondi-og-vettre-skolekorps", n:"Bondi & Vettre Skolekorps", aar:"Bare postadresse (Postboks 315, 1372 Asker)" },
  { s:"borgen-skolekorps", n:"Borgen Skolekorps", aar:"Bare postadresse (Postboks 387, 1372 Asker)" },
  { s:"blakstad-kfuk-kfum-speidere", n:"Blakstad KFUK-KFUM Speidere", aar:"Adresse i kilden er forbundskontoret i Oslo - kontakt gruppen for møtested" }
];
