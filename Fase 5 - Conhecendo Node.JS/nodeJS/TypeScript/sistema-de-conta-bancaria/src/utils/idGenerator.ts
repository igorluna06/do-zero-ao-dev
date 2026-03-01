let countCustomer = 0;

function customerIdGenerator(){

    countCustomer++;
    return countCustomer;

}

export default {
    customerIdGenerator,
};
