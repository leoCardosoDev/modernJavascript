/**
 * GAME FUNCTION:
 * - Player must guess a number between a min and max
 * - Player gets a certain amount of guesses
 * - Notify player of guess remaining
 * - notify the player of the correct answer if loose
 * - Let player choose to play again
 */
console.clear()
// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message')
// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// Listen Play Again
game.addEventListener('mousedown', e => {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})
// Listen for guess
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value)
    // Valiadte
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    //Check if won
    if (guess === winningNum) {
        // Game over - won
        let msg = `${winningNum} is correct, YOU WIN!`
        gameOver(true, msg)

    } else {
        // wrong number
        guessesLeft -= 1
        if (guessesLeft === 0) {
            // Game over - Lost
            let msg = `GAME OVER! YOU LOST The correct number was ${winningNum}`
            gameOver(false, msg)
        } else {
            // Game continues - answer wrong
            guessInput.style.borderColor = 'orange'
            guessInput.value = ''
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
        }
    }
})

// Gamer Over
function gameOver(won, msg) {
    let color
    won === true ? color = 'green' : color = 'red'
    // Disable Input
    guessInput.disabled = true
    guessInput.style.borderColor = color
    message.style.color = color
    setMessage(msg)

    // Play Again?
    guessBtn.value = 'Play Again?'
    guessBtn.className += 'play-again'
}
// Get Winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+min)
}

// Set Message
function setMessage(msg) {
    message.textContent = msg
}