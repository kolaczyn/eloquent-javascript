function every(array, func) {
  for (let elem of array) if (!func(elem)) return false;
  return true;
}

array1 = [1, 2, 3, 4, 5, -1, 6];
array2 = [1, 2, 3, 4, 5,  7, 6];
var func = (x) => {
  return x > 0;
};
console.log(every(array1, func));
console.log(every(array2, func));
