import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/** Syncs document title, meta description, and html lang with the active locale. */
export default function DocumentHead() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const lang = i18n.language.startsWith('is') ? 'is' : 'en';
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('meta.description'));
  }, [i18n.language, t]);

  return null;
}
