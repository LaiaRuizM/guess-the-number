'use strict';

const selectNumber = document.querySelector(".js-number");
const selectButton = document.querySelector(".js-btn");
const tipMessage = document.querySelector(".js-message");
const letsTry = document.querySelector(".js-try");

function getRandomNumber(max) {
    const numberRandom = Math.ceil(Math.random() * max);
    return numberRandom; 
}  

function useRandomNumber() {
    const userNumber = selectNumber.value; 
    const number = getRandomNumber(100);
    if (userNumber > number) {
        tipMessage.innerHTML = "Demasiado alto.";
        if (userNumber > 100) {
            tipMessage.innerHTML = "El número debe esta entre 1 y 100.";
        }
    } else if (userNumber < number) {
        tipMessage.innerHTML = "Demasiado bajo.";
        if (userNumber < 1) {
            tipMessage.innerHTML = "El número debe esta entre 1 y 100.";
        }
    } else if (userNumber === number) {
        tipMessage.innerHTML = "Has ganado campeona!!!";
    } 
     console.log(number);
}

const countAttemps = getRandomNumber(100);
let attempts = 1;

function reTry() {
    const totalTries = attempts++;
    letsTry.innerHTML = `Número de intentos: ${totalTries}`;
} 

function handleClickButton(event) {
    event.preventDefault();
    useRandomNumber();
    reTry();
}

selectButton.addEventListener("click", handleClickButton);