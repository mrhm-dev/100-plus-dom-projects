
export function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function addClass(element, className, duration) {
    element.classList.remove(className);
    if (duration) {
        element.classList.add(className);
        setTimeout(() => {
            element.classList.remove(className);
        }, duration);
    }

    else element.classList.add(className);
}