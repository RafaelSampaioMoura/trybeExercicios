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

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  `O livro favorito de ${leitor["nome"]} ${leitor["sobrenome"]}de se chama '${leitor["livrosFavoritos"][0]["titulo"]}'`
);

leitor["livrosFavoritos"].push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});

console.log(leitor);

console.log(`${leitor["nome"]} tem ${leitor["livrosFavoritos"].length} livros favoritos.`);

let word = "arara";

function isPalindrome(word) {
  let wordReversed = word.split("").reverse().join("");
  return wordReversed === word;
}

console.log(isPalindrome(word));

let testNumberArray = [2, 3, 6, 7, 10, 1, -3];

function biggestIndex(array) {
  let number = 0;
  let index = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > number) {
      number = array[i];
      index = i;
    }
  }
  return index;
}

console.log(biggestIndex(testNumberArray));

function smallestIndex(array) {
  let number = array[0];
  let index = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < number) {
      number = array[i];
      index = i;
    }
  }
  return index;
}

console.log(smallestIndex(testNumberArray));

let testWordArray = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function mostLetters(array) {
  let wordCount = 0;
  let actualWord = "";
  for (let word of array) {
    if (word.length > wordCount) {
      wordCount = word.length;
      actualWord = word;
    }
  }
  return actualWord;
}

console.log(mostLetters(testWordArray));

let testNumberArrayTwo = [2, 3, 2, 5, 8, 2, 3];

function doesItRepeat(array) {
    let repeatedItem = 0;
    let repetitions = 0;
    let minimum = 1;
    for(let i = 0; i < testNumberArrayTwo.length; i += 1) {
        for(let j = i; j < testNumberArrayTwo.length; j += 1) {
            if(testNumberArrayTwo[j] === testNumberArrayTwo[j]) {
                repetitions += 1;
            }
            if(minimum < repetitions) {
                minimum = repetitions;
                repeatedItem = testNumberArrayTwo[i];
            }
        }
        repetitions = 0;
    }
    return repeatedItem;
}

console.log(doesItRepeat(testNumberArrayTwo));

function totalValue(N) {
    let totalSum = 0;
    for(let i = N; i >0; i -= 1) {
        totalSum += i;
    }
    return totalSum;
}

console.log(totalValue(5));

function isItTheEnding(word, ending) {
    if(ending.length > word.length) {
        return "Error."
    }
    
    return word.endsWith(ending);
}

console.log(isItTheEnding("trybe", "be"));
console.log(isItTheEnding("carlos", "lit"));