var Stack = function() {
  this.storage = {};
  this.key = 0;

};

Stack.prototype.push = function(val) {
  this.key++;
  this.storage[this.key] = val;
},

Stack.prototype.pop = function() {
  if (this.key === 0) {
    return;
  }
  var result = this.storage[this.key];
  delete this.storage[this.key];
  this.key--;
  return result;
},

Stack.prototype.size = function() {
  return this.key;
}

var myStack = new Stack();
