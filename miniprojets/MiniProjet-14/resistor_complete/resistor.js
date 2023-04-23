const divBands = [...document.querySelectorAll(".resistor > .band")];
const divBandsVals = [...document.querySelectorAll(".resistor .bandvalue")];
const selColors = [...document.getElementsByClassName("bandcolor")];
const tolerance = [10, 5, 0, 1, 2, 0, 0, 0.5, 0.25, 0.1, 0.05, 0];
const divResValue = document.getElementById("resvalue");
const units = ["", "K", "M", "G"];

function selectColor(numBand, numColor) {
  if (numColor == "") {
    divBands[numBand].className = "band";
    divBandsVals[numBand].textContent = "-";
  } else {
    divBands[numBand].className = "band color-" + numColor;
    if (numBand < 2) {
      divBandsVals[numBand].textContent = numColor;
    } else if (numBand == 2) {
      divBandsVals[numBand].innerHTML = "10<sup>" + numColor + "</sup>";
    } else {
      divBandsVals[numBand].textContent = "± " + tolerance[+numColor + 2];
    }
  }
  const resValue = resistorValue();
  if (resValue != -1) {
    divResValue.textContent = convertUnit(resValue) + "Ω";
  } else {
    divResValue.textContent = "";
  }
}

function resistorValue() {
  for (let i = 0; i < 3; i++) {
    if (selColors[i].value == "") {
      return -1;
    }
  }
  return Number(selColors[0].value + selColors[1].value) * (10 ** Number(selColors[2].value));
}

function convertUnit(val) {
  for (let i = units.length - 1; i >= 0; i--) {
    const pow = 10 ** (3 * i);
    if (val >= pow) {
      return (val / pow).toFixed(1) + units[i];
    }
  }
  return val;
}

function colorChanged(ev) {
  const numBand = selColors.indexOf(ev.target);
  selectColor(numBand, selColors[numBand].value);
}

for (let i = 0; i < selColors.length; i++) {
  selColors[i].addEventListener("input", colorChanged);
  selectColor(i, selColors[i].value);
}
