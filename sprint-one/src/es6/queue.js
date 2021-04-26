class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.index = 0;
    this.first = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.index++;
    this.storage[this.index] = value;
  }

  dequeue() {
    if (this.size() > 0) {
      this.first++;
      var shifted = this.storage[this.first];
      delete this.storage[this.first];
      return shifted;
    }

    return null;
  }

  size() {
    return this.index - this.first;
  }
}

var Instance = new Queue();