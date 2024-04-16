function textFocused() {
  const nbre = document.getElementById("nbre");
  if (nbre.value == "") {
    nbre.value = Math.floor(Math.random() * 100 + 1);
  } else {
    let v = Number(nbre.value);
    if (v % 2 == 0) {
      v = v / 2;
    } else {
      v = v * 3 + 1;
    }
    nbre.value = v;
  }
}

function textBlurred() {
  const nbre = document.getElementById("nbre");
  const msg = document.getElementById("msg");
  if (msg.textContent != "") {
    msg.textContent += ", ";
  }
  msg.textContent += nbre.value;
}