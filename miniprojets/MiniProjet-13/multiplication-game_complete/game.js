const spanOp1 = document.getElementById("operand1");
const spanOp2 = document.getElementById("operand2");
const spanProd = document.getElementById("product");
const divProps = [...document.querySelectorAll(".proposition")];
const divRes = document.getElementById("resultat");
const divScore = document.getElementById("score");

function randint(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function selectNumbers(choix) {
  const t = [];
  let number;
  for (let i = 0; i < 4; i++) {
    do {
      number = randint(1, 9) * randint(1, 9);
    } while (number == choix || t.indexOf(number) != -1);
    t.push(number);
  }
  return t;
}

function generate() {
  a = randint(1, 9);
  b = randint(1, 9);
  const t = selectNumbers(a * b);
  spanOp1.textContent = a;
  spanOp2.textContent = b;
  spanProd.textContent = "?";
  for (let i = 0; i < divProps.length; i++) {
    divProps[i].textContent = t[i];
    divProps[i].className = 'proposition';
  }
  correctChoice = randint(0, 3);
  divProps[correctChoice].textContent = a * b;
  divRes.textContent = "";
  divRes.className = "";
  count++;
  canBeClicked = true;
}

function divPropsClicked(e) {
  if (!canBeClicked) {
    return false;
  }

  const propClicked = e.target;
  const val = Number(propClicked.textContent);
  spanProd.textContent = a*b;
  let isCorrect = val == a * b;
  if (isCorrect) {
    divRes.textContent = "Très bien!";
    propClicked.classList.add("success");
    divRes.classList.add("success");
    score++;
  } else {
    divRes.textContent = "C'est faux!";
    propClicked.classList.add("wrong");
    divRes.classList.add("wrong");
    divProps[correctChoice].classList.add("success");
  }
  divScore.textContent = "Score : " + score + " / " + count;
  canBeClicked = false;
  setTimeout(generate, isCorrect ? 500 : 2000);
}

let a,
  b,
  count = 0,
  score = 0,
  canBeClicked = true,
  correctChoice;
generate();
divProps.forEach(div => div.addEventListener("click", divPropsClicked));