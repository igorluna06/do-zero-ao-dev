import { Banco } from "./models/banco";

export class CaixaEletronico{

    banco = new Banco();

    contaLogada = null;

    login(cpf, senha){

        const loginDigitado = this.banco.autenticacao(cpf, senha);

        if(!loginDigitado) return false;

        this.contaLogada = loginDigitado;

        return true;

    }

    logout(){

        this.contaLogada = null;

    }

    sacar(valor){

        if(this.contaLogada === null) return false;

        const saque = this.contaLogada.saque(valor);

        return saque;

    }

    depositar(valor){

        if(this.contaLogada === null) return false;

        const deposito = this.contaLogada.deposito(valor);

        return deposito;

    }


}