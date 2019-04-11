var Queue = function() {
  var myQueue = {};
  myQueue.storage = {};
  myQueue.read = 1;
  myQueue.write = 1;
  myQueue.enqueue = enqueue;
  myQueue.dequeue = dequeue;
  myQueue.size = size;
  return myQueue;
};

var queueMethods = {};


var enqueue = function(val) {
   this.storage[this.write] = val;
   this.write++;
};

var dequeue = function() {
  if (this.write === this.read) {
    return;
  }
  var result = this.storage[this.read];
  delete this.storage[this.read];
  this.read++;
  return result;
};

var size = function() {
  return this.write - this.read;
}