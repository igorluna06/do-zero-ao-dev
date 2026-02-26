import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function question(text) {
    return new Promise((resolve) => {
        rl.question(text, (answer) => {
            resolve(answer);
        });
    });
}

function closeInput() {
    rl.close();
}

