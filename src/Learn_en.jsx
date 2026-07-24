// ============================================================
// WELDON'S FORGE (EN) — LEARN tab
// Two sub-modes for foreign welding trainees in Japan:
//   1) Jobsite Terms — English + Japanese + romaji (understand
//      what the boss / 親方 is telling you)
//   2) Safety — the life-and-death basics, gamified reference
// Data is structured so VI/ID translations can be added later.
// ============================================================
import { useState } from "react";

// ── Jobsite vocabulary ──────────────────────────────────────
const VOCAB = [
  {
    cat: "🔧 Tools & Machines", items: [
      { en: "Welding machine", ja: "溶接機", rj: "yōsetsu-ki", note: "The power source." },
      { en: "Welding torch / holder", ja: "溶接トーチ・ホルダ", rj: "tōchi / horuda", note: "What you hold to weld." },
      { en: "Grinder", ja: "サンダー / グラインダー", rj: "sandā / guraindā", note: "For grinding & cutting. Needs a permit." },
      { en: "Wire brush", ja: "ワイヤーブラシ", rj: "waiyā-burashi", note: "Clean the joint before welding." },
      { en: "Chipping hammer", ja: "チッピングハンマー", rj: "chippingu-hanmā", note: "Remove slag." },
      { en: "Clamp", ja: "クランプ", rj: "kuranpu", note: "Hold the workpiece." },
      { en: "Gas cylinder", ja: "ガスボンベ", rj: "gasu-bonbe", note: "Shielding / fuel gas. Secure it upright." },
      { en: "Regulator", ja: "調整器 / レギュレーター", rj: "chōsei-ki", note: "Controls gas pressure/flow." },
    ]
  },
  {
    cat: "⚡ Actions & Commands", items: [
      { en: "Weld it", ja: "溶接して", rj: "yōsetsu shite", note: "Do the weld." },
      { en: "Tack weld", ja: "仮付け", rj: "kari-tsuke", note: "Small temporary weld to hold parts." },
      { en: "Grind it", ja: "削って / グラインダーかけて", rj: "kezutte", note: "Grind the surface / weld." },
      { en: "Clean it", ja: "きれいにして", rj: "kirei ni shite", note: "Clean the joint." },
      { en: "Preheat", ja: "予熱", rj: "yonetsu", note: "Heat before welding (thick / high Ceq)." },
      { en: "Be careful!", ja: "気をつけて！", rj: "ki wo tsukete!", note: "Warning." },
      { en: "Stop / Wait", ja: "止めて / 待って", rj: "yamete / matte", note: "Stop the work." },
      { en: "Redo it", ja: "やり直して", rj: "yari-naoshite", note: "Do it again (defect found)." },
    ]
  },
  {
    cat: "📋 Materials & Positions", items: [
      { en: "Base metal", ja: "母材", rj: "bozai", note: "The material you weld." },
      { en: "Filler / welding rod", ja: "溶接棒 / 溶加材", rj: "yōsetsu-bō", note: "Consumable that fills the joint." },
      { en: "Joint / groove", ja: "継手 / 開先", rj: "tsugite / kaisaki", note: "Where two parts meet." },
      { en: "Bead", ja: "ビード", rj: "bīdo", note: "The line of weld metal." },
      { en: "Flat position", ja: "下向き", rj: "shitamuki", note: "Easiest position." },
      { en: "Vertical", ja: "立向き", rj: "tatemuki", note: "Up/down position." },
      { en: "Horizontal", ja: "横向き", rj: "yokomuki", note: "Side position." },
      { en: "Overhead", ja: "上向き", rj: "uwamuki", note: "Hardest — weld above your head." },
    ]
  },
  {
    cat: "⚠️ Hazards & Safety words", items: [
      { en: "Danger!", ja: "危険！", rj: "kiken!", note: "Serious hazard." },
      { en: "Fume", ja: "ヒューム / 溶接煙", rj: "hyūmu", note: "Toxic smoke — use ventilation/mask." },
      { en: "Electric shock", ja: "感電", rj: "kanden", note: "Check insulation, dry gloves." },
      { en: "Oxygen deficiency", ja: "酸欠", rj: "sanketsu", note: "Confined spaces — measure O₂ first." },
      { en: "Fire / burns", ja: "火事 / 火傷", rj: "kaji / yakedo", note: "Hot work — clear flammables." },
      { en: "Helmet / shield", ja: "溶接面", rj: "yōsetsu-men", note: "Protect eyes from arc light." },
      { en: "PPE", ja: "保護具", rj: "hogogu", note: "Personal protective equipment." },
      { en: "Evacuate", ja: "避難", rj: "hinan", note: "Leave the area now." },
    ]
  },
];

