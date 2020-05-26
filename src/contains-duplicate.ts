// /// method 1 - hash map
// function containsDuplicate(nums: number[]): boolean {
//   const map: { [key: number]: number } = {}
//   for (let i = 0; i < nums.length; ++i) {
//     const el = nums[i]
//     if (!map[el]) {
//       map[el] = 1
//     } else if (map[el] === 1) {
//       return true
//     }
//   }
//   return false
// }

// /// method 2 - Set()
// function containsDuplicate(nums: number[]): boolean {
//   return new Set(nums).size < nums.length
// }

/// methos 3 - hash map
function containsDuplicate(nums: number[]): boolean {
  const map: { [key: number]: number } = {}
  for (let i = 0; i < nums.length; ++i) {
    map[nums[i]] = map[nums[i]] + 1 || 1
    if (map[nums[i]] > 1) return true
  }
  return false
}

/// check results
console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
