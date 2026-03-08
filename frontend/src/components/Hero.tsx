export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 font-sans">
          Welcome to Keflavík
        </p>

        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Kaffi Duus
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Where the fresh catch meets the harbor view. Experience authentic Icelandic dining with a modern twist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="border border-gold text-gold hover:bg-gold hover:text-dark font-semibold text-sm px-8 py-3 rounded tracking-wide uppercase transition-all"
          >
            View Menu
          </a>
          <a
            href="#reservations"
            className="bg-gold hover:bg-gold-light text-dark font-semibold text-sm px-8 py-3 rounded tracking-wide uppercase transition-colors"
          >
            Book a Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#story" className="flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
