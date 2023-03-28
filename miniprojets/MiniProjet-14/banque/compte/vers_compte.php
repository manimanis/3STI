<?php

$numcompte = $_POST['numcompte'];
$montant = doubleval($_POST['montant']);

$compte = fetch_compte_by_num_compte($conn, $numcompte);
if ($compte == null) {
    add_error("Numéro de compte incorrect '$numcompte'.");
    write_response();
}

if ($montant <= 0) {
    add_error("Le montant doit être positif.");
    write_response();
}

$success = insert_operation($conn, $numcompte, 'VERS', date('y-m-d H:i:s'), $montant);
if (!$success) {
    add_error("Ne peut pas déposer la somme de '$montant' dans le compte '$numcompte'");
    write_response();
}

$res['success'] = $success;
$res['compte'] = $compte;
$res['solde'] = solde_compte($conn, $numcompte);
write_response();