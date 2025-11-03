import { useState } from 'react';
import { Instagram, Youtube, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Beranda' },
    { href: '#registration', label: 'Pendaftaran' },
    { href: '#news', label: 'Berita' },
    { href: '#activities', label: 'Kegiatan' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700"></span>
            <div className="leading-tight">
              <p className="font-semibold text-emerald-700">Pondok Pesantren Modern</p>
              <p className="text-xs text-emerald-600/80">Mencetak Generasi Qurani</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-emerald-800/80 hover:text-emerald-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:info@pesantren.sch.id"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-sm text-emerald-700 hover:bg-emerald-100 transition"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="tel:+6281234567890"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-700 transition"
            >
              <Phone size={16} /> Hubungi
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-700 hover:bg-emerald-50"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-emerald-100 py-3">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-emerald-800/90 hover:bg-emerald-50"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-3 pt-2">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  aria-label="YouTube"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
