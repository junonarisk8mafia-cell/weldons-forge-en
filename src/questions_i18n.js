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
        "An toàn Hàn hồ quang (アーク溶接特別教育)",
        "Giấy phép Thợ hàn nồi hơi (ボイラー溶接士免許)",
        "Chứng chỉ Thợ hàn JIS (JIS溶接技能者)",
        "Kỹ năng Hàn khí (ガス溶接技能講習)",
      ],
      exp: "Luật Nhật (労働安全衛生法) yêu cầu Chứng chỉ An toàn Hàn hồ quang trước MỌI công việc hàn. Khóa 3 ngày, khoảng ¥20.000–40.000. Không có chứng chỉ = làm việc bất hợp pháp, không ngoại lệ. 🇯🇵 MẸO: Giữ bản gốc (原本) cẩn thận — nhiều công trường lấy bản photo ngày đầu. Mất chứng chỉ có thể xin cấp lại tại trung tâm đã cấp.",
    },
    id: {
      q: "Anda baru tiba di lokasi pengelasan di Jepang. Menurut HUKUM, sertifikat mana yang wajib sebelum menyentuh mesin las?",
      opts: [
        "Pelatihan Keselamatan Las Busur (アーク溶接特別教育)",
        "Lisensi Tukang Las Boiler (ボイラー溶接士免許)",
        "Sertifikasi Tukang Las JIS (JIS溶接技能者)",
        "Pelatihan Keterampilan Las Gas (ガス溶接技能講習)",
      ],
      exp: "Hukum Jepang (労働安全衛生法) mewajibkan Sertifikat Pelatihan Keselamatan Las Busur sebelum SEMUA pekerjaan las. Kursus 3 hari, sekitar ¥20.000–40.000. Tanpa sertifikat = ilegal bekerja, tanpa pengecualian. 🇯🇵 TIPS: Simpan dokumen asli (原本) baik-baik — banyak lokasi meminta fotokopi di hari pertama. Sertifikat hilang bisa diterbitkan ulang oleh pusat pelatihan penerbit.",
    },
  },
  2: {
    vi: {
      q: "Người giám sát bảo bạn thay đá mài cho máy mài và chạy thử. Khóa đào tạo nào là BẮT BUỘC theo luật Nhật cho việc này?",
      opts: [
        "Kỹ năng Xe nâng (フォークリフト技能講習)",
        "An toàn Đá mài (自由研削といし特別教育)",
        "An toàn Hàn hồ quang (アーク溶接特別教育)",
        "An toàn Điện hạ áp (低圧電気取扱特別教育)",
      ],
      exp: "Theo luật (労働安全衛生規則), việc thay đá mài và chạy thử sau khi thay cần khóa An toàn Đá mài (自由研削といし特別教育) — thường học 1 ngày. Trên thực tế, đa số công trường Nhật yêu cầu chứng chỉ này với bất kỳ ai dùng máy mài. 🇯🇵 MẸO: Ở công trường thường gọi là 'グラインダーの資格'. Nếu giám sát đưa máy mài và hỏi 'shikaku aru?' (資格ある？ / có chứng chỉ không?), họ đang hỏi chứng chỉ này.",
    },
    id: {
      q: "Supervisor meminta Anda mengganti piringan gerinda dan menguji-jalankannya. Pelatihan apa yang WAJIB menurut hukum Jepang untuk pekerjaan ini?",
      opts: [
        "Pelatihan Keterampilan Forklift (フォークリフト技能講習)",
        "Pelatihan Keselamatan Batu Gerinda (自由研削といし特別教育)",
        "Pelatihan Keselamatan Las Busur (アーク溶接特別教育)",
        "Pelatihan Listrik Tegangan Rendah (低圧電気取扱特別教育)",
      ],
      exp: "Menurut hukum (労働安全衛生規則), mengganti batu gerinda dan uji-jalan setelah penggantian memerlukan Pelatihan Keselamatan Batu Gerinda (自由研削といし特別教育) — biasanya kursus 1 hari. Dalam praktik, sebagian besar lokasi kerja di Jepang meminta sertifikat ini dari siapa pun yang memakai gerinda. 🇯🇵 TIPS: Di lokasi sering disebut 'グラインダーの資格'. Jika supervisor memberi gerinda dan bertanya 'shikaku aru?' (資格ある？ / punya sertifikat?), inilah yang dimaksud.",
    },
  },
  3: {
    vi: {
      q: "Bạn cần nối cáp nguồn của máy hàn vào cầu đấu bên trong tủ điện có phần mang điện lộ ra. Khóa đào tạo nào là bắt buộc theo luật?",
      opts: [
        "An toàn Đá mài (自由研削といし特別教育)",
        "An toàn Hàn hồ quang (アーク溶接特別教育)",
        "An toàn Điện hạ áp (低圧電気取扱特別教育)",
        "Kỹ năng Xe nâng (フォークリフト技能講習)",
      ],
      exp: "Khóa An toàn Điện hạ áp (低圧電気取扱特別教育) bắt buộc cho công việc trên mạch điện hạ áp đang có điện (AC từ 600V trở xuống, DC từ 750V trở xuống) — ví dụ đấu dây, nối cáp nơi phần mang điện lộ ra. Chỉ bật công tắc máy hàn thì không cần, nhưng nối cáp vào tủ điện thì cần. 🇯🇵 MẸO: Nhiều công ty hàn cho nhân viên mới học khóa này để tự nối nguồn máy hàn. Đừng bao giờ mở tủ điện đang có điện nếu chưa có chứng chỉ này.",
    },
    id: {
      q: "Anda perlu menyambungkan kabel daya mesin las ke terminal di dalam panel distribusi yang bagian bertegangannya terbuka. Pelatihan apa yang wajib menurut hukum?",
      opts: [
        "Pelatihan Keselamatan Batu Gerinda (自由研削といし特別教育)",
        "Pelatihan Keselamatan Las Busur (アーク溶接特別教育)",
        "Pelatihan Listrik Tegangan Rendah (低圧電気取扱特別教育)",
        "Pelatihan Keterampilan Forklift (フォークリフト技能講習)",
      ],
      exp: "Pelatihan Listrik Tegangan Rendah (低圧電気取扱特別教育) wajib untuk pekerjaan pada sirkuit tegangan rendah yang bertegangan (AC 600V ke bawah, DC 750V ke bawah) — misalnya memasang kabel di tempat bagian bertegangan terbuka. Sekadar menyalakan sakelar mesin las tidak memerlukannya, tetapi menyambung kabel ke panel distribusi memerlukannya. 🇯🇵 TIPS: Banyak perusahaan las mengirim pegawai baru ke kursus ini agar bisa menangani sambungan daya mesin las sendiri. Jangan pernah membuka panel bertegangan tanpa sertifikat ini.",
    },
  },
  4: {
    vi: {
      q: "Một tấm thép 3 tấn cần được nâng bằng cẩu. Bạn móc cáp vào móc cẩu. Bạn cần chứng chỉ nào cho công việc này?",
      opts: [
        "Kỹ năng Xe nâng (フォークリフト技能講習)",
        "Chỉ cần Đặc biệt Cẩu (クレーン特別教育)",
        "Đặc biệt Móc cẩu (玉掛け特別教育)",
        "Kỹ năng Móc cẩu (玉掛け技能講習)",
      ],
      exp: "Tamakake (玉掛け) là việc móc tải vào móc cẩu để nâng. Tamakake Gino-koshu (玉掛け技能講習) mất 3 ngày (~¥20.000–40.000) và hợp pháp cho tải từ 1 tấn trở lên. Không có nó, bạn không được móc thép để nâng. 🇯🇵 MẸO: Dù chỉ là thợ hàn, hầu hết công trường vẫn mong bạn làm tamakake cơ bản để di chuyển thép của mình. Có sớm chứng chỉ này giúp bạn hữu ích và dễ được thuê hơn.",
    },
    id: {
      q: "Pelat baja 3 ton perlu diangkat dengan crane. Anda memasang tali kawat ke kait crane. Sertifikasi apa yang diperlukan untuk pekerjaan ini?",
      opts: [
        "Pelatihan Keterampilan Forklift (フォークリフト技能講習)",
        "Hanya Pelatihan Khusus Crane (クレーン特別教育)",
        "Pelatihan Khusus Rigging (玉掛け特別教育)",
        "Pelatihan Keterampilan Rigging (玉掛け技能講習)",
      ],
      exp: "Tamakake (玉掛け) adalah mengaitkan beban ke kait crane untuk diangkat. Tamakake Gino-koshu (玉掛け技能講習) butuh 3 hari (~¥20.000–40.000) dan legal untuk beban 1 ton ke atas. Tanpa itu, Anda tidak boleh mengaitkan baja untuk diangkat. 🇯🇵 TIPS: Meski hanya tukang las, kebanyakan lokasi mengharapkan Anda melakukan tamakake dasar untuk memindahkan baja sendiri. Memiliki sertifikat ini lebih awal membuat Anda lebih berguna dan mudah dipekerjakan.",
    },
  },
  5: {
    vi: {
      q: "Sự khác biệt giữa 'tokubetsu-kyoiku' (特別教育) và 'gino-koshu' (技能講習) ở Nhật là gì?",
      opts: [
        "特別教育 = đào tạo không thi; 技能講習 = đào tạo có thi, cho phạm vi việc rộng hơn",
        "技能講習 là tên cũ của 特別教育, được đổi theo luật năm 2010",
        "Đó là cùng một khóa — tên gọi tùy trung tâm đào tạo",
        "特別教育 chỉ dành cho quản lý; 技能講習 dành cho công nhân",
      ],
      exp: "Khác biệt chính: Tokubetsu-kyoiku (特別教育) là buổi học an toàn — tham dự là đạt. Gino-koshu (技能講習) có đào tạo kỹ năng kèm bài kiểm tra đạt/trượt, và mở ra phạm vi công việc rộng hơn. Ví dụ: tamakake tokubetsu-kyoiku = dưới 1t; tamakake gino-koshu = từ 1t trở lên. 🇯🇵 MẸO: Nói 'tokubetsu-kyoiku wa arimasu' so với 'gino-koshu wa arimasu' báo hiệu năng lực khác hẳn nhau — hiểu sự khác biệt này gây ấn tượng với thợ hàn kỳ cựu.",
    },
    id: {
      q: "Apa perbedaan 'tokubetsu-kyoiku' (特別教育) dan 'gino-koshu' (技能講習) di Jepang?",
      opts: [
        "特別教育 = pelatihan tanpa ujian; 技能講習 = pelatihan dengan ujian, untuk pekerjaan lebih luas",
        "技能講習 adalah nama lama 特別教育, diganti oleh hukum tahun 2010",
        "Itu kursus yang sama — namanya tergantung pusat pelatihan",
        "特別教育 hanya untuk manajer; 技能講習 untuk pekerja lapangan",
      ],
      exp: "Perbedaan utama: Tokubetsu-kyoiku (特別教育) adalah ceramah keselamatan — hadir berarti lulus. Gino-koshu (技能講習) mencakup pelatihan keterampilan dengan ujian lulus/gagal, dan membuka cakupan kerja lebih luas. Contoh: tamakake tokubetsu-kyoiku = di bawah 1t; tamakake gino-koshu = 1t ke atas. 🇯🇵 TIPS: Mengatakan 'tokubetsu-kyoiku wa arimasu' vs 'gino-koshu wa arimasu' menandakan tingkat kemampuan yang sangat berbeda — memahami ini mengesankan tukang las berpengalaman.",
    },
  },
  6: {
    vi: {
      q: "Từ tháng 2/2019, người dùng dây an toàn toàn thân ở độ cao từ 2 m trở lên (nơi không thể lắp sàn thao tác) phải hoàn thành khóa đào tạo nào?",
      opts: [
        "Đặc biệt Xe nâng người (高所作業車特別教育)",
        "An toàn Dây toàn thân (フルハーネス特別教育)",
        "Đặc biệt Cẩu (クレーン特別教育)",
        "Đặc biệt Lắp giàn giáo (足場の組立て等特別教育)",
      ],
      exp: "Quy định thay đổi từ tháng 2/2019: làm việc ở độ cao từ 2 m trở lên dùng dây an toàn toàn thân, nơi khó lắp sàn thao tác, phải học An toàn Dây toàn thân (フルハーネス特別教育, khoảng 1 ngày). Thời gian chuyển tiếp kết thúc ngày 2/1/2022 — không còn dùng loại dây tiêu chuẩn cũ, và dây toàn thân là thiết bị chống rơi tiêu chuẩn (dây đai lưng chỉ được dùng ở độ cao thấp). 🇯🇵 MẸO: Công trường Nhật làm 'KY' (危険予知 / dự đoán nguy hiểm) mỗi sáng. Công việc trên cao luôn được nêu trong KY.",
    },
    id: {
      q: "Sejak Februari 2019, pekerja yang memakai harness seluruh tubuh pada ketinggian 2 m atau lebih (di mana lantai kerja tidak bisa dipasang) wajib mengikuti pelatihan apa?",
      opts: [
        "Pelatihan Platform Kerja Udara (高所作業車特別教育)",
        "Pelatihan Keselamatan Full Harness (フルハーネス特別教育)",
        "Pelatihan Khusus Crane (クレーン特別教育)",
        "Pelatihan Perakitan Perancah (足場の組立て等特別教育)",
      ],
      exp: "Aturan berubah pada Februari 2019: bekerja di ketinggian 2 m atau lebih dengan harness seluruh tubuh, di mana lantai kerja sulit dipasang, memerlukan Pelatihan Full Harness (フルハーネス特別教育, sekitar 1 hari). Masa transisi berakhir 2 Januari 2022 — sabuk standar lama tidak boleh dipakai lagi, dan full harness kini menjadi alat penahan jatuh standar (sabuk pinggang hanya boleh di ketinggian rendah). 🇯🇵 TIPS: Lokasi kerja di Jepang melakukan 'KY' (危険予知 / prediksi bahaya) setiap pagi. Pekerjaan di ketinggian selalu dibahas dalam KY.",
    },
  },
  7: {
    vi: {
      q: "Bạn muốn CẢ chứng chỉ 'Tamakake' (玉掛け) VÀ 'Kurēn' (クレーン). Cách khôn ngoan nhất là gì?",
      opts: [
        "Lấy chứng chỉ cẩu trước, một năm sau mới học móc cẩu",
        "Học kỹ năng móc cẩu, sau đó nâng cấp để bao gồm vận hành cẩu",
        "Học khóa kết hợp móc cẩu + cẩu (セット講習) tại một trung tâm",
        "Học riêng ở các trung tâm khác nhau để được đào tạo kỹ hơn",
      ],
      exp: "Nhiều trung tâm có khóa combo (玉掛け + クレーン運転特別教育セット). Bạn được cả hai chứng chỉ trong 4–5 ngày với giá tổng ưu đãi (~¥70.000–80.000). Khôn hơn nhiều so với học riêng. 🇯🇵 MẸO: Tìm '玉掛けクレーンセット講習' tại trung tâm địa phương (労働基準協会). Gọi trước — một số nơi giảm giá cho nhóm 3+ người cùng công ty.",
    },
    id: {
      q: "Anda ingin sertifikat 'Tamakake' (玉掛け) DAN 'Kurēn' (クレーン). Pendekatan tercerdas?",
      opts: [
        "Ambil sertifikat crane dulu, sertifikat rigging setahun kemudian",
        "Ambil keterampilan rigging, lalu tingkatkan agar mencakup crane",
        "Ambil kursus gabungan rigging + crane (セット講習) di satu pusat",
        "Ambil terpisah di pusat berbeda agar pelatihannya lebih baik",
      ],
      exp: "Banyak pusat menawarkan kursus combo (玉掛け + クレーン運転特別教育セット). Anda dapat kedua sertifikat dalam 4–5 hari dengan harga total diskon (~¥70.000–80.000). Jauh lebih cerdas daripada terpisah. 🇯🇵 TIPS: Cari '玉掛けクレーンセット講習' di pusat pelatihan lokal (労働基準協会). Telepon dulu — beberapa memberi diskon untuk grup 3+ dari perusahaan sama.",
    },
  },
  8: {
    vi: {
      q: "Một xe nâng ở nhà máy có tải trọng tối đa 2 tấn. Bạn cần chứng chỉ nào để vận hành?",
      opts: [
        "Bằng lái ô tô thông thường bất kỳ là đủ",
        "Đặc biệt Xe nâng (フォークリフト特別教育)",
        "Đặc biệt Cẩu (クレーン特別教育)",
        "Kỹ năng Xe nâng (フォークリフト技能講習)",
      ],
      exp: "Với xe nâng từ 1 tấn trở lên, bạn cần khóa Kỹ năng Xe nâng (技能講習). Với người có bằng lái ô tô thông thường, khóa học khoảng 31 giờ — thường 4 ngày. Khóa tokubetsu-kyoiku (特別教育) chỉ áp dụng cho xe nâng dưới 1 tấn. Xe nâng 2 tấn = cần gino-koshu. 🇯🇵 MẸO: Chứng chỉ xe nâng (công trường thường gọi là フォークリフト免許) là một trong những kỹ năng thêm hữu ích nhất ở xưởng Nhật — giúp bạn vận chuyển vật liệu giữa các mối hàn.",
    },
    id: {
      q: "Forklift di pabrik berkapasitas maksimum 2 ton. Sertifikat apa yang Anda butuhkan untuk mengoperasikannya?",
      opts: [
        "SIM mobil biasa apa pun sudah cukup",
        "Pelatihan Khusus Forklift (フォークリフト特別教育)",
        "Pelatihan Khusus Crane (クレーン特別教育)",
        "Pelatihan Keterampilan Forklift (フォークリフト技能講習)",
      ],
      exp: "Untuk forklift 1 ton atau lebih, Anda perlu Pelatihan Keterampilan Forklift (技能講習). Bagi pemegang SIM mobil biasa, durasinya sekitar 31 jam — biasanya 4 hari. Tokubetsu-kyoiku (特別教育) hanya untuk forklift di bawah 1 ton. Forklift 2 ton = wajib gino-koshu. 🇯🇵 TIPS: Sertifikat forklift (di lokasi sering disebut フォークリフト免許) adalah salah satu keterampilan tambahan paling berguna di pabrik Jepang — Anda bisa membantu memindahkan material di antara pekerjaan las.",
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
        "Thừa oxy — không khí giàu oxy làm quần áo dễ bắt lửa",
        "Thiếu oxy — khí bảo vệ đẩy oxy ra khỏi không gian kín",
        "Ngộ độc CO chỉ xảy ra khi hàn ngoài trời",
        "Khuyết tật hàn khi kim loại hàn thiếu oxy và bị nứt",
      ],
      exp: "Sanso-ketsubo (酸素欠乏) = Thiếu Oxy. Trong không gian kín (bồn, hầm, phòng kín), khí bảo vệ (CO₂, Argon) có thể đẩy oxy ra. Dưới 18% O₂ = nguy hiểm. Dưới 16% = ngất. Hãy đo oxy TRƯỚC khi vào bất kỳ khu hàn kín nào. 🇯🇵 MẸO: CO₂ nặng gấp 1,5 lần và Argon 1,4 lần không khí — chúng chìm và tụ vô hình dưới đáy. Người ngất trong bồn vì thiếu oxy KHÔNG được cứu bởi người vào mà không có thiết bị thở — Nhật đã có nhiều ca tử vong kiểu này. Gọi 119 và chờ đội cứu hộ chuyên môn.",
    },
    id: {
      q: "Apa itu 'Sanso-ketsubo' (酸素欠乏) dan mengapa berbahaya bagi tukang las?",
      opts: [
        "Kelebihan oksigen — udara kaya oksigen membuat pakaian mudah terbakar",
        "Kekurangan oksigen — gas pelindung mendorong oksigen keluar dari ruang tertutup",
        "Keracunan karbon monoksida yang hanya terjadi saat mengelas di luar",
        "Cacat las ketika logam las kekurangan oksigen dan retak",
      ],
      exp: "Sanso-ketsubo (酸素欠乏) = Kekurangan Oksigen. Di ruang tertutup (tangki, palka, ruang tertutup), gas pelindung (CO₂, Argon) bisa mendorong keluar oksigen. Di bawah 18% O₂ = bahaya. Di bawah 16% = pingsan. Ukur kadar oksigen SEBELUM masuk area las tertutup mana pun. 🇯🇵 TIPS: CO₂ 1,5× dan Argon 1,4× lebih berat dari udara — keduanya turun dan menumpuk tak terlihat di dasar. Pekerja yang pingsan dalam tangki karena kekurangan oksigen TIDAK boleh ditolong oleh orang yang masuk tanpa alat bantu napas — Jepang punya banyak kematian seperti ini. Hubungi 119 dan tunggu tim penyelamat khusus.",
    },
  },
  11: {
    vi: {
      q: "'Yosetsu-hyumu' (溶接ヒューム) là gì và bạn cần PPE nào?",
      opts: [
        "Tiếng ồn hàn — bảo vệ tai bằng nút tai",
        "Tia lửa hàn — bảo vệ tay bằng găng da",
        "Khói hàn — đeo khẩu trang chống bụi (防じんマスク)",
        "Khí bảo vệ — chỉ CO₂ mới cần mặt nạ phòng độc",
      ],
      exp: "Khói hàn (溶接ヒューム) chứa hạt kim loại mịn gồm mangan, crom và các hợp chất khác. Phơi nhiễm lâu dài gây bệnh phổi (じん肺). Luật Nhật yêu cầu khẩu trang chống bụi (防じんマスク) đạt chuẩn cho khói hàn. Luôn thông gió khu làm việc. 🇯🇵 MẸO: Từ 2021, luật Nhật (溶接ヒューム規制) xếp khói hàn là chất hóa học đặc định. Chủ lao động phải cung cấp khám sức khỏe (健康診断) và lưu hồ sơ phơi nhiễm. Nếu công ty không làm, họ vi phạm luật — bạn có quyền yêu cầu.",
    },
    id: {
      q: "Apa itu 'Yosetsu-hyumu' (溶接ヒューム) dan APD apa yang Anda perlukan?",
      opts: [
        "Kebisingan las — lindungi telinga dengan penyumbat telinga",
        "Percikan las — lindungi tangan dengan sarung tangan kulit",
        "Asap las — pakai respirator debu (防じんマスク)",
        "Gas pelindung — hanya CO₂ yang perlu masker gas",
      ],
      exp: "Asap las (溶接ヒューム) mengandung partikel logam halus termasuk mangan, krom, dan senyawa lain. Paparan jangka panjang menyebabkan penyakit paru (じん肺). Hukum Jepang mewajibkan respirator debu (防じんマスク) berperingkat untuk asap las. Selalu beri ventilasi area kerja. 🇯🇵 TIPS: Sejak 2021, hukum Jepang (溶接ヒューム規制) menggolongkan asap las sebagai bahan kimia tertentu. Pemberi kerja wajib menyediakan pemeriksaan kesehatan (健康診断) dan menyimpan catatan paparan. Jika perusahaan tidak, mereka melanggar hukum — Anda berhak memintanya.",
    },
  },
  12: {
    vi: {
      q: "Theo hướng dẫn JIS (JIS T 8141), hàn que (被覆アーク溶接) ở khoảng 150A nên dùng kính số mấy (遮光度番号)?",
      opts: [
        "Số 3–4 — như kính râm đậm",
        "Số 14–16 — càng tối càng tốt",
        "Số 5–6 — dải dùng cho cắt khí",
        "Số 9–11 — hướng dẫn JIS cho 75–200A",
      ],
      exp: "Hướng dẫn sử dụng trong JIS T 8141 cho hàn que 75–200A là kính số 9–11 (theo giải thích của Hiệp hội Kỹ thuật Hàn Nhật Bản). Dòng điện càng cao, số càng lớn; kính quá tối sẽ khó nhìn vũng hàn. Không đúng số kính có nguy cơ bỏng mắt do hồ quang (電気性眼炎). 🇯🇵 MẸO: Triệu chứng bỏng mắt xuất hiện vài giờ SAU khi tiếp xúc — thường vào ban đêm. Nếu mắt cộm hoặc đau sau khi hàn, hãy đi khám mắt.",
    },
    id: {
      q: "Berapa nomor kegelapan lensa (遮光度番号) menurut panduan JIS (JIS T 8141) untuk las elektroda terbungkus (被覆アーク溶接) sekitar 150A?",
      opts: [
        "Nomor 3–4 — seperti kacamata hitam pekat",
        "Nomor 14–16 — makin gelap makin baik",
        "Nomor 5–6 — rentang untuk potong gas",
        "Nomor 9–11 — panduan JIS untuk 75–200A",
      ],
      exp: "Panduan penggunaan dalam JIS T 8141 memberi nomor 9–11 untuk las elektroda terbungkus 75–200A (seperti dijelaskan Japan Welding Engineering Society). Arus lebih tinggi = nomor lebih besar; lensa terlalu gelap membuat kolam las sulit terlihat. Tanpa lensa yang tepat ada risiko mata terbakar busur (電気性眼炎). 🇯🇵 TIPS: Gejala mata terbakar busur muncul beberapa jam SETELAH paparan — sering malam hari. Jika mata terasa berpasir atau sakit setelah mengelas, periksakan ke dokter mata.",
    },
  },
  13: {
    vi: {
      q: "Một thợ hàn bị điện giật. Hành động ĐẦU TIÊN là gì?",
      opts: [
        "Ngắt điện trước, rồi đưa nạn nhân ra và gọi trợ giúp",
        "Đeo găng cao su khô và kéo nạn nhân ra khi vẫn còn điện",
        "Dội nước lên nạn nhân để làm mát vết bỏng trước tiên",
        "Kéo nạn nhân ra bằng tay không càng nhanh càng tốt",
      ],
      exp: "Sơ cứu điện giật: 1) CẮT NGUỒN — tắt máy hoặc cầu dao. 2) KHÔNG chạm nạn nhân khi còn điện — bạn cũng sẽ bị giật. 3) Đưa nạn nhân đến nơi an toàn. 4) Gọi 119 (cấp cứu Nhật). 5) Hô hấp nhân tạo nếu được đào tạo. Tay ướt hoặc nền ướt làm tăng mạnh nguy cơ điện giật. 🇯🇵 MẸO: Số cấp cứu Nhật là 119 (cứu hỏa/cứu thương), không phải 911. Khi gọi: 'Jiko desu, hito ga taoreteimasu' (事故です、人が倒れています) = 'Có tai nạn, có người ngã'. Cho địa chỉ và số điện thoại của bạn.",
    },
    id: {
      q: "Seorang tukang las tersengat listrik. Tindakan PERTAMA apa yang harus dilakukan?",
      opts: [
        "Matikan listrik dulu, lalu pindahkan korban dan minta bantuan",
        "Pakai sarung tangan karet kering dan tarik korban saat listrik masih menyala",
        "Siram korban dengan air untuk mendinginkan luka bakar lebih dulu",
        "Tarik korban dengan tangan kosong secepat mungkin",
      ],
      exp: "Pertolongan pertama sengatan listrik: 1) PUTUS DAYA — matikan mesin atau breaker. 2) JANGAN sentuh korban saat daya menyala — Anda akan ikut tersengat. 3) Pindahkan korban ke tempat aman. 4) Hubungi 119 (darurat Jepang). 5) Lakukan CPR bila terlatih. Tangan atau lantai basah sangat menaikkan risiko sengatan. 🇯🇵 TIPS: Nomor darurat Jepang 119 (pemadam/ambulans), bukan 911. Saat menelepon: 'Jiko desu, hito ga taoreteimasu' (事故です、人が倒れています) = 'Ada kecelakaan, seseorang pingsan'. Sebutkan alamat dan nomor telepon Anda.",
    },
  },
  14: {
    vi: {
      q: "Trước khi hàn trong bồn hoặc không gian kín, bạn phải kiểm tra ĐẦU TIÊN điều gì?",
      opts: [
        "Cỡ cuộn dây và chiều dài dây còn lại",
        "Nồng độ oxy và khí độc, rồi bố trí thông gió",
        "Số seri máy hàn và tem kiểm định",
        "Hãng và độ tinh khiết của bình khí bảo vệ",
      ],
      exp: "Trước khi vào bất kỳ không gian kín nào ở Nhật, bạn PHẢI đo nồng độ oxy (酸素濃度) — phải trên 18%. Cũng kiểm tra CO, hydro và các khí nguy hiểm khác. Bố trí thông gió cưỡng bức. Ở Nhật, điều này thuộc Chứng chỉ Công việc Nguy hiểm Thiếu Oxy (酸素欠乏危険作業特別教育). 🇯🇵 MẸO: Chứng chỉ 酸欠 (sanso-ketsubo) là khóa 1 ngày (~¥8.000–12.000) thường bị bỏ qua. Nếu làm ở đóng tàu, chế tạo bồn, hay kết cấu thép kín, chứng chỉ này là thiết yếu và được mong đợi.",
    },
    id: {
      q: "Sebelum mengelas di dalam tangki atau ruang tertutup, apa yang HARUS diperiksa PERTAMA?",
      opts: [
        "Ukuran gulungan kawat dan sisa panjang kawat",
        "Kadar oksigen dan gas berbahaya, lalu siapkan ventilasi",
        "Nomor seri mesin las dan stiker inspeksi",
        "Merek dan kemurnian tabung gas pelindung",
      ],
      exp: "Sebelum masuk ruang tertutup mana pun di Jepang, Anda WAJIB mengukur konsentrasi oksigen (酸素濃度) — harus di atas 18%. Periksa juga CO, hidrogen, dan gas berbahaya lain. Siapkan ventilasi paksa. Di Jepang, ini tercakup dalam Sertifikat Kerja Bahaya Kekurangan Oksigen (酸素欠乏危険作業特別教育). 🇯🇵 TIPS: Sertifikat 酸欠 (sanso-ketsubo) adalah kursus 1 hari (~¥8.000–12.000) yang sering diabaikan. Jika Anda bekerja di galangan kapal, fabrikasi tangki, atau struktur baja tertutup, sertifikat ini penting dan diharapkan.",
    },
  },
  15: {
    vi: {
      q: "Giày an toàn (安全靴) của bạn có dấu JIS bên trong, nhưng ghi 'JIS T 8147' thay vì 'JIS T 8101'. Bạn nên làm gì?",
      opts: [
        "Xin giám sát đổi đôi có dấu JIS T 8113",
        "Cứ mang — JIS T 8147 chỉ là số mới của giày an toàn",
        "Từ chối — JIS T 8147 là cho kính bảo hộ, không phải giày",
        "Chỉ mang khi mài, không bao giờ mang khi hàn",
      ],
      exp: "JIS T 8101 là chuẩn cho giày an toàn (安全靴). JIS T 8147 thực ra là chuẩn cho kính bảo hộ (保護めがね), còn JIS T 8113 là găng tay hàn — không cái nào là chuẩn giày. Giày đóng dấu sai số JIS thì không được chứng nhận đúng, dù trông giống hệt. Nhiều giày giả/nhãn sai lọt qua nếu bạn không kiểm tra số. 🇯🇵 MẸO: Khi mua, tìm đúng 'JIS T 8101' trên nhãn. Giày rẻ không có dấu JIS đúng sẽ bị từ chối ở cổng vào — hãy đầu tư đôi tốt từ Workman (ワークマン) hoặc Midori Anzen (ミドリ安全).",
    },
    id: {
      q: "Sepatu safety (安全靴) Anda ada tanda JIS di dalam, tapi tertulis 'JIS T 8147' bukan 'JIS T 8101'. Apa yang harus dilakukan?",
      opts: [
        "Minta supervisor sepasang bertanda JIS T 8113 sebagai gantinya",
        "Pakai saja — JIS T 8147 hanya nomor baru untuk sepatu safety",
        "Tolak — JIS T 8147 untuk kacamata pelindung, bukan sepatu",
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
        "Mở một cửa sổ luôn đủ thông gió cho mọi công việc hàn trong nhà",
        "Từ 2021, hàn hồ quang trong nhà cần thông gió chung và đo khói hàn",
        "Thông gió cục bộ (局所排気装置) hút khói ngay tại nguồn",
        "Trong không gian kín, thông gió phải giữ oxy từ 18% trở lên",
      ],
      exp: "Mở cửa sổ KHÔNG tự động đủ — còn tùy diện tích phòng, luồng gió và lượng khói. Từ tháng 4/2021, khói hàn được quản lý như hóa chất đặc định: với hàn hồ quang liên tục trong nhà, chủ phải bố trí thông gió chung (全体換気), đo nồng độ khói hàn và cấp mặt nạ chọn theo kết quả đo (có kiểm tra độ kín). Trong không gian kín phải giữ oxy từ 18% trở lên. 🇯🇵 MẸO: Nếu công ty đo nồng độ khói, kết quả sẽ quyết định bạn phải đeo loại mặt nạ nào — hãy làm đúng.",
    },
    id: {
      q: "Pernyataan mana tentang ventilasi las di Jepang yang TIDAK benar?",
      opts: [
        "Membuka satu jendela selalu cukup untuk ventilasi semua las di dalam ruangan",
        "Sejak 2021, las busur di dalam ruangan perlu ventilasi umum dan pengukuran asap",
        "Ventilasi lokal (局所排気装置) menangkap asap langsung di sumbernya",
        "Di ruang terbatas, ventilasi harus menjaga oksigen 18% atau lebih",
      ],
      exp: "Membuka jendela TIDAK otomatis cukup — tergantung luas ruangan, aliran udara, dan jumlah asap. Sejak April 2021, asap las diatur sebagai zat kimia khusus: untuk las busur kontinu di dalam ruangan, pemberi kerja wajib menyediakan ventilasi umum (全体換気), mengukur konsentrasi asap, dan memberi masker yang dipilih dari hasil pengukuran (dengan uji kerapatan). Di ruang terbatas, oksigen harus dijaga 18% atau lebih. 🇯🇵 TIPS: Jika perusahaan mengukur konsentrasi asap, hasilnya menentukan masker yang harus Anda pakai — ikuti dengan tepat.",
    },
  },
  18: {
    vi: {
      q: "Bạn sắp hàn trên đầu (kachiage) và với lấy tạp dề da 'Maekake' (前掛け), nhưng nó biến mất. Đồng nghiệp đưa 'Ude-kabaa' (腕カバー / ống tay) và nói nó che cùng mối nguy. Anh ấy đúng không?",
      opts: [
        "Đúng — ống tay và tạp dề bảo vệ cùng vùng cơ thể",
        "Không — ống tay chỉ che tay; tạp dề che thân và chân",
        "Không — ống tay chỉ dùng khi mài, không dùng khi hàn",
        "Đúng, nếu ống tay làm từ cùng loại da với tạp dề",
      ],
      exp: "Maekake (前掛け) = tạp dề da che thân và chân. Ude-kabaa (腕カバー) = ống tay chỉ che cẳng tay. Chúng bảo vệ các vùng cơ thể KHÁC nhau khỏi cùng mối nguy (văng, tia lửa, nhiệt bức xạ) — cái này không thay cái kia. Để bảo vệ toàn thân khi hàn trên đầu (kachiage), cần cả hai. 🇯🇵 MẸO: Tạp dề da tốt ở cửa hàng vật tư hàn (溶接用品店) dùng được 3–5 năm. Khi mua, chọn da dày (牛革 / da bò là tốt nhất) và móc cài bằng thép, không phải nhựa — nhựa chảy vì văng.",
    },
    id: {
      q: "Anda hendak mengelas overhead (kachiage) dan meraih celemek kulit 'Maekake' (前掛け), tapi hilang. Rekan menawarkan 'Ude-kabaa' (腕カバー / pelindung lengan), katanya menutup bahaya yang sama. Benarkah?",
      opts: [
        "Ya — pelindung lengan dan celemek melindungi area tubuh yang sama",
        "Tidak — pelindung lengan hanya menutup lengan; celemek menutup badan dan kaki",
        "Tidak — pelindung lengan hanya untuk menggerinda, bukan mengelas",
        "Ya, jika pelindung lengan dari kulit yang sama dengan celemek",
      ],
      exp: "Maekake (前掛け) = celemek kulit yang menutup badan dan kaki. Ude-kabaa (腕カバー) = pelindung lengan yang hanya menutup lengan bawah. Keduanya melindungi area tubuh BERBEDA dari bahaya sama (percikan, bunga api, panas radiasi) — satu tidak menggantikan yang lain. Untuk perlindungan seluruh tubuh saat las overhead (kachiage), keduanya diperlukan. 🇯🇵 TIPS: Celemek kulit berkualitas di toko perlengkapan las (溶接用品店) tahan 3–5 tahun. Saat membeli, pastikan kulitnya tebal (牛革 / kulit sapi terbaik) dan kait pengencangnya baja, bukan plastik — plastik meleleh kena percikan.",
    },
  },
  19: {
    vi: {
      q: "Với chứng chỉ 'Tamakake' (玉掛け), phạm vi công việc khác nhau thế nào giữa bản 'tokubetsu-kyoiku' (特別教育) và 'gino-koshu' (技能講習)?",
      opts: [
        "Gino-koshu cho tải dưới 1 tấn; tokubetsu-kyoiku cho từ 1 tấn trở lên",
        "Cả hai đều cho mọi trọng lượng — chỉ khác thời gian học",
        "Tokubetsu-kyoiku: chỉ dưới 1 tấn. Gino-koshu: từ 1 tấn trở lên",
        "Tokubetsu-kyoiku chỉ cho nhân viên chính thức, không cho hợp đồng",
      ],
      exp: "Chứng chỉ móc tải Tamakake (玉掛け): Tokubetsu-kyoiku (特別教育) = chỉ tải dưới 1 tấn (1–2 ngày, ~¥12.000–15.000). Gino-koshu (技能講習) = tải từ 1 tấn trở lên, bao mọi tải (3 ngày, ~¥20.000–40.000). Hầu hết công trường cần bản Gino-koshu. 🇯🇵 MẸO: Bài thi thực hành Tamakake Gino-koshu gồm buộc khối thép và ra hiệu tay cho người vận hành cẩu. Học 4 tín hiệu tay cơ bản (nâng, hạ, trái, phải) trước ngày thi — trung tâm mong bạn thực hiện tự tin.",
    },
    id: {
      q: "Untuk sertifikat 'Tamakake' (玉掛け), apa beda cakupan kerja antara versi 'tokubetsu-kyoiku' (特別教育) dan 'gino-koshu' (技能講習)?",
      opts: [
        "Gino-koshu untuk beban di bawah 1 ton; tokubetsu-kyoiku 1 ton ke atas",
        "Keduanya mencakup semua berat — hanya lama kursus yang berbeda",
        "Tokubetsu-kyoiku: hanya di bawah 1 ton. Gino-koshu: 1 ton ke atas",
        "Tokubetsu-kyoiku hanya untuk pegawai tetap, bukan pekerja kontrak",
      ],
      exp: "Sertifikat rigging Tamakake (玉掛け): Tokubetsu-kyoiku (特別教育) = hanya beban di bawah 1 ton (1–2 hari, ~¥12.000–15.000). Gino-koshu (技能講習) = beban 1 ton ke atas, mencakup semua berat (3 hari, ~¥20.000–40.000). Kebanyakan lokasi membutuhkan versi Gino-koshu. 🇯🇵 TIPS: Ujian praktik Tamakake Gino-koshu mencakup mengikat balok baja dan memberi aba-aba tangan ke operator crane. Pelajari 4 aba-aba dasar (naik, turun, kiri, kanan) sebelum hari ujian — pusat pelatihan mengharapkan Anda memperagakannya dengan percaya diri.",
    },
  },
  20: {
    vi: {
      q: "Tổng chi phí và thời gian gần đúng để lấy gói giấy phép hàn cơ bản ở Nhật là bao nhiêu? (Hàn hồ quang + Đá mài + Điện hạ áp)",
      opts: [
        "Tổng khoảng 5 ngày — khoảng ¥40.000–70.000",
        "Tổng khoảng 1 năm — khoảng ¥200.000",
        "Tổng 1 ngày — khoảng ¥5.000",
        "Tổng khoảng 3 tháng — khoảng ¥500.000",
      ],
      exp: "Gói giấy phép hàn cơ bản: Hàn hồ quang (3 ngày, ¥20.000–40.000) + Đá mài (1 ngày, ¥10.000) + Điện hạ áp (1 ngày, ¥12.000–22.000) = khoảng 5 ngày và tổng ¥42.000–72.000. Sau đó bạn được phép hàn, mài và xử lý bảng điện ở Nhật. 🇯🇵 MẸO: Một số chủ lao động trả tiền các khóa này — hãy hỏi 'shikaku shutoku no hiyou wa kaisha ga haraimasu ka?' (資格取得の費用は会社が払いますか？). Trong thị trường lao động khan hiếm, nhiều nơi sẽ đồng ý.",
    },
    id: {
      q: "Berapa perkiraan total biaya dan waktu untuk paket izin las dasar di Jepang? (Las Busur + Batu Gerinda + Listrik Tegangan Rendah)",
      opts: [
        "Total sekitar 5 hari — kira-kira ¥40.000–70.000",
        "Total sekitar 1 tahun — kira-kira ¥200.000",
        "Total 1 hari — kira-kira ¥5.000",
        "Total sekitar 3 bulan — kira-kira ¥500.000",
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
        "Một người bên trong và một 監視人 (người giám sát) theo dõi bên ngoài",
        "Một người bên trong, liên lạc bộ đàm mỗi 30 phút",
        "Một thợ hàn một mình cũng được nếu việc ngắn",
        "Hai thợ hàn bên trong, không cần ai bên ngoài",
      ],
      exp: "Quy tắc Phòng ngừa Thiếu oxy (酸素欠乏症等防止規則, Điều 13) yêu cầu có người luôn theo dõi công việc và báo ngay khi có bất thường — 監視人 (Kanshi-nin / người giám sát) đứng bên ngoài không gian kín. Cũng phải chỉ định trưởng nhóm công việc nguy hiểm thiếu oxy (酸素欠乏危険作業主任者). KHÔNG BAO GIỜ vào không gian kín một mình. 🇯🇵 MẸO: 監視人 phải ở đúng vị trí và không được rời đi làm việc khác.",
    },
    id: {
      q: "Anda ditugaskan 酸素欠乏危険作業 (kerja bahaya kekurangan oksigen). Susunan tim minimum yang diwajibkan hukum?",
      opts: [
        "Satu pekerja di dalam ditambah 監視人 (pengawas siaga) yang mengawasi dari luar",
        "Satu pekerja di dalam, cek lewat radio tiap 30 menit",
        "Satu tukang las sendirian boleh jika pekerjaannya singkat",
        "Dua tukang las di dalam, tidak perlu ada orang di luar",
      ],
      exp: "Peraturan Pencegahan Kekurangan Oksigen (酸素欠乏症等防止規則, Pasal 13) mewajibkan orang yang terus mengawasi pekerjaan dan segera melapor jika ada kelainan — 監視人 (Kanshi-nin / pengawas siaga) yang berjaga di luar ruang terbatas. Kepala kerja bahaya kekurangan oksigen (酸素欠乏危険作業主任者) juga harus ditunjuk. JANGAN PERNAH masuk ruang terbatas sendirian. 🇯🇵 TIPS: 監視人 harus tetap di posnya dan tidak boleh pergi untuk pekerjaan lain.",
    },
  },
  23: {
    vi: {
      q: "Khí bảo vệ CO₂ đã được dùng để hàn trong bồn cả buổi sáng. Sau bữa trưa, một thợ hàn mới muốn vào. Điều gì phải xảy ra ĐẦU TIÊN?",
      opts: [
        "Mở nắp và chờ 5 phút — không khí tự sạch",
        "Đo lại oxy và khí độc, và thông gió trước khi vào",
        "Hỏi thợ hàn buổi sáng xác nhận bằng lời là an toàn",
        "Xem giờ — sau hơn 1 tiếng là vào an toàn",
      ],
      exp: "CO₂ nặng hơn không khí (mật độ 1,5×) và vẫn tụ dưới đáy bồn ngay cả sau nhiều giờ. Xác nhận bằng miệng là vô giá trị — mức khí phải được đo lại bằng 酸素濃度計 (máy đo oxy) VÀ máy đo CO đã hiệu chuẩn trước MỖI lần vào. Bầu không khí phải được thổi sạch chủ động bằng quạt thông gió cưỡng bức. 🇯🇵 MẸO: Công trường Nhật dùng thuật ngữ '空気確認' (kuki-kakunin / xác nhận không khí) như bước kiểm tra bắt buộc trước khi vào. Đừng bỏ qua dù bạn nghĩ chỗ đó 'rõ ràng đã thoáng'.",
    },
    id: {
      q: "Gas pelindung CO₂ dipakai mengelas dalam tangki sepanjang pagi. Setelah makan siang, tukang las baru ingin masuk. Apa yang harus terjadi PERTAMA?",
      opts: [
        "Buka palka dan tunggu 5 menit — udara bersih dengan sendirinya",
        "Ukur ulang oksigen dan gas berbahaya, lalu ventilasi sebelum masuk",
        "Minta tukang las pagi memastikan secara lisan bahwa aman",
        "Cek waktu — setelah lebih dari 1 jam, aman untuk masuk",
      ],
      exp: "CO₂ lebih berat dari udara (densitas 1,5×) dan tetap menumpuk di dasar tangki bahkan setelah berjam-jam. Konfirmasi lisan tidak berarti — kadar gas harus diukur ulang dengan 酸素濃度計 (meter oksigen) DAN meter CO terkalibrasi sebelum SETIAP masuk. Atmosfer harus dibersihkan aktif dengan kipas ventilasi paksa. 🇯🇵 TIPS: Lokasi Jepang memakai istilah '空気確認' (kuki-kakunin / konfirmasi udara) sebagai langkah checklist wajib sebelum masuk. Jangan pernah melewatkannya meski Anda pikir ruang itu 'jelas sudah berangin'.",
    },
  },
  24: {
    vi: {
      q: "Ở công trường Nhật, tổ hợp PPE nào là mức TỐI THIỂU tiêu chuẩn khi hàn hồ quang?",
      opts: [
        "Mặt nạ + găng da + giày an toàn — áo khoác tùy chọn khi khô ráo",
        "Chỉ mặt nạ hàn — mặt và mắt là nguy cơ chính",
        "Mặt nạ + găng da + giày an toàn + áo chống cháy hoặc tạp dề",
        "Kính bảo hộ + găng cotton mỏng — đủ cho mối hàn ngắn",
      ],
      exp: "PPE hàn tiêu chuẩn ở công trường Nhật: 1) Mặt nạ hàn 溶接面 với số kính đúng (JIS T 8141). 2) Găng da hàn 革手袋. 3) Giày an toàn 安全靴 (JIS T 8101). 4) Áo chống cháy hoặc tạp dề da 前掛け chống bắn tóe. 5) Khẩu trang chống khói hàn. 🇯🇵 MẸO: PPE được kiểm tra ở buổi họp sáng (朝礼 / chōrei) — đến mà thiếu PPE có thể không được bắt đầu làm việc hôm đó.",
    },
    id: {
      q: "Di lokasi kerja Jepang, kombinasi APD mana yang menjadi MINIMUM standar untuk las busur?",
      opts: [
        "Helm + sarung tangan kulit + sepatu safety — jaket opsional saat kering",
        "Hanya helm las — wajah dan mata adalah bahaya utama",
        "Helm + sarung tangan kulit + sepatu safety + jaket tahan api atau celemek",
        "Kacamata pengaman + sarung tangan katun tipis — cukup untuk las singkat",
      ],
      exp: "APD las standar di lokasi kerja Jepang: 1) Helm las 溶接面 dengan nomor lensa yang tepat (JIS T 8141). 2) Sarung tangan las kulit 革手袋. 3) Sepatu safety 安全靴 (JIS T 8101). 4) Jaket tahan api atau celemek kulit 前掛け untuk percikan. 5) Respirator untuk asap las. 🇯🇵 TIPS: APD diperiksa saat apel pagi (朝礼 / chōrei) — datang tanpa APD yang benar bisa berarti tidak boleh mulai bekerja hari itu.",
    },
  },
  25: {
    vi: {
      q: "Khi hàn thép không gỉ (dây/que chứa crom), cần PPE BỔ SUNG nào ngoài PPE hàn tiêu chuẩn ở Nhật?",
      opts: [
        "Không cần khẩu trang miễn là quạt thông gió đang chạy",
        "Không cần thêm PPE — khói inox an toàn hơn khói thép carbon",
        "Khẩu trang cơ bản như hàn thép carbon luôn là đủ",
        "Khẩu trang vừa khít, chọn theo nồng độ khói đã đo (nguy cơ Cr⁶⁺)",
      ],
      exp: "Hàn thép không gỉ hoặc vật liệu chứa crom tạo khói có crom hóa trị sáu (六価クロム / Cr⁶⁺), chất đã được xác nhận gây ung thư. Từ 2021, quy định Nhật yêu cầu chủ đo nồng độ khói hàn và chọn khẩu trang theo kết quả đó, có kiểm tra độ kín — nên có thể cần khẩu trang hiệu suất cao hơn so với hàn thép carbon. Thông gió tốt cũng rất cần. 🇯🇵 MẸO: Đừng bao giờ hàn inox mà không đeo loại khẩu trang công ty đã chỉ định cho công việc đó.",
    },
    id: {
      q: "Saat mengelas baja tahan karat (kawat/elektroda mengandung krom), APD TAMBAHAN apa yang diperlukan di luar APD las standar di Jepang?",
      opts: [
        "Tidak perlu respirator asalkan kipas ventilasi menyala",
        "Tidak perlu APD tambahan — asap baja tahan karat lebih aman dari baja karbon",
        "Masker debu dasar yang sama seperti baja karbon selalu cukup",
        "Respirator yang pas, dipilih dari kadar asap terukur (risiko Cr⁶⁺)",
      ],
      exp: "Mengelas baja tahan karat atau bahan yang mengandung krom menghasilkan asap berisi krom heksavalen (六価クロム / Cr⁶⁺), karsinogen bagi manusia. Sejak 2021, aturan Jepang mewajibkan pemberi kerja mengukur konsentrasi asap las dan memilih respirator dari hasil itu, dengan uji kerapatan — sehingga mungkin perlu respirator berkinerja lebih tinggi daripada untuk baja karbon. Ventilasi yang baik juga penting. 🇯🇵 TIPS: Jangan pernah mengelas baja tahan karat tanpa respirator yang ditentukan perusahaan untuk pekerjaan itu.",
    },
  },
  101: {
    vi: {
      q: "Đàn anh nói 'Guraindaa kakete' (グラインダーかけて) và 'Kaatto shite' (カットして) về cùng một máy đĩa 'Guraindaa' (グラインダー). Khác biệt chính giữa hai lệnh này là gì?",
      opts: [
        "Không khác — cả hai đều là mài bề mặt bằng cùng một đĩa",
        "Kakete = mài bằng đĩa mài; kaatto = cắt bằng đĩa cắt",
        "Kakete chỉ cho inox; kaatto shite chỉ cho thép carbon",
        "Kakete = bật máy mài; kaatto shite = tắt máy mài",
      ],
      exp: "Guraindaa (グラインダー) = Máy mài góc, dụng cụ phổ biến nhất trên công trường hàn Nhật — nhưng CÙNG thân máy lắp đĩa khác nhau cho việc khác nhau. 'Kakete' (かけて) = làm nhẵn/mài bằng đĩa mài hoặc đĩa nhám. 'Kaatto shite' (カットして) = cắt xuyên bằng đĩa cắt. Dùng sai đĩa cho việc (ví dụ mài bằng đĩa cắt mỏng) rất nguy hiểm và có thể làm vỡ đĩa. 🇯🇵 MẸO: Luôn xác nhận đĩa nào đang lắp trước khi bắt đầu — 'guraindaa kakete' không bao giờ nghĩa là cắt. Nhớ: cần An toàn Đá mài (自由研削といし特別教育) trước khi dùng cả hai loại đĩa.",
    },
    id: {
      q: "Senior berkata 'Guraindaa kakete' (グラインダーかけて) dan 'Kaatto shite' (カットして) tentang alat cakram 'Guraindaa' (グラインダー) yang sama. Apa perbedaan utama kedua perintah ini?",
      opts: [
        "Tidak beda — keduanya berarti menggerinda dengan piringan yang sama",
        "Kakete = gerinda dengan piringan gerinda; kaatto = potong dengan piringan potong",
        "Kakete hanya untuk stainless; kaatto shite hanya untuk baja karbon",
        "Kakete = nyalakan gerinda; kaatto shite = matikan gerinda",
      ],
      exp: "Guraindaa (グラインダー) = Gerinda sudut, alat paling umum di lokasi las Jepang — tapi bodi yang SAMA memakai cakram berbeda untuk pekerjaan berbeda. 'Kakete' (かけて) = menghaluskan/menggerinda dengan cakram gerinda atau flap. 'Kaatto shite' (カットして) = memotong dengan cakram potong. Memakai cakram salah untuk tugas (mis. menggerinda dengan cakram potong tipis) berbahaya dan bisa memecahkan cakram. 🇯🇵 TIPS: Selalu pastikan cakram mana yang terpasang sebelum mulai — 'guraindaa kakete' tak pernah berarti memotong. Ingat: perlu Keselamatan Batu Gerinda (自由研削といし特別教育) sebelum memakai kedua jenis cakram.",
    },
  },
  102: {
    vi: {
      q: "Trước khi hàn, bạn cần làm sạch một rãnh rất hẹp. Giám sát đưa bạn một 'Bo-gura' (棒グラ). Nó là gì?",
      opts: [
        "Thanh kim loại dùng đo độ sâu rãnh",
        "Máy mài góc lớn cho bề mặt phẳng",
        "Máy mài khuôn hình que cho rãnh hẹp và chỗ chật",
        "Đoạn nối dài mỏ hàn để với tới rãnh sâu",
      ],
      exp: "Bo-gura (棒グラ) = 棒式グラインダー = máy mài bút/máy mài thanh. Chữ 棒 (bo) nghĩa 'hình que'. Lý tưởng để làm sạch rãnh (開先 / kaisaki), góc hẹp và mối nối hẹp nơi máy mài đĩa lớn không tới được. Dùng hằng ngày ở xưởng đóng tàu và nhà máy. 🇯🇵 MẸO: Khi giám sát đưa Bo-gura, chỉ vào rãnh và nói 'kaisaki kirei ni shite' (開先きれいにして / làm sạch rãnh cho đẹp), họ mong một bề mặt nhẵn, sạch vảy. Làm kỹ — kaisaki bẩn = rỗ khí về sau.",
    },
    id: {
      q: "Sebelum mengelas, Anda perlu membersihkan alur yang sangat sempit. Supervisor memberi Anda 'Bo-gura' (棒グラ). Apa itu?",
      opts: [
        "Batang logam untuk mengukur kedalaman alur",
        "Gerinda sudut besar untuk permukaan datar",
        "Gerinda batang (die grinder) untuk alur sempit dan sudut sempit",
        "Perpanjangan torch untuk menjangkau alur dalam",
      ],
      exp: "Bo-gura (棒グラ) = 棒式グラインダー = die grinder atau pencil grinder. 棒 (bo) berarti 'berbentuk batang'. Cocok untuk membersihkan alur (開先 / kaisaki), sudut sempit, dan sambungan sempit di mana gerinda cakram besar tak menjangkau. Dipakai harian di galangan dan pabrik. 🇯🇵 TIPS: Saat supervisor memberi Bo-gura, menunjuk alur dan berkata 'kaisaki kirei ni shite' (開先きれいにして / bersihkan alurnya rapi), mereka mengharapkan permukaan halus bebas kerak. Kerjakan dengan teliti — kaisaki kotor = porositas nanti.",
    },
  },
  103: {
    vi: {
      q: "Sau khi hàn que, tổ trưởng nói 'Chippaa!' (チッパー) và chỉ vào mối hàn. Bạn nên cầm gì?",
      opts: [
        "Mỏ hàn — để hàn thêm một lượt kim loại",
        "Bàn chải inox — để đánh bóng đường hàn",
        "Máy mài góc — để mài phẳng đường hàn",
        "Máy gõ xỉ khí nén — để gõ xỉ trước lượt tiếp",
      ],
      exp: "Chippaa (チッパー) = Máy đục hơi / súng đục. Dụng cụ khí nén gõ nhanh lên bề mặt hàn để bỏ xỉ (ノロ / Noro). Nhanh hơn nhiều búa đục tay. Ở xưởng đóng tàu và nhà máy Nhật, bỏ xỉ trước lượt tiếp theo là BẮT BUỘC — bỏ qua gây khuyết tật lẫn xỉ. 🇯🇵 MẸO: Luôn đeo kính an toàn khi đục — mảnh xỉ nóng bắn tốc độ cao. Ở Nhật, 'đục = nhắm mắt' là không được phép. Xỉ bắn vào mắt là một trong những chấn thương hàn phổ biến nhất ở nhà máy Nhật.",
    },
    id: {
      q: "Setelah las busur (stick), mandor berkata 'Chippaa!' (チッパー) dan menunjuk las. Apa yang harus Anda ambil?",
      opts: [
        "Torch las — untuk menambah satu pass logam",
        "Sikat kawat stainless — untuk memoles manik",
        "Gerinda sudut — untuk meratakan manik",
        "Air chipper — untuk membuang terak sebelum pass berikutnya",
      ],
      exp: "Chippaa (チッパー) = Air chipper / gun pengetuk. Alat pneumatik yang memukul cepat permukaan las untuk membuang terak (ノロ / Noro). Jauh lebih cepat dari palu ketuk manual. Di galangan dan pabrik Jepang, membuang terak sebelum pass berikutnya WAJIB — melewatkannya menyebabkan cacat inklusi terak. 🇯🇵 TIPS: Selalu pakai kacamata pengaman saat mengetuk — pecahan terak panas terbang cepat. Di Jepang, 'mengetuk = mata tertutup' tidak diperbolehkan. Terak terbang ke mata adalah salah satu cedera las paling umum di pabrik Jepang.",
    },
  },
  104: {
    vi: {
      q: "Khác biệt giữa 'Chippaa' (チッパー) và 'Chippingu-hanmaa' (チッピングハンマー) là gì?",
      opts: [
        "Chippaa chạy bằng khí nén; búa gõ xỉ là thủ công — cả hai đều gõ xỉ",
        "Búa gõ xỉ để cắt thép; chippaa để đánh bóng đường hàn",
        "Chippaa chỉ dùng cho hàn TIG; búa dùng cho hàn que",
        "Cùng một dụng cụ — chỉ khác tên theo vùng",
      ],
      exp: "Chippaa (チッパー) = Máy đục hơi — khí nén, nhanh, dùng bỏ xỉ nặng trong sản xuất. Chippingu-hanmaa (チッピングハンマー) = búa đục tay — dùng khi không có dụng cụ hơi hoặc cho lượng xỉ nhỏ. Cả hai đều cần kỹ thuật để không làm hỏng đường hàn. 🇯🇵 MẸO: Một cú đục sắc, chính xác ở góc 30–45° so với bề mặt đường hàn sẽ bỏ xỉ hiệu quả mà không khoét kim loại. Người mới thường gõ quá mạnh và quá vuông góc — hãy tập trên phế liệu trước.",
    },
    id: {
      q: "Apa perbedaan 'Chippaa' (チッパー) dan 'Chippingu-hanmaa' (チッピングハンマー)?",
      opts: [
        "Chippaa bertenaga udara; palu chipping manual — keduanya membuang terak",
        "Palu chipping untuk memotong baja; chippaa untuk memoles manik",
        "Chippaa hanya untuk las TIG; palu untuk las elektroda",
        "Alat yang sama — hanya beda nama menurut daerah",
      ],
      exp: "Chippaa (チッパー) = Air chipper — pneumatik, cepat, untuk membuang terak berat pada las produksi. Chippingu-hanmaa (チッピングハンマー) = palu ketuk manual — dipakai saat alat udara tak ada atau untuk terak sedikit. Keduanya perlu teknik agar tak merusak jalur las. 🇯🇵 TIPS: Ketukan tajam dan presisi pada sudut 30–45° terhadap permukaan jalur membuang terak efisien tanpa menggerus logam. Pekerja baru cenderung memukul terlalu keras dan terlalu tegak lurus — berlatihlah pada besi bekas dulu.",
    },
  },
  105: {
    vi: {
      q: "Giám sát nói 'Chippu' (チップ) trong súng cần thay. Đầu tiếp điện (contact tip) làm gì?",
      opts: [
        "Làm mát mỏ hàn khi hàn nặng",
        "Truyền dòng điện vào dây và dẫn hướng dây",
        "Nối cáp mỏ hàn với bộ cấp dây",
        "Điều chỉnh lưu lượng khí bảo vệ",
      ],
      exp: "Chippu (チップ) = Đầu tiếp điện. HAI nhiệm vụ: 1) Truyền dòng điện từ súng sang dây hàn. 2) Dẫn dây theo đúng đường đến hồ quang. Đầu mòn hoặc nghẹt văng gây hồ quang không ổn định, đường hàn xấu và kẹt dây. Thay thường xuyên — rẻ và quan trọng. 🇯🇵 MẸO: Thợ Nhật nói 'chippu ga buru-buru shiteru' (チップがぶるぶるしてる / đầu tip đang rung/không ổn) để mô tả hồ quang chập chờn. Thường là đầu mòn — thay ngay. Mang sẵn vài đầu tip (チップ) trong túi tạp dề là chuyện thường.",
    },
    id: {
      q: "Supervisor berkata 'Chippu' (チップ) di gun perlu diganti. Apa fungsi contact tip?",
      opts: [
        "Mendinginkan torch saat mengelas berat",
        "Mengalirkan arus ke kawat dan memandunya",
        "Menghubungkan kabel torch ke pengumpan kawat",
        "Mengatur banyaknya aliran gas pelindung",
      ],
      exp: "Chippu (チップ) = Contact tip. DUA tugas: 1) Menyalurkan arus listrik dari gun ke kawat las. 2) Memandu kawat melalui jalur benar ke busur. Tip aus atau tersumbat percikan menyebabkan busur tak stabil, bentuk jalur buruk, dan masalah pengumpanan kawat. Ganti berkala — murah dan penting. 🇯🇵 TIPS: Tukang las Jepang berkata 'chippu ga buru-buru shiteru' (チップがぶるぶるしてる / tip bergetar/tak stabil) untuk busur yang berkedip tak menentu. Biasanya tip aus — segera ganti. Membawa cadangan tip (チップ) di saku celemek adalah praktik standar.",
    },
  },
  106: {
    vi: {
      q: "Vai trò của 'Nozuru' (ノズル) trong súng hàn bán tự động là gì?",
      opts: [
        "Dẫn dây hàn tới vật hàn",
        "Nối mỏ hàn với cáp nguồn",
        "Hướng khí bảo vệ bao quanh vũng hàn",
        "Làm mát bép bằng nước",
      ],
      exp: "Nozuru (ノズル) = Chụp khí (nozzle). Phần ngoài cùng của súng. Nó dẫn khí bảo vệ (CO₂, Argon hoặc khí trộn) từ thân súng quanh hồ quang và bể hàn. Chụp khí bị nghẹt hoặc bám văng làm hạn chế dòng khí và gây rỗ khí (ブローホール). Vệ sinh thường xuyên bằng chất chống văng. 🇯🇵 MẸO: Cách vệ sinh đúng ở Nhật: xịt chất chống văng trước, rồi gõ mạnh chụp khí vào bề mặt cứng (không phải vào mối hàn!). Thợ giàu kinh nghiệm làm tự động mỗi vài mét hàn — hãy tạo thói quen.",
    },
    id: {
      q: "Apa peran 'Nozuru' (ノズル) pada gun las semi-otomatis?",
      opts: [
        "Memandu kawat las ke benda kerja",
        "Menghubungkan torch ke kabel daya",
        "Mengarahkan gas pelindung di sekitar kolam las",
        "Mendinginkan tip kontak dengan air",
      ],
      exp: "Nozuru (ノズル) = Nozzle. Bagian terluar gun. Menyalurkan gas pelindung (CO₂, Argon, atau gas campuran) dari bodi gun ke sekitar busur dan kolam las. Nozzle tersumbat atau berlapis percikan membatasi aliran gas dan menyebabkan porositas (ブローホール). Bersihkan berkala dengan semprotan anti-percikan. 🇯🇵 TIPS: Cara membersihkan nozzle tersumbat di lokasi Jepang: semprot anti-percikan dulu, lalu ketukkan nozzle kuat ke permukaan keras (bukan ke las!). Tukang berpengalaman melakukannya otomatis tiap beberapa meter las — jadikan kebiasaan.",
    },
  },
  107: {
    vi: {
      q: "Bạn thấy nhiều rỗ khí trong mối hàn. Đàn anh kiểm tra súng và tháo một 'Orifisu' (オリフィス) bị nghẹt. Vì sao orifice nghẹt gây rỗ khí?",
      opts: [
        "Nó làm ruột dẫn bị tắc vụn dây",
        "Nó làm bép quá nóng và chảy",
        "Nó làm chậm cấp dây và hồ quang dài ra",
        "Dòng khí bị rối và hút không khí vào",
      ],
      exp: "Orifisu (オリフィス) = Bộ khuếch tán khí / orifice. Nằm giữa thân súng và chụp khí. Nó tán đều khí bảo vệ thành dòng chảy êm (tầng). Nếu nghẹt, khí rối hút không khí (nitơ + oxy) gây rỗ khí (ブローホール) trong mối hàn. Nguyên nhân rỗ khí bí ẩn mà người mới hay bỏ sót. 🇯🇵 MẸO: Khi rỗ khí đột ngột xuất hiện mà không rõ nguyên nhân, thợ Nhật kỳ cựu tháo rời toàn bộ súng (chippu → nozuru → orifisu) và vệ sinh từng phần. Orifice thường là thủ phạm ẩn — một hạt văng nhỏ bịt một lỗ của nó.",
    },
    id: {
      q: "Anda melihat banyak porositas di las. Senior memeriksa gun dan melepas 'Orifisu' (オリフィス) yang tersumbat. Mengapa orifice tersumbat menyebabkan porositas?",
      opts: [
        "Membuat liner tersumbat serpihan kawat",
        "Membuat tip kontak terlalu panas dan meleleh",
        "Memperlambat kawat sehingga busur memanjang",
        "Aliran gas menjadi turbulen dan menyedot udara",
      ],
      exp: "Orifisu (オリフィス) = Gas diffuser / orifice. Terletak antara bodi gun dan nozzle. Menyebarkan gas pelindung merata jadi aliran halus (laminar). Jika tersumbat, turbulensi gas menyedot udara atmosfer (nitrogen + oksigen), menyebabkan pori gas (ブローホール) di las. Penyebab porositas misterius yang sering diabaikan pemula. 🇯🇵 TIPS: Saat porositas tiba-tiba muncul dan penyebabnya tak jelas, tukang las Jepang berpengalaman membongkar gun sepenuhnya (chippu → nozuru → orifisu) dan membersihkan tiap bagian. Orifice sering jadi biang tersembunyi — sebutir kecil percikan menyumbat salah satu lubangnya.",
    },
  },
  108: {
    vi: {
      q: "'Rainaa' (ライナー) bên trong súng hàn bán tự động là gì?",
      opts: [
        "Ống dẫn dây từ bộ cấp dây tới bép",
        "Kênh nước làm mát bên trong mỏ hàn",
        "Lớp vỏ cao su bảo vệ cáp mỏ hàn",
        "Lớp cách điện giữa chụp khí và thân mỏ hàn",
      ],
      exp: "Rainaa (ライナー) = Ống lót / ống dẫn. Chạy suốt chiều dài cáp súng. Nó dẫn dây hàn êm từ bộ cấp đến đầu tiếp điện VÀ mang khí bảo vệ. Ống lót bị gập, bẩn hoặc mòn gây kẹt dây (バードネスティング), cấp dây không đều và hồ quang không ổn định. Thay khi cấp dây trở nên khó. 🇯🇵 MẸO: 'Baadonesutingu' (バードネスティング / tổ chim) là từ Nhật chỉ dây rối thành cục ở con lăn do ống lót nghẹt. Khi xảy ra giữa chừng, hồ quang dừng đột ngột với tiếng 'pop'. Học cách xử nhanh: nhả áp con lăn, kéo dây lại, gỡ rối, cấp lại.",
    },
    id: {
      q: "Apa itu 'Rainaa' (ライナー) di dalam gun las semi-otomatis?",
      opts: [
        "Tabung yang memandu kawat dari pengumpan ke tip kontak",
        "Saluran air pendingin di dalam torch",
        "Selubung karet luar pelindung kabel torch",
        "Isolator antara nozzle dan badan torch",
      ],
      exp: "Rainaa (ライナー) = Liner / tabung konduit. Membentang sepanjang kabel gun. Memandu kawat las mulus dari pengumpan ke contact tip DAN membawa gas pelindung. Liner tertekuk, kotor, atau aus menyebabkan kawat macet (バードネスティング), umpan tak konsisten, dan busur tak stabil. Ganti bila pengumpanan kawat mulai kasar. 🇯🇵 TIPS: 'Baadonesutingu' (バードネスティング / sarang burung) adalah istilah Jepang untuk kawat kusut menggumpal di drive roll akibat liner tersumbat. Saat terjadi di tengah las, busur berhenti tiba-tiba dengan bunyi 'pop'. Pelajari cara membereskannya cepat: lepas tekanan drive roll, tarik kawat mundur, urai kusutnya, umpan ulang.",
    },
  },
  109: {
    vi: {
      q: "Ở xưởng đóng tàu Nhật, một 'Sokyuki' (走行機) hoặc 'Kyarijji' (キャリッジ) được đặt trên mối nối dài. Nó làm gì?",
      opts: [
        "Cẩu nhỏ nâng tấm thép dọc mối nối",
        "Xe chạy động cơ đưa mỏ hàn đi với tốc độ đặt sẵn",
        "Máy mài làm sạch mối hàn sau khi hàn",
        "Máy cắt khí để vát mép thẳng",
      ],
      exp: "Sokyuki (走行機) / Kyarijji (キャリッジ) = Xe hàn. Xe có động cơ mang súng hàn bán tự động chạy dọc mối nối thẳng với tốc độ đặt trước, không đổi. Thợ đặt thông số (điện áp, tốc độ dây, tốc độ chạy) và giám sát. Phổ biến cho mối hàn thẳng dài trên vỏ tàu, kết cấu thép và thành bồn. 🇯🇵 MẸO: Thợ dùng sokyuki phải theo dõi hồ quang liên tục và chỉnh góc súng bằng tay nếu xe lệch. Ngủ gật khi 'giám sát' sokyuki là lỗi thường gặp của người mới — khuyết tật kéo dài vài mét sẽ phải hatsuri (ハツリ / khoét ra và làm lại) toàn bộ.",
    },
    id: {
      q: "Di galangan Jepang, 'Sokyuki' (走行機) atau 'Kyarijji' (キャリッジ) dipasang pada sambungan panjang. Apa fungsinya?",
      opts: [
        "Crane kecil yang mengangkat pelat di sepanjang sambungan",
        "Kereta bermotor yang menggerakkan torch dengan kecepatan tetap",
        "Mesin gerinda yang membersihkan las setelah dilas",
        "Mesin potong gas untuk potongan bevel lurus",
      ],
      exp: "Sokyuki (走行機) / Kyarijji (キャリッジ) = Kereta las. Troli bermotor yang membawa gun las semi-otomatis sepanjang sambungan lurus dengan kecepatan tetap. Tukang mengatur parameter (tegangan, kecepatan kawat, kecepatan jalan) dan memantau. Umum untuk las lurus panjang pada lambung kapal, struktur baja, dan dinding tangki. 🇯🇵 TIPS: Tukang yang memakai sokyuki wajib memantau busur terus-menerus dan mengoreksi sudut gun secara manual bila kereta melenceng. Tertidur saat 'memantau' sokyuki adalah kesalahan umum pekerja baru — cacat sepanjang beberapa meter harus di-hatsuri (ハツリ / dikorek dan diulang) seluruhnya.",
    },
  },
  110: {
    vi: {
      q: "Bạn mượn mặt nạ hàn 'Yosetsu-men' (溶接面) để hàn que ở 150A, nhưng kính ghi số 5 — mức dùng cho cắt khí, không phải hàn hồ quang. Bạn nên làm gì?",
      opts: [
        "Cứ dùng — số kính chỉ ảnh hưởng màu, không ảnh hưởng mắt",
        "Dùng, nhưng chỉ cho mối hàn đính dưới 10 giây",
        "Không dùng — số 5 quá sáng; dùng kính số 9–11 cho 150A",
        "Dùng, nhưng đứng xa hồ quang hơn",
      ],
      exp: "Số kính (遮光度番号) phải phù hợp với phương pháp và dòng điện. Với hàn que 75–200A, hướng dẫn JIS T 8141 là số 9–11. Kính số 5 cho quá nhiều tia UV/IR có hại lọt qua khi hàn hồ quang — hàn ngắn hay đứng xa đều không an toàn. 🇯🇵 MẸO: Khi mượn mặt nạ ở công trường, luôn kiểm tra số kính trên khung kính — đừng đoán.",
    },
    id: {
      q: "Anda meminjam helm las 'Yosetsu-men' (溶接面) untuk las elektroda 150A, tetapi lensanya bernomor 5 — tingkat untuk potong gas, bukan las busur. Apa yang harus dilakukan?",
      opts: [
        "Pakai — nomor lensa hanya soal warna, bukan keselamatan mata",
        "Pakai, tapi hanya untuk las titik di bawah 10 detik",
        "Jangan pakai — nomor 5 terlalu terang; pakai lensa 9–11 untuk 150A",
        "Pakai, tapi berdiri lebih jauh dari busur",
      ],
      exp: "Nomor lensa (遮光度番号) harus sesuai proses dan arus. Untuk las elektroda 75–200A, panduan JIS T 8141 adalah nomor 9–11. Lensa nomor 5 meloloskan terlalu banyak radiasi UV/IR berbahaya untuk las busur — las singkat atau jarak lebih jauh tidak membuatnya aman. 🇯🇵 TIPS: Saat meminjam helm di lokasi, selalu periksa nomor di dudukan lensa — jangan menebak.",
    },
  },
  111: {
    vi: {
      q: "'Jido-shakko-men' (自動遮光面) là gì và vì sao nhiều thợ hàn Nhật thích nó?",
      opts: [
        "Tấm che mặt trong suốt chỉ dùng khi mài",
        "Mặt nạ kính cố định, kính luôn tối",
        "Mũ điều khiển từ xa có gắn camera",
        "Mặt nạ tự động tối lại khi hồ quang bắt đầu",
      ],
      exp: "Jido-shakko-men (自動遮光面) = Mũ hàn tự động tối (ADH). Kính trong khi nghỉ (thấy rõ để đặt súng) rồi tối tự động khi hồ quang bật — thời gian phản ứng dưới 1/25.000 giây. Giảm mỏi mắt, tăng độ chính xác định vị. Tiêu chuẩn ở xưởng Nhật hiện đại. 🇯🇵 MẸO: Nhiều thợ hàn Nhật có mặt nạ tự động tối riêng. Trước khi mua, hãy xem thời gian phản ứng và dải số kính trên thông số — mặt nạ rẻ, phản ứng chậm vẫn có thể hại mắt.",
    },
    id: {
      q: "Apa itu 'Jido-shakko-men' (自動遮光面) dan mengapa banyak tukang las Jepang menyukainya?",
      opts: [
        "Pelindung wajah bening khusus untuk menggerinda",
        "Masker lensa tetap yang lensanya selalu gelap",
        "Helm kendali jarak jauh dengan kamera bawaan",
        "Helm auto-gelap yang menggelap saat busur menyala",
      ],
      exp: "Jido-shakko-men (自動遮光面) = Topeng las auto-darkening (ADH). Lensa bening saat diam (Anda bisa melihat jelas untuk memosisikan gun) lalu menggelap otomatis saat busur mulai — waktu reaksi di bawah 1/25.000 detik. Mengurangi lelah mata, meningkatkan akurasi posisi. Standar di bengkel Jepang modern. 🇯🇵 TIPS: Banyak tukang las Jepang punya helm auto-gelap sendiri. Sebelum membeli, periksa waktu reaksi dan rentang nomor lensa di lembar spesifikasi — helm murah yang lambat tetap bisa merusak mata.",
    },
  },
  112: {
    vi: {
      q: "'Ura-atekin' (裏当て金) dùng để làm gì trong hàn?",
      opts: [
        "Tấm lót đỡ lượt hàn chân từ phía sau",
        "Kim loại điền thêm để lấp khe hở rộng",
        "Kẹp giữ các tấm lại với nhau",
        "Tấm nối đất cho mạch hàn",
      ],
      exp: "Ura-atekin (裏当て金) = Thanh lót đáy. Đặt sau chân rãnh để đỡ bể hàn nóng chảy ở lượt đầu (lượt chân). Ngăn thủng (溶落ち / yoochi) và giúp ngấu chân hoàn toàn (完全溶込み). Phổ biến trong đóng tàu, kết cấu thép và chế tạo bình áp lực. 🇯🇵 MẸO: Trong đóng tàu Nhật, thanh lót thép thường được đính hàn cố định vĩnh viễn (永久裏当て). Với công việc cần mặt sau sạch, dùng băng lót gốm (セラミック裏当て) — nó rơi ra sau khi mối hàn nguội và không để lại gì.",
    },
    id: {
      q: "Untuk apa 'Ura-atekin' (裏当て金) dipakai dalam pengelasan?",
      opts: [
        "Pelat penahan yang menopang root pass dari belakang",
        "Logam pengisi tambahan untuk mengisi celah lebar",
        "Klem untuk menahan pelat bersama",
        "Pelat arde untuk sirkuit las",
      ],
      exp: "Ura-atekin (裏当て金) = Backing strip / backing bar. Dipasang di belakang akar alur untuk menopang kolam las cair pada pass pertama (root). Mencegah tembus bakar (溶落ち / yoochi) dan membantu penetrasi akar penuh (完全溶込み). Umum di pembuatan kapal, baja struktur, dan bejana tekan. 🇯🇵 TIPS: Di galangan Jepang, backing baja sering di-tack permanen (永久裏当て). Untuk pekerjaan yang butuh permukaan belakang bersih, dipakai pita backing keramik (セラミック裏当て) — terlepas setelah las dingin dan tak meninggalkan apa pun.",
    },
  },
  113: {
    vi: {
      q: "'Endo-tabu' (エンドタブ) là gì và vì sao dùng trong thi chứng chỉ và hàn sản xuất?",
      opts: [
        "Phiếu báo cáo thử nghiệm điền sau khi hàn",
        "Tấm phụ đưa khuyết tật đầu/cuối mối hàn ra ngoài mối nối",
        "Một loại dây lõi thuốc cho tấm dày",
        "Tấm lót gốm chỉ dùng cho hàn ống",
      ],
      exp: "Endo-tabu (エンドタブ) = Tấm chạy ra / tấm đầu cuối. Tấm thép ngắn gắn ở mỗi đầu mối nối. Điểm khởi và kết thúc hồ quang là vùng dễ khuyết tật nhất (ブローホール, クレーター割れ). Tấm đầu cuối đưa các khuyết tật này ra ngoài mối nối thực. Sau khi hàn, cắt bỏ. Bắt buộc trong thi chứng chỉ JIS. 🇯🇵 MẸO: Tấm chặn đầu (end tab) là tiêu chuẩn trong kết cấu thép xây dựng, và bài thi hàn nhà máy AW Kentei được chia theo loại tab (tab thép hoặc tab thay thế). Sau khi hàn, cắt và hoàn thiện vùng tab đúng quy trình.",
    },
    id: {
      q: "Apa itu 'Endo-tabu' (エンドタブ) dan mengapa dipakai dalam ujian sertifikasi dan las produksi?",
      opts: [
        "Formulir laporan uji yang diisi setelah mengelas",
        "Tab yang memindahkan cacat awal/akhir las ke luar sambungan",
        "Jenis kawat flux-cored untuk pelat tebal",
        "Penahan keramik khusus untuk las pipa",
      ],
      exp: "Endo-tabu (エンドタブ) = Run-off tab / end tab. Pelat baja pendek yang dipasang di tiap ujung sambungan las. Awal dan akhir busur adalah area paling rawan cacat (ブローホール, クレーター割れ). End tab memindahkan cacat ini ke luar sambungan sebenarnya. Setelah mengelas, end tab dipotong dan dibuang. Wajib dalam ujian sertifikasi JIS. 🇯🇵 TIPS: End tab adalah standar dalam pekerjaan baja bangunan, dan ujian las pabrik AW Kentei dibagi menurut jenis end tab (end tab baja atau end tab pengganti). Setelah mengelas, potong dan rapikan area end tab sesuai prosedur.",
    },
  },
  114: {
    vi: {
      q: "'Aasu-kurippu' (アースクリップ), còn gọi 'kẹp mát', và vì sao nó quan trọng?",
      opts: [
        "Kẹp giữ que hàn trong kìm hàn",
        "Kẹp khóa cuộn dây trong bộ cấp dây",
        "Nối đường dòng điện về với vật hàn",
        "Kẹp an toàn giữ chặt cáp nguồn",
      ],
      exp: "Aasu-kurippu (アースクリップ) = Kẹp mát / kẹp tiếp đất. Hoàn tất mạch điện hàn bằng cách nối với vật hàn. Tiếp mát kém gây hồ quang không ổn định, văng tóe và dòng điện tìm đường nguy hiểm qua máy móc, khung sườn hoặc kết cấu. Luôn kẹp càng gần mối hàn càng tốt. 🇯🇵 MẸO: 'Aasu ga warui' (アースが悪い / mát kém) là lý do phổ biến gây hồ quang bất ổn ở Nhật. Nếu hồ quang nghe thô và văng nhiều dù điện áp/dòng đúng, kiểm tra kẹp mát trước — hàm kẹp gỉ hoặc đường mát gián tiếp qua kết cấu thép thường là thủ phạm hơn bất kỳ cài đặt máy nào.",
    },
    id: {
      q: "Apa itu 'Aasu-kurippu' (アースクリップ) alias 'ground clamp' dan mengapa penting?",
      opts: [
        "Klip yang menahan elektroda di holder",
        "Klip yang mengunci gulungan kawat di pengumpan",
        "Menghubungkan jalur arus balik ke benda kerja",
        "Klip pengaman yang mengikat kabel daya",
      ],
      exp: "Aasu-kurippu (アースクリップ) = Klip earth / ground clamp. Melengkapi sirkuit listrik las dengan terhubung ke benda kerja. Kontak ground buruk menyebabkan busur tak stabil, percikan, dan arus mencari jalur berbahaya lewat mesin, rangka, atau struktur. Selalu jepit sedekat mungkin dengan las. 🇯🇵 TIPS: 'Aasu ga warui' (アースが悪い / ground jelek) adalah alasan umum busur tak stabil di lokasi Jepang. Jika busur terdengar kasar dan percikan berlebihan meski tegangan/arus benar, periksa ground clamp dulu — rahang klip berkarat atau jalur ground tak langsung lewat struktur baja lebih sering jadi biang daripada setelan mesin mana pun.",
    },
  },
  115: {
    vi: {
      q: "Giám sát bảo bạn xịt 'Supatta-boshi-zai' (スパッタ防止剤) trước khi hàn. Xịt ở đâu là an toàn và hiệu quả, và KHÔNG BAO GIỜ xịt ở đâu?",
      opts: [
        "Chỉ lên bề mặt mối nối sẽ hàn, không lên mỏ hàn",
        "Lên bề mặt tiếp xúc của bép để dẫn điện tốt hơn",
        "Khắp nơi, kể cả trong rãnh khí và bộ chia khí",
        "Lên mặt ngoài chụp khí — không bao giờ vào rãnh khí",
      ],
      exp: "Supatta-boshi-zai (スパッタ防止剤) = Chất chống văng, xịt lên ngoài chụp khí và thân súng để văng rơi ra dễ thay vì bám. Xịt BÊN TRONG kênh khí hoặc orifice có thể nghẹt đường khí gây rối (dẫn đến rỗ khí), và xịt gần hồ quang đang cháy hoặc lên kim loại nóng là nguy cơ cháy/khói. Một lượng nhỏ ngoài chụp khí là đủ. 🇯🇵 MẸO: Chất chống văng gốc nước được ưa dùng ở Nhật vì ít cháy. Xịt trước khi hàn, lau sạch sau — đầu tư nhỏ, tiết kiệm nhiều thời gian.",
    },
    id: {
      q: "Supervisor menyuruh Anda menyemprot 'Supatta-boshi-zai' (スパッタ防止剤) sebelum mengelas. Di mana aman dan efektif menyemprotnya, dan di mana JANGAN PERNAH?",
      opts: [
        "Hanya di permukaan sambungan yang dilas, tidak pada torch",
        "Pada permukaan kontak tip agar arus lebih lancar",
        "Di mana saja, termasuk di dalam saluran gas dan orifice",
        "Di bagian luar nozzle — jangan di dalam saluran gas",
      ],
      exp: "Supatta-boshi-zai (スパッタ防止剤) = Semprotan anti-percikan, disemprot pada eksterior nozzle dan bodi gun agar percikan rontok mudah alih-alih menempel. Menyemprot DI DALAM saluran gas atau orifice bisa menyumbat jalur gas dan menyebabkan turbulensi (memicu porositas), dan menyemprot dekat busur aktif atau ke logam panas adalah risiko kebakaran/asap. Sedikit di eksterior nozzle sudah cukup. 🇯🇵 TIPS: Semprotan anti-percikan berbahan air lebih disukai di lokasi Jepang karena kurang mudah terbakar. Semprot sebelum mengelas, lap bersih setelahnya — investasi kecil, hemat waktu besar.",
    },
  },
  116: {
    vi: {
      q: "'Ondo-chooku' (温度チョーク) hoặc 'Tempu-sutikku' (テンプスティック) dùng để làm gì?",
      opts: [
        "Bút sáp chảy ở nhiệt độ định sẵn để kiểm gia nhiệt",
        "Bút đánh dấu vị trí hàn trên bản vẽ",
        "Lớp phủ chống ăn mòn cho mối hàn đã xong",
        "Phấn đánh dấu đường cắt trên tấm thép",
      ],
      exp: "Ondo-chooku (温度チョーク) = Bút sáp nhiệt độ / Tempilstick. Mỗi bút chảy ở một nhiệt độ nhất định (ví dụ 150°C, 200°C, 350°C). Đánh dấu lên thép gần mối hàn — nếu vết chảy, đã đạt nhiệt độ. Dùng để kiểm tra nhiệt độ nung trước (予熱) trước khi hàn và nhiệt độ giữa các lượt (パス間温度). 🇯🇵 MẸO: Đo đúng vị trí WPS quy định — thường trên kim loại cơ bản cách mối nối một khoảng nhất định, không đo trên mối hàn. Giám sát kiểm tra cả cách đo lẫn kết quả.",
    },
    id: {
      q: "Untuk apa 'Ondo-chooku' (温度チョーク) atau 'Tempu-sutikku' (テンプスティック) dipakai?",
      opts: [
        "Krayon yang meleleh pada suhu tertentu untuk cek preheat",
        "Penanda untuk menulis posisi las di gambar",
        "Lapisan antikarat untuk las yang sudah jadi",
        "Kapur untuk menandai garis potong di pelat baja",
      ],
      exp: "Ondo-chooku (温度チョーク) = Krayon suhu / Tempilstick. Tiap krayon meleleh pada suhu tertentu (mis. 150°C, 200°C, 350°C). Tandai baja dekat las — jika tanda meleleh, suhu telah tercapai. Dipakai untuk memverifikasi suhu preheat (予熱) sebelum mengelas dan suhu antar-pass (パス間温度) di antara pass. 🇯🇵 TIPS: Ukur di tempat yang ditentukan WPS — biasanya di logam induk pada jarak tertentu dari sambungan, bukan di las itu sendiri. Supervisor memeriksa cara mengukur maupun hasilnya.",
    },
  },
  117: {
    vi: {
      q: "'Yosetsu-geeji' (溶接ゲージ) dùng để làm gì trên công trường Nhật?",
      opts: [
        "Kiểm tra áp suất bình khí",
        "Đo chiều dài chân, chiều dày cổ, cháy cạnh và gia cường",
        "Cài đặt dòng điện máy hàn",
        "Đo lượng dây hàn đã dùng",
      ],
      exp: "Yosetsu-geeji (溶接ゲージ) = Thước hàn. Dụng cụ kiểm tra thiết yếu nhiều chức năng: đo chiều dài chân mối hàn góc (脚長), chiều dày cổ (のど厚), chiều cao đắp (余盛), độ sâu lẹm (アンダーカット) và hơn nữa. Dùng khi kiểm tra ngoại quan (VT) bởi thợ và người kiểm tra. 🇯🇵 MẸO: Ở Nhật, thợ được kỳ vọng tự kiểm tra (自主検査 / jishu-kensa) mối hàn của mình bằng thước hàn TRƯỚC khi người kiểm tra chất lượng đến. Chủ động đưa kết quả tự kiểm tra được nể trọng — chờ người kiểm tra tìm ra lỗi thì không.",
    },
    id: {
      q: "Untuk apa 'Yosetsu-geeji' (溶接ゲージ) dipakai di lokasi kerja Jepang?",
      opts: [
        "Memeriksa tekanan tabung gas",
        "Mengukur panjang kaki, throat, undercut, dan penguatan",
        "Mengatur arus mesin las",
        "Mengukur berapa banyak kawat las terpakai",
      ],
      exp: "Yosetsu-geeji (溶接ゲージ) = Alat ukur las. Alat inspeksi esensial berfungsi ganda: mengukur panjang kaki las sudut (脚長), tebal leher (のど厚), tinggi penguatan las (余盛), kedalaman undercut (アンダーカット), dan lainnya. Dipakai saat inspeksi visual (VT) oleh tukang dan inspektor. 🇯🇵 TIPS: Di Jepang, tukang diharapkan memeriksa sendiri (自主検査 / jishu-kensa) lasnya dengan alat ukur SEBELUM inspektor mutu datang. Menunjukkan hasil inspeksi secara proaktif dihargai — menunggu inspektor menemukan masalah tidak.",
    },
  },
  118: {
    vi: {
      q: "Công trường dùng mỏ hàn bán tự động của nhiều hãng (ví dụ Panasonic và Daihen). Bạn có thể đổi bép và chụp khí giữa chúng không?",
      opts: [
        "Được — mọi phụ tùng mỏ hàn Nhật cùng một cỡ chuẩn",
        "Được, miễn là cùng đường kính dây",
        "Không nên khi chưa kiểm — khớp mã phụ tùng với mỏ hàn",
        "Không — chỉ đổi được chụp khí, bép thì không",
      ],
      exp: "Bép (チップ), chụp khí (ノズル), bộ chia khí và ruột dẫn được thiết kế cho từng model mỏ hàn. Hãng khác — thậm chí model khác cùng hãng — có thể khác kích cỡ và ren, nên phụ tùng trông giống vẫn có thể không vừa hoặc lắp lỏng, gây rò khí và hồ quang không ổn định. 🇯🇵 MẸO: Khi đặt phụ tùng ở cửa hàng vật tư hàn (溶接用品店), hãy nói hãng và model mỏ hàn. Mang theo vài bép dự phòng đúng loại trong túi.",
    },
    id: {
      q: "Lokasi kerja memakai torch semi-otomatis dari beberapa merek (misalnya Panasonic dan Daihen). Bisakah tip kontak dan nozzle ditukar di antara keduanya?",
      opts: [
        "Bisa — semua suku cadang torch Jepang ukurannya standar",
        "Bisa, asalkan diameter kawatnya sama",
        "Jangan tanpa memeriksa — cocokkan nomor suku cadang dengan torch",
        "Tidak — hanya nozzle yang bisa ditukar, tip tidak",
      ],
      exp: "Tip kontak (チップ), nozzle (ノズル), orifice, dan liner dirancang untuk model torch tertentu. Merek berbeda — bahkan model berbeda dari merek yang sama — bisa memakai ukuran dan uliran berbeda, sehingga suku cadang yang mirip mungkin tidak pas atau longgar, menyebabkan kebocoran gas dan busur tidak stabil. 🇯🇵 TIPS: Saat memesan di toko perlengkapan las (溶接用品店), sebutkan merek dan model torch. Simpan beberapa tip cadangan jenis yang benar di saku.",
    },
  },
  119: {
    vi: {
      q: "'Furappu-disuku' (フラップディスク) là gì và khi nào dùng thay cho đĩa mài tiêu chuẩn?",
      opts: [
        "Tấm chắn an toàn lắp lên máy mài góc",
        "Bánh chải sắt để tẩy gỉ",
        "Đĩa mỏng để cắt đứt tấm thép",
        "Các lá nhám xếp chồng giúp mài mịn mối hàn",
      ],
      exp: "Furappu-disuku (フラップディスク) = Đĩa nhám lá. Các lá nhám chồng nhau gắn trên đế. Dùng để hòa trộn và làm nhẵn bề mặt hàn, bỏ văng nhẹ và vuốt mép chân hàn — nhẹ hơn đĩa mài phẳng. Để lại bề mặt nhẵn hơn. Phổ biến trong hàn hoàn thiện và thép không gỉ. 🇯🇵 MẸO: Với thép không gỉ (SUS), luôn dùng đĩa nhám hoặc đĩa mài chuyên SUS ghi 'SUS用' hoặc 'ステン用'. Dùng đĩa từng chạm thép carbon sẽ nhiễm bẩn bề mặt SUS bằng hạt sắt, gây đốm gỉ — đây là khuyết tật chất lượng nghiêm trọng gọi là '鉄汚染' (tetsu-osen / nhiễm sắt).",
    },
    id: {
      q: "Apa itu 'Furappu-disuku' (フラップディスク) dan kapan dipakai alih-alih cakram gerinda standar?",
      opts: [
        "Pelindung keselamatan yang dipasang di gerinda sudut",
        "Roda sikat kawat untuk menghilangkan karat",
        "Piringan tipis untuk memotong pelat baja",
        "Lembaran amplas bertumpuk untuk menghaluskan las",
      ],
      exp: "Furappu-disuku (フラップディスク) = Flap disc. Lembaran abrasif bertumpuk yang menempel pada pelat penopang. Dipakai untuk membaurkan dan menghaluskan permukaan las, membuang percikan ringan, dan meratakan kaki las — lebih lembut dari cakram gerinda datar. Meninggalkan hasil permukaan lebih halus. Umum di pekerjaan las finishing dan baja tahan karat. 🇯🇵 TIPS: Untuk baja tahan karat (SUS), selalu pakai flap disc atau cakram gerinda khusus SUS bertanda 'SUS用' atau 'ステン用'. Memakai cakram yang pernah menyentuh baja karbon akan mencemari permukaan stainless dengan partikel besi, menyebabkan bintik karat — cacat mutu serius bernama '鉄汚染' (tetsu-osen / kontaminasi besi).",
    },
  },
  120: {
    vi: {
      q: "Bạn cần chải sắt một mối hàn thép không gỉ (SUS), nhưng chỉ có 'Waiyaa-burashi' (ワイヤーブラシ) loại thép carbon. Dùng tạm một lần có được không?",
      opts: [
        "Không — lông thép carbon gây nhiễm sắt và vết gỉ",
        "Được, miễn là rửa bàn chải bằng nước trước",
        "Không, nhưng chỉ vì nó làm xước bề mặt về thẩm mỹ",
        "Được — vật liệu lông chải không truyền sang kim loại khác",
      ],
      exp: "Waiyaa-burashi (ワイヤーブラシ) = Bàn chải sắt, dùng sau hàn để bỏ xỉ nhẹ, ôxy hóa và văng mịn. Sợi thép carbon nhúng hạt sắt siêu nhỏ vào bề mặt inox, sau đó gỉ và tạo đốm gỉ thấy được — khuyết tật ăn mòn thật, không chỉ thẩm mỹ. Rửa không loại được hạt đã nhúng. Nhiều công trường Nhật giữ bộ bàn chải riêng, đánh màu cho thép carbon và inox để tránh nhiễm chéo. 🇯🇵 MẸO: Với xỉ nặng sau hàn que, dùng búa đục (チッピングハンマー) hoặc máy đục hơi (チッパー) trước, rồi mới dùng bàn chải đúng loại — không bao giờ thay loại bàn chải để tiết kiệm thời gian.",
    },
    id: {
      q: "Anda perlu menyikat kawat las baja tahan karat (SUS), tapi hanya ada 'Waiyaa-burashi' (ワイヤーブラシ) berbahan baja karbon. Boleh dipakai sekali ini saja?",
      opts: [
        "Tidak — bulu baja karbon menyebabkan kontaminasi besi dan bintik karat",
        "Boleh, asalkan sikat dibilas air dulu",
        "Tidak, tapi hanya karena menggores permukaan secara kosmetik",
        "Boleh — bahan bulu sikat tidak berpindah antar logam",
      ],
      exp: "Waiyaa-burashi (ワイヤーブラシ) = Sikat kawat, dipakai setelah mengelas untuk membuang terak ringan, oksidasi, dan percikan halus. Bulu baja karbon menanamkan partikel besi mikroskopis ke permukaan stainless, yang lalu berkarat dan membuat bintik karat terlihat — cacat korosi nyata, bukan sekadar kosmetik. Membilas tak menghilangkan partikel yang tertanam. Banyak lokasi Jepang menyimpan set sikat terpisah berkode warna untuk baja karbon dan stainless guna mencegah kontaminasi silang. 🇯🇵 TIPS: Untuk terak berat setelah las busur, pakai palu ketuk (チッピングハンマー) atau air chipper (チッパー) dulu, lalu ikuti dengan sikat kawat yang benar — jangan pernah menukar jenis sikat demi menghemat waktu.",
    },
  },
  201: {
    vi: {
      q: "Một thợ đàn anh rên 'Kachiage...' (かちあげ) và thực tập sinh cho rằng nó nghĩa là thuật ngữ chính thức 'Tatemuki-shisei' (立向き姿勢 / tư thế đứng) vì cả hai đều chống trọng lực. Thực tập sinh đúng không?",
      opts: [
        "Đúng — kachiage chỉ là tiếng lóng của tư thế đứng",
        "Sai — kachiage là hàn trần; hàn đứng là tư thế khác",
        "Sai — kachiage thật ra là tư thế bằng dễ nhất",
        "Đúng, nhưng chỉ khi hàn ống, không phải hàn tấm",
      ],
      exp: "Kachiage (かちあげ) là lóng riêng cho 上向き姿勢 (Uwamuki-shisei) = tư thế TRẦN — súng giữ trên đầu, văng rơi xuống người. Tatemuki-shisei (立向き姿勢) là tư thế ĐỨNG — hàn trên tường đứng, lên hoặc xuống. Cả hai đều chống trọng lực theo cách nào đó, nhưng là các tư thế riêng với kỹ thuật khác nhau, và nhầm lóng/chính thức trên công trường gây hiểu lầm thật. 🇯🇵 MẸO: Thợ Nhật quấn khăn quanh cổ nhét vào cổ áo khi làm kachiage — văng rơi xuống gáy vừa đau vừa nguy cơ cháy. Mẹo đơn giản này phổ biến khắp công trường Nhật.",
    },
    id: {
      q: "Seorang senior mengeluh 'Kachiage...' (かちあげ) dan peserta magang mengira itu berarti istilah resmi 'Tatemuki-shisei' (立向き姿勢 / posisi tegak) karena keduanya melawan gravitasi. Apakah peserta magang benar?",
      opts: [
        "Ya — kachiage hanya kata gaul untuk posisi tegak",
        "Tidak — kachiage berarti overhead; tegak adalah posisi lain",
        "Tidak — kachiage sebenarnya posisi datar yang mudah",
        "Ya, tapi hanya untuk sambungan pipa, bukan pelat",
      ],
      exp: "Kachiage (かちあげ) adalah slang khusus untuk 上向き姿勢 (Uwamuki-shisei) = posisi OVERHEAD — gun dipegang di atas kepala, percikan jatuh menimpa Anda. Tatemuki-shisei (立向き姿勢) adalah posisi TEGAK — mengelas pada dinding berdiri, naik atau turun. Keduanya melawan gravitasi, tapi posisi berbeda dengan teknik berbeda, dan mencampur istilah slang/resmi di lokasi menyebabkan salah paham nyata. 🇯🇵 TIPS: Tukang las Jepang melilitkan handuk di leher dan menyelipkannya ke kerah untuk kerja kachiage — percikan yang jatuh ke tengkuk menyakitkan sekaligus bahaya kebakaran. Trik sederhana ini universal di lokasi Jepang.",
    },
  },
  202: {
    vi: {
      q: "Giám sát nói các mối hàn đứng (立向き / tatemuki) hôm nay phải hàn '上進' (joshin, hàn đứng lên) chứ không phải '下進' (kashin, hàn đứng xuống). Vì sao Nhật thường ưu tiên hàn đứng lên cho kết cấu?",
      opts: [
        "Hàn xuống, vì không cần kỹ thuật lấp miệng hồ quang",
        "Hàn xuống, vì nhanh hơn và ngấu sâu hơn",
        "Hàn lên, vì ngấu và nóng chảy tốt hơn",
        "Không hướng nào — Nhật chỉ dùng hàn xuống cho mối đứng",
      ],
      exp: "Hàn đứng có hai hướng: 立向上進 (hàn đứng LÊN) và 立向下進 (hàn đứng XUỐNG). Hàn xuống nhanh hơn nhưng ngấu nông hơn và dễ không ngấu; hàn lên chậm hơn nhưng ngấu và nóng chảy tốt hơn, nên thường được ưu tiên cho mối hàn kết cấu. 🇯🇵 MẸO: Trong tài liệu chính thức (WPS, biên bản kiểm tra) luôn dùng thuật ngữ chính thức 立向上進 / 立向下進 — tránh tiếng lóng công trường.",
    },
    id: {
      q: "Supervisor mengatakan las vertikal (立向き / tatemuki) hari ini harus '上進' (joshin, vertikal naik), bukan '下進' (kashin, vertikal turun). Mengapa Jepang umumnya lebih memilih vertikal naik untuk pekerjaan struktur?",
      opts: [
        "Vertikal turun, karena tidak perlu teknik mengisi kawah",
        "Vertikal turun, karena lebih cepat dan penetrasinya lebih dalam",
        "Vertikal naik, karena fusi dan penetrasinya lebih baik",
        "Tidak keduanya — Jepang hanya pakai vertikal turun",
      ],
      exp: "Las vertikal punya dua arah: 立向上進 (vertikal NAIK) dan 立向下進 (vertikal TURUN). Vertikal turun lebih cepat tetapi penetrasinya dangkal dan berisiko kurang fusi; vertikal naik lebih lambat tetapi fusi dan penetrasinya lebih baik, sehingga umumnya dipilih untuk las struktur. 🇯🇵 TIPS: Dalam dokumen resmi (WPS, laporan inspeksi) selalu gunakan istilah resmi 立向上進 / 立向下進 — hindari bahasa gaul lokasi di dokumen QC.",
    },
  },
  203: {
    vi: {
      q: "Đàn anh kiểm tra rãnh hàn và nói lượt tiếp theo là 'Shiage' (仕上げ / しあげ). Điều này nghĩa là bạn làm gì tiếp?",
      opts: [
        "Mài bỏ hết và hàn lại lượt chân từ đầu",
        "Mối hàn đã xong — không cần thêm lượt nào",
        "Có vết nứt — dừng lại và gọi người kiểm tra",
        "Lượt tiếp theo là lớp phủ tạo bề mặt mối hàn",
      ],
      exp: "Shiage (仕上げ) = hoàn thiện. Trong hàn rãnh nhiều lượt, 仕上げ層 (shiage-sou / lớp phủ) là lớp cuối tạo bề mặt mối hàn. Các lượt trước đó là lượt chân (初層 / shosou) và các lượt điền đầy (中間層 / chuukan-sou). 🇯🇵 MẸO: Cẩn thận hơn với độ rộng, độ cao và chân đường hàn ở lớp phủ — đây là bề mặt người kiểm tra đánh giá đầu tiên khi kiểm tra bằng mắt.",
    },
    id: {
      q: "Senior memeriksa alur dan mengatakan pass berikutnya adalah 'Shiage' (仕上げ / しあげ). Apa artinya untuk langkah Anda selanjutnya?",
      opts: [
        "Gerinda semuanya dan mulai root pass lagi",
        "Las sudah selesai — tidak perlu pass lagi",
        "Ada retak — berhenti dan panggil inspektur",
        "Pass berikutnya adalah cap pass yang membentuk permukaan",
      ],
      exp: "Shiage (仕上げ) = penyelesaian. Pada las alur multi-pass, 仕上げ層 (shiage-sou / cap pass) adalah lapisan terakhir yang membentuk permukaan las. Pass sebelumnya adalah root pass (初層 / shosou) dan pass pengisi (中間層 / chuukan-sou). 🇯🇵 TIPS: Lebih teliti pada lebar, tinggi, dan kaki manik di cap pass — inilah permukaan yang pertama dinilai inspektur dalam uji visual.",
    },
  },
  204: {
    vi: {
      q: "Giám sát nhìn mối hàn tập của bạn và hét 'Mimizu!' (ミミズ). Sai ở đâu?",
      opts: [
        "Đường hàn ngoằn ngoèo trái phải như con giun",
        "Lưu lượng khí quá cao thổi bay vũng hàn",
        "Bạn dùng sai loại dây cho kim loại này",
        "Mối hàn quá sâu và bị thủng",
      ],
      exp: "Mimizu (ミミズ) = con giun đất. Dùng để mô tả đường hàn ngoằn ngoèo, không đều, lượn trái phải như con giun. Do di chuyển súng không vững, tốc độ không đều, hoặc tay run. Khắc phục: tập đường hàn thẳng (stringer) đến khi thật thẳng trước khi thử đường lượn. 🇯🇵 MẸO: Huấn luyện viên Nhật hay nói 'ashi o tsukae' (足を使え / dùng chân) — nghĩa là đừng chỉ cử động tay; ổn định toàn thân và di chuyển thân mượt cho đường dài. Tì khuỷu tay vào người cải thiện độ thẳng rõ rệt.",
    },
    id: {
      q: "Supervisor melihat las latihan Anda dan berteriak 'Mimizu!' (ミミズ). Apa yang salah?",
      opts: [
        "Manik meliuk ke kiri dan kanan seperti cacing",
        "Aliran gas terlalu tinggi dan meniup kolam las",
        "Anda memakai kawat yang salah untuk logam ini",
        "Las terlalu dalam dan tembus",
      ],
      exp: "Mimizu (ミミズ) = cacing tanah. Dipakai untuk menggambarkan jalur yang bergoyang, tak rata, berkelok kiri-kanan seperti cacing. Disebabkan gerakan gun tak stabil, kecepatan tak konsisten, atau tangan gemetar. Perbaikan: latih jalur lurus (stringer) sampai benar-benar lurus sebelum mencoba jalur ayun (weave). 🇯🇵 TIPS: Pelatih las Jepang sering berkata 'ashi o tsukae' (足を使え / pakai kakimu) — artinya jangan hanya menggerakkan lengan; stabilkan seluruh tubuh dan gerakkan tubuh mulus untuk jalur panjang. Menahan siku ke tubuh sangat meningkatkan kelurusan jalur.",
    },
  },
  205: {
    vi: {
      q: "Một thợ đàn anh nhìn đường hàn của bạn, lắc đầu và nói 'Gatagata!' (ガタガタ). Ý anh ấy là gì?",
      opts: [
        "Tốc độ hàn quá nhanh nên đường hàn quá mỏng",
        "Đường hàn thô, không đều, không có nhịp ổn định",
        "Máy hàn bị hỏng và cần sửa",
        "Kim loại cơ bản có vết nứt cạnh đường hàn",
      ],
      exp: "Gatagata (ガタガタ) = thô ráp, lạch cạch, không nhất quán. Mô tả đường hàn có bề rộng, chiều cao và vân gợn không đều — không có nhịp hay kiểm soát. Khác Mimizu (thẳng nhưng ngoằn ngoèo) — Gatagata là cả đường hàn lộn xộn. Cả hai đều là phản hồi bạn cần nghe và cải thiện. 🇯🇵 MẸO: Văn hóa hàn Nhật đề cao 職人気質 (shokunin-kishitsu / tinh thần nghệ nhân) — một shokunin thật đặt đường hàn đều tăm tắp mọi lần. Khi đàn anh nói 'gatagata', hãy nghiêm túc. Hỏi 'doko ga warui desu ka?' (どこが悪いですか？ / chỗ nào cụ thể có vấn đề?) — đàn anh Nhật nể người muốn hiểu và tiến bộ.",
    },
    id: {
      q: "Seorang senior melihat jalur Anda, menggeleng, dan berkata 'Gatagata!' (ガタガタ). Apa maksudnya?",
      opts: [
        "Kecepatan terlalu cepat, sehingga manik terlalu tipis",
        "Manik kasar dan tidak rata, tanpa ritme yang stabil",
        "Mesin las rusak dan perlu diperbaiki",
        "Logam induk retak di samping manik",
      ],
      exp: "Gatagata (ガタガタ) = kasar, berderak, tak konsisten. Menggambarkan jalur dengan lebar, tinggi, dan pola riak tak beraturan — tanpa irama atau kendali konsisten. Berbeda dari Mimizu (lurus tapi bergoyang) — Gatagata berarti seluruh jalur berantakan. Keduanya masukan yang perlu Anda dengar dan perbaiki. 🇯🇵 TIPS: Budaya las Jepang menjunjung 職人気質 (shokunin-kishitsu / jiwa pengrajin) — shokunin sejati membuat jalur seragam sempurna setiap kali. Saat senior berkata 'gatagata', tanggapi serius. Tanyakan 'doko ga warui desu ka?' (どこが悪いですか？ / bagian mana tepatnya yang bermasalah?) — senior Jepang menghargai pekerja yang ingin memahami dan berkembang.",
    },
  },
  206: {
    vi: {
      q: "Sau khi hàn một tấm lớn, giám sát nói 'Hizumi ga deta!' (歪みが出た！). Điều gì đã xảy ra?",
      opts: [
        "Mối hàn đã đạt kiểm tra — làm tốt",
        "Khí bảo vệ hết giữa chừng khi hàn",
        "Nhiệt hàn làm tấm bị cong vênh",
        "Xuất hiện vết nứt dọc tâm mối hàn",
      ],
      exp: "Hizumi (歪み) = biến dạng / vênh. Khi hàn, nhiệt mạnh làm kim loại giãn rồi co không đều khi nguội — làm vênh tấm. Càng nhiều lượt = nhiều nhiệt = nhiều biến dạng. Giải pháp: thứ tự đính hàn đúng, hàn lùi (後退法), tạo ngược trước (逆ひずみ法), và giảm nhiệt đầu vào. 🇯🇵 MẸO: Trong chế tạo Nhật, kiểm soát hizumi được coi là dấu hiệu thợ giỏi. 'Thứ tự đính' (仮付け順序) do giám sát quyết và phải tuân đúng — đính bừa của người mới là nguyên nhân số 1 gây vênh tấm lớn ở công trường Nhật.",
    },
    id: {
      q: "Setelah mengelas pelat besar, supervisor berkata 'Hizumi ga deta!' (歪みが出た！). Apa yang terjadi?",
      opts: [
        "Las lulus inspeksi — kerja bagus",
        "Gas pelindung habis saat mengelas",
        "Panas las membuat pelat melengkung",
        "Muncul retak di sepanjang garis tengah las",
      ],
      exp: "Hizumi (歪み) = distorsi / melengkung. Saat mengelas, panas hebat membuat logam memuai lalu menyusut tak merata saat mendingin — ini melengkungkan pelat. Makin banyak pass = makin panas = makin banyak distorsi. Solusi: urutan tack yang benar, las mundur (後退法), pre-setting (逆ひずみ法), dan meminimalkan masukan panas. 🇯🇵 TIPS: Dalam fabrikasi Jepang, mengendalikan hizumi dianggap tanda tukang mahir. 'Urutan tack' (仮付け順序) ditentukan supervisor dan harus diikuti persis — tack acak oleh pekerja baru adalah penyebab #1 distorsi pelat besar di lokasi Jepang.",
    },
  },
  207: {
    vi: {
      q: "Sau khi hàn TIG một mối thép không gỉ không dùng thuốc, đàn anh vẫn nói 'Noro tore!' (ノロとれ！). Điều này có hợp lý không, và bạn thực sự nên kiểm tra gì?",
      opts: [
        "Có — ở đây 'noro' nghĩa là kiểm khí, không phải xỉ",
        "Không — 'noro tore' chỉ dùng cho hàn FCAW",
        "Có — TIG để lại nhiều xỉ, gõ như hàn que",
        "Không đúng nghĩa đen — TIG không có xỉ; kiểm oxit/màu nhiệt",
      ],
      exp: "Noro (ノロ) = xỉ, cặn đóng vảy từ các phương pháp có THUỐC như hàn que (SMAW) hoặc lõi thuốc (FCAW). Hàn TIG (GTAW) không dùng thuốc và không tạo xỉ — nên 'noro tore' theo nghĩa đen không áp dụng. Nếu đàn anh nói vậy khi làm TIG, họ có thể dùng lỏng lẻo với nghĩa 'làm sạch bề mặt', có lẽ chỉ vảy ôxít hoặc màu nhiệt, cần xử lý khác (bàn chải inox hoặc tẩy axit), không phải gõ. 🇯🇵 MẸO: Ở một số vùng Nhật, thợ nói 'kasu' (カス) thay 'noro' cho xỉ — cùng nghĩa, khác thổ ngữ. Nhưng luôn xác nhận thứ trên bề mặt thực sự là gì trước khi cầm búa đục.",
    },
    id: {
      q: "Setelah las TIG sambungan baja tahan karat tanpa fluks, senior tetap berkata 'Noro tore!' (ノロとれ！). Apakah ini masuk akal, dan apa yang sebenarnya harus Anda periksa?",
      opts: [
        "Ya — di sini 'noro' berarti cek aliran gas, bukan terak",
        "Tidak — 'noro tore' hanya untuk las FCAW",
        "Ya — TIG menghasilkan banyak terak, jadi chip seperti las elektroda",
        "Tidak harfiah — TIG tanpa terak; cek oksida/warna panas",
      ],
      exp: "Noro (ノロ) = terak, residu berkerak dari proses berbasis FLUKS seperti las busur (SMAW) atau flux-cored (FCAW). Las TIG (GTAW) tak memakai fluks dan tak menghasilkan terak — jadi 'noro tore' secara harfiah tak berlaku. Jika senior mengatakannya saat kerja TIG, mereka mungkin memakainya longgar untuk 'bersihkan permukaan', kemungkinan merujuk kerak oksida atau heat tint, yang perlu penanganan berbeda (sikat stainless atau pickling), bukan diketuk. 🇯🇵 TIPS: Di beberapa daerah Jepang, pekerja mengucapkan 'kasu' (カス) alih-alih 'noro' untuk terak — sama, beda dialek lokasi. Tapi selalu pastikan apa yang sebenarnya ada di permukaan sebelum meraih palu ketuk.",
    },
  },
  208: {
    vi: {
      q: "'Karitsuke' (仮付け) hoặc 'Tenzuke' (点付け) là gì và vì sao quan trọng?",
      opts: [
        "Mối hàn đính ngắn giữ chi tiết trước khi hàn chính",
        "Một loại hàn góc chỉ dùng ở góc",
        "Lớp phủ cuối cùng hoàn thiện mối hàn",
        "Khuyết tật do hàn sai tư thế",
      ],
      exp: "Karitsuke (仮付け) / Tenzuke (点付け) = Hàn đính. Mối hàn ngắn cách quãng giữ chi tiết đúng vị trí trước khi hàn đầy đủ. QUAN TRỌNG: khuyết tật ở mối đính (nứt, rỗ) bị hấp thụ vào mối hàn cuối và trở thành vấn đề nghiêm trọng. Đối xử với mối đính cẩn thận như mối hàn thật. Ở Nhật điều này được thực thi nghiêm. 🇯🇵 MẸO: Giám sát Nhật đôi khi thử người mới bằng cách xem cách họ đính — đính ẩu, nhanh với hố và rỗ lộ rõ báo hiệu người cẩu thả. Chiều dài đính tối thiểu, lấp hố đúng và khoảng cách đúng (指定ピッチ) đều bị kiểm. Chất lượng đính = chất lượng công việc ở Nhật.",
    },
    id: {
      q: "Apa itu 'Karitsuke' (仮付け) atau 'Tenzuke' (点付け) dan mengapa penting?",
      opts: [
        "Las titik pendek untuk menahan komponen sebelum dilas",
        "Jenis las sudut yang hanya dipakai di sudut",
        "Pass penutup terakhir yang menyelesaikan las",
        "Cacat karena mengelas di posisi yang salah",
      ],
      exp: "Karitsuke (仮付け) / Tenzuke (点付け) = Tack weld. Las pendek berselang untuk menahan bagian pada posisi benar sebelum las penuh. PENTING: cacat tack (retak, porositas) terserap ke las akhir dan menjadi masalah serius. Perlakukan tack seperti las penuh. Di Jepang ini ditegakkan ketat. 🇯🇵 TIPS: Supervisor Jepang kadang menguji pekerja baru dengan mengamati cara mereka membuat karitsuke — tack ceroboh dan cepat dengan kawah serta porositas jelas menandakan pekerja ceroboh. Panjang tack minimum, pengisian kawah benar, dan jarak benar (指定ピッチ) semua diperiksa. Mutu tack = mutu kerja di Jepang.",
    },
  },
  209: {
    vi: {
      q: "Giám sát nói 'Kaisaki wo tsukure!' (開先を作れ！). Bạn được yêu cầu làm gì?",
      opts: [
        "Cắt một đoạn dây hàn mới",
        "Vát mép tấm theo góc trên bản vẽ",
        "Xịt chống bắn tóe lên mối nối",
        "Vẽ ký hiệu hàn lên bản vẽ",
      ],
      exp: "Kaisaki (開先) = Rãnh / chuẩn bị mối nối. Mép tấm được vát hoặc tạo hình trước khi hàn để hồ quang và kim loại bù chạm được chân, đảm bảo ngấu hoàn toàn. Các loại phổ biến: chữ I (I形), chữ V (V形), chữ X (X形), chữ U (U形). Hình dạng và kích thước kaisaki được quy định trên bản vẽ. 🇯🇵 MẸO: Góc kaisaki và mặt chân (ルートフェース) phải khớp WPS chính xác. Ở Nhật, chuẩn bị rãnh được kiểm bằng 角度ゲージ (thước góc) và mặt chân đo bằng thước cặp — lệch quá dung sai phải mài lại trước khi bắt đầu hàn.",
    },
    id: {
      q: "Supervisor berkata 'Kaisaki wo tsukure!' (開先を作れ！). Anda diminta melakukan apa?",
      opts: [
        "Potong kawat las baru",
        "Bevel tepi pelat sesuai sudut di gambar",
        "Semprot anti-spatter ke sambungan",
        "Gambar simbol las di gambar kerja",
      ],
      exp: "Kaisaki (開先) = Alur / persiapan sambungan. Tepi pelat yang dibevel atau dibentuk sebelum mengelas agar busur dan logam pengisi mencapai akar untuk penetrasi penuh. Jenis umum: I-groove (I形), V-groove (V形), X-groove (X形), U-groove (U形). Bentuk dan dimensi kaisaki ditentukan pada gambar. 🇯🇵 TIPS: Sudut kaisaki dan root face (ルートフェース) harus cocok persis dengan WPS. Di Jepang, persiapan alur diperiksa dengan 角度ゲージ (alat ukur sudut) dan root face diukur dengan jangka sorong — penyimpangan di luar toleransi harus digerinda ulang sebelum pengelasan dimulai.",
    },
  },
  210: {
    vi: {
      q: "Đàn anh khen lượt chân của bạn: 'Uranami kirei da na!' (裏波きれいだな！). Bạn đã đạt được gì?",
      opts: [
        "Bề mặt trên mối hàn mịn và sạch",
        "Đường hàn thẳng tắp từ đầu đến cuối",
        "Gân mặt sau đều, cho thấy ngấu chân hoàn toàn",
        "Xỉ được gõ sạch hết sau lượt chân",
      ],
      exp: "Uranami (裏波) = bọng ngược. Khi lượt chân ngấu hoàn toàn xuyên mối nối và tạo một đường hàn sạch, đều ở MẶT SAU. Đây là dấu hiệu ngấu chân hoàn hảo — rất được coi trọng, nhất là hàn ống và bình áp lực. Khó đạt: cần đúng khe hở chân, dòng điện và tốc độ. 🇯🇵 MẸO: 'Uranami' đẹp là niềm tự hào của thợ hàn Nhật. Trong thi chứng chỉ JIS hàn ống, mặt sau (bọng ngược) được kiểm bằng mắt và bằng chụp X-quang (RT). Uranami không đều, lồi quá hoặc lõm (chảy xệ) có thể trượt — hãy luyện kiểm soát bể chân.",
    },
    id: {
      q: "Senior memuji root pass Anda: 'Uranami kirei da na!' (裏波きれいだな！). Apa yang Anda capai?",
      opts: [
        "Permukaan atas las halus dan bersih",
        "Manik lurus sempurna dari awal sampai akhir",
        "Manik belakang rata, menunjukkan penetrasi akar penuh",
        "Semua terak bersih setelah root pass",
      ],
      exp: "Uranami (裏波) = back bead. Saat root pass menembus penuh sambungan dan membentuk jalur bersih dan rata di SISI BELAKANG. Ini tanda penetrasi akar sempurna — sangat dihargai, terutama las pipa dan bejana tekan. Sulit dicapai: perlu root gap, arus, dan kecepatan yang tepat. 🇯🇵 TIPS: 'Uranami' yang indah adalah kebanggaan tukang las Jepang. Dalam ujian sertifikasi JIS las pipa, sisi belakang (back bead) diperiksa secara visual dan dengan radiografi (RT). Uranami tak rata, terlalu cembung, atau cekung (melorot) bisa gagal — latih pengendalian kolam akar.",
    },
  },
  211: {
    vi: {
      q: "Trong lần thăm công trường, người kiểm tra chỉ vào mối nối và nói 'Mechigai ga aru!' (目違いがある！). Vấn đề là gì?",
      opts: [
        "Hỗn hợp khí bảo vệ không đúng cho công việc",
        "Dùng sai phương pháp hàn cho mối nối này",
        "Phần gia cường mối hàn quá cao",
        "Hai mép tấm không bằng nhau — một bên cao hơn",
      ],
      exp: "Mechigai (目違い) = lệch mép / không khớp. Hai tấm hàn với nhau không cùng độ cao — một mép cao hơn. Điều này tạo phân bố ứng suất không đều và có thể dẫn đến khuyết tật. Tiêu chuẩn JIS quy định độ lệch tối đa cho phép tùy chiều dày tấm. Khắc phục bằng kẹp trước khi hàn. 🇯🇵 MẸO: Độ lệch cho phép tùy theo quy chuẩn và chiều dày tấm — hãy xem bản vẽ hoặc WPS, đừng dựa vào kinh nghiệm truyền miệng. Người kiểm tra dùng thước thẳng và dưỡng để kiểm trước lượt hàn chân.",
    },
    id: {
      q: "Saat kunjungan lokasi, inspektor menunjuk sambungan dan berkata 'Mechigai ga aru!' (目違いがある！). Apa masalahnya?",
      opts: [
        "Campuran gas pelindung salah untuk pekerjaan ini",
        "Proses las yang salah dipakai di sambungan ini",
        "Penguatan las terlalu tinggi",
        "Tepi pelat tidak rata — satu lebih tinggi",
      ],
      exp: "Mechigai (目違い) = misalignment / tidak sejajar. Kedua pelat yang dilas tidak sama tinggi — satu tepi lebih tinggi. Ini menciptakan distribusi tegangan tak merata dan bisa menimbulkan cacat. Standar JIS menentukan misalignment maksimum sesuai tebal pelat. Perbaiki dengan klem sebelum mengelas. 🇯🇵 TIPS: Ketidaksejajaran yang diizinkan tergantung kode dan tebal pelat — periksa gambar atau WPS, bukan aturan kira-kira. Inspektur memeriksanya dengan mistar lurus dan pengukur sebelum root pass.",
    },
  },
  212: {
    vi: {
      q: "Tổ trưởng kiểm tra mối nối tấm mỏng và nói 'Yoochi shita!' (溶落ちした！). Sai ở đâu?",
      opts: [
        "Hồ quang làm chảy thủng tấm, để lại lỗ",
        "Đường hàn quá hẹp so với mối nối",
        "Mối hàn đã hoàn thành hoàn hảo",
        "Xỉ chưa được gõ giữa các lượt",
      ],
      exp: "Yoochi (溶落ち) = thủng / chảy xuyên. Hồ quang quá nóng, quá chậm, hoặc khe hở chân quá rộng — kim loại nền chảy xuyên hoàn toàn, để lại lỗ. Hay gặp với tấm mỏng hoặc khe chân rộng. Phòng ngừa: giảm dòng, tăng tốc độ, dùng thanh lót đáy (裏当て金), hoặc giảm khe chân. 🇯🇵 MẸO: Yoochi ở lượt chân trong thi chứng chỉ JIS là trượt tự động. Nếu thấy bể hàn quá loãng và bắt đầu rớt, tăng tốc độ ngay — đừng đứng yên. Sửa lỗ yoochi cần mài ra, đính lại khe, và hàn lại — một sự xấu hổ tốn thời gian trong lúc thi.",
    },
    id: {
      q: "Mandor memeriksa sambungan pelat tipis dan berkata 'Yoochi shita!' (溶落ちした！). Apa yang salah?",
      opts: [
        "Busur melelehkan pelat sampai tembus dan berlubang",
        "Manik terlalu sempit untuk sambungan",
        "Las selesai dengan sempurna",
        "Terak tidak dibuang di antara pass",
      ],
      exp: "Yoochi (溶落ち) = tembus bakar / melt-through. Busur terlalu panas, terlalu lambat, atau root gap terlalu lebar — logam dasar meleleh menembus sepenuhnya, meninggalkan lubang. Lebih umum pada pelat tipis atau root gap lebar. Pencegahan: turunkan arus, naikkan kecepatan jalan, pakai backing bar (裏当て金), atau perkecil root gap. 🇯🇵 TIPS: Yoochi pada root pass saat ujian sertifikasi JIS adalah kegagalan otomatis. Jika kolam terasa terlalu cair dan mulai turun, segera naikkan kecepatan — jangan diam. Memperbaiki lubang yoochi perlu digerinda keluar, tack celahnya, dan dilas ulang — hal memalukan yang memakan waktu saat ujian.",
    },
  },
  213: {
    vi: {
      q: "Khi hàn thép không gỉ, giám sát nói 'Ura-gasu wo shiro!' (裏ガスをしろ！). Bạn cần chuẩn bị gì?",
      opts: [
        "Tăng gấp đôi lưu lượng khí bảo vệ mặt trước",
        "Bảo vệ mặt sau mối nối bằng khí argon",
        "Đổi khí bảo vệ từ argon sang CO₂",
        "Bôi thuốc hàn dạng kem lên mặt sau mối nối",
      ],
      exp: "Ura-gasu (裏ガス) = thổi khí mặt sau / che mặt sau. Khi hàn inox hoặc titan, mặt sau mối hàn phải được che bằng Argon hoặc Nitơ để ngăn ôxy hóa. Thiếu nó, mặt sau ôxy hóa — tạo màu cầu vồng (Tenpaa-karaa / テンパーカラー) và giảm mạnh khả năng chống ăn mòn. 🇯🇵 MẸO: Lưu lượng và thời gian thổi khí mặt sau được quy định trong WPS. Lỗi thường gặp là thổi chưa đủ lâu trước khi mồi hồ quang — oxy còn trong ống vẫn làm oxy hóa lớp chân. Với đường ống quan trọng, nồng độ oxy bên trong được kiểm bằng máy đo.",
    },
    id: {
      q: "Saat mengelas baja tahan karat, supervisor berkata 'Ura-gasu wo shiro!' (裏ガスをしろ！). Apa yang perlu Anda siapkan?",
      opts: [
        "Gandakan aliran gas pelindung di sisi depan",
        "Lindungi sisi belakang sambungan dengan gas argon",
        "Ganti gas pelindung dari argon ke CO₂",
        "Oleskan pasta fluks di sisi belakang sambungan",
      ],
      exp: "Ura-gasu (裏ガス) = back purge / pelindung belakang. Saat mengelas stainless atau titanium, sisi belakang las harus dilindungi dengan Argon atau Nitrogen untuk mencegah oksidasi. Tanpanya, permukaan belakang teroksidasi — menimbulkan warna pelangi (Tenpaa-karaa / テンパーカラー) dan sangat menurunkan ketahanan korosi. 🇯🇵 TIPS: Laju aliran dan waktu purge sisi belakang ditentukan di WPS. Kesalahan umum adalah purge kurang lama sebelum menyalakan busur — oksigen yang tersisa di pipa tetap mengoksidasi akar las. Untuk pipa kritis, kadar oksigen di dalam diperiksa dengan alat ukur.",
    },
  },
  214: {
    vi: {
      q: "Bạn hàn inox không thổi khí mặt sau và giám sát thấy màu cầu vồng ở mặt sau. Anh ấy nói 'Tenpaa-karaa da!' (テンパーカラーだ！). Điều này cho thấy gì?",
      opts: [
        "Chất lượng tuyệt vời — màu sắc chứng tỏ ngấu hoàn toàn",
        "Bình thường với inox — không cần xử lý",
        "Oxy hóa làm giảm khả năng chống ăn mòn",
        "Bằng chứng khí mặt sau đang hoạt động tốt",
      ],
      exp: "Tenpaa-karaa (テンパーカラー) = màu nhiệt / màu tôi. Trên inox: Vàng = nhẹ (chấp nhận ở một số quy chuẩn), Xanh = ôxy hóa đáng kể, Tím/Xám = nặng (chống ăn mòn rất kém). Nguyên nhân: che khí mặt sau không đủ hoặc nhiệt đầu vào quá lớn. Phải loại bỏ cơ học hoặc hóa học ở ứng dụng quan trọng về ăn mòn. 🇯🇵 MẸO: Ở nhà máy hóa chất và chế biến thực phẩm Nhật, tenpaa-karaa trên bề mặt hàn SUS là lỗi nghiêm trọng — kể cả màu vàng cũng có thể bị từ chối. Cách xử: 酸洗い (sansarai / tẩy axit) bằng hồ axit hỗn hợp hoặc đánh bóng điện. Ở công trường xây dựng, màu vàng nhạt thường chấp nhận — luôn xác nhận tiêu chí nghiệm thu với giám sát QC trước khi làm inox.",
    },
    id: {
      q: "Anda mengelas stainless tanpa back purge dan supervisor melihat warna pelangi di belakang. Ia berkata 'Tenpaa-karaa da!' (テンパーカラーだ！). Apa artinya?",
      opts: [
        "Mutu sangat baik — warnanya membuktikan penetrasi penuh",
        "Normal untuk stainless — tidak perlu tindakan",
        "Oksidasi yang menurunkan ketahanan korosi",
        "Bukti gas belakang bekerja dengan benar",
      ],
      exp: "Tenpaa-karaa (テンパーカラー) = heat tint / warna temper. Pada stainless: Emas = ringan (diterima di beberapa kode), Biru = oksidasi signifikan, Ungu/Abu = parah (ketahanan korosi sangat buruk). Penyebab: pelindung gas belakang kurang atau masukan panas berlebih. Harus dihilangkan secara mekanis atau kimiawi pada aplikasi kritis korosi. 🇯🇵 TIPS: Di pabrik kimia dan pengolahan makanan Jepang, tenpaa-karaa pada permukaan las SUS adalah kegagalan kritis — bahkan warna emas bisa ditolak. Solusinya 酸洗い (sansarai / acid pickling) dengan pasta asam campuran atau electropolishing. Di lokasi konstruksi, tint emas tipis sering diterima — selalu konfirmasi kriteria penerimaan dengan supervisor QC sebelum mengerjakan stainless.",
    },
  },
  215: {
    vi: {
      q: "Giám sát nói 'Hatsuri shiro!' (ハツリしろ！). Bạn phải làm gì?",
      opts: [
        "Tăng tốc độ cấp dây cho lượt tiếp",
        "Xịt chống bắn tóe lên mối nối trước khi hàn",
        "Bôi thuốc hàn lên mối nối để chống rỗ",
        "Đục hoặc mài bỏ phần hàn lỗi để hàn lại",
      ],
      exp: "Hatsuri (ハツリ) = khoét hoặc đục bỏ kim loại hàn. Khi mối hàn trượt kiểm tra, phần lỗi phải được loại bỏ hoàn toàn trước khi hàn lại. Cách: gouging hồ quang khí (ガウジング), mài bằng Bo-gura (棒グラ), hoặc đục. Vùng đó phải sạch đến kim loại trần trước khi hàn lại. 🇯🇵 MẸO: Gouging hồ quang khí (ガウジング) để lại bề mặt nhiễm carbon — sau khi gouging, PHẢI mài bề mặt để bỏ lớp carbon (カーボン除去 / kabon-jokyo) trước khi hàn lại. Hàn đè lên vết gouge nhiễm carbon mà không mài gây rỗ khí và lẫn tạp. Bước này người mới hay bỏ và gây trượt lặp lại.",
    },
    id: {
      q: "Supervisor berkata 'Hatsuri shiro!' (ハツリしろ！). Apa yang harus Anda lakukan?",
      opts: [
        "Naikkan kecepatan kawat untuk pass berikutnya",
        "Semprot anti-spatter ke sambungan sebelum mengelas",
        "Oleskan fluks ke sambungan untuk mencegah porositas",
        "Keruk atau gerinda las yang buruk agar bisa diulang",
      ],
      exp: "Hatsuri (ハツリ) = mengorek atau memahat keluar logam las. Saat las gagal inspeksi, bagian cacat harus dibuang sepenuhnya sebelum dilas ulang. Metode: air arc gouging (ガウジング), gerinda dengan Bo-gura (棒グラ), atau memahat. Area harus bersih hingga logam telanjang sebelum dilas ulang. 🇯🇵 TIPS: Air arc gouging (ガウジング) meninggalkan permukaan terkontaminasi karbon — setelah gouging, Anda HARUS menggerinda permukaan untuk membuang lapisan karbon (カーボン除去 / kabon-jokyo) sebelum dilas ulang. Mengelas di atas gouge terkontaminasi karbon tanpa menggerinda menyebabkan porositas dan inklusi. Langkah ini sering dilewati pekerja baru dan menyebabkan kegagalan berulang.",
    },
  },
  216: {
    vi: {
      q: "Người kiểm tra nói 'Torinao-shi da!' (取り直しだ！). Điều này có nghĩa gì với thợ hàn?",
      opts: [
        "Mối hàn hoặc đoạn đó phải bỏ đi và hàn lại",
        "Hàn thêm một lớp phủ lên trên",
        "Mối hàn hoàn hảo và đã được duyệt",
        "Chỉ đổi thông số máy rồi làm tiếp",
      ],
      exp: "Torinao-shi (取り直し) = làm lại / làm mới. Mối hàn bị từ chối và phải loại bỏ hoàn toàn rồi hàn lại. Tốn thời gian, vật liệu và uy tín. Trong văn hóa chất lượng Nhật, làm lại được xem rất nghiêm túc — nó ảnh hưởng đánh giá thợ. Phòng ngừa: làm đúng ngay lần đầu. 🇯🇵 MẸO: Nhiều công ty Nhật theo dõi việc làm lại (手直し / tenaoshi) và truy khuyết tật về mối hàn và thợ hàn. Được biết đến là người làm sạch đẹp ngay lần đầu là uy tín tốt nhất bạn có thể xây dựng.",
    },
    id: {
      q: "Inspektor berkata 'Torinao-shi da!' (取り直しだ！). Apa artinya bagi tukang las?",
      opts: [
        "Las atau bagiannya harus dibuang dan diulang",
        "Tambah satu pass penutup di atas las",
        "Las sempurna dan sudah disetujui",
        "Cukup ubah setelan mesin lalu lanjutkan",
      ],
      exp: "Torinao-shi (取り直し) = rework / ulang. Las ditolak dan harus dibuang sepenuhnya lalu dilas ulang. Ini memakan waktu, material, dan reputasi. Dalam budaya mutu Jepang, rework dianggap sangat serius — memengaruhi evaluasi tukang. Pencegahan: kerjakan benar sejak awal. 🇯🇵 TIPS: Banyak perusahaan Jepang mencatat rework (手直し / tenaoshi) dan menelusuri cacat sampai ke sambungan dan tukang lasnya. Dikenal sebagai orang yang hasilnya bagus sejak pertama adalah reputasi terbaik yang bisa Anda bangun.",
    },
  },
  217: {
    vi: {
      q: "Một thợ nói công việc cần 'Gen-awase' (現合 / げんあわせ). Điều này nghĩa là gì?",
      opts: [
        "Chỉ làm theo bản vẽ máy tính, không đo",
        "Đo và cắt chi tiết cho vừa ngay tại hiện trường",
        "Một loại giấy chứng nhận kiểm tra mối nối",
        "Làm thêm giờ cuối tuần để xong việc",
      ],
      exp: "Gen-awase (現合 / げんあわせ) = lắp khớp tại hiện trường. Khi chi tiết không khớp đúng bản vẽ do sai số chế tạo hoặc kết cấu thay đổi, thợ đo khe hở thực tế tại chỗ rồi cắt hoặc chế tạo chi tiết cho vừa. Phổ biến trong đóng tàu và xây dựng. 🇯🇵 MẸO: Khi làm gen-awase, hãy ghi lại kích thước thực đo được và những gì đã thay đổi. Thay đổi tại hiện trường không ghi chép sẽ gây rắc rối lớn khi kiểm tra.",
    },
    id: {
      q: "Seorang tukang mengatakan pekerjaan butuh 'Gen-awase' (現合 / げんあわせ). Apa artinya?",
      opts: [
        "Hanya bekerja dari gambar komputer tanpa mengukur",
        "Mengukur dan memotong komponen agar pas di lokasi",
        "Jenis sertifikat inspeksi untuk sambungan",
        "Lembur di akhir pekan untuk menyelesaikan pekerjaan",
      ],
      exp: "Gen-awase (現合 / げんあわせ) = penyesuaian di lokasi. Jika komponen tidak persis sesuai gambar karena toleransi fabrikasi atau perubahan struktur, pekerja mengukur celah sebenarnya di lokasi lalu memotong atau membuat komponen agar pas. Umum di galangan kapal dan konstruksi. 🇯🇵 TIPS: Saat melakukan gen-awase, catat ukuran aktual yang Anda ukur dan apa yang diubah. Perubahan di lokasi yang tidak dicatat menimbulkan masalah serius saat inspeksi.",
    },
  },
  218: {
    vi: {
      q: "'Chippingu' (チッピング) trong quy trình hàn là gì, và làm chính xác khi nào?",
      opts: [
        "Xịt chống bắn tóe trước khi bắt đầu hàn",
        "Kiểm tra nứt trên đường hàn sau khi hàn",
        "Gõ xỉ sau mỗi lượt hàn",
        "Mài mối hàn xuống chiều cao cuối cùng",
      ],
      exp: "Chippingu (チッピング) = đục xỉ / bỏ xỉ. Làm sau mỗi lượt trong hàn nhiều lượt. Không bỏ xỉ giữa các lượt gây lẫn xỉ (スラグ巻き込み) — khuyết tật bên trong nghiêm trọng sẽ trượt kiểm tra NDT. Quy trình: đục → chải sắt → kiểm → hàn lượt tiếp. 🇯🇵 MẸO: Sau khi gõ xỉ, chải sạch đường hàn và nhìn kỹ chân đường hàn và giữa các đường — xỉ thường nằm ở đó. Chỉ hàn lượt tiếp khi bề mặt đã sạch.",
    },
    id: {
      q: "Apa itu 'Chippingu' (チッピング) dalam alur kerja las, dan kapan tepatnya dilakukan?",
      opts: [
        "Menyemprot anti-spatter sebelum mulai mengelas",
        "Memeriksa retak pada manik setelah mengelas",
        "Membuang terak setelah setiap pass",
        "Menggerinda las sampai tinggi akhirnya",
      ],
      exp: "Chippingu (チッピング) = pengetukan terak / pembuangan terak. Dilakukan setelah tiap pass pada las multi-pass. Gagal membuang terak antar-pass menyebabkan inklusi terak (スラグ巻き込み) — cacat internal serius yang akan gagal inspeksi NDT. Proses: ketuk → sikat kawat → periksa → las pass berikutnya. 🇯🇵 TIPS: Setelah chipping, sikat manik las dan lihat teliti di kaki las dan di antara manik — terak sering tersembunyi di sana. Mulai pass berikutnya hanya jika permukaan sudah bersih.",
    },
  },
  219: {
    vi: {
      q: "Đàn anh nói bạn cần 'Bokae' (棒替え) sớm. Điều này nghĩa là gì — và liên quan đến phương pháp hàn nào?",
      opts: [
        "Thay cuộn dây — dùng trong hàn FCAW",
        "Đổi sang khí bảo vệ khác — hàn MIG/MAG",
        "Thay bép — mọi kiểu hàn bán tự động",
        "Thay que hàn — chỉ hàn que (SMAW)",
      ],
      exp: "Bokae (棒替え) = thay que hàn. Trong hàn que (SMAW / 被覆アーク溶接), que cháy ngắn dần và phải thay — nên từ này chỉ dùng cho hàn que. Hàn bán tự động FCAW/MAG dùng dây từ cuộn nên không có 'bokae'. 🇯🇵 MẸO: Que hàn hydro thấp dễ hút ẩm. Chúng được sấy lại (thường 300–400°C theo hướng dẫn nhà sản xuất) rồi giữ trong tủ giữ nhiệt (khoảng 100–150°C) đến khi dùng. Que ẩm gây nứt do hydro và rỗ khí.",
    },
    id: {
      q: "Senior berkata Anda perlu 'Bokae' (棒替え) segera. Apa artinya — dan relevan untuk proses las mana?",
      opts: [
        "Ganti gulungan kawat — dipakai di las FCAW",
        "Ganti gas pelindung lain — las MIG/MAG",
        "Ganti tip kontak — semua las semi-otomatis",
        "Ganti elektroda — hanya las elektroda (SMAW)",
      ],
      exp: "Bokae (棒替え) = ganti elektroda. Pada las elektroda terbungkus (SMAW / 被覆アーク溶接), elektroda terbakar habis dan harus diganti — jadi kata ini hanya untuk las elektroda. Las semi-otomatis FCAW/MAG memakai kawat dari gulungan, jadi tidak ada 'bokae'. 🇯🇵 TIPS: Elektroda hidrogen rendah menyerap kelembapan. Elektroda dikeringkan ulang (biasanya 300–400°C sesuai petunjuk pabrik) lalu disimpan di oven penahan (sekitar 100–150°C) sampai dipakai. Elektroda lembap menyebabkan retak hidrogen dan porositas.",
    },
  },
  220: {
    vi: {
      q: "Đàn anh nói dây bị 'Tobidashi!' (飛び出し！) cho việc dây 1.2mm của bạn. Theo quy tắc kinh nghiệm của Nhật, bạn nên nhắm chiều dài nhô dây (stick-out) là bao nhiêu?",
      opts: [
        "Khoảng 12mm — khoảng 10 lần đường kính dây",
        "Khoảng 25mm — giống nhau với mọi cỡ dây",
        "Khoảng 1,2mm — bằng đường kính dây",
        "Khoảng 6mm — một nửa quy tắc 10 lần",
      ],
      exp: "Tobidashi (飛び出し) = chiều dài nhô dây / phần dây ra, khoảng cách từ đầu tiếp điện đến bề mặt vật. Quá dài: hồ quang bất ổn, ngấu kém, che khí hỏng. Thợ Nhật dùng quy tắc đơn giản: stick-out = 10× đường kính dây. Với dây 1.2mm, khoảng 12mm — không phải 25mm cố định bất kể cỡ dây, và không phải bằng đúng đường kính dây. 🇯🇵 MẸO: Với dây 1.6mm, nhắm khoảng 16mm stick-out theo cùng quy tắc 10×. Khi hàn trong mối chật không thấy rõ đầu tip, thợ kinh nghiệm phát triển cảm giác về trọng lượng súng và tiếng hồ quang cho biết khoảng cách đúng.",
    },
    id: {
      q: "Senior berkata kawat 'Tobidashi!' (飛び出し！) untuk pekerjaan kawat 1.2mm Anda. Memakai aturan praktis Jepang, berapa panjang stick-out yang harus dituju?",
      opts: [
        "Sekitar 12mm — kira-kira 10× diameter kawat",
        "Sekitar 25mm — sama untuk semua ukuran kawat",
        "Sekitar 1,2mm — sama dengan diameter kawat",
        "Sekitar 6mm — setengah dari aturan 10×",
      ],
      exp: "Tobidashi (飛び出し) = stick-out / ekstensi kawat, jarak dari contact tip ke permukaan kerja. Terlalu panjang: busur tak stabil, penetrasi buruk, kegagalan pelindung. Tukang las Jepang memakai aturan sederhana: stick-out = 10× diameter kawat. Untuk kawat 1.2mm, sekitar 12mm — bukan 25mm tetap tanpa memandang ukuran kawat, dan bukan sama dengan diameter kawat itu sendiri. 🇯🇵 TIPS: Untuk kawat 1.6mm, tuju sekitar 16mm stick-out dengan aturan 10× yang sama. Saat mengelas di sambungan sempit di mana Anda tak bisa melihat tip dengan jelas, pekerja berpengalaman mengembangkan rasa terhadap berat gun dan bunyi busur yang memberi tahu jarak yang benar.",
    },
  },
  301: {
    vi: {
      q: "Phát biểu nào về 'Shitamuki-shisei' (下向き姿勢 / tư thế bằng) là KHÔNG đúng?",
      opts: [
        "Mã ISO là PA và chữ tư thế JIS là F",
        "Người chấm JIS đánh giá mối hàn tư thế bằng dễ dãi hơn",
        "Người mới thường bắt đầu học ở tư thế này",
        "Trọng lực giúp vũng hàn lắng vào mối nối",
      ],
      exp: "Shitamuki-shisei (下向き姿勢) = Tư thế bằng, 1G (rãnh) / 1F (góc), mã ISO PA. Trọng lực giúp bể hàn lắng vào mối nối, dễ học nhất — nhưng người kiểm tra JIS KHÔNG nới tiêu chuẩn cho mối tư thế bằng. Độ đều bề rộng, hòa mép và lấp hố vẫn bị soi kỹ như nhau. 🇯🇵 MẸO: Đừng cho rằng tư thế dễ = tiêu chuẩn thấp. Mối tư thế bằng cẩu thả trong thi JIS vẫn trượt — 'dễ' chỉ nói về độ khó thể chất, không phải mức chất lượng.",
    },
    id: {
      q: "Pernyataan mana tentang 'Shitamuki-shisei' (下向き姿勢 / posisi datar) yang TIDAK benar?",
      opts: [
        "Kode ISO-nya PA dan huruf posisi JIS-nya F",
        "Penguji JIS menilai las posisi datar lebih longgar",
        "Pemula biasanya mulai berlatih di posisi ini",
        "Gravitasi membantu kolam las turun ke sambungan",
      ],
      exp: "Shitamuki-shisei (下向き姿勢) = Posisi datar, 1G (alur) / 1F (sudut), kode ISO PA. Gravitasi membantu kolam cair mengendap ke sambungan, menjadikannya posisi termudah dipelajari — tetapi inspektor JIS TIDAK melonggarkan standar untuk las posisi datar. Keseragaman lebar jalur, pembauran kaki, dan pengisian kawah diperiksa sama ketatnya. 🇯🇵 TIPS: Jangan anggap posisi mudah = standar rendah. Las posisi datar yang ceroboh pada uji JIS tetap gagal — 'mudah' hanya soal kesulitan fisik, bukan standar mutu.",
    },
  },
  302: {
    vi: {
      q: "Bản vẽ ghi 'Tatemuki-shisei' (立向き姿勢) với mã ISO 'PF'. Đồng nghiệp nói nghĩa là hàn đứng-xuống. Anh ấy đúng không?",
      opts: [
        "Sai — PF thật ra là mã của hàn ngang",
        "Đúng — PF luôn là hàn đứng xuống (立向下進)",
        "Sai — PF là hàn đứng lên; hàn đứng xuống là PG",
        "Đúng với ống, nhưng với tấm PF là hàn đứng lên",
      ],
      exp: "Tatemuki-shisei (立向き姿勢) = Tư thế đứng, 3G (rãnh) / 3F (góc). Trong hàn đứng, ISO PF = đứng-LÊN (立向上進, hòa nhập và ngấu tốt hơn), còn ISO PG = đứng-XUỐNG (立向下進, nhanh hơn nhưng ngấu nông hơn). Hai mã KHÔNG thay lẫn được và sự phân biệt quan trọng cho phạm vi chứng chỉ. 🇯🇵 MẸO: Công trường Nhật mặc định đứng-LÊN (上進) vì hòa nhập và ngấu tốt hơn. Đứng-XUỐNG (下進) đôi khi dùng cho tấm mỏng trong sản xuất nhưng thường không khuyến khích cho mối kết cấu ở Nhật.",
    },
    id: {
      q: "Gambar menetapkan 'Tatemuki-shisei' (立向き姿勢) dengan kode ISO 'PF'. Rekan berkata ini berarti las tegak-turun. Apakah ia benar?",
      opts: [
        "Tidak — PF sebenarnya kode untuk las mendatar",
        "Ya — PF selalu berarti vertikal turun (立向下進)",
        "Tidak — PF adalah vertikal naik; vertikal turun adalah PG",
        "Ya untuk pipa, tapi untuk pelat PF berarti vertikal naik",
      ],
      exp: "Tatemuki-shisei (立向き姿勢) = Posisi tegak, 3G (alur) / 3F (sudut). Dalam las tegak, ISO PF = tegak-NAIK (立向上進, fusi dan penetrasi lebih baik), sedangkan ISO PG = tegak-TURUN (立向下進, lebih cepat tapi penetrasi lebih dangkal). Kedua kode TIDAK bisa dipertukarkan dan perbedaannya penting untuk cakupan sertifikasi. 🇯🇵 TIPS: Lokasi Jepang default ke tegak-NAIK (上進) karena fusi dan penetrasi lebih baik. Tegak-TURUN (下進) kadang dipakai untuk pelat tipis di produksi tapi umumnya tak dianjurkan untuk las struktur di Jepang.",
    },
  },
  303: {
    vi: {
      q: "'Yokomuki-shisei' (横向き姿勢) là gì?",
      opts: [
        "Tư thế đứng — hàn lên theo bức tường đứng",
        "Tư thế bằng — hàn ở phía trên mối nối",
        "Tư thế trần — hàn phía trên đầu",
        "Tư thế ngang — mối nối nằm ngang trên tấm đứng",
      ],
      exp: "Yokomuki-shisei (横向き姿勢) = Tư thế ngang. 2G (rãnh) / 2F (góc). Mối hàn chạy ngang trên mặt đứng. Trọng lực kéo bể hàn xuống (về tấm dưới). Kỹ thuật: nghiêng súng hơi lên để bù. Mã ISO: PC. 🇯🇵 MẸO: Rãnh ngang (横向き突合せ) phổ biến trong đóng tàu Nhật cho tôn mạn. Thách thức là ngăn chảy tràn dưới đường hàn ở tấm dưới. Huấn luyện viên Nhật nói 'ue o miro' (上を見ろ / nhìn mép trên) — tập trung hồ quang vào tấm trên để kim loại chảy tự nhiên xuống lấp chân dưới.",
    },
    id: {
      q: "Apa itu 'Yokomuki-shisei' (横向き姿勢)?",
      opts: [
        "Posisi tegak — mengelas naik di dinding vertikal",
        "Posisi datar — mengelas di atas sambungan",
        "Posisi overhead — mengelas di atas kepala",
        "Posisi mendatar — sambungan horizontal pada pelat tegak",
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
        "F = Fillet — loại mối hàn là hàn góc",
        "F = Flat — tư thế bằng 下向き, như trong N-2F",
        "F = Finish — chỉ thi lớp cuối cùng",
        "F = Forward — hướng tiến khi hàn",
      ],
      exp: "Trong mã thi chứng chỉ JIS: F = Bằng (下向き), H = Ngang (横向き), V = Đứng (立向き), O = Trần (上向き). Ví dụ: N-2F = thép thường (N), mối rãnh tấm (2), tư thế bằng (F). N-2P = thép thường (N), mối ống (P mọi tư thế). Các mã này xuất hiện trên chứng chỉ của bạn. 🇯🇵 MẸO: Khi xin việc ở Nhật, mang thẻ chứng chỉ JIS thật (資格証 / shikaku-sho) — không chỉ bản photo. Chủ muốn xem bản gốc và sẽ kiểm ngày hết hạn. Nếu sắp hết hạn, gia hạn TRƯỚC khi xin việc — chứng chỉ hết hạn bị coi như không có.",
    },
    id: {
      q: "Dalam ujian sertifikasi JIS Jepang, kode posisi 'F' merujuk pada apa?",
      opts: [
        "F = Fillet — jenis lasnya las sudut",
        "F = Flat — posisi datar 下向き, seperti pada N-2F",
        "F = Finish — hanya pass terakhir yang diuji",
        "F = Forward — arah maju saat mengelas",
      ],
      exp: "Dalam kode uji sertifikasi JIS: F = Datar (下向き), H = Mendatar (横向き), V = Tegak (立向き), O = Overhead (上向き). Contoh: N-2F = baja lunak (N), las alur pelat (2), posisi datar (F). N-2P = baja lunak (N), las pipa (P semua posisi). Kode ini muncul pada sertifikat kualifikasi Anda. 🇯🇵 TIPS: Saat melamar kerja di Jepang, bawa kartu sertifikat JIS asli (資格証 / shikaku-sho) — bukan sekadar fotokopi. Pemberi kerja ingin melihat aslinya dan akan memeriksa tanggal kedaluwarsa. Jika hampir habis, perbarui SEBELUM melamar — sertifikat kedaluwarsa dianggap sama dengan tidak punya.",
    },
  },
  306: {
    vi: {
      q: "Với tấm mỏng (ví dụ 2mm), có luôn cần chuẩn bị rãnh (開先 / kaisaki) trước khi hàn giáp mối 'Tsukiawase-yosetsu' (突き合わせ溶接) không?",
      opts: [
        "Có, nhưng chỉ với tấm inox, không phải thép carbon",
        "Có — JIS yêu cầu vát mép cho mọi mối hàn giáp mép",
        "Không — mối nối mép vuông (I形) thường đủ cho tấm mỏng",
        "Không — tấm mỏng chỉ được hàn góc",
      ],
      exp: "Tsukiawase-yosetsu (突き合わせ溶接) = Mối giáp mối / mối rãnh — hai mép tấm đặt đối đầu và hàn. Với tấm DÀY, cần vát rãnh (開先 / kaisaki, ví dụ rãnh V) để hồ quang và kim loại bù chạm được chân, ngấu hoàn toàn. Nhưng với tấm MỎNG, mối giáp mối mép vuông rãnh I (I形) thường đạt ngấu hoàn toàn mà không cần vát — yêu cầu chuẩn bị rãnh tỉ lệ với chiều dày, không phải quy tắc chung cho mọi mối giáp mối. 🇯🇵 MẸO: Trong thi chứng chỉ JIS mối giáp mối, kích thước tấm thi, góc rãnh, khe chân và mặt chân đều chuẩn hóa theo mã thi — nhớ kích thước chuẩn cho mã thi của bạn (N-2F v.v.) trước ngày thi.",
    },
    id: {
      q: "Untuk pelat tipis (mis. 2mm), apakah persiapan alur (開先 / kaisaki) selalu diperlukan sebelum las tumpul 'Tsukiawase-yosetsu' (突き合わせ溶接)?",
      opts: [
        "Ya, tapi hanya untuk pelat stainless, bukan baja karbon",
        "Ya — JIS mewajibkan bevel pada setiap las tumpul",
        "Tidak — sambungan tepi persegi (I形) sering cukup untuk pelat tipis",
        "Tidak — pelat tipis hanya boleh dilas sudut",
      ],
      exp: "Tsukiawase-yosetsu (突き合わせ溶接) = Las tumpul / las alur — dua tepi pelat diletakkan ujung-ke-ujung dan dilas. Untuk pelat TEBAL, perlu bevel alur (開先 / kaisaki, mis. V-groove) agar busur dan pengisi mencapai akar untuk penetrasi penuh. Tapi untuk pelat TIPIS, sambungan tumpul tepi persegi I-groove (I形) sering mencapai penetrasi penuh tanpa bevel — kebutuhan persiapan alur mengikuti tebal, bukan aturan mutlak untuk setiap las tumpul. 🇯🇵 TIPS: Dalam sertifikasi JIS untuk las tumpul, ukuran pelat uji, sudut alur, root gap, dan root face semua distandardisasi per kode uji — hafalkan dimensi standar untuk kode uji Anda (N-2F dll.) sebelum hari ujian.",
    },
  },
  307: {
    vi: {
      q: "Trên bản vẽ mối hàn góc Nhật, bạn thấy 'Suminiku-yosetsu' (すみ肉溶接) ghi '脚長 S=6'. Người kiểm tra sẽ xác minh bằng đo chiều dày cổ (のど厚) hay đo chiều dài chân?",
      opts: [
        "Không cái nào — hàn góc chỉ kiểm bằng mắt",
        "Cổ hàn — chiều dài chân không đo được bằng dưỡng",
        "Cổ hàn — vì số trên bản vẽ là chiều dày cổ",
        "Chiều dài chân — kích thước bản vẽ là chân (脚長)",
      ],
      exp: "Suminiku-yosetsu (すみ肉溶接) = Mối hàn góc, loại phổ biến nhất trong chế tạo kết cấu. Trên bản vẽ Nhật, kích thước mối góc ghi bằng chiều dài chân (脚長 / Kyakucho, ví dụ S=6), KHÔNG phải chiều dày cổ — dù tính độ bền dùng cổ (のど厚 / Nodo-atsu) bên trong. Người kiểm tra QC Nhật đo CHIỀU DÀI CHÂN trực tiếp bằng thước hàn; nếu chân là 5.3mm khi quy định 6mm, đó là lỗi dù nhìn ổn. 🇯🇵 MẸO: Luôn kiểm chú thích chiều dài chân trên bản vẽ trước khi hàn, và tự kiểm bằng thước trước khi gọi người kiểm tra.",
    },
    id: {
      q: "Pada gambar las sudut Jepang, Anda melihat 'Suminiku-yosetsu' (すみ肉溶接) ditetapkan '脚長 S=6'. Apakah inspektor memverifikasi ini dengan pengukuran tebal leher (のど厚), atau pengukuran panjang kaki?",
      opts: [
        "Tidak keduanya — las sudut hanya dicek visual",
        "Throat — panjang kaki tidak bisa diukur dengan alat ukur",
        "Throat — karena angka di gambar berarti throat",
        "Panjang kaki — ukuran di gambar adalah kaki (脚長)",
      ],
      exp: "Suminiku-yosetsu (すみ肉溶接) = Las sudut, jenis las paling umum dalam fabrikasi struktur. Pada gambar Jepang, ukuran las sudut ditetapkan sebagai panjang kaki (脚長 / Kyakucho, mis. S=6), BUKAN tebal leher — meski perhitungan kekuatan memakai leher (のど厚 / Nodo-atsu) secara internal. Inspektor QC Jepang mengukur PANJANG KAKI langsung dengan alat ukur las; jika fillet Anda 5.3mm padahal 6mm ditetapkan, itu cacat meski terlihat baik. 🇯🇵 TIPS: Selalu periksa callout panjang kaki pada gambar sebelum mengelas, dan periksa sendiri dengan gauge sebelum memanggil inspektor.",
    },
  },
  308: {
    vi: {
      q: "'Kyakucho' (脚長) trong mối hàn góc là gì?",
      opts: [
        "Khoảng cách từ chân mối hàn tới mép trên mỗi tấm",
        "Chiều cao phần gia cường trên mặt tấm",
        "Chiều dài đường hàn từ đầu đến cuối",
        "Độ sâu ngấu vào kim loại cơ bản",
      ],
      exp: "Kyakucho (脚長) = Chiều dài chân. Chiều dài mỗi chân của tiết diện tam giác mối hàn góc. Với mối góc chân đều, hai chân bằng nhau. Ghi trên bản vẽ bằng số (ví dụ 脚長6 = chân 6mm). Dùng để kiểm tra bằng thước hàn. 🇯🇵 MẸO: Mối góc chân không đều (不等脚長) xảy ra khi góc súng không 45° — một chân dài hơn. JIS cho phép chênh nhỏ, nhưng nếu một chân ngắn hẳn (下脚短 / shita-ashi-tan), nó giảm độ bền. Nhắm chân đều bằng cách giữ góc súng 45° ở góc mối nối.",
    },
    id: {
      q: "Apa itu 'Kyakucho' (脚長) pada las sudut?",
      opts: [
        "Jarak dari akar las ke kaki las pada tiap pelat",
        "Tinggi penguatan di atas permukaan pelat",
        "Panjang manik las dari awal sampai akhir",
        "Kedalaman penetrasi ke logam induk",
      ],
      exp: "Kyakucho (脚長) = Panjang kaki. Panjang tiap kaki dari penampang segitiga las sudut. Untuk fillet kaki sama, kedua kaki berukuran sama. Ditetapkan pada gambar sebagai angka (mis. 脚長6 = kaki 6mm). Dipakai untuk inspeksi dengan alat ukur las. 🇯🇵 TIPS: Fillet kaki tak sama (不等脚長) terjadi saat sudut gun bukan 45° — satu kaki lebih panjang. JIS mengizinkan perbedaan kecil, tapi jika satu kaki jauh lebih pendek (下脚短 / shita-ashi-tan), kekuatan berkurang. Tuju kaki sama dengan menjaga sudut gun 45° di pojok sambungan.",
    },
  },
  309: {
    vi: {
      q: "'Nodo-atsu' (のど厚) là gì và liên quan thế nào đến chiều dài chân mối hàn góc?",
      opts: [
        "Độ rộng đường hàn trên bề mặt",
        "Khoảng ngắn nhất qua mối hàn — chân × 0,707",
        "Độ sâu rãnh trước khi hàn",
        "Khoảng cách từ mép này sang mép kia của mối hàn",
      ],
      exp: "Nodo-atsu (のど厚) = Chiều dày cổ. Khoảng cách ngắn nhất từ chân mối hàn đến mặt mối — đây là kích thước chịu tải dùng trong tính độ bền. Công thức: cổ = chiều dài chân × cos45° = chân × 0.707. Ví dụ: chân 6mm → cổ = 6 × 0.707 ≈ 4.24mm. Then chốt cho thiết kế kết cấu. 🇯🇵 MẸO: 'Cổ lý thuyết' (理論のど厚) giả định mặt phẳng hoàn hảo. 'Cổ thực tế' (実際のど厚) tính cả lồi hoặc lõm. Mối góc lõm (凹形 / ogata) có cổ NHỎ hơn lý thuyết và là lỗi. Mối góc hơi lồi chấp nhận được nhưng lồi quá lãng phí vật liệu.",
    },
    id: {
      q: "Apa itu 'Nodo-atsu' (のど厚) dan bagaimana hubungannya dengan panjang kaki las sudut?",
      opts: [
        "Lebar manik las di permukaan",
        "Jarak terpendek melalui las — kaki × 0,707",
        "Kedalaman alur sebelum dilas",
        "Jarak dari satu kaki las ke kaki lainnya",
      ],
      exp: "Nodo-atsu (のど厚) = Tebal leher. Jarak terpendek dari akar las ke muka las — ini dimensi penahan beban yang dipakai dalam perhitungan kekuatan. Rumus: leher = panjang kaki × cos45° = kaki × 0.707. Contoh: kaki 6mm → leher = 6 × 0.707 ≈ 4.24mm. Krusial untuk desain struktur. 🇯🇵 TIPS: 'Leher teoretis' (理論のど厚) mengasumsikan muka rata sempurna. 'Leher aktual' (実際のど厚) memperhitungkan cembung atau cekung. Fillet cekung (凹形 / ogata) memiliki leher KURANG dari teoretis dan merupakan cacat. Fillet sedikit cembung boleh, tapi terlalu cembung memboroskan material.",
    },
  },
  310: {
    vi: {
      q: "'Ruuto-gyappu' (ルートギャップ) là gì — và điều gì xảy ra nếu quá rộng hay quá hẹp?",
      opts: [
        "Khoảng cách giữa các mối hàn đính dọc mối nối",
        "Góc vát — quá rộng gây thủng",
        "Khe hở ở chân: quá hẹp = ngấu kém",
        "Chiều cao gia cường trên mặt tấm",
      ],
      exp: "Ruuto-gyappu (ルートギャップ) = Khe chân / khe mở chân. Khoảng trống được kiểm soát giữa các mép tấm ở chân rãnh. Quá hẹp (< quy định): hồ quang không tới chân, gây thiếu ngấu (溶込不良). Quá rộng (> quy định): thủng (溶落ち). Ghi trên bản vẽ — đo bằng thước khe trước khi hàn. 🇯🇵 MẸO: Kiểm tra khe hở chân bằng dưỡng trước mỗi mối hàn và so với dung sai trên bản vẽ hoặc WPS. Đừng ước lượng bằng mắt — chỉnh khe hở trước khi hàn rẻ hơn nhiều so với đục bỏ và hàn lại.",
    },
    id: {
      q: "Apa itu 'Ruuto-gyappu' (ルートギャップ) — dan apa yang terjadi jika terlalu lebar atau terlalu sempit?",
      opts: [
        "Jarak antar las titik di sepanjang sambungan",
        "Sudut alur — terlalu lebar menyebabkan tembus",
        "Celah di akar: terlalu sempit = penetrasi buruk",
        "Tinggi penguatan di atas permukaan pelat",
      ],
      exp: "Ruuto-gyappu (ルートギャップ) = Root gap / bukaan akar. Ruang terkendali antara tepi pelat di akar alur. Terlalu sempit (< spek): busur tak mencapai akar, menyebabkan kurang penetrasi (溶込不良). Terlalu lebar (> spek): tembus bakar (溶落ち). Ditetapkan pada gambar — ukur dengan gap gauge sebelum mengelas. 🇯🇵 TIPS: Periksa celah akar dengan pengukur celah sebelum setiap pengelasan dan bandingkan dengan toleransi di gambar atau WPS. Jangan hanya mengira-ngira — memperbaiki celah sebelum mengelas jauh lebih murah daripada hatsuri dan las ulang.",
    },
  },
  311: {
    vi: {
      q: "Trên bản vẽ JIS, ký hiệu hàn đặt DƯỚI đường chuẩn. Điều này chỉ gì?",
      opts: [
        "Phải hàn ở tư thế trần",
        "Mối hàn ở phía đối diện mũi tên",
        "Hàn ở cả hai phía của mối nối",
        "Mối hàn ở phía mũi tên của mối nối",
      ],
      exp: "Quy tắc ký hiệu hàn JIS (JIS Z 3021): Dưới đường chuẩn = PHÍA MŨI TÊN (矢側 / yagawa). Trên đường chuẩn = PHÍA ĐỐI DIỆN (反矢側 / hanyagawa). AWS A2.4 (Mỹ) cũng dùng cùng quy tắc — dưới = phía mũi tên. 🇯🇵 MẸO: Một số bản vẽ theo ISO 2553 (phổ biến ở châu Âu) có thêm một đường nét đứt dưới đường chuẩn nét liền. Khi đó phía hàn được xác định theo đường, không theo trên/dưới: ký hiệu trên đường nét liền = phía mũi tên, trên đường nét đứt = phía đối diện. Nếu thấy đường nét đứt, hãy hỏi quản lý QC trước khi hàn.",
    },
    id: {
      q: "Pada gambar JIS, simbol las diletakkan DI BAWAH garis referensi. Apa artinya?",
      opts: [
        "Las harus dibuat di posisi overhead",
        "Las ada di sisi berlawanan dari panah",
        "Las dibuat di kedua sisi sambungan",
        "Las ada di sisi panah sambungan",
      ],
      exp: "Aturan simbol las JIS (JIS Z 3021): Di bawah garis referensi = SISI PANAH (矢側 / yagawa). Di atas garis referensi = SISI LAIN (反矢側 / hanyagawa). AWS A2.4 (Amerika) memakai aturan yang sama — di bawah = sisi panah. 🇯🇵 TIPS: Sebagian gambar menurut ISO 2553 (umum di Eropa) menambahkan garis putus-putus di bawah garis referensi solid. Pada gambar itu, sisi ditentukan oleh garisnya, bukan atas/bawah: simbol di garis solid = sisi panah, di garis putus-putus = sisi lain. Jika melihat garis putus-putus, tanyakan manajer QC sebelum mengelas.",
    },
  },
  312: {
    vi: {
      q: "Bản vẽ JIS có ký hiệu mối hàn góc (△) ở TRÊN VÀ DƯỚI đường chuẩn. Điều này nghĩa là gì?",
      opts: [
        "Hàn góc ở cả phía mũi tên và phía đối diện",
        "Hàn góc ở một mối nối khác gần đó",
        "Ký hiệu vẽ sai — bỏ qua một cái",
        "Chỉ phía mũi tên — ký hiệu thứ hai để trang trí",
      ],
      exp: "Khi ký hiệu hàn xuất hiện CẢ trên và dưới đường chuẩn, nghĩa là hàn CẢ HAI PHÍA. Với mối góc: mối góc hai mặt (両面すみ肉溶接). Mỗi phía có thể quy định kích thước khác nhau — đọc số riêng cho từng phía. 🇯🇵 MẸO: Thợ mới hay chỉ hàn một phía vì bỏ sót ký hiệu thứ hai. Luôn đọc ký hiệu ở cả hai phía của đường chuẩn trước khi bắt đầu.",
    },
    id: {
      q: "Gambar JIS memiliki simbol las sudut (△) di ATAS DAN DI BAWAH garis referensi. Apa artinya?",
      opts: [
        "Las sudut di sisi panah dan sisi lainnya",
        "Las sudut di sambungan lain di dekatnya",
        "Simbol salah gambar — abaikan salah satunya",
        "Hanya sisi panah — simbol kedua hanya hiasan",
      ],
      exp: "Saat simbol las muncul di ATAS dan DI BAWAH garis referensi, artinya las di KEDUA SISI. Untuk las sudut: las sudut dua sisi (両面すみ肉溶接). Tiap sisi bisa memiliki dimensi berbeda — baca angkanya terpisah untuk tiap sisi. 🇯🇵 TIPS: Pekerja baru sering hanya mengelas satu sisi karena terlewat simbol kedua. Selalu baca simbol di kedua sisi garis referensi sebelum mulai.",
    },
  },
  313: {
    vi: {
      q: "Vòng tròn (○) tại giao điểm của đường chuẩn và mũi tên trong ký hiệu hàn JIS nghĩa là gì?",
      opts: [
        "Không hàn — để trống mối nối này",
        "Hàn kín quanh toàn bộ mối nối (全周溶接)",
        "Phải hàn trần ở vị trí này",
        "Mối hàn đã được kiểm tra và duyệt",
      ],
      exp: "Ký hiệu vòng tròn (○) tại giao mũi tên/đường chuẩn = Hàn toàn chu vi (全周溶接). Mối hàn quy định phải làm liên tục quanh toàn bộ chu vi mối nối. Phổ biến ở nối ống, tấm đế cột và tiết diện rỗng kết cấu. 🇯🇵 MẸO: Khi hàn 全周溶接, các vị trí khởi/dừng hồ quang phải so le, không dồn cùng một điểm — dồn khuyết tật dừng/khởi vào một chỗ tạo điểm yếu. Giám sát Nhật sẽ ghi nhận vị trí dừng/khởi của bạn. Lập trình tự trước khi bắt đầu.",
    },
    id: {
      q: "Apa arti lingkaran (○) di persimpangan garis referensi dan panah dalam simbol las JIS?",
      opts: [
        "Tidak dilas — biarkan sambungan ini",
        "Las mengelilingi seluruh sambungan (全周溶接)",
        "Wajib las overhead di titik ini",
        "Las sudah diperiksa dan disetujui",
      ],
      exp: "Simbol lingkaran (○) di pertemuan panah/garis referensi = Las keliling (全周溶接). Las yang ditentukan harus dibuat menerus di seluruh keliling sambungan. Umum pada sambungan pipa, pelat dasar kolom, dan penampang berongga struktur. 🇯🇵 TIPS: Saat mengelas 全周溶接, lokasi mulai/berhenti busur harus diselang-seling dan tidak semua di titik yang sama — memusatkan cacat berhenti/mulai di satu lokasi menciptakan titik lemah. Supervisor Jepang akan mencatat posisi berhenti/mulai Anda. Rencanakan urutannya sebelum mulai.",
    },
  },
  314: {
    vi: {
      q: "Bản vẽ JIS có ký hiệu cờ (旗マーク) tại đường chuẩn. Điều này chỉ gì?",
      opts: [
        "Thợ hàn đã qua kiểm tra chất lượng",
        "Mối hàn cần xử lý nhiệt sau hàn",
        "Hàn hiện trường (現場溶接), không hàn ở xưởng",
        "Mối nối chịu ứng suất cao — cần cẩn thận hơn",
      ],
      exp: "Ký hiệu cờ (旗マーク) = Ký hiệu hàn hiện trường (現場溶接記号). Mối này KHÔNG làm trong nhà máy — nó thực hiện tại công trường xây dựng/lắp đặt thực sau khi các chi tiết chế sẵn được lắp vào vị trí. Quan trọng khi lập kế hoạch: hàn hiện trường có điều kiện khó hơn (thời tiết, tư thế, tiếp cận) so với hàn nhà máy. 🇯🇵 MẸO: Hàn hiện trường cần lên kế hoạch kỹ hơn. Gió dễ thổi bay khí bảo vệ, nên dùng tấm chắn gió khi hàn có khí bảo vệ, và không hàn khi mưa hoặc thép bị ướt. Kiểm tra thời tiết và điều kiện công trường trước khi bắt đầu.",
    },
    id: {
      q: "Gambar JIS memiliki simbol bendera (旗マーク) di garis referensi. Apa artinya?",
      opts: [
        "Tukang las sudah lulus inspeksi mutu",
        "Las memerlukan perlakuan panas setelah las",
        "Las lapangan (現場溶接) di lokasi, bukan di bengkel",
        "Sambungan bertegangan tinggi — lebih hati-hati",
      ],
      exp: "Tanda bendera (旗マーク) = Simbol las lapangan (現場溶接記号). Las ini TIDAK dikerjakan di pabrik — dilakukan di lokasi konstruksi/pemasangan nyata setelah bagian prafabrikasi dirakit di tempat. Penting untuk perencanaan: las lapangan berkondisi lebih menantang (cuaca, posisi, akses) daripada las pabrik. 🇯🇵 TIPS: Las lapangan perlu perencanaan lebih. Angin mudah meniup gas pelindung, jadi pakai penahan angin untuk las berpelindung gas, dan jangan mengelas saat hujan atau baja basah. Periksa cuaca dan kondisi lokasi sebelum mulai.",
    },
  },
  315: {
    vi: {
      q: "Khác biệt nào trong quy tắc ký hiệu hàn thực sự có thể khiến bạn hàn sai phía?",
      opts: [
        "JIS và AWS đặt ký hiệu phía mũi tên ở hai phía ngược nhau",
        "Chỉ khác đơn vị — JIS dùng mét, AWS dùng inch",
        "Nét đứt ISO 2553: nét liền = phía mũi tên, nét đứt = phía kia",
        "Không có khác biệt giữa các tiêu chuẩn ký hiệu",
      ],
      exp: "JIS Z 3021 và AWS A2.4 dùng cùng quy tắc: ký hiệu dưới đường chuẩn = phía mũi tên, trên = phía đối diện. Cái bẫy thật là bản vẽ ISO 2553 (phổ biến ở châu Âu) có đường nét đứt thứ hai: đường nét liền = phía mũi tên, đường nét đứt = phía đối diện, bất kể cái nào ở trên. Đọc sai = hàn sai phía = làm lại. 🇯🇵 MẸO: Kiểm tiêu chuẩn trong ô tiêu đề bản vẽ. Nếu thấy đường nét đứt cạnh đường chuẩn, xác nhận với giám sát trước khi hàn.",
    },
    id: {
      q: "Perbedaan aturan simbol las mana yang benar-benar bisa membuat Anda mengelas di sisi yang salah?",
      opts: [
        "JIS dan AWS menaruh simbol sisi panah di sisi berlawanan",
        "Hanya satuannya beda — JIS metrik, AWS imperial",
        "Garis putus ISO 2553: solid = sisi panah, putus = sisi lain",
        "Tidak ada perbedaan antar standar simbol mana pun",
      ],
      exp: "JIS Z 3021 dan AWS A2.4 memakai aturan yang sama: simbol di bawah garis referensi = sisi panah, di atas = sisi lain. Jebakan sebenarnya adalah gambar ISO 2553 (umum di Eropa) yang memakai garis putus-putus kedua: garis solid = sisi panah, garis putus-putus = sisi lain, mana pun yang di atas. Salah membaca = mengelas di sisi salah = rework. 🇯🇵 TIPS: Periksa standar di blok judul gambar. Jika ada garis putus-putus di samping garis referensi, konfirmasi ke supervisor sebelum mengelas.",
    },
  },
  316: {
    vi: {
      q: "'T-keite' (T継手) là gì và thường dùng ở đâu?",
      opts: [
        "Một tấm gặp tấm kia góc 90°, tạo hình chữ T",
        "Hai ống cùng đường kính nối đầu với nhau",
        "Hai tấm chồng lên nhau",
        "Hai tấm hàn nối đầu thành một đường thẳng",
      ],
      exp: "T-keite (T継手) = Mối chữ T. Một tấm hàn vuông góc với mặt tấm kia, tạo hình chữ T. Mối kết cấu phổ biến nhất trong chế tạo thép. Thường dùng hai mối góc (すみ肉溶接) hai phía. Với ứng dụng ứng suất cao, có thể cần mối rãnh ngấu hoàn toàn. 🇯🇵 MẸO: Trên bản vẽ Nhật, khi mối chữ T ghi 'K形開先' (rãnh chữ K), nghĩa là cần ngấu hoàn toàn — không phải mối góc thường. Phân biệt này ảnh hưởng lớn đến độ bền. Nếu không chắc mối chữ T cần vát rãnh hay chỉ mối góc, luôn hỏi giám sát thay vì đoán.",
    },
    id: {
      q: "Apa itu 'T-keite' (T継手) dan di mana umumnya dipakai?",
      opts: [
        "Satu pelat bertemu pelat lain pada 90°, membentuk T",
        "Dua pipa berdiameter sama disambung ujung ke ujung",
        "Dua pelat yang saling tumpang tindih",
        "Dua pelat dilas ujung ke ujung dalam garis lurus",
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
        "PF = Tư thế bằng = 下向き姿勢",
        "PF = Tư thế trần = 上向き姿勢",
        "PF = Hàn đứng lên = 立向上進",
        "PF = Hàn góc ngang = 水平すみ肉",
      ],
      exp: "ISO PF = Hàn đứng-lên (立向上進 / Tatemuki-joshin). Đây là hướng hàn đứng tiêu chuẩn trong chế tạo Nhật — hàn hướng lên cho hòa nhập và ngấu tốt hơn so với đứng-xuống. ISO PG = đứng-xuống. Các mã này xuất hiện trên chứng chỉ JIS và IIW quốc tế. 🇯🇵 MẸO: Chứng chỉ thợ hàn JIS ghi tư thế bằng các chữ F, H, V, O (ví dụ N-2V), còn chứng chỉ ISO 9606 dùng PA, PC, PF, PG... Trên chứng chỉ ISO, hàn đứng lên (PF) và đứng xuống (PG) là riêng biệt — kiểm tra phạm vi chứng chỉ trước khi nhận việc.",
    },
    id: {
      q: "Apa arti kode posisi ISO 'PF', dan apa nama Jepangnya?",
      opts: [
        "PF = Posisi datar = 下向き姿勢",
        "PF = Posisi overhead = 上向き姿勢",
        "PF = Vertikal naik = 立向上進",
        "PF = Las sudut mendatar = 水平すみ肉",
      ],
      exp: "ISO PF = Las tegak-naik (立向上進 / Tatemuki-joshin). Ini arah las tegak standar dalam fabrikasi Jepang — mengelas ke atas menghasilkan fusi dan penetrasi lebih baik dibanding tegak-turun. ISO PG = tegak-turun. Kode ini muncul pada sertifikat kualifikasi JIS dan IIW internasional. 🇯🇵 TIPS: Sertifikat tukang las JIS menuliskan posisi dengan huruf F, H, V, O (mis. N-2V), sedangkan sertifikat ISO 9606 memakai PA, PC, PF, PG, dll. Pada sertifikat ISO, vertikal naik (PF) dan vertikal turun (PG) terpisah — periksa cakupan sertifikat sebelum menerima pekerjaan.",
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
        "Kim loại hàn ngấu suốt chiều dày mối nối — cho mối chịu lực lớn",
        "Mối hàn dùng dòng điện tối đa của máy",
        "Mối hàn phủ cả hai mặt tấm",
        "Mối hàn được mài phẳng với mặt tấm",
      ],
      exp: "Kanzen-tokekomi-yosetsu (完全溶込み溶接) = Mối ngấu hoàn toàn (CJP). Vùng nóng chảy kéo dài qua TOÀN BỘ chiều dày tấm. Cần cho: nối tòa nhà chịu địa chấn (ダイアフラム), thân bình áp lực và mối kết cấu quan trọng. Kiểm bằng RT hoặc UT. Trái với mối ngấu một phần (部分溶込み / PJP). 🇯🇵 MẸO: Mối hàn ngấu hoàn toàn ở liên kết cột-dầm chịu động đất (柱梁接合部) được kiểm tra nghiêm, thường bằng UT. Nếu bị loại (不合格), phải đục bỏ, hàn lại và kiểm tra lại — không có chấp nhận một phần.",
    },
    id: {
      q: "Apa itu 'Kanzen-tokekomi-yosetsu' (完全溶込み溶接 / CJP) dan kapan diperlukan?",
      opts: [
        "Logam las menembus seluruh tebal sambungan — untuk sambungan bertegangan tinggi",
        "Las yang dibuat dengan arus maksimum mesin",
        "Las yang menutupi kedua permukaan pelat",
        "Las yang digerinda rata dengan permukaan pelat",
      ],
      exp: "Kanzen-tokekomi-yosetsu (完全溶込み溶接) = Complete Joint Penetration (CJP). Zona fusi meluas ke SELURUH tebal pelat. Diperlukan untuk: sambungan bangunan tahan gempa (ダイアフラム), cangkang bejana tekan, dan sambungan struktur kritis. Diverifikasi dengan inspeksi RT atau UT. Berbeda dengan las penetrasi parsial (部分溶込み / PJP). 🇯🇵 TIPS: Las CJP pada sambungan kolom-balok yang kritis terhadap gempa (柱梁接合部) diperiksa ketat, biasanya dengan UT. Jika ditolak (不合格), harus digerinda/dikeruk, dilas ulang, dan diperiksa ulang — tidak ada penerimaan sebagian.",
    },
  },
  401: {
    vi: {
      q: "Mối thi JIS của bạn có vết lẹm sâu đúng 0.3mm. Điều này có tự động trượt kiểm tra VT chứng chỉ JIS không?",
      opts: [
        "Không — 0,3mm nằm trong giới hạn JIS với mọi chiều dày",
        "Tùy chiều dày tấm và tiêu chí của bài thi",
        "Có — bất kỳ cháy cạnh nào cũng tự động trượt theo JIS",
        "Không — cháy cạnh chỉ kiểm bằng RT/UT, không kiểm bằng mắt",
      ],
      exp: "Andaakatto (アンダーカット) = Lẹm chân, một rãnh bị nóng chảy ở mép chân mối hàn do dòng quá cao, tốc độ quá nhanh, hoặc góc súng sai. Độ cho phép KHÔNG phải một con số chung — JIS và các quy chuẩn khác quy định độ lẹm tối đa theo chiều dày tấm/cấu kiện và mã thi cụ thể, nên lẹm 0.3mm có thể đạt ở việc này nhưng trượt ở việc khắt khe hơn. 🇯🇵 MẸO: Thợ Nhật kinh nghiệm tự VT trước khi gọi người kiểm tra, tra dung sai thực cho mã thi cụ thể thay vì đoán một con số cố định — đừng gọi người kiểm tra trừ khi đã đối chiếu với quy định.",
    },
    id: {
      q: "Las uji JIS Anda menunjukkan undercut sedalam tepat 0.3mm. Apakah ini otomatis gagal inspeksi VT sertifikasi JIS?",
      opts: [
        "Tidak — 0,3mm dalam batas JIS untuk semua tebal pelat",
        "Tergantung tebal pelat dan kriteria ujiannya",
        "Ya — undercut sekecil apa pun otomatis gagal menurut JIS",
        "Tidak — undercut hanya dicek RT/UT, tidak di VT",
      ],
      exp: "Andaakatto (アンダーカット) = Undercut, alur yang meleleh di ujung logam dasar las akibat arus berlebih, kecepatan jalan terlalu tinggi, atau sudut gun tak tepat. Kedalaman yang diizinkan BUKAN satu angka universal — JIS dan kode lain menetapkan kedalaman undercut maksimum relatif terhadap tebal pelat/member dan kode uji tertentu, jadi undercut 0.3mm bisa lulus di satu pekerjaan dan gagal di yang lebih ketat. 🇯🇵 TIPS: Tukang las Jepang berpengalaman melakukan VT sendiri sebelum memanggil inspektor, memeriksa toleransi aktual untuk kode uji spesifiknya alih-alih mengasumsikan angka tetap — jangan pernah memanggil inspektor kecuali Anda sudah mencocokkannya dengan spesifikasi.",
    },
  },
  402: {
    vi: {
      q: "Andaakatto (アンダーカット / lẹm) và Oobaraappu (オーバーラップ / chồng mép) hay bị người mới nhầm vì cả hai xuất hiện ở mép chân. Khác biệt CHÍNH ở nguyên nhân gốc là gì?",
      opts: [
        "Cháy cạnh ở chân; chảy tràn chỉ ở gân mặt sau",
        "Không khác — cả hai do dòng điện quá cao",
        "Cháy cạnh: nhiệt/tốc độ quá cao; chảy tràn: quá thấp",
        "Cháy cạnh chỉ ở inox; chảy tràn chỉ ở thép carbon",
      ],
      exp: "Andaakatto (アンダーカット) = Lẹm: do dòng hoặc tốc độ QUÁ CAO — hồ quang khoét một rãnh vào kim loại nền ở mép trước khi bể kịp lấp. Oobaraappu (オーバーラップ) = Chồng mép: do dòng hoặc tốc độ QUÁ THẤP — kim loại nóng chảy tràn lên mặt kim loại nền nguội mà không hòa nhập. Chúng ở hai đầu đối lập của phổ nhiệt đầu vào, đều tạo điểm tập trung ứng suất ở mép nhưng từ những lỗi về cơ bản ngược nhau. 🇯🇵 MẸO: Thợ đàn anh nói 'Denryuu wa tekisetsu ni' (電流は適切に / dùng dòng thích hợp) — quá thấp cũng phiền như quá cao; cả hai hướng lỗi đều tạo khuyết tật mép, chỉ khác loại.",
    },
    id: {
      q: "Andaakatto (アンダーカット / undercut) dan Oobaraappu (オーバーラップ / overlap) sering dikira sama oleh pemula karena keduanya muncul di ujung las. Apa perbedaan UTAMA pada penyebab akarnya?",
      opts: [
        "Undercut di akar; overlap hanya di manik belakang",
        "Tidak beda — keduanya karena arus terlalu tinggi",
        "Undercut: panas/kecepatan terlalu tinggi; overlap: terlalu rendah",
        "Undercut hanya di stainless; overlap hanya di baja karbon",
      ],
      exp: "Andaakatto (アンダーカット) = Undercut: disebabkan arus atau kecepatan TERLALU TINGGI — busur menggerus alur ke logam dasar di ujung sebelum kolam sempat mengisinya. Oobaraappu (オーバーラップ) = Overlap: disebabkan arus atau kecepatan TERLALU RENDAH — logam cair mengalir di atas permukaan logam dasar dingin tanpa menyatu. Keduanya di ujung berlawanan dari spektrum masukan panas, sama-sama menciptakan pemusat tegangan di ujung tapi dari kesalahan las yang pada dasarnya berlawanan. 🇯🇵 TIPS: Tukang senior berkata 'Denryuu wa tekisetsu ni' (電流は適切に / gunakan arus yang tepat) — terlalu rendah sama bermasalahnya dengan terlalu tinggi; kedua arah kesalahan menciptakan cacat ujung, hanya jenis berbeda.",
    },
  },
  403: {
    vi: {
      q: "Sau khi hàn, kiểm tra RT cho thấy các đốm tối tròn bên trong mối hàn. Giám sát nói 'Buroohoru ga aru!' (ブローホールがある！). Nguyên nhân là gì?",
      opts: [
        "Dùng sai kim loại điền cho vật liệu cơ bản",
        "Dòng điện quá cao đưa quá nhiều nhiệt vào mối hàn",
        "Tốc độ quá chậm làm kim loại chồng quá nhiều",
        "Khí bị kẹt do ẩm, gỉ, dầu hoặc bảo vệ khí kém",
      ],
      exp: "Buroohoru (ブローホール) = Rỗ khí / lỗ khí. Khí kẹt trong kim loại hàn đã đông, hiện như đốm tối tròn trên phim RT. Nguyên nhân: ẩm trên kim loại nền, gỉ, dầu, sơn, che khí không đủ, hồ quang quá dài, kim loại bù nhiễm bẩn. Phòng ngừa: làm sạch kim loại nền, kiểm lưu lượng khí, giữ chiều dài hồ quang đúng. 🇯🇵 MẸO: Ở xưởng đóng tàu và công trường Nhật, xử lý bề mặt (下地処理 / shitaji-shori) trước khi hàn được coi rất nghiêm túc. Thợ phải mài bỏ gỉ, lau bằng acetone và xác nhận không nhiễm bẩn trước khi bật hồ quang. Nếu rỗ khí xuất hiện trên RT và truy về do bạn chuẩn bị kém, bạn sẽ phải hàn lại bằng thời gian của mình — và bạn sẽ nhớ điều đó.",
    },
    id: {
      q: "Setelah mengelas, inspeksi RT menunjukkan bintik gelap bulat di dalam las. Supervisor berkata 'Buroohoru ga aru!' (ブローホールがある！). Apa penyebabnya?",
      opts: [
        "Logam pengisi yang salah untuk bahan induk",
        "Arus terlalu tinggi memberi terlalu banyak panas",
        "Kecepatan terlalu lambat sehingga logam menumpuk",
        "Gas terperangkap dari lembap, karat, minyak, atau pelindung buruk",
      ],
      exp: "Buroohoru (ブローホール) = Blowhole / Porositas. Gas terperangkap di dalam logam las yang membeku, tampak sebagai bintik gelap bulat pada film RT. Penyebab: kelembapan pada logam dasar, karat, minyak, cat, gas pelindung kurang, busur terlalu panjang, pengisi terkontaminasi. Pencegahan: bersihkan logam dasar, periksa aliran gas, jaga panjang busur yang benar. 🇯🇵 TIPS: Di galangan dan lokasi konstruksi Jepang, persiapan logam dasar (下地処理 / shitaji-shori) sebelum mengelas ditanggapi sangat serius. Pekerja diharapkan menggerinda karat, mengelap dengan aseton, dan memastikan nol kontaminasi sebelum menyalakan busur. Jika blowhole muncul pada RT dan tertelusur ke persiapan Anda yang buruk, Anda akan diminta mengelas ulang dengan waktu Anda sendiri — dan Anda akan mengingatnya.",
    },
  },
  404: {
    vi: {
      q: "Phim RT cho thấy các bóng tối kéo dài thành hàng dọc mối hàn. Đây là loại khuyết tật gì?",
      opts: [
        "Lẫn xỉ (スラグ巻き込み) còn lại giữa các lượt",
        "Chảy tràn (オーバーラップ) ở bề mặt mối hàn",
        "Rỗ khí tròn (ブローホール) trong mối hàn",
        "Rãnh cháy cạnh (アンダーカット) ở mép",
      ],
      exp: "Suragu-makikomi (スラグ巻き込み) = Lẫn xỉ. Xỉ (ノロ) từ lượt trước không được bỏ hết trước lượt kế — bị kẹt trong mối hàn. Hiện trên RT như hình tối kéo dài bất thường. Phòng ngừa: đục và chải sắt kỹ giữa MỖI lượt. Đây là lý do 'Chippingu' rất quan trọng ở Nhật. 🇯🇵 MẸO: Ở Nhật, búa đục (チッピングハンマー) được vung dứt khoát — không phải gõ nhẹ. Đàn anh nói 'Noro wa shikkari tore' (ノロはしっかり取れ / bỏ xỉ cho sạch). Nếu bạn bỏ qua vì vội và RT trả về lẫn xỉ, tổ trưởng (職長 / shokuchoo) sẽ có một cuộc nói chuyện rất thẳng với bạn.",
    },
    id: {
      q: "Film RT menunjukkan bayangan gelap memanjang dalam garis di sepanjang las. Jenis cacat apa ini?",
      opts: [
        "Inklusi terak (スラグ巻き込み) yang tertinggal antar pass",
        "Overlap (オーバーラップ) di permukaan las",
        "Pori gas bulat (ブローホール) di dalam las",
        "Alur undercut (アンダーカット) di kaki las",
      ],
      exp: "Suragu-makikomi (スラグ巻き込み) = Inklusi terak. Terak (ノロ) dari pass sebelumnya tak dibuang tuntas sebelum pass berikutnya — terperangkap di dalam las. Tampak pada RT sebagai bentuk gelap memanjang tak beraturan. Pencegahan: ketuk dan sikat kawat menyeluruh di antara SETIAP pass. Inilah mengapa 'Chippingu' sangat penting di Jepang. 🇯🇵 TIPS: Di Jepang, palu ketuk (チッピングハンマー) diayun dengan niat penuh — bukan ketukan lembut. Tukang senior berkata 'Noro wa shikkari tore' (ノロはしっかり取れ / buang terak sampai bersih). Jika Anda melewatkannya karena terburu-buru, dan RT kembali dengan inklusi terak, mandor (職長 / shokuchoo) akan berbicara sangat langsung dengan Anda.",
    },
  },
  405: {
    vi: {
      q: "'Yuugou-furyou' (融合不良) — viết tắt LOF — là gì và vì sao nguy hiểm?",
      opts: [
        "Đường hàn quá hẹp so với mối nối",
        "Kim loại hàn không liên kết với kim loại cơ bản — như vết nứt",
        "Oxy hóa bề mặt do bảo vệ khí kém",
        "Quá nhiều kim loại hàn — gia cường quá mức",
      ],
      exp: "Yuugou-furyou (融合不良) = Thiếu hòa nhập (LOF). Kim loại hàn nằm cạnh nhưng KHÔNG liên kết luyện kim với kim loại nền hoặc lượt trước. Nguyên nhân: dòng không đủ, kỹ thuật sai, nhiễm bẩn. LOF dạng phẳng (như vết nứt) và KHÔNG dễ phát hiện bằng RT như khuyết tật tròn. UT tốt hơn để phát hiện LOF. Rất nguy hiểm ở mối kết cấu. 🇯🇵 MẸO: Yuugou-furyou đặc biệt đáng sợ ở nhà máy hạt nhân và LNG Nhật vì có thể vô hình trên phim RT và không rò khi thử áp ban đầu — chỉ để hỏng thảm khốc dưới ứng suất chu kỳ nhiều năm sau. Khi người kiểm tra Nhật nói 'UT de kite' (UTで来て / mang kết quả UT về), họ nghi có LOF. Hãy xem UT rất nghiêm túc.",
    },
    id: {
      q: "Apa itu 'Yuugou-furyou' (融合不良) — disingkat LOF — dan mengapa berbahaya?",
      opts: [
        "Manik las terlalu sempit untuk sambungan",
        "Logam las tidak menyatu dengan logam induk — seperti retak",
        "Oksidasi permukaan karena pelindung gas buruk",
        "Logam las terlalu banyak — penguatan berlebih",
      ],
      exp: "Yuugou-furyou (融合不良) = Lack of Fusion (LOF). Logam las berada di sebelah tapi TIDAK terikat secara metalurgi ke logam dasar atau pass sebelumnya. Penyebab: arus kurang, teknik salah, kontaminasi. LOF bersifat planar (seperti retak) dan TIDAK semudah cacat bulat terdeteksi RT. UT lebih baik untuk mendeteksi LOF. Sangat berbahaya pada las struktur. 🇯🇵 TIPS: Yuugou-furyou terutama ditakuti di fasilitas nuklir dan LNG Jepang karena bisa tak terlihat pada film RT dan mungkin tak bocor saat uji tekan awal — hanya untuk gagal katastrofik di bawah tegangan siklik bertahun-tahun kemudian. Saat inspektor Jepang berkata 'UT de kite' (UTで来て / kembali dengan hasil UT), mereka mencurigai LOF. Tanggapi UT dengan sangat serius.",
    },
  },
  406: {
    vi: {
      q: "Khác biệt giữa 'Teion-ware' (低温割れ) và 'Kouon-ware' (高温割れ) là gì?",
      opts: [
        "Teion-ware xảy ra trên 500°C; kouon-ware dưới 0°C",
        "Cùng một khuyết tật — tên gọi tùy công ty",
        "Nứt nguội xảy ra vài giờ sau; nứt nóng khi đông đặc",
        "Nứt nguội chỉ ở inox; nứt nóng chỉ ở thép carbon",
      ],
      exp: "Teion-ware (低温割れ) = Nứt nguội / nứt do hydro. Hình thành SAU khi hàn (hàng giờ đến hàng ngày) ở nhiệt độ phòng. Cần: HAZ cứng + hydro khuếch tán + ứng suất kéo. Phòng ngừa: nung trước, que ít hydro, PWHT. Kouon-ware (高温割れ) = Nứt nóng. Hình thành NGAY khi đông. Do tạp chất điểm nóng chảy thấp. Hai vấn đề rất khác cần giải pháp khác. 🇯🇵 MẸO: Ở Nhật, câu '低温割れに注意' (teion-ware ni chuui / coi chừng nứt nguội) xuất hiện trong WPS cho thép cường độ cao hoặc dày. Nếu hàn SM490 trở lên trong điều kiện lạnh ngoài trời (công trường mùa đông ở Tohoku hay Hokkaido), nung trước không phải tùy chọn — đó là nghĩa vụ an toàn nghiêm túc. Đừng bao giờ bỏ kiểm nung trước.",
    },
    id: {
      q: "Apa perbedaan 'Teion-ware' (低温割れ) dan 'Kouon-ware' (高温割れ)?",
      opts: [
        "Teion-ware terjadi di atas 500°C; kouon-ware di bawah 0°C",
        "Cacat yang sama — namanya tergantung perusahaan",
        "Retak dingin muncul berjam-jam kemudian; retak panas saat membeku",
        "Retak dingin hanya di stainless; retak panas hanya di baja karbon",
      ],
      exp: "Teion-ware (低温割れ) = Retak dingin / retak akibat hidrogen. Terbentuk SETELAH mengelas (berjam-jam hingga berhari-hari kemudian) pada suhu ruang. Membutuhkan: HAZ keras + hidrogen difusi + tegangan tarik. Pencegahan: preheat, elektroda rendah hidrogen, PWHT. Kouon-ware (高温割れ) = Retak panas. Terbentuk SEKETIKA saat pembekuan. Disebabkan pengotor bertitik leleh rendah. Dua masalah sangat berbeda yang butuh solusi berbeda. 🇯🇵 TIPS: Di Jepang, frasa '低温割れに注意' (teion-ware ni chuui / waspadai retak dingin) muncul dalam WPS untuk baja kekuatan tinggi atau tebal. Jika mengelas SM490 atau lebih kuat di kondisi dingin luar ruangan (lokasi konstruksi musim dingin di Tohoku atau Hokkaido), preheat bukan opsional — itu kewajiban keselamatan serius. Jangan pernah melewatkan pemeriksaan preheat.",
    },
  },
  407: {
    vi: {
      q: "Ở cuối một đường hàn, hồ quang bị cắt đột ngột không lấp hố đúng. Khuyết tật nào có thể hình thành?",
      opts: [
        "Cháy cạnh (アンダーカット) dọc mép",
        "Chảy tràn (オーバーラップ) ở cuối đường hàn",
        "Rỗ khí (ブローホール) trong đường hàn",
        "Nứt miệng hồ quang (クレーター割れ) ở cuối mối hàn",
      ],
      exp: "Kureetaa-ware (クレーター割れ) = Nứt hố. Khi bạn dừng hồ quang đột ngột, một hố lõm còn lại. Khi nó đông và co nhanh hơn mối hàn xung quanh, vết nứt hình thành từ tâm ra ngoài. Phòng ngừa: dùng kỹ thuật lấp hố — giảm dòng từ từ và lấp đầy hố trước khi ngắt hồ quang. Đừng bao giờ chỉ dừng giữa chừng. 🇯🇵 MẸO: Trên công trường Nhật, giám sát có thể xem cuối mối hàn của bạn để kiểm kỹ thuật lấp hố. Câu 'Owari wa shikkari' (終わりはしっかり / kết thúc cho chỉn chu) rất phổ biến. Nứt hố ở cuối mối hàn bị xem là dấu hiệu vội vàng cẩu thả — nó phản ánh tính chuyên nghiệp của bạn nhiều như chính mối hàn.",
    },
    id: {
      q: "Di akhir jalur las, busur diputus tiba-tiba tanpa pengisian kawah yang benar. Cacat apa yang mungkin terbentuk?",
      opts: [
        "Undercut (アンダーカット) di sepanjang kaki",
        "Overlap (オーバーラップ) di ujung manik",
        "Blowhole (ブローホール) di dalam manik",
        "Retak kawah (クレーター割れ) di ujung las",
      ],
      exp: "Kureetaa-ware (クレーター割れ) = Retak kawah. Saat Anda menghentikan busur mendadak, tersisa kawah cekung. Saat ini membeku dan menyusut lebih cepat dari las sekitarnya, retak terbentuk dari tengah ke luar. Pencegahan: pakai teknik pengisian kawah — kurangi arus bertahap dan isi kawah sebelum memutus busur. Jangan pernah hanya berhenti di tengah las. 🇯🇵 TIPS: Di lokasi Jepang, supervisor bisa mengamati akhir las Anda khusus untuk memeriksa teknik pengisian kawah. Frasa 'Owari wa shikkari' (終わりはしっかり / selesaikan dengan benar) umum. Retak kawah di akhir las dilihat sebagai tanda ketergesaan ceroboh — mencerminkan profesionalisme Anda sebanyak lasnya sendiri.",
    },
  },
  408: {
    vi: {
      q: "Một mối hàn đạt VT (Mokushi-shiken / 目視試験) với bề mặt nhẵn hoàn hảo. Đạt VT có đảm bảo mối hàn không có rỗ khí (ブローホール) hoặc lẫn xỉ (スラグ巻き込み) bên trong không?",
      opts: [
        "Không — VT chỉ thấy bề mặt; bên trong cần RT hoặc UT",
        "Có, nhưng chỉ với hàn góc, không phải hàn rãnh",
        "Không, nhưng chỉ vì người kiểm VT bỏ qua rỗ khí",
        "Có — bề mặt hoàn hảo nghĩa là bên trong cũng hoàn hảo",
      ],
      exp: "VT (Kiểm tra ngoại quan / 目視試験) là bước kiểm đầu tiên và cơ bản nhất — nhanh, miễn phí, bắt được khuyết tật bề mặt rõ như nứt, lẹm, chồng mép và vấn đề hình học. Nhưng VT KHÔNG BAO GIỜ phát hiện khuyết tật bên trong: rỗ khí (ブローホール) và lẫn xỉ (スラグ巻き込み) hình thành hoàn toàn trong kim loại hàn và vô hình với mắt dù bề mặt nhẵn thế nào. Đây chính là lý do RT và UT tồn tại như bước riêng, bắt buộc cho mối hàn quan trọng. 🇯🇵 MẸO: Người kiểm tra Nhật nói 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Ngoài đẹp nhưng trong không thấy được) — một đường hàn trông hoàn hảo không phải bằng chứng vững chắc bên trong.",
    },
    id: {
      q: "Sebuah las lulus VT (Mokushi-shiken / 目視試験) dengan permukaan mulus sempurna. Apakah lulus VT menjamin las tak punya porositas (ブローホール) atau inklusi terak (スラグ巻き込み) di dalamnya?",
      opts: [
        "Tidak — VT hanya melihat permukaan; bagian dalam perlu RT atau UT",
        "Ya, tapi hanya untuk las sudut, bukan las alur",
        "Tidak, tapi hanya karena inspektur VT mengabaikan porositas",
        "Ya — permukaan sempurna berarti bagian dalam juga sempurna",
      ],
      exp: "VT (Visual Testing / 目視試験) adalah pemeriksaan pertama dan paling mendasar — cepat, gratis, menangkap cacat permukaan jelas seperti retak, undercut, overlap, dan masalah geometri. Tapi VT TIDAK PERNAH bisa mendeteksi cacat internal: porositas (ブローホール) dan inklusi terak (スラグ巻き込み) terbentuk sepenuhnya di dalam logam las dan tak terlihat mata sebagus apa pun permukaannya. Inilah persis mengapa RT dan UT ada sebagai langkah terpisah dan wajib untuk las kritis. 🇯🇵 TIPS: Inspektor Jepang berkata 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Meski luarnya indah, kami tak bisa melihat dalamnya) — jalur yang tampak sempurna bukan bukti kesehatan internal.",
    },
  },
  409: {
    vi: {
      q: "'PT' (Shinto-tansho / 浸透探傷試験) hoạt động thế nào?",
      opts: [
        "Sóng âm phản xạ lại từ khuyết tật bên trong",
        "Chất màu đỏ thấm vào vết nứt và hiện trên lớp hiện màu trắng",
        "Bột sắt từ tụ lại ở chỗ khuyết tật",
        "Tia X đi qua mối hàn lên phim",
      ],
      exp: "PT (Kiểm tra thẩm thấu / 浸透探傷試験): 1) Bôi chất thẩm thấu đỏ. 2) Chờ (thời gian thấm). 3) Bỏ phần thừa. 4) Bôi bột hiện trắng. 5) Vết nứt đã hút chất thẩm thấu sẽ 'rỉ ra' thành vết đỏ trên nền trắng. Phát hiện: chỉ vết nứt và lỗ MỞ BỀ MẶT. Dùng cho vật liệu KHÔNG TỪ TÍNH (inox, nhôm). Không phát hiện khuyết tật bên trong. 🇯🇵 MẸO: Ở nhà máy thực phẩm, dược và bán dẫn Nhật dùng nhiều inox, PT được làm sau mỗi lần sửa mối hàn. 'Thời gian thấm' (浸透時間 / shintou-jikan) then chốt — vội lau quá sớm là bỏ sót vết nứt nhỏ. Người kiểm tra thường dùng đồng hồ và sẽ từ chối kết quả nếu không đủ thời gian thấm. Kiên nhẫn và kỷ luật quy trình là tất cả trong công việc kiểm tra ở Nhật.",
    },
    id: {
      q: "Bagaimana cara kerja 'PT' (Shinto-tansho / 浸透探傷試験)?",
      opts: [
        "Gelombang suara memantul dari cacat di dalam",
        "Cairan merah meresap ke retak dan terlihat di developer putih",
        "Serbuk besi magnetis berkumpul di cacat",
        "Sinar X menembus las ke film",
      ],
      exp: "PT (Penetrant Testing / 浸透探傷試験): 1) Oleskan cairan penetran merah. 2) Tunggu (dwell time). 3) Buang kelebihannya. 4) Oleskan bubuk developer putih. 5) Retak yang menyerap penetran akan 'merembes' sebagai tanda merah di latar putih. Mendeteksi: hanya retak dan pit TERBUKA di PERMUKAAN. Bekerja pada material NON-MAGNETIK (stainless, aluminium). Tak bisa mendeteksi cacat internal. 🇯🇵 TIPS: Di fasilitas makanan, farmasi, dan semikonduktor Jepang yang banyak memakai stainless, PT dilakukan setelah tiap perbaikan las. 'Dwell time' (浸透時間 / shintou-jikan) krusial — tergesa mengelap terlalu cepat berarti melewatkan retak halus. Inspektor sering memakai timer dan akan menolak hasil jika dwell time tak dipatuhi. Kesabaran dan disiplin proses adalah segalanya dalam pekerjaan inspeksi Jepang.",
    },
  },
  410: {
    vi: {
      q: "Khi nào bạn dùng 'PT' (浸透探傷) thay cho 'MT' (磁粉探傷) cho thép không gỉ?",
      opts: [
        "PT và MT thay thế nhau được — dùng cái nào cũng được",
        "MT tốt hơn cho inox — luôn chọn MT",
        "Inox austenit không nhiễm từ, nên MT không dùng được",
        "Cả hai đều không dùng được cho inox — chỉ dùng RT",
      ],
      exp: "MT (Kiểm tra hạt từ / 磁粉探傷試験) dùng từ trường hút bột sắt vào khuyết tật — CHỈ hoạt động trên vật liệu từ tính (ferrit). Inox austenit (SUS304, SUS316) KHÔNG TỪ TÍNH. Với inox, bạn PHẢI dùng PT (浸透探傷). Inox có hàm lượng ferrit (như SUS430) có thể cho phép MT — kiểm loại vật liệu trước. 🇯🇵 MẸO: Trước khi làm NDT, xác nhận loại vật liệu (材料確認), ví dụ từ chứng chỉ vật liệu (ミルシート / mirushiito). Chọn MT cho inox austenit là lỗi sẽ bị phát hiện ngay.",
    },
    id: {
      q: "Kapan Anda memakai 'PT' (浸透探傷) alih-alih 'MT' (磁粉探傷) untuk baja tahan karat?",
      opts: [
        "PT dan MT bisa saling menggantikan — pakai yang mana saja",
        "MT lebih baik untuk stainless — selalu pilih MT",
        "Stainless austenitik non-magnetis, jadi MT tidak bekerja",
        "Keduanya tidak bisa untuk stainless — pakai RT saja",
      ],
      exp: "MT (Magnetic Particle Testing / 磁粉探傷試験) memakai medan magnet untuk menarik bubuk besi ke cacat — HANYA bekerja pada material magnetik (feritik). Stainless austenitik (SUS304, SUS316) NON-MAGNETIK. Untuk stainless, Anda HARUS memakai PT (浸透探傷). Stainless berkandungan ferit (seperti SUS430) mungkin memungkinkan MT — periksa jenis material dulu. 🇯🇵 TIPS: Sebelum NDT apa pun, pastikan jenis material (材料確認), misalnya dari sertifikat pabrik (ミルシート / mirushiito). Memilih MT untuk baja tahan karat austenitik adalah kesalahan yang langsung ketahuan.",
    },
  },
  411: {
    vi: {
      q: "'UT' (Cho-onpa-tansho / 超音波探傷試験) giỏi phát hiện gì hơn so với RT?",
      opts: [
        "Kiểm tra độ tinh khiết khí bảo vệ",
        "Tìm rỗ khí tròn (ブローホール)",
        "Tìm vết nứt bề mặt nhìn thấy bằng mắt",
        "Tìm khuyết tật dạng phẳng như nứt và không ngấu",
      ],
      exp: "UT (Siêu âm) truyền sóng âm tần số cao vào kim loại. Khuyết tật dạng phẳng (nứt, không ngấu, tách lớp) phản xạ âm mạnh về đầu dò nên UT phát hiện tốt. RT (tia X) tốt hơn cho khuyết tật dạng khối (rỗ tròn, xỉ). Với mối hàn quan trọng có thể cần cả hai. 🇯🇵 MẸO: Ở Nhật, kỹ thuật viên UT được chứng nhận theo JIS Z 2305 bởi Hiệp hội Kiểm tra Không phá hủy Nhật Bản (日本非破壊検査協会). Đánh giá của họ quyết định đạt hay không — nếu họ thấy chỉ thị, hãy sửa thay vì tranh cãi.",
    },
    id: {
      q: "'UT' (Cho-onpa-tansho / 超音波探傷試験) unggul mendeteksi apa dibanding RT?",
      opts: [
        "Memeriksa kemurnian gas pelindung",
        "Menemukan pori gas bulat (ブローホール)",
        "Menemukan retak permukaan yang terlihat mata",
        "Menemukan cacat planar seperti retak dan kurang fusi",
      ],
      exp: "UT (Uji Ultrasonik) mengirim gelombang suara frekuensi tinggi ke logam. Cacat planar (retak, kurang fusi, laminasi) memantulkan suara kuat ke probe, sehingga UT mendeteksinya dengan baik. RT (sinar X) lebih baik untuk cacat volumetrik (pori bulat, terak). Untuk las kritis, keduanya bisa diwajibkan. 🇯🇵 TIPS: Di Jepang, teknisi UT disertifikasi menurut JIS Z 2305 oleh Japanese Society for Non-Destructive Inspection (日本非破壊検査協会). Penilaian mereka menentukan diterima atau tidak — jika mereka menemukan indikasi, perbaiki, jangan berdebat.",
    },
  },
  412: {
    vi: {
      q: "'RT' (Hoshasen-toka-shiken / 放射線透過試験) thường được gọi là gì trên công trường Nhật, và hàm ý an toàn là gì?",
      opts: [
        "'Rentogen' — mọi người phải rời khu vực kiểm soát",
        "'Rentogen' — hoàn toàn an toàn, không cần di chuyển",
        "'Cho-onpa' — giống hệt kiểm tra siêu âm",
        "Không có tên lóng — và bức xạ luôn vô hại",
      ],
      exp: "RT ở công trường Nhật được gọi là Rentogen (レントゲン) — theo tên nhà vật lý người Đức Röntgen. Khi chụp RT, khu vực kiểm soát bức xạ (管理区域) được thiết lập và mọi người phải rời đi trước khi chụp. Với thiết bị tia X phải chỉ định trưởng nhóm công việc tia X (エックス線作業主任者). Kết quả RT lưu trên phim làm hồ sơ chất lượng lâu dài. 🇯🇵 MẸO: Khi nghe 'Rentogen wo torimasu — taiki shite kudasai' (レントゲンを撮ります — 待機してください / Chuẩn bị chụp X-quang — xin chờ), hãy dừng ngay và đến khu vực chờ.",
    },
    id: {
      q: "'RT' (Hoshasen-toka-shiken / 放射線透過試験) biasa disebut apa di lokasi Jepang, dan apa implikasi keselamatannya?",
      opts: [
        "'Rentogen' — semua orang harus keluar dari area kendali",
        "'Rentogen' — sepenuhnya aman, tidak perlu pindah",
        "'Cho-onpa' — sama dengan uji ultrasonik",
        "Tidak ada julukan — dan radiasinya selalu tidak berbahaya",
      ],
      exp: "RT disebut Rentogen (レントゲン) di lokasi Jepang — dari nama fisikawan Jerman Röntgen. Saat RT, area kendali radiasi (管理区域) dibuat dan semua orang harus keluar sebelum pemotretan. Untuk peralatan sinar X, kepala kerja sinar X (エックス線作業主任者) harus ditunjuk. Hasil RT tersimpan di film sebagai catatan mutu permanen. 🇯🇵 TIPS: Saat mendengar 'Rentogen wo torimasu — taiki shite kudasai' (レントゲンを撮ります — 待機してください / Akan memotret sinar X — harap menunggu), segera berhenti dan pindah ke area tunggu.",
    },
  },
  413: {
    vi: {
      q: "Một mối hàn đạt VT nhưng trượt RT. Phim RT cho thấy đốm tối tròn bên trong. Đây là loại khuyết tật gì và vì sao VT không bắt được?",
      opts: [
        "Gia cường quá cao — lẽ ra VT phải thấy",
        "Rỗ khí bên trong — VT chỉ thấy bề mặt",
        "Chảy tràn ở mép — lẽ ra VT phải thấy",
        "Cháy cạnh bề mặt — lẽ ra VT phải thấy",
      ],
      exp: "VT (Kiểm tra ngoại quan) chỉ phát hiện khuyết tật BỀ MẶT. Khuyết tật bên trong — như rỗ khí (ブローホール), lẫn xỉ (スラグ巻き込み) và lỗi hòa nhập — hoàn toàn vô hình với mắt. Đây là lý do RT (tia X) và UT bắt buộc cho mối hàn quan trọng ở Nhật: đạt VT KHÔNG đảm bảo mối hàn vững chắc bên trong. 🇯🇵 MẸO: Đường hàn nhẵn đẹp đạt VT hoàn hảo gọi là 'kirei na bead' (きれいなビード) và được nể. Nhưng người kiểm tra Nhật cũng nói 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Ngoài đẹp nhưng trong không thấy). Đây là lý do RT và UT tồn tại — chất lượng bên trong cũng quan trọng như vậy.",
    },
    id: {
      q: "Sebuah las lulus VT tapi gagal RT. Film RT menunjukkan bintik gelap bulat internal. Jenis cacat apa ini dan mengapa VT tak menangkapnya?",
      opts: [
        "Penguatan terlalu tinggi — VT seharusnya melihatnya",
        "Porositas internal — VT hanya melihat permukaan",
        "Overlap di kaki las — VT seharusnya melihatnya",
        "Undercut permukaan — VT seharusnya melihatnya",
      ],
      exp: "VT (Visual Testing) hanya mendeteksi cacat PERMUKAAN. Cacat internal — seperti porositas (ブローホール), inklusi terak (スラグ巻き込み), dan cacat fusi — sepenuhnya tak terlihat mata. Inilah mengapa RT (sinar-X) dan UT wajib untuk las kritis di Jepang: lulus VT TIDAK menjamin las sehat secara internal. 🇯🇵 TIPS: Jalur las yang mulus indah dan lulus VT sempurna disebut 'kirei na bead' (きれいなビード) dan dihargai. Tapi inspektor Jepang juga berkata 'Soto wa kirei demo, naka wa mienai' (外はきれいでも、中は見えない / Meski luarnya indah, kami tak bisa melihat dalamnya). Inilah mengapa RT dan UT ada — kualitas dalam sama pentingnya.",
    },
  },
  414: {
    vi: {
      q: "'Lamellar Tearing' (ラメラテア) là gì và phổ biến nhất ở cấu hình mối nối nào?",
      opts: [
        "Vết nứt bề mặt do mài quá mạnh",
        "Vết nứt nóng xuất hiện ngay sau khi hàn",
        "Nứt dạng lớp theo chiều dày tấm, như ở mối T",
        "Một loại rỗ khí chỉ có ở hàn ống",
      ],
      exp: "Ramera-tea (ラメラテア) = Nứt lớp. Thép được cán ở nhà máy — tạp chất phi kim thành lớp phẳng song song mặt tấm. Khi hàn tạo ứng suất kéo XUYÊN qua chiều dày tấm (phổ biến ở mối chữ T, nối cột), các lớp này có thể tách ra. Phòng ngừa: dùng thép ít lưu huỳnh (低硫黄鋼), nung trước, hoặc thiết kế lại mối nối. 🇯🇵 MẸO: Nứt lớp đặc biệt đáng lo ở nối cột nhà cao tầng Nhật (ダイアフラム接合部). Khi kỹ sư quy định thép có đặc tính hướng Z (Z方向特性鋼) trên bản vẽ, nghĩa là họ đang phòng nứt lớp cụ thể. Là thợ hàn, nếu thấy quy cách vật liệu này, hãy biết nó được chọn có lý do — xử lý cẩn thận và tuân WPS chính xác.",
    },
    id: {
      q: "Apa itu 'Lamellar Tearing' (ラメラテア) dan pada konfigurasi sambungan mana paling umum?",
      opts: [
        "Retak permukaan akibat penggerindaan berat",
        "Retak panas yang muncul tepat setelah mengelas",
        "Retak berlapis menembus tebal pelat, mis. sambungan T",
        "Jenis porositas yang hanya ada di las pipa",
      ],
      exp: "Ramera-tea (ラメラテア) = Lamellar tearing. Baja dicanai di pabrik — inklusi non-logam menjadi lapisan datar sejajar permukaan pelat. Saat pengelasan menciptakan tegangan tarik MELALUI tebal pelat (umum di sambungan T, sambungan kolom), lapisan ini bisa terbelah. Pencegahan: pakai baja rendah sulfur (低硫黄鋼), preheat, atau desain ulang sambungan. 🇯🇵 TIPS: Lamellar tearing terutama jadi perhatian di sambungan kolom gedung tinggi Jepang (ダイアフラム接合部). Saat insinyur menetapkan baja properti arah-Z (Z方向特性鋼) di gambar, artinya mereka khusus mencegah lamellar tearing. Sebagai tukang las, jika Anda melihat spesifikasi material ini, ketahui bahwa itu dipilih karena suatu alasan — tangani dengan hati-hati dan ikuti WPS dengan persis.",
    },
  },
  415: {
    vi: {
      q: "Mối hàn của bạn trượt RT vì 'Tokekomi-furyou' (溶込不良). LOP là gì và do đâu?",
      opts: [
        "Ngấu quá sâu — chân bị thủng",
        "Gia cường quá nhiều phía trên mối nối",
        "Rỗ khí tập trung ở chân mối hàn",
        "Mối hàn không tới chân — dòng thấp, tốc độ nhanh",
      ],
      exp: "Tokekomi-furyou (溶込不良) = Thiếu ngấu (LOP). Hồ quang không tới chân mối nối — để lại khe không hòa nhập ở đáy. Nguyên nhân: dòng không đủ, tốc độ quá nhanh, khe chân quá nhỏ, góc que sai. Trong thi chứng chỉ JIS Nhật, thiếu ngấu chân là trượt tự động. 🇯🇵 MẸO: Trong thi thực hành JIS hàn rãnh, người kiểm tra mài và uốn mẫu — LOP ở chân sẽ nứt bung ngay khi thử uốn (曲げ試験 / mage-shiken). Không giấu được. Đây là lý do thợ Nhật luyện lượt chân đến ám ảnh. Câu 'Shosou ga inochi' (初層が命 / lượt đầu là mạng sống) phản ánh sự tôn trọng dành cho lượt chân.",
    },
    id: {
      q: "Las Anda gagal inspeksi RT karena 'Tokekomi-furyou' (溶込不良). Apa itu LOP dan apa penyebabnya?",
      opts: [
        "Penetrasi berlebih — akar tembus",
        "Penguatan berlebih di atas sambungan",
        "Porositas berkumpul di akar las",
        "Las tidak mencapai akar — arus rendah, terlalu cepat",
      ],
      exp: "Tokekomi-furyou (溶込不良) = Lack of Penetration (LOP). Busur tak mencapai akar sambungan — meninggalkan celah tak menyatu di dasar. Penyebab: arus kurang, kecepatan jalan terlalu cepat, root gap terlalu kecil, sudut elektroda salah. Dalam ujian sertifikasi JIS Jepang, penetrasi akar tak lengkap adalah kegagalan otomatis. 🇯🇵 TIPS: Dalam uji praktik JIS las alur, inspektor menggerinda dan menekuk benda uji — LOP di akar akan retak terbuka seketika saat uji tekuk (曲げ試験 / mage-shiken). Tak ada yang bisa disembunyikan. Inilah mengapa tukang las Jepang berlatih root pass secara obsesif. Frasa 'Shosou ga inochi' (初層が命 / pass pertama adalah nyawa) mencerminkan betapa dihormatinya root pass.",
    },
  },
  416: {
    vi: {
      q: "Khi nào dùng 'MT' (Jifun-tansho / 磁粉探傷試験) thay vì PT, và nó phát hiện được gì mà PT không?",
      opts: [
        "MT còn tìm được nứt gần bề mặt ở thép nhiễm từ",
        "MT chỉ dùng cho mối hàn nhôm",
        "MT dùng được cho kim loại không nhiễm từ, khác PT",
        "MT và PT tìm đúng cùng loại khuyết tật",
      ],
      exp: "MT (Kiểm tra hạt từ / 磁粉探傷試験): Tạo từ trường lên vật — khuyết tật làm gián đoạn từ trường và bột sắt tụ tại các điểm này. MT phát hiện cả khuyết tật bề mặt LẪN gần bề mặt (hơi dưới bề mặt) trên vật liệu từ tính (thép carbon, inox ferrit). PT chỉ phát hiện khuyết tật MỞ ra bề mặt. MT nhạy hơn với vật liệu từ tính — được ưa dùng ở xưởng đóng tàu Nhật cho mối thép carbon. 🇯🇵 MẸO: MT ướt huỳnh quang (蛍光磁粉探傷) dưới đèn UV cho độ nhạy cao. Nếu thấy người cầm đèn UV và bình xịt gần mối hàn của bạn, có lẽ là đang làm MT — giữ khu vực hàn sạch và dễ tiếp cận.",
    },
    id: {
      q: "Kapan 'MT' (Jifun-tansho / 磁粉探傷試験) dipakai alih-alih PT, dan apa yang bisa dideteksinya yang PT tak bisa?",
      opts: [
        "MT juga menemukan retak dekat permukaan di baja magnetis",
        "MT hanya untuk las aluminium",
        "MT bekerja pada logam non-magnetis, tidak seperti PT",
        "MT dan PT menemukan cacat yang persis sama",
      ],
      exp: "MT (Magnetic Particle Testing / 磁粉探傷試験): Menerapkan medan magnet ke benda kerja — cacat mengganggu medan dan bubuk besi menggerombol di titik-titik ini. MT mendeteksi cacat permukaan DAN dekat-permukaan (sedikit di bawah permukaan) pada material magnetik (baja karbon, stainless feritik). PT hanya mendeteksi cacat yang TERBUKA ke permukaan. MT lebih sensitif untuk material magnetik — disukai di galangan Jepang untuk las baja karbon. 🇯🇵 TIPS: MT basah fluoresen (蛍光磁粉探傷) di bawah lampu UV memberi sensitivitas tinggi. Jika Anda melihat orang membawa lampu UV dan kaleng semprot di dekat las Anda, kemungkinan itu MT — jaga area las tetap bersih dan mudah dijangkau.",
    },
  },
  417: {
    vi: {
      q: "Nứt nguội (低温割れ / Teion-ware) được gọi là 'nứt do hydro'. BA điều kiện nào phải CÙNG hiện diện để nứt nguội hình thành?",
      opts: [
        "Trời nóng + thép không gỉ + quá nhiều khí bảo vệ",
        "Hydro + tổ chức cứng + ứng suất kéo",
        "Gia nhiệt thấp + tấm dày + chỉ hàn FCAW",
        "Dòng cao + tốc độ nhanh + sai dây",
      ],
      exp: "Nứt nguội (低温割れ) cần ĐỦ CẢ BA: 1) hydro khuếch tán (từ hơi ẩm, bẩn, hoặc vật liệu hàn không phải loại hydro thấp), 2) tổ chức cứng dễ nứt (ví dụ martensite ở vùng HAZ do đương lượng carbon cao hoặc nguội nhanh), và 3) ứng suất kéo (dư hoặc tác dụng). Loại bỏ một yếu tố là ngăn được nứt — vì vậy cần gia nhiệt trước, vật liệu hydro thấp và PWHT khi có quy định. 🇯🇵 MẸO: Que hydro thấp được sấy lại trong lò sấy (乾燥炉 / kansou-ro) và giữ ấm trong tủ giữ nhiệt; chỉ lấy ra lượng đủ dùng cho một ca.",
    },
    id: {
      q: "Retak dingin (低温割れ / Teion-ware) disebut 'retak akibat hidrogen'. TIGA kondisi apa yang harus SEMUA ada agar retak dingin terbentuk?",
      opts: [
        "Cuaca panas + baja tahan karat + gas pelindung berlebih",
        "Hidrogen + struktur mikro keras + tegangan tarik",
        "Preheat rendah + pelat tebal + hanya proses FCAW",
        "Arus tinggi + kecepatan tinggi + kawat salah",
      ],
      exp: "Retak dingin (低温割れ) membutuhkan KETIGANYA: 1) hidrogen difusi (dari kelembapan, kontaminasi, atau bahan las non-hidrogen rendah), 2) struktur mikro keras yang rentan (mis. martensit di HAZ karena karbon ekuivalen tinggi atau pendinginan cepat), dan 3) tegangan tarik (sisa atau beban). Hilangkan salah satunya maka retak tercegah — karena itu pemanasan awal, bahan las hidrogen rendah, dan PWHT bila disyaratkan. 🇯🇵 TIPS: Elektroda hidrogen rendah dikeringkan ulang di oven pengering (乾燥炉 / kansou-ro) dan disimpan hangat di oven penahan; ambil hanya sebanyak yang dibutuhkan untuk satu sesi.",
    },
  },
  418: {
    vi: {
      q: "Một nứt nguội được phát hiện 24 giờ SAU khi hàn — mối hàn trông ổn ngay sau khi hoàn thành. Sao có thể vậy?",
      opts: [
        "Không thể — nứt hoặc xuất hiện ngay hoặc không bao giờ",
        "Vết nứt có từ đầu; người kiểm tra đã bỏ sót",
        "Hydro tụ dần ở điểm ứng suất — nứt chậm",
        "Ai đó vô tình đập vào mối hàn sau khi nguội",
      ],
      exp: "Nứt nguội còn gọi là 'nứt chậm' vì hydro khuếch tán di chuyển chậm đến vùng cứng, ứng suất cao (HAZ) và tích tụ ở đó. Vết nứt có thể chỉ xuất hiện vài giờ — thậm chí vài ngày — sau khi hàn. Vì vậy một số tiêu chuẩn yêu cầu chờ một thời gian trước khi kiểm tra cuối: ví dụ AWS D1.1 yêu cầu chờ 48 giờ với một số loại thép cường độ cao. 🇯🇵 MẸO: Với thép cường độ cao, kế hoạch chất lượng (品質計画書) ghi rõ khi nào được kiểm tra. Hãy sắp xếp công việc theo thời gian chờ đó.",
    },
    id: {
      q: "Retak dingin ditemukan 24 jam SETELAH mengelas — las tampak baik segera setelah selesai. Bagaimana ini mungkin?",
      opts: [
        "Tidak mungkin — retak muncul seketika atau tidak sama sekali",
        "Retak sudah ada sejak awal; inspektur melewatkannya",
        "Hidrogen perlahan berkumpul di titik tegangan — retak tertunda",
        "Seseorang tidak sengaja memukul las setelah dingin",
      ],
      exp: "Retak dingin juga disebut 'retak tertunda' karena hidrogen difusi perlahan berpindah ke area keras bertegangan tinggi (HAZ) dan menumpuk di sana. Retak bisa baru terbentuk beberapa jam — bahkan beberapa hari — setelah pengelasan. Karena itu beberapa spesifikasi mewajibkan waktu tunggu sebelum inspeksi akhir: misalnya AWS D1.1 mewajibkan menunggu 48 jam untuk baja kekuatan tinggi tertentu. 🇯🇵 TIPS: Untuk baja kekuatan tinggi, rencana mutu (品質計画書) menyatakan kapan inspeksi boleh dilakukan. Atur pekerjaan Anda sesuai waktu tunggu itu.",
    },
  },
  419: {
    vi: {
      q: "Trình tự NDT đúng cho một mối hàn kết cấu quan trọng ở Nhật, từ đầu đến cuối, là gì?",
      opts: [
        "Làm tất cả các phép thử cùng lúc để tiết kiệm thời gian",
        "RT → VT → PT/MT → UT",
        "UT → MT → RT → VT",
        "VT → PT/MT (bề mặt) → RT/UT (bên trong)",
      ],
      exp: "Trình tự NDT tiêu chuẩn: 1) VT (目視) — ngoại quan trước, luôn miễn phí và nhanh. 2) PT hoặc MT (浸透 / 磁粉) — khuyết tật bề mặt. 3) RT (放射線) hoặc UT (超音波) — khuyết tật bên trong. Logic: nếu VT hoặc PT/MT tìm ra khuyết tật nghiêm trọng, không cần tiến tới RT/UT đắt. Ở Nhật, thứ tự kiểm tra do kế hoạch chất lượng (品質計画書) kiểm soát. 🇯🇵 MẸO: Khi kỹ sư QC Nhật đưa bạn 品質計画書 (kế hoạch chất lượng), đọc kỹ. Nó ghi chính xác phương pháp NDT nào, ở giai đoạn nào, do ai, cho mỗi mối nối. Ở dự án lớn (cầu, tòa nhà, tàu), kế hoạch chất lượng là tài liệu pháp lý. Sai lệch mà không có phê duyệt bằng văn bản là không được phép — và hồ sơ (記録 / kiroku) phải đầy đủ.",
    },
    id: {
      q: "Apa urutan NDT yang benar untuk las struktur kritis di Jepang, dari pertama ke terakhir?",
      opts: [
        "Lakukan semua uji bersamaan untuk hemat waktu",
        "RT → VT → PT/MT → UT",
        "UT → MT → RT → VT",
        "VT → PT/MT (permukaan) → RT/UT (internal)",
      ],
      exp: "Urutan NDT standar: 1) VT (目視) — visual dulu, selalu gratis dan cepat. 2) PT atau MT (浸透 / 磁粉) — cacat permukaan. 3) RT (放射線) atau UT (超音波) — cacat internal. Logika: jika VT atau PT/MT menemukan cacat serius, tak perlu lanjut ke RT/UT yang mahal. Di Jepang, urutan inspeksi dikendalikan rencana mutu (品質計画書). 🇯🇵 TIPS: Saat insinyur QC Jepang memberi Anda 品質計画書 (rencana mutu), baca dengan teliti. Ia menetapkan persis metode NDT mana, pada tahap apa, oleh siapa, untuk tiap sambungan las. Pada proyek besar (jembatan, gedung, kapal), rencana mutu adalah dokumen legal. Menyimpang darinya tanpa persetujuan tertulis tak diperbolehkan — dan jejak dokumen (記録 / kiroku) harus lengkap.",
    },
  },
  420: {
    vi: {
      q: "Một mối hàn có 'Pit' (ピット) trên bề mặt, và một mối khác có 'Buroohoru' (ブローホール) xác nhận bằng RT không mở ra bề mặt. Cả hai do khí kẹt. Phương pháp kiểm tra nào bắt được CẢ HAI, và cái nào chỉ bắt MỘT?",
      opts: [
        "VT chỉ thấy rỗ mặt; RT thấy cả rỗ khí bên trong",
        "RT không thấy cái nào — RT chỉ thấy nứt",
        "VT và RT đều không thấy; chỉ UT tìm được rỗ",
        "Chỉ VT là đủ, vì rỗ luôn lộ ra bề mặt",
      ],
      exp: "Pitto (ピット) = lỗ khí mở bề mặt, thấy khi VT như hố nhỏ trên mặt mối hàn. Buroohoru (ブローホール) = lỗ khí bên trong, hoàn toàn kín trong mối hàn và vô hình với mắt — VT sẽ bỏ sót hoàn toàn. RT có thể hiện rỗ khí bên trong thành đốm tối tròn trên phim, và tùy hình học có thể cả bằng chứng pit bề mặt. Cả hai chung nguyên nhân gốc (ẩm, nhiễm bẩn, che khí hỏng) nhưng khác ở CHỖ khí bị kẹt khi đông. 🇯🇵 MẸO: Pit (ピット) trên bề mặt mối hàn cuối là trượt VT tự động trong thi JIS Nhật. Sau khi hoàn thành lượt cuối, thợ Nhật quét mắt kỹ bề mặt đường hàn trước khi gọi người kiểm tra — phòng ngừa nghĩa là đảm bảo không sơn, dầu, gỉ hay ẩm trên kim loại nền trước lượt cuối.",
    },
    id: {
      q: "Sebuah las menunjukkan 'Pit' (ピット) di permukaannya, dan las lain menunjukkan 'Buroohoru' (ブローホール) yang dikonfirmasi RT tanpa bukaan permukaan. Kedua cacat disebabkan gas terperangkap. Metode inspeksi mana yang menangkap KEDUANYA, dan mana yang hanya menangkap SATU?",
      opts: [
        "VT hanya menemukan pit; RT juga menemukan blowhole",
        "RT tidak menemukan keduanya — RT hanya menunjukkan retak",
        "Keduanya tak terlihat oleh VT dan RT; hanya UT yang bisa",
        "VT saja cukup, karena pori selalu sampai ke permukaan",
      ],
      exp: "Pitto (ピット) = pori gas terbuka di permukaan, terlihat saat VT sebagai kawah kecil di muka las. Buroohoru (ブローホール) = pori gas internal, sepenuhnya tertutup di dalam las dan tak terlihat mata — VT akan melewatkannya sepenuhnya. RT bisa menampakkan blowhole internal sebagai bintik gelap bulat pada film, dan tergantung geometri mungkin juga menunjukkan bukti pit permukaan. Kedua cacat berbagi penyebab akar yang sama (kelembapan, kontaminasi, kegagalan pelindung) tapi berbeda pada DI MANA gas terperangkap saat pembekuan. 🇯🇵 TIPS: Pit (ピット) pada permukaan las akhir adalah kegagalan VT otomatis dalam uji JIS Jepang. Setelah menyelesaikan pass akhir, tukang las Jepang memindai permukaan jalur dengan cermat sebelum memanggil inspektor — pencegahan berarti memastikan tak ada cat, minyak, karat, atau kelembapan pada logam dasar sebelum pass akhir.",
    },
  },
  501: {
    vi: {
      q: "Một thực tập sinh mới nói rằng không có chứng chỉ 'JIS Yosetsu-gino-sha' (JIS溶接技能者) thì hàn ở Nhật là bất hợp pháp, giống như hàn mà không có chứng chỉ An toàn Hàn hồ quang. Điều này đúng không?",
      opts: [
        "Đúng — cả hai đều là giấy phép nhà nước có giá trị pháp lý như nhau",
        "Sai — JIS là chứng chỉ tay nghề chủ yêu cầu, không phải giấy phép luật",
        "Sai — JIS bắt buộc, còn An toàn Hàn hồ quang là tùy chọn",
        "Đúng, nhưng chỉ với bình áp lực và nồi hơi",
      ],
      exp: "JIS Yosetsu-gino-sha (JIS溶接技能者) do JWES (日本溶接協会) cấp và chứng minh KỸ NĂNG hàn qua thi thực hành — nhưng KHÔNG phải giấy phép nhà nước bắt buộc theo luật. Ngược lại, chứng chỉ An toàn Hàn hồ quang (アーク溶接特別教育) LÀ bắt buộc theo luật lao động trước khi chạm máy hàn. Nhầm hai cái — cho rằng chứng nhận JIS là yêu cầu pháp lý như đào tạo an toàn — là hiểu lầm phổ biến của người mới. 🇯🇵 MẸO: Khi xin việc, thẻ chứng nhận JIS (認定証 / nintei-sho) vẫn là thứ chủ hỏi đầu tiên, dù không phải yêu cầu pháp lý — đó là kỳ vọng tiêu chuẩn ngành, không phải luật.",
    },
    id: {
      q: "Seorang peserta magang baru mengklaim bahwa tanpa kualifikasi 'JIS Yosetsu-gino-sha' (JIS溶接技能者), mengelas di Jepang ilegal, sama seperti mengelas tanpa sertifikat Pelatihan Keselamatan Las Busur. Apakah ini benar?",
      opts: [
        "Ya — keduanya lisensi pemerintah dengan bobot hukum sama",
        "Tidak — JIS sertifikat keahlian yang diminta perusahaan, bukan lisensi hukum",
        "Tidak — JIS wajib, tetapi Pelatihan Las Busur opsional",
        "Ya, tapi hanya untuk bejana tekan dan boiler",
      ],
      exp: "JIS Yosetsu-gino-sha (JIS溶接技能者) diterbitkan JWES (日本溶接協会 / Japan Welding Engineering Society) dan membuktikan KETERAMPILAN las lewat uji praktik — tapi ini BUKAN lisensi pemerintah wajib hukum. Sebaliknya, Sertifikat Pelatihan Keselamatan Las Busur (アーク溶接特別教育) WAJIB secara hukum ketenagakerjaan sebelum menyentuh mesin las. Mengacaukan keduanya — mengira sertifikasi JIS syarat hukum seperti pelatihan keselamatan — adalah kesalahpahaman umum di antara peserta magang baru. 🇯🇵 TIPS: Saat melamar kerja, kartu sertifikasi JIS (認定証 / nintei-sho) tetap hal pertama yang ditanyakan pemberi kerja, meski bukan syarat hukum — itu ekspektasi standar industri, bukan hukum.",
    },
  },
  502: {
    vi: {
      q: "Một thợ chỉ có chứng chỉ JIS 'Kihon-kyu' (基本級 / Cấp cơ bản). Giám sát hỏi anh ấy có nhận việc cần hàn 2G (tư thế ngang) không. Chỉ dựa vào Cấp cơ bản, anh ấy có thể không?",
      opts: [
        "Không — Cấp Cơ bản không áp dụng cho việc hàn nào, kể cả tư thế bằng",
        "Có — Cấp Cơ bản bao gồm mọi tư thế sau bài thi tư thế bằng",
        "Không — Cấp Cơ bản chỉ tư thế bằng; 2G cần Cấp Chuyên môn",
        "Có, nếu anh ấy có ít nhất 2 năm kinh nghiệm",
      ],
      exp: "Kihon-kyu (基本級) = Cấp Cơ bản, cấp đầu tiên của chứng chỉ JIS, chỉ bao gồm tư thế bằng (下向き / 1G). Senmon-kyu (専門級) = Cấp Chuyên môn bao gồm các tư thế khác: ngang (2G), đứng (3G), trần (4G) và ống (P). Chứng chỉ JIS không phải giấy phép theo luật, nhưng khi tiêu chuẩn công việc yêu cầu chứng chỉ tư thế ngang, chủ và khách hàng sẽ yêu cầu Cấp Chuyên môn tương ứng — kinh nghiệm không thay thế được. 🇯🇵 MẸO: Công trường Nhật hay hỏi 'tate-muki dekiru?' (立向きできる？ / hàn đứng được không?) — Cấp Chuyên môn mở ra nhiều việc hơn.",
    },
    id: {
      q: "Seorang tukang hanya memegang sertifikasi JIS 'Kihon-kyu' (基本級 / Grade Dasar). Supervisor bertanya apakah ia bisa mengambil pekerjaan yang butuh las 2G (posisi mendatar). Bisakah ia, hanya berdasarkan Grade Dasar?",
      opts: [
        "Tidak — Grade Dasar tidak berlaku untuk las apa pun, bahkan datar",
        "Ya — Grade Dasar mencakup semua posisi setelah ujian datar",
        "Tidak — Grade Dasar hanya datar; 2G perlu Grade Spesialis",
        "Ya, jika ia punya pengalaman kerja minimal 2 tahun",
      ],
      exp: "Kihon-kyu (基本級) = Grade Dasar, titik awal sertifikasi JIS, hanya mencakup posisi datar (下向き / 1G). Senmon-kyu (専門級) = Grade Spesialis mencakup posisi lain: mendatar (2G), tegak (3G), overhead (4G), dan pipa (P). Sertifikasi JIS bukan lisensi hukum, tetapi jika spesifikasi pekerjaan meminta kualifikasi posisi mendatar, pemberi kerja dan klien mewajibkan Grade Spesialis yang sesuai — pengalaman saja tidak menggantikannya. 🇯🇵 TIPS: Lokasi kerja Jepang cepat bertanya 'tate-muki dekiru?' (立向きできる？ / bisa las tegak?) — Grade Spesialis membuka lebih banyak pekerjaan.",
    },
  },
  503: {
    vi: {
      q: "Mã thi 'N-2F' nghĩa là gì trong chứng chỉ hàn JIS?",
      opts: [
        "N = Không vát mép, 2 = Tấm 2mm, F = Chỉ lượt cuối",
        "N = Kim loại màu, 2 = Hàn hai lượt, F = Quy trình FCAW",
        "N = Thép hợp kim niken, 2 = Hàn rãnh tấm, F = Tư thế bằng",
        "N = Không tấm lót, 2 = Tấm trung bình (9mm), F = Tư thế bằng",
      ],
      exp: "Mã thi JIS N-2F (JIS Z 3801, hàn hồ quang tay): N = 裏当て金なし (không có tấm lót — A = có tấm lót), 2 = 中板 (tấm trung bình 9mm — 1 = mỏng, 3 = dày), F = 下向き (tư thế bằng). Các mã phổ biến khác: N-2H (ngang), N-2V (đứng), N-2O (trần), N-2P (ống, mọi tư thế — khó nhất). Mã cho biết chính xác bạn đã đậu thi gì. 🇯🇵 MẸO: Khi thợ Nhật giới thiệu chuyên môn, họ thường nói mã JIS: 'N-2F to N-2V wo motte imasu' (N-2FとN-2Vを持っています / Tôi có N-2F và N-2V). Điều này lập tức truyền đạt năng lực cho bất kỳ giám sát Nhật nào. Hãy nhớ mã của mình và dùng tự tin — nó cho thấy bạn hiểu hệ thống chứng chỉ Nhật.",
    },
    id: {
      q: "Apa arti kode uji 'N-2F' dalam sertifikasi las JIS?",
      opts: [
        "N = Tanpa alur, 2 = Pelat 2mm, F = Hanya pass akhir",
        "N = Non-ferro, 2 = Las dua pass, F = Proses FCAW",
        "N = Baja paduan nikel, 2 = Las alur pelat, F = Datar",
        "N = Tanpa penahan, 2 = Pelat sedang (9mm), F = Datar",
      ],
      exp: "Kode uji JIS N-2F (JIS Z 3801, las busur manual): N = 裏当て金なし (tanpa pelat penahan — A = dengan pelat penahan), 2 = 中板 (pelat sedang 9mm — 1 = tipis, 3 = tebal), F = 下向き (posisi datar). Kode umum lain: N-2H (mendatar), N-2V (tegak), N-2O (overhead), N-2P (pipa, semua posisi — tersulit). Kode memberi tahu persis uji apa yang Anda lulus. 🇯🇵 TIPS: Saat tukang las Jepang memperkenalkan diri secara profesional, mereka sering menyebut kode JIS-nya: 'N-2F to N-2V wo motte imasu' (N-2FとN-2Vを持っています / Saya memegang N-2F dan N-2V). Ini langsung mengomunikasikan kemampuan Anda ke supervisor Jepang mana pun. Hafalkan kode Anda dan gunakan dengan percaya diri — itu menunjukkan Anda memahami sistem kualifikasi Jepang.",
    },
  },
  504: {
    vi: {
      q: "'N-2P' trong chứng chỉ JIS là gì và vì sao được coi là danh giá nhất?",
      opts: [
        "Không tấm lót, ống thành trung bình cố định — hàn mọi tư thế",
        "Bài thi 2 tư thế thông thường — chỉ khó hơn cơ bản một chút",
        "Kiểm tra không phá hủy 2 điểm cho mối hàn ống",
        "Quy trình khe hẹp 2 lượt — cách hàn ống nhanh",
      ],
      exp: "N-2P = không tấm lót (N), ống thành trung bình (2), ống (P). Ống được cố định nằm ngang và thẳng đứng nên mối hàn đi qua mọi tư thế: bằng ở đỉnh, đứng ở cạnh, trần ở đáy. Lượt chân (初層) phải hoàn hảo để bọng ngược ngấu hoàn toàn (裏波). Được coi là chứng chỉ JIS khó và danh giá nhất. Được nể trọng rộng rãi trong ngành Nhật. 🇯🇵 MẸO: Ở Nhật, thợ có N-2P được nể thật sự trên công trường. Đàn anh có thể nói 'Ano hito wa N-ni-P wo motteru' (あの人はN-2Pを持ってる / người đó có N-2P) như một dấu hiệu ưu tú. Nếu đậu N-2P, ghi nó vào lịch sử làm việc (職歴) là phù hợp — nó lập tức làm bạn nổi bật trong thị trường việc hàn cạnh tranh của Nhật.",
    },
    id: {
      q: "Apa itu 'N-2P' dalam sertifikasi JIS dan mengapa dianggap paling bergengsi?",
      opts: [
        "Tanpa penahan, pipa dinding sedang tetap — dilas semua posisi",
        "Ujian 2 posisi biasa — hanya sedikit lebih sulit dari dasar",
        "Inspeksi tak merusak 2 titik pada las pipa",
        "Proses celah sempit 2 pass — metode las pipa cepat",
      ],
      exp: "N-2P = tanpa pelat penahan (N), pipa dinding sedang (2), pipa (P). Pipa dipasang tetap horizontal dan vertikal sehingga las melewati semua posisi: datar di atas, tegak di sisi, overhead di bawah. Root pass (初層) harus dieksekusi sempurna untuk penetrasi back bead lengkap (裏波). Dianggap sertifikasi JIS tersulit dan paling bergengsi. Dihormati luas di industri Jepang. 🇯🇵 TIPS: Di Jepang, tukang yang memegang N-2P diperlakukan dengan hormat tulus di lokasi. Pekerja senior mungkin berkata 'Ano hito wa N-ni-P wo motteru' (あの人はN-2Pを持ってる / orang itu memegang N-2P) sebagai tanda kehormatan. Jika Anda lulus N-2P, pantas mencantumkannya di riwayat kerja (職歴) — itu langsung membuat Anda menonjol di pasar kerja las Jepang yang kompetitif.",
    },
  },
  505: {
    vi: {
      q: "Chứng chỉ thợ hàn JIS có hiệu lực 1 năm mỗi lần. Điều gì xảy ra nếu bạn KHÔNG gia hạn trước khi hết hạn?",
      opts: [
        "Bạn nộp phạt nhỏ nhưng vẫn làm việc như cũ",
        "Chứng chỉ hết hiệu lực — không còn được xưng có chứng chỉ JIS",
        "Bạn tự động được gia hạn 6 tháng",
        "Không sao — chứng chỉ có hiệu lực suốt đời",
      ],
      exp: "Giấy chứng nhận thợ hàn JIS (適格性証明書) có hiệu lực 1 năm. Để duy trì, bạn nộp đơn kiểm tra giám sát (サーベイランス) trong vòng 3 tháng trước khi hết hạn — làm 2 lần (năm thứ 2 và 3). Sau 3 năm, phải thi đánh giá lại (再評価) trong khoảng 8 đến 2 tháng trước khi hết hạn. Nếu hết hạn, chứng chỉ không còn hiệu lực và bạn không thể xưng là có chứng chỉ JIS. 🇯🇵 MẸO: Đặt nhắc lịch 3 tháng trước ngày hết hạn (有効期限). Chủ và người kiểm tra ở Nhật kiểm ngày hết hạn — trễ một ngày cũng quan trọng. Hiệp hội Kỹ thuật Hàn Nhật Bản (JWES) đăng lịch và nhận đơn trực tuyến (e-Weld).",
    },
    id: {
      q: "Sertifikat tukang las JIS berlaku 1 tahun per periode. Apa yang terjadi jika Anda TIDAK memperbaruinya sebelum kedaluwarsa?",
      opts: [
        "Anda membayar denda kecil tetapi tetap bisa bekerja",
        "Sertifikat tidak berlaku — Anda tidak bisa lagi mengaku bersertifikat JIS",
        "Anda otomatis mendapat masa tenggang 6 bulan",
        "Tidak apa-apa — sertifikat berlaku seumur hidup",
      ],
      exp: "Sertifikat tukang las JIS (適格性証明書) berlaku 1 tahun. Untuk mempertahankannya, ajukan surveilans (サーベイランス) dalam 3 bulan sebelum kedaluwarsa — dilakukan 2 kali (tahun ke-2 dan ke-3). Setelah 3 tahun, Anda harus lulus uji evaluasi ulang (再評価) antara 8 hingga 2 bulan sebelum kedaluwarsa. Jika kedaluwarsa, sertifikat tidak berlaku dan Anda tidak bisa mengklaim bersertifikat JIS. 🇯🇵 TIPS: Pasang pengingat kalender 3 bulan sebelum tanggal kedaluwarsa (有効期限). Pemberi kerja dan inspektor di Jepang memeriksa tanggal kedaluwarsa — terlambat sehari pun penting. Japan Welding Engineering Society (JWES) menerbitkan jadwal dan pendaftaran online (e-Weld).",
    },
  },
  506: {
    vi: {
      q: "'AW Kentei' (AW検定) là gì và dành cho ngành nào?",
      opts: [
        "Automated Welding — bài thi cho người vận hành robot hàn",
        "Arc Welding — chứng chỉ chung cho mọi ngành",
        "Architectural Welding — thép kết cấu cho tòa nhà",
        "Aluminum Welding — bài thi cho ngành hàng không",
      ],
      exp: "AW Kentei (AW検定) = Chứng chỉ Hàn Kiến trúc (建築鉄骨溶接技量検定). Chuyên cho chế tạo thép kết cấu trong tòa nhà. Do Hiệp hội AW Kentei quản lý. Hiệu lực: 1 năm từ 1/4; nếu đủ điều kiện có thể gia hạn bằng đơn tối đa 2 lần (tối đa 3 năm). Hàn nhà máy gồm: S (ngấu hoàn toàn, tab thép), A (mối hàn góc), S-C (ngấu hoàn toàn, tab thay thế — cần có S). Ngoài ra: hàn hiện trường, hàn ống, vận hành robot hàn. 🇯🇵 MẸO: AW Kentei là chuẩn cho ai xây nhà khung thép (鉄骨造) ở Nhật. Hãy theo dõi hạn gia hạn — khi đã dùng hết số lần gia hạn thì phải thi lại. Nhà thầu xây dựng Nhật giữ danh sách nghiêm ngặt thợ có AW cho mỗi dự án — thẻ AW của bạn bị kiểm trước mỗi mối quan trọng. Nếu làm xây dựng, AW Kentei quan trọng ngang JIS.",
    },
    id: {
      q: "Apa itu 'AW Kentei' (AW検定) dan untuk industri apa?",
      opts: [
        "Automated Welding — ujian untuk operator robot las",
        "Arc Welding — sertifikasi umum untuk semua industri",
        "Architectural Welding — baja struktur untuk bangunan",
        "Aluminum Welding — ujian untuk aplikasi dirgantara",
      ],
      exp: "AW Kentei (AW検定) = Sertifikasi Las Arsitektur (建築鉄骨溶接技量検定). Khusus untuk fabrikasi baja struktur pada bangunan. Dikelola oleh Asosiasi AW Kentei. Berlaku: 1 tahun sejak 1 April; jika memenuhi syarat bisa diperpanjang dengan permohonan maksimal 2 kali (maks. 3 tahun). Las pabrik: S (penetrasi penuh, end tab baja), A (las sudut), S-C (penetrasi penuh, end tab pengganti — perlu S). Lainnya: las lapangan, las pipa, operator las robot. 🇯🇵 TIPS: AW Kentei adalah standar bagi siapa pun yang membangun gedung rangka baja (鉄骨造) di Jepang. Pantau batas waktu perpanjangan — setelah jatah perpanjangan habis, Anda harus ujian lagi. Kontraktor bangunan Jepang menyimpan daftar ketat tukang bersertifikat AW untuk tiap proyek — kartu AW Anda diperiksa sebelum tiap penugasan sambungan kritis. Jika Anda bekerja di konstruksi, AW Kentei sama pentingnya dengan JIS.",
    },
  },
  507: {
    vi: {
      q: "'Futsuu-Boilaa-Yosetsu-shi' (普通ボイラー溶接士) có thể hàn gì — và giới hạn chiều dày tấm chính là gì?",
      opts: [
        "Chỉ hệ thống áp suất thấp dưới 0,1 MPa",
        "Mọi bộ phận nồi hơi và bình áp lực không giới hạn",
        "Chỉ ống — không bao giờ hàn tấm",
        "Bộ phận nồi hơi và bình áp lực đến tấm dày 25mm",
      ],
      exp: "Futsuu-Boilaa-Yosetsu-shi (普通ボイラー溶接士) = Thợ hàn nồi hơi thường. Có thể hàn bộ phận nồi hơi và bình áp lực đến tấm dày 25mm. Với tấm TRÊN 25mm, cần cấp Đặc biệt (特別). Giấy phép nhà nước — bắt buộc theo luật. Thi thực hành: mối giáp mép tư thế bằng (下向き) và đứng (立向き) trên tấm 9mm, 1 giờ. Đậu/rớt dựa vào thử uốn mặt sau — mọi mẫu phải đạt. (Tư thế ngang, tấm 25mm, uốn cạnh là bài thi cấp Đặc biệt — đừng nhầm.) 🇯🇵 MẸO: Giấy phép nhà nước Thợ hàn nồi hơi (ボイラー溶接士 / thi quốc gia, không phải JWES) do Bộ Y tế, Lao động và Phúc lợi cấp; kỳ thi do Hiệp hội Thi An toàn và Vệ sinh Lao động (安全衛生技術試験協会) tổ chức. Là chứng chỉ quốc gia — không giống JIS. Nếu làm nồi hơi, bình áp lực hay ống nhà máy hóa chất ở Nhật, bạn sẽ cần giấy phép này. Thi cần đậu cả bài lý thuyết LẪN thực hành — bắt đầu học luật (ボイラー及び圧力容器安全規則) song song với kỹ năng thực hành.",
    },
    id: {
      q: "Apa yang bisa dilas 'Futsuu-Boilaa-Yosetsu-shi' (普通ボイラー溶接士) — dan apa batasan tebal pelat kuncinya?",
      opts: [
        "Hanya sistem bertekanan rendah di bawah 0,1 MPa",
        "Semua bagian boiler dan bejana tekan tanpa batas",
        "Hanya pipa — tidak pernah pelat datar",
        "Bagian boiler dan bejana hingga tebal pelat 25mm",
      ],
      exp: "Futsuu-Boilaa-Yosetsu-shi (普通ボイラー溶接士) = Tukang Las Boiler Standar. Bisa mengelas komponen boiler dan bejana tekan hingga tebal pelat 25mm. Untuk pelat DI ATAS 25mm, diperlukan grade Tokubetsu (特別). Lisensi nasional — wajib hukum. Uji praktik: las tumpul posisi datar (下向き) dan tegak (立向き) pada pelat 9mm, 1 jam. Lulus/gagal dinilai dengan uji tekuk sisi akar — semua spesimen harus lulus. (Posisi mendatar, pelat 25mm, dan tekuk sisi adalah uji grade Tokubetsu — jangan tertukar.) 🇯🇵 TIPS: Lisensi nasional Tukang Las Boiler (ボイラー溶接士 / ujian nasional, bukan JWES) diterbitkan di bawah Kementerian Kesehatan, Tenaga Kerja, dan Kesejahteraan; ujiannya diselenggarakan oleh Asosiasi Ujian Keselamatan dan Kesehatan Kerja Jepang (安全衛生技術試験協会). Ini kualifikasi nasional — tak sama dengan JIS. Jika Anda bekerja pada boiler, bejana tekan, atau pipa pabrik kimia di Jepang, Anda akan membutuhkan lisensi ini. Ujian mensyaratkan lulus uji pengetahuan tertulis DAN uji praktik — mulailah belajar hukum (ボイラー及び圧力容器安全規則) bersama keterampilan praktik Anda.",
    },
  },
  508: {
    vi: {
      q: "Để làm 'Thợ hàn dưới nước' (水中溶接士) ở Nhật, cần tổ hợp nào?",
      opts: [
        "Giấy phép Lặn (潜水士) + đào tạo và kỹ năng hàn",
        "Hai chứng chỉ đào tạo an toàn bất kỳ",
        "Chứng chỉ JIS + bằng lái ô tô",
        "Giấy phép Thợ hàn nồi hơi + An toàn Hàn hồ quang",
      ],
      exp: "Công việc lặn ở Nhật bắt buộc theo luật phải có Giấy phép Lặn (潜水士), giấy phép quốc gia chỉ thi viết. Về phần hàn, khóa An toàn Hàn hồ quang (アーク溶接特別教育) là mức tối thiểu theo luật, và chủ thường yêu cầu chứng chỉ thợ hàn JIS (ưu tiên Cấp Chuyên môn mọi tư thế). 🇯🇵 MẸO: Công việc hàn dưới nước ở Nhật tập trung ở cảng (港湾), công trình ngoài khơi và sửa đập. Cộng đồng nhỏ — uy tín về độ tin cậy và an toàn rất quan trọng.",
    },
    id: {
      q: "Untuk bekerja sebagai 'Tukang Las Bawah Air' (水中溶接士) di Jepang, kombinasi apa yang diperlukan?",
      opts: [
        "Lisensi Selam (潜水士) + pelatihan dan keterampilan las",
        "Dua sertifikat pelatihan keselamatan apa saja",
        "Sertifikasi JIS + SIM mobil",
        "Lisensi Tukang Las Boiler + Pelatihan Las Busur",
      ],
      exp: "Pekerjaan selam di Jepang secara hukum mewajibkan Lisensi Selam (潜水士), lisensi nasional dengan ujian tertulis saja. Untuk bagian las, Pelatihan Keselamatan Las Busur (アーク溶接特別教育) adalah minimum menurut hukum, dan pemberi kerja biasanya mengharapkan sertifikasi tukang las JIS (diutamakan Grade Spesialis semua posisi). 🇯🇵 TIPS: Pekerjaan las bawah air di Jepang terpusat di pelabuhan (港湾), struktur lepas pantai, dan perbaikan bendungan. Komunitasnya kecil — reputasi andal dan sadar keselamatan sangat penting.",
    },
  },
  509: {
    vi: {
      q: "'WES' trong hàn Nhật là gì, và đại diện cho cấp chứng chỉ nào?",
      opts: [
        "Welding Equipment Standard — chứng nhận cho máy hàn",
        "Welding Engineering Standard — WES 8103 cho người quản lý hàn",
        "Western Engineering System — chứng chỉ của Mỹ",
        "Welding Examination System — khóa an toàn cơ bản",
      ],
      exp: "WES (Welding Engineering Standard) = tiêu chuẩn của Hiệp hội Kỹ thuật Hàn Nhật Bản (日本溶接協会). WES 8103 chứng nhận người quản lý hàn (溶接管理技術者) ở ba cấp: Cấp 2 (2級), Cấp 1 (1級) và Cấp Đặc biệt (特別級). Đây là chứng chỉ cho người QUẢN LÝ và GIÁM SÁT việc hàn. 🇯🇵 MẸO: Nhiều thợ hàn Nhật giàu kinh nghiệm khi chuyển sang giám sát sẽ thi WES Cấp 2 hoặc Cấp 1. 'Genba ga wakaru enjinia' (現場が分かるエンジニア / kỹ sư hiểu công trường) là lời khen rất cao.",
    },
    id: {
      q: "Apa itu 'WES' dalam las Jepang, dan tingkat kualifikasi apa yang diwakilinya?",
      opts: [
        "Welding Equipment Standard — sertifikasi untuk mesin",
        "Welding Engineering Standard — WES 8103 untuk koordinator las",
        "Western Engineering System — sertifikasi Amerika",
        "Welding Examination System — kursus keselamatan dasar",
      ],
      exp: "WES (Welding Engineering Standard) = standar Japan Welding Engineering Society (日本溶接協会). WES 8103 mensertifikasi personel koordinasi las (溶接管理技術者) dalam tiga tingkat: Grade 2 (2級), Grade 1 (1級), dan Grade Khusus (特別級). Ini untuk orang yang MENGELOLA dan MENGAWASI pengelasan. 🇯🇵 TIPS: Banyak tukang las Jepang berpengalaman yang pindah ke pengawasan mengambil WES Grade 2 atau Grade 1. 'Genba ga wakaru enjinia' (現場が分かるエンジニア / insinyur yang paham lapangan) adalah pujian tinggi.",
    },
  },
  510: {
    vi: {
      q: "Thứ tự lộ trình sự nghiệp đúng từ mới vào đến chuyên gia trong hàn Nhật là gì?",
      opts: [
        "Lấy mọi chứng chỉ cùng lúc trong tuần đầu",
        "WES → Dưới nước → Nồi hơi → JIS Cơ bản → An toàn Hồ quang",
        "An toàn Hồ quang → JIS Cơ bản → JIS Chuyên môn → AW/Nồi hơi → WES",
        "Hàn dưới nước trước — sau đó mọi thứ đều dễ",
      ],
      exp: "Thang sự nghiệp hàn Nhật: 1) An toàn Hàn hồ quang (アーク溶接特別教育) — luật yêu cầu từ Ngày 1. 2) JIS Cấp cơ bản (基本級) — chứng chỉ kỹ năng đầu tiên. 3) JIS Cấp chuyên môn (専門級) — mọi tư thế. 4) AW Kentei hoặc Thợ hàn nồi hơi (chuyên biệt). 5) Chứng chỉ quản lý WES. 6) Thợ hàn dưới nước (ưu tú). Mỗi bước mở ra việc lương cao hơn. 🇯🇵 MẸO: Nơi làm việc Nhật rất nể người chủ động theo đuổi chứng chỉ không cần được bảo. Khi thợ nói với giám sát 'Jishu-teki ni shikaku wo toru tsumori desu' (自主的に資格を取るつもりです / Tôi định tự chủ động lấy chứng chỉ), đó là tín hiệu văn hóa mạnh về sự cam kết. Công ty thường hỗ trợ chi phí chứng chỉ cho nhân viên có động lực — đừng ngại hỏi. Tự trau dồi (自己研鑽) là phẩm chất được coi trọng sâu sắc trong văn hóa nghề nghiệp Nhật.",
    },
    id: {
      q: "Apa urutan jalur karier yang benar dari pemula hingga ahli dalam las Jepang?",
      opts: [
        "Ambil semua sertifikasi sekaligus di minggu pertama",
        "WES → Bawah air → Boiler → JIS Dasar → Las Busur",
        "Las Busur → JIS Dasar → JIS Spesialis → AW/Boiler → WES",
        "Tukang las bawah air dulu — sisanya jadi mudah",
      ],
      exp: "Tangga karier las Jepang: 1) Pelatihan Keselamatan Las Busur (アーク溶接特別教育) — wajib hukum sejak Hari 1. 2) JIS Grade Dasar (基本級) — sertifikasi keterampilan pertama. 3) JIS Grade Spesialis (専門級) — semua posisi. 4) AW Kentei atau Tukang Las Boiler (khusus). 5) Kualifikasi manajemen WES. 6) Tukang Las Bawah Air (elit). Tiap langkah membuka pekerjaan bergaji lebih tinggi. 🇯🇵 TIPS: Tempat kerja Jepang sangat menghormati orang yang proaktif mengejar sertifikasi tanpa diminta. Saat tukang berkata kepada supervisornya 'Jishu-teki ni shikaku wo toru tsumori desu' (自主的に資格を取るつもりです / Saya berniat mengambil sertifikasi atas inisiatif sendiri), itu sinyal budaya kuat tentang komitmen. Perusahaan sering mendukung biaya sertifikasi bagi karyawan yang termotivasi — jangan malu bertanya. Pengembangan diri (自己研鑽 / jiko-kensan) adalah sifat yang sangat dihargai dalam budaya profesional Jepang.",
    },
  },
  511: {
    vi: {
      q: "Ở Nhật, thu nhập thường thay đổi thế nào khi bạn có thêm chứng chỉ hàn?",
      opts: [
        "Thợ hàn có thu nhập như nhau dù có chứng chỉ gì",
        "Thu nhập chỉ phụ thuộc tuổi — chứng chỉ không ảnh hưởng",
        "Chỉ An toàn Hồ quang trả cao nhất; chứng chỉ cao làm giảm lương",
        "Chứng chỉ cao và hiếm hơn thường mở ra việc lương tốt hơn",
      ],
      exp: "Nhìn chung, mỗi bậc cao hơn — Cấp Chuyên môn JIS, AW Kentei, Thợ hàn nồi hơi, và kỹ năng hiếm như hàn dưới nước — mở ra công việc trả lương cao hơn. Nhưng lương thực tế khác nhau nhiều theo công ty, vùng, ngành và kinh nghiệm, nên mọi con số 'lương trung bình' chỉ để tham khảo. 🇯🇵 MẸO: Công ty Nhật cũng coi trọng sự tin cậy: đi làm đều đặn, ít lỗi chất lượng và giao tiếp tốt thường quan trọng không kém chứng chỉ.",
    },
    id: {
      q: "Bagaimana penghasilan umumnya berubah saat Anda menambah kualifikasi las di Jepang?",
      opts: [
        "Tukang las berpenghasilan sama apa pun sertifikatnya",
        "Penghasilan hanya tergantung usia — sertifikat tidak berpengaruh",
        "Hanya Pelatihan Las Busur yang gajinya tertinggi; sertifikat tinggi menurunkan gaji",
        "Kualifikasi lebih tinggi dan langka umumnya membuka pekerjaan bergaji lebih baik",
      ],
      exp: "Secara umum, setiap langkah naik — Grade Spesialis JIS, AW Kentei, Tukang Las Boiler, dan keterampilan langka seperti las bawah air — membuka pekerjaan dengan bayaran lebih tinggi. Namun gaji nyata sangat bervariasi menurut perusahaan, daerah, industri, dan pengalaman, jadi angka 'gaji rata-rata' hanyalah gambaran kasar. 🇯🇵 TIPS: Perusahaan Jepang juga menghargai keandalan: hadir setiap hari, jarang ada masalah mutu, dan berkomunikasi dengan baik sering sama pentingnya dengan sertifikat.",
    },
  },
  512: {
    vi: {
      q: "Áp suất nước tăng khoảng 1 atmosphere mỗi 10 mét độ sâu. Áp suất tuyệt đối ở độ sâu 30 mét là bao nhiêu?",
      opts: [
        "4 atm — 1 atm không khí + 3 atm nước",
        "1 atm — chỉ tính áp suất không khí",
        "2 atm — áp suất nước gấp đôi ở 30m",
        "3 atm — 30m ÷ 10m, không tính áp suất không khí",
      ],
      exp: "Mỗi 10m độ sâu tăng khoảng 1 atmosphere. Ở 30m: 1 atm (không khí trên mặt nước) + 3 atm (30m nước) = 4 atm tuyệt đối. Quên áp suất khí quyển sẽ ra đáp án sai là 3. Áp suất cao làm tiêu hao khí nhanh hơn, tăng nguy cơ say nitơ và bắt buộc dừng giảm áp. 🇯🇵 MẸO: Công việc lặn ở Nhật được quản lý bởi Quy tắc An toàn Vệ sinh Công việc Áp suất cao (高気圧作業安全衛生規則), bao gồm giảm áp. Phòng ngừa bệnh giảm áp (減圧症 / genatsushou) được coi trọng — không đi tắt.",
    },
    id: {
      q: "Tekanan air naik sekitar 1 atmosfer tiap 10 meter kedalaman. Berapa tekanan absolut pada kedalaman 30 meter?",
      opts: [
        "4 atm — 1 atm udara + 3 atm air",
        "1 atm — hanya tekanan udara yang dihitung",
        "2 atm — tekanan air berlipat dua di 30m",
        "3 atm — 30m ÷ 10m, tanpa tekanan udara",
      ],
      exp: "Setiap 10m kedalaman menambah sekitar 1 atmosfer. Pada 30m: 1 atm (udara di permukaan) + 3 atm (30m air) = 4 atm absolut. Lupa tekanan udara di permukaan menghasilkan jawaban salah 3. Tekanan tinggi berarti konsumsi gas lebih cepat, risiko narkosis nitrogen lebih besar, dan wajib berhenti dekompresi. 🇯🇵 TIPS: Pekerjaan selam di Jepang diatur oleh Peraturan K3 Kerja Bertekanan Tinggi (高気圧作業安全衛生規則), termasuk dekompresi. Pencegahan penyakit dekompresi (減圧症 / genatsushou) sangat serius — tanpa jalan pintas.",
    },
  },
  513: {
    vi: {
      q: "Công thức Nhiệt đầu vào: Q = 60 × E × I / v. E, I và v đại diện cho gì trong hàn?",
      opts: [
        "E = hiệu suất, I = cách điện, v = thể tích",
        "E = điện áp, I = dòng điện, v = tốc độ hàn",
        "E = cỡ que, I = nhiệt độ giữa lượt, v = thông gió",
        "E = độ giãn dài, I = năng lượng va đập, v = độ nhớt vũng hàn",
      ],
      exp: "Nhiệt đầu vào Q = 60 × E × I / v. E = Điện áp (V), I = Dòng (A), v = Tốc độ chạy (cm/min). Kết quả J/cm (chia 1000 ra kJ/cm). Ví dụ: E=28V, I=180A, v=30cm/min → Q = 60×28×180/30 = 10.080 J/cm = 10,1 kJ/cm. Nhiệt đầu vào kiểm soát độ dai HAZ, tốc độ nguội và biến dạng. Quản trong WPS. 🇯🇵 MẸO: Trong công việc bình áp lực và hạt nhân Nhật, giới hạn nhiệt đầu vào (入熱量制限) được ghi vào WPS và người kiểm tra có thể hỏi 'Nyuunetsu wa WPS-nai desu ka?' (入熱はWPS内ですか？ / Nhiệt đầu vào có trong WPS không?). Thợ theo dõi điện áp, dòng và tốc độ trong khi hàn — không chỉ lúc đầu — là người luôn đậu kiểm tra. Nhiều thợ Nhật dùng sổ nhỏ ghi thông số theo từng lượt.",
    },
    id: {
      q: "Rumus Masukan Panas: Q = 60 × E × I / v. Apa yang diwakili E, I, dan v dalam pengelasan?",
      opts: [
        "E = efisiensi, I = isolasi, v = volume",
        "E = tegangan, I = arus, v = kecepatan las",
        "E = ukuran elektroda, I = suhu antar pass, v = ventilasi",
        "E = elongasi, I = energi impak, v = viskositas kolam",
      ],
      exp: "Masukan Panas Q = 60 × E × I / v. E = Tegangan (V), I = Arus (A), v = Kecepatan jalan (cm/min). Hasil dalam J/cm (bagi 1000 untuk kJ/cm). Contoh: E=28V, I=180A, v=30cm/min → Q = 60×28×180/30 = 10.080 J/cm = 10,1 kJ/cm. Masukan panas mengendalikan ketangguhan HAZ, laju pendinginan, dan distorsi. Dikelola dalam WPS. 🇯🇵 TIPS: Dalam pekerjaan bejana tekan dan nuklir Jepang, batas masukan panas (入熱量制限 / nyuunetsu-ryou-seigen) tertulis dalam WPS dan inspektor las mungkin bertanya 'Nyuunetsu wa WPS-nai desu ka?' (入熱はWPS内ですか？ / Apakah masukan panas Anda dalam WPS?). Tukang yang melacak tegangan, arus, dan kecepatan jalan selama mengelas — bukan hanya di awal — adalah yang konsisten lulus inspeksi. Banyak tukang Jepang memakai buku catatan kecil untuk mencatat parameter per pass.",
    },
  },
  514: {
    vi: {
      q: "'WPS' (Welding Procedure Specification / 溶接施工要領書) là gì và vì sao mọi việc hàn có chứng nhận ở Nhật đều cần một cái?",
      opts: [
        "Lịch làm việc hàng tuần của tổ hàn",
        "Worker Protection System — kế hoạch an toàn công trường",
        "Quy trình quy định cách thực hiện mối hàn đạt chuẩn",
        "Hồ sơ các mối hàn đã làm trong dự án",
      ],
      exp: "WPS (溶接施工要領書 / Yosetsu-shiko-yoryosho) = Bản quy định trình tự hàn. 'Công thức' cho một mối hàn: xác định phương pháp, kim loại nền, kim loại bù, nung trước, dòng, điện áp, tốc độ, xử lý nhiệt sau hàn và hơn nữa. Được PQR (hồ sơ thử chứng nhận trình tự) chống lưng. Mọi mối hàn đạt chuẩn trong bình áp lực, tòa nhà và tàu Nhật phải theo WPS đã duyệt. 🇯🇵 MẸO: Ở công trường Nhật, WPS được giữ trong tập hồ sơ chất lượng (品質書類) tại vị trí làm việc. Trước khi bắt đầu mối quan trọng, chỉ vào WPS và xác nhận với giám sát: 'Kore no WPS de yoroshii desu ka?' (これのWPSでよろしいですか？ / Theo WPS này đúng chứ?). Bước đơn giản này bảo vệ bạn về pháp lý nếu có tranh chấp chất lượng sau này. Hồ sơ giấy tờ ở Nhật là tất cả.",
    },
    id: {
      q: "Apa itu 'WPS' (Welding Procedure Specification / 溶接施工要領書) dan mengapa tiap pekerjaan las terkualifikasi di Jepang memerlukannya?",
      opts: [
        "Jadwal kerja mingguan untuk tim las",
        "Worker Protection System — rencana keselamatan lokasi",
        "Prosedur yang menetapkan cara membuat las yang terkualifikasi",
        "Catatan las-las yang sudah dikerjakan di proyek",
      ],
      exp: "WPS (溶接施工要領書 / Yosetsu-shiko-yoryosho) = Welding Procedure Specification. 'Resep' untuk sebuah las: mendefinisikan proses, logam dasar, logam pengisi, preheat, arus, tegangan, kecepatan, perlakuan panas pasca-las, dan lainnya. Didukung PQR (rekaman kualifikasi prosedur). Tiap las terkualifikasi di bejana tekan, bangunan, dan kapal Jepang harus mengikuti WPS yang disetujui. 🇯🇵 TIPS: Di lokasi Jepang, WPS disimpan dalam binder mutu (品質書類 / hinshitsu-shorui) di stasiun kerja. Sebelum memulai las kritis, tunjuk WPS dan konfirmasi dengan supervisor: 'Kore no WPS de yoroshii desu ka?' (これのWPSでよろしいですか？ / Apakah ini WPS yang benar untuk diikuti?). Langkah sederhana ini melindungi Anda secara hukum jika ada sengketa mutu kelak. Jejak dokumen di Jepang adalah segalanya.",
    },
  },
  515: {
    vi: {
      q: "'Yonetsu' (予熱 / nung trước) là gì và vì sao cần cho thép cường độ cao?",
      opts: [
        "Quá trình ủ chỉ dùng cho thép không gỉ",
        "Làm ấm khí bảo vệ để chảy tốt hơn",
        "Nung mối hàn sau khi hàn — giống PWHT",
        "Nung kim loại cơ bản trước khi hàn để nguội chậm",
      ],
      exp: "Yonetsu (予熱) = Nung trước. Nung kim loại nền (và vùng lân cận) đến nhiệt độ quy định TRƯỚC khi bắt đầu hàn. Vì sao: làm chậm tốc độ nguội → ít hóa cứng HAZ → ít nguy cơ nứt nguội. Cũng giúp hydro khuếch tán thoát ra. Cần cho: thép đương lượng carbon cao (Ceq > ~0,40), tấm dày, mối nối bị kìm hãm nhiều. Nhiệt độ kiểm bằng ondo-chooku (温度チョーク). 🇯🇵 MẸO: Thợ Nhật dùng bút sáp chỉ thị nhiệt (温度チョーク, còn gọi サーモクレヨン) để xác minh nhiệt độ nung trước khi bật hồ quang. Bút chảy ở một nhiệt độ nhất định — nếu chảy trên thép, bề mặt đã đạt nhiệt đó. Luôn kiểm CẢ HAI mặt mối nối, không chỉ mặt trên. Mùa đông lạnh ngoài trời, quản lý nhiệt giữa các lượt (パス間温度管理) cũng phải kiểm đều.",
    },
    id: {
      q: "Apa itu 'Yonetsu' (予熱 / preheat) dan mengapa diperlukan untuk baja kekuatan tinggi?",
      opts: [
        "Proses anil yang hanya untuk baja tahan karat",
        "Menghangatkan gas pelindung agar mengalir lebih baik",
        "Memanaskan las setelah dilas — sama dengan PWHT",
        "Memanaskan logam induk sebelum dilas agar dingin perlahan",
      ],
      exp: "Yonetsu (予熱) = Preheat. Memanaskan logam dasar (dan area sekitar) ke suhu tertentu SEBELUM mulai mengelas. Mengapa: memperlambat laju pendinginan → lebih sedikit pengerasan di HAZ → lebih sedikit risiko retak dingin. Juga membantu hidrogen difusi keluar. Diperlukan untuk: baja ekuivalen karbon tinggi (Ceq > ~0,40), pelat tebal, sambungan sangat terkekang. Suhu diperiksa dengan ondo-chooku (温度チョーク). 🇯🇵 TIPS: Tukang las Jepang memakai krayon indikator suhu (温度チョーク / ondo-chooku, juga disebut サーモクレヨン / thermo-crayon) untuk memverifikasi suhu preheat sebelum menyalakan busur. Krayon meleleh pada suhu tertentu — jika meleleh di baja, permukaan telah mencapai suhu itu. Selalu periksa KEDUA sisi sambungan, bukan hanya permukaan atas. Di bulan musim dingin dingin pada lokasi luar, pemeliharaan preheat antar-pass (パス間温度管理 / pasu-kan-ondo-kanri) juga harus diperiksa rutin.",
    },
  },
  516: {
    vi: {
      q: "Là thợ hàn nước ngoài ở Nhật, tổ hợp chứng chỉ QUAN TRỌNG NHẤT cần lấy trong tháng đầu để làm được mọi việc trên công trường là gì?",
      opts: [
        "Hàn hồ quang + Đá mài + Điện hạ áp + Dây toàn thân",
        "Chỉ WES Cấp 2 — bao gồm tất cả",
        "Bằng lái ô tô + Giấy phép Thợ hàn nồi hơi",
        "Chỉ JIS Cấp Chuyên môn — còn lại tùy chọn",
      ],
      exp: "Gói ưu tiên tháng đầu: 1) An toàn Hàn hồ quang (3 ngày, 2–4 vạn) → được hàn. 2) An toàn Đá mài (1 ngày, 1 vạn) → được mài. 3) An toàn Điện hạ áp (1 ngày, 1,2–2,2 vạn) → thao tác bảng điện. 4) An toàn Dây đai Toàn thân (1 ngày, 1 vạn) → làm trên cao. Tổng: ~6–7 ngày, 52.000–82.000 yên. Giờ bạn được phép vận hành hợp pháp ở hầu như mọi công trường Nhật. 🇯🇵 MẸO: Ở Nhật, chứng chỉ đào tạo an toàn (特別教育修了証) phải được CẢ thợ LẪN chủ giữ. Nếu thanh tra lao động (労働基準監督官) đến và yêu cầu thợ xuất trình, thợ phải có. Nhiều thợ kinh nghiệm giữ tất cả chứng chỉ trong túi nhựa trong ở túi đồ nghề. Đây là thông lệ chuyên nghiệp bình thường ở Nhật — không lạ hay thừa.",
    },
    id: {
      q: "Sebagai tukang las asing di Jepang, apa kombinasi sertifikat TERPENTING untuk didapat di bulan pertama agar sepenuhnya fungsional di lokasi mana pun?",
      opts: [
        "Las Busur + Batu Gerinda + Tegangan Rendah + Full Harness",
        "Hanya WES Grade 2 — mencakup semuanya",
        "SIM mobil + Lisensi Tukang Las Boiler",
        "Hanya JIS Grade Spesialis — sisanya opsional",
      ],
      exp: "Paket prioritas bulan pertama: 1) Keselamatan Las Busur (3 hari, ¥20–40k) → bisa mengelas. 2) Keselamatan Batu Gerinda (1 hari, ¥10k) → bisa menggerinda. 3) Keselamatan Listrik Tegangan Rendah (1 hari, ¥12–22k) → bisa mengoperasikan panel daya. 4) Keselamatan Full Harness (1 hari, ¥10k) → bisa bekerja di ketinggian. Total: ~6–7 hari, ¥52.000–82.000. Kini Anda legal beroperasi di hampir semua lokasi kerja Jepang. 🇯🇵 TIPS: Di Jepang, sertifikat pelatihan keselamatan (特別教育修了証 / tokubetsu-kyouiku-shuryo-sho) harus disimpan oleh tukang DAN pemberi kerja. Jika inspektur tenaga kerja (労働基準監督官 / rodo-kijun-kantokukan) mengunjungi lokasi dan meminta pekerja menunjukkan sertifikatnya, pekerja harus memilikinya. Banyak pekerja berpengalaman menyimpan semua sertifikat dalam map plastik bening di tas kerja. Ini praktik profesional normal di Jepang — bukan hal aneh atau berlebihan.",
    },
  },
  517: {
    vi: {
      q: "'IIW' là gì và liên quan thế nào đến chứng chỉ hàn Nhật?",
      opts: [
        "Một hãng máy hàn Nhật",
        "Viện Hàn Quốc tế — văn bằng toàn cầu (IWE...)",
        "Một hiệp hội ngành của Mỹ không liên quan đến Nhật",
        "Tên viết tắt tiếng Nhật của luật an toàn hàn",
      ],
      exp: "IIW (International Institute of Welding) = tổ chức toàn cầu về tiêu chuẩn hàn. Cấp: IW (Thợ hàn Quốc tế), IWT (Kỹ thuật viên Hàn Quốc tế), IWE (Kỹ sư Hàn Quốc tế). WES 8103 Cấp Đặc biệt (特別級) của Nhật tương thích chuẩn IWE — người có thể xin công nhận quốc tế IIW. Giá trị với thợ Nhật làm dự án quốc tế (ngoài khơi, LNG, hạt nhân). 🇯🇵 MẸO: Nhật là thành viên tích cực của IIW (qua JWES). Nếu bạn muốn làm dự án LNG quốc tế của Nhật ở Úc, Đông Nam Á hay Trung Đông, chứng chỉ IIW (nhất là IW hoặc IWE) báo hiệu năng lực của bạn vượt biên giới. Ngành hàn Nhật coi trọng tiêu chuẩn quốc tế — và một thợ thông thạo cả JIS lẫn IIW thực sự hiếm và được coi trọng.",
    },
    id: {
      q: "Apa itu 'IIW' dan bagaimana kaitannya dengan kualifikasi las Jepang?",
      opts: [
        "Merek mesin las Jepang",
        "International Institute of Welding — diploma global (IWE dll.)",
        "Asosiasi industri Amerika tanpa hubungan dengan Jepang",
        "Singkatan Jepang untuk undang-undang keselamatan las",
      ],
      exp: "IIW (International Institute of Welding) = badan global untuk standar las. Menerbitkan: IW (International Welder), IWT (International Welding Technologist), IWE (International Welding Engineer). WES 8103 Grade Khusus (特別級) Jepang selaras dengan standar IWE — pemegangnya bisa mengajukan pengakuan internasional IIW. Berharga bagi tukang las Jepang yang mengerjakan proyek internasional (lepas pantai, LNG, nuklir). 🇯🇵 TIPS: Jepang adalah anggota aktif IIW (melalui JWES). Jika Anda ingin mengerjakan proyek LNG internasional Jepang di Australia, Asia Tenggara, atau Timur Tengah, sertifikasi IIW (terutama IW atau IWE) menandakan kualifikasi Anda melintasi batas negara. Industri las Jepang menanggapi standar internasional dengan serius — dan tukang yang fasih JIS maupun IIW benar-benar langka dan dihargai.",
    },
  },
  518: {
    vi: {
      q: "'PWHT' (Xử lý nhiệt sau hàn / 溶接後熱処理) làm gì và khi nào cần ở Nhật?",
      opts: [
        "Kiểm tra bằng mắt lần cuối trước khi giao hàng",
        "Chải sạch đường hàn sau khi nguội",
        "Nung và làm nguội chậm để khử ứng suất dư",
        "Sơn chống gỉ sau khi hàn",
      ],
      exp: "PWHT (Xử lý nhiệt sau hàn / 溶接後熱処理) = xử lý nhiệt giảm ứng suất. Kết cấu hàn hoàn thành được nung đến ~600–700°C (thép carbon), giữ một thời gian, rồi nguội chậm. Tác dụng: loại ứng suất dư (↓ biến dạng, ↓ nguy cơ nứt ăn mòn ứng suất), làm mềm HAZ cứng (↓ nguy cơ nứt nguội), giải phóng hydro. Bắt buộc cho bình nồi hơi (ボイラー), thiết bị áp lực và một số nối kết cấu. 🇯🇵 MẸO: PWHT ở Nhật do công ty xử lý nhiệt chuyên (熱処理業者) thực hiện bằng chăn điện trở kiểm soát nhiệt hoặc lò. Toàn bộ chu trình nung và nguội được ghi trên máy ghi biểu đồ nhiệt (温度記録計) — biểu đồ này thành tài liệu chất lượng vĩnh viễn. Là thợ, bạn nên biết yêu cầu PWHT trước khi hàn để không sửa hay đính hàn SAU chu trình PWHT — những cái đó sẽ vô hiệu hóa xử lý.",
    },
    id: {
      q: "Apa yang dilakukan 'PWHT' (Post-Weld Heat Treatment / 溶接後熱処理) dan kapan diperlukan di Jepang?",
      opts: [
        "Inspeksi visual akhir sebelum pengiriman",
        "Menyikat manik las setelah dingin",
        "Pemanasan dan pendinginan lambat untuk melepas tegangan sisa",
        "Mengecat antikarat setelah mengelas",
      ],
      exp: "PWHT (Post-Weld Heat Treatment / 溶接後熱処理) = perlakuan panas pelepas tegangan. Weldment yang selesai dipanaskan ke ~600–700°C (untuk baja karbon), ditahan waktu tertentu, lalu didinginkan perlahan. Efek: tegangan sisa dihilangkan (↓ distorsi, ↓ risiko korosi tegangan), HAZ keras dilunakkan (↓ risiko retak dingin), hidrogen dilepaskan. Wajib untuk bejana boiler (ボイラー), peralatan tekan, dan sambungan struktur tertentu. 🇯🇵 TIPS: PWHT di Jepang dilakukan perusahaan perlakuan panas khusus (熱処理業者 / netsushori-gyosha) memakai selimut resistansi listrik terkontrol suhu atau tungku. Seluruh siklus pemanasan dan pendinginan direkam pada perekam grafik suhu (温度記録計 / ondo-kiroku-kei) — grafik ini menjadi dokumen mutu permanen. Sebagai tukang, Anda harus tahu persyaratan PWHT sebelum mengelas agar tak menerapkan perbaikan atau tack las SETELAH siklus PWHT — itu akan membatalkan perlakuannya.",
    },
  },
  519: {
    vi: {
      q: "Khác biệt chính giữa làm thợ hàn ở Nhật so với các nước khác mà lao động nước ngoài nên biết là gì?",
      opts: [
        "Công ty Nhật không bao giờ thuê thợ hàn nước ngoài",
        "Nhật dùng kỹ thuật hàn không có ở nơi nào khác",
        "Thợ hàn Nhật làm lâu hơn nhưng kiếm ít hơn",
        "Hệ thống chứng chỉ nghiêm, văn hóa an toàn, chất lượng cao",
      ],
      exp: "Khác biệt chính ở Nhật: 1) Văn hóa chứng chỉ — nhiều việc cần đào tạo an toàn hoặc giấy phép theo luật, và công trường thường yêu cầu nhiều hơn mức tối thiểu. 2) Chú trọng chất lượng — NDT kỹ lưỡng và làm lại ảnh hưởng uy tín. 3) Giao tiếp nhóm — học thuật ngữ tiếng Nhật chính là cần thiết cho an toàn. 4) Tôn trọng quy trình — làm đúng WPS và hướng dẫn công việc. 🇯🇵 MẸO: Câu nói hữu ích: 'Wakaranai toki wa, shitsumon shite mo ii desu ka?' (分からない時は、質問してもいいですか？ / Khi không hiểu, tôi hỏi được không?). Hỏi trước khi làm được tôn trọng; đoán bừa rồi gây lỗi chất lượng thì không.",
    },
    id: {
      q: "Apa perbedaan utama bekerja sebagai tukang las di Jepang vs negara lain yang harus diketahui pekerja asing?",
      opts: [
        "Perusahaan Jepang tidak pernah merekrut tukang las asing",
        "Jepang memakai teknik las yang tidak ada di tempat lain",
        "Tukang las Jepang bekerja lebih lama tapi berpenghasilan lebih sedikit",
        "Sistem sertifikat ketat, budaya keselamatan, standar mutu tinggi",
      ],
      exp: "Perbedaan utama di Jepang: 1) Budaya sertifikat — banyak tugas memerlukan pelatihan keselamatan atau lisensi menurut hukum, dan lokasi kerja sering meminta lebih dari minimum hukum. 2) Fokus mutu — NDT teliti dan rework merusak reputasi. 3) Komunikasi tim — mempelajari istilah Jepang penting untuk keselamatan. 4) Menghormati proses — ikuti WPS dan instruksi kerja dengan tepat. 🇯🇵 TIPS: Kalimat berguna: 'Wakaranai toki wa, shitsumon shite mo ii desu ka?' (分からない時は、質問してもいいですか？ / Kalau tidak paham, boleh saya bertanya?). Bertanya sebelum mulai dihargai; menebak lalu menimbulkan masalah mutu tidak.",
    },
  },
  520: {
    vi: {
      q: "Bạn đã thành thạo mọi nội dung trong game này. Bước TIẾP THEO để thăng tiến sự nghiệp hàn ở Nhật nên là gì?",
      opts: [
        "Thi JIS Cấp Chuyên môn và tích lũy kinh nghiệm làm việc",
        "Đăng ký thi WES Cấp Đặc biệt ngay lập tức",
        "Xin việc hàn dưới nước mà không chuẩn bị thêm",
        "Không gì cả — bạn đã là chuyên gia, không còn gì để học",
      ],
      exp: "Kiến thức là Bước 1. Bây giờ: 1) Thi thực hành JIS 専門級 cho FCAW hoặc SMAW. 2) Tích lũy 実務経験 (kinh nghiệm làm việc thực) — chất lượng hơn số lượng. 3) Nhắm N-2P (ống mọi tư thế) — bài thi JIS được nể nhất. 4) Tích lũy: Tamakake + Cẩu + Xe nâng. 5) Cân nhắc AW hoặc Thợ hàn nồi hơi tùy lĩnh vực. Sự nghiệp của bạn = chứng chỉ + hồ sơ chất lượng. Gambatte! (頑張れ！) 🇯🇵 MẸO: Bậc thầy hàn Nhật thường nói 'Shokunin ni naru no wa, issho no shigoto da' (職人になるのは、一生の仕事だ / Trở thành nghệ nhân là công việc cả đời). Không có đường tắt đến tinh thông — nhưng mỗi chứng chỉ bạn đạt, mỗi mối hàn chất lượng bạn làm, mỗi từ Nhật bạn học là một viên gạch cho sự nghiệp đưa bạn đi khắp thế giới. Bạn đã bắt đầu game này. Giờ hãy đi xây thứ thật.",
    },
    id: {
      q: "Anda telah menguasai semua konten dalam gim ini. Apa langkah BERIKUTNYA untuk memajukan karier las Anda di Jepang?",
      opts: [
        "Ikuti ujian JIS Grade Spesialis dan kumpulkan pengalaman kerja",
        "Langsung daftar ujian WES Grade Khusus",
        "Melamar kerja las bawah air tanpa persiapan lagi",
        "Tidak ada — Anda sudah ahli dan tak ada lagi yang dipelajari",
      ],
      exp: "Pengetahuan adalah Langkah 1. Sekarang: 1) Ikuti uji praktik JIS 専門級 untuk FCAW atau SMAW. 2) Bangun 実務経験 (jitsumukeiken = pengalaman kerja praktik) — mutu lebih penting dari kuantitas. 3) Tuju N-2P (pipa semua posisi) — uji JIS paling dihormati. 4) Kumpulkan: Tamakake + Crane + Forklift. 5) Pertimbangkan AW atau Tukang Las Boiler tergantung bidang kerja Anda. Karier Anda = sertifikasi Anda + rekam mutu Anda. Gambatte! (頑張れ！) 🇯🇵 TIPS: Para master las Jepang sering berkata 'Shokunin ni naru no wa, issho no shigoto da' (職人になるのは、一生の仕事だ / Menjadi pengrajin adalah pekerjaan seumur hidup). Tak ada jalan pintas menuju penguasaan — tapi tiap sertifikat yang Anda raih, tiap las bermutu yang Anda buat, dan tiap kata Jepang yang Anda pelajari adalah bata bagi karier yang akan membawa Anda ke mana pun di dunia. Anda memulai gim ini. Sekarang bangunlah yang nyata.",
    },
  },
  601: {
    vi: {
      q: "AWS 'CWI' (Certified Welding Inspector) là gì, và ai cấp?",
      opts: [
        "Chứng chỉ thanh tra do Hiệp hội Hàn Hoa Kỳ cấp",
        "Giấy phép hàn quốc gia Nhật do JWES cấp",
        "Chứng chỉ đào tạo an toàn cho công việc hàn hồ quang",
        "Giấy phép vận hành máy hàn tự động",
      ],
      exp: "AWS CWI = Thanh tra Hàn được Chứng nhận, do Hiệp hội Hàn Mỹ (AWS, Hoa Kỳ) cấp. Chứng chỉ được công nhận toàn cầu để kiểm tra mối hàn theo các quy chuẩn như AWS D1.1, ASME, API. Cần kinh nghiệm được ghi nhận cộng đậu kỳ thi 3 phần. 🌍 MẸO: Ở Nhật, CWI được coi trọng trong các dự án LNG/ngoài khơi quốc tế theo quy chuẩn Mỹ; với việc JIS trong nước thì chứng chỉ JWES là chuẩn — nhiều thanh tra kỳ cựu giữ CẢ HAI để di chuyển giữa việc trong nước và quốc tế.",
    },
    id: {
      q: "Apa itu AWS 'CWI' (Certified Welding Inspector), dan siapa yang menerbitkannya?",
      opts: [
        "Sertifikasi inspektur yang diterbitkan American Welding Society",
        "Lisensi las nasional Jepang dari JWES",
        "Sertifikat pelatihan keselamatan untuk las busur",
        "Lisensi operator mesin las otomatis",
      ],
      exp: "AWS CWI = Certified Welding Inspector, diterbitkan American Welding Society (AWS, AS). Kredensial yang diakui global untuk menginspeksi las sesuai kode seperti AWS D1.1, ASME, dan API. Membutuhkan pengalaman terdokumentasi plus lulus ujian 3-bagian. 🌍 TIPS: Di Jepang, CWI berharga pada proyek LNG/lepas pantai internasional yang mengikuti kode AS; untuk pekerjaan JIS domestik, sertifikasi JWES adalah norma — banyak inspektor senior memegang KEDUANYA agar bisa berpindah antara pekerjaan domestik dan internasional.",
    },
  },
  602: {
    vi: {
      q: "Kỳ thi AWS CWI có ba phần. Phần A, B và C kiểm tra gì?",
      opts: [
        "Phần A hàn, phần B mài, phần C cắt",
        "Cả ba phần đều là thi lý thuyết viết",
        "Cơ bản, thực hành, và áp dụng quy chuẩn",
        "Thi ngôn ngữ tiếng Nhật, Anh và Trung",
      ],
      exp: "Kỳ thi CWI: Phần A Cơ bản (kiến thức hàn, đóng sách), Phần B Thực hành (đo mẫu hàn bằng thước + đọc 'Book of Specifications'), Phần C Áp dụng Quy chuẩn (mở sách, ví dụ AWS D1.1 hoặc API 1104). Phải đậu cả ba. 🌍 MẸO: Kỹ năng thước ở Phần B — đo lẹm, chiều dài chân, chiều dày cổ — chính là kỹ năng 溶接ゲージ dùng để tự kiểm (自主検査) trên công trường Nhật. Thói quen đó chuyển thẳng sang phần thực hành CWI.",
    },
    id: {
      q: "Ujian AWS CWI memiliki tiga bagian. Apa yang diuji Bagian A, B, dan C?",
      opts: [
        "Bagian A las, B gerinda, C potong",
        "Ketiga bagian adalah ujian teori tertulis",
        "Dasar, praktik langsung, dan penerapan kode",
        "Ujian bahasa Jepang, Inggris, dan Mandarin",
      ],
      exp: "Ujian CWI: Bagian A Fundamental (pengetahuan las, buku tertutup), Bagian B Praktik (mengukur replika las dengan gauge + membaca 'Book of Specifications'), Bagian C Penerapan Kode (buku terbuka seperti AWS D1.1 atau API 1104). Harus lulus ketiganya. 🌍 TIPS: Keterampilan gauge di Bagian B — mengukur undercut, panjang kaki, tebal leher — adalah keterampilan 溶接ゲージ yang sama untuk inspeksi mandiri (自主検査) di lokasi Jepang. Kebiasaan itu langsung berpindah ke praktik CWI.",
    },
  },
  603: {
    vi: {
      q: "'AWS D1.1' là gì?",
      opts: [
        "Quy chuẩn Hàn Kết cấu thép của AWS",
        "Một loại que hàn theo AWS",
        "Tiêu chuẩn mũ bảo hộ của Mỹ",
        "Một phần của Luật Tiêu chuẩn Xây dựng Nhật",
      ],
      exp: "AWS D1.1 = Quy chuẩn Hàn Kết cấu — Thép. Quy định thiết kế, chứng nhận WPS/thợ hàn, tay nghề và kiểm tra cho kết cấu thép ở Mỹ và nhiều dự án quốc tế. Ở Nhật, lĩnh vực này do JIS, Luật Tiêu chuẩn Xây dựng và AW Kentei đảm nhận. 🌍 MẸO: Nếu ô tiêu đề bản vẽ ghi 'AWS D1.1', tiêu chí chấp nhận và quy trình theo quy chuẩn đó — xác nhận WPS và quy tắc kiểm tra với QC trước khi hàn. (Quy tắc phía mũi tên của ký hiệu hàn giống JIS: dưới đường = phía mũi tên.)",
    },
    id: {
      q: "Apa itu 'AWS D1.1'?",
      opts: [
        "Kode Las Struktur AWS untuk baja",
        "Jenis elektroda las AWS",
        "Standar helm keselamatan Amerika",
        "Bagian dari Undang-Undang Standar Bangunan Jepang",
      ],
      exp: "AWS D1.1 = Structural Welding Code — Steel. Mengatur desain, kualifikasi WPS/tukang las, mutu kerja, dan inspeksi baja struktur di AS dan banyak proyek internasional. Di Jepang bidang yang sama dicakup JIS, Undang-Undang Standar Bangunan, dan AW Kentei. 🌍 TIPS: Jika blok judul gambar menulis 'AWS D1.1', kriteria penerimaan dan prosedurnya mengikuti kode itu — konfirmasi WPS dan aturan inspeksi dengan QC sebelum mengelas. (Aturan sisi panah simbol las sama dengan JIS: di bawah garis = sisi panah.)",
    },
  },
  604: {
    vi: {
      q: "'CSWIP 3.1' là gì và ai quản lý?",
      opts: [
        "Một quy chuẩn hàn kết cấu thép của Mỹ",
        "Chứng chỉ thanh tra hàn của TWI (Anh)",
        "Một luật của Nhật về bình áp lực",
        "Một hãng dây hàn lõi thuốc",
      ],
      exp: "CSWIP 3.1 = Chứng chỉ Thanh tra Hàn của TWI (Anh). Là bản đối ứng châu Âu/Anh của AWS CWI, được yêu cầu nhiều trong dầu khí và ngoài khơi. 🌍 MẸO: Với thợ nhắm việc ngoài khơi Trung Đông hay Đông Nam Á (nơi nhiều công ty Nhật hoạt động), CSWIP thường là 'vé' thanh tra bắt buộc, còn AWS CWI chiếm ưu thế ở dự án do Mỹ dẫn dắt. Biết dự án dùng họ quy chuẩn nào cho biết chứng chỉ thanh tra nào quan trọng.",
    },
    id: {
      q: "Apa itu 'CSWIP 3.1' dan siapa yang mengelolanya?",
      opts: [
        "Kode las struktur baja AS",
        "Kualifikasi inspektur las dari TWI (Inggris)",
        "Undang-undang Jepang tentang bejana tekan",
        "Merek kawat las flux-cored",
      ],
      exp: "CSWIP 3.1 = sertifikasi Inspektor Las dari TWI (Inggris). Ini padanan Inggris/Eropa dari AWS CWI, banyak diwajibkan di pekerjaan migas dan lepas pantai. 🌍 TIPS: Bagi tukang yang mengincar proyek lepas pantai Timur Tengah atau Asia Tenggara (tempat banyak firma Jepang beroperasi), CSWIP sering menjadi tiket inspektor yang diwajibkan, sementara AWS CWI dominan di proyek pimpinan AS. Mengetahui keluarga kode mana yang dipakai proyek memberi tahu sertifikat inspektor mana yang penting.",
    },
  },
  605: {
    vi: {
      q: "'ISO 9606-1' bao gồm gì, và liên quan thế nào đến chứng chỉ thợ hàn JIS?",
      opts: [
        "Tiêu chuẩn lớp sơn phủ trên thép",
        "Tiêu chuẩn vận hành cẩu",
        "Tiêu chuẩn quốc tế về thi chứng nhận thợ hàn",
        "Giống AWS D1.1 nhưng khác số hiệu",
      ],
      exp: "ISO 9606-1 = tiêu chuẩn quốc tế chứng nhận thợ hàn cho thép. Song song với chứng chỉ JIS 溶接技能者 — chứng minh kỹ năng thợ bằng thi thực hành. Dự án quốc tế ở Nhật (LNG, ngoài khơi) thường yêu cầu chứng nhận ISO 9606 cùng hoặc thay JIS. 🌍 MẸO: Các mã tư thế bạn đã biết (PA/PC/PF/PG, và 1G/2G/6G) đến từ ISO 6947 và xuất hiện trên chứng chỉ ISO 9606 — nên kiến thức tư thế của bạn đã mang tính quốc tế.",
    },
    id: {
      q: "Apa yang dicakup 'ISO 9606-1', dan bagaimana kaitannya dengan sertifikasi tukang las JIS?",
      opts: [
        "Standar lapisan cat pada baja",
        "Standar pengoperasian crane",
        "Standar internasional untuk uji kualifikasi tukang las",
        "Sama dengan AWS D1.1 dengan nomor berbeda",
      ],
      exp: "ISO 9606-1 = standar kualifikasi tukang las internasional untuk baja. Sejajar dengan sertifikasi JIS 溶接技能者 — membuktikan keterampilan tukang lewat uji praktik. Proyek internasional di Jepang (LNG, lepas pantai) sering mensyaratkan kualifikasi ISO 9606 bersama atau alih-alih JIS. 🌍 TIPS: Kode posisi yang sudah Anda ketahui (PA/PC/PF/PG, dan 1G/2G/6G) berasal dari ISO 6947 dan muncul pada sertifikat ISO 9606 — jadi pengetahuan posisi Anda sudah internasional.",
    },
  },
  606: {
    vi: {
      q: "'ISO 3834' là gì?",
      opts: [
        "Tiêu chuẩn quản lý chất lượng hàn cấp công ty",
        "Bài thi tay nghề cá nhân cho thợ hàn",
        "Một phương pháp kiểm tra không phá hủy",
        "Tiêu chuẩn độ tinh khiết khí bảo vệ",
      ],
      exp: "ISO 3834 đặt yêu cầu chất lượng cho một TỔ CHỨC hàn (không phải cá nhân) — bao gồm quản lý WPS, chứng nhận thợ hàn, thiết bị, kiểm tra và lưu hồ sơ. Coi như 'hệ chất lượng cấp xưởng cho hàn'. 🌍 MẸO: Nhà chế tạo Nhật đấu thầu dự án quốc tế/châu Âu thường chứng nhận ISO 3834 để chứng minh quản lý chất lượng hàn. Về tinh thần tương tự kỷ luật 品質計画書 và 記録 vốn đã chuẩn ở Nhật.",
    },
    id: {
      q: "Apa itu 'ISO 3834'?",
      opts: [
        "Standar manajemen mutu las tingkat perusahaan",
        "Ujian keterampilan pribadi untuk tukang las",
        "Salah satu metode uji tak merusak",
        "Standar kemurnian gas pelindung",
      ],
      exp: "ISO 3834 menetapkan persyaratan mutu untuk ORGANISASI las (bukan individu) — mencakup kontrol WPS, kualifikasi tukang, peralatan, inspeksi, dan pencatatan. Anggap 'sistem mutu tingkat bengkel untuk las'. 🌍 TIPS: Fabrikator Jepang yang menawar proyek internasional atau Eropa sering bersertifikat ISO 3834 untuk membuktikan manajemen mutu lasnya. Semangatnya mirip disiplin 品質計画書 dan 記録 yang sudah standar di Jepang.",
    },
  },
  607: {
    vi: {
      q: "'ASME Section IX' quy định gì?",
      opts: [
        "Quy định an toàn cho thang máy",
        "Quy định thiết kế hệ thống phun chữa cháy",
        "Quy định đi dây điện trong tòa nhà",
        "Chứng nhận quy trình hàn và thợ hàn",
      ],
      exp: "ASME Boiler & Pressure Vessel Code, Section IX = chứng nhận trình tự hàn/hàn vảy (WPS/PQR) và nhân sự. Là xương sống Mỹ/quốc tế cho hàn thiết bị áp lực. Lĩnh vực tương đương trong nước Nhật do JIS cộng quy tắc nồi hơi/bình áp lực (ボイラー溶接士) bao. 🌍 MẸO: Ở dự án nhà máy quốc tế tại Nhật bạn có thể hàn theo WPS ASME IX — hiểu 'biến số then chốt' (thay đổi nào buộc chứng nhận lại) là điều thiết yếu để giữ đủ điều kiện.",
    },
    id: {
      q: "Apa yang diatur 'ASME Section IX'?",
      opts: [
        "Aturan keselamatan untuk lift",
        "Aturan desain sistem sprinkler kebakaran",
        "Aturan instalasi listrik bangunan",
        "Kualifikasi prosedur las dan tukang las",
      ],
      exp: "ASME Boiler & Pressure Vessel Code, Section IX = kualifikasi prosedur las/braze (WPS/PQR) dan personel. Ini tulang punggung AS/internasional untuk las peralatan bertekanan. Domain setara domestik Jepang dicakup JIS plus aturan boiler/bejana tekan (ボイラー溶接士). 🌍 TIPS: Pada proyek pabrik internasional di Jepang Anda mungkin mengelas ke WPS ASME IX — memahami 'essential variables' (perubahan mana yang memaksa kualifikasi ulang) krusial untuk tetap terkualifikasi.",
    },
  },
  608: {
    vi: {
      q: "Trên ký hiệu hàn AWS (A2.4), ký hiệu đặt DƯỚI đường chuẩn nghĩa là gì — và JIS có giống không?",
      opts: [
        "Bản vẽ AWS không bao giờ dùng ký hiệu hàn",
        "Phía mũi tên — cùng quy tắc với JIS",
        "Phía đối diện — ngược với JIS",
        "Nghĩa là hàn hiện trường trong AWS",
      ],
      exp: "AWS A2.4 và JIS Z 3021 giống nhau: dưới đường chuẩn = phía mũi tên, trên = phía đối diện. Bản vẽ theo ISO 2553 có thể dùng đường nét đứt thứ hai: đường nét liền = phía mũi tên, đường nét đứt = phía đối diện. 🌍 MẸO: Ở dự án quốc tế, kiểm tiêu chuẩn trong ô tiêu đề bản vẽ trước khi hàn, và hỏi lại nếu thấy đường nét đứt cạnh đường chuẩn.",
    },
    id: {
      q: "Pada simbol las AWS (A2.4), apa arti simbol yang diletakkan DI BAWAH garis referensi — dan apakah sama dengan JIS?",
      opts: [
        "Gambar AWS tidak pernah memakai simbol las",
        "Sisi panah — aturan yang sama dengan JIS",
        "Sisi lain — kebalikan dari JIS",
        "Artinya las lapangan di AWS",
      ],
      exp: "AWS A2.4 dan JIS Z 3021 sama: di bawah garis referensi = sisi panah, di atas = sisi lain. Gambar menurut ISO 2553 bisa memakai garis putus-putus kedua: garis solid = sisi panah, garis putus-putus = sisi lain. 🌍 TIPS: Di proyek internasional, periksa standar gambar di blok judul sebelum mengelas, dan tanyakan jika ada garis putus-putus di samping garis referensi.",
    },
  },
  609: {
    vi: {
      q: "Chứng chỉ nhân sự hàn quốc tế IIW gồm IWE, IWT và IWS. Chúng đại diện gì (cao đến thấp)?",
      opts: [
        "Ba phương pháp hàn khác nhau",
        "Ba cấp của dây hàn",
        "Các cấp Kỹ sư, Kỹ thuật viên và Chuyên viên",
        "Ba loại khí bảo vệ",
      ],
      exp: "Nhân sự điều phối hàn IIW: IWE (Kỹ sư, cao nhất), IWT (Kỹ thuật viên), IWS (Chuyên gia), cộng IWP (Người thực hành). Được công nhận toàn cầu. WES 8103 Cấp Đặc biệt của Nhật tương thích IWE. 🌍 MẸO: Nếu bạn nhắm thành điều phối viên hàn hoặc kỹ sư QC ở dự án quốc tế, thang IWS → IWT → IWE là lộ trình toàn cầu — người có WES ở Nhật thường có thể bắc cầu sang công nhận IIW qua JWES.",
    },
    id: {
      q: "Kualifikasi personel las internasional IIW mencakup IWE, IWT, dan IWS. Apa yang mereka wakili (tertinggi ke terendah)?",
      opts: [
        "Tiga proses las yang berbeda",
        "Tiga kelas kawat las",
        "Tingkat Insinyur, Teknolog, dan Spesialis",
        "Tiga jenis gas pelindung",
      ],
      exp: "Personel koordinasi las IIW: IWE (Engineer, tertinggi), IWT (Technologist), IWS (Specialist), plus IWP (Practitioner). Diakui di seluruh dunia. WES 8103 Grade Khusus Jepang selaras dengan IWE. 🌍 TIPS: Jika Anda ingin menjadi koordinator las atau insinyur QC di proyek internasional, tangga IWS → IWT → IWE adalah jalur global — pemegang WES di Jepang sering bisa menjembatani ke pengakuan IIW melalui JWES.",
    },
  },
  610: {
    vi: {
      q: "Trong quy chuẩn quốc tế (ASME IX, ISO 15614), quan hệ giữa WPS và PQR là gì?",
      opts: [
        "PQR ghi lại mối hàn thử chứng minh WPS dùng được",
        "Đó là hai tên của cùng một tài liệu",
        "WPS được viết sau khi sản xuất xong",
        "PQR là hồ sơ lương của từng thợ hàn",
      ],
      exp: "PQR (Procedure Qualification Record) ghi một mối thi chứng nhận và kết quả thử của nó (kéo, uốn, va đập). WPS (Welding Procedure Specification) là 'công thức' sản xuất được PQR chống lưng. Cùng logic với 溶接施工要領書 của Nhật được chứng nhận bằng thi. 🌍 MẸO: Khi việc dùng WPS ASME/ISO, học biến nào là 'biến số then chốt' — thay đổi một biến quá dải (ví dụ nhiệt đầu vào hay nung trước) có thể vô hiệu chứng nhận và cần PQR mới.",
    },
    id: {
      q: "Dalam kode internasional (ASME IX, ISO 15614), apa hubungan WPS dan PQR?",
      opts: [
        "PQR mencatat las uji yang membuktikan WPS berfungsi",
        "Keduanya adalah dua nama untuk dokumen yang sama",
        "WPS ditulis setelah produksi selesai",
        "PQR adalah catatan gaji setiap tukang las",
      ],
      exp: "PQR (Procedure Qualification Record) mendokumentasikan las uji kualifikasi dan hasil ujinya (tarik, tekuk, impak). WPS (Welding Procedure Specification) adalah 'resep' produksi yang didukung PQR itu. Logika sama dengan 溶接施工要領書 Jepang yang didukung uji kualifikasi. 🌍 TIPS: Saat pekerjaan memakai WPS ASME/ISO, pelajari parameter mana yang 'essential variable' — mengubah satu di luar rentangnya (mis. masukan panas atau preheat) bisa membatalkan kualifikasi dan memerlukan PQR baru.",
    },
  },
  611: {
    vi: {
      q: "'Thử va đập Charpy V-notch (CVN)' đo gì, và vì sao quan trọng cho khí hậu lạnh?",
      opts: [
        "Độ rộng của đường hàn hoàn chỉnh",
        "Lưu lượng khí bảo vệ",
        "Độ dai — năng lượng hấp thụ khi bị gãy",
        "Điện trở của mối hàn",
      ],
      exp: "Trong thử Charpy V-notch, một mẫu có khía bị đập và năng lượng hấp thụ (Joule) cho biết độ dai. Độ dai thấp ở nhiệt độ thấp nghĩa là nguy cơ gãy giòn. Quy chuẩn quy định giá trị CVN tối thiểu ở nhiệt độ thử cho kết cấu làm việc lạnh hay chịu địa chấn. 🌍 MẸO: Khi hàn mùa đông Hokkaido/Tohoku hay nước lạnh ngoài khơi, WPS thường yêu cầu vật liệu bù đã thử va đập và kiểm soát nhiệt đầu vào để giữ độ dai HAZ — cùng kỷ luật 入熱管理 bạn đã luyện.",
    },
    id: {
      q: "Apa yang diukur 'uji impak Charpy V-notch (CVN)', dan mengapa penting untuk iklim dingin?",
      opts: [
        "Lebar manik las yang sudah jadi",
        "Laju aliran gas pelindung",
        "Ketangguhan — energi yang diserap saat patah",
        "Hambatan listrik las",
      ],
      exp: "Dalam uji Charpy V-notch, spesimen bertakik dipukul dan energi terserap (Joule) menunjukkan ketangguhan. Ketangguhan rendah pada suhu rendah berarti risiko patah getas. Kode menetapkan nilai CVN minimum pada suhu uji untuk struktur layanan dingin atau gempa. 🌍 TIPS: Untuk mengelas musim dingin Hokkaido/Tohoku atau air lepas pantai dingin, WPS sering mensyaratkan konsumabel yang diuji impak dan kontrol masukan panas untuk menjaga ketangguhan HAZ — disiplin 入熱管理 yang sama yang sudah Anda latih.",
    },
  },
  612: {
    vi: {
      q: "Trong thi hàn ống ISO/AWS, tư thế '6G' là gì, và tương đương bài thi JIS nào?",
      opts: [
        "Ống cố định nghiêng 45°, mọi tư thế — giống JIS N-2P",
        "Bài thi tấm phẳng — tư thế dễ nhất",
        "Một loại hỗn hợp khí bảo vệ",
        "Robot hàn thế hệ thứ sáu",
      ],
      exp: "6G = ống cố định nghiêng 45°, hàn qua bằng, đứng và trần trong một bài thi — tư thế khó nhất, chứng nhận dải rộng nhất. Về danh giá và độ khó, tương đương JIS N-2P. Đậu 6G là cột mốc được nể toàn cầu. 🌍 MẸO: Một 'vé' 6G (ISO 9606 hoặc ASME IX) cộng JIS N-2P làm bạn đủ điều kiện cả việc ống trong nước lẫn quốc tế — và kỹ năng bọng ngược 裏波 lượt chân ống chuyển thẳng giữa hai bên.",
    },
    id: {
      q: "Dalam uji las pipa ISO/AWS, apa itu posisi '6G', dan sebanding dengan uji JIS mana?",
      opts: [
        "Pipa tetap miring 45°, semua posisi — mirip JIS N-2P",
        "Ujian pelat datar — posisi termudah",
        "Jenis campuran gas pelindung",
        "Robot las generasi keenam",
      ],
      exp: "6G = pipa tetap pada kemiringan 45°, dilas melalui datar, tegak, dan overhead dalam satu uji — posisi tersulit, mengualifikasi rentang terluas. Dalam gengsi dan kesulitan sebanding dengan JIS N-2P. Lulus 6G adalah tonggak yang dihormati global. 🌍 TIPS: Tiket 6G (ISO 9606 atau ASME IX) plus JIS N-2P membuat Anda layak untuk pekerjaan pipa domestik maupun internasional — dan keterampilan root-pass back bead 裏波 pipa berpindah langsung di antara keduanya.",
    },
  },
  613: {
    vi: {
      q: "Thép không gỉ duplex (ví dụ 2205) đòi hỏi kiểm soát cẩn thận cân bằng tổ chức vi mô nào khi hàn?",
      opts: [
        "Tỷ lệ đồng/kẽm",
        "Chỉ tỷ lệ carbon/lưu huỳnh",
        "Cân bằng pha ferrit/austenit",
        "Không gì — không cần kiểm soát đặc biệt",
      ],
      exp: "Duplex (~50% ferrit / 50% austenit) cho độ bền cao cộng chống ăn mòn. Hàn phải kiểm soát nhiệt đầu vào và nhiệt độ giữa lượt để chỉ số ferrit trong dải: nguội quá nhanh để lại ferrit giòn quá nhiều, quá chậm gây pha có hại. Phổ biến ngoài khơi và nhà máy hóa chất. 🌍 MẸO: Duplex ngày càng dùng ở dự án ngoài khơi và LNG — thổi khí mặt sau bằng nitơ và kiểm soát nhiệt đầu vào là yêu cầu WPS điển hình, và hàm lượng ferrit được kiểm bằng máy đo ferrit.",
    },
    id: {
      q: "Baja tahan karat duplex (mis. 2205) memerlukan kontrol cermat atas keseimbangan mikrostruktur mana saat mengelas?",
      opts: [
        "Rasio tembaga/seng",
        "Hanya rasio karbon/belerang",
        "Keseimbangan fasa ferit/austenit",
        "Tidak ada — tidak perlu kontrol khusus",
      ],
      exp: "Duplex (~50% ferit / 50% austenit) memberi kekuatan tinggi plus ketahanan korosi. Pengelasan harus mengontrol masukan panas dan suhu antar-pass agar ferrite number tetap dalam rentang: pendinginan terlalu cepat meninggalkan ferit getas berlebih, terlalu lambat berisiko fase berbahaya. Umum di lepas pantai dan pabrik kimia. 🌍 TIPS: Duplex makin banyak dipakai pada proyek lepas pantai dan LNG — back-purge nitrogen dan kontrol masukan panas adalah persyaratan WPS umum, dan kandungan ferit diperiksa dengan ferrite meter.",
    },
  },
  614: {
    vi: {
      q: "Trên khắp các quy chuẩn quốc tế, thực hành 'ít hydro' được yêu cầu cho thép cường độ cao/dày chủ yếu để ngăn gì?",
      opts: [
        "Gỉ bề mặt trên mối hàn hoàn chỉnh",
        "Nứt do hydro (nứt nguội)",
        "Đường hàn bị quá rộng",
        "Lãng phí khí bảo vệ",
      ],
      exp: "Vật liệu bù ít hydro (sấy và bảo quản đúng), nung trước và kiểm soát giữa lượt giảm hydro khuếch tán — tác nhân gây nứt nguội ở thép cứng hay dày. Yêu cầu này phổ quát trên AWS, ASME, ISO và JIS. 🌍 MẸO: Kỷ luật lò sấy que (乾燥炉) bạn học cho việc JIS chính là điều quy chuẩn quốc tế yêu cầu — que đã sấy, tủ giữ và giới hạn thời gian ngoài lò đều áp dụng như nhau.",
    },
    id: {
      q: "Di berbagai kode internasional, praktik 'rendah hidrogen' diwajibkan untuk baja kekuatan tinggi/tebal terutama untuk mencegah apa?",
      opts: [
        "Karat permukaan pada las yang sudah jadi",
        "Retak akibat hidrogen (retak dingin)",
        "Manik las yang terlalu lebar",
        "Pemborosan gas pelindung",
      ],
      exp: "Konsumabel rendah hidrogen (dikeringkan dan disimpan benar), preheat, dan kontrol antar-pass mengurangi hidrogen difusi — pemicu retak dingin pada baja yang dapat dikeraskan atau tebal. Persyaratan ini universal di AWS, ASME, ISO, dan JIS. 🌍 TIPS: Disiplin oven elektroda (乾燥炉) yang Anda pelajari untuk pekerjaan JIS persis yang diminta kode internasional — elektroda kering, oven penyimpan, dan waktu terbatas di luar oven semua berlaku sama.",
    },
  },
  615: {
    vi: {
      q: "Theo quy chuẩn thiết bị áp lực, khi nào PWHT (xử lý nhiệt sau hàn) thường bắt buộc?",
      opts: [
        "Với tiết diện dày và một số vật liệu, theo quy chuẩn",
        "Với mọi mối hàn, dù mỏng đến đâu",
        "Chỉ với mối hàn nhôm",
        "Không bao giờ — PWHT chỉ là tùy chọn trang trí",
      ],
      exp: "Quy chuẩn (ASME, JIS, EN) bắt buộc PWHT trên ngưỡng chiều dày nhất định hoặc với vật liệu cụ thể (ví dụ thép Cr-Mo) để giảm ứng suất dư, giảm độ cứng và hydro, và phục hồi độ dai. Chu trình — tốc độ nung, nhiệt độ/thời gian giữ, nguội — được ghi trên biểu đồ. 🌍 MẸO: Biết kế hoạch PWHT TRƯỚC khi hàn: thêm mối đính hay sửa sau chu trình PWHT làm vô hiệu xử lý — một lỗi tốn kém và phổ biến ở quốc tế cũng như ở Nhật.",
    },
    id: {
      q: "Menurut kode peralatan bertekanan, kapan PWHT (post-weld heat treatment) biasanya diwajibkan?",
      opts: [
        "Untuk penampang tebal dan bahan tertentu, sesuai kode",
        "Untuk setiap las, setipis apa pun",
        "Hanya untuk las aluminium",
        "Tidak pernah — PWHT hanya hiasan opsional",
      ],
      exp: "Kode (ASME, JIS, EN) mewajibkan PWHT di atas ambang tebal tertentu atau untuk material spesifik (mis. baja Cr-Mo) untuk melepas tegangan sisa, mengurangi kekerasan dan hidrogen, serta memulihkan ketangguhan. Siklusnya — laju pemanasan, suhu/waktu tahan, pendinginan — direkam pada grafik. 🌍 TIPS: Ketahui rencana PWHT SEBELUM mengelas: menambah tack atau perbaikan setelah siklus PWHT membatalkan perlakuan — kesalahan mahal dan umum secara internasional maupun di Jepang.",
    },
  },
};
