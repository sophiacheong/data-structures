// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {
    value: node,
    edges: []
  };
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node].value === node) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if the graph contains equals the node
  if (this.storage[node].value === node) {
    // store it into result variable
    var result = node;
    delete this.storage[node].value;
    this.storage[node].edges = [];
  }
  // return the result variable
  return result;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  var result2 = false;

  for (var i = 0; i < this.storage[fromNode].edges.length; i++) {
    // check if the edge contains t oNode
    if (this.storage[fromNode].edges[i] === toNode) {
    // return true
      result = true;
    }
  }

  for (var j = 0; j < this.storage[toNode].edges.length; j++) {
    if (this.storage[toNode].edges[j] === fromNode) {
      result2 = true;
    }
  }

  if (result && result2) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {


  this.storage[fromNode].edges.push(toNode, fromNode);
  this.storage[toNode].edges.push(fromNode, toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.storage[fromNode].edges.indexOf(toNode);
  if (index !== -1) {
    this.storage[fromNode].edges.splice(index, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key]);
  }
};

var Instance = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */


