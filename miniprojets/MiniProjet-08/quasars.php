<?php
$station = $_POST['telescope'] ?? 'Non spécifiée';
$cle = $_POST['cle'] ?? '';
$heure = $_POST['heure'] ?? 'Non renseignée';
$redshift = $_POST['redshift'] ?? '0';
$couleur = $_POST['couleur'] ?? '#000000';
$bandes = $_POST['bandes'] ?? [];
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Données de l'observation reçues</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <main>
    <h1>Résultats de l'enregistrement</h1>
    <p class="intro">Le serveur a reçu et traité vos données d'observation avec succès.</p>

    <h2>Détail des informations transmises</h2>
    <ul>
      <li><strong>Station télescopique (readonly) :</strong> <?= htmlspecialchars($station) ?></li>
      <li><strong>Code d'accès vérifié (password) :</strong> <?= !empty($cle) ? "Valide (" . strlen($cle) . " caractères)" : "Non fourni" ?></li>
      <li><strong>Heure UTC de début (time) :</strong> <?= htmlspecialchars($heure) ?></li>
      <li><strong>Décalage vers le rouge (range) :</strong> z = <?= htmlspecialchars($redshift) ?></li>
      <li>
        <strong>Couleur spectrale dominante (color) :</strong>
        <span style="display:inline-block;width:18px;height:18px;vertical-align:middle;border:1px solid #000;background-color:<?= htmlspecialchars($couleur) ?>;"></span>
        <?= htmlspecialchars($couleur) ?>
      </li>
      <li>
        <strong>Bandes spectrales sélectionnées (select multiple) :</strong>
        <?php if (!empty($bandes)): ?>
          <?= htmlspecialchars(implode(', ', $bandes)) ?>
        <?php else: ?>
          <em>Aucune bande choisie</em>
        <?php endif; ?>
      </li>
      <li>
        <strong>Fichier brut joint (file) :</strong>
        <?php
        if (isset($_FILES['fichier']) && $_FILES['fichier']['error'] === UPLOAD_ERR_OK) {
          echo htmlspecialchars($_FILES['fichier']['name']) . " (" . round($_FILES['fichier']['size'] / 1024, 1) . " Ko)";
        } else {
          echo "<em>Aucun fichier téléversé</em>";
        }
        ?>
      </li>
    </ul>

    <p class="actions">
      <a href="quasars.html"><button type="button">← Retour au questionnaire</button></a>
    </p>
  </main>
</body>

</html>
