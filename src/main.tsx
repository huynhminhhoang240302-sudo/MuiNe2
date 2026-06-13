import { travelItems } from "./data/travelItems";
import { suggestedItinerary } from "./data/suggestedItinerary";
import type { TravelCategory, TravelItem } from "./data/travelItems";
import type { ItinerarySlot } from "./data/suggestedItinerary";

declare const React: any;
declare const ReactDOM: any;

const { useEffect, useMemo, useRef, useState } = React;

type CategoryId =
  | ""
  | "food"
  | "hotel"
  | "restaurant"
  | "transport"
  | "jeep"
  | "atv"
  | "bike"
  | "beach"
  | "free"
  | "shopping"
  | "night";

type ViewMode = "grid" | "list";
type LanguageId = "en" | "vi" | "th";
type CurrencyId = "VND" | "THB" | "USD";

interface Category {
  id: Exclude<CategoryId, "">;
  label: string;
  compact: string;
  accent: string;
  border: string;
  background: string;
  text: string;
}

interface DayPlan {
  id: string;
  weekday: string;
  date: string;
  slots: string[];
}

interface SlotData {
  category: CategoryId;
  activity: string;
  location: string;
  cost: string;
  contact: string;
  notes: string;
  linkedItemId?: string;
  addedAt?: string;
}

interface SlotRef {
  dayId: string;
  time: string;
}

interface SlotOption {
  key: string;
  label: string;
}

interface ViewerSuggestion {
  id: string;
  title: string;
  category: CategoryId;
  location: string;
  contact: string;
  notes: string;
  createdAt: string;
  source?: "local" | "remote";
}

interface SummaryData {
  food: number;
  transport: number;
  hotel: number;
  totalCost: number;
}

type PlannerState = Record<string, SlotData>;
type CustomSlotState = Record<string, string[]>;
type SuggestionSyncStatus = "local" | "loading" | "synced" | "saving" | "fallback";

type SupabaseConfig = {
  url: string;
  publishableKey: string;
};

const STORAGE_KEY = "mui-ne-trip-planner-v4";
const CUSTOM_SLOTS_KEY = "mui-ne-trip-planner-custom-slots-v3";
const VIEWER_SUGGESTIONS_KEY = "mui-ne-trip-planner-viewer-suggestions-v1";
const LANGUAGE_KEY = "mui-ne-trip-planner-language";
const CURRENCY_KEY = "mui-ne-trip-planner-currency";
const SUPABASE_TABLE = "viewer_recommendations";
const DEFAULT_SUPABASE_CONFIG: SupabaseConfig = {
  url: "https://ayqfhbzwnzyltxcauntc.supabase.co",
  publishableKey: "PASTE_YOUR_sb_publishable_KEY"
};

const LANGUAGE_OPTIONS: { id: LanguageId; label: string }[] = [
  { id: "en", label: "English" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "th", label: "ไทย" }
];

const CURRENCY_OPTIONS: { id: CurrencyId; label: string }[] = [
  { id: "VND", label: "VND" },
  { id: "THB", label: "THB" },
  { id: "USD", label: "USD" }
];

const CURRENCY_TO_VND: Record<CurrencyId, number> = {
  VND: 1,
  THB: 800,
  USD: 25000
};

