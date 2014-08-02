var naturalSort = require('../');
var through = require('through');
var should = require('should');
var createFS = require('vinyl-fs-mock');
require('mocha');

describe('gulp-natural-sort', function() {
  function generateStream() {
    return createFS({
      '2-test.md': 'one',
      '1-test.md': 'two',
      '10-test.md': 'ten',
      '3-test.md': 'three',
    });

  }

  it('should order files in ascending order', function(done) {
    var files = [];

    generateStream().src('*.md')
      .pipe(naturalSort())
      .pipe(through(function(file) {
        files.push(file);
      }, function() {
        files[0].relative.should.startWith('1-');
        files[1].relative.should.startWith('2-');
        files[2].relative.should.startWith('3-');
        files[3].relative.should.startWith('10-');
        return done();
      }));
  });

  it('should order files in descending order', function(done) {
    var files = [];

    generateStream().src('*.md')
      .pipe(naturalSort('desc'))
      .pipe(through(function(file) {
        files.push(file);
      }, function() {
        files[0].relative.should.startWith('10-');
        files[1].relative.should.startWith('3-');
        files[2].relative.should.startWith('2-');
        files[3].relative.should.startWith('1-');
        return done();
      }));
  });


});
