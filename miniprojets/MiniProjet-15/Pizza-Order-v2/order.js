/*
Pizza prices

Personal 	$12
Medium 	  $15
Large 	  $22
X-Large 	$25

Toppings
Each      $1.5
*/
const form = document.getElementById("form");

const spanTotalPrice = document.getElementById("total-price");

const spanName = document.getElementById("cust-name");
const spanPhone = document.getElementById("cust-phone");
const spanDOB = document.getElementById("cust-dob");
const spanPizzaSize = document.getElementById("pizza-size");
const spanPizzaCrust = document.getElementById("pizza-crust");
const spanPizzaCheese = document.getElementById("pizza-cheese");
const spanPizzaSauce = document.getElementById("pizza-sauce");
const ulTop = document.getElementById("pizza-top");

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

function calcPrice() {
  let price = 0;
  const size = form.size.value;
  if (size == "Personal") { price += 12; } 
  else if (size == "Medium") { price += 15; } 
  else if (size == "Large") { price += 22; } 
  else if (size == "X-Large") { price += 25; }
  for (let i = 0; i < form.topping.length; i++) {
    if (form.topping[i].checked) {
      price += 1.5;
    }
  }
  return price;
}

function isValidName(name) {
  if (name.length < 3) {
    return false;
  }
  for (let i = 0; i < name.length; i++) {
    const valid = (name[i] >= "A" && name[i] <= "Z") ||
      (name[i] >= "a" && name[i] <= "z") ||
      (name[i] >= " ");
    if (!valid) {
      return false;
    }
  }
  return true;
}

function isValidPhone(phone) {
  if (phone.length < 8) {
    return false;
  }
  let ph = "";
  for (let i = 0; i < phone.length; i++) {
    if (phone[i] >= "0" && phone[i] <= "9") {
      ph += phone[i];
    } else if (phone[i] != " ") {
      return false;
    }
  }
  if (ph.length != 8) {
    return false;
  }
  return "234579".indexOf(ph[0]) != -1;
}

function updateSummary() {
  spanName.textContent = (isValidName(form.name.value)) ? form.name.value : "Invalid name.";
  spanPhone.textContent = (isValidPhone(form.phone.value)) ? form.phone.value : "Invalid phone.";
  spanDOB.textContent = (form.dob.value) ? form.dob.value : "Invalid date.";
  spanPizzaSize.textContent = (form.size.value) ? form.size.value : "Select size.";
  spanPizzaCrust.textContent = form.crust.value;
  spanPizzaCheese.textContent = form.cheese.value;
  spanPizzaSauce.textContent = form.sauce.value;
  let items = "";
  for (let i = 0; i < form.topping.length; i++) {
    if (form.topping[i].checked) {
      items += "<li>" + form.topping[i].value + "</li>";
    }
  }
  ulTop.innerHTML = items;
}

function updatePrice() {
  const price = calcPrice();
  spanTotalPrice.textContent = "$" + price.toFixed(2);
}

function orderPizzaClicked(ev) {
  ev.preventDefault();
  if (!isValidName(form.name.value) ||
    !isValidPhone(form.phone.value) ||
    form.dob.value == "" ||
    form.size.value == "") {
    alert("There are invalid inputs. Correct them before continuing.");
    return;
  }
  alert("Order recieived successfully. You'll be delivered soon, keep your phone near by.")
}

function resetOrderClicked(ev) {
  setTimeout(() => {
    displayPage(0);
    updateSummary();
    updatePrice();
  }, 0);
}

for (let i = 0; i < form.size.length; i++) {
  form.size[i].addEventListener("click", updatePrice);
}

for (let i = 0; i < form.topping.length; i++) {
  form.topping[i].addEventListener("click", updatePrice);
}

form.addEventListener("input", updateSummary);
form.addEventListener("submit", orderPizzaClicked);
form.addEventListener("reset", resetOrderClicked);

updateSummary();
updatePrice();

