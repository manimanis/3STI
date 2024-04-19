let joueur = "X";
let gameboard = ["", "", "", "", "", "", "", "", ""];
let gameEnded = false;
const cells = [...document.querySelectorAll("#game > button")];

function btnClicked(n) {
  if (!gameEnded && gameboard[n] == "") {
    cells[n].textContent = joueur;
    gameboard[n] = joueur;
    const winner = getWinner();
    if (winner != "") {
      document.getElementById("msg").textContent = (winner != "-") ? (winner + " Wins") : "Tie Game";
      gameEnded = true;
    }
    joueur = (joueur == "X") ? "O" : "X";
  }
}

function getWinner() {
  let diag1 = "", diag2 = "", empty = 0;
  for (let i = 0; i < 3; i++) {
    diag1 += gameboard[i * 4];
    diag2 += gameboard[(i + 1) * 2];
    let line = "", col = "";
    for (let j = 0; j < 3; j++) {
      empty += (gameboard[3 * i + j] == "");
      line += gameboard[3 * i + j];
      col += gameboard[3 * j + i];
    }
    if (line == "XXX" || col == "XXX") {
      return "X";
    } else if (line == "OOO" || col == "OOO") {
      return "O";
    }
  }
  if (diag1 == "XXX" || diag2 == "XXX") {
    return "X";
  } else if (diag1 == "OOO" || diag2 == "OOO") {
    return "O";
  } else if (empty == 0) {
    return "-";
  }
  return "";
}