const LOCALES: Record<LanguageId, string> = {
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

const CATEGORY_TRANSLATIONS: Record<LanguageId, Record<Exclude<CategoryId, "">, { label: string; compact: string }>> = {
  en: {
    food: { label: "Food", compact: "Food" },
    hotel: { label: "Rest", compact: "Rest" },
    restaurant: { label: "Dining", compact: "Dining" },
    transport: { label: "Move", compact: "Move" },
    jeep: { label: "Jeep", compact: "Jeep" },
    atv: { label: "ATV", compact: "ATV" },
    bike: { label: "Bike", compact: "Bike" },
    beach: { label: "Beach", compact: "Beach" },
    free: { label: "Free", compact: "Free" },
    shopping: { label: "Shop", compact: "Shop" },
    night: { label: "Night", compact: "Night" }
  },
  vi: {
    food: { label: "Ăn nhẹ", compact: "Ăn" },
    hotel: { label: "Khách sạn / nghỉ", compact: "Nghỉ" },
    restaurant: { label: "Nhà hàng", compact: "Nhà hàng" },
    transport: { label: "Di chuyển", compact: "Đi lại" },
    jeep: { label: "Tour jeep", compact: "Jeep" },
    atv: { label: "Thuê ATV", compact: "ATV" },
    bike: { label: "Thuê xe máy / xe đạp", compact: "Xe" },
    beach: { label: "Biển / tham quan", compact: "Biển" },
    free: { label: "Thời gian tự do", compact: "Tự do" },
    shopping: { label: "Mua sắm", compact: "Mua sắm" },
    night: { label: "Hoạt động đêm", compact: "Đêm" }
  },
  th: {
    food: { label: "อาหาร", compact: "อาหาร" },
    hotel: { label: "โรงแรม / พัก", compact: "พัก" },
    restaurant: { label: "ร้านอาหาร", compact: "ร้าน" },
    transport: { label: "การเดินทาง", compact: "เดินทาง" },
    jeep: { label: "ทัวร์จี๊ป", compact: "จี๊ป" },
    atv: { label: "เช่า ATV", compact: "ATV" },
    bike: { label: "เช่าจักรยาน / มอเตอร์ไซค์", compact: "รถ" },
    beach: { label: "ชายหาด / เที่ยวชม", compact: "ทะเล" },
    free: { label: "เวลาว่าง", compact: "ว่าง" },
    shopping: { label: "ช้อปปิ้ง", compact: "ช้อป" },
    night: { label: "กิจกรรมกลางคืน", compact: "กลางคืน" }
  }
};

const DAY_TRANSLATIONS: Record<LanguageId, Record<string, { weekday: string; date: string }>> = {
  en: {
    tue: { weekday: "Tuesday", date: "Oct 13" },
    wed: { weekday: "Wednesday", date: "Oct 14" },
    thu: { weekday: "Thursday", date: "Oct 15" },
    fri: { weekday: "Friday", date: "Oct 16" },
    sat: { weekday: "Saturday", date: "Oct 17" }
  },
  vi: {
    tue: { weekday: "Thứ Ba", date: "13 tháng 10" },
    wed: { weekday: "Thứ Tư", date: "14 tháng 10" },
    thu: { weekday: "Thứ Năm", date: "15 tháng 10" },
    fri: { weekday: "Thứ Sáu", date: "16 tháng 10" },
    sat: { weekday: "Thứ Bảy", date: "17 tháng 10" }
  },
  th: {
    tue: { weekday: "วันอังคาร", date: "13 ต.ค." },
    wed: { weekday: "วันพุธ", date: "14 ต.ค." },
    thu: { weekday: "วันพฤหัสบดี", date: "15 ต.ค." },
    fri: { weekday: "วันศุกร์", date: "16 ต.ค." },
    sat: { weekday: "วันเสาร์", date: "17 ต.ค." }
  }
};

const CATEGORIES: Category[] = [
  {
    id: "food",
    label: "Food",
    compact: "Food",
    accent: "#f97316",
    border: "#fed7aa",
    background: "#fff7ed",
    text: "#7c2d12"
  },
  {
    id: "hotel",
    label: "Hotel / rest",
    compact: "Rest",
    accent: "#2563eb",
    border: "#bfdbfe",
    background: "#eff6ff",
    text: "#1e3a8a"
  },
  {
    id: "restaurant",
    label: "Restaurant",
    compact: "Dining",
    accent: "#ea580c",
    border: "#fdba74",
    background: "#ffedd5",
    text: "#7c2d12"
  },
  {
    id: "transport",
    label: "Transport",
    compact: "Move",
    accent: "#64748b",
    border: "#cbd5e1",
    background: "#f8fafc",
    text: "#334155"
  },
  {
    id: "jeep",
    label: "Jeep tour",
    compact: "Jeep",
    accent: "#16a34a",
    border: "#bbf7d0",
    background: "#f0fdf4",
    text: "#14532d"
  },
  {
    id: "atv",
    label: "ATV rental",
    compact: "ATV",
    accent: "#dc2626",
    border: "#fecaca",
    background: "#fef2f2",
    text: "#7f1d1d"
  },
  {
    id: "bike",
    label: "Bike / motorbike rental",
    compact: "Bike",
    accent: "#0f766e",
    border: "#99f6e4",
    background: "#f0fdfa",
    text: "#134e4a"
  },
  {
    id: "beach",
    label: "Beach / sightseeing",
    compact: "Beach",
    accent: "#0891b2",
    border: "#a5f3fc",
    background: "#ecfeff",
    text: "#164e63"
  },
  {
    id: "free",
    label: "Free time",
    compact: "Free",
    accent: "#8b5cf6",
    border: "#ddd6fe",
    background: "#f5f3ff",
    text: "#4c1d95"
  },
  {
    id: "shopping",
    label: "Shopping",
    compact: "Shop",
    accent: "#be123c",
    border: "#fecdd3",
    background: "#fff1f2",
    text: "#881337"
  },
  {
    id: "night",
    label: "Night activity",
    compact: "Night",
    accent: "#4338ca",
    border: "#c7d2fe",
    background: "#eef2ff",
    text: "#312e81"
  }
];

const CATEGORY_MAP = CATEGORIES.reduce<Record<string, Category>>((map, category) => {
  map[category.id] = category;
  return map;
}, {});

const SLOT_START_MINUTES = 7 * 60;
const SLOT_END_MINUTES = 23 * 60;
const EXTRA_SLOT_END_MINUTES = 26 * 60;

function minutesToTime(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

const BASE_TIMES = Array.from({ length: (SLOT_END_MINUTES - SLOT_START_MINUTES) / 60 + 1 }, (_, index) => minutesToTime(SLOT_START_MINUTES + index * 60));
const ADDABLE_SLOT_TIMES = Array.from({ length: (EXTRA_SLOT_END_MINUTES - SLOT_START_MINUTES) / 60 + 1 }, (_, index) => minutesToTime(SLOT_START_MINUTES + index * 60));

const DAY_NAME_TO_ID: Record<string, string> = {
  Tuesday: "tue",
  Wednesday: "wed",
  Thursday: "thu",
  Friday: "fri",
  Saturday: "sat"
};

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function isSchedulableTime(time: string) {
  if (!/^\d{2}:\d{2}$/.test(time)) return false;
  const [, minute] = time.split(":").map(Number);
  if (minute !== 0) return false;
  const minutes = timeToMinutes(time);
  return minutes >= SLOT_START_MINUTES && minutes <= EXTRA_SLOT_END_MINUTES;
}

function sortedUniqueTimes(times: string[]) {
  return Array.from(new Set(times.filter(isSchedulableTime))).sort((a, b) => timeToMinutes(a) - timeToMinutes(b));
}

function slotsForDay(dayName: ItinerarySlot["day"]) {
  const times = new Set(BASE_TIMES);
  suggestedItinerary
    .filter((slot) => slot.day === dayName && isSchedulableTime(slot.time))
    .forEach((slot) => times.add(slot.time));
  return sortedUniqueTimes(Array.from(times));
}

const DAYS: DayPlan[] = [
  { id: "tue", weekday: "Tuesday", date: "Oct 13", slots: slotsForDay("Tuesday") },
  { id: "wed", weekday: "Wednesday", date: "Oct 14", slots: slotsForDay("Wednesday") },
  { id: "thu", weekday: "Thursday", date: "Oct 15", slots: slotsForDay("Thursday") },
  { id: "fri", weekday: "Friday", date: "Oct 16", slots: slotsForDay("Friday") },
  { id: "sat", weekday: "Saturday", date: "Oct 17", slots: slotsForDay("Saturday") }
];

function daysWithCustomSlots(customSlots: CustomSlotState): DayPlan[] {
  return DAYS.map((day) => ({
    ...day,
    slots: sortedUniqueTimes([...day.slots, ...(customSlots[day.id] || [])])
  }));
}

function emptySlot(): SlotData {
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

function slotKey(dayId: string, time: string) {
  return `${dayId}-${time}`;
}

function getDay(dayId: string) {
  return DAYS.find((day) => day.id === dayId) || DAYS[0];
}

function allSlotKeys(customSlots: CustomSlotState = {}) {
  return new Set(daysWithCustomSlots(customSlots).flatMap((day) => day.slots.map((time) => slotKey(day.id, time))));
}

function makeSlot(partial: Partial<SlotData>): SlotData {
  return {
    ...emptySlot(),
    ...partial,
    category: isCategory(partial.category) ? partial.category : ""
  };
}

function isCategory(value: unknown): value is CategoryId {
  return value === "" || CATEGORIES.some((category) => category.id === value);
}

function isSlotEmpty(slot: SlotData) {
  return !slot.category && !slot.activity.trim() && !slot.location.trim() && !slot.cost.trim() && !slot.contact.trim() && !slot.notes.trim() && !slot.linkedItemId;
}

function cleanSlot(value: unknown): SlotData {
  const input = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
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

function samplePlanner(): PlannerState {
  const planner: PlannerState = {};

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

function readLanguage(): LanguageId {
  const saved = window.localStorage.getItem(LANGUAGE_KEY);
  return saved === "vi" || saved === "th" || saved === "en" ? saved : "en";
}

function readCurrency(): CurrencyId {
  const saved = window.localStorage.getItem(CURRENCY_KEY);
  return saved === "THB" || saved === "USD" || saved === "VND" ? saved : "VND";
}

function readSupabaseConfig(): SupabaseConfig | null {
  const configured = ((window as any).MUI_NE_SUPABASE || {}) as Partial<SupabaseConfig> & { anonKey?: string };
  const url = String(configured.url || DEFAULT_SUPABASE_CONFIG.url || "").trim().replace(/\/+$/, "");
  const publishableKey = String(configured.publishableKey || configured.anonKey || DEFAULT_SUPABASE_CONFIG.publishableKey || "").trim();
  const looksPlaceholder = !publishableKey || /PASTE|YOUR_|SUPABASE_KEY|sb_publishable_KEY/i.test(publishableKey);
  if (!url || looksPlaceholder) return null;
  return { url, publishableKey };
}

function supabaseHeaders(config: SupabaseConfig, json = false) {
  return {
    apikey: config.publishableKey,
    Authorization: `Bearer ${config.publishableKey}`,
    ...(json ? { "Content-Type": "application/json", Prefer: "return=representation" } : {})
  };
}

function supabaseTableUrl(config: SupabaseConfig, query = "") {
  return `${config.url}/rest/v1/${SUPABASE_TABLE}${query}`;
}

function rowToViewerSuggestion(row: Record<string, unknown>): ViewerSuggestion {
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

function mergeViewerSuggestions(primary: ViewerSuggestion[], secondary: ViewerSuggestion[]) {
  const output: ViewerSuggestion[] = [];
  const seen = new Set<string>();

  for (const suggestion of [...primary, ...secondary]) {
    const key = suggestion.id || `${suggestion.title}|${suggestion.location}|${suggestion.contact}`;
    if (!suggestion.title || seen.has(key)) continue;
    seen.add(key);
    output.push(suggestion);
  }

  return output;
}

async function loadSupabaseRecommendations(config: SupabaseConfig): Promise<ViewerSuggestion[]> {
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
  return normalizeViewerSuggestions(Array.isArray(rows) ? rows.map((row) => ({ ...(row as Record<string, unknown>), source: "remote" })) : []);
}

async function createSupabaseRecommendation(config: SupabaseConfig, suggestion: Omit<ViewerSuggestion, "id" | "createdAt" | "source">): Promise<ViewerSuggestion> {
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
    const { status, ...payloadWithoutStatus } = payload;
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
    createdAt: (row as Record<string, unknown>).created_at || currentTimestamp()
  });
}

function suggestionSyncLabel(status: SuggestionSyncStatus, language: LanguageId) {
  if (status === "loading") return text(language, "syncingRecommendations");
  if (status === "saving") return text(language, "savingRecommendation");
  if (status === "synced") return text(language, "sharedRecommendations");
  return text(language, "localRecommendations");
}

function normalizeCustomSlots(input: unknown): CustomSlotState {
  const customSlots: CustomSlotState = {};
  if (!input || typeof input !== "object") return customSlots;

  for (const day of DAYS) {
    const value = (input as Record<string, unknown>)[day.id];
    if (!Array.isArray(value)) continue;
    const baseTimes = new Set(day.slots);
    const times = sortedUniqueTimes(value.map(String)).filter((time) => !baseTimes.has(time));
    if (times.length) customSlots[day.id] = times;
  }

  return customSlots;
}

function normalizeViewerSuggestions(input: unknown): ViewerSuggestion[] {
  if (!Array.isArray(input)) return [];

  return input
    .map((value) => {
      const source = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
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
    })
    .filter((suggestion) => suggestion.title);
}

function readCustomSlots(): CustomSlotState {
  try {
    return normalizeCustomSlots(JSON.parse(window.localStorage.getItem(CUSTOM_SLOTS_KEY) || "{}"));
  } catch {
    return {};
  }
}

function readViewerSuggestions(): ViewerSuggestion[] {
  try {
    return normalizeViewerSuggestions(JSON.parse(window.localStorage.getItem(VIEWER_SUGGESTIONS_KEY) || "[]"));
  } catch {
    return [];
  }
}

function readPlanner(): PlannerState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return samplePlanner();
    return normalizePlanner(JSON.parse(raw), readCustomSlots());
  } catch {
    return samplePlanner();
  }
}

function normalizePlanner(input: unknown, customSlots: CustomSlotState = {}): PlannerState {
  const source = input && typeof input === "object" && "planner" in input ? (input as Record<string, unknown>).planner : input;
  const validKeys = allSlotKeys(customSlots);
  const planner: PlannerState = {};

  if (!source || typeof source !== "object") {
    return planner;
  }

  for (const [key, value] of Object.entries(source as Record<string, unknown>)) {
    if (!validKeys.has(key)) continue;
    const slot = cleanSlot(value);
    if (!isSlotEmpty(slot)) {
      planner[key] = slot;
    }
  }

  return planner;
}

function formatTime(time: string) {
  const [hourString, minuteString] = time.split(":");
  const hour = Number(hourString);
  const minute = Number(minuteString);
  const hourOfDay = ((hour % 24) + 24) % 24;
  const suffix = hourOfDay >= 12 ? "PM" : "AM";
  const displayHour = hourOfDay % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function currentTimestamp() {
  return new Date().toISOString();
}

function normalizeTimestamp(value: unknown) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}

function formatAddedDate(value: string | undefined, language: LanguageId) {
  const normalized = normalizeTimestamp(value);
  if (!normalized) return "";
  return new Intl.DateTimeFormat(LOCALES[language], {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(normalized));
}

function text(language: LanguageId, key: keyof typeof UI_TEXT.en) {
  return UI_TEXT[language][key] || UI_TEXT.en[key];
}

function dayLabel(day: DayPlan, language: LanguageId) {
  return DAY_TRANSLATIONS[language][day.id] || { weekday: day.weekday, date: day.date };
}

function categoryLabel(id: CategoryId, language: LanguageId) {
  return id ? CATEGORY_TRANSLATIONS[language][id]?.label || CATEGORY_MAP[id]?.label || text(language, "unplanned") : text(language, "unplanned");
}

function categoryCompact(id: Exclude<CategoryId, "">, language: LanguageId) {
  return CATEGORY_TRANSLATIONS[language][id]?.compact || CATEGORY_MAP[id]?.compact || id;
}

const TRAVEL_TO_SLOT_CATEGORY: Record<TravelCategory, Exclude<CategoryId, "">> = {
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

const SLOT_TO_TRAVEL_CATEGORY: Record<Exclude<CategoryId, "">, TravelCategory> = {
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

const LIBRARY_CATEGORIES: ("All" | TravelCategory)[] = ["All", "Food", "Rest", "Dining", "Move", "Jeep", "ATV", "Bike", "Beach", "Free", "Shop", "Night"];

function travelCategoryToSlot(category?: TravelCategory): CategoryId {
  return category ? TRAVEL_TO_SLOT_CATEGORY[category] || "" : "";
}

function slotCategoryToTravel(category: CategoryId): TravelCategory | "" {
  return category ? SLOT_TO_TRAVEL_CATEGORY[category] || "" : "";
}

function findTravelItem(id?: string) {
  return id ? travelItems.find((item) => item.id === id) : undefined;
}

function firstUsefulContact(item?: TravelItem) {
  if (!item) return "";
  return item.websiteUrl || item.bookingUrl || item.mapUrl || item.contacts?.find((contact) => contact.url)?.url || item.contacts?.[0]?.value || "";
}

function itemArea(item?: TravelItem) {
  return item?.area || item?.address || "";
}

function slotFromTravelItem(item: TravelItem, current: SlotData = emptySlot()): SlotData {
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

function slotFromViewerSuggestion(suggestion: ViewerSuggestion, current: SlotData = emptySlot()): SlotData {
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

function normalizeCostNumber(value: string) {
  const number = Number(value.replace(/,/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function extractCostEstimate(value: string) {
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

function parseCostToVnd(value: string) {
  const amount = extractCostEstimate(value);
  if (!amount) return 0;
  const lower = value.toLowerCase();
  if (/\$|usd|dollar/.test(lower)) return amount * CURRENCY_TO_VND.USD;
  if (/\u0e3f|thb|baht|\u0e1a\u0e32\u0e17/.test(lower)) return amount * CURRENCY_TO_VND.THB;
  return amount;
}

function slotEstimatedCostToVnd(slot: SlotData) {
  const slotCost = parseCostToVnd(slot.cost);
  if (slotCost) return slotCost;
  return parseCostToVnd(findTravelItem(slot.linkedItemId)?.price || "");
}

function formatMoneyFromVnd(value: number, currency: CurrencyId, language: LanguageId) {
  if (!value) return `${currency} 0`;
  const amount = value / CURRENCY_TO_VND[currency];
  const digits = currency === "USD" ? 2 : 0;
  const formatted = new Intl.NumberFormat(LOCALES[language], {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(amount);
  return `${currency} ${formatted}`;
}

function formatSlotCost(value: string, currency: CurrencyId, language: LanguageId) {
  const vnd = parseCostToVnd(value);
  return vnd ? formatMoneyFromVnd(vnd, currency, language) : value;
}

function linkHref(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^www\./i.test(trimmed)) return `https://${trimmed}`;
  if (/^[+()\-\s\d]{7,}$/.test(trimmed)) return `tel:${trimmed.replace(/[^\d+]/g, "")}`;
  return "";
}

function escapeHtml(value: unknown) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    };
    return replacements[character] || character;
  });
}

function printableDetail(label: string, value: string, link = false) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const href = link ? linkHref(trimmed) : "";
  const content = href ? `<a href="${escapeHtml(href)}">${escapeHtml(trimmed)}</a>` : escapeHtml(trimmed);
  return `<div><strong>${escapeHtml(label)}:</strong> ${content}</div>`;
}

function printableSlotRow(day: DayPlan, time: string, slot: SlotData, language: LanguageId, currency: CurrencyId) {
  const isEmpty = isSlotEmpty(slot);
  const category = slot.category ? CATEGORY_MAP[slot.category] : null;
  const categoryName = slot.category ? categoryLabel(slot.category, language) : "";
  const linkedItem = findTravelItem(slot.linkedItemId);
  const costSource = slot.cost || linkedItem?.price || "";
  const costText = costSource ? formatSlotCost(costSource, currency, language) : "";
  const addedDate = formatAddedDate(slot.addedAt, language);
  const activity = slot.activity.trim() || (isEmpty ? text(language, "openSlot") : categoryName || text(language, "unplanned"));
  const badgeStyle = category
    ? `style="background:${category.background};border-color:${category.border};color:${category.text}"`
    : "";
  const details = [
    printableDetail(text(language, "location"), slot.location),
    printableDetail(text(language, "estimatedCost"), costText),
    printableDetail(text(language, "contact"), slot.contact, true),
    printableDetail(text(language, "notes"), slot.notes),
    addedDate ? printableDetail(text(language, "addedOn"), addedDate) : "",
    linkedItem ? printableDetail(text(language, "linkedOption"), linkedItem.title) : ""
  ].filter(Boolean).join("");

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
}: {
  language: LanguageId;
  currency: CurrencyId;
  planner: PlannerState;
  plannerDays: DayPlan[];
  viewerSuggestions: ViewerSuggestion[];
  summary: SummaryData;
}) {
  const generatedAt = new Intl.DateTimeFormat(LOCALES[language], {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date());
  const summaryCards = [
    { label: text(language, "foodSlots"), value: String(summary.food) },
    { label: text(language, "transportSlots"), value: String(summary.transport) },
    { label: text(language, "hotelSlots"), value: String(summary.hotel) },
    { label: text(language, "estimatedTotal"), value: formatMoneyFromVnd(summary.totalCost, currency, language) }
  ];
  const daySections = plannerDays.map((day) => {
    const localizedDay = dayLabel(day, language);
    const rows = day.slots
      .map((time) => printableSlotRow(day, time, planner[slotKey(day.id, time)] || emptySlot(), language, currency))
      .join("");

    return `
      <section class="daySection">
        <h2>${escapeHtml(localizedDay.weekday)} <span>${escapeHtml(localizedDay.date)}</span></h2>
        <table>
          <tbody>${rows}</tbody>
        </table>
      </section>
    `;
  }).join("");
  const suggestionCards = viewerSuggestions.length
    ? viewerSuggestions.map((suggestion) => `
      <article class="suggestionCard">
        <span>${escapeHtml(categoryLabel(suggestion.category, language))}</span>
        <small>${escapeHtml(text(language, "addedOn"))}: ${escapeHtml(formatAddedDate(suggestion.createdAt, language))}</small>
        <h3>${escapeHtml(suggestion.title)}</h3>
        ${suggestion.location ? `<p>${escapeHtml(suggestion.location)}</p>` : ""}
        ${suggestion.notes ? `<p>${escapeHtml(suggestion.notes)}</p>` : ""}
        ${suggestion.contact ? printableDetail(text(language, "contact"), suggestion.contact, true) : ""}
      </article>
    `).join("")
    : `<p class="emptyText">${escapeHtml(text(language, "noSuggestionsYet"))}</p>`;

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
      ${summaryCards.map((card) => `
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

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
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

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name] || paths.grid} />
    </svg>
  );
}

function App() {
  const supabaseConfig = useMemo(() => readSupabaseConfig(), []);
  const [language, setLanguage] = useState<LanguageId>(() => readLanguage());
  const [currency, setCurrency] = useState<CurrencyId>(() => readCurrency());
  const [planner, setPlanner] = useState<PlannerState>(() => readPlanner());
  const [customSlots, setCustomSlots] = useState<CustomSlotState>(() => readCustomSlots());
  const [viewerSuggestions, setViewerSuggestions] = useState<ViewerSuggestion[]>(() => readViewerSuggestions());
  const [suggestionSyncStatus, setSuggestionSyncStatus] = useState<SuggestionSyncStatus>(() => supabaseConfig ? "loading" : "local");
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [libraryFilter, setLibraryFilter] = useState<"All" | TravelCategory>("All");
  const [librarySearch, setLibrarySearch] = useState("");
  const [editingSlot, setEditingSlot] = useState<SlotRef | null>(null);
  const [dragOverKey, setDragOverKey] = useState<string | null>(null);
  const [toast, setToast] = useState("");
  const clickTimer = useRef<number | null>(null);

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
    loadSupabaseRecommendations(supabaseConfig)
      .then((remoteSuggestions) => {
        if (cancelled) return;
        setViewerSuggestions((current) => mergeViewerSuggestions(remoteSuggestions, current));
        setSuggestionSyncStatus("synced");
      })
      .catch(() => {
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
    return plannerDays.flatMap((day) =>
      day.slots.map((time) => {
        const key = slotKey(day.id, time);
        return { key, day, time, slot: planner[key] || emptySlot() };
      })
    );
  }, [planner, plannerDays]);

  const targetOptions = useMemo<SlotOption[]>(() => {
    return flatSlots.map(({ key, day, time, slot }) => ({
      key,
      label: `${dayLabel(day, language).weekday}, ${dayLabel(day, language).date} - ${formatTime(time)}${isSlotEmpty(slot) ? "" : ` - ${slot.activity || categoryLabel(slot.category, language)}`}`
    }));
  }, [flatSlots, language]);

  const summary = useMemo(() => {
    let food = 0;
    let transport = 0;
    let hotel = 0;
    let totalCost = 0;

    for (const { slot } of flatSlots) {
      if (isSlotEmpty(slot)) continue;
      if (slot.category === "food" || slot.category === "restaurant") food += 1;
      if (slot.category === "transport") transport += 1;
      if (slot.category === "hotel") hotel += 1;
      totalCost += slotEstimatedCostToVnd(slot);
    }

    return { food, transport, hotel, totalCost };
  }, [flatSlots]);

  function visibleSlot(day: DayPlan, time: string) {
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
    const haystack = [
      day.weekday,
      day.date,
      localizedDay.weekday,
      localizedDay.date,
      formatTime(time),
      category,
      slot.activity,
      slot.location,
      slot.cost,
      slot.contact,
      slot.notes
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  }

  function saveSlot(ref: SlotRef, data: SlotData) {
    const key = slotKey(ref.dayId, ref.time);
    const cleaned = cleanSlot(data);
    setPlanner((current) => {
      const next = { ...current };
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

  function clearSlot(ref: SlotRef) {
    const key = slotKey(ref.dayId, ref.time);
    setPlanner((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
    setToast(text(language, "slotCleared"));
  }

  function duplicateSlot(data: SlotData, targetKey: string) {
    const cleaned = cleanSlot(data);
    if (!targetKey || isSlotEmpty(cleaned)) return;
    setPlanner((current) => ({
      ...current,
      [targetKey]: makeSlot({ ...cleaned, addedAt: currentTimestamp() })
    }));
    setToast(text(language, "activityDuplicated"));
  }

  function cycleSlot(ref: SlotRef) {
    const key = slotKey(ref.dayId, ref.time);
    setPlanner((current) => {
      const existing = current[key] || emptySlot();
      const currentIndex = CATEGORIES.findIndex((category) => category.id === existing.category);
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

  function openSlot(ref: SlotRef) {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
    }
    clickTimer.current = window.setTimeout(() => {
      setEditingSlot(ref);
      clickTimer.current = null;
    }, 160);
  }

  function doubleClickSlot(ref: SlotRef) {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }
    cycleSlot(ref);
  }

  function moveSlot(sourceKey: string, targetKey: string) {
    if (!sourceKey || sourceKey === targetKey) return;
    setPlanner((current) => {
      const source = current[sourceKey];
      if (!source || isSlotEmpty(source)) return current;
      const target = current[targetKey];
      const next = { ...current };
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

  function addSlot(dayId: string) {
    const day = plannerDays.find((item) => item.id === dayId);
    if (!day) return;
    const existingTimes = new Set(day.slots);
    const nextTime = ADDABLE_SLOT_TIMES.find((time) => !existingTimes.has(time));
    if (!nextTime) {
      setToast(text(language, "noMoreSlots"));
      return;
    }

    setCustomSlots((current) => ({
      ...current,
      [dayId]: sortedUniqueTimes([...(current[dayId] || []), nextTime])
    }));
    setEditingSlot({ dayId, time: nextTime });
    setToast(text(language, "slotAdded"));
  }

  async function addViewerSuggestion(data: Omit<ViewerSuggestion, "id" | "createdAt" | "source">) {
    const cleaned = {
      ...data,
      title: data.title.trim(),
      location: data.location.trim(),
      contact: data.contact.trim(),
      notes: data.notes.trim()
    };
    if (!cleaned.title) return;

    const fallbackSuggestion: ViewerSuggestion = {
      id: `suggestion-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      ...cleaned,
      createdAt: currentTimestamp(),
      source: "local"
    };

    if (supabaseConfig) {
      setSuggestionSyncStatus("saving");
      try {
        const sharedSuggestion = await createSupabaseRecommendation(supabaseConfig, cleaned);
        setViewerSuggestions((current) => mergeViewerSuggestions([sharedSuggestion], current));
        setSuggestionSyncStatus("synced");
        setToast(text(language, "suggestionShared"));
        return;
      } catch {
        setSuggestionSyncStatus("fallback");
      }
    }

    setViewerSuggestions((current) => mergeViewerSuggestions([fallbackSuggestion], current));
    setToast(supabaseConfig ? text(language, "suggestionSavedLocally") : text(language, "suggestionAdded"));
  }

  function deleteViewerSuggestion(id: string) {
    const suggestion = viewerSuggestions.find((item) => item.id === id);
    if (suggestion?.source === "remote") return;
    setViewerSuggestions((current) => current.filter((suggestion) => suggestion.id !== id));
    setToast(text(language, "suggestionDeleted"));
  }

  function addViewerSuggestionToSlot(suggestion: ViewerSuggestion, targetKey: string) {
    if (!targetKey) return;
    setPlanner((current) => ({
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

  return (
    <main className="appShell">
      <Header
        language={language}
        onReset={resetPlanner}
        onClearAll={clearAllSlots}
        onExport={exportPlanner}
        onPrint={() => window.print()}
      />

      <section className="plannerSurface">
        <SummaryPanel summary={summary} language={language} currency={currency} />
        <TripNotes language={language} />
        <ExperienceStrip language={language} />
        <FilterBar
          filter={filter}
          search={search}
          viewMode={viewMode}
          language={language}
          currency={currency}
          onFilter={setFilter}
          onSearch={setSearch}
          onViewMode={setViewMode}
          onLanguage={setLanguage}
          onCurrency={setCurrency}
        />
        <ViewerSuggestionsPanel
          language={language}
          suggestions={viewerSuggestions}
          syncStatus={suggestionSyncStatus}
          targetOptions={targetOptions}
          onAdd={addViewerSuggestion}
          onDelete={deleteViewerSuggestion}
          onAddToSlot={addViewerSuggestionToSlot}
        />

        <section className={viewMode === "grid" ? "calendarGrid" : "dayList"} aria-label={text(language, "tripSchedule")}>
          {plannerDays.map((day) => (
            <DayColumn
              key={day.id}
              day={day}
              planner={planner}
              viewMode={viewMode}
              language={language}
              currency={currency}
              isVisible={visibleSlot}
              dragOverKey={dragOverKey}
              onSlotClick={openSlot}
              onSlotDoubleClick={doubleClickSlot}
              onAddSlot={addSlot}
              onDragStart={(event, key) => event.dataTransfer.setData("text/plain", key)}
              onDragOver={(event, key) => {
                event.preventDefault();
                setDragOverKey(key);
              }}
              onDragLeave={() => setDragOverKey(null)}
              onDrop={(event, key) => {
                event.preventDefault();
                moveSlot(event.dataTransfer.getData("text/plain"), key);
              }}
            />
          ))}
        </section>

        <ResearchLibrary
          language={language}
          filter={libraryFilter}
          search={librarySearch}
          onFilter={setLibraryFilter}
          onSearch={setLibrarySearch}
        />
      </section>

      {editingSlot && activeEditingSlot && (
        <SlotEditorModal
          slotRef={editingSlot}
          slot={activeEditingSlot}
          language={language}
          currency={currency}
          targetOptions={targetOptions.filter((option) => option.key !== slotKey(editingSlot.dayId, editingSlot.time))}
          onSave={(data) => {
            saveSlot(editingSlot, data);
            setEditingSlot(null);
          }}
          onClear={() => {
            clearSlot(editingSlot);
            setEditingSlot(null);
          }}
          onDuplicate={duplicateSlot}
          onClose={() => setEditingSlot(null)}
        />
      )}

      {toast && <div className="toast" role="status">{toast}</div>}
    </main>
  );
}

function Header({
  language,
  onReset,
  onClearAll,
  onExport,
  onPrint
}: {
  language: LanguageId;
  onReset: () => void;
  onClearAll: () => void;
  onExport: () => void;
  onPrint: () => void;
}) {
  return (
    <header className="hero">
      <div className="heroOverlay">
        <div className="heroContent">
          <div>
            <p className="eyebrow">{text(language, "place")}</p>
            <h1>{text(language, "title")}</h1>
            <p className="subtitle">{text(language, "dates")}</p>
          </div>
          <div className="headerActions noPrint" aria-label={text(language, "itineraryActions")}>
            <button className="iconButton" type="button" onClick={onReset} title={text(language, "reset")}>
              <Icon name="reset" />
              <span>{text(language, "reset")}</span>
            </button>
            <button className="iconButton clearAllButton" type="button" onClick={onClearAll} title={text(language, "clearAll")}>
              <Icon name="clear" />
              <span>{text(language, "clearAll")}</span>
            </button>
            <button className="iconButton" type="button" onClick={onExport} title={text(language, "exportJson")}>
              <Icon name="export" />
              <span>{text(language, "exportJson")}</span>
            </button>
            <button className="iconButton" type="button" onClick={onPrint} title={text(language, "print")}>
              <Icon name="print" />
              <span>{text(language, "print")}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function SummaryPanel({
  summary,
  language,
  currency
}: {
  summary: { food: number; transport: number; hotel: number; totalCost: number };
  language: LanguageId;
  currency: CurrencyId;
}) {
  const cards = [
    { label: text(language, "foodSlots"), value: summary.food, tone: "food" },
    { label: text(language, "transportSlots"), value: summary.transport, tone: "transport" },
    { label: text(language, "hotelSlots"), value: summary.hotel, tone: "hotel" },
    { label: text(language, "estimatedTotal"), value: formatMoneyFromVnd(summary.totalCost, currency, language), tone: "money" }
  ];

  return (
    <section className="summaryGrid" aria-label={text(language, "itinerarySummary")}>
      {cards.map((card) => (
        <article className={`summaryCard ${card.tone}`} key={card.label}>
          <span>{card.label}</span>
          <strong>{card.value}</strong>
        </article>
      ))}
    </section>
  );
}

function TripNotes({ language }: { language: LanguageId }) {
  return (
    <section className="tripNotes" aria-label={text(language, "tripNotes")}>
      <article className="tripNoteCard photographer">
        <p>{text(language, "photographerNote")}</p>
      </article>
      <article className="tripNoteCard shopping">
        <p>{text(language, "shoppingNote")}</p>
      </article>
    </section>
  );
}

function ExperienceStrip({ language }: { language: LanguageId }) {
  const items = [
    text(language, "visualHcmc"),
    text(language, "visualDunes"),
    text(language, "visualVilla"),
    text(language, "visualBeach")
  ];

  return (
    <section className="experienceStrip" aria-label={text(language, "visualStory")}>
      <header>
        <span>{text(language, "visualStory")}</span>
      </header>
      <div className="experienceGrid">
        {items.map((label, index) => (
          <article className={`experienceCard frame${index}`} key={label}>
            <strong>{label}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function ViewerSuggestionsPanel({
  language,
  suggestions,
  syncStatus,
  targetOptions,
  onAdd,
  onDelete,
  onAddToSlot
}: {
  language: LanguageId;
  suggestions: ViewerSuggestion[];
  syncStatus: SuggestionSyncStatus;
  targetOptions: SlotOption[];
  onAdd: (suggestion: Omit<ViewerSuggestion, "id" | "createdAt" | "source">) => void | Promise<void>;
  onDelete: (id: string) => void;
  onAddToSlot: (suggestion: ViewerSuggestion, targetKey: string) => void;
}) {
  const [draft, setDraft] = useState<Omit<ViewerSuggestion, "id" | "createdAt" | "source">>({
    title: "",
    category: "free",
    location: "",
    contact: "",
    notes: ""
  });
  const [targetById, setTargetById] = useState<Record<string, string>>({});

  function patchDraft(partial: Partial<Omit<ViewerSuggestion, "id" | "createdAt" | "source">>) {
    setDraft((current) => ({ ...current, ...partial }));
  }

  function submit(event: any) {
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

  return (
    <section className="viewerSuggestions" aria-label={text(language, "viewerSuggestions")}>
      <div className="suggestionIntro">
        <div>
          <h2>{text(language, "viewerSuggestions")}</h2>
          <p>{text(language, "viewerSuggestionsSubtitle")}</p>
        </div>
        <span className={`syncBadge ${syncStatus}`}>{suggestionSyncLabel(syncStatus, language)}</span>
      </div>

      <form className="suggestionForm" onSubmit={submit}>
        <label>
          <span>{text(language, "suggestionTitle")}</span>
          <input value={draft.title} onChange={(event: any) => patchDraft({ title: event.target.value })} placeholder={text(language, "suggestionPlaceholder")} />
        </label>
        <label>
          <span>{text(language, "suggestionCategory")}</span>
          <select value={draft.category} onChange={(event: any) => patchDraft({ category: event.target.value })}>
            {CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {categoryLabel(category.id, language)}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>{text(language, "suggestionLocation")}</span>
          <input value={draft.location} onChange={(event: any) => patchDraft({ location: event.target.value })} placeholder={text(language, "suggestionLocationPlaceholder")} />
        </label>
        <label>
          <span>{text(language, "suggestionContact")}</span>
          <input value={draft.contact} onChange={(event: any) => patchDraft({ contact: event.target.value })} placeholder={text(language, "contactPlaceholder")} />
        </label>
        <label className="wide">
          <span>{text(language, "suggestionNotes")}</span>
          <textarea value={draft.notes} onChange={(event: any) => patchDraft({ notes: event.target.value })} placeholder={text(language, "suggestionNotesPlaceholder")} rows={3} />
        </label>
        <button className="primaryButton suggestionSubmit" type="submit" disabled={!draft.title.trim()}>
          <Icon name="plus" />
          <span>{text(language, "addSuggestion")}</span>
        </button>
      </form>

      <div className="suggestionCards">
        {suggestions.length ? (
          suggestions.map((suggestion) => {
            const targetKey = targetById[suggestion.id] || targetOptions[0]?.key || "";
            const href = linkHref(suggestion.contact);
            const category = suggestion.category ? CATEGORY_MAP[suggestion.category] : null;
            const addedDate = formatAddedDate(suggestion.createdAt, language);
            const suggestionStyle = {
              "--suggestion-accent": category?.accent || "#0891b2",
              "--suggestion-bg": category?.background || "#ecfeff",
              "--suggestion-text": category?.text || "#075985"
            } as any;
            return (
              <article className="suggestionCard userAdded" key={suggestion.id} style={suggestionStyle}>
                <div className="suggestionTop">
                  <div className="suggestionTags">
                    <span className="suggestionCategory">{categoryLabel(suggestion.category, language)}</span>
                    {suggestion.source === "remote" && <span className="sharedBadge">{text(language, "sharedRecommendations")}</span>}
                    {addedDate && (
                      <span className="addedPill">
                        {text(language, "addedOn")} · {addedDate}
                      </span>
                    )}
                  </div>
                  {suggestion.source !== "remote" && (
                    <button className="roundButton" type="button" onClick={() => onDelete(suggestion.id)} title={text(language, "deleteSuggestion")}>
                      <Icon name="clear" />
                    </button>
                  )}
                </div>
                <h3>{suggestion.title}</h3>
                {suggestion.location && <p>{suggestion.location}</p>}
                {suggestion.notes && <p>{suggestion.notes}</p>}
                {suggestion.contact && (
                  href ? (
                    <a className="suggestionLink" href={href} target="_blank" rel="noreferrer">{suggestion.contact}</a>
                  ) : (
                    <p>{suggestion.contact}</p>
                  )
                )}
                <div className="suggestionSlotRow">
                  <select value={targetKey} onChange={(event: any) => setTargetById((current) => ({ ...current, [suggestion.id]: event.target.value }))}>
                    {targetOptions.map((option) => (
                      <option key={option.key} value={option.key}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <button className="secondaryButton" type="button" disabled={!targetKey} onClick={() => onAddToSlot(suggestion, targetKey)}>
                    <Icon name="plus" />
                    <span>{text(language, "addToSlot")}</span>
                  </button>
                </div>
              </article>
            );
          })
        ) : (
          <p className="emptySuggestions">{text(language, "noSuggestionsYet")}</p>
        )}
      </div>
    </section>
  );
}

function ResearchLibrary({
  language,
  filter,
  search,
  onFilter,
  onSearch
}: {
  language: LanguageId;
  filter: "All" | TravelCategory;
  search: string;
  onFilter: (category: "All" | TravelCategory) => void;
  onSearch: (query: string) => void;
}) {
  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return travelItems.filter((item) => {
      const categoryMatches = filter === "All" || item.categories.includes(filter);
      if (!categoryMatches) return false;
      if (!query) return true;
      const contactText = item.contacts?.map((contact) => `${contact.label} ${contact.type} ${contact.value} ${contact.url || ""}`).join(" ") || "";
      return [
        item.title,
        item.shortDescription,
        item.description,
        item.area,
        item.address,
        item.price,
        item.travelTime,
        item.recommendedFor,
        item.caution,
        item.notes,
        item.tags?.join(" "),
        contactText
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [filter, search]);

  return (
    <section className="researchLibrary" aria-label={text(language, "researchLibrary")}>
      <div className="libraryHeader">
        <div>
          <h2>{text(language, "researchLibrary")}</h2>
          <p>{text(language, "researchSubtitle")}</p>
        </div>
        <label className="searchField librarySearch">
          <Icon name="search" />
          <input value={search} onChange={(event: any) => onSearch(event.target.value)} placeholder={text(language, "librarySearch")} type="search" />
        </label>
      </div>

      <div className="categoryChips libraryChips" aria-label={text(language, "quickCategoryFilters")}>
        {LIBRARY_CATEGORIES.map((category) => (
          <button
            key={category}
            className={filter === category ? "chip active" : "chip"}
            type="button"
            onClick={() => onFilter(category)}
            style={{ "--chip-color": category === "All" ? "#0891b2" : CATEGORY_MAP[TRAVEL_TO_SLOT_CATEGORY[category]]?.accent } as any}
          >
            {category === "All" ? text(language, "all") : category}
          </button>
        ))}
      </div>

      <div className="travelItemGrid">
        {filteredItems.map((item) => (
          <TravelItemCard key={item.id} item={item} language={language} />
        ))}
      </div>

      <DevelopmentLinksMissing language={language} />
    </section>
  );
}

function TravelItemCard({ item, language }: { item: TravelItem; language: LanguageId }) {
  const confidenceText = item.confidence === "verified" ? text(language, "verified") : item.confidence === "needs-confirmation" ? text(language, "needsConfirmation") : text(language, "sourceNote");
  const badges = itemBadges(item, language);
  const contacts = item.contacts?.filter((contact) => contact.url || contact.value) || [];

  return (
    <article className={`travelItemCard ${item.confidence === "needs-confirmation" ? "needsConfirmation" : ""}`}>
      <div className="travelItemTop">
        <h3>{item.title}</h3>
        <span className={`confidenceBadge ${item.confidence || "source-note"}`}>{confidenceText}</span>
      </div>

      <div className="itemCategoryRow">
        {item.categories.map((category) => (
          <span className="itemCategory" key={category} style={{ "--chip-color": CATEGORY_MAP[TRAVEL_TO_SLOT_CATEGORY[category]]?.accent } as any}>
            {category}
          </span>
        ))}
      </div>

      {badges.length > 0 && (
        <div className="itemBadgeRow">
          {badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      )}

      <p className="itemDescription">{item.shortDescription}</p>

      <dl className="itemFacts">
        {item.price && (
          <>
            <dt>{text(language, "price")}</dt>
            <dd>{item.price}</dd>
          </>
        )}
        {item.travelTime && (
          <>
            <dt>{text(language, "travelTime")}</dt>
            <dd>{item.travelTime}</dd>
          </>
        )}
        {item.recommendedFor && (
          <>
            <dt>{text(language, "recommendedFor")}</dt>
            <dd>{item.recommendedFor}</dd>
          </>
        )}
        {(item.area || item.address) && (
          <>
            <dt>{text(language, "areaAddress")}</dt>
            <dd>{[item.area, item.address].filter(Boolean).join(" - ")}</dd>
          </>
        )}
        {item.caution && (
          <>
            <dt>{text(language, "caution")}</dt>
            <dd className="cautionText">{item.caution}</dd>
          </>
        )}
        {item.notes && (
          <>
            <dt>{text(language, "note")}</dt>
            <dd>{item.notes}</dd>
          </>
        )}
      </dl>

      {contacts.length > 0 && (
        <div className="contactButtons">
          {contacts.map((contact) => (
            <a key={`${item.id}-${contact.label}-${contact.value}`} href={contact.url || contact.value} target="_blank" rel="noreferrer">
              {contact.type}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function itemBadges(item: TravelItem, language: LanguageId) {
  const tags = (item.tags || []).join(" ").toLowerCase();
  const badges: string[] = [];
  if (tags.includes("recommended") || tags.includes("must-do")) badges.push(text(language, "recommended"));
  if (tags.includes("budget") || tags.includes("cheapest")) badges.push(text(language, "budget"));
  if (tags.includes("family")) badges.push(text(language, "family"));
  if (tags.includes("luxury")) badges.push(text(language, "luxury"));
  if (tags.includes("weather")) badges.push(text(language, "weatherBackup"));
  if (item.confidence === "needs-confirmation") badges.push(text(language, "needsConfirmation"));
  return Array.from(new Set(badges));
}

function DevelopmentLinksMissing({ language }: { language: LanguageId }) {
  const isDevelopment = window.location.protocol === "file:" || ["127.0.0.1", "localhost"].includes(window.location.hostname);
  const missing = travelItems.filter((item) => !item.websiteUrl && !item.mapUrl && !item.contacts?.some((contact) => contact.url));
  if (!isDevelopment || missing.length === 0) return null;

  return (
    <details className="linksMissing">
      <summary>
        {text(language, "linksMissing")} <span>({text(language, "developmentOnly")})</span>
      </summary>
      <ul>
        {missing.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </details>
  );
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
}: {
  filter: CategoryId | "all";
  search: string;
  viewMode: ViewMode;
  language: LanguageId;
  currency: CurrencyId;
  onFilter: (category: CategoryId | "all") => void;
  onSearch: (query: string) => void;
  onViewMode: (mode: ViewMode) => void;
  onLanguage: (language: LanguageId) => void;
  onCurrency: (currency: CurrencyId) => void;
}) {
  return (
    <section className="filterBar noPrint" aria-label={text(language, "plannerFilters")}>
      <label className="searchField">
        <Icon name="search" />
        <input
          value={search}
          onChange={(event: any) => onSearch(event.target.value)}
          placeholder={text(language, "searchPlaceholder")}
          type="search"
        />
      </label>

      <label className="selectField">
        <span>{text(language, "show")}</span>
        <select value={filter} onChange={(event: any) => onFilter(event.target.value)}>
          <option value="all">{text(language, "allCategories")}</option>
          {CATEGORIES.map((category) => (
            <option key={category.id} value={category.id}>
              {categoryLabel(category.id, language)}
            </option>
          ))}
        </select>
      </label>

      <div className="localeControls">
        <label className="selectField">
          <span>{text(language, "language")}</span>
          <select data-control="language" value={language} onChange={(event: any) => onLanguage(event.target.value)}>
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="selectField">
          <span>{text(language, "currency")}</span>
          <select data-control="currency" value={currency} onChange={(event: any) => onCurrency(event.target.value)}>
            {CURRENCY_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <span className="rateNote">{text(language, "rates")}</span>
      </div>

      <div className="categoryChips" aria-label={text(language, "quickCategoryFilters")}>
        <button className={filter === "all" ? "chip active" : "chip"} type="button" onClick={() => onFilter("all")}>
          {text(language, "all")}
        </button>
        {CATEGORIES.map((category) => (
          <button
            className={filter === category.id ? "chip active" : "chip"}
            type="button"
            key={category.id}
            onClick={() => onFilter(category.id)}
            style={{ "--chip-color": category.accent } as any}
          >
            <span className="chipDot" />
            {categoryCompact(category.id, language)}
          </button>
        ))}
      </div>

      <div className="viewToggle" aria-label={text(language, "viewMode")}>
        <button className={viewMode === "grid" ? "active" : ""} type="button" onClick={() => onViewMode("grid")} title={text(language, "gridTitle")}>
          <Icon name="grid" />
          <span>{text(language, "grid")}</span>
        </button>
        <button className={viewMode === "list" ? "active" : ""} type="button" onClick={() => onViewMode("list")} title={text(language, "listTitle")}>
          <Icon name="list" />
          <span>{text(language, "list")}</span>
        </button>
      </div>
    </section>
  );
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
}: {
  day: DayPlan;
  planner: PlannerState;
  viewMode: ViewMode;
  language: LanguageId;
  currency: CurrencyId;
  isVisible: (day: DayPlan, time: string) => boolean;
  dragOverKey: string | null;
  onSlotClick: (ref: SlotRef) => void;
  onSlotDoubleClick: (ref: SlotRef) => void;
  onAddSlot: (dayId: string) => void;
  onDragStart: (event: any, key: string) => void;
  onDragOver: (event: any, key: string) => void;
  onDragLeave: () => void;
  onDrop: (event: any, key: string) => void;
}) {
  const visibleTimes = day.slots.filter((time) => isVisible(day, time));
  const plannedCount = day.slots.filter((time) => !isSlotEmpty(planner[slotKey(day.id, time)] || emptySlot())).length;
  const localizedDay = dayLabel(day, language);

  return (
    <section className={viewMode === "grid" ? "dayColumn" : "dayColumn listMode"}>
      <header className="dayHeader">
        <div>
          <h2>{localizedDay.weekday}</h2>
          <span>{localizedDay.date}</span>
        </div>
        <div className="dayHeaderActions">
          <button className="addSlotButton noPrint" type="button" onClick={() => onAddSlot(day.id)} aria-label={`${text(language, "addSlot")} ${localizedDay.weekday}`}>
            <Icon name="plus" />
            <span>{text(language, "addSlot")}</span>
          </button>
          <strong>{plannedCount}</strong>
        </div>
      </header>

      <div className="slotStack">
        {visibleTimes.length ? (
          visibleTimes.map((time) => {
            const key = slotKey(day.id, time);
            return (
              <TimeSlot
                key={key}
                day={day}
                time={time}
                slot={planner[key] || emptySlot()}
                language={language}
                currency={currency}
                isDragOver={dragOverKey === key}
                onClick={() => onSlotClick({ dayId: day.id, time })}
                onDoubleClick={() => onSlotDoubleClick({ dayId: day.id, time })}
                onDragStart={(event) => onDragStart(event, key)}
                onDragOver={(event) => onDragOver(event, key)}
                onDragLeave={onDragLeave}
                onDrop={(event) => onDrop(event, key)}
              />
            );
          })
        ) : (
          <p className="emptyResults">{text(language, "noMatchingSlots")}</p>
        )}
      </div>
    </section>
  );
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
}: {
  day: DayPlan;
  time: string;
  slot: SlotData;
  language: LanguageId;
  currency: CurrencyId;
  isDragOver: boolean;
  onClick: () => void;
  onDoubleClick: () => void;
  onDragStart: (event: any) => void;
  onDragOver: (event: any) => void;
  onDragLeave: () => void;
  onDrop: (event: any) => void;
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
  } as any;

  return (
    <article
      className={`slotCard ${hasContent ? "planned" : "open"} ${addedDate ? "userAdded" : ""} ${isDragOver ? "dragOver" : ""}`}
      style={style}
      data-slot-key={slotKey(day.id, time)}
      role="button"
      tabIndex={0}
      draggable={hasContent}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onKeyDown={(event: any) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      aria-label={`${dayLabel(day, language).weekday} ${formatTime(time)} ${slot.activity || categoryLabel(slot.category, language)}`}
      title={text(language, "doubleClickHint")}
    >
      <div className="slotTopline">
        <time>{formatTime(time)}</time>
        <span className="slotBadge">{categoryLabel(slot.category, language)}</span>
      </div>
      <h3>{slot.activity || text(language, "openSlot")}</h3>
      {addedDate && (
        <span className="addedPill">
          {text(language, "newAddition")} · {addedDate}
        </span>
      )}
      <div className="slotMeta">
        {slot.location && <span>{slot.location}</span>}
        {slot.cost && <span>{formatSlotCost(slot.cost, currency, language)}</span>}
        {slot.contact &&
          (href ? (
            <a href={href} onClick={(event: any) => event.stopPropagation()} target="_blank" rel="noreferrer">
              {text(language, "contact")}
            </a>
          ) : (
            <span>{slot.contact}</span>
          ))}
      </div>
      {slot.notes && <p>{slot.notes}</p>}
    </article>
  );
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
}: {
  slotRef: SlotRef;
  slot: SlotData;
  language: LanguageId;
  currency: CurrencyId;
  targetOptions: SlotOption[];
  onSave: (slot: SlotData) => void;
  onClear: () => void;
  onDuplicate: (slot: SlotData, targetKey: string) => void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState<SlotData>(() => makeSlot(slot));
  const [targetKey, setTargetKey] = useState(targetOptions[0]?.key || "");
  const day = getDay(slotRef.dayId);
  const localizedDay = dayLabel(day, language);

  useEffect(() => {
    setDraft(makeSlot(slot));
    setTargetKey(targetOptions[0]?.key || "");
  }, [slotRef.dayId, slotRef.time]);

  function patchDraft(partial: Partial<SlotData>) {
    setDraft((current) => makeSlot({ ...current, ...partial }));
  }

  function applyLinkedItem(itemId: string) {
    const item = findTravelItem(itemId);
    if (!item) {
      patchDraft({ linkedItemId: "" });
      return;
    }
    setDraft((current) => slotFromTravelItem(item, current));
  }

  return (
    <div className="modalOverlay" role="presentation" onMouseDown={(event: any) => event.target === event.currentTarget && onClose()}>
      <section className="modalPanel" role="dialog" aria-modal="true" aria-labelledby="slot-editor-title">
        <header className="modalHeader">
          <div>
            <p>{localizedDay.weekday}, {localizedDay.date}</p>
            <h2 id="slot-editor-title">{formatTime(slotRef.time)}</h2>
          </div>
          <button className="roundButton" type="button" onClick={onClose} title={text(language, "close")}>
            <Icon name="close" />
          </button>
        </header>

        <div className="modalBody">
          <label className="linkedItemField">
            <span>{text(language, "linkedOption")}</span>
            <select value={draft.linkedItemId || ""} onChange={(event: any) => applyLinkedItem(event.target.value)} aria-label={text(language, "autoFillFromResearch")}>
              <option value="">{text(language, "noLinkedItem")}</option>
              {travelItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="categorySelector">
            <legend>{text(language, "category")}</legend>
            <div className="categoryGrid">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  className={draft.category === category.id ? "categoryButton active" : "categoryButton"}
                  type="button"
                  onClick={() => patchDraft({ category: category.id, activity: draft.activity || categoryLabel(category.id, language) })}
                  style={{ "--category-color": category.accent, "--category-bg": category.background } as any}
                >
                  <span className="categorySwatch" />
                  {categoryLabel(category.id, language)}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="formGrid">
            <label>
              <span>{text(language, "activityName")}</span>
              <input value={draft.activity} onChange={(event: any) => patchDraft({ activity: event.target.value })} autoFocus />
            </label>
            <label>
              <span>{text(language, "location")}</span>
              <input value={draft.location} onChange={(event: any) => patchDraft({ location: event.target.value })} />
            </label>
            <label>
              <span>{text(language, "estimatedCost")}</span>
              <input value={draft.cost} onChange={(event: any) => patchDraft({ cost: event.target.value })} placeholder={text(language, "costPlaceholder")} />
            </label>
            <label>
              <span>{text(language, "contactLink")}</span>
              <input value={draft.contact} onChange={(event: any) => patchDraft({ contact: event.target.value })} placeholder={text(language, "contactPlaceholder")} />
            </label>
            <label className="wideField">
              <span>{text(language, "notes")}</span>
              <textarea rows={3} value={draft.notes} onChange={(event: any) => patchDraft({ notes: event.target.value })} />
            </label>
          </div>

          <div className="duplicateRow">
            <label>
              <span>{text(language, "duplicateTo")}</span>
              <select value={targetKey} onChange={(event: any) => setTargetKey(event.target.value)}>
                {targetOptions.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <button className="secondaryButton" type="button" onClick={() => onDuplicate(draft, targetKey)} disabled={!targetKey || isSlotEmpty(draft)}>
              <Icon name="copy" />
              {text(language, "duplicate")}
            </button>
          </div>
        </div>

        <footer className="modalFooter">
          <button className="dangerButton" type="button" onClick={onClear}>
            <Icon name="clear" />
            {text(language, "clearSlot")}
          </button>
          <div>
            <button className="secondaryButton" type="button" onClick={onClose}>
              {text(language, "cancel")}
            </button>
            <button className="primaryButton" type="button" onClick={() => onSave(draft)}>
              <Icon name="save" />
              {text(language, "saveChanges")}
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
