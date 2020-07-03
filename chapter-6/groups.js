class Group {
  constructor() {
    this.group = [];
  }
  add(val) {
    if(!this.has(val))
      this.group.push(val);
  }
  delete(val) {
    let index = this.group.indexOf(val);
    if(index===-1) return;
    this.group.splice(index, 1);
  }
  has(val) {
    for (let i of this.group) {
      if (i === val) return true;
    }
    return false;
  }
}

// tests

g = new Group();
g.add(1);
g.add(2);
g.add(1);
g.add(3);
console.log(g);
console.log(g.has(3));
console.log(g.has(4));
g.delete(5);
console.log(g)
g.delete(1);
console.log(g);