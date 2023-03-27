const radSomDiv = document.getElementById("som-div");
const radNbrPar = document.getElementById("nbr-par");
const radNbrAmis = document.getElementById("nbr-amis");
const inpA = document.getElementById("a");
const inpB = document.getElementById("b");
const btnCalc = document.getElementById("calc");
const inpRes = document.getElementById("res");

// fonction appelée lorsqu'on clique sur le bouton Calculer
function btnCalcClicked(e) {
  const choix = radSomDiv.checked * 1 + radNbrPar.checked * 2 + radNbrAmis.checked * 3;
  if (choix == 1) {
    calcSommeDiv();
  } else if (choix == 2) {
    calcNombresParfaits();
  } else if (choix == 3) {
    calcNombresAmis();
  } else {
    alert("Faire un choix SVP.");
  }
}

btnCalc.addEventListener("click", btnCalcClicked);

// fonction qui calcule la somme de diviseur d'un nombre
// sauf lui même
function somdiv(n) {
  let s = 1;
  const maxi = Math.ceil(Math.sqrt(n));
  for (let i = 2; i <= maxi; i++) {
    if (n % i == 0) {
      s += i;
      const j = n / i;
      if (j != i) s += j;
    }
  }
  return s;
}

// Calculer les nombres parfaits dans un tableau
function nbresParfaits(a, b) {
  const t = [];
  for (let i = a; i <= b; i++) {
    if (somdiv(i) == i) {
      t.push(i);
    }
  }
  return t;
}

function nbresAmis(a, b) {
  const t = [];
  for (let i = a; i <= b; i++) {
    const j = somdiv(i);
    const k = somdiv(j);
    if (k == i && j > i && j <= b) {
      t.push(i);
      t.push(j);
    }
  }
  return t;
}

// Récupère les données du formulaire 
// Calcule la somme des diviseurs de A et de B
// Puis les affiche
function calcSommeDiv() {
  const a = Number(inpA.value);
  const b = Number(inpB.value);
  const sda = somdiv(a);
  const sdb = somdiv(b);
  inpRes.value = "somdiv(" + a + ") = " + sda + "\nsomdiv(" + b + ") = " + sdb;
}

// Compléter le code précédent, ajouter les fonctions nécessaires pour :
// - Calculer les nombres parfaits situés dans l'intervalle [a, b]
// NB : si somdiv(n) = n alors n est un nombre parfait
// Exemple : somdiv(6) = 1+2+3 = 6 => 6 est un nombre parfait
function calcNombresParfaits() {
  const a = Number(inpA.value);
  const b = Number(inpB.value);
  const t = nbresParfaits(a, b);
  inpRes.value = "Nombres parfaits [" + a + ", " + b + "]";
  for (let i = 0; i < t.length; i++) {
    inpRes.value += "\n" + t[i];
  }
}

// - Calculer les nombres amis situés dans l'intervalle [a, b]
// NB : si somdiv(a) = b et somdiv(b) = a alors a, b sont deux nombres amis
// Exemple : somdiv(220) = 284 et somdiv(284) = 220 => 220 et 284 sont deux nombres amis
function calcNombresAmis() {
  const a = Number(inpA.value);
  const b = Number(inpB.value);
  const t = nbresAmis(a, b);
  inpRes.value = "Nombres amis [" + a + ", " + b + "]";
  for (let i = 0; i < t.length; i+=2) {
    inpRes.value += "\n" + t[i] + ", " + t[i+1];
  }
}