import { analyzeArray } from "../main";

describe('testing analyzeArray', ()=>{
    describe('testing 1, 8, 3, 4, 2, 6', ()=>{
        it('should return correct values', ()=>{
            const result =analyzeArray([1, 8, 3, 4, 2, 6]);
            expect(result).toEqual({
                average: 4,
                min: 1,
                max: 8,
                length: 6
            });
        })
    });
});

