// https://leetcode.com/problems/trapping-rain-water/

function trap(height: number[]) {
  let trapped = 0
  let left = 0
  let leftHeight = 0
  let right = height.length - 1
  let rightHeight = 0

  while (left <= right) {
    if (leftHeight <= rightHeight) {
      leftHeight = Math.max(leftHeight, height[left])
      trapped += leftHeight - height[left]
      left++
    } else {
      rightHeight = Math.max(rightHeight, height[right])
      trapped += rightHeight - height[right]
      right--
    }
  }

  return trapped
}

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
