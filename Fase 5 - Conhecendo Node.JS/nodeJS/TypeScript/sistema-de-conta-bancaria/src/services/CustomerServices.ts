import CustomerRepository from "../repository/CustomerRepository.js";
import Customer from "../models/Customer.js";
import idGenerator from "../utils/idGenerator.js";
import cpfValidator from "../utils/validators/cpfValidator.js";
import nameValidator from "../utils/validators/nameValidator.js";

class CustomerService{

    private customerRepository: CustomerRepository = new CustomerRepository();

    saveCustomer(nameCustomer: string, cpf: string){

        nameValidator(nameCustomer);
        cpfValidator(cpf);

        if(this.customerRepository.findByCpf(cpf)){
            throw new Error("CPF já cadastrado!");
        }

        const customer: Customer = new Customer(idGenerator.customerIdGenerator(), nameCustomer, cpf);

        this.customerRepository.post(customer);

    };

    takeByCustomerId(id: number){

        const customerFound: Customer | undefined = this.customerRepository.findById(id);

        if(!customerFound){

            throw new Error("Cliente não encontrado!");
        }

        return customerFound;

    };

    takeByCpf(cpf: string){

        cpfValidator(cpf);

        const customerFound: Customer | undefined = this.customerRepository.findByCpf(cpf);

        if(!customerFound){

            throw new Error("Cliente não encontrado!");
        }

        return customerFound;
    };

    takeAll(){

        const CustomerList: Array<Customer> = this.customerRepository.findAll();

        return CustomerList;
    };

    delete(id: number){

        const customerFound: Customer | undefined = this.customerRepository.findById(id);

        if(!customerFound){

            throw new Error("Cliente não encontrado!")
        }else{
            this.customerRepository.delete(id);
        }

    };
}

export default CustomerService;