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

// * Readonly Properties *
interface Page {
  readonly text: string;
}

function read(page: Page) {
  // Ok: reading the text property doesn't attempt to modify it.
  console.log(page.text);

  page.text += '!';
  // Error: Cannot assign to 'text' because it is a read-only property.
}

const pageIsh = {
  text: 'Hello World',
};

// Ok: messengerIsh is an inferred object type with text, not a Page.
page.text += '!';

read(messengerIsh);

// * Functions and Methods *
interface HasBothFunctionTypes {
  property: () => string;
  method(): string;
}

const hasBoth: HasBothFunctionTypes = {
  property: () => '',
  method() {
    return '';
  },
};

hasBoth.property(); // Ok
hasBoth.method(); // Ok

interface OptionalReadonlyFunctions {
  optionalProperty?: () => string;
  optionalMethod?(): string;
}

// * Call Signature *
type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

// Type: (input: string) => number
const typedFunctionAlias: FunctionAlias = (input) => input.length; // Ok

// Type: (input: string) => number
const typedCallSignature: CallSignature = (input) => input.length; // Ok

interface FunctionWithCount {
  count: number;
  (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls; // Ok

function doesNotHaveCount() {
  console.log('No idea!');
}

hasCallCount = doesNotHaveCount;
// Error: Property 'count' is missing in type
// '() => void' but required in type 'FunctionWithCalls'.
