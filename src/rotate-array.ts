function rotate(nums: number[], k: number): void {
  for (let i = nums.length - 1; i > nums.length - k - 1; --i) {
    nums.unshift(nums[nums.length - 1])
    nums.pop()
  }
}

// /// this does not work
// /// https://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference
// function rotate(nums: number[], k: number): void {
//   nums = [...nums.splice(nums.length - k, k), ...nums]
// }

// check results
let nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3)
console.log(nums)
nums = [-1, -100, 3, 99]
rotate(nums, 2)
console.log(nums)
