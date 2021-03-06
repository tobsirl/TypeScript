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
| Types            | Description                                                                                                          |
|------------------|----------------------------------------------------------------------------------------------------------------------|
| Type annotations | Code we add to tell TypeScript what type of arguments a function will receive and what type of values it will return |
| Type inference   | TypeScript tries to figure out what type of value a function will return                                             |

```ts
// basic function
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// void when nothing is returned from the function
const logger = (message: string): void => {
  console.log(message);
};

// never when the function will never return a value 
const throwError = (message: string): never => {
  throw new Error(message);
};

```

### Anotations with Objects
```ts
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```

### Anotations for Arrays
| Types       | Description                                                |
|-------------|------------------------------------------------------------|
| Type Arrays | Arrays where each element is some consistent type of value |

Why use TypeScript with arrays
- TypeScript can do inference when extracting values from an array
- TypeScrpt can prevent us from adding incompatible values to the array
- We can get help with map, forEach, reduce functions
- Flexible - arrays can still contain multiple different types

```ts
const carMarkers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

// Prevent incompatible values
carMarkers.push(100);

// Help with 'map'
carMarkers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(23); // wrong type

```

### Tuples in TypeScript
Tuple - Array like structure where each element represents some property of a record

```ts
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
```

### Interfaces
Creates a new type, describing the property names and value types of an object
```ts
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
```

### Classes
Blueprint to create an object with some fields (values) and methods (functions) to represent a thing

| Modifiers | Description                                                                               |
|-----------|-------------------------------------------------------------------------------------------|
| public    | Method can be called anywhere, any time                                                   |
| private   | Method can only be called by other methods in this class                                  |
| protected | Method can be called by other methods in this class, or by other methods in child classes |

### Abstract Classes
* Can't be used to create an object directly
* Only used as a parent class
* Can contain real implementation for some methods
* Child classes must implement some other method

```ts
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
```

### Inheritance vs Composition
#### Inheritance **is a**
Classes and objects created through inheritance are *tightly coupled* because changing the parent or superclass in an inheritance relationship risks breaking your code.

#### Composition **has a**
Classes and objects created through composition are *loosely coupled*, meaning that you can more easily change the component parts without breaking your code.
