import { containsOnlyNumbers } from "./stringValidation.js";

function accountNumberValidator(accountNumber: string): void{

    if(!accountNumber || accountNumber.trim().length === 0){
        throw new Error("Número da conta não pode ser vazio!");
    }

    if(!containsOnlyNumbers(accountNumber)){
        throw new Error("Número da conta pode só conter números");
    }

    if(accountNumber.length !== 8){

        throw new Error("Número da conta precisa ter 8 dígitos!");
    }

}

export default accountNumberValidator;