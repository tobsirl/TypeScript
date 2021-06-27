let userName: string = 'Jack';
let hasLoggedIn: boolean = true;

userName += ' Herrington';

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

// Typing arrays
const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2, 3];

// Objects
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: 'Jack',
  last: 'Herrington',
};
