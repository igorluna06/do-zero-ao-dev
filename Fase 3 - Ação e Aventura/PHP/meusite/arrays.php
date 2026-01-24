<?php

    // O que são Arrays?
    // Arrays são estruturas de dados que armazenam múltiplos valores em uma única variável.
    // Cada valor dentro de um array é identificado por um índice numérico ou uma chave associativa.
    // Como criar um Array em PHP?

    // Sintaxe de um Array indexado

    $frutas = array("Maçã", "Banana", "Laranja", "Uva");

    // Acessando elementos do Array

    echo "Primeira fruta: " . $frutas[0] . "<br>"; // Maçã
    echo "Segunda fruta: " . $frutas[1] . "<br>";
    echo "Terceira fruta: " . $frutas[2] . "<br>";
    echo "Quarta fruta: " . $frutas[3] . "<br>";

    // Adicionando elementos ao Array

    $frutas[] = "Manga"; // Adiciona "Manga" ao final do array

    echo "Fruta adicionada: " . $frutas[4] . "<br>"; // Manga

?>