/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  let len = s.length;
  if (!s) return 0;
  for (let i = 0; i < len; i++) {
    if (s[len - 1 - i] === ' ') {
      return i;
    }
  }
  return s.length;
};
// @lc code=end

console.log(lengthOfLastWord("b   a    "));