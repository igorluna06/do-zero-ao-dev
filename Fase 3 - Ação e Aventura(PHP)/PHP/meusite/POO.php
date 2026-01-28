<?php

    ini_set('display_errors',1);
    ini_set('display_startup_errors',1);
    error_reporting(E_ALL);

    require 'Programador(POO).php';
    require 'Restaurante(POO).php';

    $novoProgramador = new Programador;

    $novoProgramador->setNome("Igor");
    $novoProgramador->setIdade(20);
    $novoProgramador->setLinguagem("PHP");
    $novoProgramador->setNivel("Estagiario");
    $novoProgramador->setTempoAtuacao("0 anos");
    $novoProgramador->setLinkGithub("https://github.com/igorluna06");

    echo $novoProgramador->getNome();

    echo "<br>";

    echo $novoProgramador->getIdade();

    echo "<br>";
    
    echo $novoProgramador->getLinguagemFavorita();

    echo "<br>";

    echo $novoProgramador->getNivel();

    echo "<br>";

    echo $novoProgramador->getTempoAtuacao();

    echo "<br>";

    echo $novoProgramador->getLinkGithub();

    echo "<br>";

    echo "<pre>";

    print_r($novoProgramador);

    echo "<br>";

    $novoRestaurante = new Restaurante("Restaurante Sapporo", "114", "Japonesa", "33 333333333");

    print_r($novoRestaurante);

    echo "<pre>";




?>