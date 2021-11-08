var peakIndexInMountainArray = function (arr) {

  // for(let i = 1; i < arr.length; i++) {
  //     if (arr[i] > arr[i-1] &&  (arr[i] > arr[i+1])) {
  //         return i
  //     }
  // }
  let left = 0;
  let right = arr.length;
  let mid;
  while (left < right) {
    mid = Math.floor((right + left) / 2);
    console.log(mid);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {

      right = mid;
    }

    if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      left = mid;
    }
  }
};


// peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]);
// peakIndexInMountainArray([40, 48, 61, 75, 100, 99, 98, 39, 30, 10]);


var MyCircularQueue = function (k) {
  this.queue = [];
  this.maxLength = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue.length < this.maxLength) {
    this.queue.push(value);
    return true;
  }
  return false;

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length) {
    this.queue.shift();
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.queue.length) {
    return this.queue[0];
  }
  return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length) {
    return this.queue[this.queue.length - 1];

  }
  return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.maxLength;
};

// Your MyCircularQueue object will be instantiated and called as such:
const circularQueue = new MyCircularQueue(3); // 设置长度为 3
circularQueue.enQueue(1);  // 返回 true
circularQueue.enQueue(2);  // 返回 true
circularQueue.enQueue(3);  // 返回 true
circularQueue.enQueue(4);  // 返回 false，队列已满
circularQueue.Rear();  // 返回 3
circularQueue.isFull();  // 返回 true
circularQueue.deQueue();  // 返回 true
circularQueue.enQueue(4);  // 返回 true
circularQueue.Rear();  // 返回 4
