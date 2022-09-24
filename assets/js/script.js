
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
//console.log(players)
  return players 
   //
   
 // console.log(players)
   // return userChoice(event)
  
   //return userChoice(players)
   
}


function computerChoice(){
    let hands = ["rock","paper","scissor","lizard","spock"]
    let compChoice = Math.floor(Math.random()*hands.length);
    return hands[compChoice];

}


function chooseWinner(){
 playerSelction = userChoice()
 compSelection = computerChoice()

if (playerSelction === compSelection) {
  console.log("Draw")
  document.getElementById('score').innerHTML = `Draw: You Picked ${playerSelction} Computer Picked ${compSelection} ` 
}//else if 

console.log(playerSelction)
console.log(compSelection)
};


/**
 * Gets the users winning score
 */
function userScore() {
   
}

/**
 * Gets the computers winning score
 */
function computerScore() {
};