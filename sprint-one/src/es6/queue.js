class Queue {
  constructor() {
    this.storage = {};
    this.write = 1;
    this.read = 1;
  }
  enqueue(val) {
    this.storage[this.write] = val;
    this.write++;
  }
  dequeue() {
    if (this.write === this.read) {
      return;
    }
    var result = this.storage[this.read];
    delete this.storage[this.read];
    this.read++;
    return result;
  }
  size() {
    return this.write - this.read;
  }
}

const myQueue = new Queue();