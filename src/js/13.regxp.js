/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */


// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const val = {
    a: 1,
    b: 4,
    c: 5,
    d: 9,
    e: 10,
    f: 40,
    g: 50,
    h: 90,
    i: 100,
    j: 400,
    k: 500,
    l: 900,
    m: 1000
  };
  s = s
    .replace(/CM/g, 'l')
    .replace(/CD/g, 'j')
    .replace(/XC/g, 'h') // 90
    .replace(/XL/g, 'f')  // 40
    .replace(/IX/g, 'd') // 9
    .replace(/IV/g, 'b') // 4
    .replace(/M/g, 'm')
    .replace(/D/g, 'k')
    .replace(/C/g, 'i')// 100
    .replace(/L/g, 'g')  // 50
    .replace(/X/g, 'e')  //  10
    .replace(/V/g, 'c')  //5
    .replace(/I/g, 'a'); // 1
  let i = 0;
  let target = 0;
  console.log(s);
  for (; i < s.length; i++) {
    target += val[s[i]];
  }
  return target;
};
// @lc code=end
console.log(romanToInt('MMMXLV'));
