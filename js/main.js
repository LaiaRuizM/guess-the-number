"use strict";

const selectNumber = document.querySelector(".js-number");
const selectButton = document.querySelector(".js-btn");
const tipMessage = document.querySelector(".js-clue");
const resetBtn = document.querySelector(".js-reset");
const letsTry = document.querySelector(".js-try");
let number = getRandomNumber(100);
let attempts = 0;

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

function handleClickReset() {
  number = getRandomNumber(100);
  selectNumber.value = "";
  insertClue("Clue: Enter the number and click on Try it");
  letsTry.innerHTML = "Number of attempts: 0";
}

// Evento: click en button y reset
selectButton.addEventListener("click", handleClickButton);
resetBtn.addEventListener("click", handleClickReset);
