('use strict');
console.log('Holis');
//1.Variables globales :querySelector

const selectMove = document.querySelector('.js-selector');
const playButton = document.querySelector('.js-button');
const userPoints = document.querySelector('.js-user');
const computerPoints = document.querySelector('.js-computer');
const letsGo = document.querySelector('.js-playGame');

//2.Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function numberMovement() {
  //Generar número aleatorio
  const randomNum = getRandomNumber(10);
  //comprobar si es piedra, papel o tijera
  if (randomNum < 3) {
    console.log('Piedra');
  } else if (randomNum >= 6) {
    console.log('Papel');
  } else {
    console.log('Tijera');
  }
}

// function piedraPapelTijera() {
//   if () {
//   }
// }

function pointsUser() {
  if (userPoints === computerPoints) {
    letsGo.innerHTML = 'EMPATE';
  } else if (userPoints > computerPoints) {
    letsGo.innerHTML = 'Has ganado';
  } else computerPoints > userPoints;
  letsGo.innerHTML = 'Has perdido';
}

function handlerClickPlay(event) {
  event.preventDefault();
  numberMovement();
  pointsUser();
}

//3. Código que se ejecuta cuando se carga la página

playButton.addEventListener('click', handlerClickPlay);
