import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <img src="/logo-white.svg" alt={t('common.logoAlt')} className="h-14 mb-4" />
          <p className="text-sm text-white/40 leading-relaxed">{t('footer.blurb')}</p>
        </div>

        <div>
          <h4 className="text-sm text-white/70 uppercase tracking-wide mb-4">{t('footer.hours')}</h4>
          <div className="space-y-2 text-sm text-white/40">
            <div className="flex justify-between gap-4">
              <span>{t('footer.weekdays')}</span>
              <span>11:30 – 21:00</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>{t('footer.weekend')}</span>
              <span>11:30 – 22:00</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>{t('footer.sunday')}</span>
              <span>12:00 – 21:00</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-white/70 uppercase tracking-wide mb-4">{t('footer.contact')}</h4>
          <div className="space-y-2 text-sm text-white/40">
            <p>Duusgata 10, 230 Keflavík</p>
            <p>
              <a href="tel:+3544217080" className="hover:text-gold transition-colors">
                +354 421 7080
              </a>
            </p>
            <p>
              <a href="mailto:kaffiduus@kaffiduus.is" className="hover:text-gold transition-colors">
                kaffiduus@kaffiduus.is
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/20">
        © {year} Kaffi Duus. {t('footer.rights')}
      </div>
    </footer>
  );
}
