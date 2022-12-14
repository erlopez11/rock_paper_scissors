//Player Selection

const playerSelection = (playerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return console.log(playerChoice);
    } else {
        console.log('Invalid Selection.');
    }
}

playerSelection('RoCk');