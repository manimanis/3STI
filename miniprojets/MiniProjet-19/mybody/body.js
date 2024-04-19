const parts = ["knee", "arm", "mouth", "ear", "neck", "foot", "leg", "shoulder", "eye", "hair", "head", "hand", "nose"];
const nums = [12, 10, 8, 7, 9, 13, 6, 5, 3, 2, 1, 11, 4];
const numsButtons = [...document.querySelectorAll(".btns .num")];
const partsButtons = [...document.querySelectorAll(".btns .part")];
const answers = [...document.querySelectorAll(".btns .answer")];

function displayNames() {
  for (let i = 0; i < parts.length; i++) {
    partsButtons[i].textContent = parts[i];
  }
}
displayNames();

let selectedNum = -1;
let correctChoices = 0;
let totalTries = 0;

function numClicked(n) {
  answers[n - 1].textContent = n;
  selectedNum = n - 1;
}

function partClicked(n) {
  if (selectedNum != -1) {
    totalTries++;
    const isCorrect = selectedNum == nums[n - 1] - 1;
    correctChoices += isCorrect;
    answers[selectedNum].textContent += " - " + parts[n - 1] + " " + (isCorrect ? "✔" : "✖");
    if (isCorrect) {
      numsButtons[selectedNum].setAttribute("disabled", true);
      partsButtons[n - 1].setAttribute("disabled", true);
    }
    selectedNum = -1;
    document.getElementById("res").textContent = "Correct answers: " + correctChoices + "/" + totalTries;
  }
}