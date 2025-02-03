import { Calculator } from '../main.js';

// tests should be more robust but i am way too lazy, this is just for practice anyway
describe('testing calculator', ()=>{
    describe('adding 1 and 3', ()=>{
        it('should equal 4', ()=>{
            const calc = new Calculator;
            expect(calc.sum(1, 3)).toBe(4);
        });
    });

    describe('subtracting 1 and 4', ()=>{
        it('should equal -3', ()=>{
            const calc = new Calculator;
            expect(calc.subtract(1, 4)).toBe(-3);
        });
    });

    describe('multiplying 9 and 3', ()=>{
        it('should equal 27', ()=>{
            const calc = new Calculator;
            expect(calc.multiply(9, 3)).toBe(27);
        });
    });

    describe('dividing 60 by 10', ()=>{
        it('should equal 6', ()=>{
            const calc = new Calculator;
            expect(calc.divide(60, 10)).toBe(6);
        });
    });
})
