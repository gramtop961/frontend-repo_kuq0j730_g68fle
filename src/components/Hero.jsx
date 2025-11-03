import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-emerald-900">
      {/* Spline Animation Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle radial overlay to blend with Islamic color palette without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),rgba(15,118,110,0.2)_40%,rgba(6,78,59,0.55)_85%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center rounded-full bg-emerald-600/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Bismillah</span>
          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold leading-tight">
            Pondok Pesantren Modern An-Nur
          </h1>
          <p className="mt-4 text-emerald-50/90 text-lg sm:text-xl">
            Mencetak generasi berakhlak mulia, cerdas, dan berwawasan global dengan landasan Al-Qur'an dan Sunnah.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#registration"
              className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-3 text-white shadow hover:bg-emerald-600 transition"
            >
              Daftar Santri Baru
            </a>
            <a
              href="#news"
              className="inline-flex items-center rounded-lg bg-white/90 px-5 py-3 text-emerald-800 shadow hover:bg-white transition"
            >
              Lihat Pengumuman
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to body background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
