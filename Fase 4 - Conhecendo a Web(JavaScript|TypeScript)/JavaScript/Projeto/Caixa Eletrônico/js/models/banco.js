import { Conta } from "./conta.js";

export class Banco{

    listaContas = [];

    criarConta(nome, cpf, senha){

        const cpfConvertido = String(cpf);

        if(cpfConvertido.length != 11) return false;

        if(this.listaContas.some(conta => conta.cpf === cpfConvertido)) return false;

        const contaCriada = new Conta(nome, cpfConvertido, senha);

        this.listaContas.push(contaCriada);
        
        return true;
    }

    buscarConta(cpf){

        const cpfConvertido = String(cpf);

        const contaEncontrada = this.listaContas.find(conta => conta.cpf === cpfConvertido);

        if(!contaEncontrada) return false;

        return contaEncontrada;
    }

    autenticacao(cpf,senhaDigitada){

        const contaAutenticacao = this.buscarConta(cpf);

        if(contaAutenticacao === false) return false;

        if(contaAutenticacao.senha === senhaDigitada) return contaAutenticacao;

        return false;

    }


}

