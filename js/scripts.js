//Business Logic

let turnScore = 0;

function PigDice () {
    this.players = {};
    this.currentId = 0;
    this.turnId = 1;
  }

PigDice.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PigDice.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players[player.id] = player;
};

PigDice.prototype.changePlayer() {
  const numPlayers = this.players.length;
  if (this.turnId > numPlayers) {
    this.turnId = 1;
  } else {
    this.turnId += 1;
//    this.players[this.turnId].score;
  }

}

function Player() {
  this.score = 0;
}

Player.prototype.addScore = function(currentScore){
  //add logic
  
}

// die!
function die() {
  return Math.floor((Math.random() * 6) + 1);
}

function PlayerSelect() {
  // pigDice.players[]

}


function Turn () {
  // hit button to roll
  //let turnScore = 0;
  //let roll = Die();
  let turnScore = 0;
  turnScore += rollDice;
  if (roll === 1) {
    this.turnScore = 0;
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

function Player(currentScore) {
  this.currentScore = 0;
}

//UserInterface Logic
$(document).ready(function() {
  let pigDice = new PigDice();
  let newPlayer = new Player();
  let newPlayer1 = new Player();
  
  $("form#roll").submit(function(event) {
    event.preventDefault();
    // $("#score1") = turnScore;
    let rollDice = die();
    console.log(rollDice);
    $("#rollScore").text(rollDice);

    pigDice.addPlayer(newPlayer);
    pigDice.addPlayer(newPlayer1);
    console.log(pigDice);

  //  $("button#rollDice").click(function() {
  //    let roll = Die();
  //    console.log(roll);
      // turnScore = roll += roll;
  // });
  // });
  // $("form#startGame").submit(function(event) {
  //   event.preventDefault();
  //   // let pigDice = new PigDice();
  //   console.log("1");
    
  });
});

