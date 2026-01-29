<?php

    require_once 'Animal.php';

    class Gato extends Animal{

        public $raca;
        public $idade;

        public function falar(){

            return "MIAU";
        }
    }

?>


