import chalk from "chalk";

const mainPrompt = [{

    name: "select",
    description: chalk.yellow("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolhe apenas entre 1 e 2"),
    requiered: true,

}];

export default mainPrompt;