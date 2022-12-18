function generateBoxes(game, nSize) {
  let s = "";
  for (let i = 0; i < nSize * nSize; i++) {
    s += `<div class="box cols${nSize} emptycolor"></div>`;
  }
  game.innerHTML = s;
}

function concatSpaced(content, nSize, start, space) {
  let s = "";
  for (let i = 0; i < nSize; i++) {
    s += content[start + space * i];
  }
  return s;
}

function getRow(content, nSize, num) {
  return concatSpaced(content, nSize, num * nSize, 1);
}

function getCol(content, nSize, num) {
  return concatSpaced(content, nSize, num, nSize);
}

function getDiag1(content, nSize, num) {
  return concatSpaced(content, nSize - Math.abs(num), (num < 0) ? (nSize * -num) : num, nSize + 1);
}

function getDiag2(content, nSize, num) {
  return concatSpaced(content, nSize - Math.abs(num), (num < 0) ? (nSize * -num + 4) : (nSize - num - 1), nSize - 1);
}

function getWinner(val, nWinSize) {
  let i = 0;
  while (i < val.length) {
    let j = i;
    while (j < val.length && val[j] == val[i]) {
      j++;
    }
    if (j - i >= nWinSize) {
      return val[i];
    } else {
      i = j;
    }
  }
  return "";
}

function verifWinner(content, nWinSize, nSize) {
  for (let i = -nSize + 1; i < nSize; i++) {
    let winner = getWinner(getDiag1(content, nSize, i), nWinSize);
    if (winner != "") return winner;
    winner = getWinner(getDiag2(content, nSize, i), nWinSize);
    if (winner != "") return winner;
    if (i < 0) continue;
    winner = getWinner(getRow(content, nSize, i), nWinSize);
    if (winner != "") return winner;
    winner = getWinner(getCol(content, nSize, i), nWinSize);
    if (winner != "") return winner;
  }
  return "";
}

function isTie(content, nSize) {
  let s = "";
  for (let i = 0; i < nSize; i++) {
    s += getRow(content, nSize, i);
  }
  return s.length == nSize * nSize;
}

function resetGame(game, nSize) {
  generateBoxes(game, nSize);
  boxes = [...game.querySelectorAll(".box")];
  content = Array(nSize * nSize).fill("");
  letter = "X";
  gameEnded = false;
  for (let i = 0; i < nSize * nSize; i++) {
    boxes[i].addEventListener("click", boxClicked);
  }
}

function boxClicked(e) {
  const boxIndex = boxes.indexOf(e.target);
  if (gameEnded) {
    resetGame(game, nSize);
  }

  if (content[boxIndex] != "") {
    return;
  }

  content[boxIndex] = letter;
  boxes[boxIndex].innerHTML = letter;
  boxes[boxIndex].classList.remove("emptycolor");
  boxes[boxIndex].classList.add(letter + "color");

  const winner = verifWinner(content, nWinSize, nSize);
  if (winner != "") {
    gameEnded = true;
    setTimeout(() => { alert(winner + " wins."); }, 10);
  } else if (isTie(content, nSize)) {
    gameEnded = true;
    setTimeout(() => { alert("Tie game."); }, 10);
  }

  letter = (letter == "O") ? "X" : "O";
}

let nSize = 6;
let nWinSize = 3;
const game = document.getElementById("game");
resetGame(game, nSize);


