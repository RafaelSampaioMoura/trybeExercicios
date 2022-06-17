const elementoInicial = document.getElementById("elementoOndeVoceEsta");
elementoInicial.parentNode.style.color = "red";
elementoInicial.firstChild.textContent = "Mafagafos";
console.log(elementoInicial.parentNode.firstChild);
console.log(elementoInicial.previousSibling);
console.log(elementoInicial.nextSibling);
console.log(elementoInicial.nextElementSibling);
console.log(elementoInicial.parentNode.childNodes[2]);