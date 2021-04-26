var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    index++;
    storage[index] = value;
  };

  someInstance.pop = function() {
    var removed = storage[index];
    delete storage[index];
    index--;
    return removed;
  };

  someInstance.size = function() {
    if (index < 0) {
      return 0;
    }
    return index;
  };

  return someInstance;
};
