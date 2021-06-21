/* 1、原型链继承 */
(function () {
  function Animal() {
    this.color = ['black', 'red'];
  }
  function Dog() {
    this.name = 'dog';
  }
  Dog.prototype = new Animal();
  let dog1 = new Dog();
  let dog2 = new Dog();

  dog1.color.push('hhaha');
  // console.log(dog2.color);
})();

/* 2、构造函数继承 */
(function () {
  function Animal(name) {
    this.name = name;
    this.color = ['red'];
  }
  function Dog(name) {
    Animal.call(this, name);
  }

  Dog.prototype = new Animal();

  const dog1 = new Dog(11);
  const dog2 = new Dog(22);
  dog1.color.push('yellow');

  // console.log(dog1.color, dog2.color);

})();

/* 3、寄生组合继承 */
(function () {
  function Animal(name) {
    this.name = name;
    this.color = ['red'];
  }
  function Dog(name) {
    Animal.call(this, name);
  }
  Dog.prototype = new Animal();
  // 组合继承
  // Dog.prototype = Object.create(Animal.prototype)
  Dog.prototype.console = Dog;
})();

/* 4、Object.create() */
// 创建一个新对象，新对象的__proto__指向就对象
(function () {
  const abc = {
    name: 'zhangsan',
    print() {
      console.log(this.name + '你好啊');
    }
  };
  const m = Object.create(abc);
  // console.log(m);
  // m.print();
})();

/* 数组去重 */
(function () {
  const arr = [1, 2, 3, 6, 4, 5, 1, 2, 3, 658, 8, 5, 1, 32, 6, 6, 58, 4, 2];
  const setArr = arr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
  // console.log(setArr);
})();

/* 数组拍平 */
(function () {
  function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr);
    }
    return arr;
  }
  // console.log(flatten([99, 2, 3, 3, [2, 2, [66, [9]]]]));
})();

/* 数组拍平 */
(function () {
  function flatten(arr) {
    const _arr = [];
    arr.forEach(item => {
      if (Array.isArray(item)) {
        let c = flatten(item);
        _arr.push(...c);
      } else {
        _arr.push(item);
      }
      console.log(_arr);
    });
    return _arr;
  }
  // console.log(flatten([99, 2, 3, 3, [2, 2, [66, [9]]]]));
})();


/* 深拷贝 */
(function deepClone(obj) {
  if (typeof obj !== 'object') return;
  const newObj = obj instanceof Array ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }

  return newObj;

})();

/* 复杂版深拷贝 */
(function () {
  const isObject = target => (typeof target === 'object' || typeof target === 'function') && target !== null;

  function deepClone(target, mp = new WeakMap()) {
    if (mp.get(target)) {
      return target;
    }

    let constructor = target.constructor;
    if (/^(RegExp|Date)$/i.test(constructor)) {
      return new constructor(target);
    }

    if (isObject(target)) {
      mp.set(target, true);
      const cloneTarget = target instanceof Array ? [] : {};

      for (let key in target) {
        cloneTarget[key] = deepClone(target[key], mp);
      }
      return cloneTarget;
    } else {
      return target;
    }


  }
})();





(function () {
  function render(template, data) {
    const reg = /\{\{(\w+)\}\}/;
    if (reg.test(template)) {
      const name = reg.exec(template)[1];
      template = template.replace(reg, data[name]);
      return render(template, data);
    }
    return template;
  }

  let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
  let person = {
    name: '布兰',
    age: 12
  };
  // console.log(render(template, person));
})();

// 防抖
(function () {
  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      if (timer) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(null, [...args]);
      }, delay || 1500);
    };

  }

  let fn1 = debounce(function (a) {
    console.log(a);
  });
  let fn2 = debounce(function (cc) {
    console.log(cc);
  });

})();


// 柯里化

(function () {
  function curry(add) {
    let fn = (...args) => {
      if (args.length === add.length) {
        return add(...args);
      }
      return (...arg) => fn(...args, ...arg);
    };
    return fn;
  }
  function add(a, b, c) {
    return a + b + c;
  }
  const addCurry = curry(add);

  // console.log(addCurry(1)(2, 9));

})();

(function () {
  function save(num) {
    let total = num;
    function fn(c) {
      total += c;
      return fn;
    }
    fn.valueOf = function () {
      return total;
    };
    return fn;
  }

  // console.log(save(10)(1)(2));
})();


/* 偏函数 */
(function () {
  function partial(add, ...args) {
    return (...arg) => add(...args, ...arg);
  }

  function add(a, b, c) {
    return a + b + c;
  }
  const partialAdd = partial(add, 2, 3);
  console.log(partialAdd(1));
})();

/* 数组重写 */
(function () {
  Array.prototype.forEach2 = function (fn, otherArg) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    if (typeof fn !== 'function') {
      throw new TypeError('fn is not a function');
    }

    for (let i = 0; i < this.length; i++) {
      fn.call(otherArg, this[i], i, this);
    }

  };

  const obj = { total: 0 };

  [1, 2, 3, 4].forEach2(function (item, index, arr) {
    // console.log(item, index, arr);
    this.total += item;
  }, obj);

  // console.log(obj.total);
})();


/* reduce */

(function () {
  Array.prototype.reduce2 = function (cb, cur) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    if (typeof cb !== 'function') {
      throw new TypeError('cb is not a function');
    }

    let res;
    if (cur) {
      res = cur;
    } else {
      res = this.length[0];
    }
    for (let i = 0; i < this.length - 1; i++) {
      res = cb(res, this[i + 1], this);
    }

    return res;

  };

  const test = [1, 2, 3, 4, 5].reduce2((cur, acc) => {
    console.log(cur, acc);
    return cur + acc;
  }, 10);
  console.log(test);
})();