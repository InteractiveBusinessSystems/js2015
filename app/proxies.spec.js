describe('Proxies', () => {
    it('should intercept gets', () => {
        let car = {
            year: 2012,
            make: 'Ford',
            passengers: 12,
            color: 'white',
            price: 20000
        };

        let carProxy = new Proxy(car, {
            get: (target, property) => {
                if (property === 'price') {
                    return 0;
                } else {
                    return target[property];
                }
            }
        });

        expect(car.price).toBe(20000);
        expect(carProxy.price).toBe(0);
    });

    it('should intercept sets', () => {
        let car = {
            year: 2012,
            make: 'Ford',
            passengers: 12,
            color: 'white',
            price: 20000
        };

        let carProxy = new Proxy(car, {
            set: (target, property, value) => {
                if (property === 'price') {

                } else {
                    target[property] = value;
                }
            }
        });

        carProxy.price = 10000;
        expect(carProxy.price).toBe(20000);
    });

    it('should intercept functions', () => {
        let car = {
            year: 2012,
            make: 'Ford',
            passengers: 12,
            color: 'white',
            price: 20000,
            drive: (person) => {
                return person.name + ' is driving';
            }
        };
        car.drive = new Proxy(car.drive, {
            apply: (target, context, args) => {
                if (args[0].age < 16) {
                    return `${args[0].name} is too young to drive`
                } else {
                    return target.apply(context, args);
                }
            }
        });
        let kid = { name: 'bart', age: 10};
        expect(car.drive(kid)).toBe('bart is too young to drive');
    });
});
