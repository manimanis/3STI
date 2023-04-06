const divLampe = document.getElementById("lampe");
const btnToggle = document.getElementById("toggle");

function turnOn() {
  divLampe.classList.add("on");
  btnToggle.classList.add("on");
}

function turnOff() {
  divLampe.classList.remove("on");
  btnToggle.classList.remove("on");
}

function toggleLamp() {
  if (divLampe.classList.contains("on")) {
    turnOff();
  } else {
    turnOn();
  }
}

function keyClicked(ev) {
  if (ev.key == "a") {
    turnOn();
  } else if (ev.key == "z") {
    turnOff();
  } else if (ev.key == "e") {
    toggleLamp();
  }
}

document.addEventListener("keyup", keyClicked);
btnToggle.addEventListener("click", toggleLamp);

turnOff();