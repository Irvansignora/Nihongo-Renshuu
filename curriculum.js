const CURRICULUM = {
  jft: {
    id: "jft", title: "JFT Basic", subtitle: "日本語基礎テスト", level: "A1–A2",
    description: "Japanese Foundation Test Basic — tes bahasa Jepang untuk pekerja migran. Setara CEFR A2.",
    color: "#e8533a", icon: "🇯🇵",
    units: [
      {
        id:"u1", title:"Aksara Jepang", subtitle:"文字・ひらがな・カタカナ", icon:"あ", color:"#4a9eff",
        description:"Pengenalan Hiragana, Katakana, dan Kanji dasar JFT.",
        lessons:[
          {
            id:"u1l1", title:"Hiragana Lengkap", type:"script", duration:"20 mnt",
            content:{
              intro:"Hiragana adalah aksara fonetis dasar bahasa Jepang. Ada 46 karakter dasar yang wajib dihapal.",
              theory:[
                {
                  heading:"Vokal Dasar (母音)",
                  text:"Lima vokal: a, i, u, e, o. Pengucapan konsisten — tidak berubah seperti bahasa Inggris.",
                  table:{
                    headers:["Romaji","Hiragana","Contoh kata"],
                    rows:[
                      ["a","あ","あさ (asa) = pagi"],["i","い","いぬ (inu) = anjing"],
                      ["u","う","うみ (umi) = laut"],["e","え","えき (eki) = stasiun"],
                      ["o","お","おかね (okane) = uang"]
                    ]
                  }
                },
                {
                  heading:"Konsonan K (か行)",
                  table:{
                    headers:["Romaji","Hiragana","Contoh"],
                    rows:[
                      ["ka","か","かいしゃ (kaisha) = perusahaan"],["ki","き","きいろ (kiiro) = kuning"],
                      ["ku","く","くるま (kuruma) = mobil"],["ke","け","けいたい (keitai) = ponsel"],
                      ["ko","こ","こうえん (kouen) = taman"]
                    ]
                  }
                },
                {
                  heading:"Konsonan S, T, N (さ・た・な行)",
                  table:{
                    headers:["Romaji","Hiragana","Contoh"],
                    rows:[
                      ["sa","さ","さくら = sakura"],["shi","し","しごと = pekerjaan"],["su","す","すし = sushi"],
                      ["ta","た","たべもの = makanan"],["chi","ち","ちかてつ = kereta bawah tanah"],
                      ["na","な","なまえ = nama"],["ni","に","にほん = Jepang"],["nu","ぬ","ぬの = kain"]
                    ]
                  }
                },
                {
                  heading:"H, M, Y, R, W (は〜わ行) + N",
                  table:{
                    headers:["Romaji","Hiragana","Contoh"],
                    rows:[
                      ["ha","は","はたらく = bekerja"],["hi","ひ","ひと = orang"],["fu","ふ","ふゆ = musim dingin"],
                      ["ma","ま","まいにち = setiap hari"],["mi","み","みず = air"],
                      ["ya","や","やすみ = libur"],["yu","ゆ","ゆき = salju"],["yo","よ","よる = malam"],
                      ["ra","ら","らいねん = tahun depan"],["ri","り","りょこう = perjalanan"],
                      ["wa","わ","わたし = saya"],["n","ん","ほん = buku"]
                    ]
                  }
                }
              ],
              tip:"💡 Tip: Tulis tiap karakter 10x sambil ucapkan suaranya. Bisa dihapal dalam 1 minggu dengan latihan 15 menit/hari."
            }
          },
          {
            id:"u1l2", title:"Katakana & Kata Serapan", type:"script", duration:"20 mnt",
            content:{
              intro:"Katakana digunakan untuk kata-kata serapan dari bahasa asing (gairaigo) dan nama orang/tempat asing.",
              theory:[
                {
                  heading:"Mengapa Katakana Penting di Tempat Kerja?",
                  text:"Banyak kata teknis, nama alat, dan mesin di tempat kerja ditulis dalam katakana. Menguasai katakana = lebih mudah baca manual kerja."
                },
                {
                  heading:"Katakana Penting di Tempat Kerja & Sehari-hari",
                  table:{
                    headers:["Katakana","Romaji","Asal","Arti"],
                    rows:[
                      ["テーブル","tēburu","table","meja"],["コップ","koppu","cup","gelas"],
                      ["スプーン","supūn","spoon","sendok"],["ナイフ","naifu","knife","pisau"],
                      ["バス","basu","bus","bus"],["タクシー","takushī","taxi","taksi"],
                      ["スーパー","sūpā","supermarket","supermarket"],["コンビニ","konbini","convenience store","minimarket"],
                      ["アパート","apāto","apartment","apartemen"],["エアコン","eakon","air conditioner","AC"],
                      ["パソコン","pasokon","personal computer","komputer"],["スマホ","sumaho","smartphone","smartphone"],
                      ["メール","mēru","mail","email"],["シャワー","shawā","shower","shower"],
                      ["ロッカー","rokkaa","locker","loker"],["シフト","shifuto","shift","jadwal shift"],
                      ["マスク","masuku","mask","masker"],["グローブ","gurōbu","glove","sarung tangan"],
                      ["フォーク","fōku","fork","garpu"],["メニュー","menyū","menu","menu"]
                    ]
                  }
                }
              ],
              tip:"💡 Katakana lebih mudah dihapal kalau tebak dulu artinya dari bunyi kata — kebanyakan dari bahasa Inggris!"
            }
          },
          {
            id:"u1l3", title:"Kanji Dasar JFT", type:"kanji", duration:"30 mnt",
            content:{
              intro:"Untuk JFT Basic, fokus pada ~100 kanji yang sering muncul di tempat kerja dan kehidupan sehari-hari.",
              theory:[
                {
                  heading:"Kanji Angka (数字)",
                  table:{
                    headers:["Kanji","Kun-yomi","On-yomi","Arti"],
                    rows:[
                      ["一","ひとつ","いち","1"],["二","ふたつ","に","2"],["三","みっつ","さん","3"],
                      ["四","よっつ","し/よん","4"],["五","いつつ","ご","5"],["六","むっつ","ろく","6"],
                      ["七","ななつ","しち/なな","7"],["八","やっつ","はち","8"],["九","ここのつ","く/きゅう","9"],
                      ["十","とお","じゅう","10"],["百","もも","ひゃく","100"],["千","ち","せん","1000"],
                      ["万","—","まん","10.000"]
                    ]
                  }
                },
                {
                  heading:"Kanji Waktu & Hari",
                  table:{
                    headers:["Kanji","Bacaan","Arti"],
                    rows:[
                      ["時","じ / とき","jam / waktu"],["分","ふん/ぷん","menit"],["日","にち/ひ","hari/matahari"],
                      ["月","つき/がつ","bulan"],["年","ねん/とし","tahun"],["曜","よう","hari dalam seminggu"],
                      ["今","いま","sekarang"],["毎","まい","setiap"],["朝","あさ","pagi"],
                      ["昼","ひる","siang"],["夜","よる","malam"],["週","しゅう","minggu"]
                    ]
                  }
                },
                {
                  heading:"Kanji Tempat Kerja (Wajib Hafal!)",
                  table:{
                    headers:["Kanji","Bacaan","Arti"],
                    rows:[
                      ["会社","かいしゃ","perusahaan"],["仕事","しごと","pekerjaan"],
                      ["工場","こうじょう","pabrik"],["食堂","しょくどう","kantin"],
                      ["休憩","きゅうけい","istirahat"],["出口","でぐち","pintu keluar"],
                      ["入口","いりぐち","pintu masuk"],["非常口","ひじょうぐち","pintu darurat"],
                      ["危険","きけん","bahaya"],["注意","ちゅうい","hati-hati"],
                      ["禁止","きんし","dilarang"],["立入禁止","たちいりきんし","dilarang masuk"],
                      ["使用中","しようちゅう","sedang digunakan"],["故障中","こしょうちゅう","sedang rusak"],
                      ["清掃中","せいそうちゅう","sedang dibersihkan"]
                    ]
                  }
                }
              ],
              tip:"💡 Fokus dulu pada kanji yang ada di rambu-rambu tempat kerja — itu yang paling sering keluar di soal JFT dan paling penting untuk keselamatan."
            }
          }
        ]
      },
      {
        id:"u2", title:"Kosakata Inti", subtitle:"基本語彙・テーマ別", icon:"語", color:"#3db87a",
        description:"Kosakata yang paling sering muncul di soal JFT, dikelompokkan per tema.",
        lessons:[
          {
            id:"u2l1", title:"Sapaan & Ekspresi Dasar", type:"vocab", duration:"15 mnt",
            content:{
              intro:"Ekspresi sapaan adalah hal pertama yang harus dikuasai — digunakan setiap hari di tempat kerja dan kehidupan sosial.",
              vocabList:[
                {jp:"おはようございます",reading:"ohayou gozaimasu",id:"Selamat pagi (formal)",note:"Selalu gunakan versi formal ini di tempat kerja"},
                {jp:"こんにちは",reading:"konnichiwa",id:"Selamat siang / Halo",note:"Dari tengah hari sampai sore"},
                {jp:"こんばんは",reading:"konbanwa",id:"Selamat malam",note:"Saat bertemu orang di malam hari"},
                {jp:"ありがとうございます",reading:"arigatou gozaimasu",id:"Terima kasih (formal)",note:"Wajib hafal! Gunakan di tempat kerja"},
                {jp:"すみません",reading:"sumimasen",id:"Permisi / Maaf / Excuse me",note:"Sangat serbaguna — minta perhatian, minta maaf ringan"},
                {jp:"ごめんなさい",reading:"gomen nasai",id:"Maaf (kesalahan serius)",note:"Untuk kesalahan yang lebih serius"},
                {jp:"はい",reading:"hai",id:"Ya / Siap",note:"Juga berarti 'saya dengar' saat menerima instruksi"},
                {jp:"いいえ",reading:"iie",id:"Tidak",note:"Jarang digunakan langsung — orang Jepang lebih sering paraphrase"},
                {jp:"わかりました",reading:"wakarimashita",id:"Saya mengerti / Baik",note:"Digunakan saat menerima instruksi — WAJIB HAFAL"},
                {jp:"わかりません",reading:"wakarimasen",id:"Saya tidak mengerti",note:"Jangan pura-pura mengerti — katakan ini!"},
                {jp:"もう一度お願いします",reading:"mou ichido onegaishimasu",id:"Tolong ulangi sekali lagi",note:"Gunakan jika tidak dengar/mengerti"},
                {jp:"お願いします",reading:"onegaishimasu",id:"Tolong / Saya mohon",note:"Saat meminta sesuatu"},
                {jp:"いただきます",reading:"itadakimasu",id:"(Ucapan sebelum makan)",note:"Wajib diucapkan sebelum makan"},
                {jp:"ごちそうさまでした",reading:"gochisousama deshita",id:"(Ucapan setelah makan)",note:"Wajib diucapkan setelah makan"},
                {jp:"よろしくお願いします",reading:"yoroshiku onegaishimasu",id:"Mohon kerja samanya",note:"Saat berkenalan atau memulai pekerjaan bersama"},
                {jp:"お疲れ様です",reading:"otsukaresama desu",id:"Selamat bekerja keras",note:"Sapaan ke rekan saat sedang/selesai bekerja"},
                {jp:"失礼します",reading:"shitsurei shimasu",id:"Permisi (meninggalkan ruangan)",note:"Saat masuk/keluar ruangan atasan"},
                {jp:"お先に失礼します",reading:"osaki ni shitsurei shimasu",id:"Saya pamit duluan",note:"Saat pulang lebih dulu dari rekan kerja"}
              ],
              examples:[
                {jp:"A：おはようございます。\nB：おはようございます。今日もよろしくお願いします。",id:"A: Selamat pagi.\nB: Selamat pagi. Hari ini juga mohon kerja samanya.",note:"Sapaan standar di tempat kerja setiap pagi"},
                {jp:"A：この仕事、お願いします。\nB：はい、わかりました。",id:"A: Tolong kerjakan pekerjaan ini.\nB: Iya, saya mengerti.",note:"Saat menerima tugas dari atasan"}
              ]
            }
          },
          {
            id:"u2l2", title:"Waktu & Jadwal", type:"vocab", duration:"20 mnt",
            content:{
              intro:"Kosakata waktu sangat krusial di JFT — untuk memahami jadwal kerja, shift, dan instruksi.",
              vocabList:[
                {jp:"今日",reading:"kyou",id:"hari ini"},{jp:"明日",reading:"ashita",id:"besok"},
                {jp:"昨日",reading:"kinou",id:"kemarin"},{jp:"今週",reading:"konshuu",id:"minggu ini"},
                {jp:"来週",reading:"raishuu",id:"minggu depan"},{jp:"先週",reading:"senshuu",id:"minggu lalu"},
                {jp:"今月",reading:"kongetsu",id:"bulan ini"},{jp:"来月",reading:"raigetsu",id:"bulan depan"},
                {jp:"毎日",reading:"mainichi",id:"setiap hari"},{jp:"毎週",reading:"maishuu",id:"setiap minggu"},
                {jp:"午前",reading:"gozen",id:"pagi (AM)"},{jp:"午後",reading:"gogo",id:"sore/malam (PM)"},
                {jp:"〜時",reading:"~ji",id:"pukul ~ (jam)"},{jp:"〜分",reading:"~fun/pun",id:"~ menit"},
                {jp:"半",reading:"han",id:"setengah (30 menit)"},{jp:"始まる",reading:"hajimaru",id:"mulai / dimulai"},
                {jp:"終わる",reading:"owaru",id:"selesai / berakhir"},{jp:"休み",reading:"yasumi",id:"libur / istirahat"},
                {jp:"残業",reading:"zangyou",id:"lembur"},{jp:"遅刻",reading:"chikoku",id:"terlambat"},
                {jp:"早退",reading:"soutai",id:"pulang lebih awal"}
              ],
              theory:[
                {
                  heading:"Cara Membaca Jam",
                  text:"Pola: 〔angka〕時〔angka〕分",
                  table:{
                    headers:["Waktu","Bahasa Jepang","Romaji"],
                    rows:[
                      ["7:00","しちじ (七時)","shichi-ji"],["8:30","はちじはん (八時半)","hachi-ji han"],
                      ["9:15","くじじゅうごふん","ku-ji juugo-fun"],["12:00","じゅうにじ","juuni-ji"],
                      ["17:00","ごじ (五時)","go-ji"]
                    ]
                  }
                },
                {
                  heading:"Nama Hari dalam Seminggu",
                  table:{
                    headers:["Kanji","Bacaan","Hari"],
                    rows:[
                      ["月曜日","getsuyoubi","Senin"],["火曜日","kayoubi","Selasa"],
                      ["水曜日","suiyoubi","Rabu"],["木曜日","mokuyoubi","Kamis"],
                      ["金曜日","kin'youbi","Jumat"],["土曜日","doyoubi","Sabtu"],
                      ["日曜日","nichiyoubi","Minggu"]
                    ]
                  }
                }
              ],
              examples:[
                {jp:"仕事は午前八時に始まります。",id:"Pekerjaan dimulai pukul 8 pagi.",note:""},
                {jp:"休憩は十二時から一時までです。",id:"Istirahat dari jam 12 sampai jam 1.",note:""},
                {jp:"今日は残業がありますか。",id:"Hari ini ada lembur?",note:""}
              ]
            }
          },
          {
            id:"u2l3", title:"Pekerjaan & Tempat Kerja", type:"vocab", duration:"25 mnt",
            content:{
              intro:"Kosakata khusus lingkungan kerja — tema yang PALING banyak keluar di soal JFT Basic.",
              vocabList:[
                {jp:"仕事",reading:"shigoto",id:"pekerjaan"},{jp:"働く",reading:"hataraku",id:"bekerja"},
                {jp:"会社",reading:"kaisha",id:"perusahaan / kantor"},{jp:"工場",reading:"koujou",id:"pabrik"},
                {jp:"社員",reading:"shain",id:"karyawan tetap"},{jp:"アルバイト",reading:"arubaito",id:"kerja paruh waktu"},
                {jp:"上司",reading:"joushi",id:"atasan"},{jp:"同僚",reading:"douryou",id:"rekan kerja"},
                {jp:"部長",reading:"buchou",id:"manajer / kepala divisi"},{jp:"係長",reading:"kakarichou",id:"supervisor"},
                {jp:"シフト",reading:"shifuto",id:"shift kerja"},{jp:"残業",reading:"zangyou",id:"lembur"},
                {jp:"有給",reading:"yuukyuu",id:"cuti berbayar"},{jp:"給料",reading:"kyuuryou",id:"gaji"},
                {jp:"休憩",reading:"kyuukei",id:"istirahat"},{jp:"昼休み",reading:"hiruyasumi",id:"istirahat makan siang"},
                {jp:"制服",reading:"seifuku",id:"seragam"},{jp:"ロッカー",reading:"rokkaa",id:"loker"},
                {jp:"タイムカード",reading:"taimu kaado",id:"kartu absensi"},{jp:"報告する",reading:"houkoku suru",id:"melaporkan"},
                {jp:"確認する",reading:"kakunin suru",id:"memastikan / mengecek"},{jp:"準備する",reading:"junbi suru",id:"mempersiapkan"},
                {jp:"片付ける",reading:"katazukeru",id:"membereskan"},{jp:"気をつける",reading:"ki wo tsukeru",id:"berhati-hati"}
              ],
              theory:[
                {
                  heading:"Instruksi Kerja yang Sering Didengar",
                  table:{
                    headers:["Bahasa Jepang","Romaji","Artinya"],
                    rows:[
                      ["やってみてください","yatte mite kudasai","Coba lakukan"],
                      ["もう一度確認してください","mou ichido kakunin shite kudasai","Tolong cek sekali lagi"],
                      ["これを片付けてください","kore o katazukete kudasai","Tolong bereskan ini"],
                      ["報告してください","houkoku shite kudasai","Tolong laporkan"],
                      ["気をつけてください","ki o tsukete kudasai","Tolong hati-hati"],
                      ["先に帰ってもいいです","saki ni kaette mo ii desu","Boleh pulang duluan"]
                    ]
                  }
                }
              ]
            }
          },
          {
            id:"u2l4", title:"Kesehatan & Kedaruratan", type:"vocab", duration:"20 mnt",
            content:{
              intro:"Kosakata kesehatan penting untuk situasi darurat, lapor sakit, dan komunikasi dengan dokter.",
              vocabList:[
                {jp:"体",reading:"karada",id:"tubuh / badan"},{jp:"頭",reading:"atama",id:"kepala"},
                {jp:"お腹",reading:"onaka",id:"perut"},{jp:"背中",reading:"senaka",id:"punggung"},
                {jp:"足",reading:"ashi",id:"kaki"},{jp:"手",reading:"te",id:"tangan"},
                {jp:"目",reading:"me",id:"mata"},{jp:"耳",reading:"mimi",id:"telinga"},
                {jp:"痛い",reading:"itai",id:"sakit / nyeri"},{jp:"熱",reading:"netsu",id:"demam"},
                {jp:"気分が悪い",reading:"kibun ga warui",id:"tidak enak badan"},
                {jp:"病気",reading:"byouki",id:"sakit (kondisi)"},{jp:"怪我",reading:"kega",id:"cedera / luka"},
                {jp:"病院",reading:"byouin",id:"rumah sakit"},{jp:"薬",reading:"kusuri",id:"obat"},
                {jp:"救急車",reading:"kyuukyuusha",id:"ambulans"},{jp:"休む",reading:"yasumu",id:"istirahat / tidak masuk"},
                {jp:"助けてください",reading:"tasukete kudasai",id:"Tolong bantu saya! (darurat)"}
              ],
              examples:[
                {jp:"頭が痛いです。休んでもいいですか。",id:"Kepala saya sakit. Bolehkah saya istirahat?",note:"Cara meminta izin sakit ke atasan"},
                {jp:"救急車を呼んでください！",id:"Tolong panggil ambulans!",note:"Ungkapan darurat — hapal ini!"},
                {jp:"お腹が痛くて、仕事を休みたいです。",id:"Perut saya sakit, saya ingin tidak masuk kerja.",note:""}
              ]
            }
          },
          {
            id:"u2l5", title:"Tempat & Arah", type:"vocab", duration:"15 mnt",
            content:{
              intro:"Kosakata tempat dan arah untuk navigasi sehari-hari di Jepang.",
              vocabList:[
                {jp:"右",reading:"migi",id:"kanan"},{jp:"左",reading:"hidari",id:"kiri"},
                {jp:"まっすぐ",reading:"massugu",id:"lurus"},{jp:"前",reading:"mae",id:"depan"},
                {jp:"後ろ",reading:"ushiro",id:"belakang"},{jp:"上",reading:"ue",id:"atas"},
                {jp:"下",reading:"shita",id:"bawah"},{jp:"近く",reading:"chikaku",id:"dekat"},
                {jp:"隣",reading:"tonari",id:"di sebelah"},{jp:"駅",reading:"eki",id:"stasiun"},
                {jp:"バス停",reading:"basutei",id:"halte bus"},{jp:"病院",reading:"byouin",id:"rumah sakit"},
                {jp:"銀行",reading:"ginkou",id:"bank"},{jp:"郵便局",reading:"yuubinkyoku",id:"kantor pos"},
                {jp:"コンビニ",reading:"konbini",id:"minimarket"},{jp:"スーパー",reading:"suupaa",id:"supermarket"},
                {jp:"駐車場",reading:"chuushajou",id:"tempat parkir"},{jp:"トイレ",reading:"toire",id:"toilet"}
              ],
              examples:[
                {jp:"A：駅はどこですか。\nB：まっすぐ行って、右に曲がってください。左にあります。",id:"A: Stasiun di mana?\nB: Jalan lurus, lalu belok kanan. Ada di sebelah kiri.",note:"Dialog meminta arah"}
              ]
            }
          }
        ]
      },
      {
        id:"u3", title:"Tata Bahasa", subtitle:"文法パターン", icon:"文", color:"#8b6cf7",
        description:"Pola grammar inti JFT Basic — rumus, contoh, dan latihan.",
        lessons:[
          {
            id:"u3l1", title:"Partikel Dasar は・が・を・に・で", type:"grammar", duration:"30 mnt",
            content:{
              intro:"Partikel (助詞) adalah komponen terpenting grammar Jepang. Partikel menentukan fungsi kata dalam kalimat.",
              theory:[
                {
                  heading:"は (wa) — Topik kalimat",
                  text:"Menandai topik kalimat. Bisa berbeda dari subjek.",
                  table:{
                    headers:["Pola","Contoh JP","Arti"],
                    rows:[
                      ["〔topik〕は〔predikat〕","わたしは田中です。","Saya adalah Tanaka."],
                      ["〔topik〕は〔predikat〕","これは本です。","Ini adalah buku."],
                      ["〔topik〕は〔adj〕です","仕事は大変です。","Pekerjaan ini berat."]
                    ]
                  }
                },
                {
                  heading:"が (ga) — Subjek (penekanan)",
                  table:{
                    headers:["Pola","Contoh JP","Arti"],
                    rows:[
                      ["〔subjek〕がいます/あります","ここに猫がいます。","Di sini ada kucing."],
                      ["〔subjek〕がわかります","日本語がわかります。","Saya mengerti bahasa Jepang."],
                      ["〔subjek〕が好きです","すしが好きです。","Saya suka sushi."]
                    ]
                  }
                },
                {
                  heading:"を (o) — Objek langsung",
                  table:{
                    headers:["Pola","Contoh JP","Arti"],
                    rows:[
                      ["〔objek〕を〔kata kerja〕","ご飯を食べます。","Makan nasi."],
                      ["〔objek〕を〔kata kerja〕","仕事をします。","Bekerja."],
                      ["〔objek〕を〔kata kerja〕","バスを待ちます。","Menunggu bus."]
                    ]
                  }
                },
                {
                  heading:"に (ni) — Arah, lokasi, waktu",
                  table:{
                    headers:["Fungsi","Contoh JP","Arti"],
                    rows:[
                      ["Tujuan (pergi ke)","会社に行きます。","Pergi ke kantor."],
                      ["Lokasi (ada di)","部屋にいます。","Ada di kamar."],
                      ["Waktu spesifik","八時に起きます。","Bangun jam 8."],
                      ["Penerima","田中さんに教えます。","Mengajari Tanaka."]
                    ]
                  }
                },
                {
                  heading:"で (de) — Lokasi aksi, alat, cara",
                  table:{
                    headers:["Fungsi","Contoh JP","Arti"],
                    rows:[
                      ["Lokasi aksi","食堂で食べます。","Makan di kantin."],
                      ["Alat/cara","バスで来ます。","Datang dengan bus."],
                      ["Bahasa","日本語で話します。","Berbicara dalam bahasa Jepang."]
                    ]
                  }
                }
              ],
              tip:"💡 Cara mudah ingat: を = aksi terhadap objek ini | に = titik spesifik (ke/di/jam) | で = di tempat aksi berlangsung / pakai alat"
            }
          },
          {
            id:"u3l2", title:"Masu-form — Kata Kerja Formal", type:"grammar", duration:"25 mnt",
            content:{
              intro:"Masu-form (〜ます) adalah bentuk formal yang digunakan dalam percakapan sopan. Paling banyak muncul di JFT.",
              theory:[
                {
                  heading:"Konjugasi Masu-form",
                  table:{
                    headers:["Bentuk","Akhiran","Contoh (taberu=makan)"],
                    rows:[
                      ["Sekarang/akan","〜ます","食べます (tabemasu)"],
                      ["Negatif","〜ません","食べません (tabemasen)"],
                      ["Lampau","〜ました","食べました (tabemashita)"],
                      ["Lampau negatif","〜ませんでした","食べませんでした"]
                    ]
                  }
                },
                {
                  heading:"Kata Kerja Penting + Masu-form",
                  table:{
                    headers:["Kamus","Masu-form","Arti"],
                    rows:[
                      ["行く (iku)","行きます","pergi"],["来る (kuru)","来ます","datang"],
                      ["帰る (kaeru)","帰ります","pulang"],["食べる (taberu)","食べます","makan"],
                      ["飲む (nomu)","飲みます","minum"],["話す (hanasu)","話します","berbicara"],
                      ["聞く (kiku)","聞きます","mendengar"],["書く (kaku)","書きます","menulis"],
                      ["読む (yomu)","読みます","membaca"],["見る (miru)","見ます","melihat"],
                      ["する (suru)","します","melakukan"],["起きる (okiru)","起きます","bangun"],
                      ["寝る (neru)","寝ます","tidur"],["働く (hataraku)","働きます","bekerja"],
                      ["休む (yasumu)","休みます","istirahat"],["待つ (matsu)","待ちます","menunggu"],
                      ["買う (kau)","買います","membeli"],["教える (oshieru)","教えます","mengajari"]
                    ]
                  }
                }
              ],
              examples:[
                {jp:"毎朝七時に起きます。",id:"Setiap pagi bangun jam 7.",note:""},
                {jp:"昨日は残業しました。",id:"Kemarin lembur.",note:""},
                {jp:"今日は体調が悪いので、仕事に行きません。",id:"Hari ini kondisi badan tidak baik, jadi tidak pergi kerja.",note:""}
              ]
            }
          },
          {
            id:"u3l3", title:"Kata Sifat い・な", type:"grammar", duration:"20 mnt",
            content:{
              intro:"Ada dua jenis kata sifat: い-adjective dan な-adjective. Konjugasinya berbeda!",
              theory:[
                {
                  heading:"い-Adjective — Konjugasi",
                  table:{
                    headers:["Bentuk","Pola","Contoh (atsui=panas)"],
                    rows:[
                      ["Positif","〜い + です","暑いです = panas"],
                      ["Negatif","〜く + ない + です","暑くないです = tidak panas"],
                      ["Lampau +","〜かった + です","暑かったです = kemarin panas"],
                      ["Modifikasi noun","〜い + 〔noun〕","暑い日 = hari yang panas"]
                    ]
                  }
                },
                {
                  heading:"な-Adjective — Konjugasi",
                  table:{
                    headers:["Bentuk","Pola","Contoh (shizuka=tenang)"],
                    rows:[
                      ["Positif","〜 + です","静かです = tenang"],
                      ["Negatif","〜 + じゃない + です","静かじゃないです = tidak tenang"],
                      ["Modifikasi noun","〜 + な + 〔noun〕","静かな部屋 = kamar yang tenang"]
                    ]
                  }
                },
                {
                  heading:"Kata Sifat Penting JFT",
                  table:{
                    headers:["JP","Romaji","Arti","Jenis"],
                    rows:[
                      ["暑い","atsui","panas (cuaca)","い"],["寒い","samui","dingin (cuaca)","い"],
                      ["熱い","atsui","panas (benda)","い"],["冷たい","tsumetai","dingin (benda)","い"],
                      ["辛い","karai","pedas","い"],["甘い","amai","manis","い"],
                      ["大きい","ookii","besar","い"],["小さい","chiisai","kecil","い"],
                      ["多い","ooi","banyak","い"],["難しい","muzukashii","sulit","い"],
                      ["きれい","kirei","cantik/bersih","な"],["大変","taihen","berat/susah","な"],
                      ["大丈夫","daijoubu","tidak apa-apa","な"],["便利","benri","nyaman/praktis","な"],
                      ["元気","genki","sehat/bersemangat","な"],["好き","suki","suka","な"],
                      ["嫌い","kirai","tidak suka","な"],["上手","jouzu","mahir","な"],
                      ["下手","heta","tidak mahir","な"],["親切","shinsetsu","ramah/baik hati","な"]
                    ]
                  }
                }
              ]
            }
          },
          {
            id:"u3l4", title:"Pola Permintaan, Izin & Larangan", type:"grammar", duration:"25 mnt",
            content:{
              intro:"Pola meminta tolong, meminta izin, dan melarang — SANGAT penting di lingkungan kerja Jepang!",
              theory:[
                {
                  heading:"〜てください — Tolong lakukan",
                  table:{
                    headers:["Pola","Contoh","Arti"],
                    rows:[
                      ["〔te-form〕 + ください","書いてください。","Tolong tulis."],
                      ["〔te-form〕 + ください","待ってください。","Tolong tunggu."],
                      ["〔te-form〕 + ください","確認してください。","Tolong cek."],
                      ["〔te-form〕 + ください","気をつけてください。","Tolong hati-hati."]
                    ]
                  }
                },
                {
                  heading:"〜てもいいですか — Bolehkah saya...?",
                  table:{
                    headers:["Pola","Contoh","Arti"],
                    rows:[
                      ["〔te-form〕 + もいいですか","帰ってもいいですか。","Boleh saya pulang?"],
                      ["〔te-form〕 + もいいですか","トイレに行ってもいいですか。","Boleh saya ke toilet?"],
                      ["〔te-form〕 + もいいですか","休んでもいいですか。","Boleh saya istirahat?"]
                    ]
                  }
                },
                {
                  heading:"〜てはいけません — Tidak boleh",
                  table:{
                    headers:["Pola","Contoh","Arti"],
                    rows:[
                      ["〔te-form〕 + はいけません","ここで食べてはいけません。","Di sini tidak boleh makan."],
                      ["〔te-form〕 + はいけません","写真を撮ってはいけません。","Tidak boleh foto."]
                    ]
                  }
                },
                {
                  heading:"〜たいです — Ingin | 〜なければなりません — Harus",
                  table:{
                    headers:["Pola","Contoh","Arti"],
                    rows:[
                      ["〔masu-stem〕 + たいです","水を飲みたいです。","Ingin minum air."],
                      ["〔masu-stem〕 + たいです","早く帰りたいです。","Ingin cepat pulang."],
                      ["〔nai-stem〕 + なければなりません","薬を飲まなければなりません。","Harus minum obat."],
                      ["〔nai-stem〕 + なければなりません","報告しなければなりません。","Harus melapor."]
                    ]
                  }
                }
              ],
              examples:[
                {jp:"A：少し休んでもいいですか。\nB：はい、いいですよ。十分休んでください。",id:"A: Boleh saya istirahat sebentar?\nB: Boleh. Tolong istirahat 10 menit.",note:"Dialog umum dengan atasan"}
              ]
            }
          },
          {
            id:"u3l5", title:"Kalimat Penghubung & Sebab-Akibat", type:"grammar", duration:"20 mnt",
            content:{
              intro:"Pola menghubungkan dua kalimat — penting untuk membuat penjelasan dan alasan.",
              theory:[
                {
                  heading:"〜から (karena) | 〜ので (karena, formal)",
                  table:{
                    headers:["Pola","Contoh","Arti"],
                    rows:[
                      ["〜から","雨が降っているから、バスで来ました。","Karena hujan, naik bus."],
                      ["〜から","体調が悪いから、休みます。","Karena tidak enak badan, tidak masuk."],
                      ["〜ので (lebih sopan)","急用があるので、先に帰ります。","Karena ada urusan mendadak, pulang duluan."],
                      ["〜ので (lebih sopan)","電車が遅れているので、遅刻します。","Karena kereta telat, akan terlambat."]
                    ]
                  }
                },
                {
                  heading:"〜が / 〜けど (tapi) | 〜て〜て (urutan)",
                  table:{
                    headers:["Pola","Contoh","Arti"],
                    rows:[
                      ["〜が (tapi, formal)","日本語は難しいですが、楽しいです。","Bahasa Jepang susah tapi menyenangkan."],
                      ["〜けど (tapi, kasual)","行きたいけど、お金がありません。","Mau pergi tapi tidak ada uang."],
                      ["〜て〜て (urutan)","起きて、シャワーを浴びて、会社に行きます。","Bangun, mandi, lalu pergi ke kantor."]
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      {
        id:"u4", title:"Mendengarkan", subtitle:"聴解・会話スクリプト", icon:"聴", color:"#e8533a",
        description:"Script percakapan dan strategi menjawab soal Choukai JFT. Semua dialog bisa diputar dengan TTS.",
        lessons:[
          {
            id:"u4l1", title:"Strategi Choukai JFT", type:"listening", duration:"10 mnt",
            content:{
              intro:"Choukai (聴解) adalah bagian mendengarkan JFT. Strategi yang tepat bisa meningkatkan skor secara signifikan.",
              theory:[
                {
                  heading:"Format Soal Choukai JFT",
                  text:"Tipe soal Choukai:\n1. Percakapan singkat (2 orang) + pertanyaan\n2. Pengumuman / instruksi dari satu orang\n3. Dialog situasional (kantor, toko, dokter)\n\nSemua soal audio diputar 2 kali."
                },
                {
                  heading:"5 Strategi Utama",
                  text:"① Baca pilihan jawaban SEBELUM audio diputar\n② Fokus pada kata tanya: いつ(kapan)・どこ(di mana)・だれ(siapa)・なに(apa)・なぜ(kenapa)・どうやって(bagaimana)\n③ Perhatikan kalimat terakhir — sering ada perubahan atau konfirmasi\n④ Catat angka, waktu, dan nama tempat yang disebut\n⑤ Jangan panik kalau ada kata yang tidak dimengerti — tangkap konteks keseluruhannya"
                },
                {
                  heading:"Kata-kata Sinyal Penting",
                  table:{
                    headers:["Kata","Arti","Fungsi"],
                    rows:[
                      ["でも / しかし","tapi","Ada perubahan/kontras — PERHATIKAN!"],
                      ["それから / そして","lalu / dan","Urutan aksi berikutnya"],
                      ["まず","pertama-tama","Instruksi pertama"],
                      ["次に","selanjutnya","Instruksi berikutnya"],
                      ["最後に","terakhir","Instruksi terakhir"],
                      ["〜ながら","sambil ~","Dua aksi bersamaan"],
                      ["やっぱり / やはり","ternyata","Konfirmasi / perubahan pikiran"]
                    ]
                  }
                }
              ]
            }
          },
          {
            id:"u4l2", title:"Dialog: Di Tempat Kerja", type:"listening", duration:"20 mnt",
            content:{
              intro:"Dialog situasi di tempat kerja — paling sering muncul di soal Choukai JFT.",
              dialogs:[
                {
                  title:"Melaporkan Keterlambatan",
                  tts:true,
                  script:"A：もしもし、田中です。\nB：はい、山田工場です。\nA：すみません、電車が遅れているので、少し遅刻します。\nB：わかりました。何時ごろ来られますか。\nA：9時半ごろになると思います。\nB：わかりました。気をつけて来てください。\nA：はい、すみませんでした。",
                  translation:"A: Halo, ini Tanaka.\nB: Iya, ini Pabrik Yamada.\nA: Maaf, karena kereta terlambat, saya akan sedikit terlambat.\nB: Mengerti. Kira-kira jam berapa bisa datang?\nA: Saya kira sekitar jam 9.30.\nB: Mengerti. Hati-hati di jalan ya.\nA: Iya, maaf ya.",
                  questions:[
                    {q:"田中さんはなぜ遅刻しますか。",a:"電車が遅れているから。",qa:"Kenapa Tanaka terlambat?",aa:"Karena kereta terlambat."},
                    {q:"田中さんは何時ごろ来ますか。",a:"9時半ごろ。",qa:"Tanaka datang jam berapa?",aa:"Sekitar jam 9.30."}
                  ]
                },
                {
                  title:"Menerima Instruksi Kerja",
                  tts:true,
                  script:"A：鈴木さん、今日の仕事を説明します。\nB：はい、お願いします。\nA：まず、倉庫にある箱を3階に運んでください。\nB：何箱ありますか。\nA：10箱あります。2人でやってください。\nB：わかりました。それから？\nA：終わったら、倉庫を片付けてください。\nB：はい、わかりました。",
                  translation:"A: Suzuki, saya jelaskan pekerjaan hari ini.\nB: Iya, silakan.\nA: Pertama, tolong bawa kotak yang ada di gudang ke lantai 3.\nB: Ada berapa kotak?\nA: Ada 10 kotak. Lakukan berdua.\nB: Mengerti. Lalu?\nA: Kalau sudah, tolong bereskan gudangnya.\nB: Iya, mengerti.",
                  questions:[
                    {q:"最初に何をしますか。",a:"倉庫の箱を3階に運ぶ。",qa:"Pertama harus melakukan apa?",aa:"Membawa kotak dari gudang ke lantai 3."},
                    {q:"箱は何箱ありますか。",a:"10箱",qa:"Ada berapa kotak?",aa:"10 kotak."}
                  ]
                },
                {
                  title:"Meminta Izin Tidak Masuk",
                  tts:true,
                  script:"A：もしもし、山本部長ですか。\nB：はい、山本です。\nA：あの、今日熱があって、体調が悪いんですが...\nB：そうですか。何度ありますか。\nA：38度5分あります。\nB：それは大変ですね。今日は休んでください。病院には行きましたか。\nA：まだです。これから行こうと思っています。\nB：そうですか。お大事に。よくなったら連絡してください。\nA：はい。ご迷惑をおかけしてすみません。",
                  translation:"A: Halo, apakah ini Kepala Yamamoto?\nB: Iya, ini Yamamoto.\nA: Ehm, hari ini saya demam, kondisi badan tidak baik...\nB: Begitu ya. Suhunya berapa?\nA: 38,5 derajat.\nB: Wah lumayan. Hari ini istirahat saja. Sudah ke dokter?\nA: Belum. Rencananya mau ke sana sekarang.\nB: Begitu. Semoga cepat sembuh. Kalau membaik tolong kabari.\nA: Iya. Maaf sudah merepotkan.",
                  questions:[
                    {q:"この人はどうして会社を休みますか。",a:"熱があって体調が悪いから。",qa:"Kenapa tidak masuk?",aa:"Karena demam dan tidak enak badan."},
                    {q:"熱は何度ですか。",a:"38度5分",qa:"Suhunya berapa?",aa:"38,5 derajat."}
                  ]
                },
                {
                  title:"Di Minimarket / Kasir",
                  tts:true,
                  script:"店員：いらっしゃいませ。\n客：これとこれをください。\n店員：はい。袋はご利用ですか。\n客：いいえ、結構です。\n店員：合計で580円になります。\n客：Suicaで払えますか。\n店員：はい、こちらでタッチしてください。\n客：ありがとうございます。\n店員：ありがとうございました。またお越しくださいませ。",
                  translation:"Kasir: Selamat datang.\nPelanggan: Saya mau ini dan ini.\nKasir: Baik. Perlu kantong plastik?\nPelanggan: Tidak perlu.\nKasir: Total 580 yen.\nPelanggan: Bisa bayar pakai Suica?\nKasir: Bisa, silakan tap di sini.\nPelanggan: Terima kasih.\nKasir: Terima kasih, silakan datang lagi.",
                  questions:[
                    {q:"合計はいくらですか。",a:"580円",qa:"Totalnya berapa?",aa:"580 yen."}
                  ]
                },
                {
                  title:"Di Klinik Dokter",
                  tts:true,
                  script:"医者：どうしましたか。\n患者：3日前から頭が痛くて、熱もあります。\n医者：熱は何度ですか。\n患者：37度8分です。\n医者：喉も痛いですか。\n患者：はい、少し痛いです。\n医者：風邪ですね。薬を出しますから、今日はゆっくり休んでください。",
                  translation:"Dokter: Ada apa?\nPasien: Dari 3 hari yang lalu kepala sakit dan juga demam.\nDokter: Demamnya berapa derajat?\nPasien: 37,8 derajat.\nDokter: Tenggorokan juga sakit?\nPasien: Iya, sedikit sakit.\nDokter: Ini flu. Saya berikan obat, hari ini istirahat yang cukup.",
                  questions:[
                    {q:"いつから頭が痛いですか。",a:"3日前から",qa:"Sejak kapan kepalanya sakit?",aa:"Dari 3 hari yang lalu."},
                    {q:"医者は何と言いましたか。",a:"風邪だと言いました。",qa:"Dokter bilang apa?",aa:"Bilang ini flu."}
                  ]
                },
                {
                  title:"Menanyakan Arah",
                  tts:true,
                  script:"A：すみません、駅はどこですか。\nB：駅ですか。ここをまっすぐ行って、信号を右に曲がってください。\nA：信号を右ですね。\nB：はい。5分ぐらいで着きます。\nA：ありがとうございます。",
                  translation:"A: Permisi, stasiun di mana ya?\nB: Stasiun? Jalan lurus dari sini, lalu belok kanan di lampu merah.\nA: Belok kanan di lampu merah, ya.\nB: Iya. Kira-kira 5 menit sampai.\nA: Terima kasih.",
                  questions:[
                    {q:"駅に着くまで何分かかりますか。",a:"5分ぐらい",qa:"Butuh berapa menit ke stasiun?",aa:"Kira-kira 5 menit."}
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id:"u5", title:"Membaca", subtitle:"読解・実用テキスト", icon:"読", color:"#d4a847",
        description:"Latihan membaca teks fungsional yang sering muncul di JFT — tanda, jadwal, memo, dan pesan.",
        lessons:[
          {
            id:"u5l1", title:"Membaca Tanda & Pengumuman", type:"reading", duration:"20 mnt",
            content:{
              intro:"Tanda dan pengumuman di Jepang sangat penting untuk keselamatan dan navigasi. Sering muncul di soal JFT.",
              readings:[
                {
                  title:"Tanda-tanda di Tempat Kerja (Wajib Hafal)",
                  text:"【入口】いりぐち — Pintu masuk\n【出口】でぐち — Pintu keluar\n【非常口】ひじょうぐち — Pintu darurat\n【危険】きけん — Bahaya!\n【注意】ちゅうい — Perhatian / Hati-hati\n【禁止】きんし — Dilarang\n【立入禁止】たちいりきんし — Dilarang masuk\n【使用中】しようちゅう — Sedang digunakan\n【故障中】こしょうちゅう — Sedang rusak\n【清掃中】せいそうちゅう — Sedang dibersihkan\n【準備中】じゅんびちゅう — Sedang dipersiapkan\n【工事中】こうじちゅう — Sedang ada konstruksi",
                  questions:[
                    {q:"「立入禁止」はどういう意味ですか。",choices:["入ってはいけない","入ってもいい","危ない場所","掃除中"],a:"入ってはいけない",qa:"「立入禁止」artinya apa?",choices_id:["Tidak boleh masuk","Boleh masuk","Tempat berbahaya","Sedang dibersihkan"],aa:"Tidak boleh masuk"},
                    {q:"「故障中」はどういう意味ですか。",choices:["掃除している","使っている","壊れている","工事している"],a:"壊れている",qa:"「故障中」artinya apa?",choices_id:["Sedang dibersihkan","Sedang digunakan","Sedang rusak","Sedang konstruksi"],aa:"Sedang rusak"}
                  ]
                },
                {
                  title:"Pengumuman Pabrik",
                  text:"お知らせ\n\n来週の月曜日（6月3日）は工場の点検のため、休業いたします。\nご不便をおかけして申し訳ありません。\n\n翌日の火曜日より通常通り営業いたします。\nよろしくお願いいたします。\n\n山田製造株式会社",
                  translation:"Pengumuman\n\nSenin depan (3 Juni), pabrik tutup karena inspeksi.\nMohon maaf atas ketidaknyamanannya.\n\nMulai Selasa beroperasi seperti biasa.\nMohon kerja samanya.\n\nPT Yamada Manufacturing",
                  questions:[
                    {q:"なぜ工場は休業しますか。",choices:["点検のため","祭日のため","台風のため","工事のため"],a:"点検のため",qa:"Kenapa pabrik tutup?",choices_id:["Karena inspeksi","Karena hari raya","Karena topan","Karena konstruksi"],aa:"Karena inspeksi"},
                    {q:"いつから通常通り営業しますか。",choices:["月曜日から","火曜日から","水曜日から","再来週から"],a:"火曜日から",qa:"Mulai hari apa beroperasi normal?",choices_id:["Dari Senin","Dari Selasa","Dari Rabu","Dari minggu depan"],aa:"Dari Selasa"}
                  ]
                },
                {
                  title:"Memo dari Atasan",
                  text:"山田さんへ\n\n明日の朝、8時に事務所に来てください。\n新しいスタッフが来るので、工場を案内してください。\nわからないことがあれば、鈴木さんに聞いてください。\n\nよろしくお願いします。\n田中",
                  translation:"Untuk Yamada\n\nBesok pagi, tolong datang ke kantor jam 8.\nKarena ada staf baru yang datang, tolong antar keliling pabrik.\nKalau ada yang tidak mengerti, tanya ke Suzuki.\n\nMohon kerja samanya.\nTanaka",
                  questions:[
                    {q:"山田さんは明日何をしますか。",choices:["新しいスタッフを案内する","鈴木さんに電話する","事務所を掃除する","田中さんと話す"],a:"新しいスタッフを案内する",qa:"Besok Yamada harus melakukan apa?",choices_id:["Mengantar staf baru keliling","Telepon Suzuki","Membersihkan kantor","Bicara dengan Tanaka"],aa:"Mengantar staf baru keliling"}
                  ]
                }
              ]
            }
          },
          {
            id:"u5l2", title:"Membaca Jadwal & Menu", type:"reading", duration:"20 mnt",
            content:{
              intro:"Membaca jadwal, menu, dan dokumen praktis — tipe soal yang sering muncul di JFT Dokkai.",
              readings:[
                {
                  title:"Jadwal Shift Kerja",
                  text:"【シフト表 — 6月第1週】\n\n　　　月　火　水　木　金　土　日\n田中　A　A　―　A　A　B　休\n山田　B　休　B　B　休　A　A\n鈴木　休　B　A　休　B　A　B\n\n【シフト説明】\nAシフト：8:00〜17:00\nBシフト：14:00〜23:00\n―：半日勤務\n休：休み",
                  translation:"【Jadwal Shift — Minggu Pertama Juni】\n\n　　　Sen Sel Rab Kam Jum Sab Min\nTanaka A  A  ½  A  A  B  Libur\nYamada B  Libur B B Libur A A\nSuzuki Libur B A Libur B A B\n\nShift A: 08:00–17:00 | Shift B: 14:00–23:00 | ½: Setengah hari | Libur: Hari libur",
                  questions:[
                    {q:"田中さんは水曜日、何時間働きますか。",choices:["9時間","8時間","4〜5時間（半日）","0時間"],a:"4〜5時間（半日）",qa:"Tanaka hari Rabu kerja berapa jam?",choices_id:["9 jam","8 jam","4-5 jam (setengah hari)","0 jam"],aa:"4-5 jam (setengah hari)"},
                    {q:"山田さんはこの週、何日休みますか。",choices:["1日","2日","3日","4日"],a:"2日",qa:"Yamada minggu ini libur berapa hari?",choices_id:["1 hari","2 hari","3 hari","4 hari"],aa:"2 hari"}
                  ]
                },
                {
                  title:"Menu Kantin Karyawan",
                  text:"【社員食堂メニュー — 本日のランチ】\n\nAランチ　　　480円\nご飯・みそ汁・焼き魚・サラダ\n\nBランチ　　　520円\nご飯・みそ汁・カレー・サラダ\n\nCランチ　　　450円\nうどん・おにぎり2個\n\n※ドリンクは別途100円です。\n※木曜日はカレーの日！Bランチが50円引き。",
                  translation:"Menu Kantin — Hari Ini\n\nMakan Siang A: 480 yen — Nasi, sup miso, ikan panggang, salad\nMakan Siang B: 520 yen — Nasi, sup miso, kari, salad\nMakan Siang C: 450 yen — Udon, onigiri 2 buah\n\n※ Minuman +100 yen. ※ Hari Kamis = Hari Kari! Diskon 50 yen untuk Makan Siang B.",
                  questions:[
                    {q:"木曜日にBランチを頼んだら、いくらですか。",choices:["520円","470円","420円","450円"],a:"470円",qa:"Pesan Makan Siang B hari Kamis, berapa harganya?",choices_id:["520 yen","470 yen","420 yen","450 yen"],aa:"470 yen (520 - 50 diskon)"},
                    {q:"AランチとドリンクをCとったら、いくらですか。",choices:["480円","530円","580円","450円"],a:"580円",qa:"Pesan Makan Siang A + minuman, totalnya?",choices_id:["480 yen","530 yen","580 yen","450 yen"],aa:"580 yen (480 + 100)"}
                  ]
                },
                {
                  title:"Pesan Grup Chat dari Rekan Kerja",
                  text:"〔グループチャット: 工場チームA〕\n\n鈴木：みなさん、明日の朝礼は7時45分から始まります。いつもより15分早いです。\n\n田中：わかりました！\n\n山田：ありがとうございます。遅刻しないように気をつけます。\n\n鈴木：あと、明日は安全講習もあります。終わるのは10時ごろの予定です。",
                  translation:"[Grup Chat: Tim A Pabrik]\n\nSuzuki: Semua, briefing pagi besok mulai jam 07:45. Lebih cepat 15 menit dari biasanya.\nTanaka: Mengerti!\nYamada: Terima kasih. Akan hati-hati agar tidak terlambat.\nSuzuki: Juga, besok ada pelatihan keselamatan. Rencananya selesai sekitar jam 10.",
                  questions:[
                    {q:"明日の朝礼は何時から始まりますか。",choices:["7時00分","7時15分","7時45分","8時00分"],a:"7時45分",qa:"Briefing pagi besok mulai jam berapa?",choices_id:["07:00","07:15","07:45","08:00"],aa:"07:45"},
                    {q:"安全講習は何時ごろ終わりますか。",choices:["8時","9時","10時","11時"],a:"10時",qa:"Pelatihan keselamatan selesai jam berapa?",choices_id:["Jam 8","Jam 9","Jam 10","Jam 11"],aa:"Jam 10"}
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        id:"u6", title:"Tips & Simulasi", subtitle:"試験対策・ポイント整理", icon:"試", color:"#e8533a",
        description:"Strategi ujian, poin penting, dan simulasi soal JFT Basic.",
        lessons:[
          {
            id:"u6l1", title:"Strategi & Tips Ujian JFT", type:"tips", duration:"10 mnt",
            content:{
              intro:"Strategi komprehensif untuk memaksimalkan skor JFT Basic.",
              theory:[
                {
                  heading:"Struktur Ujian JFT Basic",
                  table:{
                    headers:["Bagian","Konten","Estimasi Waktu"],
                    rows:[
                      ["Script & Vocabulary","Membaca aksara, kosakata gambar","~15 menit"],
                      ["Conversation & Expression","Percakapan situasional, ekspresi","~15 menit"],
                      ["Listening (Choukai)","Dialog, pengumuman (diputar 2x)","~30 menit"],
                      ["Reading (Dokkai)","Teks fungsional, tanda, pesan","~20 menit"]
                    ]
                  }
                },
                {
                  heading:"Skor & Kelulusan",
                  text:"Skor JFT Basic dinilai per bagian (A1/A2/B1+) dan total. Untuk Specified Skilled Worker (SSW/Tokutei Ginou), dibutuhkan nilai A2 atau setara di semua bagian."
                },
                {
                  heading:"Strategi Per Bagian",
                  text:"📖 Script & Vocabulary\n→ Fokus pada gambar + opsi hiragana/katakana. Pilih yang paling cocok dengan makna gambar.\n\n💬 Conversation & Expression\n→ Perhatikan konteks situasi. Pilih jawaban yang paling natural dan sopan.\n\n🔊 Listening\n→ Baca pilihan SEBELUM audio! Tulis angka/waktu yang disebut. Perhatikan kata terakhir.\n\n📰 Reading\n→ Baca pertanyaan dulu, BARU cari jawaban di teks. Jangan baca keseluruhan dulu."
                },
                {
                  heading:"Kata Sinyal yang Sering Muncul di Soal",
                  table:{
                    headers:["JP","Arti","Mengapa Penting"],
                    rows:[
                      ["でも / しかし","tapi","Ada perubahan — biasanya kunci jawaban ada di sini"],
                      ["それから / そして","lalu / dan","Urutan instruksi / aksi berikutnya"],
                      ["まず / 次に / 最後に","pertama / selanjutnya / terakhir","Urutan langkah — sering ditanyakan"],
                      ["〜のに","padahal / walaupun","Kontras harapan — perhatikan!"],
                      ["もし〜たら/なら","kalau ~ maka","Kondisi dan syarat"]
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  }
};
