function flatten(array) {
  return array.reduce((out, a) => {
    return out.concat(a);
  }, []);
}

console.log(flatten([[1, 2], [3, 4, 5], [6]]));
