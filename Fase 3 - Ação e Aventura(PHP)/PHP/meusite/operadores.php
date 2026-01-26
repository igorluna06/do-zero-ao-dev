<?php

    echo "<pre>"; // Formata a saída para melhor visualização.

    echo "Operadores em PHP\n";

    $a = 10;
    $b = 3;

    // Operadores Aritméticos
    echo "Soma: " . ($a + $b) . "\n"; // + operador de adição
    echo "Subtração: " . ($a - $b) . "\n"; // - operador de subtração
    echo "Multiplicação: " . ($a * $b) . "\n"; // * operador de multiplicação
    echo "Divisão: " . ($a / $b) . "\n"; // / operador de divisão
    echo "Módulo: " . ($a % $b) . "\n"; // % operador de módulo
    echo "Exponenciação: " . ($a ** $b) . "\n"; // ** operador de exponenciação
    echo "Raiz Quadrada de a: " . $a ** 0.5 . "\n"; // Raiz quadrada usando exponenciação

    // Operadores de Comparação utilizando operação ternária para exibir true/false
    echo "Igualdade: " . ($a == $b ? 'true' : 'false') . "\n"; // == operador de igualdade
    echo "Identidade: " . ($a === $b ? 'true' : 'false') . "\n"; // === operador de identidade
    echo "Diferença: " . ($a != $b ? 'true' : 'false') . "\n"; // != operador de diferença
    echo "Maior que: " . ($a > $b ? 'true' : 'false') . "\n"; // > operador de maior que
    echo "Menor que: " . ($a < $b ? 'true' : 'false') . "\n"; // < operador de menor que
    echo "Maior ou igual: " . ($a >= $b ? 'true' : 'false') . "\n"; // >= operador de maior ou igual
    echo "Menor ou igual: " . ($a <= $b ? 'true' : 'false') . "\n"; // <= operador de menor ou igual

    // Operadores Lógicos

    $x = true; 
    $y = false;
    echo "AND lógico: " . ($x && $y ? 'true' : 'false') . "\n"; // AND - e operador lógico
    echo "OR lógico: " . ($x || $y ? 'true' : 'false') . "\n"; // OR - ou operador lógico
    echo "NOT lógico: " . (!$x ? 'true' : 'false') . "\n"; // NOT - negação operador lógico
    echo "XOR lógico: " . ($x xor $y ? 'true' : 'false') . "\n"; // XOR - ou exclusivo operador lógico

    // Operadores de Atribuição
    $c = 5;
    echo "Atribuição simples: c = " . $c . "\n"; //
    $c += 3; // c = c + 3
    echo "Atribuição com adição: c += 3 => " . $c . "\n"; 
    $c -= 2; // c = c - 2
    echo "Atribuição com subtração: c -= 2 => " . $c . "\n"; 
    $c *= 4; // c = c * 4
    echo "Atribuição com multiplicação: c *= 4 => " . $c . "\n"; 
    $c /= 2; // c = c / 2
    echo "Atribuição com divisão: c /= 2 => " . $c . "\n"; 
    $c %= 3; // c = c % 3
    echo "Atribuição com módulo: c %= 3 => " . $c . "\n"; 
    $c **= 2; // c = c ** 2
    echo "Atribuição com exponenciação: c **= 2 => " . $c . "\n";

    echo "</pre>"; // Fecha a formatação da saída.



?>