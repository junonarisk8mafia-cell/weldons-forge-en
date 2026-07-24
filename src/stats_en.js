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

// ── Daily streak ────────────────────────────────────────────
const SKEY = "wf_en_streak_v1";
const today = () => new Date().toISOString().slice(0, 10); // YYYY-MM-DD
function loadStreak() {
  try { return JSON.parse(localStorage.getItem(SKEY)) || { last: null, streak: 0, best: 0 }; }
  catch { return { last: null, streak: 0, best: 0 }; }
}
// Call when the user studies (answers a question). Dedupes by day.
export function markStudiedToday() {
  const s = loadStreak();
  const t = today();
  if (s.last === t) return s.streak;
  const y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  s.streak = s.last === y ? s.streak + 1 : 1;
  s.last = t;
  s.best = Math.max(s.best || 0, s.streak);
  try { localStorage.setItem(SKEY, JSON.stringify(s)); } catch {}
  return s.streak;
}
// { streak, best, studiedToday } — streak breaks if a full day was skipped.
export function getStreak() {
  const s = loadStreak();
  const t = today();
  const y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const alive = s.last === t || s.last === y;
  return { streak: alive ? s.streak : 0, best: s.best || 0, studiedToday: s.last === t };
}
