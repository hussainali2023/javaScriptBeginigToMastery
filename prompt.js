console.log("Hellow World");
let windowNumber = 19;
let userGuess = +prompt("Guess the Number");
if (userGuess === 19) {
  console.log("User choose the right answer");
} else if (userGuess > 19) {
  console.log("too high");
} else {
  console.log("too low");
}
