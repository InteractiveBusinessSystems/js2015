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
	it('can inherit/extend', () => {
		let dev = new Developer('homer');
		dev.language = 'javascript';
		expect(dev.first).toBe('homer');
		expect(dev.language).toBe('javascript');
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

	get language() {
		return this._language;
	}

	set language(value) {
		this._language = value;
	}

}
