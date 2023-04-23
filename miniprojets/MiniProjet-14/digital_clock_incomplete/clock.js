const divDigs = [...document.getElementsByClassName("digit")];
const divDots = [...document.getElementsByClassName("dot")];
let dotOn = false;
let timer = null;

function setDigit(numDig, value) {
  if (value >= 0 && value <= 9) {
    divDigs[numDig].className = "digit digit-" + value;
  } else {
    divDigs[numDig].className = "digit";
  }
}

function setDotsOn(on) {
  for (let i = 0; i < divDots.length; i++) {
    divDots[i].className = "dot" + (on ? " on" : "");
  }
}


function displayTime() {
  /* TODO */
}

function displayDate() {
  /* TODO */
}

function onKeyUp(ev) {
  displayTime();
}

function onKeyDown(ev) {
  if (timer != null) {
    clearTimeout(timer);
    timer = null;
    displayDate();
  }
}

displayTime();
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp)
