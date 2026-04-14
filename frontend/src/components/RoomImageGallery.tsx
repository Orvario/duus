import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Room } from '../data/rooms';

export default function RoomImageGallery({ room }: { room: Room }) {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="mb-10">
      <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-dark-light mb-4">
        <img
          src={room.images[activeImage]}
          alt={t('roomDetail.imageAlt', { name: room.name, num: activeImage + 1 })}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-3">
        {room.images.map((img, i) => (
          <button
            key={`${room.slug}-${i}`}
            type="button"
            onClick={() => setActiveImage(i)}
            className={`w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
              i === activeImage
                ? 'ring-2 ring-gold ring-offset-2 ring-offset-dark'
                : 'opacity-50 hover:opacity-80'
            }`}
          >
            <img
              src={img}
              alt={t('roomDetail.thumbAlt', { name: room.name, num: i + 1 })}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
