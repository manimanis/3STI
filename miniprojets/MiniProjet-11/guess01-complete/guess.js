function btnClicked(e) {
  const btnId = e.target.id;

  if (guessed) {
    return;
  }

  if (btnId == 'lesser') {
    f = num - 1;
  } else if (btnId == 'greater') {
    d = num + 1;
  } else {
    guessed = true;
    msg.textContent = "Your number is " + num + ". Guessed it in " + ntries + " tries.";
    return;
  }

  if (d > f) {
    guessed = true;
    msg.textContent = "You have cheated about your number!";
    return;
  }

  ntries++;
  num = Math.floor((d + f) / 2);
  updateData();
}

function updateData() {
  num_guess.textContent = ntries;
  comp_number.textContent = num;
  msg.textContent = (7 - ntries) + ' tries left!';
}

const comp_number = document.getElementById('comp_number');
const num_guess = document.getElementById('num_guess');
const msg = document.getElementById('msg');
const btn_lesser = document.getElementById('lesser');
const btn_equal = document.getElementById('equal');
const btn_greater = document.getElementById('greater');

btn_lesser.addEventListener("click", btnClicked);
btn_greater.addEventListener("click", btnClicked);
btn_equal.addEventListener("click", btnClicked);

let d = 1;
let f = 99;
let num = Math.floor(Math.random() * 21 + 40);
let ntries = 1;
let guessed = false;

updateData();
