// ============================================================
// WELDON'S FORGE (EN) — question localization
// Q_I18N maps question id -> { vi:{q,opts,exp}, id:{q,opts,exp} }.
// localizeQ swaps text for the chosen language, PRESERVING option
// order (so answer index `a` stays valid before shuffling).
// Any missing field falls back to English.
// ============================================================
import { Q_I18N } from "./questions_i18n.js";

export function localizeQ(q, lang) {
  if (!lang || lang === "en") return q;
  const t = Q_I18N[q.id]?.[lang];
  if (!t) return q;
  return {
    ...q,
    q: t.q || q.q,
    opts: Array.isArray(t.opts) && t.opts.length === q.opts.length ? t.opts : q.opts,
    exp: t.exp || q.exp,
  };
}
