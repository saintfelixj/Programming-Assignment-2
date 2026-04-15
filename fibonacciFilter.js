Jerell Saint-Felix

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter the number of Fibonacci numbers to generate: "));

let fib = [0, 1];

// build sequence
for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

// cut array if n = 1
fib = fib.slice(0, n);

// filter odd
let odd = [];

for (let i = 0; i < fib.length; i++) {
    if (fib[i] % 2 !== 0) {
        odd.push(fib[i]);
    }
}

console.log("Full sequence: [" + fib.join(", ") + "]");
console.log("Odd Fibonacci numbers: [" + odd.join(", ") + "]");
