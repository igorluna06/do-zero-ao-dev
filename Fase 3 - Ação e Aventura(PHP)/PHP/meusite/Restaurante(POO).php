<?php

    require 'Local(POO).php';

    class Restaurante extends Local{

        public $tipoComida;
        public $telefone;

        public function __construct($nome, $numero, $comida, $telefone){

            $this->nomeLocal = $nome;
            $this->numeroDoLocal = $numero;
            $this->tipoComida = $comida;
            $this->telefone = $telefone;

        }
    }

?>