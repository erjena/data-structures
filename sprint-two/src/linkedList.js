var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = new Node(value);
      list.head = list.tail;
    } else {
      var newNode =  new Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.tail === null) {
      return;
    }
    if (list.tail === list.head) {
      var returnedValue = list.tail.value;
      list.head = null;
      list.tail = null;
      return returnedValue;
    }
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    for (var curr = list.head; curr !== null; curr = curr.next) {
      if (curr.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
