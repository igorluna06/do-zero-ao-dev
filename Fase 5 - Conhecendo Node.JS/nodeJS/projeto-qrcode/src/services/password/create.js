import chalk from "chalk";
import handle from "./handle.js";

async function createPassword(){

    console.log(chalk.yellow("password: "));
    const password = await handle();
    console.log(chalk.green(password));

}

export default createPassword;