import Customer from "../models/Customer.js";

class CustomerRepository{

    private customers: Array<Customer>;

    constructor(){

        this.customers = [];
    }

    save(customer: Customer){

        this.customers.push(customer);

    }

    findById(id: number): Customer | undefined{

        const customerFinded: Customer | undefined = this.customers.find(customer => customer.getCustomerId() === id);

        return customerFinded;
    }

    findByCpf(cpf: string): Customer | undefined{

        const customerFinded: Customer | undefined = this.customers.find(customer => customer.getCpf() === cpf);

        return customerFinded;

    }

    findAll(): Array<Customer>{

        const copyCustomers: Array<Customer> = this.customers.slice();

        return copyCustomers;
    }

    delete(cpf: string){

        const customerIndexRemove: number | undefined = this.customers.findIndex(customer => customer.getCpf() === cpf);

        this.customers.splice(customerIndexRemove, 1);
    }
}

export default CustomerRepository;