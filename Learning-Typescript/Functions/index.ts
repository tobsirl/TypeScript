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
