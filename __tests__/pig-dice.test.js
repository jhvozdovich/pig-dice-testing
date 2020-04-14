import { PlayerResults } from "../src/pig-dice.js";
import { eachRoll } from "../src/pig-dice.js";
import { turnTotal } from "../src/pig-dice.js";

describe ("PlayerResults", () => {
  test("should correctly initialize a game with player totals of 0, a round of 1, and starting with player 1", () => {
    var playerResults = new PlayerResults();
    expect(playerResults.player1GrandTotal).toEqual(0);
    expect(playerResults.player2GrandTotal).toEqual(0);
    expect(playerResults.player1Turn).toEqual(true);
    expect(playerResults.round).toEqual(1);
  });
});

describe ( "eachRoll", () => {
  test ("should generate random number between 1 and 6 and return 0 if a 1 is rolled", () =>{
    expect(eachRoll()).toBeGreaterThanOrEqual(0);
    expect(eachRoll()).toBeLessThan(7);
  });
});

describe ("switchPlayer", () => {
  test("should switch between players 1 and 2 with a boolean", () => {
    var playerResults = new PlayerResults();
    playerResults.switchPlayer();
    expect(playerResults.player1Turn).toEqual(false);
  });
});

describe ("updateTotal", () => {
  test("should add player's round to their grand total", () => {
    var playerResults = new PlayerResults();
    playerResults.updateTotal(2);
    expect(playerResults.player1GrandTotal).toEqual(2);
  });
});



// PlayerResults.prototype.updateTotal = function(turnTotal) {
//   if (this.player1Turn) {
//     this.player1GrandTotal += turnTotal;
//     this.switchPlayer();
//   } else {
//     this.player2GrandTotal += turnTotal;
//     this.round += 1;
//     if (this.round === 4) {
//       endOfGame();
//     } else {
//       this.switchPlayer();
//     }
//   }
// };
