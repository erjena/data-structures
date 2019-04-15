

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    bucket = [];
  }
  var changedValue = false;
  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      bucket[i][1] = v;
      changedValue = true;
      break;
    }
  }

  if (changedValue === false) {
    bucket.push([k, v]);
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }
  var foundIndex = -1;
  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      foundIndex = i;
    }
  }
  bucket.splice(foundIndex, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


