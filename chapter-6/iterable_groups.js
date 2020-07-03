class Group {
  constructor() {
    this.array = [];
  }
  add(val) {
    if (!this.has(val)) this.array.push(val);
  }
  delete(val) {
    let index = this.array.indexOf(val);
    if (index === -1) return;
    this.array.splice(index, 1);
  }
  has(val) {
    for (let i of this.array) {
      if (i === val) return true;
    }
    return false;
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

class GroupIterator {
  constructor(gr) {
    this.iter = 0;
    // console.log(gr)
    this.gr = gr;
  }
  next() {
    if (this.iter === this.gr.array.length) {
      return { done: true };
    }
    let value = { value: this.gr.array[this.iter] };
    this.iter++;
    return { value, done: false };
  }
}

g = new Group();
g.add(5);
g.add(8);
g.add(2);

for (let v of g) {
  console.log(v);
}
