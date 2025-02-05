import { cipher } from "../main";

describe('testing cipher', ()=>{
    describe('checking "hello, world" with 7', ()=>{
        it('should be "olssv, dvysk!"', ()=>{
            expect( cipher('hello, world!', 7) ).toBe('olssv, dvysk!');
        });
    });

    describe('checking wrap with "xyz" with 3', ()=>{
        it('should be "abc"', ()=>{
            expect( cipher('xyz', 3) ).toBe('abc');
        });
    });

    describe('check case preservation, "HeLLo", 3', ()=>{
        it('should be "KhOOr', ()=>{
            expect( cipher('HeLLo', 3) ).toBe('KhOOr');
        });
    });
});