// ── Safety topics ───────────────────────────────────────────
const SAFETY = [
  {
    icon: "🫁", title: "Welding Fume", ja: "ヒューム / 溶接煙 (hyūmu)",
    why: "Welding fume can cause lung disease and, for some steels, cancer. In Japan it is legally controlled dust work.",
    rules: ["Use local exhaust ventilation (局所排気).", "Wear a fit-tested dust respirator (防じんマスク).", "Keep your head out of the plume.", "Never weld coated/galvanized metal without extra ventilation."],
  },
  {
    icon: "⚡", title: "Electric Shock", ja: "感電 (kanden)",
    why: "Welding uses live electricity. Sweat and wet conditions greatly raise the risk of a fatal shock.",
    rules: ["Check holder & cable insulation before use.", "Use dry gloves and dry clothing.", "Use the auto voltage reducing device (自動電撃防止装置).", "Never change electrodes with bare wet hands."],
  },
  {
    icon: "🪣", title: "Confined Space / Oxygen", ja: "酸欠 (sanketsu)",
    why: "Tanks, ship hulls and pits can lose oxygen or fill with gas. Confined-space accidents are often fatal.",
    rules: ["Measure oxygen & gas BEFORE entering.", "Ventilate continuously.", "Have a watcher outside.", "Requires special training (酸欠特別教育)."],
  },
  {
    icon: "🔥", title: "Fire & Hot Work", ja: "火事 / 火傷 (kaji)",
    why: "Sparks travel far and stay hot. Hot work is a leading cause of industrial fires.",
    rules: ["Clear flammables within the spark zone.", "Keep a fire extinguisher nearby.", "Use fire blankets / screens.", "Do a fire watch after finishing."],
  },
  {
    icon: "🥽", title: "Arc Light & Eyes", ja: "アーク光 (āku-kō)",
    why: "Arc light causes 'arc eye' (painful burns) and can damage skin. UV harms nearby workers too.",
    rules: ["Use the correct shade welding shield (溶接面).", "Cover skin — long sleeves, gloves.", "Screen the area to protect others.", "Wear safety glasses under the hood."],
  },
  {
    icon: "🛢️", title: "Gas Cylinders", ja: "ガスボンベ (gasu-bonbe)",
    why: "High-pressure cylinders are dangerous if they fall or leak; fuel gas can explode.",
    rules: ["Chain cylinders upright so they can't fall.", "Close valves when not in use.", "Check for leaks (soapy water).", "Keep fuel gas away from sparks & heat."],
  },
  {
    icon: "⚙️", title: "Grinding", ja: "研削 (kensaku)",
    why: "A bursting grinding wheel or kickback can cause severe injury. Grinder use needs a permit in Japan.",
    rules: ["Requires grinding-wheel training (自由研削 特別教育).", "Check the wheel for cracks before use.", "Use the guard and a face shield.", "Let the wheel reach full speed before cutting."],
  },
  {
    icon: "🪢", title: "Working at Height", ja: "高所作業 (kōsho-sagyō)",
    why: "Falls are a top cause of construction deaths. Above 2 m, a full-body harness is legally required.",
    rules: ["Wear a full harness (フルハーネス) above 2 m.", "Clip onto a solid anchor point.", "Needs harness special training.", "Keep the work area tidy — no trip hazards."],
  },
];

const orb = "'Orbitron',monospace";
const mono = "'Share Tech Mono',monospace";

export function LearnTab() {
  const [mode, setMode] = useState("terms"); // terms | safety
  return (
    <div style={{ padding: 16, fontFamily: mono, background: "#0d0d0d", minHeight: "100vh", paddingBottom: 90 }}>
      <div style={{ color: "#FF6600", fontFamily: orb, fontWeight: 900, fontSize: "0.9rem", letterSpacing: "0.05em", marginBottom: 12 }}>📚 LEARN</div>

      {/* toggle */}
      <div style={{ display: "flex", gap: 6, background: "#141414", border: "1px solid #2a2a2a", borderRadius: 8, padding: 4, marginBottom: 14 }}>
        {[["terms", "🗣️ Jobsite Terms"], ["safety", "🦺 Safety"]].map(([id, l]) => (
          <button key={id} onClick={() => setMode(id)} style={{
            flex: 1, padding: "8px 4px", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: mono,
            fontSize: "0.72rem", fontWeight: "bold",
            background: mode === id ? "#FF6600" : "transparent", color: mode === id ? "#fff" : "#777",
          }}>{l}</button>
        ))}
      </div>

      {mode === "terms" ? (
        <>
          <div style={{ color: "#666", fontSize: "0.6rem", lineHeight: 1.6, marginBottom: 14 }}>
            Understand what the 親方 (oyakata / boss) is telling you. English · 日本語 · romaji.
          </div>
          {VOCAB.map(group => (
            <div key={group.cat} style={{ marginBottom: 18 }}>
              <div style={{ color: "#FFB800", fontSize: "0.68rem", fontWeight: "bold", marginBottom: 8 }}>{group.cat}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {group.items.map(it => (
                  <div key={it.en} style={{ background: "#141414", border: "1px solid #1e1e1e", borderRadius: 8, padding: "9px 11px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                      <span style={{ color: "#eee", fontSize: "0.76rem", fontWeight: "bold" }}>{it.en}</span>
                      <span style={{ color: "#FF6600", fontSize: "0.74rem", textAlign: "right" }}>{it.ja}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginTop: 3 }}>
                      <span style={{ color: "#777", fontSize: "0.6rem", lineHeight: 1.4 }}>{it.note}</span>
                      <span style={{ color: "#22c55e", fontSize: "0.6rem", fontStyle: "italic", whiteSpace: "nowrap" }}>{it.rj}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div style={{ color: "#666", fontSize: "0.6rem", lineHeight: 1.6, marginBottom: 14 }}>
            The basics that keep you alive. Know these before you touch the machine.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SAFETY.map(s => (
              <div key={s.title} style={{ background: "#141414", border: "1px solid #2a1a0a", borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: "1.3rem" }}>{s.icon}</span>
                  <span>
                    <span style={{ display: "block", color: "#FF6600", fontFamily: orb, fontWeight: 900, fontSize: "0.72rem" }}>{s.title}</span>
                    <span style={{ display: "block", color: "#777", fontSize: "0.58rem", marginTop: 1 }}>{s.ja}</span>
                  </span>
                </div>
                <div style={{ color: "#aaa", fontSize: "0.64rem", lineHeight: 1.6, marginBottom: 8 }}>{s.why}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {s.rules.map((r, i) => (
                    <div key={i} style={{ display: "flex", gap: 6, fontSize: "0.64rem", color: "#ddd", lineHeight: 1.5 }}>
                      <span style={{ color: "#22c55e", fontWeight: "bold" }}>✓</span><span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
