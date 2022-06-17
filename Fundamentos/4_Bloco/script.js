const elementoInicial = document.getElementById("elementoOndeVoceEsta");
elementoInicial.parentNode.style.color = "red";
elementoInicial.firstChild.textContent = "Mafagafos";
console.log(elementoInicial.parentNode.firstChild);
console.log(elementoInicial.previousSibling);
console.log(elementoInicial.nextSibling);
console.log(elementoInicial.nextElementSibling);
console.log(elementoInicial.parentNode.childNodes[2]);

const irmaoDoElementoInicial = document.createElement("section");
elementoInicial.parentElement.appendChild(irmaoDoElementoInicial);

const filhoDoElementoInicial = document.createElement("div");
elementoInicial.appendChild(filhoDoElementoInicial);

const filhoDoPrimeiroFilhoDoElementoInicial = document.createElement("div");
elementoInicial.firstElementChild.appendChild(filhoDoPrimeiroFilhoDoElementoInicial);

console.log(elementoInicial.firstElementChild.firstElementChild.parentElement.parentElement.parentElement.children[2]);