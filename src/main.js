import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { turnTotal } from './pig-dice.js';
import { PlayerResults } from './pig-dice.js';
import { roundTotal } from './pig-dice.js';

// User Interface Logic ------------------------------
// function from animate.css github
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}

export var diceDisplay = function(rollResult) {
  var pig = $('.dice-hide#pig');
  $('.dice-hide').hide();
  if (rollResult === 1) {
    pig.show();
    animateCSS('.dice-hide#pig', 'bounce');
  } else if (rollResult === 2) {
    $('.dice-hide#two').show();
  } else if (rollResult === 3) {
    $('.dice-hide#three').show();
  } else if (rollResult === 4) {
    $('.dice-hide#four').show();
  } else if (rollResult === 5) {
    $('.dice-hide#five').show();
  } else if (rollResult === 6) {
    $('.dice-hide#six').show();
  }
};

export var roundTotal = function() {
  var rollResult = eachRoll();  //calls business function
  diceDisplay(rollResult); //UI for display based on business logic
  if (rollResult === 0){
    diceDisplay(1);   //UI for dice display
    turnTotal = 0;    //updates global variable
    playerResults.updateTotal(turnTotal);  //calls business function to update player results with 0 after rolling a 1
  }
  else {
    turnTotal += rollResult;  //updates global variable
    $('.roll-total').html(turnTotal);  //UI for update of score, accumulates with each roll
  } 
};

export var playerResults = new PlayerResults ();

var refreshScores = function() {
  $('.playerOneScore').html(playerResults.player1GrandTotal);
  $('.playerTwoScore').html(playerResults.player2GrandTotal);
  $('.round').html(playerResults.round);
  if (playerResults.player1Turn) {
    $('.playerId').html(1);
  } else {
    $('.playerId').html(2);
  } 
};

$(document).ready(function() {
  $('#rules-button').click(function() {
    $('.rules').slideToggle();
  });
  $('#start').click(function() {
    $('.game').show();
    $('.welcome').hide();
  });
  $('#pig').show();
  $('button#roll').click(function() {
    roundTotal();
    refreshScores();
  });
  $('button#hold').click(function() {  
    playerResults.updateTotal(turnTotal);
    refreshScores();
  });
  $('button#new-game').click(function() {
    window.location.reload();
  });
});