import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
}

const FOOD_MENU: MenuSection[] = [
  {
    title: 'Forréttir / Starters',
    items: [
      { name: 'Íslenski sjómannasnakkið', description: 'Hákarl borinn fram með íslensku brennivíni. Fermented shark served with Icelandic Brennivín.', price: '2.760 kr' },
      { name: 'Íslensk kjötsúpa', description: 'Hefðbundin lambasúpa með rótargrænmeti, brauði og smjöri. Traditional Icelandic lamb soup with root vegetables, bread, and butter.', price: '2.900 kr' },
      { name: 'Rjómalöguð humarsúpa', description: 'Humar, rjómi, brauð og smjör. Creamy lobster soup with lobster, served with bread and butter.', price: '3.500 kr' },
      { name: 'Brauðkarfa', description: 'Ferskt brauð með smjöri. Basket of fresh bread with butter.', price: '700 / 900 kr' },
      { name: 'Marineruð hrefna', description: 'Með teriyaki sósu, sætum kartöflu frönskum og brúnsósu. Marinated minke whale with teriyaki sauce, sweet potato fries and brown sauce.', price: '3.395 kr' },
      { name: 'Sterkar tigrísrækjur', description: 'Steiktar með lauk, tómötum og ristöðu brauði. Spicy tiger shrimps fried with onion and tomato, served with toast.', price: '3.200 kr' },
      { name: 'Kjúklingavængir og mozzarella stangir', description: 'Með hvítlauksósu. Chicken wings and mozzarella sticks served with garlic sauce.', price: '2.800 kr' },
      { name: 'Cheddar ostasalat', description: 'Með kirsuberjatómötum, beikoni, rauðlauk og jalapeño í majónessósu með saltkexi. Cheddar cheese salad with cherry tomatoes, bacon, red onion, and jalapeño in mayonnaise sauce with crackers.', price: '2.700 kr' },
    ],
  },
  {
    title: 'Meðlæti / Sides',
    items: [
      { name: 'Franskar / French fries', description: '', price: '1.250 kr' },
      { name: 'Sætar kartöflu franskar / Sweet potato fries', description: '', price: '1.350 kr' },
      { name: 'Kokteilsósa', description: '', price: '300 kr' },
      { name: 'Tómatsósa / Ketchup', description: '', price: '200 kr' },
      { name: 'Majónes / Mayonnaise', description: '', price: '300 kr' },
    ],
  },
  {
    title: 'Salöt / Salads',
    items: [
      { name: 'Duus kjúklingasalat með BBQ kjúkling', description: 'Doritos, kál, paprika, tómötum, gúrku, rauðlauk, fetaosti, hnetum og hvítlauksósu. Duus chicken salad with BBQ Chicken, Doritos, lettuce, paprika, tomatoes, cucumber, red onion, feta cheese, peanuts and garlic sauce.', price: '4.050 kr' },
      { name: 'Caesar salat', description: 'Með steiktum kjúkling, kál, brauðteningum, parmesan osti og heimagerðri Caesarsósu. Caesar salad with fried chicken, lettuce, croutons, parmesan cheese and homemade Caesar dressing.', price: '4.050 kr' },
      { name: 'Silungssalat', description: 'Ofnbakaður silungur með beikoni, káli, gúrku, tómötum, rauðlauk, papríku, möndluflögum og tartarsósu. Trout salad with baked trout, bacon, lettuce, cucumber, tomatoes, red onion, almond flakes and tartar sauce.', price: '4.200 kr' },
    ],
  },
  {
    title: 'Fiskréttir / Fish',
    items: [
      { name: 'Ofnbakaður lax', description: 'Með mangó jalapeño sósu, spínati, kartöflugratin og béarnaise sósu. Oven baked salmon with mango jalapeño sauce, spinach, potato gratin and béarnaise sauce.', price: '5.970 kr' },
      { name: 'Ofnbakaður þorskur', description: 'Með grænmeti, sprengispökkluk, lauk, kartöflum og sítrónudillsósu. Oven baked cod with vegetables, pan fried onion, potatoes and lemon dill sauce.', price: '5.350 kr' },
      { name: 'Djúpsteiktur fiskur', description: 'Með salati, frönskum og heimagerðri tartarsósu. Fish and chips with salad, fries and homemade tartar sauce.', price: '5.250 kr' },
      { name: 'Fiskur dagsins', description: 'Spyrjið þjóninn. Með grænmeti, kartöflum, rækum og rjómalagaðri sólþurrkaðri tómatsósu. Fish of the day (ask the waiter) with vegetables, potatoes, shrimps and creamy sun-dried tomato sauce.', price: '5.250 kr' },
      { name: 'Fiskitríó að hætti Duus', description: 'Með þremur tegundum af fiski, ásamt rækjum, á tígnarlegum tréplatta með kartöflum, grænmeti og sósu. Fish Trio á la Duus with three types of fish, shrimps, served on a wooden platter with potatoes, vegetables and sauce.', price: '6.100 kr' },
      { name: 'Kóstakóngurinn', description: 'Einstakur platti með fjórum tegundum af fiski eldaður með brennandi ástriki og nákvæmni. The King of the Ocean — 4 types of fish with vegetables, potatoes, shrimps and two kinds of sauces.', price: '6.050–6.250 kr / pers' },
    ],
  },
  {
    title: 'Pasta',
    note: 'Allir pastaréttir eru bornir fram með hvítlaukbrauði og Parmesan osti. All pasta dishes are served with garlic bread and Parmesan cheese.',
    items: [
      { name: 'Humar- og rækjupasta', description: 'Steikt í hvítlauksmjöri með spínati og humarsósu. Lobster and shrimp pasta cooked in garlic butter with spinach.', price: '5.200 kr' },
      { name: 'Kjúklinga- og beikonpasta', description: 'Með spínati og rjómasósu. Chicken and bacon pasta with spinach and creamy sauce.', price: '4.500 kr' },
      { name: 'Sveppa- og beikonpasta', description: 'Í rjómalagaðri sólþurrkaðri tómatsósu. Mushroom and bacon pasta in creamy sun-dried tomato sauce.', price: '4.450 kr' },
    ],
  },
  {
    title: 'Kjöt / Meat',
    items: [
      { name: 'Kjötplatti', description: 'Lambakótílettur, Teriyaki BBQ ríf og nautasteik með kartöflum, brokkolíni, maísströng og béarnaisesósu. Meat Platter with Lamb chops, Teriyaki BBQ ribs and beef steak. Min. 2 pers.', price: '7.850 kr / pers' },
      { name: 'Grillúð nautasteik', description: 'Með stektum kartöflum, maísströng og béarnaisesósu. Grilled beef steak with potatoes, corn on the cob and Béarnaise sauce.', price: '7.850 kr' },
      { name: 'Grillaó lambafillet', description: 'Með kartöflugratín, brokkolíni, hunangsgúlrótum og béarnaisesósu. Grilled Lamb Fillet with potato gratin, broccoli, honey-glazed carrots and Béarnaise sauce.', price: '7.850 kr' },
      { name: 'BBQ svínaríf', description: 'Með sveita frönskum og gúrkusalati. BBQ pork ribs with country fries and cucumber salad.', price: '6.200 kr' },
      { name: 'Grillaðar lambakótílettur', description: 'Með smaleki, brokkolíni, hunangsgúlrótum og brúnsósu. Grilled lamb chops with roasted baby potatoes, broccoli, honey-glazed carrots and brown sauce.', price: '6.300 kr' },
      { name: 'Teriyaki marineruð hrefna', description: 'Með stektri papríku, sveppum, lauk, sætum frönskum og brúnsósu. Teriyaki marinated minke whale with fried mushrooms, paprika, onions, sweet fries and brown sauce.', price: '6.600 kr' },
      { name: 'Grillúð ofnbökuð kjúklingabringa', description: 'Með spínati, osti, sveita frönskum og rjómalagaðri sólþurrkaðri tómatsósu. Grilled chicken breast with spinach, cheese, country fries and creamy sun-dried tomato sauce.', price: '5.950 kr' },
    ],
  },
  {
    title: 'Grænmetis- og veganréttir / Vegetarian & Vegan',
    items: [
      { name: 'Linsubaunapottréttir með grænmeti', description: 'Borinn fram með salati, hrísgrjónum og ristöðu brauði. Lentil stew with vegetables served with salad, rice and toast.', price: '4.200 kr' },
      { name: 'Svepparagú pasta', description: 'Með sveppum, grænmeti, ristöðu brauði og salati. Mushroom ragu pasta with mushrooms, vegetables, served with toast and salad.', price: '4.250 kr' },
    ],
  },
  {
    title: 'Borgarar / Burgers',
    note: 'Allir borgarar eru 120 g og bornir fram með frönskum eða sætum frönskum. All burgers are 120 g and served with fries or sweet potato fries.',
    items: [
      { name: 'Bói Special', description: 'Með osti, beikoni, skinku, rauðlauk, káli, gúrku, tómötum, ananas, spæluðu eggi, laukhringjum og hamborgarasósu. Bói Special with cheese, bacon, ham, red onion, lettuce, cucumber, tomato, pineapple, fried egg, onion rings and burger sauce.', price: '4.500 kr' },
      { name: 'Ostborgari', description: 'Með osti, káli, gúrku, tómat og hamborgarasósu. Cheeseburger with cheese, lettuce, cucumbers, tomato and burger sauce.', price: '4.050 kr' },
    ],
  },
  {
    title: 'Barnamatsedill / Kids Menu',
    note: 'Fyrir 12 ára og yngri / For 12 years old and under.',
    items: [
      { name: 'Ostborgari', description: 'Með frönskum og tómatsósu. Cheeseburger with fries and ketchup.', price: '1.950 kr' },
      { name: 'Ofnabakalt kjúklingaleggir', description: 'Með frönskum og tómatsósu. Oven baked chicken legs with fries and ketchup.', price: '2.500 kr' },
      { name: 'Rjómalagað ostapasta með kjúkling', description: 'Creamy cheesy pasta with chicken.', price: '2.100 kr' },
      { name: 'Djúpsteiktur fiskur', description: 'Með frönskum og tómatsósu. Deep fried fish with fries and ketchup.', price: '1.950 kr' },
    ],
  },
];

