import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ROOMS } from '../data/rooms';

export default function RoomsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to home
        </Link>

        <div className="text-center mb-16">
          <img src="/logo-white.svg" alt="Kaffi Duus" className="h-16 mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Our Rooms</h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Boutique rooms connected to Kaffi Duus restaurant, right by the harbor in Keflavík.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ROOMS.map((room) => (
            <Link
              key={room.slug}
              to={`/rooms/${room.slug}`}
              className="group bg-dark-light rounded-2xl overflow-hidden border border-white/5 hover:border-gold/20 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {room.name}
                  </h2>
                  <span className="text-gold font-serif font-semibold whitespace-nowrap">
                    {room.price}
                  </span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-4">{room.description}</p>
                <div className="flex items-center gap-4 text-xs text-white/30">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                    </svg>
                    {room.guests} {room.guests === 1 ? 'guest' : 'guests'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                    {room.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                    {room.amenities.length} amenities
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
