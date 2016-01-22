'use strict';
describe('scoping specs',  () => {
    it('let should give block scope', () => {
        let i = 5;
        if (true) {
            let i = 10;
        }

        expect(i).toBe(5);
    });

    it('can create a const', () => {
        const x = 10;
        //x = 12;
    });

    it('should allow default parameters', () => {
        let n = f1();
        expect(n).toBe('rick');
        function f1 (name = 'rick'){
            return name
        }
    });

    it('should allow destructing', () => {
        let [a, b, c] = [1,2,3];
        expect(a).toBe(1);
        expect(b).toBe(2);
        expect(c).toBe(3);
    });

    it('should handle rest parameters', () => {
        expect(f1(1,2,3)).toBe(6);

        function f1(...numbers) {
            let sum = 0;
            numbers.forEach(function(n) {
                sum += n;
            });
            return sum;
        }
    });

    it('spread operator', () => {
        expect(f1(...[1,2,3])).toBe(6);

        function f1(x, y, z) {
            return x + y + z;
        }
    });

    it('should allow template strings', () => {
        let name = 'rick';

        let greeting = `Hello ${name}`;
        expect(greeting).toBe('Hello rick');
    });
});
