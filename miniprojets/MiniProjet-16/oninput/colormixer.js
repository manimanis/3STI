function valueChanged() {
  const r = document.getElementById("r");
  const vr = document.getElementById("vr");
  const g = document.getElementById("g");
  const vg = document.getElementById("vg");
  const b = document.getElementById("b");
  const vb = document.getElementById("vb");

  const color = document.getElementById("color");

  vr.innerHTML = r.value;
  vg.innerHTML = g.value;
  vb.innerHTML = b.value;

  color.style.backgroundColor = "#fff";
}
