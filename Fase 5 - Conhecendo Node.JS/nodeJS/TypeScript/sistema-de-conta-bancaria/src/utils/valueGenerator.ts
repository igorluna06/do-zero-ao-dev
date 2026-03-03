let countCustomer = 0;

function customerIdGenerator(): number{

    countCustomer++;
    return countCustomer;

};

let countAccountBank = 0;

function accountIdGenerator(): number{

    countAccountBank++;
    return countAccountBank;

};

function accountNumberGenerator(): string{

    let randomNumber: string = Math.floor(Math.random() * 99999999).toString();

    if(randomNumber.length < 8){
        randomNumber = randomNumber.padStart(8, '0');
    }

    return randomNumber;
    
}

export default {
    customerIdGenerator,
    accountIdGenerator,
    accountNumberGenerator
};
