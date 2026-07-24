// ============================================================
// WELDON'S FORGE (EN) — per-question learning stats
// Stored in localStorage. Feeds the Weak Points analysis.
// ============================================================
const KEY = "wf_en_stats_v1";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || { cats: {}, wrong: {} }; }
  catch { return { cats: {}, wrong: {} }; }
}
function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} }

// Record one answer. cats[cat] = {t: attempts, c: correct}; wrong[id] tracks misses.
export function recordAnswer({ id, cat, ok }) {
  const s = load();
  const c = s.cats[cat] || { t: 0, c: 0 };
  c.t += 1; if (ok) c.c += 1;
  s.cats[cat] = c;
  if (ok) { delete s.wrong[id]; }
  else { s.wrong[id] = { n: (s.wrong[id]?.n || 0) + 1, ts: Date.now() }; }
  save(s);
}

// Category stats, weakest first (lowest accuracy, then most attempts).
export function getCatStats() {
  const s = load();
  return Object.keys(s.cats).map(cat => {
    const { t, c } = s.cats[cat];
    return { cat, total: t, correct: c, acc: t ? c / t : 0 };
  }).sort((a, b) => a.acc - b.acc || b.total - a.total);
}

export function getSummary() {
  const s = load();
  let t = 0, c = 0;
  Object.values(s.cats).forEach(v => { t += v.t; c += v.c; });
  return { total: t, correct: c, acc: t ? c / t : 0, wrongCount: Object.keys(s.wrong).length };
}

// Wrong question ids, most-missed first.
export function getWrongIds() {
  const s = load();
  return Object.keys(s.wrong)
    .map(id => ({ id: isNaN(+id) ? id : +id, n: s.wrong[id].n, ts: s.wrong[id].ts }))
    .sort((a, b) => b.n - a.n || b.ts - a.ts)
    .map(x => x.id);
}

export function clearStats() { save({ cats: {}, wrong: {} }); }
