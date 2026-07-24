// ============================================================
// WELDON'S FORGE (EN) — Mock Exam
// Exam-style: time limit, no feedback until scored → pass/fail,
// per-category breakdown, wrong-answer review. Feeds Weak Points.
// ============================================================
import { useState, useEffect, useRef } from "react";
import { QUIZ_STAGES } from "./questions_en.js";
import { recordAnswer } from "./stats_en.js";

const PASS = 0.6;

const ALL_Q = [];
QUIZ_STAGES.forEach(s => s.questions.forEach(q => ALL_Q.push(q)));

const shuffle = a => [...a].sort(() => Math.random() - 0.5);
const fmt = sec => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

export function MockScreen({ onExit }) {
  const [phase, setPhase] = useState("setup"); // setup | exam | result
  const [qs, setQs] = useState([]);
  const [ans, setAns] = useState([]);
  const [cur, setCur] = useState(0);
  const [left, setLeft] = useState(0);
  const [limit, setLimit] = useState(0);
  const timer = useRef(null);
  const qsRef = useRef([]), ansRef = useRef([]);
  useEffect(() => { qsRef.current = qs; }, [qs]);
  useEffect(() => { ansRef.current = ans; }, [ans]);
  useEffect(() => () => clearInterval(timer.current), []);

  function start(n, minutes) {
    const pool = shuffle(ALL_Q).slice(0, Math.min(n, ALL_Q.length));
    setQs(pool); setAns(new Array(pool.length).fill(null));
    setCur(0); setLimit(minutes * 60); setLeft(minutes * 60); setPhase("exam");
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setLeft(t => { if (t <= 1) { clearInterval(timer.current); finish(); return 0; } return t - 1; });
    }, 1000);
  }
  function pick(i) { setAns(a => { const c = [...a]; c[cur] = i; return c; }); }
  function finish() {
    clearInterval(timer.current);
    const cqs = qsRef.current, cans = ansRef.current;
    cqs.forEach((q, i) => recordAnswer({ id: q.id, cat: q.cat, ok: cans[i] === q.a }));
    setPhase("result");
  }
  function submit() {
    const un = ans.filter(a => a === null).length;
    if (un > 0 && !window.confirm(`${un} unanswered. Submit and score now?`)) return;
    finish();
  }

  const page = { padding: 16, fontFamily: "'Share Tech Mono',monospace", background: "#0d0d0d", minHeight: "100vh", paddingBottom: 90, maxWidth: 480, margin: "0 auto" };
  const orb = "'Orbitron',monospace";

  // ── setup ──
  if (phase === "setup") {
    return (
      <div style={page}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <button onClick={onExit} style={ghost}>←</button>
          <span style={{ color: "#FF6600", fontFamily: orb, fontWeight: 900, fontSize: "0.9rem", letterSpacing: "0.05em" }}>🎯 MOCK EXAM</span>
        </div>
        <div style={{ color: "#777", fontSize: "0.66rem", lineHeight: 1.7, margin: "6px 0 18px" }}>
          Exam style — timed, no feedback until you submit. Random questions from all stages. Pass mark {Math.round(PASS * 100)}%.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <MockBtn label="20 questions / 15 min" sub="Quick check" onClick={() => start(20, 15)} />
          <MockBtn label="40 questions / 30 min" sub="Full length" onClick={() => start(40, 30)} />
        </div>
        <div style={{ marginTop: 16, background: "#141414", border: "1px solid #1e1e1e", borderRadius: 8, padding: "10px 12px", fontSize: "0.6rem", color: "#666", lineHeight: 1.8 }}>
          · No explanations shown during the exam<br />
          · You can go back and change answers<br />
          · Auto-submits when time runs out<br />
          · Results feed into your Weak Points
        </div>
      </div>
    );
  }

  // ── exam ──
  if (phase === "exam") {
    const q = qs[cur];
    const answered = ans.filter(a => a !== null).length;
    const low = left <= 60;
    return (
      <div style={page}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: "0.7rem", fontWeight: "bold", color: "#ddd" }}>Q {cur + 1} / {qs.length}</span>
          <span style={{ fontSize: "0.85rem", fontWeight: "bold", color: low ? "#ef4444" : "#22c55e", fontFamily: orb }}>⏱ {fmt(left)}</span>
        </div>
        <div style={{ background: "#1e1e1e", height: 5, borderRadius: 3, overflow: "hidden", marginBottom: 12 }}>
          <div style={{ width: `${answered / qs.length * 100}%`, height: "100%", background: "#FF6600", transition: "width .3s" }} />
        </div>

        <div style={{ background: "#141414", border: "1px solid #1e1e1e", borderRadius: 10, padding: "12px 14px", marginBottom: 12 }}>
          <div style={{ fontSize: "0.55rem", color: "#FF660099", fontWeight: "bold", marginBottom: 6 }}>[{q.cat}]</div>
          <div style={{ fontSize: "0.82rem", color: "#eee", lineHeight: 1.6 }}>{q.q}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {q.opts.map((o, i) => {
            const on = ans[cur] === i;
            return (
              <button key={i} onClick={() => pick(i)} style={{
                textAlign: "left", padding: "11px 12px", borderRadius: 8,
                border: `2px solid ${on ? "#FF6600" : "#2a2a2a"}`,
                background: on ? "#1a1005" : "#141414", color: "#ddd",
                fontSize: "0.74rem", fontFamily: "'Share Tech Mono',monospace", cursor: "pointer", lineHeight: 1.5,
              }}>
                <span style={{ color: on ? "#FF6600" : "#555", fontWeight: "bold", marginRight: 8 }}>{["A", "B", "C", "D"][i]}</span>{o}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={nav(cur === 0)}>← Prev</button>
          {cur < qs.length - 1
            ? <button onClick={() => setCur(c => c + 1)} style={nav(false, true)}>Next →</button>
            : <button onClick={submit} style={{ ...nav(false), background: "#22c55e", color: "#04140a", border: "none" }}>SUBMIT</button>}
        </div>
        {cur !== qs.length - 1 && (
          <button onClick={submit} style={{ width: "100%", marginTop: 8, padding: "9px", borderRadius: 8, border: "1px dashed #2a2a2a", background: "transparent", color: "#555", fontSize: "0.58rem", cursor: "pointer", fontFamily: "monospace" }}>
            Submit now ({answered}/{qs.length} answered)
          </button>
        )}
      </div>
    );
  }

  // ── result ──
  const correct = qs.reduce((n, q, i) => n + (ans[i] === q.a ? 1 : 0), 0);
  const acc = qs.length ? correct / qs.length : 0;
  const passed = acc >= PASS;
  const used = limit - left;
  const catMap = {};
  qs.forEach((q, i) => { const m = catMap[q.cat] || { t: 0, c: 0 }; m.t++; if (ans[i] === q.a) m.c++; catMap[q.cat] = m; });
  const cats = Object.keys(catMap).map(c => ({ cat: c, ...catMap[c] })).sort((a, b) => a.c / a.t - b.c / b.t);
  const missed = qs.map((q, i) => ({ q, sel: ans[i] })).filter(x => x.sel !== x.q.a);

  return (
    <div style={page}>
      <div style={{ textAlign: "center", background: passed ? "#0a200a" : "#200a0a", border: `2px solid ${passed ? "#22c55e" : "#ef4444"}`, borderRadius: 12, padding: "18px 12px", marginBottom: 16 }}>
        <div style={{ fontSize: "1.9rem", marginBottom: 4 }}>{passed ? "🎉" : "📝"}</div>
        <div style={{ fontSize: "1.1rem", fontWeight: 900, fontFamily: orb, color: passed ? "#22c55e" : "#ef4444" }}>{passed ? "PASS" : "FAIL"}</div>
        <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#eee", margin: "6px 0", fontFamily: orb }}>{correct}/{qs.length}</div>
        <div style={{ fontSize: "0.64rem", color: "#777" }}>Score {Math.round(acc * 100)}% (pass {Math.round(PASS * 100)}%) · Time {fmt(used)}</div>
      </div>

      <div style={{ color: "#555", fontSize: "0.58rem", fontWeight: "bold", marginBottom: 8, letterSpacing: "0.04em" }}>BY CATEGORY (weakest first)</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
        {cats.map(c => {
          const a = c.c / c.t;
          const col = a >= 0.8 ? "#22c55e" : a >= 0.6 ? "#f59e0b" : a >= 0.4 ? "#fb923c" : "#ef4444";
          return (
            <div key={c.cat} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.64rem" }}>
              <span style={{ color: "#bbb" }}>{c.cat}</span>
              <span style={{ color: col, fontWeight: "bold" }}>{c.c}/{c.t}</span>
            </div>
          );
        })}
      </div>

      {missed.length > 0 && (
        <>
          <div style={{ color: "#555", fontSize: "0.58rem", fontWeight: "bold", marginBottom: 8, letterSpacing: "0.04em" }}>REVIEW — WRONG ANSWERS ({missed.length})</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
            {missed.map((m, i) => (
              <div key={i} style={{ background: "#141414", border: "1px solid #3a1a1a", borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ fontSize: "0.52rem", color: "#FF660099", fontWeight: "bold", marginBottom: 3 }}>[{m.q.cat}]</div>
                <div style={{ fontSize: "0.7rem", color: "#ddd", lineHeight: 1.5, marginBottom: 5 }}>{m.q.q}</div>
                <div style={{ fontSize: "0.66rem", color: "#22c55e", fontWeight: "bold", marginBottom: 4 }}>✓ {m.q.opts[m.q.a]}</div>
                {m.q.exp && <div style={{ fontSize: "0.62rem", color: "#888", lineHeight: 1.5 }}>{m.q.exp}</div>}
              </div>
            ))}
          </div>
        </>
      )}

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setPhase("setup")} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "none", background: "#FF6600", color: "#fff", fontFamily: orb, fontWeight: "bold", fontSize: "0.7rem", cursor: "pointer" }}>RETRY</button>
        <button onClick={onExit} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1px solid #2a2a2a", background: "transparent", color: "#888", fontFamily: orb, fontWeight: "bold", fontSize: "0.7rem", cursor: "pointer" }}>EXIT</button>
      </div>
    </div>
  );
}

