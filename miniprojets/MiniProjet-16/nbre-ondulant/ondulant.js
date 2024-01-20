function btnVerifClicked() {
  const inpN = document.getElementById("n");
  const inpRes = document.getElementById("res");

  const n = Number(inpN.value);
  if (isNaN(n) || n < 100) {
    inpRes.value = n + " n'est pas un entier >= 100.";
    return;
  }

  if (estOndulant(n)) {
    inpRes.value = n + " est un nombre ondulant.";
  } else {
    inpRes.value = n + " n'est pas un nombre ondulant";
  }
}

function estOndulant(n) {
  const ch = String(n);
  let ondulant = ch.length >= 3 && ch[0] != ch[1];
  for (let i = 2; i < ch.length; i++) {
    if (ch[i % 2] != ch[i]) {
      return false;
    }
  }
  return true;
}