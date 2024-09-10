/* assigns 0 - 1 with rock, paper or scissors */
function getComputerChoice() {

    let computerResult = Math.floor(Math.random() * 3);
    
    if (computerResult === 0) {
        
        return "rock";
    } else if (computerResult === 1) {
      
        return "scissors";
    } else {

        return "paper";
    }
}

/* prompt human for rock, paper or scissors */
function getHumanChoice() {
  let humanChoice = prompt('Rock, paper or scissors');

  return humanChoice;
}

/* play a round */
function playRound (humanChoice, computerChoice) {
  
  /* returns the prompts to lower case */
  let human = humanChoice.toLocaleLowerCase();
  let computer = computerChoice.toLocaleLowerCase();

  /* game logic for a round */
  if (human === computer) {

    console.log(`It's a tie! You choose ${human} and the computer choose ${computer}`);

    /* used to count score at the end of the game */
    return "tie";

  } else if (human === "rock" && computer === "scissors" 
    || human === "paper" && computer === "rock" 
    || human === "scissors" && computer === "paper") {

    console.log("You win! " + `You choose ${human} and the computer choose ${computer}`);

    /* used to count score at the end of the game */
    return "win";

  } else {

    console.log("Computer wins! " + `You choose ${human} and the computer choose ${computer}`);

    /* used to count score at the end of the game */
    return "lose";

  }

}

/* total game logic, play five rounds, tally the total score at the end */
function playGame() {

  /* both starts at 0 points */
  let humanScore = 0;
  let computerScore = 0;

  /* for loop to play a total of 5 rounds */
  for (i = 0; i < 5; i++) {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    /* if statement to add 1 point for each round */
    if (result === "win") {
      humanScore++;
    } else if (result === "lose") {
      computerScore++;
    }

  }

  /* console log the total score */
  console.log(`You: ${humanScore} ----- Computer: ${computerScore}`);

  /* if statement for what to what to display at the end of the game, human win, computer lose or if its a tie! */
  if (humanScore > computerScore) {
    console.log("Congrats, you win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game");
  } else {
    console.log("The game ends in a tie");
  }

}

/* call back to play the game */
playGame();