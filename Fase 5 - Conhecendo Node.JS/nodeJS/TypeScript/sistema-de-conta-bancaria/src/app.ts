import CustomerService from "./services/CustomerServices.js";

function app(){

    const customerServices: CustomerService = new CustomerService();
    console.log(customerServices.takeAll());
}

export default app;