/**
 * menu.json stores bilingual strings: "Íslenska / English" titles and
 * "Icelandic sentence. English sentence." descriptions. Pick one locale.
 */

export type MenuLang = 'en' | 'is';

/** "Left / Right" → Icelandic left, English right (when exactly two parts). */
export function pickSlashField(text: string, lang: MenuLang): string {
  const trimmed = text.trim();
  const parts = trimmed.split(' / ').map((p) => p.trim());
  if (parts.length === 2) {
    const [a, b] = parts;
    // Avoid splitting inside parentheses, e.g. "Juice (Orange / Apple)"
    const openA = (a.match(/\(/g) || []).length;
    const closeA = (a.match(/\)/g) || []).length;
    if (openA !== closeA) return trimmed;
    return lang === 'is' ? a : b;
  }
  if (parts.length > 2) {
    // e.g. "Pepsi / Pepsi Max / Fanta" — keep full product line
    return trimmed;
  }
  return trimmed;
}

/**
 * Two-sentence pattern: first often Icelandic, second English.
 * Falls back to full text when a single-language line.
 */
export function pickDescription(text: string, lang: MenuLang): string {
  const t = text.trim();
  if (!t) return '';

  const hasIcelandicChars = (s: string) => /[áðéíóúýþæö]/i.test(s);

  const parts = t.split(/\.\s+/);
  if (parts.length >= 2) {
    const first = parts[0];
    const rest = parts.slice(1).join('. ');
    const firstIs = hasIcelandicChars(first);
    const restIs = hasIcelandicChars(rest);
    if (firstIs && !restIs) {
      return lang === 'is' ? first : rest;
    }
    if (!firstIs && restIs) {
      return lang === 'is' ? rest : first;
    }
  }

  return t;
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
    note: section.note ? pickDescription(section.note, lang) : undefined,
    items: section.items.map((item) => ({
      ...item,
      name: pickSlashField(item.name, lang),
      description: pickDescription(item.description, lang),
    })),
  };
}
