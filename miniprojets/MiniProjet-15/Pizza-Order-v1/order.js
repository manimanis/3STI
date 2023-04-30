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
const btnPrice = document.getElementById("btn-calc");

function isAlphabetic(s) {
  for (let i = 0; i < s.length; i++) {
    const valid = (s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z") || (s[i] >= " ");
    if (!valid) {
      return false;
    }
  }
  return true;
}

function isPhone(s) {
  s = removeSpaces(s);
  if (s.length != 8) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] < "0" || s[i] > "9") {
      return false;
    }
  }
  return "234579".indexOf(s[0]) != -1;
}

function removeSpaces(s) {
  let s1 = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      s1 += s[i];
    }
  }
  return s1;
}

function orderPizzaClicked(ev) {
  ev.preventDefault();
  const name = form.name.value;
  const phone = form.phone.value;
  const size = form.size.value;

  if (name.length < 3 || !isAlphabetic(name)) {
    alert("Enter your name, please.");
    return;
  }

  if (!isPhone(phone)) {
    alert("Enter a valid phone, please.");
    return;
  }

  if (size == "") {
    alert("Select the pizza size.");
    return;
  }
  alert("Order received successfully. You'll be delivered soon, in less than 30 minutes, keep your phone near by.");
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

function calcPriceClicked() {
  const price = calcPrice();
  alert("Your pizza costs $" + price.toFixed(2) + ".");
}

form.addEventListener("submit", orderPizzaClicked);
btnPrice.addEventListener("click", calcPriceClicked);
