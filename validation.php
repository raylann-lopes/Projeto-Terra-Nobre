<?php
include_once("connection.php");
$table = "cliente";
$chaves  = '';
$valores = '';
$chv_val = '';
$email = $_POST['email'];
$telefone = $_POST['telefone'];

//Verifica se tem um email para pesquisa

$stmt = $conn->prepare("SELECT * FROM $table WHERE email = '" . $email . "' OR telefone = '" . $telefone . "'");
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_NUM);

if ($row[3] == $email) {
    echo 1;
} else if ($row[4] == $telefone) {
    echo 2;
} else {
    foreach ($_POST as $key => $value) {
        $chaves .= $key . ",";
        $valores .= "'$value'" . ",";
    }
    $key_ins = substr($chaves, 4, -1);
    $val_ins = substr($valores, 6, -1);
    $stmt = $conn->prepare("INSERT INTO $table ($key_ins) VALUES ($val_ins)");
    $stmt->execute();
}