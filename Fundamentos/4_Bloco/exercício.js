const myName = "Rafael";
const birthCity = "Juazeiro do Norte";
let birthYear = "1997";
console.log(`${myName}, ${birthCity}, ${birthYear}`);
birthYear = "2030";
console.log(birthYear);
birthCity = "Londres";
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