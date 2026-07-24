// ============================================================
// WELDON'S FORGE (EN) — question translations (VI / ID)
// Keyed by question id. Option order MUST match questions_en.js
// exactly (answer index stays valid). Japanese terms are kept.
// First-pass translation — native review recommended.
// Progress: STAGE 1 ids 1–10 (batch 1).
// ============================================================
export const Q_I18N = {
  1: {
    vi: {
      q: "Bạn vừa đến một công trường hàn ở Nhật. Theo LUẬT, bạn cần chứng chỉ nào trước khi chạm vào máy hàn?",
      opts: [
        "Chứng chỉ An toàn Hàn hồ quang — 'Aaku-yosetsu tokubetsu-kyoiku' (アーク溶接特別教育)",
        "Giấy phép Thợ hàn Nồi hơi — cần thi quốc gia",
        "Chứng nhận Thợ hàn JIS — cần luyện tập nhiều tháng",
        "Chứng chỉ An toàn Đá mài — chỉ dùng cho máy mài",
      ],
      exp: "Luật Nhật (労働安全衛生法) yêu cầu Chứng chỉ An toàn Hàn hồ quang trước MỌI công việc hàn. Khóa 3 ngày, khoảng ¥20.000–40.000. Không có chứng chỉ = làm việc bất hợp pháp, không ngoại lệ. 🇯🇵 MẸO: Giữ bản gốc (原本) cẩn thận — nhiều công trường lấy bản photo ngày đầu. Mất chứng chỉ có thể xin cấp lại tại trung tâm đã cấp.",
    },
    id: {
      q: "Anda baru tiba di lokasi pengelasan di Jepang. Menurut HUKUM, sertifikat mana yang wajib sebelum menyentuh mesin las?",
      opts: [
        "Sertifikat Pelatihan Keselamatan Las Busur — 'Aaku-yosetsu tokubetsu-kyoiku' (アーク溶接特別教育)",
        "Lisensi Tukang Las Boiler — perlu ujian nasional",
        "Sertifikasi Tukang Las JIS — butuh latihan berbulan-bulan",
        "Sertifikat Keselamatan Batu Gerinda — hanya untuk gerinda",
      ],
      exp: "Hukum Jepang (労働安全衛生法) mewajibkan Sertifikat Pelatihan Keselamatan Las Busur sebelum SEMUA pekerjaan las. Kursus 3 hari, sekitar ¥20.000–40.000. Tanpa sertifikat = ilegal bekerja, tanpa pengecualian. 🇯🇵 TIPS: Simpan dokumen asli (原本) baik-baik — banyak lokasi meminta fotokopi di hari pertama. Sertifikat hilang bisa diterbitkan ulang oleh pusat pelatihan penerbit.",
    },
  },
  2: {
    vi: {
      q: "Người giám sát đưa bạn một máy mài. Chứng chỉ nào cho phép bạn dùng nó hợp pháp ở Nhật?",
      opts: [
        "Giấy phép Xe nâng",
        "An toàn Đá mài — 'Jiyu-kensakutoishi tokubetsu-kyoiku' (自由研削といし特別教育)",
        "Chỉ cần An toàn Hàn hồ quang là đủ",
        "An toàn Điện hạ áp cũng bao gồm máy mài",
      ],
      exp: "Chứng chỉ An toàn Đá mài (自由研削といし特別教育) là khóa riêng 1 ngày (~¥10.000), luật yêu cầu trước khi dùng máy mài góc/đĩa. Nhiều thực tập sinh quên cái này — đừng quên. 🇯🇵 MẸO: Trên công trường thường gọi là 'グラインダーの資格'. Khi giám sát hỏi 'shikaku aru?' (資格ある？ / có chứng chỉ không?), họ đang nói đến cái này.",
    },
    id: {
      q: "Supervisor memberi Anda gerinda. Sertifikat apa yang membolehkan pemakaiannya secara legal di Jepang?",
      opts: [
        "Lisensi Forklift",
        "Keselamatan Batu Gerinda — 'Jiyu-kensakutoishi tokubetsu-kyoiku' (自由研削といし特別教育)",
        "Cukup dengan Keselamatan Las Busur",
        "Keselamatan Listrik Tegangan Rendah juga mencakup gerinda",
      ],
      exp: "Pelatihan Keselamatan Batu Gerinda (自由研削といし特別教育) adalah kursus terpisah 1 hari (~¥10.000), diwajibkan hukum sebelum memakai gerinda sudut/cakram. Banyak peserta magang lupa yang ini — jangan. 🇯🇵 TIPS: Di lokasi sering disebut 'グラインダーの資格'. Jika supervisor bertanya 'shikaku aru?' (資格ある？ / punya sertifikat?), inilah yang dimaksud.",
    },
  },
  3: {
    vi: {
      q: "Bạn cần bật bảng điện của máy hàn. Ở Nhật, chứng chỉ bổ sung nào là bắt buộc theo luật cho việc này?",
      opts: [
        "An toàn Đá mài là đủ vì cùng bảng điều khiển",
        "An toàn Hàn hồ quang đã bao gồm việc này",
        "An toàn Điện hạ áp — 'Teiatsu-denki toriatsukai tokubetsu-kyoiku' (低圧電気取扱特別教育)",
        "Giấy phép Xe nâng",
      ],
      exp: "An toàn Điện hạ áp (低圧電気取扱特別教育) là bắt buộc để thao tác/chạm bảng điện máy hàn (AC ≤600V, DC ≤750V). 1–2 ngày, khoảng ¥12.000–22.000. 🇯🇵 MẸO: Từ 2023 khóa này bổ sung phần thực hành (実技) cho bảng điện có điện — hãy xác nhận trung tâm có cả 実技 lẫn 学科 (lý thuyết).",
    },
    id: {
      q: "Anda perlu menyalakan panel daya mesin las. Di Jepang, sertifikat tambahan apa yang diwajibkan hukum untuk ini?",
      opts: [
        "Keselamatan Batu Gerinda sudah cukup karena panel sama",
        "Keselamatan Las Busur sudah mencakup ini",
        "Keselamatan Listrik Tegangan Rendah — 'Teiatsu-denki toriatsukai tokubetsu-kyoiku' (低圧電気取扱特別教育)",
        "Lisensi Forklift",
      ],
      exp: "Keselamatan Listrik Tegangan Rendah (低圧電気取扱特別教育) wajib untuk mengoperasikan/menyentuh panel listrik mesin las (AC ≤600V, DC ≤750V). 1–2 hari, sekitar ¥12.000–22.000. 🇯🇵 TIPS: Sejak 2023 kursus ini menambah praktik (実技) untuk panel bertegangan — pastikan pusat pelatihan memuat 実技 dan 学科 (teori).",
    },
  },
  4: {
    vi: {
      q: "Một tấm thép nặng cần được cẩu nâng. Bạn buộc cáp vào tấm thép. Bạn cần chứng chỉ nào cho việc này?",
      opts: [
        "Giấy phép Xe nâng",
        "Chỉ cần Giấy phép Vận hành Cẩu",
        "Tamakake Tokubetsu-kyoiku (玉掛け特別教育) — đủ cho mọi tải trọng",
        "Chứng chỉ Móc tải — 'Tamakake gino-koshu' (玉掛け技能講習)",
      ],
      exp: "Tamakake (玉掛け) là việc móc tải vào móc cẩu để nâng. Tamakake Gino-koshu (玉掛け技能講習) mất 3 ngày (~¥20.000–40.000) và hợp pháp cho tải từ 1 tấn trở lên. Không có nó, bạn không được móc thép để nâng. 🇯🇵 MẸO: Dù chỉ là thợ hàn, hầu hết công trường vẫn mong bạn làm tamakake cơ bản để di chuyển thép của mình. Có sớm chứng chỉ này giúp bạn hữu ích và dễ được thuê hơn.",
    },
    id: {
      q: "Pelat baja berat perlu diangkat crane. Anda mengikat tali kawat ke pelat. Sertifikat apa yang Anda butuhkan?",
      opts: [
        "Lisensi Forklift",
        "Hanya Lisensi Operator Crane",
        "Tamakake Tokubetsu-kyoiku (玉掛け特別教育) — cukup untuk semua berat",
        "Sertifikasi Rigging — 'Tamakake gino-koshu' (玉掛け技能講習)",
      ],
      exp: "Tamakake (玉掛け) adalah mengaitkan beban ke kait crane untuk diangkat. Tamakake Gino-koshu (玉掛け技能講習) butuh 3 hari (~¥20.000–40.000) dan legal untuk beban 1 ton ke atas. Tanpa itu, Anda tidak boleh mengaitkan baja untuk diangkat. 🇯🇵 TIPS: Meski hanya tukang las, kebanyakan lokasi mengharapkan Anda melakukan tamakake dasar untuk memindahkan baja sendiri. Memiliki sertifikat ini lebih awal membuat Anda lebih berguna dan mudah dipekerjakan.",
    },
  },
  5: {
    vi: {
      q: "Sự khác biệt giữa 'tokubetsu-kyoiku' (特別教育) và 'gino-koshu' (技能講習) ở Nhật là gì?",
      opts: [
        "Tokubetsu-kyoiku = khóa an toàn (không thi). Gino-koshu = đào tạo kỹ năng có bài kiểm tra — phạm vi công việc rộng hơn",
        "Gino-koshu là tên cũ của tokubetsu-kyoiku, bị thay bằng luật năm 2010",
        "Chúng giống nhau, chỉ khác tên",
        "Tokubetsu-kyoiku chỉ dành cho quản lý",
      ],
      exp: "Khác biệt chính: Tokubetsu-kyoiku (特別教育) là buổi học an toàn — tham dự là đạt. Gino-koshu (技能講習) có đào tạo kỹ năng kèm bài kiểm tra đạt/trượt, và mở ra phạm vi công việc rộng hơn. Ví dụ: tamakake tokubetsu-kyoiku = dưới 1t; tamakake gino-koshu = từ 1t trở lên. 🇯🇵 MẸO: Nói 'tokubetsu-kyoiku wa arimasu' so với 'gino-koshu wa arimasu' báo hiệu năng lực khác hẳn nhau — hiểu sự khác biệt này gây ấn tượng với thợ hàn kỳ cựu.",
    },
    id: {
      q: "Apa perbedaan 'tokubetsu-kyoiku' (特別教育) dan 'gino-koshu' (技能講習) di Jepang?",
      opts: [
        "Tokubetsu-kyoiku = kursus keselamatan (tanpa ujian). Gino-koshu = pelatihan keterampilan dengan ujian — cakupan kerja lebih luas",
        "Gino-koshu nama lama tokubetsu-kyoiku, diganti hukum tahun 2010",
        "Keduanya sama, hanya beda nama",
        "Tokubetsu-kyoiku hanya untuk manajer",
      ],
      exp: "Perbedaan utama: Tokubetsu-kyoiku (特別教育) adalah ceramah keselamatan — hadir berarti lulus. Gino-koshu (技能講習) mencakup pelatihan keterampilan dengan ujian lulus/gagal, dan membuka cakupan kerja lebih luas. Contoh: tamakake tokubetsu-kyoiku = di bawah 1t; tamakake gino-koshu = 1t ke atas. 🇯🇵 TIPS: Mengatakan 'tokubetsu-kyoiku wa arimasu' vs 'gino-koshu wa arimasu' menandakan tingkat kemampuan yang sangat berbeda — memahami ini mengesankan tukang las berpengalaman.",
    },
  },
  6: {
    vi: {
      q: "Từ 2022, làm việc trên cao trên 2 mét ở Nhật yêu cầu khóa đào tạo an toàn nào?",
      opts: [
        "Chỉ Giấy phép Xe nâng người",
        "An toàn Dây đai Toàn thân — 'Furu-hanesu tokubetsu-kyoiku' (フルハーネス特別教育)",
        "Giấy phép Vận hành Cẩu",
        "An toàn Dây đai Bụng — 'Doo-beruto tokubetsu-kyoiku' (胴ベルト特別教育)",
      ],
      exp: "Từ tháng 1/2022, luật Nhật yêu cầu An toàn Dây đai Toàn thân (フルハーネス特別教育) khi làm việc trên cao từ 2 mét trở lên. Khóa 1 ngày, khoảng ¥10.000. Dây đai bụng (胴ベルト) truyền thống nay bị hạn chế — dây toàn thân là bắt buộc. 🇯🇵 MẸO: Công trường Nhật làm 'KY' (危険予知 / dự báo nguy hiểm) mỗi sáng. Việc trên cao luôn được nêu trong KY — hiểu フルハーネス thể hiện ý thức an toàn được giám sát tôn trọng.",
    },
    id: {
      q: "Sejak 2022, bekerja di ketinggian di atas 2 meter di Jepang memerlukan pelatihan keselamatan apa?",
      opts: [
        "Hanya Lisensi Aerial Work Platform",
        "Pelatihan Keselamatan Full Harness — 'Furu-hanesu tokubetsu-kyoiku' (フルハーネス特別教育)",
        "Lisensi Operator Crane",
        "Pelatihan Sabuk Badan — 'Doo-beruto tokubetsu-kyoiku' (胴ベルト特別教育)",
      ],
      exp: "Sejak Januari 2022, hukum Jepang mewajibkan Pelatihan Full Harness (フルハーネス特別教育) untuk bekerja di ketinggian 2 meter ke atas. Kursus 1 hari, sekitar ¥10.000. Sabuk badan (胴ベルト) tradisional kini dibatasi — full harness wajib. 🇯🇵 TIPS: Lokasi Jepang melakukan 'KY' (危険予知 / prediksi bahaya) tiap pagi. Kerja ketinggian selalu ditandai di KY — memahami フルハーネス menunjukkan kesadaran keselamatan yang dihargai supervisor.",
    },
  },
  7: {
    vi: {
      q: "Bạn muốn CẢ chứng chỉ 'Tamakake' (玉掛け) VÀ 'Kurēn' (クレーン). Cách khôn ngoan nhất là gì?",
      opts: [
        "Lấy Cẩu trước — rồi Tamakake",
        "Lấy Tamakake gino-koshu, sau đó nâng cấp thêm vận hành cẩu",
        "Học khóa combo (セット講習) — cùng kết quả trong 4–5 ngày, rẻ hơn (~¥70.000–80.000)",
        "Học riêng để đào tạo kỹ hơn",
      ],
      exp: "Nhiều trung tâm có khóa combo (玉掛け + クレーン運転特別教育セット). Bạn được cả hai chứng chỉ trong 4–5 ngày với giá tổng ưu đãi (~¥70.000–80.000). Khôn hơn nhiều so với học riêng. 🇯🇵 MẸO: Tìm '玉掛けクレーンセット講習' tại trung tâm địa phương (労働基準協会). Gọi trước — một số nơi giảm giá cho nhóm 3+ người cùng công ty.",
    },
    id: {
      q: "Anda ingin sertifikat 'Tamakake' (玉掛け) DAN 'Kurēn' (クレーン). Pendekatan tercerdas?",
      opts: [
        "Ambil Crane dulu — lalu Tamakake",
        "Ambil Tamakake gino-koshu, lalu tingkatkan untuk operasi crane",
        "Ambil kursus combo (セット講習) — hasil sama dalam 4–5 hari, lebih murah (~¥70.000–80.000)",
        "Ambil terpisah agar pelatihan lebih menyeluruh",
      ],
      exp: "Banyak pusat menawarkan kursus combo (玉掛け + クレーン運転特別教育セット). Anda dapat kedua sertifikat dalam 4–5 hari dengan harga total diskon (~¥70.000–80.000). Jauh lebih cerdas daripada terpisah. 🇯🇵 TIPS: Cari '玉掛けクレーンセット講習' di pusat pelatihan lokal (労働基準協会). Telepon dulu — beberapa memberi diskon untuk grup 3+ dari perusahaan sama.",
    },
  },
  8: {
    vi: {
      q: "Một xe nâng ở nhà máy có tải trọng tối đa 2 tấn. Bạn cần chứng chỉ nào để vận hành?",
      opts: [
        "Bằng lái xe nào cũng được",
        "An toàn Xe nâng (chỉ dưới 1t — tokubetsu-kyoiku)",
        "Giấy phép Vận hành Cẩu — cũng bao gồm xe nâng mọi tải trọng",
        "Kỹ năng Xe nâng — 'Fokku-rifuto gino-koshu' (フォークリフト運転技能講習) — bao gồm từ 1t trở lên",
      ],
      exp: "Với xe nâng từ 1 tấn trở lên, bạn cần Kỹ năng Xe nâng (技能講習), mất 3 ngày (~¥40.000–60.000). Tokubetsu-kyoiku (特別教育) chỉ bao dưới 1 tấn. Xe nâng 2 tấn = phải có gino-koshu. 🇯🇵 MẸO: Chứng chỉ xe nâng (フォークリフト免許) là kỹ năng thực dụng được săn đón nhất trên công trường Nhật. Có nó cùng chứng chỉ hàn có thể tăng đáng kể đơn giá ngày công.",
    },
    id: {
      q: "Forklift di pabrik berkapasitas maksimum 2 ton. Sertifikat apa yang Anda butuhkan untuk mengoperasikannya?",
      opts: [
        "SIM apa saja bisa",
        "Keselamatan Forklift (hanya di bawah 1t — tokubetsu-kyoiku)",
        "Lisensi Operator Crane — juga mencakup forklift segala tonase",
        "Pelatihan Keterampilan Forklift — 'Fokku-rifuto gino-koshu' (フォークリフト運転技能講習) — mencakup 1t ke atas",
      ],
      exp: "Untuk forklift 1 ton ke atas, Anda perlu Pelatihan Keterampilan Forklift (技能講習), 3 hari (~¥40.000–60.000). Tokubetsu-kyoiku (特別教育) hanya mencakup di bawah 1 ton. Forklift 2 ton = wajib gino-koshu. 🇯🇵 TIPS: Sertifikat forklift (フォークリフト免許) adalah salah satu keterampilan praktis paling dicari di lokasi Jepang. Memilikinya bersama sertifikat las bisa menaikkan tarif harian secara signifikan.",
    },
  },
  9: {
    vi: {
      q: "Biển nào KHÔNG cùng nghĩa với ba biển còn lại? 禁止 (Kinshi) / 立入禁止 (Tachiiri-kinshi) / 注意 (Chui) / 溶接禁止 (Yosetsu-kinshi)",
      opts: [
        "注意 (Chui) — 'Chú ý', biển cảnh báo, KHÔNG phải cấm như ba biển kia",
        "溶接禁止 (Yosetsu-kinshi) — 'Cấm hàn', một loại biển cấm",
        "禁止 (Kinshi) — nghĩa là 'Cấm', cùng gốc với hai biển 禁止 kia",
        "立入禁止 (Tachiiri-kinshi) — 'Cấm vào', một loại biển cấm",
      ],
      exp: "禁止 (Kinshi) = CẤM — dùng trong 立入禁止 (cấm vào) và 溶接禁止 (cấm hàn), đều bảo bạn KHÔNG được làm. 注意 (Chui) = CHÚ Ý, một nhóm khác — nhắc cẩn thận nhưng không cấm. Nhầm lẫn rất quan trọng: bỏ qua biển 禁止 là vi phạm, còn 注意 chỉ là hãy thận trọng. 🇯🇵 MẸO: Các chữ an toàn khác: 危険 (kiken)=Nguy hiểm, 必須 (hissu)=Bắt buộc, 禁煙 (kin-en)=Cấm hút thuốc. Hãy nhớ — giám sát mong bạn theo biển dù chưa đọc được tiếng Nhật.",
    },
    id: {
      q: "Tanda mana yang TIDAK sama maknanya dengan tiga lainnya? 禁止 (Kinshi) / 立入禁止 (Tachiiri-kinshi) / 注意 (Chui) / 溶接禁止 (Yosetsu-kinshi)",
      opts: [
        "注意 (Chui) — 'Hati-hati', tanda peringatan, BUKAN larangan seperti tiga lainnya",
        "溶接禁止 (Yosetsu-kinshi) — 'Dilarang mengelas', jenis tanda larangan",
        "禁止 (Kinshi) — berarti 'Dilarang', akar sama dengan dua tanda 禁止 lainnya",
        "立入禁止 (Tachiiri-kinshi) — 'Dilarang masuk', jenis tanda larangan",
      ],
      exp: "禁止 (Kinshi) = DILARANG — dipakai di 立入禁止 (dilarang masuk) dan 溶接禁止 (dilarang mengelas), keduanya melarang. 注意 (Chui) = HATI-HATI, kategori berbeda — mengingatkan berhati-hati tapi tidak melarang. Salah paham ini penting: mengabaikan tanda 禁止 adalah pelanggaran, sedangkan 注意 hanya berarti lanjut dengan hati-hati. 🇯🇵 TIPS: Kanji keselamatan lain: 危険 (kiken)=Bahaya, 必須 (hissu)=Wajib, 禁煙 (kin-en)=Dilarang merokok. Hafalkan — supervisor mengharapkan Anda mengikuti tanda meski belum bisa baca Jepang.",
    },
  },
  10: {
    vi: {
      q: "'Sanso-ketsubo' (酸素欠乏) là gì và vì sao nguy hiểm cho thợ hàn?",
      opts: [
        "Thừa oxy — gây nguy cơ cháy",
        "Thiếu oxy — khí bảo vệ có thể đẩy oxy trong không gian kín, gây bất tỉnh và tử vong",
        "Khí CO — chỉ nguy hiểm ngoài trời",
        "Một loại khuyết tật mối hàn",
      ],
      exp: "Sanso-ketsubo (酸素欠乏) = Thiếu Oxy. Trong không gian kín (bồn, hầm, phòng kín), khí bảo vệ (CO₂, Argon) có thể đẩy oxy ra. Dưới 18% O₂ = nguy hiểm. Dưới 16% = ngất. Hãy đo oxy TRƯỚC khi vào bất kỳ khu hàn kín nào. 🇯🇵 MẸO: CO₂ nặng gấp 1,5 lần và Argon 1,4 lần không khí — chúng chìm và tụ vô hình dưới đáy. Người ngất trong bồn vì thiếu oxy KHÔNG được cứu bởi người vào mà không có thiết bị thở — Nhật đã có nhiều ca tử vong kiểu này. Gọi 119 và chờ đội cứu hộ chuyên môn.",
    },
    id: {
      q: "Apa itu 'Sanso-ketsubo' (酸素欠乏) dan mengapa berbahaya bagi tukang las?",
      opts: [
        "Kelebihan oksigen — menimbulkan risiko kebakaran",
        "Kekurangan oksigen — gas pelindung dapat menggeser oksigen di ruang tertutup, menyebabkan pingsan dan kematian",
        "Karbon monoksida — hanya berbahaya di luar ruangan",
        "Sejenis cacat las",
      ],
      exp: "Sanso-ketsubo (酸素欠乏) = Kekurangan Oksigen. Di ruang tertutup (tangki, palka, ruang tertutup), gas pelindung (CO₂, Argon) bisa mendorong keluar oksigen. Di bawah 18% O₂ = bahaya. Di bawah 16% = pingsan. Ukur kadar oksigen SEBELUM masuk area las tertutup mana pun. 🇯🇵 TIPS: CO₂ 1,5× dan Argon 1,4× lebih berat dari udara — keduanya turun dan menumpuk tak terlihat di dasar. Pekerja yang pingsan dalam tangki karena kekurangan oksigen TIDAK boleh ditolong oleh orang yang masuk tanpa alat bantu napas — Jepang punya banyak kematian seperti ini. Hubungi 119 dan tunggu tim penyelamat khusus.",
    },
  },
  11: {
    vi: {
      q: "'Yosetsu-hyumu' (溶接ヒューム) là gì và bạn cần PPE nào?",
      opts: [
        "Tiếng ồn hàn — chỉ cần bảo vệ tai",
        "Tia lửa hàn — chỉ cần găng tay da",
        "Khói hàn — hạt kim loại nhỏ trong khói; cần khẩu trang chống bụi (防じんマスク) đạt chuẩn cho khói hàn",
        "Khí bảo vệ — chỉ CO₂ nguy hiểm",
      ],
      exp: "Khói hàn (溶接ヒューム) chứa hạt kim loại mịn gồm mangan, crom và các hợp chất khác. Phơi nhiễm lâu dài gây bệnh phổi (じん肺). Luật Nhật yêu cầu khẩu trang chống bụi (防じんマスク) đạt chuẩn cho khói hàn. Luôn thông gió khu làm việc. 🇯🇵 MẸO: Từ 2021, luật Nhật (溶接ヒューム規制) xếp khói hàn là chất hóa học đặc định. Chủ lao động phải cung cấp khám sức khỏe (健康診断) và lưu hồ sơ phơi nhiễm. Nếu công ty không làm, họ vi phạm luật — bạn có quyền yêu cầu.",
    },
    id: {
      q: "Apa itu 'Yosetsu-hyumu' (溶接ヒューム) dan APD apa yang Anda perlukan?",
      opts: [
        "Kebisingan las — hanya perlu pelindung telinga",
        "Percikan las — hanya perlu sarung tangan kulit",
        "Asap las — partikel logam halus dalam asap; perlu respirator debu (防じんマスク) berperingkat asap las",
        "Gas pelindung — hanya CO₂ yang berbahaya",
      ],
      exp: "Asap las (溶接ヒューム) mengandung partikel logam halus termasuk mangan, krom, dan senyawa lain. Paparan jangka panjang menyebabkan penyakit paru (じん肺). Hukum Jepang mewajibkan respirator debu (防じんマスク) berperingkat untuk asap las. Selalu beri ventilasi area kerja. 🇯🇵 TIPS: Sejak 2021, hukum Jepang (溶接ヒューム規制) menggolongkan asap las sebagai bahan kimia tertentu. Pemberi kerja wajib menyediakan pemeriksaan kesehatan (健康診断) dan menyimpan catatan paparan. Jika perusahaan tidak, mereka melanggar hukum — Anda berhak memintanya.",
    },
  },
  12: {
    vi: {
      q: "Kính mũ hàn số che sáng (遮光番号) nào được khuyến nghị cho hàn bán tự động khoảng 150A?",
      opts: [
        "Số #3–4 — mức kính râm thường",
        "Số #16 trở lên — bảo vệ tối đa",
        "Số #1 — kính gần như trong suốt",
        "Số #10–11 — chuẩn cho hàn hồ quang 100–200A",
      ],
      exp: "Với hàn hồ quang 100–200A, JIS khuyến nghị số che sáng #10–11 (遮光番号10〜11). Dòng càng cao, số càng lớn. Mũ hàn không có kính che đúng có thể gây tổn thương mắt nghiêm trọng (đau mắt hàn / 電気性眼炎). Không bao giờ nhìn hồ quang mà không bảo vệ đúng. 🇯🇵 MẸO: Triệu chứng đau mắt hàn (電気性眼炎) xuất hiện 6–12 giờ SAU khi phơi nhiễm — trên công trường gọi là '目がやける'. Nếu sáng hôm sau mắt cộm hoặc đau, đi khám mắt ngay. Chữa sớm rất đơn giản.",
    },
    id: {
      q: "Nomor shade lensa topeng las (遮光番号) berapa yang disarankan untuk las semi-otomatis sekitar 150A?",
      opts: [
        "Shade #3–4 — setara kacamata hitam biasa",
        "Shade #16 atau lebih — perlindungan maksimum",
        "Shade #1 — lensa hampir bening",
        "Shade #10–11 — standar untuk las busur 100–200A",
      ],
      exp: "Untuk las busur 100–200A, JIS menyarankan shade #10–11 (遮光番号10〜11). Semakin tinggi arus, semakin tinggi shade. Topeng las tanpa kaca shade yang benar bisa merusak mata serius (mata las / 電気性眼炎). Jangan pernah melihat busur tanpa pelindung tepat. 🇯🇵 TIPS: Gejala mata las (電気性眼炎) muncul 6–12 jam SETELAH paparan — di lokasi disebut '目がやける'. Jika pagi berikutnya mata terasa berpasir atau nyeri, segera ke dokter mata. Pengobatan mudah bila cepat ditangani.",
    },
  },
  13: {
    vi: {
      q: "Một thợ hàn bị điện giật. Hành động ĐẦU TIÊN là gì?",
      opts: [
        "TẮT nguồn trước — rồi di chuyển nạn nhân an toàn — rồi gọi cứu trợ",
        "Đeo găng cao su khô rồi kéo nạn nhân ra khi nguồn vẫn bật",
        "Đổ nước lên nạn nhân ngay",
        "Kéo nạn nhân ra bằng tay trần",
      ],
      exp: "Sơ cứu điện giật: 1) CẮT NGUỒN — tắt máy hoặc cầu dao. 2) KHÔNG chạm nạn nhân khi còn điện — bạn cũng sẽ bị giật. 3) Đưa nạn nhân đến nơi an toàn. 4) Gọi 119 (cấp cứu Nhật). 5) Hô hấp nhân tạo nếu được đào tạo. Tay ướt hoặc nền ướt làm tăng mạnh nguy cơ điện giật. 🇯🇵 MẸO: Số cấp cứu Nhật là 119 (cứu hỏa/cứu thương), không phải 911. Khi gọi: 'Jiko desu, hito ga taoreteimasu' (事故です、人が倒れています) = 'Có tai nạn, có người ngã'. Cho địa chỉ và số điện thoại của bạn.",
    },
    id: {
      q: "Seorang tukang las tersengat listrik. Tindakan PERTAMA apa yang harus dilakukan?",
      opts: [
        "MATIKAN sumber daya dulu — lalu pindahkan korban dengan aman — lalu panggil bantuan",
        "Pakai sarung tangan karet kering lalu tarik korban saat daya masih menyala",
        "Siram korban dengan air segera",
        "Tarik korban dengan tangan telanjang",
      ],
      exp: "Pertolongan pertama sengatan listrik: 1) PUTUS DAYA — matikan mesin atau breaker. 2) JANGAN sentuh korban saat daya menyala — Anda akan ikut tersengat. 3) Pindahkan korban ke tempat aman. 4) Hubungi 119 (darurat Jepang). 5) Lakukan CPR bila terlatih. Tangan atau lantai basah sangat menaikkan risiko sengatan. 🇯🇵 TIPS: Nomor darurat Jepang 119 (pemadam/ambulans), bukan 911. Saat menelepon: 'Jiko desu, hito ga taoreteimasu' (事故です、人が倒れています) = 'Ada kecelakaan, seseorang pingsan'. Sebutkan alamat dan nomor telepon Anda.",
    },
  },
  14: {
    vi: {
      q: "Trước khi hàn trong bồn hoặc không gian kín, bạn phải kiểm tra ĐẦU TIÊN điều gì?",
      opts: [
        "Kích cỡ cuộn dây hàn",
        "Nồng độ oxy (酸素濃度) VÀ mức khí độc hại — rồi đảm bảo thông gió",
        "Số sê-ri của máy hàn",
        "Nhãn hiệu khí bảo vệ",
      ],
      exp: "Trước khi vào bất kỳ không gian kín nào ở Nhật, bạn PHẢI đo nồng độ oxy (酸素濃度) — phải trên 18%. Cũng kiểm tra CO, hydro và các khí nguy hiểm khác. Bố trí thông gió cưỡng bức. Ở Nhật, điều này thuộc Chứng chỉ Công việc Nguy hiểm Thiếu Oxy (酸素欠乏危険作業特別教育). 🇯🇵 MẸO: Chứng chỉ 酸欠 (sanso-ketsubo) là khóa 1 ngày (~¥8.000–12.000) thường bị bỏ qua. Nếu làm ở đóng tàu, chế tạo bồn, hay kết cấu thép kín, chứng chỉ này là thiết yếu và được mong đợi.",
    },
    id: {
      q: "Sebelum mengelas di dalam tangki atau ruang tertutup, apa yang HARUS diperiksa PERTAMA?",
      opts: [
        "Ukuran gulungan kawat",
        "Konsentrasi oksigen (酸素濃度) DAN kadar gas berbahaya — lalu pastikan ventilasi",
        "Nomor seri mesin las",
        "Merek gas pelindung",
      ],
      exp: "Sebelum masuk ruang tertutup mana pun di Jepang, Anda WAJIB mengukur konsentrasi oksigen (酸素濃度) — harus di atas 18%. Periksa juga CO, hidrogen, dan gas berbahaya lain. Siapkan ventilasi paksa. Di Jepang, ini tercakup dalam Sertifikat Kerja Bahaya Kekurangan Oksigen (酸素欠乏危険作業特別教育). 🇯🇵 TIPS: Sertifikat 酸欠 (sanso-ketsubo) adalah kursus 1 hari (~¥8.000–12.000) yang sering diabaikan. Jika Anda bekerja di galangan kapal, fabrikasi tangki, atau struktur baja tertutup, sertifikat ini penting dan diharapkan.",
    },
  },
  15: {
    vi: {
      q: "Giày an toàn (安全靴) của bạn có dấu JIS bên trong, nhưng ghi 'JIS T 8147' thay vì 'JIS T 8101'. Bạn nên làm gì?",
      opts: [
        "Xin giám sát đổi sang đôi có dấu JIS T 8113",
        "Cứ mang bình thường — cả JIS T 8101 và JIS T 8147 đều là giày mũi thép, nên đôi nào cũng được",
        "Từ chối — JIS T 8147 là chuẩn cho kính bảo hộ, không phải giày, nên đôi này không phải giày an toàn được chứng nhận đúng",
        "Chỉ mang khi mài, không bao giờ khi hàn",
      ],
      exp: "JIS T 8101 là chuẩn cho giày an toàn (安全靴). JIS T 8147 thực ra là chuẩn cho kính bảo hộ (保護めがね), còn JIS T 8113 là găng tay hàn — không cái nào là chuẩn giày. Giày đóng dấu sai số JIS thì không được chứng nhận đúng, dù trông giống hệt. Nhiều giày giả/nhãn sai lọt qua nếu bạn không kiểm tra số. 🇯🇵 MẸO: Khi mua, tìm đúng 'JIS T 8101' trên nhãn. Giày rẻ không có dấu JIS đúng sẽ bị từ chối ở cổng vào — hãy đầu tư đôi tốt từ Workman (ワークマン) hoặc Midori Anzen (ミドリ安全).",
    },
    id: {
      q: "Sepatu safety (安全靴) Anda ada tanda JIS di dalam, tapi tertulis 'JIS T 8147' bukan 'JIS T 8101'. Apa yang harus dilakukan?",
      opts: [
        "Minta supervisor mengganti dengan yang bertanda JIS T 8113",
        "Pakai saja — JIS T 8101 dan JIS T 8147 sama-sama sepatu ujung baja, jadi mana pun boleh",
        "Tolak — JIS T 8147 adalah standar kacamata pelindung, bukan alas kaki, jadi sepatu ini bukan sepatu safety bersertifikat yang benar",
        "Pakai hanya untuk menggerinda, jangan untuk mengelas",
      ],
      exp: "JIS T 8101 adalah standar sepatu safety (安全靴). JIS T 8147 sebenarnya untuk kacamata pelindung (保護めがね), dan JIS T 8113 untuk sarung tangan las — tak satu pun standar alas kaki. Sepatu bertanda nomor JIS salah tidak bersertifikat benar, meski terlihat identik. Banyak sepatu palsu/salah label lolos jika Anda tidak memeriksa nomornya. 🇯🇵 TIPS: Saat membeli, cari khusus 'JIS T 8101' pada label. Sepatu murah tanpa tanda JIS yang benar akan ditolak di gerbang — investasikan sepasang bagus dari Workman (ワークマン) atau Midori Anzen (ミドリ安全).",
    },
  },
  16: {
    vi: {
      q: "Chứng chỉ nào thường KHÔNG bắt buộc trên một công trường hàn tiêu chuẩn ở Nhật?",
      opts: [
        "An toàn Điện hạ áp (低圧電気取扱特別教育)",
        "An toàn Hàn hồ quang (アーク溶接特別教育)",
        "An toàn Đá mài (自由研削といし特別教育)",
        "Bằng lái xe để vận hành thiết bị hàn",
      ],
      exp: "Bằng lái xe thông thường KHÔNG cho phép bạn vận hành thiết bị hàn, cẩu hay xe nâng trên công trường Nhật. Mỗi thiết bị có yêu cầu đào tạo an toàn/giấy phép riêng theo luật lao động Nhật. 🇯🇵 MẸO: Việc thực thi luật tại công trường qua 定期自主検査 (tự kiểm tra định kỳ) và thanh tra ngẫu nhiên của cơ quan lao động (労働基準監督署). Nếu bị phát hiện vận hành thiết bị mà không có chứng chỉ đúng, cả bạn LẪN chủ lao động đều bị phạt — không chỉ là cảnh cáo.",
    },
    id: {
      q: "Sertifikat mana yang biasanya TIDAK diwajibkan di lokasi pengelasan standar di Jepang?",
      opts: [
        "Keselamatan Listrik Tegangan Rendah (低圧電気取扱特別教育)",
        "Keselamatan Las Busur (アーク溶接特別教育)",
        "Keselamatan Batu Gerinda (自由研削といし特別教育)",
        "SIM untuk mengoperasikan peralatan las",
      ],
      exp: "SIM biasa TIDAK memenuhi syarat untuk mengoperasikan peralatan las, crane, atau forklift di lokasi kerja Jepang. Setiap peralatan punya syarat pelatihan/lisensi keselamatan tersendiri menurut hukum ketenagakerjaan Jepang. 🇯🇵 TIPS: Penegakan hukum di lokasi lewat 定期自主検査 (inspeksi mandiri berkala) dan audit acak kantor standar tenaga kerja (労働基準監督署). Jika ketahuan mengoperasikan alat tanpa sertifikat yang benar, Anda DAN pemberi kerja kena sanksi hukum — bukan sekadar peringatan.",
    },
  },
  17: {
    vi: {
      q: "Phát biểu nào về thông gió khi hàn ở Nhật là KHÔNG đúng?",
      opts: [
        "Mở một cửa sổ gần đó luôn đủ để thông gió cho mọi việc hàn trong nhà, bất kể kích thước phòng",
        "Từ sửa đổi luật 2021, thiết bị hút khói không còn là tùy chọn ở khu vực kín",
        "Hút cục bộ (局所排気装置) thu khói tại nguồn và là cách hiệu quả nhất",
        "Trong không gian kín, thông gió cưỡng bức là bắt buộc theo luật trước và trong khi hàn",
      ],
      exp: "Mở cửa sổ KHÔNG tự động là đủ — mức thông gió tùy vào kích thước phòng, hướng gió, lượng khói hàn và mức độ kín. Một cửa sổ có thể vô dụng trong nhà xưởng lớn không có gió lùa, hoặc trong bồn kín không có cửa sổ. Luật Nhật yêu cầu hiệu suất thông gió đo được thực tế (hút cục bộ hoặc cưỡng bức), không chỉ 'có mở cửa sổ'. 🇯🇵 MẸO: Bộ hút khói gắn ngay súng hàn gọi là thiết bị '溶接ヒューム対策'. Từ thay đổi luật 2021, dùng nó không còn là tùy chọn ở khu kín — giám sát sẽ ngăn bạn hàn nếu thiếu.",
    },
    id: {
      q: "Pernyataan mana tentang ventilasi las di Jepang yang TIDAK benar?",
      opts: [
        "Membuka jendela di dekatnya selalu cukup untuk ventilasi kerja las dalam ruangan apa pun, tanpa memandang ukuran ruang",
        "Sejak revisi hukum 2021, alat penyedot asap tidak lagi opsional di area tertutup",
        "Ventilasi buang lokal (局所排気装置) menangkap asap di sumbernya dan paling efektif",
        "Di ruang tertutup, ventilasi paksa wajib secara hukum sebelum dan selama pengelasan",
      ],
      exp: "Membuka jendela TIDAK otomatis cukup — kecukupan ventilasi bergantung pada ukuran ruang, arah aliran udara, jumlah asap las, dan apakah ruang tertutup. Satu jendela bisa tak berguna di hanggar besar tanpa angin silang, atau di tangki tertutup tanpa jendela. Hukum Jepang mensyaratkan kinerja ventilasi terukur nyata (buang lokal atau paksa), bukan sekadar 'jendela terbuka'. 🇯🇵 TIPS: Penyedot asap yang menempel langsung pada gun las disebut alat '溶接ヒューム対策'. Sejak perubahan hukum 2021, pemakaiannya tidak lagi opsional di area tertutup — supervisor akan menghentikan Anda mengelas tanpanya.",
    },
  },
  18: {
    vi: {
      q: "Bạn sắp hàn trên đầu (kachiage) và với lấy tạp dề da 'Maekake' (前掛け), nhưng nó biến mất. Đồng nghiệp đưa 'Ude-kabaa' (腕カバー / ống tay) và nói nó che cùng mối nguy. Anh ấy đúng không?",
      opts: [
        "Đúng — ude-kabaa và maekake che cùng vùng, nên chỉ một cái là đủ",
        "Không — ude-kabaa chỉ che cẳng tay, còn maekake che thân và chân khỏi văng và nhiệt bức xạ. Chúng bổ sung, không thay thế nhau",
        "Không — ude-kabaa chỉ dùng khi mài, không bao giờ khi hàn",
        "Đúng, nhưng chỉ khi ude-kabaa cùng loại da với maekake",
      ],
      exp: "Maekake (前掛け) = tạp dề da che thân và chân. Ude-kabaa (腕カバー) = ống tay chỉ che cẳng tay. Chúng bảo vệ các vùng cơ thể KHÁC nhau khỏi cùng mối nguy (văng, tia lửa, nhiệt bức xạ) — cái này không thay cái kia. Để bảo vệ toàn thân khi hàn trên đầu (kachiage), cần cả hai. 🇯🇵 MẸO: Tạp dề da tốt ở cửa hàng vật tư hàn (溶接用品店) dùng được 3–5 năm. Khi mua, chọn da dày (牛革 / da bò là tốt nhất) và móc cài bằng thép, không phải nhựa — nhựa chảy vì văng.",
    },
    id: {
      q: "Anda hendak mengelas overhead (kachiage) dan meraih celemek kulit 'Maekake' (前掛け), tapi hilang. Rekan menawarkan 'Ude-kabaa' (腕カバー / pelindung lengan), katanya menutup bahaya yang sama. Benarkah?",
      opts: [
        "Ya — ude-kabaa dan maekake melindungi area sama, jadi salah satu saja cukup",
        "Tidak — ude-kabaa hanya menutup lengan bawah, sedangkan maekake menutup badan dan kaki dari percikan dan panas radiasi. Keduanya saling melengkapi, bukan pengganti",
        "Tidak — ude-kabaa hanya untuk menggerinda, tak pernah untuk mengelas",
        "Ya, tapi hanya jika ude-kabaa dari kulit sekelas maekake",
      ],
      exp: "Maekake (前掛け) = celemek kulit yang menutup badan dan kaki. Ude-kabaa (腕カバー) = pelindung lengan yang hanya menutup lengan bawah. Keduanya melindungi area tubuh BERBEDA dari bahaya sama (percikan, bunga api, panas radiasi) — satu tidak menggantikan yang lain. Untuk perlindungan seluruh tubuh saat las overhead (kachiage), keduanya diperlukan. 🇯🇵 TIPS: Celemek kulit berkualitas di toko perlengkapan las (溶接用品店) tahan 3–5 tahun. Saat membeli, pastikan kulitnya tebal (牛革 / kulit sapi terbaik) dan kait pengencangnya baja, bukan plastik — plastik meleleh kena percikan.",
    },
  },
  19: {
    vi: {
      q: "Với chứng chỉ 'Tamakake' (玉掛け), phạm vi công việc khác nhau thế nào giữa bản 'tokubetsu-kyoiku' (特別教育) và 'gino-koshu' (技能講習)?",
      opts: [
        "Gino-koshu bao dưới 1 tấn, tokubetsu-kyoiku bao từ 1 tấn trở lên",
        "Cả hai bao mọi tải trọng — không khác",
        "Tokubetsu-kyoiku chỉ bao tải dưới 1 tấn. Gino-koshu bao từ 1 tấn trở lên (mọi tải)",
        "Tokubetsu-kyoiku chỉ dành cho lao động chính thức",
      ],
      exp: "Chứng chỉ móc tải Tamakake (玉掛け): Tokubetsu-kyoiku (特別教育) = chỉ tải dưới 1 tấn (1–2 ngày, ~¥12.000–15.000). Gino-koshu (技能講習) = tải từ 1 tấn trở lên, bao mọi tải (3 ngày, ~¥20.000–40.000). Hầu hết công trường cần bản Gino-koshu. 🇯🇵 MẸO: Bài thi thực hành Tamakake Gino-koshu gồm buộc khối thép và ra hiệu tay cho người vận hành cẩu. Học 4 tín hiệu tay cơ bản (nâng, hạ, trái, phải) trước ngày thi — trung tâm mong bạn thực hiện tự tin.",
    },
    id: {
      q: "Untuk sertifikat 'Tamakake' (玉掛け), apa beda cakupan kerja antara versi 'tokubetsu-kyoiku' (特別教育) dan 'gino-koshu' (技能講習)?",
      opts: [
        "Gino-koshu mencakup di bawah 1 ton, tokubetsu-kyoiku 1 ton ke atas",
        "Keduanya mencakup semua berat — tidak ada beda",
        "Tokubetsu-kyoiku hanya mencakup beban di bawah 1 ton. Gino-koshu mencakup 1 ton ke atas (semua berat)",
        "Tokubetsu-kyoiku hanya untuk pekerja tetap",
      ],
      exp: "Sertifikat rigging Tamakake (玉掛け): Tokubetsu-kyoiku (特別教育) = hanya beban di bawah 1 ton (1–2 hari, ~¥12.000–15.000). Gino-koshu (技能講習) = beban 1 ton ke atas, mencakup semua berat (3 hari, ~¥20.000–40.000). Kebanyakan lokasi membutuhkan versi Gino-koshu. 🇯🇵 TIPS: Ujian praktik Tamakake Gino-koshu mencakup mengikat balok baja dan memberi aba-aba tangan ke operator crane. Pelajari 4 aba-aba dasar (naik, turun, kiri, kanan) sebelum hari ujian — pusat pelatihan mengharapkan Anda memperagakannya dengan percaya diri.",
    },
  },
  20: {
    vi: {
      q: "Tổng chi phí và thời gian gần đúng để lấy gói giấy phép hàn cơ bản ở Nhật là bao nhiêu? (Hàn hồ quang + Đá mài + Điện hạ áp)",
      opts: [
        "Khoảng 5 ngày / tổng ¥42.000–72.000 — sau đó bạn được phép hàn, mài và thao tác bảng điện hợp pháp",
        "1 năm / tổng ¥200.000",
        "1 ngày / tổng ¥5.000",
        "3 tháng / tổng ¥500.000",
      ],
      exp: "Gói giấy phép hàn cơ bản: Hàn hồ quang (3 ngày, ¥20.000–40.000) + Đá mài (1 ngày, ¥10.000) + Điện hạ áp (1 ngày, ¥12.000–22.000) = khoảng 5 ngày và tổng ¥42.000–72.000. Sau đó bạn được phép hàn, mài và xử lý bảng điện ở Nhật. 🇯🇵 MẸO: Một số chủ lao động trả tiền các khóa này — hãy hỏi 'shikaku shutoku no hiyou wa kaisha ga haraimasu ka?' (資格取得の費用は会社が払いますか？). Trong thị trường lao động khan hiếm, nhiều nơi sẽ đồng ý.",
    },
    id: {
      q: "Berapa perkiraan total biaya dan waktu untuk paket izin las dasar di Jepang? (Las Busur + Batu Gerinda + Listrik Tegangan Rendah)",
      opts: [
        "Sekitar 5 hari / total ¥42.000–72.000 — lalu Anda boleh mengelas, menggerinda, dan mengoperasikan panel daya secara legal",
        "1 tahun / total ¥200.000",
        "1 hari / total ¥5.000",
        "3 bulan / total ¥500.000",
      ],
      exp: "Paket izin las dasar: Las Busur (3 hari, ¥20.000–40.000) + Batu Gerinda (1 hari, ¥10.000) + Listrik Tegangan Rendah (1 hari, ¥12.000–22.000) = sekitar 5 hari dan total ¥42.000–72.000. Setelah itu Anda legal untuk mengelas, menggerinda, dan menangani panel daya di Jepang. 🇯🇵 TIPS: Beberapa pemberi kerja membayar kursus ini — tanyakan 'shikaku shutoku no hiyou wa kaisha ga haraimasu ka?' (資格取得の費用は会社が払いますか？). Di pasar tenaga kerja ketat, banyak yang akan setuju.",
    },
  },
  21: {
    vi: {
      q: "Trước khi vào bồn để hàn, luật Nhật yêu cầu đo nồng độ oxy (酸素濃度). Mức an toàn TỐI THIỂU là bao nhiêu?",
      opts: [
        "Đúng 21% oxy — bằng không khí phòng là mức tối thiểu",
        "10% oxy — người có thể làm việc ngắn ở mức này",
        "15% oxy trở lên — có thể thở bình thường",
        "18% oxy trở lên — dưới mức này là vùng nguy hiểm 'Sanso-ketsubo' (酸素欠乏)",
      ],
      exp: "Luật Nhật (酸素欠乏危険作業特別教育) định nghĩa 酸素欠乏 (thiếu oxy) là O₂ dưới 18%. Ở 16% = lú lẫn và yếu. Ở 12% = bất tỉnh. Ở 6% = tử vong trong vài phút. LUÔN đo O₂ trước khi vào. Khí bảo vệ CO₂ và Argon nặng hơn không khí và tích tụ ở bồn, hố, chỗ thấp. 🇯🇵 MẸO: Ở xưởng đóng tàu Nhật, số đo oxy được ghi vào 作業前点検表 (bảng kiểm tra trước làm việc) trước mỗi lần vào không gian kín — giám sát sẽ yêu cầu xem.",
    },
    id: {
      q: "Sebelum masuk tangki untuk mengelas, hukum Jepang mewajibkan mengukur konsentrasi oksigen (酸素濃度). Berapa level aman MINIMUM?",
      opts: [
        "Tepat 21% oksigen — persentase udara ruangan adalah minimum",
        "10% oksigen — manusia bisa bekerja sebentar di level ini",
        "15% oksigen ke atas — pernapasan normal masih mungkin",
        "18% oksigen ke atas — di bawah ini adalah zona bahaya 'Sanso-ketsubo' (酸素欠乏)",
      ],
      exp: "Hukum Jepang (酸素欠乏危険作業特別教育) mendefinisikan 酸素欠乏 (kekurangan oksigen) sebagai O₂ di bawah 18%. Pada 16% = bingung dan lemah. Pada 12% = pingsan. Pada 6% = kematian dalam beberapa menit. SELALU ukur O₂ sebelum masuk. Gas pelindung CO₂ dan Argon lebih berat dari udara dan menumpuk di tangki, lubang, dan tempat rendah. 🇯🇵 TIPS: Di galangan Jepang, angka meter oksigen dicatat di 作業前点検表 (lembar inspeksi pra-kerja) sebelum tiap masuk ruang tertutup — supervisor akan meminta melihatnya.",
    },
  },
  22: {
    vi: {
      q: "Bạn được giao 酸素欠乏危険作業 (công việc nguy hiểm thiếu oxy). Cấu hình đội tối thiểu theo luật là gì?",
      opts: [
        "Ít nhất một người BÊN TRONG cộng một 監視人 (Kanshi-nin / người giám sát) BÊN NGOÀI theo dõi và có thể gọi cứu trợ",
        "Một người bên trong là ổn miễn là báo cáo qua bộ đàm mỗi 30 phút",
        "Một thợ hàn làm một mình là ổn — tiết kiệm thời gian",
        "Chỉ hai thợ hàn bên trong không gian kín",
      ],
      exp: "Luật Nhật (労働安全衛生規則 第585条) yêu cầu một 監視人 (Kanshi-nin) đứng BÊN NGOÀI không gian kín suốt thời gian làm công việc thiếu oxy. Người giám sát theo dõi thợ, canh giờ, giữ thông tin liên lạc khẩn cấp và sẵn sàng gọi 119. KHÔNG BAO GIỜ vào không gian kín một mình — đây là quy tắc bất di bất dịch. 🇯🇵 MẸO: 監視人 phải ở vị trí và không được rời đi làm việc khác — đây là yêu cầu pháp lý nghiêm ngặt, không chỉ là khuyến nghị.",
    },
    id: {
      q: "Anda ditugaskan 酸素欠乏危険作業 (kerja bahaya kekurangan oksigen). Susunan tim minimum yang diwajibkan hukum?",
      opts: [
        "Minimal satu pekerja DI DALAM plus seorang 監視人 (Kanshi-nin / pemantau siaga) DI LUAR yang mengawasi dan bisa memanggil bantuan",
        "Satu pekerja di dalam cukup asalkan lapor radio tiap 30 menit",
        "Satu tukang las bekerja sendiri boleh — menghemat waktu",
        "Dua tukang las di dalam ruang tertutup saja",
      ],
      exp: "Hukum Jepang (労働安全衛生規則 第585条) mewajibkan seorang 監視人 (Kanshi-nin) ditempatkan DI LUAR ruang tertutup setiap saat selama kerja bahaya kekurangan oksigen. Pemantau mengawasi pekerja, memantau waktu, memegang informasi kontak darurat, dan siap menelepon 119. JANGAN PERNAH masuk ruang tertutup sendirian — ini aturan mutlak. 🇯🇵 TIPS: 監視人 harus tetap di posnya dan tidak boleh pergi mengerjakan hal lain — ini syarat hukum ketat, bukan sekadar anjuran.",
    },
  },
  23: {
    vi: {
      q: "Khí bảo vệ CO₂ đã được dùng để hàn trong bồn cả buổi sáng. Sau bữa trưa, một thợ hàn mới muốn vào. Điều gì phải xảy ra ĐẦU TIÊN?",
      opts: [
        "Mở nắp bồn và chờ 5 phút — thông gió tự động",
        "Đo lại nồng độ oxy VÀ mức khí độc bằng máy đo đã hiệu chuẩn, rồi chạy thông gió cưỡng bức trước khi vào",
        "Thợ hàn trước xác nhận bằng miệng là an toàn",
        "Xem giờ — nếu quá 1 tiếng thì vào an toàn",
      ],
      exp: "CO₂ nặng hơn không khí (mật độ 1,5×) và vẫn tụ dưới đáy bồn ngay cả sau nhiều giờ. Xác nhận bằng miệng là vô giá trị — mức khí phải được đo lại bằng 酸素濃度計 (máy đo oxy) VÀ máy đo CO đã hiệu chuẩn trước MỖI lần vào. Bầu không khí phải được thổi sạch chủ động bằng quạt thông gió cưỡng bức. 🇯🇵 MẸO: Công trường Nhật dùng thuật ngữ '空気確認' (kuki-kakunin / xác nhận không khí) như bước kiểm tra bắt buộc trước khi vào. Đừng bỏ qua dù bạn nghĩ chỗ đó 'rõ ràng đã thoáng'.",
    },
    id: {
      q: "Gas pelindung CO₂ dipakai mengelas dalam tangki sepanjang pagi. Setelah makan siang, tukang las baru ingin masuk. Apa yang harus terjadi PERTAMA?",
      opts: [
        "Buka palka tangki dan tunggu 5 menit — ventilasi otomatis",
        "Ukur ulang konsentrasi oksigen DAN kadar gas berbahaya dengan meter terkalibrasi, lalu jalankan ventilasi paksa sebelum masuk",
        "Tukang las sebelumnya mengonfirmasi secara lisan bahwa aman",
        "Cek waktu — jika sudah lebih 1 jam, masuk aman",
      ],
      exp: "CO₂ lebih berat dari udara (densitas 1,5×) dan tetap menumpuk di dasar tangki bahkan setelah berjam-jam. Konfirmasi lisan tidak berarti — kadar gas harus diukur ulang dengan 酸素濃度計 (meter oksigen) DAN meter CO terkalibrasi sebelum SETIAP masuk. Atmosfer harus dibersihkan aktif dengan kipas ventilasi paksa. 🇯🇵 TIPS: Lokasi Jepang memakai istilah '空気確認' (kuki-kakunin / konfirmasi udara) sebagai langkah checklist wajib sebelum masuk. Jangan pernah melewatkannya meski Anda pikir ruang itu 'jelas sudah berangin'.",
    },
  },
  24: {
    vi: {
      q: "Theo JIS T 8001 và luật Nhật, tổ hợp PPE nào là TỐI THIỂU bắt buộc để hàn hồ quang trên công trường Nhật?",
      opts: [
        "Chỉ mũ hàn + găng da + giày an toàn — áo khoác là tùy chọn khi khô ráo",
        "Chỉ mũ hàn — mặt và mắt là mối nguy chính",
        "Mũ hàn + găng da (革手袋) + giày an toàn (安全靴 / JIS T 8101) + áo chống cháy hoặc tạp dề da",
        "Kính an toàn thường + găng cotton mỏng là đủ cho mối hàn ngắn",
      ],
      exp: "PPE hàn tối thiểu theo JIS/luật Nhật: 1) Mũ hàn 溶接面 với số che sáng đúng (JIS T 8141). 2) Găng da hàn 革手袋 (JIS T 8113). 3) Giày mũi thép 安全靴 (JIS T 8101). 4) Áo chống cháy hoặc tạp dề da 前掛け chống văng. 5) Khẩu trang chống bụi 防じんマスク cho khói hàn. 🇯🇵 MẸO: Trên công trường Nhật, kiểm tra trang phục (服装点検) làm ở buổi họp an toàn sáng (朝礼 / chōrei) — đến mà thiếu PPE đúng thì không được bắt đầu làm việc hôm đó.",
    },
    id: {
      q: "Menurut JIS T 8001 dan hukum Jepang, kombinasi APD mana yang MINIMUM wajib untuk las busur di lokasi kerja Jepang?",
      opts: [
        "Hanya topeng las + sarung tangan kulit + sepatu safety — jaket opsional saat kondisi kering",
        "Hanya topeng las — wajah dan mata adalah bahaya utama",
        "Topeng las + sarung tangan kulit (革手袋) + sepatu safety (安全靴 / JIS T 8101) + jaket tahan api atau celemek kulit",
        "Kacamata pengaman biasa + sarung tangan katun tipis cukup untuk las pendek",
      ],
      exp: "APD las minimum menurut JIS/hukum Jepang: 1) Topeng las 溶接面 dengan shade tepat (JIS T 8141). 2) Sarung tangan las kulit 革手袋 (JIS T 8113). 3) Sepatu ujung baja 安全靴 (JIS T 8101). 4) Jaket tahan api atau celemek kulit 前掛け untuk percikan. 5) Respirator debu 防じんマスク untuk asap las. 🇯🇵 TIPS: Di lokasi Jepang, inspeksi pakaian (服装点検) dilakukan pada rapat keselamatan pagi (朝礼 / chōrei) — datang tanpa APD yang benar berarti tidak boleh mulai bekerja hari itu.",
    },
  },
  25: {
    vi: {
      q: "Khi hàn thép không gỉ (dây/que chứa crom), cần PPE BỔ SUNG nào ngoài PPE hàn tiêu chuẩn ở Nhật?",
      opts: [
        "Khẩu trang là tùy chọn miễn là quạt thông gió đang chạy",
        "Không cần thêm PPE — thép không gỉ an toàn hơn thép carbon",
        "Khẩu trang chống bụi loại DS1 tiêu chuẩn là đủ — giống thép carbon",
        "Khẩu trang cấp cao hơn cho crom hóa trị sáu (六価クロム) — cụ thể là 防じんマスク cấp DS2 trở lên",
      ],
      exp: "Hàn vật liệu chứa crom (thép không gỉ SUS304/316, thép crom-molypden) tạo khói crom hóa trị sáu (六価クロム / Cr⁶⁺) — chất gây ung thư đã xác nhận (発がん性物質). Luật Nhật (特化則 第38条の20) yêu cầu: 1) Khẩu trang chống bụi cấp DS2 trở lên. 2) Bắt buộc hút cục bộ. 3) Phải lưu hồ sơ theo dõi sức khỏe. 4) Phải thông báo bằng văn bản cho công nhân về nguy cơ ung thư. 🇯🇵 MẸO: Ở Nhật, hồ sơ phơi nhiễm 六価クロム phải lưu 30 năm — một trong những chất bị quản lý nghiêm nhất trong nghề hàn. Không bao giờ hàn thép không gỉ mà thiếu khẩu trang đúng.",
    },
    id: {
      q: "Saat mengelas baja tahan karat (kawat/elektroda mengandung krom), APD TAMBAHAN apa yang diperlukan di luar APD las standar di Jepang?",
      opts: [
        "Respirator opsional asalkan kipas ventilasi menyala",
        "Tidak perlu APD tambahan — baja tahan karat lebih aman dari baja karbon",
        "Respirator debu kelas DS1 standar cukup — sama seperti baja karbon",
        "Respirator kelas lebih tinggi untuk krom heksavalen (六価クロム) — khususnya 防じんマスク kelas DS2 atau lebih tinggi",
      ],
      exp: "Mengelas material mengandung krom (baja tahan karat SUS304/316, baja krom-moli) menghasilkan asap krom heksavalen (六価クロム / Cr⁶⁺) — karsinogen manusia yang terkonfirmasi (発がん性物質). Hukum Jepang (特化則 第38条の20) mewajibkan: 1) Respirator debu kelas DS2 atau lebih tinggi. 2) Ventilasi buang lokal wajib. 3) Catatan pengawasan kesehatan harus disimpan. 4) Pekerja harus diberi tahu risiko kanker secara tertulis. 🇯🇵 TIPS: Di Jepang, catatan paparan 六価クロム harus disimpan 30 tahun — salah satu zat paling ketat diatur dalam pekerjaan las. Jangan pernah mengelas baja tahan karat tanpa respirator yang benar.",
    },
  },
};
