# WELDON'S FORGE (EN) — Play リリース資料

最終更新: 2026-07-27
パッケージ名 (applicationId): `com.onaricreations.weldonsforge.en`
現在: versionCode **1** / versionName **"1.0"**（初回テストビルド）
→ 今回の更新は versionCode **2** / versionName **"1.1"** に上げる

---

## 1. リリース手順（テストトラック更新）

### ① バージョンを上げる
`android/app/build.gradle` の defaultConfig を編集:

```
versionCode 2        // 1 → 2（整数を必ず +1。Play は同じ versionCode を再アップロード不可）
versionName "1.1"    // 表示用。任意（1.0 → 1.1）
```

### ② Web をビルド → Android に反映（Capacitor）
```
cd ~/Desktop/weldons-forge-en
npm run build
npx cap sync android
```

### ③ 署名付き AAB を生成
`keystore.properties` が設定済みなので署名は自動。どちらかで:

**CLI:**
```
cd android
./gradlew bundleRelease
# 出力: android/app/build/outputs/bundle/release/app-release.aab
```

**Android Studio:** `android/` を開く → Build ▸ Generate Signed Bundle / APK ▸ Android App Bundle。

### ④ Play Console にアップロード
テスト → 該当トラック（内部/クローズド）→ 新しいリリースを作成 → AAB をアップロード → リリースノート（下記④）を貼る → 保存 → 公開（テスターに配信）。

> 注意: `versionCode` を上げ忘れると「既に使用されているバージョンコードです」で弾かれます。必ず ① を先に。

---

## 2. ストア掲載文（英語・EN版）

### アプリ名（30字以内）
`WELDON'S FORGE — Welding RPG`

### 短い説明（80字以内）
`Learn welding for Japanese job sites — a game for foreign trainees. EN / VI / ID.`

### 詳細説明（4000字以内）
**WELDON'S FORGE is a learning game for foreign welding trainees working in Japan.**
Master the Japanese welding job site — certifications, tools, safety, workplace terms, and inspection — the fun way. Now available in **English, Tiếng Việt, and Bahasa Indonesia**.

■ Who it's for
- Technical Intern Trainees (技能実習生) and Specified Skilled Workers (特定技能) in welding
- Foreign welders aiming to work — and grow their career — in Japan
- Anyone preparing for JIS welder certification or learning Japanese jobsite language

■ What's inside
- **⚔️ Battle (Quiz RPG)** — 7 stages, 140 questions. Legal permits & safety, tools & torch parts, Japanese workplace slang, positions & joints, defects & NDT, certifications & career, and international standards (AWS / CSWIP / ISO / ASME / IIW). Each answer teaches a real jobsite tip.
- **🎯 Mock Exam** — timed practice test, pass mark 60%, category breakdown, wrong-answer review.
- **📊 Weak Points** — see your accuracy by category and drill your weakest area.
- **🔢 Calculators + Practice Drill** — heat input, carbon equivalent, fillet throat, allowable force, with step-by-step solutions.
- **📚 Learn** — Jobsite Terms (English + 日本語 + romaji so you understand your 親方 / boss), a Safety module (fume, electric shock, confined space, fire, and more), and a **Pre-weld / Post-weld Checklist** based on the Japanese 作業前点検 routine.
- **🗺️ Career** — the welding career ladder and the visa route (Technical Intern → Specified Skilled Worker), plus certification costs and income guides.
- **📐 Symbols / 〰️ Weave** — welding symbols and bead-technique practice.
- **🔥 Daily streak** — build a study habit.

■ Languages
English · Tiếng Việt · Bahasa Indonesia. Japanese terms and romaji are always shown — because that's what you actually hear on site.

■ Note
This app is a learning aid. It does not guarantee passing any exam or specific outcome. Costs, pass rates, and rules are approximate and change — always confirm current requirements with the official bodies (JWES, the Immigration Services Agency, your supervising organization / 監理団体).

Build your welding skills and your career in Japan — one weld at a time.

---

## 3. リリースノート（What's new・テスター向け）

**EN**
> Now in Vietnamese and Indonesian! Plus: new International Certifications stage (AWS/CSWIP/ISO/ASME/IIW), Mock Exam, Weak Points analysis, Practice Drill, a Pre-weld/Post-weld Checklist, and faster startup.

**VI**
> Đã có tiếng Việt và tiếng Indonesia! Thêm: chặng Chứng chỉ Quốc tế mới, Thi thử, phân tích Điểm yếu, bài tập Tính toán, Danh mục kiểm tra trước/sau khi hàn, và khởi động nhanh hơn.

**ID**
> Kini dalam bahasa Vietnam dan Indonesia! Plus: stage Sertifikasi Internasional baru, Ujian Simulasi, analisis Titik Lemah, latihan Kalkulasi, Ceklis pra/pasca-las, dan startup lebih cepat.

---

## 4. スクリーンショット ショットリスト（携帯・8枚）

実機で撮影（1080×1920 以上）。上部に短いキャプション帯を載せると訴求UP。

| # | 画面 | 操作 | キャプション案 |
|---|---|---|---|
| 1 | タイトル + 🔥ストリーク | 起動画面 | "Learn welding for Japan — as a game" |
| 2 | Battle（クイズ）＋解説 | 1問回答 | "140 questions · real jobsite tips" |
| 3 | 言語スイッチ EN/VI/ID | ステージ選択画面上部 | "English · Tiếng Việt · Bahasa Indonesia" |
| 4 | 🎯 Mock Exam 結果 | 模試採点後 | "Timed mock exam + weak-point review" |
| 5 | 📚 Learn ▸ Jobsite Terms | 用語カード | "Understand your 親方 (boss)" |
| 6 | 📚 Learn ▸ Safety | 安全カード | "The safety basics that keep you alive" |
| 7 | 📚 Learn ▸ Checklist | チェック数個ON | "Pre-weld / post-weld checklist" |
| 8 | 🗺️ Career ▸ Visa route | ビザルート表示 | "Technical Intern → Specified Skilled Worker" |

（任意）フィーチャーグラフィック 1024×500：黒背景に「WELDON'S FORGE / Weld your future in Japan」＋マスコット＋EN·VI·ID の旗。

---

## 5. データセーフティ申告（Play Console）

- **カテゴリ:** 教育（Education）
- **収集データ:** なし。学習記録・ストリーク・チェックリストはすべて端末内 `localStorage` に保存。外部送信なし → 「データを収集も共有もしない」で申告可。
- **前提:** 現状のコードは端末内保存のみ・広告/解析SDKなし（`google-services.json` 未使用ならプッシュ通知も無効）。**広告や解析を後から入れたら申告を必ず見直す。**
- **プライバシーポリシー:** 公開URLを設定（EN版に未同梱なら、JP版の `public/privacy.html` と同形式で用意して `public/` に置く）。
- **対象年齢:** 全年齢想定。暴力・課金・UGCなし。
- **免責:** 詳細説明の「Note」で合格・結果を保証しない旨を明記済み。

---

## 6. 参考：現状スペック（説明文の数値の根拠）
- ステージ数: 7 ／ 総問題数: 140問（全問 EN/VI/ID）
- 機能: Battle / Mock Exam / Weak Points / Calc+Drill / Learn(Terms・Safety・Checklist) / Career(+Visa route) / Symbols / Weave / Daily streak
- 対応言語: English・Tiếng Việt・Bahasa Indonesia
- 初期JS: gzip 約149KB（翻訳データは別チャンク・非英語選択時のみ読込）
