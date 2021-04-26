var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    index++;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    first++;
    var removed = storage[first];
    delete storage[first];
    return removed;
  };

  someInstance.size = function() {
    if (first > index) {
      return 0;
    }
    return index - first;
  };

  return someInstance;
};
