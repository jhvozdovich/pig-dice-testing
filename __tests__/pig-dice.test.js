import { PlayerResults } from "../src/pig-dice.js";
import { eachRoll } from "../src/pig-dice.js";
// import { turnTotal } from "../src/pig-dice.js";

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
  test ("should generate random number between 1 and 6", () =>{
    expect(eachRoll()).toBeGreaterThan(0);
    expect(eachRoll()).toBeLessThan(7);
  });
});
