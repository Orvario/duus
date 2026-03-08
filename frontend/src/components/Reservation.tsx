import { useState, type FormEvent } from 'react';

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reservations" className="py-24 md:py-32 px-6 bg-dark-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Reservations</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Book a Table
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Reserve your spot and enjoy a memorable dining experience by the harbor.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Reservation Received</h3>
            <p className="text-white/50">We'll confirm your booking shortly. See you soon!</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-dark border border-white/5 rounded-2xl p-6 md:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/50 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="+354 ..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-white/50 mb-1.5">Date</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">Time</label>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                >
                  <option value="" disabled>Select</option>
                  {['11:30', '12:00', '12:30', '13:00', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-1.5">Guests</label>
                <select
                  required
                  defaultValue="2"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                  ))}
                  <option value="9">9+ (call us)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/50 mb-1.5">Special Requests</label>
              <textarea
                rows={3}
                placeholder="Allergies, celebrations, seating preferences..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-dark font-semibold py-3.5 rounded-lg transition-colors cursor-pointer text-sm tracking-wide uppercase"
            >
              Reserve Table
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
