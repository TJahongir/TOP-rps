// UI
const roundCounter = document.querySelector('.round')
const playerName = document.querySelector('.player_name')
const playerScore = document.querySelector('.score_player') 
const computerScore = document.querySelector('.score_computer') 
const roundResultText = document.querySelector('.round-result')
const cards = [...document.querySelectorAll('.cards')]

// Modal
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-button')
const modalTitle = document.querySelector('.modal-title')
const darken = document.querySelector('.darken')



let playerScoreCount = 0;
let computerScoreCount = 0;
let round = 1

// Helper Functions
let randomNumberPicker = () => (Math.floor(Math.random() * 3))

let firstCharUpperCase = (string) =>{
    string = string.charAt(0).toUpperCase() + string.slice(1)
    return string
}

let startOver = (e) => {
    darken.style.visibility = 'hidden'
    roundResultText.textContent = "Let's Start Again!"
}

modalBtn.addEventListener('click', (e) => startOver(e))

let computerPlay = (randomNumber) => {
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
}
}

let restartScores = () =>  {
    playerScoreCount = 0
    computerScoreCount = 0
    round = 1
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
    roundCounter.textContent = `Round ${round}`
}

let modalActive = () => {
    modalTitle.textContent = playerScoreCount === 5 ? 'You Won!' :
                             computerScoreCount === 5 ? 'You Lost! Wanna Try Again?':
                             'Wassup'
    restartScores()
    darken.style.visibility = 'visible'
}

let playerPlay = (e) => {
    playerSelection = e.target.name;
    let computerSelection = computerPlay(randomNumberPicker())
    playRound(playerSelection, computerSelection);
    playerScoreCount === 5 || computerScoreCount === 5 ? modalActive() : 'not yet'
}

cards.map(card => {
    card.addEventListener('click', playerPlay)
})

let playRound = (playerSelection, computerSelection) => {
    computerScore.textContent = computerScoreCount
    playerScore.textContent = playerScoreCount
    roundCounter.textContent = `Round ${++round}`
    
    if (playerSelection === computerSelection) {
        roundResultText.textContent = `It is a Tie!`
    } else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
                playerSelection ==='scissors' && computerSelection === 'paper' ||
                playerSelection === 'paper' && computerSelection === 'rock') {
                playerScoreCount++
                playerScore.textContent = playerScoreCount
                roundResultText.textContent = `You Won! ${firstCharUpperCase(playerSelection)} > ${computerSelection}`

    } else {
        computerScoreCount++
        computerScore.textContent = computerScoreCount
        roundResultText.textContent = `You Lost! ${computerSelection} > ${playerSelection}!`
    }


}