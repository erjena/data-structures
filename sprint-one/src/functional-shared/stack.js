var Stack = function() {
  var myStack = {};
  myStack.storage = {};
  myStack.key = 0;
  myStack.push = push;
  myStack.pop = pop;
  myStack.size = size;
  return myStack;
};

var stackMethods = {};

var push = function(val) {
  this.key++;
  this.storage[this.key] = val;
};

var pop = function() {
  if (this.key === 0) {
    return;
  }
  var result = this.storage[this.key];
  delete this.storage[this.key];
  this.key--;
  return result;
};

var size = function() {
  return this.key;
};

var callFunc = Stack();
console.log(callFunc.size());
callFunc.push('a');
callFunc.push('b');
console.log(callFunc.size());
//callFunc.pop()
//callFunc.size()