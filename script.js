const buttons = document.querySelectorAll('[data-key]')
let result = document.querySelector('[result]')
let userInput = document.querySelector('[user-input]')
const clearAll = document.querySelector('[data-clear]')
const backSpace = document.querySelector('[data-delete]')
const negative = document.querySelector('[data-negative]')
const enter = document.querySelector('[data-enter]')

let userInputArr = []

// Input
// Delete
// Clear
// Calculate

// Event Listeners
startInteraction()
document.addEventListener('keydown',keyboardInteraction)
clearAll.addEventListener('click',clearDisplay)
enter.addEventListener('click',calculateDisplay)
backSpace.addEventListener('click',popDisplay)
negative.addEventListener('click',negDisplay)


function startInteraction() {
    buttonInteraction()
}

function buttonInteraction() {
    buttons.forEach(button => {
        if(!isNaN(button.dataset.key)){
            button.textContent = button.dataset.key
        }
        button.addEventListener('click', () => {
            pushDisplay(button.dataset.key)
        })
    })
    result.textContent = 0
    userInput.value = 0
}

function keyboardInteraction(pressed) {
    if(
    isNaN(pressed.key) == false ||
    pressed.key == '(' ||
    pressed.key == ')' ||
    pressed.key == '+' ||
    pressed.key == '-' ||
    pressed.key == '/' ||
    pressed.key == '*' ||
    pressed.key == '.'
    ){
        pushDisplay(pressed.key)
    }else if(pressed.key == 'C' || pressed.key == 'c'){
        clearDisplay()
    }else if(pressed.key == 'Backspace'){
        popDisplay()
    }else if(pressed.key == '=' || pressed.key == 'Enter'){
        calculateDisplay()
    }
}

function pushDisplay(input) {
    userInputArr.push(input)
    userInput.value = userInputArr.join('')
}

function clearDisplay(){
    result.textContent = 0
    userInputArr = []
    userInput.value = 0
}

function popDisplay(){
    userInputArr.pop()
    userInput.value = userInputArr.join('')
}

function calculateDisplay() {
    result.textContent = userInput.value
    userInput.value = eval(userInput.value)
    userInputArr = [eval(userInput.value)]
}

function negDisplay(){
    let temp = `(${userInputArr.join('')})`
    userInputArr = []
    userInputArr.push('-',temp)
    userInput.value = userInputArr.join('')
    console.log(userInputArr)
}