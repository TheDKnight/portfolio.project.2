/**
 * Function that waits for the dom to load.
 * It then gets all the button elements and waits for a click in in a for loop.
 * When it recieves and event it sends the event to the function userchoice.
 * Then it runs the choose winner function
 */

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function (event) {
                userChoice(event);
                chooseWinner();
            }

        );

    }

});

/**
 * This function takes the event from the user click event lister.
 * A var players is used to recieve the event and stores it.
 * Then it returns the varaible so when the function is run it will return the var event
 * 
 */

function userChoice() {
    let players = event.target.id;
    return players;
}

/**
 * This function is used for selecting the comuters choice.
 * The hands varaible holds the selection of cards.
 * The compchoice varaible selects one of the cards.
 * It returns a random selection from the array.
 * 
 */

function computerChoice() {
    let hands = ["rock", "paper", "scissor", "lizard", "spock"];
    let compChoice = Math.floor(Math.random() * hands.length);
    return hands[compChoice];

}


/**
 * This function takes the value from the userchoice function and the computer choice function.
 * The function checks the hands against each other to determine the winner.
 * It also logs to a varaible the user and computers score and sends the result to there functions.
 */

function chooseWinner() {
    playerSelction = userChoice();
    compSelection = computerChoice();
    let result = '';
    if (playerSelction === compSelection) {
        result = 'Draw!';
        console.log("Draw");

    } else if (playerSelction === 'rock') {
        if (compSelection === 'paper' || compSelection === 'spock') {
            result = 'You lose!';
            computerScore();
        } else {
            result = 'You win!';
            userScore();
        }
    } else if (playerSelction === 'paper') {
        if (compSelection === 'lizard' || compSelection === 'scissor') {
            result = 'You lose!';
            computerScore();
        } else {
            result = 'You win!';
            userScore();
        }
    } else if (playerSelction === 'scissor') {
        if (compSelection === 'spock' || compSelection === 'rock') {
            result = 'You lose!';
            computerScore();
        } else {
            result = 'You win!';
            userScore();
        }
    } else if (playerSelction === 'lizard') {
        if (compSelection === 'rock' || compSelection === 'scissor') {
            result = 'You lose!';
            computerScore();
        } else {
            result = 'You win!';
            userScore();
        }
    } else if (playerSelction === 'spock') {
        if (compSelection === 'paper' || compSelection === 'lizard') {
            result = 'You lose!';
            computerScore();
        } else {
            result = 'You win!';
            userScore();
        }
    }

    document.getElementById('score').innerHTML = ` You Picked ${playerSelction} Computer Picked ${compSelection} ` + result;

    console.log(playerSelction);
    console.log(compSelection);
}


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
}