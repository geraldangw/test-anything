
var assert = require('assert');
var test = require(process.argv[2]);
assert(test(42) === true, 'test(42) should be true');
