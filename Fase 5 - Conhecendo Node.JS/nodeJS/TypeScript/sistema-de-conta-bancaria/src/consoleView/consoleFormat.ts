import { question } from "./input.js";

async function mainMenu(): Promise<number>{

    console.log("==== MENU ====\n");
    console.log("1. Registrar Cliente\n");
    console.log("2. Remover Cliente\n");
    console.log("3. Listar Clientes\n");
    console.log("4. Criar Conta\n");
    console.log("5. Remover Conta\n");
    console.log("6. Listar Conta\n");
    console.log("7. Transferência\n");
    console.log("8. Depósito\n");
    console.log("9. Saque\n")
    console.log("0. Sair\n");
    
    const numberChoose =  parseInt(await question("Digite a opção que deseja: "));

    return numberChoose;
}

async function listCustomer(list: Array<any>): Promise<undefined>{

    if(!list){
        console.log("Lista de Clientes vazia!");
        return undefined;
    }

    let index = 0;

    list.forEach(customer =>{

        index++;
        console.log(index + "-> Nome: " + customer.customerName() + " CPF: " + customer.getCpf());
        
    });

}

async function listAccount(list: Array<any>): Promise<undefined>{

    if(!list){
        console.log("Lista de Contas vazia!");
        return undefined;
    }

    let index = 0;

    list.forEach(account =>{

        index++;
        console.log(index + "-> Cliente: " + account.getAccountOwner().customerName() + " Número da conta: " + account.getAccountNumber());
        
    });
}

export default {
    mainMenu,
    listCustomer,
    listAccount
}