/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let i = 0;
  let res = nums[0];
  let sum = 0;
  for (; i < nums.length; i++) {
    // 只要sum数值大于0，即视为仍然有变大的可能
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    res = Math.max(res, sum);
  }
  return res;
};
// @lc code=end

console.log(maxSubArray([5, 4, -1, 7, 8]));
