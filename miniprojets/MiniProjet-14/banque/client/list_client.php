<?php
$page = (!isset($_GET["page"])) ? 1 : intval($_GET["page"]);
$nbitems = (!isset($_GET["nbitems"])) ? 10 : intval($_GET["nbitems"]);

if ($nbitems <= 0) {
    add_error("Valeur incorrecte $nbitems pour 'nbitems'.");
    write_response();
}

$nbre_clients = fetch_nbre_clients($conn);
$nbre_pages = intdiv($nbre_clients, $nbitems) + ($nbre_clients % $nbitems != 0);

if ($page < 1 || $page > $nbre_pages) {
    add_error("Il existe $nbre_pages pages de $nbitems éléments.");
    write_response();   
}

$clients = fetch_clients($conn, $page, $nbitems);
if ($clients == null) {
    add_error("Ne peut pas trouver la liste des clients.");
    write_response();
}

$res['success'] = TRUE;
$res['clients'] = $clients;
$res['page'] = $page;
$res['nbitems'] = $nbitems;
$res['availitems'] = count($clients);
$res['nbpages'] = $nbre_pages;
$res['nbclients'] = $nbre_clients;
write_response();