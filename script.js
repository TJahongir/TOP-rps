const roundCounter = document.querySelector('.round')
const playerName = document.querySelector('.player_name')
const playerScore = document.querySelector('.score_player') 
const computerScore = document.querySelector('.score_computer') 
const roundResultText = document.querySelector('.round-result')
const cards = [...document.querySelectorAll('.cards')]


let playerScoreCount = 0;
let computerScoreCount = 0;

cards.map(card => {
    card.addEventListener('click', (e) => playerSelection = e.target.name)
})



let computerPlay = (randomNumber) => {
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
}
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        roundResultText.textContent = `${playerSelection} and ${computerSelection} is always a Tie!`
    } else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
                playerSelection ==='scissors' && computerSelection === 'paper' ||
                playerSelection === 'paper' && computerSelection === 'rock') {
                playerScoreCount++
                playerScore.textContent = playerScoreCount
                roundResultText.textContent = `You Won! ${playerSelection} beats ${computerSelection}`

    } else {
        computerScoreCount++
        computerScore.textContent = computerScoreCount + 1
        roundResultText.textContent = `You Lost! ${computerSelection} beats ${playerSelection}!`
    }


}

let game = () => {
    //playerName.textContent = prompt("What is your name?" , 'Player')
    let playerSelection = 'paper';
    computerScore.textContent = computerScoreCount
    playerScore.textContent = playerScoreCount
    playRound(playerSelection, computerPlay(randomNumberPicker()))
    for(let i = 0; i < 5; ++i) {
        roundCounter.textContent = `Round ${i + 1}`
    }
}

let randomNumberPicker = () => (Math.floor(Math.random() * 3))

game();
