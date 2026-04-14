/**
 * menu.json stores bilingual strings: "Íslenska / English" titles and
 * descriptions that mix Icelandic and English sentences.
 */

import { MENU_NAME_EN } from '../data/menuEnglishNames';

export type MenuLang = 'en' | 'is';

/** "Left / Right" → Icelandic left, English right (when exactly two parts). */
export function pickSlashField(text: string, lang: MenuLang): string {
  const trimmed = text.trim();
  const parts = trimmed.split(' / ').map((p) => p.trim());
  if (parts.length === 2) {
    const [a, b] = parts;
    const openA = (a.match(/\(/g) || []).length;
    const closeA = (a.match(/\)/g) || []).length;
    if (openA !== closeA) return trimmed;
    return lang === 'is' ? a : b;
  }
  if (parts.length > 2) {
    return trimmed;
  }
  return trimmed;
}

/** Detect Icelandic vs English sentence (Latin menu text). */
function isLikelyIcelandicSentence(s: string): boolean {
  const t = s.trim();
  if (
    /^(Fish Trio|The King of the Ocean|Oven baked|Grilled |Deep fried|Marinated |Chicken |Creamy |Traditional |Basket of|Spicy |Duus chicken|Caesar salad|Trout salad|Fish of the day|Fish and chips|Bói Special|Cheeseburger|Oven baked chicken|Creamy cheesy|Deep fried fish|Regular coffee|Hot Chocolate|Glass of Milk|American & Bavarian)/i.test(
      t
    )
  ) {
    return false;
  }

  const stripped = s
    .replace(/\bá la\b/gi, 'a la')
    .replace(/\b(café|béarnaise|Béarnaise|Crème|Caesar|BBQ|Duus|Teriyaki|Sprite|Pepsi|Fanta|Coca-Cola|Kristal|Einstök|Víking|Somersby|Eldgos|Úlfur)\b/gi, '');

  if (/[ðþæö]/i.test(stripped)) return true;
  if (/[áéíóúý]/i.test(stripped)) {
    if (/\b(with|and the|served|salad|sauce|fried|steak|ribs|chicken|fish|soup|cream|coffee|chocolate|milk|glass|regular|American|Bavarian|craft|fused|water)\b/i.test(s)) {
      return !/^(The |Oven |Grilled |Deep |Fish of the day|Caesar |Trout |Duus |Bói |Cheeseburger|Oven baked|Creamy |Hot |Glass of|Regular )\b/i.test(t);
    }
    return true;
  }
  return false;
}

function joinSentences(parts: string[]): string {
  if (parts.length === 0) return '';
  return parts.map((p) => (p.endsWith('.') ? p.slice(0, -1) : p)).join('. ') + '.';
}

export function pickDescription(text: string, lang: MenuLang): string {
  const t = text.trim();
  if (!t) return '';

  const sentences = t.split(/\.\s+/).map((s) => s.trim()).filter(Boolean);
  if (sentences.length === 1) {
    return sentences[0];
  }

  const icelandic = sentences.filter((s) => isLikelyIcelandicSentence(s));
  const english = sentences.filter((s) => !isLikelyIcelandicSentence(s));

  if (lang === 'is') {
    return icelandic.length ? joinSentences(icelandic) : t;
  }
  return english.length ? joinSentences(english) : t;
}

/**
 * Prefer "Íslenska / English" splitting when the string is exactly two slash parts
 * (same rules as titles). Otherwise fall back to sentence-level bilingual descriptions.
 */
export function pickSlashOrDescription(text: string, lang: MenuLang): string {
  const trimmed = text.trim();
  if (!trimmed) return '';
  const parts = trimmed.split(' / ').map((p) => p.trim());
  if (parts.length === 2) {
    const [a, b] = parts;
    const openA = (a.match(/\(/g) || []).length;
    const closeA = (a.match(/\)/g) || []).length;
    if (openA === closeA) {
      return lang === 'is' ? a : b;
    }
  }
  return pickDescription(trimmed, lang);
}

export function pickLocalizedName(name: string, lang: MenuLang): string {
  const trimmed = name.trim();
  if (trimmed.includes(' / ')) {
    return pickSlashField(trimmed, lang);
  }
  if (lang === 'en' && MENU_NAME_EN[trimmed]) {
    return MENU_NAME_EN[trimmed];
  }
  return trimmed;
}

export interface RawMenuItem {
  name: string;
  description: string;
  price: string;
}

export interface RawMenuSection {
  title: string;
  note?: string;
  items: RawMenuItem[];
}

export function localizeMenuSection(section: RawMenuSection, lang: MenuLang): RawMenuSection {
  return {
    title: pickSlashField(section.title, lang),
    note: section.note ? pickSlashOrDescription(section.note, lang) : undefined,
    items: section.items.map((item) => ({
      ...item,
      name: pickLocalizedName(item.name, lang),
      description: pickSlashOrDescription(item.description, lang),
    })),
  };
}
