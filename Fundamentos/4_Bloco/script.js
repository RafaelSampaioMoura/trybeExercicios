const header = document.querySelector("header");
header.style.backgroundColor = "lightgreen";

const emergencyTasks = document.querySelectorAll(".emergency-tasks");
for(let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = "lightpink";
}

const emergencyTasksHead = document.querySelectorAll(".emergency-tasks div h3");
for(let i = 0; i < emergencyTasksHead.length; i += 1) {
    emergencyTasksHead[i].style.backgroundColor = "purple";
}

const noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks");
for(let i = 0; i < noEmergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor = "yellow";
}

const noEmergencyTasksHead = document.querySelectorAll(".no-emergency-tasks div h3");
for(let i = 0; i < noEmergencyTasksHead.length; i += 1) {
    noEmergencyTasksHead[i].style.backgroundColor = "black";
}

const footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "darkgreen";