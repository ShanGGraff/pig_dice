//Business Logic

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

function PlayerSelect() {

}

function Turn () {
  // hit button to roll
  //let turnScore = 0;
  //let roll = Die();
  let turnScore = 0;

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
    let rollDice = Die();
    console.log(rollDice);

  //  $("button#rollDice").click(function() {
  //    let roll = Die();
  //    console.log(roll);
      //turnScore = roll += roll;
  //  });
  });
});

