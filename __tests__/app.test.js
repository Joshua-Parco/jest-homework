import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  evensOnlyAndDoubleArray,
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4]);
  });
});

describe('doubleArray Test', () => {
  test("doubleArray should return each number element doubled", () => {
    let numberArray = [1, 2, 3, 4];
    let result = [2, 4, 6, 8];
    expect(doubleArray(numberArray)).toEqual(result);
  });
});

describe('evensOnlyArray', () => {
  test("evensOnlyArray should return only even elements from array", () => {
    let numberArray = [1, 2, 3, 4];
    let result = [2, 4];
    expect(evensOnlyArray(numberArray)).toEqual(result);
  });
});

describe('arraySum', () => {
  test("arraySum should return the sum on the elements in array", () => {
    let numberArray = [1, 2, 3, 4];
    let result = 10;
    expect(arraySum(numberArray)).toEqual(result);
  });
});

describe('allNumbersGreaterThanZero', () => {
  test("allNumbersGreaterThanZero should return true if all elements are greater than 0", () => {
    let numberArray = [1, 2, 3, 4];
    let result = true;
    expect(allNumbersGreaterThanZero(numberArray)).toEqual(result);
  });
});

describe('evensOnlyAndDoubleArray', () => {
  test("evensOnlyAndDoubleArray should return the doubled even elements", () => {
    let numberArray = [1, 2, 3, 4];
    let result = [4, 8];
    expect(evensOnlyAndDoubleArray(numberArray)).toEqual(result);
  });
});
