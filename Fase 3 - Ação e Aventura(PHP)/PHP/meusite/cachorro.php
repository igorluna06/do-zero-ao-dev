<?php

    require_once 'Animal.php';

    class Cachorro extends Animal{

        public $raca;
        public $idade;

        public function falar(){

            return "AUAU";
        }
    }

?>



