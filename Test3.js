var fancify = require(process.argv[2]);
var test = require('tape');

test('fancify', function(t) {
	t.equal(fancify("Hello"), "~*~Hello~*~");
	t.equal(fancify("Hello", true), "~*~HELLO~*~");
	t.equal(fancify("Hello", false, '!'), "~!~Hello~!~");
	t.end();
});
