// function add(a, b, c) {
//   return a + b + c;
// }

// function curry(fn) {
//   const juice = (...args) => {
//     console.log('args ==', args);
//     if (args.length === fn.length) return fn(...args);
//     return (...arg) => juice(...args, ...arg);
//   };
//   return juice;
// }

// let addCurry = curry(add);
// console.log(addCurry(1)(2)(3));


// function add(a, b, c) {
//   return a + b + c;
// }

// function partial(fn, ...args) {
//   return (...arg) => {
//     return fn(...args, ...arg);
//   };

// }

// let partialAdd = partial(add, 1);


// partialAdd(2, 3);

Array.prototype.forEach2 = function (fn, thisArg) {
  if (this == null) {
    throw new Error('this is null or not undefined');
  }

  if (typeof fn !== 'function') {
    throw new Error(fn + 'is not a function');
  }

  const O = Object(this);
  console.log(this);
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in O) {
      fn.call(thisArg, O[k], k, O);
    }
    k++;
  }
};

Array.prototype.map2 = function (fn, thisArg) {
  if (this == null) {
    throw new Error('this is null or not undefined');
  }

  if (typeof fn !== 'function') {
    throw new Error(fn + 'is not a function');
  }

  const O = Object(this);

  const len = O.length >>> 0;
  const newArr = [];

  let k = 0;
  while (k < len) {
    if (k in O) {
      newArr[k] = fn.call(thisArg, O[k], k, O);
    }
    k++;
  }
  return newArr;
};

Array.prototype.reduce2 = function (fn, initialValue) {
  if (this == null) {
    throw new Error('this is null or not undefined');
  }

  if (typeof fn !== 'function') {
    throw new Error(fn + 'is not a function');
  }

  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0, acc;

  if (arguments.length > 1) {
    acc = initialValue;
  } else {
    // 取数组中第一个非 empty 的值为初始值
    while (k < len && !(k in O)) {
      k++;
    }
    if (k > len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    arr = O[k++];
  }

  while (k < len) {
    if (k in O) {
      acc = fn(acc, O[k], k, O);
    }
    k++;
  }

  return acc;
};

console.log([1, 2, 3, 4, 5, 6].reduce((acc, curr) => {
  return acc + curr;
}));


Function.prototype.call2 = function (context, ...args) {
  context = context || window;
  const fnName = Symbol('functionname');
  context[fnName] = this;

  const res = context[fnName](...args);
  Reflect.deleteProperty(context, fnName);
  return res;
};
var hahha = 'hhhh';
function abcd() {
  console.log(this.hahha);
}
// const obj = {
//   hahha: '5555'
// };
// abcd.call2();
// abcd.call2(obj);


Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () { };

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? self : context, args.concat(bindArgs));
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};


// function ccc() {
//   console.log(this);
//   console.log(this.name);
// }
// ccc.name = '12313213';
// const obj2 = {
//   name: 'zhangsan'
// };
// const cccCopy = ccc.bind2(obj2);
// const fn1 = new cccCopy();

// function new2(fn, ...args) {
//   const obj = Object.create(fn.prototype);

//   const res = fn.apply(obj, args);
//   return res instanceof Object ? res : obj;
// }



Object.create2 = function (proto, propertiesObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('');
  }
  if (typeof propertiesObject == null) {
    throw new TypeError('');
  }

  const F = function () { };
  F.prototype = proto;
  const obj = new F();
  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }
  if (proto == null) {
    obj.__proto__ = null;
  }
  return obj;
};

Object.assign2 = function (target, ...source) {
  if (target == null) {
    throw new TypeError('');
  }

  let ret = Object(target);
  source.forEach(obj => {
    if (obj == null) return;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        ret[key] = obj[key];
      }
    }
  });
  return ret;
};


/* promise */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];


    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn(value));
      }
    };

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
}