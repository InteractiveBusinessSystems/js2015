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
});