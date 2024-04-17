function displayInput(shape) {
  const inpB = document.getElementById("inp-b");
  const labA = document.getElementById("label-a");
  const labB = document.getElementById("label-b");
  if (shape == "square") {
    inpB.style.display = "none";
    labA.textContent = "Side";
  } else if (shape == "rectangle") {
    inpB.style.display = "block";
    labA.textContent = "Side A";
    labB.textContent = "Side B";
  } else if (shape == "circle") {
    inpB.style.display = "none";
    labA.textContent = "Radius";
  } else if (shape == "triangle") {
    inpB.style.display = "block";
    labA.textContent = "Base";
    labB.textContent = "Height";
  }
}

function getSelectedShape() {
  const checkedRadio = document.querySelector("input[type=radio][name=shape]:checked");
  if (checkedRadio != null) {
    return checkedRadio.value;
  }
  return "";
}

function shapeClicked() {
  const shape = getSelectedShape();
  if (shape != "") {
    img.src = "images/" + shape + ".png";
    displayInput(shape);
    resetInput('a');
    resetInput('b');
  }
}

function calcArea(shape, a, b) {
  if (shape == "square" && a > 0) {
    return a * a;
  } else if (shape == "rectangle" && a > 0 && b > 0) {
    return a * b;
  } else if (shape == "triangle" && a > 0 && b > 0) {
    return a * b / 2;
  } else if (shape == "circle" && a > 0) {
    return Math.PI * a * a;
  }
  return "-";
}

function calcPerim(shape, a, b) {
  if (shape == "square" && a > 0) {
    return 4 * a;
  } else if (shape == "rectangle" && a > 0 && b > 0) {
    return 2 * (a + b);
  } else if (shape == "circle" && a > 0) {
    return 2 * Math.PI * a;
  }
  return "-";
}

function calcShapeArea() {
  const shape = getSelectedShape();
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const area = calcArea(shape, a, b);
  const peri = calcPerim(shape, a, b);
  showResults(area, peri);
}

function showResults(a, p) {
  const areaDiv = document.getElementById("area");
  const periDiv = document.getElementById("perimeter");
  if (a != "-") {
    areaDiv.textContent = a.toFixed(2) + "cm²";
  } else {
    areaDiv.textContent = "-";
  }
  if (p != "-") {
    periDiv.textContent = p.toFixed(2) + "cm";
  } else {
    periDiv.textContent = "-";
  }
}

function resetInput(id) {
  const input = document.getElementById(id);
  input.value = "";
  showResults("-", "-");
}


