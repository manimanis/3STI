const inpNbre = document.getElementById("nbre");
const btnCalc = document.getElementById("calc");
const divRes = document.getElementById("res");

function estNarcissique(n) {
  const ch = n + "";
  let s = 0;
  for (let i = 0; i < ch.length; i++) {
    s += Math.pow(Number(ch[i]), ch.length);
  }
  return s == n;
}

function calcClicked() {
  const nbre = Number(inpNbre.value);
  if (estNarcissique(nbre)) {
    divRes.textContent = nbre + " est narcissique";
  } else {
    divRes.textContent = nbre + " n'est pas narcissique";
  }
}

btnCalc.addEventListener('click', calcClicked);