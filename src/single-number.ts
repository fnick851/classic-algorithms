// /// method1
// function singleNumber(nums: number[]) {
//   const hMap: { [key: number]: number } = {}
//   nums.forEach(num => {
//     if (hMap[num]) hMap[num] += 1
//     else hMap[num] = 1
//   })
//   return Object.entries(hMap).sort((a, b) => a[1] - b[1])[0][0]
// }

// /// method2
// function singleNumber(nums: number[]) {
//   const hMap: { [key: number]: number } = {}
//   nums.forEach(num => {
//     if (hMap[num]) hMap[num] += 1
//     else hMap[num] = 1
//   })
//   for (let key in hMap) {
//     if (hMap[key] === 1) {
//       return key
//     }
//   }
// }

/// method3
/// XOR bit-wise operation
const singleNumber = (nums: number[]) => nums.reduce((a, b) => a ^ b)

// check result
console.log(singleNumber([4, 1, 2, 1, 2]))
