// 斐波那契额函数


// 1、使用for循环
// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1 || n === 2) return 1;

//   let prevValue = 1;
//   let currentValue = 1;
//   let temp;
//   for (let i = 3; i <= n; i++) {
//     temp = currentValue;
//     currentValue += prevValue;
//     prevValue = temp;
//   }   

//   return currentValue;
// }


// 2、使用递归
// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n <= 2) return 1;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// } 

// 3、记忆化斐波那契
function fibonacci(n) {
  const nums = [0, 1, 1];
  function sun(n) {
    if (nums[n] != null) return nums[n];
    return nums[n] = sun(n - 1) + sun(n - 2);
  }
  return sun(n);
}


console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));

