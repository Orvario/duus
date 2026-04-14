/** Homepage menu preview — bilingual (full menu stays in menu.json). */

export interface PreviewItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface PreviewCategory {
  key: string;
  label: string;
  items: PreviewItem[];
}

const EN: PreviewCategory[] = [
  {
    key: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Icelandic Fish Soup',
        description:
          'Creamy soup with fresh catch of the day, served with homemade bread. A local favorite.',
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
  },
  {
    key: 'seafood',
    label: 'From the Sea',
    items: [
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
  },
  {
    key: 'mains',
    label: 'Burgers & Meat',
    items: [
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
  },
  {
    key: 'desserts',
    label: 'Desserts',
    items: [
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
  },
];

const IS: PreviewCategory[] = [
  {
    key: 'starters',
    label: 'Forréttir',
    items: [
      {
        name: 'Íslensk fiskisúpa',
        description:
          'Rjómalöguð súpa með ferskum fiski dagsins, borin fram með heimagerðu brauði. Vinsæll réttur.',
        price: '2,490 kr',
        image: '/menu/fish-soup.jpg',
      },
      {
        name: 'Tartar af silungi',
        description: 'Ferskur silungur með kapers, dill sinnepi og brauði.',
        price: '2,890 kr',
        image: '/menu/char-tartare.jpg',
      },
      {
        name: 'Rækjuhalar',
        description: 'Steiktar rækjur með hvítlaukssmjöri og ferskum jurtum.',
        price: '3,490 kr',
        image: '/menu/langoustine.jpg',
      },
      {
        name: 'Rækjukokteill',
        description: 'Ferskar rækjur á salatbeddi með heimilagerðri kokteilsósu.',
        price: '2,490 kr',
        image: '/menu/shrimp-cocktail.jpg',
      },
    ],
  },
  {
    key: 'seafood',
    label: 'Af sjónum',
    items: [
      {
        name: 'Grilluð þorskur',
        description: 'Jurtapipraður þorskur með tímabundið grænmeti og sítrónusmjöri.',
        price: '4,990 kr',
        image: '/menu/cod.jpg',
      },
      {
        name: 'Steiktur silungur',
        description: 'Með ristuðu rótargrænmeti og brúnu smjörsósu.',
        price: '5,490 kr',
        image: '/menu/arctic-char.jpg',
      },
      {
        name: 'Humarveisla',
        description: 'Heill humar með hvítlaukssmjöri, frönskum og salati.',
        price: '7,990 kr',
        image: '/menu/lobster.jpg',
      },
      {
        name: 'Djúpsteiktur fiskur',
        description: 'Fiskur í deigi með frönskum og heimagerðri tartarsósu.',
        price: '3,990 kr',
        image: '/menu/fish-chips.jpg',
      },
    ],
  },
  {
    key: 'mains',
    label: 'Borgarar og kjöt',
    items: [
      {
        name: 'Lambafillet',
        description: 'Íslenskt lamb með tímusósu, kartöflugratín og grænmeti.',
        price: '6,490 kr',
        image: '/menu/lamb.jpg',
      },
      {
        name: 'Nautalund',
        description: 'Með piparsósu, ristuðum kartöflum og tímabundnu grænmeti.',
        price: '6,990 kr',
        image: '/menu/beef.jpg',
      },
      {
        name: 'Kjúklingur',
        description: 'Jurtaristaður kjúklingur með svepparisotto.',
        price: '4,990 kr',
        image: '/menu/chicken.jpg',
      },
      {
        name: 'BBQ svínaríf',
        description: 'Hægsteikt rif með sveita frönskum og gúrkusalati.',
        price: '6,200 kr',
        image: '/menu/ribs.jpg',
      },
    ],
  },
  {
    key: 'desserts',
    label: 'Eftirréttir',
    items: [
      {
        name: 'Skúffukaka',
        description: 'Hefðbundin íslensk súkkulaðukaka með kókosglasúr.',
        price: '1,490 kr',
        image: '/menu/skuffukaka.jpg',
      },
      {
        name: 'Crème brûlée',
        description: 'Klassískt vanillu eggjakrem með karamelliseruðum sykur.',
        price: '1,790 kr',
        image: '/menu/creme-brulee.jpg',
      },
      {
        name: 'Skyr mús með berjum',
        description: 'Létt skyr mús með villtum íslenskum berjum.',
        price: '1,690 kr',
        image: '/menu/skyr-mousse.jpg',
      },
      {
        name: 'Súkkulaðu lava kaka',
        description: 'Hlý súkkulaðukaka með bráðinni miðju, borin fram með vanilluís.',
        price: '1,890 kr',
        image: '/menu/lava-cake.jpg',
      },
    ],
  },
];

export const MENU_PREVIEW_BY_LANG: Record<'en' | 'is', PreviewCategory[]> = {
  en: EN,
  is: IS,
};

export function menuPreviewLang(i18nLang: string): 'en' | 'is' {
  return i18nLang.startsWith('is') ? 'is' : 'en';
}
