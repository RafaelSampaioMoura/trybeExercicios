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

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  const monthDays = document.querySelector("#days");
  for(let i = 0; i < decemberDaysList.length; i++) {
    const day = document.createElement("li");
    day.innerText = decemberDaysList[i];
    day.classList.add("day");
    if(decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
      day.classList.add("holiday");
    }

    if(decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25) {
      day.classList.add("friday");
    }

    monthDays.appendChild(day);
  }
}

createDaysOfTheMonth();

function createHolidayButton() {
  const holidayBtn = document.createElement("button");
  holidayBtn.innerText = "Feriados"
  holidayBtn.id = "btn-holiday";
  const buttonContainer = document.querySelector("div.buttons-container");
  buttonContainer.appendChild(holidayBtn);
}

createHolidayButton();