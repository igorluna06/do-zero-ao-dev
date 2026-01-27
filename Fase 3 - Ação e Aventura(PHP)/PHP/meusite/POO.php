<?php

    

    class CadastroPessoa{

        //Atributos

        public $nome;
        public $idade;
        public $email;
        public $cpf;
        public $login;
        public $senha;

        

        //Metodos

        public function getNome(){

            return $this->nome;
        }

        public function getIdade(){

            return $this->idade;
        }

        public function getEmail(){

            return $this->email;
        }

        

    }

    class Programador extends CadastroPessoa{

        public $linguagemFavorita;
        public $nivel;
        public $tempoAtuacao;
        public $linkGithub;

        public function getLinguagemFavorita(){

            return $this->linguagemFavorita;
        }

        public function getNivel(){

            return $this->nivel;
        }

        public function getTempoAtuacao(){

            return $this->tempoAtuacao;
        }

        public function getLinkGithub(){

            return $this->linkGithub;
        }
    }

    $novoProgramador = new Programador;

    $novoProgramador->nome = "Igor";
    $novoProgramador->idade = 20;
    $novoProgramador->email = "teste@gmail.com";
    $novoProgramador->linguagemFavorita = "Java";
    $novoProgramador->nivel = "Estagiario";
    $novoProgramador->tempoAtuacao = "0 anos";
    $novoProgramador->linkGithub = "https://github.com/igorluna06";


    echo $novoProgramador->getNome();

    echo "<br>";

    echo $novoProgramador->getIdade();

    echo "<br>";

    echo $novoProgramador->getEmail();

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




?>