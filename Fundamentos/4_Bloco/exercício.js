let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} de idade`);

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`);

console.log(`A jogadora possui ${player.golden} medalhas de ouro e ${player.silver} medalhas de prata.`)

//============================================================================

let names = {
    personOne: "João",
    personTwo: "Maria",
    personThree: "Jorge"
};

for(let name in names) {
    console.log(`Olá ${names[name]}`);
};

let car = {
    model: "A3 Sedan",
    manufacturer: "Audi",
    year: 2020
};

for(let info in car) {
    console.log(`${info}: ${car[info]}.`)
};

//============================================================================

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        return "Não é possível dividir por zero";
    } else {
        return a / b;
    }
}

function modulo(a, b) {
    return a % b;
}

function biggerThan(a, b) {
    if(a > b) {
        return `${a} maior que ${b}`;
    } else if(a < b) {
        return `${a} menor que ${b}`;
    } else {
        return `${a} e ${b} são iguais`;
    }
}

function whosBiggest(a, b, c) {
    if(a > b && a > c) {
        return `${a} é o maior`;
    } else if(b > a && b > c) {
        return `${b} é o maior`;
    } else if(c > a && c > b) {
        return `${c} é o maior`;
    } else {
        return "Nenhum número é o maior";
    }
}

function positiveOrNegative(a) {
    if(a > 0) {
        return `${a} é positivo.`;
    } else if(a < 0) {
        return `${a} é negativo.`;
    } else {
        return `${a} é igual à zero.`;
    }
}

function isTriangle(a, b, c) {
    if(a < 0 || b < 0 || c < 0) {
        return `Ângulo(s) inválido(s).`
    } else if((a + b + c) === 180) {
        return `São ângulos de um triângulo`;
    } else {
        return "Não são ângulos de um triângulo";
    }
}

