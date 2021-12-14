('use strict');
console.log('Holis');
//1.Variables globales :querySelector

const selectMove = document.querySelector('.js-selector');
const playButton = document.querySelector('.js-button');
const userPoints = document.querySelector('.js-user');
const computerPoints = document.querySelector('.js-computer');
const letsGo = document.querySelector('.js-playGame');
let inputComputer = document.querySelector('.js-inputComputer');
let inputUser = document.querySelector('.js-inputUser');

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
    return 'Piedra';
  } else if (randomNum >= 6) {
    console.log('Papel');
    return 'Papel';
  } else {
    console.log('Tijera');
    return 'Tijera';
  }
}

// function piedraPapelTijera() {
//   if () {
//   }
// }

function pointsUser(computerPoints) {
  const userPoints = selectMove.value;

  if (userPoints === computerPoints) {
    letsGo.innerHTML = 'EMPATE';
  } else if (userPoints === 'Piedra' && computerPoints === 'Tijera') {
    letsGo.innerHTML = 'Has ganado';
  } else if (userPoints === 'Piedra' && computerPoints === 'Papel') {
    letsGo.innerHTML = 'Has perdido';
  } else if (userPoints === 'Papel' && computerPoints === 'Piedra') {
    letsGo.innerHTML = 'Has ganado';
  } else if (userPoints === 'Papel' && computerPoints === 'Tijera') {
    letsGo.innerHTML = 'Has perdido';
  } else if (userPoints === 'Tijera' && computerPoints === 'Piedra') {
    letsGo.innerHTML = 'Has perdido';
  } else if (userPoints === 'Tijera' && computerPoints === 'Papel') {
    letsGo.innerHTML = 'Has ganado';
  }
}

function addPoints() {
  let plusPointsComputer = (inputComputer += 1);
  let plusPointsUser = (inputUser += 1);
}

function handlerClickPlay(event) {
  event.preventDefault();
  const computer = numberMovement();
  pointsUser(computer);
  addPoints();
}

//3. Código que se ejecuta cuando se carga la página

playButton.addEventListener('click', handlerClickPlay);
