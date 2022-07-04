const siteSettings = {
  "background color": "",
  "text color": "",
  "font size": "",
  "line height": "",
  "font family": "",
};

const backgroundBtn = document.querySelectorAll(".background-color");
const colorBtn = document.querySelectorAll(".text-color");
const sizeBtn = document.querySelectorAll(".font-size");
const spaceBtn = document.querySelectorAll(".line-height");
const fontBtn = document.querySelectorAll(".font-family");
const theText = document.querySelector(".the-text");

//Pega as preferências do usuário de dentro do localStorage
function initialRenderization() {
  if (localStorage.getItem("settings") === null) {
    localStorage.setItem("settings", JSON.stringify(siteSettings));
  } else {
    const usrPrefs = JSON.parse(localStorage.getItem("settings"));
    theText.style.backgroundColor = usrPrefs["background color"];
    theText.style.color = usrPrefs["text color"];
    theText.style.fontSize = usrPrefs["font size"];
    theText.style.lineHeight = usrPrefs["line height"];
  }
}

//Muda a cor de fundo da página
function changeBackground(e) {
  const newBackground = e.target.innerText;
  siteSettings["background color"] = newBackground.toLowerCase();
  theText.style.backgroundColor = siteSettings["background color"];
  savePreferences();
}

for (let i = 0; i < backgroundBtn.length; i++) {
  backgroundBtn[i].addEventListener("click", changeBackground);
}

//Muda a cor do texto
function changeText(e) {
  const newColor = e.target.innerText;
  siteSettings["text color"] = newColor.toLowerCase();
  theText.style.color = siteSettings["text color"];
  savePreferences();
}

for (let i = 0; i < colorBtn.length; i++) {
  colorBtn[i].addEventListener("click", changeText);
}

//Muda o tamanho da fonte
function changeSize(e) {
  siteSettings["font size"] = e.target.innerText;
  theText.style.fontSize = siteSettings["font size"];
  savePreferences();
}

for(let i = 0; i < sizeBtn.length; i++) {
  sizeBtn[i].addEventListener("click", changeSize);
}

//Muda o espaçamento do texto
function changeHeight(e) {
  siteSettings["line height"] = e.target.innerText;
  theText.style.lineHeight = siteSettings["line height"];
  savePreferences();
}

for(let i = 0; i < spaceBtn.length; i++) {
  spaceBtn[i].addEventListener("click", changeHeight);
}

function changeFont(e) {
  siteSettings["font family"] = e.target.innerText;
  theText.style.fontFamily = siteSettings["font family"];
  savePreferences();
}

for(let i = 0; i < fontBtn.length; i++) {
  fontBtn[i].addEventListener("click", changeFont);
}

function savePreferences() {
  localStorage.setItem("settings", JSON.stringify(siteSettings));
}

window.onload = function () {
  initialRenderization();
};
