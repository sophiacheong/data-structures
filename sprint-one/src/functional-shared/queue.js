var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    index: 0,
    first: 0,
  };

  _.extend(instance, queueMethods);

  return instance;
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
