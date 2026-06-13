import type { TravelCategory } from "./travelItems";

export type ItinerarySlot = {
  day: "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
  date: string;
  time: string;
  title: string;
  categories: TravelCategory[];
  linkedItemIds?: string[];
  notes?: string;
};

export const suggestedItinerary: ItinerarySlot[] = [
  { day: "Tuesday", date: "Oct 13", time: "09:00", title: "Land at Tan Son Nhat from Thailand", categories: ["Move"], linkedItemIds: ["taxi-app-around-sgn"], notes: "Flight lands at 9:00 AM. Keep this hour for immigration, baggage, and meeting up." },
  { day: "Tuesday", date: "Oct 13", time: "10:00", title: "SIM/eSIM, cash, Grab to HCMC hotel", categories: ["Shop", "Move"], linkedItemIds: ["sim-esim-options", "taxi-app-around-sgn"], notes: "Set up data, exchange a little cash if needed, then move lightly into the city." },
  { day: "Tuesday", date: "Oct 13", time: "11:00", title: "HCMC hotel bag drop and rest", categories: ["Rest"], linkedItemIds: ["hcmc-arrival-hotel-rest"], notes: "Book early check-in or luggage storage so the first day stays easy." },
  { day: "Tuesday", date: "Oct 13", time: "12:00", title: "District 1 lunch", categories: ["Food"], linkedItemIds: ["hcmc-district-1-walk"], notes: "Keep lunch near the hotel, Nguyen Hue, or Ben Thanh to avoid extra travel." },
  { day: "Tuesday", date: "Oct 13", time: "13:00", title: "Ben Thanh Market / Nguyen Hue walk", categories: ["Shop", "Free"], linkedItemIds: ["hcmc-district-1-walk"], notes: "Light city walk and first photos. Shopping stays spontaneous." },
  { day: "Tuesday", date: "Oct 13", time: "14:00", title: "Cafe Apartment / Post Office area", categories: ["Food", "Free"], linkedItemIds: ["hcmc-district-1-walk"], notes: "Soft sightseeing only; keep energy for the dinner requirement." },
  { day: "Tuesday", date: "Oct 13", time: "15:00", title: "Hotel rest and freshen up", categories: ["Rest"], linkedItemIds: ["hcmc-arrival-hotel-rest"], notes: "Shower, recharge, and get ready for Landmark 81." },
  { day: "Tuesday", date: "Oct 13", time: "16:00", title: "Ride to Landmark 81 / Vinhomes", categories: ["Move"], linkedItemIds: ["taxi-app-around-sgn"], notes: "Leave early enough for traffic and photo time." },
  { day: "Tuesday", date: "Oct 13", time: "18:00", title: "Dinner at Landmark 81", categories: ["Dining", "Night"], linkedItemIds: ["landmark-81-dinner"], notes: "Must-have dinner. Reserve the restaurant before the trip." },
  { day: "Tuesday", date: "Oct 13", time: "20:00", title: "Landmark 81 night view / riverside walk", categories: ["Night", "Free"], linkedItemIds: ["landmark-81-dinner"], notes: "Easy night photos before returning to the hotel." },
  { day: "Tuesday", date: "Oct 13", time: "21:00", title: "Return to HCMC hotel", categories: ["Move", "Rest"], linkedItemIds: ["taxi-app-around-sgn"], notes: "Sleep early for the Mui Ne transfer." },

  { day: "Wednesday", date: "Oct 14", time: "07:00", title: "Breakfast and check out from HCMC hotel", categories: ["Food", "Rest"], notes: "Have bags ready before the private car arrives." },
  { day: "Wednesday", date: "Oct 14", time: "08:00", title: "Private car from HCMC to Mui Ne", categories: ["Move"], linkedItemIds: ["private-car-sgn-mui-ne"], notes: "Door-to-door transfer keeps the group comfortable with luggage." },
  { day: "Wednesday", date: "Oct 14", time: "11:00", title: "Arrive Mui Ne / coffee and lunch buffer", categories: ["Food", "Move"], linkedItemIds: ["fishing-village-seafood"], notes: "Use this as traffic buffer if the drive runs long." },
  { day: "Wednesday", date: "Oct 14", time: "13:00", title: "Check in at Sea Links City 4PN villa", categories: ["Rest"], linkedItemIds: ["sea-links-city-4pn-villa"], notes: "Confirm villa code, deposit terms, guest count, BBQ, and quiet rules in writing." },
  { day: "Wednesday", date: "Oct 14", time: "15:00", title: "Villa pool / rest / BBQ setup", categories: ["Rest", "Free"], notes: "Keep the first Mui Ne afternoon soft after the road transfer." },
  { day: "Wednesday", date: "Oct 14", time: "16:00", title: "Nguyen Dinh Chieu beach or cafe", categories: ["Beach", "Free"], linkedItemIds: ["jibes-beach-club"], notes: "Short beach/cafe block before dinner." },
  { day: "Wednesday", date: "Oct 14", time: "18:00", title: "Seafood dinner near Fishing Village", categories: ["Dining", "Food"], linkedItemIds: ["fishing-village-seafood"], notes: "Confirm seafood prices before ordering." },
  { day: "Wednesday", date: "Oct 14", time: "20:00", title: "Free night at villa", categories: ["Free", "Night"], notes: "Relax, games, photos, or quiet villa time." },

  { day: "Thursday", date: "Oct 15", time: "07:00", title: "White Sand Dunes and ATV option", categories: ["ATV", "Jeep"], linkedItemIds: ["atv-bau-trang", "white-sand-dunes"], notes: "Start as early as the 7 AM planner allows; confirm ATV price on site." },
  { day: "Thursday", date: "Oct 15", time: "08:00", title: "Red Sand Dunes photo stop", categories: ["Jeep", "Beach"], linkedItemIds: ["red-sand-dunes"], notes: "Use the dedicated photographer note here for group and solo shots." },
  { day: "Thursday", date: "Oct 15", time: "09:00", title: "Fairy Stream", categories: ["Beach", "Free"], linkedItemIds: ["fairy-stream"], notes: "Easy walk; bring sandals that can get wet." },
  { day: "Thursday", date: "Oct 15", time: "10:00", title: "Mui Ne Fishing Village", categories: ["Food", "Beach"], linkedItemIds: ["fishing-village"], notes: "Photos, seafood market vibe, and coastal view." },
  { day: "Thursday", date: "Oct 15", time: "12:00", title: "Lunch near the coast", categories: ["Food"], linkedItemIds: ["fishing-village-seafood"], notes: "Keep it close to the villa route." },
  { day: "Thursday", date: "Oct 15", time: "13:00", title: "Villa rest / nap", categories: ["Rest"], notes: "Recovery block after the dunes route." },
  { day: "Thursday", date: "Oct 15", time: "15:00", title: "Beach club / cafe time", categories: ["Beach", "Free"], linkedItemIds: ["jibes-beach-club"], notes: "Keep flexible depending on heat and mood." },
  { day: "Thursday", date: "Oct 15", time: "17:00", title: "Sunset beach", categories: ["Beach"], linkedItemIds: ["sailing-club-resort"], notes: "Golden-hour photos and slow beach time." },
  { day: "Thursday", date: "Oct 15", time: "19:00", title: "Dinner at Sandals or Jibe's", categories: ["Dining", "Night"], linkedItemIds: ["sandals-restaurant", "jibes-beach-club"], notes: "Pick based on mood: nicer resort dinner or casual beach club." },
  { day: "Thursday", date: "Oct 15", time: "21:00", title: "Night walk / villa chill", categories: ["Night", "Free"], notes: "Low-pressure night after the activity day." },

  { day: "Friday", date: "Oct 16", time: "08:00", title: "Breakfast and slow villa morning", categories: ["Food", "Rest"], notes: "No rush. This is the flexible Mui Ne day." },
  { day: "Friday", date: "Oct 16", time: "09:00", title: "Motorbike rental or coastal cafe", categories: ["Bike", "Beach"], linkedItemIds: ["motorbike-rental"], notes: "Only ride if everyone is comfortable and properly licensed." },
  { day: "Friday", date: "Oct 16", time: "10:00", title: "Explore Ham Tien coast / water sports", categories: ["Beach", "Free"], linkedItemIds: ["kitesurf-water-sports"], notes: "Choose beach, cafe, or water activity depending on weather." },
  { day: "Friday", date: "Oct 16", time: "12:00", title: "Lunch near Ham Tien", categories: ["Food"], linkedItemIds: ["fishing-village-seafood"], notes: "Keep the location flexible; shopping is not fixed." },
  { day: "Friday", date: "Oct 16", time: "14:00", title: "Cafe / spa / resort pool", categories: ["Free", "Rest"], linkedItemIds: ["jibes-beach-club"], notes: "Soft afternoon for people who want to rest or split into smaller groups." },
  { day: "Friday", date: "Oct 16", time: "16:00", title: "Optional dunes revisit or beach photos", categories: ["ATV", "Beach"], linkedItemIds: ["red-sand-dunes", "atv-bau-trang"], notes: "Only repeat ATV/dunes if everyone wants more action." },
  { day: "Friday", date: "Oct 16", time: "18:00", title: "Final Mui Ne seafood dinner", categories: ["Dining", "Food"], linkedItemIds: ["fishing-village-seafood"], notes: "Last beach-town dinner before checkout day." },
  { day: "Friday", date: "Oct 16", time: "20:00", title: "Night market / beach walk / pack", categories: ["Night", "Shop"], notes: "Spontaneous shopping only. No fixed location." },
  { day: "Friday", date: "Oct 16", time: "21:00", title: "Villa chill and luggage prep", categories: ["Rest", "Free"], notes: "Pack enough so Saturday morning is calm." },

  { day: "Saturday", date: "Oct 17", time: "07:00", title: "Breakfast at villa", categories: ["Food", "Rest"], notes: "Easy final morning." },
  { day: "Saturday", date: "Oct 17", time: "08:00", title: "Final beach walk / photos", categories: ["Beach", "Free"], linkedItemIds: ["sailing-club-resort"], notes: "Last photo block before checkout." },
  { day: "Saturday", date: "Oct 17", time: "09:00", title: "Pack, villa check, settle deposit", categories: ["Rest"], linkedItemIds: ["sea-links-city-4pn-villa"], notes: "Check rooms, chargers, passports, and villa rules before leaving." },
  { day: "Saturday", date: "Oct 17", time: "10:00", title: "Check out / coffee buffer", categories: ["Food", "Move"], notes: "Use this hour for checkout delays or a nearby cafe." },
  { day: "Saturday", date: "Oct 17", time: "11:00", title: "Private car back to Ho Chi Minh City", categories: ["Move"], linkedItemIds: ["private-car-sgn-mui-ne"], notes: "Leave with a traffic buffer for airport or city plans." },
  { day: "Saturday", date: "Oct 17", time: "14:00", title: "Highway rest stop / snack break", categories: ["Food", "Move"], notes: "Short break only if needed." },
  { day: "Saturday", date: "Oct 17", time: "16:00", title: "Arrive HCMC / airport buffer", categories: ["Move", "Rest"], linkedItemIds: ["taxi-app-around-sgn"], notes: "Choose airport, hotel lobby, luggage storage, or final cafe depending on flight time." },
  { day: "Saturday", date: "Oct 17", time: "17:00", title: "SASCO luggage storage or final cafe", categories: ["Shop", "Free"], linkedItemIds: ["sasco-luggage-storage", "hcmc-district-1-walk"], notes: "Use luggage storage only if flight timing requires it." },
  { day: "Saturday", date: "Oct 17", time: "19:00", title: "Airport dinner / check-in buffer", categories: ["Dining", "Move"], linkedItemIds: ["sasco-luggage-storage"], notes: "Keep the evening flexible for the flight schedule." }
];
