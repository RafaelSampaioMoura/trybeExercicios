let factorial = 1;
for(i = 1; i <= 10; i += 1) {
    factorial *= i;
}

console.log(factorial);

let word = "tryber";
let newString = "";
for(i = word.length - 1; i >= 0; i -= 1) {
    newString += word[i];
}

word = newString;
console.log(word);