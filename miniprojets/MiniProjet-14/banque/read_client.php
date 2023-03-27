<?php
$numclient = intval($_GET['numclient']);

$client = fetch_client_by_id($conn, $numclient);

if ($client == null) {
    add_error("Aucun client ayant le n°$numclient n'est trouvé.");
    write_response();
}

$res['client'] = $client;
write_response();