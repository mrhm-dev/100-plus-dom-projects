'use strict';

import { removeClassFromNodelists } from './functions.js';
const collapsibles = document.querySelectorAll('.faq .faq__content__element__header');

collapsibles.forEach(item => {
    item.onclick = function (e) {
        e.stopPropagation();
        let parent = this.parentNode;
        if (parent.classList.contains('expan')) {
            removeClassFromNodelists(collapsibles, 'expan');
        } else {
            removeClassFromNodelists(collapsibles, 'expan');
            parent.classList.add('expan');
            this.querySelector('.faq-icon').src = './assets/minus-icon.svg';
        }
    };
});