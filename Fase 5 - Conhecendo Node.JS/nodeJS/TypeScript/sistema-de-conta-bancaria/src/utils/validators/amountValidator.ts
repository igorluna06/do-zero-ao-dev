function amountValidator(amount: number): void{

    if(amount <= 0){
        throw new Error("Valor da ação inválido!");
    }

}

export default amountValidator;