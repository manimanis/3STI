const radAct1 = document.getElementById("act-1");
const radAct2 = document.getElementById("act-2");
const selInt = document.getElementById("int");
const inpTmp = document.getElementById("tmp");
const btnCalc = document.getElementById("calc");
const divRes = document.getElementById("res");

function btnCalcClicked(ev) {
  const act = radAct1.checked * 1 + radAct2.checked * 2;
  const int = Number(selInt.value);
  const tmp = Number(inpTmp.value);

  if (act == 0) {
    divRes.textContent = "Indiquer l'activité sportive.";
    return;
  }

  if (int == 0) {
    divRes.textContent = "Indiquer l'intensité de l'exercice.";
    return;
  }

  if (tmp <= 0 || tmp > 300) {
    divRes.textContent = "Indiquer le temps de l'exercice [1, 300].";
    return;
  }

  let e = 0;
  if (act == 1) {
    switch (int) {
      case 1:
        e = 176;
        break;
      case 2:
        e = 232;
        break;
      case 3:
        e = 352;
        break;
    }
  } else {
    switch (int) {
      case 1:
        e = 704;
        break;
      case 2:
        e = 880;
        break;
      case 3:
        e = 1126;
        break;
    }
  }
  e = e * tmp / 60;
  divRes.textContent = "Cet exercice fait dépenser " + e + " calories";
}

btnCalc.addEventListener("click", btnCalcClicked);

