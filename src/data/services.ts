import placeholderImage from '@/assets/placeholder.webp';

export interface Service {
  id: string;
  category: 'activity' | 'tour' | 'transportation';
  subcategory?: 'agafay' | 'palmeraie' | string;
  title: string;
  description: string;
  shortDescription: string;
  price: string;
  duration: string;
  image: string;
  location: string;
  inclusions: string[];
  exclusions?: string[];
  itinerary?: {
    day: string;
    description: string;
  }[];
  gallery?: string[];
  priceVariants?: {
    label: string;
    price: string;
    priceNumeric: number;
  }[];
  variants?: {
    id: string;
    label: string;
    price: string;
    description?: string;
    duration?: string;
    inclusions?: string[];
  }[];
  isRental?: boolean;
  hideFromList?: boolean;
}

export const services: Service[] = [
  // Agafay Activities
  {
    id: 'agafay-pack-complet',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Pack Complet',
    shortDescription: '1h quad, 30min camel, dinner show, pool access',
    description: 'Includes 1h quad, 30min camel ride, dinner with show and fire performance, pool access, and round-trip transport.',
    price: '€66 / 660Dhs',
    duration: 'Full experience',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F63be210f3a324f06824181cec7a031a6?format=webp&width=800',
    location: 'Agafay Desert',
    inclusions: ['1h quad ride', '30min camel ride', 'Dinner & show', 'Pool access', 'Round-trip transport', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fcc57f8f0045b4300bbd0cd78fcebcdff?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F0190eec513e649ae8a196c701c3c96f2?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F55959b98a4974910b9d471aba1abdb6b?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fa2a6321a2582421eadff880defe7c8d4?format=webp&width=800',
    ],
  },
  {
    id: 'agafay-quad-dinner',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Quad + Dinner',
    shortDescription: '1h quad ride followed by dinner and show',
    description: '1h quad ride followed by dinner and show.',
    price: '€45 / 450Dhs',
    duration: '4 hours',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['1h quad ride', 'Dinner & show', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-camel-dinner',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Camel Ride + Dinner',
    shortDescription: '30min camel ride and dinner with show',
    description: '30min camel ride and dinner with show.',
    price: '€40 / 400Dhs',
    duration: '3 hours',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['30min camel ride', 'Dinner & show', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-quad-1h-solo',
    category: 'activity',
    subcategory: 'agafay',
    title: '1h Quad (Solo)',
    shortDescription: 'Standard 1-hour quad tour in Agafay desert',
    description: 'Standard 1-hour quad tour in Agafay desert.',
    price: '€35 / 350Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-quad-1h-double',
    category: 'activity',
    subcategory: 'agafay',
    title: '1h Quad (Double)',
    shortDescription: 'Shared quad experience for two people',
    description: 'Shared quad experience for two people.',
    price: '€40 / 400Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-quad-2h',
    category: 'activity',
    subcategory: 'agafay',
    title: '2h Quad',
    shortDescription: 'Extended 2-hour desert ride for adventure lovers',
    description: 'Extended 2-hour desert ride for adventure lovers.',
    price: '€45 / 450Dhs',
    duration: '2 hours',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['2h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-buggy-1h',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Buggy Ride (1h, 2 persons)',
    shortDescription: '1-hour buggy adventure for 2 people',
    description: '1-hour buggy adventure for 2 people.',
    price: '€120 / 1200Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['1h buggy ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-camel-ride',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Camel Ride',
    shortDescription: '30min scenic camel ride in Agafay dunes',
    description: '30min scenic camel ride in Agafay dunes.',
    price: '€15 / 150Dhs',
    duration: '30 minutes',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['30min camel ride', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-dinner-show',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Dinner & Show',
    shortDescription: 'Dinner under the stars with live show',
    description: 'Dinner under the stars with live show and fire performance.',
    price: '€30 / 300Dhs',
    duration: '3 hours',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['Traditional dinner', 'Live show', 'Fire performance', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-overnight',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Overnight Desert Stay',
    shortDescription: 'Dinner, breakfast, and private tent overnight stay',
    description: 'Includes dinner, breakfast, and private tent overnight stay.',
    price: '€150 / 1500Dhs',
    duration: 'Overnight',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['Dinner', 'Breakfast', 'Private tent', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'agafay-horse-ride',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Horse Ride (1h)',
    shortDescription: '1-hour horse ride experience in Agafay desert',
    description: '1-hour horse ride experience in Agafay desert.',
    price: '€45 / 450Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Agafay Desert',
    inclusions: ['1h horse ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },

  // Palmeraie Activities
  {
    id: 'palmeraie-camel-ride',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Camel Ride (1h)',
    shortDescription: 'Scenic 1-hour camel ride through Marrakech palm groves',
    description: 'Scenic 1-hour camel ride through Marrakech palm groves.',
    price: '€20 / 200Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h camel ride', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'palmeraie-quad-1h-solo',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Quad (1h Solo)',
    shortDescription: 'Standard 1-hour solo quad tour',
    description: 'Standard 1-hour solo quad tour.',
    price: '��30 / 300Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'palmeraie-quad-2h',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Quad (2h)',
    shortDescription: 'Extended 2-hour desert ride',
    description: 'Extended 2-hour desert ride.',
    price: '€45 / 450Dhs',
    duration: '2 hours',
    image: placeholderImage,
    location: 'Marrakech Palmeraie',
    inclusions: ['2h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'palmeraie-quad-double',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Quad (Double)',
    shortDescription: 'Quad for 2 people through the Palmeraie',
    description: 'Quad for 2 people through the Palmeraie.',
    price: '€40 / 400Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'palmeraie-buggy-1h',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Buggy (1h, 2 persons)',
    shortDescription: '1-hour buggy ride for 2',
    description: '1-hour buggy ride for 2.',
    price: '€120 / 1200Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h buggy ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'palmeraie-horse-ride',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Horse Ride (1h)',
    shortDescription: '1-hour horseback ride in the palm groves',
    description: '1-hour horseback ride in the palm groves.',
    price: '€45 / 450Dhs',
    duration: '1 hour',
    image: placeholderImage,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h horse ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },

  // Other Activities
  {
    id: 'hot-air-balloon',
    category: 'activity',
    subcategory: 'other',
    title: 'Hot Air Balloon',
    shortDescription: 'Peaceful sunrise flight with breakfast and certificate',
    description: 'Peaceful sunrise flight with 360° view, followed by breakfast and certificate.',
    price: 'From €80 / 800Dhs',
    duration: '4 hours',
    image: placeholderImage,
    location: 'Marrakech Region',
    inclusions: ['Sunrise balloon flight', 'Breakfast', 'Flight certificate', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
    priceVariants: [
      { label: 'Adult', price: '€150 / 1500Dhs', priceNumeric: 150 },
      { label: 'Child (-7 years)', price: '€80 / 800Dhs', priceNumeric: 80 }
    ],
  },
  {
    id: 'biking-tour',
    category: 'activity',
    subcategory: 'other',
    title: 'Biking Tour',
    shortDescription: 'Guided biking tour through Marrakech surroundings',
    description: 'Guided biking tour through Marrakech surroundings.',
    price: '��45',
    duration: '3 hours',
    image: placeholderImage,
    location: 'Marrakech Region',
    inclusions: ['Professional guide', 'Bike rental', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'bike-rental',
    category: 'activity',
    subcategory: 'other',
    title: 'Bike Rental',
    shortDescription: 'Explore freely with a rented bicycle',
    description: 'Explore freely with a rented bicycle.',
    price: 'From €15',
    duration: 'Flexible',
    image: placeholderImage,
    location: 'Marrakech',
    inclusions: ['Bike rental', 'Safety equipment', 'Lock'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
    isRental: true,
  },
  {
    id: 'scooter-rental',
    category: 'activity',
    subcategory: 'other',
    title: 'Scooter Rental',
    shortDescription: 'Rent a scooter for a full-day city or countryside ride',
    description: 'Rent a scooter for a full-day city or countryside ride.',
    price: '€50',
    duration: 'Full day',
    image: placeholderImage,
    location: 'Marrakech',
    inclusions: ['Scooter rental', 'Helmet', 'Insurance', 'City map'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
    isRental: true,
  },
  {
    id: 'paragliding',
    category: 'activity',
    subcategory: 'other',
    title: 'Paragliding',
    shortDescription: 'Experience aerial views of Marrakech and the Atlas Mountains',
    description: 'Experience aerial views of Marrakech and the Atlas Mountains.',
    price: '€85',
    duration: '30 minutes flight',
    image: placeholderImage,
    location: 'Atlas Mountains',
    inclusions: ['Professional pilot', 'Safety equipment', 'Round-trip transport', 'Photos & video', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'cooking-class',
    category: 'activity',
    subcategory: 'other',
    title: 'Moroccan Cooking Class',
    shortDescription: 'Learn to prepare authentic Moroccan dishes and enjoy your creations',
    description: 'Immerse yourself in Moroccan culinary traditions with a hands-on cooking class. Learn to prepare traditional dishes like tagine, couscous, and Moroccan salads from experienced local chefs. After cooking, sit down to enjoy the delicious meal you have created. All ingredients, equipment, and instruction are included in this authentic cultural experience.',
    price: '€50 / 500Dhs',
    duration: '3-4 hours',
    image: placeholderImage,
    location: 'Marrakech',
    inclusions: ['Professional chef instructor', 'All ingredients and equipment', 'Recipe booklet', 'Eat your prepared meal', 'Round-trip transport', 'Apron and cooking tools', 'Photos stop'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },

  // Tours
  {
    id: 'ourika-valley-tour',
    category: 'tour',
    title: 'Ourika Valley – 1 Day',
    shortDescription: 'Discover the stunning Ourika Valley with its waterfalls and traditional Berber villages',
    description: 'Experience the beauty of the Ourika Valley, nestled in the foothills of the Atlas Mountains. Visit traditional Berber villages, explore local markets, and enjoy breathtaking waterfall views.',
    price: '€35 / 350Dhs',
    duration: 'Full day',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fbd3d65f6ab2d4d5cb8b3184523df279d?format=webp&width=800',
    location: 'Ourika Valley',
    inclusions: ['Round-trip transport', 'Professional guide', 'Waterfall visit', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fafbb854a89b3485c971a7de2b8463cf5?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Ff9e05f76ac654b38b5d24759f0fa5e46?format=webp&width=800',
    ],
  },
  {
    id: 'ouzoud-waterfalls-tour',
    category: 'tour',
    title: 'Ouzoud Waterfalls – 1 Day',
    shortDescription: 'Visit Morocco\'s most spectacular waterfalls and see wild monkeys in their natural habitat',
    description: 'Journey to the magnificent Ouzoud Waterfalls, one of North Africa\'s most stunning natural wonders. Enjoy a scenic hike, spot Barbary monkeys, and take a refreshing boat ride at the base of the falls.',
    price: '€40 / 400Dhs',
    duration: 'Full day',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F253dc0b0e0874aad9b1f7e4818963077?format=webp&width=800',
    location: 'Ouzoud',
    inclusions: ['Round-trip transport', 'Professional guide', 'Boat ride', 'Lunch', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F1452e1e03efe40cba2060b6920a3fffd?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F4b7d76de6d784244b8cc7ad1160e1a1f?format=webp&width=800',
    ],
  },
  {
    id: 'essaouira-tour',
    category: 'tour',
    title: 'Essaouira – 1 Day',
    shortDescription: 'Explore the charming coastal city of Essaouira with its historic medina and beautiful beaches',
    description: 'Discover the picturesque port city of Essaouira, a UNESCO World Heritage site. Wander through the historic medina, visit the bustling harbor, and enjoy fresh seafood by the Atlantic Ocean.',
    price: '€45 / 450Dhs',
    duration: 'Full day',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F2e1d2aab1883484ca89bef7324cd8724?format=webp&width=800',
    location: 'Essaouira',
    inclusions: ['Round-trip transport', 'Professional guide', 'Free time in medina', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F59b8dc80a3f74683883ae0fbadf490ce?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F11799ed8575f4d92bc28d21287bce0c9?format=webp&width=800',
    ],
  },
  {
    id: 'ouarzazate-tour',
    category: 'tour',
    title: 'Ouarzazate – 1 Day',
    shortDescription: 'Visit the famous movie studios and the UNESCO-listed fortress of Ait Ben Haddou',
    description: 'Explore the gateway to the Sahara Desert. Visit the ancient kasbah of Ait Ben Haddou, a UNESCO World Heritage site and famous filming location, along with the Atlas Film Studios in Ouarzazate.',
    price: '€50 / 500Dhs',
    duration: 'Full day',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fc4ee61a2987b43c78b70dd120940e4d9?format=webp&width=800',
    location: 'Ouarzazate',
    inclusions: ['Round-trip transport', 'Professional guide', 'Entrance fees', 'Lunch', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fc8a9a9f47ebf49f6ab3b42866a2865d5?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F7506b72e5628401d800527cb86812236?format=webp&width=800',
    ],
  },
  {
    id: 'merzouga-tour',
    category: 'tour',
    title: 'Merzouga Desert – 3 Days / 2 Nights',
    shortDescription: 'Experience the magical Sahara Desert with camel rides and overnight stay in traditional Berber camp',
    description: 'Embark on an unforgettable journey to the spectacular Erg Chebbi dunes of Merzouga. Experience authentic Sahara desert life with camel trekking, stunning sunset and sunrise views, traditional Berber hospitality, and a night under the stars in a desert camp. This 3-day adventure includes visits to the Atlas Mountains, Todra Gorges, and authentic Berber villages along the way.',
    price: 'From €100 / 1000Dhs',
    duration: '3 days / 2 nights',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Feef5e3634cd8406fbe94cdec81d57156?format=webp&width=800',
    location: 'Merzouga - Sahara Desert',
    inclusions: ['Round-trip transport', 'Professional guide', 'Camel trek', 'Breakfast and Dinner', 'Desert camp accommodation', 'Hotel accommodation', 'Sandboarding', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F4a7e933f980e4a1e885ecda90853113d?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fa6e256472ba643f292ff7f54a7c18688?format=webp&width=800',
    ],
    priceVariants: [
      { label: 'Adult', price: '€100 / 1000Dhs', priceNumeric: 100 },
      { label: 'Child (under 10 years)', price: '€75 / 750Dhs', priceNumeric: 75 }
    ],
  },
  {
    id: 'zagora-tour',
    category: 'tour',
    title: 'Zagora Desert – 2 Days / 1 Night',
    shortDescription: 'A two-day desert adventure from Marrakech to Zagora. Cross the High Atlas Mountains, visit Aït Ben Haddou and Draa Valley, then ride a camel into the dunes for a night under the stars',
    description: 'A two-day desert adventure from Marrakech to Zagora. Cross the High Atlas Mountains, visit Aït Ben Haddou and Draa Valley, then ride a camel into the dunes for a night under the stars. Includes dinner and breakfast at the camp.',
    price: '€150 / 1500Dhs',
    duration: '2 days / 1 night',
    image: placeholderImage,
    location: 'Zagora - Draa Valley',
    inclusions: [
      'Hotel/riad pickup & drop-off',
      'Air-conditioned minivan',
      '1 night in desert camp (Berber tent)',
      'Sunset & sunrise camel trek',
      'Dinner and breakfast in camp',
      'English/French-speaking driver-guide'
    ],
    exclusions: [
      'Lunches and beverages',
      'Entrance fees (e.g. Aït Ben Haddou, studios)',
      'Tips and personal expenses',
      'Optional tent upgrades'
    ],
    itinerary: [
      {
        day: 'Day 1',
        description: 'Early pickup (7:00–8:00 AM) from your Marrakech hotel/riad. Drive through the High Atlas Mountains (Tizi n’Tichka pass). Visit Aït Ben Haddou (UNESCO site) and explore the ksar. Continue through Ouarzazate and the Draa Valley. Camel ride at sunset into the Zagora dunes. Dinner and overnight in a Berber camp (music, campfire, stars).'
      },
      {
        day: 'Day 2',
        description: 'Sunrise over dunes + breakfast in camp. Camel ride back to meet transport. Return via Ouarzazate with lunch stop. Arrive in Marrakech late afternoon (~6 PM).'
      }
    ],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F16ab4df749334c5abdcc6632c11b6fb7?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fe49fcfe412ff464c8d20577c48ac4a3c?format=webp&width=800',
    ],
  },

  {
    id: 'airport-transfer',
    category: 'transportation',
    title: 'Airport Transfer',
    shortDescription: 'Reliable airport pickup and drop-off service',
    description: 'Comfortable and reliable transfer service between Marrakech Airport and your accommodation. Professional drivers, clean vehicles, and punctual service guaranteed.',
    price: '€30 / 300Dhs',
    duration: '30-45 minutes',
    image: placeholderImage,
    location: 'Marrakech Airport',
    inclusions: ['Professional driver', 'Clean comfortable vehicle', 'Meet & greet service', 'Luggage assistance'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: 'city-to-city-transfer',
    category: 'transportation',
    title: 'City-to-City Transfer',
    shortDescription: 'Custom transfer service between Moroccan cities',
    description: 'Comfortable private transfer service between any cities in Morocco. Perfect for traveling to Casablanca, Fes, Essaouira, Agadir, or any other destination. Professional drivers with modern, air-conditioned vehicles ensure a safe and pleasant journey.',
    price: 'Custom Quote',
    duration: 'Variable',
    image: placeholderImage,
    location: 'Morocco-wide',
    inclusions: ['Professional driver', 'Modern air-conditioned vehicle', 'Flexible departure times', 'Luggage assistance', 'Rest stops included'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
  },

];

export const getServicesByCategory = (category: 'activity' | 'tour' | 'transportation') => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getServicesBySubcategory = (subcategory: string) => {
  return services.filter(service => service.subcategory === subcategory);
};

export const getFeaturedServices = () => {
  return [
    services.find(s => s.id === 'quad-biking-palm-grove'),
    services.find(s => s.id === 'sahara-desert-3-days'),
    services.find(s => s.id === 'airport-transfer'),
  ].filter(Boolean) as Service[];
};
