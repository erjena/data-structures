

// Instantiate a new graph
var Graph = function() {
    this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
    if (this.graph.hasOwnProperty(value)) {
        return;
    }
    this.graph[value] = new Set();
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
    return this.graph.hasOwnProperty(value);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    if (this.graph.hasOwnProperty(node)) {
        for (var connectedNode of this.graph[node]) {
            this.graph[connectedNode].delete(node);
        }
        delete this.graph[node];
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (!this.graph[fromNode] || !this.graph[toNode]) {
        return false;
    }
    return this.graph[fromNode].has(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    if (!this.graph[fromNode] || !this.graph[toNode]) {
        return;
    }
    this.graph[fromNode].add(toNode);
    this.graph[toNode].add(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    if (!this.graph[fromNode] || !this.graph[toNode]) {
        return;
    }
    this.graph[fromNode].delete(toNode);
    this.graph[toNode].delete(fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (var node in this.graph) {
        cb(node);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


var g = new Graph();
g.addNode(2);
console.log(g.contains(2));
g.removeNode(2);
console.log(g.contains(2));
