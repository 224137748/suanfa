/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 解题思路： 双指针
var removeElement = function (nums, val) {
  let index = 0;
  let k = 0;
  while (index < nums.length) {
    if (nums[index] !== val) {
      nums[k] = nums[index];
      k++;
    }
    index++;
  }
  nums.length = k;
  return k;
};
// @lc code=end

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

console.log(removeElement(nums, val), nums);

