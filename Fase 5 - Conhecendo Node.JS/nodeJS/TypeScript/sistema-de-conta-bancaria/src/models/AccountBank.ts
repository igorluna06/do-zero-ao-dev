class AccountBank{

    private accountId: number;
    private accountNumber: string;
    private customerId: number;
    private balance: number = 0.0;

    constructor(accountId: number, accountNumber: string, customerId: number){

        this.accountId = accountId;
        this.accountNumber = accountNumber;
        this.customerId = customerId;

    }

    deposit(amount: number){

        this.balance += amount;
    }

    withdraw(amount: number){

        this.balance -= amount;
    }

    getBalance(){

        return this.balance;
    }

}

export default AccountBank;