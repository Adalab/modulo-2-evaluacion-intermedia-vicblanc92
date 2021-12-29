'use strict';

const selectMove = document.querySelector('.js-selector');
const playButton = document.querySelector('.js-button');
const letsGo = document.querySelector('.js-playGame');
let inputComputer = document.querySelector('.js-inputComputer');
let inputUser = document.querySelector('.js-inputUser');
const computerMove = document.querySelector('.js-computerMove');
let countUser = 0;
let countComputer = 0;
let totalMovements = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function numberMovement() {
  const randomNum = getRandomNumber(10);
  if (randomNum < 3) {
    console.log('Piedra');
    computerMove.innerHTML = 'Movimiento: Piedra';
    return 'Piedra';
  } else if (randomNum >= 6) {
    console.log('Papel');
    computerMove.innerHTML = 'Movimiento: Papel';
    return 'Papel';
  } else {
    computerMove.innerHTML = 'Movimiento: Tijera';
    console.log('Tijera');
    return 'Tijera';
  }
}

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
function paintComputerMove() {}

function resetGame() {
  if (countComputer <= 10 || countUser <= 10 || countComputer <= 10) {
  }
}

function addPoints() {}
function handlerClickPlay(event) {
  event.preventDefault();
  getRandomNumber();
  const computer = numberMovement();
  pointsUser(computer);
  addPoints();
  resetGame();
}

playButton.addEventListener('click', handlerClickPlay);
