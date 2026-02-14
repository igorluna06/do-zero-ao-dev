export class Conta{

    saldo = 0;
    limiteNegativo = -500;
    nomeUsuario = "";
    cpf = "";
    senha = "";
    extrato = [];

    constructor(nome,cpf,senha){

        this.nomeUsuario = nome;
        this.cpf = cpf;
        this.senha = senha;
        
    }

    getSaldo(){

        return this.saldo;
    }

    getNome(){

        const separadorNome = this.nomeUsuario.split(" ");

        return separadorNome[0];
    }

    deposito(valorDepositado){

        const valorConvertidoD = Number(valorDepositado);

        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2,'0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2,'0');
        const ano = dataAtual.getFullYear();

        if(valorConvertidoD < 1 ) return false;

        this.saldo += valorConvertidoD;

        let movimentacao = {

            data: `${dia}/${mes}/${ano}`,
            tipo: "Depósito",
            valor: valorConvertidoD
        }
        
        this.extrato.push(movimentacao);

        return true;

    }

    saque(valorSacado){

        const valorConvertidoS = Number(valorSacado);

        const dataAtual = new Date();

        const dia = String(dataAtual.getDate()).padStart(2,'0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2,'0');
        const ano = dataAtual.getFullYear();

        if((this.saldo - valorConvertidoS) < this.limiteNegativo || valorConvertidoS < 1 ) return false;

        this.saldo -= valorConvertidoS;

        let movimentacao = {

            data: `${dia}/${mes}/${ano}`,
            tipo: "Saque",
            valor: valorConvertidoS
        }
        
        this.extrato.push(movimentacao);

        return true;

    }

    getExtrato(){

        return this.extrato;
    }
}

