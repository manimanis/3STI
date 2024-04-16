function actChecked() {
  const act = document.getElementById("act");
  const actText = document.getElementById("act-text");
  const btn = document.getElementById("btn");
  actText.textContent = act.checked ? "Lien Activé" : "Lien Désactivé";
  btn.textContent = act.checked ? "Désactiver" : "Activer";
}

function btnClicked() {
  const act = document.getElementById("act");
  act.checked = !act.checked;
  actChecked();
}

function linkClicked() {
  const act = document.getElementById("act");
  return act.checked;
}