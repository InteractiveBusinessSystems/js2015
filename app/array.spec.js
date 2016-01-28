describe('array specs', () => {
	let numbers;
	beforeEach(() => {
		numbers = [1, 5, 15, 30];
	});
	it('find should return first matching element', () => {
		let x = numbers.find(x => x > 5);
		expect(x).toBe(15);
	});

	it('findIndex should return the index of the first match', () => {
		let x = numbers.findIndex(x => x > 5);
		expect(x).toBe(2);
	});

	it('fill should fill entire array', () => {
		expect(numbers.fill('x')).toEqual(['x','x','x','x']);
	});

	it('fill should fill partial array', () => {
		expect(numbers.fill('x', 1, 2)).toEqual([1, 'x', 15, 30]);
	});

	it('should create an array from an array-like object', () => {
		let arrayLike = document.querySelectorAll('div');
		expect(arrayLike.forEach).not.toBeDefined();

		var actualArray = Array.from(arrayLike);
		expect(actualArray.forEach).toBeDefined();
	});
});