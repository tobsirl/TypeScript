// * ARRAYS
const warriors = ['Superman', 'Batman', 'Flash'];
warriors.push('Antman'); // Ok

warriors.push(true);
// Error: Argument of type 'true' is not assignable to parameter of type 'string'.

// * ARRAY TYPES
let arrayOfNumbers: number[];
arrayOfNumbers = [1, 2, 3];

// * Array and function types
// Type is a function that returns an array of stings
let createString: () => string[];

// Type is an array of functions that each return a string
let stringCreators: (() => string)[];

// * Union-Types Arrays
// Types is either a number or an array of strings
let stringOrArrayOfNumber: string | number[];

// Type is an array of elements that are either number or a string
let arrayOfStringOrNumber: (string | number)[];

// Type is (string | undefined)[]
const namesMaybe = ['John', 'Jane', undefined];

// * Evolving Any Arrays
// Type: any[]
let values = [];

// Type: string[]
values.push('');

// Type: (number | string)[]
values[0] = 0;

// * Multidimensional Arrays
let arrayOfArraysOfNumbers: number[][];
arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// * Array Members
const defenders = ['Clarenza', 'Dina'];

// Type: string
const defender = defenders[0];

const soldiersOrDates = ['Deborah Sampson', new Date(1936, 8, 16)];

// Type: string | Date
const soldiersOrDate = soldiersOrDates[0];

// * Spreads and Rests
// Type: string[]
const soldiers = ['Harriet Tubman', 'Joan of Arc', 'Khutulun'];

// Type: number[]
const soldierAges = [90, 19, 45];

// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];
