// Алхам 6: utils.js - 2 named export + 1 default export
export const formatName = (first, last) => `${last.charAt(0)}. ${first}`;
export const isEven = (n) => n % 2 === 0;

export default function greet(name) {
  return `Сайн байна уу, ${name}!`;
}
