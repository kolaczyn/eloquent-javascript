const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  let wasLocked = box.locked;
  box.unlock();
  try {
    body(this.content);
  } finally {
    if(wasLocked)
    box.lock();
  }
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

console.log(box.locked); // has to return true


try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}

console.log(box.locked); // has to return true

box.unlock();
withBoxUnlocked(()=>{});
console.log(box.locked) // has to return false