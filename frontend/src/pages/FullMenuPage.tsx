import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

interface MenuData {
  food: MenuSection[];
  drinks: MenuSection[];
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-12">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-2">{section.title}</h3>
      {section.note && (
        <p className="text-sm text-white/40 italic mb-4">{section.note}</p>
      )}
      <div className="divide-y divide-white/5">
        {section.items.map((item) => (
          <div key={item.name} className="py-4 flex items-start justify-between gap-4">
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
  const [menu, setMenu] = useState<MenuData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/data/menu.json')
      .then((r) => r.json())
      .then((data) => setMenu({ food: data.food, drinks: data.drinks }))
      .catch(() => {});
  }, []);

  if (!menu) {
    return (
      <div className="bg-dark text-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-white/30">Loading menu...</div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to home
        </Link>

        <div className="text-center mb-16">
          <img src="/logo-white.svg" alt="Kaffi Duus" className="h-16 mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Matsedill / Menu</h1>
          <p className="text-white/50">Fresh from the harbor since 1997</p>
        </div>

        <section className="mb-20">
          {menu.food.map((section) => (
            <MenuSectionBlock key={section.title} section={section} />
          ))}
        </section>

        <div className="border-t border-white/10 pt-16 mb-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">Drykkjaseðill / Drinks</h2>
          </div>

          {menu.drinks.map((section) => (
            <MenuSectionBlock key={section.title} section={section} />
          ))}
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm">Verð geta breyst / Prices subject to change</p>
        </div>
      </div>
    </div>
  );
}
