import * as readline from "readline";

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function question(text: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(text, (answer) => {
            resolve(answer.trim());
        });
    });
}

export function closeInput(): void {
    rl.close();
}