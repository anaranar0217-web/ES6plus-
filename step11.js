// Алхам 11: ES5 -> ES6+
const getAdultEmails = (users) =>
  users.filter((u) => u.age > 18).map((u) => u.email);

const listAdults = (users) =>
  users.filter((u) => u.age > 18).map((u) => `${u.name} (${u.age})`);

const users = [
  { name: "Бат", age: 25, email: "bat@example.com" },
  { name: "Сараа", age: 17, email: "saraa@example.com" },
  { name: "Дорж", age: 22, email: "dorj@example.com" },
];
console.log(getAdultEmails(users));
console.log(listAdults(users));
