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

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggest = array[0];
let smallest = array[0];

for(let word of array) {
    if(word.length > biggest.length) {
        biggest = word;
    }

    if(word.length < smallest.length) {
        smallest = word;
    }
}

console.log(biggest);
console.log(smallest);