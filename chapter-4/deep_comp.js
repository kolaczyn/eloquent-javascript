// TODO finish this

function deepEqual(val1, val2) {
  if (val1 === val2) return true;
  if( val1===null ||val2===null) return false;
  if ((typeof val1) !=='object' || (typeof val2)!=='object') return false;

  console.log(Object.keys(val1))
}

val1={
  name: "Jack",
  last: "Black"
};
val2=[1];
console.log(deepEqual(val1, val2));