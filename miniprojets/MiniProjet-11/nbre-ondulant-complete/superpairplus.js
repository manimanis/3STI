const inpN = document.getElementById("n");
const btnVerif = document.getElementById("verif");
const inpRes = document.getElementById("res");

function btnVerifClicked(e) {
  const n = Number(inpN.value);
  if (isNaN(n) || n <= 0) {
    inpRes.value = n + " n'est pas un entier > 0.";
    return false;
  }
  if (estSuperPairPlus(n)) {
    inpRes.value = n + " est super pair plus.";
  } else {
    inpRes.value = n + " n'est pas super pair plus.";
  }
}

btnVerif.addEventListener("click", btnVerifClicked);

function estSuperPairPlus(n) {
  const ch = String(n);
  let valid = n > 0, i = 0;
  while (valid && i < ch.length) {
    valid = Number(ch[i]) % 2 == 0;
    i++;
  }
  for (let i = 2; valid && i <= n / 2; i++) {
    if (n % i == 0 && i % 2 != 0) {
      valid = false;
    }
  }
  return valid;
}