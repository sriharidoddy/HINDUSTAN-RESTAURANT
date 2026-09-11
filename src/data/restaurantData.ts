export interface MenuItem {
  id: string;
  name: string;
  category: 'Biryani' | 'Chicken' | 'Mutton' | 'Curries' | 'Rotis & Naan' | 'Rice' | 'Vegetarian' | 'Beverages';
  description: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isSignature?: boolean;
  priceText: string;
  image: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  highlightDish?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Biryani' | 'Food' | 'Restaurant';
  image: string;
  description: string;
}

export const RESTAURANT_INFO = {
  name: 'HINDUSTAN RESTAURANT',
  teluguName: 'హిందూస్తాన్ రెస్టారెంట్',
  tagline: 'Authentic Taste. Delicious Memories.',
  description:
    'Experience flavorful biryanis, authentic Indian dishes and satisfying meals in the heart of Kosgi.',
  aboutStory:
    "Hindustan Restaurant is a local Indian restaurant in Kosgi serving flavorful biryanis, delicious non-vegetarian curries, rotis and other popular Indian dishes. Whether you're looking for a quick takeaway or a comfortable dine-in meal, we aim to serve tasty food at an affordable price.",
  address: 'XPQ6+3JM, Amma Hospital, Kosgi, Telangana 509339',
  phone: '094416 27556',
  phoneTel: 'tel:09441627556',
  rating: '4.1',
  ratingNum: 4.1,
  reviewsCount: '89+',
  priceRange: '₹1–200 / person',
  services: ['Dine-in', 'Takeaway'],
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Hindustan+Restaurant+Amma+Hospital+Kosgi+Telangana+509339',
  writeReviewUrl:
    'https://www.google.com/maps/search/?api=1&query=Hindustan+Restaurant+Amma+Hospital+Kosgi+Telangana+509339',
  embedMapUrl:
    'https://maps.google.com/maps?q=Hindustan%20Restaurant%20Amma%20Hospital%20Kosgi%20Telangana%20509339&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export const SIGNATURE_FAVOURITES = [
  {
    id: 'sig-1',
    name: 'Chicken Biryani',
    description: 'Flavorful, aromatic and well-cooked chicken biryani.',
    image: getAssetUrl('/images/hero-biryani.jpg'),
    badge: 'Chef Special',
    isVeg: false,
    priceText: 'Price on request',
  },
  {
    id: 'sig-2',
    name: 'Mutton Biryani',
    description: 'Rich and delicious mutton biryani prepared with traditional flavours.',
    image: getAssetUrl('/images/mutton-biryani.jpg'),
    badge: 'Popular Choice',
    isVeg: false,
    priceText: 'Price on request',
  },
  {
    id: 'sig-3',
    name: 'Non-Veg Curries',
    description: 'Tasty curries perfect with rice, roti or naan.',
    image: getAssetUrl('/images/nonveg-curry.jpg'),
    badge: 'Signature Gravy',
    isVeg: false,
    priceText: 'Price on request',
  },
  {
    id: 'sig-4',
    name: 'Butter Naan',
    description: 'Soft, buttery naan that pairs perfectly with our curries.',
    image: getAssetUrl('/images/butter-naan.jpg'),
    badge: 'Tandoor Fresh',
    isVeg: true,
    priceText: 'Price on request',
  },
];

