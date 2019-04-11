var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var key = 0;
  someInstance.push = function(value) {
    key++;
    storage[JSON.stringify(key)] = value;
    return storage;
  };

  someInstance.pop = function() {
    var val = storage[JSON.stringify(key)]; 
    delete storage[JSON.stringify(key)];
    key--;
    return val;
  };

  someInstance.size = function() {
    var emptyObj = {};
    if (JSON.stringify(storage) !== JSON.stringify(emptyObj)) {
      var keys = Object.keys(storage);
      return keys.length;
    } else {
      return 0;
    }
  };

  return someInstance;
};


var myStack = Stack();
console.log(myStack.push('a'));
console.log(myStack.push('b'));
myStack.pop();
myStack.pop();