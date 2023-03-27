const inpIP = document.getElementById("ip");
const btnVerif = document.getElementById("verif");
const pAddress = document.getElementById("address");
const pBin = document.getElementById("bin");
const pClass = document.getElementById("class");

function btnVerifClicked(e) {
  const ip = inpIP.value;
  if (!estValideIP(ip)) {
    pAddress.textContent = "Erreur";
    pBin.textContent = "##.##.##.##";
    pClass.textContent = "#";
    return false;
  }
  pAddress.textContent = ip;
  pBin.textContent = ipAddressBin(ip);
  pClass.textContent = ipClass(ip);
}

btnVerif.addEventListener("click", btnVerifClicked);

function convBin(n) {
  let ch = "";
  for (let i = 0; i < 8; i++) {
    ch = String(n % 2) + ch;
    n = Math.floor(n / 2);
  }
  return ch;
}

function estValideIP(ip) {
  const t = eclaterIP(ip);
  if (t.length != 4) {
    return false;
  }
  for (let i = 0; i < t.length; i++) {
    if (isNaN(t[i]) || t[i] < 0 || t[i] > 255) {
      return false;
    }
  }
  return true;
}

function eclaterIP(ip) {
  const t = ip.split('.');
  for (let i = 0; i < t.length; i++) {
    t[i] = Number(t[i]);
  }
  return t;
}

function ipClass(ip) {
  const t = eclaterIP(ip);
  const t0 = convBin(t[0]);
  if (t0[0] == '0') { return "A"; }
  else if (t0.substring(0, 2) == '10') { return "B"; }
  else if (t0.substring(0, 3) == '110') { return "C"; }
  else if (t0.substring(0, 4) == '1110') { return "D"; }
  return "E";
}

function ipAddressBin(ip) {
  const t = eclaterIP(ip);
  for (let i = 0; i < t.length; i++) {
    t[i] = convBin(t[i]);
  }
  return t.join(".");
}