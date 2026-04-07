const STATS = [
  { value: '25+', label: 'Years' },
  { value: '4.8', label: 'Rating' },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Dining with a View Since 1997
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            Located by the picturesque small boat harbor in Keflavík, Kaffi Duus started as a
            small coffee house but has grown into one of the most popular restaurants in the area.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            We pride ourselves on offering fresh seafood straight from the harbor, perfectly
            grilled meats, and our famous desserts. Whether you're stopping by for a quick
            lunch or a romantic dinner, the view over the ocean creates the perfect atmosphere.
          </p>

          <div className="flex gap-12">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-serif font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-white/50 mt-1 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-dark-light">
            <img
              src="/dining-with-a-view.png"
              alt="Dining room at Kaffi Duus with booths, bar, and windows overlooking the coast"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/30 rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}
