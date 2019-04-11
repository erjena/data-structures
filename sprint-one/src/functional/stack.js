var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  someInstance.push = function(value) {
    key++;
    storage[key] = value;
    return storage;
  };

  someInstance.pop = function() {
    if (key === 0) {
      return;
    }
    var val = storage[key];
    delete storage[key];
    key--;
    return val;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
