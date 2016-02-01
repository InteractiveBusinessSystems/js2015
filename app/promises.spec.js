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

    it('should chain promises with then', (done) => {
        getOrder(3).then((order) => {
            return getUser(order.userId);
        }).then((user) => {
            return getCompany(user.companyId);
        }).then((company) => {
            expect(company.name).toBe('Initech');
            done();
        }).catch((error) => {

        });
    });

    it('should execute after all promises are complete', (done) => {
        let courseIds = [1,2,3];
        let promises = [];

        courseIds.forEach(x => promises.push(getCourse(x)));
        Promise.all(promises).then((values) => {
            expect(values.length).toBe(3);
            expect(values[0].name).toBe('course 1');
            expect(values[1].name).toBe('course 2');
            expect(values[2].name).toBe('course 3');
            done();
        });
    });

    it('should resolve after the first promise resolves', (done) => {
        let courseIds = [1,2,3];
        let promises = [];

        courseIds.forEach(x => promises.push(getCourse(x)));
        Promise.race(promises).then((value) => {
            debugger;
            expect(value.name).toBeDefined;
            done();
        });
    });

    it('async generators', (done) => {
        function* main() {
            console.log('starting...');
            yield pause(500);
        }
        done();
    });

});

function getOrder(orderId) {
    return Promise.resolve({userId:20});
}

function getUser(userId) {
    return Promise.resolve({companyId: 30});
}

function getCompany(companyId) {
    return Promise.resolve({name: 'Initech'});
}

let getCourse = (courseId) => {
    return Promise.resolve({id: courseId, name: `course ${courseId}`});
}
