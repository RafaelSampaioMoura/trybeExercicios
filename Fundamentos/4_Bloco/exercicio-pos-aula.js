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

const valorReferencia = -56;

if(valorReferencia < 0) {
    console.log("negative");
} else if (valorReferencia > 0) {
    console.log("positive");
} else {
    console.log("zero");
}

const anguloUm = 60;
const anguloDois = 60;
const anguloTres = 60;
const triangulo = anguloUm + anguloDois + anguloTres;
const angulosPositivos = anguloUm > 0 && anguloDois > 0 && anguloTres > 0;

console.log(triangulo === 180 && angulosPositivos);

let pecaXadrez = "PeÃo";

if(pecaXadrez.toLowerCase() === "peão") {
    console.log("frente, uma casa");
} else if(pecaXadrez.toLowerCase() === "torre") {
    console.log("frente e lados, ilimitado");
} else if(pecaXadrez.toLowerCase() === "cavalos") {
    console.log("em L");
} else if(pecaXadrez.toLowerCase() === "bispo") {
    console.log("nas verticais, ilimitado")
} else if(pecaXadrez.toLowerCase() === "rainha") {
    console.log("todas as direções, ilimitado")
} else if(pecaXadrez.toLowerCase() === "rei") {
    console.log("todas as direções, uma casa")
} else {
    console.log("Opção inválida")
}