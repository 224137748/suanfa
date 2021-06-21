var isPalindrome = function (x) {
  if (x < 0) return false;
  let y = 0, z = 0;
  let target = x;
  while (target !== 0) {
    y = target % 10;
    z = z * 10 + y;
    target = Math.floor(target / 10);
  }
  return z === x;

};

console.log(isPalindrome(12321));