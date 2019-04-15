
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
  return child;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
     var curr = this.children[i];
     if (curr.contains(target)) {
       return true;
     };
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
