const game = document.getElementById("game");
const boxes = [...game.querySelectorAll(".box")];
const content = Array(9).fill("");

let letter = "X";
let gameEnded = false;

function concatSpaced(content, start, space) {
  let s = "";
  for (let i = 0; i < 3; i++) {
    s += content[start + space * i];
  }
  return s;
}

function getRow(content, num) {
  return concatSpaced(content, num * 3, 1);
}

function getCol(content, num) {
  return concatSpaced(content, num, 3);
}

function getDiag1(content) {
  return concatSpaced(content, 0, 4);
}

function getDiag2(content) {
  return concatSpaced(content, 2, 2);
}

function getWinner(val) {
  if (val == "XXX") {
    return "X";
  } else if (val == "OOO") {
    return "O";
  }
  return "";
}

function verifWinner(content) {
  let winner = getWinner(getDiag1(content));
  if (winner != "") return winner;
  winner = getWinner(getDiag2(content));
  if (winner != "") return winner;
  for (let i = 0; i < 3; i++) {
    winner = getWinner(getRow(content, i));
    if (winner != "") return winner;
    winner = getWinner(getCol(content, i));
    if (winner != "") return winner;
  }
  return "";
}

function isTie(content) {
  let s = "";
  for (let i = 0; i < 3; i++) {
    s += getRow(content, i);
  }
  return s.length == 9;
}

function resetGame() {
  gameEnded = false;
  letter = "X";
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].className = "box emptycolor";
    content[i] = "";
  }
}

function boxClicked(e) {
  const boxIndex = boxes.indexOf(e.target);
  if (gameEnded) {
    resetGame();
  }

  if (content[boxIndex] != "") {
    return;
  }

  content[boxIndex] = letter;
  boxes[boxIndex].innerHTML = letter;
  boxes[boxIndex].className = "box " + letter + "color";

  const winner = verifWinner(content);
  if (winner != "") {
    gameEnded = true;
    setTimeout(() => { alert(winner + " wins."); }, 10);
  } else if (isTie(content)) {
    gameEnded = true;
    setTimeout(() => { alert("Tie game."); }, 10);
  }

  letter = (letter == "O") ? "X" : "O";
}

for (let i = 0; i < 9; i++) {
  boxes[i].addEventListener("click", boxClicked);
}
