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