export const MENU_CATEGORIES = [
  'Biryani',
  'Chicken',
  'Mutton',
  'Curries',
  'Rotis & Naan',
  'Rice',
  'Vegetarian',
  'Beverages',
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Biryani
  {
    id: 'b-1',
    name: 'Special Chicken Biryani',
    category: 'Biryani',
    description: 'Long-grain fragrant basmati rice slow-cooked with tender chicken and aromatic hand-ground spices.',
    isVeg: false,
    isSpicy: true,
    isSignature: true,
    priceText: 'Price on request',
    image: getAssetUrl('/images/hero-biryani.jpg'),
  },
  {
    id: 'b-2',
    name: 'Traditional Mutton Biryani',
    category: 'Biryani',
    description: 'Succulent cuts of mutton layered with spiced saffron basmati rice, caramelized onions and fresh mint.',
    isVeg: false,
    isSpicy: true,
    isSignature: true,
    priceText: 'Price on request',
    image: getAssetUrl('/images/mutton-biryani.jpg'),
  },
  {
    id: 'b-3',
    name: 'Egg Biryani',
    category: 'Biryani',
    description: 'Seasoned hard-boiled eggs roasted in rich masala and layered over flavorful biryani rice.',
    isVeg: false,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'b-4',
    name: 'Biryani Kuska / Rice',
    category: 'Biryani',
    description: 'Flavor-packed seasoned biryani rice infused with whole spices and meat stock essence.',
    isVeg: false,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
  },

  // Chicken
  {
    id: 'c-1',
    name: 'Chicken Fry',
    category: 'Chicken',
    description: 'Crisp, spicy pan-fried chicken tossed with green chillies, curry leaves and roasted spice blend.',
    isVeg: false,
    isSpicy: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c-2',
    name: 'Chicken Masala',
    category: 'Chicken',
    description: 'Tender chicken braised in a thick, rich onion-tomato gravy with roasted whole spices.',
    isVeg: false,
    priceText: 'Price on request',
    image: getAssetUrl('/images/nonveg-curry.jpg'),
  },
  {
    id: 'c-3',
    name: 'Chicken Kolhapuri / Spicy Gravy',
    category: 'Chicken',
    description: 'Fiery and aromatic chicken preparation with bold regional red chilli and peppercorn flavors.',
    isVeg: false,
    isSpicy: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  },

  // Mutton
  {
    id: 'm-1',
    name: 'Mutton Curry / Rogan Style',
    category: 'Mutton',
    description: 'Tender bone-in mutton simmered until meltingly soft in a traditional spiced homestyle gravy.',
    isVeg: false,
    isSpicy: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm-2',
    name: 'Mutton Masala Fry',
    category: 'Mutton',
    description: 'Succulent mutton chunks slow roasted on a flat tawa with crushed garlic, pepper, and onion relish.',
    isVeg: false,
    isSpicy: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },

  // Curries
  {
    id: 'cu-1',
    name: 'Special Non-Veg Curry',
    category: 'Curries',
    description: 'Hearty, aromatic curry prepared daily with freshly crushed spices and rich rustic gravy.',
    isVeg: false,
    isSignature: true,
    priceText: 'Price on request',
    image: getAssetUrl('/images/nonveg-curry.jpg'),
  },
  {
    id: 'cu-2',
    name: 'Egg Curry',
    category: 'Curries',
    description: 'Golden fried boiled eggs steeped in a comforting onion-tomato masala gravy.',
    isVeg: false,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cu-3',
    name: 'Paneer Butter Masala',
    category: 'Curries',
    description: 'Soft cottage cheese cubes simmered in a silky, creamy tomato and butter gravy.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
  },

  // Rotis & Naan
  {
    id: 'r-1',
    name: 'Tandoori Butter Naan',
    category: 'Rotis & Naan',
    description: 'Freshly stretched refined flour bread baked in a clay tandoor and brushed with rich butter.',
    isVeg: true,
    isSignature: true,
    priceText: 'Price on request',
    image: getAssetUrl('/images/butter-naan.jpg'),
  },
  {
    id: 'r-2',
    name: 'Plain Tandoori Roti',
    category: 'Rotis & Naan',
    description: 'Whole wheat flatbread cooked crisp on the tandoor walls, wholesome and light.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r-3',
    name: 'Butter Roti',
    category: 'Rotis & Naan',
    description: 'Crisp hot tandoori roti glazed with golden clarified butter.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r-4',
    name: 'Garlic Naan',
    category: 'Rotis & Naan',
    description: 'Tandoori naan topped with roasted minced garlic and fresh coriander.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
  },

  // Rice
  {
    id: 'rc-1',
    name: 'Steamed Basmati Rice',
    category: 'Rice',
    description: 'Fluffy, long-grain white basmati rice, the perfect accompaniment to non-veg curries.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rc-2',
    name: 'Jeera Rice',
    category: 'Rice',
    description: 'Fragrant basmati rice gently tempered with toasted cumin seeds and ghee.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
  },

  // Vegetarian
  {
    id: 'v-1',
    name: 'Dal Tadka',
    category: 'Vegetarian',
    description: 'Yellow lentils tempered with ghee, cumin seeds, garlic, dried red chillies and coriander.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v-2',
    name: 'Mix Vegetable Curry',
    category: 'Vegetarian',
    description: 'Seasonal fresh garden vegetables cooked in a spiced homestyle Indian gravy.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
  },

  // Beverages
  {
    id: 'bev-1',
    name: 'Sweet / Salt Lassi',
    category: 'Beverages',
    description: 'Traditional churned fresh yogurt drink, refreshing and cooling after a spicy meal.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bev-2',
    name: 'Fresh Lime Soda / Water',
    category: 'Beverages',
    description: 'Zesty fresh lime with chilled soda or water, served sweet, salted, or mixed.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bev-3',
    name: 'Cold Beverages & Water',
    category: 'Beverages',
    description: 'Chilled packaged beverages and purified packaged mineral drinking water.',
    isVeg: true,
    priceText: 'Price on request',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Yogesh Karre',
    rating: 5,
    date: 'Verified Dine-in',
    comment: 'I had chicken biryani at this place — it was really tasty and well-cooked.',
    highlightDish: 'Chicken Biryani',
  },
  {
    id: 'rev-2',
    author: 'APEX PHARMACY',
    rating: 5,
    date: 'Verified Customer',
    comment: 'Good service and very good taste for all type food.',
    highlightDish: 'All Food Varieties',
  },
  {
    id: 'rev-3',
    author: 'Sathya Narayana K',
    rating: 4.5,
    date: 'Local Guide',
    comment:
      "It's one of the restaurants in Kosgi... available all types of biryanis like mutton and chicken and non-veg curries, rotis and butter naan.",
    highlightDish: 'Biryanis, Curries & Naan',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Signature Handi Chicken Biryani',
    category: 'Biryani',
    image: getAssetUrl('/images/hero-biryani.jpg'),
    description: 'Freshly prepared chicken biryani cooked with saffron basmati rice and handi spices.',
  },
  {
    id: 'g-2',
    title: 'Traditional Mutton Biryani Feast',
    category: 'Biryani',
    image: getAssetUrl('/images/mutton-biryani.jpg'),
    description: 'Tender mutton cooked to perfection in aromatic long-grain rice.',
  },
  {
    id: 'g-3',
    title: 'Chef Serving Fresh Hot Biryani',
    category: 'Food',
    image: getAssetUrl('/images/biryani-serving.jpg'),
    description: 'Steaming hot degh biryani served with authentic culinary passion.',
  },
  {
    id: 'g-4',
    title: 'Rich Non-Veg Curry & Gravy',
    category: 'Food',
    image: getAssetUrl('/images/nonveg-curry.jpg'),
    description: 'Simmered spiced chicken curry garnished with ginger juliennes.',
  },
  {
    id: 'g-5',
    title: 'Clay Tandoor Butter Naan',
    category: 'Food',
    image: getAssetUrl('/images/butter-naan.jpg'),
    description: 'Soft, buttery layered naan straight out of the piping tandoor oven.',
  },
  {
    id: 'g-6',
    title: 'Warm Dining Room Ambiance',
    category: 'Restaurant',
    image: getAssetUrl('/images/restaurant-ambience.jpg'),
    description: 'Comfortable dine-in atmosphere with ambient copper lights and cozy seating.',
  },
  {
    id: 'g-7',
    title: 'Authentic Indian Curry Presentation',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    description: 'Homestyle lentils and vegetarian curries seasoned with fresh spices.',
  },
  {
    id: 'g-8',
    title: 'Takeaway & Dine-In Dining Experience',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Welcoming dining experience for family, friends and takeaway meals.',
  },
];
