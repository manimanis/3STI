const divLampe = document.getElementById("lampe");
const btnOn = document.getElementById("on");
const btnOff = document.getElementById("off");
const btnToggle = document.getElementById("toggle");
const rdSwitch = document.getElementsByClassName("switch");
const chkOnOff = document.getElementById("chk-on-off");
const spanOnOff = document.getElementById("span-on-off");

function turnOn() {
  divLampe.classList.add("on");
  btnOn.classList.add("on");
  btnOff.classList.remove("off");
  btnToggle.classList.add("on");
  rdSwitch[0].checked = true;
  rdSwitch[1].checked = false;
  chkOnOff.checked = true;
  spanOnOff.textContent = "Turn off";
}

function turnOff() {
  divLampe.classList.remove("on");
  btnOn.classList.remove("on");
  btnOff.classList.add("off");
  btnToggle.classList.remove("on");
  rdSwitch[0].checked = false;
  rdSwitch[1].checked = true;
  chkOnOff.checked = false;
  spanOnOff.textContent = "Turn on";
}

function toggleLamp() {
  if (divLampe.classList.contains("on")) {
    turnOff();
  } else {
    turnOn();
  }
}

function lampSwitch(ev) {
  const value = ev.target.value;
  if (value == "on") {
    turnOn();
  } else {
    turnOff();
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

function chkOnOffChecked() {
  if (chkOnOff.checked) {
    turnOn();
  } else {
    turnOff();
  }
}

document.addEventListener("keyup", keyClicked);
btnOn.addEventListener("click", turnOn);
btnOff.addEventListener("click", turnOff);
btnToggle.addEventListener("click", toggleLamp);
for (let i = 0; i < rdSwitch.length; i++) {
  rdSwitch[i].addEventListener("click", lampSwitch);
}
chkOnOff.addEventListener("change", chkOnOffChecked)

turnOff();