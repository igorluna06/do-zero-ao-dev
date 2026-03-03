import Customer from "./Customer.js";

class AccountBank{

    private accountId: number;
    private accountNumber: string;
    private customer: Customer;
    private balance: number = 0.0;

    constructor(accountId: number, accountNumber: string, customer: Customer){

        this.accountId = accountId;
        this.accountNumber = accountNumber;
        this.customer = customer;

    }

    deposit(amount: number){

        this.balance += amount;
    }

    withdraw(amount: number){

        this.balance -= amount;
    }

    getBalance(): number{

        return this.balance;
    }

    getAccountId(): number{

        return this.accountId;
    }

    getAccountOwnerId(): number{

        return this.customer.getCustomerId();

    }

    getAccountNumber(): string{

        return this.accountNumber;
    }


}

export default AccountBank;