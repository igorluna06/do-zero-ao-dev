class Customer{

    private customerId: number;
    public customerName: string;
    private readonly cpf: string;

    constructor(customerId: number,customerName: string, cpf: string){

        this.customerId = customerId;
        this.customerName = customerName;
        this.cpf = cpf;
    }

    getCustomerId(): number{

        return this.customerId;
    }

    getCpf(): string{

        return this.cpf;
    }

}

export default Customer;