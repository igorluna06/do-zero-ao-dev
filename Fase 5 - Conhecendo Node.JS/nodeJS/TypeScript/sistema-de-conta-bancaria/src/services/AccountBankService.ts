import AccountBankRepository from "../repository/AccountBankRepository.js";
import Customer from "../models/Customer.js";
import valueGenerator from "../utils/valueGenerator.js";
import AccountBank from "../models/AccountBank.js";
import amountValidator from "../utils/validators/amountValidator.js";
import accountNumberValidator from "../utils/validators/accountNumberValidator.js";
import cpfValidator from "../utils/validators/cpfValidator.js";

class AccountBankService{

    private accountBankRepository: AccountBankRepository= new AccountBankRepository();

    saveAccount(customer: Customer){

        if(this.accountBankRepository.findByOwnerCpf(customer.getCpf())?.length === 0){
            const accountNumber: string = valueGenerator.accountNumberGenerator();

            if(this.accountBankRepository.findByAccountNumber(accountNumber)){
            throw new Error("Conta já existe!");
            }

            const accountBank: AccountBank = new AccountBank(valueGenerator.accountIdGenerator(), accountNumber, customer);

            this.accountBankRepository.save(accountBank);
            
        }else{
            throw new Error("Cliente já possui uma conta!");
        }

    }

    takeByAccountNumber(accountNumber: string): AccountBank{

        accountNumberValidator(accountNumber);

        const accountFound: AccountBank | undefined = this.accountBankRepository.findByAccountNumber(accountNumber);

        if(!accountFound){

            throw new Error("Conta não encontrada!");
        }

        return accountFound;
    }

    takeByAccountOwnerCpf(cpf: string){

        cpfValidator(cpf);

        const accountFound: Array<AccountBank> | undefined = this.accountBankRepository.findByOwnerCpf(cpf);

        if(!accountFound){

            throw new Error("Conta não encontrada!");
        }

        return accountFound;

    }

    deposit(accountNumber: string, amount: number){

        accountNumberValidator(accountNumber);

        const accountFound: AccountBank = this.takeByAccountNumber(accountNumber);

        amountValidator(amount);

        accountFound.deposit(amount);

        this.accountBankRepository.save(accountFound);

    }

    withdraw(accountNumber: string, amount: number){

        accountNumberValidator(accountNumber);

        const accountFound: AccountBank = this.takeByAccountNumber(accountNumber);

        amountValidator(amount);

        accountFound.withdraw(amount);

        this.accountBankRepository.save(accountFound);
    }

    transfer(accountNumberOrigin: string, accountNumberDestination: string, amount: number){

        accountNumberValidator(accountNumberOrigin);
        accountNumberValidator(accountNumberDestination);

        amountValidator(amount);

        const originAccountFound: AccountBank = this.takeByAccountNumber(accountNumberOrigin);
        const destinationAccountFound: AccountBank = this.takeByAccountNumber(accountNumberDestination);

        if(originAccountFound.getAccountNumber() === destinationAccountFound.getAccountNumber()) throw new Error("Não pode se auto transferir");

        originAccountFound.withdraw(amount);
        destinationAccountFound.deposit(amount);

        this.accountBankRepository.save(originAccountFound);
        this.accountBankRepository.save(destinationAccountFound);
    }

    takeAll(): Array<AccountBank>{

        const accountList: Array<AccountBank> = this.accountBankRepository.takeAll();

        return accountList;
    }

    delete(accountNumber: string){

        accountNumberValidator(accountNumber);

        const accountFound: AccountBank | undefined = this.takeByAccountNumber(accountNumber);

        if(!accountFound){

            throw new Error("Conta não encontrada!");
        }

        this.accountBankRepository.delete(accountNumber);
    }

    deleteBycpf(cpf: string){

        const listAccountFound: Array<AccountBank> = this.takeByAccountOwnerCpf(cpf);

        listAccountFound.forEach(account => {
            this.delete(account.getAccountNumber());
        });
    }

    viewBalance(accountNumber: string): number{

        accountNumberValidator(accountNumber);

        const accountBalanceFound: number | undefined = this.takeByAccountNumber(accountNumber).getBalance();

        return accountBalanceFound;

    }
}

export default AccountBankService;