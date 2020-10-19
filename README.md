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