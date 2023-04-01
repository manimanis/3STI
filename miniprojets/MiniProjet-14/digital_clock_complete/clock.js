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
  const tm = new Date();
  setDigit(0, Math.floor(tm.getHours() / 10));
  setDigit(1, tm.getHours() % 10);
  setDigit(2, Math.floor(tm.getMinutes() / 10));
  setDigit(3, tm.getMinutes() % 10);
  setDigit(4, Math.floor(tm.getSeconds() / 10));
  setDigit(5, tm.getSeconds() % 10);
  dotOn = !dotOn;
  setDotsOn(dotOn);
  timer = setTimeout(displayTime, 500);
}

function displayDate() {
  const tm = new Date();
  setDigit(0, Math.floor(tm.getDay() / 10));
  setDigit(1, tm.getDay() % 10);
  setDigit(2, Math.floor((tm.getMonth() + 1) / 10));
  setDigit(3, (tm.getMonth() + 1) % 10);
  setDigit(4, Math.floor((tm.getFullYear() % 100) / 10));
  setDigit(5, tm.getFullYear() % 10);
  setDotsOn(false);
}

function onKeypress(ev) {
  if (timer != null) {
    clearTimeout(timer);
    timer = null;
  }
  if (ev.key == " ") {
    displayDate();
  }
}

displayTime();
document.addEventListener("keyup", onKeypress);
