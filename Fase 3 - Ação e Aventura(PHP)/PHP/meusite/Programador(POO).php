<?php

    require 'CadastroPessoa(POO).php';

    class Programador extends CadastroPessoa{

        private $linguagemFavorita;
        private $nivel;
        private $tempoAtuacao;
        private $linkGithub;

        public function setLinguagem($linguagem){
            
            $this->linguagemFavorita = $linguagem;
        }

        public function setNivel($nivel){
            
            $this->nivel = $nivel;
        }

        public function setTempoAtuacao($tempoAtuacao){
            
            $this->tempoAtuacao = $tempoAtuacao;
        }

        public function setLinkGithub($link){
            
            $this->linkGithub = $link;
        }

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

?>