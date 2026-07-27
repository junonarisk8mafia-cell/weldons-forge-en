// ============================================================
// WELDON'S FORGE (EN) — LEARN tab (multilingual: EN / VI / ID)
//   1) Jobsite Terms — Japanese + romaji always shown; the
//      short explanation is translated to the chosen language.
//   2) Safety — why-it-matters + rules translated.
// Japanese term (ja) + romaji (rj) are language-independent:
// that is what you actually hear on the job site.
// NOTE: VI/ID are first-pass translations — a native review is
// recommended before wide release.
// ============================================================
import { useState } from "react";
import { LANGS, loadLang, saveLang, tr } from "./i18n_en.js";

// ── UI strings ──
export const UI = {
  learn:   { en: "LEARN", vi: "HỌC", id: "BELAJAR" },
  terms:   { en: "🗣️ Jobsite Terms", vi: "🗣️ Từ hiện trường", id: "🗣️ Istilah Kerja" },
  safety:  { en: "🦺 Safety", vi: "🦺 An toàn", id: "🦺 Keselamatan" },
  termsHint: {
    en: "Understand what the 親方 (oyakata / boss) is telling you. English · 日本語 · romaji.",
    vi: "Hiểu điều 親方 (oyakata / sếp) nói với bạn. English · 日本語 · romaji.",
    id: "Pahami apa yang dikatakan 親方 (oyakata / bos). English · 日本語 · romaji.",
  },
  safetyHint: {
    en: "The basics that keep you alive. Know these before you touch the machine.",
    vi: "Những điều cơ bản giữ mạng sống. Phải biết trước khi chạm vào máy.",
    id: "Dasar yang menyelamatkan nyawa. Ketahui sebelum menyentuh mesin.",
  },
  why:   { en: "Why", vi: "Vì sao", id: "Alasan" },
};

