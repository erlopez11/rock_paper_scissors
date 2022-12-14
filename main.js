//Player Selection

const getplayerSelection = (playerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return console.log(playerChoice);
    } else {
        console.log('Invalid Selection.');
    }
}

getplayerSelection('RoCk');

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
}
