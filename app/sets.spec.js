'use strict';

describe('set specs', () => {
	//unique set of items
	//value of object
	it('can create an empty set', () => {
		let set = new Set();
		expect(set.size).toBe(0);
	});

	it('can add items to a set', () => {
		let set = new Set();
		set.add('123-456-7890');
		expect(set.has('123-456-7890')).toBe(true);
		expect(set.size).toBe(1);
	});

	it('should allow objects as keys', () => {
		let team1 = {team:'michigan', conference: 'big ten'};
		let team2 = {team:'alabama', conference: 'sec'};
		let set = new Set();
		set.add(team1);
		set.add(team2);
		expect(set.has(team1)).toBe(true);
	});

	it('can be created from an array', () => {
		//like coming from a $http call...
		var set = new Set([1,2,3]);
		expect(set.has(1)).toBe(true);
	});

	it('will prevent duplicates from being added', () => {
		var set = new Set([1,2,3]);
		set.add(1);
		set.add(1);
		expect(set.size).toBe(3);
	})

	it('will prevent duplicates when created from array', () => {
		var set = new Set([1, 1, 2, 2, 3, 3]);
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

	it('can iterate a set with forEach', () => {
		let set = new Set(['michigan', 'ohio state', 'michigan state']);
		let count = 0;
		set.forEach(x => count++);
		expect(count).toBe(3);
	});

	it('can iterate a set with for of', () => {
		let set = new Set(['michigan', 'ohio state', 'michigan state']);
		let count = 0;
		for(let item of set) {
			count++;
		}
		expect(count).toBe(3);
	});
});