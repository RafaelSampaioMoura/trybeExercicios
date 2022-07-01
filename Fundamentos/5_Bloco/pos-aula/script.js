function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

//Cria os dias do mês
function createDaysOfTheMonth() {
  const monthDays = document.querySelector("#days");
  for (let i = 0; i < decemberDaysList.length; i++) {
    const day = document.createElement("li");
    day.innerText = decemberDaysList[i];
    day.classList.add("day");
    if (
      decemberDaysList[i] === 24 ||
      decemberDaysList[i] === 25 ||
      decemberDaysList[i] === 31
    ) {
      day.classList.add("holiday");
    }

    if (
      decemberDaysList[i] === 4 ||
      decemberDaysList[i] === 11 ||
      decemberDaysList[i] === 18 ||
      decemberDaysList[i] === 25
    ) {
      day.classList.add("friday");
    }

    monthDays.appendChild(day);
  }
}

createDaysOfTheMonth();

//Cria o botão de feriados
function createHolidayButton() {
  const holidayBtn = document.createElement("button");
  holidayBtn.innerText = "Feriados";
  holidayBtn.id = "btn-holiday";
  //Muda a cor de fundo dos dias de feriado
  holidayBtn.addEventListener("click", () => {
    const holiDay = document.querySelectorAll(".holiday");
    for (let i = 0; i < holiDay.length; i++) {
      if (holiDay[i].style.backgroundColor === "yellowgreen") {
        holiDay[i].style.backgroundColor = "rgb(238,238,238)";
      } else {
        holiDay[i].style.backgroundColor = "yellowgreen";
      }
    }
  });
  const buttonContainer = document.querySelector("div.buttons-container");
  buttonContainer.appendChild(holidayBtn);
}

createHolidayButton();
const friDays = document.querySelectorAll(".friday");
const fridayDate = [];
for (let day of friDays) {
  fridayDate.push(day.innerText);
}

//Cria botão de Sexta-Feira
function createFridayButton() {
  const fridayBtn = document.createElement("button");
  fridayBtn.innerText = "Sexta-Feira";
  fridayBtn.id = "btn-friday";
  //Muda texto das sextas-feiras
  fridayBtn.addEventListener("click", () => {
    const friDays = document.querySelectorAll(".friday");
    for (let i = 0; i < friDays.length; i++) {
      if (friDays[i].innerText === "SEXTOU!") {
        friDays[i].innerText = fridayDate[i];
      } else {
        friDays[i].innerText = "SEXTOU!";
      }
    }
  });
  const buttonContainer = document.querySelector("div.buttons-container");
  buttonContainer.appendChild(fridayBtn);
}

createFridayButton();

//Aumenta o dia no calendário
function zoomIn(event) {
  event.target.style.transform = "scale(1.5)";
}

//Retoran o dia no calendário ao tamanho original
function zoomOut(event) {
  event.target.style.transform = "scale(1.0)";
}

const monthDays = document.querySelectorAll(".day");
for (let i = 0; i < monthDays.length; i++) {
  monthDays[i].addEventListener("mouseover", zoomIn);
  monthDays[i].addEventListener("mouseout", zoomOut);
}

const taskInput = document.querySelector("#task-input");
const btnAdd = document.querySelector("#btn-add");

//Cria os compromissos
btnAdd.addEventListener("click", addTask);
const textInput = document.getElementById("task-input");

taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      document.getElementById("btn-add").click();
    }
  });

function addTask() {
  const task = document.createElement("span");
  if (taskInput.input === "") {
    alert("Não é possível adicionar uma tarefa vazia;");
  } else {
    task.innerText = taskInput.value + "\n";
    addColor("red", task);
  }
}

const daysList = document.querySelectorAll(".day");

//Adiciona compromissos com legenda
function addColor(cor, element) {
  const color = document.createElement("div");
  color.classList.add("task");
  color.style.backgroundColor = cor;
  color.appendChild(element);
  //Adiciona a classe "selected"
  color.addEventListener("click", () => {
    if (color.classList.contains("selected")) {
      color.classList.remove("selected");
    } else {
      color.classList.add("selected");
      for (let day of daysList) {
        day.addEventListener("click", () => {
          if (day.style.color === color.style.backgroundColor) {
            day.style.color = "rgb(119,119,119)";
          } else {
            day.style.color = color.style.backgroundColor;
          }
        });
      }
    }
  });
  const taskContainer = document.querySelector(".my-tasks");
  const breakLine = document.createElement("br");
  taskContainer.appendChild(color);
  taskContainer.appendChild(breakLine);
}
