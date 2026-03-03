import AccountBank from "../models/AccountBank.js";

class AccountBankRepository{

    private accounts: Array<AccountBank>;

    constructor(){

        this.accounts = [];
    }

    save(accountBank: AccountBank){

        const accountIndex: number = this.accounts.findIndex(account => account.getAccountId() === accountBank.getAccountId());

        if(accountIndex === -1){
            this.accounts.push(accountBank);
        }else{
            this.accounts[accountIndex] = accountBank;
        }
        
    }

    findById(id: number): AccountBank | undefined{

        const accountFound: AccountBank | undefined =  this.accounts.find(account => account.getAccountId() === id);

        return accountFound;
    }

    

    findByAccountNumber(accountNumber: string): AccountBank | undefined{

        const accountFound: AccountBank | undefined = this.accounts.find(account => account.getAccountNumber() === accountNumber);

        return accountFound;
    }

    delete(accountNumber: string){

        const accountIndexRemove: number = this.accounts.findIndex(account => account.getAccountNumber() === accountNumber);

        this.accounts.splice(accountIndexRemove, 1);
    }

    takeAll(): Array<AccountBank>{

        const copyAccounts: Array<AccountBank> = this.accounts.slice();

        return copyAccounts; 
    }


}

export default AccountBankRepository;