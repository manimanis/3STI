const inpHor = document.getElementById("horizontal");
const inpVer = document.getElementById("vertical");
const divBall = document.getElementById("ball");

function sliderMoved() {
  const top = Number(inpVer.value);
  const left = Number(inpHor.value);
  divBall.style.top = (inpVer.max - top) + "px";
  divBall.style.left = left + "px";
}

inpHor.addEventListener("input", sliderMoved);
inpVer.addEventListener("input", sliderMoved);

sliderMoved();