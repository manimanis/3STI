const inpGuess = document.getElementById("guess");
const divMsg = document.getElementById("msg");
const divNumGuess = document.getElementById("num-guess");
const divLastGuess = document.getElementById("last-guess");

const secret = Math.floor(Math.random() * 99) + 1;
let lastGuesses = [];
let guessCount = 0;
let guessed = false;
let gameEnded = false;

function getFocus() {
  if (!gameEnded) {
    divMsg.textContent = "Guess my number between 1 - 99";
  } else {
    divMsg.textContent = "Game ended!";
  }
}

function lostFocus() {
  const num = parseInt(inpGuess.value);
  if (isNaN(num) || num < 1 || num > 99) {
    divMsg.textContent = "Please type a number between 1 and 99.";
    return;
  }
  if (gameEnded) {
    if (!guessed) {
      divMsg.textContent = "Unfortunately, the hidden number is " + secret;
    } else {
      divMsg.textContent = "Great! You already guessed. It's " + secret + "!";
    }
    return;
  }
  guessCount++;
  lastGuesses.push(num);
  if (lastGuesses.length > 3) {
    lastGuesses = lastGuesses.slice(-3);
  }
  divNumGuess.textContent = guessCount;
  divLastGuess.textContent = lastGuesses.join(", ");

  guessed = num == secret;
  gameEnded = guessCount == 7 || guessed;
  if (num > secret) {
    divMsg.textContent = "Lesser then " + num;
  } else if (num < secret) {
    divMsg.textContent = "Greater than " + num;
  } else {
    divMsg.textContent = "Great! You guessed. It's " + num + "!";
  }
}

inpGuess.addEventListener("focus", getFocus);
inpGuess.addEventListener("blur", lostFocus);
inpGuess.value = "";