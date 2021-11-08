// 1、原型继承
// function SuperType() {
//   this.colors = [];
// }

// SuperType.prototype.getColors = function () {
//   return this.colors;
// };

// SuperType.prototype.addColor = function (val) {
//   this.colors.push(val);
// };

// function SubType() {
//   this.subProperty = true;
// }
// SubType.prototype = new SuperType();

// const instance1 = new SubType();
// const instance2 = new SubType();
// console.log(instance1.colors, instance2.colors);

// instance1.addColor('blue');

// console.log(instance1.colors, instance2.colors);

// 缺点：多个实例共用继承实例，导致引用类型的数据会共享（影响）


// 2、借用构造函数继承

// function SuperType() {
//   this.colors = ['red', 'green', 'blue'];
// }

// function SubType() {
//   SuperType.call(this);
// }

// const instance1 = new SubType();
// console.log(instance1.colors);

// 缺点：1、只继承了父类实例的属性和方法，没有继承父类原型上的属性和方法




// 3、组合继承（原型链+借用构造函数）
// function SuperType(name) {
//   this.name = name;
//   this.colors = ['red', 'blue', 'green'];
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }

// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;

// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };

// var instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors); //"red,blue,green,black"
// instance1.sayName(); //"Nicholas";
// instance1.sayAge(); //29

// var instance2 = new SubType("Greg", 27);
// console.log(instance2.colors);
// instance2.sayName(); //"Greg";
// instance2.sayAge(); //27


// 缺点：父类构造函数执行了2次，

// 4\原型式继承

// 将子类的prototype替换为继承的原型对象,
function object(obj) {
  function F() { }
  F.prototype = obj;
  return new F();
}

// 缺点:1\无法传参,2\多个实例的引用类型属性指向相同,可能存在覆盖\篡改可能

/**
 * 5\寄生继承
 * 主要在原型继承的基础上,增强对象,返回构造函数
 */


/**
 * 6\寄生组合继承
 */

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green', 'blue'];
}
SuperType.prototype.setName = function (name) {
  this.name = name;
};

function SubType(name) {
  SuperType.call(this, name);
}
SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constuctor = SubType;


const instance1 = new SubType('name1');

const instance2 = new SubType('name2');
console.log(instance1.name, instance2.name);
instance1.colors.push(111);
instance2.colors.push(222);
instance1.setName('zhangsan');
instance2.setName('lisi');
console.log(instance1.name, instance2.name);

console.log(instance1.colors, instance2.colors);


