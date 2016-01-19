'use strict';

let person;
describe('class specs', () => {
	beforeEach(() => {
		person = new Person('rick', 'herrmann');
	});
	it('can create a class and set properties', () => {
		expect(person.first).toBe('rick');
		expect(person.last).toBe('herrmann');
	});
	it('can alter properties', () => {
		person.first = 'adam';
		expect(person.first).toBe('adam');
	});
	xit('developer', () => {
		let dev = new Developer();
		expect(dev.first).toBe('homer');
	});

});


class Person {
	constructor(first, last){
		this._first = first;
		this._last = last;
	}

	get first() {
		return this._first;
	}

	set first(value) {
		this._first = value;
	}

	get last() {
		return this._last;
	}

	set last(value) {
		this._last = value;
	}
}

class Developer extends Person {

}