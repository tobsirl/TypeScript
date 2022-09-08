/**
 * GENERICS
 */

// Generic function
function identity<T>(input: T): T {
  return input;
}

const numeric = identity('me'); // Type: "me"
const stringy = identity(123); // Type: 123
