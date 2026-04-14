import type { TFunction } from 'i18next';

export interface Room {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  details: string;
  price: string;
  guests: number;
  size: string;
  amenities: string[];
  images: string[];
}

export interface RoomDef {
  slug: string;
  guests: number;
  images: string[];
}

/** Structural data only; copy lives in locales (en / is). */
export const ROOM_DEFS: RoomDef[] = [
  {
    slug: 'single-ocean-view',
    guests: 1,
    images: ['/rooms/standard-single-1.jpg', '/rooms/standard-single-2.jpg', '/rooms/standard-single-3.jpg'],
  },
  {
    slug: 'double-ocean-view',
    guests: 2,
    images: ['/rooms/ocean-view-1.jpg', '/rooms/ocean-view-2.jpg', '/rooms/ocean-view-3.jpg'],
  },
  {
    slug: 'double-parking-view',
    guests: 2,
    images: ['/rooms/comfort-twin-1.jpg', '/rooms/comfort-twin-2.jpg', '/rooms/comfort-twin-3.jpg'],
  },
  {
    slug: 'double-twin-ocean-view',
    guests: 2,
    images: ['/rooms/ocean-twin-1.jpg', '/rooms/ocean-twin-2.jpg', '/rooms/ocean-twin-3.jpg'],
  },
  {
    slug: 'superior-ocean-view',
    guests: 2,
    images: ['/rooms/harbor-suite-1.jpg', '/rooms/harbor-suite-2.jpg', '/rooms/harbor-suite-3.jpg'],
  },
  {
    slug: 'family-parking-view',
    guests: 4,
    images: ['/rooms/family-parking-1.jpg', '/rooms/family-parking-2.jpg', '/rooms/family-parking-3.jpg'],
  },
];

export function getRooms(t: TFunction): Room[] {
  return ROOM_DEFS.map((def) => {
    const base = `rooms.${def.slug}`;
    return {
      slug: def.slug,
      guests: def.guests,
      images: def.images,
      name: t(`${base}.name`),
      tagline: t(`${base}.tagline`),
      description: t(`${base}.description`),
      details: t(`${base}.details`),
      price: t(`${base}.price`),
      size: t(`${base}.size`),
      amenities: t(`${base}.amenities`, { returnObjects: true }) as string[],
    };
  });
}
