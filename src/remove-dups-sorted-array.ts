// /// method1
// function removeDuplicates(nums: number[]): number {
//   nums.forEach((num, i) => {
//     while (num === nums[i + 1]) {
//       nums.splice(i, 1)
//     }
//   })
//   return nums.length
// }

/// method2
function removeDuplicates(nums: number[]): number {
  if (!nums.length) {
    return 0
  }
  let slow = 0
  for (let fast = 0; fast < nums.length; ++fast) {
    if (nums[slow] !== nums[fast]) {
      ++slow
      nums[slow] = nums[fast]
    }
  }
  return slow + 1
}

// check result
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
