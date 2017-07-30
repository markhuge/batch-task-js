const test = require('tap').test;
const batch = require('./');

let counter = 0;

test('Execute task N times', assert => {
	const items = [1, 2, 3, 4, 5];

	batch(items, 2, task, () => {
		assert.equal(counter, 3);
		assert.end();
	});
});

function task(items, callback) {
	counter++;
	if (callback) {
		return callback();
	}
}
