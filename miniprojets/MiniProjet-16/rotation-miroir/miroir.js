function crypter() {
  const ch = document.getElementById("ch").value;
  const divRes = document.getElementById("res");

  if (ch == "") {
    divRes.textContent = "Veuillez introduire une chaîne.";
  } else if (!estValide(ch)) {
    divRes.textContent = "Introduire une chaîne alphabétique.";
  } else {
    divRes.textContent = "La chaîne cryptée est : " + rotation(miroir(ch));
  }
}

function estValide(ch) {
  for (let i = 0; i < ch.length; i++) {
    if (ch[i] < "a" || ch[i] > "z") {
      return false;
    }
  }
  return true;
}

function miroir(ch) {
  let ch1 = "";
  for (let i = 0; i < ch.length; i++) {
    ch1 = ch[i] + ch1;
  }
  return ch1;
}

function rotation(ch) {
  let res = "";
  for (let i = 0; i < ch.length; i++) {
    res += String.fromCharCode(97 + (ch[i].charCodeAt(0) - 97 + 13) % 26);
  }
  return res;
}