const inpVol1 = document.getElementById("vol1");
const spanVol1 = document.getElementById("svol1");
const inpVol2 = document.getElementById("vol2");
const spanVol2 = document.getElementById("svol2");
const inpVol3 = document.getElementById("vol3");
const spanVol3 = document.getElementById("svol3");

function refreshPositions() {
  spanVol1.textContent = inpVol1.value;
  spanVol2.textContent = inpVol2.value;
  spanVol3.textContent = inpVol3.value;
}

function sliderMoved() {
  inpVol2.value = inpVol1.value;
  refreshPositions();
}

function sliderChangedPosition() {
  inpVol3.value = inpVol1.value;
  refreshPositions();
}

refreshPositions();

inpVol1.addEventListener("input", sliderMoved);
inpVol1.addEventListener("change", sliderChangedPosition);
