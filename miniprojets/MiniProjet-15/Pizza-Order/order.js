/*
Pizza prices

Personal 	$11.55
Medium 	    $15.25
Large 	    $22.00
X-Large 	$25.00

Toppings
Each        $1.79
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

function orderPizzaClicked(ev) {
  ev.preventDefault();
  alert("Order recieived successfully. You'll be delivered soon, keep your phone near by.")
}

function calcPrice() {
  let price = 0;
  const size = form.size.value;
  if (size == "Personal") {
    price += 11.55;
  } else if (size == "Medium") {
    price += 15.25;
  } else if (size == "Large") {
    price += 22.0;
  } else if (size == "X-Large") {
    price += 25;
  }
  for (let i = 0; i < form.topping.length; i++) {
    if (form.topping[i].checked) {
      price += 1.79;
    }
  }
  return price;
}

function updateSummary() {
  spanName.textContent = form.name.value;
  spanPhone.textContent = form.phone.value;
  spanDOB.textContent = form.dob.value;
  spanPizzaSize.textContent = form.size.value;
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

function resetOrderClicked(ev) {
  setTimeout(() => {
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

updatePrice();
updateSummary();
