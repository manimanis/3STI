function proceder() {
  const m1 = document.getElementById("m1").value;
  const m2 = document.getElementById("m2").value;
  const resDiv = document.getElementById("res");

  if (m1 == "" || m2 == "") {
    resDiv.textContent = "Saisir deux mots non vides.";
  } else if (!isAlphabetic(m1) || !isAlphabetic(m2)) {
    resDiv.textContent = "Saisir deux mots alphabétiques.";
  } else if (isAnagrams(m1, m2)) {
    resDiv.textContent = "Les deux mots sont anagrammes.";
  } else {
    resDiv.textContent = "Les deux mots ne sont pas anagrammes.";
  }
}

function isAlphabetic(m) {
  for (let i = 0; i < m.length; i++) {
    if (m[i] < "a" || m[i] > "z") {
      return false;
    }
  }
  return true;
}

function isAnagrams(m1, m2) {
  if (m1.length != m2.length) {
    return false;
  }

  for (let i = 0; i < m1.length; i++) {
    const p = m2.indexOf(m1[i]);
    if (p == -1) {
      return false;
    }
    m2 = m2.substring(0, p) + m2.substring(p+1);
  }
  
  return true;
}