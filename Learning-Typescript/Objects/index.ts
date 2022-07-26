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

// Nested Object Types
type Poem = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
};

// Ok
const poemMatch: Poem = {
  author: {
    firstName: 'Emily',
    lastName: 'Dickinson',
  },
  name: 'The Old Rose',
};

const poemMismatch: Poem = {
  author: {
    name: 'Sylvia Plath', 
  }
  // Error: Type '{ name: string; }' is not assignable 
  // to type '{ firstName: string; lastName: string; }'
  // Object literal may only specify known properties, and 'name' 
  // does not exist in type '{ firstName: string; lastName: string; }'
  name: 'Tulips'
}

type Author = {
  firstName: string;
  lastName: string;
}

type Poem1 = {
  author: Author;
  name: string;
}

const poemMismatch1: Poem1 = {
  author: {
    name: 'Sylvia Plath',
  }
  // Error: Type '{ name: string; }' is not assignable to type 'Author'
  // Object literal may only specify known properties, and 'name' 
  // does not exist in type 'Author'
  name: 'Tulips',
}

// Optional Properties
type Book = {
  author?: string;
  pages: number;
}

// Ok
const ok: Book = {
  author: 'J.R.R. Tolkien',
  pages: 1254,  
}

const missing: Book = {
  author: 'J.R.R. Tolkien',
}

// Error: Property 'pages' is missing in type '{ author: string; }' 
// but required in type 'Book'

type Writers = {
  author: string | undefined;
  editor?: string;
}

// Ok: author is provided as undefined
const hasRequired: Writers = {
  author: undefined
}

const missingRequired: Writers = {}
// Error: Property 'author' is missing in type '{}' but required in type 'Writers'

// *Unions of Object Types
// Inferred Object Type Unions
const poemName = Math.random() > 0.5 
? {name: "The Double Image", pages: 7} 
: {name: "Her Kind", rhymes: true};
/**
 * Type:
 * {
 *  name: string;
 *  pages: number;
 *  rhymes?: undefined;
 * }
 * |
 * {
 *  name: string;
 *  pages?: undefined;
 *  rhymes: boolean;
 * }
 */

poemName.name; // Type: string
poemName.pages; // Type: number | undefined
poemName.rhymes // Type: boolean | undefined

// *Explicit Object Type Unions
// type PoemWithPages = {
//   name: string;
//   pages: number;
// }

// type PoemWithRhymes = {
//   name: string;
//   rhymes: boolean;
// }

// type PoemPageRhymes = PoemWithPages | PoemWithRhymes;

// const poemExplicit: PoemPageRhymes = Math.random() > 0.5
//   ? { name: "The Double Image", pages: 7 }
//   : { name: "Her Kind", rhymes: true };

// poemExplicit.name // Ok

// poemExplicit.pages;
// Error: Property 'pages' does not exist on type PoemWithPages
// Property 'pages' does not exist on type PoemWithRhymes

// poemExplicit.rhymes;
// Error: Property 'rhymes' does not exist on type PoemWithPages
// Property 'rhymes' does not exist on type PoemWithRhymes

// * Discriminated Unions
