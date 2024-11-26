<?php

$nome = addslashes($_POST['nome']);
$cpf = addslashes($_POST['cpf']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);
$finalidade = addslashes($_POST['finalidade']);

$para = "raylannlopes@gmail.com";
$assunto = "Contato pelo Site";

$corpo = "Nome: " . $nome . "\n" . "CPF: " . $cpf . "\n" . "Email: " . $email . "\n" . "Telefone: " . $telefone . "\n" . "Finalidade: " . $finalidade;

$cabeca = "From: raylannlopes@gmail.com" . "\n" . "Reply-To: " . $email . "\n" . "X=Mailer: PHP/" . phpversion();

if (mail($para, $assunto, $corpo, $cabeca)) {
    echo "Email enviado com sucesso!";
} else {
    echo "O Email não pode ser enviado!";
}
