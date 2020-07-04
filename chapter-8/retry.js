class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) return a * b;
  throw new MultiplicatorUnitFailure(`primitiveMuliply (${a} * ${b} failed)`);
}

function primitiveMultiplyWrapper(a, b) {
  var out;
  while (out === undefined) {
    try {
      console.log(out);
      out = primitiveMultiply(a, b);
    } catch {}
  }
  return out;
}
console.log(primitiveMultiplyWrapper(7, 5));
