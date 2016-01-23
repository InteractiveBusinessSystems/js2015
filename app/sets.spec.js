'use strict';

describe('set specs', () => {
	it('can create an empty set', () => {
		var set = new Set();
		expect(set.size).toBe(0);
	});

	it('cad add items to a set', () => {
		var set = new Set();
		set.add(1);
		expect(set.has(1)).toBe(true);
		expect(set.size).toBe(1);
	});

	it('can be created from an array', () => {
		var set = new Set([1,2,3]);
		expect(set.has(1)).toBe(true);
	});

	it('will prevent duplicates from being added', () => {
		var set = new Set([1,2,3]);
		set.add(1);
		set.add(1);
		expect(set.size).toBe(3);
	})

	it('clear should empty a set', () => {
		let set = new Set([1,2,3]);
		set.clear();
		expect(set.size).toBe(0);
	});

	it('delete should remove an item', () => {
		let set = new Set([1,2,3]);
		set.delete(2);
		expect(set.has(2)).toBe(false);
	});
});