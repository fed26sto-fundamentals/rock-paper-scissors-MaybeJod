/* TODO */
/* 
    -Display user choice 
    -Display game score
    -

*/

/* --------------------------------------------------------------------------- */

/* computer choice for rock, paper and scissor */
let getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
};

/* assign 0 - 2 with rock paper and scissor */
function disComChoice() {
    let result = getComputerChoice();

    if (result === 0) {
        console.log("Rock");
        return "Rock";
    } else if (result === 1) {
        console.log("Scissors");
        return "Scissors";
    } else {
        console.log("Paper");
        return "Paper";
    }
}

/* print computer choice to DOM */
function showComChoice() {
    let printComChoice = document.getElementById("comChoice");

    return printComChoice.innerHTML = disComChoice();
}

/* --------------------------------------------------------------------------- */

    let usrRock = document.getElementById("rock");
    let usrPaper = document.getElementById("paper");
    let usrScissors = document.getElementById("scissors");

    let usrChoice = document.getElementById('usr-choice');

/* display user choice */
let userRock = () => {
    return usrChoice.innerHTML = "Rock";
}

let userPaper = () => {
    return usrChoice.innerHTML = "Paper";
}

let userScissor = () => {
    return usrChoice.innerHTML = "Scissor";
}

/* Determine the winner */
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors")
        ||
        (userChoice === "Paper" && computerChoice === "Rock") 
        ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}


/* Play   
 a round of the game */
/* function playRound(userChoice) {
    let computerChoice = disComChoice();
    let result = determineWinner(userChoice, computerChoice);
    console.log(`You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`);
    

} */

// Add event listeners to the user's choice buttons
/* usrRock.addEventListener("click", () => playRound("Rock"));
usrPaper.addEventListener("click", () => playRound("Paper"));
usrScissors.addEventListener("click", () => playRound("Scissors"));
 */





/* play game */
/* function play() {
    showComChoice();
    return userRock;
} */