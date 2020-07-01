function reverseArray(array) {
  out = [];
  for (let i = array.length - 1; i >= 0; --i) out.push(array[i]);
  return out;
}

function reverseArrayInPlace(array) {
  var buff;
  for(let i=0; i<array.length/2; i++){
    buff=array[array.length-1-i];
    array[array.length-1-i]=array[i];
    array[i]=buff;
  }
}

array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));
reverseArrayInPlace(array);
console.log(array);