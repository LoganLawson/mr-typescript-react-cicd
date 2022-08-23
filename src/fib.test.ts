import Fib from './fib'
describe('fibonacci test', () => {
    it('when 5 return 5', () => {
        //arrange
        const input = 5;
        const expected = 5;

        //act
        const actual = Fib(5);
        
        //assert
        expect(actual).toBe(expected);
    }),
    it('when 6 return 8', () => {
        //arrange
        const input = 6;
        const expected = 8;

        //act
        const actual = Fib(6);
        
        //assert
        expect(actual).toBe(expected);

    }),
    it('when 0 return 0', () => {
        //arrange
        const input = 0;
        const expected = 0;

        //act
        const actual = Fib(0);
        
        //assert
        expect(actual).toBe(expected);

    })
})