import { playerResults } from "./main.js";

export var endOfGame = function() {
  $('.gameover').show();
  $('.game').hide();
  playerResults.round = 0;
  if (playerResults.player1GrandTotal === playerResults.player2GrandTotal) {
    $('.winner').html('Tie!');
  } else if (playerResults.player1GrandTotal > playerResults.player2GrandTotal){
    $('.winner').html('Player 1!');
  } else {
    $('.winner').html('Player 2!');
  }
};