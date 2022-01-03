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

function addUserAndComputerPoints(computerPoints, textElement) {
  const textElement = textElement.innerHTML;
  const userPoints = selectMove.value;

  if (userPoints === computerPoints) {
    textElement = 'EMPATE';
  } else if (userPoints === 'Piedra' && computerPoints === 'Tijera') {
    textElement = 'Has ganado';
    countUser++;
    inputUser.value = countUser;
  } else if (userPoints === 'Piedra' && computerPoints === 'Papel') {
    textElement = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Papel' && computerPoints === 'Piedra') {
    textElement = 'Has ganado';
    countUser++;
    inputUser.value = countUser;
  } else if (userPoints === 'Papel' && computerPoints === 'Tijera') {
    textElement = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Tijera' && computerPoints === 'Piedra') {
    textElement = 'Has perdido';
    countComputer++;
    inputComputer.value = countComputer;
  } else if (userPoints === 'Tijera' && computerPoints === 'Papel') {
    textElement = 'Has ganado';
    countUser++;
    inputUser.value = countUser;
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
