import * as database from "./utils/database.js"; // Precisa passar a extensão do arquivo EX : .js ou .mjs
import * as api from "./utils/api.js";

database.connectToDatabase("my-database");
database.disconnectDatabase();
console.log(database.databaseType);

api.getDataFromApi();
console.log(api.key);
