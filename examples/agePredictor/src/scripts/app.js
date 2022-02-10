'use strict';
import * as fn from './functions.js';
import { objBundle } from "./object.js";


const succcessColor = '#60b347';
const primaryColor = '#586ba4';

//handle collapsibles
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((item) => {
    item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
    });
});



//render image with obj age
const imageHero = document.querySelector('.heroimage');

let age = fn.generateImg(objBundle, imageHero);

fn.startLoader();
imageHero.onload = function () {
    fn.afterLoad();
};
//render graph into container

const containerHintOne = document.querySelector('.hints-one');
const containerHintTwo = document.querySelector('.hints-two');

fn.renderGraph(containerHintOne, age, 5, false, true, 'btn-revealOne');
fn.renderGraph(containerHintTwo, age, 5, true, true, 'btn-revealTwo');

let revealBtnOne = document.querySelector('#btn-revealOne');
let revealBtnTwo = document.querySelector('#btn-revealTwo');



// game points
const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');

const playAgainBtn = document.querySelector('.btn-playAgain');

const inputUser = document.querySelector('input.input-client');

const checkBtn = document.querySelector('.btn-check');

const message = document.querySelector('.message');

//reveal-btn click event
function revealTheBtn(reducer) {
    this.style.visibility = 'hidden';
    this.nextSibling.classList.add('filter-none');
    score.innerHTML = `${+(score.innerHTML) - reducer}`;
    fn.addClass(score, 'shake', 3000);
}


revealBtnOne.addEventListener('click', function () {
    revealTheBtn.call(this, 5);
});
revealBtnTwo.addEventListener('click', function () {
    revealTheBtn.call(this, 7);
});

//implementing enter keyboard button
inputUser.onkeyup = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkBtn.click();
    }
};

checkBtn.addEventListener('click', function () {
    if (age === inputUser.valueAsNumber) {
        document.body.style.background = succcessColor;
        //canvas render
        fn.startConfetti(8000);
        highScore.innerHTML =
            (+highScore.innerHTML < +score.innerHTML) ? score.innerHTML : highScore.innerHTML;
        fn.addClass(highScore, 'blink', 3000);
        message.innerHTML = `Congratulations, you guess it right 🎊🎊🎊`
        fn.addClass(message, 'scale-in-bottom', 3000);
        revealBtnOne.disabled = true;
        revealBtnTwo.disabled = true;
        if (revOne && revTwo) {
            revOne.disabled = true;
            revTwo.disabled = true;
        }
        fn.addClass(playAgainBtn, 'bounce-in-left', 20000);

    }
    else if
        (age > inputUser.valueAsNumber && inputUser.valueAsNumber > 0) {
        score.innerHTML = `${+(score.innerHTML) - 3}`;
        fn.addClass(score, 'shake', 3000);
        message.innerHTML = `Am i so little ? 🙄🙄`;
        fn.addClass(message, 'scale-in-bottom', 3000);
    }
    else if
        (age < inputUser.valueAsNumber && inputUser.valueAsNumber > 0) {
        score.innerHTML = `${+(score.innerHTML) - 3}`;
        fn.addClass(score, 'shake', 3000);
        message.innerHTML = `Too high, you hurt me. 😡😡`;
        fn.addClass(message, 'scale-in-bottom', 3000);

    } else {
        message.innerHTML = "Insert valid value. 🙏🙏🙏";
        fn.addClass(message, 'scale-in-bottom', 3000);
    }

});



//play again
let revOne, revTwo;
playAgainBtn.addEventListener('click', function () {

    score.innerHTML = '100';
    message.innerHTML = "start guessing 🎃🎃🎃.";
    document.body.style.background = primaryColor;
    age = fn.generateImg(objBundle, imageHero);
    //loading bar handling
    fn.startLoader();
    imageHero.onload = () => fn.afterLoad();
    fn.renderGraph(containerHintOne, age, 4, false, true, 'Btn-revealOne');
    fn.renderGraph(containerHintTwo, age, 4, true, true, 'Btn-revealTwo');

    // btn handleing
    revOne = document.getElementById('Btn-revealOne');
    revTwo = document.getElementById('Btn-revealTwo');
    revOne.addEventListener('click', function () {
        revealTheBtn.call(this, 5);
    });
    revTwo.addEventListener('click', function () {
        revealTheBtn.call(this, 7);
    });
    collapsibles.forEach((item) => {
        item.classList.remove('collapsible--expanded');
    });
    inputUser.value = "";
});



