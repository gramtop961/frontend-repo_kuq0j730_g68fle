import { Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Pesan terkirim. Terima kasih!');
              }}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-emerald-800">Hubungi Kami</h3>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm text-emerald-900/80">Nama</label>
                  <input type="text" required className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-900/80">Pesan</label>
                  <textarea rows={5} required className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition">Kirim Pesan</button>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-emerald-900/80">
                <div className="flex items-start gap-2"><MapPin className="text-emerald-700" size={18} /><span>Jl. Pesantren Damai No. 1, Sukamaju</span></div>
                <a href="tel:+6281234567890" className="flex items-start gap-2 hover:text-emerald-900 transition"><Phone className="text-emerald-700" size={18} /><span>+62 812-3456-7890</span></a>
                <a href="mailto:info@pesantren.sch.id" className="flex items-start gap-2 hover:text-emerald-900 transition"><Mail className="text-emerald-700" size={18} /><span>info@pesantren.sch.id</span></a>
              </div>
            </form>

            <div className="overflow-hidden rounded-2xl border border-emerald-100 shadow-sm">
              <iframe
                title="Lokasi Pesantren"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.490813456362!2d106.81666631536996!3d-6.199999995509746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e8ddf6e1af%3A0x44a3d2a1f0dfd6d8!2sJakarta!5e0!3m2!1sen!2sid!4v1610000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-lg font-semibold text-white">Pondok Pesantren Modern An-Nur</p>
              <p className="mt-2 text-emerald-100/80">Jl. Pesantren Damai No. 1, Sukamaju, Indonesia</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://instagram.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Instagram"><Instagram /></a>
                <a href="https://youtube.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="YouTube"><Youtube /></a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Kontak</p>
              <ul className="mt-2 space-y-1 text-emerald-100/80 text-sm">
                <li className="flex items-center gap-2"><Phone size={16} /> +62 812-3456-7890</li>
                <li className="flex items-center gap-2"><Mail size={16} /> info@pesantren.sch.id</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> Sukamaju, Indonesia</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Tautan</p>
              <ul className="mt-2 space-y-1 text-emerald-100/80 text-sm">
                <li><a href="#home" className="hover:text-white transition">Beranda</a></li>
                <li><a href="#registration" className="hover:text-white transition">Pendaftaran</a></li>
                <li><a href="#news" className="hover:text-white transition">Berita</a></li>
                <li><a href="#activities" className="hover:text-white transition">Kegiatan</a></li>
                <li><a href="#contact" className="hover:text-white transition">Kontak</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Jam Layanan</p>
              <ul className="mt-2 space-y-1 text-emerald-100/80 text-sm">
                <li>Senin - Jumat: 08.00 - 16.00</li>
                <li>Sabtu: 08.00 - 12.00</li>
                <li>Ahad: Tutup</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-emerald-100/70">
            © {new Date().getFullYear()} Pesantren An-Nur. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
