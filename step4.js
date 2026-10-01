// Алхам 4: Destructuring
const student = {
  name: "Сараа",
  address: { city: "Улаанбаатар", zip: "14200" },
};
const { address: { city, zip } } = student;
console.log(city, zip);
