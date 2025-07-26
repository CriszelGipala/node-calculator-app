import { calculator } from "./calculator.js";
import readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

try {
    const multiplyendOne = parseInt(await rl.question('Please enter multiplyendOne: '));
    const multiplyendTwo = parseInt(await rl.question('Please enter multiplyendTwo: '));
    console.log(calculator.add(multiplyendOne, multiplyendTwo));
} finally {
    rl.close();
}
