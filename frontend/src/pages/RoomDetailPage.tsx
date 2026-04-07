import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ROOMS } from '../data/rooms';

export default function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const room = ROOMS.find((r) => r.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!room) return <Navigate to="/rooms" replace />;

  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          All Rooms
        </Link>

        {/* Image gallery */}
        <div className="mb-10">
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-dark-light mb-4">
            <img
              src={room.images[activeImage]}
              alt={`${room.name} - image ${activeImage + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            {room.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  i === activeImage
                    ? 'ring-2 ring-gold ring-offset-2 ring-offset-dark'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img} alt={`${room.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">{room.name}</h1>
            <p className="text-gold text-lg mb-8">{room.tagline}</p>

            <div className="flex items-center gap-6 mb-8 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                </svg>
                {room.guests} {room.guests === 1 ? 'guest' : 'guests'}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
                {room.size}
              </span>
            </div>

            <p className="text-white/60 leading-relaxed mb-6">{room.details}</p>

            <h3 className="text-lg font-bold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-3">
              {room.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2.5 text-sm text-white/50">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Booking sidebar */}
          <div>
            <div className="sticky top-24 bg-dark-light border border-white/5 rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="text-2xl md:text-3xl font-serif font-bold text-gold leading-tight">{room.price}</div>
                <p className="text-sm text-white/40 mt-1">Select dates in booking for nightly total</p>
              </div>

              <a
                href="https://property.godo.is/booking2.php?propid=118726&referer=iframe&invoicee=631409%20"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold hover:bg-gold-light text-dark font-semibold py-3.5 rounded-lg transition-colors text-sm tracking-wide uppercase text-center mb-3"
              >
                Book Now
              </a>

              <a
                href="tel:+3544217080"
                className="block w-full border border-white/10 text-white/60 hover:border-gold/50 hover:text-gold font-medium py-3 rounded-lg transition-colors text-sm text-center"
              >
                Call +354 421 7080
              </a>

              <p className="text-xs text-white/30 text-center mt-4 leading-relaxed">
                Rates, taxes, and cancellation rules are shown in the booking engine. Cancellations 48 hours or more before check-in
                are typically free on flexible rates; non-refundable rates have separate terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
