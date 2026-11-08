// ============================================================
// WELDON'S FORGE — ENGLISH VERSION
// questions_en.js
//
// Target: Foreign welding trainees working in Japan
// Standard: JIS (Japan Industrial Standards)
// Features: Japanese terms + Romaji + English explanations
//           Real workplace slang from Japanese job sites
// ============================================================

export const QUIZ_STAGES = [
  // ──────────────────────────────────────────────────────────
  // STAGE 1 — Legal Permits & Safety
  // ──────────────────────────────────────────────────────────
  {
    stageId: 1,
    label: "STAGE 1 — Legal Permits & Safety",
    color: "#E85D04",
    icon: "🛡️",
    unlockXP: 0,
    questions: [
      {
        id: 1, cat: "Legal Permits",
        q: "You just arrived at a Japanese welding site. Which certificate do you LEGALLY need before touching any welding machine?",
        opts: [
          "Arc Welding Safety Training (アーク溶接特別教育)",
          "Boiler Welder License (ボイラー溶接士免許)",
          "JIS Welder Certification (JIS溶接技能者)",
          "Gas Welding Skills Training (ガス溶接技能講習)"
        ],
        a: 0, xp: 15,
        exp: "Japanese law (労働安全衛生法) requires the Arc Welding Safety Training Certificate before ANY welding work. 3-day course, approx ¥20,000–40,000. No certificate = illegal to work. No exceptions. 🇯🇵 TIP: Keep your original certificate (原本) safe — many sites take a photocopy on your first day. Lost certificates can be reissued by the training center that issued them."
      },
      {
        id: 2, cat: "Legal Permits",
        q: "Your supervisor asks you to change the disc on a grinder and test-run it. Which training is LEGALLY required for this job in Japan?",
        opts: [
          "Forklift Skills Training (フォークリフト技能講習)",
          "Grinding Wheel Safety Training (自由研削といし特別教育)",
          "Arc Welding Safety Training (アーク溶接特別教育)",
          "Low-Voltage Electrical Training (低圧電気取扱特別教育)"
        ],
        a: 1, xp: 15,
        exp: "By law (労働安全衛生規則), changing a grinding wheel and test-running it after the change requires the Grinding Wheel Safety Training (自由研削といし特別教育) — usually a 1-day course. In practice, most Japanese sites require this certificate from anyone who uses a grinder at all. 🇯🇵 TIP: On site it is often called 'グラインダーの資格'. If a supervisor hands you a grinder and asks 'shikaku aru?' (資格ある？ / do you have the cert?), this is the one they mean."
      },
      {
        id: 3, cat: "Legal Permits",
        q: "You need to connect a welding machine's power cable to terminals inside a distribution board where live parts are exposed. Which training is legally required?",
        opts: [
          "Grinding Wheel Safety Training (自由研削といし特別教育)",
          "Arc Welding Safety Training (アーク溶接特別教育)",
          "Low-Voltage Electrical Training (低圧電気取扱特別教育)",
          "Forklift Skills Training (フォークリフト技能講習)"
        ],
        a: 2, xp: 15,
        exp: "Low-Voltage Electrical Safety Training (低圧電気取扱特別教育) is required for work on low-voltage live circuits (AC 600V or below, DC 750V or below) — such as wiring or connecting cables where live parts are exposed. Simply turning on a welding machine's switch does not need it, but connecting cables to a distribution board does. 🇯🇵 TIP: Many welding companies send new staff to this course so they can handle welding-machine power connections themselves. Never open a live distribution board without it."
      },
      {
        id: 4, cat: "Legal Permits",
        q: "A 3-ton steel plate needs to be lifted by crane. You attach the wire rope to the crane hook. What certification do you need for this work?",
        opts: [
          "Forklift Skills Training (フォークリフト技能講習)",
          "Crane Special Training only (クレーン特別教育)",
          "Rigging Special Training (玉掛け特別教育)",
          "Rigging Skills Training (玉掛け技能講習)"
        ],
        a: 3, xp: 15,
        exp: "Tamakake (玉掛け) is the act of attaching loads to crane hooks for lifting. The Tamakake Gino-koshu (玉掛け技能講習) takes 3 days (~¥20,000–40,000) and legally covers loads of 1 ton or more. Without it, you cannot hook up steel for lifting. 🇯🇵 TIP: On most fabrication sites, even if you are just a welder, you will be expected to do basic tamakake to move your own steel. Getting this cert early makes you far more useful and employable."
      },
      {
        id: 5, cat: "Legal Permits",
        q: "What is the difference between 'tokubetsu-kyoiku' (特別教育) and 'gino-koshu' (技能講習) in Japan?",
        opts: [
          "特別教育 = training with no test; 技能講習 = training with a test, for wider work",
          "技能講習 is the old name for 特別教育, renamed by law in 2010",
          "They are the same course — the name depends on the training center",
          "特別教育 is only for managers; 技能講習 is for site workers"
        ],
        a: 0, xp: 20,
        exp: "Key difference: Tokubetsu-kyoiku (特別教育) is a safety lecture — attend and you pass. Gino-koshu (技能講習) involves actual skills training with a pass/fail test, and unlocks a wider range of work. Example: Tamakake tokubetsu-kyoiku = under 1t only. Tamakake gino-koshu = 1t and above. 🇯🇵 TIP: When discussing certs with Japanese supervisors, saying 'tokubetsu-kyoiku wa arimasu' (特別教育はあります) vs 'gino-koshu wa arimasu' (技能講習はあります) signals completely different capability levels — knowing the difference impresses experienced welders."
      },
      {
        id: 6, cat: "Legal Permits",
        q: "Since February 2019, workers who use a full-body harness at heights of 2 m or more (where a work floor cannot be installed) must complete what safety training?",
        opts: [
          "Aerial Work Platform Training (高所作業車特別教育)",
          "Full Harness Safety Training (フルハーネス特別教育)",
          "Crane Special Training (クレーン特別教育)",
          "Scaffold Assembly Training (足場の組立て等特別教育)"
        ],
        a: 1, xp: 15,
        exp: "The rules changed in February 2019: work at 2 m or more using a full-body harness, where a work floor is hard to install, requires Full Harness Safety Training (フルハーネス特別教育, about 1 day). The transition period ended on January 2, 2022 — old-standard belts can no longer be used, and the full harness is now the standard fall-arrest equipment (body belts are allowed only at low heights). 🇯🇵 TIP: Japanese sites do 'KY' (危険予知 / kiken-yochi / hazard prediction) every morning. Height work is always flagged in KY."
      },
      {
        id: 7, cat: "Legal Permits",
        q: "You want BOTH 'Tamakake' (玉掛け) and 'Kurēn' (クレーン) operation certificates. What is the smartest approach?",
        opts: [
          "Get the crane certificate first, then the rigging one a year later",
          "Take rigging skills training, then upgrade it to cover crane work",
          "Take a combined rigging + crane course (セット講習) at one center",
          "Take them separately at different centers for better training"
        ],
        a: 2, xp: 20,
        exp: "Many training centers offer a combo course (玉掛け + クレーン運転特別教育セット). You get both certificates in 4–5 days at a discounted total price (~¥70,000–80,000). Much smarter than taking them separately. 🇯🇵 TIP: Search for '玉掛けクレーンセット講習' at local training centers (労働基準協会 / rodo-kijun-kyokai). Call ahead — some centers offer discounts for groups of 3+ from the same company."
      },
      {
        id: 8, cat: "Legal Permits",
        q: "A forklift at the factory has a maximum load capacity of 2 tons. What certificate do you need to operate it?",
        opts: [
          "Any regular car driving license is enough",
          "Forklift Special Training (フォークリフト特別教育)",
          "Crane Special Training (クレーン特別教育)",
          "Forklift Skills Training (フォークリフト技能講習)"
        ],
        a: 3, xp: 20,
        exp: "For forklifts of 1 ton or more, you need the Forklift Skills Training (技能講習). For people with a regular car driving license it is about 31 hours — usually 4 days. The tokubetsu-kyoiku (特別教育) only covers forklifts under 1 ton. A 2-ton forklift = gino-koshu required. 🇯🇵 TIP: Forklift certification (often called フォークリフト免許 on site) is one of the most useful extra skills on Japanese fabrication sites — it makes you usable for material handling between welds."
      },
      {
        id: 9, cat: "Safety",
        q: "Which of these four signs does NOT belong with the other three in meaning? 禁止 (Kinshi) / 立入禁止 (Tachiiri-kinshi) / 注意 (Chui) / 溶接禁止 (Yosetsu-kinshi)",
        opts: [
          "注意 (Chui) — 'Caution,' a warning sign, NOT a prohibition like the other three",
          "溶接禁止 (Yosetsu-kinshi) — 'No welding here,' a type of prohibition sign",
          "禁止 (Kinshi) — it means 'Prohibited,' the same root meaning as the other two 禁止 signs",
          "立入禁止 (Tachiiri-kinshi) — 'No entry,' a type of prohibition sign"
        ],
        a: 0, xp: 20,
        exp: "禁止 (Kinshi) = PROHIBITED — used in 立入禁止 (No entry) and 溶接禁止 (No welding here), both telling you NOT to do something. 注意 (Chui) = CAUTION, a different category entirely — it warns you to be careful, but does not forbid the action. Mixing these up matters: ignoring a 禁止 sign is a rule violation, while 注意 just means proceed carefully. 🇯🇵 TIP: Other critical safety kanji on Japanese sites: 危険 (kiken) = Danger, 必須 (hissu) = Required/Mandatory, 禁煙 (kin-en) = No smoking. Memorize these — supervisors expect you to follow signs even if you can't read Japanese yet."
      },
      {
        id: 10, cat: "Safety",
        q: "What is 'Sanso-ketsubo' (酸素欠乏 / さんそけつぼう) and why is it dangerous for welders?",
        opts: [
          "Excess oxygen — oxygen-rich air makes clothing catch fire easily",
          "Oxygen deficiency — shielding gas pushes oxygen out of enclosed spaces",
          "Carbon monoxide poisoning that only happens when welding outdoors",
          "A welding defect where the weld metal lacks oxygen and cracks"
        ],
        a: 1, xp: 20,
        exp: "Sanso-ketsubo (酸素欠乏) = Oxygen Deficiency. In confined spaces (tanks, holds, enclosed rooms), shielding gas (CO₂, Argon) can push out oxygen. Below 18% O₂ = danger. Below 16% = blackout. Measure oxygen levels BEFORE entering any enclosed welding area. 🇯🇵 TIP: CO₂ is 1.5× heavier than air and Argon is 1.4× heavier — they sink and pool invisibly at the bottom. A worker who collapses inside a tank from oxygen deficiency must NOT be rescued by someone entering without breathing equipment — Japan has had multiple deaths this way. Call 119 and wait for specialist rescue."
      },
      {
        id: 11, cat: "Safety",
        q: "What is 'Yosetsu-hyumu' (溶接ヒューム / ようせつヒューム) and what PPE do you need?",
        opts: [
          "Welding noise — protect your ears with earplugs",
          "Welding sparks — protect your hands with leather gloves",
          "Welding fumes — wear a dust respirator (防じんマスク)",
          "Shielding gas — only CO₂ needs a gas mask"
        ],
        a: 2, xp: 20,
        exp: "Welding fumes (溶接ヒューム) contain fine metal particles including manganese, chromium, and other compounds. Long-term exposure causes lung disease (じん肺). Japanese law requires a dust respirator (防じんマスク) rated for welding fumes. Always ventilate the work area. 🇯🇵 TIP: Since 2021, Japanese law (溶接ヒューム規制) classifies welding fumes as a specified chemical substance. Employers must provide health examinations (健康診断) and maintain exposure records. If your company does not offer this, they are violating the law — you have a right to request it."
      },
      {
        id: 12, cat: "Safety",
        q: "What shade number (遮光度番号 / しゃこうどばんごう) does the JIS guide (JIS T 8141) give for stick welding (被覆アーク溶接) at around 150A?",
        opts: [
          "Shade #3–4 — like strong sunglasses",
          "Shade #14–16 — the darker the better",
          "Shade #5–6 — the range used for gas cutting",
          "Shade #9–11 — the JIS guide for 75–200A"
        ],
        a: 3, xp: 20,
        exp: "The usage guide in JIS T 8141 gives shade #9–11 for stick welding at 75–200A (as explained by the Japan Welding Engineering Society). Higher current = higher shade number; too dark a lens makes it hard to see the pool. Without the correct shade you risk arc eye (電気性眼炎 / でんきせいがんえん). 🇯🇵 TIP: Arc eye symptoms appear several hours AFTER exposure — often at night. If your eyes feel gritty or painful after welding, see an eye doctor."
      },
      {
        id: 13, cat: "Safety",
        q: "A welder receives an electric shock. What is the FIRST action to take?",
        opts: [
          "Turn off the power first, then move the victim and call for help",
          "Wear dry rubber gloves and pull the victim away while power stays on",
          "Pour water on the victim to cool the burns before anything else",
          "Pull the victim away with your bare hands as fast as possible"
        ],
        a: 0, xp: 25,
        exp: "Electric shock first response: 1) CUT THE POWER — turn off the machine or breaker. 2) Do NOT touch the victim while power is on — you will be shocked too. 3) Move victim to safety. 4) Call 119 (Japanese emergency). 5) Perform CPR if trained. Wet hands or wet ground dramatically increase electrocution risk. 🇯🇵 TIP: Japanese emergency number is 119 (fire/ambulance) — not 911. When calling 119 in Japanese: 'Jiko desu, hito ga taoreteimasu' (事故です、人が倒れています) = 'There is an accident, someone has collapsed.' Give the address and your phone number."
      },
      {
        id: 14, cat: "Safety",
        q: "Before welding inside a tank or enclosed space, what must you check FIRST?",
        opts: [
          "The wire spool size and the remaining wire length",
          "Oxygen and harmful gas levels, then set up ventilation",
          "The welding machine's serial number and inspection sticker",
          "The brand and purity of the shielding gas cylinder"
        ],
        a: 1, xp: 25,
        exp: "Before entering any enclosed space in Japan, you MUST measure oxygen concentration (酸素濃度) — must be above 18%. Also check for CO, hydrogen, and other hazardous gases. Set up forced ventilation. In Japan, this is covered by the Oxygen Deficiency Hazard Work Certification (酸素欠乏危険作業特別教育). 🇯🇵 TIP: The 酸欠資格 (sanso-ketsubo shikaku / oxygen deficiency cert) is a 1-day course (~¥8,000–12,000) that is often overlooked by foreign workers. If you work in shipbuilding, tank fabrication, or any enclosed steel structure, this certificate is essential and expected."
      },
      {
        id: 15, cat: "Safety",
        q: "Your 'Anzen-gutsu' (安全靴 / あんぜんぐつ) safety boots have a JIS mark inside, but it reads 'JIS T 8147' instead of 'JIS T 8101.' What should you do?",
        opts: [
          "Ask your supervisor for a pair marked JIS T 8113 instead",
          "Wear them — JIS T 8147 is just a newer number for safety boots",
          "Reject them — JIS T 8147 is for eyewear, not safety boots",
          "Wear them only for grinding work, never for welding"
        ],
        a: 2, xp: 25,
        exp: "JIS T 8101 is the standard for safety boots (安全靴). JIS T 8147 actually covers protective eyewear (保護めがね), and JIS T 8113 covers welding gloves — neither is a footwear standard. A boot stamped with the wrong JIS number is not properly certified, even if it looks identical to a real safety boot. Many counterfeit or mislabeled boots slip through unless you actually check the number. 🇯🇵 TIP: Japanese safety boots (安全靴) come with a JIS mark stamped inside. When buying, look specifically for 'JIS T 8101' on the label. Cheap boots from 100-yen-style shops without the correct JIS mark will be rejected at the site entrance — invest in a proper pair from Workman (ワークマン) or Midori Anzen (ミドリ安全)."
      },
      {
        id: 16, cat: "Legal Permits",
        q: "Which of these certificates is NOT typically required on a standard Japanese welding site?",
        opts: [
          "Low-Voltage Electrical Safety Training (低圧電気取扱特別教育)",
          "Arc Welding Safety Training (アーク溶接特別教育)",
          "Grinding Wheel Safety Training (自由研削といし特別教育)",
          "Driver's License for operating welding equipment"
        ],
        a: 3, xp: 20,
        exp: "A standard driving license does NOT qualify you to operate welding equipment, cranes, or forklifts on a Japanese job site. Each piece of equipment has its own specific safety training or license requirement under Japanese labor law. 🇯🇵 TIP: Japanese law enforcement at job sites is done through 定期自主検査 (regular self-inspections) and random labor standards office (労働基準監督署) audits. If you are found operating equipment without the correct certification, both you AND your employer face legal penalties — not just a warning."
      },
      {
        id: 17, cat: "Safety",
        q: "Which of the following statements about welding ventilation in Japan is NOT correct?",
        opts: [
          "Opening one window is always enough ventilation for any indoor welding",
          "Since 2021, indoor arc welding needs general ventilation and fume measurement",
          "Local exhaust ventilation (局所排気装置) captures fumes at the source",
          "In confined spaces, ventilation must keep oxygen at 18% or more"
        ],
        a: 0, xp: 25,
        exp: "Opening a window is NOT automatically sufficient — it depends on room size, airflow and the amount of fume. Since April 2021, welding fume is regulated as a specified chemical substance: for indoor continuous arc welding, employers must provide general ventilation (全体換気), measure the fume concentration, and supply respirators chosen from that measurement (with fit checks). In confined spaces, oxygen must be kept at 18% or more. 🇯🇵 TIP: If your company measures fume concentration, the result decides which respirator you must wear — follow it exactly."
      },
      {
        id: 18, cat: "Safety",
        q: "You're about to do overhead (kachiage) welding and reach for your 'Maekake' (前掛け) leather apron, but it's missing. A coworker offers his 'Ude-kabaa' (腕カバー / arm sleeves) instead, saying it covers the same hazard. Is he right?",
        opts: [
          "Yes — arm sleeves and an apron protect the same body areas",
          "No — sleeves cover only the arms; the apron covers torso and legs",
          "No — arm sleeves are only for grinding work, never for welding",
          "Yes, if the sleeves are made of the same leather as the apron"
        ],
        a: 1, xp: 25,
        exp: "Maekake (前掛け) = leather welding apron covering the torso and legs. Ude-kabaa (腕カバー) = arm sleeves covering the forearms only. They protect DIFFERENT body areas from the same hazards (spatter, sparks, radiant heat) — using one does not substitute for the other. For full-body protection during kachiage (overhead) welding, both are needed together. 🇯🇵 TIP: Quality leather aprons at Japanese welding supply shops (溶接用品店) last 3–5 years. When buying, check that the leather is thick (牛革 / cow leather is best) and the fastening loops are steel, not plastic — plastic melts from spatter."
      },
      {
        id: 19, cat: "Legal Permits",
        q: "For the 'Tamakake' (玉掛け) certificate, what is the work scope difference between the 'tokubetsu-kyoiku' (特別教育) and 'gino-koshu' (技能講習) versions?",
        opts: [
          "Gino-koshu covers under 1 ton; tokubetsu-kyoiku covers 1 ton and above",
          "Both cover all load weights — only the course length differs",
          "Tokubetsu-kyoiku: under 1 ton only. Gino-koshu: 1 ton and above",
          "Tokubetsu-kyoiku is only for permanent employees, not contract staff"
        ],
        a: 2, xp: 20,
        exp: "Tamakake (玉掛け) rigging certification: Tokubetsu-kyoiku (特別教育) = loads under 1 ton only (1–2 days, ~¥12,000–15,000). Gino-koshu (技能講習) = loads of 1 ton and above, covering all weights (3 days, ~¥20,000–40,000). On most job sites, you need the Gino-koshu version. 🇯🇵 TIP: The practical exam for Tamakake Gino-koshu involves slinging a steel block and signaling the crane operator with hand signals. Learn the 4 basic hand signals (raise, lower, left, right) before the exam day — Japanese training centers expect you to demonstrate them confidently."
      },
      {
        id: 21, cat: "Confined Space Safety",
        q: "Before entering a tank to weld, Japanese law requires measuring oxygen concentration (酸素濃度 / さんそのうど). What is the MINIMUM safe level?",
        opts: [
          "21% oxygen exactly — room air percentage is the minimum",
          "10% oxygen — humans can work briefly at this level",
          "15% oxygen or above — normal breathing is possible",
          "18% oxygen or above — below this is 'Sanso-ketsubo' (酸素欠乏) danger zone"
        ],
        a: 3, xp: 20,
        exp: "Japanese law (酸素欠乏危険作業特別教育) defines 酸素欠乏 (Sanso-ketsubo / oxygen deficiency) as O₂ below 18%. At 16% = confusion and weakness. At 12% = unconsciousness. At 6% = death within minutes. ALWAYS measure O₂ before entry. CO₂ and Argon shielding gas are heavier than air and accumulate in tanks, pits, and low spaces. 🇯🇵 TIP: In Japanese shipyards, the oxygen meter reading is recorded in the 作業前点検表 (pre-work inspection sheet) before every confined space entry — your supervisor will ask to see it."
      },
      {
        id: 22, cat: "Confined Space Safety",
        q: "You are assigned 酸素欠乏危険作業 (Sanso-ketsubo kiken-sagyo / oxygen deficiency hazard work). What is the legally required minimum team setup?",
        opts: [
          "A worker inside plus a 監視人 (standby monitor) watching from outside",
          "One worker inside, with a radio check-in every 30 minutes",
          "One welder alone is fine if the job is short",
          "Two welders inside the space, with nobody needed outside"
        ],
        a: 0, xp: 25,
        exp: "The Ordinance on Prevention of Oxygen Deficiency (酸素欠乏症等防止規則, Article 13) requires a person who constantly watches the work and immediately reports any abnormality — the 監視人 (Kanshi-nin / standby monitor) stationed outside the confined space. A chief for oxygen-deficiency hazard work (酸素欠乏危険作業主任者) must also be appointed. NEVER enter a confined space alone. 🇯🇵 TIP: The 監視人 must stay at their post and must not leave to do other work."
      },
      {
        id: 23, cat: "Confined Space Safety",
        q: "CO₂ shielding gas was used for welding in a tank all morning. After lunch, a new welder wants to enter. What must happen FIRST?",
        opts: [
          "Open the hatch and wait 5 minutes — the air clears by itself",
          "Re-measure oxygen and harmful gases, and ventilate before entry",
          "Ask the morning welder to confirm verbally that it is safe",
          "Check the time — after more than 1 hour, entry is safe"
        ],
        a: 1, xp: 20,
        exp: "CO₂ is heavier than air (density 1.5× air) and remains pooled at the bottom of tanks even after hours. A verbal confirmation is worthless — gas levels must be re-measured with a calibrated 酸素濃度計 (oxygen meter) AND CO meter before EVERY entry. The atmosphere must be actively purged with forced ventilation fans. 🇯🇵 TIP: Japanese sites use the term '空気確認' (kuki-kakunin / air confirmation) as a formal pre-entry checklist step. Never skip it even if you think the space is 'obviously aired out.'"
      },
      {
        id: 24, cat: "PPE Requirements",
        q: "On a Japanese job site, which PPE combination is the standard MINIMUM for arc welding?",
        opts: [
          "Helmet + leather gloves + safety boots — a jacket is optional when dry",
          "Welding helmet only — the face and eyes are the main hazard",
          "Helmet + leather gloves + safety boots + flame-resistant jacket or apron",
          "Safety glasses + thin cotton gloves — enough for short welds"
        ],
        a: 2, xp: 20,
        exp: "Standard welding PPE on Japanese sites: 1) 溶接面 (Yosetsu-men) welding helmet with the correct shade (JIS T 8141). 2) 革手袋 (Kawa-tebukuro) leather welding gloves. 3) 安全靴 (Anzen-gutsu) safety boots (JIS T 8101). 4) Fire-resistant jacket or 前掛け (Maekake) leather apron against spatter. 5) A respirator for welding fumes. 🇯🇵 TIP: PPE is checked at the morning meeting (朝礼 / chōrei) — arriving without proper PPE can mean you cannot start work that day."
      },
      {
        id: 25, cat: "PPE Requirements",
        q: "When welding with stainless steel wire or chrome-containing electrodes, what ADDITIONAL PPE is required beyond standard welding PPE in Japan?",
        opts: [
          "No respirator needed as long as ventilation fans are running",
          "No extra PPE — stainless fumes are safer than carbon steel fumes",
          "The same basic dust mask as carbon steel is always enough",
          "A well-fitting respirator chosen from measured fume levels (Cr⁶⁺ risk)"
        ],
        a: 3, xp: 25,
        exp: "Welding stainless steel or chrome-containing materials produces fumes that include hexavalent chromium (六価クロム / Cr⁶⁺), a known human carcinogen. Since 2021, Japanese rules require employers to measure welding-fume concentration and choose respirators from that result, with fit checks — so a higher-performance respirator may be needed than for carbon steel. Good ventilation is also essential. 🇯🇵 TIP: Never weld stainless steel without the respirator your company has specified for that job."
      },
      {
        id: 20, cat: "Legal Permits",
        q: "What is the total approximate cost and time to get the basic welding permit package in Japan? (Arc Welding + Grinding Wheel + Low-Voltage Electrical)",
        opts: [
          "About 5 days in total — roughly ¥40,000–70,000",
          "About 1 year in total — roughly ¥200,000",
          "One day in total — roughly ¥5,000",
          "About 3 months in total — roughly ¥500,000"
        ],
        a: 0, xp: 25,
        exp: "Basic welding permit package: Arc Welding (3 days, ¥20,000–40,000) + Grinding Wheel (1 day, ¥10,000) + Low-Voltage Electrical (1 day, ¥12,000–22,000) = approximately 5 days and ¥42,000–72,000 total. After this, you are legally cleared to weld, grind, and handle power panels in Japan. 🇯🇵 TIP: Some employers pay for these courses — always ask your recruiter or company 'shikaku shutoku no hiyou wa kaisha ga haraimasu ka?' (資格取得の費用は会社が払いますか？ / Does the company cover the certification costs?). In a tight labor market, many will say yes."
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // STAGE 2 — Tools & Torch Parts
  // ──────────────────────────────────────────────────────────
  {
    stageId: 2,
    label: "STAGE 2 — Tools & Torch Parts",
    color: "#1565C0",
    icon: "🔧",
    unlockXP: 200,
    questions: [
      {
        id: 101, cat: "Tools",
        q: "Your senior says 'Guraindaa kakete' (グラインダーかけて) and 'Kaatto shite' (カットして) about the same disc-shaped power tool, the 'Guraindaa' (グラインダー). What is the key difference between these two instructions?",
        opts: [
          "No difference — both mean grind the surface with the same disc",
          "Kakete = grind with a grinding disc; kaatto = cut with a cut-off disc",
          "Kakete is for stainless only; kaatto shite is for carbon steel only",
          "Kakete = switch the grinder on; kaatto shite = switch it off"
        ],
        a: 1, xp: 25,
        exp: "Guraindaa (グラインダー) = Angle grinder, the most common tool on any Japanese welding site — but the SAME tool body takes different discs for different jobs. 'Kakete' (かけて) means smooth/grind down using a grinding or flap disc. 'Kaatto shite' (カットして) means slice through using a cut-off disc. Using the wrong disc for the requested task (e.g. trying to grind with a thin cut-off disc) is dangerous and can shatter the disc. 🇯🇵 TIP: On Japanese sites, always confirm which disc is mounted before starting — 'guraindaa kakete' never means cutting. Remember: you need the Grinding Wheel Safety Training (自由研削といし特別教育) before using either type of disc."
      },
      {
        id: 102, cat: "Tools",
        q: "Before welding, you need to clean a very narrow groove. Your supervisor hands you a 'Bo-gura' (棒グラ). What is it?",
        opts: [
          "A metal rod used to measure the groove depth",
          "A large angle grinder for flat surfaces",
          "A rod-shaped die grinder for narrow grooves and tight spots",
          "A torch extension for reaching deep grooves"
        ],
        a: 2, xp: 15,
        exp: "Bo-gura (棒グラ) = 棒式グラインダー = die grinder or pencil grinder. The 棒 (bo) means 'rod-shaped.' Perfect for cleaning grooves (開先 / kaisaki), tight corners, and narrow joints where a large disc grinder cannot reach. Used daily in shipyards and factories. 🇯🇵 TIP: When a supervisor hands you a Bo-gura and points to a groove and says 'kaisaki kirei ni shite' (開先きれいにして / clean up the groove nicely), they expect a smooth, scale-free surface. Take time to do it properly — a dirty kaisaki = porosity later."
      },
      {
        id: 103, cat: "Tools",
        q: "After stick welding, the foreman says 'Chippaa!' (チッパー) and points at the weld. What should you grab?",
        opts: [
          "The welding torch — to add one more pass of metal",
          "A stainless wire brush — to polish the bead",
          "The angle grinder — to grind the bead flat",
          "The air chipper — to knock off the slag before the next pass"
        ],
        a: 3, xp: 15,
        exp: "Chippaa (チッパー) = Air chipper or chipping gun. Pneumatic tool that rapidly strikes the weld surface to remove slag (ノロ / Noro). Much faster than a manual chipping hammer. In Japanese shipyards and factories, removing slag before the next pass is MANDATORY — skipping it causes slag inclusion defects. 🇯🇵 TIP: Always wear safety glasses when chipping — hot slag fragments fly at high speed. In Japan, 'chipping = eyes closed' is not allowed. Flying slag in the eye is one of the most common welding injuries reported at Japanese factories."
      },
      {
        id: 104, cat: "Tools",
        q: "What is the difference between a 'Chippaa' (チッパー) and a 'Chippingu-hanmaa' (チッピングハンマー)?",
        opts: [
          "Chippaa is air-powered; chipping hammer is manual — both remove slag",
          "Chipping hammer cuts steel; chippaa polishes the bead",
          "Chippaa is used only for TIG welding; the hammer for stick",
          "They are the same tool — the names differ by region only"
        ],
        a: 0, xp: 20,
        exp: "Chippaa (チッパー) = Air chipper — pneumatic, fast, used for heavy slag removal in production welding. Chippingu-hanmaa (チッピングハンマー) = manual chipping hammer — used when air tools are not available or for small amounts of slag. Both tools require technique to avoid damaging the weld bead. 🇯🇵 TIP: A sharp, precise chipping stroke at 30–45° to the bead surface removes slag efficiently without gouging the metal. New workers tend to hammer too hard and too perpendicular — practice on scrap first."
      },
      {
        id: 105, cat: "Torch Parts",
        q: "Your supervisor says the 'Chippu' (チップ) in the torch needs replacing. What does the contact tip do?",
        opts: [
          "It cools the torch during heavy welding",
          "It passes current to the wire and guides it",
          "It connects the torch cable to the wire feeder",
          "It controls how much shielding gas flows"
        ],
        a: 1, xp: 20,
        exp: "Chippu (チップ) = Contact tip. TWO jobs: 1) Transfers electrical current from the torch to the welding wire. 2) Guides the wire through the correct path to the arc. A worn or spatter-clogged tip causes arc instability, poor bead shape, and wire feeding problems. Replace regularly — they are cheap and critical. 🇯🇵 TIP: Japanese welders say 'chippu ga buru-buru shiteru' (チップがぶるぶるしてる / the tip is shaking/unstable) to describe an arc with an erratic, flickering sound. This usually means a worn tip — replace immediately. Carrying spare chips (チップ) in your apron pocket is standard practice."
      },
      {
        id: 106, cat: "Torch Parts",
        q: "What is the role of the 'Nozuru' (ノズル) in a semi-auto welding torch?",
        opts: [
          "It guides the welding wire to the work",
          "It connects the torch to the power cable",
          "It directs the shielding gas around the weld pool",
          "It cools the contact tip with water"
        ],
        a: 2, xp: 20,
        exp: "Nozuru (ノズル) = Nozzle. The outermost part of the torch. It channels shielding gas (CO₂, Argon, or mixed gas) from the torch body around the arc and weld pool. A clogged or spatter-coated nozzle restricts gas flow and causes porosity (ブローホール). Clean it regularly with anti-spatter spray. 🇯🇵 TIP: The correct way to clean a clogged nozzle on a Japanese site: spray anti-spatter spray first, then knock the nozzle firmly against a hard surface (not the weld!). Experienced welders do this automatically every few meters of welding — make it a habit."
      },
      {
        id: 107, cat: "Torch Parts",
        q: "You notice lots of porosity in your welds. Your senior checks the torch and removes a blocked 'Orifisu' (オリフィス). Why does a blocked orifice cause porosity?",
        opts: [
          "It clogs the liner with wire shavings",
          "It overheats the contact tip and melts it",
          "It slows the wire feed and makes the arc long",
          "Gas flow becomes turbulent and pulls in air"
        ],
        a: 3, xp: 25,
        exp: "Orifisu (オリフィス) = Gas diffuser / orifice. Located between the torch body and the nozzle. It spreads the shielding gas evenly for a smooth, laminar flow. If blocked, gas turbulence sucks in atmospheric air (nitrogen + oxygen), causing gas pores (ブローホール) in the weld. A common cause of mysterious porosity that beginners overlook. 🇯🇵 TIP: When porosity suddenly appears and you cannot identify the cause, experienced Japanese welders disassemble the torch completely (chippu → nozuru → orifisu) and clean every part. The orifice is often the hidden culprit — a tiny spatter ball blocking one of its holes."
      },
      {
        id: 108, cat: "Torch Parts",
        q: "What is the 'Rainaa' (ライナー) inside a semi-auto welding torch?",
        opts: [
          "The tube that guides the wire from feeder to contact tip",
          "The cooling-water channel inside the torch",
          "The rubber outer sleeve protecting the torch cable",
          "The insulator between the nozzle and torch body"
        ],
        a: 0, xp: 20,
        exp: "Rainaa (ライナー) = Liner / conduit tube. Runs the full length of the torch cable. It guides the welding wire smoothly from the feeder to the contact tip AND carries shielding gas. A kinked, dirty, or worn liner causes wire jamming (バードネスティング), inconsistent feeding, and arc instability. Replace when wire feeding becomes rough. 🇯🇵 TIP: 'Baadonesutingu' (バードネスティング / bird's nest) is the Japanese term for wire tangled in a ball at the drive rolls due to liner blockage. When it happens mid-weld, the arc stops suddenly with a loud pop. Learn to clear it quickly: release the drive roll pressure, pull the wire back, clear the tangle, re-feed."
      },
      {
        id: 109, cat: "Tools",
        q: "In a Japanese shipyard, a 'Sokyuki' (走行機 / そうきゅうき) or 'Kyarijji' (キャリッジ) is set up on a long joint. What does it do?",
        opts: [
          "A small crane that lifts steel plates along the joint",
          "A motorized carriage that moves the torch at a set speed",
          "A grinding machine that cleans the weld after welding",
          "A gas cutting machine for straight bevel cuts"
        ],
        a: 1, xp: 20,
        exp: "Sokyuki (走行機) / Kyarijji (キャリッジ) = Welding carriage. A motorized trolley that carries the semi-auto welding torch along a straight joint at a set, constant speed. The welder sets the parameters (voltage, wire speed, travel speed) and monitors. Common for long straight welds on ship hulls, steel structures, and tank walls. 🇯🇵 TIP: Shipyard welders using the sokyuki are expected to watch the arc continuously and manually correct torch angle if the carriage drifts. Falling asleep while 'monitoring' a sokyuki is a common new-worker mistake — defects over several meters will require full hatsuri (ハツリ / gouge out and redo)."
      },
      {
        id: 110, cat: "Tools",
        q: "You borrow a 'Yosetsu-men' (溶接面) welding helmet for stick welding at 150A, but its lens is marked Shade #5 — a level used for gas cutting, not arc welding. What should you do?",
        opts: [
          "Use it — shade number only affects color, not eye safety",
          "Use it, but only for tack welds under 10 seconds",
          "Don't use it — #5 is too light; use a #9–11 lens for 150A",
          "Use it, but stand further away from the arc"
        ],
        a: 2, xp: 25,
        exp: "The shade number (遮光度番号) must match the process and current. For stick welding at 75–200A, the JIS T 8141 guide is #9–11. A #5 lens lets through far too much harmful UV/IR radiation for arc welding — short welds or extra distance do not make it safe. 🇯🇵 TIP: When borrowing a helmet on site, always check the shade number on the lens holder — never assume."
      },
      {
        id: 111, cat: "Tools",
        q: "What is a 'Jido-shakko-men' (自動遮光面 / じどうしゃこうめん) and why do many Japanese welders prefer it?",
        opts: [
          "A clear face shield used for grinding work only",
          "A fixed-shade mask whose lens is always dark",
          "A remote-controlled helmet with a built-in camera",
          "An auto-darkening helmet that darkens when the arc starts"
        ],
        a: 3, xp: 20,
        exp: "Jido-shakko-men (自動遮光面) = Auto-darkening welding helmet (ADH). The lens is clear at rest (you can see clearly to position the torch) then darkens automatically when the arc starts — reaction time under 1/25,000 second. Reduces eye strain, improves positioning accuracy. Standard in modern Japanese workshops. 🇯🇵 TIP: Many Japanese welders own their own jido-shakko-men. Before buying, check the reaction time and the shade range on the spec sheet — a slow, cheap helmet can still hurt your eyes."
      },
      {
        id: 112, cat: "Tools",
        q: "What is 'Ura-atekin' (裏当て金 / うらあてきん) used for in welding?",
        opts: [
          "A backing strip that supports the root pass from behind",
          "Extra filler metal used to fill wide gaps",
          "A clamp that holds the plates together",
          "A grounding plate for the welding circuit"
        ],
        a: 0, xp: 20,
        exp: "Ura-atekin (裏当て金) = Backing strip / backing bar. Placed behind the groove root to support the molten weld pool on the first (root) pass. Prevents burn-through (溶落ち / yoochi) and helps achieve full root penetration (完全溶込み). Common in shipbuilding, structural steel, and pressure vessel fabrication. 🇯🇵 TIP: In Japanese shipbuilding, steel backing bars are often tack-welded in place permanently (永久裏当て). In structural work requiring clean back surfaces, ceramic backing tape (セラミック裏当て) is used instead — it falls off after the weld cools and leaves no permanent attachment."
      },
      {
        id: 113, cat: "Tools",
        q: "What is 'Endo-tabu' (エンドタブ) and why is it used in certification tests and production welding?",
        opts: [
          "A test report form filled in after welding",
          "A tab that moves weld start/end defects off the joint",
          "A type of flux-cored wire for thick plates",
          "A ceramic backing used only for pipe welding"
        ],
        a: 1, xp: 20,
        exp: "Endo-tabu (エンドタブ) = Run-off tab / end tab. Short steel plates attached at each end of the weld joint. Arc starts and ends are the most defect-prone areas (ブローホール, クレーター割れ). The end tab moves these defects outside the actual joint. After welding, end tabs are cut off and discarded. Required in JIS certification tests. 🇯🇵 TIP: End tabs are standard in building steel work, and the AW Kentei factory-welding tests are divided by end-tab type (steel end tabs or substitute end tabs). After welding, cut and finish the end-tab area as the procedure says."
      },
      {
        id: 114, cat: "Tools",
        q: "What is 'Aasuクリップ' (アースクリップ) also called 'ground clamp' and why is it critical?",
        opts: [
          "A clip that holds the electrode in the holder",
          "A clip that locks the wire spool in the feeder",
          "It connects the return current path to the workpiece",
          "A safety clip that secures the power cable"
        ],
        a: 2, xp: 20,
        exp: "Aasu-kurippu (アースクリップ) = Earth clamp / ground clamp. Completes the welding electrical circuit by connecting to the workpiece. Poor ground contact causes arc instability, spatter, and electrical current finding dangerous alternative paths through machinery, frameworks, or structures. Always clamp as close to the weld as possible. 🇯🇵 TIP: 'Aasu ga warui' (アースが悪い / bad ground) is a common reason for mysterious arc instability on Japanese sites. If your arc sounds rough and spatter is excessive despite correct voltage/current, check the earth clamp first — rusty clamp jaws or an indirect ground path through steel structures is the culprit more often than any machine setting."
      },
      {
        id: 115, cat: "Tools",
        q: "Your supervisor tells you to spray 'Supatta-boshi-zai' (スパッタ防止剤) before welding. Where is it safe and effective to apply it, and where should you NEVER spray it?",
        opts: [
          "Only on the joint surface to be welded, never on the torch",
          "On the contact tip's contact surface for better current flow",
          "Everywhere, including inside the gas channel and orifice",
          "On the nozzle outside — never inside the gas channel"
        ],
        a: 3, xp: 25,
        exp: "Supatta-boshi-zai (スパッタ防止剤) = Anti-spatter spray, applied to the nozzle exterior and torch body so spatter falls off easily instead of sticking. Spraying INSIDE the gas channel or orifice can clog the gas passage and cause turbulence (leading to porosity), and spraying near an active arc or on hot metal is a fire/fume risk. A small amount on the nozzle exterior is sufficient. 🇯🇵 TIP: Water-based anti-spatter sprays are preferred on Japanese sites because they're less flammable. Spray before welding, wipe clean after — small investment, big time saving."
      },
      {
        id: 116, cat: "Tools",
        q: "What is 'Ondo-chooku' (温度チョーク / おんどチョーク) or 'Tempu-sutikku' (テンプスティック) used for?",
        opts: [
          "A crayon that melts at a set temperature to check preheat",
          "A marker for writing weld positions on drawings",
          "An anti-corrosion coating for finished welds",
          "A chalk for marking cut lines on steel plate"
        ],
        a: 0, xp: 20,
        exp: "Ondo-chooku (温度チョーク) = Temperature crayon / Tempilstick. Each crayon melts at a specific temperature (e.g., 150°C, 200°C, 350°C). Mark the steel near the weld — if the mark melts, the temperature has been reached. Used to verify preheat temperature (予熱) before welding and interpass temperature (パス間温度) between passes. 🇯🇵 TIP: Measure where the WPS tells you to — usually on the base metal at a set distance from the joint, not on the weld itself. Supervisors check your measuring technique as well as the reading."
      },
      {
        id: 117, cat: "Tools",
        q: "What is a 'Yosetsu-geeji' (溶接ゲージ / ようせつゲージ) used for on a Japanese job site?",
        opts: [
          "To check the gas cylinder pressure",
          "To measure leg length, throat, undercut and reinforcement",
          "To set the welding machine's current",
          "To measure how much welding wire was used"
        ],
        a: 1, xp: 20,
        exp: "Yosetsu-geeji (溶接ゲージ) = Welding gauge. An essential inspection tool with multiple functions: measures fillet weld leg length (脚長), throat thickness (のど厚), weld reinforcement height (余盛), undercut depth (アンダーカット), and more. Used during visual inspection (VT) by welders and inspectors. 🇯🇵 TIP: In Japan, welders are expected to self-inspect (自主検査 / jishu-kensa) their own welds with the welding gauge BEFORE the quality inspector arrives. Showing your inspection results proactively earns respect — waiting for the inspector to find problems does not."
      },
      {
        id: 118, cat: "Tools",
        q: "Your site uses semi-auto torches from different makers (for example Panasonic and Daihen). Can you swap contact tips and nozzles between them?",
        opts: [
          "Yes — all Japanese torch parts are one standard size",
          "Yes, as long as the wire diameter is the same",
          "Not without checking — match the part number to the torch",
          "No — only the nozzle can be swapped, never the tip"
        ],
        a: 2, xp: 25,
        exp: "Contact tips (チップ), nozzles (ノズル), orifices and liners are designed for specific torch models. Different makers — and even different models from the same maker — can use different sizes and threads, so a part that looks similar may not fit or may fit poorly, causing gas leaks and unstable arcs. 🇯🇵 TIP: When ordering parts at a welding supply store (溶接用品店), give the torch maker and model. Keep a few spare tips of the correct type in your pocket."
      },
      {
        id: 119, cat: "Tools",
        q: "What is 'Furappu-disuku' (フラップディスク) and when is it used instead of a standard grinding disc?",
        opts: [
          "A safety guard that fits over an angle grinder",
          "A wire wheel used to remove rust",
          "A thin disc for cutting through steel plate",
          "Overlapping abrasive flaps that blend welds smoothly"
        ],
        a: 3, xp: 20,
        exp: "Furappu-disuku (フラップディスク) = Flap disc. Overlapping abrasive flaps attached to a backing plate. Used to blend and smooth weld surfaces, remove light spatter, and feather weld toes — gentler than a flat grinding disc. Leaves a smoother surface finish. Common in finish welding work and stainless steel applications. 🇯🇵 TIP: For stainless steel (SUS), always use a stainless-dedicated flap disc or grinding disc marked 'SUS用' or 'ステン用.' Using a disc that has touched carbon steel before will contaminate the stainless surface with iron particles, causing rust spots — this is a serious quality defect called '鉄汚染' (tetsu-osen / iron contamination)."
      },
      {
        id: 120, cat: "Tools",
        q: "You need to wire-brush a stainless steel (SUS) weld, but only a carbon-steel-rated 'Waiyaa-burashi' (ワイヤーブラシ) is available. Is it acceptable to use it just this once?",
        opts: [
          "No — carbon bristles cause iron contamination and rust spots",
          "Yes, as long as you rinse the brush with water first",
          "No, but only because it scratches the surface cosmetically",
          "Yes — bristle material does not transfer between metals"
        ],
        a: 0, xp: 25,
        exp: "Waiyaa-burashi (ワイヤーブラシ) = Wire brush, used after welding to remove light slag, oxidation, and fine spatter. Carbon steel bristles embed microscopic iron particles into a stainless surface, which later rust and create visible rust spots — a real corrosion defect, not just cosmetic. Rinsing does not remove embedded particles. Many Japanese sites keep separate, color-coded brush sets for carbon steel and stainless to prevent this cross-contamination. 🇯🇵 TIP: For heavy slag after stick welding, use the chipping hammer (チッピングハンマー) or air chipper (チッパー) first, then follow with the correct wire brush — never substitute brush types to save time."
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // STAGE 3 — Japanese Workplace Slang
  // ──────────────────────────────────────────────────────────
  {
    stageId: 3,
    label: "STAGE 3 — Japanese Workplace Slang",
    color: "#D97706",
    icon: "🗣️",
    unlockXP: 400,
    questions: [
      {
        id: 201, cat: "Slang",
        q: "A senior welder groans 'Kachiage...' (かちあげ) and a trainee assumes this means the official term 'Tatemuki-shisei' (立向き姿勢 / vertical position) since both involve fighting gravity. Is the trainee correct?",
        opts: [
          "Yes — kachiage is just the slang word for vertical position",
          "No — kachiage means overhead; vertical is a different position",
          "No — kachiage actually means the easy flat position",
          "Yes, but only when welding pipe joints, not plate joints"
        ],
        a: 1, xp: 25,
        exp: "Kachiage (かちあげ) is slang specifically for 上向き姿勢 (Uwamuki-shisei) = OVERHEAD position — torch held above your head, spatter falling onto you. Tatemuki-shisei (立向き姿勢) is the VERTICAL position — welding on a standing wall, up or down. Both fight gravity in some sense, but they are distinct positions with different techniques, and confusing the two slang/formal terms on site causes real miscommunication. 🇯🇵 TIP: Japanese welders wear a towel wrapped around their neck and tucked into their collar for kachiage work — spatter falling down the back of your neck is both painful and a fire hazard. This simple trick is universal on Japanese job sites."
      },
      {
        id: 202, cat: "Slang",
        q: "Your supervisor says today's vertical (立向き / tatemuki) welds must be done '上進' (joshin, vertical-up) and not '下進' (kashin, vertical-down). Why does Japan generally prefer vertical-up for structural work?",
        opts: [
          "Vertical-down, because it needs no crater-fill technique",
          "Vertical-down, because it is faster and penetrates deeper",
          "Vertical-up, because it gives better fusion and penetration",
          "Neither — Japan uses only vertical-down for vertical welds"
        ],
        a: 2, xp: 25,
        exp: "Within vertical welding there are two directions: 立向上進 (Tatemuki-joshin, vertical-UP) and 立向下進 (Tatemuki-kashin, vertical-DOWN). Vertical-down is faster but gives shallower penetration and a higher risk of lack of fusion; vertical-up is slower but gives better fusion and penetration, so it is generally preferred for structural welds. 🇯🇵 TIP: In formal documents (WPS, inspection reports) always use the official terms 立向上進 / 立向下進 — avoid site slang in QC paperwork."
      },
      {
        id: 203, cat: "Slang",
        q: "Your senior inspects the groove and says the next pass is the 'Shiage' (仕上げ / しあげ). What does this mean for your next move?",
        opts: [
          "Grind everything out and start the root pass again",
          "The weld is finished — no more passes are needed",
          "There is a crack — stop and call the inspector",
          "The next pass is the cap pass that forms the surface"
        ],
        a: 3, xp: 20,
        exp: "Shiage (仕上げ) = finishing. In multi-pass groove welding, the 仕上げ層 (shiage-sou / cap or cover pass) is the last layer that forms the weld surface. The passes before it are the root pass (初層 / shosou) and the fill passes (中間層 / chuukan-sou). 🇯🇵 TIP: Take extra care with bead width, height and toe blending on the cap pass — this is the surface the inspector judges first in visual testing."
      },
      {
        id: 204, cat: "Slang",
        q: "Your supervisor looks at your practice weld and shouts 'Mimizu!' (ミミズ) [mi-mi-zu]. What went wrong?",
        opts: [
          "The bead wanders left and right like a worm",
          "The gas flow is too high and blows the pool",
          "You used the wrong wire for this base metal",
          "The weld went too deep and burned through"
        ],
        a: 0, xp: 15,
        exp: "Mimizu (ミミズ) = earthworm. Used to describe a wobbly, uneven, inconsistent bead that winds left and right like a worm. Caused by unsteady torch movement, inconsistent travel speed, or shaking hands. Fix: practice straight stringer beads until they are perfectly straight before attempting weave beads. 🇯🇵 TIP: Japanese welding trainers often say 'ashi o tsukae' (足を使え / use your feet/legs) — it means don't just move your arms; stabilize your whole body and move your body smoothly for long runs. Bracing your elbow against your body improves bead straightness dramatically."
      },
      {
        id: 205, cat: "Slang",
        q: "A senior welder looks at your bead, shakes his head, and says 'Gatagata!' (ガタガタ) [ga-ta-ga-ta]. What does he mean?",
        opts: [
          "Travel speed was too fast, so the bead is too thin",
          "The bead is rough and uneven, with no steady rhythm",
          "The welding machine is broken and needs repair",
          "The base metal has a crack next to the bead"
        ],
        a: 1, xp: 15,
        exp: "Gatagata (ガタガタ) = rough, rattling, inconsistent. Used to describe a bead with irregular width, height, and ripple pattern — no consistent rhythm or control. Different from Mimizu (which is straight but wobbly) — Gatagata means the whole bead is messy. Both are feedback you need to hear and improve from. 🇯🇵 TIP: Japanese welding culture values 職人気質 (shokunin-kishitsu / craftsman spirit) — a true shokunin lays perfectly uniform beads every time. When a senior says 'gatagata,' take it seriously. Ask 'doko ga warui desu ka?' (どこが悪いですか？ / where specifically is the problem?) — Japanese seniors respect workers who want to understand and improve."
      },
      {
        id: 206, cat: "Slang",
        q: "After welding a large plate, your supervisor says 'Hizumi ga deta!' (歪みが出た！) [hi-zu-mi ga de-ta]. What happened?",
        opts: [
          "The weld passed inspection — good work",
          "The shielding gas ran out during welding",
          "Welding heat made the plate bend out of shape",
          "A crack appeared along the weld centerline"
        ],
        a: 2, xp: 20,
        exp: "Hizumi (歪み) = distortion / warping. When you weld, intense heat causes the metal to expand then contract unevenly as it cools — this warps the plate. More passes = more heat = more distortion. Solutions: proper tack weld sequence, back-step welding (後退法), pre-setting (逆ひずみ法), and minimizing heat input. 🇯🇵 TIP: In Japanese fabrication, controlling hizumi is considered a mark of an advanced welder. The 'tack sequence' (仮付け順序) is decided by the supervisor and must be followed exactly — random tacking by new workers is the #1 cause of large plate distortion on Japanese job sites."
      },
      {
        id: 207, cat: "Slang",
        q: "After TIG welding a stainless steel joint with no flux involved, your senior still says 'Noro tore!' (ノロとれ！). Does this make sense, and what should you actually check?",
        opts: [
          "Yes — here 'noro' means check the gas flow, not slag",
          "No — 'noro tore' is used only for FCAW welding",
          "Yes — TIG leaves heavy slag, so chip it like stick welds",
          "Not literally — TIG has no slag; check oxide/heat tint"
        ],
        a: 3, xp: 25,
        exp: "Noro (ノロ) = slag, the crusty residue from FLUX-based processes like stick welding (SMAW) or flux-cored welding (FCAW). TIG welding (GTAW) uses no flux and produces no slag — so 'noro tore' literally does not apply. If a senior says this during TIG work, they may be using the phrase loosely to mean 'clean the surface,' likely referring to oxide scale or heat tint, which needs different treatment (e.g., stainless steel brush or pickling), not chipping. 🇯🇵 TIP: In some Japanese regions, workers say 'kasu' (カス) instead of 'noro' for slag — same thing, different site dialect. But always confirm what's actually on the surface before reaching for a chipping hammer."
      },
      {
        id: 208, cat: "Slang",
        q: "What is 'Karitsuke' (仮付け / かりつけ) [ka-ri-tsu-ke] or 'Tenzuke' (点付け / てんづけ) [ten-zu-ke] and why is it important?",
        opts: [
          "Short tack welds that hold parts in place before welding",
          "A type of fillet weld used only in corners",
          "The final cover pass that completes the weld",
          "A defect caused by welding in the wrong position"
        ],
        a: 0, xp: 20,
        exp: "Karitsuke (仮付け) / Tenzuke (点付け) = Tack weld. Short welds at intervals to hold parts in correct position before full welding. CRITICAL: tack weld defects (cracks, porosity) get absorbed into the final weld and become serious problems. Treat tack welds with the same care as full welds. In Japan, this is strictly enforced. 🇯🇵 TIP: Japanese supervisors sometimes test new workers by watching how they do their karitsuke — sloppy, quick tacks with obvious craters and porosity signal a careless worker. Minimum tack length, proper crater fill, and correct spacing (指定ピッチ) are all checked. Tack quality = work quality in Japan."
      },
      {
        id: 209, cat: "Slang",
        q: "Your supervisor says 'Kaisaki wo tsukure!' (開先を作れ！ / かいさきをつくれ！) [kai-sa-ki wo tsu-ku-re]. What are you being asked to do?",
        opts: [
          "Cut a new length of welding wire",
          "Bevel the plate edges to the angle on the drawing",
          "Spray anti-spatter on the joint",
          "Draw the weld symbol on the drawing"
        ],
        a: 1, xp: 20,
        exp: "Kaisaki (開先) = Groove / joint preparation. The beveled or shaped edge of a plate prepared before welding to ensure the arc and filler metal can reach the root for full penetration. Common types: I-groove (I形), V-groove (V形), X-groove (X形), U-groove (U形). Kaisaki shape and dimensions are specified on the drawing. 🇯🇵 TIP: The kaisaki angle and root face (ルートフェース) must match the WPS exactly. In Japan, groove preparation is checked with a 角度ゲージ (kakudo-geeji / angle gauge) and the root face is measured with calipers — deviation beyond tolerance will require re-grinding before welding starts."
      },
      {
        id: 210, cat: "Slang",
        q: "Your senior compliments your root pass: 'Uranami kirei da na!' (裏波きれいだな！ / うらなみきれいだな！) [u-ra-na-mi ki-rei da na]. What did you achieve?",
        opts: [
          "A smooth, clean surface on top of the weld",
          "A perfectly straight bead from start to end",
          "An even back bead showing full root penetration",
          "All slag removed cleanly after the root pass"
        ],
        a: 2, xp: 25,
        exp: "Uranami (裏波) = back bead / root penetration bead. In complete penetration groove welding (完全溶込み), the root pass must penetrate fully and form a visible, even bead on the back side of the joint. A beautiful Uranami shows mastery of root pass control — it is the proof of a skilled welder in Japan. 🇯🇵 TIP: When a Japanese senior says 'uranami kirei da na,' this is a genuine compliment — not often given lightly. The correct response is a humble 'arigatou gozaimasu' (ありがとうございます). Showing pride or saying 'of course' would be considered arrogant. Humility is a key part of Japanese craftsman culture."
      },
      {
        id: 211, cat: "Slang",
        q: "During a site visit, an inspector points at the joint and says 'Mechigai ga aru!' (目違いがある！ / めちがいがある！) [me-chi-ga-i ga a-ru]. What is the problem?",
        opts: [
          "The shielding gas mixture is wrong for the job",
          "The wrong welding process was used on this joint",
          "The weld reinforcement is too high",
          "The plate edges are not flush — one is higher"
        ],
        a: 3, xp: 20,
        exp: "Mechigai (目違い) = misalignment / mismatch. The two plates being welded together are not at the same height — one edge is higher than the other. This creates uneven stress distribution and can lead to defects. JIS standards specify maximum allowable misalignment depending on plate thickness. Fix with clamps before welding. 🇯🇵 TIP: The allowable misalignment depends on the code and the plate thickness — check the drawing or WPS, not a rule of thumb. Inspectors check it with a straight edge and gauge before the root pass."
      },
      {
        id: 212, cat: "Slang",
        q: "The foreman checks a thin plate joint and says 'Yoochi shita!' (溶落ちした！ / ようおちした！) [yo-o-chi shi-ta]. What went wrong?",
        opts: [
          "The arc melted right through the plate, leaving a hole",
          "The bead is too narrow for the joint",
          "The weld was completed perfectly",
          "The slag was not removed between passes"
        ],
        a: 0, xp: 20,
        exp: "Yoochi (溶落ち) = burn-through / melt-through. The arc was too hot, too slow, or the root gap too wide — the base metal melted completely through, leaving a hole. More common with thin plates or wide root gaps. Prevention: reduce current, increase travel speed, use backing bar (裏当て金), or reduce root gap. 🇯🇵 TIP: Yoochi on a root pass during a JIS certification test is an automatic failure. If you feel the pool is becoming too fluid and starting to drop, increase travel speed immediately — don't freeze. Repairing a yoochi hole requires grinding out, tacking the gap, and re-welding — a time-consuming embarrassment during tests."
      },
      {
        id: 213, cat: "Slang",
        q: "For stainless steel welding, your supervisor says 'Ura-gasu wo shiro!' (裏ガスをしろ！) [u-ra-ga-su wo shi-ro]. What do you need to set up?",
        opts: [
          "Double the shielding gas flow on the front side",
          "Shield the back of the joint with argon gas",
          "Switch from argon to CO₂ shielding gas",
          "Apply flux paste to the back of the joint"
        ],
        a: 1, xp: 25,
        exp: "Ura-gasu (裏ガス) = back purge / back shielding. When welding stainless steel or titanium, the back of the weld must be shielded with Argon or Nitrogen to prevent oxidation. Without it, the back surface oxidizes — creating rainbow discoloration (Tenpaa-karaa / テンパーカラー) and dramatically reducing corrosion resistance. 🇯🇵 TIP: Back-purge flow rate and purge time are specified in the WPS. A common mistake is not purging long enough before striking the arc — oxygen left in the pipe will still oxidize the root. For critical piping, the oxygen level inside is checked with a meter."
      },
      {
        id: 214, cat: "Slang",
        q: "You weld stainless steel without back purging and the supervisor sees rainbow colors on the back. He says 'Tenpaa-karaa da!' (テンパーカラーだ！). What does this indicate?",
        opts: [
          "Excellent quality — the colors prove full penetration",
          "Normal for stainless steel — no action is needed",
          "Oxidation that lowers corrosion resistance",
          "Proof that the backing gas is working correctly"
        ],
        a: 2, xp: 25,
        exp: "Tenpaa-karaa (テンパーカラー) = heat tint / temper color. On stainless steel: Gold = mild (acceptable in some codes), Blue = significant oxidation, Violet/Grey = severe (very poor corrosion resistance). Cause: insufficient back gas shielding or excessive heat input. Must be mechanically or chemically removed in corrosion-critical applications. 🇯🇵 TIP: In Japanese chemical and food processing plants, tenpaa-karaa on SUS weld surfaces is a critical failure — even gold tint may be rejected. The remedy is 酸洗い (sansarai / acid pickling) with mixed acid paste or electropolishing. On construction sites, light gold tint is often acceptable — always confirm the acceptance criteria with the QC supervisor before starting stainless work."
      },
      {
        id: 215, cat: "Slang",
        q: "Your supervisor says 'Hatsuri shiro!' (ハツリしろ！ / はつりしろ！) [ha-tsu-ri shi-ro]. What must you do?",
        opts: [
          "Increase the wire feed speed for the next pass",
          "Spray anti-spatter on the joint before welding",
          "Apply flux to the joint to stop porosity",
          "Gouge or grind out the bad weld so it can be redone"
        ],
        a: 3, xp: 20,
        exp: "Hatsuri (ハツリ) = gouging or chipping out weld metal. When a weld has failed inspection, the defective part must be completely removed before re-welding. Methods: air arc gouging (ガウジング), grinding with Bo-gura (棒グラ), or chipping. The area must be clean to bare metal before re-welding. 🇯🇵 TIP: Air arc gouging (ガウジング) leaves a carbon-contaminated surface — after gouging, you MUST grind the surface to remove the carbon layer (カーボン除去 / kabon-jokyo) before re-welding. Welding over a carbon-contaminated gouge without grinding causes porosity and inclusions. This step is often skipped by new workers and causes repeated failures."
      },
      {
        id: 216, cat: "Slang",
        q: "The inspector says 'Torinao-shi da!' (取り直しだ！ / とりなおしだ！) [to-ri-na-o-shi da]. What does this mean for the welder?",
        opts: [
          "The weld or section must be removed and redone",
          "Add one more cover pass on top of the weld",
          "The weld is perfect and has been approved",
          "Only change the machine settings and continue"
        ],
        a: 0, xp: 20,
        exp: "Torinao-shi (取り直し) = rework / redo. The weld has been rejected and must be completely removed and re-welded. This costs time, materials, and reputation. In Japan's quality culture, rework is taken very seriously — it affects the welder's evaluation. Prevention: do it right the first time. 🇯🇵 TIP: Many Japanese companies track rework (手直し / tenaoshi) and trace defects back to the joint and welder. Being known for clean first-time work is one of the best reputations you can build."
      },
      {
        id: 217, cat: "Slang",
        q: "A welder says a job requires 'Gen-awase' (現合 / げんあわせ). What does this mean?",
        opts: [
          "Working only from computer drawings, no measuring",
          "Measuring and cutting parts to fit on site",
          "A type of inspection certificate for joints",
          "Working overtime on weekends to finish a job"
        ],
        a: 1, xp: 25,
        exp: "Gen-awase (現合 / げんあわせ) = on-site fitting / field fitting. When parts don't match the drawing exactly because of fabrication tolerances or changes in the structure, workers measure the actual gap on site and custom-cut or fabricate the piece to fit. Common in shipbuilding and construction. 🇯🇵 TIP: When doing gen-awase work, record the actual dimensions you measured and what you changed. Undocumented field changes cause serious problems at inspection."
      },
      {
        id: 218, cat: "Slang",
        q: "What is 'Chippingu' (チッピング) in the welding workflow, and when exactly is it done?",
        opts: [
          "Spraying anti-spatter before welding starts",
          "Checking the bead for cracks after welding",
          "Removing slag after every pass",
          "Grinding the weld down to its final height"
        ],
        a: 2, xp: 15,
        exp: "Chippingu (チッピング) = slag chipping / slag removal. Done after every single pass in multi-pass welding. Failing to remove slag between passes causes slag inclusion (スラグ巻き込み) — a serious internal defect that will fail NDT inspection. Process: chip → wire brush → inspect → weld next pass. 🇯🇵 TIP: After chipping, brush the bead and look closely at the toes and between beads — slag often hides there. Only start the next pass when the surface is clean."
      },
      {
        id: 219, cat: "Slang",
        q: "A senior says you need to do 'Bokae' (棒替え / ぼうかえ) soon. What does this mean — and which welding process is this relevant to?",
        opts: [
          "Change the wire spool — used in FCAW welding",
          "Switch to a different shielding gas — MIG/MAG",
          "Replace the contact tip — all semi-auto welding",
          "Change the electrode — stick welding (SMAW) only"
        ],
        a: 3, xp: 25,
        exp: "Bokae (棒替え) = electrode change. In stick welding (SMAW / 被覆アーク溶接) the electrode burns down and must be replaced — so this word only applies to stick welding. Semi-auto FCAW/MAG uses wire from a spool, so there is no 'bokae'. 🇯🇵 TIP: Low-hydrogen electrodes absorb moisture. They are re-dried (typically 300–400°C, as the manufacturer specifies) and then kept in a holding oven (around 100–150°C) until use. Wet electrodes cause hydrogen cracking and porosity."
      },
      {
        id: 220, cat: "Slang",
        q: "Your senior says the wire is 'Tobidashi!' (飛び出し！) for your 1.2mm wire job. Using the standard Japanese rule of thumb, what stick-out length should you be aiming for instead?",
        opts: [
          "About 12mm — roughly 10× the wire diameter",
          "About 25mm — the same for every wire size",
          "About 1.2mm — equal to the wire diameter",
          "About 6mm — half of the 10× rule"
        ],
        a: 0, xp: 25,
        exp: "Tobidashi (飛び出し) = wire stick-out / extension, the distance from the contact tip to the work surface. Too long: arc instability, poor penetration, shielding failure. Japanese welders use a simple rule: stick-out = 10× wire diameter. For 1.2mm wire, that's roughly 12mm — not a fixed 25mm regardless of wire size, and not simply equal to the wire diameter itself. 🇯🇵 TIP: For 1.6mm wire, aim for about 16mm stick-out using the same 10× rule. When welding in tight joints where you can't see the tip clearly, experienced workers develop a feel for torch weight and arc sound that tells them the distance is correct."
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // STAGE 4 — Positions & Joint Types
  // ──────────────────────────────────────────────────────────
  {
    stageId: 4,
    label: "STAGE 4 — Positions & Joint Types",
    color: "#059669",
    icon: "📐",
    unlockXP: 600,
    questions: [
      {
        id: 301, cat: "Positions",
        q: "Which of the following statements about 'Shitamuki-shisei' (下向き姿勢 / flat position) is NOT correct?",
        opts: [
          "Its ISO code is PA and its JIS code is F",
          "Because it is the easiest position, JIS inspectors apply more relaxed bead-quality standards to flat-position test welds",
          "All beginners typically start their welding training in this position",
          "Gravity pulls the molten pool down into the joint, helping penetration and fusion"
        ],
        a: 1, xp: 25,
        exp: "Shitamuki-shisei (下向き姿勢) = Flat position, 1G (groove) / 1F (fillet), ISO code PA. Gravity helps the molten pool settle into the joint, making it the easiest position to learn — but JIS inspectors do NOT relax their standards for flat-position welds. Bead width uniformity, toe blend, and crater fill are scrutinized just as strictly. 🇯🇵 TIP: Never assume easy position = low standards. A sloppy flat-position weld on a JIS test is still a fail — 'easy' only refers to physical difficulty, not the quality bar."
      },
      {
        id: 302, cat: "Positions",
        q: "A drawing specifies 'Tatemuki-shisei' (立向き姿勢) with ISO code 'PF.' A coworker says this means vertical-down welding. Is he correct?",
        opts: [
          "No — PF is actually the code for horizontal welding, not vertical at all",
          "Yes — PF always refers to vertical-down (立向下進)",
          "No — PF refers to vertical-UP welding (立向上進 / Tatemuki-joshin); vertical-down uses code PG instead",
          "Yes, but only for pipe welds; for plate welds PF means vertical-up"
        ],
        a: 2, xp: 25,
        exp: "Tatemuki-shisei (立向き姿勢) = Vertical position, 3G (groove) / 3F (fillet). Within vertical welding, ISO PF = vertical-UP (立向上進 / Tatemuki-joshin, better fusion and penetration), while ISO PG = vertical-DOWN (立向下進, faster but shallower penetration). The two codes are NOT interchangeable and the distinction matters for certification scope. 🇯🇵 TIP: Japanese sites default to vertical-UP (上進) because it gives better fusion and penetration. Vertical-DOWN (下進) is sometimes used for thin sheet in production but is generally discouraged for structural welds in Japan."
      },
      {
        id: 303, cat: "Positions",
        q: "What is 'Yokomuki-shisei' (横向き姿勢 / よこむきしせい)?",
        opts: [
          "Vertical position — on a vertical wall",
          "Flat position — on top of the joint",
          "Overhead position — arms up",
          "Horizontal position (2G / 2F) — welding on the side face of a vertical plate, the joint runs horizontally"
        ],
        a: 3, xp: 15,
        exp: "Yokomuki-shisei (横向き姿勢) = Horizontal position. 2G (groove) / 2F (fillet). The weld joint runs horizontally on a vertical surface. Gravity pulls the molten pool downward (toward the lower plate). Technique: angle torch slightly upward to compensate. ISO code: PC. 🇯🇵 TIP: Horizontal groove (横向き突合せ) is common in Japanese shipbuilding for side shell plating. The challenge is preventing underbead overlap on the lower plate. Japanese trainers say 'ue o miro' (上を見ろ / look at the upper edge) — keep the arc focused on the upper plate to let metal flow naturally down and fill the lower toe."
      },
      {
        id: 304, cat: "Positions",
        q: "The site supervisor marks a joint and says 'Kachiage da!' (かちあげだ！). In official JIS terminology, what is this position called?",
        opts: [
          "上向き姿勢 (Uwamuki-shisei) — overhead position (4G / 4F)",
          "下向き姿勢 (Shitamuki-shisei) — flat position",
          "立向き姿勢 (Tatemuki-shisei) — vertical position",
          "横向き姿勢 (Yokomuki-shisei) — horizontal position"
        ],
        a: 0, xp: 15,
        exp: "Kachiage (かちあげ) is the everyday slang for 上向き姿勢 (Uwamuki-shisei) = Overhead position. 4G (groove) / 4F (fillet). You hold the torch above your head and weld on the underside of a joint. The hardest position: gravity pulls the molten pool away from the joint, spatter falls on you. ISO code: PE. 🇯🇵 TIP: For overhead welding, Japanese welders use a slightly lower current than flat position (about 10–15% lower) to keep the pool smaller and more controllable. A small, fast pool fights gravity better than a large, hot one. Ask your supervisor for the recommended 'kachiage settings' (かちあげの条件) before starting."
      },
      {
        id: 305, cat: "Positions",
        q: "In Japanese JIS certification tests, which position code 'F' refers to?",
        opts: [
          "F = Fillet weld type",
          "F = Flat (下向き / Shitamuki) — used in test codes like N-2F meaning flat position groove weld",
          "F = Finish pass",
          "F = Forward (direction of welding)"
        ],
        a: 1, xp: 20,
        exp: "In JIS certification test codes: F = Flat (下向き), H = Horizontal (横向き), V = Vertical (立向き), O = Overhead (上向き). Example: N-2F = no backing plate (N), medium plate 9mm (2), flat position (F). N-2P = no backing plate (N), medium-wall fixed pipe (P — all positions). These codes appear on your qualification certificate. 🇯🇵 TIP: When applying for work in Japan, bring your actual JIS certificate card (資格証 / shikaku-sho) — not just a photocopy. Employers want to see the original and will check the expiry date. If yours is about to expire, renew BEFORE applying — an expired certificate is treated the same as no certificate."
      },
      {
        id: 306, cat: "Joint Types",
        q: "For thin sheet metal (e.g. 2mm), is groove preparation (開先 / kaisaki) always required before performing a 'Tsukiawase-yosetsu' (突き合わせ溶接 / butt weld)?",
        opts: [
          "Yes, but only for stainless steel sheet, never for carbon steel sheet",
          "Yes — JIS requires beveled groove preparation on every butt weld regardless of plate thickness",
          "No — for thin plates, a simple square-edge (I-groove / I形) butt joint with no bevel is often sufficient since full penetration is achievable without one; groove prep becomes necessary mainly for THICK plates",
          "No — thin sheet metal should never use a butt weld at all, only fillet welds"
        ],
        a: 2, xp: 25,
        exp: "Tsukiawase-yosetsu (突き合わせ溶接) = Butt weld / groove weld — two plate edges placed end-to-end and welded. For THICK plates, beveled groove preparation (開先 / kaisaki, e.g. V-groove) is needed so the arc and filler can reach the root for full penetration. But for THIN sheet, a simple square-edge I-groove (I形) butt joint often achieves full penetration without any bevel at all — groove prep requirements scale with thickness, they are not a blanket rule for every butt weld. 🇯🇵 TIP: In JIS certification for butt welds, the test plate size, groove angle, root gap, and root face dimensions are all standardized per test code — memorize the standard dimensions for your specific test code (N-2F etc.) before the test day."
      },
      {
        id: 307, cat: "Joint Types",
        q: "On a Japanese fillet weld drawing, you see 'Suminiku-yosetsu' (すみ肉溶接) specified as '脚長 S=6.' Is the inspector going to verify this with a throat thickness (のど厚) measurement, or a leg length measurement?",
        opts: [
          "Neither — fillet welds are only inspected visually, no gauge measurement is taken",
          "Throat thickness — because leg length cannot be physically measured with a welding gauge",
          "Throat thickness — because that's what's written on the drawing",
          "Leg length — because drawings specify fillet size as leg length (脚長), even though structural strength calculations actually use throat thickness"
        ],
        a: 3, xp: 25,
        exp: "Suminiku-yosetsu (すみ肉溶接) = Fillet weld, the most common weld type in structural fabrication. On Japanese drawings, fillet weld size is specified as leg length (脚長 / Kyakucho, e.g. S=6), NOT throat thickness — even though structural strength calculations use throat (のど厚 / Nodo-atsu) internally. Japanese QC inspectors measure LEG LENGTH directly with a welding gauge; if your fillet is 5.3mm when 6mm is specified, that's a defect even if it looks fine visually. 🇯🇵 TIP: Always check the drawing's leg-length callout before welding, and self-check with a gauge before calling the inspector over."
      },
      {
        id: 308, cat: "Dimensions",
        q: "What is 'Kyakucho' (脚長 / きゃくちょう) in a fillet weld?",
        opts: [
          "The leg length — the distance from the weld root to the weld toe, measured along the face of each plate",
          "The height of the weld reinforcement above the plate surface",
          "The length of the weld bead from start to finish",
          "The depth of penetration into the base metal"
        ],
        a: 0, xp: 20,
        exp: "Kyakucho (脚長) = Leg length. The length of each leg of the triangular fillet weld cross-section. For an equal-leg fillet weld, both legs are the same size. Specified on drawings as a number (e.g., 脚長6 = 6mm leg). Used for inspection with a welding gauge. 🇯🇵 TIP: Unequal-leg fillets (不等脚長 / futou-kyakucho) occur when the torch angle is not 45° — one leg is longer than the other. JIS allows a small difference, but if one leg is significantly shorter (下脚短 / shita-ashi-tan), it reduces strength. Aim for equal legs by maintaining a 45° torch angle in the joint corner."
      },
      {
        id: 309, cat: "Dimensions",
        q: "What is 'Nodo-atsu' (のど厚 / のどあつ) and how does it relate to fillet weld leg length?",
        opts: [
          "The width of the weld bead on the surface",
          "The throat thickness — the shortest distance through the triangular cross-section. For equal-leg fillet: throat = leg × 0.707",
          "The depth of the groove before welding",
          "The distance from one toe to the other"
        ],
        a: 1, xp: 25,
        exp: "Nodo-atsu (のど厚) = Throat thickness. The shortest distance from the weld root to the weld face — this is the load-bearing dimension used in strength calculations. Formula: throat = leg length × cos45° = leg × 0.707. Example: 6mm leg → throat = 6 × 0.707 ≈ 4.24mm. Critical for structural design. 🇯🇵 TIP: 'Theoretical throat' (理論のど厚) assumes a perfectly flat face. 'Actual throat' (実際のど厚) accounts for convexity or concavity. A concave fillet (凹形 / ogata) has LESS than theoretical throat and is a defect. A slightly convex fillet is acceptable but excessive convexity wastes material."
      },
      {
        id: 310, cat: "Dimensions",
        q: "What is 'Ruuto-gyappu' (ルートギャップ) — and what happens if it is too wide or too narrow?",
        opts: [
          "The distance between tack welds along the joint",
          "The angle of the groove opening — too wide causes burn-through",
          "The root gap — the space between plate edges at the bottom of the groove. Too narrow = poor penetration. Too wide = burn-through",
          "The reinforcement height above the plate — must be within specification"
        ],
        a: 2, xp: 20,
        exp: "Ruuto-gyappu (ルートギャップ) = Root gap / root opening. The controlled space between plate edges at the root of the groove. Too narrow (< spec): arc can't reach the root, causing lack of penetration (溶込不良). Too wide (> spec): burn-through (溶落ち). Specified on drawings — measure with gap gauges before welding. 🇯🇵 TIP: Check the root gap with a gap gauge before every weld and compare it with the tolerance on the drawing or WPS. Don't eyeball it — fixing the gap before welding costs far less than hatsuri and redo afterwards."
      },
      {
        id: 311, cat: "JIS Symbols",
        q: "On a JIS drawing, a welding symbol is placed BELOW the reference line. What does this indicate?",
        opts: [
          "The symbol below the line means overhead welding is required",
          "The weld is on the opposite side from the arrow",
          "The weld is on BOTH sides",
          "The weld is on the ARROW SIDE — the side the arrow is pointing to"
        ],
        a: 3, xp: 25,
        exp: "JIS welding symbol rule (JIS Z 3021): Below the reference line = ARROW SIDE (矢側 / やがわ). Above the reference line = OTHER SIDE (反矢側 / はんやがわ). AWS A2.4 (USA) uses the same rule — below = arrow side. 🇯🇵 TIP: Some drawings made to ISO 2553 (common in Europe) add a dashed second line under the solid reference line. On those, the side is decided by the line, not by above/below: symbol on the solid line = arrow side, on the dashed line = other side. If you see a dashed line next to the reference line, check with your QC manager before welding."
      },
      {
        id: 312, cat: "JIS Symbols",
        q: "A JIS drawing has a fillet weld symbol (△) above AND below the reference line. What does this mean?",
        opts: [
          "Weld on both sides — fillet welds on both the arrow side and the other side of the joint",
          "Apply fillet weld to a different joint nearby",
          "The symbol is drawn incorrectly — ignore one of them",
          "Weld on the arrow side only — the second symbol is decorative"
        ],
        a: 0, xp: 20,
        exp: "When the welding symbol appears BOTH above and below the reference line, it means weld on BOTH SIDES. For fillet welds: two-sided fillet weld (両面すみ肉溶接). Each side may have different dimensions specified — read the numbers separately for each. 🇯🇵 TIP: New workers often weld only one side because they miss the second symbol. Always read the symbols on both sides of the reference line before starting."
      },
      {
        id: 313, cat: "JIS Symbols",
        q: "What does the circle (○) at the intersection of the reference line and arrow mean in a JIS welding symbol?",
        opts: [
          "Zero welds — do not weld this joint",
          "All-around weld (全周溶接 / ぜんしゅうようせつ) — weld continuously around the entire joint perimeter",
          "Overhead welding required at this location",
          "The weld has been inspected and approved"
        ],
        a: 1, xp: 20,
        exp: "The circle symbol (○) at the arrow/reference line junction = All-around weld (全周溶接). The specified weld must be made continuously around the complete perimeter of the joint. Common on pipe connections, column base plates, and hollow structural sections. 🇯🇵 TIP: When welding 全周溶接, the arc start/stop locations must be staggered and not all at the same point — concentrating stop/start defects at one location creates a weak point. Japanese supervisors will note your stop/start positions. Plan your sequence before starting."
      },
      {
        id: 314, cat: "JIS Symbols",
        q: "A JIS drawing has a flag symbol (旗マーク / はたまーく) at the reference line. What does this indicate?",
        opts: [
          "The welder has passed quality inspection",
          "The weld requires post-weld heat treatment",
          "Field weld (現場溶接 / げんばようせつ) — this weld is performed at the construction/installation site, not in the factory",
          "The weld joint is under high stress — extra care required"
        ],
        a: 2, xp: 20,
        exp: "Flag mark (旗マーク) = Field weld symbol (現場溶接記号). This weld is NOT done in the factory — it is performed at the actual construction or installation site after the prefabricated parts are assembled in place. Important for planning: field welds have more challenging conditions (weather, position, access) than factory welds. 🇯🇵 TIP: Field welds need extra planning. Wind easily blows away shielding gas, so use wind screens for gas-shielded welding, and do not weld in rain or on wet steel. Check the weather and site conditions before starting."
      },
      {
        id: 315, cat: "JIS Symbols",
        q: "Which difference in welding symbol rules can really cause you to weld on the wrong side?",
        opts: [
          "JIS and AWS put the arrow-side symbol on opposite sides of the reference line",
          "JIS uses metric dimensions, AWS uses imperial — no other difference",
          "Drawings to ISO 2553 may add a dashed line: a symbol on the solid line = arrow side, on the dashed line = other side. JIS and AWS both use 'below the line = arrow side'",
          "There is no difference between any welding symbol standards"
        ],
        a: 2, xp: 30,
        exp: "JIS Z 3021 and AWS A2.4 use the same rule: symbol below the reference line = arrow side, above = other side. The real trap is ISO 2553 drawings (common in Europe) that use a dashed second line: there, the solid line = arrow side and the dashed line = other side, whatever is on top. Misreading it = welding on the wrong side = rework. 🇯🇵 TIP: Check the standard in the drawing's title block. If you see a dashed line beside the reference line, confirm with your supervisor before welding."
      },
      {
        id: 316, cat: "Joint Types",
        q: "What is 'T-keite' (T継手 / ティーけいて) and where is it commonly used?",
        opts: [
          "A T-joint — one plate meets another at 90°, forming a T-shape. Usually welded with fillet welds (すみ肉) on both sides",
          "Two pipes connected at the same diameter",
          "A joint where two plates overlap each other",
          "Two plates welded end-to-end in a straight line"
        ],
        a: 0, xp: 15,
        exp: "T-keite (T継手) = T-joint. One plate is welded perpendicular to the surface of another, forming a T shape. The most common structural joint in steel fabrication. Typically uses two fillet welds (すみ肉溶接) on both sides. For high-stress applications, a full penetration groove weld may be required. 🇯🇵 TIP: On Japanese drawings, when a T-joint shows 'K形開先' (K-groove), it means full penetration is required — not a regular fillet. This distinction matters enormously for strength. If you're unsure whether a T-joint needs groove prep or just a fillet, always ask the supervisor rather than assuming."
      },
      {
        id: 317, cat: "Positions",
        q: "What ISO welding position code is 'PA' and what is it called in Japanese?",
        opts: [
          "PA = Horizontal position = 横向き姿勢 (Yokomuki-shisei)",
          "PA = Flat position = 下向き姿勢 (Shitamuki-shisei)",
          "PA = Overhead position = 上向き姿勢 (Uwamuki-shisei)",
          "PA = Vertical position = 立向き姿勢 (Tatemuki-shisei)"
        ],
        a: 1, xp: 20,
        exp: "ISO 6947 position codes: PA = Flat (下向き / PA), PB = Horizontal fillet (水平すみ肉 / PB), PC = Horizontal groove (横向き / PC), PE = Overhead (上向き / PE), PF = Vertical-up (立向上進 / PF), PG = Vertical-down (立向下進 / PG). These codes appear on international welding qualification certificates. 🇯🇵 TIP: IIW/ISO position codes appear on international certifications like IW (International Welder). If you plan to work on Japanese offshore, LNG, or nuclear projects, knowing the ISO codes is essential — these projects use ISO standards alongside JIS. Carry both your JIS cert and any ISO/IIW cert if you have them."
      },
      {
        id: 318, cat: "Positions",
        q: "What ISO position code 'PF' stands for, and what is the Japanese name?",
        opts: [
          "PF = Flat position (PA in Japanese) = 下向き",
          "PF = Overhead position = 上向き姿勢",
          "PF = Vertical-up welding = 立向上進 (Tatemuki-joshin) — welding upward on a vertical plate",
          "PF = Horizontal fillet = 水平すみ肉"
        ],
        a: 2, xp: 20,
        exp: "ISO PF = Vertical-up welding (立向上進 / Tatemuki-joshin). This is the standard vertical welding direction in Japanese fabrication — welding upward produces better fusion and penetration compared to vertical-down. ISO PG = vertical-down. These codes appear on JIS and IIW international qualification certificates. 🇯🇵 TIP: JIS welder certificates show positions with letters such as F, H, V and O (e.g. N-2V), while ISO 9606 certificates use PA, PC, PF, PG and so on. On ISO certificates, vertical-up (PF) and vertical-down (PG) are separate — check your certificate's scope before taking a job."
      },
      {
        id: 319, cat: "Dimensions",
        q: "A drawing specifies a fillet weld with 'Kyakucho 8mm' (脚長8mm). What is the theoretical throat thickness (のど厚)?",
        opts: [
          "8.0mm — throat equals leg length",
          "4.0mm — throat is half the leg length",
          "11.3mm — throat is larger than leg length",
          "5.66mm — throat = 8mm × 0.707"
        ],
        a: 3, xp: 25,
        exp: "Theoretical throat (理論のど厚) = leg length × 0.707 (= cos 45°). For 8mm leg: 8 × 0.707 = 5.66mm throat. This calculation is fundamental for structural strength design. The throat dimension is used in all weld strength formulas. Always check: drawing usually specifies leg length (脚長), but strength is calculated from throat (のど厚). 🇯🇵 TIP: In Japan, structural calculation documents (構造計算書) for buildings must show the nodo-atsu and its adequacy for the design load. If you are asked to make a fillet weld smaller than specified to 'save wire,' refuse — the leg length was calculated by an engineer for a reason. Reducing it could be a structural safety violation."
      },
      {
        id: 320, cat: "Joint Types",
        q: "What is 'Kanzen-tokekomi-yosetsu' (完全溶込み溶接 / かんぜんとけこみようせつ / CJP) and when is it required?",
        opts: [
          "A complete joint penetration weld — the weld metal fully penetrates the entire thickness of the joint. Required for high-stress connections (e.g., column-to-beam, pressure vessels)",
          "A weld that uses maximum current settings",
          "A weld that covers both sides of the plate",
          "A weld that is polished to a flush surface finish"
        ],
        a: 0, xp: 25,
        exp: "Kanzen-tokekomi-yosetsu (完全溶込み溶接) = Complete Joint Penetration (CJP) weld. The fusion zone extends through the ENTIRE plate thickness. Required for: seismic building connections (ダイアフラム), pressure vessel shells, and critical structural joints. Verified by RT or UT inspection. Contrast with partial penetration welds (部分溶込み / PJP). 🇯🇵 TIP: CJP welds on seismic-critical building connections (柱梁接合部) are inspected strictly, usually with UT. If a CJP weld is rejected (不合格), it must be gouged out, re-welded and re-inspected — there is no partial acceptance."
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // STAGE 5 — Defects & NDT Inspection
  // ──────────────────────────────────────────────────────────
  {
    stageId: 5,
    label: "STAGE 5 — Defects & NDT Inspection",
    color: "#7C3AED",
    icon: "🔍",
    unlockXP: 800,
    questions: [
      {
        id: 401, cat: "Defects",
        q: "Your JIS test weld shows an undercut measuring exactly 0.3mm deep. Will this automatically fail a JIS certification VT inspection?",
        opts: [
          "No — 0.3mm is always within the universal JIS tolerance for undercut on any plate thickness",
          "It depends — JIS undercut tolerance is tied to plate thickness and test code, so 0.3mm could pass on thicker material but fail on thin material or stricter test codes; there is no single universal number",
          "Yes — any undercut depth over 0mm is an automatic fail under all JIS codes",
          "No — undercut depth is never checked during VT, only during RT/UT"
        ],
        a: 1, xp: 25,
        exp: "Andaakatto (アンダーカット) = Undercut, a groove melted at the base metal toe of the weld from excessive current, too-high travel speed, or improper torch angle. Allowable depth is NOT a single universal number — JIS and other codes specify maximum undercut depth relative to plate/member thickness and the specific test or inspection code, so a 0.3mm undercut might pass on one job and fail on a stricter one. 🇯🇵 TIP: Experienced Japanese welders do a self-VT before calling the inspector, checking the actual allowable tolerance for their specific test code rather than assuming a fixed number — never call the inspector over unless you've confirmed it against the spec."
      },
      {
        id: 402, cat: "Defects",
        q: "Andaakatto (アンダーカット / undercut) and Oobaraappu (オーバーラップ / overlap) are often confused by new welders because both appear at the weld toe. What is the KEY difference between their root causes?",
        opts: [
          "Undercut is a root-side defect; overlap is exclusively a back-bead defect",
          "There is no difference — both are caused by exactly the same too-high current and too-fast travel speed",
          "Undercut is caused by current/travel speed TOO HIGH (arc gouges the base metal); overlap is caused by current/travel speed TOO LOW (cold metal rolls over the surface without fusing) — essentially opposite causes",
          "Undercut only occurs on stainless steel; overlap only occurs on carbon steel"
        ],
        a: 2, xp: 25,
        exp: "Andaakatto (アンダーカット) = Undercut: caused by current or travel speed TOO HIGH — the arc gouges a groove into the base metal at the toe before the pool can fill it. Oobaraappu (オーバーラップ) = Overlap: caused by current or travel speed TOO LOW — molten metal flows over the cold base metal surface without fusing into it. They sit at opposite ends of the heat-input spectrum, both creating a stress riser at the toe but from essentially opposite welding errors. 🇯🇵 TIP: Senior welders say 'Denryuu wa tekisetsu ni' (電流は適切に / use appropriate current) — too low is just as problematic as too high; both directions of error create toe defects, just different ones."
      },
      {
        id: 403, cat: "Defects",
        q: "After welding, RT inspection shows round dark spots inside the weld. Your supervisor says 'Buroohoru ga aru!' (ブローホールがある！). What caused these?",
        opts: [
          "Wrong filler metal for the base material",
          "Excessive current — too much heat in the weld",
          "Travel speed too slow — over-deposited metal",
          "Trapped gas (from moisture, rust, oil, contamination, or poor shielding) that couldn't escape from the solidifying weld metal"
        ],
        a: 3, xp: 20,
        exp: "Buroohoru (ブローホール) = Blowhole / Porosity. Gas trapped inside the solidified weld metal, appearing as round dark spots on RT film. Causes: moisture on base metal, rust, oil, paint, inadequate shielding gas, arc too long, contaminated filler. Prevention: clean the base metal, check gas flow, maintain proper arc length. 🇯🇵 TIP: In Japanese shipyards and construction sites, base metal preparation (下地処理 / shitaji-shori) before welding is taken very seriously. Workers are expected to grind off rust, wipe with acetone, and confirm zero contamination before striking the arc. If a blowhole appears on RT and traces back to your poor prep work, you will be asked to re-weld at your own time — and you will remember it."
      },
      {
        id: 404, cat: "Defects",
        q: "An RT film shows elongated dark shadows in a line along the weld. What type of defect is this?",
        opts: [
          "Suragu-makikomi (スラグ巻き込み) — slag inclusion — slag trapped inside the weld from incomplete removal between passes",
          "Oobaraappu (オーバーラップ) — surface overlap",
          "Buroohoru (ブローホール) — round gas pores",
          "Andaakatto (アンダーカット) — surface groove"
        ],
        a: 0, xp: 20,
        exp: "Suragu-makikomi (スラグ巻き込み) = Slag inclusion. Slag (ノロ) from a previous pass was not completely removed before the next pass — it got trapped inside the weld. Appears on RT as irregular dark elongated shapes. Prevention: thorough chipping and wire brushing between EVERY pass. This is why 'Chippingu' is so important in Japan. 🇯🇵 TIP: In Japan, the chipping hammer (チッピングハンマー) is swung with full intention — not a gentle tap. Senior welders say 'Noro wa shikkari tore' (ノロはしっかり取れ / remove the slag completely). If you skip it because you're in a hurry, and the RT comes back with suragu-makikomi, the shop foreman (職長 / shokuchoo) will be having a very direct conversation with you."
      },
      {
        id: 405, cat: "Defects",
        q: "What is 'Yuugou-furyou' (融合不良 / ゆうごうふりょう) — abbreviated LOF — and why is it dangerous?",
        opts: [
          "The weld bead is too narrow",
          "Lack of Fusion — weld metal deposited alongside but NOT fused to the base metal or previous pass. Creates a planar unbonded interface that acts like a crack",
          "Surface oxidation from insufficient shielding",
          "Too much weld metal deposited — over-reinforcement"
        ],
        a: 1, xp: 25,
        exp: "Yuugou-furyou (融合不良) = Lack of Fusion (LOF). The weld metal sits next to but is NOT metallurgically bonded to the base metal or previous pass. Causes: insufficient current, wrong technique, contamination. LOF is planar (like a crack) and is NOT detected by RT as easily as rounded defects. UT is better for detecting LOF. Very dangerous in structural welds. 🇯🇵 TIP: Yuugou-furyou is especially feared in Japanese nuclear and LNG facilities because it can be invisible on RT film and may not leak during initial pressure tests — only to fail catastrophically under cyclic stress years later. When Japanese inspectors say 'UT de kite' (UTで来て / come back with UT results), they suspect LOF. Take the UT very seriously."
      },
      {
        id: 406, cat: "Defects",
        q: "What is the difference between 'Teion-ware' (低温割れ / ていおんわれ) and 'Kouon-ware' (高温割れ / こうおんわれ)?",
        opts: [
          "Teion-ware = above 500°C, Kouon-ware = below 0°C",
          "They are the same defect with different names depending on the company",
          "Teion-ware (cold crack / hydrogen crack) = forms HOURS or DAYS after welding at room temperature. Kouon-ware (hot crack) = forms immediately during solidification at high temperature",
          "Teion-ware only occurs in stainless steel, Kouon-ware only in carbon steel"
        ],
        a: 2, xp: 25,
        exp: "Teion-ware (低温割れ) = Cold crack / Hydrogen-induced crack. Forms AFTER welding (hours to days later) at room temperature. Requires: hard HAZ + diffusible hydrogen + tensile stress. Prevention: preheating, low-hydrogen electrodes, PWHT. Kouon-ware (高温割れ) = Hot crack. Forms IMMEDIATELY during solidification. Caused by low-melting-point impurities. Two very different problems requiring different solutions. 🇯🇵 TIP: In Japan, the phrase '低温割れに注意' (teion-ware ni chuui / watch out for cold cracks) appears in the WPS for any high-strength or thick steel. If you're welding SM490 or stronger in cold outdoor conditions (winter construction sites in Tohoku or Hokkaido), preheat is not optional — it's a serious safety obligation. Never skip the preheat check."
      },
      {
        id: 407, cat: "Defects",
        q: "At the end of a weld bead, the arc was cut off suddenly without proper crater fill. What defect is likely to form?",
        opts: [
          "Andaakatto (アンダーカット)",
          "Oobaraappu (オーバーラップ)",
          "Buroohoru (ブローホール)",
          "Kureetaa-ware (クレーター割れ) — a crack forming in the crater hollow at the weld end due to rapid shrinkage"
        ],
        a: 3, xp: 20,
        exp: "Kureetaa-ware (クレーター割れ) = Crater crack. When you abruptly stop the arc, a hollow crater remains. As this solidifies and shrinks faster than the surrounding weld, cracks form from the center outward. Prevention: use crater fill technique — reduce current gradually and fill the crater before breaking the arc. Never just stop mid-weld. 🇯🇵 TIP: On Japanese job sites, a supervisor may watch the end of your weld specifically to check your crater fill technique. The phrase 'Owari wa shikkari' (終わりはしっかり / finish it properly) is common. A crater crack at the weld end is seen as a sign of careless rushing — it reflects on your professionalism as much as the weld itself."
      },
      {
        id: 408, cat: "NDT",
        q: "A weld passes VT (Mokushi-shiken / 目視試験) with a perfectly smooth surface. Does passing VT guarantee the weld has no porosity (ブローホール) or slag inclusions (スラグ巻き込み) inside it?",
        opts: [
          "No — VT only detects SURFACE defects; internal defects like porosity and slag inclusions are completely invisible to the eye and require RT or UT to detect, even with a flawless-looking surface",
          "Yes, but only for fillet welds, not for groove welds",
          "No, but only because VT inspectors are not trained to look for porosity at all",
          "Yes — if the surface looks perfect, the inside is guaranteed to be defect-free too"
        ],
        a: 0, xp: 25,
        exp: "VT (Visual Testing / 目視試験) is the first and most fundamental check — fast, free, and catches obvious surface defects like cracks, undercut, overlap, and geometry issues. But VT can NEVER detect internal defects: porosity (ブローホール) and slag inclusions (スラグ巻き込み) form completely inside the weld metal and are invisible to the eye no matter how smooth the surface looks. This is exactly why RT and UT exist as separate, mandatory steps for critical welds. 🇯🇵 TIP: Japanese inspectors say 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Even if the outside is beautiful, we can't see inside) — a perfect-looking bead is not proof of internal soundness."
      },
      {
        id: 409, cat: "NDT",
        q: "How does 'PT' (Shinto-tansho / 浸透探傷試験 / しんとうたんしょうしけん) work?",
        opts: [
          "Sound waves bounce back from internal defects",
          "Red penetrant liquid is applied to the surface, drawn into cracks, then developer (white powder) is applied — defects appear as red indications on white background",
          "Magnetic iron powder clusters at defect locations",
          "X-rays pass through the weld and expose a film"
        ],
        a: 1, xp: 20,
        exp: "PT (Penetrant Testing / 浸透探傷試験): 1) Apply red penetrant liquid. 2) Wait (dwell time). 3) Remove excess. 4) Apply white developer powder. 5) Cracks that absorbed the penetrant will 'bleed out' as red marks on white background. Detects: SURFACE OPEN cracks and pits only. Works on NON-MAGNETIC materials (stainless steel, aluminum). Can't detect internal defects. 🇯🇵 TIP: In Japanese food, pharmaceutical, and semiconductor facilities where stainless steel is heavily used, PT is performed after every weld repair. The 'dwell time' (浸透時間 / shintou-jikan) is critical — rushing it by wiping too soon means you miss fine cracks. Inspectors often use a timer and will reject results if the dwell time was not observed. Patience and process discipline are everything in Japanese inspection work."
      },
      {
        id: 410, cat: "NDT",
        q: "When would you use 'PT' (浸透探傷 / PT) instead of 'MT' (磁粉探傷 / MT) for stainless steel?",
        opts: [
          "PT and MT are interchangeable — use either",
          "MT is better for stainless — always prefer MT",
          "PT must be used for stainless steel (SUS304 etc.) because austenitic stainless is NON-MAGNETIC — MT requires a magnetic material to work. PT has no magnetic limitation",
          "Neither works on stainless — use RT only"
        ],
        a: 2, xp: 25,
        exp: "MT (Magnetic Particle Testing / 磁粉探傷試験) uses a magnetic field to attract iron powder to defects — it ONLY works on magnetic (ferritic) materials. Austenitic stainless steel (SUS304, SUS316) is NON-MAGNETIC. For stainless steel, you MUST use PT (浸透探傷) instead. Ferrite content stainless (like SUS430) may allow MT — check material type first. 🇯🇵 TIP: Before any NDT, confirm the material type (材料確認 / zairyou-kakunin), for example from the mill certificate (ミルシート / mirushiito). Choosing MT for austenitic stainless is a mistake that will be noticed immediately."
      },
      {
        id: 411, cat: "NDT",
        q: "What does 'UT' (Cho-onpa-tansho / 超音波探傷試験 / ちょうおんぱたんしょう) excel at detecting compared to RT?",
        opts: [
          "UT is better for checking shielding gas purity",
          "UT is better at detecting round gas pores (ブローホール)",
          "UT is better at detecting surface cracks visible to the eye",
          "UT excels at detecting PLANAR defects — cracks, lack of fusion (融合不良), lack of penetration. These planar defects reflect sound waves strongly even when RT misses them"
        ],
        a: 3, xp: 25,
        exp: "UT (Ultrasonic Testing) sends high-frequency sound waves into the metal. Planar defects (cracks, lack of fusion, laminations) reflect sound strongly back to the probe, so UT detects them well. RT (X-ray) is better for volumetric defects (round pores, slag). For critical welds, both may be required. 🇯🇵 TIP: In Japan, UT technicians are certified under JIS Z 2305 by the Japanese Society for Non-Destructive Inspection (日本非破壊検査協会). Their judgment decides acceptance — if they find an indication, fix it rather than argue."
      },
      {
        id: 412, cat: "NDT",
        q: "What is 'RT' (Hoshasen-toka-shiken / 放射線透過試験 / ほうしゃせんとうかしけん) commonly called on Japanese job sites, and what are the safety implications?",
        opts: [
          "Called 'Rentogen' (レントゲン) — Japanese slang for X-ray. During RT: the area becomes a RADIATION HAZARD ZONE (放射線管理区域) and ALL personnel must leave the area",
          "Called 'Rentogen' but it is completely safe — no evacuation needed",
          "Called 'Cho-onpa' — the same as ultrasonic testing",
          "There are no safety concerns with RT — the radiation levels are very low"
        ],
        a: 0, xp: 25,
        exp: "RT is called Rentogen (レントゲン) on Japanese sites — after the German physicist Röntgen. During RT a radiation-controlled area (管理区域) is set up and everyone must leave before shooting. For X-ray equipment, an X-ray work chief (エックス線作業主任者) must be appointed to manage the work. RT results remain on film as a permanent quality record. 🇯🇵 TIP: When you hear 'Rentogen wo torimasu — taiki shite kudasai' (レントゲンを撮ります — 待機してください / We are shooting X-ray — please stand by), stop immediately and move to the designated waiting area."
      },
      {
        id: 413, cat: "NDT",
        q: "A weld passed VT inspection but failed RT. The RT film shows internal round dark spots. What defect type is this and why didn't VT catch it?",
        opts: [
          "Weld reinforcement too high — visible from outside",
          "Internal porosity (ブローホール) — VT only sees the SURFACE. Internal gas pores are invisible to the eye and can only be detected by RT, UT, or other volumetric methods",
          "Overlap at the weld toe — visible from outside",
          "Surface undercut — VT should have caught this"
        ],
        a: 1, xp: 25,
        exp: "VT (Visual Testing) only detects SURFACE defects. Internal defects — like porosity (ブローホール), slag inclusions (スラグ巻き込み), and fusion defects — are completely invisible to the eye. This is why RT (X-ray) and UT are mandatory for critical welds in Japan: VT passing does NOT guarantee an internally sound weld. 🇯🇵 TIP: A beautifully smooth weld bead that passes VT perfectly is called 'kirei na bead' (きれいなビード) and earns respect. But Japanese inspectors also say 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Even if the outside is beautiful, we can't see inside). This is why RT and UT exist — the inner quality matters just as much."
      },
      {
        id: 414, cat: "Defects",
        q: "What is 'Lamellar Tearing' (ラメラテア) and in which joint configuration is it most common?",
        opts: [
          "A surface crack from excessive grinding",
          "A hot crack forming immediately after welding",
          "A layer-like crack through the base metal thickness caused by tensile stress pulling on non-metallic inclusions in rolled steel. Most common in T-joints and cruciform joints where stress acts through the plate thickness",
          "A type of weld porosity unique to pipe welding"
        ],
        a: 2, xp: 30,
        exp: "Ramera-tea (ラメラテア) = Lamellar tearing. Steel is rolled in the mill — non-metallic inclusions become flat layers parallel to the plate surface. When welding creates tensile stress THROUGH the plate thickness (common in T-joints, column connections), these layers can split apart. Prevention: use low-sulfur steel (低硫黄鋼), pre-heat, or redesign the joint. 🇯🇵 TIP: Lamellar tearing is particularly a concern in Japanese high-rise building column connections (ダイアフラム接合部 / diaphragm joints). When engineers specify Z-direction property steel (Z方向特性鋼 / Z-houkou-tokusei-kou) in the drawings, it means they are specifically preventing lamellar tearing. As a welder, if you see this material spec, know that it was chosen for a reason — handle it with care and follow the WPS exactly."
      },
      {
        id: 415, cat: "Defects",
        q: "Your weld failed the RT inspection for 'Tokekomi-furyou' (溶込不良 / とけこみふりょう). What is LOP and what caused it?",
        opts: [
          "Too much penetration — the weld burned through the back",
          "Excessive weld reinforcement on top of the joint",
          "Porosity at the root of the weld",
          "Lack of Penetration — the weld metal did NOT penetrate to the root of the joint. Caused by: too low current, too fast travel, incorrect root gap, wrong torch angle"
        ],
        a: 3, xp: 25,
        exp: "Tokekomi-furyou (溶込不良) = Lack of Penetration (LOP). The arc did not reach the root of the joint — leaving an unfused gap at the bottom. Causes: insufficient current, too fast travel speed, root gap too small, incorrect electrode angle. In Japan's JIS certification tests, incomplete root penetration is an automatic fail. 🇯🇵 TIP: In Japan's JIS practical test for groove welding, the inspector grinds and bends the test piece — an LOP at the root will crack open immediately during the bend test (曲げ試験 / mage-shiken). There is no hiding it. This is why Japanese welders practice the root pass obsessively. The phrase 'Shosou ga inochi' (初層が命 / the first pass is life) reflects how much respect the root pass commands."
      },
      {
        id: 416, cat: "NDT",
        q: "When is 'MT' (Jifun-tansho / 磁粉探傷試験 / じふんたんしょうしけん) used rather than PT, and what can it detect that PT cannot?",
        opts: [
          "MT can detect NEAR-SURFACE cracks (slightly below the surface, not just open to the surface) on MAGNETIC materials. PT only detects surface-open defects",
          "MT is only used for aluminum welding",
          "MT works on non-magnetic materials — PT cannot do this",
          "MT and PT detect exactly the same defects"
        ],
        a: 0, xp: 25,
        exp: "MT (Magnetic Particle Testing / 磁粉探傷試験): Applies magnetic field to the workpiece — defects interrupt the field and iron powder clusters at these points. MT detects both surface AND near-surface (slightly subsurface) defects on magnetic (carbon steel, ferritic stainless) materials. PT only detects defects OPEN to the surface. MT is more sensitive for magnetic materials — preferred in Japanese shipyards for carbon steel welds. 🇯🇵 TIP: Fluorescent wet MT (蛍光磁粉探傷) under UV light gives high sensitivity. If you see someone with a UV lamp and spray cans near your weld, it is probably MT — keep the weld area clean and accessible."
      },
      {
        id: 417, cat: "Defects",
        q: "Cold cracks (低温割れ / Teion-ware) are called 'hydrogen-induced cracks.' What are the THREE conditions that must ALL be present for a cold crack to form?",
        opts: [
          "Hot weather + stainless steel + excess shielding gas",
          "Diffusible hydrogen in the weld + hardened/susceptible microstructure + tensile stress",
          "Low preheat + thick plate + FCAW process only",
          "High current + fast travel + wrong wire"
        ],
        a: 1, xp: 30,
        exp: "A cold crack (低温割れ) needs ALL THREE: 1) diffusible hydrogen (from moisture, contamination, or non-low-hydrogen consumables), 2) a hard, susceptible microstructure (e.g. martensite in the HAZ from high carbon equivalent or fast cooling), and 3) tensile stress (residual or applied). Remove any one and the crack is prevented — hence preheat, low-hydrogen consumables and, where specified, PWHT. 🇯🇵 TIP: Low-hydrogen electrodes are re-dried in a drying oven (乾燥炉 / kansou-ro) and kept warm in a holding oven; take out only what you need for one session."
      },
      {
        id: 418, cat: "Defects",
        q: "A cold crack is found 24 hours AFTER welding — the weld looked fine immediately after completion. How is this possible?",
        opts: [
          "This is impossible — cracks form immediately or not at all",
          "The crack was there from the start but the inspector missed it",
          "Cold cracks are 'delayed' — diffusible hydrogen slowly migrates and concentrates at stress points, and the crack forms gradually over hours to days after welding. This is why post-weld inspection timing matters",
          "The metal was struck and cracked by accident after welding"
        ],
        a: 2, xp: 30,
        exp: "Cold cracks are also called 'delayed cracks' because diffusible hydrogen slowly moves to high-stress, hard areas (HAZ) and builds up there. The crack may not form until hours — or even days — after welding. That is why some specifications require a waiting time before final inspection: for example, AWS D1.1 requires waiting 48 hours for certain high-strength steels. 🇯🇵 TIP: For high-strength steel, the quality plan (品質計画書 / hinshitsu-keikaku-sho) states when inspection may be done. Plan your work around that waiting time."
      },
      {
        id: 419, cat: "NDT",
        q: "What is the correct NDT sequence for a critical structural weld in Japan, from first to last?",
        opts: [
          "Do all tests simultaneously to save time",
          "RT → VT → PT/MT → UT",
          "UT → MT → RT → VT",
          "VT first → then PT or MT (surface) → then RT or UT (internal) — always surface methods first, then volumetric"
        ],
        a: 3, xp: 25,
        exp: "Standard NDT sequence: 1) VT (目視) — visual first, always free and fast. 2) PT or MT (浸透 / 磁粉) — surface defects. 3) RT (放射線) or UT (超音波) — internal defects. Logic: if VT or PT/MT finds a serious defect, no need to proceed to expensive RT/UT. In Japan, the inspection order is controlled by the quality plan (品質計画書). 🇯🇵 TIP: When a Japanese QC engineer hands you a 品質計画書 (hinshitsu-keikaku-sho / quality plan), read it carefully. It specifies exactly which NDT method, at what stage, and by whom, for every weld joint. On major projects (bridges, buildings, ships), the quality plan is a legal document. Deviating from it without written approval is not allowed — and the paperwork trail (記録 / kiroku) must be complete."
      },
      {
        id: 420, cat: "Defects",
        q: "A weld shows a 'Pit' (ピット) on its surface, and a separate weld shows a 'Buroohoru' (ブローホール) confirmed by RT with no surface opening. Both defects were caused by trapped gas. Which inspection method would catch BOTH defects, and which would catch only ONE?",
        opts: [
          "VT catches the pit (surface-open) but misses the blowhole (fully internal); RT can detect the blowhole, and may also reveal pits depending on geometry — so RT is the more complete check of the two",
          "RT catches neither defect — RT can only detect cracks, never gas-related defects",
          "VT and RT are equally blind to both defects; only UT can detect gas pores",
          "VT alone catches both — surface and internal gas pores both deform the surface eventually"
        ],
        a: 0, xp: 25,
        exp: "Pitto (ピット) = surface-open gas pore, visible during VT as a small crater on the weld face. Buroohoru (ブローホール) = internal gas pore, completely enclosed inside the weld and invisible to the eye — VT will miss it entirely. RT can reveal internal blowholes as round dark spots on film, and depending on geometry may also show evidence of surface pits. Both defects share the same root causes (moisture, contamination, shielding failure) but differ in WHERE the gas got trapped during solidification. 🇯🇵 TIP: Pits (ピット) on the final weld surface are an automatic VT fail in Japanese JIS tests. After completing the final pass, Japanese welders visually scan the bead surface carefully before calling the inspector — prevention means ensuring no paint, oil, rust, or moisture on the base metal before the final pass."
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // STAGE 6 — Certifications & Career Path
  // ──────────────────────────────────────────────────────────
  {
    stageId: 6,
    label: "STAGE 6 — Certifications & Career Path",
    color: "#DC2626",
    icon: "🏆",
    unlockXP: 1000,
    questions: [
      {
        id: 501, cat: "Certifications",
        q: "A new trainee claims that without a 'JIS Yosetsu-gino-sha' (JIS溶接技能者) qualification, it is illegal to weld in Japan, just like welding without the Arc Welding Safety Training certificate. Is this correct?",
        opts: [
          "Yes — both are legally mandatory government licenses with identical legal weight",
          "No — JIS Yosetsu-gino-sha is a JWES (日本溶接協会) skill certification, not a legally mandatory license; it is widely REQUIRED BY EMPLOYERS but you can legally weld without it as long as you hold the legally mandatory safety training (Arc Welding Safety Training)",
          "No — JIS Yosetsu-gino-sha is mandatory, but Arc Welding Safety Training is optional",
          "Yes, but only for pressure vessel and boiler work, not general fabrication"
        ],
        a: 1, xp: 25,
        exp: "JIS Yosetsu-gino-sha (JIS溶接技能者) is issued by JWES (日本溶接協会 / Japan Welding Engineering Society) and proves welding SKILL through practical tests — but it is NOT a legally mandatory government license. The Arc Welding Safety Training Certificate (アーク溶接特別教育), by contrast, IS legally mandatory under labor law before touching any welding machine. Confusing the two — assuming JIS certification is a legal requirement like the safety training — is a common misunderstanding among new trainees. 🇯🇵 TIP: When applying for jobs, your JIS certification card (認定証 / nintei-sho) is still the first thing employers ask for, even though it's not a legal requirement — it's an industry-standard expectation, not a law."
      },
      {
        id: 502, cat: "Certifications",
        q: "A welder holds only 'Kihon-kyu' (基本級 / Basic Grade) JIS certification. A site supervisor asks if he can take on a job requiring 2G (horizontal position) welding. Can he, based on his Basic Grade alone?",
        opts: [
          "No — Basic Grade does not qualify him for ANY welding work at all, including flat position",
          "Yes — Basic Grade automatically covers all positions once you pass the initial flat-position test",
          "No — Basic Grade (基本級) covers flat position (下向き / 1G) ONLY; horizontal, vertical, overhead, and pipe positions require Senmon-kyu (専門級 / Specialist Grade) certification instead",
          "Yes, but only if he has at least 2 years of work experience to compensate"
        ],
        a: 2, xp: 25,
        exp: "Kihon-kyu (基本級) = Basic Grade, the entry point for JIS certification, covering the flat position (下向き / 1G) only. Senmon-kyu (専門級) = Specialist Grade covers the other positions: horizontal (2G), vertical (3G), overhead (4G) and pipe (P). JIS certification is not a legal license, but when a job's specification calls for horizontal-position qualification, employers and clients require the matching Specialist Grade — experience alone does not replace it. 🇯🇵 TIP: Japanese sites quickly ask 'tate-muki dekiru?' (立向きできる？ / can you do vertical?) — Specialist Grade opens far more work."
      },
      {
        id: 503, cat: "Certifications",
        q: "What does test code 'N-2F' mean in JIS welding certification?",
        opts: [
          "N = No groove, 2 = 2mm plate thickness, F = Final pass only",
          "N = Non-ferrous, 2 = Two-pass weld, F = FCAW process",
          "N = Nickel-alloy steel, 2 = Plate groove weld, F = Flat position",
          "N = No backing plate (裏当て金なし), 2 = Medium plate, 9mm (中板), F = Flat position (下向き). A flat-position groove weld without a backing plate"
        ],
        a: 3, xp: 25,
        exp: "JIS test code N-2F (JIS Z 3801, manual arc welding): N = 裏当て金なし (no backing plate — A = with backing), 2 = 中板 (medium plate, 9mm — 1 = thin, 3 = thick), F = 下向き (flat position). Other common codes: N-2H (horizontal), N-2V (vertical), N-2O (overhead), N-2P (pipe, all positions — the hardest). The code tells you exactly what test you passed. 🇯🇵 TIP: When Japanese welders introduce themselves professionally, they often state their JIS codes: 'N-2F to N-2V wo motte imasu' (N-2FとN-2Vを持っています / I hold N-2F and N-2V). This immediately communicates your capability to any Japanese supervisor. Memorize your own codes and use them confidently — it shows you understand the Japanese qualification system."
      },
      {
        id: 504, cat: "Certifications",
        q: "What is 'N-2P' in JIS certification and why is it considered the most prestigious?",
        opts: [
          "N-2P = No backing plate, medium-wall pipe, fixed pipe — the pipe is fixed horizontally and vertically, so you weld in all positions (flat + vertical + overhead). The gold standard for Japanese welders",
          "N-2P = Normal 2-position test — slightly harder than basic",
          "N-2P = Non-destructive, 2-point inspection",
          "N-2P = Narrow gap, 2-pass process — a fast welding technique"
        ],
        a: 0, xp: 30,
        exp: "N-2P = no backing plate (N), medium-wall pipe (2), pipe (P). The pipe is fixed horizontally and vertically, so the weld goes through every position: flat at top, vertical on the sides, overhead at the bottom. The root pass (初層) must be perfectly executed for complete back bead penetration (裏波). Considered the most difficult and prestigious JIS certification. Widely respected in Japanese industry. 🇯🇵 TIP: In Japan, a welder who holds N-2P is treated with genuine respect on site. Senior workers may say 'Ano hito wa N-ni-P wo motteru' (あの人はN-2Pを持ってる / that person holds N-2P) as a mark of distinction. If you pass N-2P, it is appropriate to mention it on your work history (職歴 / shokureki) — it will immediately set you apart from other applicants in Japan's competitive welding job market."
      },
      {
        id: 505, cat: "Certifications",
        q: "A JIS welder certificate is valid for 1 year at a time. What happens if you do NOT renew it before it expires?",
        opts: [
          "You pay a small fine but continue working",
          "Your certification becomes INVALID. You cannot claim JIS certification for work. You must re-test to regain it. Japanese employers check certification dates regularly",
          "You get a 6-month grace period automatically",
          "Nothing — the certification is valid for life once obtained"
        ],
        a: 1, xp: 20,
        exp: "A JIS welder certificate (適格性証明書) is valid for 1 year. To keep it, you apply for surveillance (サーベイランス) within 3 months before it expires — this is done twice (years 2 and 3). After 3 years, you must pass a re-evaluation test (再評価) between 8 and 2 months before expiry. If it expires, the certificate is no longer valid and you cannot claim JIS certification for work. 🇯🇵 TIP: Set a calendar reminder 3 months before your expiry date (有効期限 / yuukou-kigen). Japanese employers and inspectors check expiry dates — even one day late matters. The Japan Welding Engineering Society (JWES) publishes the schedule and online applications (e-Weld)."
      },
      {
        id: 506, cat: "Certifications",
        q: "What is 'AW Kentei' (AW検定 / AWけんてい) and which industry is it for?",
        opts: [
          "AW = Automated Welding — for robotic welding operators",
          "AW = Arc Welding — a general welding certification for all industries",
          "AW = Architectural Welding (建築鉄骨溶接技量検定) — the certification for structural steel welding in buildings. Valid 1 year from April 1, renewable up to 2 times by application",
          "AW = Aluminum Welding — for aerospace applications"
        ],
        a: 2, xp: 25,
        exp: "AW Kentei (AW検定) = Architectural Welding certification (建築鉄骨溶接技量検定). Specifically for structural steel fabrication in buildings. Managed by the AW Kentei Association. Validity: 1 year from April 1; if you meet the requirements you can renew by application up to 2 times (max 3 years). Factory welding categories: S (complete penetration, steel end tabs), A (fillet weld), S-C (complete penetration, substitute end tabs — requires S). Other categories: field welding, pipe welding, robot welding operator. 🇯🇵 TIP: AW Kentei is the standard for anyone building steel-frame buildings (鉄骨造 / teppukutsukuri) in Japan. Track your renewal deadline — after the renewals are used up you must take the test again. Japanese building contractors keep a strict roster of AW-certified welders for each project — your AW card is checked before every critical joint assignment. If you work in construction, AW Kentei is just as important as JIS."
      },
      {
        id: 507, cat: "Certifications",
        q: "What can a 'Futsuu-Boilaa-Yosetsu-shi' (普通ボイラー溶接士 / ふつうボイラーようせつし) weld — and what is the key plate thickness restriction?",
        opts: [
          "Can only weld low-pressure systems under 0.1 MPa",
          "Can weld all boiler and pressure vessel parts without restriction",
          "Can only weld pipes — no flat plates",
          "Can weld boiler and pressure vessel parts up to 25mm plate thickness only. For 25mm+ = must have Tokubetsu-Boilaa (特別ボイラー溶接士)"
        ],
        a: 3, xp: 25,
        exp: "Futsuu-Boilaa-Yosetsu-shi (普通ボイラー溶接士) = Standard Boiler Welder. Can weld boiler and pressure vessel components up to 25mm plate thickness. For plates OVER 25mm, the Tokubetsu (特別) grade is required. National license — legally mandatory. Practical test: flat (下向き) and vertical (立向き) butt welds on 9mm plate, 1 hour. Pass/fail is judged by root-bend tests — every specimen must pass. (Horizontal, 25mm plate and side-bend is the Tokubetsu test — don't mix them up.) 🇯🇵 TIP: The Boiler Welder national license (ボイラー溶接士 / national exam, not JWES) is issued under the Ministry of Health, Labour and Welfare; the exam is run by the Japan Safety and Health Examination Association (安全衛生技術試験協会). It is a national qualification — not the same as JIS. If you work on boilers, pressure vessels, or chemical plant piping in Japan, you will need this license. The exam requires passing both a written knowledge test AND a practical test — start studying the law (ボイラー及び圧力容器安全規則) alongside your practical skills."
      },
      {
        id: 508, cat: "Certifications",
        q: "To work as an 'Underwater Welder' (水中溶接士 / すいちゅうようせつし) in Japan, which combination is needed?",
        opts: [
          "Diving License (潜水士 / Sensui-shi, legally required for diving work) + welding training and skill (Arc Welding Safety Training by law; JIS qualification expected by employers)",
          "Any two safety training certificates",
          "JIS Certification + Driver's License",
          "Boiler Welder + Arc Welding Safety Training only"
        ],
        a: 0, xp: 25,
        exp: "Diving work in Japan legally requires the Diving License (潜水士), a national license with a written exam only. For the welding side, the Arc Welding Safety Training (アーク溶接特別教育) is the legal minimum, and employers normally expect a JIS welder qualification (all-position Specialist Grade is preferred). 🇯🇵 TIP: Underwater welding work in Japan is concentrated in ports (港湾 / kouwan), offshore structures and dam repairs. The community is small — a reputation for reliability and safety matters a lot."
      },
      {
        id: 509, cat: "Certifications",
        q: "What is 'WES' in Japanese welding, and what level of qualification does it represent?",
        opts: [
          "WES = Welding Equipment Standard — a certification for welding machines",
          "WES = Welding Engineering Standard — the Japan Welding Engineering Society's standards; WES 8103 certifies welding coordination personnel at Grade 2, Grade 1 and Special Grade",
          "WES = Western Engineering System — an American certification used in Japan",
          "WES = Welding Examination System — a basic safety training program"
        ],
        a: 1, xp: 25,
        exp: "WES (Welding Engineering Standard) = standards of the Japan Welding Engineering Society (日本溶接協会). WES 8103 certifies welding coordination personnel (溶接管理技術者) in three levels: Grade 2 (2級), Grade 1 (1級) and Special Grade (特別級). These are for people who MANAGE and SUPERVISE welding. 🇯🇵 TIP: Many experienced Japanese welders who move into supervision pursue WES Grade 2 or Grade 1. 'Genba ga wakaru enjinia' (現場が分かるエンジニア / an engineer who understands the worksite) is a high compliment."
      },
      {
        id: 510, cat: "Career",
        q: "What is the correct career path order from entry-level to expert in Japanese welding?",
        opts: [
          "All certifications are obtained simultaneously in the first week",
          "WES Special → Underwater Welder → Boiler Welder → JIS Basic → Arc Safety Training",
          "Arc Safety Training (Day 1) → JIS Basic Grade → JIS Specialist Grade → AW / Boiler Welder → WES → Underwater Welder (top)",
          "Underwater Welder first — then everything else is easy"
        ],
        a: 2, xp: 20,
        exp: "Japanese welding career ladder: 1) Arc Safety Training (アーク溶接特別教育) — legally required from Day 1. 2) JIS Basic Grade (基本級) — first skill certification. 3) JIS Specialist Grade (専門級) — all positions. 4) AW Kentei or Boiler Welder (specialized). 5) WES management qualification. 6) Underwater Welder (elite). Each step opens higher-paying work. 🇯🇵 TIP: Japanese workplaces highly respect people who proactively pursue certifications without being asked. When a welder tells their supervisor 'Jishu-teki ni shikaku wo toru tsumori desu' (自主的に資格を取るつもりです / I intend to get the certification on my own initiative), it is a strong cultural signal of commitment. Companies often support certification costs for motivated employees — don't be shy about asking. Self-improvement (自己研鑽 / jiko-kensan) is a deeply valued trait in Japanese professional culture."
      },
      {
        id: 511, cat: "Certifications",
        q: "How does income generally change as you gain welding qualifications in Japan?",
        opts: [
          "Japanese welders earn the same regardless of certification",
          "Income only depends on age — certifications make no difference",
          "Arc Safety Training alone gives the highest pay, and higher certifications lower your pay",
          "Higher and rarer qualifications (Specialist Grade, AW, Boiler Welder, underwater work) generally open higher-paying jobs — actual pay varies by company, region and experience"
        ],
        a: 3, xp: 20,
        exp: "In general, each step up — JIS Specialist Grade, AW Kentei, Boiler Welder, and rare skills such as underwater welding — opens work that pays more. But real pay varies a lot by company, region, industry and experience, so treat any 'average salary' figure as a rough guide only. 🇯🇵 TIP: Japanese companies also value reliability: showing up every day, making few quality problems and communicating well often matters as much as your certificates."
      },
      {
        id: 512, cat: "Physics",
        q: "Water pressure increases by approximately 1 atmosphere every 10 meters of depth. What is the absolute pressure at 30 meters depth?",
        opts: [
          "4 atmospheres — 1 atm (surface) + 3 atm (from 30m = 3 × 10m)",
          "1 atmosphere (just atmospheric pressure)",
          "2 atmospheres",
          "3 atmospheres — 30m ÷ 10m (forgetting the 1 atm of air at the surface)"
        ],
        a: 0, xp: 25,
        exp: "Every 10m of depth adds about 1 atmosphere. At 30m: 1 atm (air at the surface) + 3 atm (30m of water) = 4 atm absolute. Forgetting the surface atmosphere gives the wrong answer of 3. Higher pressure means faster gas consumption, more risk of nitrogen narcosis, and required decompression stops. 🇯🇵 TIP: Diving work in Japan is regulated by the Ordinance on Safety and Health of Work under High Pressure (高気圧作業安全衛生規則), including decompression. Decompression sickness (減圧症 / genatsushou) prevention is taken very seriously — no shortcuts."
      },
      {
        id: 513, cat: "Physics",
        q: "Heat Input formula: Q = 60 × E × I / v. What do E, I, and v represent in welding?",
        opts: [
          "E = efficiency, I = insulation, v = volume",
          "E = arc voltage (V), I = welding current (A), v = travel speed (cm/min). Result Q = heat input (J/cm or kJ/cm)",
          "E = electrode diameter, I = interpass temperature, v = ventilation rate",
          "E = elongation, I = impact strength, v = viscosity of weld pool"
        ],
        a: 1, xp: 25,
        exp: "Heat Input Q = 60 × E × I / v. E = Voltage (V), I = Current (A), v = Travel speed (cm/min). Result in J/cm (divide by 1000 for kJ/cm). Example: E=28V, I=180A, v=30cm/min → Q = 60×28×180/30 = 10,080 J/cm = 10.1 kJ/cm. Heat input controls HAZ toughness, cooling rate, and distortion. Managed in WPS. 🇯🇵 TIP: In Japanese pressure vessel and nuclear work, heat input limits (入熱量制限 / nyuunetsu-ryou-seigen) are written into the WPS and the welding inspector may ask 'Nyuunetsu wa WPS-nai desu ka?' (入熱はWPS内ですか？ / Is your heat input within the WPS?). Welders who track their voltage, current, and travel speed during welding — not just at the start — are the ones who consistently pass inspection. Many Japanese welders use a small notepad to log parameters by pass."
      },
      {
        id: 514, cat: "Certifications",
        q: "What is a 'WPS' (Welding Procedure Specification / 溶接施工要領書) and why does every qualified welding job in Japan require one?",
        opts: [
          "WPS = a weekly work schedule for welding crews",
          "WPS = Worker Protection System — a safety plan for the site",
          "WPS = a document specifying all welding parameters (process, materials, current, voltage, speed, preheat, PWHT) that a welder must follow to produce a qualified weld. Required by codes for all critical welded structures",
          "WPS = a record of past welds done on the project"
        ],
        a: 2, xp: 25,
        exp: "WPS (溶接施工要領書 / Yosetsu-shiko-yoryosho) = Welding Procedure Specification. The 'recipe' for a weld: defines process, base metal, filler metal, preheat, current, voltage, speed, post-weld heat treatment, and more. Backed by a PQR (procedure qualification test record). Every qualified weld in Japanese pressure vessels, buildings, and ships must follow an approved WPS. 🇯🇵 TIP: On Japanese sites, the WPS is kept in the quality binder (品質書類 / hinshitsu-shorui) at the workstation. Before starting a critical weld, point to the WPS and confirm with your supervisor: 'Kore no WPS de yoroshii desu ka?' (これのWPSでよろしいですか？ / Is this the correct WPS to follow?). This simple step protects you legally if there's ever a quality dispute later. Paper trails in Japan are everything."
      },
      {
        id: 515, cat: "Certifications",
        q: "What is 'Yonetsu' (予熱 / よねつ / preheat) and why is it required for high-strength steel?",
        opts: [
          "A type of annealing process for stainless steel only",
          "Warming the shielding gas to improve flow rate",
          "Heating the weld after completion — post-weld heat treatment",
          "Preheating the base metal before welding to slow cooling rate — prevents cold cracking in high carbon equivalent steels, reduces hardening in HAZ, promotes hydrogen escape"
        ],
        a: 3, xp: 25,
        exp: "Yonetsu (予熱) = Preheat. Heating the base metal (and surrounding area) to a specified temperature BEFORE starting to weld. Why: slows cooling rate → less hardening in HAZ → less cold crack risk. Also helps diffusible hydrogen escape. Required for: high carbon equivalent steels (Ceq > ~0.40), thick plates, highly restrained joints. Temperature checked with ondo-chooku (温度チョーク). 🇯🇵 TIP: Japanese welders use temperature-indicating crayons (温度チョーク / ondo-chooku, also called サーモクレヨン / thermo-crayon) to verify preheat temperature before striking the arc. The crayon melts at a specific temperature — if it melts on the steel, the surface has reached that temperature. Always check BOTH sides of the joint, not just the top surface. In cold winter months on outdoor sites, preheat maintenance between passes (パス間温度管理 / pasu-kan-ondo-kanri) must also be checked regularly."
      },
      {
        id: 516, cat: "Career",
        q: "As a foreign welder in Japan, what is the MOST IMPORTANT certificate combination to get in your first month to become fully functional on any job site?",
        opts: [
          "Arc Welding Safety Training + Grinding Wheel Safety Training + Low-Voltage Electrical Training + Full Harness Safety Training — the basic operational package (~¥52,000–82,000, about 6–7 days total)",
          "WES Grade 2 only — covers everything",
          "Driver's License + Boiler Welder License",
          "JIS Specialist Grade only — everything else is optional"
        ],
        a: 0, xp: 25,
        exp: "First-month priority package: 1) Arc Welding Safety Training (3 days, ¥20–40k) → can weld. 2) Grinding Wheel Safety Training (1 day, ¥10k) → can grind. 3) Low-Voltage Electrical Safety Training (1 day, ¥12–22k) → can operate power panels. 4) Full Harness Safety Training (1 day, ¥10k) → can work at height. Total: ~6–7 days, ¥52,000–82,000. Now you are legally operational on virtually any Japanese job site. 🇯🇵 TIP: In Japan, safety training certificates (特別教育修了証 / tokubetsu-kyouiku-shuryo-sho) must be kept by BOTH the worker AND the employer. If a labor inspector (労働基準監督官 / rodo-kijun-kantokukan) visits the site and asks a worker to produce their certificate, the worker must have it. Many experienced workers keep all their certificates in a clear plastic folder in their work bag. This is normal professional practice in Japan — not unusual or excessive."
      },
      {
        id: 517, cat: "Certifications",
        q: "What is 'IIW' and how does it relate to Japanese welding qualifications?",
        opts: [
          "IIW = a brand of Japanese welding machines",
          "IIW = International Institute of Welding — issues internationally recognized certifications (IW, IWT, IWE) that align with Japan's WES system. WES Special Grade ≈ IWE (International Welding Engineer)",
          "IIW = an American industry association with no connection to Japan",
          "IIW = a Japanese acronym for the welding safety law"
        ],
        a: 1, xp: 30,
        exp: "IIW (International Institute of Welding) = the global body for welding standards. Issues: IW (International Welder), IWT (International Welding Technologist), IWE (International Welding Engineer). Japan's WES 8103 Special Grade (特別級) is aligned with IWE standards — holders can apply for IIW international recognition. Valuable for Japanese welders working on international projects (offshore, LNG, nuclear). 🇯🇵 TIP: Japan is an active member of IIW (through JWES). If you ever want to work on Japan's international LNG projects in Australia, Southeast Asia, or the Middle East, IIW certification (especially IW or IWE) signals your qualifications cross borders. The Japanese welding industry takes international standards seriously — and a welder who can speak both JIS and IIW fluently is genuinely rare and valued."
      },
      {
        id: 518, cat: "Career",
        q: "What does 'PWHT' (Post-Weld Heat Treatment / 溶接後熱処理 / ようせつごねつしょり) do and when is it required in Japan?",
        opts: [
          "PWHT = a final visual inspection required before shipment",
          "PWHT = cleaning the weld bead with a wire brush after cooling",
          "PWHT = heating the entire weldment to a specific temperature (e.g. 600°C) and holding, then slow cooling — removes residual stress, softens hard HAZ, releases hydrogen. Required for pressure vessels, boilers, and critical structures by JIS/ASME codes",
          "PWHT = applying anti-rust paint after welding"
        ],
        a: 2, xp: 30,
        exp: "PWHT (Post-Weld Heat Treatment / 溶接後熱処理) = stress-relief heat treatment. The completed weldment is heated to ~600–700°C (for carbon steel), held for a specified time, then slowly cooled. Effects: residual stress removed (↓ distortion, ↓ stress corrosion risk), hard HAZ softened (↓ cold crack risk), hydrogen released. Mandatory for boiler vessels (ボイラー), pressure equipment, and specified structural connections. 🇯🇵 TIP: PWHT in Japan is performed by specialized heat treatment companies (熱処理業者 / netsushori-gyosha) using temperature-controlled electric resistance blankets or furnaces. The entire heating and cooling cycle is recorded on a temperature chart recorder (温度記録計 / ondo-kiroku-kei) — this chart becomes a permanent quality document. As a welder, you should know the PWHT requirements before welding so you don't apply weld repairs or tack welds after the PWHT cycle — those would invalidate the treatment."
      },
      {
        id: 519, cat: "Career",
        q: "What is the main difference between working as a welder in Japan vs other countries that foreign workers should know?",
        opts: [
          "Japanese companies never hire foreign welders — it is not possible",
          "Japan uses completely different welding techniques not found anywhere else",
          "Japanese welders work longer hours but earn less",
          "Japan has a strict certificate-based system — many tasks (crane rigging, changing grinding wheels, electrical work) need specific legal training. Safety culture is deep, quality standards are very high, and rework (取り直し) hurts your reputation"
        ],
        a: 3, xp: 20,
        exp: "Key differences in Japan: 1) Certificate culture — many tasks need specific safety training or licenses by law, and sites often require more than the legal minimum. 2) Quality focus — NDT is thorough and rework damages your reputation. 3) Team communication — learning key Japanese terms is essential for safety. 4) Respect for process — follow the WPS and work instructions exactly. 🇯🇵 TIP: A powerful phrase: 'Wakaranai toki wa, shitsumon shite mo ii desu ka?' (分からない時は、質問してもいいですか？ / When I don't understand, may I ask?). Asking before starting is respected; guessing and causing a quality problem is not."
      },
      {
        id: 520, cat: "Career",
        q: "You have mastered all the content in this game. What should your NEXT step be to advance your welding career in Japan?",
        opts: [
          "Sit the JIS 専門級 (Specialist Grade) practical test for your main welding process, accumulate 実務経験 (practical experience on the job), then aim for N-2P (pipe all-positions) and eventually Boiler Welder or AW certification",
          "Immediately apply for the WES Special Grade exam",
          "Apply for underwater welding jobs without any further preparation",
          "Nothing more to learn — you are now an expert"
        ],
        a: 0, xp: 25,
        exp: "Knowledge is Step 1. Now: 1) Sit the JIS 専門級 practical test for FCAW or SMAW. 2) Build 実務経験 (jitsumukeiken = practical work experience) — quality matters more than quantity. 3) Aim for N-2P (pipe all-positions) — the most respected JIS test. 4) Accumulate: Tamakake + Crane + Forklift. 5) Consider AW or Boiler Welder depending on your work field. Your career = your certifications + your quality record. Gambatte! (頑張れ！) 🇯🇵 TIP: Japanese welding masters often say 'Shokunin ni naru no wa, issho no shigoto da' (職人になるのは、一生の仕事だ / Becoming a craftsman is the work of a lifetime). There is no shortcut to mastery — but every certificate you earn, every quality weld you make, and every Japanese word you learn is a brick in a career that will carry you anywhere in the world. You started this game. Now go build the real thing."
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // STAGE 7 — International Certs & Global Mobility
  // ──────────────────────────────────────────────────────────
  {
    stageId: 7,
    label: "STAGE 7 — International Certs & Global Mobility",
    color: "#0EA5E9",
    icon: "🌍",
    unlockXP: 1200,
    questions: [
      {
        id: 601, cat: "International Certs",
        q: "What is the AWS 'CWI' (Certified Welding Inspector), and who issues it?",
        opts: [
          "A welding inspector certification issued by the American Welding Society (AWS), recognized worldwide for inspecting welds to codes",
          "A Japanese national welding license issued by JWES",
          "A safety training certificate for arc welding",
          "A machine operator license for automated welding"
        ],
        a: 0, xp: 25,
        exp: "AWS CWI = Certified Welding Inspector, issued by the American Welding Society (USA). A globally recognized credential for inspecting welds to codes such as AWS D1.1, ASME, and API. Requires documented experience plus passing a 3-part exam. 🌍 TIP: In Japan, CWI is valued on international LNG/offshore projects that follow US codes; for domestic JIS work, JWES certification is the norm — many senior inspectors hold BOTH so they can move between domestic and international jobs."
      },
      {
        id: 602, cat: "International Certs",
        q: "The AWS CWI exam has three parts. What do Parts A, B, and C test?",
        opts: [
          "Part A = Welding, Part B = Grinding, Part C = Cutting",
          "All three parts are written theory only",
          "Part A = Fundamentals (closed book), Part B = Practical hands-on inspection with gauges and weld replicas, Part C = Code application (open-book)",
          "Part A = Japanese, Part B = English, Part C = Chinese language tests"
        ],
        a: 2, xp: 25,
        exp: "CWI exam: Part A Fundamentals (welding knowledge, closed book), Part B Practical (hands-on measuring of weld replicas with gauges + reading a 'Book of Specifications'), Part C Code Application (open-book code such as AWS D1.1 or API 1104). You must pass all three. 🌍 TIP: Part B's gauge skills — measuring undercut, leg length, throat — are the same 溶接ゲージ skills used for self-inspection (自主検査) on Japanese sites. That habit transfers directly to the CWI practical."
      },
      {
        id: 603, cat: "International Codes",
        q: "What is 'AWS D1.1'?",
        opts: [
          "The AWS Structural Welding Code — Steel: the dominant code for building and bridge steel welding in the USA and many international projects",
          "A type of welding electrode",
          "An American safety helmet standard",
          "A Japanese building law"
        ],
        a: 0, xp: 25,
        exp: "AWS D1.1 = Structural Welding Code — Steel. It governs design, WPS/welder qualification, workmanship and inspection for structural steel in the US and on many international projects. In Japan the same field is covered by JIS, the Building Standard Law and AW Kentei. 🌍 TIP: If a drawing's title block says 'AWS D1.1', the acceptance criteria and procedures follow that code — confirm the WPS and inspection rules with QC before welding. (The arrow-side rule for weld symbols is the same as JIS: below the line = arrow side.)"
      },
      {
        id: 604, cat: "International Certs",
        q: "What is 'CSWIP 3.1' and who administers it?",
        opts: [
          "A US structural welding code",
          "A welding inspector qualification administered by TWI (The Welding Institute, UK), widely required in Europe, the Middle East, and Asian offshore/oil & gas",
          "A Japanese pressure vessel law",
          "A brand of welding wire"
        ],
        a: 1, xp: 25,
        exp: "CSWIP 3.1 = Welding Inspector certification from TWI (UK). It is the British/European counterpart to AWS CWI, heavily required in oil & gas and offshore work. 🌍 TIP: For welders eyeing Middle East or Southeast Asia offshore projects (where many Japanese firms operate), CSWIP is often the required inspector ticket, while AWS CWI dominates US-led projects. Knowing which code family a project uses tells you which inspector cert matters."
      },
      {
        id: 605, cat: "International Codes",
        q: "What does 'ISO 9606-1' cover, and how does it relate to JIS welder certification?",
        opts: [
          "It is a paint coating standard",
          "It is a crane operation standard",
          "It is the international standard for qualification testing of welders (fusion welding of steels) — the global counterpart to Japan's JIS welder certification",
          "It is identical to AWS D1.1 with a different number"
        ],
        a: 2, xp: 25,
        exp: "ISO 9606-1 = international welder qualification standard for steels. It parallels JIS 溶接技能者 certification — proving a welder's skill by practical test. International projects in Japan (LNG, offshore) often require ISO 9606 qualification alongside or instead of JIS. 🌍 TIP: The position codes you already know (PA/PC/PF/PG, and 1G/2G/6G) come from ISO 6947 and appear on ISO 9606 certificates — so your position knowledge is already international."
      },
      {
        id: 606, cat: "International Codes",
        q: "What is 'ISO 3834'?",
        opts: [
          "Quality requirements for fusion welding of metallic materials — a company/shop-level welding quality management standard",
          "A welder's personal skill test",
          "A type of non-destructive test",
          "A shielding gas purity standard"
        ],
        a: 0, xp: 25,
        exp: "ISO 3834 sets quality requirements for a welding ORGANIZATION (not an individual) — covering WPS control, welder qualification, equipment, inspection, and record keeping. Think 'a shop-level quality system for welding.' 🌍 TIP: Japanese fabricators bidding on international or European projects often certify to ISO 3834 to prove their welding quality management. It is similar in spirit to the 品質計画書 and 記録 discipline already standard in Japan."
      },
      {
        id: 607, cat: "International Codes",
        q: "What does 'ASME Section IX' govern?",
        opts: [
          "Elevator safety",
          "Fire sprinkler design",
          "Electrical wiring codes",
          "Welding and brazing qualification — the rules for qualifying WPS, PQR, and welders for boilers and pressure vessels (ASME BPVC)"
        ],
        a: 3, xp: 25,
        exp: "ASME Boiler & Pressure Vessel Code, Section IX = qualification of welding/brazing procedures (WPS/PQR) and personnel. It is the US/international backbone for pressure-equipment welding. Japan's domestic equivalent domain is covered by JIS plus the boiler/pressure-vessel rules (ボイラー溶接士). 🌍 TIP: On international plant projects in Japan you may weld to ASME IX WPSs — understanding 'essential variables' (which changes force re-qualification) is critical to staying qualified."
      },
      {
        id: 608, cat: "International Codes",
        q: "On AWS (A2.4) welding symbols, what does a symbol placed BELOW the reference line mean — and is it the same in JIS?",
        opts: [
          "AWS drawings never use welding symbols",
          "Below the line = arrow side in AWS, and JIS uses the same rule — so the real thing to watch for is ISO 2553 drawings with a dashed second line",
          "Below the line = other side in AWS, the opposite of JIS",
          "Below the line means a field weld in AWS"
        ],
        a: 1, xp: 30,
        exp: "AWS A2.4 and JIS Z 3021 agree: below the reference line = arrow side, above = other side. Drawings to ISO 2553 may use a dashed second line, where the solid line = arrow side and the dashed line = other side. 🌍 TIP: On international projects, check the drawing standard in the title block before welding, and ask if you see a dashed line beside the reference line."
      },
      {
        id: 609, cat: "International Certs",
        q: "The IIW international welding personnel qualifications include IWE, IWT, and IWS. What do they represent (highest to lowest)?",
        opts: [
          "Three different welding processes",
          "Three grades of welding wire",
          "IWE = International Welding Engineer (highest), IWT = Technologist, IWS = Specialist — a tiered international welding-coordination scheme",
          "Three types of shielding gas"
        ],
        a: 2, xp: 30,
        exp: "IIW welding-coordination personnel: IWE (Engineer, highest), IWT (Technologist), IWS (Specialist), plus IWP (Practitioner). These are recognized worldwide. Japan's WES 8103 Special Grade aligns with IWE. 🌍 TIP: If you aim to become a welding coordinator or QC engineer on international projects, the IWS → IWT → IWE ladder is the global track — WES holders in Japan can often bridge to IIW recognition through JWES."
      },
      {
        id: 610, cat: "Quality",
        q: "In international codes (ASME IX, ISO 15614), what is the relationship between a WPS and a PQR?",
        opts: [
          "The PQR records the results of an actual qualification test weld that proves the WPS works; the WPS is the production instruction backed by that PQR",
          "They are the same document",
          "The WPS is written after production is finished",
          "The PQR is a welder's pay record"
        ],
        a: 0, xp: 25,
        exp: "PQR (Procedure Qualification Record) documents a qualification test weld and its test results (tensile, bend, impact). The WPS (Welding Procedure Specification) is the production 'recipe' supported by that PQR. This is the same logic as Japan's 溶接施工要領書 backed by qualification testing. 🌍 TIP: When a job uses ASME/ISO WPSs, learn which parameters are 'essential variables' — changing one beyond its range (e.g. heat input or preheat) can invalidate the qualification and require a new PQR."
      },
      {
        id: 611, cat: "Metallurgy",
        q: "What does a 'Charpy V-notch (CVN) impact test' measure, and why does it matter for cold climates?",
        opts: [
          "It measures weld bead width",
          "It measures shielding gas flow",
          "It measures a material's toughness (energy absorbed in fracture) at a given temperature — critical for avoiding brittle fracture in cold service",
          "It measures electrical resistance"
        ],
        a: 2, xp: 25,
        exp: "In the Charpy V-notch test, a notched specimen is struck and the absorbed energy (Joules) indicates toughness. Low toughness at low temperature means brittle-fracture risk. Codes specify a minimum CVN value at a test temperature for cold-service or seismic structures. 🌍 TIP: For welding in Hokkaido/Tohoku winters or cold offshore water, WPSs often require impact-tested consumables and controlled heat input to keep HAZ toughness — the same 入熱管理 discipline you already practiced."
      },
      {
        id: 612, cat: "Positions",
        q: "In ISO/AWS pipe welding tests, what is the '6G' position, and what JIS test is it comparable to?",
        opts: [
          "6G = a fixed pipe inclined at 45°, welded through all positions in one test — the most demanding pipe test; comparable to Japan's N-2P all-position pipe test",
          "6G = flat plate, the easiest position",
          "6G = a type of shielding gas",
          "6G = a sixth-generation welding robot"
        ],
        a: 0, xp: 30,
        exp: "6G = pipe fixed at a 45° inclination, welded through flat, vertical, and overhead in a single test — the toughest position, qualifying the widest range. In prestige and difficulty it is comparable to JIS N-2P. Passing 6G is a globally respected milestone. 🌍 TIP: A 6G ticket (ISO 9606 or ASME IX) plus JIS N-2P makes you employable on both domestic and international pipe work — and the pipe root-pass 裏波 (back bead) skills transfer directly between them."
      },
      {
        id: 613, cat: "Metallurgy",
        q: "Duplex stainless steel (e.g. 2205) requires careful welding control of which microstructural balance?",
        opts: [
          "The copper/zinc ratio",
          "The carbon/sulfur ratio only",
          "The ferrite/austenite phase balance — too much ferrite (from fast cooling / low heat input) reduces toughness and corrosion resistance",
          "It requires no special control"
        ],
        a: 2, xp: 30,
        exp: "Duplex stainless (~50% ferrite / 50% austenite) offers high strength plus corrosion resistance. Welding must control heat input and interpass temperature so the ferrite number stays in range: too-fast cooling leaves excess brittle ferrite, too-slow risks harmful phases. Common offshore and in chemical plants. 🌍 TIP: Duplex is increasingly used on offshore and LNG projects — nitrogen back-purge and controlled heat input are typical WPS requirements, and ferrite content is checked with a ferrite meter."
      },
      {
        id: 614, cat: "Metallurgy",
        q: "Across international codes, 'low-hydrogen' practice is required for high-strength/thick steel primarily to prevent what?",
        opts: [
          "Surface rust only",
          "Hydrogen-induced (cold) cracking — by minimizing diffusible hydrogen via dried low-hydrogen consumables, preheat, and interpass control",
          "Excessive bead width",
          "Shielding gas waste"
        ],
        a: 1, xp: 25,
        exp: "Low-hydrogen consumables (properly dried and stored), preheat, and interpass control reduce diffusible hydrogen — the driver of cold cracking in hardenable or thick steels. This requirement is universal across AWS, ASME, ISO, and JIS. 🌍 TIP: The rod-oven (乾燥炉) discipline you learned for JIS work is exactly what international codes require — dried electrodes, holding ovens, and limited time out of the oven all carry over."
      },
      {
        id: 615, cat: "Quality",
        q: "Under pressure-equipment codes, when is PWHT (post-weld heat treatment) typically mandated?",
        opts: [
          "For thick sections and certain materials, to relieve residual stress and temper the HAZ — thresholds are set by the code and material",
          "For every weld regardless of thickness",
          "Only for aluminum",
          "Never — PWHT is optional decoration"
        ],
        a: 0, xp: 25,
        exp: "Codes (ASME, JIS, EN) mandate PWHT above certain thickness thresholds or for specific materials (e.g. Cr-Mo steels) to relieve residual stress, reduce hardness and hydrogen, and restore toughness. The cycle — heating rate, hold temperature/time, cooling — is recorded on a chart. 🌍 TIP: Know the PWHT plan BEFORE welding: adding tack welds or repairs after the PWHT cycle invalidates the treatment — a costly and common mistake internationally as well as in Japan."
      }
    ]
  }

]
