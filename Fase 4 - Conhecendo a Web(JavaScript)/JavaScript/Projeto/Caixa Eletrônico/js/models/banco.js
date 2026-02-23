import { Conta } from "./conta.js";

export class Banco{

    listaContas = [];

    contaAtiva = null;

    constructor(){

        this.listaContas = [];

        const contasSalvas = localStorage.getItem("contas");

        if(contasSalvas){

            const contasSalvasConvertidas = JSON.parse(contasSalvas);

            contasSalvasConvertidas.forEach(conta => {
                const novaConta = new Conta(conta.nomeUsuario, conta.cpf, conta.senha);

                novaConta.saldo = conta.saldo;
                novaConta.limiteNegativo = conta.limiteNegativo;
                novaConta.extrato = conta.extrato;

                this.listaContas.push(novaConta);
            });
        }

        const cpfSalvo = localStorage.getItem("contaAtiva");

        if(cpfSalvo){

            const conta = this.buscarConta(cpfSalvo);
            if(conta){

                this.contaAtiva = conta;
            }
        }
    }

    criarConta(nome, cpf, senha){

        if(nome === "" || cpf === "" || senha === "") return false;

        if(cpf.length != 11) return false;

        if(this.listaContas.some(conta => conta.cpf === cpf)) return false;

        const contaCriada = new Conta(nome, cpf, senha);

        this.listaContas.push(contaCriada);

        this.salvarContas();
        
        return true;
    }

    buscarConta(cpf){

        const contaEncontrada = this.listaContas.find(conta => conta.cpf === cpf);

        if(contaEncontrada) return contaEncontrada;

        return false;
    }

    autenticacao(cpf,senhaDigitada){

        const contaAutenticacao = this.buscarConta(cpf);

        if(contaAutenticacao === false) return false;

        if(contaAutenticacao.senha === senhaDigitada){

            this.contaAtiva = contaAutenticacao;

            localStorage.setItem("contaAtiva", cpf);

            return contaAutenticacao;
        };

        return false;

    }

    logout(){

        this.contaAtiva = null;
        localStorage.removeItem("contaAtiva");

    }

    salvarContas(){

        const contasJSON = JSON.stringify(this.listaContas);
        localStorage.setItem("contas", contasJSON);
    }


}

