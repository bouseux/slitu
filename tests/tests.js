QUnit.test('append test: value', function (assert) {
	var arr = [4, 5, 'Hello', 'World', 6.7, 3];
	slitu.append(arr, 7);
	assert.deepEqual(arr, [4, 5, 'Hello', 'World', 6.7, 3, 7]);

	slitu.append(arr, false);
	assert.deepEqual(arr, [4, 5, 'Hello', 'World', 6.7, 3, 7, false]);

	slitu.append(arr);
	assert.deepEqual(arr, [4, 5, 'Hello', 'World', 6.7, 3, 7, false, undefined]);

	slitu.append(arr, ['ciao', 5]);
	assert.deepEqual(arr, [4, 5, 'Hello', 'World', 6.7, 3, 7, false, undefined, ['ciao', 5]]);

	slitu.append(arr, {name: 'John'});
	assert.deepEqual(arr, [4, 5, 'Hello', 'World', 6.7, 3, 7, false, undefined, ['ciao', 5], {name: 'John'}]);
});

QUnit.test('at test', function (assert) {
	var arr = [4, 6, 1, 7];
	assert.equal(slitu.at(arr, 1), 6);
	assert.equal(slitu.at(arr, [0, 3]), [4, 7]);
});

QUnit.test('average test', function (assert) {
	var arr = [1, 2, 3, 4];
	assert.equal(slitu.average(arr), 5);
});

QUnit.test('empty test', function (assert) {
	var arr = [5, null, 'Hi there', {'name': 'John'}, [3, 1]];
	
	slitu.empty(arr);
	assert.equal(arr, [undefined, undefined, undefined, undefined, undefined]);
});
