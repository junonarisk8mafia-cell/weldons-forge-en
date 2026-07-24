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
};
