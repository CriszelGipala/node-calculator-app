import { calculator } from "./calculator.js";
import readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

try {
    const addendOne = parseInt(await rl.question('Please enter addendOne: '));
    const addendTwo = parseInt(await rl.question('Please enter addendTwo: '));
    console.log(calculator.add(addendOne, addendTwo));
} finally {
    rl.close();
}
