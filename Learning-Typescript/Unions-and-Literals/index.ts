// Union Types
let mathematician = Math.random() > 0.5 ? undefined : 'Mark Goldberg';

let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = 'Susanne Langer'; // Ok
}

/**
 * Note
 * The order of a union type does not matter. You can write boolean | number or number |
 * boolean and TypeScript will treat both the exact same.
 */

// Union Properties
let physicist = Math.random() > 0.5 ? 'Marie Curie' : 84;

physicist.toString();
physicist.toUpperCase();
/**
 * Error: Property 'toUpperCase' does not exist on type 'string | number'.
 * Property 'toUpperCase does not exist on type 'number'.
 */
