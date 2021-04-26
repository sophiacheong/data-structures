var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    this.first++;
    var removed = this.storage[this.first];
    delete this.storage[this.first];
    return removed;
  }
  return null;
};

Queue.prototype.size = function() {
  return this.index - this.first;
};


