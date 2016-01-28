describe('numbers and math specs', () => {
	it('octal should start with 0o', () => {
		var octal = 0o56;
		expect(octal).toBe(46);
	});

	it('binary should start with 0b', () => {
		var binary = 0b1101;
		expect(binary).toBe(13);
	});
	it('Number can parse octal', () => {
		var octal = Number('0o56');
		expect(octal).toBe(46);
	});

	it('Number can parse binary', () => {
		var binary = Number('0b1101');
		expect(binary).toBe(13);
	});

	it('parseInt is moved to Number', () => {
		var n = Number.parseInt('27');
		expect(n).toBe(27);
	});

	it('parseFloat is moved to Number', () => {
		var n = Number.parseFloat('12.3');
		expect(n).toBe(12.3);
	});

	it('number can check for integer', () => {
		let x = Number.isInteger(1);
		let y = Number.isInteger('1');
		let z = Number.isInteger(1.5);
		expect(x).toBe(true);
		expect(y).toBe(false);
		expect(z).toBe(false);
	});

	

});