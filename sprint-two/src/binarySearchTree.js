var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
};

var BinarySearchTree = function(value) {
    var binaryTree = {};
    binaryTree.value = value;
    binaryTree.left = null;
    binaryTree.right = null;
    extend(binaryTree, bstmethods);
    return binaryTree;
};

var bstmethods = {};

bstmethods.insert = function(value) {
    if (value < this.value) {
        if (this.left === null) {
            this.left = new BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    } else {
        if (this.right === null) {
            this.right = new BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
    } 
};

bstmethods.contains = function(target) {
    if (this.value === target) {
        return true;
    }
    if (target < this.value) {
        if (this.left === null) {
            return false;
        }
        return this.left.contains(target);
    } else {
        if (this.right === null) {
            return false;
        }
        return this.right.contains(target);
    }
};

bstmethods.depthFirstLog = function(callback) {
    callback(this.value);
    if (this.left !== null) {
        this.left.depthFirstLog(callback);
    }
    if (this.right !== null) {
        this.right.depthFirstLog(callback);
    }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
