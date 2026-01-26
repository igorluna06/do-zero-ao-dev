<?php

    echo "Tipos de dados em PHP\n";

    echo "<pre>"; // Formata a saída para melhor visualização.

    echo gettype(42) . "\n"; // integer
    echo gettype(3.14) . "\n"; // double
    echo gettype("Olá, Mundo!") . "\n"; // string
    echo gettype(true) . "\n"; // boolean
    echo gettype(null) . "\n"; // NULL
    echo gettype([1, 2, 3, 4, 5]) . "\n"; // array



?>