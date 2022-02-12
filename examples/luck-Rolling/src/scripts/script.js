'use strict';
import { randomMinMax, addClass } from './utils.js';

const resetBtn = document.querySelector('.reset-game');
const rollDiceBtn = document.querySelector('.roll-dice');
const holdBtn = document.querySelector('.hold');

const diceImg = document.querySelector('.dice-img');


let activePlayerSelector, activePlayerContainer, activePlayerCurrentScore, activePlayerFinalScore;

function updateValues() {
    activePlayerContainer =
        document.querySelector(activePlayerSelector);

    activePlayerCurrentScore =
        activePlayerContainer.querySelector('.current-score');

    activePlayerFinalScore =
        activePlayerContainer.querySelector('.final-score');
}

function swapActive() {
    activePlayerContainer.parentNode.classList.remove('active');
    activePlayerCurrentScore.innerHTML = 0;
    activePlayerSelector =
        (activePlayerSelector === '.player-one') ? '.player-two' : '.player-one';
    updateValues();
    document.querySelector(activePlayerSelector).parentNode.classList.add('active');
    diceImg.classList.add('flicker');
}

function toss() {
    activePlayerSelector = (randomMinMax(1, 2) == 1) ? '.player-one' : '.player-two';
    document.querySelector(activePlayerSelector).parentNode.classList.add('active');
}

toss();
updateValues();

//handling click events
rollDiceBtn.onclick = () => {
    diceImg.classList.remove('flicker');
    let dice = randomMinMax(1, 6);
    diceImg.src = `./assets/dices/dice-${dice}.png`;

    //altering active player
    if (dice === 1) {
        setTimeout(() => {//for user's visualizing[swap]
            swapActive();
        }, 400);
    }
    else {
        activePlayerCurrentScore.innerHTML =
            (+activePlayerCurrentScore.innerHTML) + dice;
    }
};

holdBtn.onclick = () => {
    activePlayerFinalScore.innerHTML =
        (+activePlayerFinalScore.innerHTML) +
        (+activePlayerCurrentScore.innerHTML);
    if (+activePlayerFinalScore.innerHTML >= 100) {
        activePlayerContainer.parentNode.classList.add('winner');
        rollDiceBtn.disabled = true;
        holdBtn.disabled = true;
        addClass(resetBtn, 'bounce-in-top', 3000);
    }
    else {
        swapActive();
        updateValues();
    }

};

resetBtn.onclick = () => {
    document.querySelectorAll('.current-score').forEach((element) => {
        element.innerHTML = 0;
    });
    document.querySelectorAll('.final-score').forEach((element) => {
        element.innerHTML = 0;
    });
    document.querySelectorAll('.container-player').forEach((container) => {
        container.classList.remove('active', 'winner');
    });
    rollDiceBtn.disabled = false;
    holdBtn.disabled = false;
    toss();
    updateValues();
    addClass(diceImg, 'flicker');
};


//modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModals = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

showModalBtns.forEach((item) => {
    item.onclick = () => {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    };
});

function closeModal() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

// handle click event
overlay.onclick = closeModal;
closeModals.onclick = closeModal;


//keyboard event
document.onkeydown = (event) => {
    if (event.code == 'Escape')
        overlay.click();
};