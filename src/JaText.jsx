// ============================================================
// WELDON'S FORGE (EN) — tap-to-hear Japanese inside any text.
// <JaText text="..."/> underlines every Japanese run (kanji/kana,
// plus attached letters/digits like "V形開先", "AW検定") and speaks
// it on tap. Works in every UI language because it detects the
// Japanese script, not the translation.
// ============================================================
import { useEffect, useState } from "react";
import { speakJa, openVoiceInstall } from "./speak.js";
import { tr } from "./i18n_en.js";

const J = "々〆぀-ヿ㐀-䶿一-鿿ｦ-ﾟ";
const RUN = new RegExp(`[A-Za-z0-9]*[${J}]+(?:[A-Za-z0-9]*[${J}]+)*[A-Za-z0-9]*`, "g");

export function JaText({ text, active = true }) {
  if (typeof text !== "string" || !text) return text ?? null;
  const parts = [];
  let last = 0;
  for (const m of text.matchAll(RUN)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const ja = m[0];
    parts.push(active ? (
      <span key={m.index} role="button" tabIndex={0}
        onClick={e => { e.stopPropagation(); speakJa(ja); }}
        onKeyDown={e => { if (e.key === "Enter") { e.stopPropagation(); speakJa(ja); } }}
        style={{ cursor: "pointer", textDecoration: "underline dotted #FF6600", textUnderlineOffset: 3 }}>
        {ja}
      </span>
    ) : ja);
    last = m.index + ja.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

const HINT = {
  en: "🔊 Tap underlined Japanese to hear it",
  vi: "🔊 Chạm vào tiếng Nhật được gạch chân để nghe",
  id: "🔊 Ketuk teks Jepang bergaris bawah untuk mendengar",
};
export const JaHint = ({ lang }) => (
  <div style={{ color: "#666", fontSize: "0.56rem", marginTop: 6 }}>{tr(HINT, lang)}</div>
);

const NO_VOICE = {
  en: "Japanese voice is not installed on this phone. Tap here to install it (Settings → Text-to-speech → Japanese).",
  vi: "Điện thoại chưa cài giọng đọc tiếng Nhật. Chạm vào đây để cài (Cài đặt → Chuyển văn bản thành giọng nói → Tiếng Nhật).",
  id: "Suara bahasa Jepang belum terpasang di ponsel ini. Ketuk di sini untuk memasang (Setelan → Teks-ke-ucapan → Jepang).",
};

// Mounted once at the app root; shows when any speak attempt finds no Japanese voice.
export function NoVoiceBanner({ lang }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(true);
    window.addEventListener("wf-no-voice", on);
    return () => window.removeEventListener("wf-no-voice", on);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => { openVoiceInstall(); setShow(false); }} style={{
      position: "fixed", left: "50%", transform: "translateX(-50%)", width: "calc(100% - 24px)", maxWidth: 456,
      bottom: "calc(72px + env(safe-area-inset-bottom))", zIndex: 300, textAlign: "left", cursor: "pointer",
      background: "#1a1005", border: "1px solid #FF6600", borderRadius: 8, padding: "10px 12px",
      color: "#f59e0b", fontSize: "0.64rem", lineHeight: 1.5, fontFamily: "'Share Tech Mono',monospace",
    }}>🔇 {tr(NO_VOICE, lang)}</button>
  );
}
