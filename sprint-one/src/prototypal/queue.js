var Queue = function(value) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.index = 0;
  newQueue.first = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    this.first++;
    var removed = this.storage[this.first];
    delete this.storage[this.first];
    return removed;
  }

  return null;
};

queueMethods.size = function() {
  return this.index - this.first;
};
