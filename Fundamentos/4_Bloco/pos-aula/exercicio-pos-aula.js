// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
// Crie uma função que mude a cor do quadrado vermelho para branco.
// Crie uma função que corrija o texto da tag <h1>.
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.

const paragraph = document.getElementsByTagName("p");
paragraph[1].innerText = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
let tempArray = [];

for(let i = 0; i < paragraph.length; i += 1) {
    tempArray.push(paragraph[i].innerText.toUpperCase());
}

for(let i = 0; i < tempArray.length; i += 1) {
    console.log(paragraph[i]);
    paragraph[i].innerText = tempArray[i];
}

const mainContent = document.getElementsByClassName("main-content");
mainContent[0].style.backgroundColor = "rgb(76,164,109)";

const centerContent = document.getElementsByClassName("center-content");
centerContent[0].style.backgroundColor = "white";

const title = document.getElementsByClassName("title");
title[0].innerText = "Exercício 5.1 - JavaScript";