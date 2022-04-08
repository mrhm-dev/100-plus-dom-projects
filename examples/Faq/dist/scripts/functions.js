export function removeClassFromNodelists(nodeLists, className) {
    nodeLists.forEach(element => {
        element.parentNode.classList.remove(className);
        element.querySelector('.faq-icon').src = './assets/plus-icon.svg';
    });
}