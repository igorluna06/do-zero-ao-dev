import Customer from "../models/Customer.js";

class CustomerRepository{

    private customers: Array<Customer>;

    constructor(){

        this.customers = [];
    };

    post(customer: Customer){

        this.customers.push(customer);

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

        const copyCustomers: Array<Customer> = this.customers.slice();

        return copyCustomers;
    };

    delete(id: number){

        const customerIndexRemove: number | undefined = this.customers.findIndex(customer => customer.getCustomerId() === id);

        this.customers.splice(customerIndexRemove, 1);
    };
}

export default CustomerRepository;