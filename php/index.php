<?php
/*
$servidor	= "localhost";
$usuario	= "root";
$senha		= "usbw";
$dbname		= "nserrana";

/$conn = new PDO($servidor, $usuario, $senha, $dbname,array(PDO::ATTR_PERSISTENT => true)) or die("Connection Off: " . $conn->connect_error);
*/
$conn = new PDO('mysql:host=186.195.143.1;port=3327;dbname=cadastro-nova-serrana', 'root', 'usbw', array(PDO::ATTR_PERSISTENT => true)) or die("Connection Off: " . $conn->connect_error);
