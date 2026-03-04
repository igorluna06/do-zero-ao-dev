import CustomerRepository from "../repository/CustomerRepository.js";
import Customer from "../models/Customer.js";
import valueGenerator from "../utils/valueGenerator.js";
import cpfValidator from "../utils/validators/cpfValidator.js";
import nameValidator from "../utils/validators/nameValidator.js";

class CustomerService{

    private customerRepository: CustomerRepository = new CustomerRepository();

    saveCustomer(nameCustomer: string, cpf: string): void{

        nameValidator(nameCustomer);
        cpfValidator(cpf);

        if(this.customerRepository.findByCpf(cpf)){
            throw new Error("CPF já cadastrado!");
        }

        const customer: Customer = new Customer(valueGenerator.customerIdGenerator(), nameCustomer, cpf);

        this.customerRepository.save(customer);

    }

    takeByCpf(cpf: string): Customer{

        cpfValidator(cpf);

        const customerFound: Customer | undefined = this.customerRepository.findByCpf(cpf);

        if(!customerFound){

            throw new Error("Cliente não encontrado!");
        }

        return customerFound;
    }

    takeAll(): Array<Customer>{

        const CustomerList: Array<Customer> = this.customerRepository.findAll();

        return CustomerList;
    }

    delete(cpf: string): void{

        //Adicionar lógica de apagar contas quando deletar o cliente!!!!!!!!!!

        cpfValidator(cpf);

        const customerFound: Customer | undefined = this.customerRepository.findByCpf(cpf);

        if(!customerFound){

            throw new Error("Cliente não encontrado!")
        }else{
            this.customerRepository.delete(cpf);
        }

    }
}

export default CustomerService;