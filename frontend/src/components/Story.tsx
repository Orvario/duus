import { useTranslation } from 'react-i18next';

const STAT_VALUES = [
  { value: '25+', labelKey: 'statYears' as const },
  { value: '4.8', labelKey: 'statRating' as const },
];

export default function Story() {
  const { t } = useTranslation();

  return (
    <section id="story" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t('story.kicker')}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">{t('story.title')}</h2>
          <p className="text-white/60 leading-relaxed mb-4">{t('story.p1')}</p>
          <p className="text-white/60 leading-relaxed mb-8">{t('story.p2')}</p>

          <div className="flex gap-12">
            {STAT_VALUES.map((stat) => (
              <div key={stat.labelKey}>
                <div className="text-4xl font-serif font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-white/50 mt-1 tracking-wide uppercase">
                  {t(`story.${stat.labelKey}`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-dark-light">
            <img
              src="/dining-with-a-view.png"
              alt={t('story.imageAlt')}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/30 rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}
