import AccountBank from "../models/AccountBank.js";

class AccountBankRepository{

    private accounts: Array<AccountBank>;

    constructor(){

        this.accounts = [];
    }
}

export default AccountBankRepository;