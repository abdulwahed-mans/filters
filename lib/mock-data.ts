export const CATEGORIES = [
  "جميع الفئات",
  "سيارات",
  "إلكترونيات",
  "أثاث",
  "عقارات",
  "أزياء",
  "رياضة",
  "كتب",
  "خدمات",
];

const IMAGES = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1503602642458-232111445657",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
];

export const MOCK_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `منتج مميز ${i + 1}`,
  description: "منتج عالي الجودة بميزات وتصميم استثنائي.",
  price: Math.floor(Math.random() * 9000) + 1000,
  category: CATEGORIES[Math.floor(Math.random() * (CATEGORIES.length - 1)) + 1],
  image: IMAGES[i % IMAGES.length],
}));