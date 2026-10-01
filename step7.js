// Алхам 7: Promise
const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const value = Math.random();
    if (value >= 0.5) resolve(`Амжилттай! (утга: ${value.toFixed(2)})`);
    else reject(`Алдаа гарлаа (утга: ${value.toFixed(2)})`);
  }, 2000);
});

randomPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
