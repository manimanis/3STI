const chkUpper = document.getElementById("upper");
const chkLower = document.getElementById("lower");
const chkDigit = document.getElementById("digit");
const chkSymbols = document.getElementById("symbols");
const inpLen = document.getElementById("len");
const inpNbre = document.getElementById("nbre");
const btnGen = document.getElementById("gen");
const divPwd = document.getElementById("passwords");

function randint(a, b) {
  return Math.floor(a + Math.random() * (b - a + 1));
}

function genPassword(chars, len) {
  let pass = "";
  for (let i = 0; i < len; i++) {
    pass += chars[randint(0, chars.length - 1)];
  }
  return pass;
}

function genPasswords(chars, len, nbre) {
  let t = [];
  for (let i = 0; i < nbre; i++) {
    t.push(genPassword(chars, len));
  }
  return t;
}

function upperChars() {
  let s = "";
  for (let i = 65; i <= 90; i++) {
    s += String.fromCharCode(i);
  }
  return s;
}

const upper = upperChars();
const lower = upper.toLowerCase();
const digits = "0123456789";
const symbols = "~#^$£€;:/*-+=!";

function genClicked(e) {
  e.preventDefault();
  let chars = "";
  if (chkUpper.checked) chars += upper;
  if (chkLower.checked) chars += lower;
  if (chkDigit.checked) chars += digits;
  if (chkSymbols.checked) chars += symbols;
  const len = Number(inpLen.value);
  const nbre = Number(inpNbre.value);
  if (chars.length == 0) {
    alert("Cocher au moins une option.");
    return;
  }
  if (len < 3 || len > 20) {
    alert("Le mot de passe peut contenir de 3 à 20 caractères.");
    return;
  }
  if (nbre < 1 || nbre > 20) {
    alert("Le générateur génère de 1 à 20 mots de passes.");
    return;
  }
  const tpass = genPasswords(chars, len, nbre);
  let res = "<ol>";
  for (let i = 0; i < tpass.length; i++) {
    res += '<li>' + tpass[i] + '</li>';
  }
  res += "</ol>";
  divPwd.innerHTML = res;
}

btnGen.addEventListener("click", genClicked);
