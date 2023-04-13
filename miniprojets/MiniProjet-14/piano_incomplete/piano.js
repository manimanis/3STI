const divTouches = [...document.getElementsByClassName("touche")];
const keys = "azertyuiopqsdfghjwxcvbn,";

function playSound(numTouche) {
  new Audio("piano-notes/key" + (numTouche + 1) + ".mp3").play();
}

/* TODO */