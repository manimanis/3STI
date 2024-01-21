function verifier() {
  const mch = document.getElementById("m").value;
  const nch = document.getElementById("n").value;
  const m = Number(mch);
  const n = Number(nch);
  const divRes = document.getElementById("res");

  if (mch == "" || nch == "" || m <= 0 || n <= 0) {
    divRes.textContent = "Veuillez introduire deux entiers positifs.";
  } else if (estSuccessionParfaite(mch, nch)) {
    divRes.textContent = mch + " et " + nch + " forment une succession parfaite.";
  } else {
    divRes.textContent = mch + " et " + nch + " ne forment pas une succession parfaite.";
  }
}

function estSuccessionParfaite(m, n) {
  const ch = m + n;
  let chiffres = "";
  for (let i = 0; i < 10; i++) {
    if (ch.indexOf(i) != -1) {
      if (chiffres.length > 0 && (Number(chiffres[chiffres.length - 1]) + 1) != i) {
        return false;
      }
      chiffres += i;
    }
  }
  return chiffres.length == ch.length;
}