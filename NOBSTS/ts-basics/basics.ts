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

console.log(myPerson['lastName'])
