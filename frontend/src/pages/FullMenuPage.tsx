import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../components/LanguageSwitch';
import {
  localizeMenuSection,
  type MenuLang,
  type RawMenuSection,
} from '../utils/menuLocale';

interface MenuData {
  food: RawMenuSection[];
  drinks: RawMenuSection[];
}

function MenuSectionBlock({ section, sectionKey }: { section: RawMenuSection; sectionKey: string }) {
  return (
    <div className="mb-12">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-2">{section.title}</h3>
      {section.note && <p className="text-sm text-white/40 italic mb-4">{section.note}</p>}
      <div className="divide-y divide-white/5">
        {section.items.map((item, ii) => (
          <div key={`${sectionKey}-${ii}`} className="py-4 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h4 className="text-base font-semibold text-white">{item.name}</h4>
              {item.description && (
                <p className="text-sm text-white/40 mt-0.5 leading-relaxed">{item.description}</p>
              )}
            </div>
            <span className="text-gold font-serif font-semibold whitespace-nowrap flex-shrink-0">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FullMenuPage() {
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState<MenuData | null>(null);

  const lang: MenuLang = i18n.language.startsWith('is') ? 'is' : 'en';

  const displayMenu = useMemo(() => {
    if (!menu) return null;
    return {
      food: menu.food.map((s) => localizeMenuSection(s, lang)),
      drinks: menu.drinks.map((s) => localizeMenuSection(s, lang)),
    };
  }, [menu, lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/data/menu.json')
      .then((r) => r.json())
      .then((data) => setMenu({ food: data.food, drinks: data.drinks }))
      .catch(() => {});
  }, []);

  if (!menu || !displayMenu) {
    return (
      <div className="bg-dark text-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-white/30">{t('fullMenu.loading')}</div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {t('fullMenu.back')}
          </Link>
          <LanguageSwitch />
        </div>

        <div className="text-center mb-16">
          <img src="/logo-white.svg" alt={t('common.logoAlt')} className="h-16 mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">{t('fullMenu.title')}</h1>
          <p className="text-white/50">{t('fullMenu.subtitle')}</p>
        </div>

        <section className="mb-20">
          {displayMenu.food.map((section, i) => (
            <MenuSectionBlock key={`food-${i}`} sectionKey={`food-${i}`} section={section} />
          ))}
        </section>

        <div className="border-t border-white/10 pt-16 mb-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">{t('fullMenu.drinksTitle')}</h2>
          </div>

          {displayMenu.drinks.map((section, i) => (
            <MenuSectionBlock key={`drinks-${i}`} sectionKey={`drinks-${i}`} section={section} />
          ))}
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm">{t('fullMenu.footnote')}</p>
        </div>
      </div>
    </div>
  );
}
