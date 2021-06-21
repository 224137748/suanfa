/* 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */
var test = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
var test2 = [[-5]];
var findNumberIn2DArray = function (matrix, target) {

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j], matrix[i][j + 1]);
      if (matrix[i][j] === target) return true;
      if (j + 1 < matrix[i].length) {
        if (matrix[i][j + 1] === target) return true;
        if (matrix[i][j] < target && target < matrix[i][j + 1]) {
          break;
        };
      }
    }
    console.log("i => ", i);
  }

  return false;
};

// console.log(findNumberIn2DArray(test, 5));
// console.log(findNumberIn2DArray(test2, -5));


/* =============================================================================================== */
/* 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。 */
test = "We are happy.";
var replaceSpace = function (s) {
  return s.replace(/\s/g, '%20');
};
// console.log(replaceSpace(test));



/* =============================================================================================== */
/* 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。 */
//前序遍历 preorder = [3,9,20,15,7]
//中序遍历 inorder = [9,3,15,20,7]
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

};

/* =============================================================================================== */
/* 两个栈实现一个队列 */
/* 解题思路：
* 一个栈stack1 入，
* 一个栈stack2 出，
* 当stack2出的时候检查stack2是否为空，为空则从stack1栈顶中取出来推入 stack2 栈底，直到stack1被清空
*/
var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length === 0) {

    if (this.stack1.length === 0) {
      return -1;
    } else {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.length === 0 ? -1 : this.stack2.pop();

    }

  } else {
    this.stack2.pop();
  }

};
// var cQueue = new CQueue();
// console.log(cQueue.deleteHead());
// console.log(cQueue.appendTail(5));
// console.log(cQueue.appendTail(2));
// console.log(cQueue.deleteHead());
// console.log(cQueue.deleteHead());


/* =============================================================================================== */
// 斐波那契数列

var fib = function (n) {
  // 递归算法
  // if (n === 0) return 0;
  // if (n === 1) return 1;
  // return fib(n - 1) + fib(n - 2);

  let a = 0, b = 1, sum;
  for (let i = 1; i < n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return sum;
};
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(45));
// console.log(fib(5));

/* =============================================================================================== */

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]*/g, '').toLowerCase();
  console.log(s);
  if (!s) return true;
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
  }

  return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("Marge, let's \"[went].\" I await {news} telegram."));

/* =============================================================================================== */

// 字符串转换整数 (atoi)
var myAtoi = function (s) {
  s = s.trim();
  var type = s.charAt(0) === '-' ? -1 : 1;
  console.log(type);
  var val = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 && (s.charAt(i) === '-' || s.charAt(i) === '+')) {
      continue;
    } else if (!isNaN(s.charAt(i))) {
      val += s.charAt(i);
    } else {
      break;
    }
  }
  return type * (Math.abs(val) >= 2147483648 ? 2147483647 : val);
};


// console.log(myAtoi("-91283472332"));


/* =============================================================================================== */


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  var len = needle.length;
  if (haystack.length === len) {
    return haystack === needle ? 0 : -1;
  }
  for (let i = 0; i + len < haystack.length; i++) {
    if (haystack.substring(i, i + len) === needle) {
      return i;
    }
  }
  return -1;
};

// console.log(strStr('hello', 'll'));
// console.log(strStr('a', 'a'));



/* =============================================================================================== */


// 给定一个正整数 n ，输出外观数列的第 n 项。
// 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。


function say(str) {
  if (+str === 1) return '';
  str += '';
  var key = '';
  var length = 0;
  var result = '';
  var all = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === key) {
      length++;
    } else {
      if (key) {
        result += '' + length + key;
        all += length;
      }
      key = str.charAt(i);
      length = 1;
    }
  }

  if (all < str.length) {
    result += '' + length + key;
  }

  return result;
}
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';
  // let index = 1;
  // let val = '1';
  // while (index < n) {
  //   val = say(val);
  //   index++;
  // }
  return say(countAndSay(n - 1));

};

// console.log(countAndSay(1));
// console.log(countAndSay(3));

/* =============================================================================================== */

// 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];
  // 查找最小长度的元素
  strs.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(strs);

  var common = '';
  var result = '';
  for (let i = 1; i <= strs[0].length; i++) {
    common = strs[0].substring(0, i);
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(common)) {
        return result;
      }
    }
    result = common;
  }

  return result;

};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["ab", 'a']));