// ── Jobsite vocabulary ──────────────────────────────────────
export const VOCAB = [
  {
    cat: { en: "🔧 Tools & Machines", vi: "🔧 Dụng cụ & Máy", id: "🔧 Alat & Mesin" }, items: [
      { en: "Welding machine", ja: "溶接機", rj: "yōsetsu-ki", note: { en: "The power source.", vi: "Nguồn điện hàn.", id: "Sumber listrik las." } },
      { en: "Welding torch / holder", ja: "溶接トーチ・ホルダ", rj: "tōchi / horuda", note: { en: "What you hold to weld.", vi: "Vật bạn cầm để hàn.", id: "Yang Anda pegang untuk mengelas." } },
      { en: "Grinder", ja: "サンダー / グラインダー", rj: "sandā / guraindā", note: { en: "For grinding & cutting. Needs a permit.", vi: "Để mài & cắt. Cần chứng chỉ.", id: "Untuk menggerinda & memotong. Perlu izin." } },
      { en: "Wire brush", ja: "ワイヤーブラシ", rj: "waiyā-burashi", note: { en: "Clean the joint before welding.", vi: "Làm sạch mối nối trước khi hàn.", id: "Bersihkan sambungan sebelum mengelas." } },
      { en: "Chipping hammer", ja: "チッピングハンマー", rj: "chippingu-hanmā", note: { en: "Remove slag.", vi: "Gõ bỏ xỉ hàn.", id: "Membuang terak (slag)." } },
      { en: "Clamp", ja: "クランプ", rj: "kuranpu", note: { en: "Hold the workpiece.", vi: "Kẹp giữ phôi.", id: "Menahan benda kerja." } },
      { en: "Gas cylinder", ja: "ガスボンベ", rj: "gasu-bonbe", note: { en: "Shielding / fuel gas. Secure it upright.", vi: "Khí bảo vệ / khí đốt. Dựng đứng, cố định.", id: "Gas pelindung / bahan bakar. Ikat tegak." } },
      { en: "Regulator", ja: "調整器 / レギュレーター", rj: "chōsei-ki", note: { en: "Controls gas pressure/flow.", vi: "Điều chỉnh áp suất/lưu lượng khí.", id: "Mengatur tekanan/aliran gas." } },
    ]
  },
  {
    cat: { en: "⚡ Actions & Commands", vi: "⚡ Hành động & Mệnh lệnh", id: "⚡ Aksi & Perintah" }, items: [
      { en: "Weld it", ja: "溶接して", rj: "yōsetsu shite", note: { en: "Do the weld.", vi: "Hãy hàn.", id: "Lakukan pengelasan." } },
      { en: "Tack weld", ja: "仮付け", rj: "kari-tsuke", note: { en: "Small temporary weld to hold parts.", vi: "Hàn đính tạm để giữ chi tiết.", id: "Las titik sementara untuk menahan." } },
      { en: "Grind it", ja: "削って / グラインダーかけて", rj: "kezutte", note: { en: "Grind the surface / weld.", vi: "Mài bề mặt / mối hàn.", id: "Gerinda permukaan / las." } },
      { en: "Clean it", ja: "きれいにして", rj: "kirei ni shite", note: { en: "Clean the joint.", vi: "Làm sạch mối nối.", id: "Bersihkan sambungan." } },
      { en: "Preheat", ja: "予熱", rj: "yonetsu", note: { en: "Heat before welding (thick / high Ceq).", vi: "Nung nóng trước khi hàn (dày / Ceq cao).", id: "Panaskan sebelum mengelas (tebal / Ceq tinggi)." } },
      { en: "Be careful!", ja: "気をつけて！", rj: "ki wo tsukete!", note: { en: "Warning.", vi: "Cảnh báo.", id: "Peringatan." } },
      { en: "Stop / Wait", ja: "止めて / 待って", rj: "yamete / matte", note: { en: "Stop the work.", vi: "Dừng công việc.", id: "Hentikan pekerjaan." } },
      { en: "Redo it", ja: "やり直して", rj: "yari-naoshite", note: { en: "Do it again (defect found).", vi: "Làm lại (phát hiện lỗi).", id: "Ulangi (ada cacat)." } },
    ]
  },
  {
    cat: { en: "📋 Materials & Positions", vi: "📋 Vật liệu & Tư thế", id: "📋 Material & Posisi" }, items: [
      { en: "Base metal", ja: "母材", rj: "bozai", note: { en: "The material you weld.", vi: "Vật liệu bạn hàn.", id: "Material yang Anda las." } },
      { en: "Filler / welding rod", ja: "溶接棒 / 溶加材", rj: "yōsetsu-bō", note: { en: "Consumable that fills the joint.", vi: "Que hàn bù vào mối nối.", id: "Bahan pengisi sambungan." } },
      { en: "Joint / groove", ja: "継手 / 開先", rj: "tsugite / kaisaki", note: { en: "Where two parts meet.", vi: "Nơi hai chi tiết gặp nhau.", id: "Tempat dua bagian bertemu." } },
      { en: "Bead", ja: "ビード", rj: "bīdo", note: { en: "The line of weld metal.", vi: "Đường kim loại hàn.", id: "Jalur logam las." } },
      { en: "Flat position", ja: "下向き", rj: "shitamuki", note: { en: "Easiest position.", vi: "Tư thế dễ nhất.", id: "Posisi termudah." } },
      { en: "Vertical", ja: "立向き", rj: "tatemuki", note: { en: "Up/down position.", vi: "Tư thế đứng (lên/xuống).", id: "Posisi tegak (naik/turun)." } },
      { en: "Horizontal", ja: "横向き", rj: "yokomuki", note: { en: "Side position.", vi: "Tư thế ngang.", id: "Posisi mendatar." } },
      { en: "Overhead", ja: "上向き", rj: "uwamuki", note: { en: "Hardest — weld above your head.", vi: "Khó nhất — hàn trên đầu.", id: "Tersulit — mengelas di atas kepala." } },
    ]
  },
  {
    cat: { en: "⚠️ Hazards & Safety words", vi: "⚠️ Nguy hiểm & Từ an toàn", id: "⚠️ Bahaya & Kata Keselamatan" }, items: [
      { en: "Danger!", ja: "危険！", rj: "kiken!", note: { en: "Serious hazard.", vi: "Nguy hiểm nghiêm trọng.", id: "Bahaya serius." } },
      { en: "Fume", ja: "ヒューム / 溶接煙", rj: "hyūmu", note: { en: "Toxic smoke — use ventilation/mask.", vi: "Khói độc — dùng thông gió/khẩu trang.", id: "Asap beracun — pakai ventilasi/masker." } },
      { en: "Electric shock", ja: "感電", rj: "kanden", note: { en: "Check insulation, dry gloves.", vi: "Kiểm tra cách điện, găng tay khô.", id: "Periksa isolasi, sarung tangan kering." } },
      { en: "Oxygen deficiency", ja: "酸欠", rj: "sanketsu", note: { en: "Confined spaces — measure O₂ first.", vi: "Không gian kín — đo O₂ trước.", id: "Ruang tertutup — ukur O₂ dahulu." } },
      { en: "Fire / burns", ja: "火事 / 火傷", rj: "kaji / yakedo", note: { en: "Hot work — clear flammables.", vi: "Việc nóng — dọn vật dễ cháy.", id: "Kerja panas — singkirkan bahan mudah terbakar." } },
      { en: "Helmet / shield", ja: "溶接面", rj: "yōsetsu-men", note: { en: "Protect eyes from arc light.", vi: "Bảo vệ mắt khỏi ánh hồ quang.", id: "Lindungi mata dari cahaya busur." } },
      { en: "PPE", ja: "保護具", rj: "hogogu", note: { en: "Personal protective equipment.", vi: "Trang bị bảo hộ cá nhân.", id: "Alat pelindung diri (APD)." } },
      { en: "Evacuate", ja: "避難", rj: "hinan", note: { en: "Leave the area now.", vi: "Rời khỏi khu vực ngay.", id: "Tinggalkan area sekarang." } },
    ]
  },
];

