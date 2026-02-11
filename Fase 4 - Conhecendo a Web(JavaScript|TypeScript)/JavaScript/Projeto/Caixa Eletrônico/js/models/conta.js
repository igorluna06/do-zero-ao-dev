class conta{

    saldo = 0;
    limiteNegativo = -500;
    cpf = "";
    senha = "";
    extrato = [];

    constructor(cpf,senha){

        this.cpf = cpf;
        this.senha = senha;
    }

    getSaldo(){

        return this.saldo;
    }

    deposito(valorDepositado){

        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2,'0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2,'0');
        const ano = dataAtual.getFullYear();

        if(valorDepositado < 1 ) return false;

        this.saldo += valorDepositado;

        let movimentacao = {

            data: `${dia}/${mes}/${ano}`,
            tipo: "Depósito",
            valor: valorDepositado
        }
        
        this.extrato.push(movimentacao);

    }

    saque(valorSacado){

        const dataAtual = new Date();

        const dia = String(dataAtual.getDate()).padStart(2,'0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2,'0');
        const ano = dataAtual.getFullYear();

        if((this.saldo - valorSacado) < this.limiteNegativo || valorSacado < 1 ) return false;

        this.saldo -= valorSacado;

        let movimentacao = {

            data: `${dia}/${mes}/${ano}`,
            tipo: "Saque",
            valor: valorSacado
        }
        
        this.extrato.push(movimentacao);

    }

    getExtrato(){

        return this.extrato;
    }
}

