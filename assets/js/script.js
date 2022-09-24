
    document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
     button.addEventListener("click", function(event){
     userChoice(event)
     chooseWinner()
  })
  }
  
});

function userChoice(){
  let  players = event.target.id  
  return players 
}


function computerChoice(){
    let hands = ["rock","paper","scissor","lizard","spock"]
    let compChoice = Math.floor(Math.random()*hands.length);
    return hands[compChoice];

}


function chooseWinner(){
 playerSelction = userChoice()
 compSelection = computerChoice()
let result = '';
if (playerSelction === compSelection) {
  result = 'Draw!';
  console.log("Draw")

  // document.getElementById('score').innerHTML = `Draw: You Picked ${playerSelction} Computer Picked ${compSelection} ` 
}

else if (playerSelction === 'rock'){
    if (compSelection === 'paper' || compSelection ===  'spock'){
        result = 'You lose!';
        computerScore()
    } else {
        result = 'You win!';
        userScore()
    }
}

else if (playerSelction === 'paper'){
    if (compSelection === 'lizard' || compSelection ===  'scissor'){
        result = 'You lose!';
        computerScore()
    } else {
        result = 'You win!';
        userScore()
    }
}

else if (playerSelction === 'scissor'){
    if (compSelection === 'spock' || compSelection ===  'rock'){
        result = 'You lose!';
        computerScore()
    } else {
        result = 'You win!';
        userScore()
    }
}

else if (playerSelction === 'lizard'){
    if (compSelection === 'rock' || compSelection ===  'scissor'){
        result = 'You lose!';
        computerScore()
    } else {
        result = 'You win!';
        userScore()
    }
}

else if (playerSelction === 'spock'){
    if (compSelection === 'paper' || compSelection === 'lizard'){
        result = 'You lose!';
        computerScore()
    } else {
        result = 'You win!';
        userScore()
    }
}

document.getElementById('score').innerHTML =  ` You Picked ${playerSelction} Computer Picked ${compSelection} ` + result; 

console.log(playerSelction)
console.log(compSelection)
};


/**
 * Gets the users winning score
 */
function userScore() {
  let userScore = parseInt(document.getElementById('userwins').innerText);
  document.getElementById('userwins').innerHTML = ++userScore;
}

/**
 * Gets the computers winning score
 */
function computerScore() {
  let compScore = parseInt(document.getElementById('computerwins').innerText);
  document.getElementById('computerwins').innerHTML = ++compScore;
};