// ============================================================
// WELDON'S FORGE (EN) — lightweight i18n helper
// Languages: English / Tiếng Việt / Bahasa Indonesia
// Persisted per-device. tr(obj, lang) falls back to English.
// ============================================================
const LKEY = "wf_en_lang_v1";

export const LANGS = [
  { id: "en", label: "EN", name: "English" },
  { id: "vi", label: "VI", name: "Tiếng Việt" },
  { id: "id", label: "ID", name: "Bahasa Indonesia" },
];

export function loadLang() {
  try { return localStorage.getItem(LKEY) || "en"; } catch { return "en"; }
}
export function saveLang(l) { try { localStorage.setItem(LKEY, l); } catch {} }

// obj = { en, vi, id }  ->  string for lang, falling back to English
export const tr = (obj, lang) => {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en || "";
};
