# askerkultur.no

Oversikt over kulturtilbud i Asker – skolekorps, kor, kulturskole, teater, dans, speider og mer.

Statisk side (én `index.html`, ingen build-step). Publiseres via GitHub Pages på domenet **askerkultur.no**.

## Funksjoner
- Søk på navn/aktivitet
- Filter per kategori (skolekorps, kor & musikk, kulturskole, scenekunst & dans, speider, frivillig, hobby)
- Kort på forsida lenker til egen klubbside (`<slug>.html`)
- Klubbsider med ikon, aktivitet, nettside, e-post/Facebook og adresse

## Data
Klubbdatabase bygger på e-post/lenke-rapporten fra askeridrett.no-oversikten (kulturklubbene, 38 stk), supplert manuelt.
De 39 klubbsidene kommer fra den gamle askeridrett.no-siden (slettet 2026-09-05, gjenfunnet fra inspect-kopi) med ny askerkultur-branding.

### Kilder for adresser (8 klubber som manglet adresse, 2026-09-06)
- Asker KFUK-KFUM Kulturskole: Askertun ved Asker kirke (hvaskjeriasker.no + OSM, postnr 1384)
- Asker Modellklubb: Gamle Systua, Sykehusveien 18, 1385 Asker (motorhobby.no klubboppføring + OSM)
- Heggedal og Blakstad Skolekorps: Heggedal skole, Skoleveien 64, 1389 Heggedal (asker.kommune.no lag- og foreninger + OSM)
- Holmen KFUK-KFUM-speidere: Speiderhula, Holmen kirke, Nesbruveien 55B, 1396 Billingstad (holmen.kmspeider.no + OSM)
- Røyken og Hurum Modellflyklubb: modellflyplassen ved Sørlie gård, Klokkarstua i Hurum (rhmfk.org flyplassregler)
- Røyken Speidergruppe: Gleinåsveien 17, 3440 Røyken (brreg/asker.kommune.no + OSM)
- Sætre Barnekor: Sætre barneskole, Søndre Sætrevei 1, 3475 Sætre (hvaskjeriasker.no + asker.kommune.no skoleoversikt)
- Sætre Speidergruppe: Grytnes ungdomsskole, Stikkvannsveien 4, 3475 Sætre (saetre.speiding.no + OSM)

## Endre innhold
Rediger `KLUBBER`-arrayen i `index.html` og/eller klubb-sidene og push – siden oppdateres automatisk. `s`-feltet i KLUBBER peker på klubbsidens filnavn (uten `.html`).