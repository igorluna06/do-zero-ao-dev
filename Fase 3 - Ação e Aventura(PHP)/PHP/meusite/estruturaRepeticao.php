<?php

    echo "<pre>";

    // While

    $numero = 10;

    while($numero > 1){
        
        $numero --;
        echo "numero = ".$numero."<br>";
    
    }

    echo "Finalizou";

    // do while

    $numero1 = 12;

    do{
        $numero1--;
        echo "numero = ".$numero1."<br>";
    }while($numero1 > 1);

    echo "Finalizou";

    // For

    $numero2 = 15;

    for($numero2; $numero2 > 1; $numero2--){

        echo "numero = ".$numero2."<br>";
    }

    echo "Finalizou";

    // Foreach

    $arrayNomes = array("Ana", "Maria", "João", "Pedro");

    foreach($arrayNomes as $nome){

        echo "Nome: ".$nome."<br>";
    }

    echo "Finalizou";

    

?>