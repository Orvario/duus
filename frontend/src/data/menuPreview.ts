/** Homepage menu preview — built from public/data/menu.json (same source as full menu). */

import {
  localizeMenuSection,
  pickSlashField,
  type MenuLang,
  type RawMenuSection,
} from '../utils/menuLocale';

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

function subSection(section: RawMenuSection, indices: number[]): RawMenuSection {
  return {
    title: section.title,
    note: section.note,
    items: indices.map((i) => section.items[i]).filter((item): item is NonNullable<typeof item> => item != null),
  };
}

function toPreviewItems(
  section: RawMenuSection,
  lang: MenuLang,
  images: string[],
): PreviewItem[] {
  const loc = localizeMenuSection(section, lang);
  return loc.items.map((item, i) => ({
    name: item.name,
    description: item.description,
    price: item.price,
    image: images[i] ?? '/menu/cod.jpg',
  }));
}

const LABEL_MEAT: Record<MenuLang, string> = {
  en: 'Burgers & meat',
  is: 'Borgarar og kjöt',
};

const LABEL_PASTA_VEGAN: Record<MenuLang, string> = {
  en: 'Pasta & vegan',
  is: 'Pasta og vegan',
};

/**
 * Four homepage tabs: starters, fish (incl. Kvótakóngurinn), meat + burgers, pasta + plant-based.
 * Desserts are not in menu.json; the fourth tab highlights pasta and the lentil dish instead.
 */
export function buildMenuPreviewCategories(food: RawMenuSection[], lang: MenuLang): PreviewCategory[] {
  const forrettir = food.find((s) => s.title.startsWith('Forréttir'));
  const fisk = food.find((s) => s.title.startsWith('Fiskréttir'));
  const kjot = food.find((s) => s.title.startsWith('Kjöt'));
  const borgarar = food.find((s) => s.title.startsWith('Borgarar'));
  const pasta = food.find((s) => s.title === 'Pasta');
  const graen = food.find((s) => s.title.startsWith('Grænmetis'));

  if (!forrettir || !fisk || !kjot || !borgarar || !pasta || !graen) {
    return [];
  }

  const starters = toPreviewItems(subSection(forrettir, [0, 1, 2, 3]), lang, [
    '/menu/char-tartare.jpg',
    '/menu/fish-soup.jpg',
    '/menu/langoustine.jpg',
    '/menu/shrimp-cocktail.jpg',
  ]);

  const fromSea = toPreviewItems(subSection(fisk, [0, 1, 2, 5]), lang, [
    '/menu/arctic-char.jpg',
    '/menu/cod.jpg',
    '/menu/fish-chips.jpg',
    '/menu/lobster.jpg',
  ]);

  const meatPart = localizeMenuSection(subSection(kjot, [1, 2]), lang);
  const burgPart = localizeMenuSection(subSection(borgarar, [0, 1]), lang);
  const meatBurgers: PreviewItem[] = [
    { ...meatPart.items[0], image: '/menu/beef.jpg' },
    { ...meatPart.items[1], image: '/menu/lamb.jpg' },
    { ...burgPart.items[0], image: '/menu/ribs.jpg' },
    { ...burgPart.items[1], image: '/menu/chicken.jpg' },
  ].map(({ name, description, price, image }) => ({ name, description, price, image }));

  const pastaLoc = localizeMenuSection(pasta, lang);
  const graenLoc = localizeMenuSection(subSection(graen, [0]), lang);
  const pastaVegan: PreviewItem[] = [
    { ...pastaLoc.items[0], image: '/menu/fish-chips.jpg' },
    { ...pastaLoc.items[1], image: '/menu/langoustine.jpg' },
    { ...pastaLoc.items[2], image: '/menu/cod.jpg' },
    { ...graenLoc.items[0], image: '/menu/arctic-char.jpg' },
  ].map(({ name, description, price, image }) => ({ name, description, price, image }));

  return [
    { key: 'starters', label: pickSlashField(forrettir.title, lang), items: starters },
    { key: 'seafood', label: pickSlashField(fisk.title, lang), items: fromSea },
    { key: 'mains', label: LABEL_MEAT[lang], items: meatBurgers },
    { key: 'pasta', label: LABEL_PASTA_VEGAN[lang], items: pastaVegan },
  ];
}

export function menuPreviewLang(i18nLang: string): MenuLang {
  return i18nLang.startsWith('is') ? 'is' : 'en';
}
