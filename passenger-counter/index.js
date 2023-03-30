const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count ++
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}

let myPoints = 3

function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1
}