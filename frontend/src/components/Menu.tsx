import { useState } from 'react';
import { Link } from 'react-router-dom';

type Category = 'starters' | 'seafood' | 'mains' | 'desserts';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MENU: Record<Category, MenuItem[]> = {
  starters: [
    {
      name: 'Icelandic Fish Soup',
      description: 'Creamy soup with fresh catch of the day, served with homemade bread. A local favorite.',
      price: '2,490 kr',
      image: '/menu/fish-soup.jpg',
    },
    {
      name: 'Arctic Char Tartare',
      description: 'Fresh arctic char with capers, dill mustard and crispy bread.',
      price: '2,890 kr',
      image: '/menu/char-tartare.jpg',
    },
    {
      name: 'Langoustine Tails',
      description: 'Pan-seared langoustine with garlic butter and fresh herbs.',
      price: '3,490 kr',
      image: '/menu/langoustine.jpg',
    },
    {
      name: 'Shrimp Cocktail',
      description: 'Fresh shrimp served on a bed of lettuce with our house-made cocktail sauce.',
      price: '2,490 kr',
      image: '/menu/shrimp-cocktail.jpg',
    },
  ],
  seafood: [
    {
      name: 'Grilled Atlantic Cod',
      description: 'Herb-crusted cod with seasonal vegetables and lemon butter.',
      price: '4,990 kr',
      image: '/menu/cod.jpg',
    },
    {
      name: 'Pan-Fried Arctic Char',
      description: 'With roasted root vegetables and brown butter sauce.',
      price: '5,490 kr',
      image: '/menu/arctic-char.jpg',
    },
    {
      name: 'Lobster Feast',
      description: 'Whole langoustine with garlic butter, fries and salad.',
      price: '7,990 kr',
      image: '/menu/lobster.jpg',
    },
    {
      name: 'Fish & Chips',
      description: 'Beer-battered fresh catch with fries and homemade tartar sauce.',
      price: '3,990 kr',
      image: '/menu/fish-chips.jpg',
    },
  ],
  mains: [
    {
      name: 'Lamb Fillet',
      description: 'Icelandic lamb with thyme jus, potato gratin and vegetables.',
      price: '6,490 kr',
      image: '/menu/lamb.jpg',
    },
    {
      name: 'Beef Tenderloin',
      description: 'With pepper sauce, roasted potatoes and seasonal greens.',
      price: '6,990 kr',
      image: '/menu/beef.jpg',
    },
    {
      name: 'Free Range Chicken',
      description: 'Herb-roasted chicken with wild mushroom risotto.',
      price: '4,990 kr',
      image: '/menu/chicken.jpg',
    },
    {
      name: 'BBQ Pork Ribs',
      description: 'Slow-cooked ribs with country fries and cucumber salad.',
      price: '6,200 kr',
      image: '/menu/ribs.jpg',
    },
  ],
  desserts: [
    {
      name: 'Skúffukaka',
      description: 'Traditional Icelandic chocolate cake with coconut glaze.',
      price: '1,490 kr',
      image: '/menu/skuffukaka.jpg',
    },
    {
      name: 'Crème Brûlée',
      description: 'Classic vanilla custard with caramelized sugar.',
      price: '1,790 kr',
      image: '/menu/creme-brulee.jpg',
    },
    {
      name: 'Berry Skyr Mousse',
      description: 'Light skyr mousse with wild Icelandic berries.',
      price: '1,690 kr',
      image: '/menu/skyr-mousse.jpg',
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
      price: '1,890 kr',
      image: '/menu/lava-cake.jpg',
    },
  ],
};

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'starters', label: 'Starters' },
  { key: 'seafood', label: 'From the Sea' },
  { key: 'mains', label: 'Burgers & Meat' },
  { key: 'desserts', label: 'Desserts' },
];

export default function Menu() {
  const [active, setActive] = useState<Category>('starters');

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
          {CATEGORIES.map((cat) => (
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
          {MENU[active].map((item) => (
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
