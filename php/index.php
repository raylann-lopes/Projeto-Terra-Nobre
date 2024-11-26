<?php

require("connection.php");

if (isset($_POST)) {

    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $finalidade = $_POST['finalidade'];


    $query = "INSERT INTO cliente (nome, cpf, email, telefone, finalidade) VALUES ('$nome', '$sobrenome', '$email', '$telefone', '$finalidade')";

    $stmt = $pdo->prepare($query);
    $stmt->execute();

    header("Location: index.html?criado=sucesso");
}
