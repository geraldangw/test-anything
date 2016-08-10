var feedCat = require(process.argv[2]);
var test = require('tape');
test('feedCat', function (t) {
  t.plan(2);
	t.equal(feedCat('food'), 'yum');
	t.throws(feedCat.bind(null, 'chocolate'), null);
	t.end();
});
