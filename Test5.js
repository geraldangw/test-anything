var feedCat = require(process.argv[2]);
var test = require('tape');
test('feedCat', function (t) {
	t.equal(feedCat('food'), 'yum', 'feedCat food should be yum');
	t.throws(feedCat.bind(null, 'chocolate'), null, 'feedCat chocolate should throw error');
	t.end();
});
