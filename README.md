# TypeScript: The Complete Developer's Guide

Type - Easy way to refer to the different porperties + functions that a value has

### Types in JavaScript

| Primative Types | Object Types |
|-----------------|--------------|
| number          | functions    |
| string          | arrays       |
| boolean         | classes      |
| void            | objects      |
| undefined       |              |
| symbol          |              |
| null            |              |



Why do we care about types? 
Types are used by the TypeScript Compiler to analyze our code for errors
Types allow other engineers to understand what values are flowing around our codebase


| Types            | Description                                                                |
|------------------|----------------------------------------------------------------------------|
| Type annotations | Code we add to tell TypeScript what type of value a variable will refer to |
| Type inference   | TypeScript tries to figure out what type of value a variable refers to     |

### Anotations with Variables
```ts
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
```

```ts
// When to use annotations
// 1) Functions that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

// 2) When we declare a variable on one line and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
```

### Anotations with functions