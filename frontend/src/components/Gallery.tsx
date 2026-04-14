import { useTranslation } from 'react-i18next';

/** Local assets only — restaurant, harbor, hotel, and menu photography. */
const SOURCES = [
  '/menu/fish-soup.jpg',
  '/stay-by-harbor.png',
  '/dining-with-a-view.png',
  '/menu/langoustine.jpg',
  '/menu/skuffukaka.jpg',
  '/hero.png',
] as const;

const ALT_KEYS = ['alt1', 'alt2', 'alt3', 'alt4', 'alt5', 'alt6'] as const;

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t('gallery.kicker')}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t('gallery.title')}</h2>
        <p className="text-white/50">
          {t('gallery.follow')}{' '}
          <a
            href="https://www.instagram.com/kaffiduus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors"
          >
            @kaffiduus
          </a>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {SOURCES.map((src, i) => (
          <div
            key={`gallery-${i}`}
            className="aspect-square rounded-xl overflow-hidden bg-dark-light group cursor-pointer"
          >
            <img
              src={src}
              alt={t(`gallery.${ALT_KEYS[i]}`)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
