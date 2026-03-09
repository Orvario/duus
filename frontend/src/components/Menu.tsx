import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface PreviewItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface PreviewCategory {
  key: string;
  label: string;
  items: PreviewItem[];
}

export default function Menu() {
  const [categories, setCategories] = useState<PreviewCategory[]>([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    fetch('/data/menu.json')
      .then((r) => r.json())
      .then((data) => {
        const cats: PreviewCategory[] = data.homepage_preview?.categories ?? [];
        setCategories(cats);
        if (cats.length > 0) setActive(cats[0].key);
      })
      .catch(() => {});
  }, []);

  const activeCat = categories.find((c) => c.key === active);

  if (categories.length === 0) return null;

  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Our Menu
        </h2>
        <p className="text-white/50 max-w-lg mx-auto">
          Experience the taste of Iceland with our locally sourced ingredients and classic recipes.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-2 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`text-sm font-medium px-6 py-2.5 rounded-full transition-all cursor-pointer tracking-wide ${
                active === cat.key
                  ? 'bg-gold text-dark'
                  : 'border border-white/10 text-white/60 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activeCat?.items.map((item) => (
            <div key={item.name} className="flex gap-5 group">
              <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="text-base font-bold text-white leading-snug">{item.name}</h3>
                  <span className="text-gold font-serif font-semibold whitespace-nowrap flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-3">{item.description}</p>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 group-hover:text-gold transition-colors cursor-pointer">
                  Order Now &rsaquo;
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-dark font-semibold text-sm px-8 py-3 rounded tracking-wide uppercase transition-all"
          >
            See Full Menu
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
