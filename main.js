let playerScore = 0;
let computerScore = 0;
//add a section for displaying the round number out of 5

//Player Selection
function getPlayerSelection(playerChoice) {
    
     playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        console.log('Invalid Selection.');
    }
};



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
        return 'It\s a tie!';
    } 
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'You lost. Paper beats rock.';
        } else {
            playerScore++;
            return 'You won! Rock beats scissors!';
        }
    } if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            return 'You lost. Scissors beats paper.';
        } else {
            playerScore++
            return 'You won! Paper beats rock!';
        }
    } if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++
            return 'You lost. Rock beats scissors.';
        } else {
            playerScore++;
            return 'You won! Scissors beats paper!';
        }
    } 
  };

//The Game

function playGame() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = getPlayerSelection();
      let computerSelection = getComputerSelection();
      console.log(`you threw ${playerSelection}.`);
      console.log(`the computer threw ${computerSelection}.`);
      console.log(playRound(playerSelection, computerSelection));
      console.log(`Player: ${playerScore}`);
      console.log(`Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game!');
    } else if (playerScore < computerScore) {
        console.log('The computer won. Better luck next time. :/');
    } else {
        console.log('It\'s a tie!');
    }
};


playGame();



