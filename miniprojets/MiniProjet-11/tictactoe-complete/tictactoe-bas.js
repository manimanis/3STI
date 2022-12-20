// Displays a message inside the msg div
function displayMessage(text) {
  msg.textContent = text;
}

// Sets the letter at the clicked boxIndex
function setBoxLetter(boxIndex, letter) {
  content[boxIndex] = letter;
  boxes[boxIndex].textContent = letter;
  boxes[boxIndex].classList.add(letter.toLowerCase() + 'box');
}

// Verify which user wins :
// return 'X' if X is winner 
// return 'O' if O is winner
// return '' if none is winner
// 0 1 2
// 3 4 5
// 6 7 8
function getWinner(content) {
  let line, column, diag1 = '', diag2 = '';
  for (let i = 0; i < 3; i++) {
    diag1 += content[4 * i];
    diag2 += content[2 * (i + 1)];
    line = '';
    column = '';
    for (let j = 0; j < 3; j++) {
      line += content[i * 3 + j];
      column += content[j * 3 + i];
    }
    if (line == 'XXX' || line == 'OOO') return line[0];
    if (column == 'XXX' || column == 'OOO') return column[0];
  }
  if (diag1 == 'XXX' || diag1 == 'OOO') return diag1[0];
  if (diag2 == 'XXX' || diag2 == 'OOO') return diag2[0];
  return '';
}

// Return True if Tie game
function isTieGame(content) {
  let s = '';
  for (let i = 0; i < content.length; i++) {
    s += content[i];
  }
  return s.length == 9;
}

// Restart the game
function restartGame() {
  gameEnded = false;
  letter = 'X';
  displayMessage(letter + ' player turn.');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = '';
    boxes[i].className = 'box';
    content[i] = '';
  }
}

// box click event handler
function boxClicked(e) {
  // Determine the clicked box index
  const boxIndex = boxes.indexOf(e.target);

  // Verify if the game ended to restart
  if (gameEnded) {
    restartGame();
  }

  // Verify if the user clicked a non empty box
  if (content[boxIndex] != '') {
    return;
  }

  // Set the clicked boxIndex letter
  setBoxLetter(boxIndex, letter);

  // Test if there is a winner
  let winner = getWinner(content);
  if (winner != '') {
    gameEnded = true;
    displayMessage(winner + ' player wins!');
    return;
  }

  // Test if tie game
  if (isTieGame(content)) {
    gameEnded = true;
    displayMessage("Tie game.");
    return;
  }

  // display who's playing next
  letter = (letter == 'X') ? 'O' : 'X';
  displayMessage(letter + ' player turn.');
}

// global Variables/Constants
const msg = document.getElementById("msg");
const boxes = [...document.querySelectorAll("#game .box")];
const content = Array(9).fill('');
let letter = 'X';
let gameEnded = false;

// Attach event handlers to each box
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", boxClicked);
}

// displays who's playing first
displayMessage(letter + ' player turn.');

