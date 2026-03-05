import { question } from "./input.js";

async function chooseMainMenu(): Promise<number>{

    console.log("\n==== MENU DE SERVIÇOS ====\n");
    console.log("1. CLIENTES\n");
    console.log("2. CONTAS\n")
    console.log("0. Sair\n");

    const numberChoose =  parseInt(await question("Digite a opção que deseja: "));

    return numberChoose;

}

async function chooseAccountMenu(): Promise<number>{

    console.log("\n==== MENU ====\n");
    console.log("1. Criar Conta\n");
    console.log("2. Remover Conta\n");
    console.log("3. Listar Conta\n");
    console.log("4. Transferência\n");
    console.log("5. Depósito\n");
    console.log("6. Saque\n")
    console.log("0. Sair\n");
    
    const numberChoose =  parseInt(await question("Digite a opção que deseja: "));

    return numberChoose;
}

async function chooseCustomerMenu(): Promise<number>{

    console.log("\n==== MENU ====\n");
    console.log("1. Registrar Cliente\n");
    console.log("2. Remover Cliente\n");
    console.log("3. Listar Clientes\n");
    console.log("0. Sair\n");

    const numberChoose =  parseInt(await question("Digite a opção que deseja: "));

    return numberChoose;
}

async function listCustomer(list: Array<any>): Promise<void>{

    let index = 0;

    console.log("\n==== CLIENTES ====\n");

    list.forEach(customer =>{

        index++;
        console.log(index + "-> Nome: " + customer.customerName + "| CPF: " + customer.getCpf());
        
    });

}

async function listAccount(list: Array<any>): Promise<void>{

    let index = 0;

    console.log("\n==== CONTAS ====\n");

    list.forEach(account =>{

        index++;
        console.log(index + "-> Cliente: " + account.getAccountOwner().customerName + "| Número da conta: " + account.getAccountNumber() + "| Saldo: R$" + showMoneyFormat(account.getBalance()));
        
    });
}

async function showMoneyFormat(amount: number): Promise<string>{

    if(amount < 0){
        throw new Error("Valor de quantia vazia!");
    }

    const amountFormat: string = amount.toFixed(2);

    return "Saldo: R$ " + amountFormat;

}

export default{
    chooseMainMenu,
    chooseAccountMenu,
    chooseCustomerMenu,
    listCustomer,
    listAccount,
    showMoneyFormat
}