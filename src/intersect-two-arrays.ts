function intersect(nums1: number[], nums2: number[]) {
  let longer: number[];
  let shorter: number[];
  if (nums1.length >= nums2.length) {
    longer = nums1;
    shorter = nums2;
  } else {
    longer = nums2;
    shorter = nums1;
  }

  const common: number[] = [];
  shorter.forEach((num) => {
    if (longer.includes(num)) {
      common.push(num);
      longer.splice(longer.indexOf(num), 1);
      console.log(shorter, longer);
    }
  });
  return common;
}

console.log("result:", intersect([1, 2, 2, 1], [2, 2]));
