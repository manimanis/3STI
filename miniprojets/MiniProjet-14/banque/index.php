<?php
include_once 'database.php';


$host = '127.0.0.1';
$user = 'root';
$pass = 'mysqlroot'; // '';
$base = 'banque';

$res = ['errors' => []];

function add_error($error)
{
    global $res;
    $res['errors'][] = $error;
}

function write_response()
{
    global $res;
    $res['success'] = count($res['errors']) == 0;
    die(json_encode($res));
}

function has_errors()
{
    global $res;
    return count($res['errors']) != 0;
}

function missingFields($type, ...$fields)
{
    $var = $type == 'GET' ? $_GET : $_POST;
    $m = [];
    foreach ($fields as $field) {
        if (!isset($var[$field])) {
            $m[] = $field;
        }
    }
    return $m;
}

function addErrorMissingFields($mf)
{
    if (count($mf) > 0) {
        add_error("Vous devez indiquer les champs : '" . implode("', '", $mf) . "'.");
        write_response();
    }
}

$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
    add_error("La connexion a échoué : " . $conn->connect_error);
    write_response();
}

if (create_database($conn, $base) !== TRUE) {
    add_error("Erreur lors de la création de la base de données : " . $base);
    write_response();
}
$conn->select_db($base);

if (create_tables($conn) !== TRUE) {
    add_error("Erreur lors de la création des tables a échoué.");
    write_response();
}

include_once 'validation.php';

if ((isPost() && !isset($_POST['op'])) || (isGet() && !isset($_GET['op']))) {
    add_error("Veuillez définir un champ 'op' pour votre requête.");
    add_error("Clients : 'CREATE CLIENT', 'SEARCH CLIENT', 'READ CLIENT', 'UPDATE CLIENT', 'DELETE CLIENT'");
    write_response();
}

$op = isPost() ? $_POST['op'] : $_GET['op'];

if (isGet() && $op == "LIST CLIENT") {
    include_once 'client/list_client.php';
} else if (isPost() && $op == "CREATE CLIENT") {
    $mf = missingFields('POST', 'nom', 'prenom', 'tel');
    addErrorMissingFields($mf);
    include_once 'client/create_client.php';
} else if (isGet() && $op == "SEARCH CLIENT") {
    $mf = missingFields('GET', 'search');
    addErrorMissingFields($mf);
    add_error("Not implemented yet.");
    write_response();
} else if (isGet() && $op == "READ CLIENT") {
    $mf = missingFields('GET', 'numclient');
    addErrorMissingFields($mf);
    include_once 'client/read_client.php';
} else if (isPost() && $op == "UPDATE CLIENT") {
    $mf = missingFields('GET', 'numclient', 'nom', 'prenom', 'tel');
    addErrorMissingFields($mf);
    include_once 'client/update_client.php';
} else if (isPost() && $op == "DELETE CLIENT") {
    $mf = missingFields('GET', 'numclient');
    addErrorMissingFields($mf);
    include_once 'client/delete_client.php';
} else if (isPost() && $op == "CREATE COMPTE") {
    $mf = missingFields('POST', 'numclient', 'solde');
    addErrorMissingFields($mf);
    include_once 'compte/create_compte.php';
} else if (isGet() && $op == "LIST COMPTE") {
    $mf = missingFields('GET', 'numclient');
    addErrorMissingFields($mf);
    include_once 'compte/list_compte.php';
} else if (isPost() && $op == "VERS COMPTE") {
    $mf = missingFields('POST', 'numcompte', 'montant');
    addErrorMissingFields($mf);
    include_once 'compte/vers_compte.php';
} else if (isPost() && $op == "RETR COMPTE") {
    $mf = missingFields('POST', 'numcompte', 'montant');
    addErrorMissingFields($mf);
    include_once 'compte/retr_compte.php';
} else {
    add_error("Commande inconnue!");
    add_error("Clients : 'CREATE CLIENT', 'SEARCH CLIENT', 'READ CLIENT', 'UPDATE CLIENT', 'DELETE CLIENT'.");
    write_response();
}
