<?php
// Conexão com o banco de dados PostgreSQL
$dsn = 'postgresql://neondb_owner:TU9DB8gljdOK@ep-shy-star-a5p26rhz.us-east-2.aws.neon.tech/neondb?sslmode=require';
try {
    $pdo = new PDO($dsn);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erro ao conectar ao banco de dados: " . $e->getMessage();
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $finalidade = $_POST['finalidade'];

    // Validação dos dados
    $erros = [];
    $erros['nome'] = validarNome($nome);
    $erros['cpf'] = validarCPF($cpf);
    $erros['email'] = validarEmail($email);
    // ... validação dos demais campos

    // Verifica se há erros
    if (array_filter($erros)) {
        // Exibe as mensagens de erro para o usuário
        foreach ($erros as $campo => $mensagem) {
            echo "$campo: $mensagem<br>";
        }
    } else {
        // Se não houver erros, insere os dados no banco
        // ... (código para inserir os dados no banco)
    }
}
