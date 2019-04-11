
var queueMethods = {
  enqueue: function(val) {
    this.storage[this.write] = val;
    this.write++;
  },

  dequeue: function() {
    if (this.write === this.read) {
      return;
    }
    var result = this.storage[this.read];
    delete this.storage[this.read];
    this.read++;
    return result;
  },

  size: function() {
    return this.write - this.read;
  }
};


var Queue = function() {
  var myQueue = Object.create(queueMethods);

  myQueue.storage = {};
  myQueue.read = 1;
  myQueue.write = 1;

  return myQueue;
};


