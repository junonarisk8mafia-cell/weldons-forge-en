// ============================================================
// WELDON'S FORGE (EN) — Today's Review (spaced repetition)
// Re-asks questions that are due (see getDueIds in stats_en.js).
// Answers feed recordAnswer, which moves each card along the
// 1 → 3 → 7 → 14 → 30 day schedule. UI in EN / VI / ID.
// NOTE: VI/ID strings are first-pass translations.
// ============================================================
import { useEffect, useState } from "react";
import { QUIZ_STAGES } from "./questions_en.js";
import { recordAnswer, markStudiedToday, getDueIds } from "./stats_en.js";
import { localizeQ } from "./localize_en.js";
import { tr } from "./i18n_en.js";
import { SFX } from "./sound.js";
import { JaText, JaHint } from "./JaText.jsx";

const MAX = 20;
const F = "'Share Tech Mono',monospace";
const LETTERS = ["A", "B", "C", "D"];

export const REVIEW_UI = {
  button: { en: "📅 Today's review", vi: "📅 Ôn tập hôm nay", id: "📅 Ulasan hari ini" },
  count: { en: "{n} questions", vi: "{n} câu", id: "{n} soal" },
  title: { en: "TODAY'S REVIEW", vi: "ÔN TẬP HÔM NAY", id: "ULASAN HARI INI" },
  correct: { en: "✓ CORRECT", vi: "✓ ĐÚNG", id: "✓ BENAR" },
  wrong: { en: "✗ WRONG — answer: {x}", vi: "✗ SAI — đáp án: {x}", id: "✗ SALAH — jawaban: {x}" },
  next: { en: "NEXT →", vi: "TIẾP →", id: "LANJUT →" },
  finish: { en: "FINISH", vi: "HOÀN THÀNH", id: "SELESAI" },
  doneTitle: { en: "Review complete!", vi: "Hoàn thành ôn tập!", id: "Ulasan selesai!" },
  doneBody: {
    en: "{c}/{t} correct. Missed questions come back tomorrow; correct ones come back later (3 → 7 → 14 → 30 days) until mastered.",
    vi: "Đúng {c}/{t}. Câu sai sẽ quay lại vào ngày mai; câu đúng sẽ quay lại sau (3 → 7 → 14 → 30 ngày) cho đến khi thành thạo.",
    id: "Benar {c}/{t}. Soal yang salah muncul lagi besok; yang benar muncul lagi nanti (3 → 7 → 14 → 30 hari) sampai dikuasai.",
  },
  empty: {
    en: "Nothing to review today. Questions you miss in battle will show up here tomorrow.",
    vi: "Hôm nay không có gì để ôn. Câu bạn trả lời sai trong trận sẽ xuất hiện ở đây vào ngày mai.",
    id: "Tidak ada ulasan hari ini. Soal yang salah dalam pertarungan akan muncul di sini besok.",
  },
  back: { en: "← Back", vi: "← Quay lại", id: "← Kembali" },
};
const fill = (s, vars) => s.replace(/\{(\w)\}/g, (_, k) => vars[k]);

const BY_ID = {};
QUIZ_STAGES.forEach(s => s.questions.forEach(q => { BY_ID[q.id] = q; }));

function shuffleOpts(q) {
  const order = q.opts.map((_, i) => i).sort(() => Math.random() - 0.5);
  return { ...q, opts: order.map(i => q.opts[i]), a: order.indexOf(q.a) };
}

