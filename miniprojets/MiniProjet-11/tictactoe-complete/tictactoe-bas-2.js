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
function getWinner(content) {
  const win_pos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let line = 0; line < win_pos.length; line++) {
    let col = 1, wins = true;
    while (col < 3 && wins) {
      wins = content[win_pos[line][col]] == content[win_pos[line][col-1]];
      col++;
    }
    if (wins) return content[win_pos[line][0]];
  }
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

