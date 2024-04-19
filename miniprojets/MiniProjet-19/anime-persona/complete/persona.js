const images = ["conan", "goku", "sasuke", "tsubasa"];

function radioChecked(n) {
  const img = document.getElementById("p-img");
  const name = document.getElementById("p-name");
  if (n >= 0) {
    name.textContent = images[n];
    img.src = "images/" + images[n] + ".png";
  } else {
    name.textContent = "";
    img.src = "";
  }
}