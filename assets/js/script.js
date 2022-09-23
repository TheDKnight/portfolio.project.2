



//function userChoice(){
    document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
     button.addEventListener("click", function(event){
     let players = event.target.id 
    console.log(players);
  })
  
}
}
r//eturn userChoice()
//}

function computerChoice(){

    let hands = ["rock","paper","scissor","lizard","spock"]
    let compChoice = Math.floor(Math.random()*hands.length);
    return hands[compChoice];

}

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