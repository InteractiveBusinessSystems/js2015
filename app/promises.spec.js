'use strict';

describe('promise specs', () => {
	it('should execute a callback', (done) => {
		let promise = new Promise(function(resolve, reject) {
			resolve();
		});

		promise.then(() => {
			done();
		})
	});

	it('should receive the resolved data', (done) => {
		let promise = new Promise((resolve, reject) => {
			resolve('completed');
		});

		promise.then((data) => {
			expect(data).toBe('completed');
			done();
		});
	});

	it('should receive the rejected reason', (done) => {
		let promise = new Promise((resolve, reject) => {
			reject(Error('failed'));
		});

		promise.catch((data) => {
			expect(data.message).toBe('failed');
			done();
		});
	});

	it('should be chainable', (done) => {
		let promise1 = new Promise((resolve, reject) => {
			resolve('completed');
		});

		let promise2 = new Promise((resolve, reject) => {
			resolve(promise1);
		});

		promise2.then((data) => {
			expect(data).toBe('completed');
			done();
		});
	});

	it('should have a static resolve', (done) => {
		let promise1 = Promise.resolve(10);

		let promise2 = Promise.resolve(promise1);

		promise2.then((data) => {
			expect(data).toBe(10);
			done();
		});
	});

	it('should have a static reject', (done) => {
		let promise = Promise.reject(Error('failed'));
		promise.catch((error) => {
			expect(error.message).toBe('failed');
			done();
		});
	});

	it('should be async', (done) => {
		let async = false;
		let promise = Promise.resolve(10);

		promise.then((data) => {
			expect(async).toBe(true);
			done();
		});
		async = true;
	});
});