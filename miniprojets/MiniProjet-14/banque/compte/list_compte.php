<?php
$numclient = intval($_GET['numclient']);
$page = (!isset($_GET["page"])) ? 1 : intval($_GET["page"]);
$nbitems = (!isset($_GET["nbitems"])) ? 10 : intval($_GET["nbitems"]);

$client = fetch_client_by_id($conn, $numclient);
if ($client == null) {
    add_error("Numéro de client incorrect.");
    write_response();
}

if ($nbitems <= 0) {
    add_error("Valeur incorrecte $nbitems pour 'nbitems'.");
    write_response();
}

$nbre_comptes = fetch_nbre_comptes($conn, $numclient);
$nbre_pages = intdiv($nbre_comptes, $nbitems) + ($nbre_comptes % $nbitems != 0);

if ($page < 1 || $page > $nbre_pages) {
    add_error("Il existe $nbre_pages pages de $nbitems éléments.");
    write_response();   
}

$comptes = fetch_comptes($conn, $numclient, $page, $nbitems);
if ($comptes == null) {
    add_error("Ne peut pas trouver la liste des comptes.");
    write_response();
}

$res['success'] = TRUE;
$res['comptes'] = $comptes;
$res['page'] = $page;
$res['nbitems'] = $nbitems;
$res['availitems'] = count($comptes);
$res['nbpages'] = $nbre_pages;
$res['nbcomptes'] = $nbre_comptes;
write_response();