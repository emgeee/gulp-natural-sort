# gulp-natural-sort

[![Build Status](https://travis-ci.org/emgeee/gulp-natural-sort.svg?branch=master)](https://travis-ci.org/emgeee/gulp-natural-sort)

>Sort stream by path name using a natural sort

## Installation

```shell
npm install --save-dev gulp-natural-sort
```

## Usage

To reorder stream in ascending order:

```javascript
return gulp.src(path.join(paths.tutorials, folder, 'markdown/*.md'))
  .pipe(naturalSort())
  .pipe(gulp.dest(paths.output));
```

To reorder stream in descending order pass the string `'desc'`:

```javascript
.pipe(naturalSort('desc'))
```

### License
MIT
