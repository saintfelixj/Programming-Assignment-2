Jerell Saint-Felix

const readlineSync = require('readline-sync');

let text = readlineSync.question("Enter a string: ");
let lowerText = text.toLowerCase();

let freq = {};
let firstRepeat = "";

for (let i = 0; i < lowerText.length; i++) {
    let ch = lowerText[i];

    if (ch >= 'a' && ch <= 'z') {
        if (freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }
}

for (let i = 0; i < lowerText.length; i++) {
    let ch = lowerText[i];

    if (ch >= 'a' && ch <= 'z' && freq[ch] > 1) {
        firstRepeat = ch;
        break;
    }
}

console.log("Letter frequencies:");
for (let key in freq) {
    console.log(key + ": " + freq[key]);
}

if (firstRepeat !== "") {
    console.log("First repeated letter: " + firstRepeat);
} else {
    console.log("First repeated letter: none");
}