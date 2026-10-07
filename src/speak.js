// ============================================================
// WELDON'S FORGE (EN) — Japanese pronunciation (text-to-speech)
// Native: device TTS via @capacitor-community/text-to-speech.
// Browser (dev): Web Speech API.
// ============================================================
import { Capacitor } from "@capacitor/core";
import { TextToSpeech } from "@capacitor-community/text-to-speech";

const LANG = "ja-JP";

// "サンダー / グラインダー" → read the variants with a pause between them;
// drop romaji in parentheses ("感電 (kanden)") so only Japanese is spoken.
const clean = t => t.replace(/\s*[(（][^)）]*[)）]/g, "").replace(/\s*[/／・]\s*/g, "、").trim();

// Resolves to "ok" | "no-voice" | "error". "no-voice" also fires a
// "wf-no-voice" window event so the app-level banner can offer the install.
export async function speakJa(text) {
  const res = await speak(text);
  if (res === "no-voice") window.dispatchEvent(new Event("wf-no-voice"));
  return res;
}

async function speak(text) {
  const t = clean(text);
  if (Capacitor.isNativePlatform()) {
    try {
      const { supported } = await TextToSpeech.isLanguageSupported({ lang: LANG });
      if (!supported) return "no-voice";
      await TextToSpeech.stop();
      await TextToSpeech.speak({ text: t, lang: LANG, rate: 0.85 });
      return "ok";
    } catch {
      return "error";
    }
  }
  const ss = window.speechSynthesis;
  if (!ss) return "no-voice";
  ss.cancel();
  const u = new SpeechSynthesisUtterance(t);
  u.lang = LANG;
  u.rate = 0.85;
  ss.speak(u);
  return "ok";
}

// Opens Android's "install voice data" screen so the user can add Japanese.
export async function openVoiceInstall() {
  if (!Capacitor.isNativePlatform()) return;
  try { await TextToSpeech.openInstall(); } catch {}
}
