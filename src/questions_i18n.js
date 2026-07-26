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
  101: {
    vi: {
      q: "Đàn anh nói 'Guraindaa kakete' (グラインダーかけて) và 'Kaatto shite' (カットして) về cùng một máy đĩa 'Guraindaa' (グラインダー). Khác biệt chính giữa hai lệnh này là gì?",
      opts: [
        "Không khác — cả hai đều cùng một thao tác với máy mài",
        "'Kakete' nghĩa là mài/làm nhẵn bề mặt bằng đĩa mài; 'kaatto shite' nghĩa là cắt xuyên vật liệu bằng đĩa cắt — đĩa khác nhau, việc khác nhau trên cùng thân máy",
        "'Kakete' chỉ dùng cho thép không gỉ, 'kaatto shite' chỉ cho thép carbon",
        "'Kakete' nghĩa là bật máy mài, 'kaatto shite' nghĩa là tắt",
      ],
      exp: "Guraindaa (グラインダー) = Máy mài góc, dụng cụ phổ biến nhất trên công trường hàn Nhật — nhưng CÙNG thân máy lắp đĩa khác nhau cho việc khác nhau. 'Kakete' (かけて) = làm nhẵn/mài bằng đĩa mài hoặc đĩa nhám. 'Kaatto shite' (カットして) = cắt xuyên bằng đĩa cắt. Dùng sai đĩa cho việc (ví dụ mài bằng đĩa cắt mỏng) rất nguy hiểm và có thể làm vỡ đĩa. 🇯🇵 MẸO: Luôn xác nhận đĩa nào đang lắp trước khi bắt đầu — 'guraindaa kakete' không bao giờ nghĩa là cắt. Nhớ: cần An toàn Đá mài (自由研削といし特別教育) trước khi dùng cả hai loại đĩa.",
    },
    id: {
      q: "Senior berkata 'Guraindaa kakete' (グラインダーかけて) dan 'Kaatto shite' (カットして) tentang alat cakram 'Guraindaa' (グラインダー) yang sama. Apa perbedaan utama kedua perintah ini?",
      opts: [
        "Tidak ada beda — keduanya tindakan yang sama dengan gerinda",
        "'Kakete' berarti menggerinda/menghaluskan permukaan dengan cakram gerinda; 'kaatto shite' berarti memotong material dengan cakram potong — cakram beda, pekerjaan beda pada bodi alat yang sama",
        "'Kakete' hanya untuk baja tahan karat, 'kaatto shite' hanya untuk baja karbon",
        "'Kakete' berarti menyalakan gerinda, 'kaatto shite' berarti mematikannya",
      ],
      exp: "Guraindaa (グラインダー) = Gerinda sudut, alat paling umum di lokasi las Jepang — tapi bodi yang SAMA memakai cakram berbeda untuk pekerjaan berbeda. 'Kakete' (かけて) = menghaluskan/menggerinda dengan cakram gerinda atau flap. 'Kaatto shite' (カットして) = memotong dengan cakram potong. Memakai cakram salah untuk tugas (mis. menggerinda dengan cakram potong tipis) berbahaya dan bisa memecahkan cakram. 🇯🇵 TIPS: Selalu pastikan cakram mana yang terpasang sebelum mulai — 'guraindaa kakete' tak pernah berarti memotong. Ingat: perlu Keselamatan Batu Gerinda (自由研削といし特別教育) sebelum memakai kedua jenis cakram.",
    },
  },
  102: {
    vi: {
      q: "Trước khi hàn, bạn cần làm sạch một rãnh rất hẹp. Giám sát đưa bạn một 'Bo-gura' (棒グラ). Nó là gì?",
      opts: [
        "Một thanh đo kim loại",
        "Một máy mài góc lớn cho bề mặt phẳng",
        "Máy mài bút / máy mài thanh — hình que, dùng cho chỗ hẹp và hoàn thiện rãnh nơi máy mài đĩa không vừa",
        "Một đoạn nối dài của súng hàn",
      ],
      exp: "Bo-gura (棒グラ) = 棒式グラインダー = máy mài bút/máy mài thanh. Chữ 棒 (bo) nghĩa 'hình que'. Lý tưởng để làm sạch rãnh (開先 / kaisaki), góc hẹp và mối nối hẹp nơi máy mài đĩa lớn không tới được. Dùng hằng ngày ở xưởng đóng tàu và nhà máy. 🇯🇵 MẸO: Khi giám sát đưa Bo-gura, chỉ vào rãnh và nói 'kaisaki kirei ni shite' (開先きれいにして / làm sạch rãnh cho đẹp), họ mong một bề mặt nhẵn, sạch vảy. Làm kỹ — kaisaki bẩn = rỗ khí về sau.",
    },
    id: {
      q: "Sebelum mengelas, Anda perlu membersihkan alur yang sangat sempit. Supervisor memberi Anda 'Bo-gura' (棒グラ). Apa itu?",
      opts: [
        "Batang ukur logam",
        "Gerinda sudut besar untuk permukaan datar",
        "Die grinder / pencil grinder — berbentuk batang, untuk ruang sempit dan finishing alur di mana gerinda cakram tak muat",
        "Perpanjangan gun las",
      ],
      exp: "Bo-gura (棒グラ) = 棒式グラインダー = die grinder atau pencil grinder. 棒 (bo) berarti 'berbentuk batang'. Cocok untuk membersihkan alur (開先 / kaisaki), sudut sempit, dan sambungan sempit di mana gerinda cakram besar tak menjangkau. Dipakai harian di galangan dan pabrik. 🇯🇵 TIPS: Saat supervisor memberi Bo-gura, menunjuk alur dan berkata 'kaisaki kirei ni shite' (開先きれいにして / bersihkan alurnya rapi), mereka mengharapkan permukaan halus bebas kerak. Kerjakan dengan teliti — kaisaki kotor = porositas nanti.",
    },
  },
  103: {
    vi: {
      q: "Sau khi hàn que, tổ trưởng nói 'Chippaa!' (チッパー) và chỉ vào mối hàn. Bạn nên cầm gì?",
      opts: [
        "Súng hàn — để thêm kim loại",
        "Chỉ một bàn chải sắt",
        "Máy mài góc",
        "Máy đục hơi — để gõ bỏ xỉ khỏi đường hàn trước lượt tiếp theo",
      ],
      exp: "Chippaa (チッパー) = Máy đục hơi / súng đục. Dụng cụ khí nén gõ nhanh lên bề mặt hàn để bỏ xỉ (ノロ / Noro). Nhanh hơn nhiều búa đục tay. Ở xưởng đóng tàu và nhà máy Nhật, bỏ xỉ trước lượt tiếp theo là BẮT BUỘC — bỏ qua gây khuyết tật lẫn xỉ. 🇯🇵 MẸO: Luôn đeo kính an toàn khi đục — mảnh xỉ nóng bắn tốc độ cao. Ở Nhật, 'đục = nhắm mắt' là không được phép. Xỉ bắn vào mắt là một trong những chấn thương hàn phổ biến nhất ở nhà máy Nhật.",
    },
    id: {
      q: "Setelah las busur (stick), mandor berkata 'Chippaa!' (チッパー) dan menunjuk las. Apa yang harus Anda ambil?",
      opts: [
        "Gun las — untuk menambah logam",
        "Hanya sikat kawat",
        "Gerinda sudut",
        "Air chipper — untuk merontokkan terak dari jalur las sebelum pass berikutnya",
      ],
      exp: "Chippaa (チッパー) = Air chipper / gun pengetuk. Alat pneumatik yang memukul cepat permukaan las untuk membuang terak (ノロ / Noro). Jauh lebih cepat dari palu ketuk manual. Di galangan dan pabrik Jepang, membuang terak sebelum pass berikutnya WAJIB — melewatkannya menyebabkan cacat inklusi terak. 🇯🇵 TIPS: Selalu pakai kacamata pengaman saat mengetuk — pecahan terak panas terbang cepat. Di Jepang, 'mengetuk = mata tertutup' tidak diperbolehkan. Terak terbang ke mata adalah salah satu cedera las paling umum di pabrik Jepang.",
    },
  },
  104: {
    vi: {
      q: "Khác biệt giữa 'Chippaa' (チッパー) và 'Chippingu-hanmaa' (チッピングハンマー) là gì?",
      opts: [
        "Chippaa = dụng cụ khí nén. Chippingu-hanmaa = búa tay. Cả hai bỏ xỉ, nhưng máy đục hơi nhanh hơn",
        "Chippingu-hanmaa để cắt thép, Chippaa để đánh bóng",
        "Chippaa chỉ dùng cho hàn TIG",
        "Chúng là cùng một dụng cụ",
      ],
      exp: "Chippaa (チッパー) = Máy đục hơi — khí nén, nhanh, dùng bỏ xỉ nặng trong sản xuất. Chippingu-hanmaa (チッピングハンマー) = búa đục tay — dùng khi không có dụng cụ hơi hoặc cho lượng xỉ nhỏ. Cả hai đều cần kỹ thuật để không làm hỏng đường hàn. 🇯🇵 MẸO: Một cú đục sắc, chính xác ở góc 30–45° so với bề mặt đường hàn sẽ bỏ xỉ hiệu quả mà không khoét kim loại. Người mới thường gõ quá mạnh và quá vuông góc — hãy tập trên phế liệu trước.",
    },
    id: {
      q: "Apa perbedaan 'Chippaa' (チッパー) dan 'Chippingu-hanmaa' (チッピングハンマー)?",
      opts: [
        "Chippaa = alat bertenaga udara (pneumatik). Chippingu-hanmaa = palu manual. Keduanya membuang terak, tapi air chipper lebih cepat",
        "Chippingu-hanmaa untuk memotong baja, Chippaa untuk memoles",
        "Chippaa hanya untuk las TIG",
        "Keduanya alat yang persis sama",
      ],
      exp: "Chippaa (チッパー) = Air chipper — pneumatik, cepat, untuk membuang terak berat pada las produksi. Chippingu-hanmaa (チッピングハンマー) = palu ketuk manual — dipakai saat alat udara tak ada atau untuk terak sedikit. Keduanya perlu teknik agar tak merusak jalur las. 🇯🇵 TIPS: Ketukan tajam dan presisi pada sudut 30–45° terhadap permukaan jalur membuang terak efisien tanpa menggerus logam. Pekerja baru cenderung memukul terlalu keras dan terlalu tegak lurus — berlatihlah pada besi bekas dulu.",
    },
  },
  105: {
    vi: {
      q: "Giám sát nói 'Chippu' (チップ) trong súng cần thay. Đầu tiếp điện (contact tip) làm gì?",
      opts: [
        "Làm mát súng khi hàn nặng",
        "Truyền dòng điện cho dây hàn VÀ dẫn dây đến điểm hàn",
        "Nối súng với bộ cấp dây",
        "Điều khiển dòng khí bảo vệ",
      ],
      exp: "Chippu (チップ) = Đầu tiếp điện. HAI nhiệm vụ: 1) Truyền dòng điện từ súng sang dây hàn. 2) Dẫn dây theo đúng đường đến hồ quang. Đầu mòn hoặc nghẹt văng gây hồ quang không ổn định, đường hàn xấu và kẹt dây. Thay thường xuyên — rẻ và quan trọng. 🇯🇵 MẸO: Thợ Nhật nói 'chippu ga buru-buru shiteru' (チップがぶるぶるしてる / đầu tip đang rung/không ổn) để mô tả hồ quang chập chờn. Thường là đầu mòn — thay ngay. Mang sẵn vài đầu tip (チップ) trong túi tạp dề là chuyện thường.",
    },
    id: {
      q: "Supervisor berkata 'Chippu' (チップ) di gun perlu diganti. Apa fungsi contact tip?",
      opts: [
        "Mendinginkan gun saat las berat",
        "Menyalurkan arus listrik ke kawat las DAN memandu kawat ke titik las",
        "Menghubungkan gun ke pengumpan kawat",
        "Mengatur aliran gas pelindung",
      ],
      exp: "Chippu (チップ) = Contact tip. DUA tugas: 1) Menyalurkan arus listrik dari gun ke kawat las. 2) Memandu kawat melalui jalur benar ke busur. Tip aus atau tersumbat percikan menyebabkan busur tak stabil, bentuk jalur buruk, dan masalah pengumpanan kawat. Ganti berkala — murah dan penting. 🇯🇵 TIPS: Tukang las Jepang berkata 'chippu ga buru-buru shiteru' (チップがぶるぶるしてる / tip bergetar/tak stabil) untuk busur yang berkedip tak menentu. Biasanya tip aus — segera ganti. Membawa cadangan tip (チップ) di saku celemek adalah praktik standar.",
    },
  },
  106: {
    vi: {
      q: "Vai trò của 'Nozuru' (ノズル) trong súng hàn bán tự động là gì?",
      opts: [
        "Dẫn dây hàn tới vật hàn",
        "Nối súng với cáp nguồn",
        "Hướng và định hình dòng khí bảo vệ quanh bể hàn — phần ngoài cùng của súng",
        "Làm mát đầu tiếp điện",
      ],
      exp: "Nozuru (ノズル) = Chụp khí (nozzle). Phần ngoài cùng của súng. Nó dẫn khí bảo vệ (CO₂, Argon hoặc khí trộn) từ thân súng quanh hồ quang và bể hàn. Chụp khí bị nghẹt hoặc bám văng làm hạn chế dòng khí và gây rỗ khí (ブローホール). Vệ sinh thường xuyên bằng chất chống văng. 🇯🇵 MẸO: Cách vệ sinh đúng ở Nhật: xịt chất chống văng trước, rồi gõ mạnh chụp khí vào bề mặt cứng (không phải vào mối hàn!). Thợ giàu kinh nghiệm làm tự động mỗi vài mét hàn — hãy tạo thói quen.",
    },
    id: {
      q: "Apa peran 'Nozuru' (ノズル) pada gun las semi-otomatis?",
      opts: [
        "Memandu kawat las ke benda kerja",
        "Menghubungkan gun ke kabel daya",
        "Mengarahkan dan membentuk aliran gas pelindung di sekitar kolam las — bagian terluar gun",
        "Mendinginkan contact tip",
      ],
      exp: "Nozuru (ノズル) = Nozzle. Bagian terluar gun. Menyalurkan gas pelindung (CO₂, Argon, atau gas campuran) dari bodi gun ke sekitar busur dan kolam las. Nozzle tersumbat atau berlapis percikan membatasi aliran gas dan menyebabkan porositas (ブローホール). Bersihkan berkala dengan semprotan anti-percikan. 🇯🇵 TIPS: Cara membersihkan nozzle tersumbat di lokasi Jepang: semprot anti-percikan dulu, lalu ketukkan nozzle kuat ke permukaan keras (bukan ke las!). Tukang berpengalaman melakukannya otomatis tiap beberapa meter las — jadikan kebiasaan.",
    },
  },
  107: {
    vi: {
      q: "Bạn thấy nhiều rỗ khí trong mối hàn. Đàn anh kiểm tra súng và tháo một 'Orifisu' (オリフィス) bị nghẹt. Vì sao orifice nghẹt gây rỗ khí?",
      opts: [
        "Nó làm ống lót nghẹt vì mạt dây",
        "Nó làm quá nhiệt đầu tiếp điện",
        "Nó làm chậm tốc độ cấp dây",
        "Không có orifice hoạt động, khí bảo vệ trở nên rối và hút không khí xung quanh — nitơ và oxy làm nhiễm bể hàn",
      ],
      exp: "Orifisu (オリフィス) = Bộ khuếch tán khí / orifice. Nằm giữa thân súng và chụp khí. Nó tán đều khí bảo vệ thành dòng chảy êm (tầng). Nếu nghẹt, khí rối hút không khí (nitơ + oxy) gây rỗ khí (ブローホール) trong mối hàn. Nguyên nhân rỗ khí bí ẩn mà người mới hay bỏ sót. 🇯🇵 MẸO: Khi rỗ khí đột ngột xuất hiện mà không rõ nguyên nhân, thợ Nhật kỳ cựu tháo rời toàn bộ súng (chippu → nozuru → orifisu) và vệ sinh từng phần. Orifice thường là thủ phạm ẩn — một hạt văng nhỏ bịt một lỗ của nó.",
    },
    id: {
      q: "Anda melihat banyak porositas di las. Senior memeriksa gun dan melepas 'Orifisu' (オリフィス) yang tersumbat. Mengapa orifice tersumbat menyebabkan porositas?",
      opts: [
        "Membuat liner tersumbat serpihan kawat",
        "Membuat contact tip terlalu panas",
        "Memperlambat kecepatan umpan kawat",
        "Tanpa orifice yang berfungsi, gas pelindung menjadi turbulen dan menarik udara sekitar — nitrogen dan oksigen mencemari kolam las",
      ],
      exp: "Orifisu (オリフィス) = Gas diffuser / orifice. Terletak antara bodi gun dan nozzle. Menyebarkan gas pelindung merata jadi aliran halus (laminar). Jika tersumbat, turbulensi gas menyedot udara atmosfer (nitrogen + oksigen), menyebabkan pori gas (ブローホール) di las. Penyebab porositas misterius yang sering diabaikan pemula. 🇯🇵 TIPS: Saat porositas tiba-tiba muncul dan penyebabnya tak jelas, tukang las Jepang berpengalaman membongkar gun sepenuhnya (chippu → nozuru → orifisu) dan membersihkan tiap bagian. Orifice sering jadi biang tersembunyi — sebutir kecil percikan menyumbat salah satu lubangnya.",
    },
  },
  108: {
    vi: {
      q: "'Rainaa' (ライナー) bên trong súng hàn bán tự động là gì?",
      opts: [
        "Ống bên trong dẫn dây hàn VÀ khí bảo vệ từ bộ cấp qua cáp súng đến đầu tiếp điện",
        "Đường nước làm mát bên trong súng",
        "Vỏ cao su ngoài bảo vệ cáp súng",
        "Ống cách điện tách chụp khí khỏi thân",
      ],
      exp: "Rainaa (ライナー) = Ống lót / ống dẫn. Chạy suốt chiều dài cáp súng. Nó dẫn dây hàn êm từ bộ cấp đến đầu tiếp điện VÀ mang khí bảo vệ. Ống lót bị gập, bẩn hoặc mòn gây kẹt dây (バードネスティング), cấp dây không đều và hồ quang không ổn định. Thay khi cấp dây trở nên khó. 🇯🇵 MẸO: 'Baadonesutingu' (バードネスティング / tổ chim) là từ Nhật chỉ dây rối thành cục ở con lăn do ống lót nghẹt. Khi xảy ra giữa chừng, hồ quang dừng đột ngột với tiếng 'pop'. Học cách xử nhanh: nhả áp con lăn, kéo dây lại, gỡ rối, cấp lại.",
    },
    id: {
      q: "Apa itu 'Rainaa' (ライナー) di dalam gun las semi-otomatis?",
      opts: [
        "Tabung internal yang memandu kawat las DAN gas pelindung dari pengumpan lewat kabel gun ke contact tip",
        "Saluran air pendingin di dalam gun",
        "Selongsong karet luar pelindung kabel gun",
        "Selongsong isolasi yang memisahkan nozzle dari bodi",
      ],
      exp: "Rainaa (ライナー) = Liner / tabung konduit. Membentang sepanjang kabel gun. Memandu kawat las mulus dari pengumpan ke contact tip DAN membawa gas pelindung. Liner tertekuk, kotor, atau aus menyebabkan kawat macet (バードネスティング), umpan tak konsisten, dan busur tak stabil. Ganti bila pengumpanan kawat mulai kasar. 🇯🇵 TIPS: 'Baadonesutingu' (バードネスティング / sarang burung) adalah istilah Jepang untuk kawat kusut menggumpal di drive roll akibat liner tersumbat. Saat terjadi di tengah las, busur berhenti tiba-tiba dengan bunyi 'pop'. Pelajari cara membereskannya cepat: lepas tekanan drive roll, tarik kawat mundur, urai kusutnya, umpan ulang.",
    },
  },
  109: {
    vi: {
      q: "Ở xưởng đóng tàu Nhật, một 'Sokyuki' (走行機) hoặc 'Kyarijji' (キャリッジ) được đặt trên mối nối dài. Nó làm gì?",
      opts: [
        "Một cần cẩu nâng tấm thép",
        "Một xe hàn có động cơ tự di chuyển súng hàn dọc mối nối với tốc độ không đổi",
        "Một máy mài để làm sạch mối hàn",
        "Một hệ thống súng cắt khí",
      ],
      exp: "Sokyuki (走行機) / Kyarijji (キャリッジ) = Xe hàn. Xe có động cơ mang súng hàn bán tự động chạy dọc mối nối thẳng với tốc độ đặt trước, không đổi. Thợ đặt thông số (điện áp, tốc độ dây, tốc độ chạy) và giám sát. Phổ biến cho mối hàn thẳng dài trên vỏ tàu, kết cấu thép và thành bồn. 🇯🇵 MẸO: Thợ dùng sokyuki phải theo dõi hồ quang liên tục và chỉnh góc súng bằng tay nếu xe lệch. Ngủ gật khi 'giám sát' sokyuki là lỗi thường gặp của người mới — khuyết tật kéo dài vài mét sẽ phải hatsuri (ハツリ / khoét ra và làm lại) toàn bộ.",
    },
    id: {
      q: "Di galangan Jepang, 'Sokyuki' (走行機) atau 'Kyarijji' (キャリッジ) dipasang pada sambungan panjang. Apa fungsinya?",
      opts: [
        "Crane untuk mengangkat pelat baja",
        "Kereta las bermotor yang menggerakkan gun las otomatis sepanjang sambungan dengan kecepatan konstan",
        "Mesin gerinda untuk membersihkan las",
        "Sistem gun potong gas",
      ],
      exp: "Sokyuki (走行機) / Kyarijji (キャリッジ) = Kereta las. Troli bermotor yang membawa gun las semi-otomatis sepanjang sambungan lurus dengan kecepatan tetap. Tukang mengatur parameter (tegangan, kecepatan kawat, kecepatan jalan) dan memantau. Umum untuk las lurus panjang pada lambung kapal, struktur baja, dan dinding tangki. 🇯🇵 TIPS: Tukang yang memakai sokyuki wajib memantau busur terus-menerus dan mengoreksi sudut gun secara manual bila kereta melenceng. Tertidur saat 'memantau' sokyuki adalah kesalahan umum pekerja baru — cacat sepanjang beberapa meter harus di-hatsuri (ハツリ / dikorek dan diulang) seluruhnya.",
    },
  },
  110: {
    vi: {
      q: "Bạn mượn một 'Yosetsu-men' (溶接面) cho hàn MAG 180A, nhưng kính ghi Số #8 — vốn đúng cho hàn TIG dòng thấp. Bạn nên làm gì?",
      opts: [
        "Cứ dùng — số che sáng chỉ ảnh hưởng nhận màu, không phải an toàn mắt",
        "Dùng, nhưng chỉ cho mối đính ngắn dưới 10 giây",
        "Không dùng cho việc này — Số #8 quá sáng cho hàn MAG 180A và có nguy cơ đau mắt hàn (電気性眼炎); mượn mũ có kính Số #10–11",
        "Dùng, nhưng bù bằng cách đứng xa hồ quang hơn",
      ],
      exp: "Yosetsu-men (溶接面) = Mũ hàn. Số che sáng (遮光番号) chỉ độ tối của kính và phải khớp dòng điện và phương pháp: Số #8 có thể hợp TIG dòng thấp, nhưng cho MAG/bán tự động 100–200A, JIS khuyến nghị Số #10–11. Kính quá sáng cho lọt nhiều tia UV/IR có hại, gây đau mắt hàn (電気性眼炎) dù phơi nhiễm ngắn hay đứng xa — cả hai cách chữa cháy đều không an toàn. 🇯🇵 MẸO: Khi mượn mũ hàn ở Nhật, luôn kiểm tra số che sáng ghi trên khung kính — đừng đoán. Công trường Nhật thường có nhiều mũ với độ che khác nhau cho các phương pháp khác nhau; lẫn lộn là lỗi phổ biến và nguy hiểm.",
    },
    id: {
      q: "Anda meminjam 'Yosetsu-men' (溶接面) untuk las MAG 180A, tapi lensanya bertanda Shade #8 — yang tepat untuk las TIG amper rendah. Apa yang harus dilakukan?",
      opts: [
        "Pakai saja — nomor shade hanya soal persepsi warna, bukan keselamatan mata",
        "Pakai, tapi hanya untuk las titik pendek di bawah 10 detik",
        "Jangan pakai untuk pekerjaan ini — Shade #8 terlalu terang untuk las MAG 180A dan berisiko mata las (電気性眼炎); pinjam topeng ber-Shade #10–11",
        "Pakai, tapi kompensasi dengan berdiri lebih jauh dari busur",
      ],
      exp: "Yosetsu-men (溶接面) = Topeng las. Nomor shade (遮光番号) menunjukkan kegelapan lensa dan harus cocok dengan amper serta proses: Shade #8 mungkin cocok untuk TIG amper rendah, tapi untuk MAG/semi-otomatis 100–200A, JIS menyarankan Shade #10–11. Lensa terlalu terang meloloskan lebih banyak radiasi UV/IR berbahaya, berisiko mata las (電気性眼炎) meski paparan singkat atau jarak jauh — kedua akal-akalan itu tak aman. 🇯🇵 TIPS: Saat meminjam topeng las di lokasi Jepang, selalu periksa nomor shade tertulis di pemegang lensa — jangan menebak. Lokasi Jepang sering punya beberapa topeng dengan shade berbeda untuk proses berbeda; tertukar adalah kesalahan umum dan berbahaya.",
    },
  },
  111: {
    vi: {
      q: "'Jido-shakko-men' (自動遮光面) là gì và vì sao nhiều thợ hàn Nhật thích nó?",
      opts: [
        "Tấm che mặt chỉ để mài",
        "Mặt nạ hàn cố định tiêu chuẩn — kính luôn tối",
        "Mũ điều khiển từ xa có camera",
        "Mũ tự động tối — kính trong cho đến khi hồ quang bật, rồi tối tự động trong vài phần nghìn giây",
      ],
      exp: "Jido-shakko-men (自動遮光面) = Mũ hàn tự động tối (ADH). Kính trong khi nghỉ (thấy rõ để đặt súng) rồi tối tự động khi hồ quang bật — thời gian phản ứng dưới 1/25.000 giây. Giảm mỏi mắt, tăng độ chính xác định vị. Tiêu chuẩn ở xưởng Nhật hiện đại. 🇯🇵 MẸO: Nhiều thợ Nhật tự sắm jido-shakko-men. Hãng tốt ở Nhật: ITOCHU (伊藤忠), Kikaiya (機械屋), hoặc nhập Lincoln Electric / 3M. Dự trù ¥15.000–50.000 cho mũ chất lượng. Mũ không thương hiệu rẻ với phản ứng chậm (trên 1/3.200 giây) vẫn có thể hại mắt — hãy xem thông số.",
    },
    id: {
      q: "Apa itu 'Jido-shakko-men' (自動遮光面) dan mengapa banyak tukang las Jepang menyukainya?",
      opts: [
        "Pelindung wajah hanya untuk menggerinda",
        "Topeng las shade tetap standar — lensa selalu gelap",
        "Topeng kendali jarak jauh dengan kamera",
        "Topeng auto-darkening — lensa bening sampai busur menyala, lalu menggelap otomatis dalam milidetik",
      ],
      exp: "Jido-shakko-men (自動遮光面) = Topeng las auto-darkening (ADH). Lensa bening saat diam (Anda bisa melihat jelas untuk memosisikan gun) lalu menggelap otomatis saat busur mulai — waktu reaksi di bawah 1/25.000 detik. Mengurangi lelah mata, meningkatkan akurasi posisi. Standar di bengkel Jepang modern. 🇯🇵 TIPS: Banyak pekerja Jepang punya jido-shakko-men sendiri. Merek bagus di Jepang: ITOCHU (伊藤忠), Kikaiya (機械屋), atau impor Lincoln Electric / 3M. Anggarkan ¥15.000–50.000 untuk topeng berkualitas. ADH tanpa merek murah dengan reaksi lambat (di atas 1/3.200 detik) tetap bisa merusak mata — periksa spesifikasinya.",
    },
  },
  112: {
    vi: {
      q: "'Ura-atekin' (裏当て金) dùng để làm gì trong hàn?",
      opts: [
        "Thanh/tấm lót đáy — đặt ở mặt sau mối nối để đỡ lượt hàn chân nóng chảy và đảm bảo ngấu hoàn toàn không thủng",
        "Kim loại bù chỉ để lấp khe",
        "Dụng cụ kẹp giữ các tấm với nhau",
        "Thiết bị tiếp đất cho mạch hàn",
      ],
      exp: "Ura-atekin (裏当て金) = Thanh lót đáy. Đặt sau chân rãnh để đỡ bể hàn nóng chảy ở lượt đầu (lượt chân). Ngăn thủng (溶落ち / yoochi) và giúp ngấu chân hoàn toàn (完全溶込み). Phổ biến trong đóng tàu, kết cấu thép và chế tạo bình áp lực. 🇯🇵 MẸO: Trong đóng tàu Nhật, thanh lót thép thường được đính hàn cố định vĩnh viễn (永久裏当て). Với công việc cần mặt sau sạch, dùng băng lót gốm (セラミック裏当て) — nó rơi ra sau khi mối hàn nguội và không để lại gì.",
    },
    id: {
      q: "Untuk apa 'Ura-atekin' (裏当て金) dipakai dalam pengelasan?",
      opts: [
        "Backing bar / strip penyangga — dipasang di belakang sambungan untuk menopang root pass cair dan memastikan penetrasi penuh tanpa tembus bakar",
        "Logam pengisi hanya untuk mengisi celah",
        "Alat penjepit untuk menahan pelat",
        "Alat pentanahan untuk sirkuit las",
      ],
      exp: "Ura-atekin (裏当て金) = Backing strip / backing bar. Dipasang di belakang akar alur untuk menopang kolam las cair pada pass pertama (root). Mencegah tembus bakar (溶落ち / yoochi) dan membantu penetrasi akar penuh (完全溶込み). Umum di pembuatan kapal, baja struktur, dan bejana tekan. 🇯🇵 TIPS: Di galangan Jepang, backing baja sering di-tack permanen (永久裏当て). Untuk pekerjaan yang butuh permukaan belakang bersih, dipakai pita backing keramik (セラミック裏当て) — terlepas setelah las dingin dan tak meninggalkan apa pun.",
    },
  },
  113: {
    vi: {
      q: "'Endo-tabu' (エンドタブ) là gì và vì sao dùng trong thi chứng chỉ và hàn sản xuất?",
      opts: [
        "Một biểu mẫu báo cáo điền sau khi hàn",
        "Tấm phụ gắn ở đầu và cuối mối hàn — đưa vùng dễ khuyết tật (khởi hồ quang, nứt hố) ra ngoài mối nối thực",
        "Một loại dây hàn lõi thuốc",
        "Vật liệu lót chỉ cho hàn ống",
      ],
      exp: "Endo-tabu (エンドタブ) = Tấm chạy ra / tấm đầu cuối. Tấm thép ngắn gắn ở mỗi đầu mối nối. Điểm khởi và kết thúc hồ quang là vùng dễ khuyết tật nhất (ブローホール, クレーター割れ). Tấm đầu cuối đưa các khuyết tật này ra ngoài mối nối thực. Sau khi hàn, cắt bỏ. Bắt buộc trong thi chứng chỉ JIS. 🇯🇵 MẸO: Trong thi chứng chỉ hàn JIS, tấm đầu cuối là bắt buộc và kích thước được quy định trong tiêu chuẩn thi. Quên gắn hoặc gắn sai là trượt tự động — xem kỹ sơ đồ bố trí bài thi JIS trước kỳ thi.",
    },
    id: {
      q: "Apa itu 'Endo-tabu' (エンドタブ) dan mengapa dipakai dalam ujian sertifikasi dan las produksi?",
      opts: [
        "Formulir laporan uji yang diisi setelah mengelas",
        "Pelat bantu yang dipasang di awal dan akhir las — memindahkan zona rawan cacat (awal busur, retak kawah) ke luar sambungan sebenarnya",
        "Sejenis kawat berinti fluks",
        "Material backing hanya untuk las pipa",
      ],
      exp: "Endo-tabu (エンドタブ) = Run-off tab / end tab. Pelat baja pendek yang dipasang di tiap ujung sambungan las. Awal dan akhir busur adalah area paling rawan cacat (ブローホール, クレーター割れ). End tab memindahkan cacat ini ke luar sambungan sebenarnya. Setelah mengelas, end tab dipotong dan dibuang. Wajib dalam ujian sertifikasi JIS. 🇯🇵 TIPS: Dalam ujian sertifikasi las JIS, end tab wajib dan dimensinya ditentukan dalam standar uji. Lupa memasang atau memasang salah adalah kegagalan otomatis — pelajari diagram setup uji JIS dengan teliti sebelum ujian.",
    },
  },
  114: {
    vi: {
      q: "'Aasu-kurippu' (アースクリップ), còn gọi 'kẹp mát', và vì sao nó quan trọng?",
      opts: [
        "Kẹp để gắn que hàn",
        "Kẹp giữ cuộn dây hàn",
        "Kẹp mát/tiếp đất nối mạch hồi hàn với vật hàn — thiếu nó, mạch hàn không kín và dòng điện tìm đường khác (gây hỏng hóc hoặc cháy)",
        "Kẹp an toàn để cố định cáp nguồn",
      ],
      exp: "Aasu-kurippu (アースクリップ) = Kẹp mát / kẹp tiếp đất. Hoàn tất mạch điện hàn bằng cách nối với vật hàn. Tiếp mát kém gây hồ quang không ổn định, văng tóe và dòng điện tìm đường nguy hiểm qua máy móc, khung sườn hoặc kết cấu. Luôn kẹp càng gần mối hàn càng tốt. 🇯🇵 MẸO: 'Aasu ga warui' (アースが悪い / mát kém) là lý do phổ biến gây hồ quang bất ổn ở Nhật. Nếu hồ quang nghe thô và văng nhiều dù điện áp/dòng đúng, kiểm tra kẹp mát trước — hàm kẹp gỉ hoặc đường mát gián tiếp qua kết cấu thép thường là thủ phạm hơn bất kỳ cài đặt máy nào.",
    },
    id: {
      q: "Apa itu 'Aasu-kurippu' (アースクリップ) alias 'ground clamp' dan mengapa penting?",
      opts: [
        "Klip untuk memasang elektroda las",
        "Klip yang menahan gulungan kawat las",
        "Klip earth/ground yang menghubungkan sirkuit balik las ke benda kerja — tanpanya, sirkuit las tak lengkap dan arus mencari jalur lain (menyebabkan kerusakan atau kebakaran)",
        "Klip pengaman untuk mengamankan kabel daya",
      ],
      exp: "Aasu-kurippu (アースクリップ) = Klip earth / ground clamp. Melengkapi sirkuit listrik las dengan terhubung ke benda kerja. Kontak ground buruk menyebabkan busur tak stabil, percikan, dan arus mencari jalur berbahaya lewat mesin, rangka, atau struktur. Selalu jepit sedekat mungkin dengan las. 🇯🇵 TIPS: 'Aasu ga warui' (アースが悪い / ground jelek) adalah alasan umum busur tak stabil di lokasi Jepang. Jika busur terdengar kasar dan percikan berlebihan meski tegangan/arus benar, periksa ground clamp dulu — rahang klip berkarat atau jalur ground tak langsung lewat struktur baja lebih sering jadi biang daripada setelan mesin mana pun.",
    },
  },
  115: {
    vi: {
      q: "Giám sát bảo bạn xịt 'Supatta-boshi-zai' (スパッタ防止剤) trước khi hàn. Xịt ở đâu là an toàn và hiệu quả, và KHÔNG BAO GIỜ xịt ở đâu?",
      opts: [
        "Chỉ xịt lên bề mặt vật hàn sẽ được hàn — không bao giờ lên súng",
        "Xịt lên bề mặt tiếp điện của đầu tip để dẫn điện tốt nhất",
        "Xịt thoải mái khắp nơi kể cả thẳng vào kênh khí và orifice để bảo vệ tối đa",
        "Xịt lên ngoài chụp khí và thân súng; KHÔNG BAO GIỜ xịt vào kênh khí/orifice hoặc lên kim loại nóng gần hồ quang đang cháy",
      ],
      exp: "Supatta-boshi-zai (スパッタ防止剤) = Chất chống văng, xịt lên ngoài chụp khí và thân súng để văng rơi ra dễ thay vì bám. Xịt BÊN TRONG kênh khí hoặc orifice có thể nghẹt đường khí gây rối (dẫn đến rỗ khí), và xịt gần hồ quang đang cháy hoặc lên kim loại nóng là nguy cơ cháy/khói. Một lượng nhỏ ngoài chụp khí là đủ. 🇯🇵 MẸO: Chất chống văng gốc nước được ưa dùng ở Nhật vì ít cháy. Xịt trước khi hàn, lau sạch sau — đầu tư nhỏ, tiết kiệm nhiều thời gian.",
    },
    id: {
      q: "Supervisor menyuruh Anda menyemprot 'Supatta-boshi-zai' (スパッタ防止剤) sebelum mengelas. Di mana aman dan efektif menyemprotnya, dan di mana JANGAN PERNAH?",
      opts: [
        "Semprot hanya pada permukaan benda kerja yang akan dilas — jangan pernah pada gun",
        "Semprot pada permukaan kontak listrik tip untuk konduktivitas terbaik",
        "Semprot bebas di mana-mana termasuk langsung ke saluran gas dan orifice untuk perlindungan maksimum",
        "Semprot pada eksterior nozzle dan bodi gun; JANGAN PERNAH menyemprot di dalam saluran gas/orifice atau ke logam panas dekat busur aktif",
      ],
      exp: "Supatta-boshi-zai (スパッタ防止剤) = Semprotan anti-percikan, disemprot pada eksterior nozzle dan bodi gun agar percikan rontok mudah alih-alih menempel. Menyemprot DI DALAM saluran gas atau orifice bisa menyumbat jalur gas dan menyebabkan turbulensi (memicu porositas), dan menyemprot dekat busur aktif atau ke logam panas adalah risiko kebakaran/asap. Sedikit di eksterior nozzle sudah cukup. 🇯🇵 TIPS: Semprotan anti-percikan berbahan air lebih disukai di lokasi Jepang karena kurang mudah terbakar. Semprot sebelum mengelas, lap bersih setelahnya — investasi kecil, hemat waktu besar.",
    },
  },
  116: {
    vi: {
      q: "'Ondo-chooku' (温度チョーク) hoặc 'Tempu-sutikku' (テンプスティック) dùng để làm gì?",
      opts: [
        "Bút sáp chỉ thị nhiệt độ — chảy ở một nhiệt độ nhất định để xác minh nhiệt độ nung trước hoặc giữa các lượt trên thép",
        "Đánh dấu vị trí hàn trên bản vẽ",
        "Lớp phủ chống ăn mòn",
        "Đánh dấu đường cắt trên tấm thép",
      ],
      exp: "Ondo-chooku (温度チョーク) = Bút sáp nhiệt độ / Tempilstick. Mỗi bút chảy ở một nhiệt độ nhất định (ví dụ 150°C, 200°C, 350°C). Đánh dấu lên thép gần mối hàn — nếu vết chảy, đã đạt nhiệt độ. Dùng để kiểm tra nhiệt độ nung trước (予熱) trước khi hàn và nhiệt độ giữa các lượt (パス間温度). 🇯🇵 MẸO: Phải đo ở mặt đối diện của tấm so với nguồn nhiệt, cách mép hàn ít nhất 75mm theo tiêu chuẩn JIS. Đo trực tiếp trên mặt bị nung cho số cao sai. Giám sát biết điều này — họ sẽ kiểm tra kỹ thuật đo của bạn.",
    },
    id: {
      q: "Untuk apa 'Ondo-chooku' (温度チョーク) atau 'Tempu-sutikku' (テンプスティック) dipakai?",
      opts: [
        "Krayon indikator suhu — meleleh pada suhu tertentu untuk memverifikasi preheat atau suhu antar-pass pada baja",
        "Menandai posisi las pada gambar",
        "Pelapis anti-korosi",
        "Menandai garis potong pada pelat baja",
      ],
      exp: "Ondo-chooku (温度チョーク) = Krayon suhu / Tempilstick. Tiap krayon meleleh pada suhu tertentu (mis. 150°C, 200°C, 350°C). Tandai baja dekat las — jika tanda meleleh, suhu telah tercapai. Dipakai untuk memverifikasi suhu preheat (予熱) sebelum mengelas dan suhu antar-pass (パス間温度) di antara pass. 🇯🇵 TIPS: Suhu harus diukur di sisi pelat yang berlawanan dari sumber panas, minimal 75mm dari tepi las sesuai standar JIS. Mengukur langsung di permukaan panas memberi bacaan yang keliru tinggi. Supervisor tahu ini — mereka akan memeriksa teknik pengukuran Anda.",
    },
  },
  117: {
    vi: {
      q: "'Yosetsu-geeji' (溶接ゲージ) dùng để làm gì trên công trường Nhật?",
      opts: [
        "Kiểm tra áp suất bình khí",
        "Thước hàn đa năng đo kích thước đường hàn, chiều dài chân, chiều dày cổ, độ sâu lẹm và chiều cao đắp",
        "Cài dòng điện máy hàn",
        "Đo chiều dài dây hàn đã dùng",
      ],
      exp: "Yosetsu-geeji (溶接ゲージ) = Thước hàn. Dụng cụ kiểm tra thiết yếu nhiều chức năng: đo chiều dài chân mối hàn góc (脚長), chiều dày cổ (のど厚), chiều cao đắp (余盛), độ sâu lẹm (アンダーカット) và hơn nữa. Dùng khi kiểm tra ngoại quan (VT) bởi thợ và người kiểm tra. 🇯🇵 MẸO: Ở Nhật, thợ được kỳ vọng tự kiểm tra (自主検査 / jishu-kensa) mối hàn của mình bằng thước hàn TRƯỚC khi người kiểm tra chất lượng đến. Chủ động đưa kết quả tự kiểm tra được nể trọng — chờ người kiểm tra tìm ra lỗi thì không.",
    },
    id: {
      q: "Untuk apa 'Yosetsu-geeji' (溶接ゲージ) dipakai di lokasi kerja Jepang?",
      opts: [
        "Memeriksa tekanan tabung gas",
        "Alat ukur las multifungsi yang mengukur ukuran jalur, panjang kaki, tebal leher, kedalaman undercut, dan tinggi penguatan las",
        "Mengatur amper mesin las",
        "Mengukur panjang kawat las yang terpakai",
      ],
      exp: "Yosetsu-geeji (溶接ゲージ) = Alat ukur las. Alat inspeksi esensial berfungsi ganda: mengukur panjang kaki las sudut (脚長), tebal leher (のど厚), tinggi penguatan las (余盛), kedalaman undercut (アンダーカット), dan lainnya. Dipakai saat inspeksi visual (VT) oleh tukang dan inspektor. 🇯🇵 TIPS: Di Jepang, tukang diharapkan memeriksa sendiri (自主検査 / jishu-kensa) lasnya dengan alat ukur SEBELUM inspektor mutu datang. Menunjukkan hasil inspeksi secara proaktif dihargai — menunggu inspektor menemukan masalah tidak.",
    },
  },
  118: {
    vi: {
      q: "Ở Nhật, súng hàn Panasonic gọi là 'Reddo-tochi' (レッドトーチ) và súng Daihen gọi là 'Buruu-tochi' (ブルートーチ). Vì sao điều này quan trọng trên công trường?",
      opts: [
        "Chúng giống hệt — màu chỉ là thương hiệu",
        "Súng đỏ hàn nhanh hơn súng xanh",
        "Các hãng súng dùng cỡ đầu tip và chuẩn ren khác nhau — phụ tùng KHÔNG thay lẫn được. Dùng sai chip/nozzle gây hàn kém",
        "Súng xanh cần lưu lượng khí cao hơn súng đỏ",
      ],
      exp: "Trên công trường Nhật: Panasonic = súng đỏ (レッドトーチ), Daihen = súng xanh (ブルートーチ). Đầu tip (チップ), chụp khí và ống lót của chúng dùng cỡ và chuẩn ren KHÁC nhau. Lắp chip súng đỏ vào súng xanh sẽ không vừa. Luôn khớp phụ tùng thay thế đúng hãng súng. 🇯🇵 MẸO: Khi đặt phụ tùng, cửa hàng vật tư hàn Nhật (溶接用品店) luôn hỏi 'đỏ hay xanh?' trước. Giữ sẵn một chip đúng hãng trong túi tạp dề. Hết chip giữa ca vì lấy nhầm túi là lỗi bực mình và ngượng.",
    },
    id: {
      q: "Di Jepang, gun las Panasonic disebut 'Reddo-tochi' (レッドトーチ) dan gun Daihen disebut 'Buruu-tochi' (ブルートーチ). Mengapa ini penting di lokasi?",
      opts: [
        "Keduanya identik — warna hanya branding",
        "Gun merah mengelas lebih cepat dari yang biru",
        "Merek gun memakai ukuran contact tip dan standar ulir berbeda — suku cadang TIDAK bisa dipertukarkan. Memakai chip/nozzle salah menyebabkan las buruk",
        "Gun biru butuh aliran gas lebih tinggi dari merah",
      ],
      exp: "Di lokasi kerja Jepang: Panasonic = gun merah (レッドトーチ), Daihen = gun biru (ブルートーチ). Contact tip (チップ), nozzle, dan liner-nya memakai ukuran dan standar ulir BERBEDA. Jika memasang chip gun merah ke gun biru, tak akan pas. Selalu cocokkan suku cadang pengganti dengan merek gun yang benar. 🇯🇵 TIPS: Saat memesan suku cadang, toko perlengkapan las Jepang (溶接用品店) selalu bertanya 'merah atau biru?' dulu. Simpan cadangan chip merek yang benar di saku celemek. Kehabisan chip di tengah shift karena salah ambil kantong adalah kesalahan yang menjengkelkan dan memalukan.",
    },
  },
  119: {
    vi: {
      q: "'Furappu-disuku' (フラップディスク) là gì và khi nào dùng thay cho đĩa mài tiêu chuẩn?",
      opts: [
        "Nắp bảo vệ cho máy mài góc",
        "Bánh chải sắt để bỏ gỉ",
        "Đĩa cắt để cắt tấm thép",
        "Đĩa nhám lá — các lá nhám chồng nhau làm nhẵn bề mặt hàn nhẹ nhàng hơn đĩa mài, để lại bề mặt đẹp hơn",
      ],
      exp: "Furappu-disuku (フラップディスク) = Đĩa nhám lá. Các lá nhám chồng nhau gắn trên đế. Dùng để hòa trộn và làm nhẵn bề mặt hàn, bỏ văng nhẹ và vuốt mép chân hàn — nhẹ hơn đĩa mài phẳng. Để lại bề mặt nhẵn hơn. Phổ biến trong hàn hoàn thiện và thép không gỉ. 🇯🇵 MẸO: Với thép không gỉ (SUS), luôn dùng đĩa nhám hoặc đĩa mài chuyên SUS ghi 'SUS用' hoặc 'ステン用'. Dùng đĩa từng chạm thép carbon sẽ nhiễm bẩn bề mặt SUS bằng hạt sắt, gây đốm gỉ — đây là khuyết tật chất lượng nghiêm trọng gọi là '鉄汚染' (tetsu-osen / nhiễm sắt).",
    },
    id: {
      q: "Apa itu 'Furappu-disuku' (フラップディスク) dan kapan dipakai alih-alih cakram gerinda standar?",
      opts: [
        "Pelindung untuk gerinda sudut",
        "Roda sikat kawat untuk membuang karat",
        "Cakram potong untuk memotong pelat baja",
        "Flap disc — lembaran abrasif bertumpuk yang menghaluskan permukaan las lebih lembut dari cakram gerinda, meninggalkan hasil lebih baik",
      ],
      exp: "Furappu-disuku (フラップディスク) = Flap disc. Lembaran abrasif bertumpuk yang menempel pada pelat penopang. Dipakai untuk membaurkan dan menghaluskan permukaan las, membuang percikan ringan, dan meratakan kaki las — lebih lembut dari cakram gerinda datar. Meninggalkan hasil permukaan lebih halus. Umum di pekerjaan las finishing dan baja tahan karat. 🇯🇵 TIPS: Untuk baja tahan karat (SUS), selalu pakai flap disc atau cakram gerinda khusus SUS bertanda 'SUS用' atau 'ステン用'. Memakai cakram yang pernah menyentuh baja karbon akan mencemari permukaan stainless dengan partikel besi, menyebabkan bintik karat — cacat mutu serius bernama '鉄汚染' (tetsu-osen / kontaminasi besi).",
    },
  },
  120: {
    vi: {
      q: "Bạn cần chải sắt một mối hàn thép không gỉ (SUS), nhưng chỉ có 'Waiyaa-burashi' (ワイヤーブラシ) loại thép carbon. Dùng tạm một lần có được không?",
      opts: [
        "Không — sợi thép carbon để lại trên bề mặt inox gây '鉄汚染' (tetsu-osen / nhiễm sắt), dẫn đến đốm gỉ sau này; luôn dùng bàn chải chuyên SUS",
        "Được, miễn là rửa bàn chải bằng nước trước",
        "Không, nhưng chỉ vì bàn chải carbon làm xước bề mặt SUS về thẩm mỹ — không có nguy cơ ăn mòn",
        "Được — bàn chải sắt là dùng chung; vật liệu sợi không truyền giữa các kim loại",
      ],
      exp: "Waiyaa-burashi (ワイヤーブラシ) = Bàn chải sắt, dùng sau hàn để bỏ xỉ nhẹ, ôxy hóa và văng mịn. Sợi thép carbon nhúng hạt sắt siêu nhỏ vào bề mặt inox, sau đó gỉ và tạo đốm gỉ thấy được — khuyết tật ăn mòn thật, không chỉ thẩm mỹ. Rửa không loại được hạt đã nhúng. Nhiều công trường Nhật giữ bộ bàn chải riêng, đánh màu cho thép carbon và inox để tránh nhiễm chéo. 🇯🇵 MẸO: Với xỉ nặng sau hàn que, dùng búa đục (チッピングハンマー) hoặc máy đục hơi (チッパー) trước, rồi mới dùng bàn chải đúng loại — không bao giờ thay loại bàn chải để tiết kiệm thời gian.",
    },
    id: {
      q: "Anda perlu menyikat kawat las baja tahan karat (SUS), tapi hanya ada 'Waiyaa-burashi' (ワイヤーブラシ) berbahan baja karbon. Boleh dipakai sekali ini saja?",
      opts: [
        "Tidak — bulu baja karbon yang tertinggal di permukaan stainless menyebabkan '鉄汚染' (tetsu-osen / kontaminasi besi), memicu bintik karat kemudian; selalu pakai sikat khusus SUS",
        "Boleh, asalkan sikat dibilas air dulu",
        "Tidak, tapi hanya karena sikat karbon menggores permukaan SUS secara kosmetik — tak ada risiko korosi",
        "Boleh — sikat kawat universal; bahan bulu tak berpindah antar logam",
      ],
      exp: "Waiyaa-burashi (ワイヤーブラシ) = Sikat kawat, dipakai setelah mengelas untuk membuang terak ringan, oksidasi, dan percikan halus. Bulu baja karbon menanamkan partikel besi mikroskopis ke permukaan stainless, yang lalu berkarat dan membuat bintik karat terlihat — cacat korosi nyata, bukan sekadar kosmetik. Membilas tak menghilangkan partikel yang tertanam. Banyak lokasi Jepang menyimpan set sikat terpisah berkode warna untuk baja karbon dan stainless guna mencegah kontaminasi silang. 🇯🇵 TIPS: Untuk terak berat setelah las busur, pakai palu ketuk (チッピングハンマー) atau air chipper (チッパー) dulu, lalu ikuti dengan sikat kawat yang benar — jangan pernah menukar jenis sikat demi menghemat waktu.",
    },
  },
  201: {
    vi: {
      q: "Một thợ đàn anh rên 'Kachiage...' (かちあげ) và thực tập sinh cho rằng nó nghĩa là thuật ngữ chính thức 'Tatemuki-shisei' (立向き姿勢 / tư thế đứng) vì cả hai đều chống trọng lực. Thực tập sinh đúng không?",
      opts: [
        "Đúng — kachiage và tatemuki-shisei chỉ cùng một tư thế, chỉ khác lóng và chính thức",
        "Không — kachiage là lóng của 上向き姿勢 (Uwamuki-shisei / tư thế trần), hàn TRÊN đầu; tatemuki-shisei là tư thế khác, hàn trên mặt đứng",
        "Không — kachiage thực ra chỉ tư thế bằng, dễ nhất chứ không phải khó nhất",
        "Đúng, nhưng chỉ khi hàn mối ống, không phải mối tấm",
      ],
      exp: "Kachiage (かちあげ) là lóng riêng cho 上向き姿勢 (Uwamuki-shisei) = tư thế TRẦN — súng giữ trên đầu, văng rơi xuống người. Tatemuki-shisei (立向き姿勢) là tư thế ĐỨNG — hàn trên tường đứng, lên hoặc xuống. Cả hai đều chống trọng lực theo cách nào đó, nhưng là các tư thế riêng với kỹ thuật khác nhau, và nhầm lóng/chính thức trên công trường gây hiểu lầm thật. 🇯🇵 MẸO: Thợ Nhật quấn khăn quanh cổ nhét vào cổ áo khi làm kachiage — văng rơi xuống gáy vừa đau vừa nguy cơ cháy. Mẹo đơn giản này phổ biến khắp công trường Nhật.",
    },
    id: {
      q: "Seorang senior mengeluh 'Kachiage...' (かちあげ) dan peserta magang mengira itu berarti istilah resmi 'Tatemuki-shisei' (立向き姿勢 / posisi tegak) karena keduanya melawan gravitasi. Apakah peserta magang benar?",
      opts: [
        "Ya — kachiage dan tatemuki-shisei posisi sama, hanya slang vs istilah resmi",
        "Tidak — kachiage adalah slang untuk 上向き姿勢 (Uwamuki-shisei / posisi overhead), mengelas DI ATAS kepala; tatemuki-shisei posisi berbeda, mengelas pada permukaan tegak",
        "Tidak — kachiage sebenarnya posisi datar, yang termudah, bukan tersulit",
        "Ya, tapi hanya saat mengelas sambungan pipa, bukan pelat",
      ],
      exp: "Kachiage (かちあげ) adalah slang khusus untuk 上向き姿勢 (Uwamuki-shisei) = posisi OVERHEAD — gun dipegang di atas kepala, percikan jatuh menimpa Anda. Tatemuki-shisei (立向き姿勢) adalah posisi TEGAK — mengelas pada dinding berdiri, naik atau turun. Keduanya melawan gravitasi, tapi posisi berbeda dengan teknik berbeda, dan mencampur istilah slang/resmi di lokasi menyebabkan salah paham nyata. 🇯🇵 TIPS: Tukang las Jepang melilitkan handuk di leher dan menyelipkannya ke kerah untuk kerja kachiage — percikan yang jatuh ke tengkuk menyakitkan sekaligus bahaya kebakaran. Trik sederhana ini universal di lokasi Jepang.",
    },
  },
  202: {
    vi: {
      q: "Giám sát nói hôm nay bạn làm việc 'Moriage' (盛り上げ), theo kiểu '立向上進' (Tatemuki-joshin / đứng-lên) hoặc '立向下進' (Tatemuki-kashin / đứng-xuống). Nhật thường ưa hướng nào và vì sao?",
      opts: [
        "Đứng-xuống (下進) được ưa duy nhất vì loại bỏ nhu cầu kỹ thuật lấp hố",
        "Đứng-xuống (下進) được ưa vì nhanh hơn và ngấu sâu hơn đứng-lên",
        "Đứng-lên (上進) được ưa vì thường cho hòa nhập và ngấu tốt hơn, dù chậm hơn đứng-xuống",
        "Không hướng nào được ưa — Nhật chỉ dùng đứng-xuống cho mọi việc moriage",
      ],
      exp: "Moriage (盛り上げ) = tư thế hàn đứng, chính thức là 立向き姿勢 (Tatemuki-shisei). Trong hàn đứng có hai hướng: 立向上進 (đứng-LÊN) và 立向下進 (đứng-XUỐNG). Đứng-xuống nhanh hơn nhưng ngấu nông hơn; Nhật thường ưa đứng-lên vì hòa nhập và ngấu tốt hơn dù chậm hơn, nhất là mối hàn kết cấu. 🇯🇵 MẸO: 'Moriage' là lóng công trường, không phải tiếng Nhật chuẩn — dùng nó cho thấy bạn thấm văn hóa. Nhưng trong tài liệu chính thức (họp an toàn, báo cáo kiểm tra), luôn dùng thuật ngữ chuẩn 立向き (tatemuki). Trộn lóng vào giấy tờ QC chính thức bị chê.",
    },
    id: {
      q: "Supervisor mengatakan hari ini Anda mengerjakan 'Moriage' (盛り上げ), gaya '立向上進' (Tatemuki-joshin / tegak-naik) atau '立向下進' (Tatemuki-kashin / tegak-turun). Arah mana yang umumnya disukai Jepang, dan mengapa?",
      opts: [
        "Tegak-turun (下進) disukai secara eksklusif karena meniadakan teknik pengisian kawah",
        "Tegak-turun (下進) disukai karena lebih cepat dan penetrasi lebih dalam dari tegak-naik",
        "Tegak-naik (上進) disukai karena umumnya memberi fusi dan penetrasi lebih baik, meski lebih lambat dari tegak-turun",
        "Tak ada yang disukai — Jepang hanya memakai tegak-turun untuk semua kerja moriage",
      ],
      exp: "Moriage (盛り上げ) = posisi las tegak, resminya 立向き姿勢 (Tatemuki-shisei). Dalam las tegak ada dua arah: 立向上進 (tegak-NAIK) dan 立向下進 (tegak-TURUN). Tegak-turun lebih cepat tapi penetrasi lebih dangkal; Jepang umumnya menyukai tegak-naik karena fusi dan penetrasi lebih baik meski lebih lambat, terutama untuk las struktur. 🇯🇵 TIPS: 'Moriage' adalah slang lokasi, bukan bahasa Jepang standar — memakainya menunjukkan Anda menyerap budaya. Namun dalam dokumentasi resmi (rapat keselamatan, laporan inspeksi), selalu pakai istilah resmi 立向き (tatemuki). Mencampur slang ke dokumen QC resmi tidak disukai.",
    },
  },
  203: {
    vi: {
      q: "Đàn anh xem rãnh và nói 'Tenpai!' (テンパイ). Nước đi tiếp theo của bạn là gì?",
      opts: [
        "Làm lại lượt chân từ đầu — mọi thứ đều sai",
        "Mối hàn xong rồi — dọn đồ về nhà",
        "Có vết nứt — dừng và gọi người kiểm tra",
        "Rãnh gần đầy — chỉ một lượt nữa (lượt phủ/mặt) là xong",
      ],
      exp: "Tenpai (テンパイ) đến từ Mạt chược Nhật — nghĩa là 'còn một quân là thắng'. Trên công trường, nghĩa là mối hàn rãnh đã đầy đến ngay dưới lượt phủ cuối. Bạn còn một lượt là xong. 🇯🇵 MẸO: Thợ Nhật thích các cách nói từ Mạt chược. Học chúng cho thấy hiểu văn hóa. Khi nghe 'tenpai', lượt phủ (仕上げパス / shiage-pasu) là tiếp theo — cẩn thận với ngoại quan đường hàn vì đây là mặt lộ mà người kiểm tra nhìn đầu tiên.",
    },
    id: {
      q: "Senior memeriksa alur dan berkata 'Tenpai!' (テンパイ). Apa langkah Anda berikutnya?",
      opts: [
        "Mulai root pass dari awal — semuanya salah",
        "Las selesai — berkemas dan pulang",
        "Ada retak — berhenti dan panggil inspektor",
        "Alur hampir penuh — tinggal satu pass lagi (cap/cover pass) dan Anda selesai",
      ],
      exp: "Tenpai (テンパイ) berasal dari Mahjong Jepang — artinya 'tinggal satu ubin untuk menang'. Di lokasi, artinya las alur sudah terisi sampai tepat di bawah cap pass terakhir. Anda tinggal satu pass lagi. 🇯🇵 TIPS: Pekerja Jepang suka ungkapan dari Mahjong. Mempelajarinya menunjukkan kesadaran budaya. Saat mendengar 'tenpai', cap pass (仕上げパス / shiage-pasu) berikutnya — ekstra hati-hati dengan tampilan jalur karena ini permukaan terlihat yang dinilai inspektor lebih dulu.",
    },
  },
  204: {
    vi: {
      q: "Giám sát nhìn mối hàn tập của bạn và hét 'Mimizu!' (ミミズ). Sai ở đâu?",
      opts: [
        "Đường hàn của bạn ngoằn ngoèo, không đều — như con giun bò trên tấm",
        "Lưu lượng khí quá cao",
        "Bạn dùng sai dây",
        "Mối hàn quá sâu — bạn hàn thủng",
      ],
      exp: "Mimizu (ミミズ) = con giun đất. Dùng để mô tả đường hàn ngoằn ngoèo, không đều, lượn trái phải như con giun. Do di chuyển súng không vững, tốc độ không đều, hoặc tay run. Khắc phục: tập đường hàn thẳng (stringer) đến khi thật thẳng trước khi thử đường lượn. 🇯🇵 MẸO: Huấn luyện viên Nhật hay nói 'ashi o tsukae' (足を使え / dùng chân) — nghĩa là đừng chỉ cử động tay; ổn định toàn thân và di chuyển thân mượt cho đường dài. Tì khuỷu tay vào người cải thiện độ thẳng rõ rệt.",
    },
    id: {
      q: "Supervisor melihat las latihan Anda dan berteriak 'Mimizu!' (ミミズ). Apa yang salah?",
      opts: [
        "Jalur Anda bergoyang dan tak rata — seperti cacing merayap di pelat",
        "Aliran gas terlalu tinggi",
        "Anda memakai kawat yang salah",
        "Las terlalu dalam — Anda menembus bakar",
      ],
      exp: "Mimizu (ミミズ) = cacing tanah. Dipakai untuk menggambarkan jalur yang bergoyang, tak rata, berkelok kiri-kanan seperti cacing. Disebabkan gerakan gun tak stabil, kecepatan tak konsisten, atau tangan gemetar. Perbaikan: latih jalur lurus (stringer) sampai benar-benar lurus sebelum mencoba jalur ayun (weave). 🇯🇵 TIPS: Pelatih las Jepang sering berkata 'ashi o tsukae' (足を使え / pakai kakimu) — artinya jangan hanya menggerakkan lengan; stabilkan seluruh tubuh dan gerakkan tubuh mulus untuk jalur panjang. Menahan siku ke tubuh sangat meningkatkan kelurusan jalur.",
    },
  },
  205: {
    vi: {
      q: "Một thợ đàn anh nhìn đường hàn của bạn, lắc đầu và nói 'Gatagata!' (ガタガタ). Ý anh ấy là gì?",
      opts: [
        "Tốc độ di chuyển quá nhanh — đường hàn quá mỏng",
        "Đường hàn không nhất quán — thô, không đều, không nhịp, không kiểm soát",
        "Máy hàn bị hỏng",
        "Kim loại nền có vết nứt",
      ],
      exp: "Gatagata (ガタガタ) = thô ráp, lạch cạch, không nhất quán. Mô tả đường hàn có bề rộng, chiều cao và vân gợn không đều — không có nhịp hay kiểm soát. Khác Mimizu (thẳng nhưng ngoằn ngoèo) — Gatagata là cả đường hàn lộn xộn. Cả hai đều là phản hồi bạn cần nghe và cải thiện. 🇯🇵 MẸO: Văn hóa hàn Nhật đề cao 職人気質 (shokunin-kishitsu / tinh thần nghệ nhân) — một shokunin thật đặt đường hàn đều tăm tắp mọi lần. Khi đàn anh nói 'gatagata', hãy nghiêm túc. Hỏi 'doko ga warui desu ka?' (どこが悪いですか？ / chỗ nào cụ thể có vấn đề?) — đàn anh Nhật nể người muốn hiểu và tiến bộ.",
    },
    id: {
      q: "Seorang senior melihat jalur Anda, menggeleng, dan berkata 'Gatagata!' (ガタガタ). Apa maksudnya?",
      opts: [
        "Kecepatan jalan Anda terlalu cepat — jalur terlalu tipis",
        "Jalur Anda tak konsisten — kasar, tak rata, tanpa irama, tak terkendali",
        "Mesin las rusak",
        "Logam dasar retak",
      ],
      exp: "Gatagata (ガタガタ) = kasar, berderak, tak konsisten. Menggambarkan jalur dengan lebar, tinggi, dan pola riak tak beraturan — tanpa irama atau kendali konsisten. Berbeda dari Mimizu (lurus tapi bergoyang) — Gatagata berarti seluruh jalur berantakan. Keduanya masukan yang perlu Anda dengar dan perbaiki. 🇯🇵 TIPS: Budaya las Jepang menjunjung 職人気質 (shokunin-kishitsu / jiwa pengrajin) — shokunin sejati membuat jalur seragam sempurna setiap kali. Saat senior berkata 'gatagata', tanggapi serius. Tanyakan 'doko ga warui desu ka?' (どこが悪いですか？ / bagian mana tepatnya yang bermasalah?) — senior Jepang menghargai pekerja yang ingin memahami dan berkembang.",
    },
  },
  206: {
    vi: {
      q: "Sau khi hàn một tấm lớn, giám sát nói 'Hizumi ga deta!' (歪みが出た！). Điều gì đã xảy ra?",
      opts: [
        "Mối hàn đạt kiểm tra — tuyệt vời",
        "Khí bảo vệ hết giữa chừng",
        "Biến dạng / vênh — nhiệt hàn làm tấm kim loại cong hoặc vênh khỏi hình dạng",
        "Xuất hiện vết nứt trong mối hàn",
      ],
      exp: "Hizumi (歪み) = biến dạng / vênh. Khi hàn, nhiệt mạnh làm kim loại giãn rồi co không đều khi nguội — làm vênh tấm. Càng nhiều lượt = nhiều nhiệt = nhiều biến dạng. Giải pháp: thứ tự đính hàn đúng, hàn lùi (後退法), tạo ngược trước (逆ひずみ法), và giảm nhiệt đầu vào. 🇯🇵 MẸO: Trong chế tạo Nhật, kiểm soát hizumi được coi là dấu hiệu thợ giỏi. 'Thứ tự đính' (仮付け順序) do giám sát quyết và phải tuân đúng — đính bừa của người mới là nguyên nhân số 1 gây vênh tấm lớn ở công trường Nhật.",
    },
    id: {
      q: "Setelah mengelas pelat besar, supervisor berkata 'Hizumi ga deta!' (歪みが出た！). Apa yang terjadi?",
      opts: [
        "Las lulus inspeksi — kerja bagus",
        "Gas pelindung habis saat mengelas",
        "Distorsi / melengkung — panas dari pengelasan membuat pelat logam bengkok atau melengkung",
        "Muncul retak di las",
      ],
      exp: "Hizumi (歪み) = distorsi / melengkung. Saat mengelas, panas hebat membuat logam memuai lalu menyusut tak merata saat mendingin — ini melengkungkan pelat. Makin banyak pass = makin panas = makin banyak distorsi. Solusi: urutan tack yang benar, las mundur (後退法), pre-setting (逆ひずみ法), dan meminimalkan masukan panas. 🇯🇵 TIPS: Dalam fabrikasi Jepang, mengendalikan hizumi dianggap tanda tukang mahir. 'Urutan tack' (仮付け順序) ditentukan supervisor dan harus diikuti persis — tack acak oleh pekerja baru adalah penyebab #1 distorsi pelat besar di lokasi Jepang.",
    },
  },
  207: {
    vi: {
      q: "Sau khi hàn TIG một mối thép không gỉ không dùng thuốc, đàn anh vẫn nói 'Noro tore!' (ノロとれ！). Điều này có hợp lý không, và bạn thực sự nên kiểm tra gì?",
      opts: [
        "Có, vì 'noro' ở đây nghĩa là 'kiểm tra lưu lượng khí', không phải xỉ",
        "Không, vì 'noro tore' chỉ áp dụng cho hàn FCAW, không bao giờ cho phương pháp khác",
        "Có, hợp lý — hàn TIG luôn tạo xỉ nặng như hàn que, nên gõ bỏ như vậy",
        "Không hợp trực tiếp — hàn TIG không tạo xỉ (không dùng thuốc); đàn anh có lẽ nói nhầm, hoặc ý là kiểm tra ôxít/màu nhiệt đổi màu",
      ],
      exp: "Noro (ノロ) = xỉ, cặn đóng vảy từ các phương pháp có THUỐC như hàn que (SMAW) hoặc lõi thuốc (FCAW). Hàn TIG (GTAW) không dùng thuốc và không tạo xỉ — nên 'noro tore' theo nghĩa đen không áp dụng. Nếu đàn anh nói vậy khi làm TIG, họ có thể dùng lỏng lẻo với nghĩa 'làm sạch bề mặt', có lẽ chỉ vảy ôxít hoặc màu nhiệt, cần xử lý khác (bàn chải inox hoặc tẩy axit), không phải gõ. 🇯🇵 MẸO: Ở một số vùng Nhật, thợ nói 'kasu' (カス) thay 'noro' cho xỉ — cùng nghĩa, khác thổ ngữ. Nhưng luôn xác nhận thứ trên bề mặt thực sự là gì trước khi cầm búa đục.",
    },
    id: {
      q: "Setelah las TIG sambungan baja tahan karat tanpa fluks, senior tetap berkata 'Noro tore!' (ノロとれ！). Apakah ini masuk akal, dan apa yang sebenarnya harus Anda periksa?",
      opts: [
        "Ya, karena 'noro' di sini berarti 'periksa aliran gas', bukan terak",
        "Tidak, karena 'noro tore' hanya berlaku untuk las FCAW, tak pernah proses lain",
        "Ya, masuk akal — las TIG selalu menghasilkan terak berat seperti las busur, jadi ketuk dengan cara sama",
        "Tidak berlaku langsung — las TIG tak menghasilkan terak (tak pakai fluks); senior mungkin salah ucap, atau maksudnya periksa oksida/perubahan warna panas",
      ],
      exp: "Noro (ノロ) = terak, residu berkerak dari proses berbasis FLUKS seperti las busur (SMAW) atau flux-cored (FCAW). Las TIG (GTAW) tak memakai fluks dan tak menghasilkan terak — jadi 'noro tore' secara harfiah tak berlaku. Jika senior mengatakannya saat kerja TIG, mereka mungkin memakainya longgar untuk 'bersihkan permukaan', kemungkinan merujuk kerak oksida atau heat tint, yang perlu penanganan berbeda (sikat stainless atau pickling), bukan diketuk. 🇯🇵 TIPS: Di beberapa daerah Jepang, pekerja mengucapkan 'kasu' (カス) alih-alih 'noro' untuk terak — sama, beda dialek lokasi. Tapi selalu pastikan apa yang sebenarnya ada di permukaan sebelum meraih palu ketuk.",
    },
  },
  208: {
    vi: {
      q: "'Karitsuke' (仮付け) hoặc 'Tenzuke' (点付け) là gì và vì sao quan trọng?",
      opts: [
        "Hàn đính — mối hàn tạm ngắn giữ chi tiết đúng vị trí trước khi hàn đầy đủ. Chất lượng quan trọng vì khuyết tật ở mối đính làm nhiễm mối hàn cuối",
        "Một loại hàn góc chỉ dùng ở góc",
        "Lượt phủ cuối hoàn thành mối hàn",
        "Một khuyết tật hàn do đặt sai vị trí",
      ],
      exp: "Karitsuke (仮付け) / Tenzuke (点付け) = Hàn đính. Mối hàn ngắn cách quãng giữ chi tiết đúng vị trí trước khi hàn đầy đủ. QUAN TRỌNG: khuyết tật ở mối đính (nứt, rỗ) bị hấp thụ vào mối hàn cuối và trở thành vấn đề nghiêm trọng. Đối xử với mối đính cẩn thận như mối hàn thật. Ở Nhật điều này được thực thi nghiêm. 🇯🇵 MẸO: Giám sát Nhật đôi khi thử người mới bằng cách xem cách họ đính — đính ẩu, nhanh với hố và rỗ lộ rõ báo hiệu người cẩu thả. Chiều dài đính tối thiểu, lấp hố đúng và khoảng cách đúng (指定ピッチ) đều bị kiểm. Chất lượng đính = chất lượng công việc ở Nhật.",
    },
    id: {
      q: "Apa itu 'Karitsuke' (仮付け) atau 'Tenzuke' (点付け) dan mengapa penting?",
      opts: [
        "Tack weld — las sementara pendek yang menahan bagian pada posisi sebelum las penuh. Mutu penting karena cacat pada tack mencemari las akhir",
        "Sejenis las sudut hanya untuk pojok",
        "Cover pass akhir yang menyelesaikan las",
        "Cacat las akibat pemosisian yang salah",
      ],
      exp: "Karitsuke (仮付け) / Tenzuke (点付け) = Tack weld. Las pendek berselang untuk menahan bagian pada posisi benar sebelum las penuh. PENTING: cacat tack (retak, porositas) terserap ke las akhir dan menjadi masalah serius. Perlakukan tack seperti las penuh. Di Jepang ini ditegakkan ketat. 🇯🇵 TIPS: Supervisor Jepang kadang menguji pekerja baru dengan mengamati cara mereka membuat karitsuke — tack ceroboh dan cepat dengan kawah serta porositas jelas menandakan pekerja ceroboh. Panjang tack minimum, pengisian kawah benar, dan jarak benar (指定ピッチ) semua diperiksa. Mutu tack = mutu kerja di Jepang.",
    },
  },
  209: {
    vi: {
      q: "Giám sát nói 'Kaisaki wo tsukure!' (開先を作れ！). Bạn được yêu cầu làm gì?",
      opts: [
        "Làm một sợi dây hàn",
        "Chuẩn bị rãnh / vát mép mối nối — cắt hoặc mài mép tấm theo một góc nhất định để ngấu đúng",
        "Xịt chất chống văng",
        "Vẽ ký hiệu hàn lên bản vẽ",
      ],
      exp: "Kaisaki (開先) = Rãnh / chuẩn bị mối nối. Mép tấm được vát hoặc tạo hình trước khi hàn để hồ quang và kim loại bù chạm được chân, đảm bảo ngấu hoàn toàn. Các loại phổ biến: chữ I (I形), chữ V (V形), chữ X (X形), chữ U (U形). Hình dạng và kích thước kaisaki được quy định trên bản vẽ. 🇯🇵 MẸO: Góc kaisaki và mặt chân (ルートフェース) phải khớp WPS chính xác. Ở Nhật, chuẩn bị rãnh được kiểm bằng 角度ゲージ (thước góc) và mặt chân đo bằng thước cặp — lệch quá dung sai phải mài lại trước khi bắt đầu hàn.",
    },
    id: {
      q: "Supervisor berkata 'Kaisaki wo tsukure!' (開先を作れ！). Anda diminta melakukan apa?",
      opts: [
        "Membuat kawat las",
        "Menyiapkan alur / persiapan sambungan — memotong atau menggerinda tepi pelat pada sudut tertentu untuk penetrasi yang benar",
        "Menyemprot anti-percikan",
        "Menggambar simbol las pada gambar",
      ],
      exp: "Kaisaki (開先) = Alur / persiapan sambungan. Tepi pelat yang dibevel atau dibentuk sebelum mengelas agar busur dan logam pengisi mencapai akar untuk penetrasi penuh. Jenis umum: I-groove (I形), V-groove (V形), X-groove (X形), U-groove (U形). Bentuk dan dimensi kaisaki ditentukan pada gambar. 🇯🇵 TIPS: Sudut kaisaki dan root face (ルートフェース) harus cocok persis dengan WPS. Di Jepang, persiapan alur diperiksa dengan 角度ゲージ (alat ukur sudut) dan root face diukur dengan jangka sorong — penyimpangan di luar toleransi harus digerinda ulang sebelum pengelasan dimulai.",
    },
  },
  210: {
    vi: {
      q: "Đàn anh khen lượt chân của bạn: 'Uranami kirei da na!' (裏波きれいだな！). Bạn đã đạt được gì?",
      opts: [
        "Một bề mặt sạch trên đỉnh mối hàn",
        "Một đường hàn thẳng hoàn hảo",
        "Bọng ngược (back bead) — lượt chân ngấu xuyên hoàn toàn và tạo đường hàn sạch, đều thấy được ở mặt sau mối nối",
        "Bỏ xỉ đúng sau khi hàn",
      ],
      exp: "Uranami (裏波) = bọng ngược. Khi lượt chân ngấu hoàn toàn xuyên mối nối và tạo một đường hàn sạch, đều ở MẶT SAU. Đây là dấu hiệu ngấu chân hoàn hảo — rất được coi trọng, nhất là hàn ống và bình áp lực. Khó đạt: cần đúng khe hở chân, dòng điện và tốc độ. 🇯🇵 MẸO: 'Uranami' đẹp là niềm tự hào của thợ hàn Nhật. Trong thi chứng chỉ JIS hàn ống, mặt sau (bọng ngược) được kiểm bằng mắt và bằng chụp X-quang (RT). Uranami không đều, lồi quá hoặc lõm (chảy xệ) có thể trượt — hãy luyện kiểm soát bể chân.",
    },
    id: {
      q: "Senior memuji root pass Anda: 'Uranami kirei da na!' (裏波きれいだな！). Apa yang Anda capai?",
      opts: [
        "Permukaan bersih di atas las",
        "Garis jalur yang lurus sempurna",
        "Back bead — las akar menembus penuh dan membentuk jalur bersih dan rata yang terlihat di sisi belakang sambungan",
        "Pembuangan terak yang benar setelah mengelas",
      ],
      exp: "Uranami (裏波) = back bead. Saat root pass menembus penuh sambungan dan membentuk jalur bersih dan rata di SISI BELAKANG. Ini tanda penetrasi akar sempurna — sangat dihargai, terutama las pipa dan bejana tekan. Sulit dicapai: perlu root gap, arus, dan kecepatan yang tepat. 🇯🇵 TIPS: 'Uranami' yang indah adalah kebanggaan tukang las Jepang. Dalam ujian sertifikasi JIS las pipa, sisi belakang (back bead) diperiksa secara visual dan dengan radiografi (RT). Uranami tak rata, terlalu cembung, atau cekung (melorot) bisa gagal — latih pengendalian kolam akar.",
    },
  },
  211: {
    vi: {
      q: "Trong lần thăm công trường, người kiểm tra chỉ vào mối nối và nói 'Mechigai ga aru!' (目違いがある！). Vấn đề là gì?",
      opts: [
        "Hỗn hợp khí bảo vệ sai",
        "Dùng sai phương pháp hàn",
        "Đường hàn quá cao",
        "Lệch mép — hai mép tấm ở mối nối không bằng nhau; một bên cao hơn bên kia",
      ],
      exp: "Mechigai (目違い) = lệch mép / không khớp. Hai tấm hàn với nhau không cùng độ cao — một mép cao hơn. Điều này tạo phân bố ứng suất không đều và có thể dẫn đến khuyết tật. Tiêu chuẩn JIS quy định độ lệch tối đa cho phép tùy chiều dày tấm. Khắc phục bằng kẹp trước khi hàn. 🇯🇵 MẸO: JIS B 8270 quy định giới hạn mechigai cho bình áp lực. Với kết cấu thép, áp dụng JIS G 3353 và quy chuẩn xây dựng. Trên công trường, quy tắc nhanh: mechigai không vượt 10% chiều dày tấm. Người kiểm tra mang thước thẳng và thước khe — họ sẽ kiểm trước khi chứng kiến bất kỳ lượt chân nào.",
    },
    id: {
      q: "Saat kunjungan lokasi, inspektor menunjuk sambungan dan berkata 'Mechigai ga aru!' (目違いがある！). Apa masalahnya?",
      opts: [
        "Campuran gas pelindung salah",
        "Proses las yang salah dipakai",
        "Jalur las terlalu tinggi",
        "Misalignment — kedua tepi pelat di sambungan tidak rata; satu lebih tinggi dari yang lain",
      ],
      exp: "Mechigai (目違い) = misalignment / tidak sejajar. Kedua pelat yang dilas tidak sama tinggi — satu tepi lebih tinggi. Ini menciptakan distribusi tegangan tak merata dan bisa menimbulkan cacat. Standar JIS menentukan misalignment maksimum sesuai tebal pelat. Perbaiki dengan klem sebelum mengelas. 🇯🇵 TIPS: JIS B 8270 menetapkan batas mechigai untuk bejana tekan. Untuk baja struktur, berlaku JIS G 3353 dan kode bangunan. Di lokasi, aturan cepat: mechigai tak boleh melebihi 10% tebal pelat. Inspektor membawa penggaris lurus dan gap gauge — mereka memeriksanya sebelum menyaksikan root pass mana pun.",
    },
  },
  212: {
    vi: {
      q: "Tổ trưởng kiểm tra mối nối tấm mỏng và nói 'Yoochi shita!' (溶落ちした！). Sai ở đâu?",
      opts: [
        "Thủng — hồ quang nóng chảy xuyên hoàn toàn kim loại nền, tạo lỗ trên tấm",
        "Đường hàn quá hẹp",
        "Mối hàn hoàn thành hoàn hảo",
        "Chưa bỏ xỉ",
      ],
      exp: "Yoochi (溶落ち) = thủng / chảy xuyên. Hồ quang quá nóng, quá chậm, hoặc khe hở chân quá rộng — kim loại nền chảy xuyên hoàn toàn, để lại lỗ. Hay gặp với tấm mỏng hoặc khe chân rộng. Phòng ngừa: giảm dòng, tăng tốc độ, dùng thanh lót đáy (裏当て金), hoặc giảm khe chân. 🇯🇵 MẸO: Yoochi ở lượt chân trong thi chứng chỉ JIS là trượt tự động. Nếu thấy bể hàn quá loãng và bắt đầu rớt, tăng tốc độ ngay — đừng đứng yên. Sửa lỗ yoochi cần mài ra, đính lại khe, và hàn lại — một sự xấu hổ tốn thời gian trong lúc thi.",
    },
    id: {
      q: "Mandor memeriksa sambungan pelat tipis dan berkata 'Yoochi shita!' (溶落ちした！). Apa yang salah?",
      opts: [
        "Tembus bakar — busur meleleh menembus logam dasar sepenuhnya, membuat lubang di pelat",
        "Jalur las terlalu sempit",
        "Las selesai sempurna",
        "Terak belum dibuang",
      ],
      exp: "Yoochi (溶落ち) = tembus bakar / melt-through. Busur terlalu panas, terlalu lambat, atau root gap terlalu lebar — logam dasar meleleh menembus sepenuhnya, meninggalkan lubang. Lebih umum pada pelat tipis atau root gap lebar. Pencegahan: turunkan arus, naikkan kecepatan jalan, pakai backing bar (裏当て金), atau perkecil root gap. 🇯🇵 TIPS: Yoochi pada root pass saat ujian sertifikasi JIS adalah kegagalan otomatis. Jika kolam terasa terlalu cair dan mulai turun, segera naikkan kecepatan — jangan diam. Memperbaiki lubang yoochi perlu digerinda keluar, tack celahnya, dan dilas ulang — hal memalukan yang memakan waktu saat ujian.",
    },
  },
  213: {
    vi: {
      q: "Khi hàn thép không gỉ, giám sát nói 'Ura-gasu wo shiro!' (裏ガスをしろ！). Bạn cần chuẩn bị gì?",
      opts: [
        "Tăng gấp đôi lưu lượng khí bảo vệ ở mặt trước",
        "Thổi khí mặt sau (back purge) — che mặt sau mối hàn inox bằng khí trơ (Argon) để ngăn ôxy hóa",
        "Dùng khí CO₂ thay Argon",
        "Bôi hồ thuốc lên mặt sau mối nối",
      ],
      exp: "Ura-gasu (裏ガス) = thổi khí mặt sau / che mặt sau. Khi hàn inox hoặc titan, mặt sau mối hàn phải được che bằng Argon hoặc Nitơ để ngăn ôxy hóa. Thiếu nó, mặt sau ôxy hóa — tạo màu cầu vồng (Tenpaa-karaa / テンパーカラー) và giảm mạnh khả năng chống ăn mòn. 🇯🇵 MẸO: Lưu lượng ura-gasu và thời gian thổi được quy định trong WPS. Lỗi thường gặp là không thổi đủ lâu trước khi bật hồ quang — oxy còn lại trong ống vẫn làm ôxy hóa mối đầu. Thổi đến khi máy đo oxy trong ống dưới 100 ppm (0,01%) cho các ứng dụng quan trọng như ống thực phẩm hoặc dược.",
    },
    id: {
      q: "Saat mengelas baja tahan karat, supervisor berkata 'Ura-gasu wo shiro!' (裏ガスをしろ！). Apa yang perlu Anda siapkan?",
      opts: [
        "Menggandakan aliran gas pelindung di sisi depan",
        "Back purging — melindungi sisi belakang las stainless dengan gas inert (Argon) untuk mencegah oksidasi",
        "Memakai gas CO₂ alih-alih Argon",
        "Mengoleskan pasta fluks ke belakang sambungan",
      ],
      exp: "Ura-gasu (裏ガス) = back purge / pelindung belakang. Saat mengelas stainless atau titanium, sisi belakang las harus dilindungi dengan Argon atau Nitrogen untuk mencegah oksidasi. Tanpanya, permukaan belakang teroksidasi — menimbulkan warna pelangi (Tenpaa-karaa / テンパーカラー) dan sangat menurunkan ketahanan korosi. 🇯🇵 TIPS: Laju ura-gasu dan waktu purge ditentukan dalam WPS. Kesalahan umum adalah purge kurang lama sebelum menyalakan busur — oksigen yang tersisa di pipa tetap mengoksidasi las pertama. Purge sampai meter oksigen dalam pipa membaca di bawah 100 ppm (0,01%) untuk aplikasi kritis seperti pipa food-grade atau farmasi.",
    },
  },
  214: {
    vi: {
      q: "Bạn hàn inox không thổi khí mặt sau và giám sát thấy màu cầu vồng ở mặt sau. Anh ấy nói 'Tenpaa-karaa da!' (テンパーカラーだ！). Điều này cho thấy gì?",
      opts: [
        "Chất lượng hàn tuyệt vời — cầu vồng cho thấy ngấu hoàn toàn",
        "Bình thường với inox — không cần làm gì",
        "Màu nhiệt (heat tint) — bề mặt inox ôxy hóa ở nhiệt độ cao, giảm chống ăn mòn. Mức độ: Vàng → Xanh → Tím → Xám (tệ nhất)",
        "Khí lót mặt sau đang hoạt động đúng",
      ],
      exp: "Tenpaa-karaa (テンパーカラー) = màu nhiệt / màu tôi. Trên inox: Vàng = nhẹ (chấp nhận ở một số quy chuẩn), Xanh = ôxy hóa đáng kể, Tím/Xám = nặng (chống ăn mòn rất kém). Nguyên nhân: che khí mặt sau không đủ hoặc nhiệt đầu vào quá lớn. Phải loại bỏ cơ học hoặc hóa học ở ứng dụng quan trọng về ăn mòn. 🇯🇵 MẸO: Ở nhà máy hóa chất và chế biến thực phẩm Nhật, tenpaa-karaa trên bề mặt hàn SUS là lỗi nghiêm trọng — kể cả màu vàng cũng có thể bị từ chối. Cách xử: 酸洗い (sansarai / tẩy axit) bằng hồ axit hỗn hợp hoặc đánh bóng điện. Ở công trường xây dựng, màu vàng nhạt thường chấp nhận — luôn xác nhận tiêu chí nghiệm thu với giám sát QC trước khi làm inox.",
    },
    id: {
      q: "Anda mengelas stainless tanpa back purge dan supervisor melihat warna pelangi di belakang. Ia berkata 'Tenpaa-karaa da!' (テンパーカラーだ！). Apa artinya?",
      opts: [
        "Kualitas las bagus — pelangi menunjukkan penetrasi penuh",
        "Normal untuk stainless — tak perlu tindakan",
        "Heat tint — permukaan stainless teroksidasi pada suhu tinggi, menurunkan ketahanan korosi. Tingkat: Emas → Biru → Ungu → Abu (terburuk)",
        "Gas backing bekerja dengan benar",
      ],
      exp: "Tenpaa-karaa (テンパーカラー) = heat tint / warna temper. Pada stainless: Emas = ringan (diterima di beberapa kode), Biru = oksidasi signifikan, Ungu/Abu = parah (ketahanan korosi sangat buruk). Penyebab: pelindung gas belakang kurang atau masukan panas berlebih. Harus dihilangkan secara mekanis atau kimiawi pada aplikasi kritis korosi. 🇯🇵 TIPS: Di pabrik kimia dan pengolahan makanan Jepang, tenpaa-karaa pada permukaan las SUS adalah kegagalan kritis — bahkan warna emas bisa ditolak. Solusinya 酸洗い (sansarai / acid pickling) dengan pasta asam campuran atau electropolishing. Di lokasi konstruksi, tint emas tipis sering diterima — selalu konfirmasi kriteria penerimaan dengan supervisor QC sebelum mengerjakan stainless.",
    },
  },
  215: {
    vi: {
      q: "Giám sát nói 'Hatsuri shiro!' (ハツリしろ！). Bạn phải làm gì?",
      opts: [
        "Tăng tốc độ cấp dây",
        "Xịt chất chống văng",
        "Bôi thuốc lên mối nối",
        "Khoét ra / đục ra — loại bỏ kim loại hàn lỗi bằng gouging hồ quang khí hoặc mài để hàn lại",
      ],
      exp: "Hatsuri (ハツリ) = khoét hoặc đục bỏ kim loại hàn. Khi mối hàn trượt kiểm tra, phần lỗi phải được loại bỏ hoàn toàn trước khi hàn lại. Cách: gouging hồ quang khí (ガウジング), mài bằng Bo-gura (棒グラ), hoặc đục. Vùng đó phải sạch đến kim loại trần trước khi hàn lại. 🇯🇵 MẸO: Gouging hồ quang khí (ガウジング) để lại bề mặt nhiễm carbon — sau khi gouging, PHẢI mài bề mặt để bỏ lớp carbon (カーボン除去 / kabon-jokyo) trước khi hàn lại. Hàn đè lên vết gouge nhiễm carbon mà không mài gây rỗ khí và lẫn tạp. Bước này người mới hay bỏ và gây trượt lặp lại.",
    },
    id: {
      q: "Supervisor berkata 'Hatsuri shiro!' (ハツリしろ！). Apa yang harus Anda lakukan?",
      opts: [
        "Menaikkan kecepatan umpan kawat",
        "Menyemprot anti-percikan",
        "Mengoleskan fluks ke sambungan",
        "Menggerinda/mengorek keluar — membuang logam las cacat dengan air arc gouging atau gerinda agar bisa dilas ulang",
      ],
      exp: "Hatsuri (ハツリ) = mengorek atau memahat keluar logam las. Saat las gagal inspeksi, bagian cacat harus dibuang sepenuhnya sebelum dilas ulang. Metode: air arc gouging (ガウジング), gerinda dengan Bo-gura (棒グラ), atau memahat. Area harus bersih hingga logam telanjang sebelum dilas ulang. 🇯🇵 TIPS: Air arc gouging (ガウジング) meninggalkan permukaan terkontaminasi karbon — setelah gouging, Anda HARUS menggerinda permukaan untuk membuang lapisan karbon (カーボン除去 / kabon-jokyo) sebelum dilas ulang. Mengelas di atas gouge terkontaminasi karbon tanpa menggerinda menyebabkan porositas dan inklusi. Langkah ini sering dilewati pekerja baru dan menyebabkan kegagalan berulang.",
    },
  },
  216: {
    vi: {
      q: "Người kiểm tra nói 'Torinao-shi da!' (取り直しだ！). Điều này có nghĩa gì với thợ hàn?",
      opts: [
        "Làm lại — toàn bộ mối hàn (hoặc đoạn) phải bị loại bỏ và làm lại từ đầu. Câu đáng sợ nhất trên công trường Nhật",
        "Thêm một lượt phủ nữa lên trên",
        "Mối hàn hoàn hảo — được duyệt",
        "Chỉ dừng và đổi cài đặt máy hàn",
      ],
      exp: "Torinao-shi (取り直し) = làm lại / làm mới. Mối hàn bị từ chối và phải loại bỏ hoàn toàn rồi hàn lại. Tốn thời gian, vật liệu và uy tín. Trong văn hóa chất lượng Nhật, làm lại được xem rất nghiêm túc — nó ảnh hưởng đánh giá thợ. Phòng ngừa: làm đúng ngay lần đầu. 🇯🇵 MẸO: Ở công ty Nhật, tỷ lệ làm lại (手直し / tenaoshi hoặc 取り直し) được theo dõi theo từng thợ và xem xét trong họp chất lượng hằng tháng. Tỷ lệ làm lại cao sẽ ảnh hưởng gia hạn hợp đồng. Văn hóa chất lượng Nhật truy khuyết tật về từng thợ — nổi tiếng làm sạch ngay lần đầu là uy tín quan trọng nhất bạn có thể xây.",
    },
    id: {
      q: "Inspektor berkata 'Torinao-shi da!' (取り直しだ！). Apa artinya bagi tukang las?",
      opts: [
        "Rework — seluruh las (atau bagian) harus dibuang dan dikerjakan ulang dari awal. Kata paling ditakuti di lokasi Jepang",
        "Tambahkan satu cover pass lagi di atas",
        "Las sempurna — disetujui",
        "Berhenti dan ubah setelan mesin las saja",
      ],
      exp: "Torinao-shi (取り直し) = rework / ulang. Las ditolak dan harus dibuang sepenuhnya lalu dilas ulang. Ini memakan waktu, material, dan reputasi. Dalam budaya mutu Jepang, rework dianggap sangat serius — memengaruhi evaluasi tukang. Pencegahan: kerjakan benar sejak awal. 🇯🇵 TIPS: Di perusahaan Jepang, tingkat rework (手直し / tenaoshi atau 取り直し) dilacak per tukang dan ditinjau dalam rapat mutu bulanan. Tingkat rework tinggi akan memengaruhi perpanjangan kontrak. Budaya mutu Jepang menelusuri cacat ke individu tukang — dikenal sebagai kerja bersih sekali jadi adalah reputasi terpenting yang bisa Anda bangun.",
    },
  },
  217: {
    vi: {
      q: "Một thợ nói công việc cần 'Genga' (現合). Điều này nghĩa là gì?",
      opts: [
        "Chỉ dùng bản vẽ máy tính",
        "Lắp khớp tại hiện trường — đo và cắt chi tiết ngay tại kết cấu thực vì bản vẽ không đủ hoặc khe hở đã thay đổi",
        "Một loại giấy chứng nhận kiểm tra",
        "Làm thêm giờ cuối tuần",
      ],
      exp: "Genga (現合) = lắp khớp tại hiện trường / lắp thực địa. Khi chi tiết không khớp bản vẽ chính xác do dung sai chế tạo hoặc thay đổi kết cấu, thợ đo khe thực tế tại chỗ và cắt/chế tạo chi tiết cho vừa. Phổ biến trong đóng tàu và xây dựng dân dụng. 🇯🇵 MẸO: Khi làm genga, LUÔN ghi lại kích thước thực đo và sửa đổi bạn đã làm. Tài liệu công trường Nhật (施工記録 / shiko-kiroku) yêu cầu theo dõi các sửa đổi tại hiện trường. Sửa đổi không ghi chép bị phát hiện khi kiểm tra gây rắc rối giấy tờ nghiêm trọng và có thể phải kiểm tra lại các mối nối liên quan.",
    },
    id: {
      q: "Seorang tukang mengatakan pekerjaan butuh 'Genga' (現合). Apa artinya?",
      opts: [
        "Memakai gambar komputer saja",
        "Fitting kustom di lokasi — mengukur dan memotong bagian langsung di struktur nyata karena gambar tak cukup atau celah berubah",
        "Sejenis sertifikat inspeksi",
        "Lembur di akhir pekan",
      ],
      exp: "Genga (現合) = fitting di lokasi / field fitting. Saat bagian tak cocok persis dengan gambar akibat toleransi fabrikasi atau perubahan struktur, pekerja mengukur celah aktual di lokasi dan memotong/membuat bagian agar pas. Umum di pembuatan kapal dan konstruksi sipil. 🇯🇵 TIPS: Saat mengerjakan genga, SELALU catat dimensi aktual yang Anda ukur dan modifikasi yang Anda buat. Dokumentasi lokasi Jepang (施工記録 / shiko-kiroku) mensyaratkan modifikasi lapangan dilacak. Modifikasi lapangan tak terdokumentasi yang ditemukan saat inspeksi menimbulkan masalah dokumen serius dan mungkin memerlukan inspeksi ulang sambungan terkait.",
    },
  },
  218: {
    vi: {
      q: "'Chippingu' (チッピング) trong quy trình hàn là gì, và làm chính xác khi nào?",
      opts: [
        "Xịt chất chống văng trước khi hàn",
        "Kiểm tra đường hàn tìm vết nứt sau khi hàn",
        "Bỏ xỉ sau mỗi lượt bằng búa đục hoặc máy đục hơi — làm giữa MỖI lớp trong hàn nhiều lượt",
        "Mài mối hàn đến chiều cao cuối",
      ],
      exp: "Chippingu (チッピング) = đục xỉ / bỏ xỉ. Làm sau mỗi lượt trong hàn nhiều lượt. Không bỏ xỉ giữa các lượt gây lẫn xỉ (スラグ巻き込み) — khuyết tật bên trong nghiêm trọng sẽ trượt kiểm tra NDT. Quy trình: đục → chải sắt → kiểm → hàn lượt tiếp. 🇯🇵 MẸO: Quy trình đục đúng của Nhật gọi là '打検' (dakken / gõ và kiểm) — sau khi đục, gõ nhẹ đường hàn bằng cán để nghe xỉ còn sót. Tiếng rỗng nghĩa là còn xỉ. Kiểm tra gõ nhanh này là phần thói quen chuyên nghiệp được kỳ vọng trên công trường Nhật.",
    },
    id: {
      q: "Apa itu 'Chippingu' (チッピング) dalam alur kerja las, dan kapan tepatnya dilakukan?",
      opts: [
        "Menyemprot anti-percikan sebelum mengelas",
        "Memeriksa jalur untuk retak setelah mengelas",
        "Membuang terak setelah tiap pass memakai palu ketuk atau air chipper — dilakukan di antara SETIAP lapisan pada las multi-pass",
        "Menggerinda las ke tinggi akhir",
      ],
      exp: "Chippingu (チッピング) = pengetukan terak / pembuangan terak. Dilakukan setelah tiap pass pada las multi-pass. Gagal membuang terak antar-pass menyebabkan inklusi terak (スラグ巻き込み) — cacat internal serius yang akan gagal inspeksi NDT. Proses: ketuk → sikat kawat → periksa → las pass berikutnya. 🇯🇵 TIPS: Alur pengetukan Jepang yang benar disebut '打検' (dakken / ketuk dan periksa) — setelah mengetuk, ketuk ringan jalur dengan gagang untuk mendengar terak yang longgar. Bunyi berongga berarti masih ada terak. Uji ketuk cepat ini bagian dari rutinitas profesional yang diharapkan di lokasi Jepang.",
    },
  },
  219: {
    vi: {
      q: "Đàn anh nói bạn cần 'Bokae' (棒替え) sớm. Điều này nghĩa là gì — và liên quan đến phương pháp hàn nào?",
      opts: [
        "Đổi cuộn dây — dùng trong hàn FCAW",
        "Chuyển sang khí bảo vệ khác — dùng trong hàn MIG/MAG",
        "Thay đầu tiếp điện — dùng trong mọi hàn bán tự động",
        "Đổi que hàn / thanh hàn — chỉ liên quan hàn que (SMAW / 被覆アーク溶接). KHÔNG dùng trong hàn bán tự động",
      ],
      exp: "Bokae (棒替え) = đổi que hàn. Trong hàn que (SMAW / 被覆アーク溶接), bạn dùng que ngắn cháy hết và phải thay. Từ này CHỈ liên quan hàn que. Ở xưởng đóng tàu và nhà máy dùng FCAW/MAG bán tự động, dây từ cuộn — không cần 'bokae'. Dùng từ này sai chỗ sẽ làm người ta bối rối! 🇯🇵 MẸO: Que hàn phải cất trong tủ khô (乾燥庫 / kanso-ko) ở 40–50°C để tránh hút ẩm. Que ẩm gây nứt hydro và rỗ khí. Trước khi dùng que đã cất, công trường Nhật yêu cầu sấy lại (再乾燥 / sai-kanso) ở nhiệt độ quy định — xem bảng dữ liệu của nhà sản xuất que về thời gian và nhiệt độ.",
    },
    id: {
      q: "Senior berkata Anda perlu 'Bokae' (棒替え) segera. Apa artinya — dan relevan untuk proses las mana?",
      opts: [
        "Ganti gulungan kawat — dipakai di las FCAW",
        "Beralih ke gas pelindung berbeda — dipakai di las MIG/MAG",
        "Ganti contact tip — dipakai di semua las semi-otomatis",
        "Ganti elektroda / batang las — relevan untuk SMAW (las busur/被覆アーク溶接) saja. TIDAK dipakai di las semi-otomatis",
      ],
      exp: "Bokae (棒替え) = ganti elektroda. Pada las busur (SMAW / 被覆アーク溶接), Anda memakai batang elektroda pendek yang habis terbakar dan harus diganti. Kata ini HANYA relevan untuk las busur. Di galangan dan pabrik yang memakai FCAW/MAG semi-otomatis, kawat dari gulungan — tak perlu 'bokae'. Memakai kata ini di lokasi yang salah akan membingungkan orang! 🇯🇵 TIPS: Elektroda las harus disimpan dalam lemari kering (乾燥庫 / kanso-ko) pada 40–50°C untuk mencegah penyerapan lembap. Elektroda basah menyebabkan retak hidrogen dan porositas. Sebelum memakai elektroda simpanan, lokasi Jepang mensyaratkan pengeringan ulang (再乾燥 / sai-kanso) pada suhu tertentu — periksa lembar data pabrikan elektroda untuk waktu dan suhu.",
    },
  },
  220: {
    vi: {
      q: "Đàn anh nói dây bị 'Tobidashi!' (飛び出し！) cho việc dây 1.2mm của bạn. Theo quy tắc kinh nghiệm của Nhật, bạn nên nhắm chiều dài nhô dây (stick-out) là bao nhiêu?",
      opts: [
        "Khoảng 12mm — theo quy tắc stick-out = 10× đường kính dây",
        "Khoảng 25mm — cùng một giá trị cố định bất kể đường kính dây",
        "Khoảng 1.2mm — stick-out bằng đúng đường kính dây",
        "Khoảng 6mm — quy tắc một nửa đường kính dây",
      ],
      exp: "Tobidashi (飛び出し) = chiều dài nhô dây / phần dây ra, khoảng cách từ đầu tiếp điện đến bề mặt vật. Quá dài: hồ quang bất ổn, ngấu kém, che khí hỏng. Thợ Nhật dùng quy tắc đơn giản: stick-out = 10× đường kính dây. Với dây 1.2mm, khoảng 12mm — không phải 25mm cố định bất kể cỡ dây, và không phải bằng đúng đường kính dây. 🇯🇵 MẸO: Với dây 1.6mm, nhắm khoảng 16mm stick-out theo cùng quy tắc 10×. Khi hàn trong mối chật không thấy rõ đầu tip, thợ kinh nghiệm phát triển cảm giác về trọng lượng súng và tiếng hồ quang cho biết khoảng cách đúng.",
    },
    id: {
      q: "Senior berkata kawat 'Tobidashi!' (飛び出し！) untuk pekerjaan kawat 1.2mm Anda. Memakai aturan praktis Jepang, berapa panjang stick-out yang harus dituju?",
      opts: [
        "Sekitar 12mm — memakai aturan stick-out = 10× diameter kawat",
        "Sekitar 25mm — nilai tetap yang sama tanpa memandang diameter kawat",
        "Sekitar 1.2mm — stick-out harus sama persis dengan diameter kawat",
        "Sekitar 6mm — aturan setengah diameter kawat",
      ],
      exp: "Tobidashi (飛び出し) = stick-out / ekstensi kawat, jarak dari contact tip ke permukaan kerja. Terlalu panjang: busur tak stabil, penetrasi buruk, kegagalan pelindung. Tukang las Jepang memakai aturan sederhana: stick-out = 10× diameter kawat. Untuk kawat 1.2mm, sekitar 12mm — bukan 25mm tetap tanpa memandang ukuran kawat, dan bukan sama dengan diameter kawat itu sendiri. 🇯🇵 TIPS: Untuk kawat 1.6mm, tuju sekitar 16mm stick-out dengan aturan 10× yang sama. Saat mengelas di sambungan sempit di mana Anda tak bisa melihat tip dengan jelas, pekerja berpengalaman mengembangkan rasa terhadap berat gun dan bunyi busur yang memberi tahu jarak yang benar.",
    },
  },
  301: {
    vi: {
      q: "Phát biểu nào về 'Shitamuki-shisei' (下向き姿勢 / tư thế bằng) là KHÔNG đúng?",
      opts: [
        "Mã ISO là PA và mã JIS là F",
        "Vì là tư thế dễ nhất, người kiểm tra JIS áp dụng tiêu chuẩn chất lượng đường hàn dễ dãi hơn cho mối thi tư thế bằng",
        "Người mới thường bắt đầu luyện hàn ở tư thế này",
        "Trọng lực kéo bể hàn xuống rãnh, giúp ngấu và hòa nhập",
      ],
      exp: "Shitamuki-shisei (下向き姿勢) = Tư thế bằng, 1G (rãnh) / 1F (góc), mã ISO PA. Trọng lực giúp bể hàn lắng vào mối nối, dễ học nhất — nhưng người kiểm tra JIS KHÔNG nới tiêu chuẩn cho mối tư thế bằng. Độ đều bề rộng, hòa mép và lấp hố vẫn bị soi kỹ như nhau. 🇯🇵 MẸO: Đừng cho rằng tư thế dễ = tiêu chuẩn thấp. Mối tư thế bằng cẩu thả trong thi JIS vẫn trượt — 'dễ' chỉ nói về độ khó thể chất, không phải mức chất lượng.",
    },
    id: {
      q: "Pernyataan mana tentang 'Shitamuki-shisei' (下向き姿勢 / posisi datar) yang TIDAK benar?",
      opts: [
        "Kode ISO-nya PA dan kode JIS-nya F",
        "Karena posisi termudah, inspektor JIS menerapkan standar kualitas jalur yang lebih longgar untuk las uji posisi datar",
        "Semua pemula biasanya memulai latihan las di posisi ini",
        "Gravitasi menarik kolam cair turun ke sambungan, membantu penetrasi dan fusi",
      ],
      exp: "Shitamuki-shisei (下向き姿勢) = Posisi datar, 1G (alur) / 1F (sudut), kode ISO PA. Gravitasi membantu kolam cair mengendap ke sambungan, menjadikannya posisi termudah dipelajari — tetapi inspektor JIS TIDAK melonggarkan standar untuk las posisi datar. Keseragaman lebar jalur, pembauran kaki, dan pengisian kawah diperiksa sama ketatnya. 🇯🇵 TIPS: Jangan anggap posisi mudah = standar rendah. Las posisi datar yang ceroboh pada uji JIS tetap gagal — 'mudah' hanya soal kesulitan fisik, bukan standar mutu.",
    },
  },
  302: {
    vi: {
      q: "Bản vẽ ghi 'Tatemuki-shisei' (立向き姿勢) với mã ISO 'PF'. Đồng nghiệp nói nghĩa là hàn đứng-xuống. Anh ấy đúng không?",
      opts: [
        "Không — PF thực ra là mã cho hàn ngang, không phải đứng",
        "Đúng — PF luôn chỉ đứng-xuống (立向下進)",
        "Không — PF chỉ hàn đứng-LÊN (立向上進 / Tatemuki-joshin); đứng-xuống dùng mã PG",
        "Đúng, nhưng chỉ cho mối ống; với mối tấm PF nghĩa là đứng-lên",
      ],
      exp: "Tatemuki-shisei (立向き姿勢) = Tư thế đứng, 3G (rãnh) / 3F (góc). Trong hàn đứng, ISO PF = đứng-LÊN (立向上進, hòa nhập và ngấu tốt hơn), còn ISO PG = đứng-XUỐNG (立向下進, nhanh hơn nhưng ngấu nông hơn). Hai mã KHÔNG thay lẫn được và sự phân biệt quan trọng cho phạm vi chứng chỉ. 🇯🇵 MẸO: Công trường Nhật mặc định đứng-LÊN (上進) vì hòa nhập và ngấu tốt hơn. Đứng-XUỐNG (下進) đôi khi dùng cho tấm mỏng trong sản xuất nhưng thường không khuyến khích cho mối kết cấu ở Nhật.",
    },
    id: {
      q: "Gambar menetapkan 'Tatemuki-shisei' (立向き姿勢) dengan kode ISO 'PF'. Rekan berkata ini berarti las tegak-turun. Apakah ia benar?",
      opts: [
        "Tidak — PF sebenarnya kode untuk las mendatar, sama sekali bukan tegak",
        "Ya — PF selalu merujuk tegak-turun (立向下進)",
        "Tidak — PF merujuk las tegak-NAIK (立向上進 / Tatemuki-joshin); tegak-turun memakai kode PG",
        "Ya, tapi hanya untuk las pipa; untuk las pelat PF berarti tegak-naik",
      ],
      exp: "Tatemuki-shisei (立向き姿勢) = Posisi tegak, 3G (alur) / 3F (sudut). Dalam las tegak, ISO PF = tegak-NAIK (立向上進, fusi dan penetrasi lebih baik), sedangkan ISO PG = tegak-TURUN (立向下進, lebih cepat tapi penetrasi lebih dangkal). Kedua kode TIDAK bisa dipertukarkan dan perbedaannya penting untuk cakupan sertifikasi. 🇯🇵 TIPS: Lokasi Jepang default ke tegak-NAIK (上進) karena fusi dan penetrasi lebih baik. Tegak-TURUN (下進) kadang dipakai untuk pelat tipis di produksi tapi umumnya tak dianjurkan untuk las struktur di Jepang.",
    },
  },
  303: {
    vi: {
      q: "'Yokomuki-shisei' (横向き姿勢) là gì?",
      opts: [
        "Tư thế đứng — trên tường đứng",
        "Tư thế bằng — trên đỉnh mối nối",
        "Tư thế trần — tay giơ lên",
        "Tư thế ngang (2G / 2F) — hàn trên mặt bên của tấm đứng, mối nối chạy ngang",
      ],
      exp: "Yokomuki-shisei (横向き姿勢) = Tư thế ngang. 2G (rãnh) / 2F (góc). Mối hàn chạy ngang trên mặt đứng. Trọng lực kéo bể hàn xuống (về tấm dưới). Kỹ thuật: nghiêng súng hơi lên để bù. Mã ISO: PC. 🇯🇵 MẸO: Rãnh ngang (横向き突合せ) phổ biến trong đóng tàu Nhật cho tôn mạn. Thách thức là ngăn chảy tràn dưới đường hàn ở tấm dưới. Huấn luyện viên Nhật nói 'ue o miro' (上を見ろ / nhìn mép trên) — tập trung hồ quang vào tấm trên để kim loại chảy tự nhiên xuống lấp chân dưới.",
    },
    id: {
      q: "Apa itu 'Yokomuki-shisei' (横向き姿勢)?",
      opts: [
        "Posisi tegak — pada dinding tegak",
        "Posisi datar — di atas sambungan",
        "Posisi overhead — lengan ke atas",
        "Posisi mendatar (2G / 2F) — mengelas pada sisi muka pelat tegak, sambungan berjalan mendatar",
      ],
      exp: "Yokomuki-shisei (横向き姿勢) = Posisi mendatar. 2G (alur) / 2F (sudut). Sambungan las berjalan mendatar pada permukaan tegak. Gravitasi menarik kolam cair ke bawah (ke pelat bawah). Teknik: miringkan gun sedikit ke atas untuk mengompensasi. Kode ISO: PC. 🇯🇵 TIPS: Alur mendatar (横向き突合せ) umum di pembuatan kapal Jepang untuk pelat lambung samping. Tantangannya mencegah overlap di bawah jalur pada pelat bawah. Pelatih Jepang berkata 'ue o miro' (上を見ろ / lihat tepi atas) — fokuskan busur pada pelat atas agar logam mengalir alami ke bawah dan mengisi kaki bawah.",
    },
  },
  304: {
    vi: {
      q: "Giám sát đánh dấu mối nối và nói 'Kachiage da!' (かちあげだ！). Theo thuật ngữ JIS chính thức, tư thế này gọi là gì?",
      opts: [
        "上向き姿勢 (Uwamuki-shisei) — tư thế trần (4G / 4F)",
        "下向き姿勢 (Shitamuki-shisei) — tư thế bằng",
        "立向き姿勢 (Tatemuki-shisei) — tư thế đứng",
        "横向き姿勢 (Yokomuki-shisei) — tư thế ngang",
      ],
      exp: "Kachiage (かちあげ) là lóng thường ngày của 上向き姿勢 (Uwamuki-shisei) = Tư thế trần. 4G (rãnh) / 4F (góc). Bạn giữ súng trên đầu và hàn mặt dưới mối nối. Tư thế khó nhất: trọng lực kéo bể hàn khỏi mối nối, văng rơi lên người. Mã ISO: PE. 🇯🇵 MẸO: Với hàn trần, thợ Nhật dùng dòng thấp hơn tư thế bằng một chút (khoảng 10–15%) để giữ bể nhỏ và dễ kiểm soát. Bể nhỏ, nhanh chống trọng lực tốt hơn bể lớn, nóng. Hỏi giám sát 'điều kiện kachiage' (かちあげの条件) trước khi bắt đầu.",
    },
    id: {
      q: "Supervisor menandai sambungan dan berkata 'Kachiage da!' (かちあげだ！). Dalam terminologi JIS resmi, posisi ini disebut apa?",
      opts: [
        "上向き姿勢 (Uwamuki-shisei) — posisi overhead (4G / 4F)",
        "下向き姿勢 (Shitamuki-shisei) — posisi datar",
        "立向き姿勢 (Tatemuki-shisei) — posisi tegak",
        "横向き姿勢 (Yokomuki-shisei) — posisi mendatar",
      ],
      exp: "Kachiage (かちあげ) adalah slang sehari-hari untuk 上向き姿勢 (Uwamuki-shisei) = Posisi overhead. 4G (alur) / 4F (sudut). Anda memegang gun di atas kepala dan mengelas sisi bawah sambungan. Posisi tersulit: gravitasi menarik kolam cair menjauh dari sambungan, percikan jatuh menimpa Anda. Kode ISO: PE. 🇯🇵 TIPS: Untuk las overhead, tukang las Jepang memakai arus sedikit lebih rendah dari posisi datar (sekitar 10–15% lebih rendah) agar kolam kecil dan lebih terkendali. Kolam kecil dan cepat melawan gravitasi lebih baik daripada yang besar dan panas. Tanyakan supervisor 'setelan kachiage' (かちあげの条件) sebelum mulai.",
    },
  },
  305: {
    vi: {
      q: "Trong thi chứng chỉ JIS Nhật, mã tư thế 'F' chỉ điều gì?",
      opts: [
        "F = Loại mối hàn góc",
        "F = Bằng (下向き / Shitamuki) — dùng trong mã thi như N-2F nghĩa là mối rãnh tư thế bằng",
        "F = Lượt hoàn thiện",
        "F = Hướng tiến (chiều hàn)",
      ],
      exp: "Trong mã thi chứng chỉ JIS: F = Bằng (下向き), H = Ngang (横向き), V = Đứng (立向き), O = Trần (上向き). Ví dụ: N-2F = thép thường (N), mối rãnh tấm (2), tư thế bằng (F). N-2P = thép thường (N), mối ống (P mọi tư thế). Các mã này xuất hiện trên chứng chỉ của bạn. 🇯🇵 MẸO: Khi xin việc ở Nhật, mang thẻ chứng chỉ JIS thật (資格証 / shikaku-sho) — không chỉ bản photo. Chủ muốn xem bản gốc và sẽ kiểm ngày hết hạn. Nếu sắp hết hạn, gia hạn TRƯỚC khi xin việc — chứng chỉ hết hạn bị coi như không có.",
    },
    id: {
      q: "Dalam ujian sertifikasi JIS Jepang, kode posisi 'F' merujuk pada apa?",
      opts: [
        "F = Jenis las sudut (fillet)",
        "F = Datar (下向き / Shitamuki) — dipakai dalam kode uji seperti N-2F yang berarti las alur posisi datar",
        "F = Pass finishing",
        "F = Forward (arah pengelasan)",
      ],
      exp: "Dalam kode uji sertifikasi JIS: F = Datar (下向き), H = Mendatar (横向き), V = Tegak (立向き), O = Overhead (上向き). Contoh: N-2F = baja lunak (N), las alur pelat (2), posisi datar (F). N-2P = baja lunak (N), las pipa (P semua posisi). Kode ini muncul pada sertifikat kualifikasi Anda. 🇯🇵 TIPS: Saat melamar kerja di Jepang, bawa kartu sertifikat JIS asli (資格証 / shikaku-sho) — bukan sekadar fotokopi. Pemberi kerja ingin melihat aslinya dan akan memeriksa tanggal kedaluwarsa. Jika hampir habis, perbarui SEBELUM melamar — sertifikat kedaluwarsa dianggap sama dengan tidak punya.",
    },
  },
  306: {
    vi: {
      q: "Với tấm mỏng (ví dụ 2mm), có luôn cần chuẩn bị rãnh (開先 / kaisaki) trước khi hàn giáp mối 'Tsukiawase-yosetsu' (突き合わせ溶接) không?",
      opts: [
        "Có, nhưng chỉ với tấm inox, không bao giờ với thép carbon",
        "Có — JIS yêu cầu vát rãnh cho mọi mối giáp mối bất kể chiều dày",
        "Không — với tấm mỏng, mối giáp mối mép vuông (rãnh I / I形) không vát thường đủ vì đạt ngấu hoàn toàn không cần vát; chuẩn bị rãnh chủ yếu cần cho tấm DÀY",
        "Không — tấm mỏng không bao giờ dùng giáp mối, chỉ dùng mối góc",
      ],
      exp: "Tsukiawase-yosetsu (突き合わせ溶接) = Mối giáp mối / mối rãnh — hai mép tấm đặt đối đầu và hàn. Với tấm DÀY, cần vát rãnh (開先 / kaisaki, ví dụ rãnh V) để hồ quang và kim loại bù chạm được chân, ngấu hoàn toàn. Nhưng với tấm MỎNG, mối giáp mối mép vuông rãnh I (I形) thường đạt ngấu hoàn toàn mà không cần vát — yêu cầu chuẩn bị rãnh tỉ lệ với chiều dày, không phải quy tắc chung cho mọi mối giáp mối. 🇯🇵 MẸO: Trong thi chứng chỉ JIS mối giáp mối, kích thước tấm thi, góc rãnh, khe chân và mặt chân đều chuẩn hóa theo mã thi — nhớ kích thước chuẩn cho mã thi của bạn (N-2F v.v.) trước ngày thi.",
    },
    id: {
      q: "Untuk pelat tipis (mis. 2mm), apakah persiapan alur (開先 / kaisaki) selalu diperlukan sebelum las tumpul 'Tsukiawase-yosetsu' (突き合わせ溶接)?",
      opts: [
        "Ya, tapi hanya untuk pelat stainless, tak pernah baja karbon",
        "Ya — JIS mensyaratkan bevel alur pada setiap las tumpul tanpa memandang tebal",
        "Tidak — untuk pelat tipis, sambungan tumpul tepi persegi (I-groove / I形) tanpa bevel sering cukup karena penetrasi penuh dapat dicapai tanpa itu; persiapan alur terutama perlu untuk pelat TEBAL",
        "Tidak — pelat tipis tak boleh pakai las tumpul, hanya las sudut",
      ],
      exp: "Tsukiawase-yosetsu (突き合わせ溶接) = Las tumpul / las alur — dua tepi pelat diletakkan ujung-ke-ujung dan dilas. Untuk pelat TEBAL, perlu bevel alur (開先 / kaisaki, mis. V-groove) agar busur dan pengisi mencapai akar untuk penetrasi penuh. Tapi untuk pelat TIPIS, sambungan tumpul tepi persegi I-groove (I形) sering mencapai penetrasi penuh tanpa bevel — kebutuhan persiapan alur mengikuti tebal, bukan aturan mutlak untuk setiap las tumpul. 🇯🇵 TIPS: Dalam sertifikasi JIS untuk las tumpul, ukuran pelat uji, sudut alur, root gap, dan root face semua distandardisasi per kode uji — hafalkan dimensi standar untuk kode uji Anda (N-2F dll.) sebelum hari ujian.",
    },
  },
  307: {
    vi: {
      q: "Trên bản vẽ mối hàn góc Nhật, bạn thấy 'Suminiku-yosetsu' (すみ肉溶接) ghi '脚長 S=6'. Người kiểm tra sẽ xác minh bằng đo chiều dày cổ (のど厚) hay đo chiều dài chân?",
      opts: [
        "Không cái nào — mối góc chỉ kiểm bằng mắt, không đo bằng thước",
        "Chiều dày cổ — vì chiều dài chân không đo được bằng thước hàn",
        "Chiều dày cổ — vì đó là thứ ghi trên bản vẽ",
        "Chiều dài chân — vì bản vẽ ghi kích thước mối góc bằng chiều dài chân (脚長), dù tính toán độ bền thực ra dùng chiều dày cổ",
      ],
      exp: "Suminiku-yosetsu (すみ肉溶接) = Mối hàn góc, loại phổ biến nhất trong chế tạo kết cấu. Trên bản vẽ Nhật, kích thước mối góc ghi bằng chiều dài chân (脚長 / Kyakucho, ví dụ S=6), KHÔNG phải chiều dày cổ — dù tính độ bền dùng cổ (のど厚 / Nodo-atsu) bên trong. Người kiểm tra QC Nhật đo CHIỀU DÀI CHÂN trực tiếp bằng thước hàn; nếu chân là 5.3mm khi quy định 6mm, đó là lỗi dù nhìn ổn. 🇯🇵 MẸO: Luôn kiểm chú thích chiều dài chân trên bản vẽ trước khi hàn, và tự kiểm bằng thước trước khi gọi người kiểm tra.",
    },
    id: {
      q: "Pada gambar las sudut Jepang, Anda melihat 'Suminiku-yosetsu' (すみ肉溶接) ditetapkan '脚長 S=6'. Apakah inspektor memverifikasi ini dengan pengukuran tebal leher (のど厚), atau pengukuran panjang kaki?",
      opts: [
        "Tak keduanya — las sudut hanya diperiksa visual, tanpa pengukuran gauge",
        "Tebal leher — karena panjang kaki tak bisa diukur secara fisik dengan alat ukur las",
        "Tebal leher — karena itu yang tertulis pada gambar",
        "Panjang kaki — karena gambar menetapkan ukuran fillet sebagai panjang kaki (脚長), meski perhitungan kekuatan struktur sebenarnya memakai tebal leher",
      ],
      exp: "Suminiku-yosetsu (すみ肉溶接) = Las sudut, jenis las paling umum dalam fabrikasi struktur. Pada gambar Jepang, ukuran las sudut ditetapkan sebagai panjang kaki (脚長 / Kyakucho, mis. S=6), BUKAN tebal leher — meski perhitungan kekuatan memakai leher (のど厚 / Nodo-atsu) secara internal. Inspektor QC Jepang mengukur PANJANG KAKI langsung dengan alat ukur las; jika fillet Anda 5.3mm padahal 6mm ditetapkan, itu cacat meski terlihat baik. 🇯🇵 TIPS: Selalu periksa callout panjang kaki pada gambar sebelum mengelas, dan periksa sendiri dengan gauge sebelum memanggil inspektor.",
    },
  },
  308: {
    vi: {
      q: "'Kyakucho' (脚長) trong mối hàn góc là gì?",
      opts: [
        "Chiều dài chân — khoảng cách từ chân mối hàn đến mép mối, đo dọc theo mặt mỗi tấm",
        "Chiều cao phần đắp trên mặt tấm",
        "Chiều dài đường hàn từ đầu đến cuối",
        "Độ sâu ngấu vào kim loại nền",
      ],
      exp: "Kyakucho (脚長) = Chiều dài chân. Chiều dài mỗi chân của tiết diện tam giác mối hàn góc. Với mối góc chân đều, hai chân bằng nhau. Ghi trên bản vẽ bằng số (ví dụ 脚長6 = chân 6mm). Dùng để kiểm tra bằng thước hàn. 🇯🇵 MẸO: Mối góc chân không đều (不等脚長) xảy ra khi góc súng không 45° — một chân dài hơn. JIS cho phép chênh nhỏ, nhưng nếu một chân ngắn hẳn (下脚短 / shita-ashi-tan), nó giảm độ bền. Nhắm chân đều bằng cách giữ góc súng 45° ở góc mối nối.",
    },
    id: {
      q: "Apa itu 'Kyakucho' (脚長) pada las sudut?",
      opts: [
        "Panjang kaki — jarak dari akar las ke ujung las, diukur sepanjang muka tiap pelat",
        "Tinggi penguatan las di atas permukaan pelat",
        "Panjang jalur las dari awal ke akhir",
        "Kedalaman penetrasi ke logam dasar",
      ],
      exp: "Kyakucho (脚長) = Panjang kaki. Panjang tiap kaki dari penampang segitiga las sudut. Untuk fillet kaki sama, kedua kaki berukuran sama. Ditetapkan pada gambar sebagai angka (mis. 脚長6 = kaki 6mm). Dipakai untuk inspeksi dengan alat ukur las. 🇯🇵 TIPS: Fillet kaki tak sama (不等脚長) terjadi saat sudut gun bukan 45° — satu kaki lebih panjang. JIS mengizinkan perbedaan kecil, tapi jika satu kaki jauh lebih pendek (下脚短 / shita-ashi-tan), kekuatan berkurang. Tuju kaki sama dengan menjaga sudut gun 45° di pojok sambungan.",
    },
  },
  309: {
    vi: {
      q: "'Nodo-atsu' (のど厚) là gì và liên quan thế nào đến chiều dài chân mối hàn góc?",
      opts: [
        "Bề rộng đường hàn trên bề mặt",
        "Chiều dày cổ — khoảng cách ngắn nhất qua tiết diện tam giác. Với mối góc chân đều: cổ = chân × 0.707",
        "Độ sâu rãnh trước khi hàn",
        "Khoảng cách từ mép này đến mép kia",
      ],
      exp: "Nodo-atsu (のど厚) = Chiều dày cổ. Khoảng cách ngắn nhất từ chân mối hàn đến mặt mối — đây là kích thước chịu tải dùng trong tính độ bền. Công thức: cổ = chiều dài chân × cos45° = chân × 0.707. Ví dụ: chân 6mm → cổ = 6 × 0.707 ≈ 4.24mm. Then chốt cho thiết kế kết cấu. 🇯🇵 MẸO: 'Cổ lý thuyết' (理論のど厚) giả định mặt phẳng hoàn hảo. 'Cổ thực tế' (実際のど厚) tính cả lồi hoặc lõm. Mối góc lõm (凹形 / ogata) có cổ NHỎ hơn lý thuyết và là lỗi. Mối góc hơi lồi chấp nhận được nhưng lồi quá lãng phí vật liệu.",
    },
    id: {
      q: "Apa itu 'Nodo-atsu' (のど厚) dan bagaimana hubungannya dengan panjang kaki las sudut?",
      opts: [
        "Lebar jalur las di permukaan",
        "Tebal leher — jarak terpendek melalui penampang segitiga. Untuk fillet kaki sama: leher = kaki × 0.707",
        "Kedalaman alur sebelum mengelas",
        "Jarak dari satu ujung ke ujung lain",
      ],
      exp: "Nodo-atsu (のど厚) = Tebal leher. Jarak terpendek dari akar las ke muka las — ini dimensi penahan beban yang dipakai dalam perhitungan kekuatan. Rumus: leher = panjang kaki × cos45° = kaki × 0.707. Contoh: kaki 6mm → leher = 6 × 0.707 ≈ 4.24mm. Krusial untuk desain struktur. 🇯🇵 TIPS: 'Leher teoretis' (理論のど厚) mengasumsikan muka rata sempurna. 'Leher aktual' (実際のど厚) memperhitungkan cembung atau cekung. Fillet cekung (凹形 / ogata) memiliki leher KURANG dari teoretis dan merupakan cacat. Fillet sedikit cembung boleh, tapi terlalu cembung memboroskan material.",
    },
  },
  310: {
    vi: {
      q: "'Ruuto-gyappu' (ルートギャップ) là gì — và điều gì xảy ra nếu quá rộng hay quá hẹp?",
      opts: [
        "Khoảng cách giữa các mối đính dọc mối nối",
        "Góc mở của rãnh — quá rộng gây thủng",
        "Khe chân — khoảng trống giữa các mép tấm ở đáy rãnh. Quá hẹp = ngấu kém. Quá rộng = thủng",
        "Chiều cao đắp trên tấm — phải trong quy định",
      ],
      exp: "Ruuto-gyappu (ルートギャップ) = Khe chân / khe mở chân. Khoảng trống được kiểm soát giữa các mép tấm ở chân rãnh. Quá hẹp (< quy định): hồ quang không tới chân, gây thiếu ngấu (溶込不良). Quá rộng (> quy định): thủng (溶落ち). Ghi trên bản vẽ — đo bằng thước khe trước khi hàn. 🇯🇵 MẸO: Công trường Nhật dùng 隙間ゲージ (sukima-geeji / bộ căn lá) hoặc thước khe chân chuyên dụng để kiểm trước mỗi mối. Dải chấp nhận thường ±0.5mm so với quy định. Đừng ước lượng bằng mắt — khe nhìn đúng thường không đúng, và chi phí chỉnh trước khi hàn thấp hơn nhiều so với hatsuri và làm lại sau.",
    },
    id: {
      q: "Apa itu 'Ruuto-gyappu' (ルートギャップ) — dan apa yang terjadi jika terlalu lebar atau terlalu sempit?",
      opts: [
        "Jarak antar tack di sepanjang sambungan",
        "Sudut bukaan alur — terlalu lebar menyebabkan tembus bakar",
        "Root gap — ruang antara tepi pelat di dasar alur. Terlalu sempit = penetrasi buruk. Terlalu lebar = tembus bakar",
        "Tinggi penguatan di atas pelat — harus sesuai spesifikasi",
      ],
      exp: "Ruuto-gyappu (ルートギャップ) = Root gap / bukaan akar. Ruang terkendali antara tepi pelat di akar alur. Terlalu sempit (< spek): busur tak mencapai akar, menyebabkan kurang penetrasi (溶込不良). Terlalu lebar (> spek): tembus bakar (溶落ち). Ditetapkan pada gambar — ukur dengan gap gauge sebelum mengelas. 🇯🇵 TIPS: Lokasi Jepang memakai 隙間ゲージ (sukima-geeji / set feeler gauge) atau gap gauge khusus untuk memeriksanya sebelum tiap las. Rentang yang dapat diterima biasanya ±0.5mm dari spek. Jangan mengira-ngira — celah yang tampak benar sering tidak, dan biaya menyesuaikan sebelum mengelas jauh lebih rendah daripada hatsuri dan mengulang setelahnya.",
    },
  },
  311: {
    vi: {
      q: "Trên bản vẽ JIS, ký hiệu hàn đặt DƯỚI đường chuẩn. Điều này chỉ gì?",
      opts: [
        "Ký hiệu dưới đường nghĩa là yêu cầu hàn trần",
        "Mối hàn ở phía đối diện với mũi tên",
        "Mối hàn ở CẢ HAI phía",
        "Mối hàn ở PHÍA MŨI TÊN — phía mũi tên đang chỉ tới",
      ],
      exp: "Quy tắc ký hiệu hàn JIS: Dưới đường chuẩn = PHÍA MŨI TÊN (矢側 / yagawa). Trên đường chuẩn = PHÍA ĐỐI DIỆN (反矢側 / hanyagawa). Đây là quy ước JIS/ISO. CẢNH BÁO: Ký hiệu AWS (Mỹ) dùng quy ước NGƯỢC lại — luôn xác nhận bản vẽ theo tiêu chuẩn nào. 🇯🇵 MẸO: Khi vào công ty Nhật mới, kiểm ô tiêu đề của bản vẽ đầu tiên bạn nhận — nó phải ghi 'JIS' hoặc 'JIS B 0021'. Nếu bản vẽ từ khách quốc tế (đóng tàu Hàn, Mỹ), xác nhận tiêu chuẩn với quản lý QC ngày đầu. Sai phía = làm lại.",
    },
    id: {
      q: "Pada gambar JIS, simbol las diletakkan DI BAWAH garis referensi. Apa artinya?",
      opts: [
        "Simbol di bawah garis berarti las overhead diperlukan",
        "Las berada di sisi berlawanan dari panah",
        "Las berada di KEDUA sisi",
        "Las di SISI PANAH — sisi yang ditunjuk panah",
      ],
      exp: "Aturan simbol las JIS: Di bawah garis referensi = SISI PANAH (矢側 / yagawa). Di atas garis referensi = SISI LAIN (反矢側 / hanyagawa). Ini konvensi JIS/ISO. PERINGATAN: Simbol AWS (Amerika) memakai konvensi BERLAWANAN — selalu pastikan gambar mengikuti standar mana. 🇯🇵 TIPS: Saat masuk perusahaan Jepang baru, periksa blok judul gambar pertama yang Anda terima — harus tertera 'JIS' atau 'JIS B 0021'. Jika gambar dari klien internasional (galangan Korea, Amerika), konfirmasi standar dengan manajer QC di hari pertama. Salah sisi = rework.",
    },
  },
  312: {
    vi: {
      q: "Bản vẽ JIS có ký hiệu mối hàn góc (△) ở TRÊN VÀ DƯỚI đường chuẩn. Điều này nghĩa là gì?",
      opts: [
        "Hàn cả hai phía — mối góc ở cả phía mũi tên và phía đối diện của mối nối",
        "Áp dụng mối góc cho một mối nối khác gần đó",
        "Ký hiệu vẽ sai — bỏ qua một cái",
        "Chỉ hàn phía mũi tên — ký hiệu thứ hai chỉ để trang trí",
      ],
      exp: "Khi ký hiệu hàn xuất hiện CẢ trên và dưới đường chuẩn, nghĩa là hàn CẢ HAI PHÍA. Với mối góc: mối góc hai mặt (両面すみ肉溶接). Mỗi phía có thể quy định kích thước khác nhau — đọc số riêng cho từng phía. 🇯🇵 MẸO: Trên bản vẽ kết cấu Nhật, 両面すみ肉 (mối góc hai mặt) được viết '両' trước ký hiệu hàn. Chỉ một mặt được ngầm hiểu khi không có '両'. Người mới hay bỏ sót một mặt vì quên kiểm — luôn dò toàn bộ ký hiệu trước khi bắt đầu.",
    },
    id: {
      q: "Gambar JIS memiliki simbol las sudut (△) di ATAS DAN DI BAWAH garis referensi. Apa artinya?",
      opts: [
        "Las di kedua sisi — las sudut di sisi panah dan sisi lain sambungan",
        "Terapkan las sudut ke sambungan lain di dekatnya",
        "Simbol digambar salah — abaikan salah satunya",
        "Las di sisi panah saja — simbol kedua hanya dekoratif",
      ],
      exp: "Saat simbol las muncul di ATAS dan DI BAWAH garis referensi, artinya las di KEDUA SISI. Untuk las sudut: las sudut dua sisi (両面すみ肉溶接). Tiap sisi bisa memiliki dimensi berbeda — baca angkanya terpisah untuk tiap sisi. 🇯🇵 TIPS: Pada gambar struktur Jepang, 両面すみ肉 (fillet dua sisi) ditulis '両' sebelum simbol las. Satu sisi saja tersirat bila '両' tak ada. Pekerja baru sering melewatkan satu sisi karena lupa memeriksanya — selalu telusuri simbol lengkap sebelum mulai.",
    },
  },
  313: {
    vi: {
      q: "Vòng tròn (○) tại giao điểm của đường chuẩn và mũi tên trong ký hiệu hàn JIS nghĩa là gì?",
      opts: [
        "Không hàn — đừng hàn mối nối này",
        "Hàn toàn chu vi (全周溶接) — hàn liên tục quanh toàn bộ chu vi mối nối",
        "Yêu cầu hàn trần tại vị trí này",
        "Mối hàn đã được kiểm tra và duyệt",
      ],
      exp: "Ký hiệu vòng tròn (○) tại giao mũi tên/đường chuẩn = Hàn toàn chu vi (全周溶接). Mối hàn quy định phải làm liên tục quanh toàn bộ chu vi mối nối. Phổ biến ở nối ống, tấm đế cột và tiết diện rỗng kết cấu. 🇯🇵 MẸO: Khi hàn 全周溶接, các vị trí khởi/dừng hồ quang phải so le, không dồn cùng một điểm — dồn khuyết tật dừng/khởi vào một chỗ tạo điểm yếu. Giám sát Nhật sẽ ghi nhận vị trí dừng/khởi của bạn. Lập trình tự trước khi bắt đầu.",
    },
    id: {
      q: "Apa arti lingkaran (○) di persimpangan garis referensi dan panah dalam simbol las JIS?",
      opts: [
        "Nol las — jangan las sambungan ini",
        "Las keliling (全周溶接) — las menerus di seluruh keliling sambungan",
        "Las overhead diperlukan di lokasi ini",
        "Las telah diperiksa dan disetujui",
      ],
      exp: "Simbol lingkaran (○) di pertemuan panah/garis referensi = Las keliling (全周溶接). Las yang ditentukan harus dibuat menerus di seluruh keliling sambungan. Umum pada sambungan pipa, pelat dasar kolom, dan penampang berongga struktur. 🇯🇵 TIPS: Saat mengelas 全周溶接, lokasi mulai/berhenti busur harus diselang-seling dan tidak semua di titik yang sama — memusatkan cacat berhenti/mulai di satu lokasi menciptakan titik lemah. Supervisor Jepang akan mencatat posisi berhenti/mulai Anda. Rencanakan urutannya sebelum mulai.",
    },
  },
  314: {
    vi: {
      q: "Bản vẽ JIS có ký hiệu cờ (旗マーク) tại đường chuẩn. Điều này chỉ gì?",
      opts: [
        "Thợ hàn đã đạt kiểm tra chất lượng",
        "Mối hàn cần xử lý nhiệt sau hàn",
        "Hàn hiện trường (現場溶接) — mối này thực hiện tại công trường lắp đặt, không phải trong nhà máy",
        "Mối nối chịu ứng suất cao — cần cẩn thận thêm",
      ],
      exp: "Ký hiệu cờ (旗マーク) = Ký hiệu hàn hiện trường (現場溶接記号). Mối này KHÔNG làm trong nhà máy — nó thực hiện tại công trường xây dựng/lắp đặt thực sau khi các chi tiết chế sẵn được lắp vào vị trí. Quan trọng khi lập kế hoạch: hàn hiện trường có điều kiện khó hơn (thời tiết, tư thế, tiếp cận) so với hàn nhà máy. 🇯🇵 MẸO: Hàn hiện trường (現場溶接) ở Nhật cần tài liệu kế hoạch bổ sung (施工計画書 / shiko-keikakusho). Gió, độ ẩm và nhiệt độ đều ảnh hưởng chất lượng — mưa hoặc gió mạnh (風速10m/s以上) theo luật phải dừng hàn ngoài trời. Luôn kiểm dự báo thời tiết và điều kiện công trường trước khi ra làm hàn hiện trường.",
    },
    id: {
      q: "Gambar JIS memiliki simbol bendera (旗マーク) di garis referensi. Apa artinya?",
      opts: [
        "Tukang las telah lulus inspeksi mutu",
        "Las memerlukan perlakuan panas pasca-las",
        "Las lapangan (現場溶接) — las ini dikerjakan di lokasi konstruksi/pemasangan, bukan di pabrik",
        "Sambungan las bertegangan tinggi — perlu perhatian ekstra",
      ],
      exp: "Tanda bendera (旗マーク) = Simbol las lapangan (現場溶接記号). Las ini TIDAK dikerjakan di pabrik — dilakukan di lokasi konstruksi/pemasangan nyata setelah bagian prafabrikasi dirakit di tempat. Penting untuk perencanaan: las lapangan berkondisi lebih menantang (cuaca, posisi, akses) daripada las pabrik. 🇯🇵 TIPS: Las lapangan (現場溶接) di Jepang memerlukan dokumen perencanaan tambahan (施工計画書 / shiko-keikakusho). Angin, kelembapan, dan suhu semua memengaruhi mutu — hujan atau angin kencang (風速10m/s以上) secara hukum mewajibkan menghentikan las luar ruangan. Selalu periksa prakiraan cuaca dan kondisi lokasi sebelum berangkat kerja las lapangan.",
    },
  },
  315: {
    vi: {
      q: "Khác biệt QUAN TRỌNG giữa quy ước ký hiệu hàn JIS và AWS có thể gây lỗi nghiêm trọng nếu nhầm là gì?",
      opts: [
        "Không có khác biệt — ký hiệu JIS và AWS giống hệt",
        "JIS dùng hệ mét, AWS dùng hệ inch — không khác gì thêm",
        "JIS dùng nét liền, AWS dùng nét đứt cho đường chuẩn",
        "Trong JIS: dưới đường = phía MŨI TÊN. Trong AWS: dưới đường cũng là phía mũi tên — NHƯNG logic đặt ký hiệu 'phía đối diện' bị đảo trong các diễn giải lịch sử. Luôn xác nhận dự án theo tiêu chuẩn nào",
      ],
      exp: "Đây là điểm then chốt. JIS/ISO và AWS dùng quy ước khác nhau cho vị trí ký hiệu phía mũi tên so với phía đối diện. Ở Nhật, MỌI bản vẽ dùng JIS (hoặc ISO) — nếu bạn quen bản vẽ AWS (dùng ở Mỹ, Úc...), xác nhận tiêu chuẩn ở đầu mỗi dự án. Đọc sai ký hiệu = hàn sai phía = làm lại hoặc hỏng kết cấu. 🇯🇵 MẸO: Xưởng đóng tàu Hàn (Hyundai, Samsung, DSME) làm việc với công ty Nhật đôi khi nộp bản vẽ chuẩn AWS — đã gây sự cố làm lại thật ở các xưởng Nhật. Nếu thấy 'AWS D1.1' hoặc 'ASME' trong ô tiêu đề, báo giám sát ngay trước khi hàn bất cứ gì.",
    },
    id: {
      q: "Apa perbedaan KRITIS antara konvensi simbol las JIS dan AWS yang bisa menyebabkan kesalahan serius jika tertukar?",
      opts: [
        "Tak ada beda — simbol JIS dan AWS identik",
        "JIS memakai dimensi metrik, AWS imperial — tak ada beda lain",
        "JIS memakai garis solid, AWS garis putus untuk garis referensi",
        "Dalam JIS: di bawah garis = sisi PANAH. Dalam AWS: di bawah garis juga sisi panah — TAPI logika penempatan simbol 'sisi lain' terbalik dalam interpretasi historis. Selalu pastikan proyek mengikuti standar mana",
      ],
      exp: "Ini poin kritis. JIS/ISO dan AWS memakai konvensi berbeda untuk penempatan simbol sisi-panah vs sisi-lain. Di Jepang, SEMUA gambar memakai JIS (atau ISO) — jika Anda terbiasa gambar AWS (dipakai di AS, Australia...), pastikan standar di awal tiap proyek. Salah membaca simbol = mengelas di sisi salah = rework atau kegagalan struktur. 🇯🇵 TIPS: Galangan Korea (Hyundai, Samsung, DSME) yang bekerja dengan perusahaan Jepang kadang mengirim gambar standar AWS — ini pernah menyebabkan insiden rework nyata di galangan Jepang. Jika Anda melihat 'AWS D1.1' atau 'ASME' di blok judul, segera beri tahu supervisor sebelum mengelas apa pun.",
    },
  },
  316: {
    vi: {
      q: "'T-keite' (T継手) là gì và thường dùng ở đâu?",
      opts: [
        "Mối chữ T — một tấm gặp tấm khác ở 90°, tạo hình chữ T. Thường hàn bằng mối góc (すみ肉) cả hai phía",
        "Hai ống nối cùng đường kính",
        "Mối nơi hai tấm chồng lên nhau",
        "Hai tấm hàn đối đầu thành đường thẳng",
      ],
      exp: "T-keite (T継手) = Mối chữ T. Một tấm hàn vuông góc với mặt tấm kia, tạo hình chữ T. Mối kết cấu phổ biến nhất trong chế tạo thép. Thường dùng hai mối góc (すみ肉溶接) hai phía. Với ứng dụng ứng suất cao, có thể cần mối rãnh ngấu hoàn toàn. 🇯🇵 MẸO: Trên bản vẽ Nhật, khi mối chữ T ghi 'K形開先' (rãnh chữ K), nghĩa là cần ngấu hoàn toàn — không phải mối góc thường. Phân biệt này ảnh hưởng lớn đến độ bền. Nếu không chắc mối chữ T cần vát rãnh hay chỉ mối góc, luôn hỏi giám sát thay vì đoán.",
    },
    id: {
      q: "Apa itu 'T-keite' (T継手) dan di mana umumnya dipakai?",
      opts: [
        "Sambungan T — satu pelat bertemu pelat lain pada 90°, membentuk huruf T. Biasanya dilas dengan las sudut (すみ肉) di kedua sisi",
        "Dua pipa terhubung diameter sama",
        "Sambungan di mana dua pelat saling tumpang",
        "Dua pelat dilas ujung-ke-ujung dalam garis lurus",
      ],
      exp: "T-keite (T継手) = Sambungan T. Satu pelat dilas tegak lurus terhadap permukaan pelat lain, membentuk huruf T. Sambungan struktur paling umum dalam fabrikasi baja. Biasanya memakai dua las sudut (すみ肉溶接) di kedua sisi. Untuk aplikasi tegangan tinggi, mungkin diperlukan las alur penetrasi penuh. 🇯🇵 TIPS: Pada gambar Jepang, saat sambungan T menunjukkan 'K形開先' (K-groove), artinya penetrasi penuh diperlukan — bukan fillet biasa. Perbedaan ini sangat penting untuk kekuatan. Jika ragu apakah sambungan T butuh persiapan alur atau hanya fillet, selalu tanya supervisor alih-alih menebak.",
    },
  },
  317: {
    vi: {
      q: "Mã tư thế hàn ISO 'PA' là gì và tiếng Nhật gọi là gì?",
      opts: [
        "PA = Tư thế ngang = 横向き姿勢 (Yokomuki-shisei)",
        "PA = Tư thế bằng = 下向き姿勢 (Shitamuki-shisei)",
        "PA = Tư thế trần = 上向き姿勢 (Uwamuki-shisei)",
        "PA = Tư thế đứng = 立向き姿勢 (Tatemuki-shisei)",
      ],
      exp: "Mã tư thế ISO 6947: PA = Bằng (下向き / PA), PB = Góc ngang (水平すみ肉 / PB), PC = Rãnh ngang (横向き / PC), PE = Trần (上向き / PE), PF = Đứng-lên (立向上進 / PF), PG = Đứng-xuống (立向下進 / PG). Các mã này xuất hiện trên chứng chỉ hàn quốc tế. 🇯🇵 MẸO: Mã tư thế IIW/ISO xuất hiện trên chứng chỉ quốc tế như IW (International Welder). Nếu bạn định làm dự án ngoài khơi, LNG hoặc hạt nhân ở Nhật, biết mã ISO là thiết yếu — các dự án này dùng chuẩn ISO song song JIS. Mang cả chứng chỉ JIS lẫn ISO/IIW nếu có.",
    },
    id: {
      q: "Apa kode posisi las ISO 'PA' dan disebut apa dalam bahasa Jepang?",
      opts: [
        "PA = Posisi mendatar = 横向き姿勢 (Yokomuki-shisei)",
        "PA = Posisi datar = 下向き姿勢 (Shitamuki-shisei)",
        "PA = Posisi overhead = 上向き姿勢 (Uwamuki-shisei)",
        "PA = Posisi tegak = 立向き姿勢 (Tatemuki-shisei)",
      ],
      exp: "Kode posisi ISO 6947: PA = Datar (下向き / PA), PB = Fillet horizontal (水平すみ肉 / PB), PC = Alur mendatar (横向き / PC), PE = Overhead (上向き / PE), PF = Tegak-naik (立向上進 / PF), PG = Tegak-turun (立向下進 / PG). Kode ini muncul pada sertifikat kualifikasi las internasional. 🇯🇵 TIPS: Kode posisi IIW/ISO muncul pada sertifikasi internasional seperti IW (International Welder). Jika Anda berencana mengerjakan proyek lepas pantai, LNG, atau nuklir di Jepang, mengetahui kode ISO itu esensial — proyek ini memakai standar ISO bersama JIS. Bawa sertifikat JIS dan ISO/IIW jika Anda punya.",
    },
  },
  318: {
    vi: {
      q: "Mã tư thế ISO 'PF' nghĩa là gì, và tên tiếng Nhật là gì?",
      opts: [
        "PF = Tư thế bằng = 下向き",
        "PF = Tư thế trần = 上向き姿勢",
        "PF = Hàn đứng-lên = 立向上進 (Tatemuki-joshin) — hàn hướng lên trên tấm đứng",
        "PF = Góc ngang = 水平すみ肉",
      ],
      exp: "ISO PF = Hàn đứng-lên (立向上進 / Tatemuki-joshin). Đây là hướng hàn đứng tiêu chuẩn trong chế tạo Nhật — hàn hướng lên cho hòa nhập và ngấu tốt hơn so với đứng-xuống. ISO PG = đứng-xuống. Các mã này xuất hiện trên chứng chỉ JIS và IIW quốc tế. 🇯🇵 MẸO: Khi gia hạn chứng chỉ JIS, hồ sơ thi ghi các tư thế bạn được cấp. Chứng chỉ PF (đứng-lên) bao hàn đứng — PG là chứng chỉ riêng. Ở Nhật, hầu hết việc cần PF nhưng hiếm khi cần PG — kiểm kỹ phạm vi chứng chỉ khi nhận việc mới.",
    },
    id: {
      q: "Apa arti kode posisi ISO 'PF', dan apa nama Jepangnya?",
      opts: [
        "PF = Posisi datar = 下向き",
        "PF = Posisi overhead = 上向き姿勢",
        "PF = Las tegak-naik = 立向上進 (Tatemuki-joshin) — mengelas ke atas pada pelat tegak",
        "PF = Fillet horizontal = 水平すみ肉",
      ],
      exp: "ISO PF = Las tegak-naik (立向上進 / Tatemuki-joshin). Ini arah las tegak standar dalam fabrikasi Jepang — mengelas ke atas menghasilkan fusi dan penetrasi lebih baik dibanding tegak-turun. ISO PG = tegak-turun. Kode ini muncul pada sertifikat kualifikasi JIS dan IIW internasional. 🇯🇵 TIPS: Saat memperbarui kualifikasi JIS, catatan uji menunjukkan posisi apa saja yang Anda kualifikasi. Kualifikasi PF (tegak-naik) mencakup las tegak — PG kualifikasi terpisah. Di Jepang, kebanyakan pekerjaan butuh PF tapi jarang butuh PG — periksa cakupan sertifikat Anda dengan teliti saat menawar pekerjaan baru.",
    },
  },
  319: {
    vi: {
      q: "Bản vẽ ghi mối hàn góc với 'Kyakucho 8mm' (脚長8mm). Chiều dày cổ lý thuyết (のど厚) là bao nhiêu?",
      opts: [
        "8.0mm — cổ bằng chiều dài chân",
        "4.0mm — cổ bằng nửa chiều dài chân",
        "11.3mm — cổ lớn hơn chiều dài chân",
        "5.66mm — cổ = 8mm × 0.707",
      ],
      exp: "Cổ lý thuyết (理論のど厚) = chiều dài chân × 0.707 (= cos 45°). Với chân 8mm: 8 × 0.707 = 5.66mm cổ. Phép tính này cơ bản cho thiết kế độ bền kết cấu. Kích thước cổ dùng trong mọi công thức độ bền mối hàn. Luôn kiểm: bản vẽ thường ghi chiều dài chân (脚長), nhưng độ bền tính từ cổ (のど厚). 🇯🇵 MẸO: Ở Nhật, tài liệu tính kết cấu (構造計算書) cho tòa nhà phải thể hiện nodo-atsu và tính đủ cho tải thiết kế. Nếu bị bảo làm mối góc nhỏ hơn quy định để 'tiết kiệm dây', hãy từ chối — chiều dài chân do kỹ sư tính có lý do. Giảm nó có thể là vi phạm an toàn kết cấu.",
    },
    id: {
      q: "Gambar menetapkan las sudut dengan 'Kyakucho 8mm' (脚長8mm). Berapa tebal leher teoretis (のど厚)?",
      opts: [
        "8.0mm — leher sama dengan panjang kaki",
        "4.0mm — leher setengah panjang kaki",
        "11.3mm — leher lebih besar dari panjang kaki",
        "5.66mm — leher = 8mm × 0.707",
      ],
      exp: "Leher teoretis (理論のど厚) = panjang kaki × 0.707 (= cos 45°). Untuk kaki 8mm: 8 × 0.707 = 5.66mm leher. Perhitungan ini fundamental untuk desain kekuatan struktur. Dimensi leher dipakai dalam semua rumus kekuatan las. Selalu periksa: gambar biasanya menetapkan panjang kaki (脚長), tapi kekuatan dihitung dari leher (のど厚). 🇯🇵 TIPS: Di Jepang, dokumen perhitungan struktur (構造計算書) untuk bangunan harus menunjukkan nodo-atsu dan kecukupannya untuk beban desain. Jika Anda diminta membuat fillet lebih kecil dari spesifikasi untuk 'menghemat kawat', tolak — panjang kaki dihitung insinyur karena suatu alasan. Menguranginya bisa jadi pelanggaran keselamatan struktur.",
    },
  },
  320: {
    vi: {
      q: "'Kanzen-tokekomi-yosetsu' (完全溶込み溶接 / CJP) là gì và khi nào cần?",
      opts: [
        "Mối ngấu hoàn toàn — kim loại hàn ngấu xuyên toàn bộ chiều dày mối nối. Cần cho nối chịu ứng suất cao (ví dụ cột-dầm, bình áp lực)",
        "Mối dùng cài đặt dòng tối đa",
        "Mối phủ cả hai mặt tấm",
        "Mối được đánh bóng phẳng mặt",
      ],
      exp: "Kanzen-tokekomi-yosetsu (完全溶込み溶接) = Mối ngấu hoàn toàn (CJP). Vùng nóng chảy kéo dài qua TOÀN BỘ chiều dày tấm. Cần cho: nối tòa nhà chịu địa chấn (ダイアフラム), thân bình áp lực và mối kết cấu quan trọng. Kiểm bằng RT hoặc UT. Trái với mối ngấu một phần (部分溶込み / PJP). 🇯🇵 MẸO: Ở Nhật, mối CJP tại nối tòa nhà quan trọng về địa chấn (柱梁接合部) cần chi tiết mối được tiền phê duyệt theo Luật Tiêu chuẩn Xây dựng (建築基準法). Nếu người kiểm tra đánh dấu CJP của bạn 不合格 (trượt), bạn phải khoét ra, hàn lại và kiểm lại — không có chấp nhận một phần. Làm đúng ngay lần đầu không chỉ là hiệu quả; đó là niềm tự hào nghề nghiệp.",
    },
    id: {
      q: "Apa itu 'Kanzen-tokekomi-yosetsu' (完全溶込み溶接 / CJP) dan kapan diperlukan?",
      opts: [
        "Las penetrasi penuh — logam las menembus seluruh tebal sambungan. Diperlukan untuk sambungan bertegangan tinggi (mis. kolom-balok, bejana tekan)",
        "Las yang memakai setelan arus maksimum",
        "Las yang menutup kedua sisi pelat",
        "Las yang dipoles rata dengan permukaan",
      ],
      exp: "Kanzen-tokekomi-yosetsu (完全溶込み溶接) = Complete Joint Penetration (CJP). Zona fusi meluas ke SELURUH tebal pelat. Diperlukan untuk: sambungan bangunan tahan gempa (ダイアフラム), cangkang bejana tekan, dan sambungan struktur kritis. Diverifikasi dengan inspeksi RT atau UT. Berbeda dengan las penetrasi parsial (部分溶込み / PJP). 🇯🇵 TIPS: Di Jepang, las CJP pada sambungan bangunan kritis gempa (柱梁接合部) memerlukan detail sambungan pra-kualifikasi sesuai Undang-Undang Standar Bangunan (建築基準法). Jika inspektor menandai CJP Anda 不合格 (ditolak), Anda harus mengorek keluar, mengelas ulang, dan menginspeksi ulang — tak ada penerimaan sebagian. Melakukannya benar sejak awal bukan hanya efisiensi; itu kebanggaan profesional.",
    },
  },
  401: {
    vi: {
      q: "Mối thi JIS của bạn có vết lẹm sâu đúng 0.3mm. Điều này có tự động trượt kiểm tra VT chứng chỉ JIS không?",
      opts: [
        "Không — 0.3mm luôn trong dung sai JIS chung cho lẹm ở mọi chiều dày tấm",
        "Tùy — dung sai lẹm JIS gắn với chiều dày tấm và mã thi, nên 0.3mm có thể đạt ở tấm dày nhưng trượt ở tấm mỏng hoặc mã thi khắt khe hơn; không có một con số chung duy nhất",
        "Có — mọi độ lẹm trên 0mm là trượt tự động theo mọi mã JIS",
        "Không — độ lẹm không bao giờ kiểm khi VT, chỉ khi RT/UT",
      ],
      exp: "Andaakatto (アンダーカット) = Lẹm chân, một rãnh bị nóng chảy ở mép chân mối hàn do dòng quá cao, tốc độ quá nhanh, hoặc góc súng sai. Độ cho phép KHÔNG phải một con số chung — JIS và các quy chuẩn khác quy định độ lẹm tối đa theo chiều dày tấm/cấu kiện và mã thi cụ thể, nên lẹm 0.3mm có thể đạt ở việc này nhưng trượt ở việc khắt khe hơn. 🇯🇵 MẸO: Thợ Nhật kinh nghiệm tự VT trước khi gọi người kiểm tra, tra dung sai thực cho mã thi cụ thể thay vì đoán một con số cố định — đừng gọi người kiểm tra trừ khi đã đối chiếu với quy định.",
    },
    id: {
      q: "Las uji JIS Anda menunjukkan undercut sedalam tepat 0.3mm. Apakah ini otomatis gagal inspeksi VT sertifikasi JIS?",
      opts: [
        "Tidak — 0.3mm selalu dalam toleransi JIS universal untuk undercut pada tebal pelat berapa pun",
        "Tergantung — toleransi undercut JIS terkait tebal pelat dan kode uji, jadi 0.3mm bisa lulus pada material lebih tebal tapi gagal pada material tipis atau kode uji lebih ketat; tak ada satu angka universal",
        "Ya — kedalaman undercut di atas 0mm adalah kegagalan otomatis di semua kode JIS",
        "Tidak — kedalaman undercut tak pernah diperiksa saat VT, hanya saat RT/UT",
      ],
      exp: "Andaakatto (アンダーカット) = Undercut, alur yang meleleh di ujung logam dasar las akibat arus berlebih, kecepatan jalan terlalu tinggi, atau sudut gun tak tepat. Kedalaman yang diizinkan BUKAN satu angka universal — JIS dan kode lain menetapkan kedalaman undercut maksimum relatif terhadap tebal pelat/member dan kode uji tertentu, jadi undercut 0.3mm bisa lulus di satu pekerjaan dan gagal di yang lebih ketat. 🇯🇵 TIPS: Tukang las Jepang berpengalaman melakukan VT sendiri sebelum memanggil inspektor, memeriksa toleransi aktual untuk kode uji spesifiknya alih-alih mengasumsikan angka tetap — jangan pernah memanggil inspektor kecuali Anda sudah mencocokkannya dengan spesifikasi.",
    },
  },
  402: {
    vi: {
      q: "Andaakatto (アンダーカット / lẹm) và Oobaraappu (オーバーラップ / chồng mép) hay bị người mới nhầm vì cả hai xuất hiện ở mép chân. Khác biệt CHÍNH ở nguyên nhân gốc là gì?",
      opts: [
        "Lẹm là lỗi phía chân; chồng mép chỉ là lỗi bọng ngược",
        "Không khác — cả hai do đúng cùng dòng quá cao và tốc độ quá nhanh",
        "Lẹm do dòng/tốc độ QUÁ CAO (hồ quang khoét kim loại nền); chồng mép do dòng/tốc độ QUÁ THẤP (kim loại nguội tràn lên bề mặt không hòa nhập) — nguyên nhân về cơ bản ngược nhau",
        "Lẹm chỉ xảy ra ở inox; chồng mép chỉ ở thép carbon",
      ],
      exp: "Andaakatto (アンダーカット) = Lẹm: do dòng hoặc tốc độ QUÁ CAO — hồ quang khoét một rãnh vào kim loại nền ở mép trước khi bể kịp lấp. Oobaraappu (オーバーラップ) = Chồng mép: do dòng hoặc tốc độ QUÁ THẤP — kim loại nóng chảy tràn lên mặt kim loại nền nguội mà không hòa nhập. Chúng ở hai đầu đối lập của phổ nhiệt đầu vào, đều tạo điểm tập trung ứng suất ở mép nhưng từ những lỗi về cơ bản ngược nhau. 🇯🇵 MẸO: Thợ đàn anh nói 'Denryuu wa tekisetsu ni' (電流は適切に / dùng dòng thích hợp) — quá thấp cũng phiền như quá cao; cả hai hướng lỗi đều tạo khuyết tật mép, chỉ khác loại.",
    },
    id: {
      q: "Andaakatto (アンダーカット / undercut) dan Oobaraappu (オーバーラップ / overlap) sering dikira sama oleh pemula karena keduanya muncul di ujung las. Apa perbedaan UTAMA pada penyebab akarnya?",
      opts: [
        "Undercut cacat sisi akar; overlap eksklusif cacat back-bead",
        "Tak ada beda — keduanya disebabkan arus terlalu tinggi dan kecepatan terlalu cepat yang persis sama",
        "Undercut disebabkan arus/kecepatan TERLALU TINGGI (busur menggerus logam dasar); overlap disebabkan arus/kecepatan TERLALU RENDAH (logam dingin menggulung di permukaan tanpa menyatu) — penyebab pada dasarnya berlawanan",
        "Undercut hanya terjadi pada stainless; overlap hanya pada baja karbon",
      ],
      exp: "Andaakatto (アンダーカット) = Undercut: disebabkan arus atau kecepatan TERLALU TINGGI — busur menggerus alur ke logam dasar di ujung sebelum kolam sempat mengisinya. Oobaraappu (オーバーラップ) = Overlap: disebabkan arus atau kecepatan TERLALU RENDAH — logam cair mengalir di atas permukaan logam dasar dingin tanpa menyatu. Keduanya di ujung berlawanan dari spektrum masukan panas, sama-sama menciptakan pemusat tegangan di ujung tapi dari kesalahan las yang pada dasarnya berlawanan. 🇯🇵 TIPS: Tukang senior berkata 'Denryuu wa tekisetsu ni' (電流は適切に / gunakan arus yang tepat) — terlalu rendah sama bermasalahnya dengan terlalu tinggi; kedua arah kesalahan menciptakan cacat ujung, hanya jenis berbeda.",
    },
  },
  403: {
    vi: {
      q: "Sau khi hàn, kiểm tra RT cho thấy các đốm tối tròn bên trong mối hàn. Giám sát nói 'Buroohoru ga aru!' (ブローホールがある！). Nguyên nhân là gì?",
      opts: [
        "Sai kim loại bù cho vật liệu nền",
        "Dòng quá cao — quá nhiều nhiệt trong mối hàn",
        "Tốc độ quá chậm — đắp quá nhiều kim loại",
        "Khí bị kẹt (từ ẩm, gỉ, dầu, nhiễm bẩn, hoặc che khí kém) không thoát được khỏi kim loại hàn đang đông",
      ],
      exp: "Buroohoru (ブローホール) = Rỗ khí / lỗ khí. Khí kẹt trong kim loại hàn đã đông, hiện như đốm tối tròn trên phim RT. Nguyên nhân: ẩm trên kim loại nền, gỉ, dầu, sơn, che khí không đủ, hồ quang quá dài, kim loại bù nhiễm bẩn. Phòng ngừa: làm sạch kim loại nền, kiểm lưu lượng khí, giữ chiều dài hồ quang đúng. 🇯🇵 MẸO: Ở xưởng đóng tàu và công trường Nhật, xử lý bề mặt (下地処理 / shitaji-shori) trước khi hàn được coi rất nghiêm túc. Thợ phải mài bỏ gỉ, lau bằng acetone và xác nhận không nhiễm bẩn trước khi bật hồ quang. Nếu rỗ khí xuất hiện trên RT và truy về do bạn chuẩn bị kém, bạn sẽ phải hàn lại bằng thời gian của mình — và bạn sẽ nhớ điều đó.",
    },
    id: {
      q: "Setelah mengelas, inspeksi RT menunjukkan bintik gelap bulat di dalam las. Supervisor berkata 'Buroohoru ga aru!' (ブローホールがある！). Apa penyebabnya?",
      opts: [
        "Logam pengisi salah untuk material dasar",
        "Arus berlebih — terlalu banyak panas di las",
        "Kecepatan jalan terlalu lambat — logam terlalu banyak",
        "Gas terperangkap (dari kelembapan, karat, minyak, kontaminasi, atau pelindung buruk) yang tak bisa lepas dari logam las yang membeku",
      ],
      exp: "Buroohoru (ブローホール) = Blowhole / Porositas. Gas terperangkap di dalam logam las yang membeku, tampak sebagai bintik gelap bulat pada film RT. Penyebab: kelembapan pada logam dasar, karat, minyak, cat, gas pelindung kurang, busur terlalu panjang, pengisi terkontaminasi. Pencegahan: bersihkan logam dasar, periksa aliran gas, jaga panjang busur yang benar. 🇯🇵 TIPS: Di galangan dan lokasi konstruksi Jepang, persiapan logam dasar (下地処理 / shitaji-shori) sebelum mengelas ditanggapi sangat serius. Pekerja diharapkan menggerinda karat, mengelap dengan aseton, dan memastikan nol kontaminasi sebelum menyalakan busur. Jika blowhole muncul pada RT dan tertelusur ke persiapan Anda yang buruk, Anda akan diminta mengelas ulang dengan waktu Anda sendiri — dan Anda akan mengingatnya.",
    },
  },
  404: {
    vi: {
      q: "Phim RT cho thấy các bóng tối kéo dài thành hàng dọc mối hàn. Đây là loại khuyết tật gì?",
      opts: [
        "Suragu-makikomi (スラグ巻き込み) — lẫn xỉ — xỉ kẹt trong mối hàn do bỏ không hết giữa các lượt",
        "Oobaraappu (オーバーラップ) — chồng mép bề mặt",
        "Buroohoru (ブローホール) — rỗ khí tròn",
        "Andaakatto (アンダーカット) — rãnh lẹm bề mặt",
      ],
      exp: "Suragu-makikomi (スラグ巻き込み) = Lẫn xỉ. Xỉ (ノロ) từ lượt trước không được bỏ hết trước lượt kế — bị kẹt trong mối hàn. Hiện trên RT như hình tối kéo dài bất thường. Phòng ngừa: đục và chải sắt kỹ giữa MỖI lượt. Đây là lý do 'Chippingu' rất quan trọng ở Nhật. 🇯🇵 MẸO: Ở Nhật, búa đục (チッピングハンマー) được vung dứt khoát — không phải gõ nhẹ. Đàn anh nói 'Noro wa shikkari tore' (ノロはしっかり取れ / bỏ xỉ cho sạch). Nếu bạn bỏ qua vì vội và RT trả về lẫn xỉ, tổ trưởng (職長 / shokuchoo) sẽ có một cuộc nói chuyện rất thẳng với bạn.",
    },
    id: {
      q: "Film RT menunjukkan bayangan gelap memanjang dalam garis di sepanjang las. Jenis cacat apa ini?",
      opts: [
        "Suragu-makikomi (スラグ巻き込み) — inklusi terak — terak terperangkap di dalam las akibat pembuangan tak tuntas antar-pass",
        "Oobaraappu (オーバーラップ) — overlap permukaan",
        "Buroohoru (ブローホール) — pori gas bulat",
        "Andaakatto (アンダーカット) — alur permukaan",
      ],
      exp: "Suragu-makikomi (スラグ巻き込み) = Inklusi terak. Terak (ノロ) dari pass sebelumnya tak dibuang tuntas sebelum pass berikutnya — terperangkap di dalam las. Tampak pada RT sebagai bentuk gelap memanjang tak beraturan. Pencegahan: ketuk dan sikat kawat menyeluruh di antara SETIAP pass. Inilah mengapa 'Chippingu' sangat penting di Jepang. 🇯🇵 TIPS: Di Jepang, palu ketuk (チッピングハンマー) diayun dengan niat penuh — bukan ketukan lembut. Tukang senior berkata 'Noro wa shikkari tore' (ノロはしっかり取れ / buang terak sampai bersih). Jika Anda melewatkannya karena terburu-buru, dan RT kembali dengan inklusi terak, mandor (職長 / shokuchoo) akan berbicara sangat langsung dengan Anda.",
    },
  },
  405: {
    vi: {
      q: "'Yuugou-furyou' (融合不良) — viết tắt LOF — là gì và vì sao nguy hiểm?",
      opts: [
        "Đường hàn quá hẹp",
        "Thiếu hòa nhập — kim loại hàn đắp bên cạnh nhưng KHÔNG hòa nhập với kim loại nền hoặc lượt trước. Tạo mặt phân giới không liên kết như một vết nứt",
        "Ôxy hóa bề mặt do che khí không đủ",
        "Đắp quá nhiều kim loại — đắp thừa",
      ],
      exp: "Yuugou-furyou (融合不良) = Thiếu hòa nhập (LOF). Kim loại hàn nằm cạnh nhưng KHÔNG liên kết luyện kim với kim loại nền hoặc lượt trước. Nguyên nhân: dòng không đủ, kỹ thuật sai, nhiễm bẩn. LOF dạng phẳng (như vết nứt) và KHÔNG dễ phát hiện bằng RT như khuyết tật tròn. UT tốt hơn để phát hiện LOF. Rất nguy hiểm ở mối kết cấu. 🇯🇵 MẸO: Yuugou-furyou đặc biệt đáng sợ ở nhà máy hạt nhân và LNG Nhật vì có thể vô hình trên phim RT và không rò khi thử áp ban đầu — chỉ để hỏng thảm khốc dưới ứng suất chu kỳ nhiều năm sau. Khi người kiểm tra Nhật nói 'UT de kite' (UTで来て / mang kết quả UT về), họ nghi có LOF. Hãy xem UT rất nghiêm túc.",
    },
    id: {
      q: "Apa itu 'Yuugou-furyou' (融合不良) — disingkat LOF — dan mengapa berbahaya?",
      opts: [
        "Jalur las terlalu sempit",
        "Lack of Fusion — logam las diendapkan bersebelahan tapi TIDAK menyatu dengan logam dasar atau pass sebelumnya. Menciptakan antarmuka planar tak terikat yang berperilaku seperti retak",
        "Oksidasi permukaan akibat pelindung kurang",
        "Terlalu banyak logam las diendapkan — penguatan berlebih",
      ],
      exp: "Yuugou-furyou (融合不良) = Lack of Fusion (LOF). Logam las berada di sebelah tapi TIDAK terikat secara metalurgi ke logam dasar atau pass sebelumnya. Penyebab: arus kurang, teknik salah, kontaminasi. LOF bersifat planar (seperti retak) dan TIDAK semudah cacat bulat terdeteksi RT. UT lebih baik untuk mendeteksi LOF. Sangat berbahaya pada las struktur. 🇯🇵 TIPS: Yuugou-furyou terutama ditakuti di fasilitas nuklir dan LNG Jepang karena bisa tak terlihat pada film RT dan mungkin tak bocor saat uji tekan awal — hanya untuk gagal katastrofik di bawah tegangan siklik bertahun-tahun kemudian. Saat inspektor Jepang berkata 'UT de kite' (UTで来て / kembali dengan hasil UT), mereka mencurigai LOF. Tanggapi UT dengan sangat serius.",
    },
  },
  406: {
    vi: {
      q: "Khác biệt giữa 'Teion-ware' (低温割れ) và 'Kouon-ware' (高温割れ) là gì?",
      opts: [
        "Teion-ware = trên 500°C, Kouon-ware = dưới 0°C",
        "Chúng là cùng khuyết tật với tên khác nhau tùy công ty",
        "Teion-ware (nứt nguội / nứt hydro) = hình thành HÀNG GIỜ hoặc HÀNG NGÀY sau khi hàn ở nhiệt độ phòng. Kouon-ware (nứt nóng) = hình thành ngay khi đông ở nhiệt độ cao",
        "Teion-ware chỉ xảy ra ở inox, Kouon-ware chỉ ở thép carbon",
      ],
      exp: "Teion-ware (低温割れ) = Nứt nguội / nứt do hydro. Hình thành SAU khi hàn (hàng giờ đến hàng ngày) ở nhiệt độ phòng. Cần: HAZ cứng + hydro khuếch tán + ứng suất kéo. Phòng ngừa: nung trước, que ít hydro, PWHT. Kouon-ware (高温割れ) = Nứt nóng. Hình thành NGAY khi đông. Do tạp chất điểm nóng chảy thấp. Hai vấn đề rất khác cần giải pháp khác. 🇯🇵 MẸO: Ở Nhật, câu '低温割れに注意' (teion-ware ni chuui / coi chừng nứt nguội) xuất hiện trong WPS cho thép cường độ cao hoặc dày. Nếu hàn SM490 trở lên trong điều kiện lạnh ngoài trời (công trường mùa đông ở Tohoku hay Hokkaido), nung trước không phải tùy chọn — đó là nghĩa vụ an toàn nghiêm túc. Đừng bao giờ bỏ kiểm nung trước.",
    },
    id: {
      q: "Apa perbedaan 'Teion-ware' (低温割れ) dan 'Kouon-ware' (高温割れ)?",
      opts: [
        "Teion-ware = di atas 500°C, Kouon-ware = di bawah 0°C",
        "Keduanya cacat sama dengan nama berbeda tergantung perusahaan",
        "Teion-ware (retak dingin / retak hidrogen) = terbentuk BERJAM-JAM atau BERHARI-HARI setelah mengelas pada suhu ruang. Kouon-ware (retak panas) = terbentuk seketika saat pembekuan pada suhu tinggi",
        "Teion-ware hanya terjadi pada stainless, Kouon-ware hanya pada baja karbon",
      ],
      exp: "Teion-ware (低温割れ) = Retak dingin / retak akibat hidrogen. Terbentuk SETELAH mengelas (berjam-jam hingga berhari-hari kemudian) pada suhu ruang. Membutuhkan: HAZ keras + hidrogen difusi + tegangan tarik. Pencegahan: preheat, elektroda rendah hidrogen, PWHT. Kouon-ware (高温割れ) = Retak panas. Terbentuk SEKETIKA saat pembekuan. Disebabkan pengotor bertitik leleh rendah. Dua masalah sangat berbeda yang butuh solusi berbeda. 🇯🇵 TIPS: Di Jepang, frasa '低温割れに注意' (teion-ware ni chuui / waspadai retak dingin) muncul dalam WPS untuk baja kekuatan tinggi atau tebal. Jika mengelas SM490 atau lebih kuat di kondisi dingin luar ruangan (lokasi konstruksi musim dingin di Tohoku atau Hokkaido), preheat bukan opsional — itu kewajiban keselamatan serius. Jangan pernah melewatkan pemeriksaan preheat.",
    },
  },
  407: {
    vi: {
      q: "Ở cuối một đường hàn, hồ quang bị cắt đột ngột không lấp hố đúng. Khuyết tật nào có thể hình thành?",
      opts: [
        "Andaakatto (アンダーカット)",
        "Oobaraappu (オーバーラップ)",
        "Buroohoru (ブローホール)",
        "Kureetaa-ware (クレーター割れ) — vết nứt hình thành trong hố lõm ở cuối mối hàn do co ngót nhanh",
      ],
      exp: "Kureetaa-ware (クレーター割れ) = Nứt hố. Khi bạn dừng hồ quang đột ngột, một hố lõm còn lại. Khi nó đông và co nhanh hơn mối hàn xung quanh, vết nứt hình thành từ tâm ra ngoài. Phòng ngừa: dùng kỹ thuật lấp hố — giảm dòng từ từ và lấp đầy hố trước khi ngắt hồ quang. Đừng bao giờ chỉ dừng giữa chừng. 🇯🇵 MẸO: Trên công trường Nhật, giám sát có thể xem cuối mối hàn của bạn để kiểm kỹ thuật lấp hố. Câu 'Owari wa shikkari' (終わりはしっかり / kết thúc cho chỉn chu) rất phổ biến. Nứt hố ở cuối mối hàn bị xem là dấu hiệu vội vàng cẩu thả — nó phản ánh tính chuyên nghiệp của bạn nhiều như chính mối hàn.",
    },
    id: {
      q: "Di akhir jalur las, busur diputus tiba-tiba tanpa pengisian kawah yang benar. Cacat apa yang mungkin terbentuk?",
      opts: [
        "Andaakatto (アンダーカット)",
        "Oobaraappu (オーバーラップ)",
        "Buroohoru (ブローホール)",
        "Kureetaa-ware (クレーター割れ) — retak yang terbentuk di cekungan kawah di akhir las akibat penyusutan cepat",
      ],
      exp: "Kureetaa-ware (クレーター割れ) = Retak kawah. Saat Anda menghentikan busur mendadak, tersisa kawah cekung. Saat ini membeku dan menyusut lebih cepat dari las sekitarnya, retak terbentuk dari tengah ke luar. Pencegahan: pakai teknik pengisian kawah — kurangi arus bertahap dan isi kawah sebelum memutus busur. Jangan pernah hanya berhenti di tengah las. 🇯🇵 TIPS: Di lokasi Jepang, supervisor bisa mengamati akhir las Anda khusus untuk memeriksa teknik pengisian kawah. Frasa 'Owari wa shikkari' (終わりはしっかり / selesaikan dengan benar) umum. Retak kawah di akhir las dilihat sebagai tanda ketergesaan ceroboh — mencerminkan profesionalisme Anda sebanyak lasnya sendiri.",
    },
  },
  408: {
    vi: {
      q: "Một mối hàn đạt VT (Mokushi-shiken / 目視試験) với bề mặt nhẵn hoàn hảo. Đạt VT có đảm bảo mối hàn không có rỗ khí (ブローホール) hoặc lẫn xỉ (スラグ巻き込み) bên trong không?",
      opts: [
        "Không — VT chỉ phát hiện khuyết tật BỀ MẶT; khuyết tật bên trong như rỗ khí và lẫn xỉ hoàn toàn vô hình với mắt và cần RT hoặc UT để phát hiện, dù bề mặt trông hoàn hảo",
        "Có, nhưng chỉ với mối góc, không phải mối rãnh",
        "Không, nhưng chỉ vì người kiểm VT không được đào tạo tìm rỗ khí",
        "Có — nếu bề mặt trông hoàn hảo, bên trong đảm bảo cũng không khuyết tật",
      ],
      exp: "VT (Kiểm tra ngoại quan / 目視試験) là bước kiểm đầu tiên và cơ bản nhất — nhanh, miễn phí, bắt được khuyết tật bề mặt rõ như nứt, lẹm, chồng mép và vấn đề hình học. Nhưng VT KHÔNG BAO GIỜ phát hiện khuyết tật bên trong: rỗ khí (ブローホール) và lẫn xỉ (スラグ巻き込み) hình thành hoàn toàn trong kim loại hàn và vô hình với mắt dù bề mặt nhẵn thế nào. Đây chính là lý do RT và UT tồn tại như bước riêng, bắt buộc cho mối hàn quan trọng. 🇯🇵 MẸO: Người kiểm tra Nhật nói 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Ngoài đẹp nhưng trong không thấy được) — một đường hàn trông hoàn hảo không phải bằng chứng vững chắc bên trong.",
    },
    id: {
      q: "Sebuah las lulus VT (Mokushi-shiken / 目視試験) dengan permukaan mulus sempurna. Apakah lulus VT menjamin las tak punya porositas (ブローホール) atau inklusi terak (スラグ巻き込み) di dalamnya?",
      opts: [
        "Tidak — VT hanya mendeteksi cacat PERMUKAAN; cacat internal seperti porositas dan inklusi terak sepenuhnya tak terlihat mata dan perlu RT atau UT untuk mendeteksinya, meski permukaan tampak sempurna",
        "Ya, tapi hanya untuk las sudut, bukan las alur",
        "Tidak, tapi hanya karena inspektor VT tak dilatih mencari porositas sama sekali",
        "Ya — jika permukaan tampak sempurna, bagian dalam dijamin bebas cacat juga",
      ],
      exp: "VT (Visual Testing / 目視試験) adalah pemeriksaan pertama dan paling mendasar — cepat, gratis, menangkap cacat permukaan jelas seperti retak, undercut, overlap, dan masalah geometri. Tapi VT TIDAK PERNAH bisa mendeteksi cacat internal: porositas (ブローホール) dan inklusi terak (スラグ巻き込み) terbentuk sepenuhnya di dalam logam las dan tak terlihat mata sebagus apa pun permukaannya. Inilah persis mengapa RT dan UT ada sebagai langkah terpisah dan wajib untuk las kritis. 🇯🇵 TIPS: Inspektor Jepang berkata 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Meski luarnya indah, kami tak bisa melihat dalamnya) — jalur yang tampak sempurna bukan bukti kesehatan internal.",
    },
  },
  409: {
    vi: {
      q: "'PT' (Shinto-tansho / 浸透探傷試験) hoạt động thế nào?",
      opts: [
        "Sóng âm dội lại từ khuyết tật bên trong",
        "Chất thẩm thấu màu đỏ bôi lên bề mặt, hút vào vết nứt, rồi chất hiện (bột trắng) được bôi — khuyết tật hiện thành vết đỏ trên nền trắng",
        "Bột sắt từ tính tụ tại vị trí khuyết tật",
        "Tia X xuyên qua mối hàn và phơi lên phim",
      ],
      exp: "PT (Kiểm tra thẩm thấu / 浸透探傷試験): 1) Bôi chất thẩm thấu đỏ. 2) Chờ (thời gian thấm). 3) Bỏ phần thừa. 4) Bôi bột hiện trắng. 5) Vết nứt đã hút chất thẩm thấu sẽ 'rỉ ra' thành vết đỏ trên nền trắng. Phát hiện: chỉ vết nứt và lỗ MỞ BỀ MẶT. Dùng cho vật liệu KHÔNG TỪ TÍNH (inox, nhôm). Không phát hiện khuyết tật bên trong. 🇯🇵 MẸO: Ở nhà máy thực phẩm, dược và bán dẫn Nhật dùng nhiều inox, PT được làm sau mỗi lần sửa mối hàn. 'Thời gian thấm' (浸透時間 / shintou-jikan) then chốt — vội lau quá sớm là bỏ sót vết nứt nhỏ. Người kiểm tra thường dùng đồng hồ và sẽ từ chối kết quả nếu không đủ thời gian thấm. Kiên nhẫn và kỷ luật quy trình là tất cả trong công việc kiểm tra ở Nhật.",
    },
    id: {
      q: "Bagaimana cara kerja 'PT' (Shinto-tansho / 浸透探傷試験)?",
      opts: [
        "Gelombang suara memantul dari cacat internal",
        "Cairan penetran merah dioleskan ke permukaan, tertarik ke retakan, lalu developer (bubuk putih) dioleskan — cacat muncul sebagai indikasi merah di latar putih",
        "Bubuk besi magnetik menggerombol di lokasi cacat",
        "Sinar-X menembus las dan mengekspos film",
      ],
      exp: "PT (Penetrant Testing / 浸透探傷試験): 1) Oleskan cairan penetran merah. 2) Tunggu (dwell time). 3) Buang kelebihannya. 4) Oleskan bubuk developer putih. 5) Retak yang menyerap penetran akan 'merembes' sebagai tanda merah di latar putih. Mendeteksi: hanya retak dan pit TERBUKA di PERMUKAAN. Bekerja pada material NON-MAGNETIK (stainless, aluminium). Tak bisa mendeteksi cacat internal. 🇯🇵 TIPS: Di fasilitas makanan, farmasi, dan semikonduktor Jepang yang banyak memakai stainless, PT dilakukan setelah tiap perbaikan las. 'Dwell time' (浸透時間 / shintou-jikan) krusial — tergesa mengelap terlalu cepat berarti melewatkan retak halus. Inspektor sering memakai timer dan akan menolak hasil jika dwell time tak dipatuhi. Kesabaran dan disiplin proses adalah segalanya dalam pekerjaan inspeksi Jepang.",
    },
  },
  410: {
    vi: {
      q: "Khi nào bạn dùng 'PT' (浸透探傷) thay cho 'MT' (磁粉探傷) cho thép không gỉ?",
      opts: [
        "PT và MT thay lẫn được — dùng cái nào cũng được",
        "MT tốt hơn cho inox — luôn ưu tiên MT",
        "PT phải dùng cho inox (SUS304 v.v.) vì inox austenit KHÔNG TỪ TÍNH — MT cần vật liệu từ tính mới hoạt động. PT không bị giới hạn từ tính",
        "Không cái nào dùng được cho inox — chỉ dùng RT",
      ],
      exp: "MT (Kiểm tra hạt từ / 磁粉探傷試験) dùng từ trường hút bột sắt vào khuyết tật — CHỈ hoạt động trên vật liệu từ tính (ferrit). Inox austenit (SUS304, SUS316) KHÔNG TỪ TÍNH. Với inox, bạn PHẢI dùng PT (浸透探傷). Inox có hàm lượng ferrit (như SUS430) có thể cho phép MT — kiểm loại vật liệu trước. 🇯🇵 MẸO: Nhầm PT và MT trên việc hàn inox ở Nhật là lỗi nghiêm trọng sẽ bị chú ý ngay. Trước bất kỳ NDT nào, xác nhận loại vật liệu (材料確認 / zairyou-kakunin) từ chứng chỉ nhà máy (ミルシート / mirushiito). Ở Nhật, chứng chỉ nhà máy là tài liệu bắt buộc cho mọi vật liệu dùng trong mối hàn có chứng nhận. Biết đọc nó làm bạn nổi bật.",
    },
    id: {
      q: "Kapan Anda memakai 'PT' (浸透探傷) alih-alih 'MT' (磁粉探傷) untuk baja tahan karat?",
      opts: [
        "PT dan MT bisa dipertukarkan — pakai yang mana saja",
        "MT lebih baik untuk stainless — selalu utamakan MT",
        "PT harus dipakai untuk stainless (SUS304 dll.) karena stainless austenitik NON-MAGNETIK — MT butuh material magnetik agar bekerja. PT tak punya batasan magnetik",
        "Tak satu pun bekerja pada stainless — pakai RT saja",
      ],
      exp: "MT (Magnetic Particle Testing / 磁粉探傷試験) memakai medan magnet untuk menarik bubuk besi ke cacat — HANYA bekerja pada material magnetik (feritik). Stainless austenitik (SUS304, SUS316) NON-MAGNETIK. Untuk stainless, Anda HARUS memakai PT (浸透探傷). Stainless berkandungan ferit (seperti SUS430) mungkin memungkinkan MT — periksa jenis material dulu. 🇯🇵 TIPS: Tertukar PT dan MT pada pekerjaan las stainless di Jepang adalah kesalahan serius yang akan segera diketahui. Sebelum NDT apa pun, pastikan jenis material (材料確認 / zairyou-kakunin) dari sertifikat pabrik (ミルシート / mirushiito). Di Jepang, sertifikat pabrik adalah dokumen wajib untuk tiap material yang dipakai dalam las terkualifikasi. Bisa membacanya membuat Anda menonjol.",
    },
  },
  411: {
    vi: {
      q: "'UT' (Cho-onpa-tansho / 超音波探傷試験) giỏi phát hiện gì hơn so với RT?",
      opts: [
        "UT tốt hơn để kiểm độ tinh khiết khí bảo vệ",
        "UT tốt hơn để phát hiện rỗ khí tròn (ブローホール)",
        "UT tốt hơn để phát hiện nứt bề mặt thấy được bằng mắt",
        "UT giỏi phát hiện khuyết tật DẠNG PHẲNG — nứt, thiếu hòa nhập (融合不良), thiếu ngấu. Các khuyết tật phẳng này phản xạ sóng âm mạnh ngay cả khi RT bỏ sót",
      ],
      exp: "UT (Kiểm tra siêu âm) phát sóng âm tần số cao vào kim loại. Khuyết tật phẳng (nứt, đường hòa nhập, tách lớp) phản xạ âm mạnh về đầu dò — phát hiện tuyệt vời. RT (tia X) tốt hơn cho khuyết tật thể tích (rỗ tròn, xỉ). Với mối hàn quan trọng ở xưởng đóng tàu và tòa nhà Nhật, thường cần CẢ UT lẫn RT. 🇯🇵 MẸO: Ở Nhật, người vận hành UT (超音波探傷士) là chuyên gia có giấy phép quốc gia. Phán đoán của họ có thẩm quyền — nếu họ nói 'yokogiri no echo ga aru' (横切りのエコーがある / có tiếng vọng nứt ngang), công việc dừng. Đừng tranh cãi với người vận hành UT. Chứng chỉ của họ tốn nhiều năm để đạt.",
    },
    id: {
      q: "'UT' (Cho-onpa-tansho / 超音波探傷試験) unggul mendeteksi apa dibanding RT?",
      opts: [
        "UT lebih baik untuk memeriksa kemurnian gas pelindung",
        "UT lebih baik mendeteksi pori gas bulat (ブローホール)",
        "UT lebih baik mendeteksi retak permukaan yang terlihat mata",
        "UT unggul mendeteksi cacat PLANAR — retak, lack of fusion (融合不良), lack of penetration. Cacat planar ini memantulkan gelombang suara kuat bahkan saat RT melewatkannya",
      ],
      exp: "UT (Ultrasonic Testing) mengirim gelombang suara frekuensi tinggi ke logam. Cacat planar (retak, garis fusi, laminasi) memantulkan suara kuat kembali ke probe — deteksi sangat baik. RT (sinar-X) lebih baik untuk cacat volumetrik (pori bulat, terak). Untuk las kritis di galangan dan bangunan Jepang, sering diperlukan UT DAN RT. 🇯🇵 TIPS: Di Jepang, operator UT (超音波探傷士) adalah profesional berlisensi nasional khusus. Penilaian mereka otoritatif — jika mereka berkata 'yokogiri no echo ga aru' (横切りのエコーがある / ada eko retak melintang), pekerjaan berhenti. Jangan berdebat dengan operator UT. Sertifikasi mereka butuh bertahun-tahun untuk diraih.",
    },
  },
  412: {
    vi: {
      q: "'RT' (Hoshasen-toka-shiken / 放射線透過試験) thường được gọi là gì trên công trường Nhật, và hàm ý an toàn là gì?",
      opts: [
        "Gọi là 'Rentogen' (レントゲン) — lóng Nhật cho tia X. Khi làm RT: khu vực trở thành VÙNG NGUY HIỂM PHÓNG XẠ (放射線管理区域) và TẤT CẢ người phải rời đi",
        "Gọi là 'Rentogen' nhưng hoàn toàn an toàn — không cần sơ tán",
        "Gọi là 'Cho-onpa' — giống kiểm tra siêu âm",
        "Không có lo ngại an toàn với RT — mức phóng xạ rất thấp",
      ],
      exp: "RT được gọi là Rentogen (レントゲン) trên công trường Nhật — lóng cho tia X từ nhà vật lý Đức Röntgen. Khi làm RT: thiết lập vùng quản lý phóng xạ bắt buộc (放射線管理区域). TẤT CẢ công nhân phải sơ tán trước khi chụp. Cán bộ an toàn đặc biệt (放射線取扱主任者) quản lý quy trình. Kết quả RT được ghi vĩnh viễn lên phim — khác UT, phim là hồ sơ chất lượng vĩnh viễn. 🇯🇵 MẸO: Khi thông báo 'Rentogen wo torimasu — taiki shite kudasai' (レントゲンを撮ります — 待機してください / Chúng tôi chụp X-quang — vui lòng chờ) vang lên, MỌI người dừng ngay và di chuyển đến khu chờ chỉ định. Tiếp tục làm việc trong vùng phóng xạ là vi phạm hình sự nghiêm trọng. Điều này không thương lượng.",
    },
    id: {
      q: "'RT' (Hoshasen-toka-shiken / 放射線透過試験) biasa disebut apa di lokasi Jepang, dan apa implikasi keselamatannya?",
      opts: [
        "Disebut 'Rentogen' (レントゲン) — slang Jepang untuk sinar-X. Saat RT: area menjadi ZONA BAHAYA RADIASI (放射線管理区域) dan SEMUA personel harus meninggalkan area",
        "Disebut 'Rentogen' tapi benar-benar aman — tak perlu evakuasi",
        "Disebut 'Cho-onpa' — sama dengan uji ultrasonik",
        "Tak ada masalah keselamatan dengan RT — tingkat radiasi sangat rendah",
      ],
      exp: "RT disebut Rentogen (レントゲン) di lokasi Jepang — slang untuk sinar-X dari fisikawan Jerman Röntgen. Saat RT: zona pengelolaan radiasi wajib (放射線管理区域) ditetapkan. SEMUA pekerja harus evakuasi sebelum penembakan. Petugas keselamatan khusus (放射線取扱主任者) mengelola prosesnya. Hasil RT dicatat permanen pada film — tidak seperti UT, film berfungsi sebagai rekaman mutu permanen. 🇯🇵 TIPS: Saat pengumuman 'Rentogen wo torimasu — taiki shite kudasai' (レントゲンを撮ります — 待機してください / Kami menembak X-ray — harap menunggu) dibuat di lokasi, SEMUA ORANG langsung berhenti dan pindah ke area tunggu yang ditentukan. Melanjutkan kerja di zona radiasi adalah pelanggaran pidana serius. Ini tak bisa ditawar.",
    },
  },
  413: {
    vi: {
      q: "Một mối hàn đạt VT nhưng trượt RT. Phim RT cho thấy đốm tối tròn bên trong. Đây là loại khuyết tật gì và vì sao VT không bắt được?",
      opts: [
        "Đắp quá cao — thấy được từ ngoài",
        "Rỗ khí bên trong (ブローホール) — VT chỉ thấy BỀ MẶT. Rỗ khí bên trong vô hình với mắt và chỉ phát hiện bằng RT, UT hoặc phương pháp thể tích khác",
        "Chồng mép ở mép chân — thấy được từ ngoài",
        "Lẹm bề mặt — VT lẽ ra phải bắt được",
      ],
      exp: "VT (Kiểm tra ngoại quan) chỉ phát hiện khuyết tật BỀ MẶT. Khuyết tật bên trong — như rỗ khí (ブローホール), lẫn xỉ (スラグ巻き込み) và lỗi hòa nhập — hoàn toàn vô hình với mắt. Đây là lý do RT (tia X) và UT bắt buộc cho mối hàn quan trọng ở Nhật: đạt VT KHÔNG đảm bảo mối hàn vững chắc bên trong. 🇯🇵 MẸO: Đường hàn nhẵn đẹp đạt VT hoàn hảo gọi là 'kirei na bead' (きれいなビード) và được nể. Nhưng người kiểm tra Nhật cũng nói 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Ngoài đẹp nhưng trong không thấy). Đây là lý do RT và UT tồn tại — chất lượng bên trong cũng quan trọng như vậy.",
    },
    id: {
      q: "Sebuah las lulus VT tapi gagal RT. Film RT menunjukkan bintik gelap bulat internal. Jenis cacat apa ini dan mengapa VT tak menangkapnya?",
      opts: [
        "Penguatan las terlalu tinggi — terlihat dari luar",
        "Porositas internal (ブローホール) — VT hanya melihat PERMUKAAN. Pori gas internal tak terlihat mata dan hanya bisa dideteksi RT, UT, atau metode volumetrik lain",
        "Overlap di ujung las — terlihat dari luar",
        "Undercut permukaan — VT seharusnya menangkap ini",
      ],
      exp: "VT (Visual Testing) hanya mendeteksi cacat PERMUKAAN. Cacat internal — seperti porositas (ブローホール), inklusi terak (スラグ巻き込み), dan cacat fusi — sepenuhnya tak terlihat mata. Inilah mengapa RT (sinar-X) dan UT wajib untuk las kritis di Jepang: lulus VT TIDAK menjamin las sehat secara internal. 🇯🇵 TIPS: Jalur las yang mulus indah dan lulus VT sempurna disebut 'kirei na bead' (きれいなビード) dan dihargai. Tapi inspektor Jepang juga berkata 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Meski luarnya indah, kami tak bisa melihat dalamnya). Inilah mengapa RT dan UT ada — kualitas dalam sama pentingnya.",
    },
  },
  414: {
    vi: {
      q: "'Lamellar Tearing' (ラメラテア) là gì và phổ biến nhất ở cấu hình mối nối nào?",
      opts: [
        "Nứt bề mặt do mài quá mức",
        "Nứt nóng hình thành ngay sau khi hàn",
        "Vết nứt dạng lớp xuyên qua chiều dày kim loại nền do ứng suất kéo kéo lên tạp chất phi kim trong thép cán. Phổ biến nhất ở mối chữ T và mối chữ thập nơi ứng suất tác dụng qua chiều dày tấm",
        "Một loại rỗ khí riêng của hàn ống",
      ],
      exp: "Ramera-tea (ラメラテア) = Nứt lớp. Thép được cán ở nhà máy — tạp chất phi kim thành lớp phẳng song song mặt tấm. Khi hàn tạo ứng suất kéo XUYÊN qua chiều dày tấm (phổ biến ở mối chữ T, nối cột), các lớp này có thể tách ra. Phòng ngừa: dùng thép ít lưu huỳnh (低硫黄鋼), nung trước, hoặc thiết kế lại mối nối. 🇯🇵 MẸO: Nứt lớp đặc biệt đáng lo ở nối cột nhà cao tầng Nhật (ダイアフラム接合部). Khi kỹ sư quy định thép có đặc tính hướng Z (Z方向特性鋼) trên bản vẽ, nghĩa là họ đang phòng nứt lớp cụ thể. Là thợ hàn, nếu thấy quy cách vật liệu này, hãy biết nó được chọn có lý do — xử lý cẩn thận và tuân WPS chính xác.",
    },
    id: {
      q: "Apa itu 'Lamellar Tearing' (ラメラテア) dan pada konfigurasi sambungan mana paling umum?",
      opts: [
        "Retak permukaan akibat penggerindaan berlebih",
        "Retak panas yang terbentuk seketika setelah mengelas",
        "Retak berlapis melalui tebal logam dasar akibat tegangan tarik yang menarik inklusi non-logam pada baja canai. Paling umum di sambungan T dan silang di mana tegangan bekerja melalui tebal pelat",
        "Sejenis porositas las unik untuk las pipa",
      ],
      exp: "Ramera-tea (ラメラテア) = Lamellar tearing. Baja dicanai di pabrik — inklusi non-logam menjadi lapisan datar sejajar permukaan pelat. Saat pengelasan menciptakan tegangan tarik MELALUI tebal pelat (umum di sambungan T, sambungan kolom), lapisan ini bisa terbelah. Pencegahan: pakai baja rendah sulfur (低硫黄鋼), preheat, atau desain ulang sambungan. 🇯🇵 TIPS: Lamellar tearing terutama jadi perhatian di sambungan kolom gedung tinggi Jepang (ダイアフラム接合部). Saat insinyur menetapkan baja properti arah-Z (Z方向特性鋼) di gambar, artinya mereka khusus mencegah lamellar tearing. Sebagai tukang las, jika Anda melihat spesifikasi material ini, ketahui bahwa itu dipilih karena suatu alasan — tangani dengan hati-hati dan ikuti WPS dengan persis.",
    },
  },
  415: {
    vi: {
      q: "Mối hàn của bạn trượt RT vì 'Tokekomi-furyou' (溶込不良). LOP là gì và do đâu?",
      opts: [
        "Ngấu quá nhiều — mối hàn thủng mặt sau",
        "Đắp thừa trên đỉnh mối nối",
        "Rỗ khí ở chân mối hàn",
        "Thiếu ngấu — kim loại hàn KHÔNG ngấu đến chân mối nối. Do: dòng quá thấp, tốc độ quá nhanh, khe chân sai, góc súng sai",
      ],
      exp: "Tokekomi-furyou (溶込不良) = Thiếu ngấu (LOP). Hồ quang không tới chân mối nối — để lại khe không hòa nhập ở đáy. Nguyên nhân: dòng không đủ, tốc độ quá nhanh, khe chân quá nhỏ, góc que sai. Trong thi chứng chỉ JIS Nhật, thiếu ngấu chân là trượt tự động. 🇯🇵 MẸO: Trong thi thực hành JIS hàn rãnh, người kiểm tra mài và uốn mẫu — LOP ở chân sẽ nứt bung ngay khi thử uốn (曲げ試験 / mage-shiken). Không giấu được. Đây là lý do thợ Nhật luyện lượt chân đến ám ảnh. Câu 'Shosou ga inochi' (初層が命 / lượt đầu là mạng sống) phản ánh sự tôn trọng dành cho lượt chân.",
    },
    id: {
      q: "Las Anda gagal inspeksi RT karena 'Tokekomi-furyou' (溶込不良). Apa itu LOP dan apa penyebabnya?",
      opts: [
        "Penetrasi berlebih — las tembus ke belakang",
        "Penguatan las berlebih di atas sambungan",
        "Porositas di akar las",
        "Lack of Penetration — logam las TIDAK menembus ke akar sambungan. Disebabkan: arus terlalu rendah, jalan terlalu cepat, root gap salah, sudut gun salah",
      ],
      exp: "Tokekomi-furyou (溶込不良) = Lack of Penetration (LOP). Busur tak mencapai akar sambungan — meninggalkan celah tak menyatu di dasar. Penyebab: arus kurang, kecepatan jalan terlalu cepat, root gap terlalu kecil, sudut elektroda salah. Dalam ujian sertifikasi JIS Jepang, penetrasi akar tak lengkap adalah kegagalan otomatis. 🇯🇵 TIPS: Dalam uji praktik JIS las alur, inspektor menggerinda dan menekuk benda uji — LOP di akar akan retak terbuka seketika saat uji tekuk (曲げ試験 / mage-shiken). Tak ada yang bisa disembunyikan. Inilah mengapa tukang las Jepang berlatih root pass secara obsesif. Frasa 'Shosou ga inochi' (初層が命 / pass pertama adalah nyawa) mencerminkan betapa dihormatinya root pass.",
    },
  },
  416: {
    vi: {
      q: "Khi nào dùng 'MT' (Jifun-tansho / 磁粉探傷試験) thay vì PT, và nó phát hiện được gì mà PT không?",
      opts: [
        "MT phát hiện nứt GẦN BỀ MẶT (hơi dưới bề mặt, không chỉ mở ra bề mặt) trên vật liệu TỪ TÍNH. PT chỉ phát hiện khuyết tật mở bề mặt",
        "MT chỉ dùng cho hàn nhôm",
        "MT hoạt động trên vật liệu không từ tính — PT không làm được",
        "MT và PT phát hiện đúng cùng khuyết tật",
      ],
      exp: "MT (Kiểm tra hạt từ / 磁粉探傷試験): Tạo từ trường lên vật — khuyết tật làm gián đoạn từ trường và bột sắt tụ tại các điểm này. MT phát hiện cả khuyết tật bề mặt LẪN gần bề mặt (hơi dưới bề mặt) trên vật liệu từ tính (thép carbon, inox ferrit). PT chỉ phát hiện khuyết tật MỞ ra bề mặt. MT nhạy hơn với vật liệu từ tính — được ưa dùng ở xưởng đóng tàu Nhật cho mối thép carbon. 🇯🇵 MẸO: Ở xưởng đóng tàu Nhật (造船所), MT được làm thường quy sau mỗi lượt hàn trên khung sườn và cấu kiện kết cấu. Phương pháp MT ướt huỳnh quang (蛍光磁粉探傷) dưới đèn UV được dùng để nhạy tối đa. Nếu bạn làm ở xưởng đóng tàu và thấy ai mang đèn UV và bình xịt trắng, đến giờ MT rồi — đảm bảo vùng hàn của bạn tiếp cận được và sạch.",
    },
    id: {
      q: "Kapan 'MT' (Jifun-tansho / 磁粉探傷試験) dipakai alih-alih PT, dan apa yang bisa dideteksinya yang PT tak bisa?",
      opts: [
        "MT bisa mendeteksi retak DEKAT-PERMUKAAN (sedikit di bawah permukaan, tak hanya terbuka ke permukaan) pada material MAGNETIK. PT hanya mendeteksi cacat yang terbuka di permukaan",
        "MT hanya dipakai untuk las aluminium",
        "MT bekerja pada material non-magnetik — PT tak bisa",
        "MT dan PT mendeteksi cacat yang persis sama",
      ],
      exp: "MT (Magnetic Particle Testing / 磁粉探傷試験): Menerapkan medan magnet ke benda kerja — cacat mengganggu medan dan bubuk besi menggerombol di titik-titik ini. MT mendeteksi cacat permukaan DAN dekat-permukaan (sedikit di bawah permukaan) pada material magnetik (baja karbon, stainless feritik). PT hanya mendeteksi cacat yang TERBUKA ke permukaan. MT lebih sensitif untuk material magnetik — disukai di galangan Jepang untuk las baja karbon. 🇯🇵 TIPS: Di galangan Jepang (造船所), MT dilakukan rutin setelah tiap pass las pada rangka lambung dan member struktur. Metode MT basah fluoresen (蛍光磁粉探傷) di bawah lampu UV dipakai untuk sensitivitas maksimum. Jika Anda bekerja di galangan dan melihat seseorang membawa lampu UV dan kaleng semprot putih, saatnya MT — pastikan area las Anda dapat diakses dan bersih.",
    },
  },
  417: {
    vi: {
      q: "Nứt nguội (低温割れ / Teion-ware) được gọi là 'nứt do hydro'. BA điều kiện nào phải CÙNG hiện diện để nứt nguội hình thành?",
      opts: [
        "Thời tiết nóng + inox + thừa khí bảo vệ",
        "Hydro khuếch tán trong mối hàn + tổ chức cứng/nhạy cảm + ứng suất kéo",
        "Nung trước thấp + tấm dày + chỉ phương pháp FCAW",
        "Dòng cao + tốc độ nhanh + sai dây",
      ],
      exp: "Nứt nguội (低温割れ) cần CẢ BA: 1) Hydro khuếch tán (từ ẩm, vật liệu nhiễm bẩn, hoặc que không phải loại ít hydro). 2) Tổ chức cứng nhạy cảm (mactenxit ở HAZ — từ thép carbon đương lượng cao hoặc nguội nhanh). 3) Ứng suất kéo (dư hoặc tác dụng). Loại bỏ BẤT KỲ một điều là nứt không thể hình thành. Giải pháp: nung trước + vật liệu ít hydro + PWHT. 🇯🇵 MẸO: Ở Nhật, que hàn cho việc kết cấu quan trọng được cất trong lò sấy que (乾燥炉 / kansou-ro) ở 300–350°C trước khi dùng, mỗi thợ chỉ lấy đủ cho một ca. Để que ngoài trời ẩm là chúng hút ẩm — và ẩm đó thành hydro khuếch tán trong mối hàn. Tổ trưởng Nhật coi việc cất que rất nghiêm túc.",
    },
    id: {
      q: "Retak dingin (低温割れ / Teion-ware) disebut 'retak akibat hidrogen'. TIGA kondisi apa yang harus SEMUA ada agar retak dingin terbentuk?",
      opts: [
        "Cuaca panas + stainless + gas pelindung berlebih",
        "Hidrogen difusi dalam las + mikrostruktur keras/rentan + tegangan tarik",
        "Preheat rendah + pelat tebal + hanya proses FCAW",
        "Arus tinggi + jalan cepat + kawat salah",
      ],
      exp: "Retak dingin (低温割れ) membutuhkan KETIGANYA: 1) Hidrogen difusi (dari kelembapan, material terkontaminasi, atau elektroda bukan rendah hidrogen). 2) Mikrostruktur keras rentan (martensit di HAZ — dari baja karbon ekuivalen tinggi atau pendinginan cepat). 3) Tegangan tarik (sisa atau terapan). Hilangkan SALAH SATU maka retak tak bisa terbentuk. Solusi: preheat + material rendah hidrogen + PWHT. 🇯🇵 TIPS: Di Jepang, elektroda las untuk pekerjaan struktur kritis disimpan dalam oven elektroda (乾燥炉 / kansou-ro) pada 300–350°C sebelum dipakai, dan tiap tukang mengambil hanya sesuai kebutuhan satu sesi. Membiarkan elektroda di luar pada hari lembap berarti menyerap kelembapan — dan kelembapan itu menjadi hidrogen difusi di las Anda. Mandor Jepang menanggapi penyimpanan elektroda dengan sangat serius.",
    },
  },
  418: {
    vi: {
      q: "Một nứt nguội được phát hiện 24 giờ SAU khi hàn — mối hàn trông ổn ngay sau khi hoàn thành. Sao có thể vậy?",
      opts: [
        "Không thể — nứt hình thành ngay hoặc không bao giờ",
        "Vết nứt có từ đầu nhưng người kiểm tra bỏ sót",
        "Nứt nguội bị 'trì hoãn' — hydro khuếch tán từ từ di chuyển và tập trung ở điểm ứng suất, và nứt hình thành dần trong hàng giờ đến hàng ngày sau khi hàn. Đây là lý do thời điểm kiểm tra sau hàn quan trọng",
        "Kim loại bị va đập và nứt do tai nạn sau khi hàn",
      ],
      exp: "Nứt nguội còn gọi là 'nứt trì hoãn' vì hydro khuếch tán trong kim loại hàn di chuyển chậm đến vùng ứng suất cao (HAZ, vùng tổ chức cứng) và tích tụ. Vết nứt có thể không hình thành cho đến hàng giờ — hoặc thậm chí hàng ngày — sau khi hàn. Đây là lý do quy chuẩn Nhật quy định thời điểm kiểm tra sau hàn: thường 24–48 giờ sau khi hoàn thành với mối hàn quan trọng. 🇯🇵 MẸO: Trên công trường Nhật, kế hoạch chất lượng (品質計画書) cho mối hàn thép cường độ cao có thể ghi 'hàn xong → chờ 48 giờ → kiểm MT/PT'. Nghĩa là không mài bề mặt hay bước tiếp theo cho đến khi cửa sổ kiểm tra hoàn tất. Nếu bạn hàn xong chiều thứ Năm, kiểm tra có thể đến sáng thứ Bảy mới làm. Lập kế hoạch quanh điều này là kỹ năng thực sự trong quản lý sản xuất Nhật.",
    },
    id: {
      q: "Retak dingin ditemukan 24 jam SETELAH mengelas — las tampak baik segera setelah selesai. Bagaimana ini mungkin?",
      opts: [
        "Ini mustahil — retak terbentuk seketika atau tidak sama sekali",
        "Retak ada sejak awal tapi inspektor melewatkannya",
        "Retak dingin bersifat 'tertunda' — hidrogen difusi perlahan bermigrasi dan terkonsentrasi di titik tegangan, dan retak terbentuk bertahap dalam berjam-jam hingga berhari-hari setelah mengelas. Inilah mengapa waktu inspeksi pasca-las penting",
        "Logam terbentur dan retak secara tak sengaja setelah mengelas",
      ],
      exp: "Retak dingin juga disebut 'retak tertunda' karena hidrogen difusi dalam logam las bermigrasi perlahan ke zona tegangan tinggi (HAZ, area mikrostruktur keras) dan menumpuk. Retak mungkin baru terbentuk berjam-jam — bahkan berhari-hari — setelah mengelas. Inilah mengapa kode Jepang menetapkan waktu inspeksi pasca-las: sering 24–48 jam setelah selesai untuk las kritis. 🇯🇵 TIPS: Di lokasi konstruksi Jepang, rencana mutu (品質計画書) untuk las baja kekuatan tinggi bisa menyatakan 'las selesai → tunggu 48 jam → inspeksi MT/PT'. Artinya tak ada penggerindaan permukaan atau pekerjaan langkah berikutnya sampai jendela inspeksi selesai. Jika Anda menyelesaikan las Kamis sore, inspeksi mungkin baru Sabtu pagi. Merencanakan seputar ini adalah keterampilan nyata dalam manajemen produksi Jepang.",
    },
  },
  419: {
    vi: {
      q: "Trình tự NDT đúng cho một mối hàn kết cấu quan trọng ở Nhật, từ đầu đến cuối, là gì?",
      opts: [
        "Làm tất cả kiểm tra cùng lúc để tiết kiệm thời gian",
        "RT → VT → PT/MT → UT",
        "UT → MT → RT → VT",
        "VT trước → rồi PT hoặc MT (bề mặt) → rồi RT hoặc UT (bên trong) — luôn phương pháp bề mặt trước, rồi thể tích",
      ],
      exp: "Trình tự NDT tiêu chuẩn: 1) VT (目視) — ngoại quan trước, luôn miễn phí và nhanh. 2) PT hoặc MT (浸透 / 磁粉) — khuyết tật bề mặt. 3) RT (放射線) hoặc UT (超音波) — khuyết tật bên trong. Logic: nếu VT hoặc PT/MT tìm ra khuyết tật nghiêm trọng, không cần tiến tới RT/UT đắt. Ở Nhật, thứ tự kiểm tra do kế hoạch chất lượng (品質計画書) kiểm soát. 🇯🇵 MẸO: Khi kỹ sư QC Nhật đưa bạn 品質計画書 (kế hoạch chất lượng), đọc kỹ. Nó ghi chính xác phương pháp NDT nào, ở giai đoạn nào, do ai, cho mỗi mối nối. Ở dự án lớn (cầu, tòa nhà, tàu), kế hoạch chất lượng là tài liệu pháp lý. Sai lệch mà không có phê duyệt bằng văn bản là không được phép — và hồ sơ (記録 / kiroku) phải đầy đủ.",
    },
    id: {
      q: "Apa urutan NDT yang benar untuk las struktur kritis di Jepang, dari pertama ke terakhir?",
      opts: [
        "Lakukan semua uji bersamaan untuk menghemat waktu",
        "RT → VT → PT/MT → UT",
        "UT → MT → RT → VT",
        "VT dulu → lalu PT atau MT (permukaan) → lalu RT atau UT (internal) — selalu metode permukaan dulu, baru volumetrik",
      ],
      exp: "Urutan NDT standar: 1) VT (目視) — visual dulu, selalu gratis dan cepat. 2) PT atau MT (浸透 / 磁粉) — cacat permukaan. 3) RT (放射線) atau UT (超音波) — cacat internal. Logika: jika VT atau PT/MT menemukan cacat serius, tak perlu lanjut ke RT/UT yang mahal. Di Jepang, urutan inspeksi dikendalikan rencana mutu (品質計画書). 🇯🇵 TIPS: Saat insinyur QC Jepang memberi Anda 品質計画書 (rencana mutu), baca dengan teliti. Ia menetapkan persis metode NDT mana, pada tahap apa, oleh siapa, untuk tiap sambungan las. Pada proyek besar (jembatan, gedung, kapal), rencana mutu adalah dokumen legal. Menyimpang darinya tanpa persetujuan tertulis tak diperbolehkan — dan jejak dokumen (記録 / kiroku) harus lengkap.",
    },
  },
  420: {
    vi: {
      q: "Một mối hàn có 'Pit' (ピット) trên bề mặt, và một mối khác có 'Buroohoru' (ブローホール) xác nhận bằng RT không mở ra bề mặt. Cả hai do khí kẹt. Phương pháp kiểm tra nào bắt được CẢ HAI, và cái nào chỉ bắt MỘT?",
      opts: [
        "VT bắt được pit (mở bề mặt) nhưng bỏ sót rỗ khí (hoàn toàn bên trong); RT phát hiện được rỗ khí, và có thể cả pit tùy hình học — nên RT là phép kiểm đầy đủ hơn",
        "RT không bắt được cái nào — RT chỉ phát hiện nứt, không bao giờ khuyết tật khí",
        "VT và RT đều mù với cả hai; chỉ UT phát hiện rỗ khí",
        "Chỉ VT bắt được cả hai — rỗ khí bề mặt lẫn bên trong cuối cùng đều làm biến dạng bề mặt",
      ],
      exp: "Pitto (ピット) = lỗ khí mở bề mặt, thấy khi VT như hố nhỏ trên mặt mối hàn. Buroohoru (ブローホール) = lỗ khí bên trong, hoàn toàn kín trong mối hàn và vô hình với mắt — VT sẽ bỏ sót hoàn toàn. RT có thể hiện rỗ khí bên trong thành đốm tối tròn trên phim, và tùy hình học có thể cả bằng chứng pit bề mặt. Cả hai chung nguyên nhân gốc (ẩm, nhiễm bẩn, che khí hỏng) nhưng khác ở CHỖ khí bị kẹt khi đông. 🇯🇵 MẸO: Pit (ピット) trên bề mặt mối hàn cuối là trượt VT tự động trong thi JIS Nhật. Sau khi hoàn thành lượt cuối, thợ Nhật quét mắt kỹ bề mặt đường hàn trước khi gọi người kiểm tra — phòng ngừa nghĩa là đảm bảo không sơn, dầu, gỉ hay ẩm trên kim loại nền trước lượt cuối.",
    },
    id: {
      q: "Sebuah las menunjukkan 'Pit' (ピット) di permukaannya, dan las lain menunjukkan 'Buroohoru' (ブローホール) yang dikonfirmasi RT tanpa bukaan permukaan. Kedua cacat disebabkan gas terperangkap. Metode inspeksi mana yang menangkap KEDUANYA, dan mana yang hanya menangkap SATU?",
      opts: [
        "VT menangkap pit (terbuka di permukaan) tapi melewatkan blowhole (sepenuhnya internal); RT bisa mendeteksi blowhole, dan mungkin juga menunjukkan pit tergantung geometri — jadi RT adalah pemeriksaan yang lebih lengkap",
        "RT tak menangkap keduanya — RT hanya bisa mendeteksi retak, tak pernah cacat terkait gas",
        "VT dan RT sama-sama buta terhadap keduanya; hanya UT yang bisa mendeteksi pori gas",
        "VT saja menangkap keduanya — pori gas permukaan dan internal keduanya akhirnya mengubah permukaan",
      ],
      exp: "Pitto (ピット) = pori gas terbuka di permukaan, terlihat saat VT sebagai kawah kecil di muka las. Buroohoru (ブローホール) = pori gas internal, sepenuhnya tertutup di dalam las dan tak terlihat mata — VT akan melewatkannya sepenuhnya. RT bisa menampakkan blowhole internal sebagai bintik gelap bulat pada film, dan tergantung geometri mungkin juga menunjukkan bukti pit permukaan. Kedua cacat berbagi penyebab akar yang sama (kelembapan, kontaminasi, kegagalan pelindung) tapi berbeda pada DI MANA gas terperangkap saat pembekuan. 🇯🇵 TIPS: Pit (ピット) pada permukaan las akhir adalah kegagalan VT otomatis dalam uji JIS Jepang. Setelah menyelesaikan pass akhir, tukang las Jepang memindai permukaan jalur dengan cermat sebelum memanggil inspektor — pencegahan berarti memastikan tak ada cat, minyak, karat, atau kelembapan pada logam dasar sebelum pass akhir.",
    },
  },
};
