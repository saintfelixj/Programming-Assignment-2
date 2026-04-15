Jerell Saint-Felix

 const readlineSync = require('readline-sync');

let input = readlineSync.question("Enter a string: ");
input = input.toLowerCase();

let freq = {};
let firstRepeat = "";

// count letters
for (let i = 0; i < input.length; i++) {
    let ch = input[i];

    if (ch >= 'a' && ch <= 'z') {
        if (freq[ch] == undefined) {
            freq[ch] = 1;
        } else {
            freq[ch]++;
        }
    }
}

// find first repeat
for (let i = 0; i < input.length; i++) {
    let ch = input[i];

    if (ch >= 'a' && ch <= 'z' && freq[ch] > 1) {
        firstRepeat = ch;
        break;
    }
}

console.log("Letter frequencies:");
for (let key in freq) {
    console.log(key + ": " + freq[key]);
}

console.log("First repeated letter: " + firstRepeat);
