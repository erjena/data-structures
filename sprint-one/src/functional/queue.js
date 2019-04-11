var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var write = 1;
  var read = 1;

  someInstance.enqueue = function (value) {
    storage[write++] = value;
  };

  someInstance.dequeue = function () {
    if (write === read) {
      return {};
    }
    var returnValue = storage[read];
    delete storage[read];
    read++;
    return returnValue;
  };

  someInstance.size = function () {
    return write - read;
  };

  return someInstance;
};
