<?php
function validarNome($nome)
{
    if (empty($nome) || strlen($nome) < 3) {
        return "O nome deve ter pelo menos 3 caracteres.";
    }
    return true;
}

function validarCPF($cpf)
{
    // Remove caracteres não numéricos
    $cpf = preg_replace('/[^0-9]/', '', $cpf);

    // Verifica se o CPF possui 11 dígitos
    if (strlen($cpf) != 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais
    if (preg_match('/(\d)\1{10}/', $cpf)) {
        return false;
    }

    // Calcula os dígitos verificadores
    for ($t = 9; $t < 11; $t++) {
        for ($d = 0, $i = 0; $i < $t; $i++) {
            $d += $cpf[$i] * (($t + 1) - $i);
        }
        $d = ((10 * $d) % 11) % 10;
        if ($cpf[$t] != $d) {
            return false;
        }
    }

    return true;
}

function validarEmail($email)
{
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return "O email informado é inválido.";
    }

    function validarTelefone($telefone)
    {
        // Validação básica de número de telefone (ajuste o padrão conforme necessário)
        if (!preg_match('/^\(\d{2}\)\s9\d{4}-\d{4}$/', $telefone)) {
            return "O número de telefone está em formato inválido. Exemplo: (11) 91234-5678";
        }
        return true;
    }
}

// ... outras funções de validação para os demais campos