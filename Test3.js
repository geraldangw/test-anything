var test = require(process.argv[2]);
var assert = require('assert');
test('fancify can return tap', fancify (t) {
  t.ok(fancify("Hello"), "~*~Hello~*~");
  t.ok(fancify("Hello", true), "~*~HELLO~*~");
  t.ok(fancify("Hello", false, '!'), "~!~Hello~!~");
  t.end();
});
