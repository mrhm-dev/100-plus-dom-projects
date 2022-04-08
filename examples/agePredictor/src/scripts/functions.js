'use strict';

//utilities function
export function randomMinToMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



//shuffle
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
    }
    return array;
}



//add class
export function addClass(element, className, duration) {
    element.classList.add(className);
    if (duration) {
        setTimeout(_ => element.classList.remove(className), duration);
    }
}


//confetti 
export function startConfetti(duration) {
    const bodyWidth = document.body.clientWidth;
    const canvasTag = document.querySelector('canvas');
    canvasTag.classList.remove('display-none');
    canvasTag.setAttribute('id', 'my-canvas');
    function stopConfetti(confetti, duration) {
        setTimeout(_ => {
            confetti.clear();
            canvasTag.classList.add('display-none');
        }, duration);
    };

    if (bodyWidth >= 1200) {
        const confettiSettings = { "target": "my-canvas", "max": "200", "size": "1.5", "animate": true, "props": ["square"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "25", "rotate": true, "width": "2294", "height": "857", "start_from_edge": false, "respawn": true };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        stopConfetti(confetti, duration);

    } else if (bodyWidth >= 992) {
        const confettiSettings = { "target": "my-canvas", "max": "100", "size": "2", "animate": true, "props": ["square"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "40", "rotate": true, "width": "992", "height": "847", "start_from_edge": true, "respawn": true };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        stopConfetti(confetti, duration);

    } else if (bodyWidth >= 768) {
        const confettiSettings = { "target": "my-canvas", "max": "90", "size": "1.5", "animate": true, "props": ["square"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "40", "rotate": true, "width": "768", "height": "847", "start_from_edge": true, "respawn": true };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        stopConfetti(confetti, duration);

    } else if (bodyWidth >= 576) {
        const confettiSettings = { "target": "my-canvas", "max": "60", "size": "1.5", "animate": true, "props": ["square"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "40", "rotate": true, "width": "576", "height": "847", "start_from_edge": true, "respawn": true };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        stopConfetti(confetti, duration);

    } else {
        const confettiSettings = { "target": "my-canvas", "max": "55", "size": "1", "animate": true, "props": ["square"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "35", "rotate": true, "width": "400", "height": "847", "start_from_edge": true, "respawn": true };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        stopConfetti(confetti, duration);

    }

}



//graph
export function renderGraph(container, age, extender, limiterPrev = true, limiterNext = true, revealBtnId) {

    if (container.childNodes[1]) {
        container.removeChild(container.childNodes[1]);
    }
    const graphcontainer = document.createElement('div');
    graphcontainer.setAttribute('class', 'graphcontainer');

    const standard = +parseFloat(97 / (age + extender)).toFixed(5);

    const graph = document.createElement('div');
    graph.setAttribute('class', 'graph');

    let axis = document.createElement('div');
    axis.setAttribute('class', 'graph__axis');

    let plot = document.createElement('div');
    plot.setAttribute('class', 'graph__axis__plot');
    let plotHeight = standard * age;
    plot.style.height = plotHeight + '%';

    let icon = document.createElement('img');
    icon.setAttribute('class', 'graph__icon');
    icon.setAttribute('src', './assets/images/question.svg');
    icon.setAttribute('alt', 'question mark');
    plot.append(icon);

    if (limiterNext) {
        let limiterNext = document.createElement('div');
        limiterNext.setAttribute('class', 'limiternext');
        let randomExtend = randomMinToMax(1, extender);
        limiterNext.setAttribute('data-val', age + randomExtend);
        limiterNext.style.bottom = (age + randomExtend) * standard + '%';
        axis.append(limiterNext);
    }

    if (limiterPrev) {
        let limiterPrev = document.createElement('div');
        limiterPrev.setAttribute('class', 'limiterprev');
        let randomExtend = randomMinToMax(1, extender);
        limiterPrev.setAttribute('data-val', age - randomExtend);
        limiterPrev.style.bottom = (age - randomExtend) * standard + '%';
        axis.append(limiterPrev);
    }

    if (revealBtnId) {
        let revealBtn = document.createElement('button');
        revealBtn.setAttribute('class', 'btn-reveal');
        revealBtn.setAttribute('id', revealBtnId);
        revealBtn.innerHTML = "Reveal 🎊";
        graphcontainer.append(revealBtn);
    }
    axis.append(plot);
    graph.append(axis);
    graphcontainer.append(graph);
    container.append(graphcontainer);

}


//heroimage loading
export function startLoader() {
    const loaderHolder = document.querySelector('.loadholder');
    loaderHolder.classList.add('cover');
    loaderHolder.childNodes[0].classList.add('lds-hourglass');


}

export function afterLoad() {
    const loaderHolder = document.querySelector('.loadholder');
    loaderHolder.classList.remove('cover');
    loaderHolder.childNodes[0].classList.remove('lds-hourglass');

}


//image generator
export function generateImg(objBundle, imageHero) {
    const category = Object.keys(objBundle).sort(() => Math.random() - 0.5)[0];
    const obj = shuffle(Object.keys(objBundle[category]));

    const randomImage = obj[0];

    const path = `./assets/images/imgSource/${randomImage}.webp`;
    imageHero.src = path;

    const age = objBundle[category][randomImage];
    return age;
}