'use strict';

describe('set specs', () => {
	it('can create an empty set', () => {
		let set = new Set();
		expect(set.size).toBe(0);
	});

	it('cad add items to a set', () => {
		let set = new Set();
		set.add(1);
		expect(set.has(1)).toBe(true);
	});

	it('can be created from an array', () => {
		let set = new Set([1,2,3]);
		expect(set.has(1)).toBe(true);
	});

	it('willprevent duplicates from being added', () => {
		let set = new Set([1,2,3]);
		set.add(1);
		expect(set.size).toBe(3);
	})
});