import AccountBankRepository from "../repository/AccountBankRepository.js";
import Customer from "../models/Customer.js";
import valueGenerator from "../utils/valueGenerator.js";
import AccountBank from "../models/AccountBank.js";

class AccountBankService{

    private accountBankRepository: AccountBankRepository= new AccountBankRepository();

    saveAccount(customer: Customer){

        const accountNumber: string = valueGenerator.accountNumberGenerator();

        if(this.accountBankRepository.findByAccountNumber(accountNumber)){
            throw new Error("Conta já existe!");
        }

        const accountBank: AccountBank = new AccountBank(valueGenerator.accountIdGenerator(), accountNumber, customer);

        this.accountBankRepository.save(accountBank);

    }

    takeByAccountNumber(accountNumber: string): AccountBank{

        const accountFound: AccountBank | undefined = this.accountBankRepository.findByAccountNumber(accountNumber);

        if(!accountFound){

            throw new Error("Conta não encontrada!");
        }

        return accountFound;
    }

    takeAll(): Array<AccountBank>{

        const accountList: Array<AccountBank> = this.accountBankRepository.takeAll();

        return accountList;
    }

    delete(accountNumber: string){

        const accountFound: AccountBank | undefined = this.accountBankRepository.findByAccountNumber(accountNumber);

        if(!accountFound){

            throw new Error("Conta não encontrada!")
        }else{
            this.accountBankRepository.delete(accountNumber);
        }
    }
}

export default AccountBankService;