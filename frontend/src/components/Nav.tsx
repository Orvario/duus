import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './LanguageSwitch';

const NAV_KEYS = [
  { key: 'home', href: '#home' },
  { key: 'story', href: '#story' },
  { key: 'menu', href: '#menu' },
  { key: 'hotel', href: '#hotel' },
  { key: 'gallery', href: '#gallery' },
  { key: 'reservations', href: '#reservations' },
] as const;

export default function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src="/logo-white.svg" alt={t('common.logoAlt')} className="h-10" />
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_KEYS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <LanguageSwitch />
          <a
            href="#reservations"
            className="bg-gold hover:bg-gold-light text-dark font-semibold text-sm px-6 py-2.5 rounded transition-colors whitespace-nowrap"
          >
            {t('nav.bookTable')}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-white/70 hover:text-white p-2"
            aria-expanded={open}
            aria-label="Menu"
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
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {NAV_KEYS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setOpen(false)}
            className="bg-gold hover:bg-gold-light text-dark font-semibold text-sm px-6 py-2.5 rounded text-center transition-colors"
          >
            {t('nav.bookTable')}
          </a>
        </div>
      )}
    </nav>
  );
}
