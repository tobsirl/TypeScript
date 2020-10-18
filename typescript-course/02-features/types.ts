const today = new Date();

today.getDate();

const person = {
  age: 20,
};

class Color {}

const red = new Color();

const testObj = {
  a: 'blue',
  b: 'green',
  c: 'red',
};

for (let key in testObj) {
  console.log(`key: ${key} value: ${testObj[key]}`);
}
