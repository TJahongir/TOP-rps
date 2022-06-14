let playerSelection = 'paper';
let computerSelection = '';

let computerPlay = (randomNumber) => {
    if (randomNumber === 0) {
        console.log('Rock')
        return 'rock'
    } else if (randomNumber === 1) {
        console.log('Paper')
        return 'paper'
    } else {
        console.log('Scissors')
        return 'scissors'
}
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `${playerSelection} and ${computerSelection} is always a Tie!`
    } else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
                playerSelection ==='scissors' && computerSelection === 'paper' ||
                playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Won! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You Lost! ${computerSelection} beats ${playerSelection}!`
    }


}

let game = () => {
    for(let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerPlay(randomNumberPicker())));
        console.log(`${i}`)
    }
}

let randomNumberPicker = () => (Math.floor(Math.random() * 3))

game();
