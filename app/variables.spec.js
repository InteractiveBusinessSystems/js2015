'use strict';
describe('variable specs',  () => {
    it('let should give block scope', () => {
        let i = 5;
        if (true) {
            let i = 10;
        }

        expect(i).toBe(5);
    });

    it('can create a const', () => {
        const x = 10;
        //x = 12;  //this is not allwoed

    });

    it('should allow default parameters', () => {
        function f1 (name = 'rick'){
            return name;
        }
        let n = f1();
        expect(n).toBe('rick');
        
    });

    it('should allow destructing', () => {
        let [a, b, c] = [1,2,{person:'rick'}];
        expect(a).toBe(1);
        expect(b).toBe(2);
        expect(c.person).toBe('rick');
    });

    it('should handle rest parameters', () => {
        expect(f1('test', 1,2,3)).toBe(6);

        function f1(name, ...numbers) {
            let sum = 0;
            numbers.forEach(function(n) {
                sum += n;
            });
            return sum;
        }
    });

    it('spread operator', () => {
        expect(f1('test', ...[1,2,3])).toBe(6);

        function f1(name, x, y, z) {
            return x + y + z;
        }
    });

    it('should allow template strings', () => {
        let name = 'rick';

        let greeting = `Hello ${name}`;
        expect(greeting).toBe('Hello rick');
    });
});
