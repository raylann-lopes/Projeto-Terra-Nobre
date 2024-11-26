<?php
/*
$servidor	= "localhost";
$usuario	= "root";
$senha		= "usbw";
$dbname		= "nserrana";

/$conn = new PDO($servidor, $usuario, $senha, $dbname,array(PDO::ATTR_PERSISTENT => true)) or die("Connection Off: " . $conn->connect_error);
*/
$conn = pg_connect("host=localhost port=5432 dbname=nova-serrana user=postgres password=2204");
