<?php

$nom = trim($_POST['nom']);
$prenom = trim($_POST['prenom']);
$tel = trim($_POST['tel']);

$error = FALSE;

if (strlen($nom) < 3 || !isAlphabetic($nom)) {
    add_error("Le 'nom' doit être composé d'au moins trois lettres.");
}

if (strlen($prenom) < 3 || !isAlphabetic($prenom)) {
    add_error("Le 'prenom' doit être composé d'au moins trois lettres.");
}

if (strlen($tel) != 0 && !isPhone($tel)) {
    add_error("Le 'tel' doit être au format 'xx xxx xxx'.");
}

if (has_errors()) {
    add_error("Corriger les erreurs précédentes");
    write_response();
}

$client = fetch_client_by_nom_prenom($conn, $nom, $prenom);
if ($client != null) {
    add_error("Le client existe déjà sous le n° : {$client['numclient']}");
    write_response();
}

$id = insert_client($conn, $nom, $prenom, $tel);
if ($id == -1) {
    add_error("L'opération a échoué.");
    write_response();
}

$res['success'] = TRUE;
$res['numclient'] = $id;
write_response();
