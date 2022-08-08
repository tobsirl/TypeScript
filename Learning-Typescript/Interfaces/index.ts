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
