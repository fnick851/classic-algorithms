// /// method 1
// const plusOne = (digits: number[]): number[] =>
//   (BigInt(digits.join("")) + 1n)
//     .toString()
//     .split("")
//     .map(int => parseInt(int))

/// method 2
/// per digit operation, time O(n). space O(1)
function plusOne(digits: number[]): number[] {
  const n = digits.length

  for (let idx = n - 1; idx >= 0; --idx) {
    // set all the nines at the end of array to zeros
    if (digits[idx] == 9) {
      digits[idx] = 0
    }
    // here we have the rightmost not-nine
    else {
      // increase this rightmost not-nine by 1
      digits[idx]++
      // and the job is done
      return digits
    }
  }
  // we're here because all the digits are nines
  digits.unshift(1)
  return digits
}

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([2, 9, 9]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
