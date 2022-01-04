'use strict';

const selectMove = document.querySelector('.js-selector');
const playButton = document.querySelector('.js-button');
const textElement = document.querySelector('.js-playGame');
let inputComputer = document.querySelector('.js-inputComputer');
let inputUser = document.querySelector('.js-inputUser');
const computerMove = document.querySelector('.js-computerMove');

let countUser = 0;
let countComputer = 0;
let totalMovements = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function addComputerMovementsInHtml() {
  const randomNum = getRandomNumber(10);
  if (randomNum <= 3) {
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

function addUserAndComputerPoints(computerPoints) {
  const userPoints = selectMove.value;

  if (userPoints === computerPoints) {
    textElement.innerHTML = 'EMPATE';
  } else if (userPoints === 'Piedra' && computerPoints === 'Tijera') {
    textElement.innerHTML = 'Has ganado';
    countUser++;
    inputUser.value = countUser;
  } else if (userPoints === 'Piedra' && computerPoints === 'Papel') {
    textElement.innerHTML = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Papel' && computerPoints === 'Piedra') {
    textElement.innerHTML = 'Has ganado';
    countUser++;
    inputUser.value = countUser;
  } else if (userPoints === 'Papel' && computerPoints === 'Tijera') {
    textElement.innerHTML = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Tijera' && computerPoints === 'Piedra') {
    textElement.innerHTML = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Tijera' && computerPoints === 'Papel') {
    textElement.innerHTML = 'Has ganado';
    countUser++;
    inputUser.value = countUser;
  }
}

function resetGame() {
  totalMovements = countComputer + countUser;

  if (totalMovements === 10) {
    computerMove.innerHTML = 'Has llegado a 10 partidas';
    countComputer = 0;
    countUser = 0;
  }
}

function paintComputerMove() {}

function handlerClickPlay(event) {
  event.preventDefault();
  getRandomNumber();
  const computer = addComputerMovementsInHtml();
  addUserAndComputerPoints(computer);
  resetGame();
}

playButton.addEventListener('click', handlerClickPlay);
