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