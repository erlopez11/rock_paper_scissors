
let playerScore = 0;
let computerScore = 0;

//Player Selection
const getPlayerSelection = (playerChoice) => {
    
     playerChoice = prompt("Rock, paper, or scirros?").toLowerCase();
    
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        console.log('Invalid Selection.');
    }
};



//Computer Selection

const getComputerSelection = () => {
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

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return 'It\s a tie!';
    } 
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lost. Paper beats rock.';
            computerScore ++;
        } else {
            return 'You won! Rock beats scissors!';
            playerScore ++;
        }
    } if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lost. Scissors beats paper.';
            computerScore ++;
        } else {
            return 'You won! Paper beats rock!';
            playerScore ++;
        }
    } if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lost. Rock beats scissors.';
            computerScore ++;
        } else {
            return 'You won! Scissors beats paper!';
            playerScore ++;
        }
    } 
  };

//The Game

const playGame = () => {
    for (let i = 0; i < 5; i++) {
      let playerSelection = getPlayerSelection();
      let computerSelection = getComputerSelection();
      console.log(`you threw ${playerSelection}.`);
      console.log(`the computer threw ${computerSelection}.`);
      console.log(playRound(playerSelection, computerSelection));
    }
};

console.log('Player:' + playerScore);
console.log('Computer:' + computerScore);

playGame();



