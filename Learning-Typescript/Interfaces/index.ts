// * INTERFACES *
// * Type Aliases Versus Interfaces *
type Poet = {
  born: number;
  name: string;
};

interface Poet {
  born: number;
  name: string;
}

let valueLater: Poet;

// Ok
valueLater = {
  born: 1935,
  name: 'Sara Teasdale',
};

valueLater = 'Emily Dickinson';
// Error: Type 'string' is not assignable to type 'Poet'.

valueLater = {
  born: true,
  // Error: Type 'boolean' is not assignable to type 'number'.
  name: 'Sappho',
};

// * Types of Properties *
// * Optional Properties *
interface Book {
  author: string;
  pages: number;
}

// Ok
const ok: Book = {
  author: 'Rita Dove',
  pages: 200,
};

const missing: Book = {
  pages: 200,
};
// Error: Property 'author' is missing in type '{ pages: number; }'
// but required in type 'Book'.