const ghost = { background: "transparent", border: "1px solid #2a2a2a", color: "#888", borderRadius: 8, width: 34, height: 34, cursor: "pointer", fontFamily: "monospace", fontSize: "1rem" };
function nav(disabled, primary) {
  return {
    flex: 1, padding: "11px", borderRadius: 8,
    border: primary ? "none" : "1px solid #2a2a2a",
    background: disabled ? "#141414" : primary ? "#FF6600" : "transparent",
    color: disabled ? "#333" : primary ? "#fff" : "#aaa",
    fontSize: "0.72rem", fontWeight: "bold", cursor: disabled ? "default" : "pointer", fontFamily: "monospace",
  };
}
function MockBtn({ label, sub, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: "100%", textAlign: "left", padding: "14px 16px", borderRadius: 10,
      border: "1px solid #2a2a2a", background: "#141414", cursor: "pointer", fontFamily: "'Share Tech Mono',monospace",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <span>
        <span style={{ display: "block", fontSize: "0.82rem", fontWeight: "bold", color: "#eee" }}>{label}</span>
        <span style={{ display: "block", fontSize: "0.56rem", color: "#666", marginTop: 2 }}>{sub}</span>
      </span>
      <span style={{ color: "#FF6600", fontSize: "1rem" }}>▶</span>
    </button>
  );
}
