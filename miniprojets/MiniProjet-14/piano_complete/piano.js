const divTouches = [...document.getElementsByClassName("touche")];
const keys = "azertyuiopqsdfghjwxcvbn,";

function playSound(numTouche) {
  new Audio("piano-notes/key" + (numTouche + 1) + ".mp3").play();
}

function keyPressed(ev) {
  const keyPos = keys.indexOf(ev.key);
  if (keyPos != -1) {
    playSound(keyPos);
  }
}

function toucheClicked(ev) {
  const numTouche = divTouches.indexOf(ev.target);
  if (numTouche != -1) {
    playSound(numTouche);
  }
}

document.addEventListener("keyup", keyPressed);
divTouches.forEach(touche => touche.addEventListener("click", toucheClicked))