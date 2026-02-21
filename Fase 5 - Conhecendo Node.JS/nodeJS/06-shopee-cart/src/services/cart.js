// Quais ações meu carrinho pode fazer

/*

Adicionar item no carrinho
Deletar item do carrinho
Remover um item no carrinho
Calcular o total

*/

async function addItem(userCart, item){

    userCart.push(item);

}

async function deleteItem(userCart, name){

    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item){

    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){

        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

async function calculateTotal(userCart){

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\nShopee Cart TOTAL IS:");
    console.log("Total: " + result);
}

async function displayCart(userCart){

    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} - ${item.quantity}X | Subtotal ${item.subtotal()}`);
    });
}

export {

    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}