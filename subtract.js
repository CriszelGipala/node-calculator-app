import { calculator } from "./calculator.js";
import readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

try {
    const substractendOne = parseInt(await rl.question('Please enter subtractendOne: '));
    const substractendTwo = parseInt(await rl.question('Please enter subtractendTwo: '));
    console.log(calculator.add(substractendOne, substractendTwo));
} finally {
    rl.close();
}
