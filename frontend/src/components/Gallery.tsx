const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=600&q=80', alt: 'Seafood dish at Kaffi Duus' },
  { src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80', alt: 'Harbor view from the restaurant' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', alt: 'Interior dining area' },
  { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80', alt: 'Fresh langoustine plate' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80', alt: 'Dessert presentation' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', alt: 'Sunset view from Kaffi Duus' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Gallery</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          A Visual Feast
        </h2>
        <p className="text-white/50">
          Follow us on Instagram{' '}
          <a
            href="https://instagram.com/kaffiduus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors"
          >
            @kaffiduus
          </a>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {IMAGES.map((img) => (
          <div
            key={img.src}
            className="aspect-square rounded-xl overflow-hidden bg-dark-light group cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
