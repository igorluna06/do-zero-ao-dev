import CustomerRepository from "../repository/CustomerRepository.js";
import Customer from "../models/Customer.js";
import valueGenerator from "../utils/valueGenerator.js";
import cpfValidator from "../utils/validators/cpfValidator.js";
import nameValidator from "../utils/validators/nameValidator.js";
import AccountBankService from "./AccountBankService.js";

class CustomerService{

    private customerRepository: CustomerRepository = new CustomerRepository();

    public accountService: AccountBankService;

    constructor(accountService: AccountBankService){

        this.accountService = accountService;

    }

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

        cpfValidator(cpf);

        const customerFound: Customer | undefined = this.customerRepository.findByCpf(cpf);

        if(!customerFound){

            throw new Error("Cliente não encontrado!")
        }

        this.accountService.deleteBycpf(cpf);

        this.customerRepository.delete(cpf);

    }
}

export default CustomerService;