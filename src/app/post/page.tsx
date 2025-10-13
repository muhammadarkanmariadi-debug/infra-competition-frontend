export default function News() {
  return (
    <>
      <div
        className="z-[999] bg-white xl:bg-transparent flex mx-auto px-5 py-4 xl:py-0 2xl:max-w-[1400px] xl:max-w-[1300px]"
        id="post"
      >
        <div className="w-[60%]">
          <div className="pt-20 pb-[24px] gap-4 flex flex-col">
            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="rounded-[18px] bg-primary text-white px-[18px] py-1.5 transition-all duration-500 hover:scale-109"
              >
                MAC
              </a>
            </div>
            <h1 className="text-[27px] leading-[150%] text-black font-[600]">
              Mac A Rhythm: Saat Aula Berubah Jadi Panggung Seni dan Kreativitas
            </h1>
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <div className="w-[28px] h-[28px] rounded-circle">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="text-[16px] text-black font-[500]">Rayyan Irsa</p>
                <p className="text-[16px] text-black font-[500]">
                  16 Jul, 2025
                </p>
              </div>
              <p className="text-[16px] text-black/61 font-[500]">384 views</p>
            </div>
          </div>
          <div className="">
            <img
              className="rounded-xl"
              src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="prose leading-6 pt-8">
            <p>
              <strong>👋 Selamat Datang, Angkatan 34!</strong>
              SMK Telkom Malang kembali menyambut keluarga barunya melalui
              rangkaian kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS) 2025.
              Dengan semangat dan slogan “Stinging Like a Bee, BISA!”, seluruh
              siswa baru dari Angkatan 34 resmi mengawali perjalanannya sebagai
              Mokleters sejati
            </p>
            <p>
              <img
                src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
                alt="user image"
                loading="lazy"
                width="600"
                height="600"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none object-cover bg-center bg-no-repeat w-full"
                style={{ color: "transparent" }}
              />
              Slogan ini bukan sekadar kata. Ia membawa nilai besar yang akan
              ditanamkan sejak hari pertama: Bravery (Keberanian), Integrity
              (Integritas), Service Excellence (Pelayanan Unggul), dan Agility
              (Kelincahan dalam beradaptasi). Empat nilai inilah yang menjadi
              dasar dalam seluruh kegiatan MPLS tahun ini.
            </p>
            <p>
              📍 Apa yang Terjadi Selama MPLS? Tidak hanya apel dan perkenalan.
              MPLS 2025 menyajikan pengalaman lengkap selama 4 hari, dimulai
              dari Pra-MPLS hingga hari penutupan. Yuk, simak perjalanan
              lengkapnya:
            </p>
            <p>
              🗓️ Pra-MPLS – Warming Up the Hive Kegiatan dimulai dengan
              check-in, apel pembukaan, pengenalan kakak gugus (Kagus), serta
              pembentukan yel-yel khas tiap gugus. Para peserta juga mulai
              mengerjakan tugas pengenalan dan membuat konten kreatif untuk
              menunjukkan semangat awal mereka. Di sinilah benih kekompakan
              mulai tumbuh.
            </p>
            <p>
              <img
                alt="user image"
                loading="lazy"
                width="600"
                height="600"
                decoding="async"
                src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
                data-nimg="1"
                className="pointer-events-none object-cover bg-center bg-no-repeat w-full"
                style={{ color: "transparent" }}
              />
              <strong>🗓️ Day 1 – First Flight into the Hive</strong>
            </p>
            <p>
              Setelah pembukaan resmi dan perkenalan guru-karyawan, peserta
              mengikuti Moklet Tour melalui game Map It Out dan Comb Puzzle,
              mengenal area sekolah secara menyenangkan. Hari ditutup dengan
              sesi reflektif: Roadmap &amp; Pohon Harapan, di mana peserta
              menuliskan mimpi dan target mereka selama 3 tahun ke depan. 🌱
              “Apa impianmu saat lulus dari sini?”
            </p>
            <p>
              <img
                alt="user image"
                loading="lazy"
                width="600"
                height="600"
                src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none object-cover bg-center bg-no-repeat w-full"
                style={{ color: "transparent" }}
              />
              <strong>🗓️ Day 2 – Building Awareness &amp; Character</strong>
            </p>
            <p>
              Hari kedua dipenuhi wawasan penting: mulai dari bahaya game online
              &amp; judi digital, UU ITE, hingga anti korupsi dan narkoba.
              Diselingi oleh ice breaking dan sesi Bee Alert — game cepat
              tanggap yang melatih kekompakan dan fokus antar peserta. 💡 “Kalau
              kamu berada di posisi itu, apa keputusan terbaikmu?”
            </p>
            <p>
              <img
                alt="user image"
                loading="lazy"
                src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
                width="600"
                height="600"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none object-cover bg-center bg-no-repeat w-full"
                style={{ color: "transparent" }}
              />
              <strong>🗓️ Day 3 – Energy, Spirit, and Celebration!</strong>
            </p>
            <p>
              Diawali dengan jalan pagi dan Spirit Competition antar gugus yang
              membakar semangat. Kegiatan dilanjutkan dengan edukasi seputar
              bullying dan kenakalan remaja, serta ditutup dengan penampilan
              luar biasa dari ekstrakurikuler dan suborganisasi OSIS. Akhir
              kegiatan dimeriahkan dengan sesi awarding dan upacara penutupan
              yang penuh haru dan bangga.
            </p>
            <p>
              <img
                alt="user image"
                loading="lazy"
                width="600"
                height="600"
                decoding="async"
                src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
                data-nimg="1"
                className="pointer-events-none object-cover bg-center bg-no-repeat w-full"
                style={{ color: "transparent" }}
              />
              <strong>🎖️ Kegiatan Unggulan MPLS 34:</strong>
            </p>
            <ul
              style={{
                display: "block",
                listStyleType: "disc",
                paddingInlineStart: "20px",
              }}
            >
              <li>
                <p>
                  🧩 Comb Puzzle: Menyusun wajah guru dalam sarang lebah. Siapa
                  cepat, dia menang!
                </p>
              </li>
              <li>
                <p>
                  🗺️ Map It Out: Eksplorasi sekolah dengan tantangan lokasi dan
                  pengamatan.
                </p>
              </li>
              <li>
                <p>
                  🐝 Bee Alert: Game respon cepat! Seberapa tangguh koordinasi
                  timmu?
                </p>
              </li>
              <li>
                <p>
                  🌳 Roadmap &amp; Pohon Harapan: Impianmu hari ini, semangatmu
                  besok.
                </p>
              </li>
              <li>
                <p>
                  🔊 Spirit Competition: Kreativitas yel-yel menggambarkan
                  identitas gugus.
                </p>
              </li>
            </ul>
            <p>
              <img
                alt="user image"
                loading="lazy"
                src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
                width="600"
                height="600"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none object-cover bg-center bg-no-repeat w-full"
                style={{ color: "transparent" }}
              />
              🙌 Di Balik Keseruan Ini… MPLS 2025 dapat berjalan sukses berkat
              kolaborasi luar biasa antara: 👨‍🏫 Guru-Guru Kesiswaan SMK Telkom
              Malang 🧢 Pengurus OSIS SMK Telkom Malang
            </p>
            <p>
              Dengan kerja keras panitia dan semangat peserta, semua momen
              menjadi kenangan yang akan dibawa hingga lulus nanti.
            </p>
            <p>
              <img
                alt="user image"
                loading="lazy"
                width="600"
                src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
                height="600"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none object-cover bg-center bg-no-repeat w-full"
                style={{ color: "transparent" }}
              />
              <strong>🎉 Penutup MPLS 34</strong> bukan hanya tentang mengenal
              tempat baru, tetapi tentang menemukan jati diri, membentuk
              karakter, dan membangun relasi. Selamat datang, 34 Generation.
            </p>
            <p>Hari ini kalian dikenalkan. Besok, kalian yang akan dikenang.</p>
            <p>
              🐝 Stinging Like a Bee, BISA! Selamat datang di rumahmu yang baru
              — SMK Telkom Malang.
            </p>
          </div>
        </div>
        <div className="w-[40%]">


               <div className="pt-20 pb-[24px] gap-4 flex flex-col">

                  <p>
              <img
                alt="user image"
                loading="lazy"
                src="https://www.moklet.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmokletorg%2Fimage%2Fupload%2Fv1753081392%2Fapp_media%2Ffile_rk0plj.png&w=1920&q=75"
                width="600"
                height="600"
                decoding="async"
                data-nimg="1"
                className="pointer-events-none object-cover bg-center bg-no-repeat w-full"
                style={{ color: "transparent" }}
              />
              🙌 Di Balik Keseruan Ini… MPLS 2025 dapat berjalan sukses berkat
              kolaborasi luar biasa antara: 👨‍🏫 Guru-Guru Kesiswaan SMK Telkom
              Malang 🧢 Pengurus OSIS SMK Telkom Malang
            </p>

              </div>

        </div>
      </div>
    </>
  );
}
