// ============================================================
// WELDON'S FORGE (EN) — question localization (lazy-loaded)
// Q_I18N maps question id -> { vi:{q,opts,exp}, id:{q,opts,exp} }.
// The translation data is a SEPARATE async chunk: English-only
// users never download it. It loads on first non-English use.
// localizeQ swaps text for the chosen language, PRESERVING option
// order (so answer index `a` stays valid before shuffling).
// Any missing field (or not-yet-loaded data) falls back to English.
// ============================================================
let Q_I18N = null;

// Kick off (or reuse) the async load of the translation chunk.
// Call this when the user selects a non-English language.
export function ensureTranslations() {
  if (Q_I18N) return Promise.resolve(Q_I18N);
  return import("./questions_i18n.js")
    .then((m) => { Q_I18N = m.Q_I18N; return Q_I18N; })
    .catch(() => null); // on failure, English fallback keeps working
}

export function localizeQ(q, lang) {
  if (!lang || lang === "en" || !Q_I18N) return q;
  const t = Q_I18N[q.id]?.[lang];
  if (!t) return q;
  return {
    ...q,
    q: t.q || q.q,
    opts: Array.isArray(t.opts) && t.opts.length === q.opts.length ? t.opts : q.opts,
    exp: t.exp || q.exp,
  };
}
