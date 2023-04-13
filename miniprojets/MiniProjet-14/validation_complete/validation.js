const inpNom = document.getElementById("nom");
const rdQualite1 = document.getElementById("qualite-1");
const rdQualite2 = document.getElementById("qualite-2");
const rdQualite = [rdQualite1, rdQualite2];
const inpClasse = document.getElementById("classe");
const inpIdent = document.getElementById("ident");
const btnSoumettre = document.getElementById("soumettre");
const form = document.getElementById("f");
const divEns = document.getElementById("div-ens");
const divEleve = document.getElementById("div-eleve");
const divMsg = document.getElementById("message");

function validateForm(ev) {
  let valid = true;
  const qualite = getQualite();
  if (qualite == "") {
    alert("Sélectionner votre qualité.");
    valid = false;
  }
  if (qualite == "EL") {
    const classe = inpClasse.value;
    if (!isValidClasse(classe)) {
      alert("Choisir un nom de classe valide.");
      valid = false;
    }
  }
  if (qualite == "EN") {
    const ident = inpIdent.value;
    if (!isValidIdentifier(ident)) {
      alert("Choisir un identifiant valide.");
      valid = false;
    }
  }
  if (!valid) {
    divMsg.innerHTML = "Données invalides";
    divMsg.classList.remove("hidden");
    divMsg.classList.add("error");
    divMsg.classList.remove("ok");
  } else {
    divMsg.innerHTML = "Données valides";
    divMsg.classList.remove("hidden");
    divMsg.classList.remove("error");
    divMsg.classList.add("ok");
  }
  ev.preventDefault();
}

function getQualite() {
  for (let i = 0; i < rdQualite.length; i++) {
    if (rdQualite[i].checked) {
      return rdQualite[i].value;
    }
  }
  return "";
}

function qualiteSelected() {
  const qualite = getQualite();
  if (qualite == 'EL') {
    divEleve.classList.remove('hidden');
    divEns.classList.add('hidden');
  } else if (qualite == 'EN') {
    divEleve.classList.add('hidden');
    divEns.classList.remove('hidden');
  }
}


function isValidClasse(cl) {
  if (cl.length < 3) {
    return false;
  }
  if (cl[0] < "0" || cl[0] > "4") {
    return false;
  }
  let i = 1;
  let j = cl.length;
  while (j - 1 > i && cl[j - 1] >= "0" && cl[j - 1] <= "9") {
    j--;
  }
  const num = Number(cl.substring(j));
  if (isNaN(num) || num < 1 || num > 99 || (j - i) < 1 || (j - i) > 3) {
    return false;
  }
  while (i < j) {
    if (cl[i] < "A" || cl[i] > "Z") {
      return false;
    }
    i++;
  }
  return true;
}

function calcCle(matid) {
  let s = 0;
  for (let i = 0; i < matid.length; i++) {
    if ("0" <= matid[i] && matid[i] <= "9") {
      s = s + Number(matid[i]);
    } else if ("A" <= matid[i] && matid[i] <= "Z") {
      s = s + (matid[i].charCodeAt(0) - 64);
    }
  }
  return String(s % 10);
}

function isValidIdentifier(ident) {
  if (ident.length != 13) {
    return false;
  }
  for (let i = 0; i < 4; i++) {
    if (ident[i] < "A" || ident[i] > "Z") {
      return false;
    }
  }
  for (let i = 4; i < ident.length; i++) {
    if (ident[i] < "0" || ident[i] > "9") {
      return false;
    }
  }
  const cle1 = ident[12];
  const cle2 = calcCle(ident.substring(0, 12));
  return cle1 == cle2;
}

form.addEventListener("submit", validateForm);
rdQualite.forEach(rd => rd.addEventListener("click", qualiteSelected));



