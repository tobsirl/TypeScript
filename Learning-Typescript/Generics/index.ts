/**
 * GENERICS
 */

// Generic function
function identity<T>(input: T): T {
  return input;
}

const numeric = identity('me'); // Type: "me"
const stringy = identity(123); // Type: 123

//  Explicit Generic Call Types
function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    console.log('Input: ', input);
    callback(input);
  };
}

// Type: (input: string) => void
logWrapper((input: string) => {
  console.log(input.length);
});

// Type: (input: unknown) => void
logWrapper((input) => {
  console.log(input.length);
  // Error: Property 'length' does not exist on type 'unknown'.
});

// Type: (input: string) => void
logWrapper<string>((input) => {
  console.log(input.length);
});

logWrapper<string>((input: boolean) => {
  // Argument of type '(input: boolean) => void' is not
  // assignable to parameter of type '(input: string) => void'.
  // Types of parameters 'input' and 'input' are incompatible.
  // Type 'string' is not assignable to type 'boolean'.
});

// Type: (input: string) => void
logWrapper<string>((input: string) => {});
