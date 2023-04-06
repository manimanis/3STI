const inpIdpers = document.getElementById("idpers");
const inpNom = document.getElementById("nomprenom");
const raGenre1 = document.getElementById("genre1");
const raGenre2 = document.getElementById("genre2");
const selQualite = document.getElementById("qualite");
const inpMatiere = document.getElementById("matiere");
const inpClasse = document.getElementById("classe");
const divMatiere = document.getElementById("div-mat");
const divClasse = document.getElementById("div-cl");

function setQualite(qualite) {
  if (qualite == "EL") {
    divClasse.style.display = "";
    divMatiere.style.display = "none";
  } else if (qualite == "EN") {
    divClasse.style.display = "none";
    divMatiere.style.display = "";
  } else {
    divClasse.style.display = "none";
    divMatiere.style.display = "none";
  }
}

function qualiteChanged() {
  const qualite = selQualite.value;
  setQualite(qualite);
}

function getGenre() {
  const raGenres = [raGenre1, raGenre2];
  for (let i = 0; i < raGenres.length; i++) {
    if (raGenres[i].checked) {
      return raGenres[i].value;
    }
  }
  return "";
}

selQualite.addEventListener("change", qualiteChanged);
qualiteChanged();

function calcCle(ch) {
  let s = 0;
  for (let i = 0; i < ch.length; i++) {
    if ("0" <= ch[i] && ch[i] <= "9") {
      s += +ch[i];
    } else if ("A" <= ch[i] && ch[i] <= "Z") {
      s += (ch[i].charCodeAt(0) - 64);
    }
  }
  return String(s % 10);
}

const tab = [
  "AB1234",
  "AAAA11111111",
  "ABAB12121212",
  "ABCD13579197",
  "abcdefghijkl",
  "DE123",
  "INFO12345678",
  "PHIL02222222"
];
for (let tb of tab) {
  console.log(tb, calcCle(tb));
}

for (let a = 1; a < 10; a++) {
  for (let b = 0; b < 10; b++) {
    for (let c = 0; c < 10; c++) {
      for (let d = 0; d < 10; d++) {
        const v1 = a * 1000 + b * 100 + c * 10 + d;
        const v2 = d * 1000 + c * 100 + b * 10 + a;
        if (4*v1 == v2) {
          console.log(v1);
        }
      }
    }
  }
}