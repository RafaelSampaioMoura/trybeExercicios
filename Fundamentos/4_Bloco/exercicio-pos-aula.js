let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers) {
    console.log(number);
}

let sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log(sum);