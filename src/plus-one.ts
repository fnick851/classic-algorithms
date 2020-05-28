const plusOne = (digits: number[]): number[] =>
  (BigInt(digits.join("")) + 1n)
    .toString()
    .split("")
    .map(int => parseInt(int))

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([2, 9, 9]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
