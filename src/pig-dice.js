// Business Logic --------------------------------------------
export var turnTotal = 0;

import { endOfGame } from "./main.js";

export function PlayerResults() {
  this.player1GrandTotal = 0,
  this.player2GrandTotal = 0,
  this.player1Turn = true,
  this.round = 1;
}

PlayerResults.prototype.updateTotal = function(turnTotal) {
  if (this.player1Turn) {
    this.player1GrandTotal += turnTotal;
    this.switchPlayer();
  } else {
    this.player2GrandTotal += turnTotal;
    this.round += 1;
    if (this.round === 4) {
      endOfGame();
    } else {
      this.switchPlayer();
    }
  }
};

PlayerResults.prototype.switchPlayer = function() {
  // this.player1Turn = !this.player1Turn;
  // turnTotal = 0;
};

export var eachRoll = function() {
  var randomGenerator = Math.ceil(Math.random() * 6);
  if (randomGenerator === 1) {
    return 0;
  } else {
    return randomGenerator;
  }
}