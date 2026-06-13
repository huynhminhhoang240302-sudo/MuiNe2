export type TravelCategory =
  | "Food"
  | "Rest"
  | "Dining"
  | "Move"
  | "Jeep"
  | "ATV"
  | "Bike"
  | "Beach"
  | "Free"
  | "Shop"
  | "Night";

export type ContactLink = {
  label: string;
  type: "Website" | "Facebook" | "Instagram" | "Phone" | "Email" | "Booking" | "Map" | "Zalo" | "Other";
  value: string;
  url?: string;
};

export type TravelItem = {
  id: string;
  title: string;
  categories: TravelCategory[];
  shortDescription: string;
  description?: string;
  area?: string;
  address?: string;
  hours?: string;
  price?: string;
  travelTime?: string;
  recommendedFor?: string;
  caution?: string;
  contacts?: ContactLink[];
  websiteUrl?: string;
  mapUrl?: string;
  bookingUrl?: string;
  notes?: string;
  tags?: string[];
  confidence?: "verified" | "source-note" | "needs-confirmation";
};

const mapSearch = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const travelItems: TravelItem[] = [
  {
    id: "private-car-sgn-mui-ne",
    title: "Private car from SGN airport to Mui Ne",
    categories: ["Move"],
    shortDescription: "Fastest and most practical option from Tan Son Nhat Airport to Mui Ne.",
    price: "Approximately 1,400,000-2,300,000 VND per car depending on vehicle type",
    travelTime: "Approximately 2.5-3.5 hours door-to-door",
    recommendedFor: "1-4 people, luggage, international arrival, reaching the resort early",
    notes: "Recommended option because arrival is 8:00 AM and Mui Ne can be reached around midday or early afternoon.",
    contacts: [
      { label: "SASCO Travel", type: "Website", value: "sascotravel.vn", url: "http://www.sascotravel.vn/" },
      { label: "Mui Ne Private Car search", type: "Map", value: "Mui Ne Private Car", url: mapSearch("Mui Ne Private Car SGN to Mui Ne") },
      { label: "Mui Ne Explorer search", type: "Map", value: "Mui Ne Explorer", url: mapSearch("Mui Ne Explorer Mui Ne transfer") }
    ],
    websiteUrl: "http://www.sascotravel.vn/",
    mapUrl: mapSearch("private car Tan Son Nhat Airport to Mui Ne"),
    tags: ["airport", "transfer", "recommended", "fastest"],
    confidence: "source-note"
  },
  {
    id: "taxi-app-to-limousine",
    title: "Taxi/app to limousine or coach pickup",
    categories: ["Move"],
    shortDescription: "Take taxi/app from SGN to a city pickup point, then continue to Mui Ne by coach or limousine.",
    price: "City taxi/app fare plus bus ticket, around 180,000-220,000 VND or higher depending on operator/seat",
    travelTime: "Approximately 5-6.5 hours total",
    recommendedFor: "Budget traveler who accepts one transfer",
    contacts: [
      { label: "FUTA Bus Lines", type: "Website", value: "futabus.vn", url: "https://futabus.vn/" },
      { label: "VeXeRe", type: "Booking", value: "vexere.com", url: "https://vexere.com/" },
      { label: "Kumho Samco search", type: "Map", value: "Kumho Samco", url: mapSearch("Kumho Samco Mui Ne bus") },
      { label: "Hanh Cafe search", type: "Map", value: "Hanh Cafe", url: mapSearch("Hanh Cafe Mui Ne bus") }
    ],
    websiteUrl: "https://futabus.vn/",
    bookingUrl: "https://vexere.com/",
    mapUrl: mapSearch("Mui Ne bus limousine pickup Pham Ngu Lao"),
    tags: ["budget", "coach", "limousine", "transfer"],
    confidence: "source-note"
  },
  {
    id: "bus-109-coach",
    title: "Airport Bus 109 to city center, then coach",
    categories: ["Move"],
    shortDescription: "Cheapest route from SGN into the city before connecting to a Mui Ne coach.",
    price: "5,000-6,000 VND for Bus 109 plus Mui Ne coach fare",
    travelTime: "Cheapest but slowest",
    recommendedFor: "Very light luggage and people comfortable with public transport",
    caution: "Pickup route may change due to Terminal 3 updates; check BusMap or airport staff on arrival.",
    mapUrl: mapSearch("Tan Son Nhat Bus 109 Pham Ngu Lao"),
    tags: ["cheapest", "public transport", "budget"],
    confidence: "source-note"
  },
  {
    id: "train-saigon-phan-thiet",
    title: "Train from Saigon to Phan Thiet",
    categories: ["Move"],
    shortDescription: "Scenic but less convenient route from SGN arrival.",
    price: "Variable by date and seat class",
    travelTime: "Requires taxi to Saigon station and taxi from Phan Thiet station to Mui Ne",
    recommendedFor: "Traveler who wants train experience more than time efficiency",
    mapUrl: mapSearch("Saigon railway station Phan Thiet train"),
    tags: ["train", "scenic", "slow"],
    confidence: "source-note"
  },
  {
    id: "taxi-app-around-sgn",
    title: "Taxi/app around Tan Son Nhat Airport",
    categories: ["Move"],
    shortDescription: "Traditional taxi and ride-hailing options for short airport-city movement.",
    notes: "Vinasun, Mai Linh, Green SM, Grab, and Be are mentioned in the source notes. Traditional taxi and app pickup zones are separated.",
    recommendedFor: "Showing fare before ride and moving between airport/city pickup points",
    mapUrl: mapSearch("Tan Son Nhat airport taxi pickup Grab Be Green SM"),
    tags: ["taxi", "airport", "Grab", "Green SM", "Vinasun", "Mai Linh"],
    confidence: "source-note"
  },
  {
    id: "sasco-luggage-storage",
    title: "SASCO luggage storage at Tan Son Nhat",
    categories: ["Shop", "Move"],
    shortDescription: "Useful if returning to SGN early and needing to store bags before a late flight.",
    area: "International arrival terminal, ground floor, columns 13-14",
    hours: "7:00-23:00",
    price: "27,500 VND/item/hour under 10 hours; 275,000 VND/item for 10-24 hours; 275,000 VND/day/item after that",
    caution: "Maximum 48 hours; does not accept dangerous goods, high-value items, or important documents.",
    contacts: [{ label: "SASCO Travel", type: "Website", value: "sascotravel.vn", url: "http://www.sascotravel.vn/" }],
    websiteUrl: "http://www.sascotravel.vn/",
    mapUrl: mapSearch("SASCO luggage storage Tan Son Nhat international arrival"),
    tags: ["luggage", "airport", "storage"],
    confidence: "source-note"
  },
  {
    id: "sim-esim-options",
    title: "SIM/eSIM options",
    categories: ["Shop"],
    shortDescription: "Connectivity options for arrival; Viettel is recommended in the notes for stable coverage.",
    price: "Packages change quickly; verify live pricing before trip",
    recommendedFor: "Short trip where eSIM before arrival saves time",
    caution: "MobiFone traveller eSIM and VinaPhone Tourist SIM details need current confirmation.",
    notes: "Source notes mention Viettel, MobiFone traveller eSIM, and an older VinaPhone Tourist SIM at 199,000 VND / 15 days.",
    contacts: [
      { label: "Viettel tourist SIM/eSIM search", type: "Map", value: "Viettel tourist SIM eSIM", url: mapSearch("Viettel tourist SIM eSIM Vietnam") },
      { label: "MobiFone traveller eSIM search", type: "Map", value: "MobiFone traveller eSIM", url: mapSearch("MobiFone traveller eSIM") },
      { label: "VinaPhone Tourist SIM search", type: "Map", value: "VinaPhone Tourist SIM", url: mapSearch("VinaPhone Tourist SIM") }
    ],
    mapUrl: mapSearch("SIM eSIM Tan Son Nhat Airport"),
    tags: ["SIM", "eSIM", "Viettel", "MobiFone", "VinaPhone", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "hcmc-arrival-hotel-rest",
    title: "HCMC hotel rest stop after Thailand flight",
    categories: ["Rest", "Move"],
    shortDescription: "Use a District 1, Binh Thanh, or airport-area hotel as a soft landing before the Mui Ne drive.",
    area: "Ho Chi Minh City",
    price: "Estimate 1,000,000-2,000,000 VND per room/night depending on hotel",
    recommendedFor: "Arrival day rest, luggage drop, shower, and easy Landmark 81 access",
    caution: "Book a room with early check-in or luggage storage because arrival is around 9:00 AM.",
    mapUrl: mapSearch("Ho Chi Minh City hotel early check in District 1 Binh Thanh Landmark 81"),
    tags: ["HCMC", "arrival", "hotel", "rest", "early check-in"],
    confidence: "source-note"
  },
  {
    id: "hcmc-district-1-walk",
    title: "District 1 arrival walk",
    categories: ["Free", "Shop", "Food"],
    shortDescription: "Easy first-day HCMC loop: Ben Thanh Market, Nguyen Hue Walking Street, Cafe Apartment, Post Office area.",
    area: "District 1, Ho Chi Minh City",
    recommendedFor: "Low-pressure sightseeing after the morning flight",
    caution: "Keep the route flexible if immigration or hotel check-in takes longer than expected.",
    mapUrl: mapSearch("Ben Thanh Market Nguyen Hue Walking Street Cafe Apartment Saigon Central Post Office"),
    tags: ["HCMC", "arrival day", "walk", "market", "cafe"],
    confidence: "source-note"
  },
  {
    id: "landmark-81-dinner",
    title: "Dinner at Landmark 81",
    categories: ["Dining", "Night", "Free"],
    shortDescription: "Must-do HCMC dinner stop inside Landmark 81 / Vincom Center Landmark 81.",
    area: "Binh Thanh, Ho Chi Minh City",
    recommendedFor: "First-night dinner, city view, easy ride-hailing pickup",
    price: "Variable by restaurant; reserve ahead for skyline-view dining",
    caution: "Choose and reserve the restaurant before the trip, especially for a group dinner.",
    contacts: [{ label: "Map", type: "Map", value: "Landmark 81", url: mapSearch("Landmark 81 restaurants dinner") }],
    mapUrl: mapSearch("Landmark 81 restaurants dinner"),
    tags: ["HCMC", "Landmark 81", "dinner", "night view", "must-do"],
    confidence: "source-note"
  },
  {
    id: "ha-phuong-hotel",
    title: "Ha Phuong Hotel Mui Ne",
    categories: ["Rest", "Jeep", "Bike", "Dining"],
    shortDescription: "Budget-friendly option with jeep tour, motorbike rental, and restaurant/cafe services mentioned in source notes.",
    area: "Ham Tien",
    recommendedFor: "Budget stay, many tours, easy services",
    contacts: [
      { label: "Phone", type: "Phone", value: "0335 164 866", url: "tel:0335164866" },
      { label: "Map", type: "Map", value: "Ha Phuong Hotel Mui Ne", url: mapSearch("Ha Phuong Hotel Mui Ne") }
    ],
    mapUrl: mapSearch("Ha Phuong Hotel Mui Ne"),
    tags: ["budget", "recommended", "jeep", "bike"],
    confidence: "needs-confirmation"
  },
  {
    id: "sai-gon-mui-ne-resort",
    title: "Sai Gon Mui Ne Resort",
    categories: ["Rest", "Dining", "Beach"],
    shortDescription: "Central resort option good for convenient food/activity access.",
    area: "Nguyen Dinh Chieu central area",
    recommendedFor: "Mid-range resort, central location",
    contacts: [
      { label: "Website", type: "Website", value: "saigonmuineresort.com", url: "https://saigonmuineresort.com/" },
      { label: "Phone", type: "Phone", value: "0941 145 544", url: "tel:0941145544" }
    ],
    websiteUrl: "https://saigonmuineresort.com/",
    mapUrl: mapSearch("Sai Gon Mui Ne Resort"),
    tags: ["central", "mid-range", "resort"],
    confidence: "verified"
  },
  {
    id: "bamboo-village",
    title: "Bamboo Village Beach Resort & Spa",
    categories: ["Rest", "Dining", "Beach"],
    shortDescription: "Garden-focused 4-star beach resort, suitable for balanced relaxation.",
    address: "38 Nguyen Dinh Chieu",
    recommendedFor: "Couples, quiet resort stay",
    contacts: [
      { label: "Phone", type: "Phone", value: "+84 252 3847 007", url: "tel:+842523847007" },
      { label: "Phone", type: "Phone", value: "+84 918 891 628", url: "tel:+84918891628" },
      { label: "Map", type: "Map", value: "Bamboo Village Beach Resort & Spa", url: mapSearch("Bamboo Village Beach Resort & Spa Mui Ne") }
    ],
    mapUrl: mapSearch("Bamboo Village Beach Resort & Spa Mui Ne"),
    tags: ["couples", "resort", "garden", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "sailing-club-resort",
    title: "Sailing Club Resort Mui Ne",
    categories: ["Rest", "Dining", "Beach"],
    shortDescription: "Boutique beachfront resort with Sandals restaurant, spa, pool, beach and kite school.",
    address: "24 Nguyen Dinh Chieu, Ham Tien, Phan Thiet",
    recommendedFor: "Boutique resort, food, kitesurf, couples/solo",
    contacts: [
      { label: "Website", type: "Website", value: "sailingclubmuine.com", url: "https://www.sailingclubmuine.com/" },
      { label: "Phone", type: "Phone", value: "+84 252 3847 440", url: "tel:+842523847440" },
      { label: "Email", type: "Email", value: "info@sailingclubmuine.com", url: "mailto:info@sailingclubmuine.com" }
    ],
    websiteUrl: "https://www.sailingclubmuine.com/",
    mapUrl: mapSearch("Sailing Club Resort Mui Ne"),
    tags: ["boutique", "recommended", "kitesurf", "dining"],
    confidence: "verified"
  },
  {
    id: "pandanus-resort",
    title: "Pandanus Resort",
    categories: ["Rest", "Dining", "Beach"],
    shortDescription: "Large resort grounds closer to the dunes and fishing village.",
    address: "3 Nguyen Huu Tho, Mui Ne",
    recommendedFor: "Family, large resort grounds, closer to dunes/fishing village",
    contacts: [
      { label: "Website", type: "Website", value: "pandanusresort.com", url: "https://www.pandanusresort.com/" },
      { label: "Phone", type: "Phone", value: "+84 252 3849 849", url: "tel:+842523849849" },
      { label: "Email", type: "Email", value: "pandanus@pandanusresort.com", url: "mailto:pandanus@pandanusresort.com" }
    ],
    websiteUrl: "https://www.pandanusresort.com/",
    mapUrl: mapSearch("Pandanus Resort Mui Ne"),
    tags: ["family", "resort", "dunes"],
    confidence: "verified"
  },
  {
    id: "centara-mirage",
    title: "Centara Mirage Resort Mui Ne",
    categories: ["Rest", "Beach"],
    shortDescription: "Family-oriented resort with water play areas and villas.",
    area: "Huynh Thuc Khang",
    recommendedFor: "Families with kids",
    contacts: [
      { label: "Phone", type: "Phone", value: "(+84)2522222202", url: "tel:+842522222202" },
      { label: "Map", type: "Map", value: "Centara Mirage Resort Mui Ne", url: mapSearch("Centara Mirage Resort Mui Ne") }
    ],
    mapUrl: mapSearch("Centara Mirage Resort Mui Ne"),
    tags: ["family", "kids", "resort", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "the-anam-mui-ne",
    title: "The Anam Mui Ne",
    categories: ["Rest", "Dining", "Beach"],
    shortDescription: "High-end Indochine-style resort with 127 rooms/suites.",
    address: "18 Nguyen Dinh Chieu",
    recommendedFor: "Luxury, couples, high-end resort stay",
    contacts: [
      { label: "Phone", type: "Phone", value: "+84 252 628 4868", url: "tel:+842526284868" },
      { label: "Map", type: "Map", value: "The Anam Mui Ne", url: mapSearch("The Anam Mui Ne") }
    ],
    mapUrl: mapSearch("The Anam Mui Ne"),
    tags: ["luxury", "couples", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "anantara-mui-ne",
    title: "Anantara Mui Ne Resort",
    categories: ["Rest", "Dining", "Beach"],
    shortDescription: "Luxury resort that can arrange transfers/activities through concierge.",
    address: "12A Nguyen Dinh Chieu",
    recommendedFor: "Luxury resort, longer rest stay",
    contacts: [
      { label: "Website", type: "Website", value: "anantara.com/en/mui-ne", url: "https://www.anantara.com/en/mui-ne" },
      { label: "Phone", type: "Phone", value: "+84 252 374 1888", url: "tel:+842523741888" },
      { label: "Email", type: "Email", value: "muine@anantara.com", url: "mailto:muine@anantara.com" }
    ],
    websiteUrl: "https://www.anantara.com/en/mui-ne",
    mapUrl: mapSearch("Anantara Mui Ne Resort"),
    tags: ["luxury", "concierge", "resort"],
    confidence: "verified"
  },
  {
    id: "sea-links-city-4pn-villa",
    title: "Sea Links City 4-bedroom villa",
    categories: ["Rest", "Beach", "Free"],
    shortDescription: "Whole 4-bedroom villa inside Sea Links City with kitchen, BBQ setup, living space, and resort access.",
    area: "Sea Links City, Phu Hai / Mui Ne",
    address: "Km9 Nguyen Thong, Phan Thiet",
    price: "Approximately 9,900,000 VND for 4 nights; confirm exact October rate before deposit",
    recommendedFor: "Group of around 8 guests wanting a villa, kitchen, BBQ, and resort-style base",
    caution: "4-bedroom details and noise policy come mainly from agent sources; confirm exact villa code and house rules in writing.",
    contacts: [
      { label: "Agent / Zalo", type: "Zalo", value: "0936666633", url: "tel:0936666633" },
      { label: "Sea Links villa hotline", type: "Phone", value: "0931533376", url: "tel:0931533376" },
      { label: "Phan Thiet office", type: "Phone", value: "+84 252 353 0088", url: "tel:+842523530088" },
      { label: "Sea Links City", type: "Website", value: "sealinkscity.com", url: "https://www.sealinkscity.com/" },
      { label: "VillaPhanThiet 4PN listing", type: "Booking", value: "villaphanthiet.com", url: "https://villaphanthiet.com/biet-thu-villa-sealinks-city-mui-ne-resort-4-phong-ngu/" }
    ],
    websiteUrl: "https://www.sealinkscity.com/",
    bookingUrl: "https://villaphanthiet.com/biet-thu-villa-sealinks-city-mui-ne-resort-4-phong-ngu/",
    mapUrl: mapSearch("Sea Links City Km9 Nguyen Thong Mui Ne Phan Thiet"),
    notes: "The notes describe standard capacity around 8 guests, with extra-person charges from guest 9 and possible additional guests subject to confirmation.",
    tags: ["villa", "4 bedrooms", "BBQ", "group", "Sea Links", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "sunrise-villa-10-sea-links",
    title: "Sunrise Villa 10 at Sea Links City",
    categories: ["Rest", "Beach", "Free"],
    shortDescription: "Named 4-bedroom Sea Links villa with 2 living rooms, kitchen, bar counter, pool/resort facilities nearby.",
    area: "Sea Links City, Mui Ne",
    address: "Sea Links City, Km9 Nguyen Thong, Phan Thiet",
    price: "Ask direct for October 13-17 dates; public notes do not list a fixed rate",
    recommendedFor: "Group that wants a named 4-bedroom villa with clearer capacity notes",
    caution: "Noise rules and event/BBQ limits need written confirmation before paying a deposit.",
    contacts: [
      { label: "Agent / Zalo", type: "Zalo", value: "0936666633", url: "tel:0936666633" },
      { label: "Sea Links villa hotline", type: "Phone", value: "0931533376", url: "tel:0931533376" },
      { label: "ThueVilla listing", type: "Booking", value: "thuevilla.com", url: "https://thuevilla.com/sunrise-villa-10-sealink-city-phan-thiet-3-phong-ngu/" }
    ],
    bookingUrl: "https://thuevilla.com/sunrise-villa-10-sealink-city-phan-thiet-3-phong-ngu/",
    mapUrl: mapSearch("Sunrise Villa 10 Sea Links City Mui Ne"),
    notes: "Notes list standard capacity as 8 adults plus 2 children, with possible maximum around 14 guests subject to surcharge.",
    tags: ["villa", "4 bedrooms", "bar", "group", "Sea Links", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "sea-links-5pn-villas",
    title: "Sea Links 5-bedroom villas PE97 / PE107 / S34 / S35",
    categories: ["Rest", "Beach", "Free"],
    shortDescription: "Larger Sea Links villa options with 5 bedrooms, useful when the group wants more privacy and space.",
    area: "Sea Links City, Mui Ne",
    address: "Sea Links City, Km9 Nguyen Thong, Phan Thiet",
    price: "Approximately 16,000,000-20,000,000 VND for 4 nights based on 4,000,000-5,000,000 VND/night agent pricing",
    recommendedFor: "Group of 8 wanting extra bedrooms, privacy, and a more comfortable villa layout",
    caution: "Public notes do not show clear quiet-hours rules; ask each exact villa code for house rules, beach distance, and guest cap.",
    contacts: [
      { label: "Agent / Zalo", type: "Zalo", value: "0936666633", url: "tel:0936666633" },
      { label: "Sea Links villa hotline", type: "Phone", value: "0931533376", url: "tel:0931533376" },
      { label: "VillaPhanThiet 5PN listing", type: "Booking", value: "villaphanthiet.com", url: "https://villaphanthiet.com/biet-thu-sea-links-villa-mui-ne-cho-thue-5-phong-ngu-moi-dep-gan-bien-gia-re/" }
    ],
    bookingUrl: "https://villaphanthiet.com/biet-thu-sea-links-villa-mui-ne-cho-thue-5-phong-ngu-moi-dep-gan-bien-gia-re/",
    mapUrl: mapSearch("Sea Links City 5 bedroom villa Mui Ne PE97 PE107 S34 S35"),
    notes: "The source notes mention PE97, PE107, S34, and S35. Confirm which exact unit is available before booking.",
    tags: ["villa", "5 bedrooms", "group", "privacy", "Sea Links", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "mui-ne-17pn-private-pool-villa",
    title: "Mui Ne 17-bedroom private-pool villa",
    categories: ["Rest", "Beach", "Free"],
    shortDescription: "Very large near-beach villa with private pool, best treated as a backup for a much larger group or maximum privacy.",
    area: "Mui Ne / Phan Thiet",
    price: "Ask direct; public notes did not expose a reliable price",
    recommendedFor: "Only if privacy, event-style space, or very large capacity matters more than booking certainty",
    caution: "Exact address, map pin, noise policy, and price were not confirmed in the notes; lower-confidence option.",
    contacts: [
      { label: "Agent / Zalo", type: "Zalo", value: "0936666633", url: "tel:0936666633" },
      { label: "VillaPhanThiet", type: "Website", value: "villaphanthiet.com", url: "https://villaphanthiet.com/" }
    ],
    websiteUrl: "https://villaphanthiet.com/",
    mapUrl: mapSearch("Mui Ne 17 bedroom villa private pool near beach"),
    notes: "The notes estimate capacity around 40-50 guests. This is far larger than needed for 8 people.",
    tags: ["villa", "17 bedrooms", "private pool", "large group", "low confidence"],
    confidence: "needs-confirmation"
  },
  {
    id: "jeep-sunrise-tour",
    title: "Jeep sunrise tour",
    categories: ["Jeep", "Beach", "Free"],
    shortDescription: "Signature Mui Ne activity. Best on Oct 14 morning.",
    description: "Typical route: White Sand Dunes / Bau Trang, Red Sand Dunes, Fairy Stream, Fishing Village.",
    recommendedFor: "First-time Mui Ne trip and photography",
    hours: "Very early morning / sunrise",
    caution: "Price not confirmed from primary source; confirm with hotel/resort/driver before booking.",
    mapUrl: mapSearch("Mui Ne jeep sunrise tour White Sand Dunes Fairy Stream Fishing Village"),
    tags: ["must-do", "recommended", "sunrise", "photography", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "atv-bau-trang",
    title: "ATV at Bau Trang / White Sand Dunes",
    categories: ["ATV", "Jeep"],
    shortDescription: "Optional add-on at White Sand Dunes during the jeep tour.",
    hours: "Early morning",
    caution: "Source notes do not have a reliable official price for Oct 2026; confirm on site or through jeep provider.",
    mapUrl: mapSearch("ATV Bau Trang White Sand Dunes Mui Ne"),
    tags: ["ATV", "dunes", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "motorbike-rental",
    title: "Motorbike rental",
    categories: ["Bike", "Move", "Free"],
    shortDescription: "Self-guided Ham Tien - Mui Ne Fishing Village - Fairy Stream - coast route.",
    price: "Needs confirmation",
    recommendedFor: "Self-guided coastal route if rider is comfortable in Vietnam",
    caution: "Only rent if traveler has suitable license/habit and is comfortable riding in Vietnam.",
    mapUrl: mapSearch("Mui Ne motorbike rental Ham Tien"),
    tags: ["bike", "self-guided", "license", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "kitesurf-water-sports",
    title: "Kitesurf / windsurf / water sports",
    categories: ["Beach"],
    shortDescription: "Mui Ne is known for kitesurf/windsurf; beginners should book lessons instead of free-renting gear.",
    recommendedFor: "Oct 15 activity if weather is good",
    contacts: [
      { label: "Sailing Club Resort", type: "Website", value: "sailingclubmuine.com", url: "https://www.sailingclubmuine.com/" },
      { label: "C2Sky search", type: "Map", value: "C2Sky Kite Center", url: mapSearch("C2Sky Kite Center Mui Ne") },
      { label: "Jibe's search", type: "Map", value: "Jibe's Beach Club", url: mapSearch("Jibe's Beach Club Mui Ne") }
    ],
    mapUrl: mapSearch("Mui Ne kitesurf windsurf school"),
    tags: ["weather", "kitesurf", "lesson", "water sports"],
    confidence: "needs-confirmation"
  },
  {
    id: "vinh-hy-day-trip",
    title: "Vinh Hy Bay snorkeling & fishing day trip",
    categories: ["Beach", "Move", "Free"],
    shortDescription: "Optional sea day trip outside Mui Ne.",
    recommendedFor: "Full day trip on Oct 16 if weather is good",
    caution: "This is not a short Mui Ne boat ride; it is a proper day trip with hotel pickup.",
    contacts: [
      { label: "Klook search", type: "Booking", value: "Klook Vinh Hy Bay", url: mapSearch("Klook Vinh Hy Bay tour") },
      { label: "GetYourGuide search", type: "Booking", value: "GetYourGuide Vinh Hy Bay", url: mapSearch("GetYourGuide Vinh Hy Bay tour") }
    ],
    mapUrl: mapSearch("Vinh Hy Bay snorkeling fishing tour from Mui Ne"),
    tags: ["weather backup", "day trip", "snorkeling", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "fishing-village",
    title: "Mui Ne Fishing Village",
    categories: ["Food", "Beach", "Free"],
    shortDescription: "Local experience with fishing boats, basket boats, seafood, and coastal life.",
    recommendedFor: "Photos, local atmosphere, morning visit",
    notes: "Local atmosphere and seafood area; not tied to one restaurant.",
    mapUrl: mapSearch("Mui Ne Fishing Village"),
    tags: ["local", "seafood", "photos", "morning"],
    confidence: "source-note"
  },
  {
    id: "fairy-stream",
    title: "Fairy Stream",
    categories: ["Beach", "Free"],
    shortDescription: "Common stop on jeep tour and easy sightseeing point.",
    mapUrl: mapSearch("Fairy Stream Mui Ne"),
    tags: ["sightseeing", "jeep tour"],
    confidence: "source-note"
  },
  {
    id: "white-sand-dunes",
    title: "White Sand Dunes / Bau Trang",
    categories: ["Jeep", "ATV", "Beach"],
    shortDescription: "Main sand-dune destination, best at sunrise/early morning.",
    mapUrl: mapSearch("White Sand Dunes Bau Trang Mui Ne"),
    tags: ["sunrise", "dunes", "ATV", "must-do"],
    confidence: "source-note"
  },
  {
    id: "red-sand-dunes",
    title: "Red Sand Dunes",
    categories: ["Jeep", "Beach"],
    shortDescription: "Common jeep tour stop, good for photos.",
    mapUrl: mapSearch("Red Sand Dunes Mui Ne"),
    tags: ["dunes", "photos", "jeep tour"],
    confidence: "source-note"
  },
  {
    id: "sandals-restaurant",
    title: "Sandals Restaurant",
    categories: ["Dining", "Food", "Night"],
    shortDescription: "Resort restaurant with Vietnamese and Western cuisine; good safe dinner option.",
    area: "Inside Sailing Club Resort Mui Ne",
    recommendedFor: "Dinner after beach/rest day",
    contacts: [{ label: "Sailing Club Resort", type: "Website", value: "sailingclubmuine.com", url: "https://www.sailingclubmuine.com/" }],
    websiteUrl: "https://www.sailingclubmuine.com/",
    mapUrl: mapSearch("Sandals Restaurant Sailing Club Resort Mui Ne"),
    tags: ["dinner", "safe option", "resort"],
    confidence: "source-note"
  },
  {
    id: "strawy-restaurant",
    title: "Strawy Restaurant",
    categories: ["Dining", "Food"],
    shortDescription: "Resort dining option from source notes.",
    area: "Inside Bamboo Village Beach Resort & Spa",
    mapUrl: mapSearch("Strawy Restaurant Bamboo Village Mui Ne"),
    tags: ["dining", "resort", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "jibes-beach-club",
    title: "Jibe's Beach Club",
    categories: ["Dining", "Food", "Beach", "Night"],
    shortDescription: "Beach club combining food/drinks with water sports atmosphere.",
    contacts: [{ label: "Map", type: "Map", value: "Jibe's Beach Club Mui Ne", url: mapSearch("Jibe's Beach Club Mui Ne") }],
    mapUrl: mapSearch("Jibe's Beach Club Mui Ne"),
    tags: ["beach club", "night", "water sports", "needs confirmation"],
    confidence: "needs-confirmation"
  },
  {
    id: "fishing-village-seafood",
    title: "Seafood around Mui Ne Fishing Village",
    categories: ["Food", "Dining"],
    shortDescription: "Local seafood experience rather than one fixed restaurant.",
    recommendedFor: "Breakfast/lunch/light local seafood experience near fishing village",
    caution: "Choose clean/busy stalls and confirm price before ordering.",
    mapUrl: mapSearch("seafood Mui Ne Fishing Village"),
    tags: ["seafood", "local", "budget"],
    confidence: "source-note"
  }
];