const DRINKS_MENU: MenuSection[] = [
  {
    title: 'Gosdrykkir / Soft Drinks',
    items: [
      { name: 'Pepsi / Pepsi Max / Fanta / Fanta no sugar', description: '', price: '650 kr' },
      { name: 'Kristal / Kristall lime / Kristall lemon', description: '', price: '650 kr' },
      { name: 'Sprite', description: '', price: '700 kr' },
      { name: 'Sprite no sugar / Pilsner / Coca-Cola', description: '', price: '650 kr' },
      { name: 'Coca-Cola Zero', description: '', price: '550 kr' },
      { name: 'Juice (Orange / Apple)', description: '', price: '750 kr' },
      { name: 'Bjór 0% / Beer 0%', description: '', price: '750 kr' },
      { name: 'Malt', description: '', price: '750 kr' },
      { name: 'Juice box', description: '', price: '350 kr' },
    ],
  },
  {
    title: 'Kaffi og aðrir drykkir / Coffee & Drinks',
    items: [
      { name: 'Kaffi venjulegur með áfyllingu', description: 'Regular coffee with free refills.', price: '600 kr' },
      { name: 'Tea', description: '', price: '550 kr' },
      { name: 'Cappuccino', description: '', price: '750 kr' },
      { name: 'Swiss Mocca', description: '', price: '800 kr' },
      { name: 'Americano', description: '', price: '750 kr' },
      { name: 'Café Latte', description: '', price: '750 kr' },
      { name: 'Double Café Latte', description: '', price: '800 kr' },
      { name: 'Espresso', description: '', price: '500 kr' },
      { name: 'Double Espresso', description: '', price: '550 kr' },
      { name: 'Heitt kakó með rjóma', description: 'Hot Chocolate with Cream.', price: '800 kr' },
      { name: 'Glas af mjólk', description: 'Glass of Milk.', price: '350 kr' },
    ],
  },
  {
    title: 'Kranabjór / Draft Beer',
    items: [
      { name: 'Víking gylltur (400 ml)', description: '', price: '1.500 kr' },
      { name: 'Víking gylltur (500 ml)', description: '', price: '1.600 kr' },
      { name: 'Víking lite (400 ml)', description: '', price: '1.500 kr' },
      { name: 'Víking lite (500 ml)', description: '', price: '1.600 kr' },
      { name: 'Einstök White Ale (400 ml)', description: '', price: '1.800 kr' },
    ],
  },
  {
    title: 'Flöskubjór / Bottled Beer',
    items: [
      { name: 'Somersby', description: '', price: '1.550 kr' },
      { name: 'Eldgos', description: '', price: '1.600 kr' },
    ],
  },
  {
    title: 'Mikró flöskubjór / Micro Brewery',
    items: [
      { name: 'Úlfur', description: '', price: '1.800 kr' },
      { name: 'Einstök Pale Ale', description: 'American & Bavarian craft fused, with Icelandic water.', price: '1.800 kr' },
    ],
  },
];

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {FOOD_MENU.map((section) => (
            <MenuSectionBlock key={section.title} section={section} />
          ))}
        </section>

        <div className="border-t border-white/10 pt-16 mb-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">Drykkjaseðill / Drinks</h2>
          </div>

          {DRINKS_MENU.map((section) => (
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
