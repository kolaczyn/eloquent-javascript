class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) return a * b;
  throw new MultiplicatorUnitFailure(`primitiveMuliply (${a} * ${b} failed)`);
}

function primitiveMultiplyWrapper(a, b) {
  var out;
  while (out === undefined) {
    try {
      out = primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure)
        console.log("primitiveMultiply error");
      else throw e;
    }
  }
  return out;
}
console.log(primitiveMultiplyWrapper(7, 5));
