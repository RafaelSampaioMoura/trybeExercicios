const myName = "Rafael";
const birthCity = "Juazeiro do Norte";
let birthYear = "1997";
console.log(`${myName}, ${birthCity}, ${birthYear}`);
birthYear = "2030";
console.log(birthYear);
//birthCity = "Londres";
console.log(birthCity);

//==============================================================================================================================

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(`${typeof patientId}, ${typeof isEnrolled}, ${typeof patientInfo}, ${typeof patientEmail}`);

//==============================================================================================================================

const base = 5;
let height = 8;
console.log(`${base * height}`);
const perimiter = (base *2) + (height * 2);
console.log(perimiter);

//==============================================================================================================================

const nota = 45;

if (nota < 60) {
    console.log("Você foi reprovada(o)" );
} else if (nota < 80) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log( "Parabéns, você foi aprovada(o)!");
}

//==============================================================================================================================

const currentHour = 20;
let message = "";
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour <14) {
    message =  "Hora do almoço!!!";
} else if (currentHour >=4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(`${message}`);

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
}

//==============================================================================================================================

let situacao = "torta";

switch (situacao) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado!");
        break;

    case "lista":
        console.log("Você se encontra na nossa lista de espera");
        break;

    case "reprovado":
        console.log("Sentimos muito, mas você foi reprovado");
        break;
    default:
        console.log("Não se aplica");
}

//Aula Array e loop "For"

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let menuServices = menu[1];
console.log(menuServices);

let indexOfPortfolio = menu[2];
console.log(indexOfPortfolio);

menu.push('Contato');
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i = 0; i < groceryList.length; i += 1) {
    console.log("*")
    console.log(groceryList[i]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names) {
    console.log(name);
}