let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vinda, ${info['personagem']}`);

info['recorrente'] = "Sim";

console.log(info);

for(let stuff in info) {
    console.log(stuff);
}

for(let stuff in info) {
    console.log(info[stuff]);
}

let infoTwo = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for(let stuff in infoTwo) {
    if(stuff === "recorrente") {
        console.log(`Ambos recorrentes`);
        break;
    }
    console.log(`${info[stuff]} e ${infoTwo[stuff]}`);
}