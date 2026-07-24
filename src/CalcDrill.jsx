// ============================================================
// WELDON'S FORGE (EN) — Practice Drill
// Randomized numeric welding-calc problems with step-by-step
// solutions. Matches the app's unit conventions:
//   Heat input Q = 60·E·I / (v·1000)  [kJ/cm], v in cm/min
//   Fillet throat a = 0.707 · leg      [mm]
//   Carbon equivalent Ceq (IIW)
//   Fillet allowable shear F = a·L·τ    [kN]
// ============================================================
import { useState } from "react";

const rnd = (min, max, dec = 0) => {
  const v = min + Math.random() * (max - min);
  const p = Math.pow(10, dec);
  return Math.round(v * p) / p;
};

const GENERATORS = [
  // Heat input
  () => {
    const E = rnd(20, 34), I = rnd(150, 340, 0), v = rnd(20, 45, 0);
    const Q = (60 * E * I) / (v * 1000);
    return {
      type: "Heat Input",
      q: `Voltage E = ${E} V, Current I = ${I} A, Travel speed v = ${v} cm/min. Find the heat input Q.`,
      unit: "kJ/cm", ans: Q, tol: Math.max(0.1, Q * 0.03),
      steps: [
        "Formula:  Q = 60 · E · I / (v · 1000)   [kJ/cm]",
        `= 60 × ${E} × ${I} / (${v} × 1000)`,
        `= ${(60 * E * I).toFixed(0)} / ${(v * 1000).toFixed(0)}`,
        `≈ ${Q.toFixed(2)} kJ/cm`,
      ],
    };
  },
  // Carbon equivalent
  () => {
    const C = rnd(0.14, 0.22, 2), Mn = rnd(0.6, 1.4, 2), Cr = rnd(0, 0.3, 2),
      Mo = rnd(0, 0.12, 2), V = rnd(0, 0.05, 2), Ni = rnd(0, 0.3, 2), Cu = rnd(0, 0.3, 2);
    const CE = C + Mn / 6 + (Cr + Mo + V) / 5 + (Ni + Cu) / 15;
    return {
      type: "Carbon Eq.",
      q: `C=${C}, Mn=${Mn}, Cr=${Cr}, Mo=${Mo}, V=${V}, Ni=${Ni}, Cu=${Cu} (%). Find Ceq (IIW).`,
      unit: "", ans: CE, tol: 0.02,
      steps: [
        "Formula:  Ceq = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15",
        `= ${C} + ${(Mn / 6).toFixed(3)} + ${((Cr + Mo + V) / 5).toFixed(3)} + ${((Ni + Cu) / 15).toFixed(3)}`,
        `≈ ${CE.toFixed(3)}  (Ceq > 0.40 → preheat likely required)`,
      ],
    };
  },
  // Fillet throat
  () => {
    const leg = rnd(4, 13, 0);
    const a = 0.707 * leg;
    return {
      type: "Fillet Throat",
      q: `Equal-leg fillet weld with leg length = ${leg} mm. Find the theoretical throat thickness a.`,
      unit: "mm", ans: a, tol: 0.1,
      steps: [
        "Formula:  a = 0.707 × leg   (a = leg / √2)",
        `= 0.707 × ${leg}`,
        `≈ ${a.toFixed(2)} mm`,
      ],
    };
  },
  // Fillet allowable shear force
  () => {
    const leg = rnd(5, 10, 0), L = rnd(60, 200, 0), tau = rnd(80, 120, 0);
    const a = 0.707 * leg;
    const Fn = a * L * tau;   // N
    const Fk = Fn / 1000;     // kN
    return {
      type: "Allow. Force",
      q: `Fillet weld: leg = ${leg} mm, weld length L = ${L} mm, allowable shear stress τ = ${tau} N/mm². Find allowable shear force F.`,
      unit: "kN", ans: Fk, tol: Math.max(0.5, Fk * 0.03),
      steps: [
        "Formula:  F = a · L · τ   (a = 0.707 · leg = throat)",
        `throat a = 0.707 × ${leg} = ${a.toFixed(2)} mm`,
        `F = ${a.toFixed(2)} × ${L} × ${tau} = ${Fn.toFixed(0)} N`,
        `≈ ${Fk.toFixed(1)} kN`,
      ],
    };
  },
];

