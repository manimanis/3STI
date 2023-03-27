<?php
include_once 'database.php';


$host = '127.0.0.1';
$user = 'root';
$pass = 'mysqlroot'; // '';
$base = 'banque';

$res = ['errors' => []];

function add_error($error) {
    global $res;
    $res['errors'][] = $error;
}

function write_response() {
    global $res;
    $res['success'] = count($res['errors']) == 0;
    die(json_encode($res));
}

function has_errors() {
    global $res;
    return count($res['errors']) != 0;
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

if (isPost() && $_POST['op'] == "CREATE CLIENT") {
    if (!isset($_POST['nom']) || !isset($_POST['prenom']) || !isset($_POST['tel'])) {
        add_error("Vous devez indiquer les champs : 'nom', 'prenom' et 'tel'.");
        write_response();
    }
    include_once 'create_client.php';
} else if (isGet() && $_GET['op'] == "SEARCH CLIENT") {
    if (!isset($_GET['search'])) {
        add_error("Vous devez indiquer le champ : 'search'.");
        write_response();
    }
    add_error("Not implemented yet.");
    write_response();
} else if (isGet() && $_GET['op'] == "READ CLIENT") {
    if (!isset($_GET['numclient'])) {
        add_error("Vous devez indiquer le champ : 'numclient'.");
        write_response();
    }
    include_once 'read_client.php';
} else if (isPost() && $_POST['op'] == "UPDATE CLIENT") {
    if (!isset($_POST['numclient']) || !isset($_POST['nom']) || !isset($_POST['prenom']) || !isset($_POST['tel'])) {
        add_error("Vous devez indiquer les champs : 'numclient', 'nom', 'prenom' et 'tel'.");
        write_response();
    }
    include_once 'update_client.php';
} else if (isPost() && $_POST['op'] == "DELETE CLIENT") {
    if (!isset($_POST['numclient'])) {
        add_error("Vous devez indiquer le champ : 'numclient'.");
        write_response();
    }
    include_once 'delete_client.php';
} else {
    add_error("Commande inconnue!");
    write_response();
}
