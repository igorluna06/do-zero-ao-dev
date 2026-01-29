<?php

    require 'cachorro.php';
    require 'gato.php';
    require_once 'Animal.php';

    $meuCao = new Cachorro;
    $meuGato = new Gato;
    $meuAnimal = new Animal;

    echo "<pre>";

    print_r($meuCao);
    print_r($meuGato);

    echo "<br>";

    echo $meuCao->falar();

    echo "<br>";

    echo $meuGato->falar();

    echo "<br>";

    echo $meuAnimal->falar();


?>


