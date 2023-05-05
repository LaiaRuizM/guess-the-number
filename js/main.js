"use strict";

const selectNumber = document.querySelector(".js-number");
const selectButton = document.querySelector(".js-btn");
const tipMessage = document.querySelector(".js-message");
const letsTry = document.querySelector(".js-try");
const number = getRandomNumber(100);

// Función del número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Función para modificar el texto de las pistas (condicionales) y no poner todo el rato el innerHTML
function insertClue(msg) {
  tipMessage.innerHTML = msg;
}

function useRandomNumber() {
  const userNumber = parseInt(selectNumber.value); // parseInt -> para que no nos devuelva un string, sino un number
  console.log(number);
  if (userNumber === "") {
    insertClue("It's empty 👀! ");
    // } else if (isNan(userNumber)) { // isNan sirve, por si en el INPUT hemos puesto type text y no type number e introducen texto
    //     insertClue("Debes introducir un valor numérico :)");
  } else if (userNumber < 1 || userNumber > 100) {
    insertClue("The number must be between 1 and 100.");
  } else if (userNumber > number) {
    insertClue("The number is too high.");
  } else if (userNumber < number) {
    insertClue("The number is too low.");
  } else {
    // userNumber === number
    insertClue("You have won, champion! 🥳 💃");
  }
}

// const countAttemps = getRandomNumber(100);
let attempts = 0;

// Función contador -> incremento del contador, cada vez que se intenta adivinar el número
function reTry() {
  const totalTries = attempts++;
  letsTry.innerHTML = `Number of attempts: ${totalTries}`;
}

// Función manejadora del evento
function handleClickButton(event) {
  event.preventDefault();
  useRandomNumber();
  reTry();
}

// Evento: click en button
selectButton.addEventListener("click", handleClickButton);
