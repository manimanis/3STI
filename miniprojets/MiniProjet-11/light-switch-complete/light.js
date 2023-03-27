const lightStatus = document.getElementById("light-status");
const switchStatus = document.getElementById("switch-status");
const lightSwitch = document.getElementById("light-switch");

function changeLightStatus() {
  if (lightSwitch.checked) {
    lightStatus.textContent = 'on 💡';
    switchStatus.textContent = 'off';
    document.body.className = 'lighton';
  } else {
    lightStatus.textContent = 'off';
    switchStatus.textContent = 'on';
    document.body.className = '';
  }
}

lightSwitch.addEventListener("click", changeLightStatus);
changeLightStatus();
