const func1 = () => {
  console.log('start');
};
const func2 = () => {
  func1();
};
const func3 = () => {
  func2();
};
const func4 = () => {
  func3();
};

func4();

console.log('end');