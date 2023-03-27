const inpN = document.getElementById("n");
const btnVerif = document.getElementById("verif");
const inpRes = document.getElementById("res");

function btnVerifClicked(e) {
  const n = Number(inpN.value);
  if (isNaN(n) || n <= 2) {
    inpRes.value = n + " n'est pas un entier > 2.";
    return false;
  }
  if (estSemiPremier(n)) {
    inpRes.value = n + " est semi-premier.";
  } else {
    inpRes.value = n + " n'est pas semi-premier";
  }
}

btnVerif.addEventListener("click", btnVerifClicked);

function estPremier(n) {
  if (n < 2) { return false; }
  if (n == 2 || n == 3) { return true; }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  const maxi = Math.sqrt(n);
  let i = 5;
  while (i <= maxi) {
    if (n % i == 0) {
      return false;
    }
    i += 2;
  }
  return true;
}

function estSemiPremier(n) {
  const maxi = Math.sqrt(n);
  for (let i = 2; i < maxi; i++) {
    if (n % i == 0 && estPremier(i) && estPremier(n / i)) {
      return true;
    }
  }
  return false;
}