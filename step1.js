// Алхам 1: var -> let/const
if (true) { var x = 10; }
console.log(x);          // 10 - блокийн гадна харагдаж байна
console.log(y);          // undefined (hoisting)
var y = 5;

// Даалгавар: var -> const/let
const age = 25;          // өөрчлөгдөхгүй тул const
let total = 0;           // хожим өөрчлөгдөж болзошгүй тул let

function addNumbers() {
  const result = age + total;   // функц дотор дахин оноогдохгүй тул const
  return result;
}
console.log(addNumbers());       // 25

// let-ийн block scope
try {
  if (true) { let z = 10; }
  console.log(z);
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
