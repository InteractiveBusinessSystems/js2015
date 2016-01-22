'use strict';

describe('arrow functions!!', () => {
	it('arrow functions should be cool', () => {
		let thisRocks = true;
		expect(thisRocks).toBe(true);
	});

	it('can assign a function', () => {
		let add = (x,y) => x + y;

		expect(add(3,7)).toBe(10);
	});

	it('can be used as a function parameter', () => {
		let square = x => x * x;

		let numbers = [1,2,3,4,5];
		let squares = [];
		numbers.forEach(n => squares.push(square(n)));

		expect(squares).toEqual([1,4,9,16,25]);
	});

	it('binds to this', function(done) {
		this.day = 'friday';

		setTimeout(() => {
			expect(this.day).toBe('friday');
			done();
		}, 15);
	});

	it('introduces a for-of loop', () => {
		let numbers = [1,2,3,4,5];
		let sum = 0;

		for(let n of numbers) {
			sum += n
		}

		expect(sum).toBe(15);
	});

	it('can build your own iterable', () => {
		let numbers = function*() {
			yield 1;
			yield 2;
			yield 3;
			yield 4;
			yield 5;
		}
		let sum = 0;

		for(let n of numbers()) {
			sum += n
		}

		expect(sum).toBe(15);
	});
});

