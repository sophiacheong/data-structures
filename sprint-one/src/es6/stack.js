class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
    this.storage = {};
  }

  push(value) {
    this.index++;
    this.storage[this.index] = value;
  }

  pop() {
    var remove = this.storage[this.index];
    delete this.storage[this.index];
    this.index--;

    return remove;
  }

  size() {
    if (this.index < 0) {
      return 0;
    }

    return this.index;
  }
}

var Instances = new Stack();