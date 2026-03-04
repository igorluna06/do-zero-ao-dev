import {containsOnlyNumbers} from "./stringValidation.js"

function cpfValidator(cpf: string): void{

    if(!cpf || cpf.trim().length === 0){
        throw new Error("CPF não pode ser vazio!");
    }

    if(!containsOnlyNumbers(cpf)){
        throw new Error("CPF pode só conter números");
    }

    if(cpf.length !== 11){
        throw new Error("CPF precisa ter 11 dígitos!");
    }
        
}

export default cpfValidator;