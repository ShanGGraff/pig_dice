//Business Logic

// function PigDice (player1, player2) {
//   this.player1 = player1;
//   this.player2 = player2;
// }
let turnScore = 0;

function PigDice() {
  this.players = {};
  this.currentId = 0;
}

PigDice.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PigDice.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
};

function Player(currentScore) {
  this.currentScore = turnScore + currentScore;
  return this.currentScore;
}

function Die() {
  return Math.floor((Math.random() * 6) + 1);
}

function Turn () {
  // hit button to roll
  //let turnScore = 0;
  //let roll = Die();

  if (roll === 1) {
    this.roll = 0;
    //switch player
  } else {
    //turnScore = this.roll += roll;
    //store value in turnScore
  }
  return turnScore;
}

function Hold() {
// save turnScore to currentScore
// switch player
}


//UserInterface Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    $("#score1") = turnScore;

  });
});

$("button#rolldice").click(function() {
  let roll = Die();
  turnScore = roll += roll;
});