import Fib from './fib'
describe('fibonacci test', () => {
    const testCases = [
        {input: 5, expected: 5},
        {input: 6, expected: 8},
        {input: 0, expected: 0},
        {input: 100, expected: 354224848179262000000},
    ]
    testCases.map(tc => {
        it(`When ${tc.input} return ${tc.expected}`, () => {    
            //act
            const actual = Fib(tc.input);
            
            //assert
            expect(actual).toBe(tc.expected);
        })
    })
})