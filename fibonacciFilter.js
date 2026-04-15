Jerell Saint-Felix

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter the number of Fibonacci numbers to generate: "));

if (isNaN(n) || n <= 0) {
    console.log("Invalid input.");
} else {
    let fib = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        } else if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }

    let oddFib = [];

    for (let i = 0; i < fib.length; i++) {
        if (fib[i] % 2 !== 0) {
            oddFib.push(fib[i]);
        }
    }

    console.log("Full sequence: [" + fib.join(", ") + "]");
    console.log("Odd Fibonacci numbers: [" + oddFib.join(", ") + "]");
}