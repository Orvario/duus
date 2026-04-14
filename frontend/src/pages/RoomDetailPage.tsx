import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../components/LanguageSwitch';
import RoomImageGallery from '../components/RoomImageGallery';
import { getRooms } from '../data/rooms';

export default function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const rooms = useMemo(() => getRooms(t), [t]);
  const room = rooms.find((r) => r.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!room) return <Navigate to="/rooms" replace />;

  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {t('roomDetail.back')}
          </Link>
          <LanguageSwitch />
        </div>

        <RoomImageGallery key={room.slug} room={room} />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">{room.name}</h1>
            <p className="text-gold text-lg mb-8">{room.tagline}</p>

            <div className="flex items-center gap-6 mb-8 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"
                  />
                </svg>
                {room.guests} {room.guests === 1 ? t('common.guest') : t('common.guests')}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                {room.size}
              </span>
            </div>

            <p className="text-white/60 leading-relaxed mb-6">{room.details}</p>

            <h3 className="text-lg font-bold mb-4">{t('roomDetail.amenitiesHeading')}</h3>
            <div className="grid grid-cols-2 gap-3">
              {room.amenities.map((a, i) => (
                <div key={`${room.slug}-am-${i}`} className="flex items-center gap-2.5 text-sm text-white/50">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {a}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-24 bg-dark-light border border-white/5 rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="text-2xl md:text-3xl font-serif font-bold text-gold leading-tight">{room.price}</div>
                <p className="text-sm text-white/40 mt-1">{t('roomDetail.bookingRateHint')}</p>
              </div>

              <a
                href="https://property.godo.is/booking2.php?propid=118726&referer=iframe&invoicee=631409%20"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold hover:bg-gold-light text-dark font-semibold py-3.5 rounded-lg transition-colors text-sm tracking-wide uppercase text-center mb-3"
              >
                {t('roomDetail.bookNow')}
              </a>

              <a
                href="tel:+3544217080"
                className="block w-full border border-white/10 text-white/60 hover:border-gold/50 hover:text-gold font-medium py-3 rounded-lg transition-colors text-sm text-center"
              >
                {t('roomDetail.call')}
              </a>

              <p className="text-xs text-white/30 text-center mt-4 leading-relaxed">{t('roomDetail.policy')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
