// sjekk-askeridrett.js - hent askeridrett.no og se etter leaflet + prefix
const fs = require('fs');
(async () => {
  let out = '';
  for (const u of ['https://askeridrett.no/', 'https://askeridrett.no/kart.html']) {
    try {
      const r = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const t = await r.text();
      out += '=== ' + u + ' HTTP ' + r.status + '\n';
      out += '  leaflet: ' + t.includes('leaflet') + ' | setPrefix: ' + t.includes('setPrefix') + ' | lenge: ' + (t.includes('L.map') || t.includes('L.map(')) + '\n';
      // finn kart-referanser
      const m = t.match(/<title>[^<]*<\/title>/i);
      if (m) out += '  title: ' + m[0] + '\n';
      const m2 = t.match(/L\.map\([^)]*\)/);
      if (m2) out += '  map-init: ' + m2[0] + '\n';
    } catch (e) { out += '=== ' + u + ' FEIL: ' + String(e) + '\n'; }
    await new Promise(z => setTimeout(z, 300));
  }
  fs.writeFileSync(__dirname + '/askeridrett-sjekk.txt', out, 'utf8');
  console.log('ferdig');
})();