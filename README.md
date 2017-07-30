# batch-task

Run a task function on N batches of items

## Installation

`npm i batch-task`


## Usage

```javascript
const batch = require('batch-task');

const movies = getMovies();

/*
 * For every 20 movies in the list of movies,
 * execute download(<batch of movies>).
 * 
 * Pass in optional callback to run on last iteration
 */

batch(movies, 20, download, console.log)

function download(subsetOfMovies, callback) {
  queue(subsetOfMovies.join(','));
  if (callback) {
    return callback(null, 'Done');
  }
}
```

## Tests

```
> npm test
> tap --coverage-report=text test.js

TAP version 13
# Subtest: test.js
    # Subtest: Execute task N times
        ok 1 - should be equal
        1..1
    ok 1 - Execute task N times # time=6.278ms
    
    1..1
    # time=13.331ms
ok 1 - test.js # time=325.164ms

1..1
# time=337.013ms
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
 index.js |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
```
