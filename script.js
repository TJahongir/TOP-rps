// UI
const roundCounter = document.querySelector('.round')
const playerName = document.querySelector('.player_name')
const playerScore = document.querySelector('.score_player') 
const computerScore = document.querySelector('.score_computer') 
const roundResultText = document.querySelector('.round-result')
const cards = [...document.querySelectorAll('.cards')]

// Modal
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal_button')
const modalTitle = document.querySelector('.modal_title')


let playerScoreCount = 0;
let computerScoreCount = 0;

cards.map(card => {
    card.addEventListener('click', (e) => playerSelection = e.target.name)
})


// Helper Functions
let randomNumberPicker = () => (Math.floor(Math.random() * 3))


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
    // while (playerScoreCount !== 5 || computerScoreCount !== 5) {

    // }
    if (playerSelection === computerSelection) {
        roundResultText.textContent = `${(playerSelection).toUpperCase()} and ${computerSelection} is always a Tie!`
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
    computerScore.textContent = computerScoreCount
    playerScore.textContent = playerScoreCount
    playerSelection = 'rock'
    playRound(playerSelection, computerPlay(randomNumberPicker()))
    for(let i = 0; i < 5; ++i) {
        console.log('Here!' + i)
        roundCounter.textContent = `Round ${i + 1}`
    }
}



game();
