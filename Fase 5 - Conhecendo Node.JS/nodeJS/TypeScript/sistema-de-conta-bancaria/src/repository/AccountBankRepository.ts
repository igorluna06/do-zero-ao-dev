import AccountBank from "../models/AccountBank.js";

class AccountBankRepository{

    private accounts: Array<AccountBank>;

    constructor(){

        this.accounts = [];
    }

    post(accountBank: AccountBank){

        this.accounts.push(accountBank);
    }

    
}

export default AccountBankRepository;