// scripts/manifestation.js : Calcul dynamique de la note globale et des étoiles
function updateScore() {
  const a = parseInt(document.getElementById('note_accueil').value) || 0;
  const c = parseInt(document.getElementById('note_confort').value) || 0;
  const s = parseInt(document.getElementById('note_signal').value) || 0;
  const l = parseInt(document.getElementById('note_logistique').value) || 0;

  // Mise à jour de la note totale sur 20
  document.getElementById('note_totale').textContent = (a + c + s + l) + " / 20";

  // Fonction utilitaire pour générer les étoiles
  function renderStars(val) {
    return "★".repeat(val) + "☆".repeat(5 - val);
  }

  // Mise à jour des affichages d'étoiles
  document.getElementById('stars_accueil').textContent = renderStars(a);
  document.getElementById('stars_confort').textContent = renderStars(c);
  document.getElementById('stars_signal').textContent = renderStars(s);
  document.getElementById('stars_logistique').textContent = renderStars(l);
}
