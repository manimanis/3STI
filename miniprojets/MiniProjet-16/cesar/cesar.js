function crypter() {
  const m = document.getElementById("m").value;
  const resDiv = document.getElementById("res");

  if (m == "") {
    resDiv.textContent = "Saisir un mot non vide.";
  } else if (!isAlphabetic(m)) {
    resDiv.textContent = "Saisir un mot en majuscules.";
  } else {
    const mc = subtitution(m);
    resDiv.textContent = m + " devient " + mc;
  }
}

function isAlphabetic(m) {
  for (let i = 0; i < m.length; i++) {
    if (m[i] < "A" || m[i] > "Z") {
      return false;
    }
  }
  return true;
}

function subtitution(m) {
  let mc = "";
  for (let i = 0; i < m.length; i++) {
    mc = mc + String.fromCharCode((m[i].charCodeAt(0) - 65 + 3) % 26 + 65);
  }
  return mc;
}