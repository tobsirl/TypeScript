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
