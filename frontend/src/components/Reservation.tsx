import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

export default function Reservation() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('access_key', WEB3FORMS_KEY);
    data.set('subject', t('reservation.emailSubject'));
    data.set('from_name', t('reservation.emailFrom'));

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="reservations" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t('reservation.kicker')}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t('reservation.title')}</h2>
          <p className="text-white/50 max-w-md mx-auto">{t('reservation.subtitle')}</p>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">{t('reservation.successTitle')}</h3>
            <p className="text-white/50">{t('reservation.successBody')}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-dark border border-white/5 rounded-2xl p-6 md:p-10 space-y-6"
          >
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{t('reservation.name')}</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('reservation.namePh')}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{t('reservation.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder={t('reservation.phonePh')}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{t('reservation.date')}</label>
                <input
                  type="date"
                  name="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{t('reservation.time')}</label>
                <select
                  name="time"
                  required
                  defaultValue=""
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                >
                  <option value="" disabled>
                    {t('reservation.timeSelect')}
                  </option>
                  {['11:30', '12:00', '12:30', '13:00', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">{t('reservation.guests')}</label>
                <select
                  name="guests"
                  required
                  defaultValue="2"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? t('common.guest') : t('common.guests')}
                    </option>
                  ))}
                  <option value="9">{t('reservation.guestsCall')}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/50 mb-1.5">{t('reservation.requests')}</label>
              <textarea
                name="message"
                rows={3}
                placeholder={t('reservation.requestsPh')}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
              />
            </div>

            {status === 'error' && <p className="text-red-400 text-sm text-center">{t('reservation.error')}</p>}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gold hover:bg-gold-light text-dark font-semibold py-3.5 rounded-lg transition-colors cursor-pointer text-sm tracking-wide uppercase disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? t('reservation.sending') : t('reservation.submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
