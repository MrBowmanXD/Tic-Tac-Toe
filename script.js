"use strict";

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

let playerTurn;

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
    return;
  }
};

let random;

const computerTurn = function () {
  random = Math.floor(Math.random() * 9);

  // If the box is already marked,  then return
  /*
  if (
    document.querySelector(".btn-1").textContent === "O" ||
    document.querySelector(".btn-1").textContent === "X"
  )
    return;

  if (
    document.querySelector(".btn-2").textContent === "O" ||
    document.querySelector(".btn-2").textContent === "X"
  )
    return;

  if (
    document.querySelector(".btn-3").textContent === "O" ||
    document.querySelector(".btn-3").textContent === "X"
  )
    return;

  if (
    document.querySelector(".btn-4").textContent === "O" ||
    document.querySelector(".btn-4").textContent === "X"
  )
    return;

  if (
    document.querySelector(".btn-5").textContent === "O" ||
    document.querySelector(".btn-5").textContent === "X"
  )
    return;

  if (
    document.querySelector(".btn-6").textContent === "O" ||
    document.querySelector(".btn-6").textContent === "X"
  )
    return;

  if (
    document.querySelector(".btn-7").textContent === "O" ||
    document.querySelector(".btn-7").textContent === "X"
  )
    return;

  if (
    document.querySelector(".btn-8").textContent === "O" ||
    document.querySelector(".btn-8").textContent === "X"
  )
    return;

  if (
    document.querySelector(".btn-9").textContent === "O" ||
    document.querySelector(".btn-9").textContent === "X"
  )
    return;

    */
  // If random is a number corresponding to the box, then mark the box
  if (random === 1 && playerTurn === 0) {
    document.querySelector(".btn-1").textContent = "O";
    return;
  }
  if (random === 2 && playerTurn === 0) {
    document.querySelector(".btn-2").textContent = "O";
    return;
  }
  if (random === 3 && playerTurn === 0) {
    document.querySelector(".btn-3").textContent = "O";
    return;
  }
  if (random === 4 && playerTurn === 0) {
    document.querySelector(".btn-4").textContent = "O";
    return;
  }
  if (random === 5 && playerTurn === 0) {
    document.querySelector(".btn-5").textContent = "O";
    return;
  }
  if (random === 6 && playerTurn === 0) {
    document.querySelector(".btn-6").textContent = "O";
    return;
  }
  if (random === 7 && playerTurn === 0) {
    document.querySelector(".btn-7").textContent = "O";
    return;
  }
  if (random === 8 && playerTurn === 0) {
    document.querySelector(".btn-8").textContent = "O";
    return;
  }
  if (random === 9 && playerTurn === 0) {
    document.querySelector(".btn-9").textContent = "O";
    return;
  }
  if (random === 1 && playerTurn === 1) {
    document.querySelector(".btn-1").textContent = "X";
    return;
  }
  if (random === 2 && playerTurn === 1) {
    document.querySelector(".btn-2").textContent = "X";
    return;
  }
  if (random === 3 && playerTurn === 1) {
    document.querySelector(".btn-3").textContent = "X";
    return;
  }
  if (random === 4 && playerTurn === 1) {
    document.querySelector(".btn-4").textContent = "X";
    return;
  }
  if (random === 5 && playerTurn === 1) {
    document.querySelector(".btn-5").textContent = "X";
    return;
  }
  if (random === 6 && playerTurn === 1) {
    document.querySelector(".btn-6").textContent = "X";
    return;
  }
  if (random === 7 && playerTurn === 1) {
    document.querySelector(".btn-7").textContent = "X";
    return;
  }
  if (random === 8 && playerTurn === 1) {
    document.querySelector(".btn-8").textContent = "X";
    return;
  }
  if (random === 9 && playerTurn === 1) {
    document.querySelector(".btn-9").textContent = "X";
    return;
  }
};

const gameLogic = function () {
  if (playerTurn === 0) {
    this.textContent = "X";
    computerTurn();
  }

  if (playerTurn === 1) {
    computerTurn();
    this.textContent = "O";
  }
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
