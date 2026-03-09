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

export const ROOMS: Room[] = [
  {
    slug: 'harbor-suite',
    name: 'Harbor Suite',
    tagline: 'Panoramic harbor views with premium comfort',
    description:
      'Our most spacious suite overlooking the old harbor. Wake up to the sight of fishing boats and the distant mountains. Features a king-size bed, sitting area, and luxury bathroom with heated floors.',
    details:
      'The Harbor Suite is the crown jewel of Duus Hotel, offering an unmatched vantage point over Keflavík\'s charming small boat harbor. The suite features handcrafted Icelandic wool throws, locally sourced toiletries, a Nespresso machine, and a curated minibar. The spacious bathroom includes a rain shower and heated marble floors. Perfect for couples seeking a memorable Icelandic experience.',
    price: '42,000 kr',
    guests: 2,
    size: '45 m²',
    amenities: [
      'King-size bed',
      'Harbor view',
      'Sitting area',
      'Rain shower',
      'Heated floors',
      'Nespresso machine',
      'Minibar',
      'Free Wi-Fi',
      'Smart TV',
    ],
    images: ['/rooms/harbor-suite-1.jpg', '/rooms/harbor-suite-2.jpg', '/rooms/harbor-suite-3.jpg'],
  },
  {
    slug: 'ocean-view',
    name: 'Ocean View Double',
    tagline: 'Wake up to the North Atlantic',
    description:
      'A comfortable double room with views across the ocean. Modern Scandinavian design meets Icelandic warmth with natural materials and soft lighting.',
    details:
      'The Ocean View Double combines modern Scandinavian design with traditional Icelandic warmth. Floor-to-ceiling windows frame the North Atlantic, while the interior features light birch wood furniture, woolen textiles, and soft ambient lighting. The en-suite bathroom has a walk-in shower with locally made soap and shampoo. Blackout curtains ensure restful sleep during the bright summer nights.',
    price: '32,000 kr',
    guests: 2,
    size: '28 m²',
    amenities: [
      'Double bed',
      'Ocean view',
      'Walk-in shower',
      'Blackout curtains',
      'Free Wi-Fi',
      'Smart TV',
      'Desk',
      'Hair dryer',
    ],
    images: ['/rooms/ocean-view-1.jpg', '/rooms/ocean-view-2.jpg', '/rooms/ocean-view-3.jpg'],
  },
  {
    slug: 'comfort-twin',
    name: 'Comfort Twin',
    tagline: 'Flexible and cozy for friends or family',
    description:
      'A versatile twin room with two single beds that can be joined on request. Clean lines, warm textures, and everything you need for a restful stay.',
    details:
      'The Comfort Twin is ideal for friends or family traveling together. The room offers two quality single beds that can be configured as a double on request. Decorated with Icelandic art and natural materials, the room provides a calm retreat after a day of exploring the Reykjanes peninsula. The private bathroom features a shower and complimentary toiletries.',
    price: '28,000 kr',
    guests: 2,
    size: '24 m²',
    amenities: [
      'Twin beds (joinable)',
      'Private bathroom',
      'Free Wi-Fi',
      'Smart TV',
      'Wardrobe',
      'Luggage rack',
      'Hair dryer',
    ],
    images: ['/rooms/comfort-twin-1.jpg', '/rooms/comfort-twin-2.jpg', '/rooms/comfort-twin-3.jpg'],
  },
  {
    slug: 'standard-single',
    name: 'Standard Single',
    tagline: 'Everything you need, nothing you don\'t',
    description:
      'A compact and well-designed single room perfect for solo travelers. Thoughtful details and quality bedding ensure a great night\'s sleep.',
    details:
      'The Standard Single is thoughtfully designed for the solo traveler who values quality and comfort. Despite its compact size, the room feels open thanks to clever use of light and mirrors. The premium single bed features a quality mattress and crisp linens. A small work desk and fast Wi-Fi make it suitable for business travelers. The private bathroom has a shower and complimentary toiletries.',
    price: '19,000 kr',
    guests: 1,
    size: '16 m²',
    amenities: [
      'Single bed',
      'Private bathroom',
      'Free Wi-Fi',
      'Smart TV',
      'Work desk',
      'Hair dryer',
    ],
    images: ['/rooms/standard-single-1.jpg', '/rooms/standard-single-2.jpg', '/rooms/standard-single-3.jpg'],
  },
];
