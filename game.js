

/* TODO */
/* 
    -Save score, play five rounds
    -add play button
]
*/

/* --------------------------------------------------------------------------- */

/* computer choice, assign 0 - 1 as rock, paper and scissors*/
let getComputerChoice = () => {

  let comResult = Math.floor(Math.random() * 3);
  
  if (comResult === 0) {
      console.log("Rock");
      return "Rock";
  } else if (comResult === 1) {
      console.log("Scissors");
      return "Scissors";
  } else {
      console.log("Paper");
      return "Paper";
  }
};

/* --------------------------------------------------------------------------- */

/* id selectors for DOM change */

  /* id for user rock, paper and scissors, used for event listeners */
  let usrRock = document.getElementById("rock");
  let usrPaper = document.getElementById("paper");
  let usrScissors = document.getElementById("scissors");

  /* id for printing computer choice, user choice and if the user or computer wins to DOM */
  let printComChoice = document.getElementById("comChoice");
  let usrChoice = document.getElementById('usr-choice');
  let win_lose = document.getElementById('win-lose');

/* --------------------------------------------------------------------------- */

/* Determine the winner */
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
      return "Don't win or lose. It's a tie!"; 
  } else if (
      (userChoice === "Rock" && computerChoice === "Scissors")
      ||
      (userChoice === "Paper" && computerChoice === "Rock") 
      ||
      (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
      return " Win!";
  } else {
      return " Lost, Computer wins!";
  }
}

/* --------------------------------------------------------------------------- */

/* Play a round of the game */
function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let result = determineWinner(userChoice, computerChoice);

  /* Console log the round score */
  /* console.log(`You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`); */

  usrChoice.innerHTML = userChoice;
  printComChoice.innerHTML = computerChoice;
  win_lose.innerHTML = result;
}

/* --------------------------------------------------------------------------- */

let startGame = document.getElementById("start");
let newBtn = document.getElementById("newBtn");

function start() {



  let gameBegin = `
      <button class="btn" id="rock">Rock</button>
      <button class="btn" id="paper">Paper</button>
      <button class="btn" id="scissors">Scissors</button>
  `
  newBtn.innerHTML = gameBegin;

  // Add event listeners to the user's choice buttons
  /* usrRock.addEventListener("click", () => playRound("Rock"));
  usrPaper.addEventListener("click", () => playRound("Paper"));
  usrScissors.addEventListener("click", () => playRound("Scissors")); */
}



/* if (start === true) {

  playRound();

  usrRock.addEventListener("click", () => playRound("Rock"));
  usrPaper.addEventListener("click", () => playRound("Paper"));
  usrScissors.addEventListener("click", () => playRound("Scissors"));
} else {
  console.log('did not start');
} */

/* --------------------------------------------------------------------------- */

// Add event listeners to the user's choice buttons
/* usrRock.addEventListener("click", () => playRound("Rock"));
usrPaper.addEventListener("click", () => playRound("Paper"));
usrScissors.addEventListener("click", () => playRound("Scissors")); */


