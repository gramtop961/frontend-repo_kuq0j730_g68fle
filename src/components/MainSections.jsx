import { BookOpen, Newspaper, Users } from 'lucide-react';

export default function MainSections() {
  return (
    <main className="scroll-smooth">
      {/* Intro */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800">Selamat Datang di Pesantren An-Nur</h2>
              <p className="mt-4 text-emerald-900/80 leading-relaxed">
                Kami berkomitmen membina generasi islami yang berkarakter, berpengetahuan luas, dan siap mengabdi kepada masyarakat. Program pembelajaran terpadu, pembinaan akhlak, dan kegiatan santri yang variatif menjadi ciri khas kami.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm">
              <p className="font-semibold text-emerald-800">Nilai Utama</p>
              <ul className="mt-3 space-y-2 text-emerald-900/80 text-sm">
                <li>• Akhlak Mulia</li>
                <li>• Ilmu Bermanfaat</li>
                <li>• Kedisiplinan</li>
                <li>• Kemandirian</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <BookOpen size={20} />
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800">Pendaftaran Santri Baru</h3>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <p className="font-semibold text-emerald-800">Persyaratan</p>
                <ul className="mt-3 list-disc list-inside text-emerald-900/80 text-sm space-y-1">
                  <li>Fotokopi akta kelahiran dan Kartu Keluarga</li>
                  <li>Pas foto terbaru (3x4) 4 lembar</li>
                  <li>Ijazah dan SKHUN (jika ada)</li>
                  <li>Surat keterangan sehat</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <p className="font-semibold text-emerald-800">Alur Pendaftaran</p>
                <ol className="mt-3 list-decimal list-inside text-emerald-900/80 text-sm space-y-1">
                  <li>Mengisi formulir online</li>
                  <li>Validasi berkas oleh panitia</li>
                  <li>Ujian seleksi dan wawancara</li>
                  <li>Pengumuman hasil dan daftar ulang</li>
                </ol>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <p className="font-semibold text-emerald-800">Biaya Pendidikan</p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-emerald-900/80">
                  <div className="rounded-lg bg-emerald-50 p-3">
                    <p className="font-semibold text-emerald-800">Pendaftaran</p>
                    <p>Rp 300.000</p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-3">
                    <p className="font-semibold text-emerald-800">Daftar Ulang</p>
                    <p>Rp 1.500.000</p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-3">
                    <p className="font-semibold text-emerald-800">SPP/Bulan</p>
                    <p>Rp 500.000</p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-3">
                    <p className="font-semibold text-emerald-800">Asrama/Bulan</p>
                    <p>Rp 300.000</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Terima kasih, pendaftaran Anda telah terkirim!');
              }}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <p className="font-semibold text-emerald-800">Formulir Pendaftaran Online</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-emerald-900/80">Nama Lengkap</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">Tempat Lahir</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">Tanggal Lahir</label>
                  <input required type="date" className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">Jenis Kelamin</label>
                  <select className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-emerald-900/80">Alamat</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">Nama Orang Tua/Wali</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">No. HP</label>
                  <input required type="tel" className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-emerald-900/80">Pilihan Program</label>
                  <select className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Tahfidz Al-Qur'an</option>
                    <option>KMI (Kulliyatul Mu'allimin/Mu'allimat)</option>
                    <option>Madrasah Diniyah</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition">Kirim Pendaftaran</button>
            </form>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-white">
              <Newspaper size={20} />
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800">Berita & Pengumuman</h3>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2069&auto=format&fit=crop',
                title: 'Penerimaan Santri Baru 2025/2026',
                desc: 'Informasi lengkap mengenai jadwal, syarat, dan alur pendaftaran santri baru.'
              },
              {
                img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop',
                title: 'Lomba Musabaqah Tilawatil Qur\'an',
                desc: 'Santri An-Nur meraih juara dalam ajang MTQ tingkat kabupaten.'
              },
              {
                img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2069&auto=format&fit=crop',
                title: 'Kajian Rutin dan Halaqah',
                desc: 'Jadwal kajian pekanan bersama asatidzah dan halaqah tahfidz.'
              },
            ].map((n, idx) => (
              <article key={idx} className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition">
                <div className="relative h-40">
                  <img src={n.img} alt={n.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-emerald-800">{n.title}</h4>
                  <p className="mt-2 text-sm text-emerald-900/80">{n.desc}</p>
                  <button className="mt-4 inline-flex items-center rounded-md bg-emerald-50 px-3 py-1.5 text-sm text-emerald-700 hover:bg-emerald-100">Baca selengkapnya</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Users size={20} />
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800">Kegiatan Santri</h3>
          </div>

          <p className="mt-4 text-emerald-900/80">Sekilas aktivitas harian, pembelajaran diniyah, tahfidz, olahraga, dan event santri.</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1593113598332-cc89c7f37a7b?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1542736667-069246bdbc74?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1531315630201-bb15abeb165a?q=80&w=2069&auto=format&fit=crop',
            ].map((src, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl">
                <img src={src} alt="Kegiatan santri" className="h-36 sm:h-44 lg:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
