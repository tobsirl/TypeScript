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
