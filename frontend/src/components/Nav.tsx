import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reservations', href: '#reservations' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="/logo.png" alt="Kaffi Duus" className="h-10" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#reservations"
          className="hidden md:inline-block bg-gold hover:bg-gold-light text-dark font-semibold text-sm px-6 py-2.5 rounded transition-colors"
        >
          Book a Table
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 hover:text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setOpen(false)}
            className="bg-gold hover:bg-gold-light text-dark font-semibold text-sm px-6 py-2.5 rounded text-center transition-colors"
          >
            Book a Table
          </a>
        </div>
      )}
    </nav>
  );
}
