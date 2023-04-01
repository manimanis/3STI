const spanLeds = [...document.getElementsByClassName("led")];
const ledsState = Array(spanLeds.length).fill(false);

function switchLed(num, on) {
  if (on) {
    spanLeds[num].classList.add("on");
  } else {
    spanLeds[num].classList.remove("on");
  }
}

function keyReleased(ev) {
  const keys = "azertyuqsdfghjwxcvbn,";
  const num = keys.indexOf(ev.key);
  if (num != -1) {
    ledsState[num] = !ledsState[num];
    switchLed(num, ledsState[num]);
  }
}

document.addEventListener("keyup", keyReleased);