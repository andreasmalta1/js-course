let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let player = {
    name: "Andreas",
    chips: 200,

}

const messageEl = document.querySelector("#message-el")
const cardsEl = document.querySelector("#cards-el")
const sumEl = document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13) + 1
    if (randomNum > 10) {
        return 10
    }
    if (randomNum === 1){
        return 11
    }
    return randomNum
    
}

function startGame(){
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack"
        hasBlackjack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === false || hasBlackjack){
        return
    }
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}