export const calculator = {
    add(addendOne, addendTwo) {
        return addendOne + addendTwo;
    },
    subtract(minuend, subtrahend) {
        return minuend - subtrahend;
    },
    divide(divident, divisor) {
        return divident / divisor;
    },
    multiply(multiplier, multiplicand) {
        return multiplier * multiplicand;
    }
}

const sum = calculator.add(2, 2);
const difference = calculator.subtract(3, 2);
const quotient = calculator.divide(6, 2);
const product = calculator.multiply(6, 6);

const summary = `
The sum is ${sum}
The difference is ${difference}
The quotient is ${quotient}
The product is ${product}
`

//console.log(summary);
