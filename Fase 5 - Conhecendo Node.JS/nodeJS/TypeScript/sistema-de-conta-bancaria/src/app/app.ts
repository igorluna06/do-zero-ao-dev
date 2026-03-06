import CustomerService from "../services/CustomerService.js";
import AccountBankService from "../services/AccountBankService.js";
import consoleFormat from "../consoleView/consoleFormat.js";
import { question } from "../consoleView/input.js";


class App{

    private accountService: AccountBankService = new AccountBankService();
    private customerService: CustomerService = new CustomerService(this.accountService);

    async start(){

        while(true){

            console.clear();
            const selectOptions = await consoleFormat.chooseMainMenu();

            if(selectOptions === 0){

                console.log("Saindo...")
                break;
            }

            switch(selectOptions){

                case 1:
                    await this.startCustomerServices();
                    break;
                
                case 2:
                    await this.startAccountServices();
                    break;
            }

        }
    }

    async startCustomerServices(){

        while(true){
            console.clear();
            const selectOptions = await consoleFormat.chooseCustomerMenu();

            if(selectOptions === 0){
                break;
            }

            switch(selectOptions){

                case 1:

                try{

                    const customerName: string = await question("Nome do Cliente: ");
                    const customerCpf: string = await question("CPF: ");

                    this.customerService.saveCustomer(customerName, customerCpf);

                    console.log("Cliente registrado com sucesso!");

                }catch (Error){

                    console.log("Registro inválido!");
                }finally{

                    await question("");
                }
                       
                break;
                
                case 2:

                    consoleFormat.listCustomer(await this.customerService.takeAll());

                    try{
                        const customerCpfRemove: string = await question("CPF do Cliente: ");

                        this.customerService.delete(customerCpfRemove);

                        console.log("Cliente removido com sucesso!");
                    }
                    catch (Error)
                    {
                        console.log("Remoção inválida!");
                    }
                    finally
                    {
                        await question("");
                    }

                    break;

                case 3:

                    consoleFormat.listCustomer(this.customerService.takeAll());
                    await question("");
                    break;

                default:

                    console.log("Opção inválida!")
                    await question("");
                    break;
            }
        }
        
    }

    async startAccountServices(){

        while(true){

            console.clear();
            const selectOptions = await consoleFormat.chooseAccountMenu();

            if(selectOptions === 0){
                break;
            }

            let accountBalance: number;

            switch(selectOptions){

                case 1:

                    consoleFormat.listCustomer(this.customerService.takeAll());

                    try{
                        const customer = this.customerService.takeByCpf(await question("CPF: "));

                        this.accountService.saveAccount(customer);

                        console.log("Conta criada com sucesso!");
                    }
                    catch (Error){

                        console.log("Criação inválida!");
                    }
                    finally{

                        await question("");
                    } 
                    break;

                case 2:

                    consoleFormat.listAccount(this.accountService.takeAll());

                    try{
                        const accountNumberRemove = await question("Número da conta: ");

                        this.accountService.delete(accountNumberRemove);

                        console.log("Conta removida com sucesso!");
                    }
                    catch (Error){
                        console.log("Remoção inválida!");
                    }
                    finally{
                        await question("");
                    }

                    break;

                case 3:

                    consoleFormat.listAccount(this.accountService.takeAll());
                    await question("");
                    break;

                case 4:

                    consoleFormat.listAccount(this.accountService.takeAll());

                    try{

                        console.log("\n==== Transferência ====\n");

                        const accountNumberOrigin: string = await question("Número da conta de origem: ");
                        const accountNumberDestination: string = await question("Número da conta destinataria: ");

                        const amountTransfer: number = parseFloat(await question("Valor: R$ "));

                        this.accountService.transfer(accountNumberOrigin, accountNumberDestination, amountTransfer);
                        console.log("Transferência feita com sucesso!");
                    }
                    catch (Error){

                        console.log("Transferência inválida!");
                    }
                    finally{

                        await question("");
                    }

                    break;

                case 5:

                    consoleFormat.listAccount(this.accountService.takeAll());

                    try{

                        console.log("\n==== Depósito ====\n");

                        const accountNumberDeposit: string = await question("\nNúmero da conta: ");

                        accountBalance = this.accountService.takeByAccountNumber(accountNumberDeposit).getBalance();

                        console.log(consoleFormat.showMoneyFormat(accountBalance));

                        const amountDeposit: number = parseFloat(await question("\nValor: R$ "));

                        this.accountService.deposit(accountNumberDeposit, amountDeposit);
                        console.log("Depósito feito com sucesso!");

                    }
                    catch (Error){

                        console.log("Depósito inválido!");
                    }
                    finally{
                        
                        await question("");
                    }
                    break;

                case 6:

                    consoleFormat.listAccount(this.accountService.takeAll());

                    try{

                        console.log("\n==== Saque ====\n");

                        const accountNumberWithDraw: string = await question("\nNúmero da conta: ");

                        accountBalance = this.accountService.takeByAccountNumber(accountNumberWithDraw).getBalance();

                        console.log(consoleFormat.showMoneyFormat(accountBalance));

                        const amountWithDraw: number = parseFloat(await question("Valor: R$ "));

                        this.accountService.withdraw(accountNumberWithDraw, amountWithDraw);
                        console.log("Saque feito com sucesso!");

                    }
                    catch (Error){

                        console.log("Saque inválido!");
                    }
                    finally{

                        await question("");
                    }

                    break;

                default:

                    console.log("Opção inválida!")
                    await question("");
                    break;  
            }
        }
    }

}

export default App;