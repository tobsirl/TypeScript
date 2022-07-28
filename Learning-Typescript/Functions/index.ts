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
