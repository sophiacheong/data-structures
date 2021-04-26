var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    index: 0,
  };

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

stackMethods.pop = function() {
  var removed = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  return removed;
};

stackMethods.size = function() {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
};


