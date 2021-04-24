let userName: string = 'Paul';
let hasLoggedIn: boolean = true;

userName += ' Tobin';

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ');

// Arrays
const [first, last] = names;
const myValues: Array<number> = [1, 2, 3];

// Interface
interface Person {
  firstName: string;
  lastName: string;
  middleName: string;
}
// Object
const myPerson: Person = {
  firstName: 'Paul',
  lastName: 'Tobin',
  middleName: 'John',
};

// Maps
const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};

ids[30] = 'c';

// Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const result: number[] = [4, 5, 6].map((v) => v * 10);
