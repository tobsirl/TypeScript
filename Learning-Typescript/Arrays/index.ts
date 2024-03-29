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

// Spreading Rest Parameters
function logHeros(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting} ${name}`);
  }
}

const heros = ['Cathay Williams', 'Lozen', 'Nzinga'];

logHeros('Hello', ...heros);

const birthYears = [1936, 1887, 1854];

logHeros('Born in', ...birthYears);
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.

// * TUPLES
let yearAndWarrior: [number, string];
yearAndWarrior = [1936, 'Clarenza']; // Ok

yearAndWarrior = [false, 'Clarenza'];
// Error: Type 'boolean' is not assignable to type 'number'.

yearAndWarrior = [530];
// Error: Type '[number]' is not assignable to type '[number, string]'.
// Source has 1 element(s) but target requires 2.

// year type: number
// warrior type: string
let [year, warrior] = Math.random() > 0.5 ? [1936, 'Clarenza'] : [1936, 'Dina'];

// * Tuple Assignability
// Type: (boolean | number)[]
const pairloose = [false, 123];
const pairTupleLoose: [boolean, number] = pairloose;
// Error: Type '(number | boolean)[]' is not
// assignable to type '(boolean | number)[]'.
// Target requires 2 element(s) but source may have fewer.

const tupleThree: [boolean, number, string] = [false, 123, 'Clarenza'];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];
const tupleTwoExtra: [boolean, number] = tupleThree;
// Error: Type '[boolean, number, string]' is
// not assignable to type '[boolean, number]'.
// Source has 3 element(s) but target allow only 2.

// * Tuples as rest parameters
function logPair(name: string, value: number) {
  console.log(`${name}: ${value}`);
}

const pairArray = ['Amage', 1];

logPair(...pairArray);
// Error: A spread argument must either have a
// tuple type or be passed to a rest parameter.

const pairTupleIncorrect: [number, string] = [1, 'Amage'];

logPair(...pairTupleIncorrect);
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.

const pairTupleCorrect: [string, number] = ['Amage', 1];
logPair(...pairTupleCorrect); // Ok

function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name}: ${value[0]}, ${value[1]}`);
}

const trios: [string, [number, boolean]][] = [
  ['Amanitore', [1, true]],
  ['Athefled', [2, false]],
  ['Amanita', [3, false]],
];

trios.forEach((trio) => logTrio(...trio)); // Ok
trios.forEach(logTrio);
// Argument of type '(name: string, value: [number, boolean]) => void'
// is not assignable to parameter of type
// 'value: [string, [number, boolean]]'. ...) => void'.
// Types of parameters 'name' and 'value' are incompatible.
// Type '[string, [number, boolean]]' is not assignable to type 'string'.

// * Tuple Inferences
// Return type: (string | number)[]
function firstCharAndSize(input: string) {
  return [input[0], input.length];
}

// firstChar type: string | number
// size type: string | number
// const [firstChar, size] = firstCharAndSize('Gudit');

// * Explicit Tuples types
// Return type: [string, number]
function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
}

// firstChar type: string
// size type: number
// const [firstChar, size] = firstCharAndSizeExplicit('Cathay Williams');

// * Const asserted tuples
// Type: (string | number)[]
const unionArray = [1157, 'Tomoe'];

// Type: readonly [1157, 'Tomoe']
const readonlyTuple = [1157, 'Tomoe'] as const;

const pairMutable: [number, string] = [1157, 'Tomoe'];
pairMutable[0] = 1247; // Ok

const pairAlsoMutable: [number, string] = [1157, 'Tomoe'] as const;
// Error: The type 'readonly [1157, "Tomoe"]' is 'readonly'
// and cannot be assigned to the mutable variable '[number, string]'.

const pairConst = [1157, 'Tomoe'] as const;
pairConst[0] = 1247;
// Error: Cannot assign to '0' because it is a read-only property.

// Return type: readonly [string, number]
function firstCharAndSizeAsConst(input: string) {
  return [input[0], input.length] as const;
}

// firstChar type: string
// size type: number
const [firstChar, size] = firstCharAndSizeAsConst('Cathay Williams');
