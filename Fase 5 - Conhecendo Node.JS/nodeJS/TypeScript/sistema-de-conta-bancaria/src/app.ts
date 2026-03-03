import CustomerService from "./services/CustomerService.js";
import AccountBankService from "./services/AccountBankService.js";


function app(){

    const customerService: CustomerService = new CustomerService();
    const accountService: AccountBankService = new AccountBankService();
    

    customerService.saveCustomer("Igor Luna", "12345678910");

    console.log(customerService.takeAll());

    const account1 = customerService.takeByCpf("12345678910");

    accountService.saveAccount(account1);

    console.log(accountService.takeAll());

}

export default app;