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
