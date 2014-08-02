var through = require('through');

function gulpNaturalSort(order) {

  var files = [];

  function onFile(file) {
    files.push(file);
  }

  function onEnd() {
    require('natural-compare-lite');
    var _this = this;

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

