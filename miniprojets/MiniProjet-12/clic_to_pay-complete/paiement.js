const spanNumCmd = document.getElementById("num-cmd");
const spanMontant = document.getElementById("montant");
const inpNumCard = document.getElementById("num-card");
const inpMonth = document.getElementById("month");
const inpYear = document.getElementById("year");
const inpCVV2 = document.getElementById("CVV2");
const inpNom = document.getElementById("nom");
const inpMail = document.getElementById("mail");
const btnPaie = document.getElementById("paie");

function btnPaieClicked(e) {
  const numCard = inpNumCard.value;
  const month = inpMonth.value;
  const year = inpYear.value;
  const CVV2 = inpCVV2.value;
  const nom = inpNom.value;
  const mail = inpMail.value;

  if (numCard == '' || month == '' || year == '' || CVV2 == '' || nom == '' || mail == '') {
    alert("Tous les champs sont obligatoires");
    return false;
  }

  if (!validCardNumber(numCard)) {
    alert("Numéro de carte invalide!");
    return false;
  }

  if (!validCVV2(CVV2)) {
    alert("CVV2 invalide!");
    return false;
  }

  if (!estAlphabetique(nom)) {
    alert("Le nom doit être composé de lettres et d'espaces");
    return false;
  }

  if (!validMail(mail)) {
    alert("Email invalide");
    return false;
  }

  alert("Paiement effectué, en attente de confirmation!");
  return true;
}

function validCardNumber(numCard) {
  let sum = 0, num = 0;
  for (let i = 0; i < numCard.length; i--) {
    if (numCard[i] >= "0" && numCard[i] <= "9") {
      const v = Number(numCard[i]) * (num % 2 == 0 ? 2 : 1);
      sum += v % 10 + Math.floor(v / 10);
      num++;
    }
  }

  return num == 16 && sum % 10 == 0;
}

function validMail(mail) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(mail);
}

function validCVV2(CVV2) {
  return /^[0-9]{3}$/g.test(CVV2);
}

function estAlphabetique(nom) {
  return /^[\w\s]{3,}$/g.test(nom);
}

function randint(a, b) {
  return Math.floor(a + Math.random() * (b - a + 1));
}

function genNumCommand() {
  let s = "";
  for (let i = 0; i < 7; i++) {
    s += randint((i == 0) ? 1 : 0, 9);
  }
  return s;
}

btnPaie.addEventListener("click", btnPaieClicked);
spanNumCmd.textContent = genNumCommand();
spanMontant.textContent = randint(10, 250).toFixed(3);