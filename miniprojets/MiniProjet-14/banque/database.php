<?php

function create_database(mysqli $conn, string $base)
{
    $sql = "CREATE DATABASE IF NOT EXISTS $base;";
    return $conn->query($sql) === TRUE;
}

function table_list(mysqli $conn)
{
    $sql = "SHOW TABLES;";
    $res = $conn->query($sql);
    $tables = [];
    if (!$res) {
        return $tables;
    }
    foreach ($res->fetch_all(MYSQLI_NUM) as $table) {
        $tables[] = $table[0];
    };
    return $tables;
}

function create_tables(mysqli $conn)
{
    $tables = [
        "clients" => "create_table_clients",
        "comptes" => "create_table_comptes",
        "operations" => "create_table_operations"
    ];
    $tl = table_list($conn);
    $success = TRUE;
    foreach ($tables as $table => $func) {
        if (!in_array($table, $tl)) {
            $success = $success && $func($conn);
        }
        if (!$success) {
            break;
        }
    }
    return $success;
}

function create_table_comptes(mysqli $conn)
{
    $sql = "CREATE TABLE comptes (
        numcompte CHAR(10) NOT NULL PRIMARY KEY,
        numclient INT NOT NULL,
        FOREIGN KEY (numclient) REFERENCES clients (numclient) 
          ON UPDATE CASCADE ON DELETE CASCADE
    );";
    return $conn->query($sql) === TRUE;
}

function create_table_clients(mysqli $conn)
{
    $sql = "CREATE TABLE clients (
        numclient INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        nom VARCHAR(32) NOT NULL,
        prenom VARCHAR(32) NOT NULL,
        tel VARCHAR(16)
    );";
    return $conn->query($sql) === TRUE;
}

function create_table_operations(mysqli $conn)
{
    $sql = "CREATE TABLE operations (
        numcompte CHAR(10) NOT NULL,
        operation CHAR(4) NOT NULL CHECK(operation IN ('CREA', 'RETR', 'VERS', 'CLOT')),
        dateop DATETIME NOT NULL DEFAULT NOW(),
        numop INT NOT NULL DEFAULT 1,
        montant DOUBLE NOT NULL DEFAULT 0,
        PRIMARY KEY (numcompte, operation, dateop, numop),
        FOREIGN KEY (numcompte) REFERENCES comptes (numcompte)
          ON UPDATE CASCADE ON DELETE CASCADE
    );";
    return $conn->query($sql) === TRUE;
}

function isPost()
{
    return $_SERVER['REQUEST_METHOD'] == 'POST';
}

function isGet()
{
    return $_SERVER['REQUEST_METHOD'] == 'GET';
}

function fetch_client_by_nom_prenom(mysqli $conn, string $nom, string $prenom)
{
    $sql = "SELECT * FROM clients WHERE nom = ? AND prenom = ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([$nom, $prenom])) {
        return $st->get_result()->fetch_assoc();
    }
    return null;
}

function fetch_client_by_id(mysqli $conn, int $id)
{
    $sql = "SELECT * FROM clients WHERE numclient = ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([$id])) {
        return $st->get_result()->fetch_assoc();
    }
    return null;
}

function fetch_nbre_clients(mysqli $conn) {
    $sql = "SELECT COUNT(*) AS nbre FROM clients;";
    $st = $conn->prepare($sql);
    if ($st->execute()) {
        return $st->get_result()->fetch_assoc()['nbre'];
    }
    return null;
}

function fetch_clients(mysqli $conn, int $page, int $nbitems) {
    $sql = "SELECT * FROM clients LIMIT ?, ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([($page - 1) * $nbitems, $nbitems])) {
        return $st->get_result()->fetch_all(MYSQLI_ASSOC);
    }
    return null;
}

function insert_client(mysqli $conn, string $nom, string $prenom, string $tel)
{
    $sql = "INSERT INTO clients (nom, prenom, tel) VALUES (?, ?, ?);";
    $st = $conn->prepare($sql);
    if ($st->execute([$nom, $prenom, $tel])) {
        return $conn->insert_id;
    }
    return -1;
}

function update_client(mysqli $conn, int $numclient, string $nom, string $prenom, string $tel)
{
    $sql = "UPDATE clients SET nom = ?, prenom = ?, tel = ? WHERE numclient = ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([$nom, $prenom, $tel, $numclient])) {
        return TRUE;
    }
    return FALSE;
}

function delete_client(mysqli $conn, int $numclient)
{
    $sql = "DELETE FROM clients WHERE numclient = ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([$numclient])) {
        return TRUE;
    }
    return FALSE;
}

function fetch_nbre_comptes(mysqli $conn, int $numclient)
{
    $sql = "SELECT COUNT(*) AS NBRE FROM comptes WHERE numclient = ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([$numclient])) {
        return $st->get_result()->fetch_assoc()['NBRE'];
    }
    return 0;
}

function fetch_comptes(mysqli $conn, int $numclient, int $page = 1, int $nbitems = 10) {
    $sql = "SELECT * FROM comptes WHERE numclient = ? LIMIT ?, ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([$numclient, ($page - 1) * $nbitems, $nbitems])) {
        return $st->get_result()->fetch_all(MYSQLI_ASSOC);
    }
    return null;
}

function fetch_compte_by_num_compte(mysqli $conn, string $numcompte) {
    $sql = "SELECT *
    FROM comptes AS co 
        INNER JOIN clients AS cl ON co.numclient = cl.numclient
    WHERE co.numcompte = ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([$numcompte])) {
        return $st->get_result()->fetch_assoc();
    } else {
        add_error($st->error);
    }
    return null;
}

function insert_compte(mysqli $conn, int $numclient)
{
    $nbre = fetch_nbre_comptes($conn, $numclient);
    $numcompte = sprintf("%05d%05d", $numclient, $nbre + 1);
    $sql = "INSERT INTO comptes (numcompte, numclient) VALUES (?, ?);";
    $st = $conn->prepare($sql);
    if ($st->execute([$numcompte, $numclient])) {
        return $numcompte;
    }
    return '';
}

function insert_operation(mysqli $conn, string $numcompte, string $operation, string $dateop, float $montant)
{
    $sql = "INSERT INTO operations (numcompte, operation, dateop, numop, montant) 
    SELECT ?, ?, ?, (COUNT(*)+1), ? 
    FROM operations 
    WHERE numcompte = ? AND operation = ? AND dateop = ?";
    $st = $conn->prepare($sql);
    return $st->execute([$numcompte, $operation, $dateop, $montant, $numcompte, $operation, $dateop]);
}

function solde_compte(mysqli $conn, string $numcompte)
{
    $sql = "SELECT SUM(IF(operation = 'RETR',-montant, montant)) AS solde 
    FROM operations
    WHERE numcompte = ?;";
    $st = $conn->prepare($sql);
    if ($st->execute([$numcompte])) {
        return $st->get_result()->fetch_assoc()['solde'];
    }
    return 0.0;
}

function fetch_last_operations(mysqli $conn, string $numcompte, int $nbreops = 10) {

}
