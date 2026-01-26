<?php

    echo "<pre>";

    // O que são Arrays?
    // Arrays são estruturas de dados que armazenam múltiplos valores em uma única variável.
    // Cada valor dentro de um array é identificado por um índice numérico ou uma chave associativa.
    // Como criar um Array em PHP?

    // Sintaxe de um Array indexado

    $frutas = array("Maçã", "Banana", "Laranja", "Uva"); // 1º forma de criar um array
    
    $numeros = ["Um", "Dois", "Três", "Quatro"]; // 2º forma de criar um array (sintaxe curta)

    $letras = []; // 3º forma de criar um array vazio


    // Acessando elementos do Array

    echo "Primeira fruta: " . $frutas[0] . "<br>"; // Maçã
    echo "Segunda fruta: " . $frutas[1] . "<br>";
    echo "Terceira fruta: " . $frutas[2] . "<br>";
    echo "Quarta fruta: " . $frutas[3] . "<br>";

    // Adicionando elementos ao Array

    $frutas[] = "Manga"; // 1º forma de adicionar um elemento (no final do array)

    $numeros[4] = "Cinco"; // 2º forma de adicionar um elemento (especificando o índice)

    $letras[] = "A"; // Adicionando ao array vazio (índice 0)

    echo "Fruta adicionada: " . $frutas[4] . "<br>"; // Manga

    // Contando o número de elementos no Array

    $totalFrutas = count($frutas);
    echo "Total de frutas: " . $totalFrutas . "<br>"; //

    // Iterando sobre um Array usando foreach

    echo "Lista de frutas:<br>";
    foreach ($frutas as $fruta) {
        echo "- " . $fruta . "<br>";
    }

    // Funções úteis para Arrays

    // array_push() - Adiciona um ou mais elementos ao final do array
    array_push($frutas, "Abacaxi", "Melancia");
    echo "Frutas após array_push:<br>";
    foreach ($frutas as $fruta) {
        echo "- " . $fruta . "<br>";
    }

    // array_pop() - Remove o último elemento do array
    $ultimaFruta = array_pop($frutas);
    echo "Fruta removida: " . $ultimaFruta . "<br>";

    // array_shift() - Remove o primeiro elemento do array
    $primeiraFruta = array_shift($frutas);
    echo "Primeira fruta removida: " . $primeiraFruta . "<br>";

    // array_unshift() - Adiciona um ou mais elementos no início do array
    array_unshift($frutas, "Kiwi", "Pera");
    echo "Frutas após array_unshift:<br>";
    foreach ($frutas as $fruta) {
        echo "- " . $fruta . "<br>";
    }

    // array_merge() - Combina dois ou mais arrays
    $maisFrutas = array("Cereja", "Framboesa");
    $todasFrutas = array_merge($frutas, $maisFrutas);
    echo "Todas as frutas após array_merge:<br>";
    foreach ($todasFrutas as $fruta) {
        echo "- " . $fruta . "<br>";
    }

    // array_slice() - Retorna uma parte do array
    $algumasFrutas = array_slice($todasFrutas, 2, 4); // A partir do índice 2, pega 4 elementos
    echo "Algumas frutas após array_slice:<br>";
    foreach ($algumasFrutas as $fruta) {
        echo "- " . $fruta . "<br>";
    }

    // array_search() - Procura por um valor no array e retorna seu índice
    $indiceLaranja = array_search("Laranja", $todasFrutas);
    echo "Índice da Laranja: " . $indiceLaranja . "<br>";

    // array_reverse() - Inverte a ordem dos elementos no array
    $frutasInvertidas = array_reverse($todasFrutas);
    echo "Frutas invertidas:<br>";
    foreach ($frutasInvertidas as $fruta) {
        echo "- " . $fruta . "<br>";
    }

    // Min e Max de um Array
    $valores = [10, 5, 8, 20, 3];
    echo "Valor mínimo: " . min($valores) . "<br>"; //
    echo "Valor máximo: " . max($valores) . "<br>"; //

    // Ordenando Arrays

    sort($todasFrutas); // Ordena em ordem crescente
    echo "Frutas ordenadas em ordem crescente:<br>";
    foreach ($todasFrutas as $fruta) {
        echo "- " . $fruta . "<br>";
    }

    rsort($todasFrutas); // Ordena em ordem decrescente
    echo "Frutas ordenadas em ordem decrescente:<br>";
    foreach ($todasFrutas as $fruta) {
        echo "- " . $fruta . "<br>";
    }


    // Somando valores de um Array

    $somaValores = array_sum($valores);
    echo "Soma dos valores: " . $somaValores . "<br>"; //

    // Média dos valores de um Array

    $mediaValores = array_sum($valores) / count($valores);
    echo "Média dos valores: " . $mediaValores . "<br>"; //
 

    // Comparando Arrays

    $arrayA = [1, 2, 4];
    $arrayB = [1, 2, 3];

    echo "Diferenças entre arrayA e arrayB:<br>";
    $diferencas = array_diff($arrayA, $arrayB);
    foreach ($diferencas as $valor) {
        echo "- " . $valor . "<br>";
    }

    // Eliminando elementos duplicados

    $arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
    $arraySemDuplicatas = array_unique($arrayComDuplicatas);

    echo "Array sem duplicatas:<br>";
    foreach ($arraySemDuplicatas as $valor) {
        echo "- " . $valor . "<br>";
    }

    // Arrays multidimensionais

    $matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    // Acessando um elemento na matriz

    echo "Elemento na posição [1][2]: " . $matriz[1][2] . "<br>"; // 6

    // Iterando sobre uma matriz

    echo "Matriz completa:<br>";

    foreach ($matriz as $linha) {
        foreach ($linha as $elemento) {
            echo $elemento . " ";
        }
        echo "<br>";
    }

    // Iterando em um arrays com o for

    echo "Lista de frutas usando for:<br>";
    for ($i = 0; $i < count($frutas); $i++)
    {
        echo "- " . $frutas[$i] . "<br>";
    }

?>