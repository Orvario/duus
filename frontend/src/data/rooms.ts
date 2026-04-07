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

/** Room types match Hotel Duus on Godo Property (propid 118726). */
export const ROOMS: Room[] = [
  {
    slug: 'single-ocean-view',
    name: 'Single Ocean View',
    tagline: 'Solo stay with an ocean outlook',
    description:
      'A single room facing the ocean—ideal when you are traveling alone and want a clear view of the coast from Hotel Duus.',
    details:
      'This room is set up for one guest with the amenities listed for our property, including a small kitchenette area (refrigerator, coffee maker, kettle), Wi-Fi, TV, and a balcony. City tax applies per night in addition to the room rate shown at booking.',
    price: 'Live rates (EUR)',
    guests: 1,
    size: 'Single',
    amenities: [
      'Ocean view',
      'Refrigerator',
      'Coffee maker',
      'Kettle',
      'Wi-Fi',
      'TV',
      'Balcony',
      'Private bathroom',
      'Hair dryer',
      'Linens & towels',
      'Parking included',
    ],
    images: ['/rooms/standard-single-1.jpg', '/rooms/standard-single-2.jpg', '/rooms/standard-single-3.jpg'],
  },
  {
    slug: 'double-ocean-view',
    name: 'Double Room — Ocean View',
    tagline: 'Double room overlooking the ocean',
    description:
      'A double room with an ocean view at Hotel Duus—well suited for couples or two guests who want the Atlantic outside the window.',
    details:
      'Standard and non-refundable rate options are available in our booking engine. The room includes the property amenities listed below. All room prices include 11% VAT; city tax is added per room per night at invoicing. Pets are not allowed.',
    price: 'Live rates (EUR)',
    guests: 2,
    size: 'Double',
    amenities: [
      'Ocean view',
      'Refrigerator',
      'Coffee maker',
      'Kettle',
      'Wi-Fi',
      'TV',
      'Balcony',
      'Sitting area',
      'Private bathroom',
      'Toiletries & hair dryer',
      'Linens & towels',
      'Parking included',
    ],
    images: ['/rooms/ocean-view-1.jpg', '/rooms/ocean-view-2.jpg', '/rooms/ocean-view-3.jpg'],
  },
  {
    slug: 'double-parking-view',
    name: 'Double Room — Parking View',
    tagline: 'Quiet double room with a parking-side outlook',
    description:
      'A double room with a parking-view orientation—another way to stay at Hotel Duus when you prefer this layout.',
    details:
      'Features align with our other double rooms (kitchenette basics, Wi-Fi, balcony, and more). Check live availability and EUR rates for your dates in the booking portal.',
    price: 'Live rates (EUR)',
    guests: 2,
    size: 'Double',
    amenities: [
      'Parking view',
      'Refrigerator',
      'Coffee maker',
      'Kettle',
      'Wi-Fi',
      'TV',
      'Balcony',
      'Sitting area',
      'Private bathroom',
      'Toiletries & hair dryer',
      'Linens & towels',
      'Parking included',
    ],
    images: ['/rooms/comfort-twin-1.jpg', '/rooms/comfort-twin-2.jpg', '/rooms/comfort-twin-3.jpg'],
  },
  {
    slug: 'double-twin-ocean-view',
    name: 'Double/Twin — Ocean View',
    tagline: 'Ocean view as a double or twin',
    description:
      'Configure as a double or twin in our ocean-view category—flexible for two travelers who want separate beds or one bed.',
    details:
      'Select dates and guest count in the booking engine to see which rate plans apply. The same core in-room facilities apply as for our other ocean-view doubles.',
    price: 'Live rates (EUR)',
    guests: 2,
    size: 'Double or twin',
    amenities: [
      'Ocean view',
      'Double or twin setup',
      'Refrigerator',
      'Coffee maker',
      'Kettle',
      'Wi-Fi',
      'TV',
      'Balcony',
      'Private bathroom',
      'Toiletries & hair dryer',
      'Linens & towels',
      'Parking included',
    ],
    images: ['/rooms/ocean-view-2.jpg', '/rooms/ocean-view-1.jpg', '/rooms/ocean-view-3.jpg'],
  },
  {
    slug: 'superior-ocean-view',
    name: 'Superior Ocean View',
    tagline: 'Stepped-up ocean-view stay',
    description:
      'Our superior ocean-view category offers an elevated take on the coastal outlook, with the same trusted Hotel Duus in-room facilities.',
    details:
      'Promotional and non-refundable options may appear for selected dates in the booking engine (for example winter promotions). Always confirm rate rules before you complete a reservation.',
    price: 'Live rates (EUR)',
    guests: 2,
    size: 'Superior',
    amenities: [
      'Ocean view',
      'Refrigerator',
      'Coffee maker',
      'Kettle',
      'Wi-Fi',
      'TV',
      'Balcony',
      'Sitting area',
      'Private bathroom',
      'Toiletries & hair dryer',
      'Linens & towels',
      'Parking included',
    ],
    images: ['/rooms/harbor-suite-1.jpg', '/rooms/harbor-suite-2.jpg', '/rooms/harbor-suite-3.jpg'],
  },
  {
    slug: 'family-parking-view',
    name: 'Family Room — Parking View',
    tagline: 'Space for the whole family',
    description:
      'A family-oriented room with a parking-view side of the property—ideal when you need more space for adults and children together.',
    details:
      'Guest limits and extra-bed rules for children apply as set by the hotel in the booking flow. Full payment and cancellation rules depend on the rate plan you choose (standard vs non-refundable).',
    price: 'Live rates (EUR)',
    guests: 4,
    size: 'Family',
    amenities: [
      'Parking view',
      'Family layout',
      'Refrigerator',
      'Coffee maker',
      'Kettle',
      'Wi-Fi',
      'TV',
      'Balcony',
      'Sitting area',
      'Private bathroom',
      'Toiletries & hair dryer',
      'Linens & towels',
      'Parking included',
    ],
    images: ['/rooms/harbor-suite-2.jpg', '/rooms/harbor-suite-1.jpg', '/rooms/harbor-suite-3.jpg'],
  },
];
