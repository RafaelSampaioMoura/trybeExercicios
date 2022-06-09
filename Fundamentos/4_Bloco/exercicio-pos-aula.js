let valueOne = 40;
let valueTwo = 8;

console.log(`${valueOne + valueTwo}`);
console.log(`${valueOne - valueTwo}`);
console.log(`${valueOne * valueTwo}`);
console.log(`${valueOne / valueTwo}`);
console.log(`${valueOne % valueTwo}`);

const firstValue = 80;
const secondValue = 35;

if(firstValue > secondValue) {
    console.log(`${firstValue}`);
} else {
    console.log(`${secondValue}`);
}

const valorUm = 150;
const valorDois = 100;
const valorTres = 50;

if(valorUm > valorDois && valorUm > valorTres) {
    console.log(`${valorUm}`);
} else if(valorDois > valorUm && valorDois > valorTres) {
    console.log(`${valorDois}`);
} else if(valorTres > valorUm && valorTres > valorDois) {
    console.log(`${valorTres}`);
}