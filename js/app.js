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
const hungerStatEl = document.querySelector('#hunger-state')
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



/*----------------------------- Event Listeners -----------------------------*/



