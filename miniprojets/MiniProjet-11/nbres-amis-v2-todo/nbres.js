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
  }
  //
  // à compléter
  //
}

btnCalc.addEventListener("click", btnCalcClicked);

// fonction qui calcule la somme de diviseur d'un nombre
// sauf lui même
function somdiv(n) {
  let s = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      s += i;
    }
  }
  return s;
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
// - Calculer les nombres amis situés dans l'intervalle [a, b]

// NB : si somdiv(n) = n alors n est un nombre parfait
// Exemple : somdiv(6) = 1+2+3 = 6 => 6 est un nombre parfait

// NB : si somdiv(a) = b et somdiv(b) = a alors a, b sont deux nombres amis
// Exemple : somdiv(220) = 284 et somdiv(284) = 220 => 220 et 284 sont deux nombres amis