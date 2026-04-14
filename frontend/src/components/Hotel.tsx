import { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRooms } from '../data/rooms';

export default function Hotel() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const rooms = useMemo(() => getRooms(t), [t]);

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  }

  return (
    <section id="hotel" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t('hotel.kicker')}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">{t('hotel.title')}</h2>
            <p className="text-white/60 leading-relaxed mb-4">{t('hotel.p1')}</p>
            <p className="text-white/60 leading-relaxed mb-8">{t('hotel.p2')}</p>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-dark font-semibold text-sm px-8 py-3 rounded tracking-wide uppercase transition-all"
            >
              {t('hotel.viewRooms')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-dark-light">
              <img
                src="/stay-by-harbor.png"
                alt={t('hotel.exteriorAlt')}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-2xl -z-10" />
          </div>
        </div>

        <div className="flex items-end justify-between mb-8">
          <h3 className="font-serif text-2xl md:text-3xl font-bold">{t('hotel.ourRooms')}</h3>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold/50 hover:text-gold transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold/50 hover:text-gold transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {rooms.map((room) => (
            <Link
              key={room.slug}
              to={`/rooms/${room.slug}`}
              className="flex-shrink-0 w-[300px] group"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-light mb-4">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between gap-3 mb-1">
                <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{room.name}</h4>
                <span className="text-gold font-serif font-semibold whitespace-nowrap text-sm mt-0.5">
                  {room.price}
                </span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">{room.tagline}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-white/30">
                <span>
                  {room.guests} {room.guests === 1 ? t('common.guest') : t('common.guests')}
                </span>
                <span>·</span>
                <span>{room.size}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-dark font-semibold text-sm px-8 py-3 rounded tracking-wide uppercase transition-all"
          >
            {t('hotel.viewAllRooms')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
