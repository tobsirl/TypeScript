// * Function Parameters
function sing(song: string) {
  console.log(`Singing ${song}`);
}

// * Required Parameters
function singTwo(first: string, second: string) {
  console.log(`Singing ${first} and ${second}`);
}

// Logs: "Ball and Chain / undefined"
singTwo("Ball and Chain");
// Error: Expected 2 arguments, but got 1.