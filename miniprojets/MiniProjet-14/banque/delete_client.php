<?php

$numclient = intval($_POST['numclient']);

$oldclient = fetch_client_by_id($conn, $numclient);
if ($oldclient == null) {
    add_error("Le client n°$numclient est introuvable");
    write_response();
}

$success = delete_client($conn, $numclient);
if (!$success) {
    add_error("L'opération a échoué.");
    write_response();
}

$res['success'] = TRUE;
write_response();