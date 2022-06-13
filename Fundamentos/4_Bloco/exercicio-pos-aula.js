let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers) {
    console.log(number);
}

let sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log(sum);

let average = sum / numbers.length;
console.log(average);

if(average > 20) {
    console.log("Valor maior que 20.")
} else {
    console.log("Valor menor ou igual a 20.")
}

let biggest = 0;
for(let number of numbers) {
    if(number > biggest) {
        biggest = number;
    }
}

console.log(biggest);

let oddValues = 0;
for(let number of numbers) {
    if(number % 2 !==0) {
        oddValues += 1;
    }
}

if(oddValues === 0) {
    console.log("Nenhum valor ímpar encontrado.")
} else {
    console.log(oddValues);
}

let smallest = numbers[0];

for(number of numbers) {
    if(smallest > number) {
        smallest = number;
    }
}

console.log(smallest);