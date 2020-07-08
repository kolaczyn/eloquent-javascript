// function storage(nest, name) {
//   return new Promise((resolve) => {
//     nest.readStorage(name, (result) => resolve(result));
//   });
// }

// storage(bigOak, "enemies").then((value) => console.log("Got", value));

// let promise = new Promise((resolve, reject) => {
//   if (Math.random()*Math.random() < 0.5)
//   setTimeout(() => resolve("Success!"), 500);
//   setTimeout(() => reject(new Error("whoops!")), 500);
//   console.log('testing')
// });
// promise
//   .finally(console.log("Promise's ready"))
//   .then(console.log)
//   .catch(console.log)

// // promise.then(null,
// //   // (result) => console.log(result),
// //   (error) => console.log(error)
// // );

// let fifteen = Promise.resolve(15);
// fifteen.then((value) => console.log(`Got ${value}`));

let start = Date.now();
setTimeout(() => {
  console.log("timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);