// ── Safety topics ───────────────────────────────────────────
export const SAFETY = [
  {
    icon: "🫁", title: "Welding Fume", ja: "ヒューム / 溶接煙 (hyūmu)",
    why: {
      en: "Welding fume can cause lung disease and, for some steels, cancer. In Japan it is legally controlled dust work.",
      vi: "Khói hàn có thể gây bệnh phổi và, với một số loại thép, ung thư. Ở Nhật đây là công việc bụi được quản lý theo luật.",
      id: "Asap las bisa menyebabkan penyakit paru dan, untuk baja tertentu, kanker. Di Jepang ini pekerjaan debu yang diatur hukum.",
    },
    rules: {
      en: ["Use local exhaust ventilation (局所排気).", "Wear a fit-tested dust respirator (防じんマスク).", "Keep your head out of the plume.", "Never weld coated/galvanized metal without extra ventilation."],
      vi: ["Dùng hút khí cục bộ (局所排気).", "Đeo khẩu trang chống bụi vừa khít (防じんマスク).", "Giữ đầu ra khỏi luồng khói.", "Không hàn kim loại mạ/sơn nếu thiếu thông gió."],
      id: ["Gunakan ventilasi buang lokal (局所排気).", "Pakai respirator debu yang pas (防じんマスク).", "Jauhkan kepala dari asap.", "Jangan las logam berlapis/galvanis tanpa ventilasi ekstra."],
    },
  },
  {
    icon: "⚡", title: "Electric Shock", ja: "感電 (kanden)",
    why: {
      en: "Welding uses live electricity. Sweat and wet conditions greatly raise the risk of a fatal shock.",
      vi: "Hàn dùng điện sống. Mồ hôi và điều kiện ẩm ướt làm tăng mạnh nguy cơ điện giật chết người.",
      id: "Las memakai listrik hidup. Keringat dan kondisi basah sangat menaikkan risiko sengatan fatal.",
    },
    rules: {
      en: ["Check holder & cable insulation before use.", "Use dry gloves and dry clothing.", "Use the auto voltage reducing device (自動電撃防止装置).", "Never change electrodes with bare wet hands."],
      vi: ["Kiểm tra cách điện kìm & cáp trước khi dùng.", "Dùng găng tay và quần áo khô.", "Dùng thiết bị giảm điện áp tự động (自動電撃防止装置).", "Không thay que hàn bằng tay ướt trần."],
      id: ["Periksa isolasi holder & kabel sebelum dipakai.", "Pakai sarung tangan dan pakaian kering.", "Gunakan alat penurun tegangan otomatis (自動電撃防止装置).", "Jangan ganti elektroda dengan tangan basah telanjang."],
    },
  },
  {
    icon: "🪣", title: "Confined Space / Oxygen", ja: "酸欠 (sanketsu)",
    why: {
      en: "Tanks, ship hulls and pits can lose oxygen or fill with gas. Confined-space accidents are often fatal.",
      vi: "Bồn, thân tàu và hố có thể thiếu oxy hoặc đầy khí. Tai nạn không gian kín thường gây chết người.",
      id: "Tangki, lambung kapal dan lubang bisa kekurangan oksigen atau berisi gas. Kecelakaan ruang tertutup sering fatal.",
    },
    rules: {
      en: ["Measure oxygen & gas BEFORE entering.", "Ventilate continuously.", "Have a watcher outside.", "Requires special training (酸欠特別教育)."],
      vi: ["Đo oxy & khí TRƯỚC khi vào.", "Thông gió liên tục.", "Có người canh bên ngoài.", "Cần đào tạo đặc biệt (酸欠特別教育)."],
      id: ["Ukur oksigen & gas SEBELUM masuk.", "Ventilasi terus-menerus.", "Ada pengawas di luar.", "Perlu pelatihan khusus (酸欠特別教育)."],
    },
  },
  {
    icon: "🔥", title: "Fire & Hot Work", ja: "火事 / 火傷 (kaji)",
    why: {
      en: "Sparks travel far and stay hot. Hot work is a leading cause of industrial fires.",
      vi: "Tia lửa bắn xa và vẫn nóng. Việc nóng là nguyên nhân hàng đầu gây cháy công nghiệp.",
      id: "Percikan api terbang jauh dan tetap panas. Kerja panas penyebab utama kebakaran industri.",
    },
    rules: {
      en: ["Clear flammables within the spark zone.", "Keep a fire extinguisher nearby.", "Use fire blankets / screens.", "Do a fire watch after finishing."],
      vi: ["Dọn vật dễ cháy trong vùng tia lửa.", "Để bình chữa cháy gần đó.", "Dùng chăn/màn chống cháy.", "Canh lửa sau khi làm xong."],
      id: ["Singkirkan bahan mudah terbakar di zona percikan.", "Sediakan APAR di dekatnya.", "Pakai selimut/tirai api.", "Lakukan jaga api setelah selesai."],
    },
  },
  {
    icon: "🥽", title: "Arc Light & Eyes", ja: "アーク光 (āku-kō)",
    why: {
      en: "Arc light causes 'arc eye' (painful burns) and can damage skin. UV harms nearby workers too.",
      vi: "Ánh hồ quang gây 'đau mắt hàn' (bỏng đau) và hại da. Tia UV cũng hại người xung quanh.",
      id: "Cahaya busur menyebabkan 'mata las' (luka bakar perih) dan merusak kulit. UV juga membahayakan pekerja di dekatnya.",
    },
    rules: {
      en: ["Use the correct shade welding shield (溶接面).", "Cover skin — long sleeves, gloves.", "Screen the area to protect others.", "Wear safety glasses under the hood."],
      vi: ["Dùng mặt nạ hàn đúng độ tối (溶接面).", "Che da — áo dài tay, găng tay.", "Che chắn khu vực để bảo vệ người khác.", "Đeo kính an toàn bên trong mặt nạ."],
      id: ["Pakai topeng las dengan shade yang tepat (溶接面).", "Tutup kulit — lengan panjang, sarung tangan.", "Beri tabir untuk melindungi orang lain.", "Pakai kacamata pengaman di balik topeng."],
    },
  },
  {
    icon: "🛢️", title: "Gas Cylinders", ja: "ガスボンベ (gasu-bonbe)",
    why: {
      en: "High-pressure cylinders are dangerous if they fall or leak; fuel gas can explode.",
      vi: "Bình khí áp suất cao rất nguy hiểm nếu đổ hoặc rò rỉ; khí đốt có thể nổ.",
      id: "Tabung bertekanan tinggi berbahaya jika jatuh atau bocor; gas bahan bakar bisa meledak.",
    },
    rules: {
      en: ["Chain cylinders upright so they can't fall.", "Close valves when not in use.", "Check for leaks (soapy water).", "Keep fuel gas away from sparks & heat."],
      vi: ["Xích bình dựng đứng để không đổ.", "Đóng van khi không dùng.", "Kiểm tra rò rỉ (nước xà phòng).", "Để khí đốt xa tia lửa & nhiệt."],
      id: ["Rantai tabung tegak agar tidak jatuh.", "Tutup katup saat tidak dipakai.", "Periksa kebocoran (air sabun).", "Jauhkan gas bakar dari percikan & panas."],
    },
  },
  {
    icon: "⚙️", title: "Grinding", ja: "研削 (kensaku)",
    why: {
      en: "A bursting grinding wheel or kickback can cause severe injury. Grinder use needs a permit in Japan.",
      vi: "Đá mài vỡ hoặc giật ngược có thể gây thương tích nặng. Dùng máy mài cần chứng chỉ ở Nhật.",
      id: "Batu gerinda pecah atau tendangan balik bisa melukai parah. Pemakaian gerinda perlu izin di Jepang.",
    },
    rules: {
      en: ["Requires grinding-wheel training (自由研削 特別教育).", "Check the wheel for cracks before use.", "Use the guard and a face shield.", "Let the wheel reach full speed before cutting."],
      vi: ["Cần đào tạo đá mài (自由研削 特別教育).", "Kiểm tra đá có nứt trước khi dùng.", "Dùng nắp che và tấm che mặt.", "Để đá đạt tốc độ tối đa trước khi cắt."],
      id: ["Perlu pelatihan batu gerinda (自由研削 特別教育).", "Periksa retak pada batu sebelum dipakai.", "Pakai pelindung dan pelindung wajah.", "Tunggu batu penuh putaran sebelum memotong."],
    },
  },
  {
    icon: "🪢", title: "Working at Height", ja: "高所作業 (kōsho-sagyō)",
    why: {
      en: "Falls are a top cause of construction deaths. Above 2 m, a full-body harness is legally required.",
      vi: "Ngã là nguyên nhân hàng đầu gây tử vong trong xây dựng. Trên 2 m, luật bắt buộc dây đai toàn thân.",
      id: "Jatuh adalah penyebab utama kematian konstruksi. Di atas 2 m, harness seluruh tubuh wajib secara hukum.",
    },
    rules: {
      en: ["Wear a full harness (フルハーネス) above 2 m.", "Clip onto a solid anchor point.", "Needs harness special training.", "Keep the work area tidy — no trip hazards."],
      vi: ["Đeo dây đai toàn thân (フルハーネス) trên 2 m.", "Móc vào điểm neo chắc chắn.", "Cần đào tạo đặc biệt về dây đai.", "Giữ khu vực gọn — tránh vấp ngã."],
      id: ["Pakai harness penuh (フルハーネス) di atas 2 m.", "Kaitkan ke titik jangkar yang kuat.", "Perlu pelatihan khusus harness.", "Jaga area kerja rapi — hindari tersandung."],
    },
  },
];

