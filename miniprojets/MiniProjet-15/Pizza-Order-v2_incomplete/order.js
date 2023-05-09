const form = document.getElementById("form");

const spanTotalPrice = document.getElementById("total-price");

const fieldSets = [...document.querySelectorAll("#form fieldset")];

const spanPageNum = document.getElementById("page-num");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const divNavButtons = document.getElementById("nav-buttons");
const divFormButtons = document.getElementById("form-buttons");
let currentPage = 0;

function displayPage(numPage) {
  currentPage = numPage;
  spanPageNum.textContent = "Page " + (numPage + 1) + " of " + fieldSets.length;
  for (let i = 0; i < fieldSets.length; i++) {
    fieldSets[i].style.display = (numPage == i) ? "block" : "none";
  }
  divFormButtons.style.display = (numPage == fieldSets.length - 1) ? "block" : "none";
  btnPrev.style.visibility = (numPage == 0) ? "hidden" : "";
  btnNext.style.visibility = (numPage == fieldSets.length - 1) ? "hidden" : "";
}

function moveNextPage() {
  if (currentPage < fieldSets.length - 1) {
    displayPage(currentPage + 1);
  }
}

function movePrevPage() {
  if (currentPage > 0) {
    displayPage(currentPage - 1);
  }
}

btnPrev.addEventListener("click", movePrevPage);
btnNext.addEventListener("click", moveNextPage);
displayPage(0);

/*
Pizza prices

Personal 	$12
Medium 	  $15
Large 	  $22
X-Large 	$25

Toppings
Each      $1.5
*/
function calcPrice() {
  let price = 0;
  /* TODO */
  return price;
}

function isValidName(name) {
  /* TODO */
  return false;
}

function isValidPhone(phone) {
  /* TODO */
  return false;
}

/* updateSummary() : elements to update*/
const spanName = document.getElementById("cust-name");
const spanPhone = document.getElementById("cust-phone");
const spanDOB = document.getElementById("cust-dob");
const spanPizzaSize = document.getElementById("pizza-size");
const spanPizzaCrust = document.getElementById("pizza-crust");
const spanPizzaCheese = document.getElementById("pizza-cheese");
const spanPizzaSauce = document.getElementById("pizza-sauce");
const ulTopping = document.getElementById("pizza-top");

function updateSummary() {
  /* TODO */
}


function updatePrice() {
  const price = calcPrice();
  spanTotalPrice.textContent = "$" + price.toFixed(2);
}

function orderPizzaClicked(ev) {
  ev.preventDefault();
  /* TODO */
}

function resetOrderClicked(ev) {
  setTimeout(() => {
    /* TODO */
  }, 0);
}

for (let i = 0; i < form.size.length; i++) {
  form.size[i].addEventListener("click", updatePrice);
}

for (let i = 0; i < form.topping.length; i++) {
  form.topping[i].addEventListener("click", updatePrice);
}

form.addEventListener("input", updateSummary);
/* TODO: Attach event listeners */

updateSummary();
updatePrice();

