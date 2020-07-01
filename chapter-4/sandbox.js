function range(start, end, step) {
  if (step === 0) return;
  if (step === undefined) step = 1;
  var out = [];
  if (step > 0) for (let i = start; i <= end; i += step) out.push(i);
  else          for (let i = start; i >= end; i += step) out.push(i);
  return out;
}

function sum(array) {
  if (array === undefined) return undefined;
  var out = 0;
  for (let i = 0; i < array.length; i++) out += array[i];
  return out;
}

console.log(sum(range(1, 10))); // 55
console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(5, 2, -1)); // [5, 4, 3, 2]
