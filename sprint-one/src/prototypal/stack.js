var stackMethods = {
  push: function(val) {
    this.key++;
    this.storage[this.key] = val;
  },

  pop: function() {
    if (this.key === 0) {
      return;
    }
    var result = this.storage[this.key];
    delete this.storage[this.key];
    this.key--;
    return result;
  },

  size: function() {
    return this.key;
  }
};

var Stack = function() {
  var myStack = Object.create(stackMethods);

  myStack.storage = {};
  myStack.key = 0;

  return myStack;
};

