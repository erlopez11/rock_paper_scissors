
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const youScore = document.querySelector('.you-score');
const compScore = document.querySelector('.comp-score');
const roundOutcome = document.querySelector('.round-outcome');
const winner = document.querySelector('.winner');
const youFinal = document.querySelector('.you-final');
const compFinal = document.querySelector('.comp-final');
const overlay = document.querySelector('.overlay');
const restartBtn = document.querySelector('.restart');
//add a section for displaying the round number out of 5

/*Player Selection
function getPlayerSelection(playerChoice) {
    
     playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        console.log('Invalid Selection.');
    }
};*/



//Computer Selection

function getComputerSelection() {
    let computerChoice = Math.floor(Math.random()* 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors'
            break;
    }
};


//Round of Play

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        roundOutcome.textContent = 'It\s a tie!';
    } 
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            roundOutcome.textcontent = "You lost. <br> Computer chose paper!";
        } else {
            playerScore++;
            roundOutcome.textContent = "You won! <br> Computer chose scissors!";
        }
    } if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            roundOutcome.textContent = "You lost. Computer chose scissors!";
        } else {
            playerScore++
            roundOutcome.textContent = "You won! Computer chose rock!";
        }
    } if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++
            roundOutcome.textContent = "You lost. Computer chose rock!";
        } else {
            playerScore++;
            roundOutcome.textContent = "You won! Computer chose paper!";
        }
    } 
  };

  // Score Function

  function updateScore() {
    youScore.textContent = `You: ${playerScore}`;
    compScore.textContent = `Computer: ${computerScore}`;
  }

// End Game

function endGame() {
    if (playerScore === 5 || computerScore === 5) {
        overlay.style.display = "flex";
        youFinal.textContent = `You: ${playerScore}`;
        compFinal.textContent = `Computer: ${computerScore}`;
        if (playerScore > computerScore) {
            winner.textContent = "Congratulations, you won!";
        } else {
            winner.textContent = "Too bad, you lost.";
        }
    }
}

//The Game

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

function playGame(playerSelect) {
   let computerSelection = getComputerSelection();
   playRound(playerSelect, computerSelection);
   updateScore();
   endGame();
};

// Restart 
restartBtn.addEventListener('click', restartGame);
function restartGame() {
    overlay.style.display = 'none';
    playerScore = 0;
    computerScore = 0;
    youScore.textContent = `You: ${playerScore}`;
    compScore.textContent = `Computer: ${computerScore}`;
    roundOutcome.textContent = "Who will win?";
}



