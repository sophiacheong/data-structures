var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  var valuesArr = [];

  list.addToTail = function(value) {
    // create a new node
    var node = Node(value);
    valuesArr.push(value);
    // if there is no head
    if (list.head === null) {
      // assign to the head
      list.head = node;
    }
    // tail node's next reference to our new node
    list.next = node;
    // chane our tail reference itself to the new last value
    list.tail = node;
    // time complexity: constant time
  };

  list.removeHead = function() {
    // remove the first element from the values obj
    valuesArr.shift();
    // move head reference to the next item
    var currHead = list.head.value;
    list.head = list.next;
    return currHead;
    // time complexity: constant time
  };

  list.contains = function(target) {
    for (var i = 0; i < valuesArr.length; i++) {
      if (valuesArr[i] === target) {
        return true;
        break;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
