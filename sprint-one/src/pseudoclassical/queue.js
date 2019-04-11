var Queue = function() {
  this.storage = {};
  this.write = 1;
  this.read = 1;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.write] = val;
  this.write++;
},

Queue.prototype.dequeue = function() {
  if (this.write === this.read) {
    return;
  }
  var result = this.storage[this.read];
  delete this.storage[this.read];
  this.read++;
  return result;
},

Queue.prototype.size = function() {
  return this.write - this.read;
}

var myQueue = new Queue();
