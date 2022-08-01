// * Function Parameters
function sing(song: string) {
  console.log(`Singing ${song}`);
}

// * Required Parameters
function singTwo(first: string, second: string) {
  console.log(`Singing ${first} and ${second}`);
}

// Logs: "Ball and Chain / undefined"
singTwo('Ball and Chain');
// Error: Expected 2 arguments, but got 1.

// Logs: "I Will Survive / Higher Love"
singTwo('I Will Survive', 'Higher Love'); // Ok

// Logs: "Go your own way / The Chain"
singTwo('Go your own way', 'The Chain', 'Dreams');
// Error: Expected 2 arguments, but got 3.

// * Optional Parameters
function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);

  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}

announceSong('Greensleeves'); // Ok
announceSong('Greensleeves', undefined); // Ok
announceSong('Greensleeves', 'Sia'); // Ok

function announceSongBy(song: string, singer: string | undefined) {
  console.log(`Song: ${song}`);

  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}

announceSongBy('Greensleeves'); // Ok
// Error: Expected 2 arguments, but got 1.

announceSongBy('Greensleeves', undefined); // Ok
announceSongBy('Greensleeves', 'Sia'); // Ok

function announceSinger(singer?: string, song: string) {}
// Error: A required parameter cannot follow an optional parameter.

// * Default Parameters
function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars`);
}

rateSong('Photograph'); // Ok
rateSong('Set Fire to the Rain', 5); // Ok
rateSong('Set Fire to the Rain', undefined); // Ok

rateSong('At Last!', '100');
// Error: Argument of type '"100"' is not assignable
// to parameter of type 'number | undefined'.

// * Rest Parameters
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song} by ${singer}`);
  }
}

singAllTheSongs('Alicia Keys'); // Ok
singAllTheSongs('Alicia Keys', 'Bad Romance', 'Just Dance', 'Poker Face'); // Ok

singAllTheSongs('Ella Fitzgerald', 2000);
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.

// * Return Types
// Type: (songs: string[]) => number
function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}

// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}

// * Explicit Return Types
function singSongsRecursive(songs: string[], count = 0): number {
  return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

const singSongsRecursiveArrow = (songs: string[], count = 0): number =>
  songs.length ? singSongsRecursiveArrow(songs.slice(1), count + 1) : count;

function getSongRecordingDate(song: string): Date | undefined {
  switch (song) {
    case 'Strange Fruit':
      return new Date('April 20, 1939'); // Ok

    case 'Greensleeves':
      return 'unknown';
    // Error: Type 'string' is not assignable to type 'Date'.

    default:
      return undefined; // Ok
  }
}

// * Function Types
let nothingInGivesString: () => string;
let inputAndOutput: (input: string, count?: number) => number;

const songs = ['Juice', 'Shake it Off', 'You Belong to Me'];

function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}

function getSongAt(index: number) {
  return `${songs[index]}`;
}

runOnSongs(getSongAt);

function logSong(song: string) {
  return `${song}`;
}

runOnSongs(logSong);
// Error: Argument of type '(song: string) => string' is not
// assignable to parameter of type '(index: number) => string'.
// Types of parameters 'song' and 'index' are incompatible.
// Type 'number' is not assignable to type 'string'.

// * Function Type Parentheses
// Type is a function that returns a union: string | undefined
let returnsStringOrUndefined: () => string | undefined;

// Type is either undefined or a function that returns a string
let maybeReturnsString: (() => string) | undefined;

// * Parameter Type Inferences
let singer: (song: string) => string;

singer = function (song) {
  return `${song}`;
};

// * Function Type Aliases
type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;

stringToNumber = (input) => input.length; // Ok
stringToNumber = (input) => input.toUpperCase();
// Error: Type 'string' is not assignable to type 'number'.

type NumberToString = (input: number) => string;

function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(42)}`);
}

usesNumberToString((input) => `${input}! Hooray!`); // Ok
usesNumberToString((input) => input * 2);
// Error: Type 'number' is not assignable to type 'string'.

// * More Return Types
// Void Returns
function logSongOne(song: string | undefined): void {
  if (!song) {
    return; // Ok
  }

  console.log(`${song}`);

  return true;
  // Error: Type 'boolean' is not assignable to type 'void'.
}

let songLogger: (song: string) => void;
songLogger = (song) => {
  console.log(`${song}`);
};
songLogger('Heart of Glass'); // Ok

function returnVoid() {
  return;
}

let lazyValue: string | undefined;

lazyValue = returnVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'.

const records: string[] = [];
function saveRecords(newRecords: string[]) {
  newRecords.forEach((record) => records.push(record));
}

saveRecords(['21', 'Come on Over', 'The Bodyguard']);

// * Never Returns
function fail(message: string): never {
  throw new Error(`Invariant failure: ${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== 'string') {
    fail(`param should be a string, not ${typeof param}`);
  }

  //  Here, param is know to be type string
  param.toUpperCase(); // Ok
}

// * FUNCTION OVERLOADS
function createDate(timestramp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(
  monthOrTimestamp: number,
  day?: number,
  year?: number
): Date {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}


