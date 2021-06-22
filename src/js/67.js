/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let stack = '';
  const bigNum = a.length > b.length ? a : b;
  const smallNum = bigNum === a ? b : a;
  const len = bigNum.length;
  const slen = smallNum.length;
  let jin = 0;
  let add = 0;
  for (let i = 0; i < len; i++) {
    add = (+bigNum[len - 1 - i] || 0) + (+smallNum[slen - 1 - i] || 0);
    if (add === 2 && jin === 0) {
      stack = '0' + stack;
      jin = 1;
    } else if (add === 2 && jin === 1) {
      stack = '1' + stack;
      jin = 1;
    } else if (add === 1 && jin === 1) {
      stack = '0' + stack;
      jin = 1;
    } else {
      stack = (+add + jin) + stack;
      jin = 0;
    }
  }
  if (jin !== 0) {
    stack = '1' + stack;
  }
  return stack;
};
// @lc code=end

console.log(addBinary('1111', '1111'));
