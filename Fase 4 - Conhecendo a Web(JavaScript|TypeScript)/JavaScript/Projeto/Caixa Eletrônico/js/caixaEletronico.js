import { Banco } from "./models/banco.js";

export class CaixaEletronico{

    banco = new Banco();

    login(cpf, senha){

        const loginDigitado = this.banco.autenticacao(cpf, senha);

        if(loginDigitado === false) return false;

        return true;

    }

    logout(){

        this.banco.logout();

    }

    sacar(valor){

        if(!this.banco.contaAtiva) return false;

        const saque = this.banco.contaAtiva.saque(valor);

        this.banco.salvarContas();

        return saque;

    }

    depositar(valor){

        if(!this.banco.contaAtiva) return false;

        const deposito = this.banco.contaAtiva.deposito(valor);

        this.banco.salvarContas();

        return deposito;

    }


}