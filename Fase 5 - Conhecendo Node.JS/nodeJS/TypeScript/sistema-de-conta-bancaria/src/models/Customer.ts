class Customer{

    private customerId: number;
    readonly customerName: string;
    readonly cpf: string;

    constructor(customerId: number,customerName: string, cpf: string){

        this.customerId = customerId;
        this.customerName = customerName;
        this.cpf = cpf;
    }
}

export default Customer;