('use strict');
console.log('Holis');
//1.Variables globales :querySelector

const selectMove = document.querySelector('.js-selector');
const playButton = document.querySelector('.js-button');
const letsGo = document.querySelector('.js-playGame');
let inputComputer = document.querySelector('.js-inputComputer');
let inputUser = document.querySelector('.js-inputUser');
let countUser = 0;
let countComputer = 0;

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
    countUser++;
    inputUser.value = countUser;
  } else if (userPoints === 'Piedra' && computerPoints === 'Papel') {
    letsGo.innerHTML = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Papel' && computerPoints === 'Piedra') {
    letsGo.innerHTML = 'Has ganado';
    countUser++;
    inputUser.value = countUser;
  } else if (userPoints === 'Papel' && computerPoints === 'Tijera') {
    letsGo.innerHTML = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Tijera' && computerPoints === 'Piedra') {
    letsGo.innerHTML = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Tijera' && computerPoints === 'Papel') {
    letsGo.innerHTML = 'Has ganado';
    countUser++;
    inputUser.value = countUser;
  }
}

function resetGame() {
  if (countComputer <= 10 || countUser <= 10 || countComputer <= 10) {
    break;
  }
}

function addPoints() {}
function handlerClickPlay(event) {
  event.preventDefault();
  const computer = numberMovement();
  pointsUser(computer);
  addPoints();
  resetGame();
}

//3. Código que se ejecuta cuando se carga la página

playButton.addEventListener('click', handlerClickPlay);
