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

let array_of_numbers = [];

for(let i = 2; i <= 50; i += 1) {
    array_of_numbers.push(i);
}

console.log(array_of_numbers);

let biggest_prime_number = 1;

for(let i = 0; i <= array_of_numbers.length; i += 1) {
    if(array_of_numbers[i] % 2 !==0 && array_of_numbers[i] % 3 !== 0 && array_of_numbers % 5 !== 0 && array_of_numbers[i] % 7 !== 0 && array_of_numbers[i] > biggest_prime_number) {
        biggest_prime_number = array_of_numbers[i];
    }
}

console.log(biggest_prime_number);