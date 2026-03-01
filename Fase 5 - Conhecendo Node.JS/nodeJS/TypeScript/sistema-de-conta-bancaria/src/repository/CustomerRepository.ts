import Customer from "../models/Customer.js";

class CustomerRepository{

    private customers: Array<Customer>;

    constructor(){

        this.customers = [];
    };

    post(customer: Customer){

        this.customers.push(customer);

        return true;
    };

    findById(id: number){

        const customerFinded: Customer | undefined = this.customers.find(customer => customer.getCustomerId() === id);

        return customerFinded;
    };

    findByCpf(cpf: string){

        const customerFinded: Customer | undefined = this.customers.find(customer => customer.getCpf() === cpf);

        return customerFinded;

    };

    findAll(){

        return this.customers;
    };

    delete(id: number){

        const customerIndexRemove: number | undefined = this.customers.findIndex(customer => customer === this.findById(id));

        this.customers.splice(customerIndexRemove, 1);
    };
}

export default CustomerRepository;