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
  scheduleReview(id, ok);
}

// ── Spaced review ───────────────────────────────────────────
// A missed question comes back tomorrow; each correct answer on its due
// day pushes it further out (1 → 3 → 7 → 14 → 30 days), then it's mastered.
const RKEY = "wf_en_srs_v1";
const INTERVALS = [1, 3, 7, 14, 30];

function loadSrs() {
  try {
    const raw = localStorage.getItem(RKEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  // First run: questions already missed before this feature existed are due now.
  const srs = {};
  Object.keys(load().wrong).forEach(id => { srs[id] = { box: 0, due: today() }; });
  return srs;
}
function saveSrs(srs) { try { localStorage.setItem(RKEY, JSON.stringify(srs)); } catch {} }

function scheduleReview(id, ok) {
  const srs = loadSrs();
  const t = today();
  if (!ok) srs[id] = { box: 0, due: addDays(INTERVALS[0]) };
  else if (srs[id] && srs[id].due <= t) {
    const box = srs[id].box + 1;
    if (box >= INTERVALS.length) delete srs[id];
    else srs[id] = { box, due: addDays(INTERVALS[box]) };
  }
  saveSrs(srs);
}

// Question ids due for review today, most overdue first.
export function getDueIds() {
  const srs = loadSrs();
  const t = today();
  return Object.keys(srs)
    .filter(id => srs[id].due <= t)
    .sort((a, b) => srs[a].due.localeCompare(srs[b].due))
    .map(id => (isNaN(+id) ? id : +id));
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

export function clearStats() { save({ cats: {}, wrong: {} }); saveSrs({}); }

// ── Daily streak ────────────────────────────────────────────
const SKEY = "wf_en_streak_v1";
// Local calendar date (YYYY-MM-DD); toISOString() is UTC, which in Japan rolls the day at 9:00.
const localDay = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const today = () => localDay(new Date());
const yesterday = () => { const d = new Date(); d.setDate(d.getDate() - 1); return localDay(d); };
const addDays = n => { const d = new Date(); d.setDate(d.getDate() + n); return localDay(d); };
function loadStreak() {
  try { return JSON.parse(localStorage.getItem(SKEY)) || { last: null, streak: 0, best: 0 }; }
  catch { return { last: null, streak: 0, best: 0 }; }
}
// Call when the user studies (answers a question). Dedupes by day.
export function markStudiedToday() {
  const s = loadStreak();
  const t = today();
  if (s.last === t) return s.streak;
  const y = yesterday();
  s.streak = s.last === y ? s.streak + 1 : 1;
  s.last = t;
  s.best = Math.max(s.best || 0, s.streak);
  try { localStorage.setItem(SKEY, JSON.stringify(s)); } catch {}
  window.dispatchEvent(new Event("wf-studied"));
  return s.streak;
}
// { streak, best, studiedToday } — streak breaks if a full day was skipped.
export function getStreak() {
  const s = loadStreak();
  const t = today();
  const y = yesterday();
  const alive = s.last === t || s.last === y;
  return { streak: alive ? s.streak : 0, best: s.best || 0, studiedToday: s.last === t };
}
