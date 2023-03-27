const inpRIB = document.getElementById("rib");
const btnVal = document.getElementById("valid-rib");
const divRes = document.getElementById("res");

function btnValClicked(e) {
  const rib = removeSpaces(inpRIB.value);

  if (rib == "" || rib.length != 23 || !isAlphanumric(rib)) {
    alert("Indiquer un RIB de 23 lettres alphanumériques.");
    return false;
  }

  if (isValidRIB(rib)) {
    divRes.className = "valid";
    divRes.textContent = `✓ Le RIB ${rib} est valide`;
  } else {
    divRes.className = "wrong";
    divRes.textContent = `✗ ${rib} n'est pas valide`;
  }
}

btnVal.addEventListener("click", btnValClicked);

function isAlphanumric(ch) {
  for (let i = 0; i < ch.length; i++) {
    const valid = (ch[i] >= "A" && ch[i] <= "Z") ||
      (ch[i] >= "a" && ch[i] <= "z") ||
      (ch[i] >= "0" && ch[i] <= "9");
    if (!valid) {
      return false;
    }
  }
  return true;
}

const digits = "12345678912345678923456789";
function replaceByDigits(ch) {
  let ch1 = "";
  for (let i = 0; i < ch.length; i++) {
    let car = ch[i];
    if (car >= "A" && car <= "Z") {
      car = digits[car.charCodeAt(0) - 65];
    } else if (car >= "a" && car <= "z") {
      car = digits[car.charCodeAt(0) - 97];
    }
    ch1 += car;
  }
  return ch1;
}

function isValidRIB(ch) {
  ch = replaceByDigits(ch);
  const key = ch.substring(21);
  const rib = ch.substring(0, 21);
  const r = 97 - mod97(rib + "00");
  return Number(key) == r;
}

function removeSpaces(ch) {
  let ch1 = "";
  for (let i = 0; i < ch.length; i++) {
    if (ch[i] != " ") ch1 += ch[i];
  }
  return ch1;
}

function mod97(ch) {
  let mul = 1, s = 0;
  for (let i = ch.length - 1; i >= 0; i--) {
    s = (s + Number(ch[i]) * mul) % 97;
    mul = (mul * 10) % 97;
  }
  return s;
}

// Some valid RIBs to test with
//----------------------------------
// 30001 00794 12345678901 85
// 12345 12345 0123456789A 03
// 11808 00910 12345678901 47
// 20041 01005 0500013M026 06
// 12548 02998 98765432109 21
// 12548 0KRZH IYXONMCBJ0I 21