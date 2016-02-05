describe('array specs', () => {
	let numbers;
	beforeEach(() => {
		numbers = [1,2,3,4,5,6,7,8,9,10];
	});
	it('find should return first matching element', () => {
		let x = numbers.find(x => x > 5);
		expect(x).toBe(6);
	});

	it('find should return first matching element in an array literal', () => {
		let x = [1,2,3,4,5,6,7,8,9,10].find(x => x > 5);
		expect(x).toBe(6);
	});

	it('findIndex should return the index of the first match', () => {
		let x = numbers.findIndex(x => x > 5);
		expect(x).toBe(5);
	});

	it('fill should fill entire array', () => {
		expect([1,2,3,4].fill('x')).toEqual(['x','x','x','x']);
	});

	it('fill should fill partial array', () => {
		expect([1,2,3,4].fill('x', 1, 2)).toEqual([1, 'x', 3, 4]);
	});

	it('should create an array from an array-like object', () => {
		let arrayLike = document.querySelectorAll('div');
		//only has length and index
		expect(arrayLike.forEach).not.toBeDefined();

		var actualArray = Array.from(arrayLike);
		expect(actualArray.forEach).toBeDefined();
	});

	it('should create an array from a jquery object', () => {
		let arrayLike = $('div');
		//only has length and index
		expect(arrayLike.forEach).not.toBeDefined();

		var actualArray = Array.from(arrayLike);
		expect(actualArray.forEach).toBeDefined();
	});

	it('from can be used as map', () => {
	    let people = [
			{name:'Homer', age:39},
			{name:'Marge', age:34},
			{name:'Bart', age:10},
			{name:'Lisa', age:8},
			{name:'Maggie', age:2}
		];
		let names = Array.from(people, (x) => x.name);
		expect(names[0]).toBe('Homer');
		expect(names.length).toBe(5);
	});
});
