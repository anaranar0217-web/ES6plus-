// Алхам 10: find, some, every, forEach
const products = [
  { name: "Дэвтэр", price: 3500, inStock: true },
  { name: "Үзэг", price: 800, inStock: false },
  { name: "Цүнх", price: 45000, inStock: true },
];
console.log("1) Нөөцгүй эхний бараа:", products.find((p) => !p.inStock));
console.log("2) 40,000-аас өндөр үнэтэй бараа байна уу:", products.some((p) => p.price > 40000));
console.log("3) Бүх бараа нөөцтэй юу:", products.every((p) => p.inStock));
console.log("4) Барааны нэрс:");
products.forEach((p) => console.log(" -", p.name));
