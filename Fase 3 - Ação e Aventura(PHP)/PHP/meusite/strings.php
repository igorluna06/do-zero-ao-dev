<?php

    echo "<pre>";

    // O que são Strings?
    // Strings são sequências de caracteres usadas para representar texto em PHP.
    // Elas podem ser definidas usando aspas simples (' ') ou aspas duplas (" ").
    // Como criar uma String em PHP?

    $mensagem1 = "Olá, Mundo!"; // Usando aspas duplas
    $mensagem2 = 'Bem-vindo ao PHP!'; // Usando aspas simples

    // Concatenando Strings

    $nome = "João";
    $saudacao = "Olá, " . $nome . "!"; // Usando o operador de concatenação (.)
    echo $saudacao . "<br>"; // Olá, João!

    // Interpolação de Strings (apenas com aspas duplas)

    $idade = 25;
    $info = "Meu nome é $nome e eu tenho $idade anos.";
    echo $info . "<br>"; // Meu nome é João e eu tenho 25 anos.

    // Funções úteis para Strings

    // strlen() - Retorna o comprimento da string
    $tamanhoMensagem = strlen($mensagem1);
    echo "Tamanho da mensagem1: " . $tamanhoMensagem . "<br>"; // 13

    // strtoupper() - Converte a string para maiúsculas
    $mensagemMaiuscula = strtoupper($mensagem2);
    echo "Mensagem em maiúsculas: " . $mensagemMaiuscula . "<br>"; // BEM-VINDO AO PHP!

    // strtolower() - Converte a string para minúsculas
    $mensagemMinuscula = strtolower($mensagem2);
    echo "Mensagem em minúsculas: " . $mensagemMinuscula . "<br>"; // bem-vindo ao php!

    // substr() - Retorna uma parte da string
    $parteMensagem = substr($mensagem1, 5, 5); // Começa no índice 5 e pega 5 caracteres
    echo "Parte da mensagem1: " . $parteMensagem . "<br>"; // , Mun

    // str_replace() - Substitui parte da string por outra
    $mensagemSubstituida = str_replace("Mundo", "PHP", $mensagem1);
    echo "Mensagem substituída: " . $mensagemSubstituida . "<br>"; // Olá, PHP!

    // strrev() - Inverte a string
    $mensagemInvertida = strrev($mensagem1);
    echo "Mensagem invertida: " . $mensagemInvertida . "<br>"; // !odnuM ,álO

    //strpos() - Encontra a posição da primeira ocorrência de uma substring

    $posicaoPHP = strpos($mensagem2, "PHP");
    echo "Posição de 'PHP' na mensagem2: " . $posicaoPHP . "<br>"; // 15

    // trim() - Remove espaços em branco do início e do fim da string
    $mensagemComEspacos = "   Olá, Mundo!   ";
    $mensagemTrimmed = trim($mensagemComEspacos);
    echo "Mensagem sem espaços: '" . $mensagemTrimmed . "'<br>"; // 'Olá, Mundo!'


?>