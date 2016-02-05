'use strict'
describe('object specs', () =>  {
    describe('object is', () => {
        it('should consider Nan to Nan', () => {
            //can use anywhere you use ===
            //not an operator, it is a function
            expect(NaN === NaN).toBe(false);
            expect(Object.is(NaN, NaN)).toBe(true);
        });
    });

    describe('object assign', () => {
        it('assign function', () => {
            //replaces _.extend
            let shark = {
                bite: (target) => {
                    target.hurt = true;
                }
            };

            let person = {};

            let laser = {
                shoot: (target) => {
                    target.exploded = true;
                }
            };

            Object.assign(shark, laser);
            shark.shoot(person);
            expect(person.exploded).toBe(true);
        });
    });

    describe('property initializers', () => {
        it('should allow shorthand initialization', () => {
            let city = 'Detroit';
            let team = 'Tigers';

            let BaseballTeam = {
                city,
                team
            };

            expect(BaseballTeam.city).toBe('Detroit');
            expect(BaseballTeam.team).toBe('Tigers');
        });
    });

    describe('method initiailizer shorthand', () => {
        it('should create a method with shorthand notation', () => {
            let server = {
                // getPort : function () {
                //     return 3000;
                // }
                getPort() {
                    return 3000;
                }
            }

            expect(server.getPort()).toBe(3000);
        });
    });

    describe('computed property names', () => {
        it('should allow properties from an expression', () => {
            let createObject = (name, value) => {
                return {
                    [name]: value
                };
            }
            var obj = createObject('season', 'winter');

            expect(obj.season).toBe('winter');
        });

        it('should allow concatenated property names', () => {

        });

    });
});
