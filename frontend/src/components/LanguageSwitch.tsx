import { useTranslation } from 'react-i18next';

export default function LanguageSwitch() {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith('is') ? 'is' : 'en';

  function setLang(code: 'en' | 'is') {
    void i18n.changeLanguage(code);
  }

  return (
    <div
      className="flex items-center gap-1 rounded-md border border-white/10 bg-dark-light/80 p-0.5 text-xs font-medium"
      role="group"
      aria-label={t('language.label')}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded px-2 py-1 transition-colors cursor-pointer ${
          current === 'en' ? 'bg-gold text-dark' : 'text-white/50 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('is')}
        className={`rounded px-2 py-1 transition-colors cursor-pointer ${
          current === 'is' ? 'bg-gold text-dark' : 'text-white/50 hover:text-white'
        }`}
      >
        IS
      </button>
    </div>
  );
}
