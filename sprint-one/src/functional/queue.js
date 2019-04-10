var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var key = 0;
  someInstance.enqueue = function (value) {
    key++;
    key = JSON.stringify(key);
    storage[key] = value;
    key = parseInt(key);
    return (storage, JSON.stringify(key));
  };


  someInstance.dequeue = function () {
    var val = storage[key];
    var emptyObj = {};
    var count = 2;
    if (JSON.stringify(storage) === JSON.stringify(emptyObj)) {
      return storage;
    } else {
      if (storage.hasOwnProperty('1')) {
        delete storage['1'];
        return val;
      } else {
        if (count === key) {
          delete storage[count];
        } else {
          count = parseInt(count);
          count++;
          count = JSON.stringify(count);
          return someInstance.dequeue(storage, count);
        }
      }
      return val;
    } 
  };

  someInstance.size = function () {
    if (storage !== {}) {
      var keys = Object.keys(storage)
      return keys.length;
    } else {
      return 0;
    }
  };

  return someInstance;
};
