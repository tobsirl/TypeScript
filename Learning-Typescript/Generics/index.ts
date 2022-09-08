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
