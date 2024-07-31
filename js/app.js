/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//Our global state object
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer, gameOver; //this will assign the `timer` AND `gameOver` a value of undefined.

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')

const playBtnEl = document.querySelector("#play")
const feedBtnEl = document.querySelector("#feed")
const sleepBtnEl = document.querySelector("#play")

const gameMessageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#restart')

console.log({
    boredomStatEl,
    hungerStatEl,
    sleepinessStatEl,
    playBtnEl,
    feedBtnEl,
    sleepBtnEl,
    gameMessageEl,
    resetBtnEl
})
/*-------------------------------- Functions --------------------------------*/

init()// the function call 

//Function declarations
function init() {
    console.log("Init working")
    resetBtnEl.classList.add("hidden")
    gameMessageEl.classList.add("hidden")
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    gameOver = false;
    timer = setInterval(runGame, 2000)
    render()
}


function runGame() {  
    console.log("game running")
    updateStates()
    checkGameOver()
    render()
}

function render() {
    console.log('content rendering')
    //display the state properties to the DOM
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepinessStatEl.textContent = state.sleepiness


    if (gameOver) {

        //display the hidden elements
        resetBtnEl.classList.remove('hidden')
        gameMessageEl.classList.remove('hidden')
        //clear the timer
        clearInterval(timer)
    }
}


//step 4 ----
function updateStates() {
// we need to target the global state properties

    state.boredom += randomInt()
    state.hunger += randomInt()
    state.sleepiness += randomInt()
    console.log(state)
}

function checkGameOver() {
    //check if the gameOver variable is true or false
    if(
        state.boredom >9 ||
        state.hunger >9 ||
        state.sleepiness >9
    ){
        gameOver = true
    }
}

//step 6
function playBtnClick() {
    state.boredom = 0
    render()
}

function feedBtnClick() {
    state.hunger = 0
    render()
}

function sleepBtnClick() {
    state.sleepiness = 0
    render()
}

//step7
function randomInt() {
    return Math.floor(Math.random() *4)
}

//step 5 -- 
/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)

resetBtnEl.addEventListener('click', init)