const orb = "'Orbitron',monospace";
const mono = "'Share Tech Mono',monospace";

export function LearnTab({ lang: langProp, onPickLang }) {
  const [mode, setMode] = useState("terms"); // terms | safety
  const [langLocal, setLangLocal] = useState(loadLang());
  const lang = langProp || langLocal;
  function pickLang(l) { if (onPickLang) onPickLang(l); else { setLangLocal(l); saveLang(l); } }

  return (
    <div style={{ padding: 16, fontFamily: mono, background: "#0d0d0d", minHeight: "100vh", paddingBottom: 90 }}>
      {/* header + language switch */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ color: "#FF6600", fontFamily: orb, fontWeight: 900, fontSize: "0.9rem", letterSpacing: "0.05em" }}>📚 {tr(UI.learn, lang)}</span>
        <div style={{ display: "flex", gap: 4 }}>
          {LANGS.map(L => (
            <button key={L.id} onClick={() => pickLang(L.id)} style={{
              padding: "4px 9px", borderRadius: 6, cursor: "pointer", fontFamily: mono, fontSize: "0.62rem", fontWeight: "bold",
              border: `1px solid ${lang === L.id ? "#FF6600" : "#2a2a2a"}`,
              background: lang === L.id ? "#FF6600" : "transparent", color: lang === L.id ? "#fff" : "#777",
            }}>{L.label}</button>
          ))}
        </div>
      </div>

      {/* mode toggle */}
      <div style={{ display: "flex", gap: 6, background: "#141414", border: "1px solid #2a2a2a", borderRadius: 8, padding: 4, marginBottom: 14 }}>
        {[["terms", tr(UI.terms, lang)], ["safety", tr(UI.safety, lang)]].map(([id, l]) => (
          <button key={id} onClick={() => setMode(id)} style={{
            flex: 1, padding: "8px 4px", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: mono,
            fontSize: "0.72rem", fontWeight: "bold",
            background: mode === id ? "#FF6600" : "transparent", color: mode === id ? "#fff" : "#777",
          }}>{l}</button>
        ))}
      </div>

      {mode === "terms" ? (
        <>
          <div style={{ color: "#666", fontSize: "0.6rem", lineHeight: 1.6, marginBottom: 14 }}>{tr(UI.termsHint, lang)}</div>
          {VOCAB.map(group => (
            <div key={group.cat.en} style={{ marginBottom: 18 }}>
              <div style={{ color: "#FFB800", fontSize: "0.68rem", fontWeight: "bold", marginBottom: 8 }}>{tr(group.cat, lang)}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {group.items.map(it => (
                  <div key={it.en} style={{ background: "#141414", border: "1px solid #1e1e1e", borderRadius: 8, padding: "9px 11px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                      <span style={{ color: "#eee", fontSize: "0.76rem", fontWeight: "bold" }}>{it.en}</span>
                      <span style={{ color: "#FF6600", fontSize: "0.74rem", textAlign: "right" }}>{it.ja}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginTop: 3 }}>
                      <span style={{ color: "#777", fontSize: "0.6rem", lineHeight: 1.4 }}>{tr(it.note, lang)}</span>
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
          <div style={{ color: "#666", fontSize: "0.6rem", lineHeight: 1.6, marginBottom: 14 }}>{tr(UI.safetyHint, lang)}</div>
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
                <div style={{ color: "#aaa", fontSize: "0.64rem", lineHeight: 1.6, marginBottom: 8 }}>
                  <span style={{ color: "#f59e0b", fontWeight: "bold" }}>{tr(UI.why, lang)}: </span>{tr(s.why, lang)}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {tr(s.rules, lang).map((r, i) => (
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
