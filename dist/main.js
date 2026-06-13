const mapSearch = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const travelItems = [{
  id: "private-car-sgn-mui-ne",
  title: "Private car from SGN airport to Mui Ne",
  categories: ["Move"],
  shortDescription: "Fastest and most practical option from Tan Son Nhat Airport to Mui Ne.",
  price: "Approximately 1,400,000-2,300,000 VND per car depending on vehicle type",
  travelTime: "Approximately 2.5-3.5 hours door-to-door",
  recommendedFor: "1-4 people, luggage, international arrival, reaching the resort early",
  notes: "Recommended option because arrival is 8:00 AM and Mui Ne can be reached around midday or early afternoon.",
  contacts: [{
    label: "SASCO Travel",
    type: "Website",
    value: "sascotravel.vn",
    url: "http://www.sascotravel.vn/"
  }, {
    label: "Mui Ne Private Car search",
    type: "Map",
    value: "Mui Ne Private Car",
    url: mapSearch("Mui Ne Private Car SGN to Mui Ne")
  }, {
    label: "Mui Ne Explorer search",
    type: "Map",
    value: "Mui Ne Explorer",
    url: mapSearch("Mui Ne Explorer Mui Ne transfer")
  }],
  websiteUrl: "http://www.sascotravel.vn/",
  mapUrl: mapSearch("private car Tan Son Nhat Airport to Mui Ne"),
  tags: ["airport", "transfer", "recommended", "fastest"],
  confidence: "source-note"
}, {
  id: "taxi-app-to-limousine",
  title: "Taxi/app to limousine or coach pickup",
  categories: ["Move"],
  shortDescription: "Take taxi/app from SGN to a city pickup point, then continue to Mui Ne by coach or limousine.",
  price: "City taxi/app fare plus bus ticket, around 180,000-220,000 VND or higher depending on operator/seat",
  travelTime: "Approximately 5-6.5 hours total",
  recommendedFor: "Budget traveler who accepts one transfer",
  contacts: [{
    label: "FUTA Bus Lines",
    type: "Website",
    value: "futabus.vn",
    url: "https://futabus.vn/"
  }, {
    label: "VeXeRe",
    type: "Booking",
    value: "vexere.com",
    url: "https://vexere.com/"
  }, {
    label: "Kumho Samco search",
    type: "Map",
    value: "Kumho Samco",
    url: mapSearch("Kumho Samco Mui Ne bus")
  }, {
    label: "Hanh Cafe search",
    type: "Map",
    value: "Hanh Cafe",
    url: mapSearch("Hanh Cafe Mui Ne bus")
  }],
  websiteUrl: "https://futabus.vn/",
  bookingUrl: "https://vexere.com/",
  mapUrl: mapSearch("Mui Ne bus limousine pickup Pham Ngu Lao"),
  tags: ["budget", "coach", "limousine", "transfer"],
  confidence: "source-note"
}, {
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
}, {
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
}, {
  id: "taxi-app-around-sgn",
  title: "Taxi/app around Tan Son Nhat Airport",
  categories: ["Move"],
  shortDescription: "Traditional taxi and ride-hailing options for short airport-city movement.",
  notes: "Vinasun, Mai Linh, Green SM, Grab, and Be are mentioned in the source notes. Traditional taxi and app pickup zones are separated.",
  recommendedFor: "Showing fare before ride and moving between airport/city pickup points",
  mapUrl: mapSearch("Tan Son Nhat airport taxi pickup Grab Be Green SM"),
  tags: ["taxi", "airport", "Grab", "Green SM", "Vinasun", "Mai Linh"],
  confidence: "source-note"
}, {
  id: "sasco-luggage-storage",
  title: "SASCO luggage storage at Tan Son Nhat",
  categories: ["Shop", "Move"],
  shortDescription: "Useful if returning to SGN early and needing to store bags before a late flight.",
  area: "International arrival terminal, ground floor, columns 13-14",
  hours: "7:00-23:00",
  price: "27,500 VND/item/hour under 10 hours; 275,000 VND/item for 10-24 hours; 275,000 VND/day/item after that",
  caution: "Maximum 48 hours; does not accept dangerous goods, high-value items, or important documents.",
  contacts: [{
    label: "SASCO Travel",
    type: "Website",
    value: "sascotravel.vn",
    url: "http://www.sascotravel.vn/"
  }],
  websiteUrl: "http://www.sascotravel.vn/",
  mapUrl: mapSearch("SASCO luggage storage Tan Son Nhat international arrival"),
  tags: ["luggage", "airport", "storage"],
  confidence: "source-note"
}, {
  id: "sim-esim-options",
  title: "SIM/eSIM options",
  categories: ["Shop"],
  shortDescription: "Connectivity options for arrival; Viettel is recommended in the notes for stable coverage.",
  price: "Packages change quickly; verify live pricing before trip",
  recommendedFor: "Short trip where eSIM before arrival saves time",
  caution: "MobiFone traveller eSIM and VinaPhone Tourist SIM details need current confirmation.",
  notes: "Source notes mention Viettel, MobiFone traveller eSIM, and an older VinaPhone Tourist SIM at 199,000 VND / 15 days.",
  contacts: [{
    label: "Viettel tourist SIM/eSIM search",
    type: "Map",
    value: "Viettel tourist SIM eSIM",
    url: mapSearch("Viettel tourist SIM eSIM Vietnam")
  }, {
    label: "MobiFone traveller eSIM search",
    type: "Map",
    value: "MobiFone traveller eSIM",
    url: mapSearch("MobiFone traveller eSIM")
  }, {
    label: "VinaPhone Tourist SIM search",
    type: "Map",
    value: "VinaPhone Tourist SIM",
    url: mapSearch("VinaPhone Tourist SIM")
  }],
  mapUrl: mapSearch("SIM eSIM Tan Son Nhat Airport"),
  tags: ["SIM", "eSIM", "Viettel", "MobiFone", "VinaPhone", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
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
}, {
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
}, {
  id: "landmark-81-dinner",
  title: "Dinner at Landmark 81",
  categories: ["Dining", "Night", "Free"],
  shortDescription: "Must-do HCMC dinner stop inside Landmark 81 / Vincom Center Landmark 81.",
  area: "Binh Thanh, Ho Chi Minh City",
  recommendedFor: "First-night dinner, city view, easy ride-hailing pickup",
  price: "Variable by restaurant; reserve ahead for skyline-view dining",
  caution: "Choose and reserve the restaurant before the trip, especially for a group dinner.",
  contacts: [{
    label: "Map",
    type: "Map",
    value: "Landmark 81",
    url: mapSearch("Landmark 81 restaurants dinner")
  }],
  mapUrl: mapSearch("Landmark 81 restaurants dinner"),
  tags: ["HCMC", "Landmark 81", "dinner", "night view", "must-do"],
  confidence: "source-note"
}, {
  id: "ha-phuong-hotel",
  title: "Ha Phuong Hotel Mui Ne",
  categories: ["Rest", "Jeep", "Bike", "Dining"],
  shortDescription: "Budget-friendly option with jeep tour, motorbike rental, and restaurant/cafe services mentioned in source notes.",
  area: "Ham Tien",
  recommendedFor: "Budget stay, many tours, easy services",
  contacts: [{
    label: "Phone",
    type: "Phone",
    value: "0335 164 866",
    url: "tel:0335164866"
  }, {
    label: "Map",
    type: "Map",
    value: "Ha Phuong Hotel Mui Ne",
    url: mapSearch("Ha Phuong Hotel Mui Ne")
  }],
  mapUrl: mapSearch("Ha Phuong Hotel Mui Ne"),
  tags: ["budget", "recommended", "jeep", "bike"],
  confidence: "needs-confirmation"
}, {
  id: "sai-gon-mui-ne-resort",
  title: "Sai Gon Mui Ne Resort",
  categories: ["Rest", "Dining", "Beach"],
  shortDescription: "Central resort option good for convenient food/activity access.",
  area: "Nguyen Dinh Chieu central area",
  recommendedFor: "Mid-range resort, central location",
  contacts: [{
    label: "Website",
    type: "Website",
    value: "saigonmuineresort.com",
    url: "https://saigonmuineresort.com/"
  }, {
    label: "Phone",
    type: "Phone",
    value: "0941 145 544",
    url: "tel:0941145544"
  }],
  websiteUrl: "https://saigonmuineresort.com/",
  mapUrl: mapSearch("Sai Gon Mui Ne Resort"),
  tags: ["central", "mid-range", "resort"],
  confidence: "verified"
}, {
  id: "bamboo-village",
  title: "Bamboo Village Beach Resort & Spa",
  categories: ["Rest", "Dining", "Beach"],
  shortDescription: "Garden-focused 4-star beach resort, suitable for balanced relaxation.",
  address: "38 Nguyen Dinh Chieu",
  recommendedFor: "Couples, quiet resort stay",
  contacts: [{
    label: "Phone",
    type: "Phone",
    value: "+84 252 3847 007",
    url: "tel:+842523847007"
  }, {
    label: "Phone",
    type: "Phone",
    value: "+84 918 891 628",
    url: "tel:+84918891628"
  }, {
    label: "Map",
    type: "Map",
    value: "Bamboo Village Beach Resort & Spa",
    url: mapSearch("Bamboo Village Beach Resort & Spa Mui Ne")
  }],
  mapUrl: mapSearch("Bamboo Village Beach Resort & Spa Mui Ne"),
  tags: ["couples", "resort", "garden", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "sailing-club-resort",
  title: "Sailing Club Resort Mui Ne",
  categories: ["Rest", "Dining", "Beach"],
  shortDescription: "Boutique beachfront resort with Sandals restaurant, spa, pool, beach and kite school.",
  address: "24 Nguyen Dinh Chieu, Ham Tien, Phan Thiet",
  recommendedFor: "Boutique resort, food, kitesurf, couples/solo",
  contacts: [{
    label: "Website",
    type: "Website",
    value: "sailingclubmuine.com",
    url: "https://www.sailingclubmuine.com/"
  }, {
    label: "Phone",
    type: "Phone",
    value: "+84 252 3847 440",
    url: "tel:+842523847440"
  }, {
    label: "Email",
    type: "Email",
    value: "info@sailingclubmuine.com",
    url: "mailto:info@sailingclubmuine.com"
  }],
  websiteUrl: "https://www.sailingclubmuine.com/",
  mapUrl: mapSearch("Sailing Club Resort Mui Ne"),
  tags: ["boutique", "recommended", "kitesurf", "dining"],
  confidence: "verified"
}, {
  id: "pandanus-resort",
  title: "Pandanus Resort",
  categories: ["Rest", "Dining", "Beach"],
  shortDescription: "Large resort grounds closer to the dunes and fishing village.",
  address: "3 Nguyen Huu Tho, Mui Ne",
  recommendedFor: "Family, large resort grounds, closer to dunes/fishing village",
  contacts: [{
    label: "Website",
    type: "Website",
    value: "pandanusresort.com",
    url: "https://www.pandanusresort.com/"
  }, {
    label: "Phone",
    type: "Phone",
    value: "+84 252 3849 849",
    url: "tel:+842523849849"
  }, {
    label: "Email",
    type: "Email",
    value: "pandanus@pandanusresort.com",
    url: "mailto:pandanus@pandanusresort.com"
  }],
  websiteUrl: "https://www.pandanusresort.com/",
  mapUrl: mapSearch("Pandanus Resort Mui Ne"),
  tags: ["family", "resort", "dunes"],
  confidence: "verified"
}, {
  id: "centara-mirage",
  title: "Centara Mirage Resort Mui Ne",
  categories: ["Rest", "Beach"],
  shortDescription: "Family-oriented resort with water play areas and villas.",
  area: "Huynh Thuc Khang",
  recommendedFor: "Families with kids",
  contacts: [{
    label: "Phone",
    type: "Phone",
    value: "(+84)2522222202",
    url: "tel:+842522222202"
  }, {
    label: "Map",
    type: "Map",
    value: "Centara Mirage Resort Mui Ne",
    url: mapSearch("Centara Mirage Resort Mui Ne")
  }],
  mapUrl: mapSearch("Centara Mirage Resort Mui Ne"),
  tags: ["family", "kids", "resort", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "the-anam-mui-ne",
  title: "The Anam Mui Ne",
  categories: ["Rest", "Dining", "Beach"],
  shortDescription: "High-end Indochine-style resort with 127 rooms/suites.",
  address: "18 Nguyen Dinh Chieu",
  recommendedFor: "Luxury, couples, high-end resort stay",
  contacts: [{
    label: "Phone",
    type: "Phone",
    value: "+84 252 628 4868",
    url: "tel:+842526284868"
  }, {
    label: "Map",
    type: "Map",
    value: "The Anam Mui Ne",
    url: mapSearch("The Anam Mui Ne")
  }],
  mapUrl: mapSearch("The Anam Mui Ne"),
  tags: ["luxury", "couples", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "anantara-mui-ne",
  title: "Anantara Mui Ne Resort",
  categories: ["Rest", "Dining", "Beach"],
  shortDescription: "Luxury resort that can arrange transfers/activities through concierge.",
  address: "12A Nguyen Dinh Chieu",
  recommendedFor: "Luxury resort, longer rest stay",
  contacts: [{
    label: "Website",
    type: "Website",
    value: "anantara.com/en/mui-ne",
    url: "https://www.anantara.com/en/mui-ne"
  }, {
    label: "Phone",
    type: "Phone",
    value: "+84 252 374 1888",
    url: "tel:+842523741888"
  }, {
    label: "Email",
    type: "Email",
    value: "muine@anantara.com",
    url: "mailto:muine@anantara.com"
  }],
  websiteUrl: "https://www.anantara.com/en/mui-ne",
  mapUrl: mapSearch("Anantara Mui Ne Resort"),
  tags: ["luxury", "concierge", "resort"],
  confidence: "verified"
}, {
  id: "sea-links-city-4pn-villa",
  title: "Sea Links City 4-bedroom villa",
  categories: ["Rest", "Beach", "Free"],
  shortDescription: "Whole 4-bedroom villa inside Sea Links City with kitchen, BBQ setup, living space, and resort access.",
  area: "Sea Links City, Phu Hai / Mui Ne",
  address: "Km9 Nguyen Thong, Phan Thiet",
  price: "Approximately 9,900,000 VND for 4 nights; confirm exact October rate before deposit",
  recommendedFor: "Group of around 8 guests wanting a villa, kitchen, BBQ, and resort-style base",
  caution: "4-bedroom details and noise policy come mainly from agent sources; confirm exact villa code and house rules in writing.",
  contacts: [{
    label: "Agent / Zalo",
    type: "Zalo",
    value: "0936666633",
    url: "tel:0936666633"
  }, {
    label: "Sea Links villa hotline",
    type: "Phone",
    value: "0931533376",
    url: "tel:0931533376"
  }, {
    label: "Phan Thiet office",
    type: "Phone",
    value: "+84 252 353 0088",
    url: "tel:+842523530088"
  }, {
    label: "Sea Links City",
    type: "Website",
    value: "sealinkscity.com",
    url: "https://www.sealinkscity.com/"
  }, {
    label: "VillaPhanThiet 4PN listing",
    type: "Booking",
    value: "villaphanthiet.com",
    url: "https://villaphanthiet.com/biet-thu-villa-sealinks-city-mui-ne-resort-4-phong-ngu/"
  }],
  websiteUrl: "https://www.sealinkscity.com/",
  bookingUrl: "https://villaphanthiet.com/biet-thu-villa-sealinks-city-mui-ne-resort-4-phong-ngu/",
  mapUrl: mapSearch("Sea Links City Km9 Nguyen Thong Mui Ne Phan Thiet"),
  notes: "The notes describe standard capacity around 8 guests, with extra-person charges from guest 9 and possible additional guests subject to confirmation.",
  tags: ["villa", "4 bedrooms", "BBQ", "group", "Sea Links", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "sunrise-villa-10-sea-links",
  title: "Sunrise Villa 10 at Sea Links City",
  categories: ["Rest", "Beach", "Free"],
  shortDescription: "Named 4-bedroom Sea Links villa with 2 living rooms, kitchen, bar counter, pool/resort facilities nearby.",
  area: "Sea Links City, Mui Ne",
  address: "Sea Links City, Km9 Nguyen Thong, Phan Thiet",
  price: "Ask direct for October 13-17 dates; public notes do not list a fixed rate",
  recommendedFor: "Group that wants a named 4-bedroom villa with clearer capacity notes",
  caution: "Noise rules and event/BBQ limits need written confirmation before paying a deposit.",
  contacts: [{
    label: "Agent / Zalo",
    type: "Zalo",
    value: "0936666633",
    url: "tel:0936666633"
  }, {
    label: "Sea Links villa hotline",
    type: "Phone",
    value: "0931533376",
    url: "tel:0931533376"
  }, {
    label: "ThueVilla listing",
    type: "Booking",
    value: "thuevilla.com",
    url: "https://thuevilla.com/sunrise-villa-10-sealink-city-phan-thiet-3-phong-ngu/"
  }],
  bookingUrl: "https://thuevilla.com/sunrise-villa-10-sealink-city-phan-thiet-3-phong-ngu/",
  mapUrl: mapSearch("Sunrise Villa 10 Sea Links City Mui Ne"),
  notes: "Notes list standard capacity as 8 adults plus 2 children, with possible maximum around 14 guests subject to surcharge.",
  tags: ["villa", "4 bedrooms", "bar", "group", "Sea Links", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "sea-links-5pn-villas",
  title: "Sea Links 5-bedroom villas PE97 / PE107 / S34 / S35",
  categories: ["Rest", "Beach", "Free"],
  shortDescription: "Larger Sea Links villa options with 5 bedrooms, useful when the group wants more privacy and space.",
  area: "Sea Links City, Mui Ne",
  address: "Sea Links City, Km9 Nguyen Thong, Phan Thiet",
  price: "Approximately 16,000,000-20,000,000 VND for 4 nights based on 4,000,000-5,000,000 VND/night agent pricing",
  recommendedFor: "Group of 8 wanting extra bedrooms, privacy, and a more comfortable villa layout",
  caution: "Public notes do not show clear quiet-hours rules; ask each exact villa code for house rules, beach distance, and guest cap.",
  contacts: [{
    label: "Agent / Zalo",
    type: "Zalo",
    value: "0936666633",
    url: "tel:0936666633"
  }, {
    label: "Sea Links villa hotline",
    type: "Phone",
    value: "0931533376",
    url: "tel:0931533376"
  }, {
    label: "VillaPhanThiet 5PN listing",
    type: "Booking",
    value: "villaphanthiet.com",
    url: "https://villaphanthiet.com/biet-thu-sea-links-villa-mui-ne-cho-thue-5-phong-ngu-moi-dep-gan-bien-gia-re/"
  }],
  bookingUrl: "https://villaphanthiet.com/biet-thu-sea-links-villa-mui-ne-cho-thue-5-phong-ngu-moi-dep-gan-bien-gia-re/",
  mapUrl: mapSearch("Sea Links City 5 bedroom villa Mui Ne PE97 PE107 S34 S35"),
  notes: "The source notes mention PE97, PE107, S34, and S35. Confirm which exact unit is available before booking.",
  tags: ["villa", "5 bedrooms", "group", "privacy", "Sea Links", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "mui-ne-17pn-private-pool-villa",
  title: "Mui Ne 17-bedroom private-pool villa",
  categories: ["Rest", "Beach", "Free"],
  shortDescription: "Very large near-beach villa with private pool, best treated as a backup for a much larger group or maximum privacy.",
  area: "Mui Ne / Phan Thiet",
  price: "Ask direct; public notes did not expose a reliable price",
  recommendedFor: "Only if privacy, event-style space, or very large capacity matters more than booking certainty",
  caution: "Exact address, map pin, noise policy, and price were not confirmed in the notes; lower-confidence option.",
  contacts: [{
    label: "Agent / Zalo",
    type: "Zalo",
    value: "0936666633",
    url: "tel:0936666633"
  }, {
    label: "VillaPhanThiet",
    type: "Website",
    value: "villaphanthiet.com",
    url: "https://villaphanthiet.com/"
  }],
  websiteUrl: "https://villaphanthiet.com/",
  mapUrl: mapSearch("Mui Ne 17 bedroom villa private pool near beach"),
  notes: "The notes estimate capacity around 40-50 guests. This is far larger than needed for 8 people.",
  tags: ["villa", "17 bedrooms", "private pool", "large group", "low confidence"],
  confidence: "needs-confirmation"
}, {
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
}, {
  id: "atv-bau-trang",
  title: "ATV at Bau Trang / White Sand Dunes",
  categories: ["ATV", "Jeep"],
  shortDescription: "Optional add-on at White Sand Dunes during the jeep tour.",
  hours: "Early morning",
  caution: "Source notes do not have a reliable official price for Oct 2026; confirm on site or through jeep provider.",
  mapUrl: mapSearch("ATV Bau Trang White Sand Dunes Mui Ne"),
  tags: ["ATV", "dunes", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
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
}, {
  id: "kitesurf-water-sports",
  title: "Kitesurf / windsurf / water sports",
  categories: ["Beach"],
  shortDescription: "Mui Ne is known for kitesurf/windsurf; beginners should book lessons instead of free-renting gear.",
  recommendedFor: "Oct 15 activity if weather is good",
  contacts: [{
    label: "Sailing Club Resort",
    type: "Website",
    value: "sailingclubmuine.com",
    url: "https://www.sailingclubmuine.com/"
  }, {
    label: "C2Sky search",
    type: "Map",
    value: "C2Sky Kite Center",
    url: mapSearch("C2Sky Kite Center Mui Ne")
  }, {
    label: "Jibe's search",
    type: "Map",
    value: "Jibe's Beach Club",
    url: mapSearch("Jibe's Beach Club Mui Ne")
  }],
  mapUrl: mapSearch("Mui Ne kitesurf windsurf school"),
  tags: ["weather", "kitesurf", "lesson", "water sports"],
  confidence: "needs-confirmation"
}, {
  id: "vinh-hy-day-trip",
  title: "Vinh Hy Bay snorkeling & fishing day trip",
  categories: ["Beach", "Move", "Free"],
  shortDescription: "Optional sea day trip outside Mui Ne.",
  recommendedFor: "Full day trip on Oct 16 if weather is good",
  caution: "This is not a short Mui Ne boat ride; it is a proper day trip with hotel pickup.",
  contacts: [{
    label: "Klook search",
    type: "Booking",
    value: "Klook Vinh Hy Bay",
    url: mapSearch("Klook Vinh Hy Bay tour")
  }, {
    label: "GetYourGuide search",
    type: "Booking",
    value: "GetYourGuide Vinh Hy Bay",
    url: mapSearch("GetYourGuide Vinh Hy Bay tour")
  }],
  mapUrl: mapSearch("Vinh Hy Bay snorkeling fishing tour from Mui Ne"),
  tags: ["weather backup", "day trip", "snorkeling", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "fishing-village",
  title: "Mui Ne Fishing Village",
  categories: ["Food", "Beach", "Free"],
  shortDescription: "Local experience with fishing boats, basket boats, seafood, and coastal life.",
  recommendedFor: "Photos, local atmosphere, morning visit",
  notes: "Local atmosphere and seafood area; not tied to one restaurant.",
  mapUrl: mapSearch("Mui Ne Fishing Village"),
  tags: ["local", "seafood", "photos", "morning"],
  confidence: "source-note"
}, {
  id: "fairy-stream",
  title: "Fairy Stream",
  categories: ["Beach", "Free"],
  shortDescription: "Common stop on jeep tour and easy sightseeing point.",
  mapUrl: mapSearch("Fairy Stream Mui Ne"),
  tags: ["sightseeing", "jeep tour"],
  confidence: "source-note"
}, {
  id: "white-sand-dunes",
  title: "White Sand Dunes / Bau Trang",
  categories: ["Jeep", "ATV", "Beach"],
  shortDescription: "Main sand-dune destination, best at sunrise/early morning.",
  mapUrl: mapSearch("White Sand Dunes Bau Trang Mui Ne"),
  tags: ["sunrise", "dunes", "ATV", "must-do"],
  confidence: "source-note"
}, {
  id: "red-sand-dunes",
  title: "Red Sand Dunes",
  categories: ["Jeep", "Beach"],
  shortDescription: "Common jeep tour stop, good for photos.",
  mapUrl: mapSearch("Red Sand Dunes Mui Ne"),
  tags: ["dunes", "photos", "jeep tour"],
  confidence: "source-note"
}, {
  id: "sandals-restaurant",
  title: "Sandals Restaurant",
  categories: ["Dining", "Food", "Night"],
  shortDescription: "Resort restaurant with Vietnamese and Western cuisine; good safe dinner option.",
  area: "Inside Sailing Club Resort Mui Ne",
  recommendedFor: "Dinner after beach/rest day",
  contacts: [{
    label: "Sailing Club Resort",
    type: "Website",
    value: "sailingclubmuine.com",
    url: "https://www.sailingclubmuine.com/"
  }],
  websiteUrl: "https://www.sailingclubmuine.com/",
  mapUrl: mapSearch("Sandals Restaurant Sailing Club Resort Mui Ne"),
  tags: ["dinner", "safe option", "resort"],
  confidence: "source-note"
}, {
  id: "strawy-restaurant",
  title: "Strawy Restaurant",
  categories: ["Dining", "Food"],
  shortDescription: "Resort dining option from source notes.",
  area: "Inside Bamboo Village Beach Resort & Spa",
  mapUrl: mapSearch("Strawy Restaurant Bamboo Village Mui Ne"),
  tags: ["dining", "resort", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "jibes-beach-club",
  title: "Jibe's Beach Club",
  categories: ["Dining", "Food", "Beach", "Night"],
  shortDescription: "Beach club combining food/drinks with water sports atmosphere.",
  contacts: [{
    label: "Map",
    type: "Map",
    value: "Jibe's Beach Club Mui Ne",
    url: mapSearch("Jibe's Beach Club Mui Ne")
  }],
  mapUrl: mapSearch("Jibe's Beach Club Mui Ne"),
  tags: ["beach club", "night", "water sports", "needs confirmation"],
  confidence: "needs-confirmation"
}, {
  id: "fishing-village-seafood",
  title: "Seafood around Mui Ne Fishing Village",
  categories: ["Food", "Dining"],
  shortDescription: "Local seafood experience rather than one fixed restaurant.",
  recommendedFor: "Breakfast/lunch/light local seafood experience near fishing village",
  caution: "Choose clean/busy stalls and confirm price before ordering.",
  mapUrl: mapSearch("seafood Mui Ne Fishing Village"),
  tags: ["seafood", "local", "budget"],
  confidence: "source-note"
}];
const suggestedItinerary = [{
  day: "Tuesday",
  date: "Oct 13",
  time: "09:00",
  title: "Land at Tan Son Nhat from Thailand",
  categories: ["Move"],
  linkedItemIds: ["taxi-app-around-sgn"],
  notes: "Flight lands at 9:00 AM. Keep this hour for immigration, baggage, and meeting up."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "10:00",
  title: "SIM/eSIM, cash, Grab to HCMC hotel",
  categories: ["Shop", "Move"],
  linkedItemIds: ["sim-esim-options", "taxi-app-around-sgn"],
  notes: "Set up data, exchange a little cash if needed, then move lightly into the city."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "11:00",
  title: "HCMC hotel bag drop and rest",
  categories: ["Rest"],
  linkedItemIds: ["hcmc-arrival-hotel-rest"],
  notes: "Book early check-in or luggage storage so the first day stays easy."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "12:00",
  title: "District 1 lunch",
  categories: ["Food"],
  linkedItemIds: ["hcmc-district-1-walk"],
  notes: "Keep lunch near the hotel, Nguyen Hue, or Ben Thanh to avoid extra travel."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "13:00",
  title: "Ben Thanh Market / Nguyen Hue walk",
  categories: ["Shop", "Free"],
  linkedItemIds: ["hcmc-district-1-walk"],
  notes: "Light city walk and first photos. Shopping stays spontaneous."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "14:00",
  title: "Cafe Apartment / Post Office area",
  categories: ["Food", "Free"],
  linkedItemIds: ["hcmc-district-1-walk"],
  notes: "Soft sightseeing only; keep energy for the dinner requirement."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "15:00",
  title: "Hotel rest and freshen up",
  categories: ["Rest"],
  linkedItemIds: ["hcmc-arrival-hotel-rest"],
  notes: "Shower, recharge, and get ready for Landmark 81."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "16:00",
  title: "Ride to Landmark 81 / Vinhomes",
  categories: ["Move"],
  linkedItemIds: ["taxi-app-around-sgn"],
  notes: "Leave early enough for traffic and photo time."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "18:00",
  title: "Dinner at Landmark 81",
  categories: ["Dining", "Night"],
  linkedItemIds: ["landmark-81-dinner"],
  notes: "Must-have dinner. Reserve the restaurant before the trip."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "20:00",
  title: "Landmark 81 night view / riverside walk",
  categories: ["Night", "Free"],
  linkedItemIds: ["landmark-81-dinner"],
  notes: "Easy night photos before returning to the hotel."
}, {
  day: "Tuesday",
  date: "Oct 13",
  time: "21:00",
  title: "Return to HCMC hotel",
  categories: ["Move", "Rest"],
  linkedItemIds: ["taxi-app-around-sgn"],
  notes: "Sleep early for the Mui Ne transfer."
}, {
  day: "Wednesday",
  date: "Oct 14",
  time: "07:00",
  title: "Breakfast and check out from HCMC hotel",
  categories: ["Food", "Rest"],
  notes: "Have bags ready before the private car arrives."
}, {
  day: "Wednesday",
  date: "Oct 14",
  time: "08:00",
  title: "Private car from HCMC to Mui Ne",
  categories: ["Move"],
  linkedItemIds: ["private-car-sgn-mui-ne"],
  notes: "Door-to-door transfer keeps the group comfortable with luggage."
}, {
  day: "Wednesday",
  date: "Oct 14",
  time: "11:00",
  title: "Arrive Mui Ne / coffee and lunch buffer",
  categories: ["Food", "Move"],
  linkedItemIds: ["fishing-village-seafood"],
  notes: "Use this as traffic buffer if the drive runs long."
}, {
  day: "Wednesday",
  date: "Oct 14",
  time: "13:00",
  title: "Check in at Sea Links City 4PN villa",
  categories: ["Rest"],
  linkedItemIds: ["sea-links-city-4pn-villa"],
  notes: "Confirm villa code, deposit terms, guest count, BBQ, and quiet rules in writing."
}, {
  day: "Wednesday",
  date: "Oct 14",
  time: "15:00",
  title: "Villa pool / rest / BBQ setup",
  categories: ["Rest", "Free"],
  notes: "Keep the first Mui Ne afternoon soft after the road transfer."
}, {
  day: "Wednesday",
  date: "Oct 14",
  time: "16:00",
  title: "Nguyen Dinh Chieu beach or cafe",
  categories: ["Beach", "Free"],
  linkedItemIds: ["jibes-beach-club"],
  notes: "Short beach/cafe block before dinner."
}, {
  day: "Wednesday",
  date: "Oct 14",
  time: "18:00",
  title: "Seafood dinner near Fishing Village",
  categories: ["Dining", "Food"],
  linkedItemIds: ["fishing-village-seafood"],
  notes: "Confirm seafood prices before ordering."
}, {
  day: "Wednesday",
  date: "Oct 14",
  time: "20:00",
  title: "Free night at villa",
  categories: ["Free", "Night"],
  notes: "Relax, games, photos, or quiet villa time."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "07:00",
  title: "White Sand Dunes and ATV option",
  categories: ["ATV", "Jeep"],
  linkedItemIds: ["atv-bau-trang", "white-sand-dunes"],
  notes: "Start as early as the 7 AM planner allows; confirm ATV price on site."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "08:00",
  title: "Red Sand Dunes photo stop",
  categories: ["Jeep", "Beach"],
  linkedItemIds: ["red-sand-dunes"],
  notes: "Use the dedicated photographer note here for group and solo shots."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "09:00",
  title: "Fairy Stream",
  categories: ["Beach", "Free"],
  linkedItemIds: ["fairy-stream"],
  notes: "Easy walk; bring sandals that can get wet."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "10:00",
  title: "Mui Ne Fishing Village",
  categories: ["Food", "Beach"],
  linkedItemIds: ["fishing-village"],
  notes: "Photos, seafood market vibe, and coastal view."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "12:00",
  title: "Lunch near the coast",
  categories: ["Food"],
  linkedItemIds: ["fishing-village-seafood"],
  notes: "Keep it close to the villa route."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "13:00",
  title: "Villa rest / nap",
  categories: ["Rest"],
  notes: "Recovery block after the dunes route."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "15:00",
  title: "Beach club / cafe time",
  categories: ["Beach", "Free"],
  linkedItemIds: ["jibes-beach-club"],
  notes: "Keep flexible depending on heat and mood."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "17:00",
  title: "Sunset beach",
  categories: ["Beach"],
  linkedItemIds: ["sailing-club-resort"],
  notes: "Golden-hour photos and slow beach time."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "19:00",
  title: "Dinner at Sandals or Jibe's",
  categories: ["Dining", "Night"],
  linkedItemIds: ["sandals-restaurant", "jibes-beach-club"],
  notes: "Pick based on mood: nicer resort dinner or casual beach club."
}, {
  day: "Thursday",
  date: "Oct 15",
  time: "21:00",
  title: "Night walk / villa chill",
  categories: ["Night", "Free"],
  notes: "Low-pressure night after the activity day."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "08:00",
  title: "Breakfast and slow villa morning",
  categories: ["Food", "Rest"],
  notes: "No rush. This is the flexible Mui Ne day."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "09:00",
  title: "Motorbike rental or coastal cafe",
  categories: ["Bike", "Beach"],
  linkedItemIds: ["motorbike-rental"],
  notes: "Only ride if everyone is comfortable and properly licensed."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "10:00",
  title: "Explore Ham Tien coast / water sports",
  categories: ["Beach", "Free"],
  linkedItemIds: ["kitesurf-water-sports"],
  notes: "Choose beach, cafe, or water activity depending on weather."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "12:00",
  title: "Lunch near Ham Tien",
  categories: ["Food"],
  linkedItemIds: ["fishing-village-seafood"],
  notes: "Keep the location flexible; shopping is not fixed."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "14:00",
  title: "Cafe / spa / resort pool",
  categories: ["Free", "Rest"],
  linkedItemIds: ["jibes-beach-club"],
  notes: "Soft afternoon for people who want to rest or split into smaller groups."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "16:00",
  title: "Optional dunes revisit or beach photos",
  categories: ["ATV", "Beach"],
  linkedItemIds: ["red-sand-dunes", "atv-bau-trang"],
  notes: "Only repeat ATV/dunes if everyone wants more action."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "18:00",
  title: "Final Mui Ne seafood dinner",
  categories: ["Dining", "Food"],
  linkedItemIds: ["fishing-village-seafood"],
  notes: "Last beach-town dinner before checkout day."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "20:00",
  title: "Night market / beach walk / pack",
  categories: ["Night", "Shop"],
  notes: "Spontaneous shopping only. No fixed location."
}, {
  day: "Friday",
  date: "Oct 16",
  time: "21:00",
  title: "Villa chill and luggage prep",
  categories: ["Rest", "Free"],
  notes: "Pack enough so Saturday morning is calm."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "07:00",
  title: "Breakfast at villa",
  categories: ["Food", "Rest"],
  notes: "Easy final morning."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "08:00",
  title: "Final beach walk / photos",
  categories: ["Beach", "Free"],
  linkedItemIds: ["sailing-club-resort"],
  notes: "Last photo block before checkout."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "09:00",
  title: "Pack, villa check, settle deposit",
  categories: ["Rest"],
  linkedItemIds: ["sea-links-city-4pn-villa"],
  notes: "Check rooms, chargers, passports, and villa rules before leaving."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "10:00",
  title: "Check out / coffee buffer",
  categories: ["Food", "Move"],
  notes: "Use this hour for checkout delays or a nearby cafe."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "11:00",
  title: "Private car back to Ho Chi Minh City",
  categories: ["Move"],
  linkedItemIds: ["private-car-sgn-mui-ne"],
  notes: "Leave with a traffic buffer for airport or city plans."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "14:00",
  title: "Highway rest stop / snack break",
  categories: ["Food", "Move"],
  notes: "Short break only if needed."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "16:00",
  title: "Arrive HCMC / airport buffer",
  categories: ["Move", "Rest"],
  linkedItemIds: ["taxi-app-around-sgn"],
  notes: "Choose airport, hotel lobby, luggage storage, or final cafe depending on flight time."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "17:00",
  title: "SASCO luggage storage or final cafe",
  categories: ["Shop", "Free"],
  linkedItemIds: ["sasco-luggage-storage", "hcmc-district-1-walk"],
  notes: "Use luggage storage only if flight timing requires it."
}, {
  day: "Saturday",
  date: "Oct 17",
  time: "19:00",
  title: "Airport dinner / check-in buffer",
  categories: ["Dining", "Move"],
  linkedItemIds: ["sasco-luggage-storage"],
  notes: "Keep the evening flexible for the flight schedule."
}];
const {
  useEffect,
  useMemo,
  useRef,
  useState
} = React;
const STORAGE_KEY = "mui-ne-trip-planner-v4";
const CUSTOM_SLOTS_KEY = "mui-ne-trip-planner-custom-slots-v3";
const VIEWER_SUGGESTIONS_KEY = "mui-ne-trip-planner-viewer-suggestions-v1";
const LANGUAGE_KEY = "mui-ne-trip-planner-language";
const CURRENCY_KEY = "mui-ne-trip-planner-currency";
const SUPABASE_TABLE = "viewer_recommendations";
const DEFAULT_SUPABASE_CONFIG = {
  url: "https://ayqfhbzwnzyltxcauntc.supabase.co",
  publishableKey: "PASTE_YOUR_sb_publishable_KEY"
};
const LANGUAGE_OPTIONS = [{
  id: "en",
  label: "English"
}, {
  id: "vi",
  label: "Tiếng Việt"
}, {
  id: "th",
  label: "ไทย"
}];
const CURRENCY_OPTIONS = [{
  id: "VND",
  label: "VND"
}, {
  id: "THB",
  label: "THB"
}, {
  id: "USD",
  label: "USD"
}];
const CURRENCY_TO_VND = {
  VND: 1,
  THB: 800,
  USD: 25000
};
const LOCALES = {
  en: "en-US",
  vi: "vi-VN",
  th: "th-TH"
};
const UI_TEXT = {
  en: {
    title: "Mui Ne Trip Planner",
    place: "Mui Ne, Vietnam",
    dates: "October 13-17",
    reset: "Reset",
    exportJson: "Export PDF",
    print: "Print",
    itineraryActions: "Itinerary actions",
    itinerarySummary: "Itinerary summary",
    tripNotes: "Trip notes",
    photographerNote: "1 on 1 dedicated photographer for you guys",
    shoppingNote: "Shopping is spontaneous. No fixed location.",
    visualStory: "Visual story",
    visualHcmc: "Landmark 81 dinner",
    visualDunes: "Dunes & ATV",
    visualVilla: "Villa pool base",
    visualBeach: "Beach sunset",
    viewerSuggestions: "Viewer recommendations",
    viewerSuggestionsSubtitle: "Add custom places, food stops, cafes, photo spots, or edits that are not in the linked Library.",
    suggestionTitle: "Place or idea",
    suggestionPlaceholder: "Rooftop cafe, spa, seafood place...",
    suggestionCategory: "Category",
    suggestionLocation: "Location",
    suggestionLocationPlaceholder: "Area, address, or Google Maps hint",
    suggestionContact: "Contact / link",
    suggestionNotes: "Why add it?",
    suggestionNotesPlaceholder: "Short reason, vibe, price tip, or who recommended it",
    addSuggestion: "Add recommendation",
    noSuggestionsYet: "No custom recommendations yet",
    deleteSuggestion: "Delete recommendation",
    addToSlot: "Add to slot",
    suggestionAdded: "Recommendation added",
    suggestionDeleted: "Recommendation deleted",
    suggestionAddedToSlot: "Recommendation added to slot",
    suggestionShared: "Recommendation shared",
    suggestionSavedLocally: "Saved locally",
    sharedRecommendations: "Shared via Supabase",
    localRecommendations: "Local fallback",
    syncingRecommendations: "Syncing",
    savingRecommendation: "Saving",
    newAddition: "New addition",
    addedOn: "Added",
    foodSlots: "Food slots",
    transportSlots: "Transport slots",
    hotelSlots: "Hotel / rest slots",
    estimatedTotal: "Estimated total",
    plannerFilters: "Planner filters",
    quickCategoryFilters: "Quick category filters",
    searchPlaceholder: "Search activities, notes, links...",
    show: "Show",
    allCategories: "All categories",
    all: "All",
    language: "Language",
    currency: "Currency",
    rates: "1 THB = 800 VND | 1 USD = 25000 VND",
    viewMode: "View mode",
    grid: "Grid",
    list: "List",
    gridTitle: "Calendar grid view",
    listTitle: "Day-by-day list view",
    tripSchedule: "Trip schedule",
    noMatchingSlots: "No matching slots",
    addSlot: "Add slot",
    slotAdded: "Slot added",
    noMoreSlots: "No more slots available",
    openSlot: "Open slot",
    unplanned: "Unplanned",
    contact: "Contact",
    doubleClickHint: "Double-click to cycle category",
    category: "Category",
    activityName: "Activity name",
    location: "Location",
    estimatedCost: "Estimated cost",
    costPlaceholder: "500000 VND, 625 THB, or 20 USD",
    contactLink: "Contact / link",
    contactPlaceholder: "Facebook, website, phone, Google Maps",
    notes: "Notes",
    duplicateTo: "Duplicate to",
    duplicate: "Duplicate",
    clearSlot: "Clear slot",
    clearAll: "Clear all",
    cancel: "Cancel",
    saveChanges: "Save changes",
    close: "Close",
    slotSaved: "Slot saved",
    slotCleared: "Slot cleared",
    allSlotsCleared: "All slots cleared",
    activityDuplicated: "Activity duplicated",
    categoryChanged: "Category changed",
    activityMoved: "Activity moved",
    jsonExported: "PDF export opened",
    sampleRestored: "Sample itinerary restored",
    researchLibrary: "Library",
    researchSubtitle: "Transport, stay, food, and activity options from the Mui Ne notes",
    librarySearch: "Search research options, areas, prices, contacts...",
    topResearchSummary: "Research summary",
    bestTransport: "Best transport choice",
    bestArea: "Best area to stay",
    signatureActivity: "Signature activity",
    weatherAdvice: "Weather backup advice",
    quickDecision: "Quick decision",
    fastest: "Fastest",
    cheapest: "Cheapest",
    bestStayArea: "Best stay area",
    mustDo: "Must-do",
    flexibleDay: "Flexible day",
    price: "Price",
    travelTime: "Travel time",
    recommendedFor: "Recommended for",
    areaAddress: "Area / address",
    caution: "Caution",
    note: "Note",
    linkedOption: "Linked research option",
    noLinkedItem: "No linked option",
    autoFillFromResearch: "Choose an option to auto-fill this slot",
    linksMissing: "Links missing",
    developmentOnly: "development only",
    verified: "Verified",
    sourceNote: "Source note",
    needsConfirmation: "Needs confirmation",
    recommended: "Recommended",
    budget: "Budget",
    family: "Family",
    luxury: "Luxury",
    weatherBackup: "Weather backup"
  },
  vi: {
    title: "Lịch trình Mũi Né",
    place: "Mũi Né, Việt Nam",
    dates: "13-17 tháng 10",
    reset: "Đặt lại",
    exportJson: "Xuất PDF",
    print: "In",
    itineraryActions: "Thao tác lịch trình",
    itinerarySummary: "Tóm tắt lịch trình",
    tripNotes: "Ghi chú chuyến đi",
    photographerNote: "Mỗi bé cử anh chụp 1 kèm 1 khỏi lo thiếu hình",
    shoppingNote: "Mua sắm tùy hứng. Không cố định địa điểm.",
    visualStory: "Điểm nhấn hình ảnh",
    visualHcmc: "Ăn tối Landmark 81",
    visualDunes: "Đồi cát & ATV",
    visualVilla: "Villa hồ bơi",
    visualBeach: "Hoàng hôn biển",
    viewerSuggestions: "Gợi ý của mọi người",
    viewerSuggestionsSubtitle: "Thêm địa điểm, món ăn, quán cafe, chỗ chụp hình hoặc chỉnh sửa riêng ngoài Thư viện liên kết.",
    suggestionTitle: "Địa điểm hoặc ý tưởng",
    suggestionPlaceholder: "Cafe rooftop, spa, quán hải sản...",
    suggestionCategory: "Loại",
    suggestionLocation: "Vị trí",
    suggestionLocationPlaceholder: "Khu vực, địa chỉ hoặc gợi ý Google Maps",
    suggestionContact: "Liên hệ / link",
    suggestionNotes: "Lý do thêm",
    suggestionNotesPlaceholder: "Lý do ngắn, vibe, mẹo giá hoặc ai gợi ý",
    addSuggestion: "Thêm gợi ý",
    noSuggestionsYet: "Chưa có gợi ý riêng",
    deleteSuggestion: "Xóa gợi ý",
    addToSlot: "Thêm vào khung",
    suggestionAdded: "Đã thêm gợi ý",
    suggestionDeleted: "Đã xóa gợi ý",
    suggestionAddedToSlot: "Đã thêm gợi ý vào khung",
    suggestionShared: "Đã chia sẻ gợi ý",
    suggestionSavedLocally: "Đã lưu cục bộ",
    sharedRecommendations: "Đồng bộ Supabase",
    localRecommendations: "Dự phòng cục bộ",
    syncingRecommendations: "Đang đồng bộ",
    savingRecommendation: "Đang lưu",
    newAddition: "Mới thêm",
    addedOn: "Đã thêm",
    foodSlots: "Khung ăn uống",
    transportSlots: "Khung di chuyển",
    hotelSlots: "Khách sạn / nghỉ",
    estimatedTotal: "Tổng ước tính",
    plannerFilters: "Bộ lọc kế hoạch",
    quickCategoryFilters: "Lọc nhanh theo loại",
    searchPlaceholder: "Tìm hoạt động, ghi chú, liên kết...",
    show: "Hiển thị",
    allCategories: "Tất cả loại",
    all: "Tất cả",
    language: "Ngôn ngữ",
    currency: "Tiền tệ",
    rates: "1 THB = 800 VND | 1 USD = 25000 VND",
    viewMode: "Kiểu xem",
    grid: "Lưới",
    list: "Danh sách",
    gridTitle: "Xem dạng lịch",
    listTitle: "Xem từng ngày",
    tripSchedule: "Lịch trình chuyến đi",
    noMatchingSlots: "Không có khung phù hợp",
    addSlot: "Th\u00eam khung",
    slotAdded: "\u0110\u00e3 th\u00eam khung",
    noMoreSlots: "Kh\u00f4ng c\u00f2n khung tr\u1ed1ng",
    openSlot: "Khung trống",
    unplanned: "Chưa lên kế hoạch",
    contact: "Liên hệ",
    doubleClickHint: "Nhấp đúp để đổi loại",
    category: "Loại",
    activityName: "Tên hoạt động",
    location: "Địa điểm",
    estimatedCost: "Chi phí ước tính",
    costPlaceholder: "500000 VND, 625 THB, hoặc 20 USD",
    contactLink: "Liên hệ / liên kết",
    contactPlaceholder: "Facebook, website, điện thoại, Google Maps",
    notes: "Ghi chú",
    duplicateTo: "Sao chép đến",
    duplicate: "Sao chép",
    clearSlot: "Xóa khung",
    clearAll: "X\u00f3a t\u1ea5t c\u1ea3",
    cancel: "Hủy",
    saveChanges: "Lưu thay đổi",
    close: "Đóng",
    slotSaved: "Đã lưu khung",
    slotCleared: "Đã xóa khung",
    allSlotsCleared: "\u0110\u00e3 x\u00f3a t\u1ea5t c\u1ea3 khung",
    activityDuplicated: "Đã sao chép hoạt động",
    categoryChanged: "Đã đổi loại",
    activityMoved: "Đã chuyển hoạt động",
    jsonExported: "Đã mở bản xuất PDF",
    sampleRestored: "Đã khôi phục lịch mẫu",
    researchLibrary: "Th\u01b0 vi\u1ec7n",
    researchSubtitle: "Các lựa chọn di chuyển, lưu trú, ăn uống và hoạt động từ ghi chú Mũi Né",
    librarySearch: "Tìm lựa chọn, khu vực, giá, liên hệ...",
    topResearchSummary: "Tóm tắt nghiên cứu",
    bestTransport: "Di chuyển tốt nhất",
    bestArea: "Khu nên ở",
    signatureActivity: "Hoạt động nổi bật",
    weatherAdvice: "Dự phòng thời tiết",
    quickDecision: "Quyết định nhanh",
    fastest: "Nhanh nhất",
    cheapest: "Rẻ nhất",
    bestStayArea: "Khu ở tốt nhất",
    mustDo: "Nên làm",
    flexibleDay: "Ngày linh hoạt",
    price: "Giá",
    travelTime: "Thời gian di chuyển",
    recommendedFor: "Phù hợp cho",
    areaAddress: "Khu vực / địa chỉ",
    caution: "Lưu ý",
    note: "Ghi chú",
    linkedOption: "Lựa chọn liên kết",
    noLinkedItem: "Chưa liên kết",
    autoFillFromResearch: "Chọn một mục để tự điền khung này",
    linksMissing: "Thiếu liên kết",
    developmentOnly: "chỉ khi phát triển",
    verified: "Đã xác minh",
    sourceNote: "Theo ghi chú nguồn",
    needsConfirmation: "Cần xác nhận",
    recommended: "Đề xuất",
    budget: "Tiết kiệm",
    family: "Gia đình",
    luxury: "Cao cấp",
    weatherBackup: "Dự phòng thời tiết"
  },
  th: {
    title: "แผนเที่ยวมุยเน่",
    place: "มุยเน่, เวียดนาม",
    dates: "13-17 ต.ค.",
    reset: "รีเซ็ต",
    exportJson: "ส่งออก PDF",
    print: "พิมพ์",
    itineraryActions: "การจัดการแผน",
    itinerarySummary: "สรุปแผน",
    tripNotes: "หมายเหตุทริป",
    photographerNote: "มีพี่ช่างภาพดูแลแบบ 1 ต่อ 1 ไม่ต้องกลัวรูปไม่พอ",
    shoppingNote: "ช้อปปิ้งตามอารมณ์ ไม่มีสถานที่ตายตัว",
    visualStory: "ภาพไฮไลต์ทริป",
    visualHcmc: "ดินเนอร์ Landmark 81",
    visualDunes: "เนินทราย & ATV",
    visualVilla: "วิลล่าพร้อมสระ",
    visualBeach: "พระอาทิตย์ตกริมทะเล",
    viewerSuggestions: "คำแนะนำจากเพื่อนๆ",
    viewerSuggestionsSubtitle: "เพิ่มสถานที่ ร้านอาหาร คาเฟ่ จุดถ่ายรูป หรือไอเดียเองนอกเหนือจาก Library ที่ลิงก์ไว้",
    suggestionTitle: "สถานที่หรือไอเดีย",
    suggestionPlaceholder: "คาเฟ่รูฟท็อป สปา ร้านซีฟู้ด...",
    suggestionCategory: "หมวดหมู่",
    suggestionLocation: "ตำแหน่ง",
    suggestionLocationPlaceholder: "ย่าน ที่อยู่ หรือคำค้นหา Google Maps",
    suggestionContact: "ติดต่อ / ลิงก์",
    suggestionNotes: "เหตุผลที่อยากเพิ่ม",
    suggestionNotesPlaceholder: "เหตุผลสั้นๆ บรรยากาศ ราคา หรือใครแนะนำ",
    addSuggestion: "เพิ่มคำแนะนำ",
    noSuggestionsYet: "ยังไม่มีคำแนะนำเอง",
    deleteSuggestion: "ลบคำแนะนำ",
    addToSlot: "เพิ่มลงช่วงเวลา",
    suggestionAdded: "เพิ่มคำแนะนำแล้ว",
    suggestionDeleted: "ลบคำแนะนำแล้ว",
    suggestionAddedToSlot: "เพิ่มคำแนะนำลงช่วงเวลาแล้ว",
    suggestionShared: "แชร์คำแนะนำแล้ว",
    suggestionSavedLocally: "บันทึกในเครื่องแล้ว",
    sharedRecommendations: "ซิงก์ Supabase",
    localRecommendations: "สำรองในเครื่อง",
    syncingRecommendations: "กำลังซิงก์",
    savingRecommendation: "กำลังบันทึก",
    newAddition: "เพิ่มใหม่",
    addedOn: "เพิ่มเมื่อ",
    foodSlots: "ช่วงอาหาร",
    transportSlots: "ช่วงเดินทาง",
    hotelSlots: "โรงแรม / พัก",
    estimatedTotal: "ยอดประมาณการ",
    plannerFilters: "ตัวกรองแผน",
    quickCategoryFilters: "ตัวกรองหมวดหมู่",
    searchPlaceholder: "ค้นหากิจกรรม โน้ต หรือลิงก์...",
    show: "แสดง",
    allCategories: "ทุกหมวดหมู่",
    all: "ทั้งหมด",
    language: "ภาษา",
    currency: "สกุลเงิน",
    rates: "1 THB = 800 VND | 1 USD = 25000 VND",
    viewMode: "มุมมอง",
    grid: "ตาราง",
    list: "รายการ",
    gridTitle: "มุมมองปฏิทิน",
    listTitle: "มุมมองรายวัน",
    tripSchedule: "ตารางทริป",
    noMatchingSlots: "ไม่พบช่วงเวลาที่ตรงกัน",
    addSlot: "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32",
    slotAdded: "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e41\u0e25\u0e49\u0e27",
    noMoreSlots: "\u0e44\u0e21\u0e48\u0e21\u0e35\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21",
    openSlot: "ช่วงว่าง",
    unplanned: "ยังไม่วางแผน",
    contact: "ติดต่อ",
    doubleClickHint: "ดับเบิลคลิกเพื่อเปลี่ยนหมวด",
    category: "หมวดหมู่",
    activityName: "ชื่อกิจกรรม",
    location: "สถานที่",
    estimatedCost: "ค่าใช้จ่ายประมาณการ",
    costPlaceholder: "500000 VND, 625 THB หรือ 20 USD",
    contactLink: "ติดต่อ / ลิงก์",
    contactPlaceholder: "Facebook, เว็บไซต์, โทรศัพท์, Google Maps",
    notes: "โน้ต",
    duplicateTo: "คัดลอกไปที่",
    duplicate: "คัดลอก",
    clearSlot: "ล้างช่วงเวลา",
    clearAll: "\u0e25\u0e49\u0e32\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
    cancel: "ยกเลิก",
    saveChanges: "บันทึก",
    close: "ปิด",
    slotSaved: "บันทึกแล้ว",
    slotCleared: "ล้างช่วงเวลาแล้ว",
    allSlotsCleared: "\u0e25\u0e49\u0e32\u0e07\u0e17\u0e38\u0e01\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e41\u0e25\u0e49\u0e27",
    activityDuplicated: "คัดลอกกิจกรรมแล้ว",
    categoryChanged: "เปลี่ยนหมวดแล้ว",
    activityMoved: "ย้ายกิจกรรมแล้ว",
    jsonExported: "เปิดหน้าส่งออก PDF แล้ว",
    sampleRestored: "คืนค่าแผนตัวอย่างแล้ว",
    researchLibrary: "\u0e04\u0e25\u0e31\u0e07",
    researchSubtitle: "ตัวเลือกการเดินทาง ที่พัก อาหาร และกิจกรรมจากโน้ตมุยเน่",
    librarySearch: "ค้นหาตัวเลือก พื้นที่ ราคา หรือข้อมูลติดต่อ...",
    topResearchSummary: "สรุปข้อมูล",
    bestTransport: "ตัวเลือกเดินทางที่ดีที่สุด",
    bestArea: "ย่านที่พักแนะนำ",
    signatureActivity: "กิจกรรมเด่น",
    weatherAdvice: "แผนสำรองสภาพอากาศ",
    quickDecision: "ตัดสินใจเร็ว",
    fastest: "เร็วที่สุด",
    cheapest: "ถูกที่สุด",
    bestStayArea: "ย่านที่พักดีที่สุด",
    mustDo: "ห้ามพลาด",
    flexibleDay: "วันยืดหยุ่น",
    price: "ราคา",
    travelTime: "เวลาเดินทาง",
    recommendedFor: "เหมาะสำหรับ",
    areaAddress: "พื้นที่ / ที่อยู่",
    caution: "คำเตือน",
    note: "โน้ต",
    linkedOption: "ตัวเลือกที่ลิงก์",
    noLinkedItem: "ยังไม่ได้ลิงก์",
    autoFillFromResearch: "เลือกตัวเลือกเพื่อเติมข้อมูลอัตโนมัติ",
    linksMissing: "ลิงก์ที่ขาด",
    developmentOnly: "เฉพาะตอนพัฒนา",
    verified: "ยืนยันแล้ว",
    sourceNote: "จากโน้ตต้นทาง",
    needsConfirmation: "ต้องยืนยัน",
    recommended: "แนะนำ",
    budget: "ประหยัด",
    family: "ครอบครัว",
    luxury: "หรูหรา",
    weatherBackup: "แผนสำรองอากาศ"
  }
};
const CATEGORY_TRANSLATIONS = {
  en: {
    food: {
      label: "Food",
      compact: "Food"
    },
    hotel: {
      label: "Rest",
      compact: "Rest"
    },
    restaurant: {
      label: "Dining",
      compact: "Dining"
    },
    transport: {
      label: "Move",
      compact: "Move"
    },
    jeep: {
      label: "Jeep",
      compact: "Jeep"
    },
    atv: {
      label: "ATV",
      compact: "ATV"
    },
    bike: {
      label: "Bike",
      compact: "Bike"
    },
    beach: {
      label: "Beach",
      compact: "Beach"
    },
    free: {
      label: "Free",
      compact: "Free"
    },
    shopping: {
      label: "Shop",
      compact: "Shop"
    },
    night: {
      label: "Night",
      compact: "Night"
    }
  },
  vi: {
    food: {
      label: "Ăn nhẹ",
      compact: "Ăn"
    },
    hotel: {
      label: "Khách sạn / nghỉ",
      compact: "Nghỉ"
    },
    restaurant: {
      label: "Nhà hàng",
      compact: "Nhà hàng"
    },
    transport: {
      label: "Di chuyển",
      compact: "Đi lại"
    },
    jeep: {
      label: "Tour jeep",
      compact: "Jeep"
    },
    atv: {
      label: "Thuê ATV",
      compact: "ATV"
    },
    bike: {
      label: "Thuê xe máy / xe đạp",
      compact: "Xe"
    },
    beach: {
      label: "Biển / tham quan",
      compact: "Biển"
    },
    free: {
      label: "Thời gian tự do",
      compact: "Tự do"
    },
    shopping: {
      label: "Mua sắm",
      compact: "Mua sắm"
    },
    night: {
      label: "Hoạt động đêm",
      compact: "Đêm"
    }
  },
  th: {
    food: {
      label: "อาหาร",
      compact: "อาหาร"
    },
    hotel: {
      label: "โรงแรม / พัก",
      compact: "พัก"
    },
    restaurant: {
      label: "ร้านอาหาร",
      compact: "ร้าน"
    },
    transport: {
      label: "การเดินทาง",
      compact: "เดินทาง"
    },
    jeep: {
      label: "ทัวร์จี๊ป",
      compact: "จี๊ป"
    },
    atv: {
      label: "เช่า ATV",
      compact: "ATV"
    },
    bike: {
      label: "เช่าจักรยาน / มอเตอร์ไซค์",
      compact: "รถ"
    },
    beach: {
      label: "ชายหาด / เที่ยวชม",
      compact: "ทะเล"
    },
    free: {
      label: "เวลาว่าง",
      compact: "ว่าง"
    },
    shopping: {
      label: "ช้อปปิ้ง",
      compact: "ช้อป"
    },
    night: {
      label: "กิจกรรมกลางคืน",
      compact: "กลางคืน"
    }
  }
};
const DAY_TRANSLATIONS = {
  en: {
    tue: {
      weekday: "Tuesday",
      date: "Oct 13"
    },
    wed: {
      weekday: "Wednesday",
      date: "Oct 14"
    },
    thu: {
      weekday: "Thursday",
      date: "Oct 15"
    },
    fri: {
      weekday: "Friday",
      date: "Oct 16"
    },
    sat: {
      weekday: "Saturday",
      date: "Oct 17"
    }
  },
  vi: {
    tue: {
      weekday: "Thứ Ba",
      date: "13 tháng 10"
    },
    wed: {
      weekday: "Thứ Tư",
      date: "14 tháng 10"
    },
    thu: {
      weekday: "Thứ Năm",
      date: "15 tháng 10"
    },
    fri: {
      weekday: "Thứ Sáu",
      date: "16 tháng 10"
    },
    sat: {
      weekday: "Thứ Bảy",
      date: "17 tháng 10"
    }
  },
  th: {
    tue: {
      weekday: "วันอังคาร",
      date: "13 ต.ค."
    },
    wed: {
      weekday: "วันพุธ",
      date: "14 ต.ค."
    },
    thu: {
      weekday: "วันพฤหัสบดี",
      date: "15 ต.ค."
    },
    fri: {
      weekday: "วันศุกร์",
      date: "16 ต.ค."
    },
    sat: {
      weekday: "วันเสาร์",
      date: "17 ต.ค."
    }
  }
};
const CATEGORIES = [{
  id: "food",
  label: "Food",
  compact: "Food",
  accent: "#f97316",
  border: "#fed7aa",
  background: "#fff7ed",
  text: "#7c2d12"
}, {
  id: "hotel",
  label: "Hotel / rest",
  compact: "Rest",
  accent: "#2563eb",
  border: "#bfdbfe",
  background: "#eff6ff",
  text: "#1e3a8a"
}, {
  id: "restaurant",
  label: "Restaurant",
  compact: "Dining",
  accent: "#ea580c",
  border: "#fdba74",
  background: "#ffedd5",
  text: "#7c2d12"
}, {
  id: "transport",
  label: "Transport",
  compact: "Move",
  accent: "#64748b",
  border: "#cbd5e1",
  background: "#f8fafc",
  text: "#334155"
}, {
  id: "jeep",
  label: "Jeep tour",
  compact: "Jeep",
  accent: "#16a34a",
  border: "#bbf7d0",
  background: "#f0fdf4",
  text: "#14532d"
}, {
  id: "atv",
  label: "ATV rental",
  compact: "ATV",
  accent: "#dc2626",
  border: "#fecaca",
  background: "#fef2f2",
  text: "#7f1d1d"
}, {
  id: "bike",
  label: "Bike / motorbike rental",
  compact: "Bike",
  accent: "#0f766e",
  border: "#99f6e4",
  background: "#f0fdfa",
  text: "#134e4a"
}, {
  id: "beach",
  label: "Beach / sightseeing",
  compact: "Beach",
  accent: "#0891b2",
  border: "#a5f3fc",
  background: "#ecfeff",
  text: "#164e63"
}, {
  id: "free",
  label: "Free time",
  compact: "Free",
  accent: "#8b5cf6",
  border: "#ddd6fe",
  background: "#f5f3ff",
  text: "#4c1d95"
}, {
  id: "shopping",
  label: "Shopping",
  compact: "Shop",
  accent: "#be123c",
  border: "#fecdd3",
  background: "#fff1f2",
  text: "#881337"
}, {
  id: "night",
  label: "Night activity",
  compact: "Night",
  accent: "#4338ca",
  border: "#c7d2fe",
  background: "#eef2ff",
  text: "#312e81"
}];
const CATEGORY_MAP = CATEGORIES.reduce((map, category) => {
  map[category.id] = category;
  return map;
}, {});
const SLOT_START_MINUTES = 7 * 60;
const SLOT_END_MINUTES = 23 * 60;
const EXTRA_SLOT_END_MINUTES = 26 * 60;
function minutesToTime(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}
const BASE_TIMES = Array.from({
  length: (SLOT_END_MINUTES - SLOT_START_MINUTES) / 60 + 1
}, (_, index) => minutesToTime(SLOT_START_MINUTES + index * 60));
const ADDABLE_SLOT_TIMES = Array.from({
  length: (EXTRA_SLOT_END_MINUTES - SLOT_START_MINUTES) / 60 + 1
}, (_, index) => minutesToTime(SLOT_START_MINUTES + index * 60));
const DAY_NAME_TO_ID = {
  Tuesday: "tue",
  Wednesday: "wed",
  Thursday: "thu",
  Friday: "fri",
  Saturday: "sat"
};
function timeToMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}
function isSchedulableTime(time) {
  if (!/^\d{2}:\d{2}$/.test(time)) return false;
  const [, minute] = time.split(":").map(Number);
  if (minute !== 0) return false;
  const minutes = timeToMinutes(time);
  return minutes >= SLOT_START_MINUTES && minutes <= EXTRA_SLOT_END_MINUTES;
}
function sortedUniqueTimes(times) {
  return Array.from(new Set(times.filter(isSchedulableTime))).sort((a, b) => timeToMinutes(a) - timeToMinutes(b));
}
function slotsForDay(dayName) {
  const times = new Set(BASE_TIMES);
  suggestedItinerary.filter(slot => slot.day === dayName && isSchedulableTime(slot.time)).forEach(slot => times.add(slot.time));
  return sortedUniqueTimes(Array.from(times));
}
const DAYS = [{
  id: "tue",
  weekday: "Tuesday",
  date: "Oct 13",
  slots: slotsForDay("Tuesday")
}, {
  id: "wed",
  weekday: "Wednesday",
  date: "Oct 14",
  slots: slotsForDay("Wednesday")
}, {
  id: "thu",
  weekday: "Thursday",
  date: "Oct 15",
  slots: slotsForDay("Thursday")
}, {
  id: "fri",
  weekday: "Friday",
  date: "Oct 16",
  slots: slotsForDay("Friday")
}, {
  id: "sat",
  weekday: "Saturday",
  date: "Oct 17",
  slots: slotsForDay("Saturday")
}];
function daysWithCustomSlots(customSlots) {
  return DAYS.map(day => ({
    ...day,
    slots: sortedUniqueTimes([...day.slots, ...(customSlots[day.id] || [])])
  }));
}
function emptySlot() {
  return {
    category: "",
    activity: "",
    location: "",
    cost: "",
    contact: "",
    notes: "",
    linkedItemId: ""
  };
}
function slotKey(dayId, time) {
  return `${dayId}-${time}`;
}
function getDay(dayId) {
  return DAYS.find(day => day.id === dayId) || DAYS[0];
}
function allSlotKeys(customSlots = {}) {
  return new Set(daysWithCustomSlots(customSlots).flatMap(day => day.slots.map(time => slotKey(day.id, time))));
}
function makeSlot(partial) {
  return {
    ...emptySlot(),
    ...partial,
    category: isCategory(partial.category) ? partial.category : ""
  };
}
function isCategory(value) {
  return value === "" || CATEGORIES.some(category => category.id === value);
}
function isSlotEmpty(slot) {
  return !slot.category && !slot.activity.trim() && !slot.location.trim() && !slot.cost.trim() && !slot.contact.trim() && !slot.notes.trim() && !slot.linkedItemId;
}
function cleanSlot(value) {
  const input = value && typeof value === "object" ? value : {};
  return makeSlot({
    category: isCategory(input.category) ? input.category : "",
    activity: String(input.activity || ""),
    location: String(input.location || ""),
    cost: String(input.cost || ""),
    contact: String(input.contact || ""),
    notes: String(input.notes || ""),
    linkedItemId: String(input.linkedItemId || ""),
    addedAt: normalizeTimestamp(input.addedAt)
  });
}
function samplePlanner() {
  const planner = {};
  for (const itinerarySlot of suggestedItinerary) {
    const dayId = DAY_NAME_TO_ID[itinerarySlot.day];
    if (!dayId || !isSchedulableTime(itinerarySlot.time)) continue;
    const linkedItem = findTravelItem(itinerarySlot.linkedItemIds?.[0]);
    const baseSlot = makeSlot({
      category: travelCategoryToSlot(itinerarySlot.categories[0]),
      activity: itinerarySlot.title,
      location: itemArea(linkedItem),
      cost: linkedItem?.price || "",
      contact: firstUsefulContact(linkedItem),
      notes: itinerarySlot.notes || linkedItem?.shortDescription || "",
      linkedItemId: linkedItem?.id || ""
    });
    planner[slotKey(dayId, itinerarySlot.time)] = baseSlot;
  }
  return planner;
}
function readLanguage() {
  const saved = window.localStorage.getItem(LANGUAGE_KEY);
  return saved === "vi" || saved === "th" || saved === "en" ? saved : "en";
}
function readCurrency() {
  const saved = window.localStorage.getItem(CURRENCY_KEY);
  return saved === "THB" || saved === "USD" || saved === "VND" ? saved : "VND";
}
function readSupabaseConfig() {
  const configured = window.MUI_NE_SUPABASE || {};
  const url = String(configured.url || DEFAULT_SUPABASE_CONFIG.url || "").trim().replace(/\/+$/, "");
  const publishableKey = String(configured.publishableKey || configured.anonKey || DEFAULT_SUPABASE_CONFIG.publishableKey || "").trim();
  const looksPlaceholder = !publishableKey || /PASTE|YOUR_|SUPABASE_KEY|sb_publishable_KEY/i.test(publishableKey);
  if (!url || looksPlaceholder) return null;
  return {
    url,
    publishableKey
  };
}
function supabaseHeaders(config, json = false) {
  return {
    apikey: config.publishableKey,
    Authorization: `Bearer ${config.publishableKey}`,
    ...(json ? {
      "Content-Type": "application/json",
      Prefer: "return=representation"
    } : {})
  };
}
function supabaseTableUrl(config, query = "") {
  return `${config.url}/rest/v1/${SUPABASE_TABLE}${query}`;
}
function rowToViewerSuggestion(row) {
  return {
    id: String(row.id || `suggestion-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    title: String(row.title || "").trim(),
    category: isCategory(row.category) ? row.category : "free",
    location: String(row.location || "").trim(),
    contact: String(row.contact || "").trim(),
    notes: String(row.notes || "").trim(),
    createdAt: normalizeTimestamp(row.created_at || row.createdAt) || currentTimestamp(),
    source: "remote"
  };
}
function mergeViewerSuggestions(primary, secondary) {
  const output = [];
  const seen = new Set();
  for (const suggestion of [...primary, ...secondary]) {
    const key = suggestion.id || `${suggestion.title}|${suggestion.location}|${suggestion.contact}`;
    if (!suggestion.title || seen.has(key)) continue;
    seen.add(key);
    output.push(suggestion);
  }
  return output;
}
async function loadSupabaseRecommendations(config) {
  const select = "select=id,created_at,title,category,location,contact,notes,status";
  const withStatus = `?${select}&status=eq.approved&order=created_at.desc`;
  let response = await fetch(supabaseTableUrl(config, withStatus), {
    headers: supabaseHeaders(config)
  });
  if (!response.ok && response.status === 400) {
    response = await fetch(supabaseTableUrl(config, "?select=id,created_at,title,category,location,contact,notes&order=created_at.desc"), {
      headers: supabaseHeaders(config)
    });
  }
  if (!response.ok) {
    throw new Error(`Supabase load failed: ${response.status}`);
  }
  const rows = await response.json();
  return normalizeViewerSuggestions(Array.isArray(rows) ? rows.map(row => ({
    ...row,
    source: "remote"
  })) : []);
}
async function createSupabaseRecommendation(config, suggestion) {
  const payload = {
    title: suggestion.title,
    category: suggestion.category || "free",
    location: suggestion.location,
    contact: suggestion.contact,
    notes: suggestion.notes,
    status: "approved"
  };
  let response = await fetch(supabaseTableUrl(config), {
    method: "POST",
    headers: supabaseHeaders(config, true),
    body: JSON.stringify(payload)
  });
  if (!response.ok && response.status === 400) {
    const {
      status,
      ...payloadWithoutStatus
    } = payload;
    response = await fetch(supabaseTableUrl(config), {
      method: "POST",
      headers: supabaseHeaders(config, true),
      body: JSON.stringify(payloadWithoutStatus)
    });
  }
  if (!response.ok) {
    throw new Error(`Supabase insert failed: ${response.status}`);
  }
  const rows = await response.json();
  const row = Array.isArray(rows) && rows[0] ? rows[0] : {};
  return rowToViewerSuggestion({
    ...payload,
    ...row,
    createdAt: row.created_at || currentTimestamp()
  });
}
function suggestionSyncLabel(status, language) {
  if (status === "loading") return text(language, "syncingRecommendations");
  if (status === "saving") return text(language, "savingRecommendation");
  if (status === "synced") return text(language, "sharedRecommendations");
  return text(language, "localRecommendations");
}
function normalizeCustomSlots(input) {
  const customSlots = {};
  if (!input || typeof input !== "object") return customSlots;
  for (const day of DAYS) {
    const value = input[day.id];
    if (!Array.isArray(value)) continue;
    const baseTimes = new Set(day.slots);
    const times = sortedUniqueTimes(value.map(String)).filter(time => !baseTimes.has(time));
    if (times.length) customSlots[day.id] = times;
  }
  return customSlots;
}
function normalizeViewerSuggestions(input) {
  if (!Array.isArray(input)) return [];
  return input.map(value => {
    const source = value && typeof value === "object" ? value : {};
    return {
      id: String(source.id || `suggestion-${Date.now()}-${Math.random().toString(16).slice(2)}`),
      title: String(source.title || "").trim(),
      category: isCategory(source.category) ? source.category : "free",
      location: String(source.location || "").trim(),
      contact: String(source.contact || "").trim(),
      notes: String(source.notes || "").trim(),
      createdAt: normalizeTimestamp(source.createdAt || source.created_at) || currentTimestamp(),
      source: source.source === "remote" ? "remote" : "local"
    };
  }).filter(suggestion => suggestion.title);
}
function readCustomSlots() {
  try {
    return normalizeCustomSlots(JSON.parse(window.localStorage.getItem(CUSTOM_SLOTS_KEY) || "{}"));
  } catch {
    return {};
  }
}
function readViewerSuggestions() {
  try {
    return normalizeViewerSuggestions(JSON.parse(window.localStorage.getItem(VIEWER_SUGGESTIONS_KEY) || "[]"));
  } catch {
    return [];
  }
}
function readPlanner() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return samplePlanner();
    return normalizePlanner(JSON.parse(raw), readCustomSlots());
  } catch {
    return samplePlanner();
  }
}
function normalizePlanner(input, customSlots = {}) {
  const source = input && typeof input === "object" && "planner" in input ? input.planner : input;
  const validKeys = allSlotKeys(customSlots);
  const planner = {};
  if (!source || typeof source !== "object") {
    return planner;
  }
  for (const [key, value] of Object.entries(source)) {
    if (!validKeys.has(key)) continue;
    const slot = cleanSlot(value);
    if (!isSlotEmpty(slot)) {
      planner[key] = slot;
    }
  }
  return planner;
}
function formatTime(time) {
  const [hourString, minuteString] = time.split(":");
  const hour = Number(hourString);
  const minute = Number(minuteString);
  const hourOfDay = (hour % 24 + 24) % 24;
  const suffix = hourOfDay >= 12 ? "PM" : "AM";
  const displayHour = hourOfDay % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
}
function currentTimestamp() {
  return new Date().toISOString();
}
function normalizeTimestamp(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}
function formatAddedDate(value, language) {
  const normalized = normalizeTimestamp(value);
  if (!normalized) return "";
  return new Intl.DateTimeFormat(LOCALES[language], {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(normalized));
}
function text(language, key) {
  return UI_TEXT[language][key] || UI_TEXT.en[key];
}
function dayLabel(day, language) {
  return DAY_TRANSLATIONS[language][day.id] || {
    weekday: day.weekday,
    date: day.date
  };
}
function categoryLabel(id, language) {
  return id ? CATEGORY_TRANSLATIONS[language][id]?.label || CATEGORY_MAP[id]?.label || text(language, "unplanned") : text(language, "unplanned");
}
function categoryCompact(id, language) {
  return CATEGORY_TRANSLATIONS[language][id]?.compact || CATEGORY_MAP[id]?.compact || id;
}
const TRAVEL_TO_SLOT_CATEGORY = {
  Food: "food",
  Rest: "hotel",
  Dining: "restaurant",
  Move: "transport",
  Jeep: "jeep",
  ATV: "atv",
  Bike: "bike",
  Beach: "beach",
  Free: "free",
  Shop: "shopping",
  Night: "night"
};
const SLOT_TO_TRAVEL_CATEGORY = {
  food: "Food",
  hotel: "Rest",
  restaurant: "Dining",
  transport: "Move",
  jeep: "Jeep",
  atv: "ATV",
  bike: "Bike",
  beach: "Beach",
  free: "Free",
  shopping: "Shop",
  night: "Night"
};
const LIBRARY_CATEGORIES = ["All", "Food", "Rest", "Dining", "Move", "Jeep", "ATV", "Bike", "Beach", "Free", "Shop", "Night"];
function travelCategoryToSlot(category) {
  return category ? TRAVEL_TO_SLOT_CATEGORY[category] || "" : "";
}
function slotCategoryToTravel(category) {
  return category ? SLOT_TO_TRAVEL_CATEGORY[category] || "" : "";
}
function findTravelItem(id) {
  return id ? travelItems.find(item => item.id === id) : undefined;
}
function firstUsefulContact(item) {
  if (!item) return "";
  return item.websiteUrl || item.bookingUrl || item.mapUrl || item.contacts?.find(contact => contact.url)?.url || item.contacts?.[0]?.value || "";
}
function itemArea(item) {
  return item?.area || item?.address || "";
}
function slotFromTravelItem(item, current = emptySlot()) {
  return makeSlot({
    ...current,
    category: travelCategoryToSlot(item.categories[0]),
    activity: item.title,
    location: itemArea(item),
    cost: item.price || current.cost,
    contact: firstUsefulContact(item),
    notes: item.shortDescription,
    linkedItemId: item.id
  });
}
function slotFromViewerSuggestion(suggestion, current = emptySlot()) {
  return makeSlot({
    ...current,
    category: suggestion.category || "free",
    activity: suggestion.title,
    location: suggestion.location,
    contact: suggestion.contact,
    notes: suggestion.notes,
    linkedItemId: "",
    addedAt: currentTimestamp()
  });
}
function normalizeCostNumber(value) {
  const number = Number(value.replace(/,/g, ""));
  return Number.isFinite(number) ? number : 0;
}
function extractCostEstimate(value) {
  const compact = value.replace(/\s/g, "");
  const matches = Array.from(compact.matchAll(/\d+(?:[,.]\d{3})*(?:\.\d+)?|\d+(?:\.\d+)?/g));
  if (!matches.length) return 0;
  const first = matches[0];
  const firstAmount = normalizeCostNumber(first[0]);
  if (matches.length < 2 || typeof first.index !== "number") return firstAmount;
  const second = matches[1];
  const secondIndex = second.index ?? 0;
  const between = compact.slice(first.index + first[0].length, secondIndex).toLowerCase();
  const isRange = /[-–—~]|to|đến|toi|ถึง/.test(between);
  const secondAmount = normalizeCostNumber(second[0]);
  return isRange && secondAmount ? Math.round((firstAmount + secondAmount) / 2) : firstAmount;
}
function parseCostToVnd(value) {
  const amount = extractCostEstimate(value);
  if (!amount) return 0;
  const lower = value.toLowerCase();
  if (/\$|usd|dollar/.test(lower)) return amount * CURRENCY_TO_VND.USD;
  if (/\u0e3f|thb|baht|\u0e1a\u0e32\u0e17/.test(lower)) return amount * CURRENCY_TO_VND.THB;
  return amount;
}
function slotEstimatedCostToVnd(slot) {
  const slotCost = parseCostToVnd(slot.cost);
  if (slotCost) return slotCost;
  return parseCostToVnd(findTravelItem(slot.linkedItemId)?.price || "");
}
function formatMoneyFromVnd(value, currency, language) {
  if (!value) return `${currency} 0`;
  const amount = value / CURRENCY_TO_VND[currency];
  const digits = currency === "USD" ? 2 : 0;
  const formatted = new Intl.NumberFormat(LOCALES[language], {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(amount);
  return `${currency} ${formatted}`;
}
function formatSlotCost(value, currency, language) {
  const vnd = parseCostToVnd(value);
  return vnd ? formatMoneyFromVnd(vnd, currency, language) : value;
}
function linkHref(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^www\./i.test(trimmed)) return `https://${trimmed}`;
  if (/^[+()\-\s\d]{7,}$/.test(trimmed)) return `tel:${trimmed.replace(/[^\d+]/g, "")}`;
  return "";
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    };
    return replacements[character] || character;
  });
}
function printableDetail(label, value, link = false) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const href = link ? linkHref(trimmed) : "";
  const content = href ? `<a href="${escapeHtml(href)}">${escapeHtml(trimmed)}</a>` : escapeHtml(trimmed);
  return `<div><strong>${escapeHtml(label)}:</strong> ${content}</div>`;
}
function printableSlotRow(day, time, slot, language, currency) {
  const isEmpty = isSlotEmpty(slot);
  const category = slot.category ? CATEGORY_MAP[slot.category] : null;
  const categoryName = slot.category ? categoryLabel(slot.category, language) : "";
  const linkedItem = findTravelItem(slot.linkedItemId);
  const costSource = slot.cost || linkedItem?.price || "";
  const costText = costSource ? formatSlotCost(costSource, currency, language) : "";
  const addedDate = formatAddedDate(slot.addedAt, language);
  const activity = slot.activity.trim() || (isEmpty ? text(language, "openSlot") : categoryName || text(language, "unplanned"));
  const badgeStyle = category ? `style="background:${category.background};border-color:${category.border};color:${category.text}"` : "";
  const details = [printableDetail(text(language, "location"), slot.location), printableDetail(text(language, "estimatedCost"), costText), printableDetail(text(language, "contact"), slot.contact, true), printableDetail(text(language, "notes"), slot.notes), addedDate ? printableDetail(text(language, "addedOn"), addedDate) : "", linkedItem ? printableDetail(text(language, "linkedOption"), linkedItem.title) : ""].filter(Boolean).join("");
  return `
    <tr class="${isEmpty ? "empty" : ""}">
      <td class="timeCell">${escapeHtml(formatTime(time))}</td>
      <td>
        <div class="activityLine">
          ${categoryName ? `<span class="categoryBadge" ${badgeStyle}>${escapeHtml(categoryName)}</span>` : ""}
          <strong>${escapeHtml(activity)}</strong>
        </div>
        ${details ? `<div class="slotDetails">${details}</div>` : ""}
      </td>
    </tr>
  `;
}
function buildPrintablePlanHtml({
  language,
  currency,
  planner,
  plannerDays,
  viewerSuggestions,
  summary
}) {
  const generatedAt = new Intl.DateTimeFormat(LOCALES[language], {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date());
  const summaryCards = [{
    label: text(language, "foodSlots"),
    value: String(summary.food)
  }, {
    label: text(language, "transportSlots"),
    value: String(summary.transport)
  }, {
    label: text(language, "hotelSlots"),
    value: String(summary.hotel)
  }, {
    label: text(language, "estimatedTotal"),
    value: formatMoneyFromVnd(summary.totalCost, currency, language)
  }];
  const daySections = plannerDays.map(day => {
    const localizedDay = dayLabel(day, language);
    const rows = day.slots.map(time => printableSlotRow(day, time, planner[slotKey(day.id, time)] || emptySlot(), language, currency)).join("");
    return `
      <section class="daySection">
        <h2>${escapeHtml(localizedDay.weekday)} <span>${escapeHtml(localizedDay.date)}</span></h2>
        <table>
          <tbody>${rows}</tbody>
        </table>
      </section>
    `;
  }).join("");
  const suggestionCards = viewerSuggestions.length ? viewerSuggestions.map(suggestion => `
      <article class="suggestionCard">
        <span>${escapeHtml(categoryLabel(suggestion.category, language))}</span>
        <small>${escapeHtml(text(language, "addedOn"))}: ${escapeHtml(formatAddedDate(suggestion.createdAt, language))}</small>
        <h3>${escapeHtml(suggestion.title)}</h3>
        ${suggestion.location ? `<p>${escapeHtml(suggestion.location)}</p>` : ""}
        ${suggestion.notes ? `<p>${escapeHtml(suggestion.notes)}</p>` : ""}
        ${suggestion.contact ? printableDetail(text(language, "contact"), suggestion.contact, true) : ""}
      </article>
    `).join("") : `<p class="emptyText">${escapeHtml(text(language, "noSuggestionsYet"))}</p>`;
  return `<!doctype html>
<html lang="${escapeHtml(language)}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(text(language, "title"))} - PDF</title>
  <style>
    @page { margin: 12mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #f7fbff;
      color: #102033;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.45;
    }
    a { color: #0f766e; text-decoration: none; }
    .page {
      width: min(980px, calc(100% - 32px));
      margin: 0 auto;
      padding: 30px 0 42px;
    }
    .pdfHero {
      overflow: hidden;
      border-radius: 18px;
      background:
        linear-gradient(135deg, rgba(14, 116, 144, 0.94), rgba(21, 128, 61, 0.86)),
        radial-gradient(circle at top right, rgba(251, 191, 36, 0.9), transparent 28%);
      color: #ffffff;
      padding: 30px;
      box-shadow: 0 24px 50px rgba(15, 23, 42, 0.18);
    }
    .eyebrow {
      margin: 0 0 8px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #d9fbff;
    }
    h1 {
      margin: 0;
      font-size: clamp(32px, 6vw, 56px);
      line-height: 1;
      letter-spacing: 0;
    }
    .subtitle {
      margin: 10px 0 0;
      font-size: 18px;
      font-weight: 700;
    }
    .meta {
      margin: 18px 0 0;
      color: #dff7ff;
      font-size: 13px;
    }
    .summaryGrid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
      margin: 18px 0;
    }
    .summaryCard,
    .noteCard,
    .daySection,
    .suggestionCard {
      border: 1px solid #d7e7ef;
      border-radius: 12px;
      background: #ffffff;
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
    }
    .summaryCard { padding: 14px; }
    .summaryCard span {
      display: block;
      color: #5b7282;
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
    }
    .summaryCard strong {
      display: block;
      margin-top: 6px;
      font-size: 22px;
      color: #0f766e;
    }
    .noteCard {
      margin: 16px 0 20px;
      padding: 16px 18px;
      border-left: 6px solid #f97316;
    }
    .noteCard h2,
    .recommendations h2 {
      margin: 0 0 10px;
      font-size: 18px;
    }
    .noteCard ul {
      margin: 0;
      padding-left: 20px;
    }
    .daySection {
      margin: 18px 0;
      overflow: hidden;
      break-inside: avoid;
    }
    .daySection h2 {
      margin: 0;
      padding: 16px 18px;
      color: #0f3f54;
      background: linear-gradient(90deg, #dff8ff, #ecfdf5);
      font-size: 21px;
    }
    .daySection h2 span {
      color: #64748b;
      font-size: 15px;
      font-weight: 700;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    tr + tr { border-top: 1px solid #e4eef3; }
    td {
      padding: 12px 16px;
      vertical-align: top;
    }
    .timeCell {
      width: 104px;
      color: #0f766e;
      font-weight: 900;
      white-space: nowrap;
    }
    .activityLine {
      display: flex;
      align-items: center;
      gap: 9px;
      flex-wrap: wrap;
    }
    .categoryBadge {
      display: inline-flex;
      border: 1px solid;
      border-radius: 999px;
      padding: 3px 8px;
      font-size: 11px;
      font-weight: 900;
      text-transform: uppercase;
    }
    .slotDetails {
      margin-top: 7px;
      color: #475569;
      font-size: 13px;
    }
    .slotDetails div + div { margin-top: 3px; }
    .empty {
      color: #94a3b8;
      background: #fbfdff;
    }
    .recommendationGrid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }
    .suggestionCard {
      padding: 14px;
      break-inside: avoid;
    }
    .suggestionCard span {
      color: #0f766e;
      font-size: 11px;
      font-weight: 900;
      text-transform: uppercase;
    }
    .suggestionCard small {
      display: block;
      margin-top: 5px;
      color: #64748b;
      font-size: 11px;
      font-weight: 800;
    }
    .suggestionCard h3 {
      margin: 5px 0 6px;
      font-size: 16px;
    }
    .suggestionCard p {
      margin: 5px 0;
      color: #475569;
      font-size: 13px;
    }
    .emptyText {
      color: #64748b;
      margin: 0;
    }
    @media print {
      body { background: #ffffff; }
      .page { width: 100%; padding: 0; }
      .pdfHero,
      .summaryCard,
      .noteCard,
      .daySection,
      .suggestionCard {
        box-shadow: none;
      }
    }
    @media (max-width: 720px) {
      .summaryGrid,
      .recommendationGrid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <main class="page">
    <header class="pdfHero">
      <p class="eyebrow">${escapeHtml(text(language, "place"))}</p>
      <h1>${escapeHtml(text(language, "title"))}</h1>
      <p class="subtitle">${escapeHtml(text(language, "dates"))}</p>
      <p class="meta">${escapeHtml(generatedAt)} · ${escapeHtml(text(language, "rates"))}</p>
    </header>

    <section class="summaryGrid" aria-label="${escapeHtml(text(language, "itinerarySummary"))}">
      ${summaryCards.map(card => `
        <article class="summaryCard">
          <span>${escapeHtml(card.label)}</span>
          <strong>${escapeHtml(card.value)}</strong>
        </article>
      `).join("")}
    </section>

    <section class="noteCard">
      <h2>${escapeHtml(text(language, "tripNotes"))}</h2>
      <ul>
        <li>${escapeHtml(text(language, "photographerNote"))}</li>
        <li>${escapeHtml(text(language, "shoppingNote"))}</li>
      </ul>
    </section>

    <section aria-label="${escapeHtml(text(language, "tripSchedule"))}">
      ${daySections}
    </section>

    <section class="recommendations">
      <h2>${escapeHtml(text(language, "viewerSuggestions"))}</h2>
      <div class="recommendationGrid">${suggestionCards}</div>
    </section>
  </main>
  <script>
    window.addEventListener("load", function () {
      window.setTimeout(function () {
        window.focus();
        window.print();
      }, 250);
    });
  </script>
</body>
</html>`;
}
function Icon({
  name
}) {
  const paths = {
    reset: "M4 4v6h6M20 20v-6h-6M5.2 15a7 7 0 0 0 11.6 2.1M18.8 9A7 7 0 0 0 7.2 6.9",
    export: "M12 3v12M7 8l5-5 5 5M5 21h14a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2",
    import: "M12 21V9M7 16l5 5 5-5M5 3h14a2 2 0 0 1 2 2v3M3 8V5a2 2 0 0 1 2-2",
    print: "M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v7H7z",
    search: "M11 19a8 8 0 1 1 5.3-14A8 8 0 0 1 11 19zm6-2 4 4",
    save: "M5 3h12l2 2v16H5zM8 3v6h8M8 21v-8h8v8",
    clear: "M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3",
    copy: "M8 8h11v13H8zM5 16H3V3h13v2",
    plus: "M12 5v14M5 12h14",
    close: "M6 6l12 12M18 6 6 18",
    grid: "M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z",
    list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
  };
  return React.createElement("svg", {
    className: "icon",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: paths[name] || paths.grid
  }));
}
function App() {
  const supabaseConfig = useMemo(() => readSupabaseConfig(), []);
  const [language, setLanguage] = useState(() => readLanguage());
  const [currency, setCurrency] = useState(() => readCurrency());
  const [planner, setPlanner] = useState(() => readPlanner());
  const [customSlots, setCustomSlots] = useState(() => readCustomSlots());
  const [viewerSuggestions, setViewerSuggestions] = useState(() => readViewerSuggestions());
  const [suggestionSyncStatus, setSuggestionSyncStatus] = useState(() => supabaseConfig ? "loading" : "local");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [libraryFilter, setLibraryFilter] = useState("All");
  const [librarySearch, setLibrarySearch] = useState("");
  const [editingSlot, setEditingSlot] = useState(null);
  const [dragOverKey, setDragOverKey] = useState(null);
  const [toast, setToast] = useState("");
  const clickTimer = useRef(null);
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(planner));
  }, [planner]);
  useEffect(() => {
    window.localStorage.setItem(CUSTOM_SLOTS_KEY, JSON.stringify(customSlots));
  }, [customSlots]);
  useEffect(() => {
    window.localStorage.setItem(VIEWER_SUGGESTIONS_KEY, JSON.stringify(viewerSuggestions));
  }, [viewerSuggestions]);
  useEffect(() => {
    if (!supabaseConfig) {
      setSuggestionSyncStatus("local");
      return;
    }
    let cancelled = false;
    setSuggestionSyncStatus("loading");
    loadSupabaseRecommendations(supabaseConfig).then(remoteSuggestions => {
      if (cancelled) return;
      setViewerSuggestions(current => mergeViewerSuggestions(remoteSuggestions, current));
      setSuggestionSyncStatus("synced");
    }).catch(() => {
      if (cancelled) return;
      setSuggestionSyncStatus("fallback");
    });
    return () => {
      cancelled = true;
    };
  }, [supabaseConfig]);
  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);
  useEffect(() => {
    window.localStorage.setItem(CURRENCY_KEY, currency);
  }, [currency]);
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);
  const plannerDays = useMemo(() => daysWithCustomSlots(customSlots), [customSlots]);
  const flatSlots = useMemo(() => {
    return plannerDays.flatMap(day => day.slots.map(time => {
      const key = slotKey(day.id, time);
      return {
        key,
        day,
        time,
        slot: planner[key] || emptySlot()
      };
    }));
  }, [planner, plannerDays]);
  const targetOptions = useMemo(() => {
    return flatSlots.map(({
      key,
      day,
      time,
      slot
    }) => ({
      key,
      label: `${dayLabel(day, language).weekday}, ${dayLabel(day, language).date} - ${formatTime(time)}${isSlotEmpty(slot) ? "" : ` - ${slot.activity || categoryLabel(slot.category, language)}`}`
    }));
  }, [flatSlots, language]);
  const summary = useMemo(() => {
    let food = 0;
    let transport = 0;
    let hotel = 0;
    let totalCost = 0;
    for (const {
      slot
    } of flatSlots) {
      if (isSlotEmpty(slot)) continue;
      if (slot.category === "food" || slot.category === "restaurant") food += 1;
      if (slot.category === "transport") transport += 1;
      if (slot.category === "hotel") hotel += 1;
      totalCost += slotEstimatedCostToVnd(slot);
    }
    return {
      food,
      transport,
      hotel,
      totalCost
    };
  }, [flatSlots]);
  function visibleSlot(day, time) {
    const key = slotKey(day.id, time);
    const slot = planner[key] || emptySlot();
    const query = search.trim().toLowerCase();
    if (filter !== "all" && slot.category !== filter) {
      return false;
    }
    if (!query) {
      return filter === "all" || !isSlotEmpty(slot);
    }
    const localizedDay = dayLabel(day, language);
    const category = categoryLabel(slot.category, language);
    const haystack = [day.weekday, day.date, localizedDay.weekday, localizedDay.date, formatTime(time), category, slot.activity, slot.location, slot.cost, slot.contact, slot.notes].join(" ").toLowerCase();
    return haystack.includes(query);
  }
  function saveSlot(ref, data) {
    const key = slotKey(ref.dayId, ref.time);
    const cleaned = cleanSlot(data);
    setPlanner(current => {
      const next = {
        ...current
      };
      const previous = current[key] || emptySlot();
      if (isSlotEmpty(cleaned)) {
        delete next[key];
      } else {
        next[key] = makeSlot({
          ...cleaned,
          addedAt: cleaned.addedAt || (isSlotEmpty(previous) ? currentTimestamp() : previous.addedAt || "")
        });
      }
      return next;
    });
    setToast(text(language, "slotSaved"));
  }
  function clearSlot(ref) {
    const key = slotKey(ref.dayId, ref.time);
    setPlanner(current => {
      const next = {
        ...current
      };
      delete next[key];
      return next;
    });
    setToast(text(language, "slotCleared"));
  }
  function duplicateSlot(data, targetKey) {
    const cleaned = cleanSlot(data);
    if (!targetKey || isSlotEmpty(cleaned)) return;
    setPlanner(current => ({
      ...current,
      [targetKey]: makeSlot({
        ...cleaned,
        addedAt: currentTimestamp()
      })
    }));
    setToast(text(language, "activityDuplicated"));
  }
  function cycleSlot(ref) {
    const key = slotKey(ref.dayId, ref.time);
    setPlanner(current => {
      const existing = current[key] || emptySlot();
      const currentIndex = CATEGORIES.findIndex(category => category.id === existing.category);
      const nextCategory = CATEGORIES[(currentIndex + 1 + CATEGORIES.length) % CATEGORIES.length];
      return {
        ...current,
        [key]: {
          ...existing,
          category: nextCategory.id,
          activity: existing.activity || categoryLabel(nextCategory.id, language),
          addedAt: existing.addedAt || (isSlotEmpty(existing) ? currentTimestamp() : "")
        }
      };
    });
    setToast(text(language, "categoryChanged"));
  }
  function openSlot(ref) {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
    }
    clickTimer.current = window.setTimeout(() => {
      setEditingSlot(ref);
      clickTimer.current = null;
    }, 160);
  }
  function doubleClickSlot(ref) {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }
    cycleSlot(ref);
  }
  function moveSlot(sourceKey, targetKey) {
    if (!sourceKey || sourceKey === targetKey) return;
    setPlanner(current => {
      const source = current[sourceKey];
      if (!source || isSlotEmpty(source)) return current;
      const target = current[targetKey];
      const next = {
        ...current
      };
      next[targetKey] = source;
      if (target && !isSlotEmpty(target)) {
        next[sourceKey] = target;
      } else {
        delete next[sourceKey];
      }
      return next;
    });
    setDragOverKey(null);
    setToast(text(language, "activityMoved"));
  }
  function addSlot(dayId) {
    const day = plannerDays.find(item => item.id === dayId);
    if (!day) return;
    const existingTimes = new Set(day.slots);
    const nextTime = ADDABLE_SLOT_TIMES.find(time => !existingTimes.has(time));
    if (!nextTime) {
      setToast(text(language, "noMoreSlots"));
      return;
    }
    setCustomSlots(current => ({
      ...current,
      [dayId]: sortedUniqueTimes([...(current[dayId] || []), nextTime])
    }));
    setEditingSlot({
      dayId,
      time: nextTime
    });
    setToast(text(language, "slotAdded"));
  }
  async function addViewerSuggestion(data) {
    const cleaned = {
      ...data,
      title: data.title.trim(),
      location: data.location.trim(),
      contact: data.contact.trim(),
      notes: data.notes.trim()
    };
    if (!cleaned.title) return;
    const fallbackSuggestion = {
      id: `suggestion-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      ...cleaned,
      createdAt: currentTimestamp(),
      source: "local"
    };
    if (supabaseConfig) {
      setSuggestionSyncStatus("saving");
      try {
        const sharedSuggestion = await createSupabaseRecommendation(supabaseConfig, cleaned);
        setViewerSuggestions(current => mergeViewerSuggestions([sharedSuggestion], current));
        setSuggestionSyncStatus("synced");
        setToast(text(language, "suggestionShared"));
        return;
      } catch {
        setSuggestionSyncStatus("fallback");
      }
    }
    setViewerSuggestions(current => mergeViewerSuggestions([fallbackSuggestion], current));
    setToast(supabaseConfig ? text(language, "suggestionSavedLocally") : text(language, "suggestionAdded"));
  }
  function deleteViewerSuggestion(id) {
    const suggestion = viewerSuggestions.find(item => item.id === id);
    if (suggestion?.source === "remote") return;
    setViewerSuggestions(current => current.filter(suggestion => suggestion.id !== id));
    setToast(text(language, "suggestionDeleted"));
  }
  function addViewerSuggestionToSlot(suggestion, targetKey) {
    if (!targetKey) return;
    setPlanner(current => ({
      ...current,
      [targetKey]: slotFromViewerSuggestion(suggestion, current[targetKey] || emptySlot())
    }));
    setToast(text(language, "suggestionAddedToSlot"));
  }
  function exportPlanner() {
    const printWindow = window.open("", "_blank", "width=980,height=1200");
    if (!printWindow) {
      window.print();
      setToast(text(language, "print"));
      return;
    }
    printWindow.document.open();
    printWindow.document.write(buildPrintablePlanHtml({
      language,
      currency,
      planner,
      plannerDays,
      viewerSuggestions,
      summary
    }));
    printWindow.document.close();
    setToast(text(language, "jsonExported"));
  }
  function resetPlanner() {
    setCustomSlots({});
    setPlanner(samplePlanner());
    setToast(text(language, "sampleRestored"));
  }
  function clearAllSlots() {
    setPlanner({});
    setEditingSlot(null);
    setToast(text(language, "allSlotsCleared"));
  }
  const activeEditingSlot = editingSlot ? planner[slotKey(editingSlot.dayId, editingSlot.time)] || emptySlot() : null;
  return React.createElement("main", {
    className: "appShell"
  }, React.createElement(Header, {
    language: language,
    onReset: resetPlanner,
    onClearAll: clearAllSlots,
    onExport: exportPlanner,
    onPrint: () => window.print()
  }), React.createElement("section", {
    className: "plannerSurface"
  }, React.createElement(SummaryPanel, {
    summary: summary,
    language: language,
    currency: currency
  }), React.createElement(TripNotes, {
    language: language
  }), React.createElement(ExperienceStrip, {
    language: language
  }), React.createElement(FilterBar, {
    filter: filter,
    search: search,
    viewMode: viewMode,
    language: language,
    currency: currency,
    onFilter: setFilter,
    onSearch: setSearch,
    onViewMode: setViewMode,
    onLanguage: setLanguage,
    onCurrency: setCurrency
  }), React.createElement(ViewerSuggestionsPanel, {
    language: language,
    suggestions: viewerSuggestions,
    syncStatus: suggestionSyncStatus,
    targetOptions: targetOptions,
    onAdd: addViewerSuggestion,
    onDelete: deleteViewerSuggestion,
    onAddToSlot: addViewerSuggestionToSlot
  }), React.createElement("section", {
    className: viewMode === "grid" ? "calendarGrid" : "dayList",
    "aria-label": text(language, "tripSchedule")
  }, plannerDays.map(day => React.createElement(DayColumn, {
    key: day.id,
    day: day,
    planner: planner,
    viewMode: viewMode,
    language: language,
    currency: currency,
    isVisible: visibleSlot,
    dragOverKey: dragOverKey,
    onSlotClick: openSlot,
    onSlotDoubleClick: doubleClickSlot,
    onAddSlot: addSlot,
    onDragStart: (event, key) => event.dataTransfer.setData("text/plain", key),
    onDragOver: (event, key) => {
      event.preventDefault();
      setDragOverKey(key);
    },
    onDragLeave: () => setDragOverKey(null),
    onDrop: (event, key) => {
      event.preventDefault();
      moveSlot(event.dataTransfer.getData("text/plain"), key);
    }
  }))), React.createElement(ResearchLibrary, {
    language: language,
    filter: libraryFilter,
    search: librarySearch,
    onFilter: setLibraryFilter,
    onSearch: setLibrarySearch
  })), editingSlot && activeEditingSlot && React.createElement(SlotEditorModal, {
    slotRef: editingSlot,
    slot: activeEditingSlot,
    language: language,
    currency: currency,
    targetOptions: targetOptions.filter(option => option.key !== slotKey(editingSlot.dayId, editingSlot.time)),
    onSave: data => {
      saveSlot(editingSlot, data);
      setEditingSlot(null);
    },
    onClear: () => {
      clearSlot(editingSlot);
      setEditingSlot(null);
    },
    onDuplicate: duplicateSlot,
    onClose: () => setEditingSlot(null)
  }), toast && React.createElement("div", {
    className: "toast",
    role: "status"
  }, toast));
}
function Header({
  language,
  onReset,
  onClearAll,
  onExport,
  onPrint
}) {
  return React.createElement("header", {
    className: "hero"
  }, React.createElement("div", {
    className: "heroOverlay"
  }, React.createElement("div", {
    className: "heroContent"
  }, React.createElement("div", null, React.createElement("p", {
    className: "eyebrow"
  }, text(language, "place")), React.createElement("h1", null, text(language, "title")), React.createElement("p", {
    className: "subtitle"
  }, text(language, "dates"))), React.createElement("div", {
    className: "headerActions noPrint",
    "aria-label": text(language, "itineraryActions")
  }, React.createElement("button", {
    className: "iconButton",
    type: "button",
    onClick: onReset,
    title: text(language, "reset")
  }, React.createElement(Icon, {
    name: "reset"
  }), React.createElement("span", null, text(language, "reset"))), React.createElement("button", {
    className: "iconButton clearAllButton",
    type: "button",
    onClick: onClearAll,
    title: text(language, "clearAll")
  }, React.createElement(Icon, {
    name: "clear"
  }), React.createElement("span", null, text(language, "clearAll"))), React.createElement("button", {
    className: "iconButton",
    type: "button",
    onClick: onExport,
    title: text(language, "exportJson")
  }, React.createElement(Icon, {
    name: "export"
  }), React.createElement("span", null, text(language, "exportJson"))), React.createElement("button", {
    className: "iconButton",
    type: "button",
    onClick: onPrint,
    title: text(language, "print")
  }, React.createElement(Icon, {
    name: "print"
  }), React.createElement("span", null, text(language, "print")))))));
}
function SummaryPanel({
  summary,
  language,
  currency
}) {
  const cards = [{
    label: text(language, "foodSlots"),
    value: summary.food,
    tone: "food"
  }, {
    label: text(language, "transportSlots"),
    value: summary.transport,
    tone: "transport"
  }, {
    label: text(language, "hotelSlots"),
    value: summary.hotel,
    tone: "hotel"
  }, {
    label: text(language, "estimatedTotal"),
    value: formatMoneyFromVnd(summary.totalCost, currency, language),
    tone: "money"
  }];
  return React.createElement("section", {
    className: "summaryGrid",
    "aria-label": text(language, "itinerarySummary")
  }, cards.map(card => React.createElement("article", {
    className: `summaryCard ${card.tone}`,
    key: card.label
  }, React.createElement("span", null, card.label), React.createElement("strong", null, card.value))));
}
function TripNotes({
  language
}) {
  return React.createElement("section", {
    className: "tripNotes",
    "aria-label": text(language, "tripNotes")
  }, React.createElement("article", {
    className: "tripNoteCard photographer"
  }, React.createElement("p", null, text(language, "photographerNote"))), React.createElement("article", {
    className: "tripNoteCard shopping"
  }, React.createElement("p", null, text(language, "shoppingNote"))));
}
function ExperienceStrip({
  language
}) {
  const items = [text(language, "visualHcmc"), text(language, "visualDunes"), text(language, "visualVilla"), text(language, "visualBeach")];
  return React.createElement("section", {
    className: "experienceStrip",
    "aria-label": text(language, "visualStory")
  }, React.createElement("header", null, React.createElement("span", null, text(language, "visualStory"))), React.createElement("div", {
    className: "experienceGrid"
  }, items.map((label, index) => React.createElement("article", {
    className: `experienceCard frame${index}`,
    key: label
  }, React.createElement("strong", null, label)))));
}
function ViewerSuggestionsPanel({
  language,
  suggestions,
  syncStatus,
  targetOptions,
  onAdd,
  onDelete,
  onAddToSlot
}) {
  const [draft, setDraft] = useState({
    title: "",
    category: "free",
    location: "",
    contact: "",
    notes: ""
  });
  const [targetById, setTargetById] = useState({});
  function patchDraft(partial) {
    setDraft(current => ({
      ...current,
      ...partial
    }));
  }
  function submit(event) {
    event.preventDefault();
    if (!draft.title.trim()) return;
    onAdd(draft);
    setDraft({
      title: "",
      category: "free",
      location: "",
      contact: "",
      notes: ""
    });
  }
  return React.createElement("section", {
    className: "viewerSuggestions",
    "aria-label": text(language, "viewerSuggestions")
  }, React.createElement("div", {
    className: "suggestionIntro"
  }, React.createElement("div", null, React.createElement("h2", null, text(language, "viewerSuggestions")), React.createElement("p", null, text(language, "viewerSuggestionsSubtitle"))), React.createElement("span", {
    className: `syncBadge ${syncStatus}`
  }, suggestionSyncLabel(syncStatus, language))), React.createElement("form", {
    className: "suggestionForm",
    onSubmit: submit
  }, React.createElement("label", null, React.createElement("span", null, text(language, "suggestionTitle")), React.createElement("input", {
    value: draft.title,
    onChange: event => patchDraft({
      title: event.target.value
    }),
    placeholder: text(language, "suggestionPlaceholder")
  })), React.createElement("label", null, React.createElement("span", null, text(language, "suggestionCategory")), React.createElement("select", {
    value: draft.category,
    onChange: event => patchDraft({
      category: event.target.value
    })
  }, CATEGORIES.map(category => React.createElement("option", {
    key: category.id,
    value: category.id
  }, categoryLabel(category.id, language))))), React.createElement("label", null, React.createElement("span", null, text(language, "suggestionLocation")), React.createElement("input", {
    value: draft.location,
    onChange: event => patchDraft({
      location: event.target.value
    }),
    placeholder: text(language, "suggestionLocationPlaceholder")
  })), React.createElement("label", null, React.createElement("span", null, text(language, "suggestionContact")), React.createElement("input", {
    value: draft.contact,
    onChange: event => patchDraft({
      contact: event.target.value
    }),
    placeholder: text(language, "contactPlaceholder")
  })), React.createElement("label", {
    className: "wide"
  }, React.createElement("span", null, text(language, "suggestionNotes")), React.createElement("textarea", {
    value: draft.notes,
    onChange: event => patchDraft({
      notes: event.target.value
    }),
    placeholder: text(language, "suggestionNotesPlaceholder"),
    rows: 3
  })), React.createElement("button", {
    className: "primaryButton suggestionSubmit",
    type: "submit",
    disabled: !draft.title.trim()
  }, React.createElement(Icon, {
    name: "plus"
  }), React.createElement("span", null, text(language, "addSuggestion")))), React.createElement("div", {
    className: "suggestionCards"
  }, suggestions.length ? suggestions.map(suggestion => {
    const targetKey = targetById[suggestion.id] || targetOptions[0]?.key || "";
    const href = linkHref(suggestion.contact);
    const category = suggestion.category ? CATEGORY_MAP[suggestion.category] : null;
    const addedDate = formatAddedDate(suggestion.createdAt, language);
    const suggestionStyle = {
      "--suggestion-accent": category?.accent || "#0891b2",
      "--suggestion-bg": category?.background || "#ecfeff",
      "--suggestion-text": category?.text || "#075985"
    };
    return React.createElement("article", {
      className: "suggestionCard userAdded",
      key: suggestion.id,
      style: suggestionStyle
    }, React.createElement("div", {
      className: "suggestionTop"
    }, React.createElement("div", {
      className: "suggestionTags"
    }, React.createElement("span", {
      className: "suggestionCategory"
    }, categoryLabel(suggestion.category, language)), suggestion.source === "remote" && React.createElement("span", {
      className: "sharedBadge"
    }, text(language, "sharedRecommendations")), addedDate && React.createElement("span", {
      className: "addedPill"
    }, text(language, "addedOn"), " \xB7 ", addedDate)), suggestion.source !== "remote" && React.createElement("button", {
      className: "roundButton",
      type: "button",
      onClick: () => onDelete(suggestion.id),
      title: text(language, "deleteSuggestion")
    }, React.createElement(Icon, {
      name: "clear"
    }))), React.createElement("h3", null, suggestion.title), suggestion.location && React.createElement("p", null, suggestion.location), suggestion.notes && React.createElement("p", null, suggestion.notes), suggestion.contact && (href ? React.createElement("a", {
      className: "suggestionLink",
      href: href,
      target: "_blank",
      rel: "noreferrer"
    }, suggestion.contact) : React.createElement("p", null, suggestion.contact)), React.createElement("div", {
      className: "suggestionSlotRow"
    }, React.createElement("select", {
      value: targetKey,
      onChange: event => setTargetById(current => ({
        ...current,
        [suggestion.id]: event.target.value
      }))
    }, targetOptions.map(option => React.createElement("option", {
      key: option.key,
      value: option.key
    }, option.label))), React.createElement("button", {
      className: "secondaryButton",
      type: "button",
      disabled: !targetKey,
      onClick: () => onAddToSlot(suggestion, targetKey)
    }, React.createElement(Icon, {
      name: "plus"
    }), React.createElement("span", null, text(language, "addToSlot")))));
  }) : React.createElement("p", {
    className: "emptySuggestions"
  }, text(language, "noSuggestionsYet"))));
}
function ResearchLibrary({
  language,
  filter,
  search,
  onFilter,
  onSearch
}) {
  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return travelItems.filter(item => {
      const categoryMatches = filter === "All" || item.categories.includes(filter);
      if (!categoryMatches) return false;
      if (!query) return true;
      const contactText = item.contacts?.map(contact => `${contact.label} ${contact.type} ${contact.value} ${contact.url || ""}`).join(" ") || "";
      return [item.title, item.shortDescription, item.description, item.area, item.address, item.price, item.travelTime, item.recommendedFor, item.caution, item.notes, item.tags?.join(" "), contactText].filter(Boolean).join(" ").toLowerCase().includes(query);
    });
  }, [filter, search]);
  return React.createElement("section", {
    className: "researchLibrary",
    "aria-label": text(language, "researchLibrary")
  }, React.createElement("div", {
    className: "libraryHeader"
  }, React.createElement("div", null, React.createElement("h2", null, text(language, "researchLibrary")), React.createElement("p", null, text(language, "researchSubtitle"))), React.createElement("label", {
    className: "searchField librarySearch"
  }, React.createElement(Icon, {
    name: "search"
  }), React.createElement("input", {
    value: search,
    onChange: event => onSearch(event.target.value),
    placeholder: text(language, "librarySearch"),
    type: "search"
  }))), React.createElement("div", {
    className: "categoryChips libraryChips",
    "aria-label": text(language, "quickCategoryFilters")
  }, LIBRARY_CATEGORIES.map(category => React.createElement("button", {
    key: category,
    className: filter === category ? "chip active" : "chip",
    type: "button",
    onClick: () => onFilter(category),
    style: {
      "--chip-color": category === "All" ? "#0891b2" : CATEGORY_MAP[TRAVEL_TO_SLOT_CATEGORY[category]]?.accent
    }
  }, category === "All" ? text(language, "all") : category))), React.createElement("div", {
    className: "travelItemGrid"
  }, filteredItems.map(item => React.createElement(TravelItemCard, {
    key: item.id,
    item: item,
    language: language
  }))), React.createElement(DevelopmentLinksMissing, {
    language: language
  }));
}
function TravelItemCard({
  item,
  language
}) {
  const confidenceText = item.confidence === "verified" ? text(language, "verified") : item.confidence === "needs-confirmation" ? text(language, "needsConfirmation") : text(language, "sourceNote");
  const badges = itemBadges(item, language);
  const contacts = item.contacts?.filter(contact => contact.url || contact.value) || [];
  return React.createElement("article", {
    className: `travelItemCard ${item.confidence === "needs-confirmation" ? "needsConfirmation" : ""}`
  }, React.createElement("div", {
    className: "travelItemTop"
  }, React.createElement("h3", null, item.title), React.createElement("span", {
    className: `confidenceBadge ${item.confidence || "source-note"}`
  }, confidenceText)), React.createElement("div", {
    className: "itemCategoryRow"
  }, item.categories.map(category => React.createElement("span", {
    className: "itemCategory",
    key: category,
    style: {
      "--chip-color": CATEGORY_MAP[TRAVEL_TO_SLOT_CATEGORY[category]]?.accent
    }
  }, category))), badges.length > 0 && React.createElement("div", {
    className: "itemBadgeRow"
  }, badges.map(badge => React.createElement("span", {
    key: badge
  }, badge))), React.createElement("p", {
    className: "itemDescription"
  }, item.shortDescription), React.createElement("dl", {
    className: "itemFacts"
  }, item.price && React.createElement(React.Fragment, null, React.createElement("dt", null, text(language, "price")), React.createElement("dd", null, item.price)), item.travelTime && React.createElement(React.Fragment, null, React.createElement("dt", null, text(language, "travelTime")), React.createElement("dd", null, item.travelTime)), item.recommendedFor && React.createElement(React.Fragment, null, React.createElement("dt", null, text(language, "recommendedFor")), React.createElement("dd", null, item.recommendedFor)), (item.area || item.address) && React.createElement(React.Fragment, null, React.createElement("dt", null, text(language, "areaAddress")), React.createElement("dd", null, [item.area, item.address].filter(Boolean).join(" - "))), item.caution && React.createElement(React.Fragment, null, React.createElement("dt", null, text(language, "caution")), React.createElement("dd", {
    className: "cautionText"
  }, item.caution)), item.notes && React.createElement(React.Fragment, null, React.createElement("dt", null, text(language, "note")), React.createElement("dd", null, item.notes))), contacts.length > 0 && React.createElement("div", {
    className: "contactButtons"
  }, contacts.map(contact => React.createElement("a", {
    key: `${item.id}-${contact.label}-${contact.value}`,
    href: contact.url || contact.value,
    target: "_blank",
    rel: "noreferrer"
  }, contact.type))));
}
function itemBadges(item, language) {
  const tags = (item.tags || []).join(" ").toLowerCase();
  const badges = [];
  if (tags.includes("recommended") || tags.includes("must-do")) badges.push(text(language, "recommended"));
  if (tags.includes("budget") || tags.includes("cheapest")) badges.push(text(language, "budget"));
  if (tags.includes("family")) badges.push(text(language, "family"));
  if (tags.includes("luxury")) badges.push(text(language, "luxury"));
  if (tags.includes("weather")) badges.push(text(language, "weatherBackup"));
  if (item.confidence === "needs-confirmation") badges.push(text(language, "needsConfirmation"));
  return Array.from(new Set(badges));
}
function DevelopmentLinksMissing({
  language
}) {
  const isDevelopment = window.location.protocol === "file:" || ["127.0.0.1", "localhost"].includes(window.location.hostname);
  const missing = travelItems.filter(item => !item.websiteUrl && !item.mapUrl && !item.contacts?.some(contact => contact.url));
  if (!isDevelopment || missing.length === 0) return null;
  return React.createElement("details", {
    className: "linksMissing"
  }, React.createElement("summary", null, text(language, "linksMissing"), " ", React.createElement("span", null, "(", text(language, "developmentOnly"), ")")), React.createElement("ul", null, missing.map(item => React.createElement("li", {
    key: item.id
  }, item.title))));
}
function FilterBar({
  filter,
  search,
  viewMode,
  language,
  currency,
  onFilter,
  onSearch,
  onViewMode,
  onLanguage,
  onCurrency
}) {
  return React.createElement("section", {
    className: "filterBar noPrint",
    "aria-label": text(language, "plannerFilters")
  }, React.createElement("label", {
    className: "searchField"
  }, React.createElement(Icon, {
    name: "search"
  }), React.createElement("input", {
    value: search,
    onChange: event => onSearch(event.target.value),
    placeholder: text(language, "searchPlaceholder"),
    type: "search"
  })), React.createElement("label", {
    className: "selectField"
  }, React.createElement("span", null, text(language, "show")), React.createElement("select", {
    value: filter,
    onChange: event => onFilter(event.target.value)
  }, React.createElement("option", {
    value: "all"
  }, text(language, "allCategories")), CATEGORIES.map(category => React.createElement("option", {
    key: category.id,
    value: category.id
  }, categoryLabel(category.id, language))))), React.createElement("div", {
    className: "localeControls"
  }, React.createElement("label", {
    className: "selectField"
  }, React.createElement("span", null, text(language, "language")), React.createElement("select", {
    "data-control": "language",
    value: language,
    onChange: event => onLanguage(event.target.value)
  }, LANGUAGE_OPTIONS.map(option => React.createElement("option", {
    key: option.id,
    value: option.id
  }, option.label)))), React.createElement("label", {
    className: "selectField"
  }, React.createElement("span", null, text(language, "currency")), React.createElement("select", {
    "data-control": "currency",
    value: currency,
    onChange: event => onCurrency(event.target.value)
  }, CURRENCY_OPTIONS.map(option => React.createElement("option", {
    key: option.id,
    value: option.id
  }, option.label)))), React.createElement("span", {
    className: "rateNote"
  }, text(language, "rates"))), React.createElement("div", {
    className: "categoryChips",
    "aria-label": text(language, "quickCategoryFilters")
  }, React.createElement("button", {
    className: filter === "all" ? "chip active" : "chip",
    type: "button",
    onClick: () => onFilter("all")
  }, text(language, "all")), CATEGORIES.map(category => React.createElement("button", {
    className: filter === category.id ? "chip active" : "chip",
    type: "button",
    key: category.id,
    onClick: () => onFilter(category.id),
    style: {
      "--chip-color": category.accent
    }
  }, React.createElement("span", {
    className: "chipDot"
  }), categoryCompact(category.id, language)))), React.createElement("div", {
    className: "viewToggle",
    "aria-label": text(language, "viewMode")
  }, React.createElement("button", {
    className: viewMode === "grid" ? "active" : "",
    type: "button",
    onClick: () => onViewMode("grid"),
    title: text(language, "gridTitle")
  }, React.createElement(Icon, {
    name: "grid"
  }), React.createElement("span", null, text(language, "grid"))), React.createElement("button", {
    className: viewMode === "list" ? "active" : "",
    type: "button",
    onClick: () => onViewMode("list"),
    title: text(language, "listTitle")
  }, React.createElement(Icon, {
    name: "list"
  }), React.createElement("span", null, text(language, "list")))));
}
function DayColumn({
  day,
  planner,
  viewMode,
  language,
  currency,
  isVisible,
  dragOverKey,
  onSlotClick,
  onSlotDoubleClick,
  onAddSlot,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop
}) {
  const visibleTimes = day.slots.filter(time => isVisible(day, time));
  const plannedCount = day.slots.filter(time => !isSlotEmpty(planner[slotKey(day.id, time)] || emptySlot())).length;
  const localizedDay = dayLabel(day, language);
  return React.createElement("section", {
    className: viewMode === "grid" ? "dayColumn" : "dayColumn listMode"
  }, React.createElement("header", {
    className: "dayHeader"
  }, React.createElement("div", null, React.createElement("h2", null, localizedDay.weekday), React.createElement("span", null, localizedDay.date)), React.createElement("div", {
    className: "dayHeaderActions"
  }, React.createElement("button", {
    className: "addSlotButton noPrint",
    type: "button",
    onClick: () => onAddSlot(day.id),
    "aria-label": `${text(language, "addSlot")} ${localizedDay.weekday}`
  }, React.createElement(Icon, {
    name: "plus"
  }), React.createElement("span", null, text(language, "addSlot"))), React.createElement("strong", null, plannedCount))), React.createElement("div", {
    className: "slotStack"
  }, visibleTimes.length ? visibleTimes.map(time => {
    const key = slotKey(day.id, time);
    return React.createElement(TimeSlot, {
      key: key,
      day: day,
      time: time,
      slot: planner[key] || emptySlot(),
      language: language,
      currency: currency,
      isDragOver: dragOverKey === key,
      onClick: () => onSlotClick({
        dayId: day.id,
        time
      }),
      onDoubleClick: () => onSlotDoubleClick({
        dayId: day.id,
        time
      }),
      onDragStart: event => onDragStart(event, key),
      onDragOver: event => onDragOver(event, key),
      onDragLeave: onDragLeave,
      onDrop: event => onDrop(event, key)
    });
  }) : React.createElement("p", {
    className: "emptyResults"
  }, text(language, "noMatchingSlots"))));
}
function TimeSlot({
  day,
  time,
  slot,
  language,
  currency,
  isDragOver,
  onClick,
  onDoubleClick,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop
}) {
  const category = slot.category ? CATEGORY_MAP[slot.category] : null;
  const hasContent = !isSlotEmpty(slot);
  const href = linkHref(slot.contact);
  const addedDate = formatAddedDate(slot.addedAt, language);
  const style = {
    "--slot-accent": category?.accent || "#cbd5e1",
    "--slot-border": category?.border || "#e2e8f0",
    "--slot-bg": category?.background || "#ffffff",
    "--slot-text": category?.text || "#475569"
  };
  return React.createElement("article", {
    className: `slotCard ${hasContent ? "planned" : "open"} ${addedDate ? "userAdded" : ""} ${isDragOver ? "dragOver" : ""}`,
    style: style,
    "data-slot-key": slotKey(day.id, time),
    role: "button",
    tabIndex: 0,
    draggable: hasContent,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    onKeyDown: event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick();
      }
    },
    onDragStart: onDragStart,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave,
    onDrop: onDrop,
    "aria-label": `${dayLabel(day, language).weekday} ${formatTime(time)} ${slot.activity || categoryLabel(slot.category, language)}`,
    title: text(language, "doubleClickHint")
  }, React.createElement("div", {
    className: "slotTopline"
  }, React.createElement("time", null, formatTime(time)), React.createElement("span", {
    className: "slotBadge"
  }, categoryLabel(slot.category, language))), React.createElement("h3", null, slot.activity || text(language, "openSlot")), addedDate && React.createElement("span", {
    className: "addedPill"
  }, text(language, "newAddition"), " \xB7 ", addedDate), React.createElement("div", {
    className: "slotMeta"
  }, slot.location && React.createElement("span", null, slot.location), slot.cost && React.createElement("span", null, formatSlotCost(slot.cost, currency, language)), slot.contact && (href ? React.createElement("a", {
    href: href,
    onClick: event => event.stopPropagation(),
    target: "_blank",
    rel: "noreferrer"
  }, text(language, "contact")) : React.createElement("span", null, slot.contact))), slot.notes && React.createElement("p", null, slot.notes));
}
function SlotEditorModal({
  slotRef,
  slot,
  language,
  currency,
  targetOptions,
  onSave,
  onClear,
  onDuplicate,
  onClose
}) {
  const [draft, setDraft] = useState(() => makeSlot(slot));
  const [targetKey, setTargetKey] = useState(targetOptions[0]?.key || "");
  const day = getDay(slotRef.dayId);
  const localizedDay = dayLabel(day, language);
  useEffect(() => {
    setDraft(makeSlot(slot));
    setTargetKey(targetOptions[0]?.key || "");
  }, [slotRef.dayId, slotRef.time]);
  function patchDraft(partial) {
    setDraft(current => makeSlot({
      ...current,
      ...partial
    }));
  }
  function applyLinkedItem(itemId) {
    const item = findTravelItem(itemId);
    if (!item) {
      patchDraft({
        linkedItemId: ""
      });
      return;
    }
    setDraft(current => slotFromTravelItem(item, current));
  }
  return React.createElement("div", {
    className: "modalOverlay",
    role: "presentation",
    onMouseDown: event => event.target === event.currentTarget && onClose()
  }, React.createElement("section", {
    className: "modalPanel",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "slot-editor-title"
  }, React.createElement("header", {
    className: "modalHeader"
  }, React.createElement("div", null, React.createElement("p", null, localizedDay.weekday, ", ", localizedDay.date), React.createElement("h2", {
    id: "slot-editor-title"
  }, formatTime(slotRef.time))), React.createElement("button", {
    className: "roundButton",
    type: "button",
    onClick: onClose,
    title: text(language, "close")
  }, React.createElement(Icon, {
    name: "close"
  }))), React.createElement("div", {
    className: "modalBody"
  }, React.createElement("label", {
    className: "linkedItemField"
  }, React.createElement("span", null, text(language, "linkedOption")), React.createElement("select", {
    value: draft.linkedItemId || "",
    onChange: event => applyLinkedItem(event.target.value),
    "aria-label": text(language, "autoFillFromResearch")
  }, React.createElement("option", {
    value: ""
  }, text(language, "noLinkedItem")), travelItems.map(item => React.createElement("option", {
    key: item.id,
    value: item.id
  }, item.title)))), React.createElement("fieldset", {
    className: "categorySelector"
  }, React.createElement("legend", null, text(language, "category")), React.createElement("div", {
    className: "categoryGrid"
  }, CATEGORIES.map(category => React.createElement("button", {
    key: category.id,
    className: draft.category === category.id ? "categoryButton active" : "categoryButton",
    type: "button",
    onClick: () => patchDraft({
      category: category.id,
      activity: draft.activity || categoryLabel(category.id, language)
    }),
    style: {
      "--category-color": category.accent,
      "--category-bg": category.background
    }
  }, React.createElement("span", {
    className: "categorySwatch"
  }), categoryLabel(category.id, language))))), React.createElement("div", {
    className: "formGrid"
  }, React.createElement("label", null, React.createElement("span", null, text(language, "activityName")), React.createElement("input", {
    value: draft.activity,
    onChange: event => patchDraft({
      activity: event.target.value
    }),
    autoFocus: true
  })), React.createElement("label", null, React.createElement("span", null, text(language, "location")), React.createElement("input", {
    value: draft.location,
    onChange: event => patchDraft({
      location: event.target.value
    })
  })), React.createElement("label", null, React.createElement("span", null, text(language, "estimatedCost")), React.createElement("input", {
    value: draft.cost,
    onChange: event => patchDraft({
      cost: event.target.value
    }),
    placeholder: text(language, "costPlaceholder")
  })), React.createElement("label", null, React.createElement("span", null, text(language, "contactLink")), React.createElement("input", {
    value: draft.contact,
    onChange: event => patchDraft({
      contact: event.target.value
    }),
    placeholder: text(language, "contactPlaceholder")
  })), React.createElement("label", {
    className: "wideField"
  }, React.createElement("span", null, text(language, "notes")), React.createElement("textarea", {
    rows: 3,
    value: draft.notes,
    onChange: event => patchDraft({
      notes: event.target.value
    })
  }))), React.createElement("div", {
    className: "duplicateRow"
  }, React.createElement("label", null, React.createElement("span", null, text(language, "duplicateTo")), React.createElement("select", {
    value: targetKey,
    onChange: event => setTargetKey(event.target.value)
  }, targetOptions.map(option => React.createElement("option", {
    key: option.key,
    value: option.key
  }, option.label)))), React.createElement("button", {
    className: "secondaryButton",
    type: "button",
    onClick: () => onDuplicate(draft, targetKey),
    disabled: !targetKey || isSlotEmpty(draft)
  }, React.createElement(Icon, {
    name: "copy"
  }), text(language, "duplicate")))), React.createElement("footer", {
    className: "modalFooter"
  }, React.createElement("button", {
    className: "dangerButton",
    type: "button",
    onClick: onClear
  }, React.createElement(Icon, {
    name: "clear"
  }), text(language, "clearSlot")), React.createElement("div", null, React.createElement("button", {
    className: "secondaryButton",
    type: "button",
    onClick: onClose
  }, text(language, "cancel")), React.createElement("button", {
    className: "primaryButton",
    type: "button",
    onClick: () => onSave(draft)
  }, React.createElement(Icon, {
    name: "save"
  }), text(language, "saveChanges"))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
