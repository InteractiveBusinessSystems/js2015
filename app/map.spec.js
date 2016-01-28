'use strict';
describe('map specs', () => {
	it('should be empty when constructed', () => {
		let map = new Map();
		expect(map.size).toBe(0);
	})

	it('should contain an added item', () => {
		let map = new Map();
		map.set('michigan', 'big ten');
		expect(map.size).toBe(1);
	});

	it('should find an item in the map', () => {
		let map = new Map();
		map.set('michigan', 'big ten');
		expect(map.get('michigan')).toBe('big ten');
	});

	it('should have an object as the key', () => {
		let map = new Map();
		let team = {name: 'Michigan'}
		map.set(team, 'wolverines');
		expect(map.get(team)).toBe('wolverines');
	});

	it('should be constructed from array', () => {
		let map = new Map([['team', 'Michigan'], ['name', 'Wolverines']]);
		expect(map.get('team')).toBe('Michigan');
	});

	it('should not allow duplicates', () => {
		let map = new Map();
		map.set('weather', 'snow');
		map.set('weather', 'rain');
		expect(map.get('weather')).toBe('rain');
	});

	it('should clear the map', () => {
		let map = new Map();
		map.set('michigan', 10);
		map.clear();
		expect(map.size).toBe(0);
	});

	it('delete should remove an item', () => {
		let map = new Map([['team', 'Michigan'], ['name', 'Wolverines']]);
		map.delete('team');
		expect(map.has('team')).toBe(false);
	});


	//foreach
	it('should be iterated with forEach', () => {
		let map = new Map([['team', 'Michigan'], ['name', 'Wolverines']]);
		let count = 0;
		map.forEach((value, key) => count++);
		expect(count).toBe(2);
	});

	it('should work with for-of', () => {
		let map = new Map([['team', 'Michigan']]);
		for(let [x, y] of map) {
			expect(x).toBe('team');
			expect(y).toBe('Michigan');
		}
	});

	it('can add map items with no value', () => {
		let map = new Map();
		map.set('1');
		expect(map.has('1')).toBe(true);
		expect(map.get('1')).not.toBeDefined;
	});
});