function factoriser() {
  const nbr = Number(document.getElementById("nbr").value);
  const divRes = document.getElementById("res");
  if (nbr <= 0) {
    divRes.textContent = "Entrer un entier positif";
  } else {
    divRes.innerHTML = nbr + " = " + format(facteurs(nbr));
  }
}

function facteurs(nbr) {
  const t = [];
  let f = 2;
  while (nbr != 1) {
    if (nbr % f == 0) {
      t.push(f);
      nbr = nbr / f;
    } else {
      f++;
    }
  }
  return t;
}

function format(t) {
  let ch = "";
  let i = 0;
  while (i < t.length) {
    let j = i;
    while (j < t.length && t[i] == t[j]) {
      j++;
    }
    let puiss = j - i;
    if (ch != "") {
      ch += "&times;";
    }
    ch += t[i];
    if (puiss != 1) {
      ch += "<sup>" + puiss + "</sup>";
    }
    i = j;
  }
  return ch;
}