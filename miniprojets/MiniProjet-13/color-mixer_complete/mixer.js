const inpRed = document.getElementById("red");
const spanRed = document.getElementById("vred");
const inpGreen = document.getElementById("green");
const spanGreen = document.getElementById("vgreen");
const inpBlue = document.getElementById("blue");
const spanBlue = document.getElementById("vblue");
const divBox = document.getElementById("box");
const divRgbColor = document.getElementById("rgb-color");
const divHtmlColor = document.getElementById("html-color");

function sliderMoved() {
  const r = Number(inpRed.value);
  const g = Number(inpGreen.value);
  const b = Number(inpBlue.value);
  
  const rgbColor = "rgb(" + r + "," + g + "," + b + ")";
  const htmlColor = toHtmlColor(r, g, b); 
  
  spanRed.textContent = r;
  spanGreen.textContent = g;
  spanBlue.textContent = b;

  divBox.style.backgroundColor = rgbColor;
  divRgbColor.textContent = rgbColor;
  divHtmlColor.textContent = htmlColor;
}

function toHtmlColor(r, g, b) {
  return "#" + toHexa(r) + toHexa(g) + toHexa(b);
}

function toHexa(v) {
  let ch = "";
  for (let i = 0; i < 2; i++) {
    const r = v % 16;
    if (r < 10) {
      ch = String(r) + ch;
    } else {
      ch = String.fromCharCode(55 + r) + ch;
    }
    v = Math.floor(v / 16);
  }
  return ch;
}

inpRed.addEventListener("input", sliderMoved);
inpGreen.addEventListener("input", sliderMoved);
inpBlue.addEventListener("input", sliderMoved);
sliderMoved();
