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

    deposit(amount: number): void{

        this.balance += amount;
    }

    withdraw(amount: number): void{

        
        if(this.balance - amount < 0){
            throw new Error("Saldo insuficiente!")
        }

        this.balance -= amount;
    }
         
    getBalance(): number{

        return this.balance;
    }

    getAccountId(): number{

        return this.accountId;
    }

    getAccountOwner(): Customer{

        return this.customer;

    }

    getAccountNumber(): string{

        return this.accountNumber;
    }


}

export default AccountBank;