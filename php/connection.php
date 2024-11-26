<?php


$usuario = 'root';
$senha = 'usbw';
$dbname = 'cadastro-nova-serrana';
$host = '186.195.143.1;port=3327';

try {

    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $usuario, $senha);
} catch (PDOException $e) {
    echo $e->getMessage();
}
