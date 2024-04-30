const images = ["square", "rectangle", "triangle", "circle"];
let selectedShape = -1;

function shapeClicked(n) {
  const img = document.getElementById("img-shape");
  selectedShape = n;
  if (selectedShape != -1) {
    img.src = "images/" + images[selectedShape] + ".png";
    displayInput(selectedShape);
    resetInput('a');
    resetInput('b');
  }
}

function displayInput(shape) {
  const inpA = document.getElementById("inp-a");
  const inpB = document.getElementById("inp-b");
  const labA = document.getElementById("label-a");
  const labB = document.getElementById("label-b");

  inpA.style.display = (shape >= 0 && shape <= 3) ? "block" : "none";
  inpB.style.display = (shape == 1 || shape == 2) ? "block" : "none";
  if (shape == 0) {
    labA.textContent = "Side";
  } else if (shape == 1) {
    labA.textContent = "Side A";
    labB.textContent = "Side B";
  } else if (shape == 3) {
    labA.textContent = "Radius";
  } else if (shape == 2) {
    labA.textContent = "Base";
    labB.textContent = "Height";
  }
}

function calcArea(shape, a, b) {
  if (shape == 0 && a > 0) {
    return a * a;
  } else if (shape == 1 && a > 0 && b > 0) {
    return a * b;
  } else if (shape == 2 && a > 0 && b > 0) {
    return a * b / 2;
  } else if (shape == 3 && a > 0) {
    return Math.PI * a * a;
  }
  return "-";
}

function calcPerim(shape, a, b) {
  if (shape == 0 && a > 0) {
    return 4 * a;
  } else if (shape == 1 && a > 0 && b > 0) {
    return 2 * (a + b);
  } else if (shape == 3 && a > 0) {
    return 2 * Math.PI * a;
  }
  return "-";
}

function calcShapeArea() {
  const shape = selectedShape;
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


