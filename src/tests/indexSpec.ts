import { arrays, strings, numbers, myNum, numArr , wordArr, arrSum, mixArr, five} from '../index';
import exp from "constants";
const myFunc = (num: number): number => {
    return num * num;
}

it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(5)).toEqual(25);
});

describe("Test var", () => {
    it("Should be equal", () => {
        expect(myNum).toBeDefined()
        expect(myNum).not.toBeNull()
        expect(arrays.concatArr(numArr, wordArr)).toEqual(mixArr)
    });
})

describe("Test arrays", () => {
    it("Should be equal", () => {
        expect(arrays.addArr(numArr)).toEqual(arrSum)
        expect(arrays.concatArr(numArr, wordArr)).toEqual(mixArr)
    });
})

describe("Test numbers", () => {
    it("Should be equal", () => {
        expect(numbers.sum(arrSum, myNum)).toEqual(19)
        expect(numbers.sum(1, 0)).toBeTruthy()
        expect(numbers.sum(0, 0)).toBeFalsy()
        expect(numbers.multiply(five, 8)).toEqual(40)
        expect(numbers.multiply(five, 8)).toBeGreaterThan(30)
        expect(numbers.multiply(five, 8)).toBeLessThan(50)
        expect(numbers.multiply(five, 0)).toBeFalsy()
    });
})

describe("Test strings", () => {
    it("Should be equal", () => {
        expect(strings.capitalize('the quick brown fox')).toEqual('The Quick Brown Fox')
    });
})
