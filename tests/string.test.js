import {capitalize, reverse} from '../main.js'

describe('testing capitalize', ()=>{
    describe('all lowercase string "david"', ()=>{
        it('should be "David"', ()=>{
            expect(capitalize('david')).toBe('David');
        });
    });

    describe('all uppercase string "HELLO"', ()=>{
        it('should be "HELLO"', ()=>{
            expect(capitalize('HELLO')).toBe('HELLO');
        });
    });

    describe('mixed string "tEstiNG', ()=>{
        it('should be "TEstiNG"', ()=>{
            expect(capitalize('tEstiNG')).toBe('TEstiNG');
        });
    });
});

describe('testing reverse', ()=>{
    describe('reverse regular string "bottle"', ()=>{
        it('should be elttob', ()=>{
            expect(reverse('bottle')).toBe('elttob');
        })
    }) 
})
