class Stack {
  constructor() {
    this.storage = {};
    this.key = 0;
  }
  push(val) {
    this.key++;
    this.storage[this.key] = val;
  }
  pop() {
    if (this.key === 0) {
      return;
    }
    var result = this.storage[this.key];
    delete this.storage[this.key];
    this.key--;
    return result;
  }
  size() {
    return this.key;
  }
}

const myStack = new Stack();