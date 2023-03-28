<?php

$numclient = intval($_POST['numclient']);
$solde = doubleval($_POST['solde']);

$client = fetch_client_by_id($conn, $numclient);
if ($client == null) {
    add_error("Numéro de client incorrect.");
    write_response();
}

if ($solde <= 0) {
    add_error("Le solde initial doit être positif.");
    write_response();
}

$numcompte = insert_compte($conn, $numclient);
if ($numcompte == '') {
    add_error("La création du compte a échoué.");
    write_response();
}

$success = insert_operation($conn, $numcompte, 'CREA', date('y-m-d H:i:s'), $solde);
if (!$success) {
    add_error("Ne peut pas déposer la somme de '$solde' dans le compte '$numcompte'");
    write_response();
}

$res['success'] = $success;
$res['numcompte'] = $numcompte;
write_response();
