var Stack = function() {
  var myStack = {};
  myStack.storage = {};
  myStack.key = 0;
  myStack.push = stackMethods.push;
  myStack.pop = stackMethods.pop;
  myStack.size = stackMethods.size;
  extend(myStack, stackMethods);
  return myStack;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var stackMethods = {};

stackMethods.push = function(val) {
  this.key++;
  this.storage[this.key] = val;
};

stackMethods.pop = function() {
  if (this.key === 0) {
    return;
  }
  var result = this.storage[this.key];
  delete this.storage[this.key];
  this.key = this.key - 1;
  return result;
};

stackMethods.size = function() {
  return this.key;
};

// var callFunc = Stack();
// console.log(callFunc.size());
// callFunc.push('a');
// callFunc.push('b');
// console.log(callFunc.size());
// //callFunc.pop()
// //callFunc.size()