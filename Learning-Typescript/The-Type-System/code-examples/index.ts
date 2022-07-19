let singer = 'Aretha';

// Inferred type: string
let bestSong = Math.random() > 0.5 ? 'My Way' : 'My Heart Will Go On';

let firstName = 'John';
firstName = 'Jane';

let lastName = 'King';
lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.

// Type Annotations
let rocker; // Type any
rocker = 'Joan Jett'; // Type string
rocker.toUpperCase(); // Ok

rocker = 19.58; // Type number
rocker.toPrecision(2); // Ok

rocker.toUpperCase();
// Error: Property 'toUpperCase' does not exist on type 'number'.

let rockstar: string; // Type string
rockstar = 'Joan Jett';
