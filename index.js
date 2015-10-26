var through = require('through');

function gulpNaturalSort(order) {

  var files = [];

  function onFile(file) {
    files.push(file);
  }

  function onEnd() {
    var ncl = require('natural-compare-lite');
    var _this = this;

    if (ncl !== undefined) {
      String.naturalCompare = ncl;
    }

    files.sort(function(a, b) {
      return String.naturalCompare(a.relative.toLowerCase(), b.relative.toLowerCase());
    });

    if(order === 'desc') {
      files.reverse();
    }

    files.forEach(function(file) {
      _this.emit('data', file);
    });

    return this.emit('end');
  }

  return through(onFile, onEnd);
}

module.exports = gulpNaturalSort;

