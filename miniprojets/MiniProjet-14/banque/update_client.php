<?php

$numclient = intval($_POST['numclient']);
$nom = trim($_POST['nom']);
$prenom = trim($_POST['prenom']);
$tel = trim($_POST['tel']);

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

$oldclient = fetch_client_by_id($conn, $numclient);
if ($oldclient == null) {
    add_error("Le client n°$numclient est introuvable");
    write_response();
}

$client = fetch_client_by_nom_prenom($conn, $nom, $prenom);
if ($client != null && $client['numclient'] != $numclient) {
    add_error("un client portant le même nom et prénom existe déjà sous le n° : {$client['numclient']}");
    write_response();
}

$success = update_client($conn, $numclient, $nom, $prenom, $tel);
if (!$success) {
    add_error("L'opération a échoué.");
    write_response();
}

$res['success'] = TRUE;
write_response();
