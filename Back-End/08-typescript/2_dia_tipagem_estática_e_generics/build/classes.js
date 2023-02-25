"use strict";
// Exercício 01
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log("FWOOOOOOOOOOOM!");
    }
    turnOn() {
        console.log("O carro ligou!");
    }
    turnOff() {
        console.log("O carro desligou!");
    }
    speedUp() {
        console.log(`O carro acelerou!`);
    }
    speedDown() {
        console.log(`O carro desacelerou!`);
    }
    stop() {
        console.log("O carro parou!");
    }
    turn(direção) {
        console.log(`O carro virou na direção ${direção}`);
    }
}
// Exercício 02
const newCar = new Car("Ferrari", "Vermelha", 4);
function trip() {
    newCar.turnOn();
    newCar.speedUp();
    newCar.turn("esquerda");
    newCar.turn("direita");
    newCar.turn("direita");
    newCar.speedDown();
    newCar.stop();
    newCar.turnOff();
    newCar.turnOn();
    newCar.speedUp();
    newCar.turn("direita");
    newCar.turn("esquerda");
    newCar.turn("direita");
    newCar.speedDown();
    newCar.stop();
    newCar.turnOff();
}
trip();
const calabresa = { flavor: "Calabresa", slices: { slices: 8 } };
const marguerita = { flavor: "Marguerita", slices: { slices: 8 } };
const nutella = { flavor: "Nutella", slices: { slices: 8 } };
const pedido1 = { pizza: { flavor: "Calabresa", slices: 4 } };
const pedido2 = { pizza: { flavor: "Frango", slices: 8 } };
const pedido3 = { pizza: { flavor: "Pepperoni", slices: 6 } };
const pedido4 = { pizza: { flavor: "Cogumelo", slices: 4 } };
const pedido5 = { pizza: { flavor: "Palmito", slices: 6 } };
const pedido6 = { pizza: { flavor: "Marshmallow", slices: 4 } };
// Exercício 5
const array = new Array();
function myFilter(arr, callback) {
    let newArray = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (callback(element)) {
            console.log(arr.slice(index, index + 1));
            newArray.push(...arr.slice(index, index + 1));
        }
    }
    return newArray;
}
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr = myFilter(myArr, (element) => element > 3);
console.log(newArr);
