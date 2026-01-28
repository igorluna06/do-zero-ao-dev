<?php

    class CadastroPessoa{

        //Atributos

        public $nome;
        public $idade;
        


        //Metodos

        public function setNome($nome){

            $this->nome = $nome;
        }

        public function setIdade($idade){

            $this->idade = $idade;
        }

        public function getNome(){

            return $this->nome;
        }

        public function getIdade(){

            return $this->idade;
        }
       

    }

?>