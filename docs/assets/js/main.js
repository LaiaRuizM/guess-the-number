"use strict";const selectNumber=document.querySelector(".js-number"),selectButton=document.querySelector(".js-btn"),tipMessage=document.querySelector(".js-clue"),resetBtn=document.querySelector(".js-reset"),letsTry=document.querySelector(".js-try");let number=getRandomNumber(100),attempts=0;function getRandomNumber(e){return Math.ceil(Math.random()*e)}function insertClue(e){tipMessage.innerHTML=e}function useRandomNumber(){const e=parseInt(selectNumber.value);console.log(number),insertClue(""===e?"It's empty 👀! ":e<1||e>100?"The number must be between 1 and 100.":e>number?"The number is too high.":e<number?"The number is too low.":"You have won, champion! 🥳 💃")}function reTry(){const e=++attempts;letsTry.innerHTML="Number of attempts: "+e}function handleClickButton(e){e.preventDefault(),useRandomNumber(),reTry()}function handleClickReset(){number=getRandomNumber(100),selectNumber.value="",attempts="",insertClue("Clue: Enter the number and click on Try it"),letsTry.innerHTML="Number of attempts: 0"}selectButton.addEventListener("click",handleClickButton),resetBtn.addEventListener("click",handleClickReset);