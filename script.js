"use strict";

/////////////////////////////////////////////////////////
// Constant of querySelectors

const x = document.querySelector(".x");
const o = document.querySelector(".o");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const restart = document.querySelector(".btn-restart");

let playerTurn;

let random;

const GameBoard = {
  gameBoard: [],
};

const displayController = {
  displayController: "display?",
};

const player = {
  name: prompt("What is your name?"),
  player: [0, 1],
  turn: true,
};

const playerX = function () {
  playerTurn = player.player[0];

  if (playerTurn === 0) {
    console.log("The player is first.");
    return;
  }
};

const player0 = function () {
  playerTurn = player.player[1];

  if (playerTurn === 1) {
    console.log("The computer is first.");
    gameLogic();
    return;
  }
};
// Helper functions to facilitate checkWIn logic and avoid repetition
function helperX(a, b, c) {
  return (
    a.textContent === "X" && b.textContent === "X" && c.textContent === "X"
  );
}

function helperO(a, b, c) {
  return (
    a.textContent === "O" && b.textContent === "O" && c.textContent === "O"
  );
}

function helperXWin() {
  if (playerTurn === 0) {
    console.log(`Player ${player.name} wins!!`);
    return init();
  }
  if (playerTurn === 1) {
    console.log(`Computer wins!!`);
    return init();
  }
}

function helperOWin() {
  if (playerTurn === 0) {
    console.log(`Computer wins!!`);
    return init();
  }
  if (playerTurn === 1) {
    console.log(`Player ${player.name} wins!!`);
    return init();
  }
}

const checkWin = function () {
  // Diferent scenerios of computer/player wins the game

  if (helperX(btn1, btn2, btn3)) {
    helperXWin();
  }
  if (helperO(btn1, btn2, btn3)) {
    helperOWin();
  }
  if (helperX(btn4, btn5, btn6)) {
    helperXWin();
  }
  if (helperO(btn4, btn5, btn6)) {
    helperOWin();
  }
  if (helperX(btn7, btn8, btn9)) {
    helperXWin();
  }
  if (helperO(btn7, btn8, btn9)) {
    helperOWin();
  }
  if (helperX(btn1, btn4, btn7)) {
    helperXWin();
  }
  if (helperO(btn1, btn4, btn7)) {
    helperOWin();
  }
  if (helperX(btn2, btn5, btn8)) {
    helperXWin();
  }
  if (helperO(btn2, btn5, btn8)) {
    helperOWin();
  }
  if (helperX(btn3, btn6, btn9)) {
    helperXWin();
  }
  if (helperO(btn3, btn6, btn9)) {
    helperOWin();
  }
  if (helperX(btn1, btn5, btn9)) {
    helperXWin();
  }
  if (helperO(btn1, btn5, btn9)) {
    helperOWin();
  }
  if (helperX(btn3, btn5, btn7)) {
    helperXWin();
  }
  if (helperO(btn3, btn5, btn7)) {
    helperOWin();
  }
};

const computerTurn = function () {
  random = Math.floor(Math.random() * 9);

  // If random is a number corresponding to the box, then mark the box
  if (random === 1 && playerTurn === 0) {
    if (btn1.textContent === "O" || btn1.textContent === "X") {
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
      
    btn1.textContent = "O";
    return;
  }
  if (random === 2 && playerTurn === 0) {
    if (btn2.textContent === "O" || btn2.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn2.textContent = "O";
    return;
  }
  if (random === 3 && playerTurn === 0) {
    if (btn3.textContent === "O" || btn3.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }

    btn3.textContent = "O";
    return;
  }
  if (random === 4 && playerTurn === 0) {
    if (btn4.textContent === "O" || btn4.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn4.textContent = "O";
    return;
  }
  if (random === 5 && playerTurn === 0) {
    if (btn5.textContent === "O" || btn5.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn5.textContent = "O";
    return;
  }
  if (random === 6 && playerTurn === 0) {
    if (btn6.textContent === "O" || btn6.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn6.textContent = "O";
    return;
  }
  if (random === 7 && playerTurn === 0) {
    if (btn7.textContent === "O" || btn7.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn7.textContent = "O";
    return;
  }
  if (random === 8 && playerTurn === 0) {
    if (btn8.textContent === "O" || btn8.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn8.textContent = "O";
    return;
  }
  if (random === 9 && playerTurn === 0) {
    if (btn9.textContent === "O" || btn9.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn9.textContent = "O";
    return;
  }
  if (random === 1 && playerTurn === 1) {
    if (btn1.textContent === "O" || btn1.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn1.textContent = "X";
    return;
  }
  if (random === 2 && playerTurn === 1) {
    if (btn2.textContent === "O" || btn2.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn2.textContent = "X";
    return;
  }
  if (random === 3 && playerTurn === 1) {
    if (btn3.textContent === "O" || btn3.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn3.textContent = "X";
    return;
  }
  if (random === 4 && playerTurn === 1) {
    if (btn4.textContent === "O" || btn4.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn4.textContent = "X";
    return;
  }
  if (random === 5 && playerTurn === 1) {
    if (btn5.textContent === "O" || btn5.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn5.textContent = "X";
    return;
  }
  if (random === 6 && playerTurn === 1) {
    if (btn6.textContent === "O" || btn6.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn6.textContent = "X";
    return;
  }
  if (random === 7 && playerTurn === 1) {
    if (btn7.textContent === "O" || btn7.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn7.textContent = "X";
    return;
  }
  if (random === 8 && playerTurn === 1) {
    if (btn8.textContent === "O" || btn8.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn8.textContent = "X";
    return;
  }
  if (random === 9 && playerTurn === 1) {
    if (btn9.textContent === "O" || btn9.textContent === "X"){
      random = Math.floor(Math.random() * 9);
      return computerTurn();
    }
    btn9.textContent = "X";
    return;
  }
};

const gameLogic = function () {
  if (playerTurn === 0) {
    this.textContent = "X";
    computerTurn();
    checkWin();
  }

  if (playerTurn === 1) {
    computerTurn();
    this.textContent = "O";
    checkWin();
  }
};

const init = function () {
  playerTurn = null;
  random = null;
  btn1.textContent = "";
  btn2.textContent = "";
  btn3.textContent = "";
  btn4.textContent = "";
  btn5.textContent = "";
  btn6.textContent = "";
  btn7.textContent = "";
  btn8.textContent = "";
  btn9.textContent = "";
};

x.addEventListener("click", playerX);
o.addEventListener("click", player0);
btn1.addEventListener("click", gameLogic);
btn2.addEventListener("click", gameLogic);
btn3.addEventListener("click", gameLogic);
btn4.addEventListener("click", gameLogic);
btn5.addEventListener("click", gameLogic);
btn6.addEventListener("click", gameLogic);
btn7.addEventListener("click", gameLogic);
btn8.addEventListener("click", gameLogic);
btn9.addEventListener("click", gameLogic);
restart.addEventListener("click", init);
