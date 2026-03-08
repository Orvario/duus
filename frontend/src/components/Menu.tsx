import { useState } from 'react';
import { Link } from 'react-router-dom';

type Category = 'starters' | 'seafood' | 'mains' | 'desserts';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const MENU: Record<Category, MenuItem[]> = {
  starters: [
    { name: 'Icelandic Fish Soup', description: 'Creamy soup with fresh catch of the day, served with homemade bread', price: '2,490 kr' },
    { name: 'Arctic Char Tartare', description: 'Fresh arctic char with capers, dill mustard and crispy bread', price: '2,890 kr' },
    { name: 'Langoustine Tails', description: 'Pan-seared langoustine with garlic butter and fresh herbs', price: '3,490 kr' },
  ],
  seafood: [
    { name: 'Grilled Atlantic Cod', description: 'Herb-crusted cod with seasonal vegetables and lemon butter', price: '4,990 kr' },
    { name: 'Pan-Fried Arctic Char', description: 'With roasted root vegetables and brown butter sauce', price: '5,490 kr' },
    { name: 'Lobster Feast', description: 'Whole langoustine with garlic butter, fries and salad', price: '7,990 kr' },
  ],
  mains: [
    { name: 'Lamb Fillet', description: 'Icelandic lamb with thyme jus, potato gratin and vegetables', price: '6,490 kr' },
    { name: 'Beef Tenderloin', description: 'With pepper sauce, roasted potatoes and seasonal greens', price: '6,990 kr' },
    { name: 'Free Range Chicken', description: 'Herb-roasted chicken with wild mushroom risotto', price: '4,990 kr' },
  ],
  desserts: [
    { name: 'Skúffukaka', description: 'Traditional Icelandic chocolate cake with coconut glaze', price: '1,490 kr' },
    { name: 'Crème Brûlée', description: 'Classic vanilla custard with caramelized sugar', price: '1,790 kr' },
    { name: 'Berry Skyr Mousse', description: 'Light skyr mousse with wild Icelandic berries', price: '1,690 kr' },
  ],
};

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'starters', label: 'Starters' },
  { key: 'seafood', label: 'Seafood' },
  { key: 'mains', label: 'Mains' },
  { key: 'desserts', label: 'Desserts' },
];

export default function Menu() {
  const [active, setActive] = useState<Category>('starters');

  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Our Menu</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Fresh From the Harbor
        </h2>
        <p className="text-white/50 max-w-md mx-auto">
          Seasonal ingredients, locally sourced seafood, and time-honored Icelandic recipes.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`text-sm font-medium px-5 py-2 rounded-full transition-all cursor-pointer tracking-wide ${
                active === cat.key
                  ? 'bg-gold text-dark'
                  : 'border border-white/10 text-white/60 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-0 divide-y divide-white/5">
          {MENU[active].map((item) => (
            <div key={item.name} className="py-6 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
              </div>
              <span className="text-gold font-serif text-lg font-semibold whitespace-nowrap flex-shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
