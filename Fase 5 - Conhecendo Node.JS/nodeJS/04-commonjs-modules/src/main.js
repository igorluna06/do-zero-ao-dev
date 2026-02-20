const { getFullName, productType } = require("./services/products.js");
const config = require("./services/config.js");
const database = require("./services/database.js");

async function main() {

    console.log("Carrinho compras: ");

    console.log(config.devArea.production);
    console.log(config.client.device);

    getFullName("1", "Teclado");
    console.log(productType);

    // product.getFullName("408", "mousepad");
    // product.getFullName("508", "mouse");
    // product.getProductLabel("Mousepad");

    database.conectToDatabase("Igor");
    database.desconnectDatabase();

}

main();