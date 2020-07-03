class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

v1 = new Vec(4, 3);
v2 = new Vec(1.5, 8);
console.log(v1, v2);
console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v1.length);