const newProblem = () => GENERATORS[Math.floor(Math.random() * GENERATORS.length)]();

export function CalcDrill() {
  const [p, setP] = useState(newProblem);
  const [inp, setInp] = useState("");
  const [checked, setChecked] = useState(false);
  const [ok, setOk] = useState(false);
  const [streak, setStreak] = useState(0);
  const [hit, setHit] = useState(0);
  const [total, setTotal] = useState(0);

  function check() {
    if (checked) return;
    const val = parseFloat(inp);
    const good = !isNaN(val) && Math.abs(val - p.ans) <= p.tol;
    setOk(good); setChecked(true); setTotal(t => t + 1);
    if (good) { setHit(h => h + 1); setStreak(s => s + 1); } else setStreak(0);
  }
  function next() { setP(newProblem()); setInp(""); setChecked(false); setOk(false); }

  const card = { background: "#141414", border: "1px solid #2a2a2a", borderRadius: 10, padding: 14, fontFamily: "monospace" };
  const btn = (bg) => ({ width: "100%", padding: 12, border: "none", borderRadius: 8, background: bg, color: "#fff", fontFamily: "monospace", fontWeight: "bold", fontSize: "0.85rem", cursor: "pointer" });

  return (
    <div style={card}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ color: "#FF6600", fontWeight: "bold", fontSize: "0.85rem" }}>🎯 Practice Drill</span>
        <span style={{ color: "#666", fontSize: "0.62rem" }}>Streak <b style={{ color: "#FF6600" }}>{streak}</b> · {hit}/{total}</span>
      </div>

      <div style={{ display: "inline-block", background: "#0a200a", border: "1px solid #22c55e55", borderRadius: 6, padding: "3px 8px", marginBottom: 10 }}>
        <span style={{ color: "#22c55e", fontSize: "0.6rem", fontWeight: "bold" }}>{p.type}</span>
      </div>

      <div style={{ color: "#ddd", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: 12 }}>{p.q}</div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <input type="number" value={inp} disabled={checked}
          onChange={e => setInp(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") check(); }}
          placeholder="Your answer"
          style={{ flex: 1, background: "#222", border: "1px solid #444", borderRadius: 6, color: "#eee", padding: "9px 10px", fontFamily: "monospace", fontSize: "0.9rem" }} />
        <span style={{ color: "#777", fontSize: "0.75rem", width: 46 }}>{p.unit}</span>
      </div>

      {!checked ? (
        <button onClick={check} style={btn("#FF6600")}>CHECK ANSWER</button>
      ) : (
        <>
          <div style={{ background: ok ? "#0a200a" : "#200a0a", border: `1px solid ${ok ? "#22c55e" : "#ef4444"}`, borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
            <div style={{ color: ok ? "#22c55e" : "#ef4444", fontWeight: "bold", fontSize: "0.8rem", marginBottom: 6 }}>
              {ok ? "✓ Correct!" : "✗ Incorrect"} — answer: {p.ans.toFixed(2)} {p.unit}
              <span style={{ color: "#666", fontWeight: "normal", fontSize: "0.6rem" }}> (tol ±{p.tol.toFixed(2)})</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {p.steps.map((s, i) => (
                <div key={i} style={{ color: "#999", fontSize: "0.68rem", lineHeight: 1.5 }}>{s}</div>
              ))}
            </div>
          </div>
          <button onClick={next} style={btn("#1565C0")}>NEXT →</button>
        </>
      )}
    </div>
  );
}
