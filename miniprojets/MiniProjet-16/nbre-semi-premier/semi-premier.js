function btnVerifClicked(e) {
  const inpN = document.getElementById("n");
  const inpRes = document.getElementById("res");

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

function estPremier(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) { count++; }
  }
  return count == 2;
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