export function ReviewDrill({ lang, onExit }) {
  const [qs] = useState(() =>
    getDueIds().map(id => BY_ID[id]).filter(Boolean).slice(0, MAX)
      .map(q => shuffleOpts(localizeQ(q, lang))));
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, [cur, finished]);

  const box = { background: "#141414", border: "1px solid #1e1e1e", borderRadius: 10, padding: "12px 14px" };
  const btn = (primary) => ({
    width: "100%", padding: "12px", borderRadius: 8, cursor: "pointer", fontFamily: F, fontWeight: "bold",
    fontSize: "0.74rem", border: primary ? "none" : "1px solid #2a2a2a",
    background: primary ? "#FF6600" : "transparent", color: primary ? "#fff" : "#888",
  });
  const wrap = { padding: 16, fontFamily: F, background: "#0d0d0d", minHeight: "100vh" };

  if (!qs.length || finished) {
    return (
      <div style={wrap}>
        <div style={{ ...box, textAlign: "center", marginTop: 40 }}>
          <div style={{ fontSize: "2rem", marginBottom: 8 }}>{qs.length ? "🔥" : "✅"}</div>
          {qs.length > 0 && <div style={{ color: "#FF6600", fontWeight: "bold", fontSize: "0.9rem", marginBottom: 8 }}>{tr(REVIEW_UI.doneTitle, lang)}</div>}
          <div style={{ color: "#aaa", fontSize: "0.68rem", lineHeight: 1.6 }}>
            {qs.length ? fill(tr(REVIEW_UI.doneBody, lang), { c: score, t: qs.length }) : tr(REVIEW_UI.empty, lang)}
          </div>
        </div>
        <button onClick={onExit} style={{ ...btn(false), marginTop: 14 }}>{tr(REVIEW_UI.back, lang)}</button>
      </div>
    );
  }

  const q = qs[cur];
  const done = sel !== null;

  function pick(i) {
    if (done) return;
    setSel(i);
    const ok = i === q.a;
    recordAnswer({ id: q.id, cat: q.cat, ok });
    markStudiedToday();
    if (ok) { setScore(s => s + 1); SFX.correct(); } else SFX.wrong();
  }
  function next() {
    if (cur + 1 >= qs.length) setFinished(true);
    else { setCur(c => c + 1); setSel(null); }
  }
  function optStyle(i) {
    let border = "#2a2a2a", bg = "#141414", color = "#ddd";
    if (done && i === q.a) { border = "#22c55e"; bg = "#0f2a0f"; color = "#86efac"; }
    else if (done && i === sel) { border = "#ef4444"; bg = "#2a0f0f"; color = "#fca5a5"; }
    return {
      display: "block", width: "100%", textAlign: "left", padding: "11px 12px", borderRadius: 8, marginBottom: 7,
      border: `2px solid ${border}`, background: bg, color, fontSize: "0.74rem", fontFamily: F,
      cursor: done ? "default" : "pointer", lineHeight: 1.5,
    };
  }

  return (
    <div style={wrap}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <button onClick={onExit} style={{ background: "none", border: "none", color: "#777", fontFamily: F, fontSize: "0.68rem", cursor: "pointer", padding: 0 }}>{tr(REVIEW_UI.back, lang)}</button>
        <span style={{ color: "#FF6600", fontWeight: "bold", fontSize: "0.72rem", letterSpacing: "0.05em" }}>{tr(REVIEW_UI.title, lang)}</span>
        <span style={{ color: "#777", fontSize: "0.66rem" }}>{cur + 1}/{qs.length}</span>
      </div>

      <div style={{ ...box, marginBottom: 12 }}>
        <div style={{ fontSize: "0.55rem", color: "#FF660099", fontWeight: "bold", marginBottom: 6 }}>[{q.cat}]</div>
        <div style={{ fontSize: "0.82rem", color: "#eee", lineHeight: 1.6 }}><JaText text={q.q} /></div>
        <JaHint lang={lang} />
      </div>

      {q.opts.map((o, i) => (
        <button key={i} onClick={() => pick(i)} style={optStyle(i)}>
          <span style={{ fontWeight: "bold", marginRight: 8, color: "#FF6600" }}>{LETTERS[i]}</span>
          <JaText text={o} active={done} />
        </button>
      ))}

      {done && (
        <div style={{ ...box, marginTop: 6, borderColor: sel === q.a ? "#22c55e" : "#ef4444" }}>
          <div style={{ color: sel === q.a ? "#22c55e" : "#ef4444", fontWeight: "bold", fontSize: "0.8rem", marginBottom: 6 }}>
            {sel === q.a ? tr(REVIEW_UI.correct, lang) : fill(tr(REVIEW_UI.wrong, lang), { x: LETTERS[q.a] })}
          </div>
          <div style={{ color: "#bbb", fontSize: "0.68rem", lineHeight: 1.55, marginBottom: 10 }}><JaText text={q.exp} /></div>
          <button onClick={next} style={btn(true)}>{cur + 1 >= qs.length ? tr(REVIEW_UI.finish, lang) : tr(REVIEW_UI.next, lang)}</button>
        </div>
      )}
    </div>
  );
}
