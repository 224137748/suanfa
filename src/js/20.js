/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // while (/\(\)|\[\]|\{\}/.test(s)) {
  //   s = s.replace(/\{\}/g, '')
  //     .replace(/\[\]/g, '')
  //     .replace(/\(\)/g, '');
  // }
  // return s === '';
  const stack = [];
  const startArr = ['(', '[', '{'];
  const valObj = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  let i = 0;
  for (; i < s.length; i++) {
    if (startArr.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (s[i] === valObj[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end
console.log(isValid('[({})({})({})]'));

