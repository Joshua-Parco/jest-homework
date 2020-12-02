export const originalArray = (arr) =>{
  return arr;
};

export const doubleArray = (numberArray) => {
  return numberArray.map((num) => num * 2);
};

export const evensOnlyArray = (numberArray) => {
  return numberArray.filter((num) => num % 2 == 0);
};

export const arraySum = (numberArray) => {
  return numberArray.reduce((total, num) => total + num);
};

export const allNumbersGreaterThanZero = (numberArray) => {
  return numberArray.every((num) => num > 0 );
};

export const someNumbersAreOdd = (numberArray) => {
  return numberArray.some((num) => num % 2 == 0);
};
