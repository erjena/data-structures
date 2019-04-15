var MySet = function() {
  var set = Object.create(setPrototype);
  set._limit = 8;
  set._storage = LimitedArray(this._limit);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    bucket = [];
  }
  for (var i = 0; i < bucket.length; i++) {
    if (item === bucket[i]) {
      return;
    }
  }
  bucket.push(item);
  this._storage.set(index, bucket);
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return false;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (item === bucket[i]) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }
  var foundIndex = -1;
  for (var i = 0; i < bucket.length; i++) {
    if (item === bucket[i]) {
      foundIndex = i;
    }
  }
  bucket.splice(foundIndex, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
