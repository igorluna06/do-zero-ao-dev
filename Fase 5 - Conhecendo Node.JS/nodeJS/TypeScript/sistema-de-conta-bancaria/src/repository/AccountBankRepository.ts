import AccountBank from "../models/AccountBank.js";

class AccountBankRepository{

    private accounts: Array<AccountBank>;

    constructor(){

        this.accounts = [];
    }

    save(accountBank: AccountBank): void{

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

    findByOwnerCpf(ownerCpf: string): Array<AccountBank> | undefined{

        const accountFound: Array<AccountBank> | undefined = this.accounts.filter(account => account.getAccountOwner().getCpf() === ownerCpf);

        return accountFound;
    }

    findByAccountNumber(accountNumber: string): AccountBank | undefined{

        const accountFound: AccountBank | undefined = this.accounts.find(account => account.getAccountNumber() === accountNumber);

        return accountFound;
    }

    delete(accountNumber: string): void{

        const accountIndexRemove: number = this.accounts.findIndex(account => account.getAccountNumber() === accountNumber);

        this.accounts.splice(accountIndexRemove, 1);
    }

    takeAll(): Array<AccountBank>{

        const copyAccounts: Array<AccountBank> = this.accounts.slice();

        return copyAccounts; 
    }

}

export default AccountBankRepository;