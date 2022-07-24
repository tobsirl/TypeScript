// Objects

// Object Types
const poet = {
  born: 1935,
  name: 'Mary Oliver',
};

poet['born']; // Type: number
poet.name; // Type: string

poet.end; // Type: undefined
// Error: Property 'end' does not exist on type '{ born: number; name: string; }'

// Declaring Object Types
let poetLater: {
  born: number;
  name: string;
};

poetLater = {
  born: 1935,
  name: 'Mary Oliver',
};

poetLater = 'Sappho';
// Error: Type '"Sappho"' is not assignable to type '{ born: number; name: string; }'

type Poet = {
  born: number;
  name: string;
};

let poetLater2: Poet; // Ok
poetLater = {
  born: 1935,
  name: 'Sara Teasdale',
};

poetLater2 = 'Emily Dickinson';
// Error: Type '"Emily Dickinson"' is not assignable to type 'Poet'

// Structural Typing
type withFirstName = {
  firstName: string;
};

type withLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: 'Lucille',
  lastName: 'Clifton',
};

// Ok: 'hasBoth' contains a 'firstName' of type 'string'
let withFirstName: withFirstName = hasBoth;

// Ok 'hasBoth' contains a 'lastName' of type 'string'
let withLastName: withLastName = hasBoth;

// Usage Checking
type FirstAndLastName = {
  first: string;
  last: string;
};

const hasBoth1: FirstAndLastName = {
  first: 'Lucille',
  last: 'Clifton',
};

const hasOnlyOne: FirstAndLastName = {
  first: 'Lucille',
};
// Property 'last' is missing in type '{ first: string; }' but required in type 'FirstAndLastName'

type TimeRange = {
  start: Date;
};

const hasStartString: TimeRange = {
  start: '2020-01-01',
  // Error: Type 'string' is not assignable to type 'Date'
};

// Excess Property Checking
type ChessPlayer = {
  born: number;
  name: 'Karpov';
};

// Ok: all fields match what's expected in ChessPlayer
const chessMatch: ChessPlayer = {
  born: 1935,
  name: 'Matt',
};

const extraProperty: ChessPlayer = {
  actions: 'opening',
  born: 1935,
  name: 'Frank',
};

/**
 * Error: Type '{ actions: string; born: number; name: string; }'
 * is not assignable to type 'ChessPlayer'
 * Object literal may only specify known properties,
 * and 'actions' does not exist in type 'ChessPlayer'
 */

const existingObject = {
  activity: 'playing chess',
  born: 1935,
  name: 'Paul',
};

const extraPropertyButOk: ChessPlayer = existingObject;
