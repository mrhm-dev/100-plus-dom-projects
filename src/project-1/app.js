/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler
const root = document.querySelector('#root');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');


window.onload = () => {
    main();
}


function main() {

    const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
}


btn.addEventListener('click', () => {
        main()
})

// step 2 - random color generator function
function generateRGBColor() {
	// rgb(0, 0, 0), rgb(255, 255, 255)
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `rgb(${red}, ${green}, ${blue})`;
}

// step 3 - collect all necessary references

// step 4 - handle the click event
