<?php
//$conn = new PDO('mysql:host=186.195.143.1;port=3327;dbname=cadastro-nova-serrana', 'root', 'usbw');

$conn = new PDO('mysql:host=186.195.143.1;port=3327;dbname=cadastro-nova-serrana','root','usbw',array(PDO::ATTR_PERSISTENT => true)) or die("Connection Off: " . $conn->connect_error);



/*$usuario = 'root';
$senha = 'usbw';
$dbname = 'cadastro-nova-serrana';
$host = '186.195.143.1;port=3327';

try {

    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $usuario, $senha);
} catch (PDOException $e) {
    echo $e->getMessage();
}
    */
